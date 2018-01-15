<template>
  <div class="ion ios-navigate-icon" name="ios-navigate-icon" aria-labelledby="ios-navigate-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336V256H128.3L352 160l-96 224z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-navigate-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Navigate Icon"
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

