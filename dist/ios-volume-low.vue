<template>
  <div class="ion ios-volume-low-icon" name="ios-volume-low-icon" aria-labelledby="ios-volume-low-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M249.9 216H192v80h57.9l70.1 56V160z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-volume-low-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Volume Low Icon"
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

