<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-tablet-landscape-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M39 103c-4.5 4.5-7 10.6-7 16.9V392c0 6.4 2.5 12.4 7 16.9 4.5 4.5 10.6 7 16.9 7H456c6.4 0 12.4-2.5 16.9-7 4.5-4.5 7-10.6 7-16.9V119.9c0-6.4-2.5-12.4-7-16.9-4.5-4.5-10.6-7-16.9-7H55.9c-6.3 0-12.4 2.5-16.9 7zm9.7 153.4c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7c-3.8 0-7-3.2-7-7zM470 256c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1zm-38-144v288H80V112h352z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-tablet-landscape-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Tablet Landscape Icon"
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


