<template>
  <div
    class="ion"
    :class="rootClass"
    name="information-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M288 448V192h-96v16h32v240h-32v16h128v-16zM255.8 144.5c26.6 0 48.2-21.6 48.2-48.2s-21.6-48.2-48.2-48.2-48.2 21.6-48.2 48.2 21.6 48.2 48.2 48.2z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "information-icon",
    data () {
      let iconTitle = this.title ? this.title : "Information Icon"
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

