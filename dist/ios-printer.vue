<template>
  <div class="ion ios-printer-icon" name="ios-printer-icon" aria-labelledby="ios-printer-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<rect x="128" y="224" width="256" height="224"/>
</g>
<g>
	<rect x="127.5" y="224.5" width="256" height="224"/>
	<g>
		<rect x="111.5" y="64.5" width="288" height="32"/>
		<path d="M432.5,112.5h-352c-17.645,0-33,12.842-33,30.309v158.393c0,17.468,15.355,33.299,33,33.299h31v-126h288v126h33
			c17.645,0,31-15.831,31-33.299V142.809C463.5,125.342,450.145,112.5,432.5,112.5z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-printer-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Printer Icon"
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
