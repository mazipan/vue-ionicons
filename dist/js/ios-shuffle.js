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
    name: "ios-shuffle-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-shuffle-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M405.9 288.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2h-75.5l-124-155-.1-.1c-2.6-3.1-6.7-5-10.8-5H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h107.4l52.5 66-52.5 66H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h114c4.1 0 8-1.8 10.7-5l.1-.1 53.2-66.8 53.2 66.8.1.1c2.7 3.2 6.6 5 10.7 5h84.4l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l33.6-33.4c4.2-4.1 6.5-9.6 6.5-15.5s-2.3-11.4-6.5-15.5l-35.6-35.5z"}}),_c('path',{attrs:{"d":"M279.4 235.4c1.1 1.4 2.8 2.1 4.6 2.1h.1c1.8 0 3.5-.8 4.6-2.2l37.9-47.3h75.8l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5 0-5.9-2.3-11.4-6.5-15.5l-33.6-33.4c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2H320c-4.1 0-8 1.8-10.7 5l-.1.1-40.3 50.2c-1.8 2.2-1.8 5.4.1 7.6l10.4 12.3z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-shuffle-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M405.9 288.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2h-75.5l-124-155-.1-.1c-2.6-3.1-6.7-5-10.8-5H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h107.4l52.5 66-52.5 66H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h114c4.1 0 8-1.8 10.7-5l.1-.1 53.2-66.8 53.2 66.8.1.1c2.7 3.2 6.6 5 10.7 5h84.4l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l33.6-33.4c4.2-4.1 6.5-9.6 6.5-15.5s-2.3-11.4-6.5-15.5l-35.6-35.5z"}}),_c('path',{attrs:{"d":"M279.4 235.4c1.1 1.4 2.8 2.1 4.6 2.1h.1c1.8 0 3.5-.8 4.6-2.2l37.9-47.3h75.8l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5 0-5.9-2.3-11.4-6.5-15.5l-33.6-33.4c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2H320c-4.1 0-8 1.8-10.7 5l-.1.1-40.3 50.2c-1.8 2.2-1.8 5.4.1 7.6l10.4 12.3z"}})])])};
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
      component.__file = "ios-shuffle.vue";

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
    

    
    var iosShuffle = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosShuffle;

})));
