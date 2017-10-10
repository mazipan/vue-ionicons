<template>
  <div class="ion ios-barcode-icon" name="ios-barcode-icon" aria-labelledby="ios-barcode-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M48,128v256h416V128H48z M128,320h-16V192h16V320z M192,352h-16V160h16V352z M263,336h-16V176h16V336z M336,352h-16V160h16
		V352z M400,320h-16V192h16V320z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-barcode-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Barcode Icon"
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
