<template>
  <div class="ion paintbucket-icon" name="paintbucket-icon" aria-labelledby="paintbucket-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<path d="M128,64l39.667,72.102L16,288l197.604,192l163.328-160l58.33-12.307L160,32L128,64z M325.131,288H104.857L215,177.863
		L325.131,288z"/>
	<path d="M435.262,307.693c0,0-60.734,66.179-60.732,99.207c0,33.028,27.192,59.803,60.731,59.801
		c33.548,0.002,60.74-26.772,60.739-59.801C496.001,373.872,435.262,307.693,435.262,307.693z"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "paintbucket-icon",
    data () {
      let iconTitle = this.title ? this.title : "Paintbucket Icon"
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
