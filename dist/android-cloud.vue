<template>
  <div class="ion android-cloud-icon" name="android-cloud-icon" aria-labelledby="android-cloud-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-cloud-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Cloud Icon"
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

