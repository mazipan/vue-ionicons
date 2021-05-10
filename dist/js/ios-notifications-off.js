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
    name: "ios-notifications-off-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"data-title":_vm.iconTitle,"data-name":"ios-notifications-off-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM154.5 55c-2.5-4.3-7-6.8-11.6-7h.3-1.2c-2.3 0-4.7.7-6.9 1.9-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.8-3.9 9.1-12.6 5.1-19.3L154.5 55zM296.1 384L159 150.5c-8.2 20.2-13.3 46-13.3 78.6 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h180.2zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-8.7 2-17.5 5.5-25.9 10.8L366.1 384H396c16.5 0 25.9-18.8 16-31.8z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"ios-notifications-off-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM154.5 55c-2.5-4.3-7-6.8-11.6-7h.3-1.2c-2.3 0-4.7.7-6.9 1.9-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.8-3.9 9.1-12.6 5.1-19.3L154.5 55zM296.1 384L159 150.5c-8.2 20.2-13.3 46-13.3 78.6 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h180.2zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-8.7 2-17.5 5.5-25.9 10.8L366.1 384H396c16.5 0 25.9-18.8 16-31.8z"}})])])};
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
      component.__file = "ios-notifications-off.vue";

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
    

    
    var iosNotificationsOff = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return iosNotificationsOff;

})));
