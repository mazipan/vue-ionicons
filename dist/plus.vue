<template>
  <div class="ion plus-icon" name="plus-icon" aria-labelledby="plus-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 "/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "plus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Plus Icon"
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
