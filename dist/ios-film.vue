<template>
  <div class="ion ios-film-icon" name="ios-film-icon" aria-labelledby="ios-film-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M56,88v336h400V88H56z M128,408H72v-48h56V408z M128,344H72v-48h56V344z M128,280H72v-48h56V280z M128,216H72v-48h56V216z
		 M128,152H72v-48h56V152z M368,264H144v-16h224V264z M440,408h-56v-48h56V408z M440,344h-56v-48h56V344z M440,280h-56v-48h56V280z
		 M440,216h-56v-48h56V216z M440,152h-56v-48h56V152z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-film-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Film Icon"
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
