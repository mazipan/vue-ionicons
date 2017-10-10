<template>
  <div class="ion ios-settings-strong-icon" name="ios-settings-strong-icon" aria-labelledby="ios-settings-strong-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M32,376h283.35c6.186-14.112,20.281-24,36.65-24s30.465,9.888,36.65,24H480v32h-91.35c-6.186,14.112-20.281,24-36.65,24
		s-30.465-9.888-36.65-24H32"/>
	<path d="M32,240h91.35c6.186-14.112,20.281-24,36.65-24s30.465,9.888,36.65,24H480v32H196.65c-6.186,14.112-20.281,24-36.65,24
		s-30.465-9.888-36.65-24H32"/>
	<path d="M32,104h283.35c6.186-14.112,20.281-24,36.65-24s30.465,9.888,36.65,24H480v32h-91.35c-6.186,14.112-20.281,24-36.65,24
		s-30.465-9.888-36.65-24H32"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-settings-strong-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Settings Strong Icon"
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
