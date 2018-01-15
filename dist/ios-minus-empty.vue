<template>
  <div class="ion ios-minus-empty-icon" name="ios-minus-empty-icon" aria-labelledby="ios-minus-empty-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M384 265H128v-17h256v17z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-minus-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Minus Empty Icon"
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

