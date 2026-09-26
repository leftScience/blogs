<template>
  <div class="orbit" aria-hidden="true">
    <div class="halo" />
    <div class="scene">
      <div class="ring r1"><span /></div>
      <div class="ring r2"><span /></div>
      <div class="ring r3"><span /></div>
    </div>
    <div class="core"><span>A</span></div>
    <span class="label java">Java</span>
    <span class="label go">Golang</span>
    <span class="label rust">Rust</span>
  </div>
</template>

<style scoped>
.orbit {
  position: absolute;
  inset: 0;
  color: var(--orbit-ink, #6f5432);
}

.halo {
  position: absolute;
  inset: 8%;
  border-radius: 50%;
  background: radial-gradient(circle, var(--orbit-glow, rgba(176, 137, 88, 0.45)), transparent 68%);
  filter: blur(6px);
}

.scene {
  position: absolute;
  inset: 0;
  perspective: 820px;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, currentColor 42%, transparent);
  box-shadow: inset 0 0 24px color-mix(in srgb, currentColor 12%, transparent);
}

.ring span {
  position: absolute;
  top: -5px;
  left: 50%;
  width: 9px;
  height: 9px;
  margin-left: -4.5px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 14px 3px currentColor;
}

.r1 {
  inset: 8%;
  animation: spin-a 18s linear infinite;
}

.r2 {
  inset: 16%;
  animation: spin-b 26s linear infinite;
}

.r3 {
  inset: 18% 8%;
  animation: spin-c 32s linear infinite;
}

.core {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.core span {
  display: grid;
  place-items: center;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  background: radial-gradient(circle, var(--vp-c-bg) 0 58%, transparent 72%);
  font-family: 'Iowan Old Style', 'Palatino Linotype', Palatino, serif;
  font-size: 3.6rem;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
}

.label {
  position: absolute;
  z-index: 3;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--orbit-ink, #6f5432);
}

.java {
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
}

.go {
  right: 2%;
  bottom: 16%;
}

.rust {
  left: 2%;
  bottom: 16%;
}

@keyframes spin-a {
  from {
    transform: rotateX(74deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(74deg) rotateZ(360deg);
  }
}

@keyframes spin-b {
  from {
    transform: rotateX(74deg) rotateZ(58deg);
  }
  to {
    transform: rotateX(74deg) rotateZ(-302deg);
  }
}

@keyframes spin-c {
  from {
    transform: rotateX(62deg) rotateY(28deg) rotateZ(12deg);
  }
  to {
    transform: rotateX(62deg) rotateY(28deg) rotateZ(372deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ring {
    animation: none;
  }

  .r1 {
    transform: rotateX(74deg);
  }

  .r2 {
    transform: rotateX(74deg) rotateZ(58deg);
  }

  .r3 {
    transform: rotateX(62deg) rotateY(28deg);
  }
}
</style>
