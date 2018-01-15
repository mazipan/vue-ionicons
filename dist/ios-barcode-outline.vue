<template>
  <div class="ion ios-barcode-outline-icon" name="ios-barcode-outline-icon" aria-labelledby="ios-barcode-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M48 384h80v-16H64V144h64v-16H48zM384 128v16h64v224h-64v16h80V128z"/><path d="M112 192h16v128h-16zM384 192h16v128h-16zM320 160h16v192h-16zM176 160h16v192h-16zM247 176h16v160h-16z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-barcode-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Barcode Outline Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

