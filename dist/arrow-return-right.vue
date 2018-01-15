<template>
  <div class="ion arrow-return-right-icon" name="arrow-return-right-icon" aria-labelledby="arrow-return-right-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 192l-128 96v-64H128v128h248c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8h248V96l128 96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-return-right-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Return Right Icon"
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

