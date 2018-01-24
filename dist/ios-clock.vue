<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-clock-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm17 225H160v-17h96V128h17v145z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-clock-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Clock Icon"
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

