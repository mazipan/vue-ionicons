<template>
  <div class="ion ios-location-icon" name="ios-location-icon" aria-labelledby="ios-location-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,32c-79.529,0-144,64.471-144,144c0,112,144,304,144,304s144-192,144-304C400,96.471,335.529,32,256,32z M256,222.9
	c-25.9,0-46.9-21-46.9-46.9s21-46.9,46.9-46.9s46.9,21,46.9,46.9S281.9,222.9,256,222.9z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-location-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Location Icon"
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
