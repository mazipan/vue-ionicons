<template>
  <div
    class="ion ios-calculator-outline-icon"
    name="ios-calculator-outline-icon"
    aria-labelledby="ios-calculator-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M144 160h224V96H144v64zm16-48h192v32H160v-32z"/><path d="M368 64H144c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm16 352c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v320z"/><path d="M160 240v-48h-16v64h64v-16h-16zM160 320v-48h-16v64h64v-16h-16zM160 400v-48h-16v64h64v-16h-16zM240 240v-48h-16v64h64v-16h-16zM320 240v-48h-16v64h64v-16h-16zM240 320v-48h-16v64h64v-16h-16zM240 400v-48h-16v64h64v-16h-16zM320 400V272h-16v144h64v-16h-16z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-calculator-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Calculator Outline Icon"
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

