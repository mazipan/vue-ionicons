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
    name: "ios-git-commit-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-git-commit-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M466 242h-76.7c-3.3-31.9-17.8-61.3-41.3-83.5-25-23.5-57.7-36.5-92-36.5s-67 13-91.9 36.5c-23.5 22.2-38 51.6-41.3 83.5H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h76.7c3.3 31.9 17.8 61.3 41.3 83.5 25 23.5 57.7 36.5 92 36.5s67-13 91.9-36.5c23.5-22.2 38-51.6 41.3-83.5H466c7.7 0 14-6.3 14-14s-6.3-14-14-14zm-135 89c-20 20-46.6 31-75 31-28.3 0-54.9-11-75-31-20-20-31-46.6-31-75s11-54.9 31-75c20-20 46.6-31 75-31 28.3 0 54.9 11 75 31 20 20 31 46.6 31 75s-11 54.9-31 75z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-git-commit-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M466 242h-76.7c-3.3-31.9-17.8-61.3-41.3-83.5-25-23.5-57.7-36.5-92-36.5s-67 13-91.9 36.5c-23.5 22.2-38 51.6-41.3 83.5H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h76.7c3.3 31.9 17.8 61.3 41.3 83.5 25 23.5 57.7 36.5 92 36.5s67-13 91.9-36.5c23.5-22.2 38-51.6 41.3-83.5H466c7.7 0 14-6.3 14-14s-6.3-14-14-14zm-135 89c-20 20-46.6 31-75 31-28.3 0-54.9-11-75-31-20-20-31-46.6-31-75s11-54.9 31-75c20-20 46.6-31 75-31 28.3 0 54.9 11 75 31 20 20 31 46.6 31 75s-11 54.9-31 75z"}})])])};
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
      component.__file = "ios-git-commit.vue";

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
    

    
    var iosGitCommit = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosGitCommit;

})));
