<template>
  <div class="ion ios-chatboxes-outline-icon" name="ios-chatboxes-outline-icon" aria-labelledby="ios-chatboxes-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="64,64 320,64 320,160 336,160 336,48 48,48 48,272 160,272 160,256 64,256 	"/>
	<path d="M176,176v224h162.6l64,64H416v-64h48V176H176z M448,384h-48v54.6L345,384H192V192h256V384z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-chatboxes-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Chatboxes Outline Icon"
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
