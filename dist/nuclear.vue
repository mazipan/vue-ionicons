<template>
  <div class="ion nuclear-icon" name="nuclear-icon" aria-labelledby="nuclear-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<circle cx="256" cy="272" r="48"/>
		<circle cx="256" cy="272" r="48"/>
	</g>
	<g>
		<path d="M480,272H320c0,23.9-13.1,44.7-32.6,55.7L365.6,464C433.1,425.4,480,355.3,480,272z"/>
		<path d="M256,208c11.7,0,22.7,3.2,32.1,8.7l80.6-138.3C335.6,59.1,297.1,48,256,48c-41.2,0-79.9,11.2-113.1,30.6l79.8,138.8
			C232.4,211.4,243.8,208,256,208z"/>
		<path d="M192,272H32c0,83.3,46.9,153.4,114.4,192l78.2-136.3C205.1,316.7,192,295.9,192,272z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "nuclear-icon",
    data () {
      let iconTitle = this.title ? this.title : "Nuclear Icon"
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
