<template>
  <div
    class="ion"
    :class="rootClass"
    name="navigate-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M480 32L32 224h256v256z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "navigate-icon",
    data () {
      let iconTitle = this.title ? this.title : "Navigate Icon"
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


