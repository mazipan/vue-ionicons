<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-shrink-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M448 92.3l-81.9 81.8L416 224H288V96l49.9 49.9L419.7 64zM448 419.7l-81.9-81.8L416 288H288v128l49.9-49.9 81.8 81.9zM64 419.7l81.9-81.8L96 288h128v128l-49.9-49.9L92.3 448zM64 92.3l81.9 81.8L96 224h128V96l-49.9 49.9L92.3 64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-shrink-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Shrink Icon"
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


