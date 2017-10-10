<template>
  <div class="ion navicon-icon" name="navicon-icon" aria-labelledby="navicon-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="96" y="241" width="320" height="32"/>
	<rect x="96" y="145" width="320" height="32"/>
	<rect x="96" y="337" width="320" height="32"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "navicon-icon",
    data () {
      let iconTitle = this.title ? this.title : "Navicon Icon"
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
