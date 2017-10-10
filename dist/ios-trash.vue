<template>
  <div class="ion ios-trash-icon" name="ios-trash-icon" aria-labelledby="ios-trash-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M320,113V93.3c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1,64,192,77.1,192,93.3V113h-80v15h21.1l23.6,290.7
		c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H400v-15H320z M207,93.3c0-8.1,6.2-14.3,14.3-14.3h69.5
		c8.1,0,14.3,6.2,14.3,14.3V113h-98V93.3H207z M202.7,401L192,160h14.5l10.9,241H202.7z M263,401h-14V160h14V401z M309.3,401h-14.6
		l10.8-241H320L309.3,401z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-trash-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Trash Icon"
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
