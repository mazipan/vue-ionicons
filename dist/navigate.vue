<template>
  <div class="ion navigate-icon" name="navigate-icon" aria-labelledby="navigate-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="480,32 32,224 288,224 288,480 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "navigate-icon",
    data () {
      let iconTitle = this.title ? this.title : "Navigate Icon"
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
