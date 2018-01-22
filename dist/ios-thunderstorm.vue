<template>
  <div
    class="ion ios-thunderstorm-icon"
    name="ios-thunderstorm-icon"
    aria-labelledby="ios-thunderstorm-icon-title">

    <svg viewBox="0 0 512 512"  id="Layer_1" :width="w" :height="h"><path class="st0" d="M272 272l16-48h-72l-15 80h52.3L224 400l66-96 22-32z"/><path class="st0" d="M202.7 208h107.5l-16 48h48.2l-33 48h19c35.7 0 64.6-30.1 64.6-65.9 0-35.8-28.9-65.5-64.6-65.5-2.7 0-5.4 0-8 .3-7.9-35-39.1-61.4-76.4-61.4-43.3 0-78.3 35.2-78.3 78.5 0 2.6.1 5.2.4 7.8-26.4 2.3-47.1 25.7-47.1 52.8 0 28.6 23.2 53.3 51.7 53.3h14"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-thunderstorm-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Thunderstorm Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

