<template>
  <div class="ion ios-chatboxes-icon" name="ios-chatboxes-icon" aria-labelledby="ios-chatboxes-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="336,48 48,48 48,272 160,272 160,160 336,160 	"/>
	<path d="M176,176v224h162.6l64,64H416v-64h48V176H176z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-chatboxes-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Chatboxes Icon"
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
