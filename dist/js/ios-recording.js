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
    name: "ios-recording-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-recording-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M386.2 146h-.1c-60.6 0-109.8 49.2-109.8 110.1 0 30.5 12.3 58 32.3 77.9H203.5c19.9-19.9 32.3-47.5 32.3-77.9 0-60.8-49.2-110.1-109.8-110.1h-.1-.1C65.2 146 16 195.2 16 256s49.2 110 109.8 110h260.4c60.6 0 109.8-49.2 109.8-110s-49.2-110-109.8-110zM464 256c0 43.1-34.9 78.2-77.9 78.2s-77.9-35.1-77.9-78.2 34.9-78.2 77.9-78.2S464 212.9 464 256zm-338.1 78.2C83 334.2 48 299.1 48 256s34.9-78.2 77.9-78.2 77.9 35.1 77.9 78.2-34.9 78.2-77.9 78.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-recording-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M386.2 146h-.1c-60.6 0-109.8 49.2-109.8 110.1 0 30.5 12.3 58 32.3 77.9H203.5c19.9-19.9 32.3-47.5 32.3-77.9 0-60.8-49.2-110.1-109.8-110.1h-.1-.1C65.2 146 16 195.2 16 256s49.2 110 109.8 110h260.4c60.6 0 109.8-49.2 109.8-110s-49.2-110-109.8-110zM464 256c0 43.1-34.9 78.2-77.9 78.2s-77.9-35.1-77.9-78.2 34.9-78.2 77.9-78.2S464 212.9 464 256zm-338.1 78.2C83 334.2 48 299.1 48 256s34.9-78.2 77.9-78.2 77.9 35.1 77.9 78.2-34.9 78.2-77.9 78.2z"}})])])};
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
      component.__file = "ios-recording.vue";

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
    

    
    var iosRecording = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosRecording;

})));
