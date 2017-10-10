<template>
  <div class="ion android-expand-icon" name="android-expand-icon" aria-labelledby="android-expand-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="396.795,396.8 320,396.8 320,448 448,448 448,320 396.795,320 	"/>
	<polygon points="396.8,115.205 396.8,192 448,192 448,64 320,64 320,115.205 	"/>
	<polygon points="115.205,115.2 192,115.2 192,64 64,64 64,192 115.205,192 	"/>
	<polygon points="115.2,396.795 115.2,320 64,320 64,448 192,448 192,396.795 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-expand-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Expand Icon"
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
