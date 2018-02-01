<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-pricetag-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><circle cx="368" cy="128" r="16"/><path d="M304 32L48 320l160 160 256-288V32H304zm64 128c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-pricetag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pricetag Icon"
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


