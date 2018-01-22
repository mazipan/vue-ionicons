<template>
  <div
    class="ion android-apps-icon"
    name="android-apps-icon"
    aria-labelledby="android-apps-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-apps-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Apps Icon"
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

