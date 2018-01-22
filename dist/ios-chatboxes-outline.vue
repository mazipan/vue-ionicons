<template>
  <div
    class="ion ios-chatboxes-outline-icon"
    name="ios-chatboxes-outline-icon"
    aria-labelledby="ios-chatboxes-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M64 64h256v96h16V48H48v224h112v-16H64z"/><path d="M176 176v224h162.6l64 64H416v-64h48V176H176zm272 208h-48v54.6L345 384H192V192h256v192z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-chatboxes-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Chatboxes Outline Icon"
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

