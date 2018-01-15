<template>
  <div class="ion home-icon" name="home-icon" aria-labelledby="home-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 288L256 64 64 288h48v160h96V320h96v128h96V288z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "home-icon",
    data () {
      let iconTitle = this.title ? this.title : "Home Icon"
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

