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
    name: "md-bug-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-bug-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M448 160h-67.4c-10.8-18.7-25.7-34.8-43.7-47L376 73.8 342.2 40l-52.1 52.1C279 89.4 267.8 88 256 88s-23 1.4-33.8 4.1L169.8 40 136 73.8l38.9 39.1c-17.8 12.2-32.6 28.3-43.4 47H64v48h50.2c-1.2 7.9-2.2 15.8-2.2 24v24H64v48h48v24c0 8.2 1 16.1 2.2 24H64v48h67.4c25 43 71.3 72 124.6 72s99.6-29 124.6-72H448v-48h-50.2c1.2-7.9 2.2-15.8 2.2-24v-24h48v-48h-48v-24c0-8.2-1-16.1-2.2-24H448V160z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-bug-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M448 160h-67.4c-10.8-18.7-25.7-34.8-43.7-47L376 73.8 342.2 40l-52.1 52.1C279 89.4 267.8 88 256 88s-23 1.4-33.8 4.1L169.8 40 136 73.8l38.9 39.1c-17.8 12.2-32.6 28.3-43.4 47H64v48h50.2c-1.2 7.9-2.2 15.8-2.2 24v24H64v48h48v24c0 8.2 1 16.1 2.2 24H64v48h67.4c25 43 71.3 72 124.6 72s99.6-29 124.6-72H448v-48h-50.2c1.2-7.9 2.2-15.8 2.2-24v-24h48v-48h-48v-24c0-8.2-1-16.1-2.2-24H448V160z"}})])])};
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
      component.__file = "md-bug.vue";

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
    

    
    var mdBug = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdBug;

})));
