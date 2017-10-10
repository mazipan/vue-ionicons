<template>
  <div class="ion arrow-up-a-icon" name="arrow-up-a-icon" aria-labelledby="arrow-up-a-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="256.5,64.5 64.5,256.5 176.5,256.5 176.5,448.5 336.5,448.5 336.5,256.5 448.5,256.5 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-up-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Up A Icon"
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
