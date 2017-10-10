<template>
  <div class="ion android-radio-button-off-icon" name="android-radio-button-off-icon" aria-labelledby="android-radio-button-off-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_20_">
	<g>
		<path d="M256,48C141.601,48,48,141.601,48,256s93.601,208,208,208s208-93.601,208-208S370.399,48,256,48z M256,422.399
			c-91.518,0-166.399-74.882-166.399-166.399S164.482,89.6,256,89.6S422.4,164.482,422.4,256S347.518,422.399,256,422.399z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-radio-button-off-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Radio Button Off Icon"
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
