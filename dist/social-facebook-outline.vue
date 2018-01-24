<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-facebook-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64zm42.2 48H272v192h-51V240h-45v-32h45v-58.7c0-24.5 5.4-41.2 15.5-51.8 11.2-12 31.1-17.5 59.6-17.5H336v32h-17.5c-12 0-27.5 1.1-37.1 11.7-8.1 9-9.4 20.1-9.4 30.1V208h62l-3.8 32z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "social-facebook-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Facebook Outline Icon"
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

