<template>
  <div class="ion information-icon" name="information-icon" aria-labelledby="information-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="288,448 288,192 192,192 192,208 224,208 224,448 192,448 192,464 320,464 320,448 	"/>
	<path d="M255.8,144.5c26.6,0,48.2-21.6,48.2-48.2s-21.6-48.2-48.2-48.2c-26.6,0-48.2,21.6-48.2,48.2S229.2,144.5,255.8,144.5z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "information-icon",
    data () {
      let iconTitle = this.title ? this.title : "Information Icon"
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
