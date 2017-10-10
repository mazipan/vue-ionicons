<template>
  <div class="ion social-twitch-outline-icon" name="social-twitch-outline-icon" aria-labelledby="social-twitch-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<path d="M80,32l-32,80v304h96v64h64l64-64h80l112-112V32H80z M416,288l-64,64h-96.001L192,416v-64h-80V80h304V288z"/>
	</g>
	<rect x="320" y="143" width="48" height="129"/>
	<rect x="208" y="143" width="48" height="129"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-twitch-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Twitch Outline Icon"
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
