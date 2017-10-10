<template>
  <div class="ion social-dropbox-icon" name="social-dropbox-icon" aria-labelledby="social-dropbox-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="177,77 64,150.9 142.1,213.6 256,143.1 	"/>
	<polygon points="64,276.3 177,350.2 256,284.1 142.1,213.6 	"/>
	<polygon points="256,284.1 335,350.2 448,276.3 369.9,213.6 	"/>
	<polygon points="448,150.9 335,77 256,143.1 369.9,213.6 	"/>
	<polygon points="256.2,298.3 176.4,364.3 142,342.1 142,367 256,435 370,367 370,342.1 335.8,364.3 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-dropbox-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Dropbox Icon"
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
