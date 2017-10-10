<template>
  <div class="ion paper-airplane-icon" name="paper-airplane-icon" aria-labelledby="paper-airplane-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<style type="text/css">
<![CDATA[
	.st0{fill:#010101;}
]]>
</style>
<path class="st0" d="M32,272l128,48l16,160l80-112l112,112L480,32L32,272z M350.7,417.4L256,320l128-176L192,297.8l-82.6-31
	l322-172.5L350.7,417.4z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "paper-airplane-icon",
    data () {
      let iconTitle = this.title ? this.title : "Paper Airplane Icon"
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
