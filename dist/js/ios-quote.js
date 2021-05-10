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
    name: "ios-quote-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-quote-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1zM385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-quote-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1zM385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z"}})])])};
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
      component.__file = "ios-quote.vue";

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
    

    
    var iosQuote = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosQuote;

})));
