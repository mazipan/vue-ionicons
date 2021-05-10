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
    name: "md-git-compare-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-git-compare-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M192 382h-22c-24.6 0-29-3.6-33.8-9.6-5.5-6.9-8.2-19.1-8.2-54.2V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S32 60.7 32 96c0 23.7 12.9 44.3 32 55.4v166.8c0 46.4 3.7 70.8 22.1 94 19.9 25.1 45 35.8 83.9 35.8h22v64l96-96-96-96v62zM96 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM448 360.6V190.8c0-46.4-3.7-70.8-22.1-94C406 71.7 380.9 62 342 62h-22V0l-96 96 96 96v-64h22c24.6 0 29 2.6 33.8 8.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM416 456c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-git-compare-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M192 382h-22c-24.6 0-29-3.6-33.8-9.6-5.5-6.9-8.2-19.1-8.2-54.2V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S32 60.7 32 96c0 23.7 12.9 44.3 32 55.4v166.8c0 46.4 3.7 70.8 22.1 94 19.9 25.1 45 35.8 83.9 35.8h22v64l96-96-96-96v62zM96 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM448 360.6V190.8c0-46.4-3.7-70.8-22.1-94C406 71.7 380.9 62 342 62h-22V0l-96 96 96 96v-64h22c24.6 0 29 2.6 33.8 8.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM416 456c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}})])])};
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
      component.__file = "md-git-compare.vue";

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
    

    
    var mdGitCompare = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdGitCompare;

})));
