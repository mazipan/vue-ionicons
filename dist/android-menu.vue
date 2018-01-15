<template>
  <div class="ion android-menu-icon" name="android-menu-icon" aria-labelledby="android-menu-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-menu-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Menu Icon"
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

