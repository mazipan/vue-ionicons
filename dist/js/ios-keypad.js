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
    name: "ios-keypad-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Keypad Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-keypad-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M394.6 341.2c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM256 341.2c-29.5 0-53.4 23.9-53.4 53.4S226.5 448 256 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM117.4 341.2c-29.5 0-53.4 23.9-53.4 53.4S87.9 448 117.4 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM394.6 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4S448 285.5 448 256s-23.9-53.4-53.4-53.4zM256 202.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM117.4 202.6C87.9 202.6 64 226.5 64 256s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM394.6 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S424.1 64 394.6 64zM256 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S285.5 64 256 64zM117.4 64C87.9 64 64 87.9 64 117.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S146.9 64 117.4 64z"}})])])};
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
      component.__file = "ios-keypad.vue";

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
    

    
    var iosKeypad = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosKeypad;

})));
