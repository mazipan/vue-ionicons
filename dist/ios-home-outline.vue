<template>
  <div class="ion ios-home-outline-icon" name="ios-home-outline-icon" aria-labelledby="ios-home-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,112L96,240v208h112V320h96v128h112V240L256,112z M400,432h-80V304H192v128h-80V247.69l144-115.2l144,115.2V432z"/>
	<path d="M256,64l-96,76.8V96H96v95.999l-32,25.499l11.51,11.384L256,84.49l180.49,144.393L448,217.498L256,64z M144,153.599
		l-32,25.6V112h32V153.599z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-home-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Home Outline Icon"
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
