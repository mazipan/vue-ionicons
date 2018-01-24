<template>
  <div
    class="ion"
    :class="rootClass"
    name="flame-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M128.922 320c13.05 134 103.764 160 126.932 160 23.168 0 127.457-40.49 128.142-160 .836-146-121.586-143-95.895-288-86.674 64-169.812 178.816-159.179 288zm86.745 48c0-44.183 40.187-80 40.187-80s40.701 35.817 40.701 80c0 44.184-40.701 80-40.701 80s-40.187-35.816-40.187-80z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "flame-icon",
    data () {
      let iconTitle = this.title ? this.title : "Flame Icon"
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

