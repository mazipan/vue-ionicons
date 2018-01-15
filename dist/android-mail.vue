<template>
  <div class="ion android-mail-icon" name="android-mail-icon" aria-labelledby="android-mail-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-mail-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Mail Icon"
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

