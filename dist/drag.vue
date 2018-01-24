<template>
  <div
    class="ion"
    :class="rootClass"
    name="drag-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M0 144h512v32H0zM0 240h512v32H0zM0 336h512v32H0z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "drag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Drag Icon"
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

