<template>
  <div class="ion ios-color-wand-icon" name="ios-color-wand-icon" aria-labelledby="ios-color-wand-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="198.011,159.22 163.968,193.337 420.064,450 454,415.883 	"/>
	<rect x="182" y="62" width="32" height="64"/>
	<rect x="182" y="266" width="32" height="64"/>
	<rect x="274" y="178" width="64" height="32"/>
	<polygon points="303.941,112.143 281.314,89.465 236.06,134.82 258.687,157.498 	"/>
	<polygon points="92.06,112.143 137.314,157.498 159.941,134.82 114.687,89.465 	"/>
	<polygon points="92.06,279.141 114.687,301.816 159.941,256.462 137.314,233.784 	"/>
	<rect x="58" y="178" width="64" height="32"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-color-wand-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Color Wand Icon"
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
