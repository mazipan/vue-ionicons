<template>
  <div class="ion toggle-icon" name="toggle-icon" aria-labelledby="toggle-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M352,160c52.934,0,96,43.065,96,96s-43.066,96-96,96H160c-52.935,0-96-43.065-96-96s43.065-96,96-96H352 M352,128H160
		c-70.692,0-128,57.308-128,128s57.308,128,128,128h192c70.692,0,128-57.308,128-128S422.692,128,352,128L352,128z"/>
	<path d="M160,208c26.467,0,48,21.533,48,48c0,26.467-21.533,48-48,48s-48-21.533-48-48C112,229.533,133.533,208,160,208 M160,176
		c-44.183,0-80,35.817-80,80s35.817,80,80,80s80-35.817,80-80S204.183,176,160,176L160,176z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "toggle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Toggle Icon"
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
