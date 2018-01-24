<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-chatboxes-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M336 48H48v224h112V160h176z"/><path d="M176 176v224h162.6l64 64H416v-64h48V176H176z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-chatboxes-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Chatboxes Icon"
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


