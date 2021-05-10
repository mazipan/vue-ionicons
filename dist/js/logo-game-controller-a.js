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
    name: "logo-game-controller-a-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"logo-game-controller-a-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M369.3 146H142.7C81.5 146 32 191.5 32 255.4c0 64 49.5 110.6 110.7 110.6h226.5c61.2 0 110.7-46.6 110.7-110.6.1-63.9-49.4-109.4-110.6-109.4zM200 266.7c0 2.7-2.4 5.3-5.2 5.3H160v35.1c0 2.8-3.1 4.9-5.8 4.9h-21.4c-2.6 0-4.8-1.9-4.8-4.5V272H92.9c-2.8 0-4.9-3.1-4.9-5.8v-21.4c0-2.6 1.9-4.8 4.5-4.8H128v-34.8c0-2.8 1.9-5.2 4.6-5.2h22.1c2.7 0 5.3 2.4 5.3 5.2V240h34.8c2.8 0 5.2 1.9 5.2 4.6v22.1zm119.8 8.8c-10.7 0-19.5-8.6-19.5-19.2s8.7-19.2 19.5-19.2 19.5 8.6 19.5 19.2-8.8 19.2-19.5 19.2zm42.5 41.8c-10.7 0-19.5-8.5-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.5 19.5 19.2c0 10.6-8.7 19.1-19.5 19.1zm0-83.7c-10.7 0-19.5-8.6-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.6 19.5 19.2c0 10.5-8.7 19.1-19.5 19.1zm42.6 41.9c-10.7 0-19.4-8.6-19.4-19.2s8.7-19.2 19.4-19.2 19.5 8.6 19.5 19.2c-.1 10.6-8.8 19.2-19.5 19.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-game-controller-a-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M369.3 146H142.7C81.5 146 32 191.5 32 255.4c0 64 49.5 110.6 110.7 110.6h226.5c61.2 0 110.7-46.6 110.7-110.6.1-63.9-49.4-109.4-110.6-109.4zM200 266.7c0 2.7-2.4 5.3-5.2 5.3H160v35.1c0 2.8-3.1 4.9-5.8 4.9h-21.4c-2.6 0-4.8-1.9-4.8-4.5V272H92.9c-2.8 0-4.9-3.1-4.9-5.8v-21.4c0-2.6 1.9-4.8 4.5-4.8H128v-34.8c0-2.8 1.9-5.2 4.6-5.2h22.1c2.7 0 5.3 2.4 5.3 5.2V240h34.8c2.8 0 5.2 1.9 5.2 4.6v22.1zm119.8 8.8c-10.7 0-19.5-8.6-19.5-19.2s8.7-19.2 19.5-19.2 19.5 8.6 19.5 19.2-8.8 19.2-19.5 19.2zm42.5 41.8c-10.7 0-19.5-8.5-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.5 19.5 19.2c0 10.6-8.7 19.1-19.5 19.1zm0-83.7c-10.7 0-19.5-8.6-19.5-19.1 0-10.6 8.7-19.2 19.5-19.2s19.5 8.6 19.5 19.2c0 10.5-8.7 19.1-19.5 19.1zm42.6 41.9c-10.7 0-19.4-8.6-19.4-19.2s8.7-19.2 19.4-19.2 19.5 8.6 19.5 19.2c-.1 10.6-8.8 19.2-19.5 19.2z"}})])])};
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
      component.__file = "logo-game-controller-a.vue";

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
    

    
    var logoGameControllerA = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoGameControllerA;

})));
