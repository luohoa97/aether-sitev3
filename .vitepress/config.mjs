import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aether",
  description: "The Aether Programming Language",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/CONTENTS' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Get Started', link: '/CONTENTS' },
          { text: 'Functions', link: '/FUNCTIONS' },
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'About us', link: '/ABOUT' },
          { text: 'Our motives', link: '/MOTIVES' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/The-Baremetal/FLUXASSEMBLY' },
      { icon: 'discord', link: 'https://discord.gg/bu429hUaWw' },
      { icon: 'reddit', link: 'https://www.reddit.com/r/AetherProject/' },
      { icon: 'youtube', link: 'https://youtube.com/@aetherlang' }
    ],

    search: {
      provider: 'local'
    }
  },
})
