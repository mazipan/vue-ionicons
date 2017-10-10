<template>
  <div class="ion ios-grid-view-icon" name="ios-grid-view-icon" aria-labelledby="ios-grid-view-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="192" y="192" width="128" height="128"/>
	<path d="M64,64v384h384V64H64z M416,192h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16
		v80h80V192z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-grid-view-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Grid View Icon"
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
