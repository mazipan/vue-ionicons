<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-information-empty-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><circle cx="251.5" cy="172" r="20"/><path d="M272 344V216h-48v8h16v120h-16v8h64v-8z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-information-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Information Empty Icon"
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

