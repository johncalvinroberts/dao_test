module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dao_test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // vendor: [ 'element-ui' ], if include vendor it will be compiled into a static file
    babel: {
      "presets": [
        ["env", {
          "modules": false,
          "targets": {
            "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
          }
        }],
        "stage-2"
      ],
      "plugins": [
        "transform-runtime",
        ["component", [
          {
            "libraryName": "element-ui",
            "styleLibraryName": "../../../node_modules/element-theme-heyshop/theme"
          }
      ]]]
    }
  },
  plugins: [
    { src: '~/plugins/element-ui', ssr: true }
  ]
}
