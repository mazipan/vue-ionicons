<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-arrow-dropright-circle-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropright-circle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropright Circle Icon"
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


