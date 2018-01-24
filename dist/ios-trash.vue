<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-trash-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M320 113V93.3c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1 64 192 77.1 192 93.3V113h-80v15h21.1l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H400v-15h-80zM207 93.3c0-8.1 6.2-14.3 14.3-14.3h69.5c8.1 0 14.3 6.2 14.3 14.3V113h-98V93.3h-.1zM202.7 401L192 160h14.5l10.9 241h-14.7zm60.3 0h-14V160h14v241zm46.3 0h-14.6l10.8-241H320l-10.7 241z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-trash-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Trash Icon"
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

