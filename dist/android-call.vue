<template>
  <div class="ion android-call-icon" name="android-call-icon" aria-labelledby="android-call-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M426.666,330.667c-26.666,0-52.271-4.271-75.729-11.729c-7.469-2.136-16-1.073-21.332,5.333l-46.939,46.928
	c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333,7.462-13.864,5.332-21.333
	c-8.537-24.531-12.802-50.136-12.802-76.803C181.333,73.604,171.734,64,160,64H85.333C73.599,64,64,73.604,64,85.333
	C64,285.864,226.136,448,426.666,448c11.73,0,21.334-9.604,21.334-21.333V352C448,340.271,438.396,330.667,426.666,330.667z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-call-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Call Icon"
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
