<template>
  <div
    class="ion android-radio-button-on-icon"
    name="android-radio-button-on-icon"
    aria-labelledby="android-radio-button-on-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-radio-button-on-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Radio Button On Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

