import {
  BehaviorSubject,
  DOCUMENT,
  HTTP_INTERCEPTORS,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  Optional,
  Router,
  SkipSelf,
  defer,
  environment,
  map,
  mergeMap,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-UXXDM6C4.js";

// src/app/core/models/user.model.ts
var UserRole;
(function(UserRole2) {
  UserRole2[UserRole2["Admin"] = 1] = "Admin";
  UserRole2[UserRole2["Manager"] = 2] = "Manager";
  UserRole2[UserRole2["EndUser"] = 3] = "EndUser";
})(UserRole || (UserRole = {}));

// node_modules/@auth0/angular-jwt/fesm2020/auth0-angular-jwt.mjs
var JWT_OPTIONS = new InjectionToken("JWT_OPTIONS");
var JwtHelperService = class {
  constructor(config = null) {
    this.tokenGetter = config && config.tokenGetter || function() {
    };
  }
  urlBase64Decode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0: {
        break;
      }
      case 2: {
        output += "==";
        break;
      }
      case 3: {
        output += "=";
        break;
      }
      default: {
        throw new Error("Illegal base64url string!");
      }
    }
    return this.b64DecodeUnicode(output);
  }
  // credits for decoder goes to https://github.com/atk
  b64decode(str) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    str = String(str).replace(/=+$/, "");
    if (str.length % 4 === 1) {
      throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
    }
    for (
      let bc = 0, bs, buffer, idx = 0;
      // get next character
      buffer = str.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }
    return output;
  }
  b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), (c) => {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  }
  decodeToken(token = this.tokenGetter()) {
    if (token instanceof Promise) {
      return token.then((t) => this._decodeToken(t));
    }
    return this._decodeToken(token);
  }
  _decodeToken(token) {
    if (!token || token === "") {
      return null;
    }
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error(`The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.`);
    }
    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error("Cannot decode the token.");
    }
    return JSON.parse(decoded);
  }
  getTokenExpirationDate(token = this.tokenGetter()) {
    if (token instanceof Promise) {
      return token.then((t) => this._getTokenExpirationDate(t));
    }
    return this._getTokenExpirationDate(token);
  }
  _getTokenExpirationDate(token) {
    let decoded;
    decoded = this.decodeToken(token);
    if (!decoded || !decoded.hasOwnProperty("exp")) {
      return null;
    }
    const date = /* @__PURE__ */ new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  isTokenExpired(token = this.tokenGetter(), offsetSeconds) {
    if (token instanceof Promise) {
      return token.then((t) => this._isTokenExpired(t, offsetSeconds));
    }
    return this._isTokenExpired(token, offsetSeconds);
  }
  _isTokenExpired(token, offsetSeconds) {
    if (!token || token === "") {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;
    if (date === null) {
      return false;
    }
    return !(date.valueOf() > (/* @__PURE__ */ new Date()).valueOf() + offsetSeconds * 1e3);
  }
  getAuthScheme(authScheme, request) {
    if (typeof authScheme === "function") {
      return authScheme(request);
    }
    return authScheme;
  }
};
JwtHelperService.\u0275fac = function JwtHelperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JwtHelperService)(\u0275\u0275inject(JWT_OPTIONS));
};
JwtHelperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: JwtHelperService,
  factory: JwtHelperService.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtHelperService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [JWT_OPTIONS]
      }]
    }];
  }, null);
})();
var fromPromiseOrValue = (input) => {
  if (input instanceof Promise) {
    return defer(() => input);
  }
  return of(input);
};
var JwtInterceptor = class {
  constructor(config, jwtHelper, document) {
    this.jwtHelper = jwtHelper;
    this.document = document;
    this.standardPorts = ["80", "443"];
    this.tokenGetter = config.tokenGetter;
    this.headerName = config.headerName || "Authorization";
    this.authScheme = config.authScheme || config.authScheme === "" ? config.authScheme : "Bearer ";
    this.allowedDomains = config.allowedDomains || [];
    this.disallowedRoutes = config.disallowedRoutes || [];
    this.throwNoTokenError = config.throwNoTokenError || false;
    this.skipWhenExpired = config.skipWhenExpired;
  }
  isAllowedDomain(request) {
    const requestUrl = new URL(request.url, this.document.location.origin);
    if (requestUrl.host === this.document.location.host) {
      return true;
    }
    const hostName = `${requestUrl.hostname}${requestUrl.port && !this.standardPorts.includes(requestUrl.port) ? ":" + requestUrl.port : ""}`;
    return this.allowedDomains.findIndex((domain) => typeof domain === "string" ? domain === hostName : domain instanceof RegExp ? domain.test(hostName) : false) > -1;
  }
  isDisallowedRoute(request) {
    const requestedUrl = new URL(request.url, this.document.location.origin);
    return this.disallowedRoutes.findIndex((route) => {
      if (typeof route === "string") {
        const parsedRoute = new URL(route, this.document.location.origin);
        return parsedRoute.hostname === requestedUrl.hostname && parsedRoute.pathname === requestedUrl.pathname;
      }
      if (route instanceof RegExp) {
        return route.test(request.url);
      }
      return false;
    }) > -1;
  }
  handleInterception(token, request, next) {
    const authScheme = this.jwtHelper.getAuthScheme(this.authScheme, request);
    if (!token && this.throwNoTokenError) {
      throw new Error("Could not get token from tokenGetter function.");
    }
    let tokenIsExpired = of(false);
    if (this.skipWhenExpired) {
      tokenIsExpired = token ? fromPromiseOrValue(this.jwtHelper.isTokenExpired(token)) : of(true);
    }
    if (token) {
      return tokenIsExpired.pipe(map((isExpired) => isExpired && this.skipWhenExpired ? request.clone() : request.clone({
        setHeaders: {
          [this.headerName]: `${authScheme}${token}`
        }
      })), mergeMap((innerRequest) => next.handle(innerRequest)));
    }
    return next.handle(request);
  }
  intercept(request, next) {
    if (!this.isAllowedDomain(request) || this.isDisallowedRoute(request)) {
      return next.handle(request);
    }
    const token = this.tokenGetter(request);
    return fromPromiseOrValue(token).pipe(mergeMap((asyncToken) => {
      return this.handleInterception(asyncToken, request, next);
    }));
  }
};
JwtInterceptor.\u0275fac = function JwtInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JwtInterceptor)(\u0275\u0275inject(JWT_OPTIONS), \u0275\u0275inject(JwtHelperService), \u0275\u0275inject(DOCUMENT));
};
JwtInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: JwtInterceptor,
  factory: JwtInterceptor.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtInterceptor, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [JWT_OPTIONS]
      }]
    }, {
      type: JwtHelperService
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var JwtModule = class _JwtModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error(`JwtModule is already loaded. It should only be imported in your application's main module.`);
    }
  }
  static forRoot(options) {
    return {
      ngModule: _JwtModule,
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      }, options.jwtOptionsProvider || {
        provide: JWT_OPTIONS,
        useValue: options.config
      }, JwtHelperService]
    };
  }
};
JwtModule.\u0275fac = function JwtModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JwtModule)(\u0275\u0275inject(JwtModule, 12));
};
JwtModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: JwtModule
});
JwtModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtModule, [{
    type: NgModule
  }], function() {
    return [{
      type: JwtModule,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }];
  }, null);
})();

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  jwtHelper = new JwtHelperService();
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.loadUserFromStorage();
  }
  loadUserFromStorage() {
    const token = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      try {
        const userData = this.jwtHelper.decodeToken(token);
        console.log("Decoded token:", userData);
        if (userData) {
          let userRole = UserRole.EndUser;
          const sessionRole = sessionStorage.getItem("userRole");
          if (sessionRole) {
            userRole = parseInt(sessionRole, 10);
            console.log("Using role from session storage:", userRole);
          } else if (userData.role) {
            if (typeof userData.role === "string") {
              if (userData.role === "1" || userData.role.toLowerCase() === "admin") {
                userRole = UserRole.Admin;
              } else if (userData.role === "2" || userData.role.toLowerCase() === "manager") {
                userRole = UserRole.Manager;
              }
            } else if (typeof userData.role === "number") {
              userRole = userData.role;
            }
          } else if (userData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]) {
            const roleValue = userData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            if (roleValue === "1" || roleValue === "Admin") {
              userRole = UserRole.Admin;
            } else if (roleValue === "2" || roleValue === "Manager") {
              userRole = UserRole.Manager;
            }
          }
          const user = {
            id: userData.nameid || userData.sub || userData.id,
            name: userData.name || userData.unique_name || userData.username,
            email: userData.email,
            role: userRole
          };
          this.currentUserSubject.next(user);
          console.log("User loaded from storage:", user);
          console.log("Is admin?", user.role === UserRole.Admin);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        this.logout();
      }
    } else if (token && this.jwtHelper.isTokenExpired(token)) {
      console.warn("Token expired, logging out");
      this.logout();
    }
  }
  login(credentials) {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials).pipe(tap((response) => {
      console.log("Login response:", response);
      this.handleAuthResponse(response);
    }));
  }
  register(user) {
    return this.http.post(`${environment.apiUrl}/auth/register`, user).pipe(tap((response) => {
      console.log("Register response:", response);
      this.handleAuthResponse(response);
    }));
  }
  handleAuthResponse(response) {
    if (response && response.token) {
      console.log("Storing token:", response.token);
      localStorage.setItem("token", response.token);
      if (response.user && response.user.role) {
        sessionStorage.setItem("userRole", response.user.role.toString());
        console.log("Stored user role in session storage:", response.user.role);
      }
      this.currentUserSubject.next(response.user);
    } else {
      console.error("No token in auth response");
    }
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("userRole");
    this.currentUserSubject.next(null);
    this.router.navigate(["/auth/login"]);
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get token() {
    return localStorage.getItem("token");
  }
  get isLoggedIn() {
    const token = this.token;
    if (!token) {
      return false;
    }
    try {
      return !this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      console.error("Error checking token expiration:", error);
      return false;
    }
  }
  get isAdmin() {
    const user = this.currentUser;
    let isAdmin = user?.role === UserRole.Admin;
    if (!isAdmin && sessionStorage.getItem("userRole") === UserRole.Admin.toString()) {
      console.log("Admin role detected from session storage");
      isAdmin = true;
    }
    return isAdmin;
  }
  get isManager() {
    const user = this.currentUser;
    return user?.role === UserRole.Manager;
  }
  get isEndUser() {
    const user = this.currentUser;
    return user?.role === UserRole.EndUser;
  }
  updateProfile(user) {
    return this.http.put(`${environment.apiUrl}/users/${user.id}`, user).pipe(tap((updatedUser) => {
      this.storeUserData(updatedUser);
    }));
  }
  storeUserData(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  getDecodedToken() {
    const token = this.token;
    if (token) {
      try {
        return this.jwtHelper.decodeToken(token);
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }
    return null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  UserRole,
  JwtHelperService,
  AuthService
};
//# sourceMappingURL=chunk-P6XRT7RJ.js.map
