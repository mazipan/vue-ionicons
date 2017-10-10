<template>
  <div class="ion android-microphone-icon" name="android-microphone-icon" aria-labelledby="android-microphone-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,320c37.712,0,68.571-30.924,68.571-68.714V100.714C324.571,62.924,293.712,32,256,32s-68.571,30.924-68.571,68.714
		v150.572C187.429,289.076,218.288,320,256,320z M377.139,244.548c0,68.714-58.282,116.815-121.139,116.815
		s-121.139-48.102-121.139-116.815H96c0,77.873,61.719,143.153,137.144,153.465V480h45.713v-81.987
		C354.281,386.561,416,322.421,416,244.548H377.139z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-microphone-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Microphone Icon"
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
