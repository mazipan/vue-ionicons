<template>
  <div class="ion android-list-icon" name="android-list-icon" aria-labelledby="android-list-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-list-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android List Icon"
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

