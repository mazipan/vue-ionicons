<template>
  <div class="ion mic-c-icon" name="mic-c-icon" aria-labelledby="mic-c-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M329.2,32H182.9C152.5,32,128,55.4,128,84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0,29,24.5,52.2,54.9,52.2H213
	v77h86v-77h30.2c30.3,0,54.8-23.2,54.8-52.2V309h-59v-37h59v-43h-59v-37h59v-43h-59v-37h59V84.4C384,55.4,359.5,32,329.2,32z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "mic-c-icon",
    data () {
      let iconTitle = this.title ? this.title : "Mic C Icon"
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
