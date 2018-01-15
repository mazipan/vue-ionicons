<template>
  <div class="ion android-expand-icon" name="android-expand-icon" aria-labelledby="android-expand-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-expand-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Expand Icon"
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

