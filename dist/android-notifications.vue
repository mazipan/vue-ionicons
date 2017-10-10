<template>
  <div class="ion android-notifications-icon" name="android-notifications-icon" aria-labelledby="android-notifications-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,464c22.779,0,41.411-18.719,41.411-41.6h-82.823C214.588,445.281,233.221,464,256,464z M390.589,339.2V224.8
	c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2s-31.059,13.518-31.059,31.2v14.559
	c-59.015,13.523-103.53,67.601-103.53,131.041v114.4L80,380.8v20.8h352v-20.8L390.589,339.2z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-notifications-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Notifications Icon"
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
