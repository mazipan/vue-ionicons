<template>
  <div class="ion stop-icon" name="stop-icon" aria-labelledby="stop-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M437.4 64H74.6C68.7 64 64 68.7 64 74.6v362.8c0 5.9 4.7 10.6 10.6 10.6h362.8c5.8 0 10.6-4.7 10.6-10.6V74.6c0-5.9-4.8-10.6-10.6-10.6z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "stop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Stop Icon"
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

