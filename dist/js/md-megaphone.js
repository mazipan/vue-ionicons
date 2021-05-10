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
    name: "md-megaphone-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-megaphone-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M382.1 143.4l-23.1 23c14.7 14.7 23.9 35.2 23.9 57.6s-9.2 42.9-23.9 57.6l23.1 23.1c20.6-20.6 33.4-49.2 33.4-80.6s-12.8-60.1-33.4-80.7z"}}),_c('path',{attrs:{"d":"M428.2 99l-22.7 22.7c26.1 26.1 42.3 62.4 42.3 102.3 0 39.8-16.1 76.1-42.3 102.3l22.7 22.7c31.9-32.1 51.8-76.3 51.8-125s-19.8-92.9-51.8-125zM320 184.1V80h-32l-96 80H64l-32 16v112l32 16 80 128h48l-30-128h30l96 64h32V263.9c18.4-1.7 32-18.9 32-39.9s-13.6-38.2-32-39.9z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-megaphone-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M382.1 143.4l-23.1 23c14.7 14.7 23.9 35.2 23.9 57.6s-9.2 42.9-23.9 57.6l23.1 23.1c20.6-20.6 33.4-49.2 33.4-80.6s-12.8-60.1-33.4-80.7z"}}),_c('path',{attrs:{"d":"M428.2 99l-22.7 22.7c26.1 26.1 42.3 62.4 42.3 102.3 0 39.8-16.1 76.1-42.3 102.3l22.7 22.7c31.9-32.1 51.8-76.3 51.8-125s-19.8-92.9-51.8-125zM320 184.1V80h-32l-96 80H64l-32 16v112l32 16 80 128h48l-30-128h30l96 64h32V263.9c18.4-1.7 32-18.9 32-39.9s-13.6-38.2-32-39.9z"}})])])};
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
      component.__file = "md-megaphone.vue";

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
    

    
    var mdMegaphone = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdMegaphone;

})));
