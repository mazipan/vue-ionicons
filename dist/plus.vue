<template>
  <div
    class="ion"
    :class="rootClass"
    name="plus-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "plus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Plus Icon"
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


