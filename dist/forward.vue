<template>
  <div class="ion forward-icon" name="forward-icon" aria-labelledby="forward-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M288 298.1v92.3L448 256 288 112v80C100.8 192 64 400 64 400c53-93 122.4-101.9 224-101.9z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "forward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Forward Icon"
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

