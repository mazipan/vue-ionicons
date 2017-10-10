<template>
  <div class="ion android-warning-icon" name="android-warning-icon" aria-labelledby="android-warning-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_31_">
	<g>
		<path d="M32,464h448L256,48L32,464z M280,400h-48v-48h48V400z M280,320h-48v-96h48V320z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-warning-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Warning Icon"
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
