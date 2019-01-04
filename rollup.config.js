import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import bundleSize from 'rollup-plugin-filesize'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import multiEntry from "rollup-plugin-multi-entry"
import pkg from './package.json'

const isProduction = !process.env.ROLLUP_WATCH // eslint-disable-line
const generatePlugins = () => {
  return [
    multiEntry(),
    resolve(),
    commonjs(),
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
    format: 'umd',
    name: 'IosAddCircleOutlineIcon',
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
    format: 'umd',
    name: 'IosAddCircleIcon',
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
    format: 'umd',
    name: 'IosAddIcon',
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
    format: 'umd',
    name: 'IosAirplaneIcon',
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
    format: 'umd',
    name: 'IosAlarmIcon',
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
    format: 'umd',
    name: 'IosAlbumsIcon',
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
    format: 'umd',
    name: 'IosAlertIcon',
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
    format: 'umd',
    name: 'IosAmericanFootballIcon',
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
    format: 'umd',
    name: 'IosAnalyticsIcon',
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
    format: 'umd',
    name: 'IosApertureIcon',
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
    format: 'umd',
    name: 'IosAppsIcon',
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
    format: 'umd',
    name: 'IosAppstoreIcon',
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
    format: 'umd',
    name: 'IosArchiveIcon',
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
    format: 'umd',
    name: 'IosArrowBackIcon',
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
    format: 'umd',
    name: 'IosArrowDownIcon',
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
    format: 'umd',
    name: 'IosArrowDropdownCircleIcon',
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
    format: 'umd',
    name: 'IosArrowDropdownIcon',
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
    format: 'umd',
    name: 'IosArrowDropleftCircleIcon',
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
    format: 'umd',
    name: 'IosArrowDropleftIcon',
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
    format: 'umd',
    name: 'IosArrowDroprightCircleIcon',
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
    format: 'umd',
    name: 'IosArrowDroprightIcon',
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
    format: 'umd',
    name: 'IosArrowDropupCircleIcon',
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
    format: 'umd',
    name: 'IosArrowDropupIcon',
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
    format: 'umd',
    name: 'IosArrowForwardIcon',
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
    format: 'umd',
    name: 'IosArrowRoundBackIcon',
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
    format: 'umd',
    name: 'IosArrowRoundDownIcon',
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
    format: 'umd',
    name: 'IosArrowRoundForwardIcon',
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
    format: 'umd',
    name: 'IosArrowRoundUpIcon',
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
    format: 'umd',
    name: 'IosArrowUpIcon',
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
    format: 'umd',
    name: 'IosAtIcon',
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
    format: 'umd',
    name: 'IosAttachIcon',
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
    format: 'umd',
    name: 'IosBackspaceIcon',
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
    format: 'umd',
    name: 'IosBarcodeIcon',
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
    format: 'umd',
    name: 'IosBaseballIcon',
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
    format: 'umd',
    name: 'IosBasketIcon',
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
    format: 'umd',
    name: 'IosBasketballIcon',
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
    format: 'umd',
    name: 'IosBatteryChargingIcon',
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
    format: 'umd',
    name: 'IosBatteryDeadIcon',
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
    format: 'umd',
    name: 'IosBatteryFullIcon',
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
    format: 'umd',
    name: 'IosBeakerIcon',
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
    format: 'umd',
    name: 'IosBedIcon',
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
    format: 'umd',
    name: 'IosBeerIcon',
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
    format: 'umd',
    name: 'IosBicycleIcon',
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
    format: 'umd',
    name: 'IosBluetoothIcon',
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
    format: 'umd',
    name: 'IosBoatIcon',
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
    format: 'umd',
    name: 'IosBodyIcon',
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
    format: 'umd',
    name: 'IosBonfireIcon',
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
    format: 'umd',
    name: 'IosBookIcon',
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
    format: 'umd',
    name: 'IosBookmarkIcon',
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
    format: 'umd',
    name: 'IosBookmarksIcon',
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
    format: 'umd',
    name: 'IosBowtieIcon',
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
    format: 'umd',
    name: 'IosBriefcaseIcon',
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
    format: 'umd',
    name: 'IosBrowsersIcon',
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
    format: 'umd',
    name: 'IosBrushIcon',
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
    format: 'umd',
    name: 'IosBugIcon',
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
    format: 'umd',
    name: 'IosBuildIcon',
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
    format: 'umd',
    name: 'IosBulbIcon',
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
    format: 'umd',
    name: 'IosBusIcon',
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
    format: 'umd',
    name: 'IosBusinessIcon',
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
    format: 'umd',
    name: 'IosCafeIcon',
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
    format: 'umd',
    name: 'IosCalculatorIcon',
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
    format: 'umd',
    name: 'IosCalendarIcon',
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
    format: 'umd',
    name: 'IosCallIcon',
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
    format: 'umd',
    name: 'IosCameraIcon',
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
    format: 'umd',
    name: 'IosCarIcon',
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
    format: 'umd',
    name: 'IosCardIcon',
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
    format: 'umd',
    name: 'IosCartIcon',
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
    format: 'umd',
    name: 'IosCashIcon',
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
    format: 'umd',
    name: 'IosCellularIcon',
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
    format: 'umd',
    name: 'IosChatboxesIcon',
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
    format: 'umd',
    name: 'IosChatbubblesIcon',
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
    format: 'umd',
    name: 'IosCheckboxOutlineIcon',
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
    format: 'umd',
    name: 'IosCheckboxIcon',
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
    format: 'umd',
    name: 'IosCheckmarkCircleOutlineIcon',
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
    format: 'umd',
    name: 'IosCheckmarkCircleIcon',
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
    format: 'umd',
    name: 'IosCheckmarkIcon',
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
    format: 'umd',
    name: 'IosClipboardIcon',
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
    format: 'umd',
    name: 'IosClockIcon',
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
    format: 'umd',
    name: 'IosCloseCircleOutlineIcon',
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
    format: 'umd',
    name: 'IosCloseCircleIcon',
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
    format: 'umd',
    name: 'IosCloseIcon',
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
    format: 'umd',
    name: 'IosCloudCircleIcon',
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
    format: 'umd',
    name: 'IosCloudDoneIcon',
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
    format: 'umd',
    name: 'IosCloudDownloadIcon',
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
    format: 'umd',
    name: 'IosCloudOutlineIcon',
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
    format: 'umd',
    name: 'IosCloudUploadIcon',
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
    format: 'umd',
    name: 'IosCloudIcon',
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
    format: 'umd',
    name: 'IosCloudyNightIcon',
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
    format: 'umd',
    name: 'IosCloudyIcon',
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
    format: 'umd',
    name: 'IosCodeDownloadIcon',
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
    format: 'umd',
    name: 'IosCodeWorkingIcon',
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
    format: 'umd',
    name: 'IosCodeIcon',
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
    format: 'umd',
    name: 'IosCogIcon',
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
    format: 'umd',
    name: 'IosColorFillIcon',
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
    format: 'umd',
    name: 'IosColorFilterIcon',
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
    format: 'umd',
    name: 'IosColorPaletteIcon',
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
    format: 'umd',
    name: 'IosColorWandIcon',
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
    format: 'umd',
    name: 'IosCompassIcon',
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
    format: 'umd',
    name: 'IosConstructIcon',
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
    format: 'umd',
    name: 'IosContactIcon',
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
    format: 'umd',
    name: 'IosContactsIcon',
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
    format: 'umd',
    name: 'IosContractIcon',
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
    format: 'umd',
    name: 'IosContrastIcon',
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
    format: 'umd',
    name: 'IosCopyIcon',
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
    format: 'umd',
    name: 'IosCreateIcon',
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
    format: 'umd',
    name: 'IosCropIcon',
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
    format: 'umd',
    name: 'IosCubeIcon',
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
    format: 'umd',
    name: 'IosCutIcon',
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
    format: 'umd',
    name: 'IosDesktopIcon',
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
    format: 'umd',
    name: 'IosDiscIcon',
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
    format: 'umd',
    name: 'IosDocumentIcon',
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
    format: 'umd',
    name: 'IosDoneAllIcon',
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
    format: 'umd',
    name: 'IosDownloadIcon',
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
    format: 'umd',
    name: 'IosEaselIcon',
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
    format: 'umd',
    name: 'IosEggIcon',
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
    format: 'umd',
    name: 'IosExitIcon',
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
    format: 'umd',
    name: 'IosExpandIcon',
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
    format: 'umd',
    name: 'IosEyeOffIcon',
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
    format: 'umd',
    name: 'IosEyeIcon',
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
    format: 'umd',
    name: 'IosFastforwardIcon',
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
    format: 'umd',
    name: 'IosFemaleIcon',
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
    format: 'umd',
    name: 'IosFilingIcon',
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
    format: 'umd',
    name: 'IosFilmIcon',
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
    format: 'umd',
    name: 'IosFingerPrintIcon',
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
    format: 'umd',
    name: 'IosFitnessIcon',
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
    format: 'umd',
    name: 'IosFlagIcon',
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
    format: 'umd',
    name: 'IosFlameIcon',
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
    format: 'umd',
    name: 'IosFlashOffIcon',
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
    format: 'umd',
    name: 'IosFlashIcon',
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
    format: 'umd',
    name: 'IosFlashlightIcon',
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
    format: 'umd',
    name: 'IosFlaskIcon',
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
    format: 'umd',
    name: 'IosFlowerIcon',
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
    format: 'umd',
    name: 'IosFolderOpenIcon',
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
    format: 'umd',
    name: 'IosFolderIcon',
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
    format: 'umd',
    name: 'IosFootballIcon',
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
    format: 'umd',
    name: 'IosFunnelIcon',
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
    format: 'umd',
    name: 'IosGiftIcon',
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
    format: 'umd',
    name: 'IosGitBranchIcon',
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
    format: 'umd',
    name: 'IosGitCommitIcon',
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
    format: 'umd',
    name: 'IosGitCompareIcon',
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
    format: 'umd',
    name: 'IosGitMergeIcon',
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
    format: 'umd',
    name: 'IosGitNetworkIcon',
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
    format: 'umd',
    name: 'IosGitPullRequestIcon',
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
    format: 'umd',
    name: 'IosGlassesIcon',
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
    format: 'umd',
    name: 'IosGlobeIcon',
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
    format: 'umd',
    name: 'IosGridIcon',
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
    format: 'umd',
    name: 'IosHammerIcon',
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
    format: 'umd',
    name: 'IosHandIcon',
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
    format: 'umd',
    name: 'IosHappyIcon',
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
    format: 'umd',
    name: 'IosHeadsetIcon',
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
    format: 'umd',
    name: 'IosHeartDislikeIcon',
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
    format: 'umd',
    name: 'IosHeartEmptyIcon',
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
    format: 'umd',
    name: 'IosHeartHalfIcon',
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
    format: 'umd',
    name: 'IosHeartIcon',
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
    format: 'umd',
    name: 'IosHelpBuoyIcon',
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
    format: 'umd',
    name: 'IosHelpCircleOutlineIcon',
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
    format: 'umd',
    name: 'IosHelpCircleIcon',
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
    format: 'umd',
    name: 'IosHelpIcon',
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
    format: 'umd',
    name: 'IosHomeIcon',
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
    format: 'umd',
    name: 'IosHourglassIcon',
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
    format: 'umd',
    name: 'IosIceCreamIcon',
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
    format: 'umd',
    name: 'IosImageIcon',
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
    format: 'umd',
    name: 'IosImagesIcon',
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
    format: 'umd',
    name: 'IosInfiniteIcon',
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
    format: 'umd',
    name: 'IosInformationCircleOutlineIcon',
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
    format: 'umd',
    name: 'IosInformationCircleIcon',
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
    format: 'umd',
    name: 'IosInformationIcon',
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
    format: 'umd',
    name: 'IosJetIcon',
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
    format: 'umd',
    name: 'IosJournalIcon',
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
    format: 'umd',
    name: 'IosKeyIcon',
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
    format: 'umd',
    name: 'IosKeypadIcon',
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
    format: 'umd',
    name: 'IosLaptopIcon',
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
    format: 'umd',
    name: 'IosLeafIcon',
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
    format: 'umd',
    name: 'IosLinkIcon',
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
    format: 'umd',
    name: 'IosListBoxIcon',
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
    format: 'umd',
    name: 'IosListIcon',
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
    format: 'umd',
    name: 'IosLocateIcon',
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
    format: 'umd',
    name: 'IosLockIcon',
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
    format: 'umd',
    name: 'IosLogInIcon',
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
    format: 'umd',
    name: 'IosLogOutIcon',
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
    format: 'umd',
    name: 'IosMagnetIcon',
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
    format: 'umd',
    name: 'IosMailOpenIcon',
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
    format: 'umd',
    name: 'IosMailUnreadIcon',
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
    format: 'umd',
    name: 'IosMailIcon',
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
    format: 'umd',
    name: 'IosMaleIcon',
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
    format: 'umd',
    name: 'IosManIcon',
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
    format: 'umd',
    name: 'IosMapIcon',
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
    format: 'umd',
    name: 'IosMedalIcon',
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
    format: 'umd',
    name: 'IosMedicalIcon',
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
    format: 'umd',
    name: 'IosMedkitIcon',
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
    format: 'umd',
    name: 'IosMegaphoneIcon',
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
    format: 'umd',
    name: 'IosMenuIcon',
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
    format: 'umd',
    name: 'IosMicOffIcon',
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
    format: 'umd',
    name: 'IosMicIcon',
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
    format: 'umd',
    name: 'IosMicrophoneIcon',
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
    format: 'umd',
    name: 'IosMoonIcon',
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
    format: 'umd',
    name: 'IosMoreIcon',
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
    format: 'umd',
    name: 'IosMoveIcon',
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
    format: 'umd',
    name: 'IosMusicalNoteIcon',
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
    format: 'umd',
    name: 'IosMusicalNotesIcon',
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
    format: 'umd',
    name: 'IosNavigateIcon',
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
    format: 'umd',
    name: 'IosNotificationsOffIcon',
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
    format: 'umd',
    name: 'IosNotificationsOutlineIcon',
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
    format: 'umd',
    name: 'IosNotificationsIcon',
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
    format: 'umd',
    name: 'IosNuclearIcon',
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
    format: 'umd',
    name: 'IosNutritionIcon',
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
    format: 'umd',
    name: 'IosOpenIcon',
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
    format: 'umd',
    name: 'IosOptionsIcon',
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
    format: 'umd',
    name: 'IosOutletIcon',
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
    format: 'umd',
    name: 'IosPaperPlaneIcon',
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
    format: 'umd',
    name: 'IosPaperIcon',
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
    format: 'umd',
    name: 'IosPartlySunnyIcon',
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
    format: 'umd',
    name: 'IosPauseIcon',
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
    format: 'umd',
    name: 'IosPawIcon',
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
    format: 'umd',
    name: 'IosPeopleIcon',
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
    format: 'umd',
    name: 'IosPersonAddIcon',
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
    format: 'umd',
    name: 'IosPersonIcon',
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
    format: 'umd',
    name: 'IosPhoneLandscapeIcon',
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
    format: 'umd',
    name: 'IosPhonePortraitIcon',
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
    format: 'umd',
    name: 'IosPhotosIcon',
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
    format: 'umd',
    name: 'IosPieIcon',
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
    format: 'umd',
    name: 'IosPinIcon',
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
    format: 'umd',
    name: 'IosPintIcon',
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
    format: 'umd',
    name: 'IosPizzaIcon',
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
    format: 'umd',
    name: 'IosPlanetIcon',
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
    format: 'umd',
    name: 'IosPlayCircleIcon',
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
    format: 'umd',
    name: 'IosPlayIcon',
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
    format: 'umd',
    name: 'IosPodiumIcon',
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
    format: 'umd',
    name: 'IosPowerIcon',
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
    format: 'umd',
    name: 'IosPricetagIcon',
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
    format: 'umd',
    name: 'IosPricetagsIcon',
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
    format: 'umd',
    name: 'IosPrintIcon',
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
    format: 'umd',
    name: 'IosPulseIcon',
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
    format: 'umd',
    name: 'IosQrScannerIcon',
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
    format: 'umd',
    name: 'IosQuoteIcon',
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
    format: 'umd',
    name: 'IosRadioButtonOffIcon',
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
    format: 'umd',
    name: 'IosRadioButtonOnIcon',
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
    format: 'umd',
    name: 'IosRadioIcon',
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
    format: 'umd',
    name: 'IosRainyIcon',
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
    format: 'umd',
    name: 'IosRecordingIcon',
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
    format: 'umd',
    name: 'IosRedoIcon',
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
    format: 'umd',
    name: 'IosRefreshCircleIcon',
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
    format: 'umd',
    name: 'IosRefreshIcon',
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
    format: 'umd',
    name: 'IosRemoveCircleOutlineIcon',
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
    format: 'umd',
    name: 'IosRemoveCircleIcon',
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
    format: 'umd',
    name: 'IosRemoveIcon',
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
    format: 'umd',
    name: 'IosReorderIcon',
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
    format: 'umd',
    name: 'IosRepeatIcon',
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
    format: 'umd',
    name: 'IosResizeIcon',
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
    format: 'umd',
    name: 'IosRestaurantIcon',
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
    format: 'umd',
    name: 'IosReturnLeftIcon',
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
    format: 'umd',
    name: 'IosReturnRightIcon',
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
    format: 'umd',
    name: 'IosReverseCameraIcon',
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
    format: 'umd',
    name: 'IosRewindIcon',
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
    format: 'umd',
    name: 'IosRibbonIcon',
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
    format: 'umd',
    name: 'IosRocketIcon',
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
    format: 'umd',
    name: 'IosRoseIcon',
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
    format: 'umd',
    name: 'IosSadIcon',
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
    format: 'umd',
    name: 'IosSaveIcon',
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
    format: 'umd',
    name: 'IosSchoolIcon',
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
    format: 'umd',
    name: 'IosSearchIcon',
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
    format: 'umd',
    name: 'IosSendIcon',
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
    format: 'umd',
    name: 'IosSettingsIcon',
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
    format: 'umd',
    name: 'IosShareAltIcon',
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
    format: 'umd',
    name: 'IosShareIcon',
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
    format: 'umd',
    name: 'IosShirtIcon',
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
    format: 'umd',
    name: 'IosShuffleIcon',
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
    format: 'umd',
    name: 'IosSkipBackwardIcon',
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
    format: 'umd',
    name: 'IosSkipForwardIcon',
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
    format: 'umd',
    name: 'IosSnowIcon',
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
    format: 'umd',
    name: 'IosSpeedometerIcon',
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
    format: 'umd',
    name: 'IosSquareOutlineIcon',
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
    format: 'umd',
    name: 'IosSquareIcon',
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
    format: 'umd',
    name: 'IosStarHalfIcon',
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
    format: 'umd',
    name: 'IosStarOutlineIcon',
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
    format: 'umd',
    name: 'IosStarIcon',
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
    format: 'umd',
    name: 'IosStatsIcon',
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
    format: 'umd',
    name: 'IosStopwatchIcon',
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
    format: 'umd',
    name: 'IosSubwayIcon',
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
    format: 'umd',
    name: 'IosSunnyIcon',
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
    format: 'umd',
    name: 'IosSwapIcon',
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
    format: 'umd',
    name: 'IosSwitchIcon',
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
    format: 'umd',
    name: 'IosSyncIcon',
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
    format: 'umd',
    name: 'IosTabletLandscapeIcon',
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
    format: 'umd',
    name: 'IosTabletPortraitIcon',
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
    format: 'umd',
    name: 'IosTennisballIcon',
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
    format: 'umd',
    name: 'IosTextIcon',
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
    format: 'umd',
    name: 'IosThermometerIcon',
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
    format: 'umd',
    name: 'IosThumbsDownIcon',
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
    format: 'umd',
    name: 'IosThumbsUpIcon',
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
    format: 'umd',
    name: 'IosThunderstormIcon',
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
    format: 'umd',
    name: 'IosTimeIcon',
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
    format: 'umd',
    name: 'IosTimerIcon',
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
    format: 'umd',
    name: 'IosTodayIcon',
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
    format: 'umd',
    name: 'IosTrainIcon',
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
    format: 'umd',
    name: 'IosTransgenderIcon',
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
    format: 'umd',
    name: 'IosTrashIcon',
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
    format: 'umd',
    name: 'IosTrendingDownIcon',
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
    format: 'umd',
    name: 'IosTrendingUpIcon',
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
    format: 'umd',
    name: 'IosTrophyIcon',
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
    format: 'umd',
    name: 'IosTvIcon',
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
    format: 'umd',
    name: 'IosUmbrellaIcon',
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
    format: 'umd',
    name: 'IosUndoIcon',
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
    format: 'umd',
    name: 'IosUnlockIcon',
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
    format: 'umd',
    name: 'IosVideocamIcon',
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
    format: 'umd',
    name: 'IosVolumeHighIcon',
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
    format: 'umd',
    name: 'IosVolumeLowIcon',
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
    format: 'umd',
    name: 'IosVolumeMuteIcon',
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
    format: 'umd',
    name: 'IosVolumeOffIcon',
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
    format: 'umd',
    name: 'IosWalkIcon',
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
    format: 'umd',
    name: 'IosWalletIcon',
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
    format: 'umd',
    name: 'IosWarningIcon',
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
    format: 'umd',
    name: 'IosWatchIcon',
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
    format: 'umd',
    name: 'IosWaterIcon',
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
    format: 'umd',
    name: 'IosWifiIcon',
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
    format: 'umd',
    name: 'IosWineIcon',
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
    format: 'umd',
    name: 'IosWomanIcon',
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
    format: 'umd',
    name: 'LogoAndroidIcon',
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
    format: 'umd',
    name: 'LogoAngularIcon',
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
    format: 'umd',
    name: 'LogoAppleIcon',
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
    format: 'umd',
    name: 'LogoBitbucketIcon',
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
    format: 'umd',
    name: 'LogoBitcoinIcon',
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
    format: 'umd',
    name: 'LogoBufferIcon',
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
    format: 'umd',
    name: 'LogoChromeIcon',
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
    format: 'umd',
    name: 'LogoClosedCaptioningIcon',
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
    format: 'umd',
    name: 'LogoCodepenIcon',
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
    format: 'umd',
    name: 'LogoCss3Icon',
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
    format: 'umd',
    name: 'LogoDesignernewsIcon',
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
    format: 'umd',
    name: 'LogoDribbbleIcon',
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
    format: 'umd',
    name: 'LogoDropboxIcon',
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
    format: 'umd',
    name: 'LogoEuroIcon',
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
    format: 'umd',
    name: 'LogoFacebookIcon',
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
    format: 'umd',
    name: 'LogoFlickrIcon',
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
    format: 'umd',
    name: 'LogoFoursquareIcon',
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
    format: 'umd',
    name: 'LogoFreebsdDevilIcon',
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
    format: 'umd',
    name: 'LogoGameControllerAIcon',
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
    format: 'umd',
    name: 'LogoGameControllerBIcon',
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
    format: 'umd',
    name: 'LogoGithubIcon',
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
    format: 'umd',
    name: 'LogoGoogleIcon',
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
    format: 'umd',
    name: 'LogoGoogleplusIcon',
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
    format: 'umd',
    name: 'LogoHackernewsIcon',
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
    format: 'umd',
    name: 'LogoHtml5Icon',
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
    format: 'umd',
    name: 'LogoInstagramIcon',
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
    format: 'umd',
    name: 'LogoIonicIcon',
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
    format: 'umd',
    name: 'LogoIonitronIcon',
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
    format: 'umd',
    name: 'LogoJavascriptIcon',
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
    format: 'umd',
    name: 'LogoLinkedinIcon',
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
    format: 'umd',
    name: 'LogoMarkdownIcon',
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
    format: 'umd',
    name: 'LogoModelSIcon',
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
    format: 'umd',
    name: 'LogoNoSmokingIcon',
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
    format: 'umd',
    name: 'LogoNodejsIcon',
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
    format: 'umd',
    name: 'LogoNpmIcon',
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
    format: 'umd',
    name: 'LogoOctocatIcon',
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
    format: 'umd',
    name: 'LogoPinterestIcon',
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
    format: 'umd',
    name: 'LogoPlaystationIcon',
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
    format: 'umd',
    name: 'LogoPolymerIcon',
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
    format: 'umd',
    name: 'LogoPythonIcon',
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
    format: 'umd',
    name: 'LogoRedditIcon',
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
    format: 'umd',
    name: 'LogoRssIcon',
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
    format: 'umd',
    name: 'LogoSassIcon',
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
    format: 'umd',
    name: 'LogoSkypeIcon',
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
    format: 'umd',
    name: 'LogoSlackIcon',
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
    format: 'umd',
    name: 'LogoSnapchatIcon',
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
    format: 'umd',
    name: 'LogoSteamIcon',
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
    format: 'umd',
    name: 'LogoTumblrIcon',
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
    format: 'umd',
    name: 'LogoTuxIcon',
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
    format: 'umd',
    name: 'LogoTwitterIcon',
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
    format: 'umd',
    name: 'LogoTwitchIcon',
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
    format: 'umd',
    name: 'LogoUsdIcon',
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
    format: 'umd',
    name: 'LogoVimeoIcon',
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
    format: 'umd',
    name: 'LogoVkIcon',
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
    format: 'umd',
    name: 'LogoWhatsappIcon',
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
    format: 'umd',
    name: 'LogoWindowsIcon',
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
    format: 'umd',
    name: 'LogoWordpressIcon',
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
    format: 'umd',
    name: 'LogoXboxIcon',
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
    format: 'umd',
    name: 'LogoXingIcon',
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
    format: 'umd',
    name: 'LogoYahooIcon',
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
    format: 'umd',
    name: 'LogoYenIcon',
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
    format: 'umd',
    name: 'LogoYoutubeIcon',
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
    format: 'umd',
    name: 'MdAddCircleOutlineIcon',
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
    format: 'umd',
    name: 'MdAddCircleIcon',
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
    format: 'umd',
    name: 'MdAddIcon',
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
    format: 'umd',
    name: 'MdAirplaneIcon',
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
    format: 'umd',
    name: 'MdAlarmIcon',
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
    format: 'umd',
    name: 'MdAlbumsIcon',
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
    format: 'umd',
    name: 'MdAlertIcon',
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
    format: 'umd',
    name: 'MdAmericanFootballIcon',
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
    format: 'umd',
    name: 'MdAnalyticsIcon',
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
    format: 'umd',
    name: 'MdApertureIcon',
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
    format: 'umd',
    name: 'MdAppsIcon',
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
    format: 'umd',
    name: 'MdAppstoreIcon',
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
    format: 'umd',
    name: 'MdArchiveIcon',
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
    format: 'umd',
    name: 'MdArrowBackIcon',
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
    format: 'umd',
    name: 'MdArrowDownIcon',
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
    format: 'umd',
    name: 'MdArrowDropdownCircleIcon',
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
    format: 'umd',
    name: 'MdArrowDropdownIcon',
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
    format: 'umd',
    name: 'MdArrowDropleftCircleIcon',
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
    format: 'umd',
    name: 'MdArrowDropleftIcon',
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
    format: 'umd',
    name: 'MdArrowDroprightCircleIcon',
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
    format: 'umd',
    name: 'MdArrowDroprightIcon',
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
    format: 'umd',
    name: 'MdArrowDropupCircleIcon',
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
    format: 'umd',
    name: 'MdArrowDropupIcon',
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
    format: 'umd',
    name: 'MdArrowForwardIcon',
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
    format: 'umd',
    name: 'MdArrowRoundBackIcon',
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
    format: 'umd',
    name: 'MdArrowRoundDownIcon',
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
    format: 'umd',
    name: 'MdArrowRoundForwardIcon',
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
    format: 'umd',
    name: 'MdArrowRoundUpIcon',
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
    format: 'umd',
    name: 'MdArrowUpIcon',
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
    format: 'umd',
    name: 'MdAtIcon',
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
    format: 'umd',
    name: 'MdAttachIcon',
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
    format: 'umd',
    name: 'MdBackspaceIcon',
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
    format: 'umd',
    name: 'MdBarcodeIcon',
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
    format: 'umd',
    name: 'MdBaseballIcon',
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
    format: 'umd',
    name: 'MdBasketIcon',
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
    format: 'umd',
    name: 'MdBasketballIcon',
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
    format: 'umd',
    name: 'MdBatteryChargingIcon',
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
    format: 'umd',
    name: 'MdBatteryDeadIcon',
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
    format: 'umd',
    name: 'MdBatteryFullIcon',
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
    format: 'umd',
    name: 'MdBeakerIcon',
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
    format: 'umd',
    name: 'MdBedIcon',
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
    format: 'umd',
    name: 'MdBeerIcon',
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
    format: 'umd',
    name: 'MdBicycleIcon',
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
    format: 'umd',
    name: 'MdBluetoothIcon',
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
    format: 'umd',
    name: 'MdBoatIcon',
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
    format: 'umd',
    name: 'MdBodyIcon',
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
    format: 'umd',
    name: 'MdBonfireIcon',
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
    format: 'umd',
    name: 'MdBookIcon',
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
    format: 'umd',
    name: 'MdBookmarkIcon',
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
    format: 'umd',
    name: 'MdBookmarksIcon',
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
    format: 'umd',
    name: 'MdBowtieIcon',
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
    format: 'umd',
    name: 'MdBriefcaseIcon',
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
    format: 'umd',
    name: 'MdBrowsersIcon',
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
    format: 'umd',
    name: 'MdBrushIcon',
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
    format: 'umd',
    name: 'MdBugIcon',
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
    format: 'umd',
    name: 'MdBuildIcon',
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
    format: 'umd',
    name: 'MdBulbIcon',
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
    format: 'umd',
    name: 'MdBusIcon',
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
    format: 'umd',
    name: 'MdBusinessIcon',
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
    format: 'umd',
    name: 'MdCafeIcon',
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
    format: 'umd',
    name: 'MdCalculatorIcon',
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
    format: 'umd',
    name: 'MdCalendarIcon',
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
    format: 'umd',
    name: 'MdCallIcon',
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
    format: 'umd',
    name: 'MdCameraIcon',
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
    format: 'umd',
    name: 'MdCarIcon',
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
    format: 'umd',
    name: 'MdCardIcon',
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
    format: 'umd',
    name: 'MdCartIcon',
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
    format: 'umd',
    name: 'MdCashIcon',
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
    format: 'umd',
    name: 'MdCellularIcon',
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
    format: 'umd',
    name: 'MdChatboxesIcon',
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
    format: 'umd',
    name: 'MdChatbubblesIcon',
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
    format: 'umd',
    name: 'MdCheckboxOutlineIcon',
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
    format: 'umd',
    name: 'MdCheckboxIcon',
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
    format: 'umd',
    name: 'MdCheckmarkCircleOutlineIcon',
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
    format: 'umd',
    name: 'MdCheckmarkCircleIcon',
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
    format: 'umd',
    name: 'MdCheckmarkIcon',
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
    format: 'umd',
    name: 'MdClipboardIcon',
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
    format: 'umd',
    name: 'MdClockIcon',
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
    format: 'umd',
    name: 'MdCloseCircleOutlineIcon',
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
    format: 'umd',
    name: 'MdCloseCircleIcon',
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
    format: 'umd',
    name: 'MdCloseIcon',
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
    format: 'umd',
    name: 'MdCloudCircleIcon',
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
    format: 'umd',
    name: 'MdCloudDoneIcon',
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
    format: 'umd',
    name: 'MdCloudDownloadIcon',
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
    format: 'umd',
    name: 'MdCloudOutlineIcon',
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
    format: 'umd',
    name: 'MdCloudUploadIcon',
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
    format: 'umd',
    name: 'MdCloudIcon',
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
    format: 'umd',
    name: 'MdCloudyNightIcon',
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
    format: 'umd',
    name: 'MdCloudyIcon',
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
    format: 'umd',
    name: 'MdCodeDownloadIcon',
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
    format: 'umd',
    name: 'MdCodeWorkingIcon',
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
    format: 'umd',
    name: 'MdCodeIcon',
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
    format: 'umd',
    name: 'MdCogIcon',
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
    format: 'umd',
    name: 'MdColorFillIcon',
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
    format: 'umd',
    name: 'MdColorFilterIcon',
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
    format: 'umd',
    name: 'MdColorPaletteIcon',
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
    format: 'umd',
    name: 'MdColorWandIcon',
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
    format: 'umd',
    name: 'MdCompassIcon',
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
    format: 'umd',
    name: 'MdConstructIcon',
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
    format: 'umd',
    name: 'MdContactIcon',
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
    format: 'umd',
    name: 'MdContactsIcon',
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
    format: 'umd',
    name: 'MdContractIcon',
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
    format: 'umd',
    name: 'MdContrastIcon',
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
    format: 'umd',
    name: 'MdCopyIcon',
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
    format: 'umd',
    name: 'MdCreateIcon',
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
    format: 'umd',
    name: 'MdCropIcon',
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
    format: 'umd',
    name: 'MdCubeIcon',
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
    format: 'umd',
    name: 'MdCutIcon',
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
    format: 'umd',
    name: 'MdDesktopIcon',
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
    format: 'umd',
    name: 'MdDiscIcon',
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
    format: 'umd',
    name: 'MdDocumentIcon',
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
    format: 'umd',
    name: 'MdDoneAllIcon',
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
    format: 'umd',
    name: 'MdDownloadIcon',
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
    format: 'umd',
    name: 'MdEaselIcon',
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
    format: 'umd',
    name: 'MdEggIcon',
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
    format: 'umd',
    name: 'MdExitIcon',
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
    format: 'umd',
    name: 'MdExpandIcon',
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
    format: 'umd',
    name: 'MdEyeOffIcon',
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
    format: 'umd',
    name: 'MdEyeIcon',
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
    format: 'umd',
    name: 'MdFastforwardIcon',
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
    format: 'umd',
    name: 'MdFemaleIcon',
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
    format: 'umd',
    name: 'MdFilingIcon',
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
    format: 'umd',
    name: 'MdFilmIcon',
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
    format: 'umd',
    name: 'MdFingerPrintIcon',
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
    format: 'umd',
    name: 'MdFitnessIcon',
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
    format: 'umd',
    name: 'MdFlagIcon',
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
    format: 'umd',
    name: 'MdFlameIcon',
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
    format: 'umd',
    name: 'MdFlashOffIcon',
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
    format: 'umd',
    name: 'MdFlashIcon',
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
    format: 'umd',
    name: 'MdFlashlightIcon',
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
    format: 'umd',
    name: 'MdFlaskIcon',
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
    format: 'umd',
    name: 'MdFlowerIcon',
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
    format: 'umd',
    name: 'MdFolderOpenIcon',
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
    format: 'umd',
    name: 'MdFolderIcon',
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
    format: 'umd',
    name: 'MdFootballIcon',
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
    format: 'umd',
    name: 'MdFunnelIcon',
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
    format: 'umd',
    name: 'MdGiftIcon',
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
    format: 'umd',
    name: 'MdGitBranchIcon',
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
    format: 'umd',
    name: 'MdGitCommitIcon',
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
    format: 'umd',
    name: 'MdGitCompareIcon',
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
    format: 'umd',
    name: 'MdGitMergeIcon',
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
    format: 'umd',
    name: 'MdGitNetworkIcon',
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
    format: 'umd',
    name: 'MdGitPullRequestIcon',
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
    format: 'umd',
    name: 'MdGlassesIcon',
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
    format: 'umd',
    name: 'MdGlobeIcon',
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
    format: 'umd',
    name: 'MdGridIcon',
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
    format: 'umd',
    name: 'MdHammerIcon',
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
    format: 'umd',
    name: 'MdHandIcon',
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
    format: 'umd',
    name: 'MdHappyIcon',
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
    format: 'umd',
    name: 'MdHeadsetIcon',
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
    format: 'umd',
    name: 'MdHeartDislikeIcon',
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
    format: 'umd',
    name: 'MdHeartEmptyIcon',
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
    format: 'umd',
    name: 'MdHeartHalfIcon',
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
    format: 'umd',
    name: 'MdHeartIcon',
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
    format: 'umd',
    name: 'MdHelpBuoyIcon',
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
    format: 'umd',
    name: 'MdHelpCircleOutlineIcon',
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
    format: 'umd',
    name: 'MdHelpCircleIcon',
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
    format: 'umd',
    name: 'MdHelpIcon',
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
    format: 'umd',
    name: 'MdHomeIcon',
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
    format: 'umd',
    name: 'MdHourglassIcon',
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
    format: 'umd',
    name: 'MdIceCreamIcon',
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
    format: 'umd',
    name: 'MdImageIcon',
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
    format: 'umd',
    name: 'MdImagesIcon',
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
    format: 'umd',
    name: 'MdInfiniteIcon',
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
    format: 'umd',
    name: 'MdInformationCircleOutlineIcon',
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
    format: 'umd',
    name: 'MdInformationCircleIcon',
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
    format: 'umd',
    name: 'MdInformationIcon',
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
    format: 'umd',
    name: 'MdJetIcon',
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
    format: 'umd',
    name: 'MdJournalIcon',
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
    format: 'umd',
    name: 'MdKeyIcon',
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
    format: 'umd',
    name: 'MdKeypadIcon',
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
    format: 'umd',
    name: 'MdLaptopIcon',
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
    format: 'umd',
    name: 'MdLeafIcon',
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
    format: 'umd',
    name: 'MdLinkIcon',
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
    format: 'umd',
    name: 'MdListBoxIcon',
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
    format: 'umd',
    name: 'MdListIcon',
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
    format: 'umd',
    name: 'MdLocateIcon',
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
    format: 'umd',
    name: 'MdLockIcon',
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
    format: 'umd',
    name: 'MdLogInIcon',
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
    format: 'umd',
    name: 'MdLogOutIcon',
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
    format: 'umd',
    name: 'MdMagnetIcon',
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
    format: 'umd',
    name: 'MdMailOpenIcon',
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
    format: 'umd',
    name: 'MdMailUnreadIcon',
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
    format: 'umd',
    name: 'MdMailIcon',
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
    format: 'umd',
    name: 'MdMaleIcon',
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
    format: 'umd',
    name: 'MdManIcon',
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
    format: 'umd',
    name: 'MdMapIcon',
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
    format: 'umd',
    name: 'MdMedalIcon',
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
    format: 'umd',
    name: 'MdMedicalIcon',
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
    format: 'umd',
    name: 'MdMedkitIcon',
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
    format: 'umd',
    name: 'MdMegaphoneIcon',
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
    format: 'umd',
    name: 'MdMenuIcon',
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
    format: 'umd',
    name: 'MdMicOffIcon',
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
    format: 'umd',
    name: 'MdMicIcon',
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
    format: 'umd',
    name: 'MdMicrophoneIcon',
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
    format: 'umd',
    name: 'MdMoonIcon',
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
    format: 'umd',
    name: 'MdMoreIcon',
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
    format: 'umd',
    name: 'MdMoveIcon',
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
    format: 'umd',
    name: 'MdMusicalNoteIcon',
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
    format: 'umd',
    name: 'MdMusicalNotesIcon',
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
    format: 'umd',
    name: 'MdNavigateIcon',
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
    format: 'umd',
    name: 'MdNotificationsOffIcon',
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
    format: 'umd',
    name: 'MdNotificationsOutlineIcon',
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
    format: 'umd',
    name: 'MdNotificationsIcon',
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
    format: 'umd',
    name: 'MdNuclearIcon',
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
    format: 'umd',
    name: 'MdNutritionIcon',
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
    format: 'umd',
    name: 'MdOpenIcon',
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
    format: 'umd',
    name: 'MdOptionsIcon',
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
    format: 'umd',
    name: 'MdOutletIcon',
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
    format: 'umd',
    name: 'MdPaperPlaneIcon',
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
    format: 'umd',
    name: 'MdPaperIcon',
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
    format: 'umd',
    name: 'MdPartlySunnyIcon',
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
    format: 'umd',
    name: 'MdPauseIcon',
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
    format: 'umd',
    name: 'MdPawIcon',
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
    format: 'umd',
    name: 'MdPeopleIcon',
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
    format: 'umd',
    name: 'MdPersonAddIcon',
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
    format: 'umd',
    name: 'MdPersonIcon',
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
    format: 'umd',
    name: 'MdPhoneLandscapeIcon',
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
    format: 'umd',
    name: 'MdPhonePortraitIcon',
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
    format: 'umd',
    name: 'MdPhotosIcon',
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
    format: 'umd',
    name: 'MdPieIcon',
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
    format: 'umd',
    name: 'MdPinIcon',
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
    format: 'umd',
    name: 'MdPintIcon',
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
    format: 'umd',
    name: 'MdPizzaIcon',
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
    format: 'umd',
    name: 'MdPlanetIcon',
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
    format: 'umd',
    name: 'MdPlayCircleIcon',
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
    format: 'umd',
    name: 'MdPlayIcon',
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
    format: 'umd',
    name: 'MdPodiumIcon',
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
    format: 'umd',
    name: 'MdPowerIcon',
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
    format: 'umd',
    name: 'MdPricetagIcon',
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
    format: 'umd',
    name: 'MdPricetagsIcon',
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
    format: 'umd',
    name: 'MdPrintIcon',
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
    format: 'umd',
    name: 'MdPulseIcon',
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
    format: 'umd',
    name: 'MdQrScannerIcon',
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
    format: 'umd',
    name: 'MdQuoteIcon',
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
    format: 'umd',
    name: 'MdRadioButtonOffIcon',
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
    format: 'umd',
    name: 'MdRadioButtonOnIcon',
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
    format: 'umd',
    name: 'MdRadioIcon',
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
    format: 'umd',
    name: 'MdRainyIcon',
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
    format: 'umd',
    name: 'MdRecordingIcon',
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
    format: 'umd',
    name: 'MdRedoIcon',
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
    format: 'umd',
    name: 'MdRefreshCircleIcon',
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
    format: 'umd',
    name: 'MdRefreshIcon',
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
    format: 'umd',
    name: 'MdRemoveCircleOutlineIcon',
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
    format: 'umd',
    name: 'MdRemoveCircleIcon',
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
    format: 'umd',
    name: 'MdRemoveIcon',
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
    format: 'umd',
    name: 'MdReorderIcon',
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
    format: 'umd',
    name: 'MdRepeatIcon',
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
    format: 'umd',
    name: 'MdResizeIcon',
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
    format: 'umd',
    name: 'MdRestaurantIcon',
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
    format: 'umd',
    name: 'MdReturnLeftIcon',
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
    format: 'umd',
    name: 'MdReturnRightIcon',
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
    format: 'umd',
    name: 'MdReverseCameraIcon',
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
    format: 'umd',
    name: 'MdRewindIcon',
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
    format: 'umd',
    name: 'MdRibbonIcon',
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
    format: 'umd',
    name: 'MdRocketIcon',
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
    format: 'umd',
    name: 'MdRoseIcon',
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
    format: 'umd',
    name: 'MdSadIcon',
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
    format: 'umd',
    name: 'MdSaveIcon',
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
    format: 'umd',
    name: 'MdSchoolIcon',
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
    format: 'umd',
    name: 'MdSearchIcon',
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
    format: 'umd',
    name: 'MdSendIcon',
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
    format: 'umd',
    name: 'MdSettingsIcon',
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
    format: 'umd',
    name: 'MdShareAltIcon',
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
    format: 'umd',
    name: 'MdShareIcon',
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
    format: 'umd',
    name: 'MdShirtIcon',
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
    format: 'umd',
    name: 'MdShuffleIcon',
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
    format: 'umd',
    name: 'MdSkipBackwardIcon',
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
    format: 'umd',
    name: 'MdSkipForwardIcon',
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
    format: 'umd',
    name: 'MdSnowIcon',
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
    format: 'umd',
    name: 'MdSpeedometerIcon',
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
    format: 'umd',
    name: 'MdSquareOutlineIcon',
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
    format: 'umd',
    name: 'MdSquareIcon',
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
    format: 'umd',
    name: 'MdStarHalfIcon',
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
    format: 'umd',
    name: 'MdStarOutlineIcon',
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
    format: 'umd',
    name: 'MdStarIcon',
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
    format: 'umd',
    name: 'MdStatsIcon',
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
    format: 'umd',
    name: 'MdStopwatchIcon',
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
    format: 'umd',
    name: 'MdSubwayIcon',
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
    format: 'umd',
    name: 'MdSwapIcon',
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
    format: 'umd',
    name: 'MdSwitchIcon',
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
    format: 'umd',
    name: 'MdSyncIcon',
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
    format: 'umd',
    name: 'MdTabletLandscapeIcon',
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
    format: 'umd',
    name: 'MdTabletPortraitIcon',
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
    format: 'umd',
    name: 'MdTennisballIcon',
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
    format: 'umd',
    name: 'MdTextIcon',
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
    format: 'umd',
    name: 'MdThermometerIcon',
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
    format: 'umd',
    name: 'MdThumbsDownIcon',
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
    format: 'umd',
    name: 'MdThumbsUpIcon',
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
    format: 'umd',
    name: 'MdThunderstormIcon',
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
    format: 'umd',
    name: 'MdTimeIcon',
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
    format: 'umd',
    name: 'MdTimerIcon',
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
    format: 'umd',
    name: 'MdTodayIcon',
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
    format: 'umd',
    name: 'MdTrainIcon',
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
    format: 'umd',
    name: 'MdSunnyIcon',
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
    format: 'umd',
    name: 'MdTransgenderIcon',
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
    format: 'umd',
    name: 'MdTrashIcon',
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
    format: 'umd',
    name: 'MdTrendingDownIcon',
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
    format: 'umd',
    name: 'MdTrendingUpIcon',
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
    format: 'umd',
    name: 'MdTrophyIcon',
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
    format: 'umd',
    name: 'MdTvIcon',
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
    format: 'umd',
    name: 'MdUmbrellaIcon',
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
    format: 'umd',
    name: 'MdUndoIcon',
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
    format: 'umd',
    name: 'MdUnlockIcon',
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
    format: 'umd',
    name: 'MdVideocamIcon',
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
    format: 'umd',
    name: 'MdVolumeHighIcon',
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
    format: 'umd',
    name: 'MdVolumeLowIcon',
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
    format: 'umd',
    name: 'MdVolumeMuteIcon',
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
    format: 'umd',
    name: 'MdVolumeOffIcon',
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
    format: 'umd',
    name: 'MdWalkIcon',
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
    format: 'umd',
    name: 'MdWalletIcon',
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
    format: 'umd',
    name: 'MdWarningIcon',
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
    format: 'umd',
    name: 'MdWatchIcon',
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
    format: 'umd',
    name: 'MdWaterIcon',
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
    format: 'umd',
    name: 'MdWifiIcon',
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
    format: 'umd',
    name: 'MdWineIcon',
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
    format: 'umd',
    name: 'MdWomanIcon',
  },
  external: Object.keys(pkg.dependencies),
  plugins: generatePlugins()
},
]