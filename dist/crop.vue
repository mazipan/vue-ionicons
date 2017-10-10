<template>
  <div class="ion crop-icon" name="crop-icon" aria-labelledby="crop-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="352" y="432" width="64" height="48"/>
	<polygon points="416,352 416,96 176,96 176,160 352,160 352,352 160,352 160,32 96,32 96,96 32,96 32,160 96,160 96,416 480,416 
		480,352 	"/>
</g>
</svg>

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
      }
    }
  }
</script>
