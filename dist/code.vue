<template>
  <div class="ion code-icon" name="code-icon" aria-labelledby="code-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M168,392c-6.143,0-12.285-2.344-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569,0-33.941l112-112
		c9.373-9.372,24.568-9.372,33.941,0c9.371,9.372,9.371,24.568,0,33.941L89.941,256l95.029,95.029
		c9.371,9.373,9.371,24.568,0,33.941C180.283,389.656,174.143,392,168,392z"/>
	<path d="M344,392c6.143,0,12.285-2.344,16.971-7.029l112-112c9.373-9.373,9.373-24.569,0-33.941l-112-112
		c-9.373-9.372-24.568-9.372-33.941,0c-9.371,9.372-9.371,24.568,0,33.941L422.059,256l-95.029,95.029
		c-9.371,9.373-9.371,24.568,0,33.941C331.717,389.656,337.857,392,344,392z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "code-icon",
    data () {
      let iconTitle = this.title ? this.title : "Code Icon"
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
