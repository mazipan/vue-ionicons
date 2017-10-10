<template>
  <div class="ion android-textsms-icon" name="android-textsms-icon" aria-labelledby="android-textsms-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M408,64H96c-22.002,0-32,17.998-32,40v344l64-64h280c22.002,0,40-17.998,40-40V104C448,81.998,430.002,64,408,64z
		 M198.4,242H160v-40h38.4V242z M275.2,242h-38.4v-40h38.4V242z M352,242h-38.4v-40H352V242z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-textsms-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Textsms Icon"
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
