<template>
  <div class="ion ios-plus-empty-icon" name="ios-plus-empty-icon" aria-labelledby="ios-plus-empty-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-plus-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Plus Empty Icon"
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

