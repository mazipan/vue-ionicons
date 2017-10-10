<template>
  <div class="ion ios-paper-icon" name="ios-paper-icon" aria-labelledby="ios-paper-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M112,64v16v32v288H96V112H64v305.143C64,434.157,77.843,448,94.857,448h322.285C434.157,448,448,434.157,448,417.143V64H112
	z M160,112h128v16H160V112z M160,272h192v16H160V272z M400,368H160v-16h240V368z M400,208H160v-16h240V208z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-paper-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Paper Icon"
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
