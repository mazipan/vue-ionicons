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
    name: "ios-thermometer-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-thermometer-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M309.8 304.6c-4.3-3-6.9-7.9-6.9-13.1v-213c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v213c0 5.2-2.6 10.2-6.9 13.1-25.2 17.3-42 46.4-42 79.3 0 53 43 96 96 96s96-43 96-96c0-32.9-17-62.1-42.2-79.3zM256.1 445c-32 0-58.1-26.3-58.1-58.8 0-25.4 15.4-47.1 37.9-55.3 3.2-1.2 5.4-4.1 5.4-7.5V180.2c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v143.2c0 3.4 2.1 6.3 5.3 7.5 21.9 8.2 38.4 29.9 38.4 55.2 0 32.5-25.8 58.9-57.9 58.9z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-thermometer-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M309.8 304.6c-4.3-3-6.9-7.9-6.9-13.1v-213c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v213c0 5.2-2.6 10.2-6.9 13.1-25.2 17.3-42 46.4-42 79.3 0 53 43 96 96 96s96-43 96-96c0-32.9-17-62.1-42.2-79.3zM256.1 445c-32 0-58.1-26.3-58.1-58.8 0-25.4 15.4-47.1 37.9-55.3 3.2-1.2 5.4-4.1 5.4-7.5V180.2c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v143.2c0 3.4 2.1 6.3 5.3 7.5 21.9 8.2 38.4 29.9 38.4 55.2 0 32.5-25.8 58.9-57.9 58.9z"}})])])};
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
      component.__file = "ios-thermometer.vue";

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
    

    
    var iosThermometer = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosThermometer;

})));
