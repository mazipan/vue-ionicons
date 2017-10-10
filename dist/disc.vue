<template>
  <div class="ion disc-icon" name="disc-icon" aria-labelledby="disc-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,158.9c-53.7,0-97.2,43.5-97.2,97.2c0,53.7,43.5,97.1,97.2,97.1c53.7,0,97.2-43.5,97.2-97.1
		C353.2,202.4,309.7,158.9,256,158.9z M256,299.5c-24,0-43.5-19.5-43.5-43.5c0-24,19.5-43.5,43.5-43.5c24,0,43.5,19.5,43.5,43.5
		C299.5,280,280,299.5,256,299.5z"/>
	<path d="M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224s224-100.3,224-224C480,132.3,379.7,32,256,32z M256,378.8
		c-67.8,0-122.8-55-122.8-122.8c0-67.8,55-122.8,122.8-122.8c67.8,0,122.8,55,122.8,122.8C378.8,323.8,323.8,378.8,256,378.8z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "disc-icon",
    data () {
      let iconTitle = this.title ? this.title : "Disc Icon"
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
