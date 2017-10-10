<template>
  <div class="ion ios-pause-icon" name="ios-pause-icon" aria-labelledby="ios-pause-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="128" y="96" width="79" height="320"/>
	<rect x="305" y="96" width="79" height="320"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-pause-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pause Icon"
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
