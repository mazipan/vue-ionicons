<template>
  <div class="ion plus-circled-icon" name="plus-circled-icon" aria-labelledby="plus-circled-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H272v112h-32V272H128v-32h112V128h32v112h112v32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "plus-circled-icon",
    data () {
      let iconTitle = this.title ? this.title : "Plus Circled Icon"
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

