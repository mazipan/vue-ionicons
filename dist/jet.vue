<template>
  <div class="ion jet-icon" name="jet-icon" aria-labelledby="jet-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<style type="text/css">
<![CDATA[
	.st0{fill:#010101;}
]]>
</style>
<path class="st0" d="M314.8,368.5L419,403l-3-52.7L302,247c0,0-25.9-173.7-28.2-192.3C268.5,14.4,255.9,0,255.9,0
	s-12.5,14.4-17.6,54.6C235.9,73.3,210,247,210,247L96,350.3L93,403l104.2-34.5l1.4,12.3l-52.7,58.3l18.3,27.4l73.3-9.1l18.3,54.6
	l18.5-54.6l73.4,9.1l18.3-27.4l-52.7-58.3L314.8,368.5z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "jet-icon",
    data () {
      let iconTitle = this.title ? this.title : "Jet Icon"
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
