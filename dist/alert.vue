<template>
  <div class="ion alert-icon" name="alert-icon" aria-labelledby="alert-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M320,480H192v-96h128V480z M304,320h-96L192,32h128L304,320z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "alert-icon",
    data () {
      let iconTitle = this.title ? this.title : "Alert Icon"
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
