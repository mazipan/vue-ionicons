<template>
  <div class="ion ios-pricetags-icon" name="ios-pricetags-icon" aria-labelledby="ios-pricetags-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<polygon points="464,64 464,201.377 227.153,467.48 240,480 480,208 480,64 		"/>
	</g>
	<g>
		<path d="M288,32L32,320l160,160l23.471-23.904l11.348-11.375L448,192V80V64V32H288z M352,160c-17.645,0-32-14.355-32-32
			s14.355-32,32-32s32,14.355,32,32S369.645,160,352,160z"/>
		<circle cx="352" cy="128" r="16"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-pricetags-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pricetags Icon"
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
