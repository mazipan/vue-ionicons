<template>
  <div class="ion navicon-icon" name="navicon-icon" aria-labelledby="navicon-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M96 241h320v32H96zM96 145h320v32H96zM96 337h320v32H96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "navicon-icon",
    data () {
      let iconTitle = this.title ? this.title : "Navicon Icon"
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

