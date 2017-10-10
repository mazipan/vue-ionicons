<template>
  <div class="ion android-search-icon" name="android-search-icon" aria-labelledby="android-search-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_4_">
	<g>
		<g>
			<g>
				<path d="M337.509,305.372h-17.501l-6.571-5.486c20.791-25.232,33.922-57.054,33.922-93.257
					C347.358,127.632,283.896,64,205.135,64C127.452,64,64,127.632,64,206.629s63.452,142.628,142.225,142.628
					c35.011,0,67.831-13.167,92.991-34.008l6.561,5.487v17.551L415.18,448L448,415.086L337.509,305.372z M206.225,305.372
					c-54.702,0-98.463-43.887-98.463-98.743c0-54.858,43.761-98.742,98.463-98.742c54.7,0,98.462,43.884,98.462,98.742
					C304.687,261.485,260.925,305.372,206.225,305.372z"/>
			</g>
		</g>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-search-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Search Icon"
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
