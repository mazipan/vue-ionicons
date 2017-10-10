<template>
  <div class="ion arrow-return-right-icon" name="arrow-return-right-icon" aria-labelledby="arrow-return-right-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M448,192l-128,96v-64H128v128h248c4.4,0,8,3.6,8,8v48c0,4.4-3.6,8-8,8H72c-4.4,0-8-3.6-8-8V168c0-4.4,3.6-8,8-8h248V96
	L448,192z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-return-right-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Return Right Icon"
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
