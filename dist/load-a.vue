<template>
  <div class="ion load-a-icon" name="load-a-icon" aria-labelledby="load-a-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<circle cx="256" cy="96" r="64"/>
	<circle cx="96" cy="256" r="48"/>
	<circle cx="368" cy="144" r="8"/>
	<path d="M180.1,107.6c-19.9-20.1-52.2-20.1-72.1,0c-19.9,20.1-19.9,52.7,0,72.8c19.9,20.1,52.2,20.1,72.1,0
		C200,160.3,200,127.7,180.1,107.6z"/>
	<circle cx="416" cy="256" r="16"/>
	<circle cx="369" cy="369" r="24"/>
	<circle cx="256" cy="416" r="32"/>
	<circle cx="144" cy="368" r="40"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "load-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Load A Icon"
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
