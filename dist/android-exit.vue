<template>
  <div class="ion android-exit-icon" name="android-exit-icon" aria-labelledby="android-exit-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M215.469,332.802l29.863,29.864L352,256L245.332,149.333l-29.863,29.865l55.469,55.469H64v42.666h205.864L215.469,332.802z
	 M405.334,64H106.666C83.198,64,64,83.198,64,106.666V192h42.666v-85.333h298.668v298.668H106.666V320H64v85.334
	C64,428.802,83.198,448,106.666,448h298.668C428.802,448,448,428.802,448,405.334V106.666C448,83.198,428.802,64,405.334,64z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-exit-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Exit Icon"
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
