<template>
  <div class="ion stats-bars-icon" name="stats-bars-icon" aria-labelledby="stats-bars-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="176" y="96" width="64" height="320"/>
	<rect x="80" y="320" width="64" height="96"/>
	<rect x="272" y="256" width="64" height="160"/>
	<rect x="368" y="192" width="64" height="224"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "stats-bars-icon",
    data () {
      let iconTitle = this.title ? this.title : "Stats Bars Icon"
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
