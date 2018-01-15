<template>
  <div class="ion wand-icon" name="wand-icon" aria-labelledby="wand-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M272 191.997l48 48-48 47.999-48-48zM208.007 256l48.001 48L80.01 480l-48-48.001zM256 32h32v64h-32zM385.131 149.497l-22.627-22.627 45.254-45.254 22.627 22.628zM113.606 104.234l22.627-22.627 45.255 45.254-22.628 22.627zM362.505 353.126l22.627-22.627 45.255 45.254-22.628 22.627zM416 224h64v32h-64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "wand-icon",
    data () {
      let iconTitle = this.title ? this.title : "Wand Icon"
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

