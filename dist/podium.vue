<template>
  <div class="ion podium-icon" name="podium-icon" aria-labelledby="podium-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M32 256h128v192H32zM192 160h128v288H192zM352 320h128v128H352z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "podium-icon",
    data () {
      let iconTitle = this.title ? this.title : "Podium Icon"
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

