<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-monitor-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M496 384V96H16v288h175v16h-64v16h257v-16h-64v-16h176zM32 112h448v256H32V112z"/><path d="M48 128h416v224H48z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-monitor-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Monitor Icon"
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


