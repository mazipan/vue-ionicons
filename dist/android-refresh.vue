<template>
  <div class="ion android-refresh-icon" name="android-refresh-icon" aria-labelledby="android-refresh-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,388c-72.597,0-132-59.405-132-132c0-72.601,59.403-132,132-132c36.3,0,69.299,15.4,92.406,39.601L278,234h154V80
		l-51.698,51.702C348.406,99.798,304.406,80,256,80c-96.797,0-176,79.203-176,176s78.094,176,176,176
		c81.045,0,148.287-54.134,169.401-128H378.85C360.105,353.561,311.712,388,256,388z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-refresh-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Refresh Icon"
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
