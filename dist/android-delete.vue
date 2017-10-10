<template>
  <div class="ion android-delete-icon" name="android-delete-icon" aria-labelledby="android-delete-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M128,405.429C128,428.846,147.198,448,170.667,448h170.667C364.802,448,384,428.846,384,405.429V160H128V405.429z M416,96
		h-80l-26.785-32H202.786L176,96H96v32h320V96z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-delete-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Delete Icon"
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
