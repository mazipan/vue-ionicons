<template>
  <div class="ion ios-calendar-outline-icon" name="ios-calendar-outline-icon" aria-labelledby="ios-calendar-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<style type="text/css">
<![CDATA[
	.st0{fill:none;}
]]>
</style>
<polyline class="st0" points="80,112 80,176 432,176 432,112 "/>
<path d="M352,96V64h-16v32H176V64h-16v32H64v352h384V96H352z M432,432H80V192h352V432z M432,176H80v-64h80v32h16v-32h160v32h16v-32
	h80V176z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-calendar-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Calendar Outline Icon"
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
