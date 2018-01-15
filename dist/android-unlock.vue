<template>
  <div class="ion android-unlock-icon" name="android-unlock-icon" aria-labelledby="android-unlock-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146h37.998c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002H318v40H136c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-unlock-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Unlock Icon"
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

