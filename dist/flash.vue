<template>
  <div class="ion flash-icon" name="flash-icon" aria-labelledby="flash-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="96,288 243,288 191.9,480 416,224 269,224 320,32 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "flash-icon",
    data () {
      let iconTitle = this.title ? this.title : "Flash Icon"
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
