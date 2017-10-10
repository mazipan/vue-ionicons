<template>
  <div class="ion android-favorite-icon" name="android-favorite-icon" aria-labelledby="android-favorite-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,448l-30.164-27.211C118.718,322.442,48,258.61,48,179.095C48,114.221,97.918,64,162.4,64
		c36.399,0,70.717,16.742,93.6,43.947C278.882,80.742,313.199,64,349.6,64C414.082,64,464,114.221,464,179.095
		c0,79.516-70.719,143.348-177.836,241.694L256,448z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-favorite-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Favorite Icon"
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
