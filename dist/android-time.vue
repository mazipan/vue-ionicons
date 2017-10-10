<template>
  <div class="ion android-time-icon" name="android-time-icon" aria-labelledby="android-time-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_1_">
	<g>
		<g>
			<path fill-opacity="0.9" d="M256,43C137.789,43,43,138.851,43,256s94.789,213,213,213s213-95.851,213-213S373.149,43,256,43z
				 M256,426.4c-93.718,0-170.4-76.683-170.4-170.4S162.282,85.6,256,85.6S426.4,162.282,426.4,256S349.718,426.4,256,426.4z"/>
		</g>
		<polygon fill-opacity="0.9" points="266.65,149.5 234.7,149.5 234.7,277.3 346.525,344.393 362.5,317.768 266.65,261.324 		"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-time-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Time Icon"
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
