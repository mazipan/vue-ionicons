<template>
  <div
    class="ion ios-monitor-outline-icon"
    name="ios-monitor-outline-icon"
    aria-labelledby="ios-monitor-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M496 384V96H16v288h175v16h-64v16h257v-16h-64v-16h176zM32 112h448v256H32V112z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-monitor-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Monitor Outline Icon"
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

