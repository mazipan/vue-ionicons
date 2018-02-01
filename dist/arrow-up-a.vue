<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-up-a-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256.5 64.5l-192 192h112v192h160v-192h112z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-up-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Up A Icon"
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


