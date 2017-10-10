<template>
  <div class="ion social-windows-icon" name="social-windows-icon" aria-labelledby="social-windows-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<style type="text/css">
<![CDATA[
	.st0{fill:#010101;}
]]>
</style>
<g>
	<path class="st0" d="M480,265H232v179l248,36V265L480,265z"/>
	<path class="st0" d="M216,265H32v150l184,26.7V265L216,265z"/>
	<path class="st0" d="M480,32L232,67.4V249h248V32L480,32z"/>
	<path class="st0" d="M216,69.7L32,96v153h184V69.7L216,69.7z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-windows-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Windows Icon"
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
