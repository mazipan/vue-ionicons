<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-musical-notes-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M416 319.9V78l-224 34.6v237.2c-9 0-20.9.4-43.5 1.3-42.6 1.6-52.5 21.8-52.5 41.3 0 24.9 13.5 43.5 62.6 41.4 52.8-2.3 50.3-49 50.3-82.5V189.8l191-32v160.6c-9 0-19.9.4-42.6 1.3-42.6 1.6-52.5 21.8-52.5 41.3 0 24.9 13 43.5 62.2 41.4 53-2.3 49-49 49-82.5z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-musical-notes-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Musical Notes Icon"
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


