<template>
  <div class="ion ios-monitor-icon" name="ios-monitor-icon" aria-labelledby="ios-monitor-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M496,384V96H16v288h175v16h-64v16h257v-16h-64v-16H496z M32,112h448v256H32V112z"/>
<g>
	<rect x="48" y="128" width="416" height="224"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-monitor-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Monitor Icon"
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
