<template>
  <div class="ion android-open-icon" name="android-open-icon" aria-labelledby="android-open-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M405.34,405.332H106.66V106.668H240V64H106.66C83.191,64,64,83.197,64,106.668v298.664C64,428.803,83.191,448,106.66,448
	h298.68c23.469,0,42.66-19.197,42.66-42.668V272h-42.66V405.332z M288,64v42.668h87.474L159.999,322.133l29.866,29.866
	l215.476-215.47V224H448V64H288z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-open-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Open Icon"
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
