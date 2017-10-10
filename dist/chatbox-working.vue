<template>
  <div class="ion chatbox-working-icon" name="chatbox-working-icon" aria-labelledby="chatbox-working-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M124.3,400H277c14.4,0,14.4,0.1,21.3,5.2S384,464,384,464v-64h3.7c42.2,0,76.3-31.8,76.3-71.4V119.7
	c0-39.6-34.2-71.7-76.3-71.7H124.3C82.2,48,48,80.1,48,119.7v208.9C48,368.2,82.2,400,124.3,400z M352.1,192c17.7,0,32,14.3,32,32
	c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C320.1,206.3,334.4,192,352.1,192z M256.1,192c17.7,0,32,14.3,32,32
	c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C224.1,206.3,238.4,192,256.1,192z M160.1,192c17.7,0,32,14.3,32,32
	c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C128.1,206.3,142.4,192,160.1,192z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "chatbox-working-icon",
    data () {
      let iconTitle = this.title ? this.title : "Chatbox Working Icon"
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
