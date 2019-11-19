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
    name: "ios-bus-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-bus-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M109.6 416.7c-1.9-1.9-5.7-.5-5.6 2.2 1 21.5 1.4 29 5.5 29h55.1c4.4 0 3.3-11.5 3.3-22-34.3.1-46.9 2.3-58.3-9.2zM402.4 416.7c1.9-1.9 5.7-.5 5.6 2.2-1 21.5-1.4 29-5.5 29h-55.1c-4.4 0-3.3-11.5-3.3-22 34.3.1 46.9 2.3 58.3-9.2zM384 64H128c-17.6 0-32 14.4-32 32v276c0 22 18 40 40 40h240c22 0 40-18 40-40V96c0-17.6-14.4-32-32-32zM162 375.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-1 11.7-10.4 21.1-22 22zm76-77.9h-97.8c-8.9 0-16.2-7.3-16.2-16.2V166.2c0-8.9 7.3-16.2 16.2-16.2H238c2.2 0 4 1.8 4 4v140c0 2.2-1.8 4-4 4zm115.9 77.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-.9 11.7-10.3 21.1-22 22zM388 282c0 8.8-7.2 16-16 16h-98c-2.2 0-4-1.8-4-4V154c0-2.2 1.8-4 4-4h98c8.8 0 16 7.2 16 16v116zm-15-162H139c-8.8 0-15-6.3-15-14s6.2-14 15-14h234c8.8 0 15 6.3 15 14s-6.2 14-15 14z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-bus-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M109.6 416.7c-1.9-1.9-5.7-.5-5.6 2.2 1 21.5 1.4 29 5.5 29h55.1c4.4 0 3.3-11.5 3.3-22-34.3.1-46.9 2.3-58.3-9.2zM402.4 416.7c1.9-1.9 5.7-.5 5.6 2.2-1 21.5-1.4 29-5.5 29h-55.1c-4.4 0-3.3-11.5-3.3-22 34.3.1 46.9 2.3 58.3-9.2zM384 64H128c-17.6 0-32 14.4-32 32v276c0 22 18 40 40 40h240c22 0 40-18 40-40V96c0-17.6-14.4-32-32-32zM162 375.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-1 11.7-10.4 21.1-22 22zm76-77.9h-97.8c-8.9 0-16.2-7.3-16.2-16.2V166.2c0-8.9 7.3-16.2 16.2-16.2H238c2.2 0 4 1.8 4 4v140c0 2.2-1.8 4-4 4zm115.9 77.9c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-.9 11.7-10.3 21.1-22 22zM388 282c0 8.8-7.2 16-16 16h-98c-2.2 0-4-1.8-4-4V154c0-2.2 1.8-4 4-4h98c8.8 0 16 7.2 16 16v116zm-15-162H139c-8.8 0-15-6.3-15-14s6.2-14 15-14h234c8.8 0 15 6.3 15 14s-6.2 14-15 14z"}})])])};
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
      component.__file = "ios-bus.vue";

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
    

    
    var iosBus = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosBus;

})));
