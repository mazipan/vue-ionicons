<template>
  <div class="ion arrow-shrink-icon" name="arrow-shrink-icon" aria-labelledby="arrow-shrink-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="448,92.3 366.1,174.1 416,224 288,224 288,96 337.9,145.9 419.7,64 	"/>
	<polygon points="448,419.7 366.1,337.9 416,288 288,288 288,416 337.9,366.1 419.7,448 	"/>
	<polygon points="64,419.7 145.9,337.9 96,288 224,288 224,416 174.1,366.1 92.3,448 	"/>
	<polygon points="64,92.3 145.9,174.1 96,224 224,224 224,96 174.1,145.9 92.3,64 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-shrink-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Shrink Icon"
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
