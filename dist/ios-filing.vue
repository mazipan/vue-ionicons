<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-filing-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 288c-29.8 0-54.9-20.4-62-48H80v144h352V240H318c-7.1 27.6-32.2 48-62 48z"/><path d="M144 224h64c0 26.5 21.5 48 48 48s48-21.5 48-48h128l-63.5-96h-.5v80h-16v-80H160v80h-16v-80h-.5L80 224h64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-filing-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Filing Icon"
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

