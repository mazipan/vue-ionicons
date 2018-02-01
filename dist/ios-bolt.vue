<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-bolt-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M302.7 64L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-bolt-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Bolt Icon"
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


