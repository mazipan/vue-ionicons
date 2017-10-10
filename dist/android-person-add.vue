<template>
  <div class="ion android-person-add-icon" name="android-person-add-icon" aria-labelledby="android-person-add-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<path d="M304,256c52.805,0,96-43.201,96-96s-43.195-96-96-96s-96,43.201-96,96S251.195,256,304,256z M304,304
			c-63.598,0-192,32.402-192,96v48h384v-48C496,336.402,367.598,304,304,304z"/>
	</g>
	<g id="Icon_16_">
		<g>
			<path d="M112,224v-64H80v64H16v32h64v64h32v-64h64v-32H112z"/>
		</g>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-person-add-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Person Add Icon"
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
