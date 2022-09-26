# vitepress-plugin-google-analytics

> Google analytics plugin

<p align="center">
 <!-- <img src="https://img.shields.io/npm/dm/vitepress-plugin-google-analytics.svg" alt="Downloads"></a> -->
  <a href="https://www.npmjs.com/package/vitepress-plugin-google-analytics"><img src="https://img.shields.io/npm/v/vitepress-plugin-google-analytics.svg" alt="Version"></a>
  <a href="https://github.com/vuejs/vitepress-plugin-google-analytics/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vitepress-plugin-google-analytics.svg" alt="License"></a>
</p>

## Install
```sh
yarn add -D vitepress-plugin-google-analytics
# OR npm install -D vitepress-plugin-google-analytics
```

## Usage
```ts
// .vitepress/theme/index.ts

import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-******', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
  }
}
```

Then you can use `Google analytics` in `production`! 🎉