<template>
  <div class="ion social-hackernews-icon" name="social-hackernews-icon" aria-labelledby="social-hackernews-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M64,64v384h384V64H64z M278,279v72h-40v-72l-66-120h47.1l39.7,83.6l38-83.6H342L278,279z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-hackernews-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Hackernews Icon"
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
