<template>
  <div class="ion forward-icon" name="forward-icon" aria-labelledby="forward-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M288,298.1v92.3L448,256L288,112v80C100.8,192,64,400,64,400C117,307,186.4,298.1,288,298.1z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "forward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Forward Icon"
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
