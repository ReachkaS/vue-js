const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      css: {
        // Here you can add options if needed
      },
      postcss: {
        plugins: [
          require('tailwindcss')(),
          require('autoprefixer')(),
        ],
      },
    },
  },
})

