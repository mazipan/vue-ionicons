<template>
  <div
    class="ion"
    :class="rootClass"
    name="stop-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M437.4 64H74.6C68.7 64 64 68.7 64 74.6v362.8c0 5.9 4.7 10.6 10.6 10.6h362.8c5.8 0 10.6-4.7 10.6-10.6V74.6c0-5.9-4.8-10.6-10.6-10.6z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "stop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Stop Icon"
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


