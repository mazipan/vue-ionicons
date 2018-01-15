<template>
  <div class="ion android-calendar-icon" name="android-calendar-icon" aria-labelledby="android-calendar-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-calendar-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Calendar Icon"
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

