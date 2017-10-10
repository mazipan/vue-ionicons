<template>
  <div class="ion ios-minus-icon" name="ios-minus-icon" aria-labelledby="ios-minus-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M384,265H128v-17h256V265z"
		/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-minus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Minus Icon"
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
