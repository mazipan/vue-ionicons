<template>
  <div class="ion location-icon" name="location-icon" aria-labelledby="location-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,64c-65.9,0-119.3,53.7-119.3,120c0,114.6,119.3,264,119.3,264s119.3-149.4,119.3-264C375.3,117.7,321.9,64,256,64z
		 M256,242.2c-31.2,0-56.4-25.4-56.4-56.7c0-31.3,25.3-56.8,56.4-56.8c31.2,0,56.4,25.4,56.4,56.8
		C312.4,216.8,287.2,242.2,256,242.2z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "location-icon",
    data () {
      let iconTitle = this.title ? this.title : "Location Icon"
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
