<template>
  <div class="ion bookmark-icon" name="bookmark-icon" aria-labelledby="bookmark-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M344,64H168c-4.4,0-8,3.6-8,8v56h192V72C352,67.6,348.4,64,344,64z"/>
	<polygon points="160,448 256,352 352,448 352,144 160,144 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "bookmark-icon",
    data () {
      let iconTitle = this.title ? this.title : "Bookmark Icon"
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
