<template>
  <div class="ion android-pin-icon" name="android-pin-icon" aria-labelledby="android-pin-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,32c-88.004,0-160,70.557-160,156.801C96,306.4,256,480,256,480s160-173.6,160-291.199C416,102.557,344.004,32,256,32z
		 M256,244.801c-31.996,0-57.144-24.645-57.144-56c0-31.357,25.147-56,57.144-56s57.144,24.643,57.144,56
		C313.144,220.156,287.996,244.801,256,244.801z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-pin-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Pin Icon"
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
