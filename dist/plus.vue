<template>
  <div class="ion plus-icon" name="plus-icon" aria-labelledby="plus-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "plus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Plus Icon"
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

