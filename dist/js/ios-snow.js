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
    name: "ios-snow-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Snow Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-snow-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M440.5 345.8L408.1 327c11.8-12.3 26-18.2 26.2-18.3 7.5-3 11.4-11.4 8.9-19.1-1.9-5.9-7.4-9.8-13.5-9.8-1.9 0-3.7.4-5.5 1.1-1 .4-24.4 10-41.9 31.2l-96.3-56 96.3-56c17.5 21.2 40.8 30.8 41.9 31.2 1.8.7 3.6 1.1 5.5 1.1 6.1 0 11.6-4 13.5-9.8 2.5-7.7-1.4-16.1-8.9-19.1-.1-.1-14.3-6-26.2-18.3l32.4-18.8c7.2-4.2 9.6-13.4 5.5-20.6-2.7-4.7-7.7-7.6-13.1-7.6-2.6 0-5.3.7-7.6 2L393.1 159c-4.5-16.2-2.7-31.4-2.6-32 1.1-8.1-4.1-15.6-12-17.3-1-.2-2-.3-3-.3-7.1 0-13 5.2-14.1 12.4-.2 1.1-3.6 26 6.1 52.2l-96 56v-99.2c26.9-4.7 46.8-20.2 47.7-20.9 3.1-2.5 5.1-6 5.4-10 .3-4-.9-7.8-3.6-10.8-2.9-3.2-7-5.1-11.4-5.1-3.4 0-6.8 1.2-9.5 3.3-.1.1-12.2 9.4-28.6 13.6V63.1c0-8.2-7.1-15.1-15.5-15.1s-15.5 6.9-15.5 15.1v37.5c-16.3-4.2-28.4-13.5-28.6-13.6-2.7-2.1-6-3.3-9.5-3.3-4.4 0-8.5 1.9-11.4 5.1-2.7 3-4 7-3.6 10.9.3 3.9 2.3 7.4 5.4 9.9.9.7 20.8 16.2 47.7 20.9v99.2l-96-56c9.6-26 6.2-51.1 6-52.2-1-7.2-6.9-12.4-14-12.4-1 0-2 .1-3 .3-7.9 1.6-13.2 9.3-12 17.3 0 .2 2 15.5-2.6 31.9L86.6 140c-2.3-1.3-4.9-2-7.6-2-5.4 0-10.4 2.9-13.1 7.6-4.1 7.2-1.7 16.5 5.5 20.6l32.4 18.8c-11.7 12.1-25.7 18.1-26.2 18.3-7.5 3-11.4 11.4-8.9 19.1 1.9 5.9 7.4 9.8 13.5 9.8 1.9 0 3.7-.4 5.5-1.1 1-.4 24.4-10 41.9-31.2l96.3 56-96.3 56c-17.5-21.2-40.8-30.8-41.9-31.2-1.8-.7-3.6-1.1-5.5-1.1-6.1 0-11.6 4-13.5 9.8-2.5 7.7 1.4 16 8.9 19.1.5.2 14.5 6.2 26.2 18.3l-32.4 18.8c-7.2 4.2-9.6 13.4-5.5 20.6 2.7 4.7 7.7 7.6 13.1 7.6 2.6 0 5.3-.7 7.6-2l32.3-18.8c4.6 16.5 2.6 31.8 2.6 32-1.2 8 4.1 15.7 12 17.3 1 .2 2 .3 3 .3 7.1 0 13-5.2 14.1-12.4.2-1.1 3.6-26-6.1-52.2l96-56v99.2c-26.9 4.7-46.8 20.2-47.7 20.9-3.1 2.5-5.1 6-5.4 10-.3 4 .9 7.8 3.6 10.8 2.9 3.2 7 5.1 11.4 5.1 3.4 0 6.8-1.2 9.5-3.3.1-.1 12.3-9.4 28.6-13.6v37.5c0 8.2 7.1 15.1 15.5 15.1s15.5-6.9 15.5-15.1v-37.5c16.3 4.2 28.4 13.5 28.6 13.6 2.7 2.1 6.1 3.3 9.5 3.3 4.4 0 8.5-1.9 11.4-5.1 2.7-3 4-7 3.6-10.9-.3-3.9-2.3-7.4-5.4-9.9-.9-.7-20.8-16.2-47.7-20.9V282l96 56c-9.6 26-6.2 51.1-6 52.2 1 7.2 6.9 12.4 14 12.4 1 0 2-.1 3-.3 7.9-1.6 13.1-9.2 12-17.3-.1-.5-1.9-15.7 2.6-32l32.2 18.8c2.3 1.3 4.9 2 7.6 2 5.4 0 10.4-2.9 13.1-7.6 4.1-6.9 1.7-16.2-5.5-20.4z"}})])])};
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
      component.__file = "ios-snow.vue";

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
    

    
    var iosSnow = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosSnow;

})));
