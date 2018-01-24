<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-browsers-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M64 144v304h303.9V144H64zm287.9 288H80V160h271.9v272z"/><path d="M448 64H144v64h16V80h272v272h-48v16h64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-browsers-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Browsers Outline Icon"
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

