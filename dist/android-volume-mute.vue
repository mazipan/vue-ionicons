<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-volume-mute-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-volume-mute-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Volume Mute Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      rootClass: {
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

