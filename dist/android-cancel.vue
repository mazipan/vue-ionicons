<template>
  <div class="ion android-cancel-icon" name="android-cancel-icon" aria-labelledby="android-cancel-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256,48C140.559,48,48,140.559,48,256c0,115.436,92.559,208,208,208c115.435,0,208-92.564,208-208
		C464,140.559,371.436,48,256,48z M360.002,330.881l-29.12,29.117L256,285.117l-74.881,74.881l-29.121-29.117L226.881,256
		l-74.883-74.881l29.121-29.116L256,226.881l74.881-74.878l29.12,29.116L285.119,256L360.002,330.881z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-cancel-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Cancel Icon"
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
