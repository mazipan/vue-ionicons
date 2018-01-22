<template>
  <div
    class="ion ios-list-outline-icon"
    name="ios-list-outline-icon"
    aria-labelledby="ios-list-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M432 80v352H80V80h352m16-16H64v384h384V64z"/><path d="M192 152h192v16H192zM192 248h192v16H192zM192 344h192v16H192z"/><circle cx="144" cy="160" r="16"/><circle cx="144" cy="256" r="16"/><circle cx="144" cy="352" r="16"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-list-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios List Outline Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
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

