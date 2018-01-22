<template>
  <div
    class="ion ios-copy-outline-icon"
    name="ios-copy-outline-icon"
    aria-labelledby="ios-copy-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M304 96h-16v80h80v-16h-64z"/><path d="M325.3 64H160v48h-48v336h240v-48h48V139l-74.7-75zM336 432H128V128h32v272h176v32zm48-48H176V80h142.7l65.3 65.6V384z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-copy-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Copy Outline Icon"
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

