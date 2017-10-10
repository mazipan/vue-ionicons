<template>
  <div class="ion network-icon" name="network-icon" aria-labelledby="network-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M448,96c0-35.29-28.71-64-64-64s-64,28.71-64,64c0,23.637,12.89,44.307,32,55.391v52.832l-96,48l-96-48v-52.832
	c19.11-11.084,32-31.754,32-55.391c0-35.29-28.71-64-64-64S64,60.71,64,96c0,23.637,12.89,44.307,32,55.391v92.387l128,64v52.832
	c-19.11,11.084-32,31.754-32,55.391c0,35.29,28.71,64,64,64s64-28.71,64-64c0-23.637-12.89-44.307-32-55.391v-52.832l128-64v-92.387
	C435.11,140.307,448,119.637,448,96z M128,64c17.673,0,32,14.327,32,32s-14.327,32-32,32s-32-14.327-32-32S110.327,64,128,64z
	 M256,448c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S273.673,448,256,448z M384,128c-17.673,0-32-14.327-32-32
	s14.327-32,32-32s32,14.327,32,32S401.673,128,384,128z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "network-icon",
    data () {
      let iconTitle = this.title ? this.title : "Network Icon"
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
