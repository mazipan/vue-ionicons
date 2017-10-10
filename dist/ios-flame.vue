<template>
  <div class="ion ios-flame-icon" name="ios-flame-icon" aria-labelledby="ios-flame-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M223.899,32c25.691,145-96.732,142-95.895,288c0.686,119.51,104.975,160,128.143,160c23.166,0,113.88-26,126.931-160
		C393.711,210.816,310.572,96,223.899,32z M256.147,472c0,0-40.701-35.816-40.701-80c0-44.183,40.555-80,40.555-80
		s40.332,35.817,40.332,80C296.332,436.184,256.147,472,256.147,472z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-flame-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Flame Icon"
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
