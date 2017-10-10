<template>
  <div class="ion android-apps-icon" name="android-apps-icon" aria-labelledby="android-apps-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon">
	<g>
		<path d="M96,176h80V96H96V176z M216,416h80v-80h-80V416z M96,416h80v-80H96V416z M96,296h80v-80H96V296z M216,296h80v-80h-80V296z
			 M336,96v80h80V96H336z M216,176h80V96h-80V176z M336,296h80v-80h-80V296z M336,416h80v-80h-80V416z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-apps-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Apps Icon"
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
