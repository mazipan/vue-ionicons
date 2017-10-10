<template>
  <div class="ion university-icon" name="university-icon" aria-labelledby="university-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="256,64 32,176.295 64,197.367 64,400 96,416 96,217.849 255.852,320 387.996,234.549 480,174.727 	"/>
	<path d="M390.13,256L256,343.768L120.531,256L112,337.529C128,349.984,224,416,256.002,448C288,416,384,350.031,400,337.561
		L390.13,256z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "university-icon",
    data () {
      let iconTitle = this.title ? this.title : "University Icon"
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
