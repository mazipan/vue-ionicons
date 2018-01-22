<template>
  <div
    class="ion android-create-icon"
    name="android-create-icon"
    aria-labelledby="android-create-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path fill="#010101" d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-create-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Create Icon"
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

