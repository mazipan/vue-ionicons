<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-pie-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M272 64v224L74.245 337.376C101.653 420.221 179.841 480 271.875 480 386.75 480 480 386.875 480 272S387 64 272 64z"/><path d="M256 32h-5.5C90.5 32 32 148.25 32 239.287c0 0 .25 56.666 18.91 88.291L256 275.573V32z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-pie-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pie Icon"
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


