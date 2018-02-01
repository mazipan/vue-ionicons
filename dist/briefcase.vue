<template>
  <div
    class="ion"
    :class="rootClass"
    name="briefcase-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M272 272h-32v-8H32v176c0 4.4 3.3 8 7.8 8h432.5c4.4 0 7.7-3.6 7.7-8V264H272v8zM472.2 144H352v-30.7C351 85.1 330.3 64 300.8 64h-89.6c-29.4 0-50.2 21.1-51.2 49.3V144H39.8c-4.4 0-7.8 3.6-7.8 8v96h208v-8h32v8h208v-96c0-4.4-3.3-8-7.8-8zM320 116.2V144H192v-26.8-1-1c0-9.7 8.6-19.2 18.8-19.2h90.4c10.1 0 18.8 9.4 18.8 19.2v1z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "briefcase-icon",
    data () {
      let iconTitle = this.title ? this.title : "Briefcase Icon"
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


