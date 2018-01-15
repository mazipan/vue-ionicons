<template>
  <div class="ion arrow-up-a-icon" name="arrow-up-a-icon" aria-labelledby="arrow-up-a-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256.5 64.5l-192 192h112v192h160v-192h112z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-up-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Up A Icon"
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

