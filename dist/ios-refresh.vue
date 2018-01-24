<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-refresh-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336.1c-70.7 0-128-57.3-128-128.1s57.3-128.1 128-128.1V84l96 64-96 55.7v-55.8c-59.6 0-108.1 48.5-108.1 108.1 0 59.6 48.5 108.1 108.1 108.1S364.1 316 364.1 256H384c0 71-57.3 128.1-128 128.1z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-refresh-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Refresh Icon"
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

