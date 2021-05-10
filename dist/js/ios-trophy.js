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
    name: "ios-trophy-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-trophy-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M450 100h-66V80c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v20H62c-7.7 0-14 6.3-14 14 0 41.3 7.8 66 22.6 90.4 13.6 22.4 32.9 36.2 56.3 40.3 2.8.5 5.1 2.3 6.2 4.9 6.2 15.4 20.2 34.8 51.1 52.2 20.2 11.4 36.9 18.3 51.7 21.6 3.6.8 6.2 4.1 6.2 7.8V412c0 4.4-3.6 8-8 8h-65.6c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h175.6c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7h-66c-4.4 0-8-3.6-8-8v-80.7c0-3.7 2.6-7 6.2-7.8 14.7-3.3 31.5-10.3 51.7-21.6 30.9-17.4 44.9-36.8 51.1-52.2 1.1-2.6 3.4-4.5 6.2-4.9 23.4-4.1 42.7-17.9 56.3-40.3C456.2 180 464 155.3 464 114c0-7.7-6.3-14-14-14zM128 210.6c0 2.8-2.8 4.8-5.4 3.8-12.8-4.9-23.2-14.7-30.6-28.9-5.8-11-12.6-21.4-15.1-48.8-.4-4.7 3.3-8.7 8-8.7H120c4.4 0 8 3.6 8 8v74.6zm292-25.1c-7.4 14.2-17.8 24-30.6 28.9-2.6 1-5.4-1-5.4-3.8V136c0-4.4 3.6-8 8-8h35.1c4.7 0 8.4 4 8 8.7-2.5 27.4-9.4 37.8-15.1 48.8z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-trophy-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M450 100h-66V80c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v20H62c-7.7 0-14 6.3-14 14 0 41.3 7.8 66 22.6 90.4 13.6 22.4 32.9 36.2 56.3 40.3 2.8.5 5.1 2.3 6.2 4.9 6.2 15.4 20.2 34.8 51.1 52.2 20.2 11.4 36.9 18.3 51.7 21.6 3.6.8 6.2 4.1 6.2 7.8V412c0 4.4-3.6 8-8 8h-65.6c-7.5 0-14 5.8-14.4 13.3-.4 8 6 14.7 14 14.7h175.6c7.5 0 14-5.8 14.4-13.3.4-8-6-14.7-14-14.7h-66c-4.4 0-8-3.6-8-8v-80.7c0-3.7 2.6-7 6.2-7.8 14.7-3.3 31.5-10.3 51.7-21.6 30.9-17.4 44.9-36.8 51.1-52.2 1.1-2.6 3.4-4.5 6.2-4.9 23.4-4.1 42.7-17.9 56.3-40.3C456.2 180 464 155.3 464 114c0-7.7-6.3-14-14-14zM128 210.6c0 2.8-2.8 4.8-5.4 3.8-12.8-4.9-23.2-14.7-30.6-28.9-5.8-11-12.6-21.4-15.1-48.8-.4-4.7 3.3-8.7 8-8.7H120c4.4 0 8 3.6 8 8v74.6zm292-25.1c-7.4 14.2-17.8 24-30.6 28.9-2.6 1-5.4-1-5.4-3.8V136c0-4.4 3.6-8 8-8h35.1c4.7 0 8.4 4 8 8.7-2.5 27.4-9.4 37.8-15.1 48.8z"}})])])};
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
      component.__file = "ios-trophy.vue";

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
    

    
    var iosTrophy = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosTrophy;

})));
