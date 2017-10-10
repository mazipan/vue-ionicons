<template>
  <div class="ion arrow-resize-icon" name="arrow-resize-icon" aria-labelledby="arrow-resize-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="288,96 337.9,145.9 274,209.7 274,209.7 145.9,337.9 96,288 96,416 224,416 174.1,366.1 357.4,182.9 366.1,174.1 
	416,224 416,96 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-resize-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Resize Icon"
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
