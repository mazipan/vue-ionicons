<template>
  <div class="ion ios-crop-icon" name="ios-crop-icon" aria-labelledby="ios-crop-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="128" y="64" width="16" height="48"/>
	<polygon points="144,368 144,160 128,160 128,384 352,384 352,368 	"/>
	<rect x="400" y="368" width="48" height="16"/>
	<polygon points="64,128 64,144 368,144 368,448 384,448 384,128 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-crop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Crop Icon"
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
