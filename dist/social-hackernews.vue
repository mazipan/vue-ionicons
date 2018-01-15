<template>
  <div class="ion social-hackernews-icon" name="social-hackernews-icon" aria-labelledby="social-hackernews-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M64 64v384h384V64H64zm214 215v72h-40v-72l-66-120h47.1l39.7 83.6 38-83.6H342l-64 120z"/></svg>
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
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

