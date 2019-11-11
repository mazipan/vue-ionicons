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
    name: "md-cube-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Md Cube Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"md-cube-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M467.3 168.1c-1.8 0-3.5.3-5.1 1l-177.6 92.1h-.1c-7.6 4.7-12.5 12.5-12.5 21.4v185.9c0 6.4 5.6 11.5 12.7 11.5 2.2 0 4.3-.5 6.1-1.4.2-.1.4-.2.5-.3L466 385.6l.3-.1c8.2-4.5 13.7-12.7 13.7-22.1V179.6c0-6.4-5.7-11.5-12.7-11.5zM454.3 118.5L272.6 36.8S261.9 32 256 32c-5.9 0-16.5 4.8-16.5 4.8L57.6 118.5s-8 3.3-8 9.5c0 6.6 8.3 11.5 8.3 11.5l185.5 97.8c3.8 1.7 8.1 2.6 12.6 2.6 4.6 0 8.9-1 12.7-2.7l185.4-97.9s7.5-4 7.5-11.5c.1-6.3-7.3-9.3-7.3-9.3zM227.5 261.2L49.8 169c-1.5-.6-3.3-1-5.1-1-7 0-12.7 5.1-12.7 11.5v183.8c0 9.4 5.5 17.6 13.7 22.1l.2.1 174.7 92.7c1.9 1.1 4.2 1.7 6.6 1.7 7 0 12.7-5.2 12.7-11.5V282.6c.1-8.9-4.9-16.8-12.4-21.4z"}})])])};
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
      component.__file = "md-cube.vue";

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
    

    
    var mdCube = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdCube;

})));
