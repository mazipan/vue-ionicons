<template>
  <div class="ion android-hangout-icon" name="android-hangout-icon" aria-labelledby="android-hangout-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M256,48c-97.321,0-176,77.114-176,172.487c0,95.38,78.679,172.487,176,172.487V464c100.425-47.689,176-152.195,176-243.513
	C432,125.114,353.321,48,256,48z M246,230.633L224.943,271H193.88l20.712-40H184v-61h62V230.633z M328,230.633L307.768,271h-31.063
	l20.704-40H266v-61h62V230.633z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-hangout-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Hangout Icon"
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
