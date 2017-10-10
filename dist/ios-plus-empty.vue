<template>
  <div class="ion ios-plus-empty-icon" name="ios-plus-empty-icon" aria-labelledby="ios-plus-empty-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-plus-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Plus Empty Icon"
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
