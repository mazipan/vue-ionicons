<template>
  <div
    class="ion"
    :class="rootClass"
    name="stats-bars-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M176 96h64v320h-64zM80 320h64v96H80zM272 256h64v160h-64zM368 192h64v224h-64z"/></svg>

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
      },
      rootClass: {
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

