<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-dropbox-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M177 77.1L64 151l78.3 63L256 143.2l-79-66.1zm-85.6 76.2l84.5-56.8 52.9 46-85.4 52.5-52-41.7z"/><path d="M369.8 213L256 284.1l79 66.1 19-12.6v20.2L256 417l-98-58.5V338l19 12.2 79-66.1L142.2 213 64 276.3l78 51.5v39.4L256 435l114-68.5v-39.2l78-51.2-78.2-63.1zm-226.4 17.9l85.4 55.4-52.9 44.1-84.5-55.8 52-43.7zm139.8 55.4l85.4-55.4 52.1 43.6-84.5 55.8-53-44z"/><path d="M448 151L335 77.1l-79 66.1L369.8 214l78.2-63zm-164.8-8.4l52.9-46 84.5 56.8-52 41.6-85.4-52.4z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "social-dropbox-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Dropbox Outline Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      rootClass: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

