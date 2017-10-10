<template>
  <div class="ion ios-photos-icon" name="ios-photos-icon" aria-labelledby="ios-photos-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M96,128v320h384V128H96z"/>
	<polygon points="416,64 32,64 32,384 80,384 80,112 416,112 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-photos-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Photos Icon"
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
