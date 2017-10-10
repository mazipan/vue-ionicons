<template>
  <div class="ion android-happy-icon" name="android-happy-icon" aria-labelledby="android-happy-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,48C140.563,48,48,141.6,48,256c0,114.4,92.563,208,208,208s208-93.6,208-208C464,141.6,370.401,48,256,48z M256,422.4
	c-91.518,0-166.404-74.883-166.404-166.4c0-91.518,74.887-166.4,166.404-166.4S422.404,164.482,422.404,256
	C422.404,347.518,347.518,422.4,256,422.4z M328.8,235.2c17.683,0,31.201-13.518,31.201-31.2s-13.519-31.2-31.201-31.2
	c-17.682,0-31.2,13.518-31.2,31.2S311.118,235.2,328.8,235.2z M183.2,235.2c17.682,0,31.2-13.518,31.2-31.2s-13.519-31.2-31.2-31.2
	c-17.683,0-31.201,13.518-31.201,31.2S165.518,235.2,183.2,235.2z M256,370.4c48.883,0,89.436-30.164,106.081-72.801H149.919
	C166.564,340.236,207.117,370.4,256,370.4z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-happy-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Happy Icon"
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
