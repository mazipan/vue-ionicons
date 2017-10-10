<template>
  <div class="ion android-chat-icon" name="android-chat-icon" aria-labelledby="android-chat-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M391.553,64H57.607C53.131,64,48,67.745,48,72.159v214.217c0,4.413,5.131,8.624,9.607,8.624H115v88.894L205.128,295
		h186.425c4.477,0,7.447-4.211,7.447-8.624V72.159C399,67.745,396.029,64,391.553,64z"/>
	<path d="M456.396,127H424v166.57c0,15.987-6.915,26.43-25.152,26.43H218.096l-38.905,39h129.688L399,448v-89h57.396
		c4.478,0,7.604-4.262,7.604-8.682V136.103C464,131.689,460.874,127,456.396,127z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-chat-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Chat Icon"
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
