<template>
  <div
    class="ion android-add-icon"
    name="android-add-icon"
    aria-labelledby="android-add-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-add-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Add Icon"
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

