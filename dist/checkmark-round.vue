<template>
  <div class="ion checkmark-round-icon" name="checkmark-round-icon" aria-labelledby="checkmark-round-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "checkmark-round-icon",
    data () {
      let iconTitle = this.title ? this.title : "Checkmark Round Icon"
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

