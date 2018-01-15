<template>
  <div class="ion android-hangout-icon" name="android-hangout-icon" aria-labelledby="android-hangout-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 48c-97.321 0-176 77.114-176 172.487 0 95.38 78.679 172.487 176 172.487V464c100.425-47.689 176-152.195 176-243.513C432 125.114 353.321 48 256 48zm-10 182.633L224.943 271H193.88l20.712-40H184v-61h62v60.633zm82 0L307.768 271h-31.063l20.704-40H266v-61h62v60.633z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-hangout-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Hangout Icon"
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

