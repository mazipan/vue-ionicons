<template>
  <div class="ion share-icon" name="share-icon" aria-labelledby="share-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M352,377.9H102.4V198.2h57.5c0,0,14.1-19.7,42.7-38.2H83.2c-10.6,0-19.2,8.5-19.2,19.1v217.9c0,10.5,8.6,19.1,19.2,19.1
		h288c10.6,0,19.2-8.5,19.2-19.1V288L352,319.4V377.9z M320,224v63.9l128-95.5L320,96v59.7C165.2,155.7,160,320,160,320
		C203.8,248.5,236,224,320,224z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "share-icon",
    data () {
      let iconTitle = this.title ? this.title : "Share Icon"
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
