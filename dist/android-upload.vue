<template>
  <div class="ion android-upload-icon" name="android-upload-icon" aria-labelledby="android-upload-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M403.002,217.001C388.998,148.002,328.998,96,256,96c-57.998,0-107.998,32.998-132.998,81.001
	C63.002,183.002,16,233.998,16,296c0,65.996,53.999,120,120,120h260c55,0,100-45,100-100
	C496,263.002,455.004,219.999,403.002,217.001z M288,276v76h-64v-76h-68l100-100l100,100H288z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-upload-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Upload Icon"
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
