<template>
  <div class="ion android-mail-icon" name="android-mail-icon" aria-labelledby="android-mail-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_19_">
	<g>
		<path d="M437.332,80H74.668C51.199,80,32,99.198,32,122.667v266.666C32,412.802,51.199,432,74.668,432h362.664
			C460.801,432,480,412.802,480,389.333V122.667C480,99.198,460.801,80,437.332,80z M432,170.667L256,288L80,170.667V128
			l176,117.333L432,128V170.667z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-mail-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Mail Icon"
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
