<template>
  <div class="ion social-angular-icon" name="social-angular-icon" aria-labelledby="social-angular-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="213.573,256 298.419,256 255.992,166.644 	"/>
	<path d="M255.981,32L32,112l46.12,272L256,480l177.75-96L480,112L255.981,32z M344,352l-26.589-56H194.584L168,352h-40L256,72
		l128,280H344z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-angular-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Angular Icon"
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
