<template>
  <div class="ion social-facebook-icon" name="social-facebook-icon" aria-labelledby="social-facebook-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-facebook-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Facebook Icon"
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

<style>
.ion{
  display: inline-block;
}
</style>

