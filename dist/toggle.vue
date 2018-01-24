<template>
  <div
    class="ion"
    :class="rootClass"
    name="toggle-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M352 160c52.934 0 96 43.065 96 96s-43.066 96-96 96H160c-52.935 0-96-43.065-96-96s43.065-96 96-96h192m0-32H160c-70.692 0-128 57.308-128 128s57.308 128 128 128h192c70.692 0 128-57.308 128-128s-57.308-128-128-128z"/><path d="M160 208c26.467 0 48 21.533 48 48s-21.533 48-48 48-48-21.533-48-48 21.533-48 48-48m0-32c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "toggle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Toggle Icon"
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

