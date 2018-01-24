<template>
  <div
    class="ion"
    :class="rootClass"
    name="crop-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M352 432h64v48h-64zM416 352V96H176v64h176v192H160V32H96v64H32v64h64v256h384v-64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "crop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Crop Icon"
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


