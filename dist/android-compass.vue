<template>
  <div class="ion android-compass-icon" name="android-compass-icon" aria-labelledby="android-compass-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,231.358c-13.442,0-24.643,11.2-24.643,24.642s11.2,24.643,24.643,24.643s24.643-11.2,24.643-24.643
	S269.442,231.358,256,231.358z M256,32C132.8,32,32,132.8,32,256s100.8,224,224,224s224-100.8,224-224S379.2,32,256,32z
	 M305.284,305.284L121.6,390.4l85.116-183.679L390.4,121.6L305.284,305.284z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-compass-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Compass Icon"
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
