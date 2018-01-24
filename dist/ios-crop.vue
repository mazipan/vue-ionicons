<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-crop-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M128 64h16v48h-16zM144 368V160h-16v224h224v-16zM400 368h48v16h-48z"/><path d="M64 128v16h304v304h16V128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-crop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Crop Icon"
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


