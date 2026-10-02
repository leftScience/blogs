const UPSTREAM = "http://catx.top:19000"
const MAX_BYTES = 20 * 1024 * 1024

module.exports = async function handler(request, response) {
  const parts = []
    .concat(request.query.path || [])
    .filter((part) => typeof part === "string")

  if (
    parts.length === 0 ||
    parts.some((part) => part === "." || part === ".." || part.includes("/") || part.includes("\\"))
  ) {
    response.status(400).end()
    return
  }

  const key = parts.join("/")
  if (!key.startsWith("knowledge/")) {
    response.status(404).end()
    return
  }

  const upstream = await fetch(`${UPSTREAM}/${parts.map(encodeURIComponent).join("/")}`)
  if (!upstream.ok) {
    response.status(upstream.status).end()
    return
  }

  const contentType = upstream.headers.get("content-type") || ""
  if (!contentType.startsWith("image/")) {
    response.status(415).end()
    return
  }

  const data = Buffer.from(await upstream.arrayBuffer())
  if (data.length > MAX_BYTES) {
    response.status(413).end()
    return
  }

  response.setHeader("Content-Type", contentType)
  response.setHeader("Cache-Control", "public, max-age=31536000, immutable")
  response.status(200).send(data)
}
