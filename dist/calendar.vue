<template>
  <div
    class="ion"
    :class="rootClass"
    name="calendar-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M144 128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32zM368 128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32z"/><path d="M472 64h-56v40.7c0 22.5-23.2 39.3-47.2 39.3S320 127.2 320 104.7V64H192v40.7c0 22.5-24 39.3-48 39.3s-48-16.8-48-39.3V64H40c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8zm-40 368H80V176h352v256z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "calendar-icon",
    data () {
      let iconTitle = this.title ? this.title : "Calendar Icon"
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


