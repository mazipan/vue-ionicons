<template>
  <div
    class="ion"
    :class="rootClass"
    name="home-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M448 288L256 64 64 288h48v160h96V320h96v128h96V288z"/></svg>

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

