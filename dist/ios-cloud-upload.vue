<template>
  <div class="ion ios-cloud-upload-icon" name="ios-cloud-upload-icon" aria-labelledby="ios-cloud-upload-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="248" y="352" width="16" height="96"/>
	<path d="M399.3,183.6c0-1.2,0.2-2.4,0.2-3.6c0-64.3-52.8-116.4-116.8-116.4c-46.1,0-85.8,27.1-104.4,66.3
		c-8.1-4.1-17.1-6.4-26.8-6.4c-29.6,0-54.1,23.6-58.9,52C57.4,187.6,32,222.2,32,261.8c0,49.7,40.1,90.2,89.6,90.2H182h31h35V205.8
		l-54.7,54.5l-11.6-11.6l74.5-74.3l74.5,74.3l-11.8,11.6L264,205.8V352h134c45,0,82-37.3,82-82.8C480,223.7,444.5,183.7,399.3,183.6
		z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-cloud-upload-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Cloud Upload Icon"
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
