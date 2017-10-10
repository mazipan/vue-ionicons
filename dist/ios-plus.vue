<template>
  <div class="ion ios-plus-icon" name="ios-plus-icon" aria-labelledby="ios-plus-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M384,265H264v119h-17V265
		H128v-17h119V128h17v120h120V265z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-plus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Plus Icon"
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
