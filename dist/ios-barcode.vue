<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-barcode-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M48 128v256h416V128H48zm80 192h-16V192h16v128zm64 32h-16V160h16v192zm71-16h-16V176h16v160zm73 16h-16V160h16v192zm64-32h-16V192h16v128z"/></svg>
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


