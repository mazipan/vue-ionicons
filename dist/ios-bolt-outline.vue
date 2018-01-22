<template>
  <div
    class="ion ios-bolt-outline-icon"
    name="ios-bolt-outline-icon"
    aria-labelledby="ios-bolt-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M273.9 132l-16.5 89.1L254 240h84l-99.8 140 16.5-89.1L258 272h-83.9l99.8-140m28.8-68L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-bolt-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Bolt Outline Icon"
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

