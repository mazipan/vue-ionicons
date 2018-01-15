<template>
  <div class="ion ios-minus-outline-icon" name="ios-minus-outline-icon" aria-labelledby="ios-minus-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/><path d="M128 248h256v17H128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-minus-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Minus Outline Icon"
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

