<template>
  <div
    class="ion ios-arrow-up-icon"
    name="ios-arrow-up-icon"
    aria-labelledby="ios-arrow-up-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M396.6 352l19.4-20.7L256 160 96 331.3l19.3 20.7L256 201.5z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-arrow-up-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Up Icon"
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

