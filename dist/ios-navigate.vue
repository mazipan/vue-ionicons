<template>
  <div class="ion ios-navigate-icon" name="ios-navigate-icon" aria-labelledby="ios-navigate-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,384
		V256H128.3L352,160L256,384z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-navigate-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Navigate Icon"
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
