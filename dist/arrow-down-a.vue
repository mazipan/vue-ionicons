<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-down-a-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256.5 448.5l192-192h-112v-192h-160v192h-112z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-down-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Down A Icon"
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


