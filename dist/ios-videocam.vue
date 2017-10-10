<template>
  <div class="ion ios-videocam-icon" name="ios-videocam-icon" aria-labelledby="ios-videocam-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M303.7,128h-221C63.9,128,47,142.1,47,160.7v187.9c0,18.6,16.9,35.4,35.7,35.4h221c18.8,0,33.3-16.8,33.3-35.4V160.7
		C337,142.1,322.5,128,303.7,128z"/>
	<path d="M367,213v85.6l98,53.4V160L367,213z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-videocam-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Videocam Icon"
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
