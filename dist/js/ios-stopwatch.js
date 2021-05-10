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
    name: "ios-stopwatch-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-stopwatch-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M415.9 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L413 95.6c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l25.5 25.5zM84.8 143.7c3.1 3.1 8.2 3.1 11.3 0l25.5-25.5c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0L73.5 121c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.4z"}}),_c('path',{attrs:{"d":"M280 81.5V64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.5C137.3 93.3 64 174.1 64 272c0 106 86 192 192 192s192-86 192-192c0-97.9-73.3-178.7-168-190.5zm-10 219.3V320c0 7.7-6.3 14-14 14s-14-6.3-14-14v-19.2c-10.7-5.2-18-16.1-18-28.8s7.3-23.6 18-28.8V144c0-7.7 6.3-14 14-14s14 6.3 14 14v99.2c10.7 5.2 18 16.1 18 28.8s-7.3 23.6-18 28.8z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-stopwatch-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M415.9 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L413 95.6c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l25.5 25.5zM84.8 143.7c3.1 3.1 8.2 3.1 11.3 0l25.5-25.5c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0L73.5 121c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.4z"}}),_c('path',{attrs:{"d":"M280 81.5V64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.5C137.3 93.3 64 174.1 64 272c0 106 86 192 192 192s192-86 192-192c0-97.9-73.3-178.7-168-190.5zm-10 219.3V320c0 7.7-6.3 14-14 14s-14-6.3-14-14v-19.2c-10.7-5.2-18-16.1-18-28.8s7.3-23.6 18-28.8V144c0-7.7 6.3-14 14-14s14 6.3 14 14v99.2c10.7 5.2 18 16.1 18 28.8s-7.3 23.6-18 28.8z"}})])])};
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
      component.__file = "ios-stopwatch.vue";

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
    

    
    var iosStopwatch = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosStopwatch;

})));
