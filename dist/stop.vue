<template>
  <div class="ion stop-icon" name="stop-icon" aria-labelledby="stop-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M437.4,64H74.6C68.7,64,64,68.7,64,74.6v362.8c0,5.9,4.7,10.6,10.6,10.6h362.8c5.8,0,10.6-4.7,10.6-10.6V74.6
	C448,68.7,443.2,64,437.4,64z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "stop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Stop Icon"
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
