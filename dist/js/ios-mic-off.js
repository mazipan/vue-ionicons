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
    name: "ios-mic-off-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Mic Off Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-mic-off-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M369.8 464c-4.9 0-9.7-2.5-12.3-7L129.9 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l227.6 387.7c4 6.7 1.7 15.4-5.1 19.3-2.3 1.3-4.8 1.9-7.2 1.9zM320 272V112c0-35.2-28.8-64-64-64-28.4 0-52.6 18.8-60.9 44.5L315 296.8c3.2-7.6 5-16 5-24.8zM192 272c0 35.2 28.8 64 64 64 3.9 0 7.6-.4 11.3-1L192 206.6V272zM366 275v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 15.2-4.2 29.4-11.4 41.6l15.6 26.6c14.9-18.7 23.8-42.4 23.8-68.2z"}}),_c('path',{attrs:{"d":"M256 357c-45.2 0-82-36.8-82-82v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 55.9 41.9 102.2 96 109.1V436h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14h100c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36v-51.9c7.9-1 15.6-2.9 22.9-5.5l-14.5-24.8c-7.1 2.1-14.6 3.2-22.4 3.2z"}})])])};
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
      component.__file = "ios-mic-off.vue";

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
    

    
    var iosMicOff = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosMicOff;

})));
