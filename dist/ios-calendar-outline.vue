<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-calendar-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path fill="none" d="M80 112v64h352v-64"/><path d="M352 96V64h-16v32H176V64h-16v32H64v352h384V96h-96zm80 336H80V192h352v240zm0-256H80v-64h80v32h16v-32h160v32h16v-32h80v64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-calendar-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Calendar Outline Icon"
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


