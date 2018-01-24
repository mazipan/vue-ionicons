<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-photos-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M96 128v320h384V128H96zm368 304H112V144h352v288z"/><path d="M32 64v320h48v-16H48V80h352v32h16V64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-photos-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Photos Outline Icon"
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


