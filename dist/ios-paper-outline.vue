<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-paper-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M112 64v336h16V80h304v337.143c0 8.205-6.652 14.857-14.857 14.857H94.857C86.652 432 80 425.348 80 417.143V128h16v-16H64v305.143C64 434.157 77.843 448 94.857 448h322.285C434.157 448 448 434.157 448 417.143V64H112z"/><path d="M160 112h128v16H160zM160 192h240v16H160zM160 272h192v16H160zM160 352h240v16H160z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-paper-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Paper Outline Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      rootClass: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

