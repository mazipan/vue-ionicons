<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-folder-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M472 176H40c-4.411 0-8 3.589-8 8v239c0 13.317 11.683 25 25 25h400c12.683 0 23-11.215 23-25V184c0-4.411-3.589-8-8-8zM457 96H215c-2.791 0-4.271-.585-6.094-2.408l-22.501-22.501-.168-.162C181.365 66.333 177.361 64 169 64H57c-13.785 0-25 10.317-25 23v74.376A23.885 23.885 0 0 1 40 160h432c2.805 0 5.496.488 8 1.376V119c0-13.327-9.673-23-23-23z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-folder-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Folder Icon"
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

<style>
.ion{
  display: inline-block;
}
</style>

