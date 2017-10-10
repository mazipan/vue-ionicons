<template>
  <div class="ion android-stopwatch-icon" name="android-stopwatch-icon" aria-labelledby="android-stopwatch-icon-title">
    
<!-- Generator: Adobe Illustrator 16.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg 
	 >
<g>
	<g id="Icon_7_">
		<g>
			<path d="M232,306.667h48V176h-48V306.667z"/>
		</g>
	</g>
	<g>
		<path d="M407.67,170.271l30.786-30.786l-33.942-33.941l-30.785,30.786C341.217,111.057,300.369,96,256,96
			C149.961,96,64,181.961,64,288s85.961,192,192,192s192-85.961,192-192C448,243.631,432.943,202.783,407.67,170.271z
			 M362.066,394.066C333.734,422.398,296.066,438,256,438s-77.735-15.602-106.066-43.934C121.602,365.735,106,328.066,106,288
			s15.602-77.735,43.934-106.066C178.265,153.602,215.934,138,256,138s77.734,15.602,106.066,43.934
			C390.398,210.265,406,247.934,406,288S390.398,365.735,362.066,394.066z"/>
		<rect x="192" y="32" width="128" height="48"/>
	</g>
</g>
</svg>

  </div>
</template>

<script>
  export default {
    name: "android-stopwatch-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Stopwatch Icon"
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
