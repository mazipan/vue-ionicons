<template>
  <div class="ion ios-email-icon" name="ios-email-icon" aria-labelledby="ios-email-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="448,384 448,141.8 316.9,241.6 385,319 383,321 304.1,251.4 256,288 207.9,251.4 129,321 127,319 195,241.6 
		64,142 64,384 	"/>
	<polygon points="439.7,128 72,128 256,267.9 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-email-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Email Icon"
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
