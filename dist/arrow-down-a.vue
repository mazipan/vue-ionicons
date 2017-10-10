<template>
  <div class="ion arrow-down-a-icon" name="arrow-down-a-icon" aria-labelledby="arrow-down-a-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="256.5,448.5 448.5,256.5 336.5,256.5 336.5,64.5 176.5,64.5 176.5,256.5 64.5,256.5 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-down-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Down A Icon"
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
