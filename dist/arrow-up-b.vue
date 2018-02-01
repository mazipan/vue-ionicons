<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-up-b-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M413.1 327.3l-1.8-2.1-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6-7.7 0-14.6 3.4-19.2 8.6L101 324.9l-2.3 2.6C97 330 96 333 96 336.2c0 8.7 7.4 15.8 16.6 15.8h286.8c9.2 0 16.6-7.1 16.6-15.8 0-3.3-1.1-6.4-2.9-8.9z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-up-b-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Up B Icon"
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


