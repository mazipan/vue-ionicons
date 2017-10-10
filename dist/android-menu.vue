<template>
  <div class="ion android-menu-icon" name="android-menu-icon" aria-labelledby="android-menu-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_3_">
	<g>
		<path d="M64,384h384v-42.666H64V384z M64,277.334h384v-42.667H64V277.334z M64,128v42.665h384V128H64z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-menu-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Menu Icon"
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
