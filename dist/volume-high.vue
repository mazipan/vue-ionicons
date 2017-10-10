<template>
  <div class="ion volume-high-icon" name="volume-high-icon" aria-labelledby="volume-high-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="231,407.8 231,104.3 136.1,192 32,192 32,320 136.1,320 	"/>
	<path d="M287.1,355.7c20.5-27.9,32.8-62.3,32.8-99.7c0-37.4-12.3-71.8-32.8-99.7l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.4
		c0,31.6-10.4,60.8-27.8,84.3L287.1,355.7z"/>
	<path d="M353.7,401.7c30-40.7,48-91.1,48-145.7s-18-104.9-48-145.7l-20.4,15.3c26.9,36.4,43,81.5,43,130.4
		c0,48.9-16.1,93.9-43,130.3L353.7,401.7z"/>
	<path d="M396.7,79.4c36.4,49.3,57.9,110.5,57.9,176.6c0,66.1-21.5,127.2-57.9,176.6l20.5,15.4c39.4-53.6,62.8-120,62.8-192
		c0-72-23.4-138.4-62.8-192L396.7,79.4z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "volume-high-icon",
    data () {
      let iconTitle = this.title ? this.title : "Volume High Icon"
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
