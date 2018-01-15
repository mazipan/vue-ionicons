<template>
  <div class="ion android-textsms-icon" name="android-textsms-icon" aria-labelledby="android-textsms-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M408 64H96c-22.002 0-32 17.998-32 40v344l64-64h280c22.002 0 40-17.998 40-40V104c0-22.002-17.998-40-40-40zM198.4 242H160v-40h38.4v40zm76.8 0h-38.4v-40h38.4v40zm76.8 0h-38.4v-40H352v40z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-textsms-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Textsms Icon"
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

