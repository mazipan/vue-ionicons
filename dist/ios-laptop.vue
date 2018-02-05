<template>
  <div
    class="ion"
    :class="ionClass"
    name="ios-laptop-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M448 367.5V129.1c0-9.4-7.9-17.1-17.2-17.1H81.2c-9.3 0-17.2 7.6-17.2 17.1v238.4H15.9c0 9.9 9.9 18.8 18.9 22.7C45.7 394.8 64 400 84 400h344c20 0 38.2-4.5 48.3-8.8 9.5-4 19.8-13.4 19.8-23.7H448zM256 120c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zM82 136.2h348c1.1 0 2 .9 2 2v211.3c0 1.1-.9 2-2 2H82c-1.1 0-2-.9-2-2V138.2c0-1.2.9-2 2-2zm216.3 239.3h-84.6c-5.2 0-9.7-6-9.7-7.5h104c0 1.5-3 7.5-9.7 7.5z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-laptop-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Laptop Icon"
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


