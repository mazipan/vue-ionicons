<template>
  <div class="ion printer-icon" name="printer-icon" aria-labelledby="printer-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M423.8,128H384V64H128v64H88.2C60.3,128,32,144.9,32,182.6v123.8c0,38,28.3,61.6,56.2,61.6c0,0,30.4,0,39.8,0v112h5h11h224
		h8h8V368c10.3,0,39.8,0,39.8,0c27.9,0,56.2-22.6,56.2-53.6V182.6C480,146.9,451.8,128,423.8,128z M368,464H144V288h224V464z
		 M368,128H144V80h224V128z M416,192h-17v-16h17V192z"/>
	<rect x="160" y="320" width="192" height="16"/>
	<rect x="160" y="368" width="192" height="16"/>
	<rect x="160" y="416" width="192" height="16"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "printer-icon",
    data () {
      let iconTitle = this.title ? this.title : "Printer Icon"
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
