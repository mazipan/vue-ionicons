<template>
  <div class="ion asterisk-icon" name="asterisk-icon" aria-labelledby="asterisk-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="480,224 293.172,231.487 401.688,64 342.441,32 256,208 169.824,32 110.328,64 218.828,231.487 32,224 32,288 
	217.537,277.934 113.65,448 169.619,480 256,304 342.381,480 398.33,448 294.463,277.934 480,288 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "asterisk-icon",
    data () {
      let iconTitle = this.title ? this.title : "Asterisk Icon"
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
