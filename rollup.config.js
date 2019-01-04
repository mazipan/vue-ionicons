import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import bundleSize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import multiEntry from "rollup-plugin-multi-entry"
import pkg from './package.json'

const isProduction = !process.env.ROLLUP_WATCH // eslint-disable-line
const generatePlugins = () => {
  return [
    multiEntry(),
    resolve(),
    css(),
    vue({
      css: false,
      template: {
        isProduction,
        compilerOptions: { 
          preserveWhitespace: false 
        }
      }
    }),
    buble(),
    bundleSize(),
  ]
}

export default [
{
  input: 'dist/ios-add-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-add-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-add-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-add-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-add.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-add.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-airplane.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-airplane.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-alarm.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-alarm.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-albums.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-albums.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-alert.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-alert.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-american-football.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-american-football.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-aperture.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-aperture.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-analytics.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-analytics.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-apps.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-apps.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-appstore.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-appstore.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-archive.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-archive.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-back.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-back.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropdown-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropdown-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropdown.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropdown.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropleft-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropleft-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropleft.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropleft.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropright-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropright-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropright.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropright.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropup-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropup-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-dropup.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-dropup.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-forward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-forward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-round-back.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-round-back.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-round-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-round-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-round-forward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-round-forward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-round-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-round-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-arrow-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-arrow-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-at.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-at.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-attach.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-attach.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-backspace.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-backspace.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-barcode.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-barcode.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-baseball.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-baseball.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-basket.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-basket.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-basketball.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-basketball.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-battery-charging.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-battery-charging.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-battery-dead.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-battery-dead.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-battery-full.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-battery-full.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-beaker.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-beaker.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bed.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bed.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-beer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-beer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bicycle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bicycle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bluetooth.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bluetooth.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-boat.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-boat.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-body.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-body.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bonfire.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bonfire.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-book.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-book.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bookmark.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bookmark.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bookmarks.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bookmarks.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bowtie.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bowtie.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-briefcase.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-briefcase.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-browsers.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-browsers.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-brush.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-brush.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bug.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bug.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-build.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-build.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bulb.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bulb.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-bus.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-bus.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-business.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-business.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cafe.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cafe.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-calculator.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-calculator.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-calendar.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-calendar.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-camera.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-camera.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-call.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-call.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-car.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-car.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-card.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-card.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cart.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cart.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cash.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cash.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cellular.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cellular.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-chatboxes.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-chatboxes.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-chatbubbles.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-chatbubbles.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-checkbox-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-checkbox-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-checkbox.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-checkbox.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-checkmark-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-checkmark-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-checkmark-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-checkmark-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-checkmark.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-checkmark.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-clipboard.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-clipboard.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-clock.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-clock.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-close-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-close-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-close-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-close-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-close.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-close.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloud-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloud-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloud-done.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloud-done.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloud-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloud-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloud-download.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloud-download.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloud-upload.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloud-upload.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloud.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloud.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloudy-night.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloudy-night.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cloudy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cloudy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-code-download.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-code-download.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-code-working.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-code-working.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-code.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-code.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cog.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cog.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-color-fill.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-color-fill.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-color-filter.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-color-filter.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-color-palette.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-color-palette.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-color-wand.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-color-wand.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-compass.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-compass.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-construct.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-construct.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-contact.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-contact.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-contacts.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-contacts.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-contract.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-contract.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-contrast.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-contrast.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-copy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-copy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-create.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-create.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-crop.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-crop.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cube.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cube.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-cut.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-cut.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-desktop.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-desktop.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-disc.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-disc.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-document.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-document.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-done-all.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-done-all.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-download.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-download.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-easel.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-easel.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-egg.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-egg.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-exit.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-exit.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-expand.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-expand.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-eye-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-eye-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-eye.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-eye.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-fastforward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-fastforward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-female.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-female.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-filing.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-filing.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-film.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-film.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-finger-print.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-finger-print.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-fitness.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-fitness.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-flag.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-flag.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-flame.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-flame.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-flash-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-flash-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-flash.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-flash.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-flashlight.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-flashlight.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-flask.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-flask.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-flower.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-flower.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-folder-open.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-folder-open.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-folder.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-folder.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-football.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-football.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-funnel.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-funnel.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-gift.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-gift.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-git-branch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-git-branch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-git-commit.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-git-commit.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-git-compare.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-git-compare.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-git-merge.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-git-merge.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-git-network.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-git-network.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-git-pull-request.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-git-pull-request.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-glasses.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-glasses.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-globe.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-globe.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-grid.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-grid.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-hammer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-hammer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-hand.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-hand.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-happy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-happy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-headset.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-headset.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-heart-dislike.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-heart-dislike.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-heart-empty.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-heart-empty.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-heart-half.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-heart-half.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-heart.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-heart.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-help-buoy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-help-buoy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-help-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-help-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-help-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-help-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-help.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-help.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-home.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-home.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-hourglass.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-hourglass.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-ice-cream.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-ice-cream.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-image.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-image.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-images.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-images.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-infinite.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-infinite.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-information-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-information-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-information-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-information-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-information.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-information.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-jet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-jet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-journal.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-journal.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-key.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-key.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-keypad.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-keypad.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-laptop.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-laptop.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-leaf.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-leaf.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-link.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-link.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-list-box.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-list-box.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-list.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-list.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-locate.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-locate.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-lock.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-lock.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-log-in.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-log-in.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-log-out.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-log-out.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-magnet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-magnet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-mail-open.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-mail-open.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-mail-unread.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-mail-unread.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-mail.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-mail.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-male.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-male.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-man.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-man.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-map.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-map.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-medal.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-medal.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-medical.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-medical.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-medkit.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-medkit.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-megaphone.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-megaphone.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-menu.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-menu.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-mic-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-mic-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-mic.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-mic.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-microphone.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-microphone.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-moon.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-moon.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-more.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-more.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-move.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-move.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-musical-note.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-musical-note.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-musical-notes.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-musical-notes.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-navigate.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-navigate.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-notifications-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-notifications-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-notifications-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-notifications-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-notifications.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-notifications.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-nuclear.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-nuclear.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-nutrition.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-nutrition.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-open.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-open.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-options.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-options.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-outlet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-outlet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-paper-plane.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-paper-plane.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-paper.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-paper.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-partly-sunny.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-partly-sunny.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pause.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pause.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-paw.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-paw.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-people.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-people.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-person-add.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-person-add.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-person.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-person.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-phone-landscape.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-phone-landscape.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-phone-portrait.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-phone-portrait.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-photos.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-photos.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pie.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pie.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pin.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pin.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pint.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pint.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pizza.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pizza.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-planet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-planet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-play-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-play-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-play.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-play.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-podium.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-podium.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-power.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-power.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pricetag.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pricetag.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pricetags.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pricetags.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-print.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-print.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-pulse.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-pulse.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-qr-scanner.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-qr-scanner.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-quote.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-quote.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-radio-button-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-radio-button-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-radio-button-on.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-radio-button-on.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-radio.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-radio.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-rainy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-rainy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-recording.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-recording.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-redo.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-redo.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-refresh-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-refresh-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-refresh.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-refresh.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-remove-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-remove-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-remove-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-remove-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-remove.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-remove.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-reorder.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-reorder.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-repeat.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-repeat.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-resize.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-resize.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-restaurant.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-restaurant.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-return-left.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-return-left.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-return-right.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-return-right.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-reverse-camera.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-reverse-camera.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-rewind.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-rewind.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-ribbon.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-ribbon.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-rocket.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-rocket.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-rose.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-rose.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-sad.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-sad.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-save.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-save.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-school.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-school.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-search.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-search.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-send.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-send.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-settings.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-settings.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-share-alt.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-share-alt.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-share.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-share.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-shirt.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-shirt.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-shuffle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-shuffle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-skip-backward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-skip-backward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-skip-forward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-skip-forward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-snow.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-snow.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-speedometer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-speedometer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-square-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-square-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-square.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-square.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-star-half.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-star-half.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-star-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-star-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-star.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-star.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-stats.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-stats.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-stopwatch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-stopwatch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-subway.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-subway.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-sunny.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-sunny.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-swap.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-swap.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-switch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-switch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-sync.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-sync.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-tablet-landscape.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-tablet-landscape.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-tablet-portrait.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-tablet-portrait.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-tennisball.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-tennisball.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-text.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-text.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-thermometer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-thermometer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-thumbs-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-thumbs-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-thumbs-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-thumbs-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-thunderstorm.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-thunderstorm.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-time.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-time.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-timer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-timer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-today.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-today.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-train.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-train.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-transgender.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-transgender.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-trash.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-trash.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-trending-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-trending-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-trending-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-trending-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-trophy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-trophy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-tv.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-tv.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-umbrella.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-umbrella.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-undo.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-undo.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-unlock.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-unlock.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-videocam.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-videocam.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-volume-high.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-volume-high.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-volume-low.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-volume-low.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-volume-mute.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-volume-mute.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-volume-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-volume-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-walk.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-walk.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-wallet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-wallet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-warning.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-warning.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-watch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-watch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-water.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-water.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-wifi.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-wifi.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-wine.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-wine.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/ios-woman.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/ios-woman.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-android.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-android.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-angular.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-angular.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-apple.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-apple.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-bitbucket.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-bitbucket.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-bitcoin.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-bitcoin.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-buffer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-buffer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-chrome.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-chrome.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-closed-captioning.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-closed-captioning.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-codepen.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-codepen.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-css3.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-css3.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-designernews.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-designernews.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-dribbble.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-dribbble.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-dropbox.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-dropbox.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-euro.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-euro.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-facebook.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-facebook.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-flickr.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-flickr.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-foursquare.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-foursquare.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-freebsd-devil.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-freebsd-devil.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-game-controller-a.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-game-controller-a.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-game-controller-b.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-game-controller-b.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-github.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-github.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-google.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-google.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-googleplus.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-googleplus.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-hackernews.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-hackernews.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-html5.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-html5.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-instagram.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-instagram.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-ionic.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-ionic.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-ionitron.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-ionitron.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-javascript.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-javascript.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-linkedin.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-linkedin.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-markdown.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-markdown.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-model-s.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-model-s.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-no-smoking.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-no-smoking.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-nodejs.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-nodejs.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-npm.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-npm.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-octocat.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-octocat.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-pinterest.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-pinterest.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-playstation.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-playstation.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-polymer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-polymer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-python.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-python.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-reddit.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-reddit.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-rss.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-rss.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-sass.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-sass.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-skype.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-skype.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-slack.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-slack.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-snapchat.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-snapchat.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-steam.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-steam.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-tumblr.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-tumblr.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-twitch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-twitch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-twitter.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-twitter.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-tux.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-tux.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-usd.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-usd.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-vimeo.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-vimeo.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-vk.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-vk.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-whatsapp.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-whatsapp.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-windows.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-windows.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-wordpress.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-wordpress.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-xbox.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-xbox.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-xing.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-xing.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-yahoo.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-yahoo.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-yen.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-yen.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/logo-youtube.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/logo-youtube.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-add-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-add-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-add-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-add-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-add.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-add.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-airplane.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-airplane.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-alarm.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-alarm.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-albums.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-albums.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-alert.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-alert.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-american-football.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-american-football.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-analytics.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-analytics.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-aperture.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-aperture.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-apps.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-apps.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-appstore.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-appstore.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-archive.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-archive.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-back.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-back.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropdown-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropdown-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropdown.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropdown.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropleft-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropleft-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropleft.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropleft.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropright-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropright-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropright.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropright.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropup-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropup-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-dropup.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-dropup.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-forward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-forward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-round-back.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-round-back.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-round-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-round-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-round-forward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-round-forward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-round-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-round-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-arrow-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-arrow-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-at.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-at.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-attach.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-attach.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-backspace.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-backspace.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-barcode.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-barcode.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-baseball.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-baseball.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-basket.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-basket.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-basketball.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-basketball.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-battery-charging.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-battery-charging.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-battery-dead.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-battery-dead.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-battery-full.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-battery-full.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-beaker.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-beaker.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bed.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bed.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-beer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-beer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bicycle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bicycle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bluetooth.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bluetooth.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-boat.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-boat.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-body.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-body.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bonfire.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bonfire.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-book.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-book.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bookmark.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bookmark.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bookmarks.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bookmarks.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bowtie.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bowtie.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-briefcase.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-briefcase.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-browsers.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-browsers.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-brush.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-brush.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bug.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bug.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-build.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-build.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bulb.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bulb.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-bus.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-bus.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-business.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-business.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cafe.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cafe.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-calculator.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-calculator.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-calendar.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-calendar.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-call.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-call.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-camera.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-camera.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-car.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-car.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-card.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-card.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cart.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cart.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cash.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cash.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cellular.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cellular.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-chatboxes.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-chatboxes.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-chatbubbles.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-chatbubbles.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-checkbox-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-checkbox-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-checkbox.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-checkbox.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-checkmark-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-checkmark-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-checkmark.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-checkmark.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-checkmark-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-checkmark-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-clipboard.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-clipboard.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-clock.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-clock.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-close-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-close-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-close-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-close-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-close.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-close.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloud-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloud-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloud-done.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloud-done.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloud-download.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloud-download.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloud-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloud-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloud-upload.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloud-upload.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloud.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloud.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloudy-night.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloudy-night.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cloudy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cloudy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-code-download.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-code-download.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-code-working.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-code-working.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-code.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-code.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cog.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cog.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-color-fill.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-color-fill.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-color-filter.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-color-filter.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-color-palette.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-color-palette.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-color-wand.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-color-wand.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-compass.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-compass.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-construct.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-construct.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-contact.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-contact.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-contacts.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-contacts.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-contract.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-contract.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-contrast.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-contrast.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-copy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-copy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-create.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-create.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-crop.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-crop.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cube.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cube.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-cut.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-cut.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-desktop.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-desktop.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-disc.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-disc.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-document.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-document.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-done-all.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-done-all.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-download.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-download.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-easel.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-easel.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-egg.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-egg.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-exit.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-exit.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-expand.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-expand.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-eye-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-eye-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-eye.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-eye.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-fastforward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-fastforward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-female.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-female.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-filing.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-filing.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-film.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-film.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-finger-print.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-finger-print.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-fitness.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-fitness.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-flag.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-flag.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-flame.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-flame.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-flash-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-flash-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-flash.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-flash.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-flashlight.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-flashlight.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-flask.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-flask.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-flower.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-flower.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-folder-open.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-folder-open.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-folder.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-folder.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-football.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-football.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-funnel.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-funnel.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-gift.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-gift.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-git-branch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-git-branch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-git-commit.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-git-commit.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-git-compare.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-git-compare.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-git-merge.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-git-merge.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-git-network.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-git-network.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-git-pull-request.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-git-pull-request.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-glasses.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-glasses.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-globe.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-globe.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-grid.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-grid.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-hammer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-hammer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-hand.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-hand.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-happy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-happy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-headset.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-headset.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-heart-dislike.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-heart-dislike.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-heart-empty.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-heart-empty.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-heart-half.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-heart-half.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-heart.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-heart.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-help-buoy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-help-buoy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-help-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-help-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-help-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-help-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-help.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-help.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-home.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-home.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-hourglass.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-hourglass.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-ice-cream.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-ice-cream.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-image.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-image.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-images.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-images.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-infinite.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-infinite.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-information-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-information-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-information-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-information-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-information.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-information.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-jet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-jet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-journal.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-journal.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-key.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-key.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-keypad.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-keypad.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-laptop.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-laptop.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-leaf.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-leaf.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-link.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-link.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-list-box.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-list-box.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-list.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-list.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-locate.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-locate.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-lock.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-lock.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-log-in.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-log-in.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-log-out.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-log-out.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-magnet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-magnet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-mail-open.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-mail-open.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-mail-unread.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-mail-unread.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-mail.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-mail.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-male.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-male.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-man.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-man.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-map.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-map.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-medal.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-medal.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-medical.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-medical.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-medkit.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-medkit.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-megaphone.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-megaphone.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-menu.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-menu.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-mic-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-mic-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-mic.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-mic.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-microphone.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-microphone.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-moon.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-moon.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-more.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-more.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-move.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-move.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-musical-note.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-musical-note.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-musical-notes.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-musical-notes.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-navigate.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-navigate.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-notifications-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-notifications-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-notifications-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-notifications-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-notifications.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-notifications.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-nuclear.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-nuclear.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-nutrition.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-nutrition.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-open.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-open.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-options.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-options.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-outlet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-outlet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-paper-plane.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-paper-plane.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-paper.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-paper.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-partly-sunny.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-partly-sunny.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pause.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pause.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-paw.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-paw.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-people.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-people.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-person-add.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-person-add.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-person.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-person.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-phone-landscape.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-phone-landscape.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-phone-portrait.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-phone-portrait.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-photos.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-photos.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pie.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pie.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pin.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pin.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pint.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pint.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pizza.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pizza.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-planet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-planet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-play-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-play-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-podium.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-podium.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-play.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-play.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-power.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-power.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pricetag.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pricetag.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pricetags.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pricetags.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-print.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-print.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-pulse.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-pulse.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-qr-scanner.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-qr-scanner.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-quote.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-quote.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-radio-button-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-radio-button-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-radio-button-on.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-radio-button-on.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-radio.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-radio.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-rainy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-rainy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-recording.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-recording.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-redo.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-redo.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-refresh-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-refresh-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-refresh.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-refresh.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-remove-circle-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-remove-circle-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-remove-circle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-remove-circle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-remove.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-remove.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-reorder.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-reorder.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-repeat.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-repeat.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-resize.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-resize.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-restaurant.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-restaurant.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-return-left.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-return-left.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-return-right.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-return-right.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-reverse-camera.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-reverse-camera.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-rewind.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-rewind.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-ribbon.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-ribbon.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-rocket.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-rocket.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-rose.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-rose.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-sad.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-sad.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-save.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-save.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-school.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-school.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-search.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-search.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-send.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-send.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-settings.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-settings.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-share-alt.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-share-alt.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-share.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-share.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-shirt.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-shirt.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-shuffle.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-shuffle.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-skip-backward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-skip-backward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-skip-forward.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-skip-forward.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-snow.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-snow.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-speedometer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-speedometer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-square-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-square-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-square.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-square.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-star-half.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-star-half.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-star-outline.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-star-outline.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-star.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-star.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-stats.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-stats.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-stopwatch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-stopwatch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-subway.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-subway.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-sunny.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-sunny.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-swap.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-swap.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-switch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-switch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-sync.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-sync.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-tablet-landscape.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-tablet-landscape.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-tablet-portrait.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-tablet-portrait.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-tennisball.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-tennisball.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-text.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-text.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-thermometer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-thermometer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-thumbs-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-thumbs-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-thumbs-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-thumbs-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-thunderstorm.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-thunderstorm.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-time.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-time.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-timer.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-timer.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-today.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-today.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-train.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-train.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-transgender.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-transgender.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-trash.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-trash.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-trending-down.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-trending-down.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-trending-up.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-trending-up.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-trophy.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-trophy.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-tv.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-tv.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-umbrella.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-umbrella.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-undo.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-undo.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-unlock.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-unlock.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-videocam.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-videocam.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-volume-high.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-volume-high.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-volume-low.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-volume-low.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-volume-mute.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-volume-mute.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-volume-off.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-volume-off.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-walk.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-walk.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-wallet.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-wallet.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-warning.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-warning.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-watch.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-watch.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-water.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-water.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-wifi.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-wifi.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-wine.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-wine.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
{
  input: 'dist/md-woman.vue',
  output: {
    globals: { 
      vue: 'Vue' 
    },
    file: 'dist/js/md-woman.js',
    format: 'cjs'
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
]