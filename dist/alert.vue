<template>
  <div
    class="ion"
    :class="rootClass"
    name="alert-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M320 480H192v-96h128v96zm-16-160h-96L192 32h128l-16 288z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "alert-icon",
    data () {
      let iconTitle = this.title ? this.title : "Alert Icon"
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


