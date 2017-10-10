<template>
  <div class="ion medkit-icon" name="medkit-icon" aria-labelledby="medkit-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M472.2,144H352v-30.7C351,85.1,330.3,64,300.8,64H256h-44.8c-29.4,0-50.2,21.1-51.2,49.3V144H39.8c-4.4,0-7.8,3.6-7.8,8
		v288c0,4.4,3.3,8,7.8,8h432.5c4.4,0,7.8-3.6,7.8-8V152C480,147.6,476.7,144,472.2,144z M192,117.2c0-0.4,0-0.7,0-1s0-0.6,0-1
		c0-9.7,8.6-19.3,18.8-19.3H256h45.2c10.1,0,18.8,9.5,18.8,19.3c0,0.3,0,0.6,0,1s0,0.6,0,1V144H192V117.2z M352,320h-64v64h-64v-64
		h-64v-64h64v-64h64v64h64V320z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "medkit-icon",
    data () {
      let iconTitle = this.title ? this.title : "Medkit Icon"
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
