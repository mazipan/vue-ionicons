<template>
  <div class="ion android-people-icon" name="android-people-icon" aria-labelledby="android-people-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M337.454,232c33.599,0,61.092-27.002,61.092-60c0-32.997-27.493-60-61.092-60s-61.09,27.003-61.09,60
	C276.364,204.998,303.855,232,337.454,232z M174.546,232c33.599,0,61.09-27.002,61.09-60c0-32.997-27.491-60-61.09-60
	s-61.092,27.003-61.092,60C113.454,204.998,140.947,232,174.546,232z M174.546,276C126.688,276,32,298.998,32,346v54h288v-54
	C320,298.998,222.401,276,174.546,276z M337.454,287.003c-6.105,0-10.325,0-17.454,0.997c23.426,17.002,32,28,32,58v54h128v-54
	C480,298.998,385.312,287.003,337.454,287.003z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-people-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android People Icon"
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
