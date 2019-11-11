(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueIonicons = factory());
}(this, (function () { 'use strict';

  var A_ROTATE = 'rotate';
  var A_BEAT = 'beat';
  var A_SHAKE = 'shake';
  var IoniconsMixin = {
    computed: {
      ionClass: function ionClass() {
        var addClass = '';

        if (this.animate === A_ROTATE) {
          addClass = 'ion-rotate ';
        } else if (this.animate === A_BEAT) {
          addClass = 'ion-beat ';
        } else if (this.animate === A_SHAKE) {
          addClass = 'ion-shake ';
        }

        return "".concat(this.rootClass, " ").concat(addClass);
      }
    },
    props: {
      title: {
        type: String,
        "default": ''
      },
      rootClass: {
        type: String,
        "default": ''
      },
      w: {
        type: String,
        "default": '1em'
      },
      h: {
        type: String,
        "default": '1em'
      },
      animate: {
        type: String,
        "default": ''
      }
    }
  };

  //
  var script = {
    name: "ios-bicycle-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : null;
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-bicycle-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M125.3 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1c-12.4 12.4-28.8 19.2-46.1 19.2s-33.7-6.8-46.1-19.2C66.8 388.4 60 372 60 354.7s6.8-33.7 19.2-46.1c12.4-12.4 28.8-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3C32 406 74 448 125.3 448s93.3-42 93.3-93.3c.1-51.4-41.9-93.4-93.3-93.4zM319.8 127.8c17.8 0 32-14.2 32-32S337.8 64 320 64s-32.2 14-32.2 31.8c0 17.7 14.3 32 32 32zM386.7 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1C420.4 413.2 404 420 386.7 420s-33.7-6.8-46.1-19.2c-12.4-12.4-19.2-28.8-19.2-46.1s6.8-33.7 19.2-46.1c12.3-12.4 28.7-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3s42 93.3 93.3 93.3 93.3-42 93.3-93.3-42-93.3-93.3-93.3z"}}),_c('path',{attrs:{"d":"M368 192h-48l-29.5-60.1c-5.6-9.3-15.9-15.9-27.1-15.9-8.4 0-16.8 3.7-22.4 9.3l-71.7 69.1c-5.6 5.6-9.3 14-9.3 22.4 0 17.4 12.6 23.6 18.5 27.1C224 270.1 240 273 240 286.1V352c0 8.8 7.2 16 16 16s16-7.2 16-16v-90c0-13.2-30.4-24-48.3-38l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H368c8.8 0 16-7.2 16-16s-7.2-16-16-16z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-bicycle-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M125.3 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1c-12.4 12.4-28.8 19.2-46.1 19.2s-33.7-6.8-46.1-19.2C66.8 388.4 60 372 60 354.7s6.8-33.7 19.2-46.1c12.4-12.4 28.8-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3C32 406 74 448 125.3 448s93.3-42 93.3-93.3c.1-51.4-41.9-93.4-93.3-93.4zM319.8 127.8c17.8 0 32-14.2 32-32S337.8 64 320 64s-32.2 14-32.2 31.8c0 17.7 14.3 32 32 32zM386.7 289.3c17.3 0 33.7 6.8 46.1 19.2 12.4 12.4 19.2 28.8 19.2 46.1s-6.8 33.7-19.2 46.1C420.4 413.2 404 420 386.7 420s-33.7-6.8-46.1-19.2c-12.4-12.4-19.2-28.8-19.2-46.1s6.8-33.7 19.2-46.1c12.3-12.4 28.7-19.3 46.1-19.3m0-28c-51.3 0-93.3 42-93.3 93.3s42 93.3 93.3 93.3 93.3-42 93.3-93.3-42-93.3-93.3-93.3z"}}),_c('path',{attrs:{"d":"M368 192h-48l-29.5-60.1c-5.6-9.3-15.9-15.9-27.1-15.9-8.4 0-16.8 3.7-22.4 9.3l-71.7 69.1c-5.6 5.6-9.3 14-9.3 22.4 0 17.4 12.6 23.6 18.5 27.1C224 270.1 240 273 240 286.1V352c0 8.8 7.2 16 16 16s16-7.2 16-16v-90c0-13.2-30.4-24-48.3-38l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H368c8.8 0 16-7.2 16-16s-7.2-16-16-16z"}})])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "ios-bicycle.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var iosBicycle = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosBicycle;

})));
