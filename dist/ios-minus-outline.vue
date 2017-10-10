<template>
  <div class="ion ios-minus-outline-icon" name="ios-minus-outline-icon" aria-labelledby="ios-minus-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<g>
			<path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7
				c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7
				C446.7,361.1,361.1,446.7,256,446.7z"/>
		</g>
	</g>
	<rect x="128" y="248" width="256" height="17"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-minus-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Minus Outline Icon"
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
