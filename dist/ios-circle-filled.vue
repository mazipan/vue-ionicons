<template>
  <div class="ion ios-circle-filled-icon" name="ios-circle-filled-icon" aria-labelledby="ios-circle-filled-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7
			c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7
			C446.7,361.1,361.1,446.7,256,446.7z"/>
	</g>
</g>
<g>
	<g>
		<path d="M256,96c-88.4,0-160,71.6-160,160c0,88.4,71.6,160,160,160c88.4,0,160-71.6,160-160C416,167.6,344.4,96,256,96z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-circle-filled-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Circle Filled Icon"
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
