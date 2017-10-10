<template>
  <div class="ion android-sad-icon" name="android-sad-icon" aria-labelledby="android-sad-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,288c-45.443,0-83.675,26.076-102.205,64h204.41C339.675,314.076,301.443,288,256,288z"/>
	<path d="M256,48C140.563,48,48,141.6,48,256c0,114.4,92.563,208,208,208s208-93.6,208-208C464,141.6,370.401,48,256,48z M256,422.4
		c-91.518,0-166.404-74.883-166.404-166.4c0-91.518,74.887-166.4,166.404-166.4S422.404,164.482,422.404,256
		C422.404,347.518,347.518,422.4,256,422.4z"/>
	<path d="M328.8,235.2c17.683,0,31.201-13.518,31.201-31.2s-13.519-31.2-31.201-31.2c-17.682,0-31.2,13.518-31.2,31.2
		S311.118,235.2,328.8,235.2z"/>
	<path d="M183.2,235.2c17.682,0,31.2-13.518,31.2-31.2s-13.519-31.2-31.2-31.2c-17.683,0-31.201,13.518-31.201,31.2
		S165.518,235.2,183.2,235.2z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-sad-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Sad Icon"
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
