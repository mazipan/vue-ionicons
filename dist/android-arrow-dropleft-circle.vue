<template>
  <div
    class="ion android-arrow-dropleft-circle-icon"
    name="android-arrow-dropleft-circle-icon"
    aria-labelledby="android-arrow-dropleft-circle-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-272 0l96-96v192l-96-96z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropleft-circle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropleft Circle Icon"
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

