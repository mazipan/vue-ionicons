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
    name: "ios-medical-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-medical-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M430.3 174.3l-16.5-28.6c-4.3-7.4-13.8-10-21.2-5.7L294 197c-2.7 1.5-6-.4-6-3.5v-114c0-8.6-6.9-15.5-15.5-15.5h-33c-8.6 0-15.5 6.9-15.5 15.5v114.1c0 3.1-3.3 5-6 3.5l-98.6-57c-7.4-4.3-16.9-1.7-21.2 5.7l-16.5 28.6c-4.3 7.4-1.7 16.9 5.7 21.1l98.7 57.1c2.7 1.5 2.7 5.4 0 6.9l-98.7 57.1c-7.4 4.3-9.9 13.7-5.7 21.1l16.5 28.6c4.3 7.4 13.8 10 21.2 5.7l98.6-57c2.7-1.5 6 .4 6 3.5v114.1c0 8.6 6.9 15.5 15.5 15.5h33c8.6 0 15.5-6.9 15.5-15.5V318.4c0-3.1 3.4-5 6-3.5l98.6 57c7.4 4.3 16.9 1.7 21.2-5.7l16.5-28.6c4.3-7.4 1.7-16.9-5.7-21.1l-98.7-57.1c-2.7-1.5-2.7-5.4 0-6.9l98.7-57.1c7.4-4.2 9.9-13.7 5.7-21.1z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-medical-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M430.3 174.3l-16.5-28.6c-4.3-7.4-13.8-10-21.2-5.7L294 197c-2.7 1.5-6-.4-6-3.5v-114c0-8.6-6.9-15.5-15.5-15.5h-33c-8.6 0-15.5 6.9-15.5 15.5v114.1c0 3.1-3.3 5-6 3.5l-98.6-57c-7.4-4.3-16.9-1.7-21.2 5.7l-16.5 28.6c-4.3 7.4-1.7 16.9 5.7 21.1l98.7 57.1c2.7 1.5 2.7 5.4 0 6.9l-98.7 57.1c-7.4 4.3-9.9 13.7-5.7 21.1l16.5 28.6c4.3 7.4 13.8 10 21.2 5.7l98.6-57c2.7-1.5 6 .4 6 3.5v114.1c0 8.6 6.9 15.5 15.5 15.5h33c8.6 0 15.5-6.9 15.5-15.5V318.4c0-3.1 3.4-5 6-3.5l98.6 57c7.4 4.3 16.9 1.7 21.2-5.7l16.5-28.6c4.3-7.4 1.7-16.9-5.7-21.1l-98.7-57.1c-2.7-1.5-2.7-5.4 0-6.9l98.7-57.1c7.4-4.2 9.9-13.7 5.7-21.1z"}})])])};
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
      component.__file = "ios-medical.vue";

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
    

    
    var iosMedical = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosMedical;

})));
