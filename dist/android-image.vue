<template>
  <div class="ion android-image-icon" name="android-image-icon" aria-labelledby="android-image-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 405.333V106.667C448 83.198 428.802 64 405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333zM181.333 288l53.334 64 74.666-96 96 128H106.667l74.666-96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-image-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Image Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

