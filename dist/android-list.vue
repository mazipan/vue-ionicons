<template>
  <div class="ion android-list-icon" name="android-list-icon" aria-labelledby="android-list-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M408,64H104c-22.091,0-40,17.908-40,40v304c0,22.092,17.909,40,40,40h304c22.092,0,40-17.908,40-40V104
		C448,81.908,430.092,64,408,64z M304,368H144v-48h160V368z M368,280H144v-48h224V280z M368,192H144v-48h224V192z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-list-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android List Icon"
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
