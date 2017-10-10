<template>
  <div class="ion record-icon" name="record-icon" aria-labelledby="record-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,464c114.9,0,208-93.1,208-208c0-114.9-93.1-208-208-208C141.1,48,48,141.1,48,256C48,370.9,141.1,464,256,464z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "record-icon",
    data () {
      let iconTitle = this.title ? this.title : "Record Icon"
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
