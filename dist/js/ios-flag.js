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
    name: "ios-flag-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-flag-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M406.7 80.8c-3.1.5-6.4 1-9.9 1.4-13.2 1.7-42.8 5.2-60.6 5.2-27.7 0-52.8-6.8-78.2-12.2-25.8-5.5-52.4-11.2-80.6-11.2-56.2 0-75.3 12.1-77.3 13.4L96 80.3v353.3c0 7.2 5.2 13.4 12.3 14.3 8.5 1 15.7-5.6 15.7-13.9V279.6c0-3.8 2.7-7.1 6.4-7.9 10.5-2.1 25.8-3.9 47-3.9 26.2 0 50.7 10 76.6 15.5 26.4 5.6 48.6 11.5 83.4 11.5s71.8-6.6 71.8-6.6c3.9-.6 6.9-3.9 6.9-7.9V88.7c-.1-4.9-4.5-8.7-9.4-7.9z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-flag-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M406.7 80.8c-3.1.5-6.4 1-9.9 1.4-13.2 1.7-42.8 5.2-60.6 5.2-27.7 0-52.8-6.8-78.2-12.2-25.8-5.5-52.4-11.2-80.6-11.2-56.2 0-75.3 12.1-77.3 13.4L96 80.3v353.3c0 7.2 5.2 13.4 12.3 14.3 8.5 1 15.7-5.6 15.7-13.9V279.6c0-3.8 2.7-7.1 6.4-7.9 10.5-2.1 25.8-3.9 47-3.9 26.2 0 50.7 10 76.6 15.5 26.4 5.6 48.6 11.5 83.4 11.5s71.8-6.6 71.8-6.6c3.9-.6 6.9-3.9 6.9-7.9V88.7c-.1-4.9-4.5-8.7-9.4-7.9z"}})])])};
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
      component.__file = "ios-flag.vue";

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
    

    
    var iosFlag = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosFlag;

})));
