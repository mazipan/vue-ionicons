<template>
  <div class="ion flame-icon" name="flame-icon" aria-labelledby="flame-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M128.922,320c13.05,134,103.764,160,126.932,160c23.168,0,127.457-40.49,128.142-160c0.836-146-121.586-143-95.895-288
		C201.427,96,118.289,210.816,128.922,320z M215.667,368c0-44.183,40.187-80,40.187-80s40.701,35.817,40.701,80
		c0,44.184-40.701,80-40.701,80S215.667,412.184,215.667,368z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "flame-icon",
    data () {
      let iconTitle = this.title ? this.title : "Flame Icon"
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
