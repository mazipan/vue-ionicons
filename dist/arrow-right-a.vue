<template>
  <div class="ion arrow-right-a-icon" name="arrow-right-a-icon" aria-labelledby="arrow-right-a-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448.5 256.5l-192-192v112h-192v160h192v112z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-right-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Right A Icon"
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

