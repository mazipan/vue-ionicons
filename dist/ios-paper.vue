<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-paper-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M112 64v336H96V112H64v305.143C64 434.157 77.843 448 94.857 448h322.285C434.157 448 448 434.157 448 417.143V64H112zm48 48h128v16H160v-16zm0 160h192v16H160v-16zm240 96H160v-16h240v16zm0-160H160v-16h240v16z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-paper-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Paper Icon"
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


