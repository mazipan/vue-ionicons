<template>
  <div class="ion ios-book-icon" name="ios-book-icon" aria-labelledby="ios-book-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M164.466,64C109.266,64,64,89.98,64,143v1v8.994V417v9h6.215h10.959h4.967c12.86-26.334,44.238-42,78.325-42
		c40.224,0,73.877,27.528,81.616,64H248V95.346C230.76,73.951,198.981,64,164.466,64z"/>
	<path d="M347.621,64c-34.332,0-66.713,9.851-83.621,31.011V448h1.797c7.739-36.472,41.495-64,81.722-64
		c34.085,0,61.149,11.666,78.429,42h4.967h10.959H448v-17V148v-4v-1C448,89.98,402.823,64,347.621,64z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-book-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Book Icon"
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
