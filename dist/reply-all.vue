<template>
  <div class="ion reply-all-icon" name="reply-all-icon" aria-labelledby="reply-all-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M304.5,192v-80L152.7,255.8L304.5,390v-91.9c68,0,107.9,8.9,159.1,101.9C463.6,400,457.5,192,304.5,192z"/>
	<g>
		<polygon points="47.5,256 191.5,382.5 191.5,324 109.3,256 191.5,177.4 191.5,120.4 		"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "reply-all-icon",
    data () {
      let iconTitle = this.title ? this.title : "Reply All Icon"
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
