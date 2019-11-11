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
    name: "logo-nodejs-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Logo Nodejs Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"logo-nodejs-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M255.917 480a32.536 32.536 0 0 1-16.633-4.599l-52.985-32.44c-7.914-4.562-4.023-6.203-1.443-7.141 10.565-3.781 13.713-5.657 24.947-12.285 1.206-.667 2.747-.424 3.955.322l39.71 23.504c1.476.85 3.557.85 4.931 0l155.188-92.246c1.475-.877 2.415-2.646 2.415-4.441V163.869c0-1.85-.94-3.592-2.449-4.528l-155.12-94.672c-1.478-.894-3.421-.894-4.898 0L98.516 159.374c-1.544.903-2.516 2.698-2.516 4.495v186.805c0 1.813.972 3.513 2.481 4.389l39.929 23.972c23.61 12.204 37.59-.17 37.59-14.611V180.725c0-2.652 2.047-4.727 4.596-4.727h22.809c2.515 0 4.597 2.072 4.597 4.727v183.698c0 32.563-19.353 51.248-49.199 51.248-9.156 0-16.397 0-36.552-10.279l-41.584-24.781C70.371 374.459 64 362.965 64 350.656V161.191c0-12.316 6.371-23.784 16.665-29.917L239.35 36.41c10.027-5.88 23.374-5.88 33.332 0l158.65 94.864C441.63 137.423 448 148.899 448 161.191v189.465c0 12.309-6.37 23.75-16.668 29.953l-158.65 94.774a32.52 32.52 0 0 1-16.698 4.599l-.067.018z"}}),_c('path',{attrs:{"d":"M304.943 351.998c-64.61 0-84.006-31.61-84.006-59.271 0-2.629 2.048-4.729 4.562-4.729h20.521c2.282 0 4.227 1.7 4.562 4.016 3.084 21.602 16.748 31.15 54.324 31.15 33.399 0 47.091-10.346 47.091-28.684 0-10.592-3.463-18.424-55.407-23.697-43.427-4.441-70.288-14.373-70.288-50.295 0-33.135 26.996-52.49 72.234-52.49 46.128 0 76.462 14 79.173 50.829.102 1.337-.368 2.629-1.241 3.644-.871.965-2.078 1.527-3.353 1.527h-20.591c-2.146 0-4.024-1.562-4.459-3.713-4.401-16.953-16.97-23.402-49.563-23.402-36.486 0-40.746 12.753-40.746 22.607 0 11.963 5.031 15.441 54.294 22.172 48.761 6.663 71.933 16.117 71.933 51.552 0 35.781-28.808 58.783-79.075 58.783l.035.001z"}})])])};
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
      component.__file = "logo-nodejs.vue";

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
    

    
    var logoNodejs = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return logoNodejs;

})));
