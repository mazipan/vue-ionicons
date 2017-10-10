<template>
  <div class="ion arrow-return-left-icon" name="arrow-return-left-icon" aria-labelledby="arrow-return-left-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M192,96v64h248c4.4,0,8,3.6,8,8v240c0,4.4-3.6,8-8,8H136c-4.4,0-8-3.6-8-8v-48c0-4.4,3.6-8,8-8h248V224H192v64L64,192
	L192,96z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-return-left-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Return Left Icon"
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
