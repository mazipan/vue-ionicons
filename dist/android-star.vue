<template>
  <div class="ion android-star-icon" name="android-star-icon" aria-labelledby="android-star-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="256,372.686 380.83,448 347.809,305.934 458,210.409 312.733,197.934 256,64 199.257,197.934 54,210.409 
		164.192,305.934 131.161,448 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-star-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Star Icon"
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
