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
    name: "md-switch-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"md-switch-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M168 216h94.9c14.5 14.8 34.7 24 57.1 24 44.2 0 80-35.8 80-80s-35.8-80-80-80c-22.4 0-42.6 9.2-57.1 24H168c-30.8 0-56 25.2-56 56s25.2 56 56 56zm-16.9-72.9c4.6-4.6 10.6-7.1 16.9-7.1h75.7c-2.4 7.6-3.7 15.6-3.7 24s1.3 16.4 3.7 24H168c-6.3 0-12.4-2.5-16.9-7.1-4.6-4.6-7.1-10.6-7.1-16.9s2.5-12.4 7.1-16.9zM344 296h-94.9c-14.5-14.8-34.7-24-57.1-24-44.2 0-80 35.8-80 80s35.8 80 80 80c22.4 0 42.6-9.2 57.1-24H344c30.8 0 56-25.2 56-56s-25.2-56-56-56zm16.9 72.9c-4.6 4.6-10.6 7.1-16.9 7.1h-75.7c2.4-7.6 3.7-15.6 3.7-24s-1.3-16.4-3.7-24H344c6.3 0 12.4 2.5 16.9 7.1 4.6 4.6 7.1 10.6 7.1 16.9s-2.5 12.4-7.1 16.9z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"md-switch-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M168 216h94.9c14.5 14.8 34.7 24 57.1 24 44.2 0 80-35.8 80-80s-35.8-80-80-80c-22.4 0-42.6 9.2-57.1 24H168c-30.8 0-56 25.2-56 56s25.2 56 56 56zm-16.9-72.9c4.6-4.6 10.6-7.1 16.9-7.1h75.7c-2.4 7.6-3.7 15.6-3.7 24s1.3 16.4 3.7 24H168c-6.3 0-12.4-2.5-16.9-7.1-4.6-4.6-7.1-10.6-7.1-16.9s2.5-12.4 7.1-16.9zM344 296h-94.9c-14.5-14.8-34.7-24-57.1-24-44.2 0-80 35.8-80 80s35.8 80 80 80c22.4 0 42.6-9.2 57.1-24H344c30.8 0 56-25.2 56-56s-25.2-56-56-56zm16.9 72.9c-4.6 4.6-10.6 7.1-16.9 7.1h-75.7c2.4-7.6 3.7-15.6 3.7-24s-1.3-16.4-3.7-24H344c6.3 0 12.4 2.5 16.9 7.1 4.6 4.6 7.1 10.6 7.1 16.9s-2.5 12.4-7.1 16.9z"}})])])};
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
      component.__file = "md-switch.vue";

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
    

    
    var mdSwitch = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdSwitch;

})));
