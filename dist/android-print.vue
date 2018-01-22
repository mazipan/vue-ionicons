<template>
  <div
    class="ion android-print-icon"
    name="android-print-icon"
    aria-labelledby="android-print-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.899V448H384.1v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.101-352H127.899v80H384.1V64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-print-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Print Icon"
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

