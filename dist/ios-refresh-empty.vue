<template>
  <div class="ion ios-refresh-empty-icon" name="ios-refresh-empty-icon" aria-labelledby="ios-refresh-empty-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,384.1c-70.7,0-128-57.3-128-128.1c0-70.8,57.3-128.1,128-128.1V84l96,64l-96,55.7v-55.8
		c-59.6,0-108.1,48.5-108.1,108.1c0,59.6,48.5,108.1,108.1,108.1S364.1,316,364.1,256H384C384,327,326.7,384.1,256,384.1z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-refresh-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Refresh Empty Icon"
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
