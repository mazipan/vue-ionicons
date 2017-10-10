<template>
  <div class="ion android-playstore-icon" name="android-playstore-icon" aria-labelledby="android-playstore-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M464,152H360c0-57-46.562-103.859-104-103.859C198.562,48.141,152,95,152,152H48C66.688,368,61,464,61,464h389.999
		C450.998,464,445.311,366,464,152z M256,74.105c43.008,0,77.999,34.895,77.999,77.895H178C178,109,212.991,74.105,256,74.105z
		 M204,397.64V228.867l142.999,84.387L204,397.64z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-playstore-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Playstore Icon"
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
