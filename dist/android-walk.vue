<template>
  <div class="ion android-walk-icon" name="android-walk-icon" aria-labelledby="android-walk-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M288,112c22.223,0,39.997-17.776,39.997-40c0-22.225-17.774-40-39.997-40s-40.003,17.775-40.003,40
		C247.997,94.224,265.777,112,288,112z"/>
	<path d="M288,232h104v-40h-72l-44.802-69.333c-7.698-11.667-18.136-18.136-30.933-18.136c-3.198,0-8.828,0.531-12.799,1.747
		L120,144v112h40v-80l40.531-16L120,480h40l56.698-164.271L267,384v96h38V352l-57.031-96l19.745-61.864L288,232z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-walk-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Walk Icon"
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
