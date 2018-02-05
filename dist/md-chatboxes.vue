<template>
  <div
    class="ion"
    :class="ionClass"
    name="md-chatboxes-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M391.553 64H57.607C53.131 64 48 67.745 48 72.159v214.217c0 4.413 5.131 8.624 9.607 8.624H115v88.894L205.128 295h186.425c4.477 0 7.447-4.211 7.447-8.624V72.159c0-4.414-2.971-8.159-7.447-8.159z"/><path d="M456.396 127H424v166.57c0 15.987-6.915 26.43-25.152 26.43H218.096l-38.905 39h129.688L399 448v-89h57.396c4.478 0 7.604-4.262 7.604-8.682V136.103c0-4.414-3.126-9.103-7.604-9.103z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "md-chatboxes-icon",
    data () {
      let iconTitle = this.title ? this.title : "Md Chatboxes Icon"
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


