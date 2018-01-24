<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-box-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M287.8 240c8.8 0 16.1 7.2 16.1 16s-7 16-15.9 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h63m1-16h-64c-17.6 0-32 14.4-32 32s14.4 32 32 32h64c17.6 0 32-14.4 32-32s-14.4-32-32-32z"/><path d="M416 112H96v80h16v208h288V192h16v-80zm-32 272H128V192h256v192zm16-208H112v-48h288v48z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-box-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Box Outline Icon"
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

