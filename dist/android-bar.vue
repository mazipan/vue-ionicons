<template>
  <div class="ion android-bar-icon" name="android-bar-icon" aria-labelledby="android-bar-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_37_">
	<g>
		<path d="M234.667,277.333V408H128v40h256v-40H277.333V277.333L448,106.667V64H64v42.667L234.667,277.333z M160,149.333
			l-42.667-42.666h277.334L352,149.333H160z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-bar-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Bar Icon"
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
