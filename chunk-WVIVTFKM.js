import {
  AuthService
} from "./chunk-P6XRT7RJ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RHXFPPC4.js";
import {
  CommonModule,
  Component,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UXXDM6C4.js";
import {
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/features/profile/profile.component.ts
function ProfileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function ProfileComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Name is required ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_6_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_6_div_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_6_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, ProfileComponent_div_6_div_17_span_1_Template, 2, 0, "span", 28)(2, ProfileComponent_div_6_div_17_span_2_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function ProfileComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Please enter a valid phone number ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_6_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save Changes");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_6_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275text(2, " Saving... ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h5", 15);
    \u0275\u0275text(5, "Profile Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "form", 17);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_div_6_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(8, "div", 18)(9, "label", 19);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 20);
    \u0275\u0275template(12, ProfileComponent_div_6_div_12_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "label", 22);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 23);
    \u0275\u0275template(17, ProfileComponent_div_6_div_17_Template, 3, 2, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "label", 24);
    \u0275\u0275text(20, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 25);
    \u0275\u0275template(22, ProfileComponent_div_6_div_22_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 26)(24, "button", 27);
    \u0275\u0275template(25, ProfileComponent_div_6_span_25_Template, 2, 0, "span", 28)(26, ProfileComponent_div_6_span_26_Template, 3, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 29);
    \u0275\u0275listener("click", function ProfileComponent_div_6_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePassword());
    });
    \u0275\u0275text(28, " Change Password ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(29, "div", 30)(30, "div", 13)(31, "div", 14)(32, "h5", 15);
    \u0275\u0275text(33, "Account Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 16)(35, "p")(36, "strong");
    \u0275\u0275text(37, "User ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p")(40, "strong");
    \u0275\u0275text(41, "Role:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.profileForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.profileForm.get("name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.profileForm.get("phoneNumber")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.profileForm.get("phoneNumber")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid || ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSaving);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.role, "");
  }
}
var ProfileComponent = class _ProfileComponent {
  formBuilder;
  authService;
  router;
  profileForm;
  user = null;
  isLoading = false;
  isSaving = false;
  errorMessage = "";
  successMessage = "";
  constructor(formBuilder, authService, router) {
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.router = router;
    this.profileForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.pattern(/^\+?[0-9]{10,15}$/)]
    });
  }
  ngOnInit() {
    this.isLoading = true;
    if (!this.authService.isLoggedIn) {
      this.router.navigate(["/auth/login"], { queryParams: { returnUrl: "/profile" } });
      return;
    }
    this.user = this.authService.currentUser;
    if (this.user) {
      this.profileForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phoneNumber: this.user.phoneNumber || ""
      });
    }
    this.isLoading = false;
  }
  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.isSaving = true;
    this.errorMessage = "";
    this.successMessage = "";
    const updatedUser = __spreadValues(__spreadValues({}, this.user), this.profileForm.value);
    this.authService.updateProfile(updatedUser).subscribe({
      next: (user) => {
        this.user = user;
        this.isSaving = false;
        this.successMessage = "Profile updated successfully!";
        this.authService.storeUserData(user);
      },
      error: (error) => {
        this.isSaving = false;
        this.errorMessage = error.message || "Failed to update profile. Please try again.";
      }
    });
  }
  changePassword() {
    this.router.navigate(["/profile/change-password"]);
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 7, vars: 4, consts: [[1, "container", "py-4"], [1, "mb-4"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "text-center", "my-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "row"], [1, "col-md-8"], [1, "card", "shadow-sm"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["class", "text-danger small", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phoneNumber", 1, "form-label"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "form-control"], [1, "d-flex", "justify-content-between"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "col-md-4"], [1, "text-danger", "small"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "My Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ProfileComponent_div_3_Template, 2, 1, "div", 2)(4, ProfileComponent_div_4_Template, 2, 1, "div", 3)(5, ProfileComponent_div_5_Template, 4, 0, "div", 4)(6, ProfileComponent_div_6_Template, 43, 9, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.user);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.25rem rgba(255, 107, 107, 0.25);\n}\n/*# sourceMappingURL=profile.component-EFFC53YI.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="container py-4">\r
  <h1 class="mb-4">My Profile</h1>\r
  \r
  <div *ngIf="errorMessage" class="alert alert-danger">\r
    {{ errorMessage }}\r
  </div>\r
  \r
  <div *ngIf="successMessage" class="alert alert-success">\r
    {{ successMessage }}\r
  </div>\r
  \r
  <div *ngIf="isLoading" class="text-center my-5">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
  \r
  <div *ngIf="!isLoading && user" class="row">\r
    <div class="col-md-8">\r
      <div class="card shadow-sm">\r
        <div class="card-header bg-light">\r
          <h5 class="mb-0">Profile Information</h5>\r
        </div>\r
        <div class="card-body">\r
          <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">\r
            <div class="mb-3">\r
              <label for="name" class="form-label">Name</label>\r
              <input type="text" class="form-control" id="name" formControlName="name">\r
              <div *ngIf="profileForm.get('name')?.invalid && profileForm.get('name')?.touched" class="text-danger small">\r
                Name is required\r
              </div>\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label for="email" class="form-label">Email</label>\r
              <input type="email" class="form-control" id="email" formControlName="email">\r
              <div *ngIf="profileForm.get('email')?.invalid && profileForm.get('email')?.touched" class="text-danger small">\r
                <span *ngIf="profileForm.get('email')?.errors?.['required']">Email is required</span>\r
                <span *ngIf="profileForm.get('email')?.errors?.['email']">Please enter a valid email address</span>\r
              </div>\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label for="phoneNumber" class="form-label">Phone Number</label>\r
              <input type="tel" class="form-control" id="phoneNumber" formControlName="phoneNumber">\r
              <div *ngIf="profileForm.get('phoneNumber')?.invalid && profileForm.get('phoneNumber')?.touched" class="text-danger small">\r
                Please enter a valid phone number\r
              </div>\r
            </div>\r
            \r
            <div class="d-flex justify-content-between">\r
              <button type="submit" class="btn btn-primary" [disabled]="profileForm.invalid || isSaving">\r
                <span *ngIf="!isSaving">Save Changes</span>\r
                <span *ngIf="isSaving">\r
                  <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
                  Saving...\r
                </span>\r
              </button>\r
              \r
              <button type="button" class="btn btn-outline-secondary" (click)="changePassword()">\r
                Change Password\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="col-md-4">\r
      <div class="card shadow-sm">\r
        <div class="card-header bg-light">\r
          <h5 class="mb-0">Account Information</h5>\r
        </div>\r
        <div class="card-body">\r
          <p><strong>User ID:</strong> {{ user.id }}</p>\r
          <p><strong>Role:</strong> {{ user.role }}</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div> `, styles: ["/* src/app/features/profile/profile.component.scss */\n.card {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.form-control:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.25rem rgba(255, 107, 107, 0.25);\n}\n/*# sourceMappingURL=profile.component-EFFC53YI.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile.component.ts", lineNumber: 15 });
})();

// src/app/features/profile/profile.routes.ts
var PROFILE_ROUTES = [
  {
    path: "",
    component: ProfileComponent
  }
];
export {
  PROFILE_ROUTES
};
//# sourceMappingURL=chunk-WVIVTFKM.js.map
