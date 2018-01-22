<template>
  <div
    class="ion ios-filing-outline-icon"
    name="ios-filing-outline-icon"
    aria-labelledby="ios-filing-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M368.5 128h-225L80 224v160h352V224l-63.5-96zm44.9 96H368v-68l45.4 68zM160 144h192v80h-48c0 26.5-21.5 48-48 48s-48-21.5-48-48h-48v-80zm-16 12v68H98.6l45.4-68zm272 212H96V240h98c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48h98v128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-filing-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Filing Outline Icon"
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

