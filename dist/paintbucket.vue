<template>
  <div
    class="ion paintbucket-icon"
    name="paintbucket-icon"
    aria-labelledby="paintbucket-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M128 64l39.667 72.102L16 288l197.604 192 163.328-160 58.33-12.307L160 32l-32 32zm197.131 224H104.857L215 177.863 325.131 288z"/><path d="M435.262 307.693s-60.734 66.179-60.732 99.207c0 33.028 27.192 59.803 60.731 59.801 33.548.002 60.74-26.772 60.739-59.801.001-33.028-60.738-99.207-60.738-99.207z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "paintbucket-icon",
    data () {
      let iconTitle = this.title ? this.title : "Paintbucket Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

