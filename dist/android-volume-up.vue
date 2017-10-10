<template>
  <div class="ion android-volume-up-icon" name="android-volume-up-icon" aria-labelledby="android-volume-up-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M64,192v128h85.334L256,431.543V80.458L149.334,192H64z M352,256c0-38.399-21.333-72.407-53.333-88.863v176.636
	C330.667,328.408,352,294.4,352,256z M298.667,64v44.978C360.531,127.632,405.334,186.882,405.334,256
	c0,69.119-44.803,128.369-106.667,147.022V448C384,428.254,448,349.257,448,256C448,162.744,384,83.746,298.667,64z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-volume-up-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Volume Up Icon"
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
