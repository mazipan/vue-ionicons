<template>
  <div class="ion ios-download-icon" name="ios-download-icon" aria-labelledby="ios-download-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="264,144 264,307 318.8,252.3 330.4,263.9 256,338.4 181.5,263.9 193.2,252.3 248,307 248,144 96,144 96,448 
		416,448 416,144 	"/>
	<rect x="248" y="64" width="16" height="80"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-download-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Download Icon"
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
