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
    name: "ios-rose-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-rose-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M416 141.1c-18.9 3.9-36.8 8.2-53.7 12.8-40.5 11-75.5 24.9-105.4 38.2-19.3 8.6-26.2 12.4-51.5 25.9C147 248.9 112 289 112 349c0 67.8 55.6 115 144 115s144-51.2 144-119c0-67.7-61-114.7 16-203.9zM135.4 241.8c12.8-10.5 31.2-23.9 56.1-38.4 6.4-3.8 13.3-7.6 20.6-11.4 11.6-6.1 23.5-11.9 35.8-17.4-9.1-10.1-22.1-19.1-36.6-27C162.6 121.1 96 107.4 96 107.4c41.5 43.7 44.6 96.5 39.4 134.4zM352 77.7s-73.8-.9-125.8 55c0 0 27.7 17.3 42.7 32.3 37.2-15.6 82.3-28.6 115.2-36-6.5-21.7-32.1-51.3-32.1-51.3zM239.7 97C210.3 59.5 176 48 176 48c-15.3 20.8-24.3 38-29 51.7 21.1 5.9 36.5 12.3 62.4 24.7 9.5-10.6 18.1-19.1 30.3-27.4z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-rose-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M416 141.1c-18.9 3.9-36.8 8.2-53.7 12.8-40.5 11-75.5 24.9-105.4 38.2-19.3 8.6-26.2 12.4-51.5 25.9C147 248.9 112 289 112 349c0 67.8 55.6 115 144 115s144-51.2 144-119c0-67.7-61-114.7 16-203.9zM135.4 241.8c12.8-10.5 31.2-23.9 56.1-38.4 6.4-3.8 13.3-7.6 20.6-11.4 11.6-6.1 23.5-11.9 35.8-17.4-9.1-10.1-22.1-19.1-36.6-27C162.6 121.1 96 107.4 96 107.4c41.5 43.7 44.6 96.5 39.4 134.4zM352 77.7s-73.8-.9-125.8 55c0 0 27.7 17.3 42.7 32.3 37.2-15.6 82.3-28.6 115.2-36-6.5-21.7-32.1-51.3-32.1-51.3zM239.7 97C210.3 59.5 176 48 176 48c-15.3 20.8-24.3 38-29 51.7 21.1 5.9 36.5 12.3 62.4 24.7 9.5-10.6 18.1-19.1 30.3-27.4z"}})])])};
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
      component.__file = "ios-rose.vue";

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
    

    
    var iosRose = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosRose;

})));
