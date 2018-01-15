<template>
  <div class="ion arrow-down-c-icon" name="arrow-down-c-icon" aria-labelledby="arrow-down-c-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M383.6 322.7L278.6 423c-5.8 6-13.7 9-22.4 9s-16.5-3-22.4-9L128.4 322.7c-12.5-11.9-12.5-31.3 0-43.2 12.5-11.9 32.7-11.9 45.2 0l50.4 48.2v-217c0-16.9 14.3-30.6 32-30.6s32 13.7 32 30.6v217l50.4-48.2c12.5-11.9 32.7-11.9 45.2 0s12.5 31.2 0 43.2z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-down-c-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Down C Icon"
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

