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
    name: "logo-ionitron-icon",
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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.iconTitle)?_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-ionitron-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M468.4 269.2c-2.7-34.2-12.2-59.2-32.9-57.3 6.4 14.6 12.2 48.1 8.7 72-1.4-25.9-6.3-50.2-17.2-72-32.1-64.6-100.6-107.4-177.5-103.1-85.9 4.8-155 66.7-172 146.8l-11.4 1.6c-17.2 2.4-26.9 34.9-21.7 72.5 5.3 37.7 23.5 66.2 40.7 63.8l15.8-2.2c34.7 56.3 98.5 92.3 169.3 88.4 85.3-4.7 154-65.9 171.7-145.2l7.4-.4c15.2-2.5 21.8-31.2 19.1-64.9zM90.3 264c10.7 8.2 25.4 28.3 29.1 55.1 3.9 27.7-4.8 54.1-13.4 64.3 6-14.8 8.1-37.3 4.7-61.9-3.3-24-11-44.7-20.4-57.5zm183.8 116.2c-8.5.5-15.8-6-16.3-14.5s6-15.7 14.6-16.2c8.5-.5 15.8 6 16.3 14.5s-6.1 15.7-14.6 16.2zm81-4.7c-8.5.5-15.8-6-16.3-14.5s6-15.7 14.6-16.2c8.5-.5 15.8 6 16.3 14.5.4 8.5-6.1 15.8-14.6 16.2zM165.5 70s0 .1 0 0c.1.1.1.2.1.2.1.2.2.3.3.5v.1c.4 1 1.1 1.9 2.3 2.7 2 1.5 5 2.4 8.6 3 3.4.5 7.5.7 11.9.5 1 0 1.9-.1 2.9-.2-.4-.4-.8-.9-1.2-1.3h-1.3c-4.3.1-8.2-.2-11.6-.9-3.5-.7-6.4-1.8-8.4-3.4-.6-.5-1-.9-1.4-1.4-.2-.7-.2-1.5 0-2.3.5-2.3 2.4-4.8 5.5-7.4 2.7-2.3 6.4-4.7 10.9-7 .9-.4 1.7-.9 2.6-1.3.1-.1.3-.1.5-.2-.8 3.3-.9 6.9-.2 10.5 2.3 11.9 11.6 20.3 23.2 20.6l4 24.3 12.7-2-4-24.3c10.8-4.6 16.3-16.1 14-28-.7-3.5-2-6.7-3.9-9.5-5.3-.8-15.6-.8-29.2 2.1 1.1-.3 2.1-.7 3.2-1 7.6-2.1 14.9-3.5 21.5-4.2.6-.1 1.2-.1 1.8-.2 1.2-.1 2.4-.2 3.5-.3h.6c4.1-.2 7.7-.1 10.8.3 2.4.3 4.4.8 6.1 1.4-.6.9-.9 2-.9 3.2 0 2.7 1.8 5 4.3 5.8-.6.9-1.3 1.9-2.1 2.8-.8.9-1.8 1.9-2.9 2.8-1.1.9-2.3 1.8-3.5 2.7l-6.5 3.8-.3 1.5c.1 0 .2-.1.2-.1l8.4-4.7c1.2-.8 2.4-1.6 3.4-2.4 1.2-.9 2.2-1.8 3.2-2.8.9-.9 1.7-1.9 2.4-2.8l.3-.6c3-.4 5.4-2.9 5.4-6 0-3.4-2.7-6.1-6.1-6.1-1 0-1.9.3-2.8.7-2-1.2-4.8-2.1-8.2-2.7-4.3-.8-9.6-1-15.5-.6-.7 0-1.4.1-2.1.2-.7.1-1.3.2-2 .2-5.3-3.5-11.9-5-18.7-3.7-7.9 1.5-14.2 6.5-17.8 13-1.3.5-2.6 1.1-3.8 1.7-.7.3-1.3.6-2 .9-5.9 2.9-10.6 6.1-13.9 9.1-3.1 2.9-4.9 5.7-5.3 8.3-.2 1.4 0 2.8.7 4 .1.1.2.3.3.5z"}})])]):_c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"name":"logo-ionitron-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"width":_vm.w,"height":_vm.h,"viewBox":"0 0 512 512"}},[_c('path',{attrs:{"d":"M468.4 269.2c-2.7-34.2-12.2-59.2-32.9-57.3 6.4 14.6 12.2 48.1 8.7 72-1.4-25.9-6.3-50.2-17.2-72-32.1-64.6-100.6-107.4-177.5-103.1-85.9 4.8-155 66.7-172 146.8l-11.4 1.6c-17.2 2.4-26.9 34.9-21.7 72.5 5.3 37.7 23.5 66.2 40.7 63.8l15.8-2.2c34.7 56.3 98.5 92.3 169.3 88.4 85.3-4.7 154-65.9 171.7-145.2l7.4-.4c15.2-2.5 21.8-31.2 19.1-64.9zM90.3 264c10.7 8.2 25.4 28.3 29.1 55.1 3.9 27.7-4.8 54.1-13.4 64.3 6-14.8 8.1-37.3 4.7-61.9-3.3-24-11-44.7-20.4-57.5zm183.8 116.2c-8.5.5-15.8-6-16.3-14.5s6-15.7 14.6-16.2c8.5-.5 15.8 6 16.3 14.5s-6.1 15.7-14.6 16.2zm81-4.7c-8.5.5-15.8-6-16.3-14.5s6-15.7 14.6-16.2c8.5-.5 15.8 6 16.3 14.5.4 8.5-6.1 15.8-14.6 16.2zM165.5 70s0 .1 0 0c.1.1.1.2.1.2.1.2.2.3.3.5v.1c.4 1 1.1 1.9 2.3 2.7 2 1.5 5 2.4 8.6 3 3.4.5 7.5.7 11.9.5 1 0 1.9-.1 2.9-.2-.4-.4-.8-.9-1.2-1.3h-1.3c-4.3.1-8.2-.2-11.6-.9-3.5-.7-6.4-1.8-8.4-3.4-.6-.5-1-.9-1.4-1.4-.2-.7-.2-1.5 0-2.3.5-2.3 2.4-4.8 5.5-7.4 2.7-2.3 6.4-4.7 10.9-7 .9-.4 1.7-.9 2.6-1.3.1-.1.3-.1.5-.2-.8 3.3-.9 6.9-.2 10.5 2.3 11.9 11.6 20.3 23.2 20.6l4 24.3 12.7-2-4-24.3c10.8-4.6 16.3-16.1 14-28-.7-3.5-2-6.7-3.9-9.5-5.3-.8-15.6-.8-29.2 2.1 1.1-.3 2.1-.7 3.2-1 7.6-2.1 14.9-3.5 21.5-4.2.6-.1 1.2-.1 1.8-.2 1.2-.1 2.4-.2 3.5-.3h.6c4.1-.2 7.7-.1 10.8.3 2.4.3 4.4.8 6.1 1.4-.6.9-.9 2-.9 3.2 0 2.7 1.8 5 4.3 5.8-.6.9-1.3 1.9-2.1 2.8-.8.9-1.8 1.9-2.9 2.8-1.1.9-2.3 1.8-3.5 2.7l-6.5 3.8-.3 1.5c.1 0 .2-.1.2-.1l8.4-4.7c1.2-.8 2.4-1.6 3.4-2.4 1.2-.9 2.2-1.8 3.2-2.8.9-.9 1.7-1.9 2.4-2.8l.3-.6c3-.4 5.4-2.9 5.4-6 0-3.4-2.7-6.1-6.1-6.1-1 0-1.9.3-2.8.7-2-1.2-4.8-2.1-8.2-2.7-4.3-.8-9.6-1-15.5-.6-.7 0-1.4.1-2.1.2-.7.1-1.3.2-2 .2-5.3-3.5-11.9-5-18.7-3.7-7.9 1.5-14.2 6.5-17.8 13-1.3.5-2.6 1.1-3.8 1.7-.7.3-1.3.6-2 .9-5.9 2.9-10.6 6.1-13.9 9.1-3.1 2.9-4.9 5.7-5.3 8.3-.2 1.4 0 2.8.7 4 .1.1.2.3.3.5z"}})])])};
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
      component.__file = "logo-ionitron.vue";

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
    

    
    var logoIonitron = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoIonitron;

})));
