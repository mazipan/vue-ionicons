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
    name: "md-beaker-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-beaker-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M448.1 34.9c0-1.2-.4-2.9-2.9-2.9H128.5c-54.3 0-64.4 27.4-64.4 39.8C94.4 76 96 76.5 96 108.5v307c0 35.3 28.9 64.5 64.3 64.5H368c35.3 0 64-29.2 64-64.5V73.3c2.2-17.5 12-31.8 13.1-33.5 1.2-1.9 3-3.8 3-4.9zM354.2 432H176.3c-15.9 0-29.7-11.9-32.3-27.1V80h240v319.7c0 18-12.4 32.3-29.8 32.3z"}}),_c('path',{attrs:{"d":"M182 160v226c0 4.4 3.6 8 8 8h148c4.4 0 8-3.6 8-8V160H182z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-beaker-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M448.1 34.9c0-1.2-.4-2.9-2.9-2.9H128.5c-54.3 0-64.4 27.4-64.4 39.8C94.4 76 96 76.5 96 108.5v307c0 35.3 28.9 64.5 64.3 64.5H368c35.3 0 64-29.2 64-64.5V73.3c2.2-17.5 12-31.8 13.1-33.5 1.2-1.9 3-3.8 3-4.9zM354.2 432H176.3c-15.9 0-29.7-11.9-32.3-27.1V80h240v319.7c0 18-12.4 32.3-29.8 32.3z"}}),_c('path',{attrs:{"d":"M182 160v226c0 4.4 3.6 8 8 8h148c4.4 0 8-3.6 8-8V160H182z"}})])])};
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
      component.__file = "md-beaker.vue";

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
    

    
    var mdBeaker = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdBeaker;

})));
