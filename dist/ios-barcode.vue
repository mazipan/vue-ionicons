<template>
  <div class="ion ios-barcode-icon" name="ios-barcode-icon" aria-labelledby="ios-barcode-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M48 128v256h416V128H48zm80 192h-16V192h16v128zm64 32h-16V160h16v192zm71-16h-16V176h16v160zm73 16h-16V160h16v192zm64-32h-16V192h16v128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-barcode-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Barcode Icon"
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

