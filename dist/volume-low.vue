<template>
  <div class="ion volume-low-icon" name="volume-low-icon" aria-labelledby="volume-low-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="311,407.7 311,104.4 216.2,192 112,192 112,320 216.2,320 	"/>
	<path d="M367.2,355.6c20.5-27.8,32.8-62.3,32.8-99.6c0-37.4-12.3-71.8-32.8-99.6l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.3
		c0,31.6-10.4,60.7-27.8,84.3L367.2,355.6z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "volume-low-icon",
    data () {
      let iconTitle = this.title ? this.title : "Volume Low Icon"
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
