<template>
  <div
    class="ion android-alert-icon"
    name="android-alert-icon"
    aria-labelledby="android-alert-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 48C141.6 48 48 141.601 48 256s93.6 208 208 208 208-93.601 208-208S370.4 48 256 48zm24 312h-48v-40h48v40zm0-88h-48V144h48v128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-alert-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Alert Icon"
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

