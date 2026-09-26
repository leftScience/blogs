<template>
  <section class="friend-links" aria-labelledby="friend-links-title">
    <div class="container">
      <h2 id="friend-links-title">友情链接</h2>
      <ul>
        <li>
          <a href="https://toubi.vip" target="_blank" rel="noopener noreferrer">
            <span class="name">码农投币</span>
            <span class="host">toubi.vip</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.friend-links {
  padding: 3.5rem 1.5rem 0;
}

.container {
  margin: 0 auto;
  max-width: 72rem;
}

h2 {
  margin: 0 0 1.25rem;
  font-family: 'Songti SC', 'STSong', 'Noto Serif SC', Palatino, serif;
  font-size: 1.65rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}

ul {
  display: grid;
  grid-template-columns: minmax(0, 22rem);
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-height: 6.5rem;
  padding: 1.35rem 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  background-color: color-mix(in srgb, var(--vp-c-bg-elv) 72%, transparent);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background-color 0.35s ease;
}

a:hover {
  transform: translateY(-6px);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  box-shadow: 0 18px 40px rgba(90, 64, 32, 0.12);
}

:global(.dark) a:hover {
  box-shadow:
    0 18px 48px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(231, 211, 180, 0.2);
}

.name {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.host {
  color: var(--vp-c-brand-1);
  font-size: 0.95rem;
}

@media (min-width: 48rem) {
  .friend-links {
    padding: 4.5rem 3rem 0;
  }
}

@media (min-width: 60rem) {
  .friend-links {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  a {
    transition: none;
  }

  a:hover {
    transform: none;
  }
}
</style>
