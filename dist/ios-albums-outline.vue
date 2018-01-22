<template>
  <div
    class="ion ios-albums-outline-icon"
    name="ios-albums-outline-icon"
    aria-labelledby="ios-albums-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M464 144v288H48V144h416m16-16H32v320h448V128zM72 96h368v16H72zM104 64h304v16H104z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-albums-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Albums Outline Icon"
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

