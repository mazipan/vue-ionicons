<template>
  <div class="ion ios-list-icon" name="ios-list-icon" aria-labelledby="ios-list-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M64,64v384h384V64H64z M144,368c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,368,144,368z M144,272
		c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,272,144,272z M144,176c-8.836,0-16-7.164-16-16s7.164-16,16-16
		s16,7.164,16,16S152.836,176,144,176z M384,360H192v-16h192V360z M384,264H192v-16h192V264z M384,168H192v-16h192V168z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-list-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios List Icon"
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
