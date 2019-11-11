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
    name: "ios-contract-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Contract Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-contract-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M184.3 204.8h-77.7c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h112.2c7.7 0 13.9-6.2 13.9-13.9V106.6c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v77.7L87.7 68c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.4-9.8 4.1-5.4 5.4-5.4 14.2 0 19.6l116.2 117.1zM293.1 232.8h112.2c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9h-77.7L444 87.7c5.4-5.4 5.4-14.2 0-19.6-2.6-2.6-6.1-4.1-9.8-4.1-3.7 0-7.2 1.4-9.8 4L307.3 184.3v-77.7c0-7.7-6.2-13.9-13.9-13.9h-.2c-7.7 0-13.9 6.2-13.9 13.9v112.2c0 7.7 6.2 14 13.8 14zM77.9 448c3.7 0 7.2-1.4 9.8-4l117.1-116.3v77.7c0 7.7 6.2 13.9 13.9 13.9h.2c7.7 0 13.9-6.2 13.9-13.9V293.1c0-7.7-6.2-13.9-13.9-13.9H106.6c-7.7 0-13.9 6.2-13.9 13.9v.2c0 7.7 6.2 13.9 13.9 13.9h77.7L68 424.3c-5.4 5.4-5.4 14.2 0 19.6 2.7 2.7 6.2 4.1 9.9 4.1zM293.1 419.2h.2c7.7 0 13.9-6.2 13.9-13.9v-77.7L424.3 444c2.6 2.6 6.1 4 9.8 4 3.7 0 7.2-1.4 9.8-4.1 5.4-5.4 5.4-14.2 0-19.6L327.7 307.2h77.7c7.7 0 13.9-6.2 13.9-13.9v-.2c0-7.7-6.2-13.9-13.9-13.9H293.1c-7.7 0-13.9 6.2-13.9 13.9v112.2c.1 7.7 6.3 13.9 13.9 13.9z"}})])])};
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
      component.__file = "ios-contract.vue";

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
    

    
    var iosContract = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosContract;

})));
