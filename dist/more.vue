<template>
  <div class="ion more-icon" name="more-icon" aria-labelledby="more-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M113.7,304C86.2,304,64,282.6,64,256c0-26.5,22.2-48,49.7-48c27.6,0,49.8,21.5,49.8,48C163.5,282.6,141.3,304,113.7,304z"
		/>
	<path d="M256,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.3-48,49.8-48c27.5,0,49.7,21.5,49.7,48C305.7,282.6,283.5,304,256,304z"/>
	<path d="M398.2,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.2-48,49.8-48c27.5,0,49.8,21.5,49.8,48C448,282.6,425.8,304,398.2,304z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "more-icon",
    data () {
      let iconTitle = this.title ? this.title : "More Icon"
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
