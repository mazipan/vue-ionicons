<template>
  <div
    class="ion alert-icon"
    name="alert-icon"
    aria-labelledby="alert-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M320 480H192v-96h128v96zm-16-160h-96L192 32h128l-16 288z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "alert-icon",
    data () {
      let iconTitle = this.title ? this.title : "Alert Icon"
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

