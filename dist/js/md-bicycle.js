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
    name: "md-bicycle-icon",
    mixins: [IoniconsMixin],
    data: function data() {
      var iconTitle = this.title ? this.title : "Md Bicycle Icon";
      return {
        iconTitle: iconTitle
      };
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ion",class:_vm.ionClass,attrs:{"title":_vm.iconTitle,"name":"md-bicycle-icon"}},[_c('svg',{staticClass:"ion__svg",attrs:{"viewBox":"0 0 512 512","width":_vm.w,"height":_vm.h}},[_c('path',{attrs:{"d":"M330.666 131.202c18.668 0 33.598-14.935 33.598-33.601S349.334 64 330.666 64C312 64 297.07 78.935 297.07 97.601s14.93 33.601 33.596 33.601zm56 130.132c-51.332 0-93.332 42-93.332 93.333s42 93.333 93.332 93.333C438 448 480 406 480 354.667s-42-93.333-93.334-93.333zm0 158.666c-36.402 0-65.332-28.93-65.332-65.333s28.93-65.333 65.332-65.333c36.404 0 65.334 28.93 65.334 65.333S423.07 420 386.666 420zm-81.069-196H384v-32h-58.845l-34.62-60.134c-5.605-9.333-15.869-15.864-27.07-15.864-8.399 0-16.798 3.732-22.399 9.333L169.334 194.4c-5.601 5.601-9.333 14-9.333 22.399 0 12.131 9.202 21.465 18.535 27.065L240 282.134V368h32V256l-39.333-32 42.929-44.533L305.597 224zm-180.264 37.334C74 261.334 32 303.334 32 354.667S74 448 125.333 448s93.333-42 93.333-93.333-41.999-93.333-93.333-93.333zm0 158.666C88.934 420 60 391.07 60 354.667s28.934-65.333 65.333-65.333 65.333 28.93 65.333 65.333S161.732 420 125.333 420z"}})])])};
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
      component.__file = "md-bicycle.vue";

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
    

    
    var mdBicycle = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return mdBicycle;

})));
