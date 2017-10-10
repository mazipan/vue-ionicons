<template>
  <div class="ion heart-icon" name="heart-icon" aria-labelledby="heart-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M429.9,95.6c-40.4-42.1-106-42.1-146.4,0L256,124.1l-27.5-28.6c-40.5-42.1-106-42.1-146.4,0c-45.5,47.3-45.5,124.1,0,171.4
		L256,448l173.9-181C475.4,219.7,475.4,142.9,429.9,95.6z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "heart-icon",
    data () {
      let iconTitle = this.title ? this.title : "Heart Icon"
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
