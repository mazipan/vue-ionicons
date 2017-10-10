<template>
  <div class="ion connection-bars-icon" name="connection-bars-icon" aria-labelledby="connection-bars-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="80" y="352" width="64" height="64"/>
	<rect x="176" y="288" width="64" height="128"/>
	<rect x="272" y="192" width="64" height="224"/>
	<rect x="368" y="96" width="64" height="320"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "connection-bars-icon",
    data () {
      let iconTitle = this.title ? this.title : "Connection Bars Icon"
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
