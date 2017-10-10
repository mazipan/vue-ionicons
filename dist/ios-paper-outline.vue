<template>
  <div class="ion ios-paper-outline-icon" name="ios-paper-outline-icon" aria-labelledby="ios-paper-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M112,64v16v320h16V80h304v337.143c0,8.205-6.652,14.857-14.857,14.857H94.857C86.652,432,80,425.348,80,417.143V128h16v-16
		H64v305.143C64,434.157,77.843,448,94.857,448h322.285C434.157,448,448,434.157,448,417.143V64H112z"/>
	<rect x="160" y="112" width="128" height="16"/>
	<rect x="160" y="192" width="240" height="16"/>
	<rect x="160" y="272" width="192" height="16"/>
	<rect x="160" y="352" width="240" height="16"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-paper-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Paper Outline Icon"
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
