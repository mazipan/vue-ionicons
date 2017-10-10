<template>
  <div class="ion videocamera-icon" name="videocamera-icon" aria-labelledby="videocamera-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M367,185.3c0-5.1-4-9.3-9.2-9.3H306v-32.2c0-35.2-29.3-63.8-64.9-63.8H63v48h176.1c4.5,0,9.9,5.6,9.9,10.1V176H41.4
	c-5.2,0-9.4,4.2-9.4,9.3v170.4v55.7v11.3c0,5.1,4.2,9.3,9.4,9.3h316.4c5.2,0,9.2-4.2,9.2-9.3v-64.5l113,34.7v-88.2v-88.2l-113,34.7
	V185.3z M258.2,341h-10.9H152h-11.9c-19.8,0-35.9-16-35.9-35.8s16.1-35.8,35.9-35.8c19.8,0,35.9,16.2,35.9,36
	c0,10-4.2,18.6-10.8,25.6h67.9c-6.6-7-10.8-15.6-10.8-25.6c0-19.8,16.1-35.9,35.9-35.9c19.8,0,35.9,15.9,35.9,35.7
	S278,341,258.2,341z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "videocamera-icon",
    data () {
      let iconTitle = this.title ? this.title : "Videocamera Icon"
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
