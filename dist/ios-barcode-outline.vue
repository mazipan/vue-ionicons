<template>
  <div class="ion ios-barcode-outline-icon" name="ios-barcode-outline-icon" aria-labelledby="ios-barcode-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="48,384 128,384 128,368 64,368 64,144 128,144 128,128 48,128 	"/>
	<polygon points="384,128 384,144 448,144 448,368 384,368 384,384 464,384 464,128 	"/>
	<rect x="112" y="192" width="16" height="128"/>
	<rect x="384" y="192" width="16" height="128"/>
	<rect x="320" y="160" width="16" height="192"/>
	<rect x="176" y="160" width="16" height="192"/>
	<rect x="247" y="176" width="16" height="160"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-barcode-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Barcode Outline Icon"
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
