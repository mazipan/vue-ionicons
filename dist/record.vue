<template>
  <div class="ion record-icon" name="record-icon" aria-labelledby="record-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "record-icon",
    data () {
      let iconTitle = this.title ? this.title : "Record Icon"
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

