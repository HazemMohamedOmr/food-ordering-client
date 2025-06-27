import {
  AdminService
} from "./chunk-5O64PYLZ.js";
import {
  AuthService,
  UserRole
} from "./chunk-P6XRT7RJ.js";
import {
  FormsModule
} from "./chunk-RHXFPPC4.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UXXDM6C4.js";
import "./chunk-GMSD7K74.js";

// src/app/features/admin/user-management/user-management.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-danger": a0, "bg-primary": a1, "bg-secondary": a2 });
function UserManagementComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function UserManagementComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function UserManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function UserManagementComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No users found");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 27)(15, "button", 28);
    \u0275\u0275text(16, " Change Role ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul", 29)(18, "li")(19, "button", 30);
    \u0275\u0275listener("click", function UserManagementComponent_tr_38_Template_button_click_19_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateUserRole(user_r3, ctx_r0.UserRole.Manager));
    });
    \u0275\u0275text(20, " Promote to Manager ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "button", 30);
    \u0275\u0275listener("click", function UserManagementComponent_tr_38_Template_button_click_22_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateUserRole(user_r3, ctx_r0.UserRole.EndUser));
    });
    \u0275\u0275text(23, " Demote to User ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.phoneNumber || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c0, user_r3.role === ctx_r0.UserRole.Admin, user_r3.role === ctx_r0.UserRole.Manager, user_r3.role === ctx_r0.UserRole.EndUser));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRoleName(user_r3.role || ctx_r0.UserRole.EndUser), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.createdAt ? \u0275\u0275pipeBind2(12, 8, user_r3.createdAt, "medium") : "N/A");
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", user_r3.role === ctx_r0.UserRole.Manager || user_r3.id === (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", user_r3.role === ctx_r0.UserRole.EndUser || user_r3.id === (ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.id));
  }
}
var UserManagementComponent = class _UserManagementComponent {
  adminService;
  authService;
  router;
  users = [];
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  UserRole = UserRole;
  // Make enum available in template
  constructor(adminService, authService, router) {
    this.adminService = adminService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn || !this.authService.isAdmin) {
      this.router.navigate(["/"]);
      return;
    }
    this.loadUsers();
  }
  loadUsers() {
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to load users";
      }
    });
  }
  updateUserRole(user, newRole) {
    if (user.role === newRole)
      return;
    if (newRole === UserRole.Admin) {
      this.errorMessage = "Cannot promote users to Admin through the API";
      return;
    }
    if (user.id === this.authService.currentUser?.id) {
      this.errorMessage = "Cannot change your own role";
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.adminService.updateUserRole(user.id, newRole).subscribe({
      next: () => {
        this.isLoading = false;
        user.role = newRole;
        this.successMessage = `Updated ${user.name}'s role successfully`;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || "Failed to update user role";
      }
    });
  }
  getRoleName(role) {
    switch (role) {
      case UserRole.Admin:
        return "Admin";
      case UserRole.Manager:
        return "Manager";
      case UserRole.EndUser:
        return "User";
      default:
        return "Unknown";
    }
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 40, vars: 5, consts: [[1, "container", "py-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["routerLink", "/admin", 1, "btn", "btn-primary"], [1, "fas", "fa-arrow-left", "me-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], [1, "card", "mb-5"], [1, "card-header", "bg-primary", "text-white"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "fas", "fa-users", "me-2"], [1, "btn", "btn-sm", "btn-light", 3, "click"], [1, "fas", "fa-sync-alt", "me-2"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mb-5", "pb-5"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "text-center", "my-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["colspan", "6", 1, "text-center"], [1, "badge", 3, "ngClass"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-outline-primary", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click", "disabled"]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, " Back to Dashboard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, UserManagementComponent_div_7_Template, 2, 1, "div", 4)(8, UserManagementComponent_div_8_Template, 2, 1, "div", 5)(9, UserManagementComponent_div_9_Template, 4, 0, "div", 6);
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h5", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275text(15, " System Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 12);
      \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_16_listener() {
        return ctx.loadUsers();
      });
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275text(18, " Refresh ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "table", 16)(22, "thead")(23, "tr")(24, "th");
      \u0275\u0275text(25, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Created");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "tbody");
      \u0275\u0275template(37, UserManagementComponent_tr_37_Template, 3, 0, "tr", 17)(38, UserManagementComponent_tr_38_Template, 24, 15, "tr", 18);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(39, "div", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(28);
      \u0275\u0275property("ngIf", ctx.users.length === 0 && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.users);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, RouterLink], styles: ["\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 0.35em 0.65em;\n}\n/*# sourceMappingURL=user-management.component-JRA5SDCI.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-user-management", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="container py-4">\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <h1>User Management</h1>\r
    <button class="btn btn-primary" routerLink="/admin">\r
      <i class="fas fa-arrow-left me-2"></i> Back to Dashboard\r
    </button>\r
  </div>\r
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
  <div class="card mb-5">\r
    <div class="card-header bg-primary text-white">\r
      <div class="d-flex justify-content-between align-items-center">\r
        <h5 class="mb-0"><i class="fas fa-users me-2"></i> System Users</h5>\r
        <button class="btn btn-sm btn-light" (click)="loadUsers()">\r
          <i class="fas fa-sync-alt me-2"></i> Refresh\r
        </button>\r
      </div>\r
    </div>\r
    <div class="card-body">\r
      <div class="table-responsive">\r
        <table class="table table-hover">\r
          <thead>\r
            <tr>\r
              <th>Name</th>\r
              <th>Email</th>\r
              <th>Phone</th>\r
              <th>Role</th>\r
              <th>Created</th>\r
              <th>Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="users.length === 0 && !isLoading">\r
              <td colspan="6" class="text-center">No users found</td>\r
            </tr>\r
            <tr *ngFor="let user of users">\r
              <td>{{ user.name }}</td>\r
              <td>{{ user.email }}</td>\r
              <td>{{ user.phoneNumber || 'N/A' }}</td>\r
              <td>\r
                <span class="badge" \r
                    [ngClass]="{\r
                      'bg-danger': user.role === UserRole.Admin, \r
                      'bg-primary': user.role === UserRole.Manager,\r
                      'bg-secondary': user.role === UserRole.EndUser\r
                    }">\r
                  {{ getRoleName(user.role || UserRole.EndUser) }}\r
                </span>\r
              </td>\r
              <td>{{ user.createdAt ? (user.createdAt | date:'medium') : 'N/A' }}</td>\r
              <td>\r
                <div class="btn-group">\r
                  <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                    Change Role\r
                  </button>\r
                  <ul class="dropdown-menu">\r
                    <!-- No option to promote to admin -->\r
                    <li>\r
                      <button class="dropdown-item" \r
                              [disabled]="user.role === UserRole.Manager || user.id === authService.currentUser?.id"\r
                              (click)="updateUserRole(user, UserRole.Manager)">\r
                        Promote to Manager\r
                      </button>\r
                    </li>\r
                    <li>\r
                      <button class="dropdown-item"\r
                              [disabled]="user.role === UserRole.EndUser || user.id === authService.currentUser?.id"\r
                              (click)="updateUserRole(user, UserRole.EndUser)">\r
                        Demote to User\r
                      </button>\r
                    </li>\r
                  </ul>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
  \r
  <div class="mb-5 pb-5">\r
    <!-- Extra padding at the bottom -->\r
  </div>\r
</div> `, styles: ["/* src/app/features/admin/user-management/user-management.component.scss */\n.table td,\n.table th {\n  vertical-align: middle;\n}\n.badge {\n  font-size: 0.85rem;\n  padding: 0.35em 0.65em;\n}\n/*# sourceMappingURL=user-management.component-JRA5SDCI.css.map */\n"] }]
  }], () => [{ type: AdminService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src/app/features/admin/user-management/user-management.component.ts", lineNumber: 17 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-SWH4FN26.js.map
