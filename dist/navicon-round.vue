<template>
  <div class="ion navicon-round-icon" name="navicon-round-icon" aria-labelledby="navicon-round-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32
		C448,238.3,434.3,224,417.4,224z"/>
	<path d="M417.4,96H94.6C77.7,96,64,110.3,64,128c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32
		C448,110.3,434.3,96,417.4,96z"/>
	<path d="M417.4,352H94.6C77.7,352,64,366.3,64,384c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32
		C448,366.3,434.3,352,417.4,352z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "navicon-round-icon",
    data () {
      let iconTitle = this.title ? this.title : "Navicon Round Icon"
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
