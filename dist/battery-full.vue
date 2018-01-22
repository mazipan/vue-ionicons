<template>
  <div
    class="ion battery-full-icon"
    name="battery-full-icon"
    aria-labelledby="battery-full-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M469.9 192H433v-54c0-5.5-4.3-10-9.9-10h-381c-5.6 0-10.1 4.5-10.1 10v236c0 5.5 4.5 10 10.1 10h381.1c5.5 0 9.9-4.5 9.9-10v-54H470c5.6 0 10.1-4.5 10.1-10V202c-.1-5.5-4.6-10-10.2-10z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "battery-full-icon",
    data () {
      let iconTitle = this.title ? this.title : "Battery Full Icon"
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

