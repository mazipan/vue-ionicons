<template>
  <div class="ion arrow-move-icon" name="arrow-move-icon" aria-labelledby="arrow-move-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="480,256 384,160 384,236 276,236 276,128 352,128 256,32 160,128 236,128 236,236 128,236 128,160 32,256 128,352 
	128,276 236,276 236,384 160,384 256,480 352,384 275.8,384 275.4,275.5 384,275.8 384,352 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-move-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Move Icon"
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
