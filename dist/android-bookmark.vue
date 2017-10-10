<template>
  <div class="ion android-bookmark-icon" name="android-bookmark-icon" aria-labelledby="android-bookmark-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M360,64H152c-22.002,0-40,17.998-40,40v344l144-64l144,64V104C400,81.998,382.002,64,360,64z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-bookmark-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Bookmark Icon"
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
