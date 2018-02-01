<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-warning-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-warning-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Warning Icon"
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


