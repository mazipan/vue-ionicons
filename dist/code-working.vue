<template>
  <div class="ion code-working-icon" name="code-working-icon" aria-labelledby="code-working-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g>
		<circle cx="184.166" cy="256.166" r="24"/>
		<circle cx="256.166" cy="256.166" r="24"/>
		<circle cx="328.166" cy="256.166" r="24"/>
	</g>
	<g>
		<path d="M168,392c-6.143,0-12.285-2.344-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569,0-33.941l112-112
			c9.373-9.372,24.568-9.372,33.941,0c9.371,9.372,9.371,24.568,0,33.941L89.941,256l95.029,95.029
			c9.371,9.372,9.371,24.568,0,33.941C180.283,389.656,174.143,392,168,392z"/>
		<path d="M344,392c6.143,0,12.285-2.344,16.971-7.029l112-112c9.373-9.373,9.373-24.569,0-33.941l-112-112
			c-9.373-9.372-24.568-9.372-33.941,0c-9.371,9.372-9.371,24.568,0,33.941L422.059,256l-95.029,95.029
			c-9.371,9.372-9.371,24.568,0,33.941C331.717,389.656,337.857,392,344,392z"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "code-working-icon",
    data () {
      let iconTitle = this.title ? this.title : "Code Working Icon"
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
