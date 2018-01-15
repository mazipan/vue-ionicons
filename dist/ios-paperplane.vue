<template>
  <div class="ion ios-paperplane-icon" name="ios-paperplane-icon" aria-labelledby="ios-paperplane-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M96 249.6l106 46.7L416 96zM416 96L217.9 311.7 269.8 416z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-paperplane-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Paperplane Icon"
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

