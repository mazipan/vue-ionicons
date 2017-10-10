<template>
  <div class="ion reply-icon" name="reply-icon" aria-labelledby="reply-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M448,400c0,0-36.8-208-224-208v-80L64,256l160,134.4v-92.3C325.6,298.1,395,307,448,400z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "reply-icon",
    data () {
      let iconTitle = this.title ? this.title : "Reply Icon"
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
