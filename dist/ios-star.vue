<template>
  <div class="ion ios-star-icon" name="ios-star-icon" aria-labelledby="ios-star-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M480,207H308.6L256,47.9L203.4,207H32l140.2,97.9L117.6,464L256,365.4L394.4,464l-54.7-159.1L480,207z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-star-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Star Icon"
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
