<template>
  <div class="ion pie-graph-icon" name="pie-graph-icon" aria-labelledby="pie-graph-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M32.6,256h32H256V64.6v-32c-5-0.4-10.6-0.6-16-0.6C125.1,32,32,125.1,32,240C32,245.4,32.2,251,32.6,256z"/>
	<path d="M109.8,402.2C147.9,449.6,206.4,480,272,480c114.9,0,208-93.1,208-208c0-65.6-30.4-124.1-77.8-162.2
		C370.5,84.3,331,67.9,288,64.6V288H64.6C67.9,331,84.3,370.5,109.8,402.2z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "pie-graph-icon",
    data () {
      let iconTitle = this.title ? this.title : "Pie Graph Icon"
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
