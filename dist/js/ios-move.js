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
    name: "ios-move-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Ios Move Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"ios-move-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M475.9 246.2l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l54.9 54.9-161.8.5.5-161.8 54.9 54.9c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l54.9-54.9.5 161.8-161.8-.5 54.9-54.9c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6L80 270.5l161.8-.5-.5 161.8-54.9-54.9c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-54.9 54.9-.5-161.8 161.8.5-54.9 54.9c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.5-5.4 5.5-14.2 0-19.6z"}})])])};
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
      component.__file = "ios-move.vue";

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
    

    
    var iosMove = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosMove;

})));
