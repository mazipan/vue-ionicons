<template>
  <div class="ion ribbon-a-icon" name="ribbon-a-icon" aria-labelledby="ribbon-a-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M352,32l-82.9,176.612c39.996,3.608,75.273,23.554,99.096,53.128L432,128L352,32z"/>
	<path d="M160,32l82.9,176.612c-39.996,3.608-75.273,23.554-99.096,53.128L80,128L160,32z"/>
	<polygon points="269.092,32 256,32 176,32 228.572,144 256,144 283.428,144 336,32 	"/>
	<path d="M256,224c-70.692,0-128,57.308-128,128s57.308,128,128,128s128-57.308,128-128S326.692,224,256,224z M256,448
		c-53.02,0-96-42.98-96-96s42.98-96,96-96s96,42.98,96,96S309.02,448,256,448z"/>
	<path d="M256,264c-48.523,0-88,39.477-88,88s39.477,88,88,88s88-39.477,88-88S304.523,264,256,264z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ribbon-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ribbon A Icon"
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
