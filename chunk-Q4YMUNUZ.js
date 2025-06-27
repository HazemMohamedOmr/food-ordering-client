import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-RHXFPPC4.js";
import {
  CommonModule,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-UXXDM6C4.js";

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // Export modules, components and directives that should be available to any module that imports SharedModule
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      declarations: [
        // Shared components and directives will go here
      ],
      imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
      ],
      exports: [
        // Export modules, components and directives that should be available to any module that imports SharedModule
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }]
  }], null, null);
})();

export {
  SharedModule
};
//# sourceMappingURL=chunk-Q4YMUNUZ.js.map
