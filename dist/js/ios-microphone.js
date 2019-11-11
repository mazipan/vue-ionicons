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
    name: "ios-microphone-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Microphone Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-microphone-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M315 204h72.6c6.6 0 12.3-5.2 12.4-11.8.1-6.7-5.3-12.2-12-12.2h-73c-6.7 0-12.1-5.5-12-12.2.1-6.6 5.8-11.8 12.4-11.8h76.5c4.5 0 8.2-3.7 8-8.2-1.7-47.5-31.2-88.1-72.7-106-5.3-2.3-11.2 1.6-11.2 7.3v35.5c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V44c0-6.6-5.4-12-12-12s-12 5.4-12 12v56.6c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V44c0-6.6-5.4-12-12-12s-12 5.4-12 12v40.6c0 6.6-5.2 12.3-11.8 12.4-6.7.1-12.2-5.3-12.2-12V49.1c0-5.8-5.9-9.6-11.2-7.3-41.5 17.9-71.1 58.6-72.7 106-.2 4.5 3.5 8.2 8 8.2h76.5c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-72.6c-6.6 0-12.3 5.2-12.4 11.8-.1 6.7 5.3 12.2 12 12.2h72.6c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-72.6c-6.6 0-12.3 5.2-12.4 11.8-.1 6.7 5.3 12.2 12 12.2h72.6c6.6 0 12.3 5.2 12.4 11.8.1 6.7-5.3 12.2-12 12.2h-76.9c-4.5 0-8.2 3.7-8 8.2.5 13.6 3.3 26.7 7.9 38.8 1.2 3.1 4.2 5 7.4 5h257.1c3.3 0 6.3-2 7.4-5 4.7-12.1 7.5-25.2 7.9-38.8.2-4.5-3.5-8.2-8-8.2h-76.5c-6.6 0-12.3-5.2-12.4-11.8-.1-6.7 5.3-12.2 12-12.2h72.6c6.6 0 12.3-5.2 12.4-11.8.1-6.7-5.3-12.2-12-12.2h-72.6c-6.6 0-12.3-5.2-12.4-11.8 0-6.7 5.4-12.2 12.1-12.2zM141.5 358.6c19 22 45.2 37.2 75.4 40.8 4 .5 7.1 3.9 7.1 7.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.7c0-4.1 3.1-7.5 7.1-7.9 30.3-3.5 56.4-18.7 75.4-40.8 2.2-2.6.3-6.6-3.1-6.6H144.5c-3.4 0-5.2 4-3 6.6z"}})])])};
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
      component.__file = "ios-microphone.vue";

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
    

    
    var iosMicrophone = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosMicrophone;

})));
