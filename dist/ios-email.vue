<template>
  <div
    class="ion ios-email-icon"
    name="ios-email-icon"
    aria-labelledby="ios-email-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M448 384V141.8l-131.1 99.8L385 319l-2 2-78.9-69.6L256 288l-48.1-36.6L129 321l-2-2 68-77.4L64 142v242z"/><path d="M439.7 128H72l184 139.9z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-email-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Email Icon"
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

