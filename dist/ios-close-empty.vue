<template>
  <div class="ion ios-close-empty-icon" name="ios-close-empty-icon" aria-labelledby="ios-close-empty-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<style type="text/css">
<![CDATA[
	.st0{fill:#010101;}
]]>
</style>
<polygon class="st0" points="340.2,160 255.8,244.3 171.8,160.4 160,172.2 244,256 160,339.9 171.8,351.6 255.8,267.8 340.2,352 
	352,340.3 267.6,256 352,171.8 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-close-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Close Empty Icon"
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
