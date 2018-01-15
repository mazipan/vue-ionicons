<template>
  <div class="ion flash-icon" name="flash-icon" aria-labelledby="flash-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M96 288h147l-51.1 192L416 224H269l51-192z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "flash-icon",
    data () {
      let iconTitle = this.title ? this.title : "Flash Icon"
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

