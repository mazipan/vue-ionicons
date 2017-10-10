<template>
  <div class="ion pause-icon" name="pause-icon" aria-labelledby="pause-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6
		C218.6,448,224,442.6,224,435.8z"/>
	<path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1
		C384,69.4,378.6,64,371.8,64z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "pause-icon",
    data () {
      let iconTitle = this.title ? this.title : "Pause Icon"
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
