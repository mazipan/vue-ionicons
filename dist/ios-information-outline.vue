<template>
  <div class="ion ios-information-outline-icon" name="ios-information-outline-icon" aria-labelledby="ios-information-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<circle cx="251.5" cy="172" r="20"/>
		<polygon points="272,344 272,216 224,216 224,224 240,224 240,344 224,344 224,352 288,352 288,344 		"/>
	</g>
	<g>
		<path d="M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z
			 M256,446.7c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7
			C446.7,361.1,361.1,446.7,256,446.7z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-information-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Information Outline Icon"
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
