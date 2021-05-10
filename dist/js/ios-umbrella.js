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
    name: "ios-umbrella-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-umbrella-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M407.1 137.9c-34.9-41.6-81.3-67.3-131.2-72.6-2-9.9-10.2-17.3-19.9-17.3s-17.9 7.3-19.9 17.2c-50.6 5.2-97.4 30.3-132.1 71.2-35.8 42.2-55.6 85.5-55.8 143.7-.1.5-.2 1.2-.2 2.1.1 3.2 2.7 5.8 5.8 5.8h3.1c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.1 16-25.5 7.7-6.5 16.9-9.9 26.6-9.9 9.6 0 18.8 3.4 26.5 10 7.6 6.4 13.2 15.4 16 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 5.7-20.9 23.3-35.4 42.8-35.4 14.8 0 28.8 8.4 36.9 21.9V418c0 9.9-8 18-17.7 18s-17.6-8.1-17.6-18c0-7.7-6.1-14-13.7-14-7.5 0-13.6 6.3-13.6 14 0 25.4 20.2 46 44.9 46 24.8 0 44.9-20.6 44.9-46V270.8c8.2-14.2 21.9-22.6 36.9-22.6 9.6 0 18.7 3.4 26.4 9.9 7.5 6.4 13.1 15.4 15.9 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.2 16-25.6 7.7-6.5 16.9-10 26.6-10 9.7 0 19 3.4 26.7 10 7.6 6.4 13.2 15.5 15.9 25.6.7 2.6 3 4.4 5.6 4.4h1.5c1.6 0 3.1-.6 4.2-1.8s1.7-2.7 1.7-4.3c-.8-57.9-21-101.3-56.8-144z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-umbrella-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M407.1 137.9c-34.9-41.6-81.3-67.3-131.2-72.6-2-9.9-10.2-17.3-19.9-17.3s-17.9 7.3-19.9 17.2c-50.6 5.2-97.4 30.3-132.1 71.2-35.8 42.2-55.6 85.5-55.8 143.7-.1.5-.2 1.2-.2 2.1.1 3.2 2.7 5.8 5.8 5.8h3.1c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.1 16-25.5 7.7-6.5 16.9-9.9 26.6-9.9 9.6 0 18.8 3.4 26.5 10 7.6 6.4 13.2 15.4 16 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 5.7-20.9 23.3-35.4 42.8-35.4 14.8 0 28.8 8.4 36.9 21.9V418c0 9.9-8 18-17.7 18s-17.6-8.1-17.6-18c0-7.7-6.1-14-13.7-14-7.5 0-13.6 6.3-13.6 14 0 25.4 20.2 46 44.9 46 24.8 0 44.9-20.6 44.9-46V270.8c8.2-14.2 21.9-22.6 36.9-22.6 9.6 0 18.7 3.4 26.4 9.9 7.5 6.4 13.1 15.4 15.9 25.5.7 2.6 3 4.4 5.6 4.4h4.8c2.6 0 4.9-1.8 5.6-4.4 2.7-10.1 8.4-19.2 16-25.6 7.7-6.5 16.9-10 26.6-10 9.7 0 19 3.4 26.7 10 7.6 6.4 13.2 15.5 15.9 25.6.7 2.6 3 4.4 5.6 4.4h1.5c1.6 0 3.1-.6 4.2-1.8s1.7-2.7 1.7-4.3c-.8-57.9-21-101.3-56.8-144z"}})])])};
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
      component.__file = "ios-umbrella.vue";

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
    

    
    var iosUmbrella = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosUmbrella;

})));
