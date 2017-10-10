<template>
  <div class="ion home-icon" name="home-icon" aria-labelledby="home-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="448,288 256,64 64,288 112,288 112,448 208,448 208,320 304,320 304,448 400,448 400,288 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "home-icon",
    data () {
      let iconTitle = this.title ? this.title : "Home Icon"
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
