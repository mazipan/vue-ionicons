<template>
  <div class="ion ios-information-empty-icon" name="ios-information-empty-icon" aria-labelledby="ios-information-empty-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<circle cx="251.5" cy="172" r="20"/>
		<polygon points="272,344 272,216 224,216 224,224 240,224 240,344 224,344 224,352 288,352 288,344 		"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-information-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Information Empty Icon"
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
