<template>
  <div class="ion paper-airplane-icon" name="paper-airplane-icon" aria-labelledby="paper-airplane-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M32 272l128 48 16 160 80-112 112 112L480 32 32 272zm318.7 145.4L256 320l128-176-192 153.8-82.6-31 322-172.5-80.7 323.1z" fill="#010101"/></svg>
  </div>
</template>

<script>
  export default {
    name: "paper-airplane-icon",
    data () {
      let iconTitle = this.title ? this.title : "Paper Airplane Icon"
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

