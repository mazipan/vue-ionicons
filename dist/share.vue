<template>
  <div
    class="ion"
    :class="rootClass"
    name="share-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M352 377.9H102.4V198.2h57.5s14.1-19.7 42.7-38.2H83.2c-10.6 0-19.2 8.5-19.2 19.1V397c0 10.5 8.6 19.1 19.2 19.1h288c10.6 0 19.2-8.5 19.2-19.1V288L352 319.4v58.5zM320 224v63.9l128-95.5L320 96v59.7C165.2 155.7 160 320 160 320c43.8-71.5 76-96 160-96z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "share-icon",
    data () {
      let iconTitle = this.title ? this.title : "Share Icon"
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


