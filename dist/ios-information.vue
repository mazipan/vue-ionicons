<template>
  <div class="ion ios-information-icon" name="ios-information-icon" aria-labelledby="ios-information-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z
		 M251.5,152c11.1,0,20,9,20,20s-9,20-20,20c-11,0-20-9-20-20S240.4,152,251.5,152z M288,352h-64v-8h16V224h-16v-8h48v128h16V352z"
		/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-information-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Information Icon"
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
