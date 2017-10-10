<template>
  <div class="ion ios-drag-icon" name="ios-drag-icon" aria-labelledby="ios-drag-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="80" y="304" width="352" height="16"/>
	<rect x="80" y="248" width="352" height="16"/>
	<rect x="80" y="192" width="352" height="16"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-drag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Drag Icon"
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
