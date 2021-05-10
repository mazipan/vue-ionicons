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
    name: "ios-git-pull-request-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-git-pull-request-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M393 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-77.7L276 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-54.8 54.6C192.9 61.5 165.9 40 134 40c-38.6 0-70 31.4-70 70 0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v163.3c-14.5 3.2-27.8 11-37.7 22.3C70.2 376.7 64 393 64 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-17.4-6.4-34-18-46.9-10.3-11.4-24-19.1-39-21.9V178.8c15-2.8 28.7-10.5 39-21.9 7.6-8.4 12.9-18.4 15.7-29.1l56.4 56.2c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.1-40.1H314c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM176 410c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm-42-258c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm244 300c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-git-pull-request-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M393 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-77.7L276 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-54.8 54.6C192.9 61.5 165.9 40 134 40c-38.6 0-70 31.4-70 70 0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v163.3c-14.5 3.2-27.8 11-37.7 22.3C70.2 376.7 64 393 64 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-17.4-6.4-34-18-46.9-10.3-11.4-24-19.1-39-21.9V178.8c15-2.8 28.7-10.5 39-21.9 7.6-8.4 12.9-18.4 15.7-29.1l56.4 56.2c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.1-40.1H314c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM176 410c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm-42-258c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm244 300c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"}})])])};
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
      component.__file = "ios-git-pull-request.vue";

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
    

    
    var iosGitPullRequest = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosGitPullRequest;

})));
