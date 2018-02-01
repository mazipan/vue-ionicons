<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-dropbox-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M177 77L64 150.9l78.1 62.7L256 143.1zM64 276.3l113 73.9 79-66.1-113.9-70.5zM256 284.1l79 66.1 113-73.9-78.1-62.7zM448 150.9L335 77l-79 66.1 113.9 70.5z"/><path d="M256.2 298.3l-79.8 66-34.4-22.2V367l114 68 114-68v-24.9l-34.2 22.2z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-dropbox-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Dropbox Icon"
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


