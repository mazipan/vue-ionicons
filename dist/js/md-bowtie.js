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
    name: "md-bowtie-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"md-bowtie-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M276 304h-40c-15.4 0-28-12.6-28-28v-40c0-15.4 12.6-28 28-28h40c15.4 0 28 12.6 28 28v40c0 15.4-12.6 28-28 28zM176 280v-48c0-18.2 8.7-34.4 22.2-44.6C192 160 96 96 64 96c-17.6 0-32 14.4-32 32v256c0 17.6 14.3 32 32 32 32 0 128-64 134.2-91.4-13.5-10.2-22.2-26.4-22.2-44.6zM448 96c-32 0-128 64-134.2 91.4 13.5 10.2 22.2 26.4 22.2 44.6v48c0 18.2-8.7 34.4-22.2 44.6C320 352 416 416 448 416c17.7 0 32-14.4 32-32V128c0-17.6-14.4-32-32-32z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-bowtie-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M276 304h-40c-15.4 0-28-12.6-28-28v-40c0-15.4 12.6-28 28-28h40c15.4 0 28 12.6 28 28v40c0 15.4-12.6 28-28 28zM176 280v-48c0-18.2 8.7-34.4 22.2-44.6C192 160 96 96 64 96c-17.6 0-32 14.4-32 32v256c0 17.6 14.3 32 32 32 32 0 128-64 134.2-91.4-13.5-10.2-22.2-26.4-22.2-44.6zM448 96c-32 0-128 64-134.2 91.4 13.5 10.2 22.2 26.4 22.2 44.6v48c0 18.2-8.7 34.4-22.2 44.6C320 352 416 416 448 416c17.7 0 32-14.4 32-32V128c0-17.6-14.4-32-32-32z"}})])])};
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
      component.__file = "md-bowtie.vue";

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
    

    
    var mdBowtie = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdBowtie;

})));
