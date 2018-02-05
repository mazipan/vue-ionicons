<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-bookmark-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-bookmark-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Bookmark Icon"
      return {
        iconTitle: iconTitle
      }
    },
    computed: {
      ionClass() {
        let addClass = ''

        if (this.rotate) {
          addClass = addClass + 'ion-rotate '
        } else if (this.beat) {
          addClass = addClass + 'ion-beat '
        } else if (this.shake) {
          addClass = addClass + 'ion-shake '
        }

        return `${this.rootClass} ${addClass}`
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
      },
      rotate: {
        type: Boolean,
        default: false
      },
      beat: {
        type: Boolean,
        default: false
      },
      shake: {
        type: Boolean,
        default: false
      }
    }
  }
</script>


