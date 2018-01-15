<template>
  <div class="ion ios-crop-icon" name="ios-crop-icon" aria-labelledby="ios-crop-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M128 64h16v48h-16zM144 368V160h-16v224h224v-16zM400 368h48v16h-48z"/><path d="M64 128v16h304v304h16V128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-crop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Crop Icon"
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

