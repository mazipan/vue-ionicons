<template>
  <div class="ion arrow-down-a-icon" name="arrow-down-a-icon" aria-labelledby="arrow-down-a-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256.5 448.5l192-192h-112v-192h-160v192h-112z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-down-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Down A Icon"
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

