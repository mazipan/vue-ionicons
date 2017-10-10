<template>
  <div class="ion battery-half-icon" name="battery-half-icon" aria-labelledby="battery-half-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M469.9,192H433v-54c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236c0,5.5,4.5,10,10.1,10h381.1c5.5,0,9.9-4.5,9.9-10
	v-54h36.9c5.6,0,10.1-4.5,10.1-10V202C480,196.5,475.5,192,469.9,192z M448,288h-14.8H401v32v32h-49l-32-192h81v32v32h32.2H448V288z
	"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "battery-half-icon",
    data () {
      let iconTitle = this.title ? this.title : "Battery Half Icon"
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
