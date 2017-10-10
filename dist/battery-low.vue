<template>
  <div class="ion battery-low-icon" name="battery-low-icon" aria-labelledby="battery-low-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M42.1,384h381.1c5.5,0,9.9-4.5,9.9-10v-54h36.9c5.6,0,10.1-4.5,10.1-10V202c0-5.5-4.5-10-10.1-10H433v-54
	c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236C32,379.5,36.5,384,42.1,384z M401,160v32v32h32.2H448v64h-14.8H401v32v32
	H224l-32-192H401z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "battery-low-icon",
    data () {
      let iconTitle = this.title ? this.title : "Battery Low Icon"
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
