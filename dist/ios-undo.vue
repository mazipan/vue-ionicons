<template>
  <div
    class="ion ios-undo-icon"
    name="ios-undo-icon"
    aria-labelledby="ios-undo-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M447.9 368.2c0-16.8 3.6-83.1-48.7-135.7-35.2-35.4-80.3-53.4-143.3-56.2V96L64 224l192 128v-79.8c40 1.1 62.4 9.1 86.7 20 30.9 13.8 55.3 44 75.8 76.6l19.2 31.2H448c0-10.1-.1-22.9-.1-31.8z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-undo-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Undo Icon"
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

