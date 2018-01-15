<template>
  <div class="ion android-arrow-dropleft-icon" name="android-arrow-dropleft-icon" aria-labelledby="android-arrow-dropleft-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropleft-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropleft Icon"
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

