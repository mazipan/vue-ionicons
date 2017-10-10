<template>
  <div class="ion funnel-icon" name="funnel-icon" aria-labelledby="funnel-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M256.085,32c-123.79,0-224.096,35.817-224.096,80c0,8.476,3.729,16.642,10.573,24.309l-0.061,0.008
		C74.408,175.213,192,313,192,352v87l0,0c0,22.688,28.891,41,64,41s64-18.312,64-41l0,0v-83.088c0-1.241,0.008-2.54,0.008-3.912
		C320.008,313,436,177.432,471,134.062v-0.002c6-7.007,8.977-14.408,8.977-22.06C479.977,67.817,379.875,32,256.085,32z
		 M256.178,160c-92.058,0-176.112-22-176.112-48s83.053-48,176.112-48c93.06,0,176.111,22.413,176.111,48S348.236,160,256.178,160z"
		/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "funnel-icon",
    data () {
      let iconTitle = this.title ? this.title : "Funnel Icon"
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
