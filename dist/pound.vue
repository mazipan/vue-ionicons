<template>
  <div class="ion pound-icon" name="pound-icon" aria-labelledby="pound-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M125.2,352.3H32v-54.6h101.2l13.1-83.3H47v-54.6h107.2L176,32h63.9l-21.8,127.7h105.6L345.5,32h63.1l-21.8,127.7H480v54.6
		H378.1l-12.3,83.3H465v54.6H358.5L336,480h-63.1l21.8-127.7H188.3L166.5,480h-63.1L125.2,352.3z M209.4,214.3L197,297.7h105.6
		l12.3-83.3H209.4z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "pound-icon",
    data () {
      let iconTitle = this.title ? this.title : "Pound Icon"
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
