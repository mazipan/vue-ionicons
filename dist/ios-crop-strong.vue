<template>
  <div class="ion ios-crop-strong-icon" name="ios-crop-strong-icon" aria-labelledby="ios-crop-strong-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="128" y="64" width="32" height="48"/>
	<polygon points="160,352 160,176 128,176 128,384 336,384 336,352 	"/>
	<rect x="400" y="352" width="48" height="32"/>
	<polygon points="64,128 64,160 352,160 352,448 384,448 384,128 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-crop-strong-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Crop Strong Icon"
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
