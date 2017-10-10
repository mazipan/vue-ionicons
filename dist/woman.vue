<template>
  <div class="ion woman-icon" name="woman-icon" aria-labelledby="woman-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M190.4,148.6L161,252.9c-6.3,22.8,20.7,31.7,27.3,10.3l26.3-96.2h7.4l-45.2,169H219v127c0,23,32,23,32,0V336h10v127
		c0,23,31,23,31,0V336h43.4l-46.2-169h8.4l26.3,96.2c6.5,21.9,33.3,12.5,27.3-10.2l-29.4-104.4c-4-11.8-18.2-32.6-42-33.6h-47.3
		C207.9,116,193.8,136.6,190.4,148.6z"/>
	<path d="M292.6,69.2c0-20.6-16.4-37.3-36.6-37.3c-20.2,0-36.6,16.7-36.6,37.3c0,20.6,16.4,37.3,36.6,37.3
		C276.2,106.5,292.6,89.8,292.6,69.2z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "woman-icon",
    data () {
      let iconTitle = this.title ? this.title : "Woman Icon"
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
