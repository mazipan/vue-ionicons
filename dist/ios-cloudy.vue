<template>
  <div class="ion ios-cloudy-icon" name="ios-cloudy-icon" aria-labelledby="ios-cloudy-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<style type="text/css">
<![CDATA[
	.st0{fill:#010101;}
]]>
</style>
<path class="st0" d="M244,160c-43,0-78.3,35.2-78.3,78.5c0,2.6,0.1,5.2,0.4,7.8c-26.4,2.3-47.1,25.5-47.1,52.6
	c0,28.6,23.2,53.1,51.7,53.1h157.7c35.7,0,64.6-29.9,64.6-65.7S364.1,221,328.4,221c-2.7,0-5.4,0-8,0.3C312.5,186.3,281,160,244,160
	L244,160z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-cloudy-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Cloudy Icon"
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
