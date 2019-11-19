const A_ROTATE = 'rotate'
const A_BEAT = 'beat'
const A_SHAKE = 'shake'

export default {
  computed: {
    ionClass() {
      let addClass = ''
      if (this.animate === A_ROTATE) {
        addClass = 'ion-rotate '
      } else if (this.animate === A_BEAT) {
        addClass = 'ion-beat '
      } else if (this.animate === A_SHAKE) {
        addClass = 'ion-shake '
      }

      return `${this.rootClass} ${addClass}`
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    rootClass: {
      type: String,
      default: ''
    },
    w: {
      type: String,
      default: '1em'
    },
    h: {
      type: String,
      default: '1em'
    },
    animate: {
      type: String,
      default: ''
    }
  }
}
