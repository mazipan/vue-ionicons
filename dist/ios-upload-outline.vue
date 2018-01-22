<template>
  <div
    class="ion ios-upload-outline-icon"
    name="ios-upload-outline-icon"
    aria-labelledby="ios-upload-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M288 144v16h112v272H112V160h112v-16H96v304h320V144z"/><path d="M193.1 118.1l-11.6-11.6L256 32l74.5 74.5-11.6 11.6-54.7-54.7v243h-16.4v-243z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-upload-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Upload Outline Icon"
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

