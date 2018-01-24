<template>
  <div
    class="ion"
    :class="rootClass"
    name="navicon-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 241h320v32H96zM96 145h320v32H96zM96 337h320v32H96z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "navicon-icon",
    data () {
      let iconTitle = this.title ? this.title : "Navicon Icon"
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

