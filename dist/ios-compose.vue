<template>
  <div class="ion ios-compose-icon" name="ios-compose-icon" aria-labelledby="ios-compose-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<polygon points="256,320 192,320 192,256 320,128 64,128 64,432 384,432 384,192 	"/>
	<polygon points="387.927,91.74 208,271.651 208,304 240.216,304 420.261,124.016 	"/>
	<path d="M444.213,80.312l-12.465-12.466C429.084,65.467,425.556,64,421.746,64c-3.812,0-7.304,1.468-9.929,3.85L399.666,80
		l0.08,0.08l11.293,11.293l21.02,21.02l12.15-12.15c2.383-2.625,3.791-6.117,3.791-9.929C448,86.504,446.592,82.975,444.213,80.312z
		"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-compose-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Compose Icon"
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
