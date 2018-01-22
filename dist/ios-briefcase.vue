<template>
  <div
    class="ion ios-briefcase-icon"
    name="ios-briefcase-icon"
    aria-labelledby="ios-briefcase-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 112h32v16H96zM48 208h416v240H48zM384 112h32v16h-32z"/><path d="M416 128v32h-32v-32h-48V96c-.5-18.2-13.6-32-32.2-32h-99.1C186.1 64 176 77.7 176 96v32h-48v32H96v-32H48v64h416v-64h-48zm-96-.5v.5H192V98.1c0-10.2 2.9-18.1 13.7-18.1h97.1c10.4 0 17.2 7.7 17.2 18.1v29.4z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-briefcase-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Briefcase Icon"
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

