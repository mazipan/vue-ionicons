<template>
  <div class="ion ios-grid-view-outline-icon" name="ios-grid-view-outline-icon" aria-labelledby="ios-grid-view-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192h112zM320 320H192V192h128v128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-grid-view-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Grid View Outline Icon"
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

