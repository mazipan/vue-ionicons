<template>
  <div class="ion ios-copy-icon" name="ios-copy-icon" aria-labelledby="ios-copy-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M144 416V112h-32v336h240v-32H160z"/><path d="M325.3 64H160v336h240V139l-74.7-75zM368 176h-80V96h16v64h64v16z"/></svg>
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
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

