<template>
  <div class="ion social-rss-icon" name="social-rss-icon" aria-labelledby="social-rss-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M119.9,336.1c-30.8,0-55.9,25.1-55.9,55.8c0,30.8,25.1,55.6,55.9,55.6c30.9,0,55.9-24.9,55.9-55.6
		C175.8,361.2,150.8,336.1,119.9,336.1z"/>
	<path d="M64,192v79.9c48,0,94.1,14.2,128,48.1c33.9,33.9,48,79.9,48,128h80C320,308.1,204,192,64,192z"/>
	<path d="M64,64v79.9c171,0,303.9,133,303.9,304.1H448C448,236.3,276,64,64,64z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "social-rss-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Rss Icon"
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
