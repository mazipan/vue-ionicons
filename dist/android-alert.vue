<template>
  <div class="ion android-alert-icon" name="android-alert-icon" aria-labelledby="android-alert-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_30_">
	<g>
		<path d="M256,48C141.6,48,48,141.601,48,256s93.6,208,208,208c114.4,0,208-93.601,208-208S370.4,48,256,48z M280,360h-48v-40h48
			V360z M280,272h-48V144h48V272z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-alert-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Alert Icon"
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
