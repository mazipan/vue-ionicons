<template>
  <div class="ion android-lock-icon" name="android-lock-icon" aria-labelledby="android-lock-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<path d="M376,186h-20v-40c0-55-45-100-100-100S156,91,156,146v40h-20c-22.002,0-40,17.998-40,40v200c0,22.002,17.998,40,40,40h240
			c22.002,0,40-17.998,40-40V226C416,203.998,398.002,186,376,186z M256,368c-22.002,0-40-17.998-40-40s17.998-40,40-40
			s40,17.998,40,40S278.002,368,256,368z M318.002,186H193.998v-40c0-34.004,28.003-62.002,62.002-62.002
			c34.004,0,62.002,27.998,62.002,62.002V186z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-lock-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Lock Icon"
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
