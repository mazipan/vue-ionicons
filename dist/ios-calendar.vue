<template>
  <div class="ion ios-calendar-icon" name="ios-calendar-icon" aria-labelledby="ios-calendar-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="64" y="192" width="384" height="256"/>
	<polygon points="448,96 352,96 352,144 336,144 336,96 176,96 176,144 160,144 160,96 64,96 64,176 448,176 	"/>
	<rect x="160" y="64" width="16" height="32"/>
	<rect x="336" y="64" width="16" height="32"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-calendar-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Calendar Icon"
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
