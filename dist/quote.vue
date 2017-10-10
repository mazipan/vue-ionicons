<template>
  <div class="ion quote-icon" name="quote-icon" aria-labelledby="quote-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<path d="M192,64c-40.646,0-72.483,11.229-94.627,33.373C75.229,119.517,64,151.354,64,192v256h160V192h-96
			c0-23.056,4.922-39.666,14.627-49.373C152.334,132.922,168.944,128,192,128"/>
	</g>
	<g>
		<path d="M416,64c-40.646,0-72.483,11.229-94.627,33.373C299.229,119.517,288,151.354,288,192v256h160V192h-96
			c0-23.056,4.922-39.666,14.627-49.373C376.334,132.922,392.944,128,416,128"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "quote-icon",
    data () {
      let iconTitle = this.title ? this.title : "Quote Icon"
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
