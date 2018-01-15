<template>
  <div class="ion ios-drag-icon" name="ios-drag-icon" aria-labelledby="ios-drag-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-drag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Drag Icon"
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

