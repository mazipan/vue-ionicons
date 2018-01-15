<template>
  <div class="ion ios-list-icon" name="ios-list-icon" aria-labelledby="ios-list-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M64 64v384h384V64H64zm80 304c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16zm0-96c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16zm0-96c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16zm240 184H192v-16h192v16zm0-96H192v-16h192v16zm0-96H192v-16h192v16z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-list-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios List Icon"
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

