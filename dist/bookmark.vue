<template>
  <div class="ion bookmark-icon" name="bookmark-icon" aria-labelledby="bookmark-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M344 64H168c-4.4 0-8 3.6-8 8v56h192V72c0-4.4-3.6-8-8-8zM160 448l96-96 96 96V144H160z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "bookmark-icon",
    data () {
      let iconTitle = this.title ? this.title : "Bookmark Icon"
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

