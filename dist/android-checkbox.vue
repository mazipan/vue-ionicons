<template>
  <div class="ion android-checkbox-icon" name="android-checkbox-icon" aria-labelledby="android-checkbox-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_22_">
	<g>
		<path d="M405.333,64H106.667C83.198,64,64,83.198,64,106.667v298.666C64,428.802,83.198,448,106.667,448h298.666
			C428.802,448,448,428.802,448,405.333V106.667C448,83.198,428.802,64,405.333,64z M213.333,362.667L106.667,256l29.864-29.864
			l76.802,76.802l162.136-162.136l29.864,29.865L213.333,362.667z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-checkbox-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Checkbox Icon"
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
