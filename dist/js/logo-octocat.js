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
    name: "logo-octocat-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Logo Octocat Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-octocat-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M178.4 287.5c-9.1 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14 12.8 23.2 12.8 8.5 0 15.9-4.3 22.1-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.1-12.8zM334.7 287.5c-9 0-16.9 4.2-23.2 12.8-6.3 8.5-9.4 19-9.4 31.4 0 12.5 3.2 23 9.4 31.5 6.3 8.5 14.1 12.8 23.2 12.8 8.5 0 15.9-4.3 22.2-12.8 6.3-8.5 9.4-19 9.4-31.5 0-12.4-3.2-22.9-9.4-31.4-6.3-8.6-13.6-12.8-22.2-12.8z"}}),_c('path',{attrs:{"d":"M445.8 172c-.1 0 2.7-14.3.3-39.2-2.2-24.9-7.5-47.8-16.1-68.8 0 0-4.4.8-12.8 2.9s-22.1 6.3-40.9 14.8c-18.5 8.5-38 19.8-58.3 33.5-13.8-3.9-34.4-5.9-62-5.9-26.3 0-46.9 2-62 5.9-44.6-30.9-81.9-48-112.1-51.2-8.6 21-13.9 44-16 69-2.4 24.9.4 39.3.4 39.3C42 198.6 32 236.5 32 267.8c0 24.2.7 46.1 6.1 65.5 5.6 19.3 12.7 35.1 21.1 47.2 8.6 12.1 19 22.8 31.6 31.9 12.5 9.3 24 16 34.4 20.2 10.5 4.4 22.4 7.6 36 9.9 13.3 2.4 23.4 3.6 30.5 4 0 0 28 1.5 64.4 1.5s64.3-1.5 64.3-1.5c7-.4 17.1-1.6 30.5-4 13.5-2.3 25.5-5.6 35.9-9.9 10.4-4.3 21.9-10.9 34.5-20.2 12.5-9 22.9-19.7 31.5-31.9 8.4-12.1 15.5-27.9 21.1-47.2 5.5-19.4 6.1-41.4 6.1-65.6 0-30.3-10-68.7-34.2-95.7zm-65.4 233.6c-27.9 13.1-68.9 18.4-123.3 18.4H255c-54.4 0-95.4-5.2-122.8-18.4-27.5-13.1-41.3-40.1-41.3-80.7 0-24.3 8.6-44 25.5-59.1 7.4-6.5 16.4-11 27.6-13.7 11.1-2.6 21.4-2.8 31-2.5 9.4.4 22.6 2.2 39.3 3.5 16.8 1.3 29.3 3 41.8 3 11.7 0 27.2-2 52.1-4 25-2 43.5-3 55.5-1 12.3 2 23 6.2 32.1 14.7 17.7 15.8 26.6 35.5 26.6 59.1-.1 40.6-14.2 67.6-42 80.7z"}})])])};
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
      component.__file = "logo-octocat.vue";

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
    

    
    var logoOctocat = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoOctocat;

})));
