<template>
  <div class="ion minus-round-icon" name="minus-round-icon" aria-labelledby="minus-round-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32
	C448,238.3,434.3,224,417.4,224z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "minus-round-icon",
    data () {
      let iconTitle = this.title ? this.title : "Minus Round Icon"
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
