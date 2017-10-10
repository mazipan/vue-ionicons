<template>
  <div class="ion ios-albums-icon" name="ios-albums-icon" aria-labelledby="ios-albums-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M480,128H32v320h448V128L480,128z"/>
	<rect x="72" y="96" width="368" height="16"/>
	<rect x="104" y="64" width="304" height="16"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-albums-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Albums Icon"
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
