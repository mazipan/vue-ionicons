<template>
  <div class="ion android-camera-icon" name="android-camera-icon" aria-labelledby="android-camera-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<circle cx="256" cy="280" r="63"/>
	<path d="M440,96h-88l-32-32H192l-32,32H72c-22.092,0-40,17.908-40,40v272c0,22.092,17.908,40,40,40h368c22.092,0,40-17.908,40-40
		V136C480,113.908,462.092,96,440,96z M256,392c-61.855,0-112-50.145-112-112s50.145-112,112-112s112,50.145,112,112
		S317.855,392,256,392z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-camera-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Camera Icon"
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
