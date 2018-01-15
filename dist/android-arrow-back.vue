<template>
  <div class="ion android-arrow-back-icon" name="android-arrow-back-icon" aria-labelledby="android-arrow-back-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-back-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Back Icon"
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

