<template>
  <div class="ion ios-refresh-icon" name="ios-refresh-icon" aria-labelledby="ios-refresh-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,384.1
		c-70.7,0-128-57.3-128-128.1c0-70.8,57.3-128.1,128-128.1V84l96,64l-96,55.7v-55.8c-59.6,0-108.1,48.5-108.1,108.1
		c0,59.6,48.5,108.1,108.1,108.1S364.1,316,364.1,256H384C384,327,326.7,384.1,256,384.1z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-refresh-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Refresh Icon"
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
