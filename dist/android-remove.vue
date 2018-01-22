<template>
  <div
    class="ion android-remove-icon"
    name="android-remove-icon"
    aria-labelledby="android-remove-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 235h320v42H96z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-remove-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Remove Icon"
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

