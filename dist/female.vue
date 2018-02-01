<template>
  <div
    class="ion"
    :class="rootClass"
    name="female-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M288 284c55.2-14.2 96-64.3 96-124 0-70.7-57.3-128-128-128S128 89.3 128 160c0 59.6 40.8 109.7 96 124v68h-64v64h64v64h64v-64h64v-64h-64v-68zm-32-44c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "female-icon",
    data () {
      let iconTitle = this.title ? this.title : "Female Icon"
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


