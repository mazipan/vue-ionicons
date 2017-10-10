<template>
  <div class="ion ios-box-outline-icon" name="ios-box-outline-icon" aria-labelledby="ios-box-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M287.8,240c8.8,0,16.1,7.2,16.1,16s-7,16-15.9,16h-64c-8.8,0-16-7.2-16-16s7.2-16,16-16h63 M288,224h-64
		c-17.6,0-32,14.4-32,32s14.4,32,32,32h64c17.6,0,32-14.4,32-32S305.6,224,288,224L288,224z"/>
	<g>
		<path d="M416,112H96v80h16v208h288V192h16V112z M384,384H128V192h256V384z M400,176H112v-48h288V176z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-box-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Box Outline Icon"
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
