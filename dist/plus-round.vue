<template>
  <div
    class="ion plus-round-icon"
    name="plus-round-icon"
    aria-labelledby="plus-round-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "plus-round-icon",
    data () {
      let iconTitle = this.title ? this.title : "Plus Round Icon"
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

