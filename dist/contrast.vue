<template>
  <div class="ion contrast-icon" name="contrast-icon" aria-labelledby="contrast-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z
	 M391.8,391.8C355.5,428,307,448,256,448V64c51,0,99.5,20,135.8,56.2C428,156.5,448,204.7,448,256C448,307.3,428,355.5,391.8,391.8z
	"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "contrast-icon",
    data () {
      let iconTitle = this.title ? this.title : "Contrast Icon"
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
