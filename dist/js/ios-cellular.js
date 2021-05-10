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
    name: "ios-cellular-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-cellular-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M408.4 51.8c-2.6-2.5-6.1-3.8-9.7-3.8-3.7 0-7.2 1.4-9.9 3.9-2.7 2.6-4.1 6-4.1 9.6 0 3.6 1.5 7 4.2 9.6 30.4 28.5 47.1 66.5 47.1 107.1 0 40.5-16.7 78.5-47.1 107.1-2.7 2.5-4.2 5.9-4.2 9.6 0 3.6 1.4 7 4.1 9.6 2.6 2.5 6.1 3.9 9.9 3.9 3.7 0 7.1-1.4 9.7-3.8C444.3 271 464 226.1 464 178.2v-.1c0-47.9-19.8-92.7-55.6-126.3z"}}),_c('path',{attrs:{"d":"M351 96.8c-2.4-2.3-5.6-3.5-9-3.5-3.3 0-6.5 1.2-8.9 3.4-2.5 2.3-3.9 5.4-3.9 8.7 0 3.3 1.3 6.4 3.8 8.7 18 17 27.8 39.8 27.8 64 0 24.2-9.9 47-27.8 64-2.5 2.3-3.8 5.4-3.8 8.7 0 3.3 1.4 6.4 3.9 8.7 2.4 2.2 5.5 3.4 8.9 3.4 3.4 0 6.6-1.3 9-3.5 22.8-21.7 35.4-50.5 35.4-81.3v-.1c0-30.7-12.6-59.5-35.4-81.2zM123.1 71.1c2.7-2.5 4.2-5.9 4.2-9.6 0-3.6-1.4-7-4.1-9.6-2.6-2.5-6.1-3.9-9.9-3.9-3.7 0-7.1 1.4-9.7 3.8C67.7 85.4 48 130.3 48 178.2v.2c0 47.8 19.8 92.6 55.6 126.2 2.6 2.5 6.1 3.8 9.7 3.8 3.7 0 7.2-1.4 9.9-3.9 2.7-2.6 4.1-6 4.1-9.6 0-3.6-1.5-7-4.2-9.6C92.7 256.8 76 218.8 76 178.2c-.1-40.6 16.7-78.6 47.1-107.1z"}}),_c('path',{attrs:{"d":"M179 114.1c2.5-2.3 3.8-5.4 3.8-8.7 0-3.3-1.4-6.4-3.9-8.7-2.4-2.2-5.5-3.4-8.9-3.4-3.4 0-6.6 1.3-9 3.5-22.8 21.7-35.4 50.5-35.4 81.3v.1c0 30.8 12.6 59.6 35.4 81.2 2.4 2.3 5.6 3.5 9 3.5 3.3 0 6.5-1.2 8.9-3.4 2.5-2.3 3.9-5.4 3.9-8.7 0-3.3-1.3-6.4-3.8-8.7-18-17-27.8-39.8-27.8-64-.1-24.2 9.8-46.9 27.8-64zM256 123.2c-26.5 0-48 21.5-48 48 0 21.6 14.3 39.9 34 45.9v233c0 7.7 6.3 13.9 14 13.9s14-6.2 14-13.9v-233c19.7-6 34-24.3 34-45.9 0-26.5-21.5-48-48-48z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-cellular-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M408.4 51.8c-2.6-2.5-6.1-3.8-9.7-3.8-3.7 0-7.2 1.4-9.9 3.9-2.7 2.6-4.1 6-4.1 9.6 0 3.6 1.5 7 4.2 9.6 30.4 28.5 47.1 66.5 47.1 107.1 0 40.5-16.7 78.5-47.1 107.1-2.7 2.5-4.2 5.9-4.2 9.6 0 3.6 1.4 7 4.1 9.6 2.6 2.5 6.1 3.9 9.9 3.9 3.7 0 7.1-1.4 9.7-3.8C444.3 271 464 226.1 464 178.2v-.1c0-47.9-19.8-92.7-55.6-126.3z"}}),_c('path',{attrs:{"d":"M351 96.8c-2.4-2.3-5.6-3.5-9-3.5-3.3 0-6.5 1.2-8.9 3.4-2.5 2.3-3.9 5.4-3.9 8.7 0 3.3 1.3 6.4 3.8 8.7 18 17 27.8 39.8 27.8 64 0 24.2-9.9 47-27.8 64-2.5 2.3-3.8 5.4-3.8 8.7 0 3.3 1.4 6.4 3.9 8.7 2.4 2.2 5.5 3.4 8.9 3.4 3.4 0 6.6-1.3 9-3.5 22.8-21.7 35.4-50.5 35.4-81.3v-.1c0-30.7-12.6-59.5-35.4-81.2zM123.1 71.1c2.7-2.5 4.2-5.9 4.2-9.6 0-3.6-1.4-7-4.1-9.6-2.6-2.5-6.1-3.9-9.9-3.9-3.7 0-7.1 1.4-9.7 3.8C67.7 85.4 48 130.3 48 178.2v.2c0 47.8 19.8 92.6 55.6 126.2 2.6 2.5 6.1 3.8 9.7 3.8 3.7 0 7.2-1.4 9.9-3.9 2.7-2.6 4.1-6 4.1-9.6 0-3.6-1.5-7-4.2-9.6C92.7 256.8 76 218.8 76 178.2c-.1-40.6 16.7-78.6 47.1-107.1z"}}),_c('path',{attrs:{"d":"M179 114.1c2.5-2.3 3.8-5.4 3.8-8.7 0-3.3-1.4-6.4-3.9-8.7-2.4-2.2-5.5-3.4-8.9-3.4-3.4 0-6.6 1.3-9 3.5-22.8 21.7-35.4 50.5-35.4 81.3v.1c0 30.8 12.6 59.6 35.4 81.2 2.4 2.3 5.6 3.5 9 3.5 3.3 0 6.5-1.2 8.9-3.4 2.5-2.3 3.9-5.4 3.9-8.7 0-3.3-1.3-6.4-3.8-8.7-18-17-27.8-39.8-27.8-64-.1-24.2 9.8-46.9 27.8-64zM256 123.2c-26.5 0-48 21.5-48 48 0 21.6 14.3 39.9 34 45.9v233c0 7.7 6.3 13.9 14 13.9s14-6.2 14-13.9v-233c19.7-6 34-24.3 34-45.9 0-26.5-21.5-48-48-48z"}})])])};
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
      component.__file = "ios-cellular.vue";

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
    

    
    var iosCellular = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosCellular;

})));
