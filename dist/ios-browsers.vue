<template>
  <div class="ion ios-browsers-icon" name="ios-browsers-icon" aria-labelledby="ios-browsers-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M64,144v304h303.9V144H64z"/>
	<polygon points="144,64 144,128 384,128 384,368 448,368 448,64 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-browsers-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Browsers Icon"
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
