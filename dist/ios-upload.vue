<template>
  <div class="ion ios-upload-icon" name="ios-upload-icon" aria-labelledby="ios-upload-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="264,144 264,306 248,306 248,144 96,144 96,448 416,448 416,144 	"/>
	<polygon points="264,63.4 318.8,118.1 330.4,106.5 256,32 181.5,106.5 193.2,118.1 248,63.4 248,144 264,144 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-upload-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Upload Icon"
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
