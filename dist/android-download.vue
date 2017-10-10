<template>
  <div class="ion android-download-icon" name="android-download-icon" aria-labelledby="android-download-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M403.002,217.001C388.998,148.002,328.998,96,256,96c-57.998,0-107.998,32.998-132.998,81.001
	C63.002,183.002,16,233.998,16,296c0,65.996,53.999,120,120,120h260c55,0,100-45,100-100
	C496,263.002,455.004,219.999,403.002,217.001z M224,268v-76h64v76h68L256,368L156,268H224z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-download-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Download Icon"
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
