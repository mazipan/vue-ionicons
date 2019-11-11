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
    name: "md-analytics-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Md Analytics Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"md-analytics-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M379.4 178.3l-87.2 133.4C299 320 303 330.5 303 342c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-3 .3-6 .8-8.9l-57.6-33.5c-8.6 8.3-20.3 13.4-33.3 13.4-8.6 0-16.6-2.3-23.6-6.2L32 364.2v57.2c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V208.8l-58.6-38.9c-8.1 6.3-18.3 10.1-29.4 10.1-4.4 0-8.7-.6-12.7-1.7z"}}),_c('path',{attrs:{"d":"M117 217c26.5 0 48 21.5 48 48 0 2.1-.2 4.2-.4 6.2l60.1 33.6c8.3-6.8 18.8-10.8 30.4-10.8 3.6 0 7.1.4 10.4 1.1l87.4-135.4c-5.6-7.8-8.9-17.4-8.9-27.8 0-26.5 21.5-48 48-48s48 21.5 48 48c0 3.9-.5 7.7-1.3 11.3l41.3 27.6V90.7c0-23.5-19.2-42.7-42.7-42.7H74.7C51.2 48 32 67.2 32 90.7V320l40-38.3c-1.9-5.2-3-10.8-3-16.7 0-26.5 21.5-48 48-48z"}})])])};
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
      component.__file = "md-analytics.vue";

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
    

    
    var mdAnalytics = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdAnalytics;

})));
