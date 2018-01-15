<template>
  <div class="ion android-bar-icon" name="android-bar-icon" aria-labelledby="android-bar-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M234.667 277.333V408H128v40h256v-40H277.333V277.333L448 106.667V64H64v42.667l170.667 170.666zm-74.667-128l-42.667-42.666h277.334L352 149.333H160z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-bar-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Bar Icon"
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

