<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-home-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-home-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Home Icon"
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


