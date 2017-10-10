<template>
  <div class="ion arrow-right-a-icon" name="arrow-right-a-icon" aria-labelledby="arrow-right-a-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="448.5,256.5 256.5,64.5 256.5,176.5 64.5,176.5 64.5,336.5 256.5,336.5 256.5,448.5 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-right-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Right A Icon"
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
