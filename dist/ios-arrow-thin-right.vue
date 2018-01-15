<template>
  <div class="ion ios-arrow-thin-right-icon" name="ios-arrow-thin-right-icon" aria-labelledby="ios-arrow-thin-right-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3s-4.1-.8-5.7-2.3z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-arrow-thin-right-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Thin Right Icon"
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

