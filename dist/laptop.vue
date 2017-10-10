<template>
  <div class="ion laptop-icon" name="laptop-icon" aria-labelledby="laptop-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M480,106.3c0-5.6-4.1-10.3-9.6-10.3H42.2c-5.5,0-10.2,4.6-10.2,10.3V368h448V106.3z M448,336H64V128h384V336z"/>
	<path d="M0,388.7C70.2,408.6,115.8,416,256,416c140.2,0,185.8-7.3,256-27.3V384H0V388.7z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "laptop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Laptop Icon"
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
