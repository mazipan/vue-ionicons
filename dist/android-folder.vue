<template>
  <div class="ion android-folder-icon" name="android-folder-icon" aria-labelledby="android-folder-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_10_">
	<g>
		<g>
			<path d="M213.338,96H74.666C51.197,96,32,115.198,32,138.667v234.666C32,396.802,51.197,416,74.666,416h362.668
				C460.803,416,480,396.802,480,373.333V186.667C480,163.198,460.803,144,437.334,144H256.006L213.338,96z"/>
		</g>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-folder-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Folder Icon"
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
