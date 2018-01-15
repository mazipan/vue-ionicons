<template>
  <div class="ion ios-chatboxes-icon" name="ios-chatboxes-icon" aria-labelledby="ios-chatboxes-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M336 48H48v224h112V160h176z"/><path d="M176 176v224h162.6l64 64H416v-64h48V176H176z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-chatboxes-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Chatboxes Icon"
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

