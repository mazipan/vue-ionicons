<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-arrow-dropleft-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M320 128L192 256l128 128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropleft-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropleft Icon"
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

