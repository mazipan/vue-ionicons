<template>
  <div class="ion android-remove-icon" name="android-remove-icon" aria-labelledby="android-remove-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M96 235h320v42H96z"/></svg>
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
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

