<template>
  <div class="ion male-icon" name="male-icon" aria-labelledby="male-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<path d="M480,192V32H320l63,63l-68.7,68.7C284.8,141.3,247.9,128,208,128c-97.2,0-176,78.8-176,176s78.8,176,176,176
	s176-78.8,176-176c0-39.9-13.3-76.8-35.7-106.3L417,129L480,192z M298.5,394.5C274.3,418.7,242.2,432,208,432s-66.3-13.3-90.5-37.5
	C93.3,370.3,80,338.2,80,304s13.3-66.3,37.5-90.5c24.2-24.2,56.3-37.5,90.5-37.5s66.3,13.3,90.5,37.5S336,269.8,336,304
	S322.7,370.3,298.5,394.5z"/>
</svg>

  </div>
</template>

<script>
  export default {
    name: "male-icon",
    data () {
      let iconTitle = this.title ? this.title : "Male Icon"
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
