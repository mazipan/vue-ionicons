<template>
  <div class="ion android-warning-icon" name="android-warning-icon" aria-labelledby="android-warning-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-warning-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Warning Icon"
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

