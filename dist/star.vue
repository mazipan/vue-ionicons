<template>
  <div class="ion star-icon" name="star-icon" aria-labelledby="star-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="480,200 308.519,200 256.029,32 203.519,200 32,200 170.946,304.209 116,480 256,368 396,480 341.073,304.195 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "star-icon",
    data () {
      let iconTitle = this.title ? this.title : "Star Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>
