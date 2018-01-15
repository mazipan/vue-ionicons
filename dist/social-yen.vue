<template>
  <div class="ion social-yen-icon" name="social-yen-icon" aria-labelledby="social-yen-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 32h-80L256 253.128 144 32H64l112.368 208H128v48h73.564L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384v-48h-48.289L448 32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-yen-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Yen Icon"
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

