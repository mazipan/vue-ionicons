<template>
  <div class="ion arrow-return-left-icon" name="arrow-return-left-icon" aria-labelledby="arrow-return-left-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M192 96v64h248c4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h248V224H192v64L64 192l128-96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-return-left-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Return Left Icon"
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

