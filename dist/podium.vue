<template>
  <div
    class="ion"
    :class="rootClass"
    name="podium-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M32 256h128v192H32zM192 160h128v288H192zM352 320h128v128H352z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "podium-icon",
    data () {
      let iconTitle = this.title ? this.title : "Podium Icon"
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


