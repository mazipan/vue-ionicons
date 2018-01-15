<template>
  <div class="ion ios-monitor-icon" name="ios-monitor-icon" aria-labelledby="ios-monitor-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M496 384V96H16v288h175v16h-64v16h257v-16h-64v-16h176zM32 112h448v256H32V112z"/><path d="M48 128h416v224H48z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-monitor-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Monitor Icon"
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

