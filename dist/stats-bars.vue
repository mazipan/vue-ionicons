<template>
  <div class="ion stats-bars-icon" name="stats-bars-icon" aria-labelledby="stats-bars-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M176 96h64v320h-64zM80 320h64v96H80zM272 256h64v160h-64zM368 192h64v224h-64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "stats-bars-icon",
    data () {
      let iconTitle = this.title ? this.title : "Stats Bars Icon"
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

