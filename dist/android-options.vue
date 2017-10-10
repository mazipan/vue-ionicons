<template>
  <div class="ion android-options-icon" name="android-options-icon" aria-labelledby="android-options-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<rect x="32" y="384" width="272" height="32"/>
		<rect x="400" y="384" width="80" height="32"/>
		<path d="M384,447.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0
			c17.673,0,32,14.551,32,32.5V447.5z"/>
	</g>
	<g>
		<rect x="32" y="240" width="80" height="32"/>
		<rect x="208" y="240" width="272" height="32"/>
		<path d="M192,303.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0
			c17.673,0,32,14.551,32,32.5V303.5z"/>
	</g>
	<g>
		<rect x="32" y="96" width="272" height="32"/>
		<rect x="400" y="96" width="80" height="32"/>
		<path d="M384,159.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0
			c17.673,0,32,14.551,32,32.5V159.5z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-options-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Options Icon"
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
