<template>
  <div class="ion drag-icon" name="drag-icon" aria-labelledby="drag-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect y="144" width="512" height="32"/>
	<rect y="240" width="512" height="32"/>
	<rect y="336" width="512" height="32"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "drag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Drag Icon"
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
