<template>
  <div class="ion ios-close-icon" name="ios-close-icon" aria-labelledby="ios-close-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<style type="text/css">
<![CDATA[
	.st0{fill:#010101;}
]]>
</style>
<g>
	<path class="st0" d="M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0
		S484.3,190.1,403.1,108.9z M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2
		l11.8,11.8L267.6,256L352,340.2z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-close-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Close Icon"
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
