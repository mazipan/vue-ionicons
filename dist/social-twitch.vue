<template>
  <div class="ion social-twitch-icon" name="social-twitch-icon" aria-labelledby="social-twitch-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M80,32l-32,80v304h96v64h64l64-64h80l112-112V32H80z M256,272h-48V143h48V272z M368,272h-48V143h48V272z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-twitch-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Twitch Icon"
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
