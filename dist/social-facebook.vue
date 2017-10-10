<template>
  <div class="ion social-facebook-icon" name="social-facebook-icon" aria-labelledby="social-facebook-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64
	H288z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-facebook-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Facebook Icon"
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
