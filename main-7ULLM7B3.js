import {
  CartService
} from "./chunk-SPLCDW3U.js";
import {
  AuthService,
  JwtHelperService
} from "./chunk-P6XRT7RJ.js";
import {
  SharedModule
} from "./chunk-Q4YMUNUZ.js";
import "./chunk-RHXFPPC4.js";
import {
  ApplicationRef,
  CommonModule,
  Component,
  HTTP_INTERCEPTORS,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  NEVER,
  NavigationEnd,
  NgClass,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Renderer2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  RuntimeError,
  Subject,
  bootstrapApplication,
  catchError,
  filter,
  formatRuntimeError,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  switchMap,
  take,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UXXDM6C4.js";
import {
  __spreadValues
} from "./chunk-GMSD7K74.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-72ZWUDYN.js").then((m) => m.HOME_ROUTES)
  },
  {
    path: "restaurants",
    loadChildren: () => import("./chunk-PM2HCSW4.js").then((m) => m.RESTAURANTS_ROUTES)
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-OQXBJYGE.js").then((m) => m.AUTH_ROUTES)
  },
  {
    path: "orders",
    loadChildren: () => import("./chunk-JAS2MWRR.js").then((m) => m.ORDERS_ROUTES)
  },
  {
    path: "admin",
    loadChildren: () => import("./chunk-SMX4V3WQ.js").then((m) => m.ADMIN_ROUTES)
  },
  {
    path: "cart",
    loadChildren: () => import("./chunk-Z6RYZ4GF.js").then((m) => m.CART_ROUTES)
  },
  {
    path: "profile",
    loadChildren: () => import("./chunk-WVIVTFKM.js").then((m) => m.PROFILE_ROUTES)
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration()));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  /**
   * Emits the payloads of the received push notification messages.
   */
  messages;
  /**
   * Emits the payloads of the received push notification messages as well as the action the user
   * interacted with. If no action was used the `action` property contains an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   */
  notificationClicks;
  /**
   * Emits the currently active
   * [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
   * associated to the Service Worker registration or `null` if there is no subscription.
   */
  subscription;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  /**
   * Emits a `VersionDetectedEvent` event whenever a new version is detected on the server.
   *
   * Emits a `VersionInstallationFailedEvent` event whenever checking for or downloading a new
   * version fails.
   *
   * Emits a `VersionReadyEvent` event whenever a new version has been downloaded and is ready for
   * activation.
   */
  versionUpdates;
  /**
   * Emits an `UnrecoverableStateEvent` event whenever the version of the app used by the service
   * worker to serve this client is in a broken state that cannot be recovered from without a full
   * page reload.
   */
  unrecoverable;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce);
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="docs-alert docs-alert-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the application shell and other page resources,
   * such as lazy-loaded chunks, whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory(opts, injector) {
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  /**
   * Whether the ServiceWorker will be registered and the related services (such as `SwPush` and
   * `SwUpdate`) will attempt to communicate and interact with it.
   *
   * Default: true
   */
  enabled;
  /**
   * A URL that defines the ServiceWorker's registration scope; that is, what range of URLs it can
   * control. It will be used when calling
   * [ServiceWorkerContainer#register()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).
   */
  scope;
  /**
   * Defines the ServiceWorker registration strategy, which determines when it will be registered
   * with the browser.
   *
   * The default behavior of registering once the application stabilizes (i.e. as soon as there are
   * no pending micro- and macro-tasks) is designed to register the ServiceWorker as soon as
   * possible but without affecting the application's first time load.
   *
   * Still, there might be cases where you want more control over when the ServiceWorker is
   * registered (for example, there might be a long-running timeout or polling interval, preventing
   * the app from stabilizing). The available option are:
   *
   * - `registerWhenStable:<timeout>`: Register as soon as the application stabilizes (no pending
   *     micro-/macro-tasks) but no later than `<timeout>` milliseconds. If the app hasn't
   *     stabilized after `<timeout>` milliseconds (for example, due to a recurrent asynchronous
   *     task), the ServiceWorker will be registered anyway.
   *     If `<timeout>` is omitted, the ServiceWorker will only be registered once the app
   *     stabilizes.
   * - `registerImmediately`: Register immediately.
   * - `registerWithDelay:<timeout>`: Register with a delay of `<timeout>` milliseconds. For
   *     example, use `registerWithDelay:5000` to register the ServiceWorker after 5 seconds. If
   *     `<timeout>` is omitted, is defaults to `0`, which will register the ServiceWorker as soon
   *     as possible but still asynchronously, once all pending micro-tasks are completed.
   * - An Observable factory function: A function that returns an `Observable`.
   *     The function will be used at runtime to obtain and subscribe to the `Observable` and the
   *     ServiceWorker will be registered as soon as the first value is emitted.
   *
   * Default: 'registerWhenStable:30000'
   */
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, Injector]
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/core/interceptors/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.token;
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const authService = inject(AuthService);
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      authService.logout();
    }
    const errorMessage = error.error?.message || error.statusText || "Unknown error";
    return throwError(() => new Error(errorMessage));
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor, errorInterceptor])),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    }),
    JwtHelperService
  ]
};

// src/app/core/core.module.ts
var CoreModule = class _CoreModule {
  static \u0275fac = function CoreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoreModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CoreModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    { provide: HTTP_INTERCEPTORS, useValue: jwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useValue: errorInterceptor, multi: true }
  ], imports: [CommonModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule
      ],
      providers: [
        { provide: HTTP_INTERCEPTORS, useValue: jwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useValue: errorInterceptor, multi: true }
      ]
    }]
  }], null, null);
})();

// src/app/app.component.ts
var _c0 = (a0, a1, a2) => ({ "navbar-scrolled shadow-lg": a0, "navbar-transparent": a1, "navbar-light bg-white": a2 });
var _c1 = () => ({ exact: true });
var _c2 = (a0) => ({ "show": a0 });
function AppComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 60);
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275text(3, " My Orders ");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 62);
    \u0275\u0275element(2, "i", 63);
    \u0275\u0275text(3, " Admin ");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cartService.totalItems, " ");
  }
}
function AppComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 65)(2, "a", 66);
    \u0275\u0275element(3, "i", 67);
    \u0275\u0275text(4, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 68);
    \u0275\u0275element(6, "i", 69);
    \u0275\u0275text(7, " Register ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AppComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 70)(2, "a", 71);
    \u0275\u0275element(3, "i", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 73)(6, "li")(7, "a", 74);
    \u0275\u0275element(8, "i", 75);
    \u0275\u0275text(9, "Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "hr", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "a", 77);
    \u0275\u0275listener("click", function AppComponent_ng_container_27_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.authService.logout());
    });
    \u0275\u0275element(14, "i", 78);
    \u0275\u0275text(15, "Logout");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.authService.currentUser == null ? null : ctx_r0.authService.currentUser.name, " ");
  }
}
var AppComponent = class _AppComponent {
  authService;
  cartService;
  router;
  renderer;
  isMenuCollapsed = true;
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  isScrolled = false;
  constructor(authService, cartService, router, renderer) {
    this.authService = authService;
    this.cartService = cartService;
    this.router = router;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.checkScroll();
    if (typeof window !== "undefined") {
      import("./chunk-ZZVPUCXE.js").then((module) => {
        const AOS = module.default;
        AOS.init({
          duration: 1e3,
          once: true,
          easing: "ease"
        });
      });
    }
    this.updateBodyClass();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateBodyClass();
    });
  }
  updateBodyClass() {
    if (this.isHomePage()) {
      this.renderer.addClass(document.body, "has-hero-section");
    } else {
      this.renderer.removeClass(document.body, "has-hero-section");
    }
  }
  checkScroll() {
    this.isScrolled = window.pageYOffset > 100;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // Check if the current page is home or restaurant pages
  isHomePage() {
    const currentUrl = this.router.url;
    return currentUrl === "/" || currentUrl === "/home" || currentUrl.startsWith("/restaurants");
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function AppComponent_scroll_HostBindingHandler() {
        return ctx.checkScroll();
      }, false, \u0275\u0275resolveWindow);
    }
  }, decls: 108, vars: 18, consts: [[1, "app-container"], [1, "navbar", "navbar-expand-lg", "fixed-top", 3, "ngClass"], [1, "container"], ["routerLink", "/", 1, "navbar-brand", "d-flex", "align-items-center"], [1, "fas", "fa-utensils", "me-2"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "fas", "fa-bars"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fas", "fa-home", "me-1"], ["routerLink", "/restaurants", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-store", "me-1"], ["class", "nav-item", 4, "ngIf"], [1, "navbar-nav"], ["routerLink", "/cart", 1, "nav-link", "position-relative", "me-3"], [1, "fas", "fa-shopping-cart", "fs-5"], ["class", "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger animate__animated animate__pulse animate__infinite", 4, "ngIf"], [4, "ngIf"], [1, "bg-dark", "text-light", "py-5"], [1, "row"], [1, "col-lg-4", "col-md-6", "mb-4", "mb-md-0"], [1, "text-uppercase", "mb-4"], [1, "mb-3"], [1, "social-icons"], ["href", "#", 1, "me-3", "text-light", "fs-5"], [1, "fab", "fa-facebook"], [1, "fab", "fa-instagram"], [1, "fab", "fa-twitter"], ["href", "#", 1, "text-light", "fs-5"], [1, "fab", "fa-youtube"], [1, "col-lg-2", "col-md-6", "mb-4", "mb-md-0"], [1, "list-unstyled"], [1, "mb-2"], ["routerLink", "/", 1, "text-light", "text-decoration-none"], [1, "fas", "fa-angle-right", "me-2"], ["routerLink", "/restaurants", 1, "text-light", "text-decoration-none"], ["routerLink", "/auth/register", 1, "text-light", "text-decoration-none"], ["routerLink", "/auth/login", 1, "text-light", "text-decoration-none"], [1, "col-lg-3", "col-md-6", "mb-4", "mb-md-0"], [1, "fas", "fa-map-marker-alt", "me-2"], [1, "fas", "fa-envelope", "me-2"], [1, "fas", "fa-phone", "me-2"], [1, "fas", "fa-clock", "me-2"], [1, "col-lg-3", "col-md-6"], [1, "input-group", "mb-3"], ["type", "email", "placeholder", "Email Address", "aria-label", "Email Address", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "fas", "fa-paper-plane"], [1, "mt-4"], ["src", "assets/images/payment-methods.png", "alt", "Payment Methods", 1, "img-fluid", 2, "max-height", "30px"], [1, "my-4"], [1, "row", "align-items-center"], [1, "col-md-6", "text-center", "text-md-start"], [1, "col-md-6", "text-center", "text-md-end"], ["href", "#", 1, "text-light", "text-decoration-none", "me-3"], ["href", "#", 1, "text-light", "text-decoration-none"], [1, "btn", "btn-primary", "back-to-top", 3, "click", "ngClass"], [1, "fas", "fa-chevron-up"], ["routerLink", "/orders", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-clipboard-list", "me-1"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-user-shield", "me-1"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger", "animate__animated", "animate__pulse", "animate__infinite"], [1, "d-flex", "align-items-center"], ["routerLink", "/auth/login", 1, "nav-link", "me-3"], [1, "fas", "fa-sign-in-alt", "me-1"], ["routerLink", "/auth/register", 1, "btn", "btn-primary", "rounded-pill", "px-3", "d-flex", "align-items-center"], [1, "fas", "fa-user-plus", "me-1"], [1, "nav-item", "dropdown"], ["href", "#", "id", "userDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "d-flex", "align-items-center"], [1, "fas", "fa-user-circle", "me-1", "fs-5"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-end", "shadow-sm", "border-0"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "fas", "fa-user", "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt", "me-2"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header")(2, "nav", 1)(3, "div", 2)(4, "a", 3);
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "QualiFoodie");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function AppComponent_Template_button_click_8_listener() {
        return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "ul", 8)(12, "li", 9)(13, "a", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275text(15, " Home ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li", 9)(17, "a", 12);
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275text(19, " Restaurants ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, AppComponent_li_20_Template, 4, 0, "li", 14)(21, AppComponent_li_21_Template, 4, 0, "li", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15)(23, "a", 16);
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275template(25, AppComponent_span_25_Template, 2, 1, "span", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, AppComponent_ng_container_26_Template, 8, 0, "ng-container", 19)(27, AppComponent_ng_container_27_Template, 16, 1, "ng-container", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "main");
      \u0275\u0275element(29, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "footer", 20)(31, "div", 2)(32, "div", 21)(33, "div", 22)(34, "h5", 23);
      \u0275\u0275element(35, "i", 4);
      \u0275\u0275text(36, "QualiFoodie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 24);
      \u0275\u0275text(38, "Delicious food delivered to your doorstep. Order from the best restaurants in town with just a few clicks.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 25)(40, "a", 26);
      \u0275\u0275element(41, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 26);
      \u0275\u0275element(43, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 26);
      \u0275\u0275element(45, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 30);
      \u0275\u0275element(47, "i", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 32)(49, "h5", 23);
      \u0275\u0275text(50, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 33)(52, "li", 34)(53, "a", 35);
      \u0275\u0275element(54, "i", 36);
      \u0275\u0275text(55, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li", 34)(57, "a", 37);
      \u0275\u0275element(58, "i", 36);
      \u0275\u0275text(59, "Restaurants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li", 34)(61, "a", 38);
      \u0275\u0275element(62, "i", 36);
      \u0275\u0275text(63, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li", 34)(65, "a", 39);
      \u0275\u0275element(66, "i", 36);
      \u0275\u0275text(67, "Login");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 40)(69, "h5", 23);
      \u0275\u0275text(70, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "ul", 33)(72, "li", 24);
      \u0275\u0275element(73, "i", 41);
      \u0275\u0275text(74, " 123 Foodie Street, Tasty City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "li", 24);
      \u0275\u0275element(76, "i", 42);
      \u0275\u0275text(77, " support@qualifoodie.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "li", 24);
      \u0275\u0275element(79, "i", 43);
      \u0275\u0275text(80, " (555) 123-4567");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "li", 24);
      \u0275\u0275element(82, "i", 44);
      \u0275\u0275text(83, " Mon-Sun: 8:00 AM - 11:00 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 45)(85, "h5", 23);
      \u0275\u0275text(86, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p");
      \u0275\u0275text(88, "Subscribe to get special offers and updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 46);
      \u0275\u0275element(90, "input", 47);
      \u0275\u0275elementStart(91, "button", 48);
      \u0275\u0275element(92, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 50);
      \u0275\u0275element(94, "img", 51);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(95, "hr", 52);
      \u0275\u0275elementStart(96, "div", 53)(97, "div", 54);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 55)(100, "a", 56);
      \u0275\u0275text(101, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 56);
      \u0275\u0275text(103, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "a", 57);
      \u0275\u0275text(105, "FAQs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(106, "button", 58);
      \u0275\u0275listener("click", function AppComponent_Template_button_click_106_listener() {
        return ctx.scrollToTop();
      });
      \u0275\u0275element(107, "i", 59);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c0, ctx.isScrolled, !ctx.isScrolled && ctx.isHomePage(), !ctx.isHomePage()));
      \u0275\u0275advance(8);
      \u0275\u0275classProp("show", !ctx.isMenuCollapsed);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(15, _c1));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.authService.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.authService.isAdmin);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.cartService.totalItems > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.authService.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.authService.isLoggedIn);
      \u0275\u0275advance(71);
      \u0275\u0275textInterpolate1(" \xA9 ", ctx.currentYear, " QualiFoodie. All rights reserved. ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c2, ctx.isScrolled));
    }
  }, dependencies: [RouterOutlet, CoreModule, SharedModule, NgClass, NgIf, RouterLink, RouterLinkActive, CommonModule], styles: ['\n\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\nheader[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 100;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--primary-color) !important;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: color 0.3s;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color) !important;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n  font-weight: 600;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 5px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 0;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\nmain[_ngcontent-%COMP%] {\n  flex: 1;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: #292f36;\n  color: #fff;\n  padding: 60px 0 30px;\n}\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  margin: 30px 0;\n}\nfooter[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.position-relative[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.4rem;\n}\n.navbar[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  padding: 15px 0;\n}\n.navbar-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.navbar-transparent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], \n.navbar-transparent[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.navbar-transparent[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.navbar-light[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.navbar-light[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--dark-color);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: var(--dark-color);\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.navbar-scrolled[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 10px 0;\n}\n.navbar-scrolled[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], \n.navbar-scrolled[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--dark-color);\n}\n.navbar-scrolled[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: var(--dark-color);\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.5rem;\n  transition: all 0.3s ease;\n}\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 5px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 2px;\n  background-color: var(--primary-color);\n  transition: all 0.3s ease;\n  transform: translateX(-50%);\n}\n.nav-link[_ngcontent-%COMP%]:hover, \n.nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n.nav-link[_ngcontent-%COMP%]:hover::after, \n.nav-link.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  padding: 8px 20px;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  font-size: 1.5rem;\n}\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: #1e2a3a !important;\n  position: relative;\n}\nfooter[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50px;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #1e2a3a;\n  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 100%);\n}\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  position: relative;\n  padding-bottom: 10px;\n}\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 50px;\n  height: 2px;\n  background-color: var(--primary-color);\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color) !important;\n  transform: translateY(-3px);\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 999;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.back-to-top.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n@media (max-width: 991.98px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n    margin-top: 10px;\n  }\n  .navbar-collapse[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--dark-color) !important;\n  }\n  .navbar-transparent[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: var(--dark-color) !important;\n  }\n}\n@media (max-width: 767.98px) {\n  footer[_ngcontent-%COMP%]::before {\n    height: 30px;\n    top: -30px;\n  }\n  footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::after {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.navbar-nav[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.navbar-nav[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0.375rem 1rem;\n  height: 38px;\n}\n.navbar-nav[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 991.98px) {\n  .navbar-nav[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=app.component-PLTN6UZF.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, CoreModule, SharedModule, CommonModule], template: `<div class="app-container">\r
  <header>\r
    <nav class="navbar navbar-expand-lg fixed-top" \r
         [ngClass]="{'navbar-scrolled shadow-lg': isScrolled, \r
                    'navbar-transparent': !isScrolled && isHomePage(),\r
                    'navbar-light bg-white': !isHomePage()}">\r
      <div class="container">\r
        <a class="navbar-brand d-flex align-items-center" routerLink="/">\r
          <i class="fas fa-utensils me-2"></i>\r
          <span>QualiFoodie</span>\r
        </a>\r
        <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">\r
          <i class="fas fa-bars"></i>\r
        </button>\r
        \r
        <div class="collapse navbar-collapse" [class.show]="!isMenuCollapsed">\r
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">\r
            <li class="nav-item">\r
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">\r
                <i class="fas fa-home me-1"></i> Home\r
              </a>\r
            </li>\r
            <li class="nav-item">\r
              <a class="nav-link" routerLink="/restaurants" routerLinkActive="active">\r
                <i class="fas fa-store me-1"></i> Restaurants\r
              </a>\r
            </li>\r
            <li class="nav-item" *ngIf="authService.isLoggedIn">\r
              <a class="nav-link" routerLink="/orders" routerLinkActive="active">\r
                <i class="fas fa-clipboard-list me-1"></i> My Orders\r
              </a>\r
            </li>\r
            <li class="nav-item" *ngIf="authService.isAdmin">\r
              <a class="nav-link" routerLink="/admin" routerLinkActive="active">\r
                <i class="fas fa-user-shield me-1"></i> Admin\r
              </a>\r
            </li>\r
          </ul>\r
          <div class="navbar-nav">\r
            <a class="nav-link position-relative me-3" routerLink="/cart">\r
              <i class="fas fa-shopping-cart fs-5"></i>\r
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger animate__animated animate__pulse animate__infinite" *ngIf="cartService.totalItems > 0">\r
                {{ cartService.totalItems }}\r
              </span>\r
            </a>\r
            <ng-container *ngIf="!authService.isLoggedIn">\r
              <div class="d-flex align-items-center">\r
                <a class="nav-link me-3" routerLink="/auth/login">\r
                  <i class="fas fa-sign-in-alt me-1"></i> Login\r
                </a>\r
                <a class="btn btn-primary rounded-pill px-3 d-flex align-items-center" routerLink="/auth/register">\r
                  <i class="fas fa-user-plus me-1"></i> Register\r
                </a>\r
              </div>\r
            </ng-container>\r
            <ng-container *ngIf="authService.isLoggedIn">\r
              <div class="nav-item dropdown">\r
                <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                  <i class="fas fa-user-circle me-1 fs-5"></i>\r
                  {{ authService.currentUser?.name }}\r
                </a>\r
                <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0" aria-labelledby="userDropdown">\r
                  <li><a class="dropdown-item" routerLink="/profile"><i class="fas fa-user me-2"></i>Profile</a></li>\r
                  <li><hr class="dropdown-divider"></li>\r
                  <li><a class="dropdown-item" (click)="authService.logout()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>\r
                </ul>\r
              </div>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
\r
  <main>\r
    <router-outlet></router-outlet>\r
  </main>\r
\r
  <footer class="bg-dark text-light py-5">\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">\r
          <h5 class="text-uppercase mb-4"><i class="fas fa-utensils me-2"></i>QualiFoodie</h5>\r
          <p class="mb-3">Delicious food delivered to your doorstep. Order from the best restaurants in town with just a few clicks.</p>\r
          <div class="social-icons">\r
            <a href="#" class="me-3 text-light fs-5"><i class="fab fa-facebook"></i></a>\r
            <a href="#" class="me-3 text-light fs-5"><i class="fab fa-instagram"></i></a>\r
            <a href="#" class="me-3 text-light fs-5"><i class="fab fa-twitter"></i></a>\r
            <a href="#" class="text-light fs-5"><i class="fab fa-youtube"></i></a>\r
          </div>\r
        </div>\r
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">\r
          <h5 class="text-uppercase mb-4">Quick Links</h5>\r
          <ul class="list-unstyled">\r
            <li class="mb-2"><a routerLink="/" class="text-light text-decoration-none"><i class="fas fa-angle-right me-2"></i>Home</a></li>\r
            <li class="mb-2"><a routerLink="/restaurants" class="text-light text-decoration-none"><i class="fas fa-angle-right me-2"></i>Restaurants</a></li>\r
            <li class="mb-2"><a routerLink="/auth/register" class="text-light text-decoration-none"><i class="fas fa-angle-right me-2"></i>Register</a></li>\r
            <li class="mb-2"><a routerLink="/auth/login" class="text-light text-decoration-none"><i class="fas fa-angle-right me-2"></i>Login</a></li>\r
          </ul>\r
        </div>\r
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">\r
          <h5 class="text-uppercase mb-4">Contact Us</h5>\r
          <ul class="list-unstyled">\r
            <li class="mb-3"><i class="fas fa-map-marker-alt me-2"></i> 123 Foodie Street, Tasty City</li>\r
            <li class="mb-3"><i class="fas fa-envelope me-2"></i> support&#64;qualifoodie.com</li>\r
            <li class="mb-3"><i class="fas fa-phone me-2"></i> (555) 123-4567</li>\r
            <li class="mb-3"><i class="fas fa-clock me-2"></i> Mon-Sun: 8:00 AM - 11:00 PM</li>\r
          </ul>\r
        </div>\r
        <div class="col-lg-3 col-md-6">\r
          <h5 class="text-uppercase mb-4">Newsletter</h5>\r
          <p>Subscribe to get special offers and updates</p>\r
          <div class="input-group mb-3">\r
            <input type="email" class="form-control" placeholder="Email Address" aria-label="Email Address">\r
            <button class="btn btn-primary" type="button"><i class="fas fa-paper-plane"></i></button>\r
          </div>\r
          <div class="mt-4">\r
            <img src="assets/images/payment-methods.png" alt="Payment Methods" class="img-fluid" style="max-height: 30px;">\r
          </div>\r
        </div>\r
      </div>\r
      <hr class="my-4">\r
      <div class="row align-items-center">\r
        <div class="col-md-6 text-center text-md-start">\r
          &copy; {{ currentYear }} QualiFoodie. All rights reserved.\r
        </div>\r
        <div class="col-md-6 text-center text-md-end">\r
          <a href="#" class="text-light text-decoration-none me-3">Privacy Policy</a>\r
          <a href="#" class="text-light text-decoration-none me-3">Terms & Conditions</a>\r
          <a href="#" class="text-light text-decoration-none">FAQs</a>\r
        </div>\r
      </div>\r
    </div>\r
  </footer>\r
\r
  <!-- Back to top button -->\r
  <button class="btn btn-primary back-to-top" [ngClass]="{'show': isScrolled}" (click)="scrollToTop()">\r
    <i class="fas fa-chevron-up"></i>\r
  </button>\r
</div>\r
`, styles: ['/* src/app/app.component.scss */\n.app-container {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\nheader {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 100;\n}\n.navbar {\n  padding: 15px 0;\n}\n.navbar-brand {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--primary-color) !important;\n}\n.navbar-nav .nav-link {\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: color 0.3s;\n}\n.navbar-nav .nav-link:hover {\n  color: var(--primary-color) !important;\n}\n.navbar-nav .nav-link.active {\n  color: var(--primary-color) !important;\n  font-weight: 600;\n}\n.nav-item {\n  position: relative;\n  margin: 0 5px;\n}\n.dropdown-menu {\n  border: none;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 10px 0;\n}\n.dropdown-item {\n  padding: 8px 20px;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.dropdown-item:hover {\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n}\n.dropdown-divider {\n  margin: 8px 0;\n}\nmain {\n  flex: 1;\n}\nfooter {\n  background-color: #292f36;\n  color: #fff;\n  padding: 60px 0 30px;\n}\nfooter h5 {\n  font-weight: 600;\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n}\nfooter ul {\n  padding-left: 0;\n}\nfooter ul li {\n  margin-bottom: 10px;\n}\nfooter a {\n  color: #fff;\n  text-decoration: none;\n  transition: color 0.3s;\n}\nfooter a:hover {\n  color: var(--primary-color);\n  text-decoration: none;\n}\nfooter hr {\n  border-color: rgba(255, 255, 255, 0.1);\n  margin: 30px 0;\n}\nfooter .text-center {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.position-relative .badge {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.4rem;\n}\n.navbar {\n  transition: all 0.3s ease;\n  padding: 15px 0;\n}\n.navbar-transparent {\n  background-color: transparent;\n}\n.navbar-transparent .navbar-brand,\n.navbar-transparent .nav-link {\n  color: white;\n}\n.navbar-transparent .navbar-toggler {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.navbar-light {\n  background-color: #fff;\n}\n.navbar-light .navbar-brand {\n  color: var(--primary-color);\n}\n.navbar-light .nav-link {\n  color: var(--dark-color);\n}\n.navbar-light .navbar-toggler {\n  color: var(--dark-color);\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.navbar-scrolled {\n  background-color: white;\n  padding: 10px 0;\n}\n.navbar-scrolled .navbar-brand,\n.navbar-scrolled .nav-link {\n  color: var(--dark-color);\n}\n.navbar-scrolled .navbar-toggler {\n  color: var(--dark-color);\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.navbar-brand {\n  font-weight: 700;\n  font-size: 1.5rem;\n  transition: all 0.3s ease;\n}\n.navbar-brand:hover {\n  transform: scale(1.05);\n}\n.nav-link {\n  position: relative;\n  margin: 0 5px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.nav-link::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 2px;\n  background-color: var(--primary-color);\n  transition: all 0.3s ease;\n  transform: translateX(-50%);\n}\n.nav-link:hover,\n.nav-link.active {\n  color: var(--primary-color) !important;\n}\n.nav-link:hover::after,\n.nav-link.active::after {\n  width: 100%;\n}\n.dropdown-item {\n  transition: all 0.2s ease;\n  padding: 8px 20px;\n}\n.dropdown-item:hover {\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n}\n.navbar-toggler {\n  border: none;\n  padding: 0;\n  font-size: 1.5rem;\n}\n.navbar-toggler:focus {\n  box-shadow: none;\n}\nfooter {\n  background-color: #1e2a3a !important;\n  position: relative;\n}\nfooter::before {\n  content: "";\n  position: absolute;\n  top: -50px;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #1e2a3a;\n  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 100%);\n}\nfooter h5 {\n  font-weight: 700;\n  position: relative;\n  padding-bottom: 10px;\n}\nfooter h5::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 50px;\n  height: 2px;\n  background-color: var(--primary-color);\n}\n.social-icons a {\n  transition: all 0.3s ease;\n}\n.social-icons a:hover {\n  color: var(--primary-color) !important;\n  transform: translateY(-3px);\n}\n.back-to-top {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 999;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n.back-to-top.show {\n  opacity: 1;\n  visibility: visible;\n}\n.back-to-top:hover {\n  transform: translateY(-3px);\n}\n@media (max-width: 991.98px) {\n  .navbar-collapse {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n    margin-top: 10px;\n  }\n  .navbar-collapse .nav-link {\n    color: var(--dark-color) !important;\n  }\n  .navbar-transparent .navbar-collapse .nav-link {\n    color: var(--dark-color) !important;\n  }\n}\n@media (max-width: 767.98px) {\n  footer::before {\n    height: 30px;\n    top: -30px;\n  }\n  footer h5::after {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  footer h5 {\n    text-align: center;\n  }\n}\n.navbar-nav .d-flex {\n  align-items: center;\n}\n.navbar-nav .btn-primary {\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0.375rem 1rem;\n  height: 38px;\n}\n.navbar-nav .btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 991.98px) {\n  .navbar-nav .d-flex {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=app.component-PLTN6UZF.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: CartService }, { type: Router }, { type: Renderer2 }], { checkScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 17 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v19.2.14
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main-7ULLM7B3.js.map
