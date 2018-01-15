<template>
  <div class="ion ios-bolt-icon" name="ios-bolt-icon" aria-labelledby="ios-bolt-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M302.7 64L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-bolt-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Bolt Icon"
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

