<template>
  <div class="ion android-drafts-icon" name="android-drafts-icon" aria-labelledby="android-drafts-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g id="Icon_18_">
	<g>
		<g>
			<path d="M480,201.667c0-14.933-7.469-28.803-20.271-36.266L256,64L52.271,165.401C40.531,172.864,32,186.734,32,201.667v203.666
				C32,428.802,51.197,448,74.666,448h362.668C460.803,448,480,428.802,480,405.333V201.667z M256,304L84.631,192L256,106.667
				L427.369,192L256,304z"/>
		</g>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-drafts-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Drafts Icon"
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
