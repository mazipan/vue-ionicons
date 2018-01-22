<template>
  <div
    class="ion ios-close-empty-icon"
    name="ios-close-empty-icon"
    aria-labelledby="ios-close-empty-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path fill="#010101" d="M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-close-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Close Empty Icon"
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

