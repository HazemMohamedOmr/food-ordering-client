import {
  AuthService,
  UserRole
} from "./chunk-P6XRT7RJ.js";
import {
  SharedModule
} from "./chunk-Q4YMUNUZ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
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
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UXXDM6C4.js";
import "./chunk-GMSD7K74.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, " Password must be at least 6 characters ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
}
function LoginComponent_i_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 57);
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  loginForm;
  isSubmitting = false;
  errorMessage = "";
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    console.log("Current user:", this.authService.currentUser);
    console.log("Is logged in:", this.authService.isLoggedIn);
    console.log("Token:", this.authService.token);
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log("Login successful:", response);
        console.log("Token stored:", this.authService.token);
        console.log("Current user after login:", this.authService.currentUser);
        this.isSubmitting = false;
        this.router.navigate(["/"]);
      },
      error: (error) => {
        console.error("Login error:", error);
        this.isSubmitting = false;
        this.errorMessage = error.message || "Failed to login. Please check your credentials.";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 91, vars: 13, consts: [[1, "auth-container"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "auth-wrapper"], [1, "row", "g-0"], ["data-aos", "fade-right", 1, "col-md-6", "auth-banner"], [1, "auth-banner-content"], [1, "auth-logo"], [1, "fas", "fa-utensils"], [1, "auth-features"], [1, "feature-item"], [1, "fas", "fa-check-circle"], [1, "auth-testimonial"], [1, "quote-icon"], [1, "fas", "fa-quote-left"], [1, "testimonial-author"], ["src", "https://randomuser.me/api/portraits/women/33.jpg", "alt", "Customer"], ["data-aos", "fade-left", 1, "col-md-6", "auth-form-container"], [1, "auth-form-content"], [1, "auth-form-header"], [1, "animate__animated", "animate__fadeInUp"], [1, "animate__animated", "animate__fadeInUp", "animate__delay-1s"], ["class", "alert alert-custom animate__animated animate__headShake", 4, "ngIf"], ["novalidate", "", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-floating", "mb-3", "animate__animated", "animate__fadeInUp", "animate__delay-1s"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control"], ["for", "email"], [1, "fas", "fa-envelope", "me-2"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-floating", "mb-3", "animate__animated", "animate__fadeInUp", "animate__delay-2s"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["for", "password"], [1, "fas", "fa-lock", "me-2"], [1, "d-flex", "justify-content-between", "mb-4", "animate__animated", "animate__fadeInUp", "animate__delay-2s"], [1, "form-check"], ["type", "checkbox", "id", "rememberMe", 1, "form-check-input"], ["for", "rememberMe", 1, "form-check-label"], ["href", "#", 1, "forgot-password"], [1, "d-grid", "gap-2", "mb-4", "animate__animated", "animate__fadeInUp", "animate__delay-3s"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "fas fa-sign-in-alt me-2", 4, "ngIf"], [1, "auth-divider", "animate__animated", "animate__fadeInUp", "animate__delay-3s"], [1, "social-auth", "animate__animated", "animate__fadeInUp", "animate__delay-3s"], [1, "btn", "btn-social", "btn-google"], [1, "fab", "fa-google"], [1, "btn", "btn-social", "btn-facebook"], [1, "fab", "fa-facebook-f"], [1, "btn", "btn-social", "btn-apple"], [1, "fab", "fa-apple"], [1, "auth-footer", "animate__animated", "animate__fadeInUp", "animate__delay-4s"], ["routerLink", "/auth/register", 1, "signup-link"], [1, "alert", "alert-custom", "animate__animated", "animate__headShake"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "invalid-feedback"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-sign-in-alt", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      \u0275\u0275element(9, "i", 9);
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "FoodieExpress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "h2");
      \u0275\u0275text(13, "Welcome Back!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, "Sign in to continue your food journey and explore delicious meals from your favorite restaurants.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Order from 500+ restaurants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275element(22, "i", 12);
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Track deliveries in real-time");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 11);
      \u0275\u0275element(26, "i", 12);
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Get exclusive offers & discounts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 13)(30, "div", 14);
      \u0275\u0275element(31, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, '"FoodieExpress has completely transformed how I order food. The service is fast and the app is so easy to use!"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 16);
      \u0275\u0275element(35, "img", 17);
      \u0275\u0275elementStart(36, "div")(37, "h6");
      \u0275\u0275text(38, "Amanda J.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "Happy Customer");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(41, "div", 18)(42, "div", 19)(43, "div", 20)(44, "h3", 21);
      \u0275\u0275text(45, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 22);
      \u0275\u0275text(47, "Enter your credentials to access your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(48, LoginComponent_div_48_Template, 3, 1, "div", 23);
      \u0275\u0275elementStart(49, "form", 24);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_49_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(50, "div", 25);
      \u0275\u0275element(51, "input", 26);
      \u0275\u0275elementStart(52, "label", 27);
      \u0275\u0275element(53, "i", 28);
      \u0275\u0275text(54, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, LoginComponent_div_55_Template, 2, 0, "div", 29)(56, LoginComponent_div_56_Template, 2, 0, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 30);
      \u0275\u0275element(58, "input", 31);
      \u0275\u0275elementStart(59, "label", 32);
      \u0275\u0275element(60, "i", 33);
      \u0275\u0275text(61, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, LoginComponent_div_62_Template, 2, 0, "div", 29)(63, LoginComponent_div_63_Template, 2, 0, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 34)(65, "div", 35);
      \u0275\u0275element(66, "input", 36);
      \u0275\u0275elementStart(67, "label", 37);
      \u0275\u0275text(68, "Remember me");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "a", 38);
      \u0275\u0275text(70, "Forgot Password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 39)(72, "button", 40);
      \u0275\u0275template(73, LoginComponent_span_73_Template, 1, 0, "span", 41)(74, LoginComponent_i_74_Template, 1, 0, "i", 42);
      \u0275\u0275text(75, " Sign In ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 43)(77, "span");
      \u0275\u0275text(78, "or continue with");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 44)(80, "button", 45);
      \u0275\u0275element(81, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 47);
      \u0275\u0275element(83, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 49);
      \u0275\u0275element(85, "i", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 51)(87, "p");
      \u0275\u0275text(88, "Don't have an account? ");
      \u0275\u0275elementStart(89, "a", 52);
      \u0275\u0275text(90, "Sign Up");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      \u0275\u0275advance(48);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["email"]) && ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]) && ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["minlength"]) && ((tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  padding: 90px 0 60px;\n  min-height: calc(100vh - 76px);\n  display: flex;\n  align-items: center;\n}\n.auth-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.auth-banner[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 700px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.auth-banner-content[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  max-width: 400px;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n}\n.auth-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 1.8rem;\n  color: var(--primary-color);\n}\n.auth-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.auth-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n}\n.auth-features[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.auth-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.auth-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n.auth-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.auth-testimonial[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: 20px;\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  background: rgba(0, 0, 0, 0.5);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth-testimonial[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 1rem;\n  border: 2px solid var(--primary-color);\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.auth-form-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.auth-form-content[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  width: 100%;\n}\n.auth-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.auth-form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #666;\n  margin: 0;\n}\n.alert-custom[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  height: 58px;\n  border-radius: 10px;\n  padding-left: 1rem;\n  border-color: #e0e0e0;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.25);\n  border-color: var(--primary-color);\n}\n.auth-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.auth-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.forgot-password[_ngcontent-%COMP%], \n.terms-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 0.9rem;\n  text-decoration: none;\n}\n.forgot-password[_ngcontent-%COMP%]:hover, \n.terms-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 1.5rem 0;\n}\n.auth-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0 15px;\n  font-size: 0.9rem;\n  color: #777;\n  position: relative;\n  z-index: 1;\n}\n.auth-divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #e0e0e0;\n}\n.social-auth[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-bottom: 1.5rem;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n  background-color: #f5f5f5;\n  border: none;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social.btn-google[_ngcontent-%COMP%] {\n  color: #DB4437;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social.btn-facebook[_ngcontent-%COMP%] {\n  color: #4267B2;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social.btn-apple[_ngcontent-%COMP%] {\n  color: #000;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #666;\n}\n.auth-footer[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%], \n.auth-footer[_ngcontent-%COMP%]   .signin-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]:hover, \n.auth-footer[_ngcontent-%COMP%]   .signin-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 991.98px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .auth-banner[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 60px 0;\n  }\n  .auth-form-content[_ngcontent-%COMP%], \n   .auth-banner-content[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .auth-banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-wrapper[_ngcontent-%COMP%] {\n    border-radius: 15px;\n  }\n  .auth-form-content[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n}\n.auth-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n}\n/*# sourceMappingURL=login.component-VPIGTFZT.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], template: `<div class="auth-container">\r
  <div class="container">\r
    <div class="row justify-content-center">\r
      <div class="col-lg-10">\r
        <div class="auth-wrapper">\r
          <div class="row g-0">\r
            <div class="col-md-6 auth-banner" data-aos="fade-right">\r
              <div class="auth-banner-content">\r
                <div class="auth-logo">\r
                  <i class="fas fa-utensils"></i>\r
                  <span>FoodieExpress</span>\r
                </div>\r
                <h2>Welcome Back!</h2>\r
                <p>Sign in to continue your food journey and explore delicious meals from your favorite restaurants.</p>\r
                <div class="auth-features">\r
                  <div class="feature-item">\r
                    <i class="fas fa-check-circle"></i>\r
                    <span>Order from 500+ restaurants</span>\r
                  </div>\r
                  <div class="feature-item">\r
                    <i class="fas fa-check-circle"></i>\r
                    <span>Track deliveries in real-time</span>\r
                  </div>\r
                  <div class="feature-item">\r
                    <i class="fas fa-check-circle"></i>\r
                    <span>Get exclusive offers & discounts</span>\r
                  </div>\r
                </div>\r
                <div class="auth-testimonial">\r
                  <div class="quote-icon">\r
                    <i class="fas fa-quote-left"></i>\r
                  </div>\r
                  <p>"FoodieExpress has completely transformed how I order food. The service is fast and the app is so easy to use!"</p>\r
                  <div class="testimonial-author">\r
                    <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Customer">\r
                    <div>\r
                      <h6>Amanda J.</h6>\r
                      <span>Happy Customer</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <div class="col-md-6 auth-form-container" data-aos="fade-left">\r
              <div class="auth-form-content">\r
                <div class="auth-form-header">\r
                  <h3 class="animate__animated animate__fadeInUp">Sign In</h3>\r
                  <p class="animate__animated animate__fadeInUp animate__delay-1s">Enter your credentials to access your account</p>\r
                </div>\r
                \r
                <div *ngIf="errorMessage" class="alert alert-custom animate__animated animate__headShake">\r
                  <i class="fas fa-exclamation-circle me-2"></i>\r
                  {{ errorMessage }}\r
                </div>\r
                \r
                <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate class="auth-form">\r
                  <div class="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-1s">\r
                    <input \r
                      type="email" \r
                      class="form-control" \r
                      id="email" \r
                      formControlName="email" \r
                      placeholder="name@example.com"\r
                      [class.is-invalid]="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">\r
                    <label for="email"><i class="fas fa-envelope me-2"></i>Email address</label>\r
                    <div class="invalid-feedback" *ngIf="loginForm.get('email')?.errors?.['required'] && loginForm.get('email')?.touched">\r
                      Email is required\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="loginForm.get('email')?.errors?.['email'] && loginForm.get('email')?.touched">\r
                      Please enter a valid email address\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-2s">\r
                    <input \r
                      type="password" \r
                      class="form-control" \r
                      id="password" \r
                      formControlName="password"\r
                      [class.is-invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">\r
                    <label for="password"><i class="fas fa-lock me-2"></i>Password</label>\r
                    <div class="invalid-feedback" *ngIf="loginForm.get('password')?.errors?.['required'] && loginForm.get('password')?.touched">\r
                      Password is required\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="loginForm.get('password')?.errors?.['minlength'] && loginForm.get('password')?.touched">\r
                      Password must be at least 6 characters\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="d-flex justify-content-between mb-4 animate__animated animate__fadeInUp animate__delay-2s">\r
                    <div class="form-check">\r
                      <input class="form-check-input" type="checkbox" id="rememberMe">\r
                      <label class="form-check-label" for="rememberMe">Remember me</label>\r
                    </div>\r
                    <a href="#" class="forgot-password">Forgot Password?</a>\r
                  </div>\r
                  \r
                  <div class="d-grid gap-2 mb-4 animate__animated animate__fadeInUp animate__delay-3s">\r
                    <button \r
                      type="submit" \r
                      class="btn btn-primary btn-lg" \r
                      [disabled]="loginForm.invalid || isSubmitting">\r
                      <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
                      <i *ngIf="!isSubmitting" class="fas fa-sign-in-alt me-2"></i>\r
                      Sign In\r
                    </button>\r
                  </div>\r
                </form>\r
                \r
                <div class="auth-divider animate__animated animate__fadeInUp animate__delay-3s">\r
                  <span>or continue with</span>\r
                </div>\r
                \r
                <div class="social-auth animate__animated animate__fadeInUp animate__delay-3s">\r
                  <button class="btn btn-social btn-google">\r
                    <i class="fab fa-google"></i>\r
                  </button>\r
                  <button class="btn btn-social btn-facebook">\r
                    <i class="fab fa-facebook-f"></i>\r
                  </button>\r
                  <button class="btn btn-social btn-apple">\r
                    <i class="fab fa-apple"></i>\r
                  </button>\r
                </div>\r
                \r
                <div class="auth-footer animate__animated animate__fadeInUp animate__delay-4s">\r
                  <p>Don't have an account? <a routerLink="/auth/register" class="signup-link">Sign Up</a></p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div> `, styles: ['/* src/app/features/auth/login/login.component.scss */\n.auth-container {\n  padding: 90px 0 60px;\n  min-height: calc(100vh - 76px);\n  display: flex;\n  align-items: center;\n}\n.auth-wrapper {\n  background-color: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.auth-banner {\n  height: 100%;\n  min-height: 700px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.auth-banner-content {\n  padding: 2.5rem;\n  max-width: 400px;\n}\n.auth-logo {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n}\n.auth-logo i {\n  margin-right: 10px;\n  font-size: 1.8rem;\n  color: var(--primary-color);\n}\n.auth-banner h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.auth-banner p {\n  font-size: 1rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n}\n.auth-features {\n  margin-bottom: 3rem;\n}\n.auth-features .feature-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.auth-features .feature-item i {\n  color: var(--primary-color);\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n.auth-features .feature-item span {\n  font-size: 0.95rem;\n}\n.auth-testimonial {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n.auth-testimonial .quote-icon {\n  position: absolute;\n  top: -15px;\n  left: 20px;\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  background: rgba(0, 0, 0, 0.5);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth-testimonial p {\n  font-style: italic;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n.auth-testimonial .testimonial-author {\n  display: flex;\n  align-items: center;\n}\n.auth-testimonial .testimonial-author img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 1rem;\n  border: 2px solid var(--primary-color);\n}\n.auth-testimonial .testimonial-author h6 {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.auth-testimonial .testimonial-author span {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.auth-form-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.auth-form-content {\n  padding: 2.5rem;\n  width: 100%;\n}\n.auth-form-header {\n  margin-bottom: 2rem;\n}\n.auth-form-header h3 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.auth-form-header p {\n  font-size: 1rem;\n  color: #666;\n  margin: 0;\n}\n.alert-custom {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom i {\n  font-size: 1.25rem;\n}\n.auth-form {\n  margin-bottom: 1.5rem;\n}\n.auth-form .form-floating {\n  margin-bottom: 1.25rem;\n}\n.auth-form .form-floating > label {\n  padding-left: 1rem;\n}\n.auth-form .form-floating .form-control,\n.auth-form .form-floating .form-select {\n  height: 58px;\n  border-radius: 10px;\n  padding-left: 1rem;\n  border-color: #e0e0e0;\n}\n.auth-form .form-floating .form-control:focus,\n.auth-form .form-floating .form-select:focus {\n  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.25);\n  border-color: var(--primary-color);\n}\n.auth-form .btn {\n  padding: 12px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.auth-form .btn:hover {\n  transform: translateY(-2px);\n}\n.form-check .form-check-input:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.forgot-password,\n.terms-link {\n  color: var(--primary-color);\n  font-size: 0.9rem;\n  text-decoration: none;\n}\n.forgot-password:hover,\n.terms-link:hover {\n  text-decoration: underline;\n}\n.auth-divider {\n  position: relative;\n  text-align: center;\n  margin: 1.5rem 0;\n}\n.auth-divider span {\n  background-color: white;\n  padding: 0 15px;\n  font-size: 0.9rem;\n  color: #777;\n  position: relative;\n  z-index: 1;\n}\n.auth-divider::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #e0e0e0;\n}\n.social-auth {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-bottom: 1.5rem;\n}\n.social-auth .btn-social {\n  width: 45px;\n  height: 45px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n  background-color: #f5f5f5;\n  border: none;\n}\n.social-auth .btn-social i {\n  font-size: 1.25rem;\n}\n.social-auth .btn-social:hover {\n  transform: translateY(-3px);\n}\n.social-auth .btn-social.btn-google {\n  color: #DB4437;\n}\n.social-auth .btn-social.btn-facebook {\n  color: #4267B2;\n}\n.social-auth .btn-social.btn-apple {\n  color: #000;\n}\n.auth-footer {\n  text-align: center;\n}\n.auth-footer p {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #666;\n}\n.auth-footer .signup-link,\n.auth-footer .signin-link {\n  color: var(--primary-color);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer .signup-link:hover,\n.auth-footer .signin-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 991.98px) {\n  .auth-container {\n    padding: 40px 0;\n  }\n  .auth-banner {\n    min-height: auto;\n    padding: 60px 0;\n  }\n  .auth-form-content,\n  .auth-banner-content {\n    padding: 2rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .auth-banner {\n    display: none;\n  }\n  .auth-wrapper {\n    border-radius: 15px;\n  }\n  .auth-form-content {\n    padding: 2rem 1.5rem;\n  }\n}\n.auth-banner {\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n}\n/*# sourceMappingURL=login.component-VPIGTFZT.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 15 });
})();

// src/app/features/auth/register/register.component.ts
function RegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function RegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Full name is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Phone number is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Please enter a valid phone number (10-14 digits with optional + prefix) ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Password must be at least 6 characters ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Please confirm your password ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 63);
  }
}
function RegisterComponent_i_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 64);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  authService;
  router;
  registerForm;
  isSubmitting = false;
  errorMessage = "";
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required, Validators.pattern(/^\+?[0-9]{10,14}$/)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]],
      role: [UserRole.EndUser]
      // Default role set to EndUser without validation as it's no longer user-selectable
    }, {
      validators: this.passwordMatchValidator
    });
  }
  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(["/"]);
    }
  }
  // Custom validator to check if password and confirm password match
  passwordMatchValidator(group) {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    const userData = this.registerForm.value;
    this.authService.register(userData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.message || "Registration failed. Please try again.";
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 131, vars: 24, consts: [[1, "auth-container"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "auth-wrapper"], [1, "row", "g-0"], ["data-aos", "fade-right", 1, "col-md-6", "auth-form-container"], [1, "auth-form-content"], [1, "auth-form-header"], [1, "animate__animated", "animate__fadeInUp"], [1, "animate__animated", "animate__fadeInUp", "animate__delay-1s"], ["class", "alert alert-custom animate__animated animate__headShake", 4, "ngIf"], ["novalidate", "", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-floating", "mb-3", "animate__animated", "animate__fadeInUp", "animate__delay-1s"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "name"], [1, "fas", "fa-user", "me-2"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", "placeholder", "+1234567890", 1, "form-control"], ["for", "phoneNumber"], [1, "fas", "fa-phone-alt", "me-2"], [1, "form-floating", "mb-3", "animate__animated", "animate__fadeInUp", "animate__delay-2s"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control"], ["for", "email"], [1, "fas", "fa-envelope", "me-2"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["for", "password"], [1, "fas", "fa-lock", "me-2"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control"], ["for", "confirmPassword"], [1, "form-check", "mb-4", "animate__animated", "animate__fadeInUp", "animate__delay-3s"], ["type", "checkbox", "id", "acceptTerms", 1, "form-check-input"], ["for", "acceptTerms", 1, "form-check-label"], ["href", "#", 1, "terms-link"], [1, "d-grid", "gap-2", "mb-4", "animate__animated", "animate__fadeInUp", "animate__delay-3s"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "fas fa-user-plus me-2", 4, "ngIf"], [1, "auth-divider", "animate__animated", "animate__fadeInUp", "animate__delay-3s"], [1, "social-auth", "animate__animated", "animate__fadeInUp", "animate__delay-3s"], [1, "btn", "btn-social", "btn-google"], [1, "fab", "fa-google"], [1, "btn", "btn-social", "btn-facebook"], [1, "fab", "fa-facebook-f"], [1, "btn", "btn-social", "btn-apple"], [1, "fab", "fa-apple"], [1, "auth-footer", "animate__animated", "animate__fadeInUp", "animate__delay-4s"], ["routerLink", "/auth/login", 1, "signin-link"], ["data-aos", "fade-left", 1, "col-md-6", "auth-banner", "register-banner"], [1, "auth-banner-content"], [1, "auth-logo"], [1, "fas", "fa-utensils"], [1, "benefits-list"], [1, "fas", "fa-history"], [1, "fas", "fa-tag"], [1, "fas", "fa-star"], [1, "fas", "fa-truck"], [1, "auth-promo"], [1, "promo-badge"], [1, "promo-content"], [1, "alert", "alert-custom", "animate__animated", "animate__headShake"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "invalid-feedback"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-user-plus", "me-2"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h3", 9);
      \u0275\u0275text(10, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 10);
      \u0275\u0275text(12, "Join our community and start ordering delicious food today");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, RegisterComponent_div_13_Template, 3, 1, "div", 11);
      \u0275\u0275elementStart(14, "form", 12);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275element(16, "input", 14);
      \u0275\u0275elementStart(17, "label", 15);
      \u0275\u0275element(18, "i", 16);
      \u0275\u0275text(19, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, RegisterComponent_div_20_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13);
      \u0275\u0275element(22, "input", 18);
      \u0275\u0275elementStart(23, "label", 19);
      \u0275\u0275element(24, "i", 20);
      \u0275\u0275text(25, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, RegisterComponent_div_26_Template, 2, 0, "div", 17)(27, RegisterComponent_div_27_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 21);
      \u0275\u0275element(29, "input", 22);
      \u0275\u0275elementStart(30, "label", 23);
      \u0275\u0275element(31, "i", 24);
      \u0275\u0275text(32, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, RegisterComponent_div_33_Template, 2, 0, "div", 17)(34, RegisterComponent_div_34_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 21);
      \u0275\u0275element(36, "input", 25);
      \u0275\u0275elementStart(37, "label", 26);
      \u0275\u0275element(38, "i", 27);
      \u0275\u0275text(39, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, RegisterComponent_div_40_Template, 2, 0, "div", 17)(41, RegisterComponent_div_41_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 21);
      \u0275\u0275element(43, "input", 28);
      \u0275\u0275elementStart(44, "label", 29);
      \u0275\u0275element(45, "i", 27);
      \u0275\u0275text(46, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, RegisterComponent_div_47_Template, 2, 0, "div", 17)(48, RegisterComponent_div_48_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 30);
      \u0275\u0275element(50, "input", 31);
      \u0275\u0275elementStart(51, "label", 32);
      \u0275\u0275text(52, " I agree to the ");
      \u0275\u0275elementStart(53, "a", 33);
      \u0275\u0275text(54, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " and ");
      \u0275\u0275elementStart(56, "a", 33);
      \u0275\u0275text(57, "Privacy Policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 34)(59, "button", 35);
      \u0275\u0275template(60, RegisterComponent_span_60_Template, 1, 0, "span", 36)(61, RegisterComponent_i_61_Template, 1, 0, "i", 37);
      \u0275\u0275text(62, " Create Account ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 38)(64, "span");
      \u0275\u0275text(65, "or sign up with");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 39)(67, "button", 40);
      \u0275\u0275element(68, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 42);
      \u0275\u0275element(70, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "button", 44);
      \u0275\u0275element(72, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 46)(74, "p");
      \u0275\u0275text(75, "Already have an account? ");
      \u0275\u0275elementStart(76, "a", 47);
      \u0275\u0275text(77, "Sign In");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(78, "div", 48)(79, "div", 49)(80, "div", 50);
      \u0275\u0275element(81, "i", 51);
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "FoodieExpress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "h2");
      \u0275\u0275text(85, "Join Our Food Community!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p");
      \u0275\u0275text(87, "Create an account to unlock a world of delicious possibilities at your fingertips.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 52)(89, "h5");
      \u0275\u0275text(90, "Benefits of joining:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "ul")(92, "li");
      \u0275\u0275element(93, "i", 53);
      \u0275\u0275elementStart(94, "div")(95, "h6");
      \u0275\u0275text(96, "Order History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98, "Easily reorder your favorite meals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "li");
      \u0275\u0275element(100, "i", 54);
      \u0275\u0275elementStart(101, "div")(102, "h6");
      \u0275\u0275text(103, "Exclusive Offers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p");
      \u0275\u0275text(105, "Get access to members-only deals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "li");
      \u0275\u0275element(107, "i", 55);
      \u0275\u0275elementStart(108, "div")(109, "h6");
      \u0275\u0275text(110, "Save Favorites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112, "Bookmark your top restaurants");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "li");
      \u0275\u0275element(114, "i", 56);
      \u0275\u0275elementStart(115, "div")(116, "h6");
      \u0275\u0275text(117, "Fast Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p");
      \u0275\u0275text(119, "Save delivery details for next time");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(120, "div", 57)(121, "div", 58)(122, "span");
      \u0275\u0275text(123, "NEW USERS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 59)(125, "h5");
      \u0275\u0275text(126, "Get 20% OFF on your first order!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p");
      \u0275\u0275text(128, "Use code: ");
      \u0275\u0275elementStart(129, "strong");
      \u0275\u0275text(130, "WELCOME20");
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.registerForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && ((tmp_3_0 = ctx.registerForm.get("name")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]) && ((tmp_5_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]) && ((tmp_6_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx.registerForm.get("email")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.registerForm.get("email")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.registerForm.get("email")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]) && ((tmp_8_0 = ctx.registerForm.get("email")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.registerForm.get("email")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["email"]) && ((tmp_9_0 = ctx.registerForm.get("email")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx.registerForm.get("password")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.registerForm.get("password")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.registerForm.get("password")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]) && ((tmp_11_0 = ctx.registerForm.get("password")) == null ? null : tmp_11_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.registerForm.get("password")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["minlength"]) && ((tmp_12_0 = ctx.registerForm.get("password")) == null ? null : tmp_12_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", (((tmp_13_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_13_0.invalid) || (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"])) && ((tmp_13_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_13_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]) && ((tmp_14_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_14_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"]) && ((tmp_15_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_15_0.touched));
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
    }
  }, dependencies: [SharedModule, NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.auth-container[_ngcontent-%COMP%] {\n  padding: 90px 0 60px;\n  min-height: calc(100vh - 76px);\n  display: flex;\n  align-items: center;\n}\n.auth-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.auth-banner[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 700px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.auth-banner-content[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  max-width: 400px;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n}\n.auth-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 1.8rem;\n  color: var(--primary-color);\n}\n.auth-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.auth-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n}\n.auth-features[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.auth-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.auth-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n.auth-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.auth-testimonial[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: 20px;\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  background: rgba(0, 0, 0, 0.5);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth-testimonial[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 1rem;\n  border: 2px solid var(--primary-color);\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.auth-testimonial[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.auth-form-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.auth-form-content[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  width: 100%;\n}\n.auth-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.auth-form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.auth-form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #666;\n  margin: 0;\n}\n.alert-custom[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  height: 58px;\n  border-radius: 10px;\n  padding-left: 1rem;\n  border-color: #e0e0e0;\n}\n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.auth-form[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.25);\n  border-color: var(--primary-color);\n}\n.auth-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.auth-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.forgot-password[_ngcontent-%COMP%], \n.terms-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 0.9rem;\n  text-decoration: none;\n}\n.forgot-password[_ngcontent-%COMP%]:hover, \n.terms-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 1.5rem 0;\n}\n.auth-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 0 15px;\n  font-size: 0.9rem;\n  color: #777;\n  position: relative;\n  z-index: 1;\n}\n.auth-divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #e0e0e0;\n}\n.social-auth[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-bottom: 1.5rem;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n  background-color: #f5f5f5;\n  border: none;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social.btn-google[_ngcontent-%COMP%] {\n  color: #DB4437;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social.btn-facebook[_ngcontent-%COMP%] {\n  color: #4267B2;\n}\n.social-auth[_ngcontent-%COMP%]   .btn-social.btn-apple[_ngcontent-%COMP%] {\n  color: #000;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #666;\n}\n.auth-footer[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%], \n.auth-footer[_ngcontent-%COMP%]   .signin-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]:hover, \n.auth-footer[_ngcontent-%COMP%]   .signin-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 991.98px) {\n  .auth-container[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .auth-banner[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 60px 0;\n  }\n  .auth-form-content[_ngcontent-%COMP%], \n   .auth-banner-content[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .auth-banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-wrapper[_ngcontent-%COMP%] {\n    border-radius: 15px;\n  }\n  .auth-form-content[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n}\n.auth-banner.register-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n}\n.benefits-list[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.benefits-list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n  color: #fff;\n  opacity: 0.9;\n}\n.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 1.2rem;\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n}\n.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n  color: #fff;\n}\n.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin: 0;\n  opacity: 0.7;\n}\n.auth-promo[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.auth-promo[_ngcontent-%COMP%]   .promo-badge[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  padding: 0.5rem;\n  border-radius: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-right: 1rem;\n  text-align: center;\n}\n.auth-promo[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 0.25rem;\n  color: white;\n}\n.auth-promo[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.auth-promo[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  background: rgba(255, 255, 255, 0.15);\n  padding: 0.15rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=register.component-MIMOIRY6.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [SharedModule], template: `<div class="auth-container">\r
  <div class="container">\r
    <div class="row justify-content-center">\r
      <div class="col-lg-10">\r
        <div class="auth-wrapper">\r
          <div class="row g-0">\r
            <div class="col-md-6 auth-form-container" data-aos="fade-right">\r
              <div class="auth-form-content">\r
                <div class="auth-form-header">\r
                  <h3 class="animate__animated animate__fadeInUp">Create Account</h3>\r
                  <p class="animate__animated animate__fadeInUp animate__delay-1s">Join our community and start ordering delicious food today</p>\r
                </div>\r
                \r
                <div *ngIf="errorMessage" class="alert alert-custom animate__animated animate__headShake">\r
                  <i class="fas fa-exclamation-circle me-2"></i>\r
                  {{ errorMessage }}\r
                </div>\r
                \r
                <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" novalidate class="auth-form">\r
                  <div class="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-1s">\r
                    <input \r
                      type="text" \r
                      class="form-control" \r
                      id="name" \r
                      formControlName="name"\r
                      [class.is-invalid]="registerForm.get('name')?.invalid && registerForm.get('name')?.touched">\r
                    <label for="name"><i class="fas fa-user me-2"></i>Full Name</label>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('name')?.errors?.['required'] && registerForm.get('name')?.touched">\r
                      Full name is required\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-1s">\r
                    <input \r
                      type="tel" \r
                      class="form-control" \r
                      id="phoneNumber" \r
                      formControlName="phoneNumber"\r
                      placeholder="+1234567890"\r
                      [class.is-invalid]="registerForm.get('phoneNumber')?.invalid && registerForm.get('phoneNumber')?.touched">\r
                    <label for="phoneNumber"><i class="fas fa-phone-alt me-2"></i>Phone Number</label>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('phoneNumber')?.errors?.['required'] && registerForm.get('phoneNumber')?.touched">\r
                      Phone number is required\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('phoneNumber')?.errors?.['pattern'] && registerForm.get('phoneNumber')?.touched">\r
                      Please enter a valid phone number (10-14 digits with optional + prefix)\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-2s">\r
                    <input \r
                      type="email" \r
                      class="form-control" \r
                      id="email" \r
                      formControlName="email"\r
                      placeholder="name@example.com"\r
                      [class.is-invalid]="registerForm.get('email')?.invalid && registerForm.get('email')?.touched">\r
                    <label for="email"><i class="fas fa-envelope me-2"></i>Email Address</label>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('email')?.errors?.['required'] && registerForm.get('email')?.touched">\r
                      Email is required\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('email')?.errors?.['email'] && registerForm.get('email')?.touched">\r
                      Please enter a valid email address\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-2s">\r
                    <input \r
                      type="password" \r
                      class="form-control" \r
                      id="password" \r
                      formControlName="password"\r
                      [class.is-invalid]="registerForm.get('password')?.invalid && registerForm.get('password')?.touched">\r
                    <label for="password"><i class="fas fa-lock me-2"></i>Password</label>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('password')?.errors?.['required'] && registerForm.get('password')?.touched">\r
                      Password is required\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('password')?.errors?.['minlength'] && registerForm.get('password')?.touched">\r
                      Password must be at least 6 characters\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-2s">\r
                    <input \r
                      type="password" \r
                      class="form-control" \r
                      id="confirmPassword" \r
                      formControlName="confirmPassword"\r
                      [class.is-invalid]="(registerForm.get('confirmPassword')?.invalid || registerForm.errors?.['passwordMismatch']) && registerForm.get('confirmPassword')?.touched">\r
                    <label for="confirmPassword"><i class="fas fa-lock me-2"></i>Confirm Password</label>\r
                    <div class="invalid-feedback" *ngIf="registerForm.get('confirmPassword')?.errors?.['required'] && registerForm.get('confirmPassword')?.touched">\r
                      Please confirm your password\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="registerForm.errors?.['passwordMismatch'] && registerForm.get('confirmPassword')?.touched">\r
                      Passwords do not match\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="form-check mb-4 animate__animated animate__fadeInUp animate__delay-3s">\r
                    <input class="form-check-input" type="checkbox" id="acceptTerms">\r
                    <label class="form-check-label" for="acceptTerms">\r
                      I agree to the <a href="#" class="terms-link">Terms & Conditions</a> and <a href="#" class="terms-link">Privacy Policy</a>\r
                    </label>\r
                  </div>\r
                  \r
                  <div class="d-grid gap-2 mb-4 animate__animated animate__fadeInUp animate__delay-3s">\r
                    <button \r
                      type="submit" \r
                      class="btn btn-primary btn-lg" \r
                      [disabled]="registerForm.invalid || isSubmitting">\r
                      <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
                      <i *ngIf="!isSubmitting" class="fas fa-user-plus me-2"></i>\r
                      Create Account\r
                    </button>\r
                  </div>\r
                </form>\r
                \r
                <div class="auth-divider animate__animated animate__fadeInUp animate__delay-3s">\r
                  <span>or sign up with</span>\r
                </div>\r
                \r
                <div class="social-auth animate__animated animate__fadeInUp animate__delay-3s">\r
                  <button class="btn btn-social btn-google">\r
                    <i class="fab fa-google"></i>\r
                  </button>\r
                  <button class="btn btn-social btn-facebook">\r
                    <i class="fab fa-facebook-f"></i>\r
                  </button>\r
                  <button class="btn btn-social btn-apple">\r
                    <i class="fab fa-apple"></i>\r
                  </button>\r
                </div>\r
                \r
                <div class="auth-footer animate__animated animate__fadeInUp animate__delay-4s">\r
                  <p>Already have an account? <a routerLink="/auth/login" class="signin-link">Sign In</a></p>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <div class="col-md-6 auth-banner register-banner" data-aos="fade-left">\r
              <div class="auth-banner-content">\r
                <div class="auth-logo">\r
                  <i class="fas fa-utensils"></i>\r
                  <span>FoodieExpress</span>\r
                </div>\r
                <h2>Join Our Food Community!</h2>\r
                <p>Create an account to unlock a world of delicious possibilities at your fingertips.</p>\r
                \r
                <div class="benefits-list">\r
                  <h5>Benefits of joining:</h5>\r
                  <ul>\r
                    <li>\r
                      <i class="fas fa-history"></i>\r
                      <div>\r
                        <h6>Order History</h6>\r
                        <p>Easily reorder your favorite meals</p>\r
                      </div>\r
                    </li>\r
                    <li>\r
                      <i class="fas fa-tag"></i>\r
                      <div>\r
                        <h6>Exclusive Offers</h6>\r
                        <p>Get access to members-only deals</p>\r
                      </div>\r
                    </li>\r
                    <li>\r
                      <i class="fas fa-star"></i>\r
                      <div>\r
                        <h6>Save Favorites</h6>\r
                        <p>Bookmark your top restaurants</p>\r
                      </div>\r
                    </li>\r
                    <li>\r
                      <i class="fas fa-truck"></i>\r
                      <div>\r
                        <h6>Fast Checkout</h6>\r
                        <p>Save delivery details for next time</p>\r
                      </div>\r
                    </li>\r
                  </ul>\r
                </div>\r
                \r
                <div class="auth-promo">\r
                  <div class="promo-badge">\r
                    <span>NEW USERS</span>\r
                  </div>\r
                  <div class="promo-content">\r
                    <h5>Get 20% OFF on your first order!</h5>\r
                    <p>Use code: <strong>WELCOME20</strong></p>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div> `, styles: ['/* src/app/features/auth/register/register.component.scss */\n.auth-container {\n  padding: 90px 0 60px;\n  min-height: calc(100vh - 76px);\n  display: flex;\n  align-items: center;\n}\n.auth-wrapper {\n  background-color: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.auth-banner {\n  height: 100%;\n  min-height: 700px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.auth-banner-content {\n  padding: 2.5rem;\n  max-width: 400px;\n}\n.auth-logo {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n}\n.auth-logo i {\n  margin-right: 10px;\n  font-size: 1.8rem;\n  color: var(--primary-color);\n}\n.auth-banner h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.auth-banner p {\n  font-size: 1rem;\n  opacity: 0.9;\n  margin-bottom: 2rem;\n}\n.auth-features {\n  margin-bottom: 3rem;\n}\n.auth-features .feature-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.auth-features .feature-item i {\n  color: var(--primary-color);\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n.auth-features .feature-item span {\n  font-size: 0.95rem;\n}\n.auth-testimonial {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n.auth-testimonial .quote-icon {\n  position: absolute;\n  top: -15px;\n  left: 20px;\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  background: rgba(0, 0, 0, 0.5);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.auth-testimonial p {\n  font-style: italic;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n.auth-testimonial .testimonial-author {\n  display: flex;\n  align-items: center;\n}\n.auth-testimonial .testimonial-author img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 1rem;\n  border: 2px solid var(--primary-color);\n}\n.auth-testimonial .testimonial-author h6 {\n  font-size: 0.9rem;\n  margin: 0;\n}\n.auth-testimonial .testimonial-author span {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.auth-form-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.auth-form-content {\n  padding: 2.5rem;\n  width: 100%;\n}\n.auth-form-header {\n  margin-bottom: 2rem;\n}\n.auth-form-header h3 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.auth-form-header p {\n  font-size: 1rem;\n  color: #666;\n  margin: 0;\n}\n.alert-custom {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n  border: none;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n.alert-custom i {\n  font-size: 1.25rem;\n}\n.auth-form {\n  margin-bottom: 1.5rem;\n}\n.auth-form .form-floating {\n  margin-bottom: 1.25rem;\n}\n.auth-form .form-floating > label {\n  padding-left: 1rem;\n}\n.auth-form .form-floating .form-control,\n.auth-form .form-floating .form-select {\n  height: 58px;\n  border-radius: 10px;\n  padding-left: 1rem;\n  border-color: #e0e0e0;\n}\n.auth-form .form-floating .form-control:focus,\n.auth-form .form-floating .form-select:focus {\n  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.25);\n  border-color: var(--primary-color);\n}\n.auth-form .btn {\n  padding: 12px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.auth-form .btn:hover {\n  transform: translateY(-2px);\n}\n.form-check .form-check-input:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.forgot-password,\n.terms-link {\n  color: var(--primary-color);\n  font-size: 0.9rem;\n  text-decoration: none;\n}\n.forgot-password:hover,\n.terms-link:hover {\n  text-decoration: underline;\n}\n.auth-divider {\n  position: relative;\n  text-align: center;\n  margin: 1.5rem 0;\n}\n.auth-divider span {\n  background-color: white;\n  padding: 0 15px;\n  font-size: 0.9rem;\n  color: #777;\n  position: relative;\n  z-index: 1;\n}\n.auth-divider::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #e0e0e0;\n}\n.social-auth {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-bottom: 1.5rem;\n}\n.social-auth .btn-social {\n  width: 45px;\n  height: 45px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n  background-color: #f5f5f5;\n  border: none;\n}\n.social-auth .btn-social i {\n  font-size: 1.25rem;\n}\n.social-auth .btn-social:hover {\n  transform: translateY(-3px);\n}\n.social-auth .btn-social.btn-google {\n  color: #DB4437;\n}\n.social-auth .btn-social.btn-facebook {\n  color: #4267B2;\n}\n.social-auth .btn-social.btn-apple {\n  color: #000;\n}\n.auth-footer {\n  text-align: center;\n}\n.auth-footer p {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #666;\n}\n.auth-footer .signup-link,\n.auth-footer .signin-link {\n  color: var(--primary-color);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer .signup-link:hover,\n.auth-footer .signin-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 991.98px) {\n  .auth-container {\n    padding: 40px 0;\n  }\n  .auth-banner {\n    min-height: auto;\n    padding: 60px 0;\n  }\n  .auth-form-content,\n  .auth-banner-content {\n    padding: 2rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .auth-banner {\n    display: none;\n  }\n  .auth-wrapper {\n    border-radius: 15px;\n  }\n  .auth-form-content {\n    padding: 2rem 1.5rem;\n  }\n}\n.auth-banner.register-banner {\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n}\n.benefits-list {\n  margin-top: 2rem;\n}\n.benefits-list h5 {\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n  color: #fff;\n  opacity: 0.9;\n}\n.benefits-list ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.benefits-list ul li {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.benefits-list ul li i {\n  color: var(--primary-color);\n  font-size: 1.2rem;\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n}\n.benefits-list ul li div h6 {\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n  color: #fff;\n}\n.benefits-list ul li div p {\n  font-size: 0.85rem;\n  margin: 0;\n  opacity: 0.7;\n}\n.auth-promo {\n  margin-top: 2.5rem;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.auth-promo .promo-badge {\n  background: var(--primary-color);\n  color: white;\n  padding: 0.5rem;\n  border-radius: 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-right: 1rem;\n  text-align: center;\n}\n.auth-promo .promo-content h5 {\n  font-size: 1.1rem;\n  margin-bottom: 0.25rem;\n  color: white;\n}\n.auth-promo .promo-content p {\n  margin: 0;\n  font-size: 0.9rem;\n}\n.auth-promo .promo-content p strong {\n  color: var(--primary-color);\n  background: rgba(255, 255, 255, 0.15);\n  padding: 0.15rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=register.component-MIMOIRY6.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 15 });
})();

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "login",
    component: LoginComponent,
    title: "Login - QualiFoodie"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Register - QualiFoodie"
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-OQXBJYGE.js.map
