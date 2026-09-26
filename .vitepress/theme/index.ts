import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import FriendLinks from './components/FriendLinks.vue'
import HeroOrbit from './components/HeroOrbit.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () =>
        h('p', { class: 'axiom-kicker' }, 'Java  ·  Golang  ·  Rust'),
      'home-hero-image': () => h(HeroOrbit),
      'home-features-after': () => h(FriendLinks)
    })
  }
}
