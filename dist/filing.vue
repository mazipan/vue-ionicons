<template>
  <div class="ion filing-icon" name="filing-icon" aria-labelledby="filing-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M381,128.6H132.1c-12.1,0-19.5,0-19.5,20.4v28.1h288V149C400.6,128.6,393.2,128.6,381,128.6z"/>
	<path d="M333,96.5H180c-13.1,0-19.5,0.3-19.5,18.7h192C352.4,96.8,346.1,96.5,333,96.5z"/>
	<path d="M432.4,169.6l-15.9-9.4v32.3h-321v-32.3l-15.2,9.4c-14.3,8.9-17.8,15.3-15,40.9l17.5,184.8c3.7,20.7,15.9,21.2,24,21.2
		h299.9c8.1,0,20.2-0.5,23.9-21.2l17.2-184.4C450.1,186.5,445.8,178.1,432.4,169.6z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "filing-icon",
    data () {
      let iconTitle = this.title ? this.title : "Filing Icon"
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
