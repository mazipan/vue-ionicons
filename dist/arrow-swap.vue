<template>
  <div class="ion arrow-swap-icon" name="arrow-swap-icon" aria-labelledby="arrow-swap-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M64,328v48c0,4.4,3.6,8,8,8h248v64l128-96l-128-96v64H72C67.6,320,64,323.6,64,328z"/>
	<path d="M448,184v-48c0-4.4-3.6-8-8-8H192V64L64,160l128,96v-64h248C444.4,192,448,188.4,448,184z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-swap-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Swap Icon"
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
