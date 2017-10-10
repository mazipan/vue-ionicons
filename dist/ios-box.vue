<template>
  <div class="ion ios-box-icon" name="ios-box-icon" aria-labelledby="ios-box-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M112,400h288V208H112V400z M224,240h64c8.8,0,16,7.2,16,16s-7.2,16-16,16h-64c-8.8,0-16-7.2-16-16S215.2,240,224,240z"/>
	<polygon points="96,112 96,192 112,192 400,192 416,192 416,112 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-box-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Box Icon"
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
