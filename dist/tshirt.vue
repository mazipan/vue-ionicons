<template>
  <div class="ion tshirt-icon" name="tshirt-icon" aria-labelledby="tshirt-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M480,96L320,48c-13.988,27.227-30.771,40.223-63.769,40.223C223.723,87.676,205.722,75,192,48L32,96l32,88l64-8l-16,288h288
	l-16-288l64,8L480,96z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "tshirt-icon",
    data () {
      let iconTitle = this.title ? this.title : "Tshirt Icon"
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
