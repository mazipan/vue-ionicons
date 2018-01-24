<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-flame-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M223.899 32c25.691 145-96.732 142-95.895 288 .686 119.51 104.975 160 128.143 160 23.166 0 113.88-26 126.931-160 10.633-109.184-72.506-224-159.179-288zm32.248 440s-40.701-35.816-40.701-80c0-44.183 40.555-80 40.555-80s40.332 35.817 40.332 80c-.001 44.184-40.186 80-40.186 80z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-flame-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Flame Icon"
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


