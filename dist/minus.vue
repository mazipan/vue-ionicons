<template>
  <div class="ion minus-icon" name="minus-icon" aria-labelledby="minus-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<rect x="64" y="224" width="384" height="64"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "minus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Minus Icon"
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
