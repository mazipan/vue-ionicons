<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-paperplane-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 249.6l106 46.7L416 96zM416 96L217.9 311.7 269.8 416z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-paperplane-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Paperplane Icon"
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

