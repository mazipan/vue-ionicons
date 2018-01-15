<template>
  <div class="ion android-arrow-up-icon" name="android-arrow-up-icon" aria-labelledby="android-arrow-up-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-up-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Up Icon"
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

