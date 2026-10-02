import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const upstream = "http://catx.top:19000"
const urlPattern = /\/media\/(knowledge\/[^)\s"'<>]+)/g
const skipDirs = new Set(["node_modules", ".vitepress", "public", ".git"])

async function markdownFiles(dir, found = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) await markdownFiles(full, found)
    else if (entry.name.endsWith(".md")) found.push(full)
  }
  return found
}

async function collectKeys() {
  const keys = new Set()
  for (const file of await markdownFiles(root)) {
    const text = await readFile(file, "utf8")
    for (const match of text.matchAll(urlPattern)) {
      const key = decodeURIComponent(match[1])
      if (key.split("/").some((part) => part === "." || part === "..")) {
        throw new Error(`unsafe media path in ${file}: ${key}`)
      }
      keys.add(key)
    }
  }
  return [...keys]
}

async function download(key) {
  const destination = path.join(root, "public", "media", key)
  try {
    const existing = await stat(destination)
    if (existing.size > 0) return "cached"
  } catch {
    // not downloaded yet
  }
  const response = await fetch(`${upstream}/${key.split("/").map(encodeURIComponent).join("/")}`)
  if (!response.ok) throw new Error(`${response.status} ${key}`)
  const type = response.headers.get("content-type") || ""
  if (!type.startsWith("image/")) throw new Error(`${type || "unknown type"} ${key}`)
  const data = Buffer.from(await response.arrayBuffer())
  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, data)
  return "fetched"
}

async function main() {
  const keys = await collectKeys()
  let fetched = 0
  let cached = 0
  const queue = [...keys]
  const workers = Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const key = queue.shift()
      const result = await download(key)
      if (result === "fetched") fetched += 1
      else cached += 1
    }
  })
  await Promise.all(workers)
  console.log(`media: ${fetched} fetched, ${cached} cached, ${keys.length} total`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
