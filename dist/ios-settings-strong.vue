<template>
  <div
    class="ion ios-settings-strong-icon"
    name="ios-settings-strong-icon"
    aria-labelledby="ios-settings-strong-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M32 376h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32M32 240h91.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32H196.65c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32M32 104h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-settings-strong-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Settings Strong Icon"
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

