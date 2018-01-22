<template>
  <div
    class="ion android-compass-icon"
    name="android-compass-icon"
    aria-labelledby="android-compass-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 231.358c-13.442 0-24.643 11.2-24.643 24.642s11.2 24.643 24.643 24.643 24.643-11.2 24.643-24.643-11.201-24.642-24.643-24.642zM256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm49.284 273.284L121.6 390.4l85.116-183.679L390.4 121.6l-85.116 183.684z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-compass-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Compass Icon"
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

