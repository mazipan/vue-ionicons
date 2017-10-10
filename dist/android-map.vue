<template>
  <div class="ion android-map-icon" name="android-map-icon" aria-labelledby="android-map-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_34_">
	<g>
		<g>
			<path d="M437.333,64c-2.176,0-4.396,1.369-9.176,3.207S320,108.802,320,108.802L192,64L71.469,104.531
				C67.197,105.604,64,109.864,64,115.197v322.136C64,443.729,68.271,448,74.666,448c1.828,0,6.505-2.33,9.087-3.319
				S192,403.197,192,403.197L320,448l120.531-40.531c4.271-1.073,7.469-5.334,7.469-10.667V74.666C448,68.271,443.729,64,437.333,64
				z M320,405.333l-128-44.802V106.666l128,44.803V405.333z"/>
		</g>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-map-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Map Icon"
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
