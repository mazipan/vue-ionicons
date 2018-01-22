<template>
  <div
    class="ion egg-icon"
    name="egg-icon"
    aria-labelledby="egg-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 32C192 32 96 165.2 96 288.9 96 412.6 160 480 256 480s160-67.4 160-191.1C416 165.2 320 32 256 32z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "egg-icon",
    data () {
      let iconTitle = this.title ? this.title : "Egg Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

