<template>
  <div class="ion ios-plus-icon" name="ios-plus-icon" aria-labelledby="ios-plus-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm128 217H264v119h-17V265H128v-17h119V128h17v120h120v17z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-plus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Plus Icon"
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

