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
    name: "ios-barcode-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-barcode-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M121.6 388H80.8c-2.2 0-4-1.8-4-4V128c0-2.2 1.8-4 4-4h40.5c7.9 0 14.5-6.4 14.7-14 .1-3.9-1.3-7.2-4.1-10-2.7-2.8-8-4-11.9-4H66c-10 0-18 6-18 16v288c0 10 7 16 17 16h56.3c7.9 0 14.5-5.2 14.7-12.8.1-3.9-1.3-7.5-4.1-10.3-2.7-2.8-6.4-4.9-10.3-4.9zM447 96h-56.3c-9.5 0-17.1 8.3-14 18.3.2.7.5 1.3.8 1.9 2.7 5.2 7.6 7.8 12.9 7.8h40.8c2.2 0 4 1.8 4 4v255.9c0 2.2-1.8 4-4 4h-40.5c-7.9 0-14.5 6.2-14.7 13.9-.1 3.9 1.3 7.6 4.1 10.4 2.7 2.8 6.4 3.8 10.3 3.8H447c10 0 17-6 17-16.4V112c0-10-7-16-17-16z"}}),_c('path',{attrs:{"d":"M122.5 176c-7.7 0-14 6.3-14 13.9V322c0 7.7 6.3 13.9 14 13.9s14-6.3 14-13.9V189.9c0-7.6-6.3-13.9-14-13.9zM389.5 336c7.7 0 14-6.3 14-13.9V189.9c0-7.7-6.3-13.9-14-13.9s-14 6.3-14 13.9V322c0 7.7 6.3 14 14 14zM326.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.3-14.4-14-14.4zM185.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.2-14.4-14-14.4zM256 160c-7.7 0-14 6.4-14 14.2v163.5c0 7.8 6.3 14.2 14 14.2s14-6.4 14-14.2V174.2c0-7.8-6.3-14.2-14-14.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-barcode-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M121.6 388H80.8c-2.2 0-4-1.8-4-4V128c0-2.2 1.8-4 4-4h40.5c7.9 0 14.5-6.4 14.7-14 .1-3.9-1.3-7.2-4.1-10-2.7-2.8-8-4-11.9-4H66c-10 0-18 6-18 16v288c0 10 7 16 17 16h56.3c7.9 0 14.5-5.2 14.7-12.8.1-3.9-1.3-7.5-4.1-10.3-2.7-2.8-6.4-4.9-10.3-4.9zM447 96h-56.3c-9.5 0-17.1 8.3-14 18.3.2.7.5 1.3.8 1.9 2.7 5.2 7.6 7.8 12.9 7.8h40.8c2.2 0 4 1.8 4 4v255.9c0 2.2-1.8 4-4 4h-40.5c-7.9 0-14.5 6.2-14.7 13.9-.1 3.9 1.3 7.6 4.1 10.4 2.7 2.8 6.4 3.8 10.3 3.8H447c10 0 17-6 17-16.4V112c0-10-7-16-17-16z"}}),_c('path',{attrs:{"d":"M122.5 176c-7.7 0-14 6.3-14 13.9V322c0 7.7 6.3 13.9 14 13.9s14-6.3 14-13.9V189.9c0-7.6-6.3-13.9-14-13.9zM389.5 336c7.7 0 14-6.3 14-13.9V189.9c0-7.7-6.3-13.9-14-13.9s-14 6.3-14 13.9V322c0 7.7 6.3 14 14 14zM326.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.3-14.4-14-14.4zM185.5 144c-7.7 0-14 6.5-14 14.4v195.1c0 8 6.3 14.4 14 14.4s14-6.5 14-14.4V158.4c0-7.9-6.2-14.4-14-14.4zM256 160c-7.7 0-14 6.4-14 14.2v163.5c0 7.8 6.3 14.2 14 14.2s14-6.4 14-14.2V174.2c0-7.8-6.3-14.2-14-14.2z"}})])])};
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
      component.__file = "ios-barcode.vue";

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
    

    
    var iosBarcode = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosBarcode;

})));
