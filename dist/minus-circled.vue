<template>
  <div class="ion minus-circled-icon" name="minus-circled-icon" aria-labelledby="minus-circled-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H128v-32h256V272z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "minus-circled-icon",
    data () {
      let iconTitle = this.title ? this.title : "Minus Circled Icon"
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
