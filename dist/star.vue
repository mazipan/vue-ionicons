<template>
  <div
    class="ion star-icon"
    name="star-icon"
    aria-labelledby="star-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M480 200H308.519l-52.49-168-52.51 168H32l138.946 104.209L116 480l140-112 140 112-54.927-175.805z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "star-icon",
    data () {
      let iconTitle = this.title ? this.title : "Star Icon"
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

