<template>
  <div
    class="ion android-add-circle-icon"
    name="android-add-circle-icon"
    aria-labelledby="android-add-circle-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-add-circle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Add Circle Icon"
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

