<template>
  <div class="ion ios-list-outline-icon" name="ios-list-outline-icon" aria-labelledby="ios-list-outline-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<path d="M432,80v352H80V80H432 M448,64H64v384h384V64L448,64z"/>
		<g>
			<rect x="192" y="152" width="192" height="16"/>
		</g>
		<g>
			<rect x="192" y="248" width="192" height="16"/>
		</g>
		<g>
			<rect x="192" y="344" width="192" height="16"/>
		</g>
	</g>
	<circle cx="144" cy="160" r="16"/>
	<circle cx="144" cy="256" r="16"/>
	<circle cx="144" cy="352" r="16"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-list-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios List Outline Icon"
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
