<template>
  <div class="ion plus-circled-icon" name="plus-circled-icon" aria-labelledby="plus-circled-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H272v112h-32V272H128v-32
		h112V128h32v112h112V272z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "plus-circled-icon",
    data () {
      let iconTitle = this.title ? this.title : "Plus Circled Icon"
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
