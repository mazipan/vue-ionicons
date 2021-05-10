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
    name: "md-recording-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-recording-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M369.8 160c-53.4 0-96.2 42.8-96.2 96 0 23.6 7.9 44.5 21.9 61.1h-78.8c14-16.6 21.9-37.5 21.9-61.1 0-53.2-42.9-96-96.2-96S46 202.8 46 256s42.9 96 96.2 96h227.5c53.4 0 96.2-42.8 96.2-96s-42.8-96-96.1-96zM142.2 317.1C108.1 317.1 81 290 81 256s27.1-61.1 61.2-61.1 61.2 27.1 61.2 61.1-27 61.1-61.2 61.1zm227.6 0c-34.1 0-61.2-27.1-61.2-61.1s27.1-61.1 61.2-61.1S431 222 431 256s-27.1 61.1-61.2 61.1z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-recording-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M369.8 160c-53.4 0-96.2 42.8-96.2 96 0 23.6 7.9 44.5 21.9 61.1h-78.8c14-16.6 21.9-37.5 21.9-61.1 0-53.2-42.9-96-96.2-96S46 202.8 46 256s42.9 96 96.2 96h227.5c53.4 0 96.2-42.8 96.2-96s-42.8-96-96.1-96zM142.2 317.1C108.1 317.1 81 290 81 256s27.1-61.1 61.2-61.1 61.2 27.1 61.2 61.1-27 61.1-61.2 61.1zm227.6 0c-34.1 0-61.2-27.1-61.2-61.1s27.1-61.1 61.2-61.1S431 222 431 256s-27.1 61.1-61.2 61.1z"}})])])};
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
      component.__file = "md-recording.vue";

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
    

    
    var mdRecording = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdRecording;

})));
