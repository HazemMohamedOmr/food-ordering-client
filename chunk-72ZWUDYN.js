import {
  AuthService
} from "./chunk-P6XRT7RJ.js";
import {
  CommonModule,
  Component,
  NgIf,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-UXXDM6C4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GMSD7K74.js";

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}

// node_modules/swiper/shared/utils.mjs
function classesToTokens(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return classes2.trim().split(" ").filter((c) => !!c.trim());
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle2(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject2(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  const window2 = getWindow();
  const children = [...element.children];
  if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter((el) => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
  }
}
function elementIsChildOf(el, parent) {
  const window2 = getWindow();
  let isChild = parent.contains(el);
  if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
  }
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
  return el;
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function setInnerHTML(el, html) {
  if (html === void 0) {
    html = "";
  }
  if (typeof trustedTypes !== "undefined") {
    el.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: (s) => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}

// node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
var deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
var browser;
function calcBrowser() {
  const window2 = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach((_ref2) => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function(target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event2) => {
      if (!self.eventsListeners[event2]) self.eventsListeners[event2] = [];
      self.eventsListeners[event2][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach((event2) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event2] = [];
      } else if (self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event2].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event2) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event2, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event2]) {
        self.eventsListeners[event2].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i]) slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slides);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit("slidesUpdated");
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
var toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
var toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
      nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
      prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach((slideEl) => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
var unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
var preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
  else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";
    else if (activeIndex < previousIndex) dir = "prev";
    else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === "reset") {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";
  else if (slideIndex < activeIndex) direction = "prev";
  else direction = "reset";
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  const browser2 = getBrowser();
  const isSafari = browser2.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = (amountOfSlides) => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next",
    initial
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    initialSlide
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop) c.loopFix(__spreadProps(__spreadValues({}, loopParams), {
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        }));
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix(__spreadProps(__spreadValues({}, loopParams), {
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      }));
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event2, startX) {
  const window2 = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event2.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event2) {
  const swiper = this;
  const document2 = getDocument();
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === "pointerdown") {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === "touchstart") {
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event2) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event2.pointerType === "mouse") return;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === "pointermove") {
    if (data.touchId !== null) return;
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === "touchmove") {
    targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
    document2.activeElement.blur();
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  (/* @__PURE__ */ new Date()).getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event2) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event2;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null) return;
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
var events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!el || typeof el === "string") return;
  document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("touchend", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("touchcancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
var isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const document2 = getDocument();
  const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
  const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend2(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === "string") return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend2(allModulesParams, obj);
  };
}
var prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
var extendedDefaults = {};
var Swiper = class _Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend2({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new _Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend2({}, defaults, allModulesParams);
    swiper.params = extend2({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend2({}, swiper.params);
    swiper.passedParams = extend2({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate(void 0, true);
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
    const modules = _Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => _Swiper.installModule(m));
      return _Swiper;
    }
    _Swiper.installModule(module);
    return _Swiper;
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// node_modules/swiper/shared/create-element-if-not-defined.mjs
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}

// node_modules/swiper/modules/navigation.mjs
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === "string") res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update2();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/shared/classes-to-selector.mjs
function classesToSelector(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

// node_modules/swiper/modules/pagination.mjs
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return "next";
    } else if (nextIndex === prevIndex - 1) {
      return "previous";
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === "next") {
        swiper.slideNext();
      } else if (moveDirection === "previous") {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update2() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
        if (subElIndex === 0) emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0) emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        setInnerHTML(subEl, paginationHTML || "");
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.find((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update2();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update2();
    }
  });
  on("snapIndexChange", () => {
    update2();
  });
  on("snapGridLengthChange", () => {
    render();
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update2();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/modules/autoplay.mjs
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}

// src/app/features/home/home.component.ts
function HomeComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 136);
    \u0275\u0275element(1, "i", 137);
    \u0275\u0275text(2, " Sign Up ");
    \u0275\u0275elementEnd();
  }
}
var HomeComponent = class _HomeComponent {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    new Swiper(".popular-dishes .swiper-container", {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3e3,
        disableOnInteraction: false
      },
      pagination: {
        el: ".popular-dishes .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".popular-dishes .swiper-button-next",
        prevEl: ".popular-dishes .swiper-button-prev"
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    });
    new Swiper(".testimonials .swiper-container", {
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4e3,
        disableOnInteraction: false
      },
      pagination: {
        el: ".testimonials .swiper-pagination",
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 449, vars: 1, consts: [[1, "hero-section"], [1, "hero-overlay"], [1, "container"], [1, "row", "align-items-center"], ["data-aos", "fade-right", "data-aos-delay", "100", 1, "col-lg-6"], [1, "hero-title", "animate__animated", "animate__fadeInUp"], [1, "text-accent"], [1, "hero-subtitle", "animate__animated", "animate__fadeInUp", "animate__delay-1s"], [1, "hero-buttons", "animate__animated", "animate__fadeInUp", "animate__delay-1s"], ["routerLink", "/restaurants", 1, "btn", "btn-light", "btn-lg", "me-3", "px-4", "rounded-pill"], [1, "fas", "fa-search", "me-2"], ["routerLink", "/auth/register", "class", "btn btn-outline-light btn-lg px-4 rounded-pill", 4, "ngIf"], [1, "hero-stats", "animate__animated", "animate__fadeInUp", "animate__delay-2s"], [1, "hero-stat-item"], [1, "fas", "fa-utensils"], [1, "count"], [1, "label"], [1, "fas", "fa-biking"], [1, "fas", "fa-smile"], ["data-aos", "fade-left", "data-aos-delay", "300", 1, "col-lg-6", "d-none", "d-lg-block"], [1, "hero-image-container"], ["src", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000", "alt", "Delicious Food", 1, "img-fluid", "hero-image"], [1, "floating-badge", "top"], [1, "fas", "fa-star"], [1, "floating-badge", "bottom"], [1, "fas", "fa-medal"], [1, "featured-banner"], ["data-aos", "fade-up", 1, "banner-wrapper"], [1, "banner-logos"], [1, "logo-item"], ["src", "https://i.imgur.com/8t2KkXx.png", "alt", "Restaurant Logo"], ["src", "https://i.imgur.com/YdyHiEH.png", "alt", "Restaurant Logo"], ["src", "https://i.imgur.com/j6eIcak.png", "alt", "Restaurant Logo"], ["src", "https://i.imgur.com/cJSNhPf.png", "alt", "Restaurant Logo"], ["src", "https://i.imgur.com/lYLCimP.png", "alt", "Restaurant Logo"], [1, "how-it-works"], ["data-aos", "fade-up", 1, "text-center", "mb-5"], [1, "section-subtitle-badge"], [1, "section-title"], [1, "text-primary"], [1, "section-subtitle"], [1, "row", "g-4"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-4"], [1, "step-card"], [1, "step-number"], [1, "step-icon"], [1, "fas", "fa-store"], [1, "step-arrow", "d-none", "d-md-block"], [1, "fas", "fa-long-arrow-alt-right"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-md-4"], [1, "fas", "fa-hamburger"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-md-4"], [1, "popular-dishes"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "popular-dishes-slider"], [1, "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "dish-card"], [1, "dish-image"], ["src", "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400", "alt", "Pizza"], [1, "dish-tag"], [1, "dish-info"], [1, "dish-rating"], [1, "dish-reviews"], [1, "dish-meta"], [1, "fas", "fa-fire"], [1, "fas", "fa-clock"], [1, "dish-price-action"], [1, "dish-price"], ["routerLink", "/restaurants", 1, "btn", "btn-sm", "btn-primary", "rounded-pill"], ["src", "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400", "alt", "Burger"], ["src", "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400", "alt", "Sushi"], ["src", "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=400", "alt", "Pasta"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "featured-categories"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-6", "col-md-4", "col-lg-2"], ["routerLink", "/restaurants", 1, "category-card"], [1, "category-icon"], [1, "fas", "fa-bacon"], [1, "category-count"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-6", "col-md-4", "col-lg-2"], [1, "fas", "fa-coffee"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-6", "col-md-4", "col-lg-2"], [1, "fas", "fa-pizza-slice"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-6", "col-md-4", "col-lg-2"], [1, "fas", "fa-fish"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "col-6", "col-md-4", "col-lg-2"], [1, "fas", "fa-cocktail"], ["data-aos", "fade-up", "data-aos-delay", "600", 1, "col-6", "col-md-4", "col-lg-2"], ["routerLink", "/restaurants", 1, "category-card", "view-all"], [1, "fas", "fa-th-large"], [1, "app-promo"], ["data-aos", "fade-up", 1, "app-promo-wrapper"], [1, "col-lg-6", "mb-4", "mb-lg-0"], [1, "app-mockup"], ["src", "https://i.imgur.com/F5LbV9Y.png", "alt", "Mobile App", 1, "img-fluid"], [1, "col-lg-6"], [1, "app-promo-content"], [1, "app-promo-text"], [1, "app-features"], [1, "fas", "fa-check-circle"], [1, "app-buttons"], ["href", "#", 1, "app-btn", "apple"], [1, "fab", "fa-apple"], ["href", "#", 1, "app-btn", "google"], [1, "fab", "fa-google-play"], [1, "testimonials"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "testimonials-slider"], [1, "testimonial-card"], [1, "testimonial-quote"], [1, "fas", "fa-quote-left"], [1, "testimonial-rating"], [1, "testimonial-text"], [1, "testimonial-author"], ["src", "https://randomuser.me/api/portraits/women/65.jpg", "alt", "Customer", 1, "author-image"], ["src", "https://randomuser.me/api/portraits/men/32.jpg", "alt", "Customer", 1, "author-image"], [1, "fas", "fa-star-half-alt"], ["src", "https://randomuser.me/api/portraits/women/44.jpg", "alt", "Customer", 1, "author-image"], [1, "newsletter-section"], ["data-aos", "fade-up", 1, "newsletter-wrapper"], [1, "newsletter-form"], [1, "input-group"], ["type", "email", "placeholder", "Enter your email address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "form-check", "mt-2"], ["type", "checkbox", "id", "privacyCheck", 1, "form-check-input"], ["for", "privacyCheck", 1, "form-check-label"], ["href", "#"], [1, "cta-section"], ["data-aos", "fade-up", 1, "container", "text-center"], [1, "cta-title", "animate__animated", "animate__fadeInUp"], [1, "cta-subtitle", "mb-4", "animate__animated", "animate__fadeInUp", "animate__delay-1s"], ["routerLink", "/restaurants", 1, "btn", "btn-light", "btn-lg", "rounded-pill", "animate__animated", "animate__fadeInUp", "animate__delay-2s"], [1, "fas", "fa-utensils", "me-2"], ["routerLink", "/auth/register", 1, "btn", "btn-outline-light", "btn-lg", "px-4", "rounded-pill"], [1, "fas", "fa-user-plus", "me-2"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Delicious Food Delivered ");
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "to Your Door");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Discover the best restaurants in your area and enjoy a contactless delivery experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14, " Browse Restaurants ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, HomeComponent_a_15_Template, 3, 0, "a", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275elementStart(19, "div")(20, "span", 15);
      \u0275\u0275text(21, "500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "Restaurants");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 13);
      \u0275\u0275element(25, "i", 17);
      \u0275\u0275elementStart(26, "div")(27, "span", 15);
      \u0275\u0275text(28, "30min");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 16);
      \u0275\u0275text(30, "Avg. Delivery");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 13);
      \u0275\u0275element(32, "i", 18);
      \u0275\u0275elementStart(33, "div")(34, "span", 15);
      \u0275\u0275text(35, "98%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 16);
      \u0275\u0275text(37, "Happy Customers");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 19)(39, "div", 20);
      \u0275\u0275element(40, "img", 21);
      \u0275\u0275elementStart(41, "div", 22);
      \u0275\u0275element(42, "i", 23);
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Top Rated");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 24);
      \u0275\u0275element(46, "i", 25);
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Premium Quality");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(49, "section", 26)(50, "div", 2)(51, "div", 27)(52, "div", 28)(53, "div", 29);
      \u0275\u0275element(54, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 29);
      \u0275\u0275element(56, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 29);
      \u0275\u0275element(58, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 29);
      \u0275\u0275element(60, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 29);
      \u0275\u0275element(62, "img", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "Trusted by ");
      \u0275\u0275elementStart(65, "strong");
      \u0275\u0275text(66, "500+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(67, " restaurants nationwide");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "section", 35)(69, "div", 2)(70, "div", 36)(71, "p", 37);
      \u0275\u0275text(72, "SIMPLE & EASY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "h2", 38);
      \u0275\u0275text(74, "How It ");
      \u0275\u0275elementStart(75, "span", 39);
      \u0275\u0275text(76, "Works");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "p", 40);
      \u0275\u0275text(78, "Order your favorite meal in 3 simple steps");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 41)(80, "div", 42)(81, "div", 43)(82, "div", 44);
      \u0275\u0275text(83, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 45);
      \u0275\u0275element(85, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "h3");
      \u0275\u0275text(87, "Choose a Restaurant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p");
      \u0275\u0275text(89, "Browse through our wide selection of restaurants and cuisines available in your area");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 47);
      \u0275\u0275element(91, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 49)(93, "div", 43)(94, "div", 44);
      \u0275\u0275text(95, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 45);
      \u0275\u0275element(97, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "h3");
      \u0275\u0275text(99, "Select Your Meal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p");
      \u0275\u0275text(101, "Explore menus and add your favorite dishes to your cart with customization options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 47);
      \u0275\u0275element(103, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 51)(105, "div", 43)(106, "div", 44);
      \u0275\u0275text(107, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 45);
      \u0275\u0275element(109, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "h3");
      \u0275\u0275text(111, "Fast Delivery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p");
      \u0275\u0275text(113, "Get your food delivered to your doorstep in no time with our reliable delivery service");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(114, "section", 52)(115, "div", 2)(116, "div", 36)(117, "p", 37);
      \u0275\u0275text(118, "TASTY CHOICES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "h2", 38);
      \u0275\u0275text(120, "Popular ");
      \u0275\u0275elementStart(121, "span", 39);
      \u0275\u0275text(122, "Dishes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "p", 40);
      \u0275\u0275text(124, "Explore the most ordered dishes from our top restaurants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 53)(126, "div", 54)(127, "div", 55)(128, "div", 56)(129, "div", 57)(130, "div", 58);
      \u0275\u0275element(131, "img", 59);
      \u0275\u0275elementStart(132, "div", 60);
      \u0275\u0275text(133, "Bestseller");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 61)(135, "h4");
      \u0275\u0275text(136, "Pepperoni Pizza");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 62);
      \u0275\u0275element(138, "i", 23);
      \u0275\u0275elementStart(139, "span");
      \u0275\u0275text(140, "4.8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "span", 63);
      \u0275\u0275text(142, "(124 reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 64)(144, "span");
      \u0275\u0275element(145, "i", 65);
      \u0275\u0275text(146, " Italian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275element(148, "i", 66);
      \u0275\u0275text(149, " 30min");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 67)(151, "div", 68);
      \u0275\u0275text(152, "$14.99");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "a", 69);
      \u0275\u0275text(154, "Order Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(155, "div", 56)(156, "div", 57)(157, "div", 58);
      \u0275\u0275element(158, "img", 70);
      \u0275\u0275elementStart(159, "div", 60);
      \u0275\u0275text(160, "Hot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 61)(162, "h4");
      \u0275\u0275text(163, "Classic Cheeseburger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 62);
      \u0275\u0275element(165, "i", 23);
      \u0275\u0275elementStart(166, "span");
      \u0275\u0275text(167, "4.7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "span", 63);
      \u0275\u0275text(169, "(98 reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 64)(171, "span");
      \u0275\u0275element(172, "i", 65);
      \u0275\u0275text(173, " American");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "span");
      \u0275\u0275element(175, "i", 66);
      \u0275\u0275text(176, " 25min");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 67)(178, "div", 68);
      \u0275\u0275text(179, "$12.99");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "a", 69);
      \u0275\u0275text(181, "Order Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(182, "div", 56)(183, "div", 57)(184, "div", 58);
      \u0275\u0275element(185, "img", 71);
      \u0275\u0275elementStart(186, "div", 60);
      \u0275\u0275text(187, "Premium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div", 61)(189, "h4");
      \u0275\u0275text(190, "Sushi Platter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 62);
      \u0275\u0275element(192, "i", 23);
      \u0275\u0275elementStart(193, "span");
      \u0275\u0275text(194, "4.9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "span", 63);
      \u0275\u0275text(196, "(156 reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 64)(198, "span");
      \u0275\u0275element(199, "i", 65);
      \u0275\u0275text(200, " Japanese");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "span");
      \u0275\u0275element(202, "i", 66);
      \u0275\u0275text(203, " 35min");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 67)(205, "div", 68);
      \u0275\u0275text(206, "$24.99");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "a", 69);
      \u0275\u0275text(208, "Order Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(209, "div", 56)(210, "div", 57)(211, "div", 58);
      \u0275\u0275element(212, "img", 72);
      \u0275\u0275elementStart(213, "div", 60);
      \u0275\u0275text(214, "New");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "div", 61)(216, "h4");
      \u0275\u0275text(217, "Creamy Pasta Alfredo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "div", 62);
      \u0275\u0275element(219, "i", 23);
      \u0275\u0275elementStart(220, "span");
      \u0275\u0275text(221, "4.6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "span", 63);
      \u0275\u0275text(223, "(87 reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "div", 64)(225, "span");
      \u0275\u0275element(226, "i", 65);
      \u0275\u0275text(227, " Italian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "span");
      \u0275\u0275element(229, "i", 66);
      \u0275\u0275text(230, " 25min");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "div", 67)(232, "div", 68);
      \u0275\u0275text(233, "$16.99");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "a", 69);
      \u0275\u0275text(235, "Order Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(236, "div", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275element(237, "div", 74)(238, "div", 75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(239, "section", 76)(240, "div", 2)(241, "div", 36)(242, "p", 37);
      \u0275\u0275text(243, "EXPLORE MORE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "h2", 38);
      \u0275\u0275text(245, "Food ");
      \u0275\u0275elementStart(246, "span", 39);
      \u0275\u0275text(247, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "p", 40);
      \u0275\u0275text(249, "Discover restaurants by cuisine type");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 41)(251, "div", 77)(252, "a", 78)(253, "div", 79);
      \u0275\u0275element(254, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "h4");
      \u0275\u0275text(256, "Breakfast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "span", 81);
      \u0275\u0275text(258, "42 places");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(259, "div", 82)(260, "a", 78)(261, "div", 79);
      \u0275\u0275element(262, "i", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "h4");
      \u0275\u0275text(264, "Coffee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "span", 81);
      \u0275\u0275text(266, "37 places");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "div", 84)(268, "a", 78)(269, "div", 79);
      \u0275\u0275element(270, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "h4");
      \u0275\u0275text(272, "Pizza");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "span", 81);
      \u0275\u0275text(274, "65 places");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "div", 86)(276, "a", 78)(277, "div", 79);
      \u0275\u0275element(278, "i", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "h4");
      \u0275\u0275text(280, "Sushi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "span", 81);
      \u0275\u0275text(282, "28 places");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(283, "div", 88)(284, "a", 78)(285, "div", 79);
      \u0275\u0275element(286, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "h4");
      \u0275\u0275text(288, "Drinks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "span", 81);
      \u0275\u0275text(290, "43 places");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(291, "div", 90)(292, "a", 91)(293, "div", 79);
      \u0275\u0275element(294, "i", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "h4");
      \u0275\u0275text(296, "View All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "span", 81);
      \u0275\u0275text(298, "500+ places");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(299, "section", 93)(300, "div", 2)(301, "div", 94)(302, "div", 3)(303, "div", 95)(304, "div", 96);
      \u0275\u0275element(305, "img", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 98)(307, "div", 99)(308, "p", 37);
      \u0275\u0275text(309, "MOBILE EXPERIENCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "h2", 38);
      \u0275\u0275text(311, "Download Our ");
      \u0275\u0275elementStart(312, "span", 39);
      \u0275\u0275text(313, "Mobile App");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "p", 100);
      \u0275\u0275text(315, "Get the best food ordering experience on your mobile device. Order food, track delivery in real-time, and enjoy exclusive app-only offers and discounts.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "ul", 101)(317, "li");
      \u0275\u0275element(318, "i", 102);
      \u0275\u0275text(319, " Fast and secure checkout process");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "li");
      \u0275\u0275element(321, "i", 102);
      \u0275\u0275text(322, " Real-time order tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "li");
      \u0275\u0275element(324, "i", 102);
      \u0275\u0275text(325, " Exclusive app-only offers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "li");
      \u0275\u0275element(327, "i", 102);
      \u0275\u0275text(328, " Save your favorite restaurants and meals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div", 103)(330, "a", 104);
      \u0275\u0275element(331, "i", 105);
      \u0275\u0275elementStart(332, "div")(333, "span");
      \u0275\u0275text(334, "Download on the");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "strong");
      \u0275\u0275text(336, "App Store");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "a", 106);
      \u0275\u0275element(338, "i", 107);
      \u0275\u0275elementStart(339, "div")(340, "span");
      \u0275\u0275text(341, "Get it on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "strong");
      \u0275\u0275text(343, "Google Play");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(344, "section", 108)(345, "div", 2)(346, "div", 36)(347, "p", 37);
      \u0275\u0275text(348, "CUSTOMER STORIES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "h2", 38);
      \u0275\u0275text(350, "What Our ");
      \u0275\u0275elementStart(351, "span", 39);
      \u0275\u0275text(352, "Customers Say");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "p", 40);
      \u0275\u0275text(354, "Read testimonials from our satisfied customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "div", 109)(356, "div", 54)(357, "div", 55)(358, "div", 56)(359, "div", 110)(360, "div", 111);
      \u0275\u0275element(361, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "div", 113);
      \u0275\u0275element(363, "i", 23)(364, "i", 23)(365, "i", 23)(366, "i", 23)(367, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "p", 114);
      \u0275\u0275text(369, "The food delivery was super fast and the food was still hot when it arrived. The app is so easy to use and the customer service is excellent. Definitely my go-to food ordering app!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "div", 115);
      \u0275\u0275element(371, "img", 116);
      \u0275\u0275elementStart(372, "div")(373, "h5");
      \u0275\u0275text(374, "Sarah Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "p");
      \u0275\u0275text(376, "Regular Customer");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(377, "div", 56)(378, "div", 110)(379, "div", 111);
      \u0275\u0275element(380, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "div", 113);
      \u0275\u0275element(382, "i", 23)(383, "i", 23)(384, "i", 23)(385, "i", 23)(386, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "p", 114);
      \u0275\u0275text(388, "I love the variety of restaurants available. As a busy professional, this app saves me so much time. The delivery is always on time and the food is exactly as described. Highly recommend!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "div", 115);
      \u0275\u0275element(390, "img", 117);
      \u0275\u0275elementStart(391, "div")(392, "h5");
      \u0275\u0275text(393, "Michael Brown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "p");
      \u0275\u0275text(395, "Food Enthusiast");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(396, "div", 56)(397, "div", 110)(398, "div", 111);
      \u0275\u0275element(399, "i", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "div", 113);
      \u0275\u0275element(401, "i", 23)(402, "i", 23)(403, "i", 23)(404, "i", 23)(405, "i", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "p", 114);
      \u0275\u0275text(407, "I've tried many food delivery services and this is by far the best. The app is user-friendly, the selection is great, and the delivery drivers are always polite and professional.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "div", 115);
      \u0275\u0275element(409, "img", 119);
      \u0275\u0275elementStart(410, "div")(411, "h5");
      \u0275\u0275text(412, "Emily Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "p");
      \u0275\u0275text(414, "Busy Professional");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(415, "div", 73);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(416, "section", 120)(417, "div", 2)(418, "div", 121)(419, "div", 3)(420, "div", 98)(421, "h2");
      \u0275\u0275text(422, "Get ");
      \u0275\u0275elementStart(423, "span", 39);
      \u0275\u0275text(424, "10% Off");
      \u0275\u0275elementEnd();
      \u0275\u0275text(425, " Your First Order!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "p");
      \u0275\u0275text(427, "Subscribe to our newsletter and receive exclusive offers, updates, and promotions directly to your inbox.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "div", 98)(429, "form", 122)(430, "div", 123);
      \u0275\u0275element(431, "input", 124);
      \u0275\u0275elementStart(432, "button", 125);
      \u0275\u0275text(433, "Subscribe Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(434, "div", 126);
      \u0275\u0275element(435, "input", 127);
      \u0275\u0275elementStart(436, "label", 128);
      \u0275\u0275text(437, " I agree to the ");
      \u0275\u0275elementStart(438, "a", 129);
      \u0275\u0275text(439, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(440, "section", 130)(441, "div", 131)(442, "h2", 132);
      \u0275\u0275text(443, "Ready to Order Delicious Food?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "p", 133);
      \u0275\u0275text(445, "Browse our restaurants and place your order now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "a", 134);
      \u0275\u0275element(447, "i", 135);
      \u0275\u0275text(448, " Start Ordering ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", !ctx.authService.isLoggedIn);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n  color: white;\n  padding: 120px 0 80px;\n  position: relative;\n  overflow: hidden;\n  margin-top: -76px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n}\n.hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\n.hero-title[_ngcontent-%COMP%]   .text-accent[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  position: relative;\n  display: inline-block;\n}\n.hero-title[_ngcontent-%COMP%]   .text-accent[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background-color: var(--primary-color);\n  opacity: 0.3;\n  border-radius: 4px;\n  z-index: -1;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n  font-weight: 400;\n  max-width: 600px;\n}\n.hero-buttons[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.hero-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 30px;\n  font-weight: 600;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.hero-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n.hero-stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hero-stat-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary-color);\n}\n.hero-stat-item[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.hero-stat-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.hero-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  perspective: 1000px;\n}\n.hero-image[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n  transform: perspective(1000px) rotateY(-10deg);\n  transition: transform 0.5s;\n}\n.hero-image[_ngcontent-%COMP%]:hover {\n  transform: perspective(1000px) rotateY(0deg);\n}\n.floating-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px 20px;\n  background-color: white;\n  border-radius: 30px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #333;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.floating-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.floating-badge.top[_ngcontent-%COMP%] {\n  top: 30px;\n  right: -20px;\n  animation-delay: 0.5s;\n}\n.floating-badge.bottom[_ngcontent-%COMP%] {\n  bottom: 50px;\n  left: -20px;\n  animation-delay: 1s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n.featured-banner[_ngcontent-%COMP%] {\n  padding: 40px 0;\n  background-color: white;\n}\n.banner-wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-radius: 15px;\n  padding: 30px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n.banner-logos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 20px;\n}\n.logo-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  opacity: 0.7;\n  transition: all 0.3s;\n}\n.logo-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.banner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 0;\n}\n.banner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: #333;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n.section-subtitle-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 5px 15px;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n.how-it-works[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background-color: #fff;\n}\n.step-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  padding: 2.5rem 1.5rem;\n  height: 100%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n.step-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.step-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 8rem;\n  font-weight: 800;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.03);\n  z-index: -1;\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 154, 139, 0.1) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  transition: transform 0.3s;\n}\n.step-card[_ngcontent-%COMP%]:hover   .step-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.2) 0%,\n      rgba(255, 154, 139, 0.2) 100%);\n}\n.step-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--primary-color);\n}\n.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  font-weight: 600;\n  color: #333;\n}\n.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 0;\n  line-height: 1.6;\n}\n.step-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: -50px;\n  transform: translateY(-50%);\n  font-size: 2rem;\n  color: var(--primary-color);\n  opacity: 0.4;\n}\n.popular-dishes[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background-color: #f8f9fa;\n}\n.popular-dishes-slider[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 50px;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 20px 10px;\n}\n.swiper-button-next[_ngcontent-%COMP%], \n.swiper-button-prev[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  top: 50%;\n  color: var(--primary-color);\n}\n.swiper-button-next[_ngcontent-%COMP%]::after, \n.swiper-button-prev[_ngcontent-%COMP%]::after {\n  font-size: 18px;\n  font-weight: bold;\n}\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.dish-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.dish-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.dish-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.dish-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s;\n}\n.dish-image[_ngcontent-%COMP%]   .dish-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.dish-image[_ngcontent-%COMP%]   .dish-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  z-index: 1;\n}\n.dish-info[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dish-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.dish-rating[_ngcontent-%COMP%] {\n  color: #ffc107;\n  margin-bottom: 10px;\n}\n.dish-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.dish-rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n}\n.dish-rating[_ngcontent-%COMP%]   .dish-reviews[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  font-weight: normal;\n  margin-left: 5px;\n}\n.dish-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.dish-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dish-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: var(--primary-color);\n}\n.dish-price-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dish-price-action[_ngcontent-%COMP%]   .dish-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--primary-color);\n  font-size: 1.2rem;\n}\n.featured-categories[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background-color: white;\n}\n.category-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  height: 100%;\n  text-decoration: none;\n  color: #333;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n}\n.category-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -100%;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 154, 139, 0.1) 100%);\n  transition: all 0.5s ease;\n  z-index: 0;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.category-card[_ngcontent-%COMP%]:hover::before {\n  top: 0;\n  left: 0;\n}\n.category-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background-color: rgba(255, 107, 107, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n  transition: transform 0.3s;\n  position: relative;\n  z-index: 1;\n}\n.category-card[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background-color: rgba(255, 107, 107, 0.2);\n}\n.category-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--primary-color);\n}\n.category-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  transition: color 0.3s;\n  position: relative;\n  z-index: 1;\n}\n.category-count[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  position: relative;\n  z-index: 1;\n}\n.category-card.view-all[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 154, 139, 0.1) 100%);\n}\n.category-card.view-all[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  background-color: rgba(255, 107, 107, 0.2);\n}\n.category-card.view-all[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%] {\n  background-color: rgba(255, 107, 107, 0.3);\n}\n.app-promo[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 80px 0;\n  overflow: hidden;\n}\n.app-promo-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 20px;\n  padding: 50px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n}\n.app-promo-wrapper[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 107, 107, 0) 70%);\n  z-index: 0;\n}\n.app-mockup[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n.app-mockup[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  border-radius: 24px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);\n}\n.app-promo-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.app-promo-text[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #666;\n}\n.app-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 30px;\n}\n.app-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n}\n.app-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--success-color);\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n.app-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.app-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #333;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.app-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-right: 10px;\n}\n.app-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  opacity: 0.8;\n}\n.app-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n}\n.app-btn[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n  transform: translateY(-3px);\n  color: white;\n}\n.testimonials[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background-color: #f8f9fa;\n}\n.testimonials-slider[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  position: relative;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  padding: 30px;\n  height: 100%;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n}\n.testimonial-quote[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 2rem;\n  color: rgba(255, 107, 107, 0.1);\n}\n.testimonial-rating[_ngcontent-%COMP%] {\n  color: #ffc107;\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n.testimonial-text[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin-bottom: 20px;\n  color: #495057;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.testimonial-author[_ngcontent-%COMP%]   .author-image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 15px;\n  border: 3px solid rgba(255, 107, 107, 0.2);\n}\n.testimonial-author[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #333;\n}\n.testimonial-author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 0;\n  font-size: 0.9rem;\n}\n.newsletter-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background-color: white;\n}\n.newsletter-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      #ff9a8b 100%);\n  border-radius: 20px;\n  padding: 50px;\n  color: white;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.newsletter-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.newsletter-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.newsletter-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n  margin-bottom: 0;\n}\n.newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n.newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  padding: 15px 25px;\n  font-size: 1rem;\n}\n.newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n}\n.newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0 50px 50px 0;\n  padding: 0 30px;\n  font-weight: 600;\n  background-color: #fff;\n  color: var(--primary-color);\n  border: none;\n}\n.newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent-color);\n  color: #333;\n}\n.newsletter-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.newsletter-form[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: underline;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.7),\n      rgba(0, 0, 0, 0.7)),\n    url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074) no-repeat center center;\n  background-size: cover;\n  color: white;\n  padding: 100px 0;\n  text-align: center;\n  position: relative;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\n.cta-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n.cta-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.cta-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\n}\n@media (max-width: 991.98px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 120px 0 60px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .how-it-works[_ngcontent-%COMP%], \n   .featured-categories[_ngcontent-%COMP%], \n   .app-promo[_ngcontent-%COMP%], \n   .testimonials[_ngcontent-%COMP%], \n   .popular-dishes[_ngcontent-%COMP%] {\n    padding: 60px 0;\n  }\n  .app-promo-wrapper[_ngcontent-%COMP%], \n   .newsletter-wrapper[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n  .app-mockup[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n}\n@media (max-width: 767.98px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 100px 0 40px;\n    text-align: center;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .cta-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .how-it-works[_ngcontent-%COMP%], \n   .featured-categories[_ngcontent-%COMP%], \n   .app-promo[_ngcontent-%COMP%], \n   .testimonials[_ngcontent-%COMP%], \n   .popular-dishes[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .step-card[_ngcontent-%COMP%], \n   .category-card[_ngcontent-%COMP%], \n   .testimonial-card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    display: block;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    border-radius: 50px;\n    margin-bottom: 15px;\n  }\n  .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    border-radius: 50px;\n  }\n  .popular-dishes-slider[_ngcontent-%COMP%], \n   .testimonials-slider[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n/*# sourceMappingURL=home.component-4T54T3NQ.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- Hero Section with Video Background -->\r
<section class="hero-section">\r
  <div class="hero-overlay"></div>\r
  <div class="container">\r
    <div class="row align-items-center">\r
      <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">\r
        <h1 class="hero-title animate__animated animate__fadeInUp">Delicious Food Delivered \r
          <span class="text-accent">to Your Door</span>\r
        </h1>\r
        <p class="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">Discover the best restaurants in your area and enjoy a contactless delivery experience</p>\r
        <div class="hero-buttons animate__animated animate__fadeInUp animate__delay-1s">\r
          <a routerLink="/restaurants" class="btn btn-light btn-lg me-3 px-4 rounded-pill">\r
            <i class="fas fa-search me-2"></i> Browse Restaurants\r
          </a>\r
          <a *ngIf="!authService.isLoggedIn" routerLink="/auth/register" class="btn btn-outline-light btn-lg px-4 rounded-pill">\r
            <i class="fas fa-user-plus me-2"></i> Sign Up\r
          </a>\r
        </div>\r
        <div class="hero-stats animate__animated animate__fadeInUp animate__delay-2s">\r
          <div class="hero-stat-item">\r
            <i class="fas fa-utensils"></i>\r
            <div>\r
              <span class="count">500+</span>\r
              <span class="label">Restaurants</span>\r
            </div>\r
          </div>\r
          <div class="hero-stat-item">\r
            <i class="fas fa-biking"></i>\r
            <div>\r
              <span class="count">30min</span>\r
              <span class="label">Avg. Delivery</span>\r
            </div>\r
          </div>\r
          <div class="hero-stat-item">\r
            <i class="fas fa-smile"></i>\r
            <div>\r
              <span class="count">98%</span>\r
              <span class="label">Happy Customers</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-lg-6 d-none d-lg-block" data-aos="fade-left" data-aos-delay="300">\r
        <div class="hero-image-container">\r
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000" alt="Delicious Food" class="img-fluid hero-image">\r
          <div class="floating-badge top">\r
            <i class="fas fa-star"></i>\r
            <span>Top Rated</span>\r
          </div>\r
          <div class="floating-badge bottom">\r
            <i class="fas fa-medal"></i>\r
            <span>Premium Quality</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Featured Restaurants Banner -->\r
<section class="featured-banner">\r
  <div class="container">\r
    <div class="banner-wrapper" data-aos="fade-up">\r
      <div class="banner-logos">\r
        <div class="logo-item">\r
          <img src="https://i.imgur.com/8t2KkXx.png" alt="Restaurant Logo">\r
        </div>\r
        <div class="logo-item">\r
          <img src="https://i.imgur.com/YdyHiEH.png" alt="Restaurant Logo">\r
        </div>\r
        <div class="logo-item">\r
          <img src="https://i.imgur.com/j6eIcak.png" alt="Restaurant Logo">\r
        </div>\r
        <div class="logo-item">\r
          <img src="https://i.imgur.com/cJSNhPf.png" alt="Restaurant Logo">\r
        </div>\r
        <div class="logo-item">\r
          <img src="https://i.imgur.com/lYLCimP.png" alt="Restaurant Logo">\r
        </div>\r
      </div>\r
      <p>Trusted by <strong>500+</strong> restaurants nationwide</p>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- How It Works -->\r
<section class="how-it-works">\r
  <div class="container">\r
    <div class="text-center mb-5" data-aos="fade-up">\r
      <p class="section-subtitle-badge">SIMPLE & EASY</p>\r
      <h2 class="section-title">How It <span class="text-primary">Works</span></h2>\r
      <p class="section-subtitle">Order your favorite meal in 3 simple steps</p>\r
    </div>\r
    \r
    <div class="row g-4">\r
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">\r
        <div class="step-card">\r
          <div class="step-number">01</div>\r
          <div class="step-icon">\r
            <i class="fas fa-store"></i>\r
          </div>\r
          <h3>Choose a Restaurant</h3>\r
          <p>Browse through our wide selection of restaurants and cuisines available in your area</p>\r
          <div class="step-arrow d-none d-md-block">\r
            <i class="fas fa-long-arrow-alt-right"></i>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">\r
        <div class="step-card">\r
          <div class="step-number">02</div>\r
          <div class="step-icon">\r
            <i class="fas fa-hamburger"></i>\r
          </div>\r
          <h3>Select Your Meal</h3>\r
          <p>Explore menus and add your favorite dishes to your cart with customization options</p>\r
          <div class="step-arrow d-none d-md-block">\r
            <i class="fas fa-long-arrow-alt-right"></i>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">\r
        <div class="step-card">\r
          <div class="step-number">03</div>\r
          <div class="step-icon">\r
            <i class="fas fa-biking"></i>\r
          </div>\r
          <h3>Fast Delivery</h3>\r
          <p>Get your food delivered to your doorstep in no time with our reliable delivery service</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Popular Dishes Carousel -->\r
<section class="popular-dishes">\r
  <div class="container">\r
    <div class="text-center mb-5" data-aos="fade-up">\r
      <p class="section-subtitle-badge">TASTY CHOICES</p>\r
      <h2 class="section-title">Popular <span class="text-primary">Dishes</span></h2>\r
      <p class="section-subtitle">Explore the most ordered dishes from our top restaurants</p>\r
    </div>\r
\r
    <div class="popular-dishes-slider" data-aos="fade-up" data-aos-delay="100">\r
      <div class="swiper-container">\r
        <div class="swiper-wrapper">\r
          <div class="swiper-slide">\r
            <div class="dish-card">\r
              <div class="dish-image">\r
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400" alt="Pizza">\r
                <div class="dish-tag">Bestseller</div>\r
              </div>\r
              <div class="dish-info">\r
                <h4>Pepperoni Pizza</h4>\r
                <div class="dish-rating">\r
                  <i class="fas fa-star"></i>\r
                  <span>4.8</span>\r
                  <span class="dish-reviews">(124 reviews)</span>\r
                </div>\r
                <div class="dish-meta">\r
                  <span><i class="fas fa-fire"></i> Italian</span>\r
                  <span><i class="fas fa-clock"></i> 30min</span>\r
                </div>\r
                <div class="dish-price-action">\r
                  <div class="dish-price">$14.99</div>\r
                  <a routerLink="/restaurants" class="btn btn-sm btn-primary rounded-pill">Order Now</a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="swiper-slide">\r
            <div class="dish-card">\r
              <div class="dish-image">\r
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400" alt="Burger">\r
                <div class="dish-tag">Hot</div>\r
              </div>\r
              <div class="dish-info">\r
                <h4>Classic Cheeseburger</h4>\r
                <div class="dish-rating">\r
                  <i class="fas fa-star"></i>\r
                  <span>4.7</span>\r
                  <span class="dish-reviews">(98 reviews)</span>\r
                </div>\r
                <div class="dish-meta">\r
                  <span><i class="fas fa-fire"></i> American</span>\r
                  <span><i class="fas fa-clock"></i> 25min</span>\r
                </div>\r
                <div class="dish-price-action">\r
                  <div class="dish-price">$12.99</div>\r
                  <a routerLink="/restaurants" class="btn btn-sm btn-primary rounded-pill">Order Now</a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="swiper-slide">\r
            <div class="dish-card">\r
              <div class="dish-image">\r
                <img src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400" alt="Sushi">\r
                <div class="dish-tag">Premium</div>\r
              </div>\r
              <div class="dish-info">\r
                <h4>Sushi Platter</h4>\r
                <div class="dish-rating">\r
                  <i class="fas fa-star"></i>\r
                  <span>4.9</span>\r
                  <span class="dish-reviews">(156 reviews)</span>\r
                </div>\r
                <div class="dish-meta">\r
                  <span><i class="fas fa-fire"></i> Japanese</span>\r
                  <span><i class="fas fa-clock"></i> 35min</span>\r
                </div>\r
                <div class="dish-price-action">\r
                  <div class="dish-price">$24.99</div>\r
                  <a routerLink="/restaurants" class="btn btn-sm btn-primary rounded-pill">Order Now</a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="swiper-slide">\r
            <div class="dish-card">\r
              <div class="dish-image">\r
                <img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=400" alt="Pasta">\r
                <div class="dish-tag">New</div>\r
              </div>\r
              <div class="dish-info">\r
                <h4>Creamy Pasta Alfredo</h4>\r
                <div class="dish-rating">\r
                  <i class="fas fa-star"></i>\r
                  <span>4.6</span>\r
                  <span class="dish-reviews">(87 reviews)</span>\r
                </div>\r
                <div class="dish-meta">\r
                  <span><i class="fas fa-fire"></i> Italian</span>\r
                  <span><i class="fas fa-clock"></i> 25min</span>\r
                </div>\r
                <div class="dish-price-action">\r
                  <div class="dish-price">$16.99</div>\r
                  <a routerLink="/restaurants" class="btn btn-sm btn-primary rounded-pill">Order Now</a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="swiper-pagination"></div>\r
      </div>\r
      <div class="swiper-button-next"></div>\r
      <div class="swiper-button-prev"></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Featured Categories -->\r
<section class="featured-categories">\r
  <div class="container">\r
    <div class="text-center mb-5" data-aos="fade-up">\r
      <p class="section-subtitle-badge">EXPLORE MORE</p>\r
      <h2 class="section-title">Food <span class="text-primary">Categories</span></h2>\r
      <p class="section-subtitle">Discover restaurants by cuisine type</p>\r
    </div>\r
    \r
    <div class="row g-4">\r
      <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="100">\r
        <a routerLink="/restaurants" class="category-card">\r
          <div class="category-icon">\r
            <i class="fas fa-bacon"></i>\r
          </div>\r
          <h4>Breakfast</h4>\r
          <span class="category-count">42 places</span>\r
        </a>\r
      </div>\r
      \r
      <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="200">\r
        <a routerLink="/restaurants" class="category-card">\r
          <div class="category-icon">\r
            <i class="fas fa-coffee"></i>\r
          </div>\r
          <h4>Coffee</h4>\r
          <span class="category-count">37 places</span>\r
        </a>\r
      </div>\r
      \r
      <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="300">\r
        <a routerLink="/restaurants" class="category-card">\r
          <div class="category-icon">\r
            <i class="fas fa-pizza-slice"></i>\r
          </div>\r
          <h4>Pizza</h4>\r
          <span class="category-count">65 places</span>\r
        </a>\r
      </div>\r
      \r
      <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">\r
        <a routerLink="/restaurants" class="category-card">\r
          <div class="category-icon">\r
            <i class="fas fa-fish"></i>\r
          </div>\r
          <h4>Sushi</h4>\r
          <span class="category-count">28 places</span>\r
        </a>\r
      </div>\r
      \r
      <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="500">\r
        <a routerLink="/restaurants" class="category-card">\r
          <div class="category-icon">\r
            <i class="fas fa-cocktail"></i>\r
          </div>\r
          <h4>Drinks</h4>\r
          <span class="category-count">43 places</span>\r
        </a>\r
      </div>\r
      \r
      <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="600">\r
        <a routerLink="/restaurants" class="category-card view-all">\r
          <div class="category-icon">\r
            <i class="fas fa-th-large"></i>\r
          </div>\r
          <h4>View All</h4>\r
          <span class="category-count">500+ places</span>\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- App Promotion -->\r
<section class="app-promo">\r
  <div class="container">\r
    <div class="app-promo-wrapper" data-aos="fade-up">\r
      <div class="row align-items-center">\r
        <div class="col-lg-6 mb-4 mb-lg-0">\r
          <div class="app-mockup">\r
            <img src="https://i.imgur.com/F5LbV9Y.png" alt="Mobile App" class="img-fluid">\r
          </div>\r
        </div>\r
        <div class="col-lg-6">\r
          <div class="app-promo-content">\r
            <p class="section-subtitle-badge">MOBILE EXPERIENCE</p>\r
            <h2 class="section-title">Download Our <span class="text-primary">Mobile App</span></h2>\r
            <p class="app-promo-text">Get the best food ordering experience on your mobile device. Order food, track delivery in real-time, and enjoy exclusive app-only offers and discounts.</p>\r
            <ul class="app-features">\r
              <li><i class="fas fa-check-circle"></i> Fast and secure checkout process</li>\r
              <li><i class="fas fa-check-circle"></i> Real-time order tracking</li>\r
              <li><i class="fas fa-check-circle"></i> Exclusive app-only offers</li>\r
              <li><i class="fas fa-check-circle"></i> Save your favorite restaurants and meals</li>\r
            </ul>\r
            <div class="app-buttons">\r
              <a href="#" class="app-btn apple">\r
                <i class="fab fa-apple"></i>\r
                <div>\r
                  <span>Download on the</span>\r
                  <strong>App Store</strong>\r
                </div>\r
              </a>\r
              <a href="#" class="app-btn google">\r
                <i class="fab fa-google-play"></i>\r
                <div>\r
                  <span>Get it on</span>\r
                  <strong>Google Play</strong>\r
                </div>\r
              </a>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Testimonials -->\r
<section class="testimonials">\r
  <div class="container">\r
    <div class="text-center mb-5" data-aos="fade-up">\r
      <p class="section-subtitle-badge">CUSTOMER STORIES</p>\r
      <h2 class="section-title">What Our <span class="text-primary">Customers Say</span></h2>\r
      <p class="section-subtitle">Read testimonials from our satisfied customers</p>\r
    </div>\r
    \r
    <div class="testimonials-slider" data-aos="fade-up" data-aos-delay="100">\r
      <div class="swiper-container">\r
        <div class="swiper-wrapper">\r
          <div class="swiper-slide">\r
            <div class="testimonial-card">\r
              <div class="testimonial-quote"><i class="fas fa-quote-left"></i></div>\r
              <div class="testimonial-rating">\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
              </div>\r
              <p class="testimonial-text">The food delivery was super fast and the food was still hot when it arrived. The app is so easy to use and the customer service is excellent. Definitely my go-to food ordering app!</p>\r
              <div class="testimonial-author">\r
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Customer" class="author-image">\r
                <div>\r
                  <h5>Sarah Johnson</h5>\r
                  <p>Regular Customer</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="swiper-slide">\r
            <div class="testimonial-card">\r
              <div class="testimonial-quote"><i class="fas fa-quote-left"></i></div>\r
              <div class="testimonial-rating">\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
              </div>\r
              <p class="testimonial-text">I love the variety of restaurants available. As a busy professional, this app saves me so much time. The delivery is always on time and the food is exactly as described. Highly recommend!</p>\r
              <div class="testimonial-author">\r
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" class="author-image">\r
                <div>\r
                  <h5>Michael Brown</h5>\r
                  <p>Food Enthusiast</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="swiper-slide">\r
            <div class="testimonial-card">\r
              <div class="testimonial-quote"><i class="fas fa-quote-left"></i></div>\r
              <div class="testimonial-rating">\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star"></i>\r
                <i class="fas fa-star-half-alt"></i>\r
              </div>\r
              <p class="testimonial-text">I've tried many food delivery services and this is by far the best. The app is user-friendly, the selection is great, and the delivery drivers are always polite and professional.</p>\r
              <div class="testimonial-author">\r
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" class="author-image">\r
                <div>\r
                  <h5>Emily Davis</h5>\r
                  <p>Busy Professional</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="swiper-pagination"></div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Newsletter Section -->\r
<section class="newsletter-section">\r
  <div class="container">\r
    <div class="newsletter-wrapper" data-aos="fade-up">\r
      <div class="row align-items-center">\r
        <div class="col-lg-6">\r
          <h2>Get <span class="text-primary">10% Off</span> Your First Order!</h2>\r
          <p>Subscribe to our newsletter and receive exclusive offers, updates, and promotions directly to your inbox.</p>\r
        </div>\r
        <div class="col-lg-6">\r
          <form class="newsletter-form">\r
            <div class="input-group">\r
              <input type="email" class="form-control" placeholder="Enter your email address">\r
              <button class="btn btn-primary" type="submit">Subscribe Now</button>\r
            </div>\r
            <div class="form-check mt-2">\r
              <input class="form-check-input" type="checkbox" id="privacyCheck">\r
              <label class="form-check-label" for="privacyCheck">\r
                I agree to the <a href="#">Privacy Policy</a>\r
              </label>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- CTA Section -->\r
<section class="cta-section">\r
  <div class="container text-center" data-aos="fade-up">\r
    <h2 class="cta-title animate__animated animate__fadeInUp">Ready to Order Delicious Food?</h2>\r
    <p class="cta-subtitle mb-4 animate__animated animate__fadeInUp animate__delay-1s">Browse our restaurants and place your order now</p>\r
    <a routerLink="/restaurants" class="btn btn-light btn-lg rounded-pill animate__animated animate__fadeInUp animate__delay-2s">\r
      <i class="fas fa-utensils me-2"></i> Start Ordering\r
    </a>\r
  </div>\r
</section> `, styles: ['/* src/app/features/home/home.component.scss */\n.hero-section {\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070) no-repeat center center;\n  background-size: cover;\n  color: white;\n  padding: 120px 0 80px;\n  position: relative;\n  overflow: hidden;\n  margin-top: -76px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.hero-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n}\n.hero-section .container {\n  position: relative;\n  z-index: 2;\n}\n.hero-title {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\n.hero-title .text-accent {\n  color: var(--primary-color);\n  position: relative;\n  display: inline-block;\n}\n.hero-title .text-accent::after {\n  content: "";\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background-color: var(--primary-color);\n  opacity: 0.3;\n  border-radius: 4px;\n  z-index: -1;\n}\n.hero-subtitle {\n  font-size: 1.25rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n  font-weight: 400;\n  max-width: 600px;\n}\n.hero-buttons {\n  margin-bottom: 2rem;\n}\n.hero-buttons .btn {\n  padding: 12px 30px;\n  font-weight: 600;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.hero-buttons .btn:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\n}\n.hero-stats {\n  display: flex;\n  gap: 30px;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n.hero-stat-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hero-stat-item i {\n  font-size: 2rem;\n  color: var(--primary-color);\n}\n.hero-stat-item .count {\n  display: block;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.hero-stat-item .label {\n  display: block;\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.hero-image-container {\n  position: relative;\n  perspective: 1000px;\n}\n.hero-image {\n  border-radius: 20px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n  transform: perspective(1000px) rotateY(-10deg);\n  transition: transform 0.5s;\n}\n.hero-image:hover {\n  transform: perspective(1000px) rotateY(0deg);\n}\n.floating-badge {\n  position: absolute;\n  padding: 10px 20px;\n  background-color: white;\n  border-radius: 30px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #333;\n  font-weight: 600;\n  animation: float 3s ease-in-out infinite;\n}\n.floating-badge i {\n  color: var(--primary-color);\n}\n.floating-badge.top {\n  top: 30px;\n  right: -20px;\n  animation-delay: 0.5s;\n}\n.floating-badge.bottom {\n  bottom: 50px;\n  left: -20px;\n  animation-delay: 1s;\n}\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n.featured-banner {\n  padding: 40px 0;\n  background-color: white;\n}\n.banner-wrapper {\n  background-color: #f8f9fa;\n  border-radius: 15px;\n  padding: 30px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n.banner-logos {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 20px;\n}\n.logo-item img {\n  height: 40px;\n  opacity: 0.7;\n  transition: all 0.3s;\n}\n.logo-item img:hover {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.banner-wrapper p {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 0;\n}\n.banner-wrapper p strong {\n  color: var(--primary-color);\n}\n.section-title {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  color: #333;\n}\n.section-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n.section-subtitle-badge {\n  display: inline-block;\n  background-color: rgba(255, 107, 107, 0.1);\n  color: var(--primary-color);\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 5px 15px;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n}\n.text-primary {\n  color: var(--primary-color) !important;\n}\n.how-it-works {\n  padding: 80px 0;\n  background-color: #fff;\n}\n.step-card {\n  background-color: white;\n  border-radius: 12px;\n  padding: 2.5rem 1.5rem;\n  height: 100%;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n.step-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n}\n.step-number {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 8rem;\n  font-weight: 800;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.03);\n  z-index: -1;\n}\n.step-icon {\n  width: 90px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 154, 139, 0.1) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  transition: transform 0.3s;\n}\n.step-card:hover .step-icon {\n  transform: scale(1.1);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.2) 0%,\n      rgba(255, 154, 139, 0.2) 100%);\n}\n.step-icon i {\n  font-size: 2.5rem;\n  color: var(--primary-color);\n}\n.step-card h3 {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  font-weight: 600;\n  color: #333;\n}\n.step-card p {\n  color: #6c757d;\n  margin-bottom: 0;\n  line-height: 1.6;\n}\n.step-arrow {\n  position: absolute;\n  top: 50%;\n  right: -50px;\n  transform: translateY(-50%);\n  font-size: 2rem;\n  color: var(--primary-color);\n  opacity: 0.4;\n}\n.popular-dishes {\n  padding: 80px 0;\n  background-color: #f8f9fa;\n}\n.popular-dishes-slider {\n  position: relative;\n  padding: 0 50px;\n}\n.swiper-container {\n  overflow: hidden;\n  padding: 20px 10px;\n}\n.swiper-button-next,\n.swiper-button-prev {\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  top: 50%;\n  color: var(--primary-color);\n}\n.swiper-button-next::after,\n.swiper-button-prev::after {\n  font-size: 18px;\n  font-weight: bold;\n}\n.swiper-pagination-bullet-active {\n  background-color: var(--primary-color);\n}\n.dish-card {\n  background-color: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.dish-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.dish-image {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.dish-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s;\n}\n.dish-image .dish-card:hover img {\n  transform: scale(1.05);\n}\n.dish-image .dish-tag {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background-color: var(--primary-color);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  z-index: 1;\n}\n.dish-info {\n  padding: 20px;\n}\n.dish-info h4 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.dish-rating {\n  color: #ffc107;\n  margin-bottom: 10px;\n}\n.dish-rating i {\n  margin-right: 5px;\n}\n.dish-rating span {\n  color: #333;\n  font-weight: 600;\n}\n.dish-rating .dish-reviews {\n  color: #6c757d;\n  font-size: 0.9rem;\n  font-weight: normal;\n  margin-left: 5px;\n}\n.dish-meta {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.dish-meta span {\n  display: flex;\n  align-items: center;\n}\n.dish-meta span i {\n  margin-right: 5px;\n  color: var(--primary-color);\n}\n.dish-price-action {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dish-price-action .dish-price {\n  font-weight: 700;\n  color: var(--primary-color);\n  font-size: 1.2rem;\n}\n.featured-categories {\n  padding: 80px 0;\n  background-color: white;\n}\n.category-card {\n  background-color: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  height: 100%;\n  text-decoration: none;\n  color: #333;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n}\n.category-card::before {\n  content: "";\n  position: absolute;\n  top: -100%;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 154, 139, 0.1) 100%);\n  transition: all 0.5s ease;\n  z-index: 0;\n}\n.category-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.category-card:hover::before {\n  top: 0;\n  left: 0;\n}\n.category-icon {\n  width: 70px;\n  height: 70px;\n  background-color: rgba(255, 107, 107, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n  transition: transform 0.3s;\n  position: relative;\n  z-index: 1;\n}\n.category-card:hover .category-icon {\n  transform: scale(1.1);\n  background-color: rgba(255, 107, 107, 0.2);\n}\n.category-icon i {\n  font-size: 1.75rem;\n  color: var(--primary-color);\n}\n.category-card h4 {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  transition: color 0.3s;\n  position: relative;\n  z-index: 1;\n}\n.category-count {\n  font-size: 0.85rem;\n  color: #6c757d;\n  position: relative;\n  z-index: 1;\n}\n.category-card.view-all {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 154, 139, 0.1) 100%);\n}\n.category-card.view-all .category-icon {\n  background-color: rgba(255, 107, 107, 0.2);\n}\n.category-card.view-all:hover .category-icon {\n  background-color: rgba(255, 107, 107, 0.3);\n}\n.app-promo {\n  background-color: white;\n  padding: 80px 0;\n  overflow: hidden;\n}\n.app-promo-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 20px;\n  padding: 50px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n  position: relative;\n  overflow: hidden;\n}\n.app-promo-wrapper::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 107, 107, 0.1) 0%,\n      rgba(255, 107, 107, 0) 70%);\n  z-index: 0;\n}\n.app-mockup {\n  position: relative;\n  text-align: center;\n}\n.app-mockup img {\n  max-width: 300px;\n  border-radius: 24px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);\n}\n.app-promo-content {\n  position: relative;\n  z-index: 1;\n}\n.app-promo-text {\n  margin-bottom: 20px;\n  color: #666;\n}\n.app-features {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 30px;\n}\n.app-features li {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n}\n.app-features li i {\n  color: var(--success-color);\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n.app-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.app-btn {\n  display: flex;\n  align-items: center;\n  background-color: #333;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.app-btn i {\n  font-size: 2rem;\n  margin-right: 10px;\n}\n.app-btn span {\n  display: block;\n  font-size: 0.7rem;\n  opacity: 0.8;\n}\n.app-btn strong {\n  display: block;\n  font-size: 1.1rem;\n}\n.app-btn:hover {\n  background-color: #000;\n  transform: translateY(-3px);\n  color: white;\n}\n.testimonials {\n  padding: 80px 0;\n  background-color: #f8f9fa;\n}\n.testimonials-slider {\n  padding: 0 50px;\n  position: relative;\n}\n.testimonial-card {\n  background-color: white;\n  border-radius: 12px;\n  padding: 30px;\n  height: 100%;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n}\n.testimonial-quote {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 2rem;\n  color: rgba(255, 107, 107, 0.1);\n}\n.testimonial-rating {\n  color: #ffc107;\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n.testimonial-text {\n  font-style: italic;\n  margin-bottom: 20px;\n  color: #495057;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.testimonial-author {\n  display: flex;\n  align-items: center;\n}\n.testimonial-author .author-image {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 15px;\n  border: 3px solid rgba(255, 107, 107, 0.2);\n}\n.testimonial-author h5 {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #333;\n}\n.testimonial-author p {\n  color: #6c757d;\n  margin-bottom: 0;\n  font-size: 0.9rem;\n}\n.newsletter-section {\n  padding: 80px 0;\n  background-color: white;\n}\n.newsletter-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      #ff9a8b 100%);\n  border-radius: 20px;\n  padding: 50px;\n  color: white;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.newsletter-wrapper h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.newsletter-wrapper h2 .text-primary {\n  color: #fff !important;\n}\n.newsletter-wrapper p {\n  font-size: 1.1rem;\n  opacity: 0.9;\n  margin-bottom: 0;\n}\n.newsletter-form .input-group {\n  border-radius: 50px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n.newsletter-form .input-group .form-control {\n  border: none;\n  padding: 15px 25px;\n  font-size: 1rem;\n}\n.newsletter-form .input-group .form-control::placeholder {\n  color: #aaa;\n}\n.newsletter-form .input-group .btn {\n  border-radius: 0 50px 50px 0;\n  padding: 0 30px;\n  font-weight: 600;\n  background-color: #fff;\n  color: var(--primary-color);\n  border: none;\n}\n.newsletter-form .input-group .btn:hover {\n  background-color: var(--accent-color);\n  color: #333;\n}\n.newsletter-form .form-check {\n  color: rgba(255, 255, 255, 0.9);\n}\n.newsletter-form .form-check a {\n  color: #fff;\n  text-decoration: underline;\n}\n.cta-section {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.7),\n      rgba(0, 0, 0, 0.7)),\n    url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074) no-repeat center center;\n  background-size: cover;\n  color: white;\n  padding: 100px 0;\n  text-align: center;\n  position: relative;\n}\n.cta-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\n.cta-subtitle {\n  font-size: 1.25rem;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n.cta-section .btn {\n  padding: 15px 30px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.cta-section .btn:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\n}\n@media (max-width: 991.98px) {\n  .hero-section {\n    padding: 120px 0 60px;\n  }\n  .hero-title {\n    font-size: 2.5rem;\n  }\n  .how-it-works,\n  .featured-categories,\n  .app-promo,\n  .testimonials,\n  .popular-dishes {\n    padding: 60px 0;\n  }\n  .app-promo-wrapper,\n  .newsletter-wrapper {\n    padding: 30px;\n  }\n  .app-mockup img {\n    max-width: 250px;\n  }\n}\n@media (max-width: 767.98px) {\n  .hero-section {\n    padding: 100px 0 40px;\n    text-align: center;\n  }\n  .hero-title {\n    font-size: 2rem;\n  }\n  .hero-stats {\n    justify-content: center;\n  }\n  .section-title {\n    font-size: 1.75rem;\n  }\n  .cta-title {\n    font-size: 2rem;\n  }\n  .how-it-works,\n  .featured-categories,\n  .app-promo,\n  .testimonials,\n  .popular-dishes {\n    padding: 40px 0;\n  }\n  .step-card,\n  .category-card,\n  .testimonial-card {\n    margin-bottom: 20px;\n  }\n  .newsletter-form .input-group {\n    display: block;\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .newsletter-form .input-group .form-control {\n    border-radius: 50px;\n    margin-bottom: 15px;\n  }\n  .newsletter-form .input-group .btn {\n    display: block;\n    width: 100%;\n    border-radius: 50px;\n  }\n  .popular-dishes-slider,\n  .testimonials-slider {\n    padding: 0 20px;\n  }\n}\n/*# sourceMappingURL=home.component-4T54T3NQ.css.map */\n'] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 15 });
})();

// src/app/features/home/home.routes.ts
var HOME_ROUTES = [
  {
    path: "",
    component: HomeComponent,
    title: "QualiFoodie - Order Food Online"
  }
];
export {
  HOME_ROUTES
};
//# sourceMappingURL=chunk-72ZWUDYN.js.map
