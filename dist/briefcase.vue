<template>
  <div class="ion briefcase-icon" name="briefcase-icon" aria-labelledby="briefcase-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M272,272h-32v-8H32v176c0,4.4,3.3,8,7.8,8h432.5c4.4,0,7.7-3.6,7.7-8V264H272V272z"/>
	<path d="M472.2,144H352v-30.7C351,85.1,330.3,64,300.8,64h-89.6c-29.4,0-50.2,21.1-51.2,49.3V144H39.8c-4.4,0-7.8,3.6-7.8,8v96h208
		v-8h32v8h208v-96C480,147.6,476.7,144,472.2,144z M320,116.2c0,0.3,0,0.6,0,1V144H192v-26.8c0-0.4,0-0.7,0-1c0-0.3,0-0.6,0-1
		c0-9.7,8.6-19.2,18.8-19.2h90.4c10.1,0,18.8,9.4,18.8,19.2C320,115.6,320,115.9,320,116.2z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "briefcase-icon",
    data () {
      let iconTitle = this.title ? this.title : "Briefcase Icon"
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
