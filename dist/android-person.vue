<template>
  <div class="ion android-person-icon" name="android-person-icon" aria-labelledby="android-person-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,256c52.805,0,96-43.201,96-96s-43.195-96-96-96s-96,43.201-96,96S203.195,256,256,256z M256,304
		c-63.598,0-192,32.402-192,96v48h384v-48C448,336.402,319.598,304,256,304z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-person-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Person Icon"
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
