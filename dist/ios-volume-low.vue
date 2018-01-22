<template>
  <div
    class="ion ios-volume-low-icon"
    name="ios-volume-low-icon"
    aria-labelledby="ios-volume-low-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M249.9 216H192v80h57.9l70.1 56V160z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-volume-low-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Volume Low Icon"
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

