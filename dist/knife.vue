<template>
  <div class="ion knife-icon" name="knife-icon" aria-labelledby="knife-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M285.7,32c-3.3,0-6,1.4-8,3.8C259,58.7,224,116.1,224,250.1c0,39.2,33,39.2,32,69.4c0,0.1,0,0.3,0,0.4
	c-2,47.1-14.9,111.1-16,130.3c-0.4,15.2,9.7,29.8,24.1,29.8c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c14.4,0,23.5-14.4,23.5-29.6V38.3
	C288,33.3,287.5,32,285.7,32z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "knife-icon",
    data () {
      let iconTitle = this.title ? this.title : "Knife Icon"
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
