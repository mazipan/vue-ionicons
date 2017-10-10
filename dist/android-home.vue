<template>
  <div class="ion android-home-icon" name="android-home-icon" aria-labelledby="android-home-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="208,448 208,320 304,320 304,448 401.6,448 401.6,256 464,256 256,64 48,256 110.4,256 110.4,448 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-home-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Home Icon"
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
