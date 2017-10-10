<template>
  <div class="ion ios-pricetag-outline-icon" name="ios-pricetag-outline-icon" aria-labelledby="ios-pricetag-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M464,32H304L48,320l160,160l256-288V32z M448,184L208.125,456L72.062,320L311.587,48H448V184z"/>
	<path d="M368,160c17.645,0,32-14.355,32-32s-14.355-32-32-32s-32,14.355-32,32S350.355,160,368,160z M368,112
		c8.836,0,16,7.163,16,16s-7.164,16-16,16s-16-7.163-16-16S359.164,112,368,112z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-pricetag-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pricetag Outline Icon"
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
