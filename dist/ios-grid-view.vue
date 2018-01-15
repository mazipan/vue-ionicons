<template>
  <div class="ion ios-grid-view-icon" name="ios-grid-view-icon" aria-labelledby="ios-grid-view-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M192 192h128v128H192z"/><path d="M64 64v384h384V64H64zm352 128h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16v80h80v16z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-grid-view-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Grid View Icon"
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

