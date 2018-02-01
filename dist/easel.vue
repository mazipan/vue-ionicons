<template>
  <div
    class="ion"
    :class="rootClass"
    name="easel-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M80 144h352v192H80z"/><path d="M464 96H48c-8.837 0-16 7.163-16 16v256c0 8.837 6.932 16 15.768 16H464c8.837 0 16-7.163 16-16V112c0-8.837-7.163-16-16-16zm-16 256H64V128h384v224zM80 480h32l28.147-80h-31.312zM270.83 32h-29.358l-17.301 48h63.928zM371.853 400L400 480h32l-28.78-80zM240 400h32v48h-32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "easel-icon",
    data () {
      let iconTitle = this.title ? this.title : "Easel Icon"
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


