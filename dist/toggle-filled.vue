<template>
  <div
    class="ion"
    :class="rootClass"
    name="toggle-filled-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M352 208c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48z"/><path d="M352 128H160c-70.692 0-128 57.308-128 128s57.308 128 128 128h192c70.692 0 128-57.308 128-128s-57.308-128-128-128zm0 208c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "toggle-filled-icon",
    data () {
      let iconTitle = this.title ? this.title : "Toggle Filled Icon"
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


