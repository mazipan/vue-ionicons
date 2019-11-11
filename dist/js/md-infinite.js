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
    name: "md-infinite-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Md Infinite Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"md-infinite-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M434.7 188c-18.8-18-43.8-28-70.5-28-26.6 0-51.6 9.9-70.4 27.9l-17.6 15.9 33.1 32.1 17-15.4.1-.1c10.1-9.6 23.5-15 37.7-15 14.2 0 27.6 5.3 37.7 14.9 10 9.6 15.4 22.3 15.4 35.8 0 13.5-5.5 26.1-15.4 35.6-10.1 9.6-23.5 15-37.7 15s-27.6-5.3-37.7-14.9L218.2 188c-18.9-18-43.9-28-70.4-28-26.7 0-51.7 9.9-70.5 28C58.4 206.1 48 230.2 48 256c0 25.7 10.4 49.9 29.3 68 18.8 18 43.8 28 70.5 28 26.7 0 51.7-9.9 70.4-28l37.8-36.1 37.7 36.1c18.9 18 43.9 28 70.4 28 26.7 0 51.7-9.9 70.4-27.9 19-18.1 29.4-42.2 29.4-68 .1-25.8-10.3-50-29.2-68.1zM185.5 291.7c-10.1 9.6-23.5 15-37.7 15-14.2 0-27.6-5.3-37.7-14.9-10-9.6-15.4-22.3-15.4-35.8 0-13.5 5.5-26.1 15.4-35.6 10.1-9.6 23.5-15 37.7-15 14.2 0 27.6 5.3 37.7 14.9l37.4 35.8-37.4 35.6z"}})])])};
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
      component.__file = "md-infinite.vue";

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
    

    
    var mdInfinite = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdInfinite;

})));
