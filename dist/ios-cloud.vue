<template>
  <div class="ion ios-cloud-icon" name="ios-cloud-icon" aria-labelledby="ios-cloud-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M399.3 232.8c0-1.2.2-2.4.2-3.6 0-64.3-52.8-117.2-116.8-117.2-46.1 0-85.8 27.9-104.4 67-8.1-4.1-17.1-6.4-26.8-6.4-29.6 0-54.1 23.7-58.9 52C57.4 236.8 32 268.8 32 308.4c0 49.8 40.1 91.6 89.6 91.6H398c45 0 82-38.9 82-84.3 0-45.6-35.4-82.8-80.7-82.9z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-cloud-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Cloud Icon"
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

