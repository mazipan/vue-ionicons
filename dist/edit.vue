<template>
  <div class="ion edit-icon" name="edit-icon" aria-labelledby="edit-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	
		<rect x="178.846" y="92.087" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 224.3476 631.1498)" width="128.085" height="354.049"/>
	<path d="M471.723,88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304,1.85l-45.202,45.203l90.569,90.568l45.202-45.202
		C482.616,119.952,483.445,100.116,471.723,88.393z"/>
	<polygon points="64.021,363.252 32,480 148.737,447.979 	"/>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "edit-icon",
    data () {
      let iconTitle = this.title ? this.title : "Edit Icon"
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
