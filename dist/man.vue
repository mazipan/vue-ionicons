<template>
  <div class="ion man-icon" name="man-icon" aria-labelledby="man-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,106.6c20.6,0.1,37.3-16.6,37.3-37.3c0-20.6-16.7-37.3-37.3-37.3c-20.6,0-37.3,16.7-37.3,37.3
	C218.7,89.9,235.4,106.6,256,106.6z"/>
<g>
	<path d="M293.4,115H256h-37.4c-28.2,0-46.6,24.8-46.6,48.4V277c0,22,31,22,31,0V172h6v285.6c0,30.4,42,29.4,43,0V293h7h1v164.7
		c1.7,31.2,43,28.2,43-0.1V172h5v105c0,22,32,22,32,0V163.4C340,139.9,321.5,115,293.4,115z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "man-icon",
    data () {
      let iconTitle = this.title ? this.title : "Man Icon"
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
