<template>
  <div class="ion ios-pricetags-icon" name="ios-pricetags-icon" aria-labelledby="ios-pricetags-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M464 64v137.377L227.153 467.48 240 480l240-272V64z"/><path d="M288 32L32 320l160 160 23.471-23.904 11.348-11.375L448 192V32H288zm64 128c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32z"/><circle cx="352" cy="128" r="16"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-pricetags-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pricetags Icon"
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

