<template>
  <div
    class="ion ios-copy-icon"
    name="ios-copy-icon"
    aria-labelledby="ios-copy-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M144 416V112h-32v336h240v-32H160z"/><path d="M325.3 64H160v336h240V139l-74.7-75zM368 176h-80V96h16v64h64v16z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-copy-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Copy Icon"
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

