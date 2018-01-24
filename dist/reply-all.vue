<template>
  <div
    class="ion"
    :class="rootClass"
    name="reply-all-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M304.5 192v-80L152.7 255.8 304.5 390v-91.9c68 0 107.9 8.9 159.1 101.9 0 0-6.1-208-159.1-208z"/><path d="M47.5 256l144 126.5V324l-82.2-68 82.2-78.6v-57z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "reply-all-icon",
    data () {
      let iconTitle = this.title ? this.title : "Reply All Icon"
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


