<template>
  <div class="ion ios-filing-icon" name="ios-filing-icon" aria-labelledby="ios-filing-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,288c-29.8,0-54.9-20.4-62-48H80v144h176h176V240H318C310.9,267.6,285.8,288,256,288z"/>
	<path d="M144,224h16h9h39c0,26.5,21.5,48,48,48s48-21.5,48-48h40h8h16h8h56l-63.5-96H368v80h-16v-80H160v80h-16v-80h-0.5L80,224h57
		H144z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-filing-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Filing Icon"
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
