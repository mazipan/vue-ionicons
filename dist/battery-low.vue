<template>
  <div
    class="ion"
    :class="rootClass"
    name="battery-low-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M42.1 384h381.1c5.5 0 9.9-4.5 9.9-10v-54H470c5.6 0 10.1-4.5 10.1-10V202c0-5.5-4.5-10-10.1-10h-37v-54c0-5.5-4.3-10-9.9-10h-381c-5.6 0-10.1 4.5-10.1 10v236c0 5.5 4.5 10 10.1 10zM401 160v64h47v64h-47v64H224l-32-192h209z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "battery-low-icon",
    data () {
      let iconTitle = this.title ? this.title : "Battery Low Icon"
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


