<template>
  <div class="ion connection-bars-icon" name="connection-bars-icon" aria-labelledby="connection-bars-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M80 352h64v64H80zM176 288h64v128h-64zM272 192h64v224h-64zM368 96h64v320h-64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "connection-bars-icon",
    data () {
      let iconTitle = this.title ? this.title : "Connection Bars Icon"
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

