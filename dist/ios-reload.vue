<template>
  <div class="ion ios-reload-icon" name="ios-reload-icon" aria-labelledby="ios-reload-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="PL_x5F_Reset_1_">
	<path d="M256,64c105.9,0,191.7,85.7,191.9,191.5l55-52.5l9,9.1L441.6,280L375,212.1l9-9.1l51.1,52.4
		C434.8,156.9,354.6,76.8,256,76.8c-98.8,0-179.2,80.4-179.2,179.2c0,98.8,80.4,179.2,179.2,179.2c78.6,0,145.5-51,169.5-121.6
		l12.4,3.5C412.3,393.2,340.6,448,256,448c-106,0-192-86-192-192S150,64,256,64z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-reload-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Reload Icon"
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
