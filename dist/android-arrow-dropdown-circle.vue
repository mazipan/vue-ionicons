<template>
  <div class="ion android-arrow-dropdown-circle-icon" name="android-arrow-dropdown-circle-icon" aria-labelledby="android-arrow-dropdown-circle-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm0 272l-96-96h192l-96 96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropdown-circle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropdown Circle Icon"
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

