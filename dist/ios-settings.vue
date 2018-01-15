<template>
  <div class="ion ios-settings-icon" name="ios-settings-icon" aria-labelledby="ios-settings-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M352 104c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM352 376c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM160 240c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM207.32 248H480v16H207.32c.439-2.604.68-5.273.68-8s-.24-5.396-.68-8zM112 256c0 2.727.24 5.396.68 8H32v-16h80.68a47.955 47.955 0 0 0-.68 8zM399.32 384H480v16h-80.68c.439-2.604.68-5.273.68-8s-.24-5.396-.68-8zM304 392c0 2.727.24 5.396.68 8H32v-16h272.68a47.955 47.955 0 0 0-.68 8zM399.32 112H480v16h-80.68c.439-2.604.68-5.273.68-8s-.24-5.396-.68-8zM304.68 112c-.439 2.604-.68 5.273-.68 8s.24 5.396.68 8H32v-16h272.68z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-settings-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Settings Icon"
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

