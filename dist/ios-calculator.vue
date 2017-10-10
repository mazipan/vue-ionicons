<template>
  <div class="ion ios-calculator-icon" name="ios-calculator-icon" aria-labelledby="ios-calculator-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M368,64H144c-17.7,0-32,14.3-32,32v320c0,17.7,14.3,32,32,32h224c17.7,0,32-14.3,32-32V96C400,78.3,385.7,64,368,64z
	 M360,280v128h-48V280H360z M360,200v48h-48v-48H360z M280,360v48h-48v-48H280z M280,280v48h-48v-48H280z M280,200v48h-48v-48H280z
	 M200,360v48h-48v-48H200z M200,280v48h-48v-48H200z M200,200v48h-48v-48H200z M152,152v-48h208v48H152z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "ios-calculator-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Calculator Icon"
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
