<template>
  <div class="ion ios-cloud-icon" name="ios-cloud-icon" aria-labelledby="ios-cloud-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M399.3,232.8c0-1.2,0.2-2.4,0.2-3.6c0-64.3-52.8-117.2-116.8-117.2c-46.1,0-85.8,27.9-104.4,67c-8.1-4.1-17.1-6.4-26.8-6.4
	c-29.6,0-54.1,23.7-58.9,52C57.4,236.8,32,268.8,32,308.4c0,49.8,40.1,91.6,89.6,91.6H398c45,0,82-38.9,82-84.3
	C480,270.1,444.6,232.9,399.3,232.8z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-cloud-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Cloud Icon"
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
