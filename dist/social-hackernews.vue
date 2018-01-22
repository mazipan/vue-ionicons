<template>
  <div
    class="ion social-hackernews-icon"
    name="social-hackernews-icon"
    aria-labelledby="social-hackernews-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M64 64v384h384V64H64zm214 215v72h-40v-72l-66-120h47.1l39.7 83.6 38-83.6H342l-64 120z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "social-hackernews-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Hackernews Icon"
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

