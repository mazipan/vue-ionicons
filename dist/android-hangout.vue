<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-hangout-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 48c-97.321 0-176 77.114-176 172.487 0 95.38 78.679 172.487 176 172.487V464c100.425-47.689 176-152.195 176-243.513C432 125.114 353.321 48 256 48zm-10 182.633L224.943 271H193.88l20.712-40H184v-61h62v60.633zm82 0L307.768 271h-31.063l20.704-40H266v-61h62v60.633z"/></svg>
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


