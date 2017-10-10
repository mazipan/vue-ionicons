<template>
  <div class="ion podium-icon" name="podium-icon" aria-labelledby="podium-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="32" y="256" width="128" height="192"/>
	<rect x="192" y="160" width="128" height="288"/>
	<rect x="352" y="320" width="128" height="128"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "podium-icon",
    data () {
      let iconTitle = this.title ? this.title : "Podium Icon"
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
