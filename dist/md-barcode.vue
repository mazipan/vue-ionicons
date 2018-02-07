<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-barcode-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M88 128h48v256H88zm144 0h48v256h-48zm-72 16h48v224h-48zm144 0h48v224h-48zm72-16h48v256h-48z"/><path d="M104 104V56H16v400h88v-48H64V104zm304-48v48h40v304h-40v48h88V56z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-barcode-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Barcode Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

