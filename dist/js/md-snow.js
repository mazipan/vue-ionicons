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
    name: "md-snow-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-snow-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M461.4 298.5l-8.3-30.9-88 23.6-60.4-34.9 60.4-34.9 88 23.6 8.3-30.9-57.1-15.3 57.7-33.3-24-41.5-56.6 32.7 15.3-57.1-30.9-8.3-23.6 88-62.2 35.9v-71.1l64.5-64.4-22.7-22.6L280 98.9V32h-48v65.6l-41.7-41.7-22.6 22.6 64.3 64.4v71.4l-60.7-35-23.6-88-30.9 8.3 15.3 57.1-57.7-33.4-24 41.6 56.7 32.7L50 212.9l8.3 30.9 87.9-23.6 62.6 36.1-62.6 36.2-87.9-23.6-8.3 30.9 57.1 15.3-56.7 32.7 24 41.5 57.7-33.3-15.3 57 30.9 8.3 23.6-87.9 60.7-35.1v70.9l-64.3 64.4 22.6 22.6 41.7-41.8V480h48v-66.8l41.9 41.7 22.5-22.6L280 368v-70.6l62.2 36 23.6 87.9 30.9-8.3-15.3-57 56.6 32.7 24-41.6-57.7-33.3z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-snow-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M461.4 298.5l-8.3-30.9-88 23.6-60.4-34.9 60.4-34.9 88 23.6 8.3-30.9-57.1-15.3 57.7-33.3-24-41.5-56.6 32.7 15.3-57.1-30.9-8.3-23.6 88-62.2 35.9v-71.1l64.5-64.4-22.7-22.6L280 98.9V32h-48v65.6l-41.7-41.7-22.6 22.6 64.3 64.4v71.4l-60.7-35-23.6-88-30.9 8.3 15.3 57.1-57.7-33.4-24 41.6 56.7 32.7L50 212.9l8.3 30.9 87.9-23.6 62.6 36.1-62.6 36.2-87.9-23.6-8.3 30.9 57.1 15.3-56.7 32.7 24 41.5 57.7-33.3-15.3 57 30.9 8.3 23.6-87.9 60.7-35.1v70.9l-64.3 64.4 22.6 22.6 41.7-41.8V480h48v-66.8l41.9 41.7 22.5-22.6L280 368v-70.6l62.2 36 23.6 87.9 30.9-8.3-15.3-57 56.6 32.7 24-41.6-57.7-33.3z"}})])])};
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
      component.__file = "md-snow.vue";

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
    

    
    var mdSnow = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdSnow;

})));
