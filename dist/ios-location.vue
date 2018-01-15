<template>
  <div class="ion ios-location-icon" name="ios-location-icon" aria-labelledby="ios-location-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 32c-79.529 0-144 64.471-144 144 0 112 144 304 144 304s144-192 144-304c0-79.529-64.471-144-144-144zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-location-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Location Icon"
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

