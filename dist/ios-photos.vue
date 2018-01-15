<template>
  <div class="ion ios-photos-icon" name="ios-photos-icon" aria-labelledby="ios-photos-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M96 128v320h384V128H96z"/><path d="M416 64H32v320h48V112h336z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-photos-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Photos Icon"
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

