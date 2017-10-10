<template>
  <div class="ion android-calendar-icon" name="android-calendar-icon" aria-labelledby="android-calendar-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M368.005,272h-96v96h96V272z M336.005,64v32h-160V64h-48v32h-24.01c-22.002,0-40,17.998-40,40v272
		c0,22.002,17.998,40,40,40h304.01c22.002,0,40-17.998,40-40V136c0-22.002-17.998-40-40-40h-24V64H336.005z M408.005,408h-304.01
		V196h304.01V408z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-calendar-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Calendar Icon"
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
