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
    name: "ios-qr-scanner-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Qr Scanner Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-qr-scanner-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M174 64h-58.8C78.1 64 48 94.1 48 131.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-9.1 4.3-18.7 11.7-26.2 7.5-7.6 17.2-12 26.5-12H174c7.7 0 14-6.3 14-14s-6.3-14-14-14zM397.8 64H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h59.8c9.3 0 19 4.4 26.5 12 7.4 7.5 11.7 17.1 11.7 26.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-36.5-29.7-66.2-66.2-66.2zM174 420h-59.8c-9.3 0-19-4.4-26.5-12-7.4-7.5-11.7-17.1-11.7-26.2V322c0-7.7-6.3-14-14-14s-14 6.3-14 14v59.8c0 36.5 29.7 66.2 66.2 66.2H174c7.7 0 14-6.3 14-14s-6.3-14-14-14zM450 308c-7.7 0-14 6.3-14 14v59.8c0 9.1-4.3 18.7-11.7 26.2-7.5 7.6-17.2 12-26.5 12H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h58.8c37 0 67.2-30.1 67.2-67.2V322c0-7.7-6.3-14-14-14z"}})])])};
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
      component.__file = "ios-qr-scanner.vue";

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
    

    
    var iosQrScanner = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosQrScanner;

})));
