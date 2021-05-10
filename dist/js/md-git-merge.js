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
    name: "md-git-merge-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-git-merge-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M384 224c-23.7 0-44.4 12.9-55.4 32-18.3-.5-52.4-4.1-75.5-18.1-32.3-19.4-64.6-53.1-87-90.5 15.7-11.7 26-30.3 26-51.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4V244.2c18.7 19.4 39.1 36 60 48.6 38.8 23.4 87 26.9 108.6 27.3 11.1 19.1 31.7 31.9 55.4 31.9 35.3 0 64-28.7 64-64s-28.7-64-64-64zM88 96c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40zm80 320c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm216-88c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-git-merge-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M384 224c-23.7 0-44.4 12.9-55.4 32-18.3-.5-52.4-4.1-75.5-18.1-32.3-19.4-64.6-53.1-87-90.5 15.7-11.7 26-30.3 26-51.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4V244.2c18.7 19.4 39.1 36 60 48.6 38.8 23.4 87 26.9 108.6 27.3 11.1 19.1 31.7 31.9 55.4 31.9 35.3 0 64-28.7 64-64s-28.7-64-64-64zM88 96c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40zm80 320c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm216-88c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}})])])};
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
      component.__file = "md-git-merge.vue";

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
    

    
    var mdGitMerge = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdGitMerge;

})));
