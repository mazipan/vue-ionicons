<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-up-c-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M128.4 189.3L233.4 89c5.8-6 13.7-9 22.4-9s16.5 3 22.4 9l105.4 100.3c12.5 11.9 12.5 31.3 0 43.2-12.5 11.9-32.7 11.9-45.2 0L288 184.4v217c0 16.9-14.3 30.6-32 30.6s-32-13.7-32-30.6v-217l-50.4 48.2c-12.5 11.9-32.7 11.9-45.2 0-12.5-12-12.5-31.3 0-43.3z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-up-c-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Up C Icon"
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


