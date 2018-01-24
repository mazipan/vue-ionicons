<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-book-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M164.466 64C109.266 64 64 89.98 64 143v283h22.141c12.86-26.334 44.238-42 78.325-42 40.224 0 73.877 27.528 81.616 64H248V95.346C230.76 73.951 198.981 64 164.466 64zM347.621 64c-34.332 0-66.713 9.851-83.621 31.011V448h1.797c7.739-36.472 41.495-64 81.722-64 34.085 0 61.149 11.666 78.429 42H448V143c0-53.02-45.177-79-100.379-79z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-book-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Book Icon"
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


