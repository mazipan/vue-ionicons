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
    name: "md-paw-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-paw-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M459.5 165.9c-4.7-10.5-12.7-18.1-23.1-22-4.8-1.7-9.7-2.6-14.8-2.6-21.7 0-43.7 16.7-54.9 41.6-13.8 30.9-5.8 61 18.6 70.3 4.9 1.8 10.1 2.8 15.6 2.8 22.1 0 44.6-15.3 55.9-38.1 8.5-17.5 9.5-36.8 2.7-52zM145.3 182.8c-11.1-24.9-33.2-41.6-54.9-41.6-5.1 0-10.1.9-14.8 2.6-10.4 3.9-18.3 11.5-23.1 22-6.9 15.2-5.9 34.6 2.7 51.9 11.3 22.8 33.8 38.1 55.9 38.1 5.4 0 10.7-.9 15.6-2.8 24.4-9.1 32.4-39.3 18.6-70.2zM193.5 179.4c2 .1 4 0 6-.2 11.7-.9 22.3-5.9 30.6-14.3 13.4-13.6 17.1-34.9 14.3-56.8-4.3-33.7-25.8-59-54.8-60.1 0 0-4.1 0-6.2.2-12.8 1.1-24.4 6.5-33.5 15.9-13.3 13.6-19.7 33.7-17.1 53.8 4.3 33.4 30.9 60.4 60.7 61.5zM256 224c-69.3 0-138.7 97.1-138.7 176.3 0 23.6 11.8 42.6 23.5 50.4 14.4 9.6 24.5 13.4 45.5 13.4 13.4 0 21.6-2.5 28.1-6.1 12.3-6.7 25.9-10.4 39.9-10.4h3.5c14 0 27.6 3.8 39.9 10.4 6.5 3.5 14.7 6.1 28.1 6.1 21.1 0 31.2-3.8 45.5-13.4 11.6-7.8 23.5-26.8 23.5-50.4C394.7 321 325.3 224 256 224zM312.6 179.1c2 .2 4 .2 6 .2 29.8-1.1 56.5-28 60.8-61.5 2.6-20.2-3.8-40.4-17.1-53.8-9.2-9.3-20.3-14.6-33.1-15.6-2.1-.2-6.7-.2-6.7-.2-28.9 1.1-50.4 26.1-54.8 59.9-2.8 21.9.9 43.3 14.3 56.8 8.4 8.3 19 13.2 30.6 14.2z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-paw-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M459.5 165.9c-4.7-10.5-12.7-18.1-23.1-22-4.8-1.7-9.7-2.6-14.8-2.6-21.7 0-43.7 16.7-54.9 41.6-13.8 30.9-5.8 61 18.6 70.3 4.9 1.8 10.1 2.8 15.6 2.8 22.1 0 44.6-15.3 55.9-38.1 8.5-17.5 9.5-36.8 2.7-52zM145.3 182.8c-11.1-24.9-33.2-41.6-54.9-41.6-5.1 0-10.1.9-14.8 2.6-10.4 3.9-18.3 11.5-23.1 22-6.9 15.2-5.9 34.6 2.7 51.9 11.3 22.8 33.8 38.1 55.9 38.1 5.4 0 10.7-.9 15.6-2.8 24.4-9.1 32.4-39.3 18.6-70.2zM193.5 179.4c2 .1 4 0 6-.2 11.7-.9 22.3-5.9 30.6-14.3 13.4-13.6 17.1-34.9 14.3-56.8-4.3-33.7-25.8-59-54.8-60.1 0 0-4.1 0-6.2.2-12.8 1.1-24.4 6.5-33.5 15.9-13.3 13.6-19.7 33.7-17.1 53.8 4.3 33.4 30.9 60.4 60.7 61.5zM256 224c-69.3 0-138.7 97.1-138.7 176.3 0 23.6 11.8 42.6 23.5 50.4 14.4 9.6 24.5 13.4 45.5 13.4 13.4 0 21.6-2.5 28.1-6.1 12.3-6.7 25.9-10.4 39.9-10.4h3.5c14 0 27.6 3.8 39.9 10.4 6.5 3.5 14.7 6.1 28.1 6.1 21.1 0 31.2-3.8 45.5-13.4 11.6-7.8 23.5-26.8 23.5-50.4C394.7 321 325.3 224 256 224zM312.6 179.1c2 .2 4 .2 6 .2 29.8-1.1 56.5-28 60.8-61.5 2.6-20.2-3.8-40.4-17.1-53.8-9.2-9.3-20.3-14.6-33.1-15.6-2.1-.2-6.7-.2-6.7-.2-28.9 1.1-50.4 26.1-54.8 59.9-2.8 21.9.9 43.3 14.3 56.8 8.4 8.3 19 13.2 30.6 14.2z"}})])])};
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
      component.__file = "md-paw.vue";

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
    

    
    var mdPaw = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdPaw;

})));
