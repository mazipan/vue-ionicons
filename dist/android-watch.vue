<template>
  <div class="ion android-watch-icon" name="android-watch-icon" aria-labelledby="android-watch-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_11_">
	<g>
		<g>
			<path d="M416,256c0-51.001-24.004-96.001-60.996-125L336,16H176l-19.004,115C120.004,159.999,96,204.999,96,256
				c0,50.996,24.004,95.996,60.996,125L176,496h160l19.004-115C391.996,351.996,416,306.996,416,256z M136,256
				c0-66.001,54.004-120,120-120s120,53.999,120,120c0,65.996-54.004,120-120,120S136,321.996,136,256z"/>
		</g>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-watch-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Watch Icon"
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
