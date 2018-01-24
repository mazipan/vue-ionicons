<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-hackernews-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M416 96v320H96V96h320m32-32H64v384h384V64z"/><path d="M296.7 159H342l-63.9 120v72h-39.9v-72L172 159h47.1l39.7 83.6 37.9-83.6z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "social-hackernews-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Hackernews Outline Icon"
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

