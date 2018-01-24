<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-star-half-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M172.248 304.931l-54.677 159.073L256 365.37l138.445 98.634-54.685-159.067L480 207H308.613L256 48.005 203.402 207H32l140.248 97.931zM256 100.75L297 224h131l-108 74.711 42.623 122.481L256 345.257V100.75z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-star-half-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Star Half Icon"
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


