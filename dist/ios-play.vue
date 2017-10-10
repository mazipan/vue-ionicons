<template>
  <div class="ion ios-play-icon" name="ios-play-icon" aria-labelledby="ios-play-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M128,96v320l256-160L128,96L128,96z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-play-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Play Icon"
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
