function _mergeNamespaces($, et) {
  for (var tt = 0; tt < et.length; tt++) {
    const rt = et[tt];
    if (typeof rt != 'string' && !Array.isArray(rt)) {
      for (const nt in rt)
        if (nt !== 'default' && !(nt in $)) {
          const ot = Object.getOwnPropertyDescriptor(rt, nt);
          ot && Object.defineProperty($, nt, ot.get ? ot : { enumerable: !0, get: () => rt[nt] });
        }
    }
  }
  return Object.freeze(Object.defineProperty($, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const et = document.createElement('link').relList;
  if (et && et.supports && et.supports('modulepreload')) return;
  for (const nt of document.querySelectorAll('link[rel="modulepreload"]')) rt(nt);
  new MutationObserver((nt) => {
    for (const ot of nt)
      if (ot.type === 'childList')
        for (const it of ot.addedNodes)
          it.tagName === 'LINK' && it.rel === 'modulepreload' && rt(it);
  }).observe(document, { childList: !0, subtree: !0 });
  function tt(nt) {
    const ot = {};
    return (
      nt.integrity && (ot.integrity = nt.integrity),
      nt.referrerpolicy && (ot.referrerPolicy = nt.referrerpolicy),
      nt.crossorigin === 'use-credentials'
        ? (ot.credentials = 'include')
        : nt.crossorigin === 'anonymous'
        ? (ot.credentials = 'omit')
        : (ot.credentials = 'same-origin'),
      ot
    );
  }
  function rt(nt) {
    if (nt.ep) return;
    nt.ep = !0;
    const ot = tt(nt);
    fetch(nt.href, ot);
  }
})();
var commonjsGlobal =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function getDefaultExportFromCjs($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, 'default') ? $.default : $;
}
var jsxRuntimeExports = {},
  jsxRuntime = {
    get exports() {
      return jsxRuntimeExports;
    },
    set exports($) {
      jsxRuntimeExports = $;
    }
  },
  reactJsxRuntime_production_min = {},
  reactExports = {},
  react = {
    get exports() {
      return reactExports;
    },
    set exports($) {
      reactExports = $;
    }
  },
  react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l$5 = Symbol.for('react.element'),
  n$6 = Symbol.for('react.portal'),
  p$7 = Symbol.for('react.fragment'),
  q$6 = Symbol.for('react.strict_mode'),
  r$5 = Symbol.for('react.profiler'),
  t$6 = Symbol.for('react.provider'),
  u$4 = Symbol.for('react.context'),
  v$5 = Symbol.for('react.forward_ref'),
  w$3 = Symbol.for('react.suspense'),
  x$2 = Symbol.for('react.memo'),
  y$2 = Symbol.for('react.lazy'),
  z$3 = Symbol.iterator;
function A$3($) {
  return $ === null || typeof $ != 'object'
    ? null
    : (($ = (z$3 && $[z$3]) || $['@@iterator']), typeof $ == 'function' ? $ : null);
}
var B$2 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  C$1 = Object.assign,
  D$2 = {};
function E$2($, et, tt) {
  (this.props = $), (this.context = et), (this.refs = D$2), (this.updater = tt || B$2);
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function ($, et) {
  if (typeof $ != 'object' && typeof $ != 'function' && $ != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, $, et, 'setState');
};
E$2.prototype.forceUpdate = function ($) {
  this.updater.enqueueForceUpdate(this, $, 'forceUpdate');
};
function F$1() {}
F$1.prototype = E$2.prototype;
function G$2($, et, tt) {
  (this.props = $), (this.context = et), (this.refs = D$2), (this.updater = tt || B$2);
}
var H$2 = (G$2.prototype = new F$1());
H$2.constructor = G$2;
C$1(H$2, E$2.prototype);
H$2.isPureReactComponent = !0;
var I$2 = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K$1 = { current: null },
  L$2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M$2($, et, tt) {
  var rt,
    nt = {},
    ot = null,
    it = null;
  if (et != null)
    for (rt in (et.ref !== void 0 && (it = et.ref), et.key !== void 0 && (ot = '' + et.key), et))
      J.call(et, rt) && !L$2.hasOwnProperty(rt) && (nt[rt] = et[rt]);
  var at = arguments.length - 2;
  if (at === 1) nt.children = tt;
  else if (1 < at) {
    for (var st = Array(at), lt = 0; lt < at; lt++) st[lt] = arguments[lt + 2];
    nt.children = st;
  }
  if ($ && $.defaultProps)
    for (rt in ((at = $.defaultProps), at)) nt[rt] === void 0 && (nt[rt] = at[rt]);
  return { $$typeof: l$5, type: $, key: ot, ref: it, props: nt, _owner: K$1.current };
}
function N$2($, et) {
  return { $$typeof: l$5, type: $.type, key: et, ref: $.ref, props: $.props, _owner: $._owner };
}
function O$2($) {
  return typeof $ == 'object' && $ !== null && $.$$typeof === l$5;
}
function escape$2($) {
  var et = { '=': '=0', ':': '=2' };
  return (
    '$' +
    $.replace(/[=:]/g, function (tt) {
      return et[tt];
    })
  );
}
var P$2 = /\/+/g;
function Q$2($, et) {
  return typeof $ == 'object' && $ !== null && $.key != null
    ? escape$2('' + $.key)
    : et.toString(36);
}
function R$2($, et, tt, rt, nt) {
  var ot = typeof $;
  (ot === 'undefined' || ot === 'boolean') && ($ = null);
  var it = !1;
  if ($ === null) it = !0;
  else
    switch (ot) {
      case 'string':
      case 'number':
        it = !0;
        break;
      case 'object':
        switch ($.$$typeof) {
          case l$5:
          case n$6:
            it = !0;
        }
    }
  if (it)
    return (
      (it = $),
      (nt = nt(it)),
      ($ = rt === '' ? '.' + Q$2(it, 0) : rt),
      I$2(nt)
        ? ((tt = ''),
          $ != null && (tt = $.replace(P$2, '$&/') + '/'),
          R$2(nt, et, tt, '', function (lt) {
            return lt;
          }))
        : nt != null &&
          (O$2(nt) &&
            (nt = N$2(
              nt,
              tt +
                (!nt.key || (it && it.key === nt.key)
                  ? ''
                  : ('' + nt.key).replace(P$2, '$&/') + '/') +
                $
            )),
          et.push(nt)),
      1
    );
  if (((it = 0), (rt = rt === '' ? '.' : rt + ':'), I$2($)))
    for (var at = 0; at < $.length; at++) {
      ot = $[at];
      var st = rt + Q$2(ot, at);
      it += R$2(ot, et, tt, st, nt);
    }
  else if (((st = A$3($)), typeof st == 'function'))
    for ($ = st.call($), at = 0; !(ot = $.next()).done; )
      (ot = ot.value), (st = rt + Q$2(ot, at++)), (it += R$2(ot, et, tt, st, nt));
  else if (ot === 'object')
    throw (
      ((et = String($)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (et === '[object Object]' ? 'object with keys {' + Object.keys($).join(', ') + '}' : et) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return it;
}
function S$2($, et, tt) {
  if ($ == null) return $;
  var rt = [],
    nt = 0;
  return (
    R$2($, rt, '', '', function (ot) {
      return et.call(tt, ot, nt++);
    }),
    rt
  );
}
function T$1($) {
  if ($._status === -1) {
    var et = $._result;
    (et = et()),
      et.then(
        function (tt) {
          ($._status === 0 || $._status === -1) && (($._status = 1), ($._result = tt));
        },
        function (tt) {
          ($._status === 0 || $._status === -1) && (($._status = 2), ($._result = tt));
        }
      ),
      $._status === -1 && (($._status = 0), ($._result = et));
  }
  if ($._status === 1) return $._result.default;
  throw $._result;
}
var U$2 = { current: null },
  V$1 = { transition: null },
  W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = {
  map: S$2,
  forEach: function ($, et, tt) {
    S$2(
      $,
      function () {
        et.apply(this, arguments);
      },
      tt
    );
  },
  count: function ($) {
    var et = 0;
    return (
      S$2($, function () {
        et++;
      }),
      et
    );
  },
  toArray: function ($) {
    return (
      S$2($, function (et) {
        return et;
      }) || []
    );
  },
  only: function ($) {
    if (!O$2($))
      throw Error('React.Children.only expected to receive a single React element child.');
    return $;
  }
};
react_production_min.Component = E$2;
react_production_min.Fragment = p$7;
react_production_min.Profiler = r$5;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$6;
react_production_min.Suspense = w$3;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function ($, et, tt) {
  if ($ == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + $ + '.'
    );
  var rt = C$1({}, $.props),
    nt = $.key,
    ot = $.ref,
    it = $._owner;
  if (et != null) {
    if (
      (et.ref !== void 0 && ((ot = et.ref), (it = K$1.current)),
      et.key !== void 0 && (nt = '' + et.key),
      $.type && $.type.defaultProps)
    )
      var at = $.type.defaultProps;
    for (st in et)
      J.call(et, st) &&
        !L$2.hasOwnProperty(st) &&
        (rt[st] = et[st] === void 0 && at !== void 0 ? at[st] : et[st]);
  }
  var st = arguments.length - 2;
  if (st === 1) rt.children = tt;
  else if (1 < st) {
    at = Array(st);
    for (var lt = 0; lt < st; lt++) at[lt] = arguments[lt + 2];
    rt.children = at;
  }
  return { $$typeof: l$5, type: $.type, key: nt, ref: ot, props: rt, _owner: it };
};
react_production_min.createContext = function ($) {
  return (
    ($ = {
      $$typeof: u$4,
      _currentValue: $,
      _currentValue2: $,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    ($.Provider = { $$typeof: t$6, _context: $ }),
    ($.Consumer = $)
  );
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function ($) {
  var et = M$2.bind(null, $);
  return (et.type = $), et;
};
react_production_min.createRef = function () {
  return { current: null };
};
react_production_min.forwardRef = function ($) {
  return { $$typeof: v$5, render: $ };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function ($) {
  return { $$typeof: y$2, _payload: { _status: -1, _result: $ }, _init: T$1 };
};
react_production_min.memo = function ($, et) {
  return { $$typeof: x$2, type: $, compare: et === void 0 ? null : et };
};
react_production_min.startTransition = function ($) {
  var et = V$1.transition;
  V$1.transition = {};
  try {
    $();
  } finally {
    V$1.transition = et;
  }
};
react_production_min.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
react_production_min.useCallback = function ($, et) {
  return U$2.current.useCallback($, et);
};
react_production_min.useContext = function ($) {
  return U$2.current.useContext($);
};
react_production_min.useDebugValue = function () {};
react_production_min.useDeferredValue = function ($) {
  return U$2.current.useDeferredValue($);
};
react_production_min.useEffect = function ($, et) {
  return U$2.current.useEffect($, et);
};
react_production_min.useId = function () {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function ($, et, tt) {
  return U$2.current.useImperativeHandle($, et, tt);
};
react_production_min.useInsertionEffect = function ($, et) {
  return U$2.current.useInsertionEffect($, et);
};
react_production_min.useLayoutEffect = function ($, et) {
  return U$2.current.useLayoutEffect($, et);
};
react_production_min.useMemo = function ($, et) {
  return U$2.current.useMemo($, et);
};
react_production_min.useReducer = function ($, et, tt) {
  return U$2.current.useReducer($, et, tt);
};
react_production_min.useRef = function ($) {
  return U$2.current.useRef($);
};
react_production_min.useState = function ($) {
  return U$2.current.useState($);
};
react_production_min.useSyncExternalStore = function ($, et, tt) {
  return U$2.current.useSyncExternalStore($, et, tt);
};
react_production_min.useTransition = function () {
  return U$2.current.useTransition();
};
react_production_min.version = '18.2.0';
(function ($) {
  $.exports = react_production_min;
})(react);
const React = getDefaultExportFromCjs(reactExports),
  React$1 = _mergeNamespaces({ __proto__: null, default: React }, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f$3 = reactExports,
  k$4 = Symbol.for('react.element'),
  l$4 = Symbol.for('react.fragment'),
  m$5 = Object.prototype.hasOwnProperty,
  n$5 = f$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$6 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q$5($, et, tt) {
  var rt,
    nt = {},
    ot = null,
    it = null;
  tt !== void 0 && (ot = '' + tt),
    et.key !== void 0 && (ot = '' + et.key),
    et.ref !== void 0 && (it = et.ref);
  for (rt in et) m$5.call(et, rt) && !p$6.hasOwnProperty(rt) && (nt[rt] = et[rt]);
  if ($ && $.defaultProps)
    for (rt in ((et = $.defaultProps), et)) nt[rt] === void 0 && (nt[rt] = et[rt]);
  return { $$typeof: k$4, type: $, key: ot, ref: it, props: nt, _owner: n$5.current };
}
reactJsxRuntime_production_min.Fragment = l$4;
reactJsxRuntime_production_min.jsx = q$5;
reactJsxRuntime_production_min.jsxs = q$5;
(function ($) {
  $.exports = reactJsxRuntime_production_min;
})(jsxRuntime);
const Fragment = jsxRuntimeExports.Fragment,
  jsx = jsxRuntimeExports.jsx,
  jsxs = jsxRuntimeExports.jsxs;
var client = {},
  reactDomExports = {},
  reactDom = {
    get exports() {
      return reactDomExports;
    },
    set exports($) {
      reactDomExports = $;
    }
  },
  reactDom_production_min = {},
  schedulerExports = {},
  scheduler = {
    get exports() {
      return schedulerExports;
    },
    set exports($) {
      schedulerExports = $;
    }
  },
  scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function ($) {
  function et(Pt, At) {
    var Mt = Pt.length;
    Pt.push(At);
    e: for (; 0 < Mt; ) {
      var Ft = (Mt - 1) >>> 1,
        Nt = Pt[Ft];
      if (0 < nt(Nt, At)) (Pt[Ft] = At), (Pt[Mt] = Nt), (Mt = Ft);
      else break e;
    }
  }
  function tt(Pt) {
    return Pt.length === 0 ? null : Pt[0];
  }
  function rt(Pt) {
    if (Pt.length === 0) return null;
    var At = Pt[0],
      Mt = Pt.pop();
    if (Mt !== At) {
      Pt[0] = Mt;
      e: for (var Ft = 0, Nt = Pt.length, Dt = Nt >>> 1; Ft < Dt; ) {
        var Xt = 2 * (Ft + 1) - 1,
          ar = Pt[Xt],
          Kt = Xt + 1,
          er = Pt[Kt];
        if (0 > nt(ar, Mt))
          Kt < Nt && 0 > nt(er, ar)
            ? ((Pt[Ft] = er), (Pt[Kt] = Mt), (Ft = Kt))
            : ((Pt[Ft] = ar), (Pt[Xt] = Mt), (Ft = Xt));
        else if (Kt < Nt && 0 > nt(er, Mt)) (Pt[Ft] = er), (Pt[Kt] = Mt), (Ft = Kt);
        else break e;
      }
    }
    return At;
  }
  function nt(Pt, At) {
    var Mt = Pt.sortIndex - At.sortIndex;
    return Mt !== 0 ? Mt : Pt.id - At.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var ot = performance;
    $.unstable_now = function () {
      return ot.now();
    };
  } else {
    var it = Date,
      at = it.now();
    $.unstable_now = function () {
      return it.now() - at;
    };
  }
  var st = [],
    lt = [],
    ut = 1,
    ct = null,
    dt = 3,
    ft = !1,
    pt = !1,
    gt = !1,
    bt = typeof setTimeout == 'function' ? setTimeout : null,
    ht = typeof clearTimeout == 'function' ? clearTimeout : null,
    mt = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function yt(Pt) {
    for (var At = tt(lt); At !== null; ) {
      if (At.callback === null) rt(lt);
      else if (At.startTime <= Pt) rt(lt), (At.sortIndex = At.expirationTime), et(st, At);
      else break;
      At = tt(lt);
    }
  }
  function St(Pt) {
    if (((gt = !1), yt(Pt), !pt))
      if (tt(st) !== null) (pt = !0), Ht(_t);
      else {
        var At = tt(lt);
        At !== null && Wt(St, At.startTime - Pt);
      }
  }
  function _t(Pt, At) {
    (pt = !1), gt && ((gt = !1), ht(Et), (Et = -1)), (ft = !0);
    var Mt = dt;
    try {
      for (yt(At), ct = tt(st); ct !== null && (!(ct.expirationTime > At) || (Pt && !jt())); ) {
        var Ft = ct.callback;
        if (typeof Ft == 'function') {
          (ct.callback = null), (dt = ct.priorityLevel);
          var Nt = Ft(ct.expirationTime <= At);
          (At = $.unstable_now()),
            typeof Nt == 'function' ? (ct.callback = Nt) : ct === tt(st) && rt(st),
            yt(At);
        } else rt(st);
        ct = tt(st);
      }
      if (ct !== null) var Dt = !0;
      else {
        var Xt = tt(lt);
        Xt !== null && Wt(St, Xt.startTime - At), (Dt = !1);
      }
      return Dt;
    } finally {
      (ct = null), (dt = Mt), (ft = !1);
    }
  }
  var Ct = !1,
    wt = null,
    Et = -1,
    Rt = 5,
    kt = -1;
  function jt() {
    return !($.unstable_now() - kt < Rt);
  }
  function Ut() {
    if (wt !== null) {
      var Pt = $.unstable_now();
      kt = Pt;
      var At = !0;
      try {
        At = wt(!0, Pt);
      } finally {
        At ? Qt() : ((Ct = !1), (wt = null));
      }
    } else Ct = !1;
  }
  var Qt;
  if (typeof mt == 'function')
    Qt = function () {
      mt(Ut);
    };
  else if (typeof MessageChannel < 'u') {
    var Yt = new MessageChannel(),
      Vt = Yt.port2;
    (Yt.port1.onmessage = Ut),
      (Qt = function () {
        Vt.postMessage(null);
      });
  } else
    Qt = function () {
      bt(Ut, 0);
    };
  function Ht(Pt) {
    (wt = Pt), Ct || ((Ct = !0), Qt());
  }
  function Wt(Pt, At) {
    Et = bt(function () {
      Pt($.unstable_now());
    }, At);
  }
  ($.unstable_IdlePriority = 5),
    ($.unstable_ImmediatePriority = 1),
    ($.unstable_LowPriority = 4),
    ($.unstable_NormalPriority = 3),
    ($.unstable_Profiling = null),
    ($.unstable_UserBlockingPriority = 2),
    ($.unstable_cancelCallback = function (Pt) {
      Pt.callback = null;
    }),
    ($.unstable_continueExecution = function () {
      pt || ft || ((pt = !0), Ht(_t));
    }),
    ($.unstable_forceFrameRate = function (Pt) {
      0 > Pt || 125 < Pt
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (Rt = 0 < Pt ? Math.floor(1e3 / Pt) : 5);
    }),
    ($.unstable_getCurrentPriorityLevel = function () {
      return dt;
    }),
    ($.unstable_getFirstCallbackNode = function () {
      return tt(st);
    }),
    ($.unstable_next = function (Pt) {
      switch (dt) {
        case 1:
        case 2:
        case 3:
          var At = 3;
          break;
        default:
          At = dt;
      }
      var Mt = dt;
      dt = At;
      try {
        return Pt();
      } finally {
        dt = Mt;
      }
    }),
    ($.unstable_pauseExecution = function () {}),
    ($.unstable_requestPaint = function () {}),
    ($.unstable_runWithPriority = function (Pt, At) {
      switch (Pt) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Pt = 3;
      }
      var Mt = dt;
      dt = Pt;
      try {
        return At();
      } finally {
        dt = Mt;
      }
    }),
    ($.unstable_scheduleCallback = function (Pt, At, Mt) {
      var Ft = $.unstable_now();
      switch (
        (typeof Mt == 'object' && Mt !== null
          ? ((Mt = Mt.delay), (Mt = typeof Mt == 'number' && 0 < Mt ? Ft + Mt : Ft))
          : (Mt = Ft),
        Pt)
      ) {
        case 1:
          var Nt = -1;
          break;
        case 2:
          Nt = 250;
          break;
        case 5:
          Nt = 1073741823;
          break;
        case 4:
          Nt = 1e4;
          break;
        default:
          Nt = 5e3;
      }
      return (
        (Nt = Mt + Nt),
        (Pt = {
          id: ut++,
          callback: At,
          priorityLevel: Pt,
          startTime: Mt,
          expirationTime: Nt,
          sortIndex: -1
        }),
        Mt > Ft
          ? ((Pt.sortIndex = Mt),
            et(lt, Pt),
            tt(st) === null &&
              Pt === tt(lt) &&
              (gt ? (ht(Et), (Et = -1)) : (gt = !0), Wt(St, Mt - Ft)))
          : ((Pt.sortIndex = Nt), et(st, Pt), pt || ft || ((pt = !0), Ht(_t))),
        Pt
      );
    }),
    ($.unstable_shouldYield = jt),
    ($.unstable_wrapCallback = function (Pt) {
      var At = dt;
      return function () {
        var Mt = dt;
        dt = At;
        try {
          return Pt.apply(this, arguments);
        } finally {
          dt = Mt;
        }
      };
    });
})(scheduler_production_min);
(function ($) {
  $.exports = scheduler_production_min;
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = reactExports,
  ca = schedulerExports;
function p$5($) {
  for (
    var et = 'https://reactjs.org/docs/error-decoder.html?invariant=' + $, tt = 1;
    tt < arguments.length;
    tt++
  )
    et += '&args[]=' + encodeURIComponent(arguments[tt]);
  return (
    'Minified React error #' +
    $ +
    '; visit ' +
    et +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var da = new Set(),
  ea = {};
function fa($, et) {
  ha($, et), ha($ + 'Capture', et);
}
function ha($, et) {
  for (ea[$] = et, $ = 0; $ < et.length; $++) da.add(et[$]);
}
var ia = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ja = Object.prototype.hasOwnProperty,
  ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa($) {
  return ja.call(ma, $) ? !0 : ja.call(la, $) ? !1 : ka.test($) ? (ma[$] = !0) : ((la[$] = !0), !1);
}
function pa($, et, tt, rt) {
  if (tt !== null && tt.type === 0) return !1;
  switch (typeof et) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return rt
        ? !1
        : tt !== null
        ? !tt.acceptsBooleans
        : (($ = $.toLowerCase().slice(0, 5)), $ !== 'data-' && $ !== 'aria-');
    default:
      return !1;
  }
}
function qa($, et, tt, rt) {
  if (et === null || typeof et > 'u' || pa($, et, tt, rt)) return !0;
  if (rt) return !1;
  if (tt !== null)
    switch (tt.type) {
      case 3:
        return !et;
      case 4:
        return et === !1;
      case 5:
        return isNaN(et);
      case 6:
        return isNaN(et) || 1 > et;
    }
  return !1;
}
function v$4($, et, tt, rt, nt, ot, it) {
  (this.acceptsBooleans = et === 2 || et === 3 || et === 4),
    (this.attributeName = rt),
    (this.attributeNamespace = nt),
    (this.mustUseProperty = tt),
    (this.propertyName = $),
    (this.type = et),
    (this.sanitizeURL = ot),
    (this.removeEmptyString = it);
}
var z$2 = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function ($) {
    z$2[$] = new v$4($, 0, !1, $, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function ($) {
  var et = $[0];
  z$2[et] = new v$4(et, 1, !1, $[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function ($) {
  z$2[$] = new v$4($, 2, !1, $.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function ($) {
  z$2[$] = new v$4($, 2, !1, $, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function ($) {
    z$2[$] = new v$4($, 3, !1, $.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function ($) {
  z$2[$] = new v$4($, 3, !0, $, null, !1, !1);
});
['capture', 'download'].forEach(function ($) {
  z$2[$] = new v$4($, 4, !1, $, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function ($) {
  z$2[$] = new v$4($, 6, !1, $, null, !1, !1);
});
['rowSpan', 'start'].forEach(function ($) {
  z$2[$] = new v$4($, 5, !1, $.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa($) {
  return $[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function ($) {
    var et = $.replace(ra, sa);
    z$2[et] = new v$4(et, 1, !1, $, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function ($) {
    var et = $.replace(ra, sa);
    z$2[et] = new v$4(et, 1, !1, $, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function ($) {
  var et = $.replace(ra, sa);
  z$2[et] = new v$4(et, 1, !1, $, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function ($) {
  z$2[$] = new v$4($, 1, !1, $.toLowerCase(), null, !1, !1);
});
z$2.xlinkHref = new v$4('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function ($) {
  z$2[$] = new v$4($, 1, !1, $.toLowerCase(), null, !0, !0);
});
function ta($, et, tt, rt) {
  var nt = z$2.hasOwnProperty(et) ? z$2[et] : null;
  (nt !== null
    ? nt.type !== 0
    : rt ||
      !(2 < et.length) ||
      (et[0] !== 'o' && et[0] !== 'O') ||
      (et[1] !== 'n' && et[1] !== 'N')) &&
    (qa(et, tt, nt, rt) && (tt = null),
    rt || nt === null
      ? oa(et) && (tt === null ? $.removeAttribute(et) : $.setAttribute(et, '' + tt))
      : nt.mustUseProperty
      ? ($[nt.propertyName] = tt === null ? (nt.type === 3 ? !1 : '') : tt)
      : ((et = nt.attributeName),
        (rt = nt.attributeNamespace),
        tt === null
          ? $.removeAttribute(et)
          : ((nt = nt.type),
            (tt = nt === 3 || (nt === 4 && tt === !0) ? '' : '' + tt),
            rt ? $.setAttributeNS(rt, et, tt) : $.setAttribute(et, tt))));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for('react.element'),
  wa = Symbol.for('react.portal'),
  ya = Symbol.for('react.fragment'),
  za = Symbol.for('react.strict_mode'),
  Aa = Symbol.for('react.profiler'),
  Ba = Symbol.for('react.provider'),
  Ca = Symbol.for('react.context'),
  Da = Symbol.for('react.forward_ref'),
  Ea = Symbol.for('react.suspense'),
  Fa = Symbol.for('react.suspense_list'),
  Ga = Symbol.for('react.memo'),
  Ha = Symbol.for('react.lazy'),
  Ia = Symbol.for('react.offscreen'),
  Ja = Symbol.iterator;
function Ka($) {
  return $ === null || typeof $ != 'object'
    ? null
    : (($ = (Ja && $[Ja]) || $['@@iterator']), typeof $ == 'function' ? $ : null);
}
var A$2 = Object.assign,
  La;
function Ma($) {
  if (La === void 0)
    try {
      throw Error();
    } catch (tt) {
      var et = tt.stack.trim().match(/\n( *(at )?)/);
      La = (et && et[1]) || '';
    }
  return (
    `
` +
    La +
    $
  );
}
var Na = !1;
function Oa($, et) {
  if (!$ || Na) return '';
  Na = !0;
  var tt = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (et)
      if (
        ((et = function () {
          throw Error();
        }),
        Object.defineProperty(et.prototype, 'props', {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(et, []);
        } catch (lt) {
          var rt = lt;
        }
        Reflect.construct($, [], et);
      } else {
        try {
          et.call();
        } catch (lt) {
          rt = lt;
        }
        $.call(et.prototype);
      }
    else {
      try {
        throw Error();
      } catch (lt) {
        rt = lt;
      }
      $();
    }
  } catch (lt) {
    if (lt && rt && typeof lt.stack == 'string') {
      for (
        var nt = lt.stack.split(`
`),
          ot = rt.stack.split(`
`),
          it = nt.length - 1,
          at = ot.length - 1;
        1 <= it && 0 <= at && nt[it] !== ot[at];

      )
        at--;
      for (; 1 <= it && 0 <= at; it--, at--)
        if (nt[it] !== ot[at]) {
          if (it !== 1 || at !== 1)
            do
              if ((it--, at--, 0 > at || nt[it] !== ot[at])) {
                var st =
                  `
` + nt[it].replace(' at new ', ' at ');
                return (
                  $.displayName &&
                    st.includes('<anonymous>') &&
                    (st = st.replace('<anonymous>', $.displayName)),
                  st
                );
              }
            while (1 <= it && 0 <= at);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = tt);
  }
  return ($ = $ ? $.displayName || $.name : '') ? Ma($) : '';
}
function Pa($) {
  switch ($.tag) {
    case 5:
      return Ma($.type);
    case 16:
      return Ma('Lazy');
    case 13:
      return Ma('Suspense');
    case 19:
      return Ma('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ($ = Oa($.type, !1)), $;
    case 11:
      return ($ = Oa($.type.render, !1)), $;
    case 1:
      return ($ = Oa($.type, !0)), $;
    default:
      return '';
  }
}
function Qa($) {
  if ($ == null) return null;
  if (typeof $ == 'function') return $.displayName || $.name || null;
  if (typeof $ == 'string') return $;
  switch ($) {
    case ya:
      return 'Fragment';
    case wa:
      return 'Portal';
    case Aa:
      return 'Profiler';
    case za:
      return 'StrictMode';
    case Ea:
      return 'Suspense';
    case Fa:
      return 'SuspenseList';
  }
  if (typeof $ == 'object')
    switch ($.$$typeof) {
      case Ca:
        return ($.displayName || 'Context') + '.Consumer';
      case Ba:
        return ($._context.displayName || 'Context') + '.Provider';
      case Da:
        var et = $.render;
        return (
          ($ = $.displayName),
          $ ||
            (($ = et.displayName || et.name || ''),
            ($ = $ !== '' ? 'ForwardRef(' + $ + ')' : 'ForwardRef')),
          $
        );
      case Ga:
        return (et = $.displayName || null), et !== null ? et : Qa($.type) || 'Memo';
      case Ha:
        (et = $._payload), ($ = $._init);
        try {
          return Qa($(et));
        } catch {}
    }
  return null;
}
function Ra($) {
  var et = $.type;
  switch ($.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (et.displayName || 'Context') + '.Consumer';
    case 10:
      return (et._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        ($ = et.render),
        ($ = $.displayName || $.name || ''),
        et.displayName || ($ !== '' ? 'ForwardRef(' + $ + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return et;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Qa(et);
    case 8:
      return et === za ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof et == 'function') return et.displayName || et.name || null;
      if (typeof et == 'string') return et;
  }
  return null;
}
function Sa($) {
  switch (typeof $) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return $;
    case 'object':
      return $;
    default:
      return '';
  }
}
function Ta($) {
  var et = $.type;
  return ($ = $.nodeName) && $.toLowerCase() === 'input' && (et === 'checkbox' || et === 'radio');
}
function Ua($) {
  var et = Ta($) ? 'checked' : 'value',
    tt = Object.getOwnPropertyDescriptor($.constructor.prototype, et),
    rt = '' + $[et];
  if (
    !$.hasOwnProperty(et) &&
    typeof tt < 'u' &&
    typeof tt.get == 'function' &&
    typeof tt.set == 'function'
  ) {
    var nt = tt.get,
      ot = tt.set;
    return (
      Object.defineProperty($, et, {
        configurable: !0,
        get: function () {
          return nt.call(this);
        },
        set: function (it) {
          (rt = '' + it), ot.call(this, it);
        }
      }),
      Object.defineProperty($, et, { enumerable: tt.enumerable }),
      {
        getValue: function () {
          return rt;
        },
        setValue: function (it) {
          rt = '' + it;
        },
        stopTracking: function () {
          ($._valueTracker = null), delete $[et];
        }
      }
    );
  }
}
function Va($) {
  $._valueTracker || ($._valueTracker = Ua($));
}
function Wa($) {
  if (!$) return !1;
  var et = $._valueTracker;
  if (!et) return !0;
  var tt = et.getValue(),
    rt = '';
  return (
    $ && (rt = Ta($) ? ($.checked ? 'true' : 'false') : $.value),
    ($ = rt),
    $ !== tt ? (et.setValue($), !0) : !1
  );
}
function Xa($) {
  if ((($ = $ || (typeof document < 'u' ? document : void 0)), typeof $ > 'u')) return null;
  try {
    return $.activeElement || $.body;
  } catch {
    return $.body;
  }
}
function Ya($, et) {
  var tt = et.checked;
  return A$2({}, et, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: tt ?? $._wrapperState.initialChecked
  });
}
function Za($, et) {
  var tt = et.defaultValue == null ? '' : et.defaultValue,
    rt = et.checked != null ? et.checked : et.defaultChecked;
  (tt = Sa(et.value != null ? et.value : tt)),
    ($._wrapperState = {
      initialChecked: rt,
      initialValue: tt,
      controlled:
        et.type === 'checkbox' || et.type === 'radio' ? et.checked != null : et.value != null
    });
}
function ab($, et) {
  (et = et.checked), et != null && ta($, 'checked', et, !1);
}
function bb($, et) {
  ab($, et);
  var tt = Sa(et.value),
    rt = et.type;
  if (tt != null)
    rt === 'number'
      ? ((tt === 0 && $.value === '') || $.value != tt) && ($.value = '' + tt)
      : $.value !== '' + tt && ($.value = '' + tt);
  else if (rt === 'submit' || rt === 'reset') {
    $.removeAttribute('value');
    return;
  }
  et.hasOwnProperty('value')
    ? cb($, et.type, tt)
    : et.hasOwnProperty('defaultValue') && cb($, et.type, Sa(et.defaultValue)),
    et.checked == null && et.defaultChecked != null && ($.defaultChecked = !!et.defaultChecked);
}
function db($, et, tt) {
  if (et.hasOwnProperty('value') || et.hasOwnProperty('defaultValue')) {
    var rt = et.type;
    if (!((rt !== 'submit' && rt !== 'reset') || (et.value !== void 0 && et.value !== null)))
      return;
    (et = '' + $._wrapperState.initialValue),
      tt || et === $.value || ($.value = et),
      ($.defaultValue = et);
  }
  (tt = $.name),
    tt !== '' && ($.name = ''),
    ($.defaultChecked = !!$._wrapperState.initialChecked),
    tt !== '' && ($.name = tt);
}
function cb($, et, tt) {
  (et !== 'number' || Xa($.ownerDocument) !== $) &&
    (tt == null
      ? ($.defaultValue = '' + $._wrapperState.initialValue)
      : $.defaultValue !== '' + tt && ($.defaultValue = '' + tt));
}
var eb = Array.isArray;
function fb($, et, tt, rt) {
  if ((($ = $.options), et)) {
    et = {};
    for (var nt = 0; nt < tt.length; nt++) et['$' + tt[nt]] = !0;
    for (tt = 0; tt < $.length; tt++)
      (nt = et.hasOwnProperty('$' + $[tt].value)),
        $[tt].selected !== nt && ($[tt].selected = nt),
        nt && rt && ($[tt].defaultSelected = !0);
  } else {
    for (tt = '' + Sa(tt), et = null, nt = 0; nt < $.length; nt++) {
      if ($[nt].value === tt) {
        ($[nt].selected = !0), rt && ($[nt].defaultSelected = !0);
        return;
      }
      et !== null || $[nt].disabled || (et = $[nt]);
    }
    et !== null && (et.selected = !0);
  }
}
function gb($, et) {
  if (et.dangerouslySetInnerHTML != null) throw Error(p$5(91));
  return A$2({}, et, {
    value: void 0,
    defaultValue: void 0,
    children: '' + $._wrapperState.initialValue
  });
}
function hb($, et) {
  var tt = et.value;
  if (tt == null) {
    if (((tt = et.children), (et = et.defaultValue), tt != null)) {
      if (et != null) throw Error(p$5(92));
      if (eb(tt)) {
        if (1 < tt.length) throw Error(p$5(93));
        tt = tt[0];
      }
      et = tt;
    }
    et == null && (et = ''), (tt = et);
  }
  $._wrapperState = { initialValue: Sa(tt) };
}
function ib($, et) {
  var tt = Sa(et.value),
    rt = Sa(et.defaultValue);
  tt != null &&
    ((tt = '' + tt),
    tt !== $.value && ($.value = tt),
    et.defaultValue == null && $.defaultValue !== tt && ($.defaultValue = tt)),
    rt != null && ($.defaultValue = '' + rt);
}
function jb($) {
  var et = $.textContent;
  et === $._wrapperState.initialValue && et !== '' && et !== null && ($.value = et);
}
function kb($) {
  switch ($) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function lb($, et) {
  return $ == null || $ === 'http://www.w3.org/1999/xhtml'
    ? kb(et)
    : $ === 'http://www.w3.org/2000/svg' && et === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : $;
}
var mb,
  nb = (function ($) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (et, tt, rt, nt) {
          MSApp.execUnsafeLocalFunction(function () {
            return $(et, tt, rt, nt);
          });
        }
      : $;
  })(function ($, et) {
    if ($.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in $) $.innerHTML = et;
    else {
      for (
        mb = mb || document.createElement('div'),
          mb.innerHTML = '<svg>' + et.valueOf().toString() + '</svg>',
          et = mb.firstChild;
        $.firstChild;

      )
        $.removeChild($.firstChild);
      for (; et.firstChild; ) $.appendChild(et.firstChild);
    }
  });
function ob($, et) {
  if (et) {
    var tt = $.firstChild;
    if (tt && tt === $.lastChild && tt.nodeType === 3) {
      tt.nodeValue = et;
      return;
    }
  }
  $.textContent = et;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  qb = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(pb).forEach(function ($) {
  qb.forEach(function (et) {
    (et = et + $.charAt(0).toUpperCase() + $.substring(1)), (pb[et] = pb[$]);
  });
});
function rb($, et, tt) {
  return et == null || typeof et == 'boolean' || et === ''
    ? ''
    : tt || typeof et != 'number' || et === 0 || (pb.hasOwnProperty($) && pb[$])
    ? ('' + et).trim()
    : et + 'px';
}
function sb($, et) {
  $ = $.style;
  for (var tt in et)
    if (et.hasOwnProperty(tt)) {
      var rt = tt.indexOf('--') === 0,
        nt = rb(tt, et[tt], rt);
      tt === 'float' && (tt = 'cssFloat'), rt ? $.setProperty(tt, nt) : ($[tt] = nt);
    }
}
var tb = A$2(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function ub($, et) {
  if (et) {
    if (tb[$] && (et.children != null || et.dangerouslySetInnerHTML != null))
      throw Error(p$5(137, $));
    if (et.dangerouslySetInnerHTML != null) {
      if (et.children != null) throw Error(p$5(60));
      if (
        typeof et.dangerouslySetInnerHTML != 'object' ||
        !('__html' in et.dangerouslySetInnerHTML)
      )
        throw Error(p$5(61));
    }
    if (et.style != null && typeof et.style != 'object') throw Error(p$5(62));
  }
}
function vb($, et) {
  if ($.indexOf('-') === -1) return typeof et.is == 'string';
  switch ($) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb($) {
  return (
    ($ = $.target || $.srcElement || window),
    $.correspondingUseElement && ($ = $.correspondingUseElement),
    $.nodeType === 3 ? $.parentNode : $
  );
}
var yb = null,
  zb = null,
  Ab = null;
function Bb($) {
  if (($ = Cb($))) {
    if (typeof yb != 'function') throw Error(p$5(280));
    var et = $.stateNode;
    et && ((et = Db(et)), yb($.stateNode, $.type, et));
  }
}
function Eb($) {
  zb ? (Ab ? Ab.push($) : (Ab = [$])) : (zb = $);
}
function Fb() {
  if (zb) {
    var $ = zb,
      et = Ab;
    if (((Ab = zb = null), Bb($), et)) for ($ = 0; $ < et.length; $++) Bb(et[$]);
  }
}
function Gb($, et) {
  return $(et);
}
function Hb() {}
var Ib = !1;
function Jb($, et, tt) {
  if (Ib) return $(et, tt);
  Ib = !0;
  try {
    return Gb($, et, tt);
  } finally {
    (Ib = !1), (zb !== null || Ab !== null) && (Hb(), Fb());
  }
}
function Kb($, et) {
  var tt = $.stateNode;
  if (tt === null) return null;
  var rt = Db(tt);
  if (rt === null) return null;
  tt = rt[et];
  e: switch (et) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (rt = !rt.disabled) ||
        (($ = $.type),
        (rt = !($ === 'button' || $ === 'input' || $ === 'select' || $ === 'textarea'))),
        ($ = !rt);
      break e;
    default:
      $ = !1;
  }
  if ($) return null;
  if (tt && typeof tt != 'function') throw Error(p$5(231, et, typeof tt));
  return tt;
}
var Lb = !1;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, 'passive', {
      get: function () {
        Lb = !0;
      }
    }),
      window.addEventListener('test', Mb, Mb),
      window.removeEventListener('test', Mb, Mb);
  } catch {
    Lb = !1;
  }
function Nb($, et, tt, rt, nt, ot, it, at, st) {
  var lt = Array.prototype.slice.call(arguments, 3);
  try {
    et.apply(tt, lt);
  } catch (ut) {
    this.onError(ut);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function ($) {
      (Ob = !0), (Pb = $);
    }
  };
function Tb($, et, tt, rt, nt, ot, it, at, st) {
  (Ob = !1), (Pb = null), Nb.apply(Sb, arguments);
}
function Ub($, et, tt, rt, nt, ot, it, at, st) {
  if ((Tb.apply(this, arguments), Ob)) {
    if (Ob) {
      var lt = Pb;
      (Ob = !1), (Pb = null);
    } else throw Error(p$5(198));
    Qb || ((Qb = !0), (Rb = lt));
  }
}
function Vb($) {
  var et = $,
    tt = $;
  if ($.alternate) for (; et.return; ) et = et.return;
  else {
    $ = et;
    do (et = $), et.flags & 4098 && (tt = et.return), ($ = et.return);
    while ($);
  }
  return et.tag === 3 ? tt : null;
}
function Wb($) {
  if ($.tag === 13) {
    var et = $.memoizedState;
    if ((et === null && (($ = $.alternate), $ !== null && (et = $.memoizedState)), et !== null))
      return et.dehydrated;
  }
  return null;
}
function Xb($) {
  if (Vb($) !== $) throw Error(p$5(188));
}
function Yb($) {
  var et = $.alternate;
  if (!et) {
    if (((et = Vb($)), et === null)) throw Error(p$5(188));
    return et !== $ ? null : $;
  }
  for (var tt = $, rt = et; ; ) {
    var nt = tt.return;
    if (nt === null) break;
    var ot = nt.alternate;
    if (ot === null) {
      if (((rt = nt.return), rt !== null)) {
        tt = rt;
        continue;
      }
      break;
    }
    if (nt.child === ot.child) {
      for (ot = nt.child; ot; ) {
        if (ot === tt) return Xb(nt), $;
        if (ot === rt) return Xb(nt), et;
        ot = ot.sibling;
      }
      throw Error(p$5(188));
    }
    if (tt.return !== rt.return) (tt = nt), (rt = ot);
    else {
      for (var it = !1, at = nt.child; at; ) {
        if (at === tt) {
          (it = !0), (tt = nt), (rt = ot);
          break;
        }
        if (at === rt) {
          (it = !0), (rt = nt), (tt = ot);
          break;
        }
        at = at.sibling;
      }
      if (!it) {
        for (at = ot.child; at; ) {
          if (at === tt) {
            (it = !0), (tt = ot), (rt = nt);
            break;
          }
          if (at === rt) {
            (it = !0), (rt = ot), (tt = nt);
            break;
          }
          at = at.sibling;
        }
        if (!it) throw Error(p$5(189));
      }
    }
    if (tt.alternate !== rt) throw Error(p$5(190));
  }
  if (tt.tag !== 3) throw Error(p$5(188));
  return tt.stateNode.current === tt ? $ : et;
}
function Zb($) {
  return ($ = Yb($)), $ !== null ? $b($) : null;
}
function $b($) {
  if ($.tag === 5 || $.tag === 6) return $;
  for ($ = $.child; $ !== null; ) {
    var et = $b($);
    if (et !== null) return et;
    $ = $.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B$1 = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc($) {
  if (lc && typeof lc.onCommitFiberRoot == 'function')
    try {
      lc.onCommitFiberRoot(kc, $, void 0, ($.current.flags & 128) === 128);
    } catch {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc($) {
  return ($ >>>= 0), $ === 0 ? 32 : (31 - ((pc($) / qc) | 0)) | 0;
}
var rc = 64,
  sc = 4194304;
function tc($) {
  switch ($ & -$) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return $ & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return $ & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return $;
  }
}
function uc($, et) {
  var tt = $.pendingLanes;
  if (tt === 0) return 0;
  var rt = 0,
    nt = $.suspendedLanes,
    ot = $.pingedLanes,
    it = tt & 268435455;
  if (it !== 0) {
    var at = it & ~nt;
    at !== 0 ? (rt = tc(at)) : ((ot &= it), ot !== 0 && (rt = tc(ot)));
  } else (it = tt & ~nt), it !== 0 ? (rt = tc(it)) : ot !== 0 && (rt = tc(ot));
  if (rt === 0) return 0;
  if (
    et !== 0 &&
    et !== rt &&
    !(et & nt) &&
    ((nt = rt & -rt), (ot = et & -et), nt >= ot || (nt === 16 && (ot & 4194240) !== 0))
  )
    return et;
  if ((rt & 4 && (rt |= tt & 16), (et = $.entangledLanes), et !== 0))
    for ($ = $.entanglements, et &= rt; 0 < et; )
      (tt = 31 - oc(et)), (nt = 1 << tt), (rt |= $[tt]), (et &= ~nt);
  return rt;
}
function vc($, et) {
  switch ($) {
    case 1:
    case 2:
    case 4:
      return et + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return et + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc($, et) {
  for (
    var tt = $.suspendedLanes, rt = $.pingedLanes, nt = $.expirationTimes, ot = $.pendingLanes;
    0 < ot;

  ) {
    var it = 31 - oc(ot),
      at = 1 << it,
      st = nt[it];
    st === -1
      ? (!(at & tt) || at & rt) && (nt[it] = vc(at, et))
      : st <= et && ($.expiredLanes |= at),
      (ot &= ~at);
  }
}
function xc($) {
  return ($ = $.pendingLanes & -1073741825), $ !== 0 ? $ : $ & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var $ = rc;
  return (rc <<= 1), !(rc & 4194240) && (rc = 64), $;
}
function zc($) {
  for (var et = [], tt = 0; 31 > tt; tt++) et.push($);
  return et;
}
function Ac($, et, tt) {
  ($.pendingLanes |= et),
    et !== 536870912 && (($.suspendedLanes = 0), ($.pingedLanes = 0)),
    ($ = $.eventTimes),
    (et = 31 - oc(et)),
    ($[et] = tt);
}
function Bc($, et) {
  var tt = $.pendingLanes & ~et;
  ($.pendingLanes = et),
    ($.suspendedLanes = 0),
    ($.pingedLanes = 0),
    ($.expiredLanes &= et),
    ($.mutableReadLanes &= et),
    ($.entangledLanes &= et),
    (et = $.entanglements);
  var rt = $.eventTimes;
  for ($ = $.expirationTimes; 0 < tt; ) {
    var nt = 31 - oc(tt),
      ot = 1 << nt;
    (et[nt] = 0), (rt[nt] = -1), ($[nt] = -1), (tt &= ~ot);
  }
}
function Cc($, et) {
  var tt = ($.entangledLanes |= et);
  for ($ = $.entanglements; tt; ) {
    var rt = 31 - oc(tt),
      nt = 1 << rt;
    (nt & et) | ($[rt] & et) && ($[rt] |= et), (tt &= ~nt);
  }
}
var C = 0;
function Dc($) {
  return ($ &= -$), 1 < $ ? (4 < $ ? ($ & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Sc($, et) {
  switch ($) {
    case 'focusin':
    case 'focusout':
      Lc = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Mc = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Nc = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Oc.delete(et.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Pc.delete(et.pointerId);
  }
}
function Tc($, et, tt, rt, nt, ot) {
  return $ === null || $.nativeEvent !== ot
    ? (($ = {
        blockedOn: et,
        domEventName: tt,
        eventSystemFlags: rt,
        nativeEvent: ot,
        targetContainers: [nt]
      }),
      et !== null && ((et = Cb(et)), et !== null && Fc(et)),
      $)
    : (($.eventSystemFlags |= rt),
      (et = $.targetContainers),
      nt !== null && et.indexOf(nt) === -1 && et.push(nt),
      $);
}
function Uc($, et, tt, rt, nt) {
  switch (et) {
    case 'focusin':
      return (Lc = Tc(Lc, $, et, tt, rt, nt)), !0;
    case 'dragenter':
      return (Mc = Tc(Mc, $, et, tt, rt, nt)), !0;
    case 'mouseover':
      return (Nc = Tc(Nc, $, et, tt, rt, nt)), !0;
    case 'pointerover':
      var ot = nt.pointerId;
      return Oc.set(ot, Tc(Oc.get(ot) || null, $, et, tt, rt, nt)), !0;
    case 'gotpointercapture':
      return (ot = nt.pointerId), Pc.set(ot, Tc(Pc.get(ot) || null, $, et, tt, rt, nt)), !0;
  }
  return !1;
}
function Vc($) {
  var et = Wc($.target);
  if (et !== null) {
    var tt = Vb(et);
    if (tt !== null) {
      if (((et = tt.tag), et === 13)) {
        if (((et = Wb(tt)), et !== null)) {
          ($.blockedOn = et),
            Ic($.priority, function () {
              Gc(tt);
            });
          return;
        }
      } else if (et === 3 && tt.stateNode.current.memoizedState.isDehydrated) {
        $.blockedOn = tt.tag === 3 ? tt.stateNode.containerInfo : null;
        return;
      }
    }
  }
  $.blockedOn = null;
}
function Xc($) {
  if ($.blockedOn !== null) return !1;
  for (var et = $.targetContainers; 0 < et.length; ) {
    var tt = Yc($.domEventName, $.eventSystemFlags, et[0], $.nativeEvent);
    if (tt === null) {
      tt = $.nativeEvent;
      var rt = new tt.constructor(tt.type, tt);
      (wb = rt), tt.target.dispatchEvent(rt), (wb = null);
    } else return (et = Cb(tt)), et !== null && Fc(et), ($.blockedOn = tt), !1;
    et.shift();
  }
  return !0;
}
function Zc($, et, tt) {
  Xc($) && tt.delete(et);
}
function $c() {
  (Jc = !1),
    Lc !== null && Xc(Lc) && (Lc = null),
    Mc !== null && Xc(Mc) && (Mc = null),
    Nc !== null && Xc(Nc) && (Nc = null),
    Oc.forEach(Zc),
    Pc.forEach(Zc);
}
function ad($, et) {
  $.blockedOn === et &&
    (($.blockedOn = null),
    Jc || ((Jc = !0), ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd($) {
  function et(nt) {
    return ad(nt, $);
  }
  if (0 < Kc.length) {
    ad(Kc[0], $);
    for (var tt = 1; tt < Kc.length; tt++) {
      var rt = Kc[tt];
      rt.blockedOn === $ && (rt.blockedOn = null);
    }
  }
  for (
    Lc !== null && ad(Lc, $),
      Mc !== null && ad(Mc, $),
      Nc !== null && ad(Nc, $),
      Oc.forEach(et),
      Pc.forEach(et),
      tt = 0;
    tt < Qc.length;
    tt++
  )
    (rt = Qc[tt]), rt.blockedOn === $ && (rt.blockedOn = null);
  for (; 0 < Qc.length && ((tt = Qc[0]), tt.blockedOn === null); )
    Vc(tt), tt.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed($, et, tt, rt) {
  var nt = C,
    ot = cd.transition;
  cd.transition = null;
  try {
    (C = 1), fd($, et, tt, rt);
  } finally {
    (C = nt), (cd.transition = ot);
  }
}
function gd($, et, tt, rt) {
  var nt = C,
    ot = cd.transition;
  cd.transition = null;
  try {
    (C = 4), fd($, et, tt, rt);
  } finally {
    (C = nt), (cd.transition = ot);
  }
}
function fd($, et, tt, rt) {
  if (dd) {
    var nt = Yc($, et, tt, rt);
    if (nt === null) hd($, et, rt, id$2, tt), Sc($, rt);
    else if (Uc(nt, $, et, tt, rt)) rt.stopPropagation();
    else if ((Sc($, rt), et & 4 && -1 < Rc.indexOf($))) {
      for (; nt !== null; ) {
        var ot = Cb(nt);
        if (
          (ot !== null && Ec(ot),
          (ot = Yc($, et, tt, rt)),
          ot === null && hd($, et, rt, id$2, tt),
          ot === nt)
        )
          break;
        nt = ot;
      }
      nt !== null && rt.stopPropagation();
    } else hd($, et, rt, null, tt);
  }
}
var id$2 = null;
function Yc($, et, tt, rt) {
  if (((id$2 = null), ($ = xb(rt)), ($ = Wc($)), $ !== null))
    if (((et = Vb($)), et === null)) $ = null;
    else if (((tt = et.tag), tt === 13)) {
      if ((($ = Wb(et)), $ !== null)) return $;
      $ = null;
    } else if (tt === 3) {
      if (et.stateNode.current.memoizedState.isDehydrated)
        return et.tag === 3 ? et.stateNode.containerInfo : null;
      $ = null;
    } else et !== $ && ($ = null);
  return (id$2 = $), null;
}
function jd($) {
  switch ($) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var $,
    et = ld,
    tt = et.length,
    rt,
    nt = 'value' in kd ? kd.value : kd.textContent,
    ot = nt.length;
  for ($ = 0; $ < tt && et[$] === nt[$]; $++);
  var it = tt - $;
  for (rt = 1; rt <= it && et[tt - rt] === nt[ot - rt]; rt++);
  return (md = nt.slice($, 1 < rt ? 1 - rt : void 0));
}
function od($) {
  var et = $.keyCode;
  return (
    'charCode' in $ ? (($ = $.charCode), $ === 0 && et === 13 && ($ = 13)) : ($ = et),
    $ === 10 && ($ = 13),
    32 <= $ || $ === 13 ? $ : 0
  );
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd($) {
  function et(tt, rt, nt, ot, it) {
    (this._reactName = tt),
      (this._targetInst = nt),
      (this.type = rt),
      (this.nativeEvent = ot),
      (this.target = it),
      (this.currentTarget = null);
    for (var at in $) $.hasOwnProperty(at) && ((tt = $[at]), (this[at] = tt ? tt(ot) : ot[at]));
    return (
      (this.isDefaultPrevented = (
        ot.defaultPrevented != null ? ot.defaultPrevented : ot.returnValue === !1
      )
        ? pd
        : qd),
      (this.isPropagationStopped = qd),
      this
    );
  }
  return (
    A$2(et.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var tt = this.nativeEvent;
        tt &&
          (tt.preventDefault
            ? tt.preventDefault()
            : typeof tt.returnValue != 'unknown' && (tt.returnValue = !1),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var tt = this.nativeEvent;
        tt &&
          (tt.stopPropagation
            ? tt.stopPropagation()
            : typeof tt.cancelBubble != 'unknown' && (tt.cancelBubble = !0),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd
    }),
    et
  );
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function ($) {
      return $.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  td = rd(sd),
  ud = A$2({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A$2({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function ($) {
      return $.relatedTarget === void 0
        ? $.fromElement === $.srcElement
          ? $.toElement
          : $.fromElement
        : $.relatedTarget;
    },
    movementX: function ($) {
      return 'movementX' in $
        ? $.movementX
        : ($ !== yd &&
            (yd && $.type === 'mousemove'
              ? ((wd = $.screenX - yd.screenX), (xd = $.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = $)),
          wd);
    },
    movementY: function ($) {
      return 'movementY' in $ ? $.movementY : xd;
    }
  }),
  Bd = rd(Ad),
  Cd = A$2({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = A$2({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = A$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = A$2({}, sd, {
    clipboardData: function ($) {
      return 'clipboardData' in $ ? $.clipboardData : window.clipboardData;
    }
  }),
  Jd = rd(Id),
  Kd = A$2({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  Nd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  Od = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Pd($) {
  var et = this.nativeEvent;
  return et.getModifierState ? et.getModifierState($) : ($ = Od[$]) ? !!et[$] : !1;
}
function zd() {
  return Pd;
}
var Qd = A$2({}, ud, {
    key: function ($) {
      if ($.key) {
        var et = Md[$.key] || $.key;
        if (et !== 'Unidentified') return et;
      }
      return $.type === 'keypress'
        ? (($ = od($)), $ === 13 ? 'Enter' : String.fromCharCode($))
        : $.type === 'keydown' || $.type === 'keyup'
        ? Nd[$.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function ($) {
      return $.type === 'keypress' ? od($) : 0;
    },
    keyCode: function ($) {
      return $.type === 'keydown' || $.type === 'keyup' ? $.keyCode : 0;
    },
    which: function ($) {
      return $.type === 'keypress'
        ? od($)
        : $.type === 'keydown' || $.type === 'keyup'
        ? $.keyCode
        : 0;
    }
  }),
  Rd = rd(Qd),
  Sd = A$2({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Td = rd(Sd),
  Ud = A$2({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
  }),
  Vd = rd(Ud),
  Wd = A$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = A$2({}, Ad, {
    deltaX: function ($) {
      return 'deltaX' in $ ? $.deltaX : 'wheelDeltaX' in $ ? -$.wheelDeltaX : 0;
    },
    deltaY: function ($) {
      return 'deltaY' in $
        ? $.deltaY
        : 'wheelDeltaY' in $
        ? -$.wheelDeltaY
        : 'wheelDelta' in $
        ? -$.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && 'CompositionEvent' in window,
  be = null;
ia && 'documentMode' in document && (be = document.documentMode);
var ce = ia && 'TextEvent' in window && !be,
  de = ia && (!ae || (be && 8 < be && 11 >= be)),
  ee = String.fromCharCode(32),
  fe = !1;
function ge($, et) {
  switch ($) {
    case 'keyup':
      return $d.indexOf(et.keyCode) !== -1;
    case 'keydown':
      return et.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function he($) {
  return ($ = $.detail), typeof $ == 'object' && 'data' in $ ? $.data : null;
}
var ie = !1;
function je($, et) {
  switch ($) {
    case 'compositionend':
      return he(et);
    case 'keypress':
      return et.which !== 32 ? null : ((fe = !0), ee);
    case 'textInput':
      return ($ = et.data), $ === ee && fe ? null : $;
    default:
      return null;
  }
}
function ke($, et) {
  if (ie)
    return $ === 'compositionend' || (!ae && ge($, et))
      ? (($ = nd()), (md = ld = kd = null), (ie = !1), $)
      : null;
  switch ($) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(et.ctrlKey || et.altKey || et.metaKey) || (et.ctrlKey && et.altKey)) {
        if (et.char && 1 < et.char.length) return et.char;
        if (et.which) return String.fromCharCode(et.which);
      }
      return null;
    case 'compositionend':
      return de && et.locale !== 'ko' ? null : et.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function me($) {
  var et = $ && $.nodeName && $.nodeName.toLowerCase();
  return et === 'input' ? !!le[$.type] : et === 'textarea';
}
function ne($, et, tt, rt) {
  Eb(rt),
    (et = oe(et, 'onChange')),
    0 < et.length &&
      ((tt = new td('onChange', 'change', null, tt, rt)), $.push({ event: tt, listeners: et }));
}
var pe = null,
  qe = null;
function re($) {
  se($, 0);
}
function te($) {
  var et = ue($);
  if (Wa(et)) return $;
}
function ve($, et) {
  if ($ === 'change') return et;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = 'oninput' in document;
    if (!ye) {
      var ze = document.createElement('div');
      ze.setAttribute('oninput', 'return;'), (ye = typeof ze.oninput == 'function');
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent('onpropertychange', Be), (qe = pe = null));
}
function Be($) {
  if ($.propertyName === 'value' && te(qe)) {
    var et = [];
    ne(et, qe, $, xb($)), Jb(re, et);
  }
}
function Ce($, et, tt) {
  $ === 'focusin'
    ? (Ae(), (pe = et), (qe = tt), pe.attachEvent('onpropertychange', Be))
    : $ === 'focusout' && Ae();
}
function De($) {
  if ($ === 'selectionchange' || $ === 'keyup' || $ === 'keydown') return te(qe);
}
function Ee($, et) {
  if ($ === 'click') return te(et);
}
function Fe($, et) {
  if ($ === 'input' || $ === 'change') return te(et);
}
function Ge($, et) {
  return ($ === et && ($ !== 0 || 1 / $ === 1 / et)) || ($ !== $ && et !== et);
}
var He = typeof Object.is == 'function' ? Object.is : Ge;
function Ie($, et) {
  if (He($, et)) return !0;
  if (typeof $ != 'object' || $ === null || typeof et != 'object' || et === null) return !1;
  var tt = Object.keys($),
    rt = Object.keys(et);
  if (tt.length !== rt.length) return !1;
  for (rt = 0; rt < tt.length; rt++) {
    var nt = tt[rt];
    if (!ja.call(et, nt) || !He($[nt], et[nt])) return !1;
  }
  return !0;
}
function Je($) {
  for (; $ && $.firstChild; ) $ = $.firstChild;
  return $;
}
function Ke($, et) {
  var tt = Je($);
  $ = 0;
  for (var rt; tt; ) {
    if (tt.nodeType === 3) {
      if (((rt = $ + tt.textContent.length), $ <= et && rt >= et))
        return { node: tt, offset: et - $ };
      $ = rt;
    }
    e: {
      for (; tt; ) {
        if (tt.nextSibling) {
          tt = tt.nextSibling;
          break e;
        }
        tt = tt.parentNode;
      }
      tt = void 0;
    }
    tt = Je(tt);
  }
}
function Le($, et) {
  return $ && et
    ? $ === et
      ? !0
      : $ && $.nodeType === 3
      ? !1
      : et && et.nodeType === 3
      ? Le($, et.parentNode)
      : 'contains' in $
      ? $.contains(et)
      : $.compareDocumentPosition
      ? !!($.compareDocumentPosition(et) & 16)
      : !1
    : !1;
}
function Me() {
  for (var $ = window, et = Xa(); et instanceof $.HTMLIFrameElement; ) {
    try {
      var tt = typeof et.contentWindow.location.href == 'string';
    } catch {
      tt = !1;
    }
    if (tt) $ = et.contentWindow;
    else break;
    et = Xa($.document);
  }
  return et;
}
function Ne($) {
  var et = $ && $.nodeName && $.nodeName.toLowerCase();
  return (
    et &&
    ((et === 'input' &&
      ($.type === 'text' ||
        $.type === 'search' ||
        $.type === 'tel' ||
        $.type === 'url' ||
        $.type === 'password')) ||
      et === 'textarea' ||
      $.contentEditable === 'true')
  );
}
function Oe($) {
  var et = Me(),
    tt = $.focusedElem,
    rt = $.selectionRange;
  if (et !== tt && tt && tt.ownerDocument && Le(tt.ownerDocument.documentElement, tt)) {
    if (rt !== null && Ne(tt)) {
      if (((et = rt.start), ($ = rt.end), $ === void 0 && ($ = et), 'selectionStart' in tt))
        (tt.selectionStart = et), (tt.selectionEnd = Math.min($, tt.value.length));
      else if (
        (($ = ((et = tt.ownerDocument || document) && et.defaultView) || window), $.getSelection)
      ) {
        $ = $.getSelection();
        var nt = tt.textContent.length,
          ot = Math.min(rt.start, nt);
        (rt = rt.end === void 0 ? ot : Math.min(rt.end, nt)),
          !$.extend && ot > rt && ((nt = rt), (rt = ot), (ot = nt)),
          (nt = Ke(tt, ot));
        var it = Ke(tt, rt);
        nt &&
          it &&
          ($.rangeCount !== 1 ||
            $.anchorNode !== nt.node ||
            $.anchorOffset !== nt.offset ||
            $.focusNode !== it.node ||
            $.focusOffset !== it.offset) &&
          ((et = et.createRange()),
          et.setStart(nt.node, nt.offset),
          $.removeAllRanges(),
          ot > rt
            ? ($.addRange(et), $.extend(it.node, it.offset))
            : (et.setEnd(it.node, it.offset), $.addRange(et)));
      }
    }
    for (et = [], $ = tt; ($ = $.parentNode); )
      $.nodeType === 1 && et.push({ element: $, left: $.scrollLeft, top: $.scrollTop });
    for (typeof tt.focus == 'function' && tt.focus(), tt = 0; tt < et.length; tt++)
      ($ = et[tt]), ($.element.scrollLeft = $.left), ($.element.scrollTop = $.top);
  }
}
var Pe = ia && 'documentMode' in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue($, et, tt) {
  var rt = tt.window === tt ? tt.document : tt.nodeType === 9 ? tt : tt.ownerDocument;
  Te ||
    Qe == null ||
    Qe !== Xa(rt) ||
    ((rt = Qe),
    'selectionStart' in rt && Ne(rt)
      ? (rt = { start: rt.selectionStart, end: rt.selectionEnd })
      : ((rt = ((rt.ownerDocument && rt.ownerDocument.defaultView) || window).getSelection()),
        (rt = {
          anchorNode: rt.anchorNode,
          anchorOffset: rt.anchorOffset,
          focusNode: rt.focusNode,
          focusOffset: rt.focusOffset
        })),
    (Se && Ie(Se, rt)) ||
      ((Se = rt),
      (rt = oe(Re, 'onSelect')),
      0 < rt.length &&
        ((et = new td('onSelect', 'select', null, et, tt)),
        $.push({ event: et, listeners: rt }),
        (et.target = Qe))));
}
function Ve($, et) {
  var tt = {};
  return (
    (tt[$.toLowerCase()] = et.toLowerCase()),
    (tt['Webkit' + $] = 'webkit' + et),
    (tt['Moz' + $] = 'moz' + et),
    tt
  );
}
var We = {
    animationend: Ve('Animation', 'AnimationEnd'),
    animationiteration: Ve('Animation', 'AnimationIteration'),
    animationstart: Ve('Animation', 'AnimationStart'),
    transitionend: Ve('Transition', 'TransitionEnd')
  },
  Xe = {},
  Ye = {};
ia &&
  ((Ye = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete We.animationend.animation,
    delete We.animationiteration.animation,
    delete We.animationstart.animation),
  'TransitionEvent' in window || delete We.transitionend.transition);
function Ze($) {
  if (Xe[$]) return Xe[$];
  if (!We[$]) return $;
  var et = We[$],
    tt;
  for (tt in et) if (et.hasOwnProperty(tt) && tt in Ye) return (Xe[$] = et[tt]);
  return $;
}
var $e = Ze('animationend'),
  af = Ze('animationiteration'),
  bf = Ze('animationstart'),
  cf = Ze('transitionend'),
  df = new Map(),
  ef =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function ff($, et) {
  df.set($, et), fa(et, [$]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, 'on' + kf);
}
ff($e, 'onAnimationEnd');
ff(af, 'onAnimationIteration');
ff(bf, 'onAnimationStart');
ff('dblclick', 'onDoubleClick');
ff('focusin', 'onFocus');
ff('focusout', 'onBlur');
ff(cf, 'onTransitionEnd');
ha('onMouseEnter', ['mouseout', 'mouseover']);
ha('onMouseLeave', ['mouseout', 'mouseover']);
ha('onPointerEnter', ['pointerout', 'pointerover']);
ha('onPointerLeave', ['pointerout', 'pointerover']);
fa('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
fa(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
fa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
fa('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
fa('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
fa('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var lf =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  mf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(lf));
function nf($, et, tt) {
  var rt = $.type || 'unknown-event';
  ($.currentTarget = tt), Ub(rt, et, void 0, $), ($.currentTarget = null);
}
function se($, et) {
  et = (et & 4) !== 0;
  for (var tt = 0; tt < $.length; tt++) {
    var rt = $[tt],
      nt = rt.event;
    rt = rt.listeners;
    e: {
      var ot = void 0;
      if (et)
        for (var it = rt.length - 1; 0 <= it; it--) {
          var at = rt[it],
            st = at.instance,
            lt = at.currentTarget;
          if (((at = at.listener), st !== ot && nt.isPropagationStopped())) break e;
          nf(nt, at, lt), (ot = st);
        }
      else
        for (it = 0; it < rt.length; it++) {
          if (
            ((at = rt[it]),
            (st = at.instance),
            (lt = at.currentTarget),
            (at = at.listener),
            st !== ot && nt.isPropagationStopped())
          )
            break e;
          nf(nt, at, lt), (ot = st);
        }
    }
  }
  if (Qb) throw (($ = Rb), (Qb = !1), (Rb = null), $);
}
function D$1($, et) {
  var tt = et[of];
  tt === void 0 && (tt = et[of] = new Set());
  var rt = $ + '__bubble';
  tt.has(rt) || (pf(et, $, 2, !1), tt.add(rt));
}
function qf($, et, tt) {
  var rt = 0;
  et && (rt |= 4), pf(tt, $, rt, et);
}
var rf = '_reactListening' + Math.random().toString(36).slice(2);
function sf($) {
  if (!$[rf]) {
    ($[rf] = !0),
      da.forEach(function (tt) {
        tt !== 'selectionchange' && (mf.has(tt) || qf(tt, !1, $), qf(tt, !0, $));
      });
    var et = $.nodeType === 9 ? $ : $.ownerDocument;
    et === null || et[rf] || ((et[rf] = !0), qf('selectionchange', !1, et));
  }
}
function pf($, et, tt, rt) {
  switch (jd(et)) {
    case 1:
      var nt = ed;
      break;
    case 4:
      nt = gd;
      break;
    default:
      nt = fd;
  }
  (tt = nt.bind(null, et, tt, $)),
    (nt = void 0),
    !Lb || (et !== 'touchstart' && et !== 'touchmove' && et !== 'wheel') || (nt = !0),
    rt
      ? nt !== void 0
        ? $.addEventListener(et, tt, { capture: !0, passive: nt })
        : $.addEventListener(et, tt, !0)
      : nt !== void 0
      ? $.addEventListener(et, tt, { passive: nt })
      : $.addEventListener(et, tt, !1);
}
function hd($, et, tt, rt, nt) {
  var ot = rt;
  if (!(et & 1) && !(et & 2) && rt !== null)
    e: for (;;) {
      if (rt === null) return;
      var it = rt.tag;
      if (it === 3 || it === 4) {
        var at = rt.stateNode.containerInfo;
        if (at === nt || (at.nodeType === 8 && at.parentNode === nt)) break;
        if (it === 4)
          for (it = rt.return; it !== null; ) {
            var st = it.tag;
            if (
              (st === 3 || st === 4) &&
              ((st = it.stateNode.containerInfo),
              st === nt || (st.nodeType === 8 && st.parentNode === nt))
            )
              return;
            it = it.return;
          }
        for (; at !== null; ) {
          if (((it = Wc(at)), it === null)) return;
          if (((st = it.tag), st === 5 || st === 6)) {
            rt = ot = it;
            continue e;
          }
          at = at.parentNode;
        }
      }
      rt = rt.return;
    }
  Jb(function () {
    var lt = ot,
      ut = xb(tt),
      ct = [];
    e: {
      var dt = df.get($);
      if (dt !== void 0) {
        var ft = td,
          pt = $;
        switch ($) {
          case 'keypress':
            if (od(tt) === 0) break e;
          case 'keydown':
          case 'keyup':
            ft = Rd;
            break;
          case 'focusin':
            (pt = 'focus'), (ft = Fd);
            break;
          case 'focusout':
            (pt = 'blur'), (ft = Fd);
            break;
          case 'beforeblur':
          case 'afterblur':
            ft = Fd;
            break;
          case 'click':
            if (tt.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            ft = Bd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            ft = Dd;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            ft = Vd;
            break;
          case $e:
          case af:
          case bf:
            ft = Hd;
            break;
          case cf:
            ft = Xd;
            break;
          case 'scroll':
            ft = vd;
            break;
          case 'wheel':
            ft = Zd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            ft = Jd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            ft = Td;
        }
        var gt = (et & 4) !== 0,
          bt = !gt && $ === 'scroll',
          ht = gt ? (dt !== null ? dt + 'Capture' : null) : dt;
        gt = [];
        for (var mt = lt, yt; mt !== null; ) {
          yt = mt;
          var St = yt.stateNode;
          if (
            (yt.tag === 5 &&
              St !== null &&
              ((yt = St),
              ht !== null && ((St = Kb(mt, ht)), St != null && gt.push(tf(mt, St, yt)))),
            bt)
          )
            break;
          mt = mt.return;
        }
        0 < gt.length &&
          ((dt = new ft(dt, pt, null, tt, ut)), ct.push({ event: dt, listeners: gt }));
      }
    }
    if (!(et & 7)) {
      e: {
        if (
          ((dt = $ === 'mouseover' || $ === 'pointerover'),
          (ft = $ === 'mouseout' || $ === 'pointerout'),
          dt && tt !== wb && (pt = tt.relatedTarget || tt.fromElement) && (Wc(pt) || pt[uf]))
        )
          break e;
        if (
          (ft || dt) &&
          ((dt =
            ut.window === ut
              ? ut
              : (dt = ut.ownerDocument)
              ? dt.defaultView || dt.parentWindow
              : window),
          ft
            ? ((pt = tt.relatedTarget || tt.toElement),
              (ft = lt),
              (pt = pt ? Wc(pt) : null),
              pt !== null &&
                ((bt = Vb(pt)), pt !== bt || (pt.tag !== 5 && pt.tag !== 6)) &&
                (pt = null))
            : ((ft = null), (pt = lt)),
          ft !== pt)
        ) {
          if (
            ((gt = Bd),
            (St = 'onMouseLeave'),
            (ht = 'onMouseEnter'),
            (mt = 'mouse'),
            ($ === 'pointerout' || $ === 'pointerover') &&
              ((gt = Td), (St = 'onPointerLeave'), (ht = 'onPointerEnter'), (mt = 'pointer')),
            (bt = ft == null ? dt : ue(ft)),
            (yt = pt == null ? dt : ue(pt)),
            (dt = new gt(St, mt + 'leave', ft, tt, ut)),
            (dt.target = bt),
            (dt.relatedTarget = yt),
            (St = null),
            Wc(ut) === lt &&
              ((gt = new gt(ht, mt + 'enter', pt, tt, ut)),
              (gt.target = yt),
              (gt.relatedTarget = bt),
              (St = gt)),
            (bt = St),
            ft && pt)
          )
            t: {
              for (gt = ft, ht = pt, mt = 0, yt = gt; yt; yt = vf(yt)) mt++;
              for (yt = 0, St = ht; St; St = vf(St)) yt++;
              for (; 0 < mt - yt; ) (gt = vf(gt)), mt--;
              for (; 0 < yt - mt; ) (ht = vf(ht)), yt--;
              for (; mt--; ) {
                if (gt === ht || (ht !== null && gt === ht.alternate)) break t;
                (gt = vf(gt)), (ht = vf(ht));
              }
              gt = null;
            }
          else gt = null;
          ft !== null && wf(ct, dt, ft, gt, !1),
            pt !== null && bt !== null && wf(ct, bt, pt, gt, !0);
        }
      }
      e: {
        if (
          ((dt = lt ? ue(lt) : window),
          (ft = dt.nodeName && dt.nodeName.toLowerCase()),
          ft === 'select' || (ft === 'input' && dt.type === 'file'))
        )
          var _t = ve;
        else if (me(dt))
          if (we) _t = Fe;
          else {
            _t = De;
            var Ct = Ce;
          }
        else
          (ft = dt.nodeName) &&
            ft.toLowerCase() === 'input' &&
            (dt.type === 'checkbox' || dt.type === 'radio') &&
            (_t = Ee);
        if (_t && (_t = _t($, lt))) {
          ne(ct, _t, tt, ut);
          break e;
        }
        Ct && Ct($, dt, lt),
          $ === 'focusout' &&
            (Ct = dt._wrapperState) &&
            Ct.controlled &&
            dt.type === 'number' &&
            cb(dt, 'number', dt.value);
      }
      switch (((Ct = lt ? ue(lt) : window), $)) {
        case 'focusin':
          (me(Ct) || Ct.contentEditable === 'true') && ((Qe = Ct), (Re = lt), (Se = null));
          break;
        case 'focusout':
          Se = Re = Qe = null;
          break;
        case 'mousedown':
          Te = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Te = !1), Ue(ct, tt, ut);
          break;
        case 'selectionchange':
          if (Pe) break;
        case 'keydown':
        case 'keyup':
          Ue(ct, tt, ut);
      }
      var wt;
      if (ae)
        e: {
          switch ($) {
            case 'compositionstart':
              var Et = 'onCompositionStart';
              break e;
            case 'compositionend':
              Et = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              Et = 'onCompositionUpdate';
              break e;
          }
          Et = void 0;
        }
      else
        ie
          ? ge($, tt) && (Et = 'onCompositionEnd')
          : $ === 'keydown' && tt.keyCode === 229 && (Et = 'onCompositionStart');
      Et &&
        (de &&
          tt.locale !== 'ko' &&
          (ie || Et !== 'onCompositionStart'
            ? Et === 'onCompositionEnd' && ie && (wt = nd())
            : ((kd = ut), (ld = 'value' in kd ? kd.value : kd.textContent), (ie = !0))),
        (Ct = oe(lt, Et)),
        0 < Ct.length &&
          ((Et = new Ld(Et, $, null, tt, ut)),
          ct.push({ event: Et, listeners: Ct }),
          wt ? (Et.data = wt) : ((wt = he(tt)), wt !== null && (Et.data = wt)))),
        (wt = ce ? je($, tt) : ke($, tt)) &&
          ((lt = oe(lt, 'onBeforeInput')),
          0 < lt.length &&
            ((ut = new Ld('onBeforeInput', 'beforeinput', null, tt, ut)),
            ct.push({ event: ut, listeners: lt }),
            (ut.data = wt)));
    }
    se(ct, et);
  });
}
function tf($, et, tt) {
  return { instance: $, listener: et, currentTarget: tt };
}
function oe($, et) {
  for (var tt = et + 'Capture', rt = []; $ !== null; ) {
    var nt = $,
      ot = nt.stateNode;
    nt.tag === 5 &&
      ot !== null &&
      ((nt = ot),
      (ot = Kb($, tt)),
      ot != null && rt.unshift(tf($, ot, nt)),
      (ot = Kb($, et)),
      ot != null && rt.push(tf($, ot, nt))),
      ($ = $.return);
  }
  return rt;
}
function vf($) {
  if ($ === null) return null;
  do $ = $.return;
  while ($ && $.tag !== 5);
  return $ || null;
}
function wf($, et, tt, rt, nt) {
  for (var ot = et._reactName, it = []; tt !== null && tt !== rt; ) {
    var at = tt,
      st = at.alternate,
      lt = at.stateNode;
    if (st !== null && st === rt) break;
    at.tag === 5 &&
      lt !== null &&
      ((at = lt),
      nt
        ? ((st = Kb(tt, ot)), st != null && it.unshift(tf(tt, st, at)))
        : nt || ((st = Kb(tt, ot)), st != null && it.push(tf(tt, st, at)))),
      (tt = tt.return);
  }
  it.length !== 0 && $.push({ event: et, listeners: it });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf($) {
  return (typeof $ == 'string' ? $ : '' + $)
    .replace(
      xf,
      `
`
    )
    .replace(yf, '');
}
function Af($, et, tt) {
  if (((et = zf(et)), zf($) !== et && tt)) throw Error(p$5(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef($, et) {
  return (
    $ === 'textarea' ||
    $ === 'noscript' ||
    typeof et.children == 'string' ||
    typeof et.children == 'number' ||
    (typeof et.dangerouslySetInnerHTML == 'object' &&
      et.dangerouslySetInnerHTML !== null &&
      et.dangerouslySetInnerHTML.__html != null)
  );
}
var Ff = typeof setTimeout == 'function' ? setTimeout : void 0,
  Gf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hf = typeof Promise == 'function' ? Promise : void 0,
  Jf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hf < 'u'
      ? function ($) {
          return Hf.resolve(null).then($).catch(If);
        }
      : Ff;
function If($) {
  setTimeout(function () {
    throw $;
  });
}
function Kf($, et) {
  var tt = et,
    rt = 0;
  do {
    var nt = tt.nextSibling;
    if (($.removeChild(tt), nt && nt.nodeType === 8))
      if (((tt = nt.data), tt === '/$')) {
        if (rt === 0) {
          $.removeChild(nt), bd(et);
          return;
        }
        rt--;
      } else (tt !== '$' && tt !== '$?' && tt !== '$!') || rt++;
    tt = nt;
  } while (tt);
  bd(et);
}
function Lf($) {
  for (; $ != null; $ = $.nextSibling) {
    var et = $.nodeType;
    if (et === 1 || et === 3) break;
    if (et === 8) {
      if (((et = $.data), et === '$' || et === '$!' || et === '$?')) break;
      if (et === '/$') return null;
    }
  }
  return $;
}
function Mf($) {
  $ = $.previousSibling;
  for (var et = 0; $; ) {
    if ($.nodeType === 8) {
      var tt = $.data;
      if (tt === '$' || tt === '$!' || tt === '$?') {
        if (et === 0) return $;
        et--;
      } else tt === '/$' && et++;
    }
    $ = $.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = '__reactFiber$' + Nf,
  Pf = '__reactProps$' + Nf,
  uf = '__reactContainer$' + Nf,
  of = '__reactEvents$' + Nf,
  Qf = '__reactListeners$' + Nf,
  Rf = '__reactHandles$' + Nf;
function Wc($) {
  var et = $[Of];
  if (et) return et;
  for (var tt = $.parentNode; tt; ) {
    if ((et = tt[uf] || tt[Of])) {
      if (((tt = et.alternate), et.child !== null || (tt !== null && tt.child !== null)))
        for ($ = Mf($); $ !== null; ) {
          if ((tt = $[Of])) return tt;
          $ = Mf($);
        }
      return et;
    }
    ($ = tt), (tt = $.parentNode);
  }
  return null;
}
function Cb($) {
  return (
    ($ = $[Of] || $[uf]),
    !$ || ($.tag !== 5 && $.tag !== 6 && $.tag !== 13 && $.tag !== 3) ? null : $
  );
}
function ue($) {
  if ($.tag === 5 || $.tag === 6) return $.stateNode;
  throw Error(p$5(33));
}
function Db($) {
  return $[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf($) {
  return { current: $ };
}
function E$1($) {
  0 > Tf || (($.current = Sf[Tf]), (Sf[Tf] = null), Tf--);
}
function G$1($, et) {
  Tf++, (Sf[Tf] = $.current), ($.current = et);
}
var Vf = {},
  H$1 = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf($, et) {
  var tt = $.type.contextTypes;
  if (!tt) return Vf;
  var rt = $.stateNode;
  if (rt && rt.__reactInternalMemoizedUnmaskedChildContext === et)
    return rt.__reactInternalMemoizedMaskedChildContext;
  var nt = {},
    ot;
  for (ot in tt) nt[ot] = et[ot];
  return (
    rt &&
      (($ = $.stateNode),
      ($.__reactInternalMemoizedUnmaskedChildContext = et),
      ($.__reactInternalMemoizedMaskedChildContext = nt)),
    nt
  );
}
function Zf($) {
  return ($ = $.childContextTypes), $ != null;
}
function $f() {
  E$1(Wf), E$1(H$1);
}
function ag($, et, tt) {
  if (H$1.current !== Vf) throw Error(p$5(168));
  G$1(H$1, et), G$1(Wf, tt);
}
function bg($, et, tt) {
  var rt = $.stateNode;
  if (((et = et.childContextTypes), typeof rt.getChildContext != 'function')) return tt;
  rt = rt.getChildContext();
  for (var nt in rt) if (!(nt in et)) throw Error(p$5(108, Ra($) || 'Unknown', nt));
  return A$2({}, tt, rt);
}
function cg($) {
  return (
    ($ = (($ = $.stateNode) && $.__reactInternalMemoizedMergedChildContext) || Vf),
    (Xf = H$1.current),
    G$1(H$1, $),
    G$1(Wf, Wf.current),
    !0
  );
}
function dg($, et, tt) {
  var rt = $.stateNode;
  if (!rt) throw Error(p$5(169));
  tt
    ? (($ = bg($, et, Xf)),
      (rt.__reactInternalMemoizedMergedChildContext = $),
      E$1(Wf),
      E$1(H$1),
      G$1(H$1, $))
    : E$1(Wf),
    G$1(Wf, tt);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg($) {
  eg === null ? (eg = [$]) : eg.push($);
}
function ig($) {
  (fg = !0), hg($);
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0;
    var $ = 0,
      et = C;
    try {
      var tt = eg;
      for (C = 1; $ < tt.length; $++) {
        var rt = tt[$];
        do rt = rt(!0);
        while (rt !== null);
      }
      (eg = null), (fg = !1);
    } catch (nt) {
      throw (eg !== null && (eg = eg.slice($ + 1)), ac(fc, jg), nt);
    } finally {
      (C = et), (gg = !1);
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = '';
function tg($, et) {
  (kg[lg++] = ng), (kg[lg++] = mg), (mg = $), (ng = et);
}
function ug($, et, tt) {
  (og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (qg = $);
  var rt = rg;
  $ = sg;
  var nt = 32 - oc(rt) - 1;
  (rt &= ~(1 << nt)), (tt += 1);
  var ot = 32 - oc(et) + nt;
  if (30 < ot) {
    var it = nt - (nt % 5);
    (ot = (rt & ((1 << it) - 1)).toString(32)),
      (rt >>= it),
      (nt -= it),
      (rg = (1 << (32 - oc(et) + nt)) | (tt << nt) | rt),
      (sg = ot + $);
  } else (rg = (1 << ot) | (tt << nt) | rt), (sg = $);
}
function vg($) {
  $.return !== null && (tg($, 1), ug($, 1, 0));
}
function wg($) {
  for (; $ === mg; ) (mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null);
  for (; $ === qg; )
    (qg = og[--pg]),
      (og[pg] = null),
      (sg = og[--pg]),
      (og[pg] = null),
      (rg = og[--pg]),
      (og[pg] = null);
}
var xg = null,
  yg = null,
  I$1 = !1,
  zg = null;
function Ag($, et) {
  var tt = Bg(5, null, null, 0);
  (tt.elementType = 'DELETED'),
    (tt.stateNode = et),
    (tt.return = $),
    (et = $.deletions),
    et === null ? (($.deletions = [tt]), ($.flags |= 16)) : et.push(tt);
}
function Cg($, et) {
  switch ($.tag) {
    case 5:
      var tt = $.type;
      return (
        (et = et.nodeType !== 1 || tt.toLowerCase() !== et.nodeName.toLowerCase() ? null : et),
        et !== null ? (($.stateNode = et), (xg = $), (yg = Lf(et.firstChild)), !0) : !1
      );
    case 6:
      return (
        (et = $.pendingProps === '' || et.nodeType !== 3 ? null : et),
        et !== null ? (($.stateNode = et), (xg = $), (yg = null), !0) : !1
      );
    case 13:
      return (
        (et = et.nodeType !== 8 ? null : et),
        et !== null
          ? ((tt = qg !== null ? { id: rg, overflow: sg } : null),
            ($.memoizedState = { dehydrated: et, treeContext: tt, retryLane: 1073741824 }),
            (tt = Bg(18, null, null, 0)),
            (tt.stateNode = et),
            (tt.return = $),
            ($.child = tt),
            (xg = $),
            (yg = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dg($) {
  return ($.mode & 1) !== 0 && ($.flags & 128) === 0;
}
function Eg($) {
  if (I$1) {
    var et = yg;
    if (et) {
      var tt = et;
      if (!Cg($, et)) {
        if (Dg($)) throw Error(p$5(418));
        et = Lf(tt.nextSibling);
        var rt = xg;
        et && Cg($, et) ? Ag(rt, tt) : (($.flags = ($.flags & -4097) | 2), (I$1 = !1), (xg = $));
      }
    } else {
      if (Dg($)) throw Error(p$5(418));
      ($.flags = ($.flags & -4097) | 2), (I$1 = !1), (xg = $);
    }
  }
}
function Fg($) {
  for ($ = $.return; $ !== null && $.tag !== 5 && $.tag !== 3 && $.tag !== 13; ) $ = $.return;
  xg = $;
}
function Gg($) {
  if ($ !== xg) return !1;
  if (!I$1) return Fg($), (I$1 = !0), !1;
  var et;
  if (
    ((et = $.tag !== 3) &&
      !(et = $.tag !== 5) &&
      ((et = $.type), (et = et !== 'head' && et !== 'body' && !Ef($.type, $.memoizedProps))),
    et && (et = yg))
  ) {
    if (Dg($)) throw (Hg(), Error(p$5(418)));
    for (; et; ) Ag($, et), (et = Lf(et.nextSibling));
  }
  if ((Fg($), $.tag === 13)) {
    if ((($ = $.memoizedState), ($ = $ !== null ? $.dehydrated : null), !$)) throw Error(p$5(317));
    e: {
      for ($ = $.nextSibling, et = 0; $; ) {
        if ($.nodeType === 8) {
          var tt = $.data;
          if (tt === '/$') {
            if (et === 0) {
              yg = Lf($.nextSibling);
              break e;
            }
            et--;
          } else (tt !== '$' && tt !== '$!' && tt !== '$?') || et++;
        }
        $ = $.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf($.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var $ = yg; $; ) $ = Lf($.nextSibling);
}
function Ig() {
  (yg = xg = null), (I$1 = !1);
}
function Jg($) {
  zg === null ? (zg = [$]) : zg.push($);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg($, et) {
  if ($ && $.defaultProps) {
    (et = A$2({}, et)), ($ = $.defaultProps);
    for (var tt in $) et[tt] === void 0 && (et[tt] = $[tt]);
    return et;
  }
  return et;
}
var Mg = Uf(null),
  Ng = null,
  Og = null,
  Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg($) {
  var et = Mg.current;
  E$1(Mg), ($._currentValue = et);
}
function Sg($, et, tt) {
  for (; $ !== null; ) {
    var rt = $.alternate;
    if (
      (($.childLanes & et) !== et
        ? (($.childLanes |= et), rt !== null && (rt.childLanes |= et))
        : rt !== null && (rt.childLanes & et) !== et && (rt.childLanes |= et),
      $ === tt)
    )
      break;
    $ = $.return;
  }
}
function Tg($, et) {
  (Ng = $),
    (Pg = Og = null),
    ($ = $.dependencies),
    $ !== null && $.firstContext !== null && ($.lanes & et && (Ug = !0), ($.firstContext = null));
}
function Vg($) {
  var et = $._currentValue;
  if (Pg !== $)
    if ((($ = { context: $, memoizedValue: et, next: null }), Og === null)) {
      if (Ng === null) throw Error(p$5(308));
      (Og = $), (Ng.dependencies = { lanes: 0, firstContext: $ });
    } else Og = Og.next = $;
  return et;
}
var Wg = null;
function Xg($) {
  Wg === null ? (Wg = [$]) : Wg.push($);
}
function Yg($, et, tt, rt) {
  var nt = et.interleaved;
  return (
    nt === null ? ((tt.next = tt), Xg(et)) : ((tt.next = nt.next), (nt.next = tt)),
    (et.interleaved = tt),
    Zg($, rt)
  );
}
function Zg($, et) {
  $.lanes |= et;
  var tt = $.alternate;
  for (tt !== null && (tt.lanes |= et), tt = $, $ = $.return; $ !== null; )
    ($.childLanes |= et),
      (tt = $.alternate),
      tt !== null && (tt.childLanes |= et),
      (tt = $),
      ($ = $.return);
  return tt.tag === 3 ? tt.stateNode : null;
}
var $g = !1;
function ah($) {
  $.updateQueue = {
    baseState: $.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function bh($, et) {
  ($ = $.updateQueue),
    et.updateQueue === $ &&
      (et.updateQueue = {
        baseState: $.baseState,
        firstBaseUpdate: $.firstBaseUpdate,
        lastBaseUpdate: $.lastBaseUpdate,
        shared: $.shared,
        effects: $.effects
      });
}
function ch($, et) {
  return { eventTime: $, lane: et, tag: 0, payload: null, callback: null, next: null };
}
function dh($, et, tt) {
  var rt = $.updateQueue;
  if (rt === null) return null;
  if (((rt = rt.shared), K & 2)) {
    var nt = rt.pending;
    return (
      nt === null ? (et.next = et) : ((et.next = nt.next), (nt.next = et)),
      (rt.pending = et),
      Zg($, tt)
    );
  }
  return (
    (nt = rt.interleaved),
    nt === null ? ((et.next = et), Xg(rt)) : ((et.next = nt.next), (nt.next = et)),
    (rt.interleaved = et),
    Zg($, tt)
  );
}
function eh($, et, tt) {
  if (((et = et.updateQueue), et !== null && ((et = et.shared), (tt & 4194240) !== 0))) {
    var rt = et.lanes;
    (rt &= $.pendingLanes), (tt |= rt), (et.lanes = tt), Cc($, tt);
  }
}
function fh($, et) {
  var tt = $.updateQueue,
    rt = $.alternate;
  if (rt !== null && ((rt = rt.updateQueue), tt === rt)) {
    var nt = null,
      ot = null;
    if (((tt = tt.firstBaseUpdate), tt !== null)) {
      do {
        var it = {
          eventTime: tt.eventTime,
          lane: tt.lane,
          tag: tt.tag,
          payload: tt.payload,
          callback: tt.callback,
          next: null
        };
        ot === null ? (nt = ot = it) : (ot = ot.next = it), (tt = tt.next);
      } while (tt !== null);
      ot === null ? (nt = ot = et) : (ot = ot.next = et);
    } else nt = ot = et;
    (tt = {
      baseState: rt.baseState,
      firstBaseUpdate: nt,
      lastBaseUpdate: ot,
      shared: rt.shared,
      effects: rt.effects
    }),
      ($.updateQueue = tt);
    return;
  }
  ($ = tt.lastBaseUpdate),
    $ === null ? (tt.firstBaseUpdate = et) : ($.next = et),
    (tt.lastBaseUpdate = et);
}
function gh($, et, tt, rt) {
  var nt = $.updateQueue;
  $g = !1;
  var ot = nt.firstBaseUpdate,
    it = nt.lastBaseUpdate,
    at = nt.shared.pending;
  if (at !== null) {
    nt.shared.pending = null;
    var st = at,
      lt = st.next;
    (st.next = null), it === null ? (ot = lt) : (it.next = lt), (it = st);
    var ut = $.alternate;
    ut !== null &&
      ((ut = ut.updateQueue),
      (at = ut.lastBaseUpdate),
      at !== it &&
        (at === null ? (ut.firstBaseUpdate = lt) : (at.next = lt), (ut.lastBaseUpdate = st)));
  }
  if (ot !== null) {
    var ct = nt.baseState;
    (it = 0), (ut = lt = st = null), (at = ot);
    do {
      var dt = at.lane,
        ft = at.eventTime;
      if ((rt & dt) === dt) {
        ut !== null &&
          (ut = ut.next =
            {
              eventTime: ft,
              lane: 0,
              tag: at.tag,
              payload: at.payload,
              callback: at.callback,
              next: null
            });
        e: {
          var pt = $,
            gt = at;
          switch (((dt = et), (ft = tt), gt.tag)) {
            case 1:
              if (((pt = gt.payload), typeof pt == 'function')) {
                ct = pt.call(ft, ct, dt);
                break e;
              }
              ct = pt;
              break e;
            case 3:
              pt.flags = (pt.flags & -65537) | 128;
            case 0:
              if (
                ((pt = gt.payload),
                (dt = typeof pt == 'function' ? pt.call(ft, ct, dt) : pt),
                dt == null)
              )
                break e;
              ct = A$2({}, ct, dt);
              break e;
            case 2:
              $g = !0;
          }
        }
        at.callback !== null &&
          at.lane !== 0 &&
          (($.flags |= 64), (dt = nt.effects), dt === null ? (nt.effects = [at]) : dt.push(at));
      } else
        (ft = {
          eventTime: ft,
          lane: dt,
          tag: at.tag,
          payload: at.payload,
          callback: at.callback,
          next: null
        }),
          ut === null ? ((lt = ut = ft), (st = ct)) : (ut = ut.next = ft),
          (it |= dt);
      if (((at = at.next), at === null)) {
        if (((at = nt.shared.pending), at === null)) break;
        (dt = at),
          (at = dt.next),
          (dt.next = null),
          (nt.lastBaseUpdate = dt),
          (nt.shared.pending = null);
      }
    } while (1);
    if (
      (ut === null && (st = ct),
      (nt.baseState = st),
      (nt.firstBaseUpdate = lt),
      (nt.lastBaseUpdate = ut),
      (et = nt.shared.interleaved),
      et !== null)
    ) {
      nt = et;
      do (it |= nt.lane), (nt = nt.next);
      while (nt !== et);
    } else ot === null && (nt.shared.lanes = 0);
    (hh |= it), ($.lanes = it), ($.memoizedState = ct);
  }
}
function ih($, et, tt) {
  if ((($ = et.effects), (et.effects = null), $ !== null))
    for (et = 0; et < $.length; et++) {
      var rt = $[et],
        nt = rt.callback;
      if (nt !== null) {
        if (((rt.callback = null), (rt = tt), typeof nt != 'function')) throw Error(p$5(191, nt));
        nt.call(rt);
      }
    }
}
var jh = new aa.Component().refs;
function kh($, et, tt, rt) {
  (et = $.memoizedState),
    (tt = tt(rt, et)),
    (tt = tt == null ? et : A$2({}, et, tt)),
    ($.memoizedState = tt),
    $.lanes === 0 && ($.updateQueue.baseState = tt);
}
var nh = {
  isMounted: function ($) {
    return ($ = $._reactInternals) ? Vb($) === $ : !1;
  },
  enqueueSetState: function ($, et, tt) {
    $ = $._reactInternals;
    var rt = L$1(),
      nt = lh($),
      ot = ch(rt, nt);
    (ot.payload = et),
      tt != null && (ot.callback = tt),
      (et = dh($, ot, nt)),
      et !== null && (mh(et, $, nt, rt), eh(et, $, nt));
  },
  enqueueReplaceState: function ($, et, tt) {
    $ = $._reactInternals;
    var rt = L$1(),
      nt = lh($),
      ot = ch(rt, nt);
    (ot.tag = 1),
      (ot.payload = et),
      tt != null && (ot.callback = tt),
      (et = dh($, ot, nt)),
      et !== null && (mh(et, $, nt, rt), eh(et, $, nt));
  },
  enqueueForceUpdate: function ($, et) {
    $ = $._reactInternals;
    var tt = L$1(),
      rt = lh($),
      nt = ch(tt, rt);
    (nt.tag = 2),
      et != null && (nt.callback = et),
      (et = dh($, nt, rt)),
      et !== null && (mh(et, $, rt, tt), eh(et, $, rt));
  }
};
function oh($, et, tt, rt, nt, ot, it) {
  return (
    ($ = $.stateNode),
    typeof $.shouldComponentUpdate == 'function'
      ? $.shouldComponentUpdate(rt, ot, it)
      : et.prototype && et.prototype.isPureReactComponent
      ? !Ie(tt, rt) || !Ie(nt, ot)
      : !0
  );
}
function ph($, et, tt) {
  var rt = !1,
    nt = Vf,
    ot = et.contextType;
  return (
    typeof ot == 'object' && ot !== null
      ? (ot = Vg(ot))
      : ((nt = Zf(et) ? Xf : H$1.current),
        (rt = et.contextTypes),
        (ot = (rt = rt != null) ? Yf($, nt) : Vf)),
    (et = new et(tt, ot)),
    ($.memoizedState = et.state !== null && et.state !== void 0 ? et.state : null),
    (et.updater = nh),
    ($.stateNode = et),
    (et._reactInternals = $),
    rt &&
      (($ = $.stateNode),
      ($.__reactInternalMemoizedUnmaskedChildContext = nt),
      ($.__reactInternalMemoizedMaskedChildContext = ot)),
    et
  );
}
function qh($, et, tt, rt) {
  ($ = et.state),
    typeof et.componentWillReceiveProps == 'function' && et.componentWillReceiveProps(tt, rt),
    typeof et.UNSAFE_componentWillReceiveProps == 'function' &&
      et.UNSAFE_componentWillReceiveProps(tt, rt),
    et.state !== $ && nh.enqueueReplaceState(et, et.state, null);
}
function rh($, et, tt, rt) {
  var nt = $.stateNode;
  (nt.props = tt), (nt.state = $.memoizedState), (nt.refs = jh), ah($);
  var ot = et.contextType;
  typeof ot == 'object' && ot !== null
    ? (nt.context = Vg(ot))
    : ((ot = Zf(et) ? Xf : H$1.current), (nt.context = Yf($, ot))),
    (nt.state = $.memoizedState),
    (ot = et.getDerivedStateFromProps),
    typeof ot == 'function' && (kh($, et, ot, tt), (nt.state = $.memoizedState)),
    typeof et.getDerivedStateFromProps == 'function' ||
      typeof nt.getSnapshotBeforeUpdate == 'function' ||
      (typeof nt.UNSAFE_componentWillMount != 'function' &&
        typeof nt.componentWillMount != 'function') ||
      ((et = nt.state),
      typeof nt.componentWillMount == 'function' && nt.componentWillMount(),
      typeof nt.UNSAFE_componentWillMount == 'function' && nt.UNSAFE_componentWillMount(),
      et !== nt.state && nh.enqueueReplaceState(nt, nt.state, null),
      gh($, tt, nt, rt),
      (nt.state = $.memoizedState)),
    typeof nt.componentDidMount == 'function' && ($.flags |= 4194308);
}
function sh($, et, tt) {
  if ((($ = tt.ref), $ !== null && typeof $ != 'function' && typeof $ != 'object')) {
    if (tt._owner) {
      if (((tt = tt._owner), tt)) {
        if (tt.tag !== 1) throw Error(p$5(309));
        var rt = tt.stateNode;
      }
      if (!rt) throw Error(p$5(147, $));
      var nt = rt,
        ot = '' + $;
      return et !== null &&
        et.ref !== null &&
        typeof et.ref == 'function' &&
        et.ref._stringRef === ot
        ? et.ref
        : ((et = function (it) {
            var at = nt.refs;
            at === jh && (at = nt.refs = {}), it === null ? delete at[ot] : (at[ot] = it);
          }),
          (et._stringRef = ot),
          et);
    }
    if (typeof $ != 'string') throw Error(p$5(284));
    if (!tt._owner) throw Error(p$5(290, $));
  }
  return $;
}
function th($, et) {
  throw (
    (($ = Object.prototype.toString.call(et)),
    Error(
      p$5(31, $ === '[object Object]' ? 'object with keys {' + Object.keys(et).join(', ') + '}' : $)
    ))
  );
}
function uh($) {
  var et = $._init;
  return et($._payload);
}
function vh$1($) {
  function et(ht, mt) {
    if ($) {
      var yt = ht.deletions;
      yt === null ? ((ht.deletions = [mt]), (ht.flags |= 16)) : yt.push(mt);
    }
  }
  function tt(ht, mt) {
    if (!$) return null;
    for (; mt !== null; ) et(ht, mt), (mt = mt.sibling);
    return null;
  }
  function rt(ht, mt) {
    for (ht = new Map(); mt !== null; )
      mt.key !== null ? ht.set(mt.key, mt) : ht.set(mt.index, mt), (mt = mt.sibling);
    return ht;
  }
  function nt(ht, mt) {
    return (ht = wh(ht, mt)), (ht.index = 0), (ht.sibling = null), ht;
  }
  function ot(ht, mt, yt) {
    return (
      (ht.index = yt),
      $
        ? ((yt = ht.alternate),
          yt !== null
            ? ((yt = yt.index), yt < mt ? ((ht.flags |= 2), mt) : yt)
            : ((ht.flags |= 2), mt))
        : ((ht.flags |= 1048576), mt)
    );
  }
  function it(ht) {
    return $ && ht.alternate === null && (ht.flags |= 2), ht;
  }
  function at(ht, mt, yt, St) {
    return mt === null || mt.tag !== 6
      ? ((mt = xh(yt, ht.mode, St)), (mt.return = ht), mt)
      : ((mt = nt(mt, yt)), (mt.return = ht), mt);
  }
  function st(ht, mt, yt, St) {
    var _t = yt.type;
    return _t === ya
      ? ut(ht, mt, yt.props.children, St, yt.key)
      : mt !== null &&
        (mt.elementType === _t ||
          (typeof _t == 'object' && _t !== null && _t.$$typeof === Ha && uh(_t) === mt.type))
      ? ((St = nt(mt, yt.props)), (St.ref = sh(ht, mt, yt)), (St.return = ht), St)
      : ((St = yh(yt.type, yt.key, yt.props, null, ht.mode, St)),
        (St.ref = sh(ht, mt, yt)),
        (St.return = ht),
        St);
  }
  function lt(ht, mt, yt, St) {
    return mt === null ||
      mt.tag !== 4 ||
      mt.stateNode.containerInfo !== yt.containerInfo ||
      mt.stateNode.implementation !== yt.implementation
      ? ((mt = zh(yt, ht.mode, St)), (mt.return = ht), mt)
      : ((mt = nt(mt, yt.children || [])), (mt.return = ht), mt);
  }
  function ut(ht, mt, yt, St, _t) {
    return mt === null || mt.tag !== 7
      ? ((mt = Ah(yt, ht.mode, St, _t)), (mt.return = ht), mt)
      : ((mt = nt(mt, yt)), (mt.return = ht), mt);
  }
  function ct(ht, mt, yt) {
    if ((typeof mt == 'string' && mt !== '') || typeof mt == 'number')
      return (mt = xh('' + mt, ht.mode, yt)), (mt.return = ht), mt;
    if (typeof mt == 'object' && mt !== null) {
      switch (mt.$$typeof) {
        case va:
          return (
            (yt = yh(mt.type, mt.key, mt.props, null, ht.mode, yt)),
            (yt.ref = sh(ht, null, mt)),
            (yt.return = ht),
            yt
          );
        case wa:
          return (mt = zh(mt, ht.mode, yt)), (mt.return = ht), mt;
        case Ha:
          var St = mt._init;
          return ct(ht, St(mt._payload), yt);
      }
      if (eb(mt) || Ka(mt)) return (mt = Ah(mt, ht.mode, yt, null)), (mt.return = ht), mt;
      th(ht, mt);
    }
    return null;
  }
  function dt(ht, mt, yt, St) {
    var _t = mt !== null ? mt.key : null;
    if ((typeof yt == 'string' && yt !== '') || typeof yt == 'number')
      return _t !== null ? null : at(ht, mt, '' + yt, St);
    if (typeof yt == 'object' && yt !== null) {
      switch (yt.$$typeof) {
        case va:
          return yt.key === _t ? st(ht, mt, yt, St) : null;
        case wa:
          return yt.key === _t ? lt(ht, mt, yt, St) : null;
        case Ha:
          return (_t = yt._init), dt(ht, mt, _t(yt._payload), St);
      }
      if (eb(yt) || Ka(yt)) return _t !== null ? null : ut(ht, mt, yt, St, null);
      th(ht, yt);
    }
    return null;
  }
  function ft(ht, mt, yt, St, _t) {
    if ((typeof St == 'string' && St !== '') || typeof St == 'number')
      return (ht = ht.get(yt) || null), at(mt, ht, '' + St, _t);
    if (typeof St == 'object' && St !== null) {
      switch (St.$$typeof) {
        case va:
          return (ht = ht.get(St.key === null ? yt : St.key) || null), st(mt, ht, St, _t);
        case wa:
          return (ht = ht.get(St.key === null ? yt : St.key) || null), lt(mt, ht, St, _t);
        case Ha:
          var Ct = St._init;
          return ft(ht, mt, yt, Ct(St._payload), _t);
      }
      if (eb(St) || Ka(St)) return (ht = ht.get(yt) || null), ut(mt, ht, St, _t, null);
      th(mt, St);
    }
    return null;
  }
  function pt(ht, mt, yt, St) {
    for (
      var _t = null, Ct = null, wt = mt, Et = (mt = 0), Rt = null;
      wt !== null && Et < yt.length;
      Et++
    ) {
      wt.index > Et ? ((Rt = wt), (wt = null)) : (Rt = wt.sibling);
      var kt = dt(ht, wt, yt[Et], St);
      if (kt === null) {
        wt === null && (wt = Rt);
        break;
      }
      $ && wt && kt.alternate === null && et(ht, wt),
        (mt = ot(kt, mt, Et)),
        Ct === null ? (_t = kt) : (Ct.sibling = kt),
        (Ct = kt),
        (wt = Rt);
    }
    if (Et === yt.length) return tt(ht, wt), I$1 && tg(ht, Et), _t;
    if (wt === null) {
      for (; Et < yt.length; Et++)
        (wt = ct(ht, yt[Et], St)),
          wt !== null &&
            ((mt = ot(wt, mt, Et)), Ct === null ? (_t = wt) : (Ct.sibling = wt), (Ct = wt));
      return I$1 && tg(ht, Et), _t;
    }
    for (wt = rt(ht, wt); Et < yt.length; Et++)
      (Rt = ft(wt, ht, Et, yt[Et], St)),
        Rt !== null &&
          ($ && Rt.alternate !== null && wt.delete(Rt.key === null ? Et : Rt.key),
          (mt = ot(Rt, mt, Et)),
          Ct === null ? (_t = Rt) : (Ct.sibling = Rt),
          (Ct = Rt));
    return (
      $ &&
        wt.forEach(function (jt) {
          return et(ht, jt);
        }),
      I$1 && tg(ht, Et),
      _t
    );
  }
  function gt(ht, mt, yt, St) {
    var _t = Ka(yt);
    if (typeof _t != 'function') throw Error(p$5(150));
    if (((yt = _t.call(yt)), yt == null)) throw Error(p$5(151));
    for (
      var Ct = (_t = null), wt = mt, Et = (mt = 0), Rt = null, kt = yt.next();
      wt !== null && !kt.done;
      Et++, kt = yt.next()
    ) {
      wt.index > Et ? ((Rt = wt), (wt = null)) : (Rt = wt.sibling);
      var jt = dt(ht, wt, kt.value, St);
      if (jt === null) {
        wt === null && (wt = Rt);
        break;
      }
      $ && wt && jt.alternate === null && et(ht, wt),
        (mt = ot(jt, mt, Et)),
        Ct === null ? (_t = jt) : (Ct.sibling = jt),
        (Ct = jt),
        (wt = Rt);
    }
    if (kt.done) return tt(ht, wt), I$1 && tg(ht, Et), _t;
    if (wt === null) {
      for (; !kt.done; Et++, kt = yt.next())
        (kt = ct(ht, kt.value, St)),
          kt !== null &&
            ((mt = ot(kt, mt, Et)), Ct === null ? (_t = kt) : (Ct.sibling = kt), (Ct = kt));
      return I$1 && tg(ht, Et), _t;
    }
    for (wt = rt(ht, wt); !kt.done; Et++, kt = yt.next())
      (kt = ft(wt, ht, Et, kt.value, St)),
        kt !== null &&
          ($ && kt.alternate !== null && wt.delete(kt.key === null ? Et : kt.key),
          (mt = ot(kt, mt, Et)),
          Ct === null ? (_t = kt) : (Ct.sibling = kt),
          (Ct = kt));
    return (
      $ &&
        wt.forEach(function (Ut) {
          return et(ht, Ut);
        }),
      I$1 && tg(ht, Et),
      _t
    );
  }
  function bt(ht, mt, yt, St) {
    if (
      (typeof yt == 'object' &&
        yt !== null &&
        yt.type === ya &&
        yt.key === null &&
        (yt = yt.props.children),
      typeof yt == 'object' && yt !== null)
    ) {
      switch (yt.$$typeof) {
        case va:
          e: {
            for (var _t = yt.key, Ct = mt; Ct !== null; ) {
              if (Ct.key === _t) {
                if (((_t = yt.type), _t === ya)) {
                  if (Ct.tag === 7) {
                    tt(ht, Ct.sibling),
                      (mt = nt(Ct, yt.props.children)),
                      (mt.return = ht),
                      (ht = mt);
                    break e;
                  }
                } else if (
                  Ct.elementType === _t ||
                  (typeof _t == 'object' && _t !== null && _t.$$typeof === Ha && uh(_t) === Ct.type)
                ) {
                  tt(ht, Ct.sibling),
                    (mt = nt(Ct, yt.props)),
                    (mt.ref = sh(ht, Ct, yt)),
                    (mt.return = ht),
                    (ht = mt);
                  break e;
                }
                tt(ht, Ct);
                break;
              } else et(ht, Ct);
              Ct = Ct.sibling;
            }
            yt.type === ya
              ? ((mt = Ah(yt.props.children, ht.mode, St, yt.key)), (mt.return = ht), (ht = mt))
              : ((St = yh(yt.type, yt.key, yt.props, null, ht.mode, St)),
                (St.ref = sh(ht, mt, yt)),
                (St.return = ht),
                (ht = St));
          }
          return it(ht);
        case wa:
          e: {
            for (Ct = yt.key; mt !== null; ) {
              if (mt.key === Ct)
                if (
                  mt.tag === 4 &&
                  mt.stateNode.containerInfo === yt.containerInfo &&
                  mt.stateNode.implementation === yt.implementation
                ) {
                  tt(ht, mt.sibling), (mt = nt(mt, yt.children || [])), (mt.return = ht), (ht = mt);
                  break e;
                } else {
                  tt(ht, mt);
                  break;
                }
              else et(ht, mt);
              mt = mt.sibling;
            }
            (mt = zh(yt, ht.mode, St)), (mt.return = ht), (ht = mt);
          }
          return it(ht);
        case Ha:
          return (Ct = yt._init), bt(ht, mt, Ct(yt._payload), St);
      }
      if (eb(yt)) return pt(ht, mt, yt, St);
      if (Ka(yt)) return gt(ht, mt, yt, St);
      th(ht, yt);
    }
    return (typeof yt == 'string' && yt !== '') || typeof yt == 'number'
      ? ((yt = '' + yt),
        mt !== null && mt.tag === 6
          ? (tt(ht, mt.sibling), (mt = nt(mt, yt)), (mt.return = ht), (ht = mt))
          : (tt(ht, mt), (mt = xh(yt, ht.mode, St)), (mt.return = ht), (ht = mt)),
        it(ht))
      : tt(ht, mt);
  }
  return bt;
}
var Bh = vh$1(!0),
  Ch = vh$1(!1),
  Dh = {},
  Eh = Uf(Dh),
  Fh = Uf(Dh),
  Gh = Uf(Dh);
function Hh($) {
  if ($ === Dh) throw Error(p$5(174));
  return $;
}
function Ih($, et) {
  switch ((G$1(Gh, et), G$1(Fh, $), G$1(Eh, Dh), ($ = et.nodeType), $)) {
    case 9:
    case 11:
      et = (et = et.documentElement) ? et.namespaceURI : lb(null, '');
      break;
    default:
      ($ = $ === 8 ? et.parentNode : et),
        (et = $.namespaceURI || null),
        ($ = $.tagName),
        (et = lb(et, $));
  }
  E$1(Eh), G$1(Eh, et);
}
function Jh() {
  E$1(Eh), E$1(Fh), E$1(Gh);
}
function Kh($) {
  Hh(Gh.current);
  var et = Hh(Eh.current),
    tt = lb(et, $.type);
  et !== tt && (G$1(Fh, $), G$1(Eh, tt));
}
function Lh($) {
  Fh.current === $ && (E$1(Eh), E$1(Fh));
}
var M$1 = Uf(0);
function Mh($) {
  for (var et = $; et !== null; ) {
    if (et.tag === 13) {
      var tt = et.memoizedState;
      if (
        tt !== null &&
        ((tt = tt.dehydrated), tt === null || tt.data === '$?' || tt.data === '$!')
      )
        return et;
    } else if (et.tag === 19 && et.memoizedProps.revealOrder !== void 0) {
      if (et.flags & 128) return et;
    } else if (et.child !== null) {
      (et.child.return = et), (et = et.child);
      continue;
    }
    if (et === $) break;
    for (; et.sibling === null; ) {
      if (et.return === null || et.return === $) return null;
      et = et.return;
    }
    (et.sibling.return = et.return), (et = et.sibling);
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var $ = 0; $ < Nh.length; $++) Nh[$]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher,
  Qh = ua.ReactCurrentBatchConfig,
  Rh = 0,
  N$1 = null,
  O$1 = null,
  P$1 = null,
  Sh = !1,
  Th = !1,
  Uh = 0,
  Vh = 0;
function Q$1() {
  throw Error(p$5(321));
}
function Wh($, et) {
  if (et === null) return !1;
  for (var tt = 0; tt < et.length && tt < $.length; tt++) if (!He($[tt], et[tt])) return !1;
  return !0;
}
function Xh($, et, tt, rt, nt, ot) {
  if (
    ((Rh = ot),
    (N$1 = et),
    (et.memoizedState = null),
    (et.updateQueue = null),
    (et.lanes = 0),
    (Ph.current = $ === null || $.memoizedState === null ? Yh : Zh),
    ($ = tt(rt, nt)),
    Th)
  ) {
    ot = 0;
    do {
      if (((Th = !1), (Uh = 0), 25 <= ot)) throw Error(p$5(301));
      (ot += 1), (P$1 = O$1 = null), (et.updateQueue = null), (Ph.current = $h), ($ = tt(rt, nt));
    } while (Th);
  }
  if (
    ((Ph.current = ai),
    (et = O$1 !== null && O$1.next !== null),
    (Rh = 0),
    (P$1 = O$1 = N$1 = null),
    (Sh = !1),
    et)
  )
    throw Error(p$5(300));
  return $;
}
function bi() {
  var $ = Uh !== 0;
  return (Uh = 0), $;
}
function ci() {
  var $ = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return P$1 === null ? (N$1.memoizedState = P$1 = $) : (P$1 = P$1.next = $), P$1;
}
function di() {
  if (O$1 === null) {
    var $ = N$1.alternate;
    $ = $ !== null ? $.memoizedState : null;
  } else $ = O$1.next;
  var et = P$1 === null ? N$1.memoizedState : P$1.next;
  if (et !== null) (P$1 = et), (O$1 = $);
  else {
    if ($ === null) throw Error(p$5(310));
    (O$1 = $),
      ($ = {
        memoizedState: O$1.memoizedState,
        baseState: O$1.baseState,
        baseQueue: O$1.baseQueue,
        queue: O$1.queue,
        next: null
      }),
      P$1 === null ? (N$1.memoizedState = P$1 = $) : (P$1 = P$1.next = $);
  }
  return P$1;
}
function ei($, et) {
  return typeof et == 'function' ? et($) : et;
}
function fi($) {
  var et = di(),
    tt = et.queue;
  if (tt === null) throw Error(p$5(311));
  tt.lastRenderedReducer = $;
  var rt = O$1,
    nt = rt.baseQueue,
    ot = tt.pending;
  if (ot !== null) {
    if (nt !== null) {
      var it = nt.next;
      (nt.next = ot.next), (ot.next = it);
    }
    (rt.baseQueue = nt = ot), (tt.pending = null);
  }
  if (nt !== null) {
    (ot = nt.next), (rt = rt.baseState);
    var at = (it = null),
      st = null,
      lt = ot;
    do {
      var ut = lt.lane;
      if ((Rh & ut) === ut)
        st !== null &&
          (st = st.next =
            {
              lane: 0,
              action: lt.action,
              hasEagerState: lt.hasEagerState,
              eagerState: lt.eagerState,
              next: null
            }),
          (rt = lt.hasEagerState ? lt.eagerState : $(rt, lt.action));
      else {
        var ct = {
          lane: ut,
          action: lt.action,
          hasEagerState: lt.hasEagerState,
          eagerState: lt.eagerState,
          next: null
        };
        st === null ? ((at = st = ct), (it = rt)) : (st = st.next = ct),
          (N$1.lanes |= ut),
          (hh |= ut);
      }
      lt = lt.next;
    } while (lt !== null && lt !== ot);
    st === null ? (it = rt) : (st.next = at),
      He(rt, et.memoizedState) || (Ug = !0),
      (et.memoizedState = rt),
      (et.baseState = it),
      (et.baseQueue = st),
      (tt.lastRenderedState = rt);
  }
  if ((($ = tt.interleaved), $ !== null)) {
    nt = $;
    do (ot = nt.lane), (N$1.lanes |= ot), (hh |= ot), (nt = nt.next);
    while (nt !== $);
  } else nt === null && (tt.lanes = 0);
  return [et.memoizedState, tt.dispatch];
}
function gi($) {
  var et = di(),
    tt = et.queue;
  if (tt === null) throw Error(p$5(311));
  tt.lastRenderedReducer = $;
  var rt = tt.dispatch,
    nt = tt.pending,
    ot = et.memoizedState;
  if (nt !== null) {
    tt.pending = null;
    var it = (nt = nt.next);
    do (ot = $(ot, it.action)), (it = it.next);
    while (it !== nt);
    He(ot, et.memoizedState) || (Ug = !0),
      (et.memoizedState = ot),
      et.baseQueue === null && (et.baseState = ot),
      (tt.lastRenderedState = ot);
  }
  return [ot, rt];
}
function hi() {}
function ii($, et) {
  var tt = N$1,
    rt = di(),
    nt = et(),
    ot = !He(rt.memoizedState, nt);
  if (
    (ot && ((rt.memoizedState = nt), (Ug = !0)),
    (rt = rt.queue),
    ji(ki.bind(null, tt, rt, $), [$]),
    rt.getSnapshot !== et || ot || (P$1 !== null && P$1.memoizedState.tag & 1))
  ) {
    if (((tt.flags |= 2048), li(9, mi.bind(null, tt, rt, nt, et), void 0, null), R$1 === null))
      throw Error(p$5(349));
    Rh & 30 || ni(tt, et, nt);
  }
  return nt;
}
function ni($, et, tt) {
  ($.flags |= 16384),
    ($ = { getSnapshot: et, value: tt }),
    (et = N$1.updateQueue),
    et === null
      ? ((et = { lastEffect: null, stores: null }), (N$1.updateQueue = et), (et.stores = [$]))
      : ((tt = et.stores), tt === null ? (et.stores = [$]) : tt.push($));
}
function mi($, et, tt, rt) {
  (et.value = tt), (et.getSnapshot = rt), oi(et) && pi($);
}
function ki($, et, tt) {
  return tt(function () {
    oi(et) && pi($);
  });
}
function oi($) {
  var et = $.getSnapshot;
  $ = $.value;
  try {
    var tt = et();
    return !He($, tt);
  } catch {
    return !0;
  }
}
function pi($) {
  var et = Zg($, 1);
  et !== null && mh(et, $, 1, -1);
}
function qi($) {
  var et = ci();
  return (
    typeof $ == 'function' && ($ = $()),
    (et.memoizedState = et.baseState = $),
    ($ = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ei,
      lastRenderedState: $
    }),
    (et.queue = $),
    ($ = $.dispatch = ri.bind(null, N$1, $)),
    [et.memoizedState, $]
  );
}
function li($, et, tt, rt) {
  return (
    ($ = { tag: $, create: et, destroy: tt, deps: rt, next: null }),
    (et = N$1.updateQueue),
    et === null
      ? ((et = { lastEffect: null, stores: null }),
        (N$1.updateQueue = et),
        (et.lastEffect = $.next = $))
      : ((tt = et.lastEffect),
        tt === null
          ? (et.lastEffect = $.next = $)
          : ((rt = tt.next), (tt.next = $), ($.next = rt), (et.lastEffect = $))),
    $
  );
}
function si() {
  return di().memoizedState;
}
function ti($, et, tt, rt) {
  var nt = ci();
  (N$1.flags |= $), (nt.memoizedState = li(1 | et, tt, void 0, rt === void 0 ? null : rt));
}
function ui($, et, tt, rt) {
  var nt = di();
  rt = rt === void 0 ? null : rt;
  var ot = void 0;
  if (O$1 !== null) {
    var it = O$1.memoizedState;
    if (((ot = it.destroy), rt !== null && Wh(rt, it.deps))) {
      nt.memoizedState = li(et, tt, ot, rt);
      return;
    }
  }
  (N$1.flags |= $), (nt.memoizedState = li(1 | et, tt, ot, rt));
}
function vi($, et) {
  return ti(8390656, 8, $, et);
}
function ji($, et) {
  return ui(2048, 8, $, et);
}
function wi($, et) {
  return ui(4, 2, $, et);
}
function xi($, et) {
  return ui(4, 4, $, et);
}
function yi($, et) {
  if (typeof et == 'function')
    return (
      ($ = $()),
      et($),
      function () {
        et(null);
      }
    );
  if (et != null)
    return (
      ($ = $()),
      (et.current = $),
      function () {
        et.current = null;
      }
    );
}
function zi($, et, tt) {
  return (tt = tt != null ? tt.concat([$]) : null), ui(4, 4, yi.bind(null, et, $), tt);
}
function Ai() {}
function Bi($, et) {
  var tt = di();
  et = et === void 0 ? null : et;
  var rt = tt.memoizedState;
  return rt !== null && et !== null && Wh(et, rt[1]) ? rt[0] : ((tt.memoizedState = [$, et]), $);
}
function Ci($, et) {
  var tt = di();
  et = et === void 0 ? null : et;
  var rt = tt.memoizedState;
  return rt !== null && et !== null && Wh(et, rt[1])
    ? rt[0]
    : (($ = $()), (tt.memoizedState = [$, et]), $);
}
function Di($, et, tt) {
  return Rh & 21
    ? (He(tt, et) || ((tt = yc()), (N$1.lanes |= tt), (hh |= tt), ($.baseState = !0)), et)
    : ($.baseState && (($.baseState = !1), (Ug = !0)), ($.memoizedState = tt));
}
function Ei($, et) {
  var tt = C;
  (C = tt !== 0 && 4 > tt ? tt : 4), $(!0);
  var rt = Qh.transition;
  Qh.transition = {};
  try {
    $(!1), et();
  } finally {
    (C = tt), (Qh.transition = rt);
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi($, et, tt) {
  var rt = lh($);
  if (((tt = { lane: rt, action: tt, hasEagerState: !1, eagerState: null, next: null }), Hi($)))
    Ii(et, tt);
  else if (((tt = Yg($, et, tt, rt)), tt !== null)) {
    var nt = L$1();
    mh(tt, $, rt, nt), Ji(tt, et, rt);
  }
}
function ri($, et, tt) {
  var rt = lh($),
    nt = { lane: rt, action: tt, hasEagerState: !1, eagerState: null, next: null };
  if (Hi($)) Ii(et, nt);
  else {
    var ot = $.alternate;
    if (
      $.lanes === 0 &&
      (ot === null || ot.lanes === 0) &&
      ((ot = et.lastRenderedReducer), ot !== null)
    )
      try {
        var it = et.lastRenderedState,
          at = ot(it, tt);
        if (((nt.hasEagerState = !0), (nt.eagerState = at), He(at, it))) {
          var st = et.interleaved;
          st === null ? ((nt.next = nt), Xg(et)) : ((nt.next = st.next), (st.next = nt)),
            (et.interleaved = nt);
          return;
        }
      } catch {
      } finally {
      }
    (tt = Yg($, et, nt, rt)), tt !== null && ((nt = L$1()), mh(tt, $, rt, nt), Ji(tt, et, rt));
  }
}
function Hi($) {
  var et = $.alternate;
  return $ === N$1 || (et !== null && et === N$1);
}
function Ii($, et) {
  Th = Sh = !0;
  var tt = $.pending;
  tt === null ? (et.next = et) : ((et.next = tt.next), (tt.next = et)), ($.pending = et);
}
function Ji($, et, tt) {
  if (tt & 4194240) {
    var rt = et.lanes;
    (rt &= $.pendingLanes), (tt |= rt), (et.lanes = tt), Cc($, tt);
  }
}
var ai = {
    readContext: Vg,
    useCallback: Q$1,
    useContext: Q$1,
    useEffect: Q$1,
    useImperativeHandle: Q$1,
    useInsertionEffect: Q$1,
    useLayoutEffect: Q$1,
    useMemo: Q$1,
    useReducer: Q$1,
    useRef: Q$1,
    useState: Q$1,
    useDebugValue: Q$1,
    useDeferredValue: Q$1,
    useTransition: Q$1,
    useMutableSource: Q$1,
    useSyncExternalStore: Q$1,
    useId: Q$1,
    unstable_isNewReconciler: !1
  },
  Yh = {
    readContext: Vg,
    useCallback: function ($, et) {
      return (ci().memoizedState = [$, et === void 0 ? null : et]), $;
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function ($, et, tt) {
      return (tt = tt != null ? tt.concat([$]) : null), ti(4194308, 4, yi.bind(null, et, $), tt);
    },
    useLayoutEffect: function ($, et) {
      return ti(4194308, 4, $, et);
    },
    useInsertionEffect: function ($, et) {
      return ti(4, 2, $, et);
    },
    useMemo: function ($, et) {
      var tt = ci();
      return (et = et === void 0 ? null : et), ($ = $()), (tt.memoizedState = [$, et]), $;
    },
    useReducer: function ($, et, tt) {
      var rt = ci();
      return (
        (et = tt !== void 0 ? tt(et) : et),
        (rt.memoizedState = rt.baseState = et),
        ($ = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $,
          lastRenderedState: et
        }),
        (rt.queue = $),
        ($ = $.dispatch = Gi.bind(null, N$1, $)),
        [rt.memoizedState, $]
      );
    },
    useRef: function ($) {
      var et = ci();
      return ($ = { current: $ }), (et.memoizedState = $);
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function ($) {
      return (ci().memoizedState = $);
    },
    useTransition: function () {
      var $ = qi(!1),
        et = $[0];
      return ($ = Ei.bind(null, $[1])), (ci().memoizedState = $), [et, $];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function ($, et, tt) {
      var rt = N$1,
        nt = ci();
      if (I$1) {
        if (tt === void 0) throw Error(p$5(407));
        tt = tt();
      } else {
        if (((tt = et()), R$1 === null)) throw Error(p$5(349));
        Rh & 30 || ni(rt, et, tt);
      }
      nt.memoizedState = tt;
      var ot = { value: tt, getSnapshot: et };
      return (
        (nt.queue = ot),
        vi(ki.bind(null, rt, ot, $), [$]),
        (rt.flags |= 2048),
        li(9, mi.bind(null, rt, ot, tt, et), void 0, null),
        tt
      );
    },
    useId: function () {
      var $ = ci(),
        et = R$1.identifierPrefix;
      if (I$1) {
        var tt = sg,
          rt = rg;
        (tt = (rt & ~(1 << (32 - oc(rt) - 1))).toString(32) + tt),
          (et = ':' + et + 'R' + tt),
          (tt = Uh++),
          0 < tt && (et += 'H' + tt.toString(32)),
          (et += ':');
      } else (tt = Vh++), (et = ':' + et + 'r' + tt.toString(32) + ':');
      return ($.memoizedState = et);
    },
    unstable_isNewReconciler: !1
  },
  Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function () {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function ($) {
      var et = di();
      return Di(et, O$1.memoizedState, $);
    },
    useTransition: function () {
      var $ = fi(ei)[0],
        et = di().memoizedState;
      return [$, et];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  },
  $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function () {
      return gi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function ($) {
      var et = di();
      return O$1 === null ? (et.memoizedState = $) : Di(et, O$1.memoizedState, $);
    },
    useTransition: function () {
      var $ = gi(ei)[0],
        et = di().memoizedState;
      return [$, et];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  };
function Ki($, et) {
  try {
    var tt = '',
      rt = et;
    do (tt += Pa(rt)), (rt = rt.return);
    while (rt);
    var nt = tt;
  } catch (ot) {
    nt =
      `
Error generating stack: ` +
      ot.message +
      `
` +
      ot.stack;
  }
  return { value: $, source: et, stack: nt, digest: null };
}
function Li($, et, tt) {
  return { value: $, source: null, stack: tt ?? null, digest: et ?? null };
}
function Mi($, et) {
  try {
    console.error(et.value);
  } catch (tt) {
    setTimeout(function () {
      throw tt;
    });
  }
}
var Ni = typeof WeakMap == 'function' ? WeakMap : Map;
function Oi($, et, tt) {
  (tt = ch(-1, tt)), (tt.tag = 3), (tt.payload = { element: null });
  var rt = et.value;
  return (
    (tt.callback = function () {
      Pi || ((Pi = !0), (Qi = rt)), Mi($, et);
    }),
    tt
  );
}
function Ri($, et, tt) {
  (tt = ch(-1, tt)), (tt.tag = 3);
  var rt = $.type.getDerivedStateFromError;
  if (typeof rt == 'function') {
    var nt = et.value;
    (tt.payload = function () {
      return rt(nt);
    }),
      (tt.callback = function () {
        Mi($, et);
      });
  }
  var ot = $.stateNode;
  return (
    ot !== null &&
      typeof ot.componentDidCatch == 'function' &&
      (tt.callback = function () {
        Mi($, et), typeof rt != 'function' && (Si === null ? (Si = new Set([this])) : Si.add(this));
        var it = et.stack;
        this.componentDidCatch(et.value, { componentStack: it !== null ? it : '' });
      }),
    tt
  );
}
function Ti($, et, tt) {
  var rt = $.pingCache;
  if (rt === null) {
    rt = $.pingCache = new Ni();
    var nt = new Set();
    rt.set(et, nt);
  } else (nt = rt.get(et)), nt === void 0 && ((nt = new Set()), rt.set(et, nt));
  nt.has(tt) || (nt.add(tt), ($ = Ui.bind(null, $, et, tt)), et.then($, $));
}
function Vi($) {
  do {
    var et;
    if (
      ((et = $.tag === 13) &&
        ((et = $.memoizedState), (et = et !== null ? et.dehydrated !== null : !0)),
      et)
    )
      return $;
    $ = $.return;
  } while ($ !== null);
  return null;
}
function Wi($, et, tt, rt, nt) {
  return $.mode & 1
    ? (($.flags |= 65536), ($.lanes = nt), $)
    : ($ === et
        ? ($.flags |= 65536)
        : (($.flags |= 128),
          (tt.flags |= 131072),
          (tt.flags &= -52805),
          tt.tag === 1 &&
            (tt.alternate === null
              ? (tt.tag = 17)
              : ((et = ch(-1, 1)), (et.tag = 2), dh(tt, et, 1))),
          (tt.lanes |= 1)),
      $);
}
var Xi = ua.ReactCurrentOwner,
  Ug = !1;
function Yi($, et, tt, rt) {
  et.child = $ === null ? Ch(et, null, tt, rt) : Bh(et, $.child, tt, rt);
}
function Zi($, et, tt, rt, nt) {
  tt = tt.render;
  var ot = et.ref;
  return (
    Tg(et, nt),
    (rt = Xh($, et, tt, rt, ot, nt)),
    (tt = bi()),
    $ !== null && !Ug
      ? ((et.updateQueue = $.updateQueue), (et.flags &= -2053), ($.lanes &= ~nt), $i($, et, nt))
      : (I$1 && tt && vg(et), (et.flags |= 1), Yi($, et, rt, nt), et.child)
  );
}
function aj($, et, tt, rt, nt) {
  if ($ === null) {
    var ot = tt.type;
    return typeof ot == 'function' &&
      !bj(ot) &&
      ot.defaultProps === void 0 &&
      tt.compare === null &&
      tt.defaultProps === void 0
      ? ((et.tag = 15), (et.type = ot), cj($, et, ot, rt, nt))
      : (($ = yh(tt.type, null, rt, et, et.mode, nt)),
        ($.ref = et.ref),
        ($.return = et),
        (et.child = $));
  }
  if (((ot = $.child), !($.lanes & nt))) {
    var it = ot.memoizedProps;
    if (((tt = tt.compare), (tt = tt !== null ? tt : Ie), tt(it, rt) && $.ref === et.ref))
      return $i($, et, nt);
  }
  return (et.flags |= 1), ($ = wh(ot, rt)), ($.ref = et.ref), ($.return = et), (et.child = $);
}
function cj($, et, tt, rt, nt) {
  if ($ !== null) {
    var ot = $.memoizedProps;
    if (Ie(ot, rt) && $.ref === et.ref)
      if (((Ug = !1), (et.pendingProps = rt = ot), ($.lanes & nt) !== 0))
        $.flags & 131072 && (Ug = !0);
      else return (et.lanes = $.lanes), $i($, et, nt);
  }
  return dj($, et, tt, rt, nt);
}
function ej($, et, tt) {
  var rt = et.pendingProps,
    nt = rt.children,
    ot = $ !== null ? $.memoizedState : null;
  if (rt.mode === 'hidden')
    if (!(et.mode & 1))
      (et.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G$1(fj, gj),
        (gj |= tt);
    else {
      if (!(tt & 1073741824))
        return (
          ($ = ot !== null ? ot.baseLanes | tt : tt),
          (et.lanes = et.childLanes = 1073741824),
          (et.memoizedState = { baseLanes: $, cachePool: null, transitions: null }),
          (et.updateQueue = null),
          G$1(fj, gj),
          (gj |= $),
          null
        );
      (et.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (rt = ot !== null ? ot.baseLanes : tt),
        G$1(fj, gj),
        (gj |= rt);
    }
  else
    ot !== null ? ((rt = ot.baseLanes | tt), (et.memoizedState = null)) : (rt = tt),
      G$1(fj, gj),
      (gj |= rt);
  return Yi($, et, nt, tt), et.child;
}
function hj($, et) {
  var tt = et.ref;
  (($ === null && tt !== null) || ($ !== null && $.ref !== tt)) &&
    ((et.flags |= 512), (et.flags |= 2097152));
}
function dj($, et, tt, rt, nt) {
  var ot = Zf(tt) ? Xf : H$1.current;
  return (
    (ot = Yf(et, ot)),
    Tg(et, nt),
    (tt = Xh($, et, tt, rt, ot, nt)),
    (rt = bi()),
    $ !== null && !Ug
      ? ((et.updateQueue = $.updateQueue), (et.flags &= -2053), ($.lanes &= ~nt), $i($, et, nt))
      : (I$1 && rt && vg(et), (et.flags |= 1), Yi($, et, tt, nt), et.child)
  );
}
function ij($, et, tt, rt, nt) {
  if (Zf(tt)) {
    var ot = !0;
    cg(et);
  } else ot = !1;
  if ((Tg(et, nt), et.stateNode === null)) jj($, et), ph(et, tt, rt), rh(et, tt, rt, nt), (rt = !0);
  else if ($ === null) {
    var it = et.stateNode,
      at = et.memoizedProps;
    it.props = at;
    var st = it.context,
      lt = tt.contextType;
    typeof lt == 'object' && lt !== null
      ? (lt = Vg(lt))
      : ((lt = Zf(tt) ? Xf : H$1.current), (lt = Yf(et, lt)));
    var ut = tt.getDerivedStateFromProps,
      ct = typeof ut == 'function' || typeof it.getSnapshotBeforeUpdate == 'function';
    ct ||
      (typeof it.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof it.componentWillReceiveProps != 'function') ||
      ((at !== rt || st !== lt) && qh(et, it, rt, lt)),
      ($g = !1);
    var dt = et.memoizedState;
    (it.state = dt),
      gh(et, rt, it, nt),
      (st = et.memoizedState),
      at !== rt || dt !== st || Wf.current || $g
        ? (typeof ut == 'function' && (kh(et, tt, ut, rt), (st = et.memoizedState)),
          (at = $g || oh(et, tt, at, rt, dt, st, lt))
            ? (ct ||
                (typeof it.UNSAFE_componentWillMount != 'function' &&
                  typeof it.componentWillMount != 'function') ||
                (typeof it.componentWillMount == 'function' && it.componentWillMount(),
                typeof it.UNSAFE_componentWillMount == 'function' &&
                  it.UNSAFE_componentWillMount()),
              typeof it.componentDidMount == 'function' && (et.flags |= 4194308))
            : (typeof it.componentDidMount == 'function' && (et.flags |= 4194308),
              (et.memoizedProps = rt),
              (et.memoizedState = st)),
          (it.props = rt),
          (it.state = st),
          (it.context = lt),
          (rt = at))
        : (typeof it.componentDidMount == 'function' && (et.flags |= 4194308), (rt = !1));
  } else {
    (it = et.stateNode),
      bh($, et),
      (at = et.memoizedProps),
      (lt = et.type === et.elementType ? at : Lg(et.type, at)),
      (it.props = lt),
      (ct = et.pendingProps),
      (dt = it.context),
      (st = tt.contextType),
      typeof st == 'object' && st !== null
        ? (st = Vg(st))
        : ((st = Zf(tt) ? Xf : H$1.current), (st = Yf(et, st)));
    var ft = tt.getDerivedStateFromProps;
    (ut = typeof ft == 'function' || typeof it.getSnapshotBeforeUpdate == 'function') ||
      (typeof it.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof it.componentWillReceiveProps != 'function') ||
      ((at !== ct || dt !== st) && qh(et, it, rt, st)),
      ($g = !1),
      (dt = et.memoizedState),
      (it.state = dt),
      gh(et, rt, it, nt);
    var pt = et.memoizedState;
    at !== ct || dt !== pt || Wf.current || $g
      ? (typeof ft == 'function' && (kh(et, tt, ft, rt), (pt = et.memoizedState)),
        (lt = $g || oh(et, tt, lt, rt, dt, pt, st) || !1)
          ? (ut ||
              (typeof it.UNSAFE_componentWillUpdate != 'function' &&
                typeof it.componentWillUpdate != 'function') ||
              (typeof it.componentWillUpdate == 'function' && it.componentWillUpdate(rt, pt, st),
              typeof it.UNSAFE_componentWillUpdate == 'function' &&
                it.UNSAFE_componentWillUpdate(rt, pt, st)),
            typeof it.componentDidUpdate == 'function' && (et.flags |= 4),
            typeof it.getSnapshotBeforeUpdate == 'function' && (et.flags |= 1024))
          : (typeof it.componentDidUpdate != 'function' ||
              (at === $.memoizedProps && dt === $.memoizedState) ||
              (et.flags |= 4),
            typeof it.getSnapshotBeforeUpdate != 'function' ||
              (at === $.memoizedProps && dt === $.memoizedState) ||
              (et.flags |= 1024),
            (et.memoizedProps = rt),
            (et.memoizedState = pt)),
        (it.props = rt),
        (it.state = pt),
        (it.context = st),
        (rt = lt))
      : (typeof it.componentDidUpdate != 'function' ||
          (at === $.memoizedProps && dt === $.memoizedState) ||
          (et.flags |= 4),
        typeof it.getSnapshotBeforeUpdate != 'function' ||
          (at === $.memoizedProps && dt === $.memoizedState) ||
          (et.flags |= 1024),
        (rt = !1));
  }
  return kj($, et, tt, rt, ot, nt);
}
function kj($, et, tt, rt, nt, ot) {
  hj($, et);
  var it = (et.flags & 128) !== 0;
  if (!rt && !it) return nt && dg(et, tt, !1), $i($, et, ot);
  (rt = et.stateNode), (Xi.current = et);
  var at = it && typeof tt.getDerivedStateFromError != 'function' ? null : rt.render();
  return (
    (et.flags |= 1),
    $ !== null && it
      ? ((et.child = Bh(et, $.child, null, ot)), (et.child = Bh(et, null, at, ot)))
      : Yi($, et, at, ot),
    (et.memoizedState = rt.state),
    nt && dg(et, tt, !0),
    et.child
  );
}
function lj($) {
  var et = $.stateNode;
  et.pendingContext
    ? ag($, et.pendingContext, et.pendingContext !== et.context)
    : et.context && ag($, et.context, !1),
    Ih($, et.containerInfo);
}
function mj($, et, tt, rt, nt) {
  return Ig(), Jg(nt), (et.flags |= 256), Yi($, et, tt, rt), et.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj($) {
  return { baseLanes: $, cachePool: null, transitions: null };
}
function pj($, et, tt) {
  var rt = et.pendingProps,
    nt = M$1.current,
    ot = !1,
    it = (et.flags & 128) !== 0,
    at;
  if (
    ((at = it) || (at = $ !== null && $.memoizedState === null ? !1 : (nt & 2) !== 0),
    at ? ((ot = !0), (et.flags &= -129)) : ($ === null || $.memoizedState !== null) && (nt |= 1),
    G$1(M$1, nt & 1),
    $ === null)
  )
    return (
      Eg(et),
      ($ = et.memoizedState),
      $ !== null && (($ = $.dehydrated), $ !== null)
        ? (et.mode & 1
            ? $.data === '$!'
              ? (et.lanes = 8)
              : (et.lanes = 1073741824)
            : (et.lanes = 1),
          null)
        : ((it = rt.children),
          ($ = rt.fallback),
          ot
            ? ((rt = et.mode),
              (ot = et.child),
              (it = { mode: 'hidden', children: it }),
              !(rt & 1) && ot !== null
                ? ((ot.childLanes = 0), (ot.pendingProps = it))
                : (ot = qj(it, rt, 0, null)),
              ($ = Ah($, rt, tt, null)),
              (ot.return = et),
              ($.return = et),
              (ot.sibling = $),
              (et.child = ot),
              (et.child.memoizedState = oj(tt)),
              (et.memoizedState = nj),
              $)
            : rj(et, it))
    );
  if (((nt = $.memoizedState), nt !== null && ((at = nt.dehydrated), at !== null)))
    return sj($, et, it, rt, at, nt, tt);
  if (ot) {
    (ot = rt.fallback), (it = et.mode), (nt = $.child), (at = nt.sibling);
    var st = { mode: 'hidden', children: rt.children };
    return (
      !(it & 1) && et.child !== nt
        ? ((rt = et.child), (rt.childLanes = 0), (rt.pendingProps = st), (et.deletions = null))
        : ((rt = wh(nt, st)), (rt.subtreeFlags = nt.subtreeFlags & 14680064)),
      at !== null ? (ot = wh(at, ot)) : ((ot = Ah(ot, it, tt, null)), (ot.flags |= 2)),
      (ot.return = et),
      (rt.return = et),
      (rt.sibling = ot),
      (et.child = rt),
      (rt = ot),
      (ot = et.child),
      (it = $.child.memoizedState),
      (it =
        it === null
          ? oj(tt)
          : { baseLanes: it.baseLanes | tt, cachePool: null, transitions: it.transitions }),
      (ot.memoizedState = it),
      (ot.childLanes = $.childLanes & ~tt),
      (et.memoizedState = nj),
      rt
    );
  }
  return (
    (ot = $.child),
    ($ = ot.sibling),
    (rt = wh(ot, { mode: 'visible', children: rt.children })),
    !(et.mode & 1) && (rt.lanes = tt),
    (rt.return = et),
    (rt.sibling = null),
    $ !== null &&
      ((tt = et.deletions), tt === null ? ((et.deletions = [$]), (et.flags |= 16)) : tt.push($)),
    (et.child = rt),
    (et.memoizedState = null),
    rt
  );
}
function rj($, et) {
  return (
    (et = qj({ mode: 'visible', children: et }, $.mode, 0, null)), (et.return = $), ($.child = et)
  );
}
function tj($, et, tt, rt) {
  return (
    rt !== null && Jg(rt),
    Bh(et, $.child, null, tt),
    ($ = rj(et, et.pendingProps.children)),
    ($.flags |= 2),
    (et.memoizedState = null),
    $
  );
}
function sj($, et, tt, rt, nt, ot, it) {
  if (tt)
    return et.flags & 256
      ? ((et.flags &= -257), (rt = Li(Error(p$5(422)))), tj($, et, it, rt))
      : et.memoizedState !== null
      ? ((et.child = $.child), (et.flags |= 128), null)
      : ((ot = rt.fallback),
        (nt = et.mode),
        (rt = qj({ mode: 'visible', children: rt.children }, nt, 0, null)),
        (ot = Ah(ot, nt, it, null)),
        (ot.flags |= 2),
        (rt.return = et),
        (ot.return = et),
        (rt.sibling = ot),
        (et.child = rt),
        et.mode & 1 && Bh(et, $.child, null, it),
        (et.child.memoizedState = oj(it)),
        (et.memoizedState = nj),
        ot);
  if (!(et.mode & 1)) return tj($, et, it, null);
  if (nt.data === '$!') {
    if (((rt = nt.nextSibling && nt.nextSibling.dataset), rt)) var at = rt.dgst;
    return (rt = at), (ot = Error(p$5(419))), (rt = Li(ot, rt, void 0)), tj($, et, it, rt);
  }
  if (((at = (it & $.childLanes) !== 0), Ug || at)) {
    if (((rt = R$1), rt !== null)) {
      switch (it & -it) {
        case 4:
          nt = 2;
          break;
        case 16:
          nt = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          nt = 32;
          break;
        case 536870912:
          nt = 268435456;
          break;
        default:
          nt = 0;
      }
      (nt = nt & (rt.suspendedLanes | it) ? 0 : nt),
        nt !== 0 && nt !== ot.retryLane && ((ot.retryLane = nt), Zg($, nt), mh(rt, $, nt, -1));
    }
    return uj(), (rt = Li(Error(p$5(421)))), tj($, et, it, rt);
  }
  return nt.data === '$?'
    ? ((et.flags |= 128),
      (et.child = $.child),
      (et = vj.bind(null, $)),
      (nt._reactRetry = et),
      null)
    : (($ = ot.treeContext),
      (yg = Lf(nt.nextSibling)),
      (xg = et),
      (I$1 = !0),
      (zg = null),
      $ !== null &&
        ((og[pg++] = rg),
        (og[pg++] = sg),
        (og[pg++] = qg),
        (rg = $.id),
        (sg = $.overflow),
        (qg = et)),
      (et = rj(et, rt.children)),
      (et.flags |= 4096),
      et);
}
function wj($, et, tt) {
  $.lanes |= et;
  var rt = $.alternate;
  rt !== null && (rt.lanes |= et), Sg($.return, et, tt);
}
function xj($, et, tt, rt, nt) {
  var ot = $.memoizedState;
  ot === null
    ? ($.memoizedState = {
        isBackwards: et,
        rendering: null,
        renderingStartTime: 0,
        last: rt,
        tail: tt,
        tailMode: nt
      })
    : ((ot.isBackwards = et),
      (ot.rendering = null),
      (ot.renderingStartTime = 0),
      (ot.last = rt),
      (ot.tail = tt),
      (ot.tailMode = nt));
}
function yj($, et, tt) {
  var rt = et.pendingProps,
    nt = rt.revealOrder,
    ot = rt.tail;
  if ((Yi($, et, rt.children, tt), (rt = M$1.current), rt & 2))
    (rt = (rt & 1) | 2), (et.flags |= 128);
  else {
    if ($ !== null && $.flags & 128)
      e: for ($ = et.child; $ !== null; ) {
        if ($.tag === 13) $.memoizedState !== null && wj($, tt, et);
        else if ($.tag === 19) wj($, tt, et);
        else if ($.child !== null) {
          ($.child.return = $), ($ = $.child);
          continue;
        }
        if ($ === et) break e;
        for (; $.sibling === null; ) {
          if ($.return === null || $.return === et) break e;
          $ = $.return;
        }
        ($.sibling.return = $.return), ($ = $.sibling);
      }
    rt &= 1;
  }
  if ((G$1(M$1, rt), !(et.mode & 1))) et.memoizedState = null;
  else
    switch (nt) {
      case 'forwards':
        for (tt = et.child, nt = null; tt !== null; )
          ($ = tt.alternate), $ !== null && Mh($) === null && (nt = tt), (tt = tt.sibling);
        (tt = nt),
          tt === null
            ? ((nt = et.child), (et.child = null))
            : ((nt = tt.sibling), (tt.sibling = null)),
          xj(et, !1, nt, tt, ot);
        break;
      case 'backwards':
        for (tt = null, nt = et.child, et.child = null; nt !== null; ) {
          if ((($ = nt.alternate), $ !== null && Mh($) === null)) {
            et.child = nt;
            break;
          }
          ($ = nt.sibling), (nt.sibling = tt), (tt = nt), (nt = $);
        }
        xj(et, !0, tt, null, ot);
        break;
      case 'together':
        xj(et, !1, null, null, void 0);
        break;
      default:
        et.memoizedState = null;
    }
  return et.child;
}
function jj($, et) {
  !(et.mode & 1) && $ !== null && (($.alternate = null), (et.alternate = null), (et.flags |= 2));
}
function $i($, et, tt) {
  if (($ !== null && (et.dependencies = $.dependencies), (hh |= et.lanes), !(tt & et.childLanes)))
    return null;
  if ($ !== null && et.child !== $.child) throw Error(p$5(153));
  if (et.child !== null) {
    for (
      $ = et.child, tt = wh($, $.pendingProps), et.child = tt, tt.return = et;
      $.sibling !== null;

    )
      ($ = $.sibling), (tt = tt.sibling = wh($, $.pendingProps)), (tt.return = et);
    tt.sibling = null;
  }
  return et.child;
}
function zj($, et, tt) {
  switch (et.tag) {
    case 3:
      lj(et), Ig();
      break;
    case 5:
      Kh(et);
      break;
    case 1:
      Zf(et.type) && cg(et);
      break;
    case 4:
      Ih(et, et.stateNode.containerInfo);
      break;
    case 10:
      var rt = et.type._context,
        nt = et.memoizedProps.value;
      G$1(Mg, rt._currentValue), (rt._currentValue = nt);
      break;
    case 13:
      if (((rt = et.memoizedState), rt !== null))
        return rt.dehydrated !== null
          ? (G$1(M$1, M$1.current & 1), (et.flags |= 128), null)
          : tt & et.child.childLanes
          ? pj($, et, tt)
          : (G$1(M$1, M$1.current & 1), ($ = $i($, et, tt)), $ !== null ? $.sibling : null);
      G$1(M$1, M$1.current & 1);
      break;
    case 19:
      if (((rt = (tt & et.childLanes) !== 0), $.flags & 128)) {
        if (rt) return yj($, et, tt);
        et.flags |= 128;
      }
      if (
        ((nt = et.memoizedState),
        nt !== null && ((nt.rendering = null), (nt.tail = null), (nt.lastEffect = null)),
        G$1(M$1, M$1.current),
        rt)
      )
        break;
      return null;
    case 22:
    case 23:
      return (et.lanes = 0), ej($, et, tt);
  }
  return $i($, et, tt);
}
var Aj, Bj, Cj, Dj;
Aj = function ($, et) {
  for (var tt = et.child; tt !== null; ) {
    if (tt.tag === 5 || tt.tag === 6) $.appendChild(tt.stateNode);
    else if (tt.tag !== 4 && tt.child !== null) {
      (tt.child.return = tt), (tt = tt.child);
      continue;
    }
    if (tt === et) break;
    for (; tt.sibling === null; ) {
      if (tt.return === null || tt.return === et) return;
      tt = tt.return;
    }
    (tt.sibling.return = tt.return), (tt = tt.sibling);
  }
};
Bj = function () {};
Cj = function ($, et, tt, rt) {
  var nt = $.memoizedProps;
  if (nt !== rt) {
    ($ = et.stateNode), Hh(Eh.current);
    var ot = null;
    switch (tt) {
      case 'input':
        (nt = Ya($, nt)), (rt = Ya($, rt)), (ot = []);
        break;
      case 'select':
        (nt = A$2({}, nt, { value: void 0 })), (rt = A$2({}, rt, { value: void 0 })), (ot = []);
        break;
      case 'textarea':
        (nt = gb($, nt)), (rt = gb($, rt)), (ot = []);
        break;
      default:
        typeof nt.onClick != 'function' && typeof rt.onClick == 'function' && ($.onclick = Bf);
    }
    ub(tt, rt);
    var it;
    tt = null;
    for (lt in nt)
      if (!rt.hasOwnProperty(lt) && nt.hasOwnProperty(lt) && nt[lt] != null)
        if (lt === 'style') {
          var at = nt[lt];
          for (it in at) at.hasOwnProperty(it) && (tt || (tt = {}), (tt[it] = ''));
        } else
          lt !== 'dangerouslySetInnerHTML' &&
            lt !== 'children' &&
            lt !== 'suppressContentEditableWarning' &&
            lt !== 'suppressHydrationWarning' &&
            lt !== 'autoFocus' &&
            (ea.hasOwnProperty(lt) ? ot || (ot = []) : (ot = ot || []).push(lt, null));
    for (lt in rt) {
      var st = rt[lt];
      if (
        ((at = nt != null ? nt[lt] : void 0),
        rt.hasOwnProperty(lt) && st !== at && (st != null || at != null))
      )
        if (lt === 'style')
          if (at) {
            for (it in at)
              !at.hasOwnProperty(it) ||
                (st && st.hasOwnProperty(it)) ||
                (tt || (tt = {}), (tt[it] = ''));
            for (it in st)
              st.hasOwnProperty(it) && at[it] !== st[it] && (tt || (tt = {}), (tt[it] = st[it]));
          } else tt || (ot || (ot = []), ot.push(lt, tt)), (tt = st);
        else
          lt === 'dangerouslySetInnerHTML'
            ? ((st = st ? st.__html : void 0),
              (at = at ? at.__html : void 0),
              st != null && at !== st && (ot = ot || []).push(lt, st))
            : lt === 'children'
            ? (typeof st != 'string' && typeof st != 'number') || (ot = ot || []).push(lt, '' + st)
            : lt !== 'suppressContentEditableWarning' &&
              lt !== 'suppressHydrationWarning' &&
              (ea.hasOwnProperty(lt)
                ? (st != null && lt === 'onScroll' && D$1('scroll', $),
                  ot || at === st || (ot = []))
                : (ot = ot || []).push(lt, st));
    }
    tt && (ot = ot || []).push('style', tt);
    var lt = ot;
    (et.updateQueue = lt) && (et.flags |= 4);
  }
};
Dj = function ($, et, tt, rt) {
  tt !== rt && (et.flags |= 4);
};
function Ej($, et) {
  if (!I$1)
    switch ($.tailMode) {
      case 'hidden':
        et = $.tail;
        for (var tt = null; et !== null; ) et.alternate !== null && (tt = et), (et = et.sibling);
        tt === null ? ($.tail = null) : (tt.sibling = null);
        break;
      case 'collapsed':
        tt = $.tail;
        for (var rt = null; tt !== null; ) tt.alternate !== null && (rt = tt), (tt = tt.sibling);
        rt === null
          ? et || $.tail === null
            ? ($.tail = null)
            : ($.tail.sibling = null)
          : (rt.sibling = null);
    }
}
function S$1($) {
  var et = $.alternate !== null && $.alternate.child === $.child,
    tt = 0,
    rt = 0;
  if (et)
    for (var nt = $.child; nt !== null; )
      (tt |= nt.lanes | nt.childLanes),
        (rt |= nt.subtreeFlags & 14680064),
        (rt |= nt.flags & 14680064),
        (nt.return = $),
        (nt = nt.sibling);
  else
    for (nt = $.child; nt !== null; )
      (tt |= nt.lanes | nt.childLanes),
        (rt |= nt.subtreeFlags),
        (rt |= nt.flags),
        (nt.return = $),
        (nt = nt.sibling);
  return ($.subtreeFlags |= rt), ($.childLanes = tt), et;
}
function Fj($, et, tt) {
  var rt = et.pendingProps;
  switch ((wg(et), et.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(et), null;
    case 1:
      return Zf(et.type) && $f(), S$1(et), null;
    case 3:
      return (
        (rt = et.stateNode),
        Jh(),
        E$1(Wf),
        E$1(H$1),
        Oh(),
        rt.pendingContext && ((rt.context = rt.pendingContext), (rt.pendingContext = null)),
        ($ === null || $.child === null) &&
          (Gg(et)
            ? (et.flags |= 4)
            : $ === null ||
              ($.memoizedState.isDehydrated && !(et.flags & 256)) ||
              ((et.flags |= 1024), zg !== null && (Gj(zg), (zg = null)))),
        Bj($, et),
        S$1(et),
        null
      );
    case 5:
      Lh(et);
      var nt = Hh(Gh.current);
      if (((tt = et.type), $ !== null && et.stateNode != null))
        Cj($, et, tt, rt, nt), $.ref !== et.ref && ((et.flags |= 512), (et.flags |= 2097152));
      else {
        if (!rt) {
          if (et.stateNode === null) throw Error(p$5(166));
          return S$1(et), null;
        }
        if ((($ = Hh(Eh.current)), Gg(et))) {
          (rt = et.stateNode), (tt = et.type);
          var ot = et.memoizedProps;
          switch (((rt[Of] = et), (rt[Pf] = ot), ($ = (et.mode & 1) !== 0), tt)) {
            case 'dialog':
              D$1('cancel', rt), D$1('close', rt);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D$1('load', rt);
              break;
            case 'video':
            case 'audio':
              for (nt = 0; nt < lf.length; nt++) D$1(lf[nt], rt);
              break;
            case 'source':
              D$1('error', rt);
              break;
            case 'img':
            case 'image':
            case 'link':
              D$1('error', rt), D$1('load', rt);
              break;
            case 'details':
              D$1('toggle', rt);
              break;
            case 'input':
              Za(rt, ot), D$1('invalid', rt);
              break;
            case 'select':
              (rt._wrapperState = { wasMultiple: !!ot.multiple }), D$1('invalid', rt);
              break;
            case 'textarea':
              hb(rt, ot), D$1('invalid', rt);
          }
          ub(tt, ot), (nt = null);
          for (var it in ot)
            if (ot.hasOwnProperty(it)) {
              var at = ot[it];
              it === 'children'
                ? typeof at == 'string'
                  ? rt.textContent !== at &&
                    (ot.suppressHydrationWarning !== !0 && Af(rt.textContent, at, $),
                    (nt = ['children', at]))
                  : typeof at == 'number' &&
                    rt.textContent !== '' + at &&
                    (ot.suppressHydrationWarning !== !0 && Af(rt.textContent, at, $),
                    (nt = ['children', '' + at]))
                : ea.hasOwnProperty(it) && at != null && it === 'onScroll' && D$1('scroll', rt);
            }
          switch (tt) {
            case 'input':
              Va(rt), db(rt, ot, !0);
              break;
            case 'textarea':
              Va(rt), jb(rt);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof ot.onClick == 'function' && (rt.onclick = Bf);
          }
          (rt = nt), (et.updateQueue = rt), rt !== null && (et.flags |= 4);
        } else {
          (it = nt.nodeType === 9 ? nt : nt.ownerDocument),
            $ === 'http://www.w3.org/1999/xhtml' && ($ = kb(tt)),
            $ === 'http://www.w3.org/1999/xhtml'
              ? tt === 'script'
                ? (($ = it.createElement('div')),
                  ($.innerHTML = '<script></script>'),
                  ($ = $.removeChild($.firstChild)))
                : typeof rt.is == 'string'
                ? ($ = it.createElement(tt, { is: rt.is }))
                : (($ = it.createElement(tt)),
                  tt === 'select' &&
                    ((it = $), rt.multiple ? (it.multiple = !0) : rt.size && (it.size = rt.size)))
              : ($ = it.createElementNS($, tt)),
            ($[Of] = et),
            ($[Pf] = rt),
            Aj($, et, !1, !1),
            (et.stateNode = $);
          e: {
            switch (((it = vb(tt, rt)), tt)) {
              case 'dialog':
                D$1('cancel', $), D$1('close', $), (nt = rt);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D$1('load', $), (nt = rt);
                break;
              case 'video':
              case 'audio':
                for (nt = 0; nt < lf.length; nt++) D$1(lf[nt], $);
                nt = rt;
                break;
              case 'source':
                D$1('error', $), (nt = rt);
                break;
              case 'img':
              case 'image':
              case 'link':
                D$1('error', $), D$1('load', $), (nt = rt);
                break;
              case 'details':
                D$1('toggle', $), (nt = rt);
                break;
              case 'input':
                Za($, rt), (nt = Ya($, rt)), D$1('invalid', $);
                break;
              case 'option':
                nt = rt;
                break;
              case 'select':
                ($._wrapperState = { wasMultiple: !!rt.multiple }),
                  (nt = A$2({}, rt, { value: void 0 })),
                  D$1('invalid', $);
                break;
              case 'textarea':
                hb($, rt), (nt = gb($, rt)), D$1('invalid', $);
                break;
              default:
                nt = rt;
            }
            ub(tt, nt), (at = nt);
            for (ot in at)
              if (at.hasOwnProperty(ot)) {
                var st = at[ot];
                ot === 'style'
                  ? sb($, st)
                  : ot === 'dangerouslySetInnerHTML'
                  ? ((st = st ? st.__html : void 0), st != null && nb($, st))
                  : ot === 'children'
                  ? typeof st == 'string'
                    ? (tt !== 'textarea' || st !== '') && ob($, st)
                    : typeof st == 'number' && ob($, '' + st)
                  : ot !== 'suppressContentEditableWarning' &&
                    ot !== 'suppressHydrationWarning' &&
                    ot !== 'autoFocus' &&
                    (ea.hasOwnProperty(ot)
                      ? st != null && ot === 'onScroll' && D$1('scroll', $)
                      : st != null && ta($, ot, st, it));
              }
            switch (tt) {
              case 'input':
                Va($), db($, rt, !1);
                break;
              case 'textarea':
                Va($), jb($);
                break;
              case 'option':
                rt.value != null && $.setAttribute('value', '' + Sa(rt.value));
                break;
              case 'select':
                ($.multiple = !!rt.multiple),
                  (ot = rt.value),
                  ot != null
                    ? fb($, !!rt.multiple, ot, !1)
                    : rt.defaultValue != null && fb($, !!rt.multiple, rt.defaultValue, !0);
                break;
              default:
                typeof nt.onClick == 'function' && ($.onclick = Bf);
            }
            switch (tt) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                rt = !!rt.autoFocus;
                break e;
              case 'img':
                rt = !0;
                break e;
              default:
                rt = !1;
            }
          }
          rt && (et.flags |= 4);
        }
        et.ref !== null && ((et.flags |= 512), (et.flags |= 2097152));
      }
      return S$1(et), null;
    case 6:
      if ($ && et.stateNode != null) Dj($, et, $.memoizedProps, rt);
      else {
        if (typeof rt != 'string' && et.stateNode === null) throw Error(p$5(166));
        if (((tt = Hh(Gh.current)), Hh(Eh.current), Gg(et))) {
          if (
            ((rt = et.stateNode),
            (tt = et.memoizedProps),
            (rt[Of] = et),
            (ot = rt.nodeValue !== tt) && (($ = xg), $ !== null))
          )
            switch ($.tag) {
              case 3:
                Af(rt.nodeValue, tt, ($.mode & 1) !== 0);
                break;
              case 5:
                $.memoizedProps.suppressHydrationWarning !== !0 &&
                  Af(rt.nodeValue, tt, ($.mode & 1) !== 0);
            }
          ot && (et.flags |= 4);
        } else
          (rt = (tt.nodeType === 9 ? tt : tt.ownerDocument).createTextNode(rt)),
            (rt[Of] = et),
            (et.stateNode = rt);
      }
      return S$1(et), null;
    case 13:
      if (
        (E$1(M$1),
        (rt = et.memoizedState),
        $ === null || ($.memoizedState !== null && $.memoizedState.dehydrated !== null))
      ) {
        if (I$1 && yg !== null && et.mode & 1 && !(et.flags & 128))
          Hg(), Ig(), (et.flags |= 98560), (ot = !1);
        else if (((ot = Gg(et)), rt !== null && rt.dehydrated !== null)) {
          if ($ === null) {
            if (!ot) throw Error(p$5(318));
            if (((ot = et.memoizedState), (ot = ot !== null ? ot.dehydrated : null), !ot))
              throw Error(p$5(317));
            ot[Of] = et;
          } else Ig(), !(et.flags & 128) && (et.memoizedState = null), (et.flags |= 4);
          S$1(et), (ot = !1);
        } else zg !== null && (Gj(zg), (zg = null)), (ot = !0);
        if (!ot) return et.flags & 65536 ? et : null;
      }
      return et.flags & 128
        ? ((et.lanes = tt), et)
        : ((rt = rt !== null),
          rt !== ($ !== null && $.memoizedState !== null) &&
            rt &&
            ((et.child.flags |= 8192),
            et.mode & 1 && ($ === null || M$1.current & 1 ? T === 0 && (T = 3) : uj())),
          et.updateQueue !== null && (et.flags |= 4),
          S$1(et),
          null);
    case 4:
      return Jh(), Bj($, et), $ === null && sf(et.stateNode.containerInfo), S$1(et), null;
    case 10:
      return Rg(et.type._context), S$1(et), null;
    case 17:
      return Zf(et.type) && $f(), S$1(et), null;
    case 19:
      if ((E$1(M$1), (ot = et.memoizedState), ot === null)) return S$1(et), null;
      if (((rt = (et.flags & 128) !== 0), (it = ot.rendering), it === null))
        if (rt) Ej(ot, !1);
        else {
          if (T !== 0 || ($ !== null && $.flags & 128))
            for ($ = et.child; $ !== null; ) {
              if (((it = Mh($)), it !== null)) {
                for (
                  et.flags |= 128,
                    Ej(ot, !1),
                    rt = it.updateQueue,
                    rt !== null && ((et.updateQueue = rt), (et.flags |= 4)),
                    et.subtreeFlags = 0,
                    rt = tt,
                    tt = et.child;
                  tt !== null;

                )
                  (ot = tt),
                    ($ = rt),
                    (ot.flags &= 14680066),
                    (it = ot.alternate),
                    it === null
                      ? ((ot.childLanes = 0),
                        (ot.lanes = $),
                        (ot.child = null),
                        (ot.subtreeFlags = 0),
                        (ot.memoizedProps = null),
                        (ot.memoizedState = null),
                        (ot.updateQueue = null),
                        (ot.dependencies = null),
                        (ot.stateNode = null))
                      : ((ot.childLanes = it.childLanes),
                        (ot.lanes = it.lanes),
                        (ot.child = it.child),
                        (ot.subtreeFlags = 0),
                        (ot.deletions = null),
                        (ot.memoizedProps = it.memoizedProps),
                        (ot.memoizedState = it.memoizedState),
                        (ot.updateQueue = it.updateQueue),
                        (ot.type = it.type),
                        ($ = it.dependencies),
                        (ot.dependencies =
                          $ === null ? null : { lanes: $.lanes, firstContext: $.firstContext })),
                    (tt = tt.sibling);
                return G$1(M$1, (M$1.current & 1) | 2), et.child;
              }
              $ = $.sibling;
            }
          ot.tail !== null &&
            B$1() > Hj &&
            ((et.flags |= 128), (rt = !0), Ej(ot, !1), (et.lanes = 4194304));
        }
      else {
        if (!rt)
          if ((($ = Mh(it)), $ !== null)) {
            if (
              ((et.flags |= 128),
              (rt = !0),
              (tt = $.updateQueue),
              tt !== null && ((et.updateQueue = tt), (et.flags |= 4)),
              Ej(ot, !0),
              ot.tail === null && ot.tailMode === 'hidden' && !it.alternate && !I$1)
            )
              return S$1(et), null;
          } else
            2 * B$1() - ot.renderingStartTime > Hj &&
              tt !== 1073741824 &&
              ((et.flags |= 128), (rt = !0), Ej(ot, !1), (et.lanes = 4194304));
        ot.isBackwards
          ? ((it.sibling = et.child), (et.child = it))
          : ((tt = ot.last), tt !== null ? (tt.sibling = it) : (et.child = it), (ot.last = it));
      }
      return ot.tail !== null
        ? ((et = ot.tail),
          (ot.rendering = et),
          (ot.tail = et.sibling),
          (ot.renderingStartTime = B$1()),
          (et.sibling = null),
          (tt = M$1.current),
          G$1(M$1, rt ? (tt & 1) | 2 : tt & 1),
          et)
        : (S$1(et), null);
    case 22:
    case 23:
      return (
        Ij(),
        (rt = et.memoizedState !== null),
        $ !== null && ($.memoizedState !== null) !== rt && (et.flags |= 8192),
        rt && et.mode & 1
          ? gj & 1073741824 && (S$1(et), et.subtreeFlags & 6 && (et.flags |= 8192))
          : S$1(et),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$5(156, et.tag));
}
function Jj($, et) {
  switch ((wg(et), et.tag)) {
    case 1:
      return (
        Zf(et.type) && $f(),
        ($ = et.flags),
        $ & 65536 ? ((et.flags = ($ & -65537) | 128), et) : null
      );
    case 3:
      return (
        Jh(),
        E$1(Wf),
        E$1(H$1),
        Oh(),
        ($ = et.flags),
        $ & 65536 && !($ & 128) ? ((et.flags = ($ & -65537) | 128), et) : null
      );
    case 5:
      return Lh(et), null;
    case 13:
      if ((E$1(M$1), ($ = et.memoizedState), $ !== null && $.dehydrated !== null)) {
        if (et.alternate === null) throw Error(p$5(340));
        Ig();
      }
      return ($ = et.flags), $ & 65536 ? ((et.flags = ($ & -65537) | 128), et) : null;
    case 19:
      return E$1(M$1), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(et.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = !1,
  U$1 = !1,
  Lj = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function Mj($, et) {
  var tt = $.ref;
  if (tt !== null)
    if (typeof tt == 'function')
      try {
        tt(null);
      } catch (rt) {
        W$1($, et, rt);
      }
    else tt.current = null;
}
function Nj($, et, tt) {
  try {
    tt();
  } catch (rt) {
    W$1($, et, rt);
  }
}
var Oj = !1;
function Pj($, et) {
  if (((Cf = dd), ($ = Me()), Ne($))) {
    if ('selectionStart' in $) var tt = { start: $.selectionStart, end: $.selectionEnd };
    else
      e: {
        tt = ((tt = $.ownerDocument) && tt.defaultView) || window;
        var rt = tt.getSelection && tt.getSelection();
        if (rt && rt.rangeCount !== 0) {
          tt = rt.anchorNode;
          var nt = rt.anchorOffset,
            ot = rt.focusNode;
          rt = rt.focusOffset;
          try {
            tt.nodeType, ot.nodeType;
          } catch {
            tt = null;
            break e;
          }
          var it = 0,
            at = -1,
            st = -1,
            lt = 0,
            ut = 0,
            ct = $,
            dt = null;
          t: for (;;) {
            for (
              var ft;
              ct !== tt || (nt !== 0 && ct.nodeType !== 3) || (at = it + nt),
                ct !== ot || (rt !== 0 && ct.nodeType !== 3) || (st = it + rt),
                ct.nodeType === 3 && (it += ct.nodeValue.length),
                (ft = ct.firstChild) !== null;

            )
              (dt = ct), (ct = ft);
            for (;;) {
              if (ct === $) break t;
              if (
                (dt === tt && ++lt === nt && (at = it),
                dt === ot && ++ut === rt && (st = it),
                (ft = ct.nextSibling) !== null)
              )
                break;
              (ct = dt), (dt = ct.parentNode);
            }
            ct = ft;
          }
          tt = at === -1 || st === -1 ? null : { start: at, end: st };
        } else tt = null;
      }
    tt = tt || { start: 0, end: 0 };
  } else tt = null;
  for (Df = { focusedElem: $, selectionRange: tt }, dd = !1, V = et; V !== null; )
    if (((et = V), ($ = et.child), (et.subtreeFlags & 1028) !== 0 && $ !== null))
      ($.return = et), (V = $);
    else
      for (; V !== null; ) {
        et = V;
        try {
          var pt = et.alternate;
          if (et.flags & 1024)
            switch (et.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (pt !== null) {
                  var gt = pt.memoizedProps,
                    bt = pt.memoizedState,
                    ht = et.stateNode,
                    mt = ht.getSnapshotBeforeUpdate(
                      et.elementType === et.type ? gt : Lg(et.type, gt),
                      bt
                    );
                  ht.__reactInternalSnapshotBeforeUpdate = mt;
                }
                break;
              case 3:
                var yt = et.stateNode.containerInfo;
                yt.nodeType === 1
                  ? (yt.textContent = '')
                  : yt.nodeType === 9 && yt.documentElement && yt.removeChild(yt.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$5(163));
            }
        } catch (St) {
          W$1(et, et.return, St);
        }
        if ((($ = et.sibling), $ !== null)) {
          ($.return = et.return), (V = $);
          break;
        }
        V = et.return;
      }
  return (pt = Oj), (Oj = !1), pt;
}
function Qj($, et, tt) {
  var rt = et.updateQueue;
  if (((rt = rt !== null ? rt.lastEffect : null), rt !== null)) {
    var nt = (rt = rt.next);
    do {
      if ((nt.tag & $) === $) {
        var ot = nt.destroy;
        (nt.destroy = void 0), ot !== void 0 && Nj(et, tt, ot);
      }
      nt = nt.next;
    } while (nt !== rt);
  }
}
function Rj($, et) {
  if (((et = et.updateQueue), (et = et !== null ? et.lastEffect : null), et !== null)) {
    var tt = (et = et.next);
    do {
      if ((tt.tag & $) === $) {
        var rt = tt.create;
        tt.destroy = rt();
      }
      tt = tt.next;
    } while (tt !== et);
  }
}
function Sj($) {
  var et = $.ref;
  if (et !== null) {
    var tt = $.stateNode;
    switch ($.tag) {
      case 5:
        $ = tt;
        break;
      default:
        $ = tt;
    }
    typeof et == 'function' ? et($) : (et.current = $);
  }
}
function Tj($) {
  var et = $.alternate;
  et !== null && (($.alternate = null), Tj(et)),
    ($.child = null),
    ($.deletions = null),
    ($.sibling = null),
    $.tag === 5 &&
      ((et = $.stateNode),
      et !== null && (delete et[Of], delete et[Pf], delete et[of], delete et[Qf], delete et[Rf])),
    ($.stateNode = null),
    ($.return = null),
    ($.dependencies = null),
    ($.memoizedProps = null),
    ($.memoizedState = null),
    ($.pendingProps = null),
    ($.stateNode = null),
    ($.updateQueue = null);
}
function Uj($) {
  return $.tag === 5 || $.tag === 3 || $.tag === 4;
}
function Vj($) {
  e: for (;;) {
    for (; $.sibling === null; ) {
      if ($.return === null || Uj($.return)) return null;
      $ = $.return;
    }
    for ($.sibling.return = $.return, $ = $.sibling; $.tag !== 5 && $.tag !== 6 && $.tag !== 18; ) {
      if ($.flags & 2 || $.child === null || $.tag === 4) continue e;
      ($.child.return = $), ($ = $.child);
    }
    if (!($.flags & 2)) return $.stateNode;
  }
}
function Wj($, et, tt) {
  var rt = $.tag;
  if (rt === 5 || rt === 6)
    ($ = $.stateNode),
      et
        ? tt.nodeType === 8
          ? tt.parentNode.insertBefore($, et)
          : tt.insertBefore($, et)
        : (tt.nodeType === 8
            ? ((et = tt.parentNode), et.insertBefore($, tt))
            : ((et = tt), et.appendChild($)),
          (tt = tt._reactRootContainer),
          tt != null || et.onclick !== null || (et.onclick = Bf));
  else if (rt !== 4 && (($ = $.child), $ !== null))
    for (Wj($, et, tt), $ = $.sibling; $ !== null; ) Wj($, et, tt), ($ = $.sibling);
}
function Xj($, et, tt) {
  var rt = $.tag;
  if (rt === 5 || rt === 6) ($ = $.stateNode), et ? tt.insertBefore($, et) : tt.appendChild($);
  else if (rt !== 4 && (($ = $.child), $ !== null))
    for (Xj($, et, tt), $ = $.sibling; $ !== null; ) Xj($, et, tt), ($ = $.sibling);
}
var X$1 = null,
  Yj = !1;
function Zj($, et, tt) {
  for (tt = tt.child; tt !== null; ) ak($, et, tt), (tt = tt.sibling);
}
function ak($, et, tt) {
  if (lc && typeof lc.onCommitFiberUnmount == 'function')
    try {
      lc.onCommitFiberUnmount(kc, tt);
    } catch {}
  switch (tt.tag) {
    case 5:
      U$1 || Mj(tt, et);
    case 6:
      var rt = X$1,
        nt = Yj;
      (X$1 = null),
        Zj($, et, tt),
        (X$1 = rt),
        (Yj = nt),
        X$1 !== null &&
          (Yj
            ? (($ = X$1),
              (tt = tt.stateNode),
              $.nodeType === 8 ? $.parentNode.removeChild(tt) : $.removeChild(tt))
            : X$1.removeChild(tt.stateNode));
      break;
    case 18:
      X$1 !== null &&
        (Yj
          ? (($ = X$1),
            (tt = tt.stateNode),
            $.nodeType === 8 ? Kf($.parentNode, tt) : $.nodeType === 1 && Kf($, tt),
            bd($))
          : Kf(X$1, tt.stateNode));
      break;
    case 4:
      (rt = X$1),
        (nt = Yj),
        (X$1 = tt.stateNode.containerInfo),
        (Yj = !0),
        Zj($, et, tt),
        (X$1 = rt),
        (Yj = nt);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && ((rt = tt.updateQueue), rt !== null && ((rt = rt.lastEffect), rt !== null))) {
        nt = rt = rt.next;
        do {
          var ot = nt,
            it = ot.destroy;
          (ot = ot.tag), it !== void 0 && (ot & 2 || ot & 4) && Nj(tt, et, it), (nt = nt.next);
        } while (nt !== rt);
      }
      Zj($, et, tt);
      break;
    case 1:
      if (!U$1 && (Mj(tt, et), (rt = tt.stateNode), typeof rt.componentWillUnmount == 'function'))
        try {
          (rt.props = tt.memoizedProps), (rt.state = tt.memoizedState), rt.componentWillUnmount();
        } catch (at) {
          W$1(tt, et, at);
        }
      Zj($, et, tt);
      break;
    case 21:
      Zj($, et, tt);
      break;
    case 22:
      tt.mode & 1
        ? ((U$1 = (rt = U$1) || tt.memoizedState !== null), Zj($, et, tt), (U$1 = rt))
        : Zj($, et, tt);
      break;
    default:
      Zj($, et, tt);
  }
}
function bk($) {
  var et = $.updateQueue;
  if (et !== null) {
    $.updateQueue = null;
    var tt = $.stateNode;
    tt === null && (tt = $.stateNode = new Lj()),
      et.forEach(function (rt) {
        var nt = ck.bind(null, $, rt);
        tt.has(rt) || (tt.add(rt), rt.then(nt, nt));
      });
  }
}
function dk($, et) {
  var tt = et.deletions;
  if (tt !== null)
    for (var rt = 0; rt < tt.length; rt++) {
      var nt = tt[rt];
      try {
        var ot = $,
          it = et,
          at = it;
        e: for (; at !== null; ) {
          switch (at.tag) {
            case 5:
              (X$1 = at.stateNode), (Yj = !1);
              break e;
            case 3:
              (X$1 = at.stateNode.containerInfo), (Yj = !0);
              break e;
            case 4:
              (X$1 = at.stateNode.containerInfo), (Yj = !0);
              break e;
          }
          at = at.return;
        }
        if (X$1 === null) throw Error(p$5(160));
        ak(ot, it, nt), (X$1 = null), (Yj = !1);
        var st = nt.alternate;
        st !== null && (st.return = null), (nt.return = null);
      } catch (lt) {
        W$1(nt, et, lt);
      }
    }
  if (et.subtreeFlags & 12854) for (et = et.child; et !== null; ) ek(et, $), (et = et.sibling);
}
function ek($, et) {
  var tt = $.alternate,
    rt = $.flags;
  switch ($.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dk(et, $), fk($), rt & 4)) {
        try {
          Qj(3, $, $.return), Rj(3, $);
        } catch (gt) {
          W$1($, $.return, gt);
        }
        try {
          Qj(5, $, $.return);
        } catch (gt) {
          W$1($, $.return, gt);
        }
      }
      break;
    case 1:
      dk(et, $), fk($), rt & 512 && tt !== null && Mj(tt, tt.return);
      break;
    case 5:
      if ((dk(et, $), fk($), rt & 512 && tt !== null && Mj(tt, tt.return), $.flags & 32)) {
        var nt = $.stateNode;
        try {
          ob(nt, '');
        } catch (gt) {
          W$1($, $.return, gt);
        }
      }
      if (rt & 4 && ((nt = $.stateNode), nt != null)) {
        var ot = $.memoizedProps,
          it = tt !== null ? tt.memoizedProps : ot,
          at = $.type,
          st = $.updateQueue;
        if ((($.updateQueue = null), st !== null))
          try {
            at === 'input' && ot.type === 'radio' && ot.name != null && ab(nt, ot), vb(at, it);
            var lt = vb(at, ot);
            for (it = 0; it < st.length; it += 2) {
              var ut = st[it],
                ct = st[it + 1];
              ut === 'style'
                ? sb(nt, ct)
                : ut === 'dangerouslySetInnerHTML'
                ? nb(nt, ct)
                : ut === 'children'
                ? ob(nt, ct)
                : ta(nt, ut, ct, lt);
            }
            switch (at) {
              case 'input':
                bb(nt, ot);
                break;
              case 'textarea':
                ib(nt, ot);
                break;
              case 'select':
                var dt = nt._wrapperState.wasMultiple;
                nt._wrapperState.wasMultiple = !!ot.multiple;
                var ft = ot.value;
                ft != null
                  ? fb(nt, !!ot.multiple, ft, !1)
                  : dt !== !!ot.multiple &&
                    (ot.defaultValue != null
                      ? fb(nt, !!ot.multiple, ot.defaultValue, !0)
                      : fb(nt, !!ot.multiple, ot.multiple ? [] : '', !1));
            }
            nt[Pf] = ot;
          } catch (gt) {
            W$1($, $.return, gt);
          }
      }
      break;
    case 6:
      if ((dk(et, $), fk($), rt & 4)) {
        if ($.stateNode === null) throw Error(p$5(162));
        (nt = $.stateNode), (ot = $.memoizedProps);
        try {
          nt.nodeValue = ot;
        } catch (gt) {
          W$1($, $.return, gt);
        }
      }
      break;
    case 3:
      if ((dk(et, $), fk($), rt & 4 && tt !== null && tt.memoizedState.isDehydrated))
        try {
          bd(et.containerInfo);
        } catch (gt) {
          W$1($, $.return, gt);
        }
      break;
    case 4:
      dk(et, $), fk($);
      break;
    case 13:
      dk(et, $),
        fk($),
        (nt = $.child),
        nt.flags & 8192 &&
          ((ot = nt.memoizedState !== null),
          (nt.stateNode.isHidden = ot),
          !ot || (nt.alternate !== null && nt.alternate.memoizedState !== null) || (gk = B$1())),
        rt & 4 && bk($);
      break;
    case 22:
      if (
        ((ut = tt !== null && tt.memoizedState !== null),
        $.mode & 1 ? ((U$1 = (lt = U$1) || ut), dk(et, $), (U$1 = lt)) : dk(et, $),
        fk($),
        rt & 8192)
      ) {
        if (((lt = $.memoizedState !== null), ($.stateNode.isHidden = lt) && !ut && $.mode & 1))
          for (V = $, ut = $.child; ut !== null; ) {
            for (ct = V = ut; V !== null; ) {
              switch (((dt = V), (ft = dt.child), dt.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, dt, dt.return);
                  break;
                case 1:
                  Mj(dt, dt.return);
                  var pt = dt.stateNode;
                  if (typeof pt.componentWillUnmount == 'function') {
                    (rt = dt), (tt = dt.return);
                    try {
                      (et = rt),
                        (pt.props = et.memoizedProps),
                        (pt.state = et.memoizedState),
                        pt.componentWillUnmount();
                    } catch (gt) {
                      W$1(rt, tt, gt);
                    }
                  }
                  break;
                case 5:
                  Mj(dt, dt.return);
                  break;
                case 22:
                  if (dt.memoizedState !== null) {
                    hk(ct);
                    continue;
                  }
              }
              ft !== null ? ((ft.return = dt), (V = ft)) : hk(ct);
            }
            ut = ut.sibling;
          }
        e: for (ut = null, ct = $; ; ) {
          if (ct.tag === 5) {
            if (ut === null) {
              ut = ct;
              try {
                (nt = ct.stateNode),
                  lt
                    ? ((ot = nt.style),
                      typeof ot.setProperty == 'function'
                        ? ot.setProperty('display', 'none', 'important')
                        : (ot.display = 'none'))
                    : ((at = ct.stateNode),
                      (st = ct.memoizedProps.style),
                      (it = st != null && st.hasOwnProperty('display') ? st.display : null),
                      (at.style.display = rb('display', it)));
              } catch (gt) {
                W$1($, $.return, gt);
              }
            }
          } else if (ct.tag === 6) {
            if (ut === null)
              try {
                ct.stateNode.nodeValue = lt ? '' : ct.memoizedProps;
              } catch (gt) {
                W$1($, $.return, gt);
              }
          } else if (
            ((ct.tag !== 22 && ct.tag !== 23) || ct.memoizedState === null || ct === $) &&
            ct.child !== null
          ) {
            (ct.child.return = ct), (ct = ct.child);
            continue;
          }
          if (ct === $) break e;
          for (; ct.sibling === null; ) {
            if (ct.return === null || ct.return === $) break e;
            ut === ct && (ut = null), (ct = ct.return);
          }
          ut === ct && (ut = null), (ct.sibling.return = ct.return), (ct = ct.sibling);
        }
      }
      break;
    case 19:
      dk(et, $), fk($), rt & 4 && bk($);
      break;
    case 21:
      break;
    default:
      dk(et, $), fk($);
  }
}
function fk($) {
  var et = $.flags;
  if (et & 2) {
    try {
      e: {
        for (var tt = $.return; tt !== null; ) {
          if (Uj(tt)) {
            var rt = tt;
            break e;
          }
          tt = tt.return;
        }
        throw Error(p$5(160));
      }
      switch (rt.tag) {
        case 5:
          var nt = rt.stateNode;
          rt.flags & 32 && (ob(nt, ''), (rt.flags &= -33));
          var ot = Vj($);
          Xj($, ot, nt);
          break;
        case 3:
        case 4:
          var it = rt.stateNode.containerInfo,
            at = Vj($);
          Wj($, at, it);
          break;
        default:
          throw Error(p$5(161));
      }
    } catch (st) {
      W$1($, $.return, st);
    }
    $.flags &= -3;
  }
  et & 4096 && ($.flags &= -4097);
}
function ik($, et, tt) {
  (V = $), jk($);
}
function jk($, et, tt) {
  for (var rt = ($.mode & 1) !== 0; V !== null; ) {
    var nt = V,
      ot = nt.child;
    if (nt.tag === 22 && rt) {
      var it = nt.memoizedState !== null || Kj;
      if (!it) {
        var at = nt.alternate,
          st = (at !== null && at.memoizedState !== null) || U$1;
        at = Kj;
        var lt = U$1;
        if (((Kj = it), (U$1 = st) && !lt))
          for (V = nt; V !== null; )
            (it = V),
              (st = it.child),
              it.tag === 22 && it.memoizedState !== null
                ? kk(nt)
                : st !== null
                ? ((st.return = it), (V = st))
                : kk(nt);
        for (; ot !== null; ) (V = ot), jk(ot), (ot = ot.sibling);
        (V = nt), (Kj = at), (U$1 = lt);
      }
      lk($);
    } else nt.subtreeFlags & 8772 && ot !== null ? ((ot.return = nt), (V = ot)) : lk($);
  }
}
function lk($) {
  for (; V !== null; ) {
    var et = V;
    if (et.flags & 8772) {
      var tt = et.alternate;
      try {
        if (et.flags & 8772)
          switch (et.tag) {
            case 0:
            case 11:
            case 15:
              U$1 || Rj(5, et);
              break;
            case 1:
              var rt = et.stateNode;
              if (et.flags & 4 && !U$1)
                if (tt === null) rt.componentDidMount();
                else {
                  var nt =
                    et.elementType === et.type ? tt.memoizedProps : Lg(et.type, tt.memoizedProps);
                  rt.componentDidUpdate(
                    nt,
                    tt.memoizedState,
                    rt.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var ot = et.updateQueue;
              ot !== null && ih(et, ot, rt);
              break;
            case 3:
              var it = et.updateQueue;
              if (it !== null) {
                if (((tt = null), et.child !== null))
                  switch (et.child.tag) {
                    case 5:
                      tt = et.child.stateNode;
                      break;
                    case 1:
                      tt = et.child.stateNode;
                  }
                ih(et, it, tt);
              }
              break;
            case 5:
              var at = et.stateNode;
              if (tt === null && et.flags & 4) {
                tt = at;
                var st = et.memoizedProps;
                switch (et.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    st.autoFocus && tt.focus();
                    break;
                  case 'img':
                    st.src && (tt.src = st.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (et.memoizedState === null) {
                var lt = et.alternate;
                if (lt !== null) {
                  var ut = lt.memoizedState;
                  if (ut !== null) {
                    var ct = ut.dehydrated;
                    ct !== null && bd(ct);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$5(163));
          }
        U$1 || (et.flags & 512 && Sj(et));
      } catch (dt) {
        W$1(et, et.return, dt);
      }
    }
    if (et === $) {
      V = null;
      break;
    }
    if (((tt = et.sibling), tt !== null)) {
      (tt.return = et.return), (V = tt);
      break;
    }
    V = et.return;
  }
}
function hk($) {
  for (; V !== null; ) {
    var et = V;
    if (et === $) {
      V = null;
      break;
    }
    var tt = et.sibling;
    if (tt !== null) {
      (tt.return = et.return), (V = tt);
      break;
    }
    V = et.return;
  }
}
function kk($) {
  for (; V !== null; ) {
    var et = V;
    try {
      switch (et.tag) {
        case 0:
        case 11:
        case 15:
          var tt = et.return;
          try {
            Rj(4, et);
          } catch (st) {
            W$1(et, tt, st);
          }
          break;
        case 1:
          var rt = et.stateNode;
          if (typeof rt.componentDidMount == 'function') {
            var nt = et.return;
            try {
              rt.componentDidMount();
            } catch (st) {
              W$1(et, nt, st);
            }
          }
          var ot = et.return;
          try {
            Sj(et);
          } catch (st) {
            W$1(et, ot, st);
          }
          break;
        case 5:
          var it = et.return;
          try {
            Sj(et);
          } catch (st) {
            W$1(et, it, st);
          }
      }
    } catch (st) {
      W$1(et, et.return, st);
    }
    if (et === $) {
      V = null;
      break;
    }
    var at = et.sibling;
    if (at !== null) {
      (at.return = et.return), (V = at);
      break;
    }
    V = et.return;
  }
}
var mk = Math.ceil,
  nk = ua.ReactCurrentDispatcher,
  ok = ua.ReactCurrentOwner,
  pk = ua.ReactCurrentBatchConfig,
  K = 0,
  R$1 = null,
  Y = null,
  Z$1 = 0,
  gj = 0,
  fj = Uf(0),
  T = 0,
  qk = null,
  hh = 0,
  rk = 0,
  sk = 0,
  tk = null,
  uk = null,
  gk = 0,
  Hj = 1 / 0,
  vk = null,
  Pi = !1,
  Qi = null,
  Si = null,
  wk = !1,
  xk = null,
  yk = 0,
  zk = 0,
  Ak = null,
  Bk = -1,
  Ck = 0;
function L$1() {
  return K & 6 ? B$1() : Bk !== -1 ? Bk : (Bk = B$1());
}
function lh($) {
  return $.mode & 1
    ? K & 2 && Z$1 !== 0
      ? Z$1 & -Z$1
      : Kg.transition !== null
      ? (Ck === 0 && (Ck = yc()), Ck)
      : (($ = C), $ !== 0 || (($ = window.event), ($ = $ === void 0 ? 16 : jd($.type))), $)
    : 1;
}
function mh($, et, tt, rt) {
  if (50 < zk) throw ((zk = 0), (Ak = null), Error(p$5(185)));
  Ac($, tt, rt),
    (!(K & 2) || $ !== R$1) &&
      ($ === R$1 && (!(K & 2) && (rk |= tt), T === 4 && Dk($, Z$1)),
      Ek($, rt),
      tt === 1 && K === 0 && !(et.mode & 1) && ((Hj = B$1() + 500), fg && jg()));
}
function Ek($, et) {
  var tt = $.callbackNode;
  wc($, et);
  var rt = uc($, $ === R$1 ? Z$1 : 0);
  if (rt === 0) tt !== null && bc(tt), ($.callbackNode = null), ($.callbackPriority = 0);
  else if (((et = rt & -rt), $.callbackPriority !== et)) {
    if ((tt != null && bc(tt), et === 1))
      $.tag === 0 ? ig(Fk.bind(null, $)) : hg(Fk.bind(null, $)),
        Jf(function () {
          !(K & 6) && jg();
        }),
        (tt = null);
    else {
      switch (Dc(rt)) {
        case 1:
          tt = fc;
          break;
        case 4:
          tt = gc;
          break;
        case 16:
          tt = hc;
          break;
        case 536870912:
          tt = jc;
          break;
        default:
          tt = hc;
      }
      tt = Gk(tt, Hk.bind(null, $));
    }
    ($.callbackPriority = et), ($.callbackNode = tt);
  }
}
function Hk($, et) {
  if (((Bk = -1), (Ck = 0), K & 6)) throw Error(p$5(327));
  var tt = $.callbackNode;
  if (Ik() && $.callbackNode !== tt) return null;
  var rt = uc($, $ === R$1 ? Z$1 : 0);
  if (rt === 0) return null;
  if (rt & 30 || rt & $.expiredLanes || et) et = Jk($, rt);
  else {
    et = rt;
    var nt = K;
    K |= 2;
    var ot = Kk();
    (R$1 !== $ || Z$1 !== et) && ((vk = null), (Hj = B$1() + 500), Lk($, et));
    do
      try {
        Mk();
        break;
      } catch (at) {
        Nk($, at);
      }
    while (1);
    Qg(), (nk.current = ot), (K = nt), Y !== null ? (et = 0) : ((R$1 = null), (Z$1 = 0), (et = T));
  }
  if (et !== 0) {
    if ((et === 2 && ((nt = xc($)), nt !== 0 && ((rt = nt), (et = Ok($, nt)))), et === 1))
      throw ((tt = qk), Lk($, 0), Dk($, rt), Ek($, B$1()), tt);
    if (et === 6) Dk($, rt);
    else {
      if (
        ((nt = $.current.alternate),
        !(rt & 30) &&
          !Pk(nt) &&
          ((et = Jk($, rt)),
          et === 2 && ((ot = xc($)), ot !== 0 && ((rt = ot), (et = Ok($, ot)))),
          et === 1))
      )
        throw ((tt = qk), Lk($, 0), Dk($, rt), Ek($, B$1()), tt);
      switch ((($.finishedWork = nt), ($.finishedLanes = rt), et)) {
        case 0:
        case 1:
          throw Error(p$5(345));
        case 2:
          Qk($, uk, vk);
          break;
        case 3:
          if ((Dk($, rt), (rt & 130023424) === rt && ((et = gk + 500 - B$1()), 10 < et))) {
            if (uc($, 0) !== 0) break;
            if (((nt = $.suspendedLanes), (nt & rt) !== rt)) {
              L$1(), ($.pingedLanes |= $.suspendedLanes & nt);
              break;
            }
            $.timeoutHandle = Ff(Qk.bind(null, $, uk, vk), et);
            break;
          }
          Qk($, uk, vk);
          break;
        case 4:
          if ((Dk($, rt), (rt & 4194240) === rt)) break;
          for (et = $.eventTimes, nt = -1; 0 < rt; ) {
            var it = 31 - oc(rt);
            (ot = 1 << it), (it = et[it]), it > nt && (nt = it), (rt &= ~ot);
          }
          if (
            ((rt = nt),
            (rt = B$1() - rt),
            (rt =
              (120 > rt
                ? 120
                : 480 > rt
                ? 480
                : 1080 > rt
                ? 1080
                : 1920 > rt
                ? 1920
                : 3e3 > rt
                ? 3e3
                : 4320 > rt
                ? 4320
                : 1960 * mk(rt / 1960)) - rt),
            10 < rt)
          ) {
            $.timeoutHandle = Ff(Qk.bind(null, $, uk, vk), rt);
            break;
          }
          Qk($, uk, vk);
          break;
        case 5:
          Qk($, uk, vk);
          break;
        default:
          throw Error(p$5(329));
      }
    }
  }
  return Ek($, B$1()), $.callbackNode === tt ? Hk.bind(null, $) : null;
}
function Ok($, et) {
  var tt = tk;
  return (
    $.current.memoizedState.isDehydrated && (Lk($, et).flags |= 256),
    ($ = Jk($, et)),
    $ !== 2 && ((et = uk), (uk = tt), et !== null && Gj(et)),
    $
  );
}
function Gj($) {
  uk === null ? (uk = $) : uk.push.apply(uk, $);
}
function Pk($) {
  for (var et = $; ; ) {
    if (et.flags & 16384) {
      var tt = et.updateQueue;
      if (tt !== null && ((tt = tt.stores), tt !== null))
        for (var rt = 0; rt < tt.length; rt++) {
          var nt = tt[rt],
            ot = nt.getSnapshot;
          nt = nt.value;
          try {
            if (!He(ot(), nt)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((tt = et.child), et.subtreeFlags & 16384 && tt !== null)) (tt.return = et), (et = tt);
    else {
      if (et === $) break;
      for (; et.sibling === null; ) {
        if (et.return === null || et.return === $) return !0;
        et = et.return;
      }
      (et.sibling.return = et.return), (et = et.sibling);
    }
  }
  return !0;
}
function Dk($, et) {
  for (
    et &= ~sk, et &= ~rk, $.suspendedLanes |= et, $.pingedLanes &= ~et, $ = $.expirationTimes;
    0 < et;

  ) {
    var tt = 31 - oc(et),
      rt = 1 << tt;
    ($[tt] = -1), (et &= ~rt);
  }
}
function Fk($) {
  if (K & 6) throw Error(p$5(327));
  Ik();
  var et = uc($, 0);
  if (!(et & 1)) return Ek($, B$1()), null;
  var tt = Jk($, et);
  if ($.tag !== 0 && tt === 2) {
    var rt = xc($);
    rt !== 0 && ((et = rt), (tt = Ok($, rt)));
  }
  if (tt === 1) throw ((tt = qk), Lk($, 0), Dk($, et), Ek($, B$1()), tt);
  if (tt === 6) throw Error(p$5(345));
  return (
    ($.finishedWork = $.current.alternate),
    ($.finishedLanes = et),
    Qk($, uk, vk),
    Ek($, B$1()),
    null
  );
}
function Rk($, et) {
  var tt = K;
  K |= 1;
  try {
    return $(et);
  } finally {
    (K = tt), K === 0 && ((Hj = B$1() + 500), fg && jg());
  }
}
function Sk($) {
  xk !== null && xk.tag === 0 && !(K & 6) && Ik();
  var et = K;
  K |= 1;
  var tt = pk.transition,
    rt = C;
  try {
    if (((pk.transition = null), (C = 1), $)) return $();
  } finally {
    (C = rt), (pk.transition = tt), (K = et), !(K & 6) && jg();
  }
}
function Ij() {
  (gj = fj.current), E$1(fj);
}
function Lk($, et) {
  ($.finishedWork = null), ($.finishedLanes = 0);
  var tt = $.timeoutHandle;
  if ((tt !== -1 && (($.timeoutHandle = -1), Gf(tt)), Y !== null))
    for (tt = Y.return; tt !== null; ) {
      var rt = tt;
      switch ((wg(rt), rt.tag)) {
        case 1:
          (rt = rt.type.childContextTypes), rt != null && $f();
          break;
        case 3:
          Jh(), E$1(Wf), E$1(H$1), Oh();
          break;
        case 5:
          Lh(rt);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E$1(M$1);
          break;
        case 19:
          E$1(M$1);
          break;
        case 10:
          Rg(rt.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      tt = tt.return;
    }
  if (
    ((R$1 = $),
    (Y = $ = wh($.current, null)),
    (Z$1 = gj = et),
    (T = 0),
    (qk = null),
    (sk = rk = hh = 0),
    (uk = tk = null),
    Wg !== null)
  ) {
    for (et = 0; et < Wg.length; et++)
      if (((tt = Wg[et]), (rt = tt.interleaved), rt !== null)) {
        tt.interleaved = null;
        var nt = rt.next,
          ot = tt.pending;
        if (ot !== null) {
          var it = ot.next;
          (ot.next = nt), (rt.next = it);
        }
        tt.pending = rt;
      }
    Wg = null;
  }
  return $;
}
function Nk($, et) {
  do {
    var tt = Y;
    try {
      if ((Qg(), (Ph.current = ai), Sh)) {
        for (var rt = N$1.memoizedState; rt !== null; ) {
          var nt = rt.queue;
          nt !== null && (nt.pending = null), (rt = rt.next);
        }
        Sh = !1;
      }
      if (
        ((Rh = 0),
        (P$1 = O$1 = N$1 = null),
        (Th = !1),
        (Uh = 0),
        (ok.current = null),
        tt === null || tt.return === null)
      ) {
        (T = 1), (qk = et), (Y = null);
        break;
      }
      e: {
        var ot = $,
          it = tt.return,
          at = tt,
          st = et;
        if (
          ((et = Z$1),
          (at.flags |= 32768),
          st !== null && typeof st == 'object' && typeof st.then == 'function')
        ) {
          var lt = st,
            ut = at,
            ct = ut.tag;
          if (!(ut.mode & 1) && (ct === 0 || ct === 11 || ct === 15)) {
            var dt = ut.alternate;
            dt
              ? ((ut.updateQueue = dt.updateQueue),
                (ut.memoizedState = dt.memoizedState),
                (ut.lanes = dt.lanes))
              : ((ut.updateQueue = null), (ut.memoizedState = null));
          }
          var ft = Vi(it);
          if (ft !== null) {
            (ft.flags &= -257),
              Wi(ft, it, at, ot, et),
              ft.mode & 1 && Ti(ot, lt, et),
              (et = ft),
              (st = lt);
            var pt = et.updateQueue;
            if (pt === null) {
              var gt = new Set();
              gt.add(st), (et.updateQueue = gt);
            } else pt.add(st);
            break e;
          } else {
            if (!(et & 1)) {
              Ti(ot, lt, et), uj();
              break e;
            }
            st = Error(p$5(426));
          }
        } else if (I$1 && at.mode & 1) {
          var bt = Vi(it);
          if (bt !== null) {
            !(bt.flags & 65536) && (bt.flags |= 256), Wi(bt, it, at, ot, et), Jg(Ki(st, at));
            break e;
          }
        }
        (ot = st = Ki(st, at)),
          T !== 4 && (T = 2),
          tk === null ? (tk = [ot]) : tk.push(ot),
          (ot = it);
        do {
          switch (ot.tag) {
            case 3:
              (ot.flags |= 65536), (et &= -et), (ot.lanes |= et);
              var ht = Oi(ot, st, et);
              fh(ot, ht);
              break e;
            case 1:
              at = st;
              var mt = ot.type,
                yt = ot.stateNode;
              if (
                !(ot.flags & 128) &&
                (typeof mt.getDerivedStateFromError == 'function' ||
                  (yt !== null &&
                    typeof yt.componentDidCatch == 'function' &&
                    (Si === null || !Si.has(yt))))
              ) {
                (ot.flags |= 65536), (et &= -et), (ot.lanes |= et);
                var St = Ri(ot, at, et);
                fh(ot, St);
                break e;
              }
          }
          ot = ot.return;
        } while (ot !== null);
      }
      Tk(tt);
    } catch (_t) {
      (et = _t), Y === tt && tt !== null && (Y = tt = tt.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var $ = nk.current;
  return (nk.current = ai), $ === null ? ai : $;
}
function uj() {
  (T === 0 || T === 3 || T === 2) && (T = 4),
    R$1 === null || (!(hh & 268435455) && !(rk & 268435455)) || Dk(R$1, Z$1);
}
function Jk($, et) {
  var tt = K;
  K |= 2;
  var rt = Kk();
  (R$1 !== $ || Z$1 !== et) && ((vk = null), Lk($, et));
  do
    try {
      Uk();
      break;
    } catch (nt) {
      Nk($, nt);
    }
  while (1);
  if ((Qg(), (K = tt), (nk.current = rt), Y !== null)) throw Error(p$5(261));
  return (R$1 = null), (Z$1 = 0), T;
}
function Uk() {
  for (; Y !== null; ) Vk(Y);
}
function Mk() {
  for (; Y !== null && !cc(); ) Vk(Y);
}
function Vk($) {
  var et = Wk($.alternate, $, gj);
  ($.memoizedProps = $.pendingProps), et === null ? Tk($) : (Y = et), (ok.current = null);
}
function Tk($) {
  var et = $;
  do {
    var tt = et.alternate;
    if ((($ = et.return), et.flags & 32768)) {
      if (((tt = Jj(tt, et)), tt !== null)) {
        (tt.flags &= 32767), (Y = tt);
        return;
      }
      if ($ !== null) ($.flags |= 32768), ($.subtreeFlags = 0), ($.deletions = null);
      else {
        (T = 6), (Y = null);
        return;
      }
    } else if (((tt = Fj(tt, et, gj)), tt !== null)) {
      Y = tt;
      return;
    }
    if (((et = et.sibling), et !== null)) {
      Y = et;
      return;
    }
    Y = et = $;
  } while (et !== null);
  T === 0 && (T = 5);
}
function Qk($, et, tt) {
  var rt = C,
    nt = pk.transition;
  try {
    (pk.transition = null), (C = 1), Xk($, et, tt, rt);
  } finally {
    (pk.transition = nt), (C = rt);
  }
  return null;
}
function Xk($, et, tt, rt) {
  do Ik();
  while (xk !== null);
  if (K & 6) throw Error(p$5(327));
  tt = $.finishedWork;
  var nt = $.finishedLanes;
  if (tt === null) return null;
  if ((($.finishedWork = null), ($.finishedLanes = 0), tt === $.current)) throw Error(p$5(177));
  ($.callbackNode = null), ($.callbackPriority = 0);
  var ot = tt.lanes | tt.childLanes;
  if (
    (Bc($, ot),
    $ === R$1 && ((Y = R$1 = null), (Z$1 = 0)),
    (!(tt.subtreeFlags & 2064) && !(tt.flags & 2064)) ||
      wk ||
      ((wk = !0),
      Gk(hc, function () {
        return Ik(), null;
      })),
    (ot = (tt.flags & 15990) !== 0),
    tt.subtreeFlags & 15990 || ot)
  ) {
    (ot = pk.transition), (pk.transition = null);
    var it = C;
    C = 1;
    var at = K;
    (K |= 4),
      (ok.current = null),
      Pj($, tt),
      ek(tt, $),
      Oe(Df),
      (dd = !!Cf),
      (Df = Cf = null),
      ($.current = tt),
      ik(tt),
      dc(),
      (K = at),
      (C = it),
      (pk.transition = ot);
  } else $.current = tt;
  if (
    (wk && ((wk = !1), (xk = $), (yk = nt)),
    (ot = $.pendingLanes),
    ot === 0 && (Si = null),
    mc(tt.stateNode),
    Ek($, B$1()),
    et !== null)
  )
    for (rt = $.onRecoverableError, tt = 0; tt < et.length; tt++)
      (nt = et[tt]), rt(nt.value, { componentStack: nt.stack, digest: nt.digest });
  if (Pi) throw ((Pi = !1), ($ = Qi), (Qi = null), $);
  return (
    yk & 1 && $.tag !== 0 && Ik(),
    (ot = $.pendingLanes),
    ot & 1 ? ($ === Ak ? zk++ : ((zk = 0), (Ak = $))) : (zk = 0),
    jg(),
    null
  );
}
function Ik() {
  if (xk !== null) {
    var $ = Dc(yk),
      et = pk.transition,
      tt = C;
    try {
      if (((pk.transition = null), (C = 16 > $ ? 16 : $), xk === null)) var rt = !1;
      else {
        if ((($ = xk), (xk = null), (yk = 0), K & 6)) throw Error(p$5(331));
        var nt = K;
        for (K |= 4, V = $.current; V !== null; ) {
          var ot = V,
            it = ot.child;
          if (V.flags & 16) {
            var at = ot.deletions;
            if (at !== null) {
              for (var st = 0; st < at.length; st++) {
                var lt = at[st];
                for (V = lt; V !== null; ) {
                  var ut = V;
                  switch (ut.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, ut, ot);
                  }
                  var ct = ut.child;
                  if (ct !== null) (ct.return = ut), (V = ct);
                  else
                    for (; V !== null; ) {
                      ut = V;
                      var dt = ut.sibling,
                        ft = ut.return;
                      if ((Tj(ut), ut === lt)) {
                        V = null;
                        break;
                      }
                      if (dt !== null) {
                        (dt.return = ft), (V = dt);
                        break;
                      }
                      V = ft;
                    }
                }
              }
              var pt = ot.alternate;
              if (pt !== null) {
                var gt = pt.child;
                if (gt !== null) {
                  pt.child = null;
                  do {
                    var bt = gt.sibling;
                    (gt.sibling = null), (gt = bt);
                  } while (gt !== null);
                }
              }
              V = ot;
            }
          }
          if (ot.subtreeFlags & 2064 && it !== null) (it.return = ot), (V = it);
          else
            e: for (; V !== null; ) {
              if (((ot = V), ot.flags & 2048))
                switch (ot.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, ot, ot.return);
                }
              var ht = ot.sibling;
              if (ht !== null) {
                (ht.return = ot.return), (V = ht);
                break e;
              }
              V = ot.return;
            }
        }
        var mt = $.current;
        for (V = mt; V !== null; ) {
          it = V;
          var yt = it.child;
          if (it.subtreeFlags & 2064 && yt !== null) (yt.return = it), (V = yt);
          else
            e: for (it = mt; V !== null; ) {
              if (((at = V), at.flags & 2048))
                try {
                  switch (at.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rj(9, at);
                  }
                } catch (_t) {
                  W$1(at, at.return, _t);
                }
              if (at === it) {
                V = null;
                break e;
              }
              var St = at.sibling;
              if (St !== null) {
                (St.return = at.return), (V = St);
                break e;
              }
              V = at.return;
            }
        }
        if (((K = nt), jg(), lc && typeof lc.onPostCommitFiberRoot == 'function'))
          try {
            lc.onPostCommitFiberRoot(kc, $);
          } catch {}
        rt = !0;
      }
      return rt;
    } finally {
      (C = tt), (pk.transition = et);
    }
  }
  return !1;
}
function Yk($, et, tt) {
  (et = Ki(tt, et)),
    (et = Oi($, et, 1)),
    ($ = dh($, et, 1)),
    (et = L$1()),
    $ !== null && (Ac($, 1, et), Ek($, et));
}
function W$1($, et, tt) {
  if ($.tag === 3) Yk($, $, tt);
  else
    for (; et !== null; ) {
      if (et.tag === 3) {
        Yk(et, $, tt);
        break;
      } else if (et.tag === 1) {
        var rt = et.stateNode;
        if (
          typeof et.type.getDerivedStateFromError == 'function' ||
          (typeof rt.componentDidCatch == 'function' && (Si === null || !Si.has(rt)))
        ) {
          ($ = Ki(tt, $)),
            ($ = Ri(et, $, 1)),
            (et = dh(et, $, 1)),
            ($ = L$1()),
            et !== null && (Ac(et, 1, $), Ek(et, $));
          break;
        }
      }
      et = et.return;
    }
}
function Ui($, et, tt) {
  var rt = $.pingCache;
  rt !== null && rt.delete(et),
    (et = L$1()),
    ($.pingedLanes |= $.suspendedLanes & tt),
    R$1 === $ &&
      (Z$1 & tt) === tt &&
      (T === 4 || (T === 3 && (Z$1 & 130023424) === Z$1 && 500 > B$1() - gk)
        ? Lk($, 0)
        : (sk |= tt)),
    Ek($, et);
}
function Zk($, et) {
  et === 0 &&
    ($.mode & 1 ? ((et = sc), (sc <<= 1), !(sc & 130023424) && (sc = 4194304)) : (et = 1));
  var tt = L$1();
  ($ = Zg($, et)), $ !== null && (Ac($, et, tt), Ek($, tt));
}
function vj($) {
  var et = $.memoizedState,
    tt = 0;
  et !== null && (tt = et.retryLane), Zk($, tt);
}
function ck($, et) {
  var tt = 0;
  switch ($.tag) {
    case 13:
      var rt = $.stateNode,
        nt = $.memoizedState;
      nt !== null && (tt = nt.retryLane);
      break;
    case 19:
      rt = $.stateNode;
      break;
    default:
      throw Error(p$5(314));
  }
  rt !== null && rt.delete(et), Zk($, tt);
}
var Wk;
Wk = function ($, et, tt) {
  if ($ !== null)
    if ($.memoizedProps !== et.pendingProps || Wf.current) Ug = !0;
    else {
      if (!($.lanes & tt) && !(et.flags & 128)) return (Ug = !1), zj($, et, tt);
      Ug = !!($.flags & 131072);
    }
  else (Ug = !1), I$1 && et.flags & 1048576 && ug(et, ng, et.index);
  switch (((et.lanes = 0), et.tag)) {
    case 2:
      var rt = et.type;
      jj($, et), ($ = et.pendingProps);
      var nt = Yf(et, H$1.current);
      Tg(et, tt), (nt = Xh(null, et, rt, $, nt, tt));
      var ot = bi();
      return (
        (et.flags |= 1),
        typeof nt == 'object' &&
        nt !== null &&
        typeof nt.render == 'function' &&
        nt.$$typeof === void 0
          ? ((et.tag = 1),
            (et.memoizedState = null),
            (et.updateQueue = null),
            Zf(rt) ? ((ot = !0), cg(et)) : (ot = !1),
            (et.memoizedState = nt.state !== null && nt.state !== void 0 ? nt.state : null),
            ah(et),
            (nt.updater = nh),
            (et.stateNode = nt),
            (nt._reactInternals = et),
            rh(et, rt, $, tt),
            (et = kj(null, et, rt, !0, ot, tt)))
          : ((et.tag = 0), I$1 && ot && vg(et), Yi(null, et, nt, tt), (et = et.child)),
        et
      );
    case 16:
      rt = et.elementType;
      e: {
        switch (
          (jj($, et),
          ($ = et.pendingProps),
          (nt = rt._init),
          (rt = nt(rt._payload)),
          (et.type = rt),
          (nt = et.tag = $k(rt)),
          ($ = Lg(rt, $)),
          nt)
        ) {
          case 0:
            et = dj(null, et, rt, $, tt);
            break e;
          case 1:
            et = ij(null, et, rt, $, tt);
            break e;
          case 11:
            et = Zi(null, et, rt, $, tt);
            break e;
          case 14:
            et = aj(null, et, rt, Lg(rt.type, $), tt);
            break e;
        }
        throw Error(p$5(306, rt, ''));
      }
      return et;
    case 0:
      return (
        (rt = et.type),
        (nt = et.pendingProps),
        (nt = et.elementType === rt ? nt : Lg(rt, nt)),
        dj($, et, rt, nt, tt)
      );
    case 1:
      return (
        (rt = et.type),
        (nt = et.pendingProps),
        (nt = et.elementType === rt ? nt : Lg(rt, nt)),
        ij($, et, rt, nt, tt)
      );
    case 3:
      e: {
        if ((lj(et), $ === null)) throw Error(p$5(387));
        (rt = et.pendingProps),
          (ot = et.memoizedState),
          (nt = ot.element),
          bh($, et),
          gh(et, rt, null, tt);
        var it = et.memoizedState;
        if (((rt = it.element), ot.isDehydrated))
          if (
            ((ot = {
              element: rt,
              isDehydrated: !1,
              cache: it.cache,
              pendingSuspenseBoundaries: it.pendingSuspenseBoundaries,
              transitions: it.transitions
            }),
            (et.updateQueue.baseState = ot),
            (et.memoizedState = ot),
            et.flags & 256)
          ) {
            (nt = Ki(Error(p$5(423)), et)), (et = mj($, et, rt, tt, nt));
            break e;
          } else if (rt !== nt) {
            (nt = Ki(Error(p$5(424)), et)), (et = mj($, et, rt, tt, nt));
            break e;
          } else
            for (
              yg = Lf(et.stateNode.containerInfo.firstChild),
                xg = et,
                I$1 = !0,
                zg = null,
                tt = Ch(et, null, rt, tt),
                et.child = tt;
              tt;

            )
              (tt.flags = (tt.flags & -3) | 4096), (tt = tt.sibling);
        else {
          if ((Ig(), rt === nt)) {
            et = $i($, et, tt);
            break e;
          }
          Yi($, et, rt, tt);
        }
        et = et.child;
      }
      return et;
    case 5:
      return (
        Kh(et),
        $ === null && Eg(et),
        (rt = et.type),
        (nt = et.pendingProps),
        (ot = $ !== null ? $.memoizedProps : null),
        (it = nt.children),
        Ef(rt, nt) ? (it = null) : ot !== null && Ef(rt, ot) && (et.flags |= 32),
        hj($, et),
        Yi($, et, it, tt),
        et.child
      );
    case 6:
      return $ === null && Eg(et), null;
    case 13:
      return pj($, et, tt);
    case 4:
      return (
        Ih(et, et.stateNode.containerInfo),
        (rt = et.pendingProps),
        $ === null ? (et.child = Bh(et, null, rt, tt)) : Yi($, et, rt, tt),
        et.child
      );
    case 11:
      return (
        (rt = et.type),
        (nt = et.pendingProps),
        (nt = et.elementType === rt ? nt : Lg(rt, nt)),
        Zi($, et, rt, nt, tt)
      );
    case 7:
      return Yi($, et, et.pendingProps, tt), et.child;
    case 8:
      return Yi($, et, et.pendingProps.children, tt), et.child;
    case 12:
      return Yi($, et, et.pendingProps.children, tt), et.child;
    case 10:
      e: {
        if (
          ((rt = et.type._context),
          (nt = et.pendingProps),
          (ot = et.memoizedProps),
          (it = nt.value),
          G$1(Mg, rt._currentValue),
          (rt._currentValue = it),
          ot !== null)
        )
          if (He(ot.value, it)) {
            if (ot.children === nt.children && !Wf.current) {
              et = $i($, et, tt);
              break e;
            }
          } else
            for (ot = et.child, ot !== null && (ot.return = et); ot !== null; ) {
              var at = ot.dependencies;
              if (at !== null) {
                it = ot.child;
                for (var st = at.firstContext; st !== null; ) {
                  if (st.context === rt) {
                    if (ot.tag === 1) {
                      (st = ch(-1, tt & -tt)), (st.tag = 2);
                      var lt = ot.updateQueue;
                      if (lt !== null) {
                        lt = lt.shared;
                        var ut = lt.pending;
                        ut === null ? (st.next = st) : ((st.next = ut.next), (ut.next = st)),
                          (lt.pending = st);
                      }
                    }
                    (ot.lanes |= tt),
                      (st = ot.alternate),
                      st !== null && (st.lanes |= tt),
                      Sg(ot.return, tt, et),
                      (at.lanes |= tt);
                    break;
                  }
                  st = st.next;
                }
              } else if (ot.tag === 10) it = ot.type === et.type ? null : ot.child;
              else if (ot.tag === 18) {
                if (((it = ot.return), it === null)) throw Error(p$5(341));
                (it.lanes |= tt),
                  (at = it.alternate),
                  at !== null && (at.lanes |= tt),
                  Sg(it, tt, et),
                  (it = ot.sibling);
              } else it = ot.child;
              if (it !== null) it.return = ot;
              else
                for (it = ot; it !== null; ) {
                  if (it === et) {
                    it = null;
                    break;
                  }
                  if (((ot = it.sibling), ot !== null)) {
                    (ot.return = it.return), (it = ot);
                    break;
                  }
                  it = it.return;
                }
              ot = it;
            }
        Yi($, et, nt.children, tt), (et = et.child);
      }
      return et;
    case 9:
      return (
        (nt = et.type),
        (rt = et.pendingProps.children),
        Tg(et, tt),
        (nt = Vg(nt)),
        (rt = rt(nt)),
        (et.flags |= 1),
        Yi($, et, rt, tt),
        et.child
      );
    case 14:
      return (
        (rt = et.type),
        (nt = Lg(rt, et.pendingProps)),
        (nt = Lg(rt.type, nt)),
        aj($, et, rt, nt, tt)
      );
    case 15:
      return cj($, et, et.type, et.pendingProps, tt);
    case 17:
      return (
        (rt = et.type),
        (nt = et.pendingProps),
        (nt = et.elementType === rt ? nt : Lg(rt, nt)),
        jj($, et),
        (et.tag = 1),
        Zf(rt) ? (($ = !0), cg(et)) : ($ = !1),
        Tg(et, tt),
        ph(et, rt, nt),
        rh(et, rt, nt, tt),
        kj(null, et, rt, !0, $, tt)
      );
    case 19:
      return yj($, et, tt);
    case 22:
      return ej($, et, tt);
  }
  throw Error(p$5(156, et.tag));
};
function Gk($, et) {
  return ac($, et);
}
function al($, et, tt, rt) {
  (this.tag = $),
    (this.key = tt),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = et),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = rt),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Bg($, et, tt, rt) {
  return new al($, et, tt, rt);
}
function bj($) {
  return ($ = $.prototype), !(!$ || !$.isReactComponent);
}
function $k($) {
  if (typeof $ == 'function') return bj($) ? 1 : 0;
  if ($ != null) {
    if ((($ = $.$$typeof), $ === Da)) return 11;
    if ($ === Ga) return 14;
  }
  return 2;
}
function wh($, et) {
  var tt = $.alternate;
  return (
    tt === null
      ? ((tt = Bg($.tag, et, $.key, $.mode)),
        (tt.elementType = $.elementType),
        (tt.type = $.type),
        (tt.stateNode = $.stateNode),
        (tt.alternate = $),
        ($.alternate = tt))
      : ((tt.pendingProps = et),
        (tt.type = $.type),
        (tt.flags = 0),
        (tt.subtreeFlags = 0),
        (tt.deletions = null)),
    (tt.flags = $.flags & 14680064),
    (tt.childLanes = $.childLanes),
    (tt.lanes = $.lanes),
    (tt.child = $.child),
    (tt.memoizedProps = $.memoizedProps),
    (tt.memoizedState = $.memoizedState),
    (tt.updateQueue = $.updateQueue),
    (et = $.dependencies),
    (tt.dependencies = et === null ? null : { lanes: et.lanes, firstContext: et.firstContext }),
    (tt.sibling = $.sibling),
    (tt.index = $.index),
    (tt.ref = $.ref),
    tt
  );
}
function yh($, et, tt, rt, nt, ot) {
  var it = 2;
  if (((rt = $), typeof $ == 'function')) bj($) && (it = 1);
  else if (typeof $ == 'string') it = 5;
  else
    e: switch ($) {
      case ya:
        return Ah(tt.children, nt, ot, et);
      case za:
        (it = 8), (nt |= 8);
        break;
      case Aa:
        return ($ = Bg(12, tt, et, nt | 2)), ($.elementType = Aa), ($.lanes = ot), $;
      case Ea:
        return ($ = Bg(13, tt, et, nt)), ($.elementType = Ea), ($.lanes = ot), $;
      case Fa:
        return ($ = Bg(19, tt, et, nt)), ($.elementType = Fa), ($.lanes = ot), $;
      case Ia:
        return qj(tt, nt, ot, et);
      default:
        if (typeof $ == 'object' && $ !== null)
          switch ($.$$typeof) {
            case Ba:
              it = 10;
              break e;
            case Ca:
              it = 9;
              break e;
            case Da:
              it = 11;
              break e;
            case Ga:
              it = 14;
              break e;
            case Ha:
              (it = 16), (rt = null);
              break e;
          }
        throw Error(p$5(130, $ == null ? $ : typeof $, ''));
    }
  return (et = Bg(it, tt, et, nt)), (et.elementType = $), (et.type = rt), (et.lanes = ot), et;
}
function Ah($, et, tt, rt) {
  return ($ = Bg(7, $, rt, et)), ($.lanes = tt), $;
}
function qj($, et, tt, rt) {
  return (
    ($ = Bg(22, $, rt, et)),
    ($.elementType = Ia),
    ($.lanes = tt),
    ($.stateNode = { isHidden: !1 }),
    $
  );
}
function xh($, et, tt) {
  return ($ = Bg(6, $, null, et)), ($.lanes = tt), $;
}
function zh($, et, tt) {
  return (
    (et = Bg(4, $.children !== null ? $.children : [], $.key, et)),
    (et.lanes = tt),
    (et.stateNode = {
      containerInfo: $.containerInfo,
      pendingChildren: null,
      implementation: $.implementation
    }),
    et
  );
}
function bl($, et, tt, rt, nt) {
  (this.tag = et),
    (this.containerInfo = $),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zc(0)),
    (this.expirationTimes = zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zc(0)),
    (this.identifierPrefix = rt),
    (this.onRecoverableError = nt),
    (this.mutableSourceEagerHydrationData = null);
}
function cl($, et, tt, rt, nt, ot, it, at, st) {
  return (
    ($ = new bl($, et, tt, at, st)),
    et === 1 ? ((et = 1), ot === !0 && (et |= 8)) : (et = 0),
    (ot = Bg(3, null, null, et)),
    ($.current = ot),
    (ot.stateNode = $),
    (ot.memoizedState = {
      element: rt,
      isDehydrated: tt,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    ah(ot),
    $
  );
}
function dl($, et, tt) {
  var rt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: rt == null ? null : '' + rt,
    children: $,
    containerInfo: et,
    implementation: tt
  };
}
function el($) {
  if (!$) return Vf;
  $ = $._reactInternals;
  e: {
    if (Vb($) !== $ || $.tag !== 1) throw Error(p$5(170));
    var et = $;
    do {
      switch (et.tag) {
        case 3:
          et = et.stateNode.context;
          break e;
        case 1:
          if (Zf(et.type)) {
            et = et.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      et = et.return;
    } while (et !== null);
    throw Error(p$5(171));
  }
  if ($.tag === 1) {
    var tt = $.type;
    if (Zf(tt)) return bg($, tt, et);
  }
  return et;
}
function fl($, et, tt, rt, nt, ot, it, at, st) {
  return (
    ($ = cl(tt, rt, !0, $, nt, ot, it, at, st)),
    ($.context = el(null)),
    (tt = $.current),
    (rt = L$1()),
    (nt = lh(tt)),
    (ot = ch(rt, nt)),
    (ot.callback = et ?? null),
    dh(tt, ot, nt),
    ($.current.lanes = nt),
    Ac($, nt, rt),
    Ek($, rt),
    $
  );
}
function gl($, et, tt, rt) {
  var nt = et.current,
    ot = L$1(),
    it = lh(nt);
  return (
    (tt = el(tt)),
    et.context === null ? (et.context = tt) : (et.pendingContext = tt),
    (et = ch(ot, it)),
    (et.payload = { element: $ }),
    (rt = rt === void 0 ? null : rt),
    rt !== null && (et.callback = rt),
    ($ = dh(nt, et, it)),
    $ !== null && (mh($, nt, it, ot), eh($, nt, it)),
    it
  );
}
function hl($) {
  if ((($ = $.current), !$.child)) return null;
  switch ($.child.tag) {
    case 5:
      return $.child.stateNode;
    default:
      return $.child.stateNode;
  }
}
function il($, et) {
  if ((($ = $.memoizedState), $ !== null && $.dehydrated !== null)) {
    var tt = $.retryLane;
    $.retryLane = tt !== 0 && tt < et ? tt : et;
  }
}
function jl($, et) {
  il($, et), ($ = $.alternate) && il($, et);
}
function kl() {
  return null;
}
var ll =
  typeof reportError == 'function'
    ? reportError
    : function ($) {
        console.error($);
      };
function ml($) {
  this._internalRoot = $;
}
nl.prototype.render = ml.prototype.render = function ($) {
  var et = this._internalRoot;
  if (et === null) throw Error(p$5(409));
  gl($, et, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function () {
  var $ = this._internalRoot;
  if ($ !== null) {
    this._internalRoot = null;
    var et = $.containerInfo;
    Sk(function () {
      gl(null, $, null, null);
    }),
      (et[uf] = null);
  }
};
function nl($) {
  this._internalRoot = $;
}
nl.prototype.unstable_scheduleHydration = function ($) {
  if ($) {
    var et = Hc();
    $ = { blockedOn: null, target: $, priority: et };
    for (var tt = 0; tt < Qc.length && et !== 0 && et < Qc[tt].priority; tt++);
    Qc.splice(tt, 0, $), tt === 0 && Vc($);
  }
};
function ol($) {
  return !(!$ || ($.nodeType !== 1 && $.nodeType !== 9 && $.nodeType !== 11));
}
function pl($) {
  return !(
    !$ ||
    ($.nodeType !== 1 &&
      $.nodeType !== 9 &&
      $.nodeType !== 11 &&
      ($.nodeType !== 8 || $.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ql() {}
function rl($, et, tt, rt, nt) {
  if (nt) {
    if (typeof rt == 'function') {
      var ot = rt;
      rt = function () {
        var lt = hl(it);
        ot.call(lt);
      };
    }
    var it = fl(et, rt, $, 0, null, !1, !1, '', ql);
    return (
      ($._reactRootContainer = it),
      ($[uf] = it.current),
      sf($.nodeType === 8 ? $.parentNode : $),
      Sk(),
      it
    );
  }
  for (; (nt = $.lastChild); ) $.removeChild(nt);
  if (typeof rt == 'function') {
    var at = rt;
    rt = function () {
      var lt = hl(st);
      at.call(lt);
    };
  }
  var st = cl($, 0, !1, null, null, !1, !1, '', ql);
  return (
    ($._reactRootContainer = st),
    ($[uf] = st.current),
    sf($.nodeType === 8 ? $.parentNode : $),
    Sk(function () {
      gl(et, st, tt, rt);
    }),
    st
  );
}
function sl($, et, tt, rt, nt) {
  var ot = tt._reactRootContainer;
  if (ot) {
    var it = ot;
    if (typeof nt == 'function') {
      var at = nt;
      nt = function () {
        var st = hl(it);
        at.call(st);
      };
    }
    gl(et, it, $, nt);
  } else it = rl(tt, et, $, nt, rt);
  return hl(it);
}
Ec = function ($) {
  switch ($.tag) {
    case 3:
      var et = $.stateNode;
      if (et.current.memoizedState.isDehydrated) {
        var tt = tc(et.pendingLanes);
        tt !== 0 && (Cc(et, tt | 1), Ek(et, B$1()), !(K & 6) && ((Hj = B$1() + 500), jg()));
      }
      break;
    case 13:
      Sk(function () {
        var rt = Zg($, 1);
        if (rt !== null) {
          var nt = L$1();
          mh(rt, $, 1, nt);
        }
      }),
        jl($, 1);
  }
};
Fc = function ($) {
  if ($.tag === 13) {
    var et = Zg($, 134217728);
    if (et !== null) {
      var tt = L$1();
      mh(et, $, 134217728, tt);
    }
    jl($, 134217728);
  }
};
Gc = function ($) {
  if ($.tag === 13) {
    var et = lh($),
      tt = Zg($, et);
    if (tt !== null) {
      var rt = L$1();
      mh(tt, $, et, rt);
    }
    jl($, et);
  }
};
Hc = function () {
  return C;
};
Ic = function ($, et) {
  var tt = C;
  try {
    return (C = $), et();
  } finally {
    C = tt;
  }
};
yb = function ($, et, tt) {
  switch (et) {
    case 'input':
      if ((bb($, tt), (et = tt.name), tt.type === 'radio' && et != null)) {
        for (tt = $; tt.parentNode; ) tt = tt.parentNode;
        for (
          tt = tt.querySelectorAll('input[name=' + JSON.stringify('' + et) + '][type="radio"]'),
            et = 0;
          et < tt.length;
          et++
        ) {
          var rt = tt[et];
          if (rt !== $ && rt.form === $.form) {
            var nt = Db(rt);
            if (!nt) throw Error(p$5(90));
            Wa(rt), bb(rt, nt);
          }
        }
      }
      break;
    case 'textarea':
      ib($, tt);
      break;
    case 'select':
      (et = tt.value), et != null && fb($, !!tt.multiple, et, !1);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: !1, Events: [Cb, ue, Db, Eb, Fb, Rk] },
  ul = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  vl = {
    bundleType: ul.bundleType,
    version: ul.version,
    rendererPackageName: ul.rendererPackageName,
    rendererConfig: ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function ($) {
      return ($ = Zb($)), $ === null ? null : $.stateNode;
    },
    findFiberByHostInstance: ul.findFiberByHostInstance || kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      (kc = wl.inject(vl)), (lc = wl);
    } catch {}
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function ($, et) {
  var tt = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ol(et)) throw Error(p$5(200));
  return dl($, et, null, tt);
};
reactDom_production_min.createRoot = function ($, et) {
  if (!ol($)) throw Error(p$5(299));
  var tt = !1,
    rt = '',
    nt = ll;
  return (
    et != null &&
      (et.unstable_strictMode === !0 && (tt = !0),
      et.identifierPrefix !== void 0 && (rt = et.identifierPrefix),
      et.onRecoverableError !== void 0 && (nt = et.onRecoverableError)),
    (et = cl($, 1, !1, null, null, tt, !1, rt, nt)),
    ($[uf] = et.current),
    sf($.nodeType === 8 ? $.parentNode : $),
    new ml(et)
  );
};
reactDom_production_min.findDOMNode = function ($) {
  if ($ == null) return null;
  if ($.nodeType === 1) return $;
  var et = $._reactInternals;
  if (et === void 0)
    throw typeof $.render == 'function'
      ? Error(p$5(188))
      : (($ = Object.keys($).join(',')), Error(p$5(268, $)));
  return ($ = Zb(et)), ($ = $ === null ? null : $.stateNode), $;
};
reactDom_production_min.flushSync = function ($) {
  return Sk($);
};
reactDom_production_min.hydrate = function ($, et, tt) {
  if (!pl(et)) throw Error(p$5(200));
  return sl(null, $, et, !0, tt);
};
reactDom_production_min.hydrateRoot = function ($, et, tt) {
  if (!ol($)) throw Error(p$5(405));
  var rt = (tt != null && tt.hydratedSources) || null,
    nt = !1,
    ot = '',
    it = ll;
  if (
    (tt != null &&
      (tt.unstable_strictMode === !0 && (nt = !0),
      tt.identifierPrefix !== void 0 && (ot = tt.identifierPrefix),
      tt.onRecoverableError !== void 0 && (it = tt.onRecoverableError)),
    (et = fl(et, null, $, 1, tt ?? null, nt, !1, ot, it)),
    ($[uf] = et.current),
    sf($),
    rt)
  )
    for ($ = 0; $ < rt.length; $++)
      (tt = rt[$]),
        (nt = tt._getVersion),
        (nt = nt(tt._source)),
        et.mutableSourceEagerHydrationData == null
          ? (et.mutableSourceEagerHydrationData = [tt, nt])
          : et.mutableSourceEagerHydrationData.push(tt, nt);
  return new nl(et);
};
reactDom_production_min.render = function ($, et, tt) {
  if (!pl(et)) throw Error(p$5(200));
  return sl(null, $, et, !1, tt);
};
reactDom_production_min.unmountComponentAtNode = function ($) {
  if (!pl($)) throw Error(p$5(40));
  return $._reactRootContainer
    ? (Sk(function () {
        sl(null, null, $, !1, function () {
          ($._reactRootContainer = null), ($[uf] = null);
        });
      }),
      !0)
    : !1;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function ($, et, tt, rt) {
  if (!pl(tt)) throw Error(p$5(200));
  if ($ == null || $._reactInternals === void 0) throw Error(p$5(38));
  return sl($, et, tt, !1, rt);
};
reactDom_production_min.version = '18.2.0-next-9e3b772b8-20220608';
(function ($) {
  function et() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(et);
      } catch (tt) {
        console.error(tt);
      }
  }
  et(), ($.exports = reactDom_production_min);
})(reactDom);
var m$4 = reactDomExports;
(client.createRoot = m$4.createRoot), (client.hydrateRoot = m$4.hydrateRoot);
function n$4($) {
  for (var et = arguments.length, tt = Array(et > 1 ? et - 1 : 0), rt = 1; rt < et; rt++)
    tt[rt - 1] = arguments[rt];
  throw Error(
    '[Immer] minified error nr: ' +
      $ +
      (tt.length
        ? ' ' +
          tt
            .map(function (nt) {
              return "'" + nt + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function r$4($) {
  return !!$ && !!$[Q];
}
function t$5($) {
  var et;
  return (
    !!$ &&
    ((function (tt) {
      if (!tt || typeof tt != 'object') return !1;
      var rt = Object.getPrototypeOf(tt);
      if (rt === null) return !0;
      var nt = Object.hasOwnProperty.call(rt, 'constructor') && rt.constructor;
      return nt === Object || (typeof nt == 'function' && Function.toString.call(nt) === Z);
    })($) ||
      Array.isArray($) ||
      !!$[L] ||
      !!(!((et = $.constructor) === null || et === void 0) && et[L]) ||
      s($) ||
      v$3($))
  );
}
function i($, et, tt) {
  tt === void 0 && (tt = !1),
    o($) === 0
      ? (tt ? Object.keys : nn)($).forEach(function (rt) {
          (tt && typeof rt == 'symbol') || et(rt, $[rt], $);
        })
      : $.forEach(function (rt, nt) {
          return et(nt, rt, $);
        });
}
function o($) {
  var et = $[Q];
  return et ? (et.i > 3 ? et.i - 4 : et.i) : Array.isArray($) ? 1 : s($) ? 2 : v$3($) ? 3 : 0;
}
function u$3($, et) {
  return o($) === 2 ? $.has(et) : Object.prototype.hasOwnProperty.call($, et);
}
function a($, et) {
  return o($) === 2 ? $.get(et) : $[et];
}
function f$2($, et, tt) {
  var rt = o($);
  rt === 2 ? $.set(et, tt) : rt === 3 ? ($.delete(et), $.add(tt)) : ($[et] = tt);
}
function c$2($, et) {
  return $ === et ? $ !== 0 || 1 / $ == 1 / et : $ != $ && et != et;
}
function s($) {
  return X && $ instanceof Map;
}
function v$3($) {
  return q$4 && $ instanceof Set;
}
function p$4($) {
  return $.o || $.t;
}
function l$3($) {
  if (Array.isArray($)) return Array.prototype.slice.call($);
  var et = rn($);
  delete et[Q];
  for (var tt = nn(et), rt = 0; rt < tt.length; rt++) {
    var nt = tt[rt],
      ot = et[nt];
    ot.writable === !1 && ((ot.writable = !0), (ot.configurable = !0)),
      (ot.get || ot.set) &&
        (et[nt] = { configurable: !0, writable: !0, enumerable: ot.enumerable, value: $[nt] });
  }
  return Object.create(Object.getPrototypeOf($), et);
}
function d$2($, et) {
  return (
    et === void 0 && (et = !1),
    y$1($) ||
      r$4($) ||
      !t$5($) ||
      (o($) > 1 && ($.set = $.add = $.clear = $.delete = h$4),
      Object.freeze($),
      et &&
        i(
          $,
          function (tt, rt) {
            return d$2(rt, !0);
          },
          !0
        )),
    $
  );
}
function h$4() {
  n$4(2);
}
function y$1($) {
  return $ == null || typeof $ != 'object' || Object.isFrozen($);
}
function b$2($) {
  var et = tn[$];
  return et || n$4(18, $), et;
}
function m$3($, et) {
  tn[$] || (tn[$] = et);
}
function _() {
  return U;
}
function j($, et) {
  et && (b$2('Patches'), ($.u = []), ($.s = []), ($.v = et));
}
function O($) {
  g$2($), $.p.forEach(S), ($.p = null);
}
function g$2($) {
  $ === U && (U = $.l);
}
function w$2($) {
  return (U = { p: [], l: U, h: $, m: !0, _: 0 });
}
function S($) {
  var et = $[Q];
  et.i === 0 || et.i === 1 ? et.j() : (et.O = !0);
}
function P($, et) {
  et._ = et.p.length;
  var tt = et.p[0],
    rt = $ !== void 0 && $ !== tt;
  return (
    et.h.g || b$2('ES5').S(et, $, rt),
    rt
      ? (tt[Q].P && (O(et), n$4(4)),
        t$5($) && (($ = M(et, $)), et.l || x$1(et, $)),
        et.u && b$2('Patches').M(tt[Q].t, $, et.u, et.s))
      : ($ = M(et, tt, [])),
    O(et),
    et.u && et.v(et.u, et.s),
    $ !== H ? $ : void 0
  );
}
function M($, et, tt) {
  if (y$1(et)) return et;
  var rt = et[Q];
  if (!rt)
    return (
      i(
        et,
        function (ot, it) {
          return A$1($, rt, et, ot, it, tt);
        },
        !0
      ),
      et
    );
  if (rt.A !== $) return et;
  if (!rt.P) return x$1($, rt.t, !0), rt.t;
  if (!rt.I) {
    (rt.I = !0), rt.A._--;
    var nt = rt.i === 4 || rt.i === 5 ? (rt.o = l$3(rt.k)) : rt.o;
    i(rt.i === 3 ? new Set(nt) : nt, function (ot, it) {
      return A$1($, rt, nt, ot, it, tt);
    }),
      x$1($, nt, !1),
      tt && $.u && b$2('Patches').N(rt, tt, $.u, $.s);
  }
  return rt.o;
}
function A$1($, et, tt, rt, nt, ot) {
  if (r$4(nt)) {
    var it = M($, nt, ot && et && et.i !== 3 && !u$3(et.R, rt) ? ot.concat(rt) : void 0);
    if ((f$2(tt, rt, it), !r$4(it))) return;
    $.m = !1;
  }
  if (t$5(nt) && !y$1(nt)) {
    if (!$.h.D && $._ < 1) return;
    M($, nt), (et && et.A.l) || x$1($, nt);
  }
}
function x$1($, et, tt) {
  tt === void 0 && (tt = !1), $.h.D && $.m && d$2(et, tt);
}
function z$1($, et) {
  var tt = $[Q];
  return (tt ? p$4(tt) : $)[et];
}
function I($, et) {
  if (et in $)
    for (var tt = Object.getPrototypeOf($); tt; ) {
      var rt = Object.getOwnPropertyDescriptor(tt, et);
      if (rt) return rt;
      tt = Object.getPrototypeOf(tt);
    }
}
function k$3($) {
  $.P || (($.P = !0), $.l && k$3($.l));
}
function E($) {
  $.o || ($.o = l$3($.t));
}
function N($, et, tt) {
  var rt = s(et)
    ? b$2('MapSet').F(et, tt)
    : v$3(et)
    ? b$2('MapSet').T(et, tt)
    : $.g
    ? (function (nt, ot) {
        var it = Array.isArray(nt),
          at = {
            i: it ? 1 : 0,
            A: ot ? ot.A : _(),
            P: !1,
            I: !1,
            R: {},
            l: ot,
            t: nt,
            k: null,
            o: null,
            j: null,
            C: !1
          },
          st = at,
          lt = en;
        it && ((st = [at]), (lt = on));
        var ut = Proxy.revocable(st, lt),
          ct = ut.revoke,
          dt = ut.proxy;
        return (at.k = dt), (at.j = ct), dt;
      })(et, tt)
    : b$2('ES5').J(et, tt);
  return (tt ? tt.A : _()).p.push(rt), rt;
}
function R($) {
  return (
    r$4($) || n$4(22, $),
    (function et(tt) {
      if (!t$5(tt)) return tt;
      var rt,
        nt = tt[Q],
        ot = o(tt);
      if (nt) {
        if (!nt.P && (nt.i < 4 || !b$2('ES5').K(nt))) return nt.t;
        (nt.I = !0), (rt = D(tt, ot)), (nt.I = !1);
      } else rt = D(tt, ot);
      return (
        i(rt, function (it, at) {
          (nt && a(nt.t, it) === at) || f$2(rt, it, et(at));
        }),
        ot === 3 ? new Set(rt) : rt
      );
    })($)
  );
}
function D($, et) {
  switch (et) {
    case 2:
      return new Map($);
    case 3:
      return Array.from($);
  }
  return l$3($);
}
function F() {
  function $(ot, it) {
    var at = nt[ot];
    return (
      at
        ? (at.enumerable = it)
        : (nt[ot] = at =
            {
              configurable: !0,
              enumerable: it,
              get: function () {
                var st = this[Q];
                return en.get(st, ot);
              },
              set: function (st) {
                var lt = this[Q];
                en.set(lt, ot, st);
              }
            }),
      at
    );
  }
  function et(ot) {
    for (var it = ot.length - 1; it >= 0; it--) {
      var at = ot[it][Q];
      if (!at.P)
        switch (at.i) {
          case 5:
            rt(at) && k$3(at);
            break;
          case 4:
            tt(at) && k$3(at);
        }
    }
  }
  function tt(ot) {
    for (var it = ot.t, at = ot.k, st = nn(at), lt = st.length - 1; lt >= 0; lt--) {
      var ut = st[lt];
      if (ut !== Q) {
        var ct = it[ut];
        if (ct === void 0 && !u$3(it, ut)) return !0;
        var dt = at[ut],
          ft = dt && dt[Q];
        if (ft ? ft.t !== ct : !c$2(dt, ct)) return !0;
      }
    }
    var pt = !!it[Q];
    return st.length !== nn(it).length + (pt ? 0 : 1);
  }
  function rt(ot) {
    var it = ot.k;
    if (it.length !== ot.t.length) return !0;
    var at = Object.getOwnPropertyDescriptor(it, it.length - 1);
    if (at && !at.get) return !0;
    for (var st = 0; st < it.length; st++) if (!it.hasOwnProperty(st)) return !0;
    return !1;
  }
  var nt = {};
  m$3('ES5', {
    J: function (ot, it) {
      var at = Array.isArray(ot),
        st = (function (ut, ct) {
          if (ut) {
            for (var dt = Array(ct.length), ft = 0; ft < ct.length; ft++)
              Object.defineProperty(dt, '' + ft, $(ft, !0));
            return dt;
          }
          var pt = rn(ct);
          delete pt[Q];
          for (var gt = nn(pt), bt = 0; bt < gt.length; bt++) {
            var ht = gt[bt];
            pt[ht] = $(ht, ut || !!pt[ht].enumerable);
          }
          return Object.create(Object.getPrototypeOf(ct), pt);
        })(at, ot),
        lt = {
          i: at ? 5 : 4,
          A: it ? it.A : _(),
          P: !1,
          I: !1,
          R: {},
          l: it,
          t: ot,
          k: st,
          o: null,
          O: !1,
          C: !1
        };
      return Object.defineProperty(st, Q, { value: lt, writable: !0 }), st;
    },
    S: function (ot, it, at) {
      at
        ? r$4(it) && it[Q].A === ot && et(ot.p)
        : (ot.u &&
            (function st(lt) {
              if (lt && typeof lt == 'object') {
                var ut = lt[Q];
                if (ut) {
                  var ct = ut.t,
                    dt = ut.k,
                    ft = ut.R,
                    pt = ut.i;
                  if (pt === 4)
                    i(dt, function (yt) {
                      yt !== Q &&
                        (ct[yt] !== void 0 || u$3(ct, yt)
                          ? ft[yt] || st(dt[yt])
                          : ((ft[yt] = !0), k$3(ut)));
                    }),
                      i(ct, function (yt) {
                        dt[yt] !== void 0 || u$3(dt, yt) || ((ft[yt] = !1), k$3(ut));
                      });
                  else if (pt === 5) {
                    if ((rt(ut) && (k$3(ut), (ft.length = !0)), dt.length < ct.length))
                      for (var gt = dt.length; gt < ct.length; gt++) ft[gt] = !1;
                    else for (var bt = ct.length; bt < dt.length; bt++) ft[bt] = !0;
                    for (var ht = Math.min(dt.length, ct.length), mt = 0; mt < ht; mt++)
                      dt.hasOwnProperty(mt) || (ft[mt] = !0), ft[mt] === void 0 && st(dt[mt]);
                  }
                }
              }
            })(ot.p[0]),
          et(ot.p));
    },
    K: function (ot) {
      return ot.i === 4 ? tt(ot) : rt(ot);
    }
  });
}
var G,
  U,
  W = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  X = typeof Map < 'u',
  q$4 = typeof Set < 'u',
  B = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  H = W ? Symbol.for('immer-nothing') : (((G = {})['immer-nothing'] = !0), G),
  L = W ? Symbol.for('immer-draftable') : '__$immer_draftable',
  Q = W ? Symbol.for('immer-state') : '__$immer_state',
  Z = '' + Object.prototype.constructor,
  nn =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function ($) {
          return Object.getOwnPropertyNames($).concat(Object.getOwnPropertySymbols($));
        }
      : Object.getOwnPropertyNames,
  rn =
    Object.getOwnPropertyDescriptors ||
    function ($) {
      var et = {};
      return (
        nn($).forEach(function (tt) {
          et[tt] = Object.getOwnPropertyDescriptor($, tt);
        }),
        et
      );
    },
  tn = {},
  en = {
    get: function ($, et) {
      if (et === Q) return $;
      var tt = p$4($);
      if (!u$3(tt, et))
        return (function (nt, ot, it) {
          var at,
            st = I(ot, it);
          return st
            ? 'value' in st
              ? st.value
              : (at = st.get) === null || at === void 0
              ? void 0
              : at.call(nt.k)
            : void 0;
        })($, tt, et);
      var rt = tt[et];
      return $.I || !t$5(rt) ? rt : rt === z$1($.t, et) ? (E($), ($.o[et] = N($.A.h, rt, $))) : rt;
    },
    has: function ($, et) {
      return et in p$4($);
    },
    ownKeys: function ($) {
      return Reflect.ownKeys(p$4($));
    },
    set: function ($, et, tt) {
      var rt = I(p$4($), et);
      if (rt != null && rt.set) return rt.set.call($.k, tt), !0;
      if (!$.P) {
        var nt = z$1(p$4($), et),
          ot = nt == null ? void 0 : nt[Q];
        if (ot && ot.t === tt) return ($.o[et] = tt), ($.R[et] = !1), !0;
        if (c$2(tt, nt) && (tt !== void 0 || u$3($.t, et))) return !0;
        E($), k$3($);
      }
      return (
        ($.o[et] === tt && (tt !== void 0 || et in $.o)) ||
          (Number.isNaN(tt) && Number.isNaN($.o[et])) ||
          (($.o[et] = tt), ($.R[et] = !0)),
        !0
      );
    },
    deleteProperty: function ($, et) {
      return (
        z$1($.t, et) !== void 0 || et in $.t ? (($.R[et] = !1), E($), k$3($)) : delete $.R[et],
        $.o && delete $.o[et],
        !0
      );
    },
    getOwnPropertyDescriptor: function ($, et) {
      var tt = p$4($),
        rt = Reflect.getOwnPropertyDescriptor(tt, et);
      return (
        rt && {
          writable: !0,
          configurable: $.i !== 1 || et !== 'length',
          enumerable: rt.enumerable,
          value: tt[et]
        }
      );
    },
    defineProperty: function () {
      n$4(11);
    },
    getPrototypeOf: function ($) {
      return Object.getPrototypeOf($.t);
    },
    setPrototypeOf: function () {
      n$4(12);
    }
  },
  on = {};
i(en, function ($, et) {
  on[$] = function () {
    return (arguments[0] = arguments[0][0]), et.apply(this, arguments);
  };
}),
  (on.deleteProperty = function ($, et) {
    return on.set.call(this, $, et, void 0);
  }),
  (on.set = function ($, et, tt) {
    return en.set.call(this, $[0], et, tt, $[0]);
  });
var un = (function () {
    function $(tt) {
      var rt = this;
      (this.g = B),
        (this.D = !0),
        (this.produce = function (nt, ot, it) {
          if (typeof nt == 'function' && typeof ot != 'function') {
            var at = ot;
            ot = nt;
            var st = rt;
            return function (gt) {
              var bt = this;
              gt === void 0 && (gt = at);
              for (
                var ht = arguments.length, mt = Array(ht > 1 ? ht - 1 : 0), yt = 1;
                yt < ht;
                yt++
              )
                mt[yt - 1] = arguments[yt];
              return st.produce(gt, function (St) {
                var _t;
                return (_t = ot).call.apply(_t, [bt, St].concat(mt));
              });
            };
          }
          var lt;
          if (
            (typeof ot != 'function' && n$4(6),
            it !== void 0 && typeof it != 'function' && n$4(7),
            t$5(nt))
          ) {
            var ut = w$2(rt),
              ct = N(rt, nt, void 0),
              dt = !0;
            try {
              (lt = ot(ct)), (dt = !1);
            } finally {
              dt ? O(ut) : g$2(ut);
            }
            return typeof Promise < 'u' && lt instanceof Promise
              ? lt.then(
                  function (gt) {
                    return j(ut, it), P(gt, ut);
                  },
                  function (gt) {
                    throw (O(ut), gt);
                  }
                )
              : (j(ut, it), P(lt, ut));
          }
          if (!nt || typeof nt != 'object') {
            if (
              ((lt = ot(nt)) === void 0 && (lt = nt),
              lt === H && (lt = void 0),
              rt.D && d$2(lt, !0),
              it)
            ) {
              var ft = [],
                pt = [];
              b$2('Patches').M(nt, lt, ft, pt), it(ft, pt);
            }
            return lt;
          }
          n$4(21, nt);
        }),
        (this.produceWithPatches = function (nt, ot) {
          if (typeof nt == 'function')
            return function (lt) {
              for (
                var ut = arguments.length, ct = Array(ut > 1 ? ut - 1 : 0), dt = 1;
                dt < ut;
                dt++
              )
                ct[dt - 1] = arguments[dt];
              return rt.produceWithPatches(lt, function (ft) {
                return nt.apply(void 0, [ft].concat(ct));
              });
            };
          var it,
            at,
            st = rt.produce(nt, ot, function (lt, ut) {
              (it = lt), (at = ut);
            });
          return typeof Promise < 'u' && st instanceof Promise
            ? st.then(function (lt) {
                return [lt, it, at];
              })
            : [st, it, at];
        }),
        typeof (tt == null ? void 0 : tt.useProxies) == 'boolean' &&
          this.setUseProxies(tt.useProxies),
        typeof (tt == null ? void 0 : tt.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(tt.autoFreeze);
    }
    var et = $.prototype;
    return (
      (et.createDraft = function (tt) {
        t$5(tt) || n$4(8), r$4(tt) && (tt = R(tt));
        var rt = w$2(this),
          nt = N(this, tt, void 0);
        return (nt[Q].C = !0), g$2(rt), nt;
      }),
      (et.finishDraft = function (tt, rt) {
        var nt = tt && tt[Q],
          ot = nt.A;
        return j(ot, rt), P(void 0, ot);
      }),
      (et.setAutoFreeze = function (tt) {
        this.D = tt;
      }),
      (et.setUseProxies = function (tt) {
        tt && !B && n$4(20), (this.g = tt);
      }),
      (et.applyPatches = function (tt, rt) {
        var nt;
        for (nt = rt.length - 1; nt >= 0; nt--) {
          var ot = rt[nt];
          if (ot.path.length === 0 && ot.op === 'replace') {
            tt = ot.value;
            break;
          }
        }
        nt > -1 && (rt = rt.slice(nt + 1));
        var it = b$2('Patches').$;
        return r$4(tt)
          ? it(tt, rt)
          : this.produce(tt, function (at) {
              return it(at, rt);
            });
      }),
      $
    );
  })(),
  an = new un(),
  fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
function _typeof($) {
  return (
    (_typeof =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (et) {
            return typeof et;
          }
        : function (et) {
            return et &&
              typeof Symbol == 'function' &&
              et.constructor === Symbol &&
              et !== Symbol.prototype
              ? 'symbol'
              : typeof et;
          }),
    _typeof($)
  );
}
function _toPrimitive($, et) {
  if (_typeof($) !== 'object' || $ === null) return $;
  var tt = $[Symbol.toPrimitive];
  if (tt !== void 0) {
    var rt = tt.call($, et || 'default');
    if (_typeof(rt) !== 'object') return rt;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (et === 'string' ? String : Number)($);
}
function _toPropertyKey($) {
  var et = _toPrimitive($, 'string');
  return _typeof(et) === 'symbol' ? et : String(et);
}
function _defineProperty($, et, tt) {
  return (
    (et = _toPropertyKey(et)),
    et in $
      ? Object.defineProperty($, et, { value: tt, enumerable: !0, configurable: !0, writable: !0 })
      : ($[et] = tt),
    $
  );
}
function ownKeys($, et) {
  var tt = Object.keys($);
  if (Object.getOwnPropertySymbols) {
    var rt = Object.getOwnPropertySymbols($);
    et &&
      (rt = rt.filter(function (nt) {
        return Object.getOwnPropertyDescriptor($, nt).enumerable;
      })),
      tt.push.apply(tt, rt);
  }
  return tt;
}
function _objectSpread2($) {
  for (var et = 1; et < arguments.length; et++) {
    var tt = arguments[et] != null ? arguments[et] : {};
    et % 2
      ? ownKeys(Object(tt), !0).forEach(function (rt) {
          _defineProperty($, rt, tt[rt]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties($, Object.getOwnPropertyDescriptors(tt))
      : ownKeys(Object(tt)).forEach(function (rt) {
          Object.defineProperty($, rt, Object.getOwnPropertyDescriptor(tt, rt));
        });
  }
  return $;
}
function formatProdErrorMessage($) {
  return (
    'Minified Redux error #' +
    $ +
    '; visit https://redux.js.org/Errors?code=' +
    $ +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var $$observable = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  randomString = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  ActionTypes = {
    INIT: '@@redux/INIT' + randomString(),
    REPLACE: '@@redux/REPLACE' + randomString(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + randomString();
    }
  };
function isPlainObject$2($) {
  if (typeof $ != 'object' || $ === null) return !1;
  for (var et = $; Object.getPrototypeOf(et) !== null; ) et = Object.getPrototypeOf(et);
  return Object.getPrototypeOf($) === et;
}
function createStore$1($, et, tt) {
  var rt;
  if (
    (typeof et == 'function' && typeof tt == 'function') ||
    (typeof tt == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(formatProdErrorMessage(0));
  if ((typeof et == 'function' && typeof tt > 'u' && ((tt = et), (et = void 0)), typeof tt < 'u')) {
    if (typeof tt != 'function') throw new Error(formatProdErrorMessage(1));
    return tt(createStore$1)($, et);
  }
  if (typeof $ != 'function') throw new Error(formatProdErrorMessage(2));
  var nt = $,
    ot = et,
    it = [],
    at = it,
    st = !1;
  function lt() {
    at === it && (at = it.slice());
  }
  function ut() {
    if (st) throw new Error(formatProdErrorMessage(3));
    return ot;
  }
  function ct(gt) {
    if (typeof gt != 'function') throw new Error(formatProdErrorMessage(4));
    if (st) throw new Error(formatProdErrorMessage(5));
    var bt = !0;
    return (
      lt(),
      at.push(gt),
      function () {
        if (bt) {
          if (st) throw new Error(formatProdErrorMessage(6));
          (bt = !1), lt();
          var mt = at.indexOf(gt);
          at.splice(mt, 1), (it = null);
        }
      }
    );
  }
  function dt(gt) {
    if (!isPlainObject$2(gt)) throw new Error(formatProdErrorMessage(7));
    if (typeof gt.type > 'u') throw new Error(formatProdErrorMessage(8));
    if (st) throw new Error(formatProdErrorMessage(9));
    try {
      (st = !0), (ot = nt(ot, gt));
    } finally {
      st = !1;
    }
    for (var bt = (it = at), ht = 0; ht < bt.length; ht++) {
      var mt = bt[ht];
      mt();
    }
    return gt;
  }
  function ft(gt) {
    if (typeof gt != 'function') throw new Error(formatProdErrorMessage(10));
    (nt = gt), dt({ type: ActionTypes.REPLACE });
  }
  function pt() {
    var gt,
      bt = ct;
    return (
      (gt = {
        subscribe: function (mt) {
          if (typeof mt != 'object' || mt === null) throw new Error(formatProdErrorMessage(11));
          function yt() {
            mt.next && mt.next(ut());
          }
          yt();
          var St = bt(yt);
          return { unsubscribe: St };
        }
      }),
      (gt[$$observable] = function () {
        return this;
      }),
      gt
    );
  }
  return (
    dt({ type: ActionTypes.INIT }),
    (rt = { dispatch: dt, subscribe: ct, getState: ut, replaceReducer: ft }),
    (rt[$$observable] = pt),
    rt
  );
}
function assertReducerShape($) {
  Object.keys($).forEach(function (et) {
    var tt = $[et],
      rt = tt(void 0, { type: ActionTypes.INIT });
    if (typeof rt > 'u') throw new Error(formatProdErrorMessage(12));
    if (typeof tt(void 0, { type: ActionTypes.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(formatProdErrorMessage(13));
  });
}
function combineReducers($) {
  for (var et = Object.keys($), tt = {}, rt = 0; rt < et.length; rt++) {
    var nt = et[rt];
    typeof $[nt] == 'function' && (tt[nt] = $[nt]);
  }
  var ot = Object.keys(tt),
    it;
  try {
    assertReducerShape(tt);
  } catch (at) {
    it = at;
  }
  return function (st, lt) {
    if ((st === void 0 && (st = {}), it)) throw it;
    for (var ut = !1, ct = {}, dt = 0; dt < ot.length; dt++) {
      var ft = ot[dt],
        pt = tt[ft],
        gt = st[ft],
        bt = pt(gt, lt);
      if (typeof bt > 'u') throw (lt && lt.type, new Error(formatProdErrorMessage(14)));
      (ct[ft] = bt), (ut = ut || bt !== gt);
    }
    return (ut = ut || ot.length !== Object.keys(st).length), ut ? ct : st;
  };
}
function compose() {
  for (var $ = arguments.length, et = new Array($), tt = 0; tt < $; tt++) et[tt] = arguments[tt];
  return et.length === 0
    ? function (rt) {
        return rt;
      }
    : et.length === 1
    ? et[0]
    : et.reduce(function (rt, nt) {
        return function () {
          return rt(nt.apply(void 0, arguments));
        };
      });
}
function applyMiddleware() {
  for (var $ = arguments.length, et = new Array($), tt = 0; tt < $; tt++) et[tt] = arguments[tt];
  return function (rt) {
    return function () {
      var nt = rt.apply(void 0, arguments),
        ot = function () {
          throw new Error(formatProdErrorMessage(15));
        },
        it = {
          getState: nt.getState,
          dispatch: function () {
            return ot.apply(void 0, arguments);
          }
        },
        at = et.map(function (st) {
          return st(it);
        });
      return (
        (ot = compose.apply(void 0, at)(nt.dispatch)),
        _objectSpread2(_objectSpread2({}, nt), {}, { dispatch: ot })
      );
    };
  };
}
function createThunkMiddleware($) {
  var et = function (rt) {
    var nt = rt.dispatch,
      ot = rt.getState;
    return function (it) {
      return function (at) {
        return typeof at == 'function' ? at(nt, ot, $) : it(at);
      };
    };
  };
  return et;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
const thunkMiddleware = thunk;
var __extends =
    (globalThis && globalThis.__extends) ||
    (function () {
      var $ = function (et, tt) {
        return (
          ($ =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (rt, nt) {
                rt.__proto__ = nt;
              }) ||
            function (rt, nt) {
              for (var ot in nt) Object.prototype.hasOwnProperty.call(nt, ot) && (rt[ot] = nt[ot]);
            }),
          $(et, tt)
        );
      };
      return function (et, tt) {
        if (typeof tt != 'function' && tt !== null)
          throw new TypeError(
            'Class extends value ' + String(tt) + ' is not a constructor or null'
          );
        $(et, tt);
        function rt() {
          this.constructor = et;
        }
        et.prototype = tt === null ? Object.create(tt) : ((rt.prototype = tt.prototype), new rt());
      };
    })(),
  __generator =
    (globalThis && globalThis.__generator) ||
    function ($, et) {
      var tt = {
          label: 0,
          sent: function () {
            if (ot[0] & 1) throw ot[1];
            return ot[1];
          },
          trys: [],
          ops: []
        },
        rt,
        nt,
        ot,
        it;
      return (
        (it = { next: at(0), throw: at(1), return: at(2) }),
        typeof Symbol == 'function' &&
          (it[Symbol.iterator] = function () {
            return this;
          }),
        it
      );
      function at(lt) {
        return function (ut) {
          return st([lt, ut]);
        };
      }
      function st(lt) {
        if (rt) throw new TypeError('Generator is already executing.');
        for (; tt; )
          try {
            if (
              ((rt = 1),
              nt &&
                (ot =
                  lt[0] & 2
                    ? nt.return
                    : lt[0]
                    ? nt.throw || ((ot = nt.return) && ot.call(nt), 0)
                    : nt.next) &&
                !(ot = ot.call(nt, lt[1])).done)
            )
              return ot;
            switch (((nt = 0), ot && (lt = [lt[0] & 2, ot.value]), lt[0])) {
              case 0:
              case 1:
                ot = lt;
                break;
              case 4:
                return tt.label++, { value: lt[1], done: !1 };
              case 5:
                tt.label++, (nt = lt[1]), (lt = [0]);
                continue;
              case 7:
                (lt = tt.ops.pop()), tt.trys.pop();
                continue;
              default:
                if (
                  ((ot = tt.trys),
                  !(ot = ot.length > 0 && ot[ot.length - 1]) && (lt[0] === 6 || lt[0] === 2))
                ) {
                  tt = 0;
                  continue;
                }
                if (lt[0] === 3 && (!ot || (lt[1] > ot[0] && lt[1] < ot[3]))) {
                  tt.label = lt[1];
                  break;
                }
                if (lt[0] === 6 && tt.label < ot[1]) {
                  (tt.label = ot[1]), (ot = lt);
                  break;
                }
                if (ot && tt.label < ot[2]) {
                  (tt.label = ot[2]), tt.ops.push(lt);
                  break;
                }
                ot[2] && tt.ops.pop(), tt.trys.pop();
                continue;
            }
            lt = et.call($, tt);
          } catch (ut) {
            (lt = [6, ut]), (nt = 0);
          } finally {
            rt = ot = 0;
          }
        if (lt[0] & 5) throw lt[1];
        return { value: lt[0] ? lt[1] : void 0, done: !0 };
      }
    },
  __spreadArray =
    (globalThis && globalThis.__spreadArray) ||
    function ($, et) {
      for (var tt = 0, rt = et.length, nt = $.length; tt < rt; tt++, nt++) $[nt] = et[tt];
      return $;
    },
  __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = function ($, et, tt) {
    return et in $
      ? __defProp($, et, { enumerable: !0, configurable: !0, writable: !0, value: tt })
      : ($[et] = tt);
  },
  __spreadValues = function ($, et) {
    for (var tt in et || (et = {})) __hasOwnProp.call(et, tt) && __defNormalProp($, tt, et[tt]);
    if (__getOwnPropSymbols)
      for (var rt = 0, nt = __getOwnPropSymbols(et); rt < nt.length; rt++) {
        var tt = nt[rt];
        __propIsEnum.call(et, tt) && __defNormalProp($, tt, et[tt]);
      }
    return $;
  },
  __spreadProps = function ($, et) {
    return __defProps($, __getOwnPropDescs(et));
  },
  __async = function ($, et, tt) {
    return new Promise(function (rt, nt) {
      var ot = function (st) {
          try {
            at(tt.next(st));
          } catch (lt) {
            nt(lt);
          }
        },
        it = function (st) {
          try {
            at(tt.throw(st));
          } catch (lt) {
            nt(lt);
          }
        },
        at = function (st) {
          return st.done ? rt(st.value) : Promise.resolve(st.value).then(ot, it);
        };
      at((tt = tt.apply($, et)).next());
    });
  },
  composeWithDevTools =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? compose : compose.apply(null, arguments);
        };
function isPlainObject$1($) {
  if (typeof $ != 'object' || $ === null) return !1;
  var et = Object.getPrototypeOf($);
  if (et === null) return !0;
  for (var tt = et; Object.getPrototypeOf(tt) !== null; ) tt = Object.getPrototypeOf(tt);
  return et === tt;
}
var MiddlewareArray = (function ($) {
  __extends(et, $);
  function et() {
    for (var tt = [], rt = 0; rt < arguments.length; rt++) tt[rt] = arguments[rt];
    var nt = $.apply(this, tt) || this;
    return Object.setPrototypeOf(nt, et.prototype), nt;
  }
  return (
    Object.defineProperty(et, Symbol.species, {
      get: function () {
        return et;
      },
      enumerable: !1,
      configurable: !0
    }),
    (et.prototype.concat = function () {
      for (var tt = [], rt = 0; rt < arguments.length; rt++) tt[rt] = arguments[rt];
      return $.prototype.concat.apply(this, tt);
    }),
    (et.prototype.prepend = function () {
      for (var tt = [], rt = 0; rt < arguments.length; rt++) tt[rt] = arguments[rt];
      return tt.length === 1 && Array.isArray(tt[0])
        ? new (et.bind.apply(et, __spreadArray([void 0], tt[0].concat(this))))()
        : new (et.bind.apply(et, __spreadArray([void 0], tt.concat(this))))();
    }),
    et
  );
})(Array);
function freezeDraftable($) {
  return t$5($) ? fn($, function () {}) : $;
}
function isBoolean$1($) {
  return typeof $ == 'boolean';
}
function curryGetDefaultMiddleware() {
  return function (et) {
    return getDefaultMiddleware(et);
  };
}
function getDefaultMiddleware($) {
  $ === void 0 && ($ = {});
  var et = $.thunk,
    tt = et === void 0 ? !0 : et;
  $.immutableCheck, $.serializableCheck;
  var rt = new MiddlewareArray();
  return (
    tt &&
      (isBoolean$1(tt)
        ? rt.push(thunkMiddleware)
        : rt.push(thunkMiddleware.withExtraArgument(tt.extraArgument))),
    rt
  );
}
var IS_PRODUCTION = !0;
function configureStore($) {
  var et = curryGetDefaultMiddleware(),
    tt = $ || {},
    rt = tt.reducer,
    nt = rt === void 0 ? void 0 : rt,
    ot = tt.middleware,
    it = ot === void 0 ? et() : ot,
    at = tt.devTools,
    st = at === void 0 ? !0 : at,
    lt = tt.preloadedState,
    ut = lt === void 0 ? void 0 : lt,
    ct = tt.enhancers,
    dt = ct === void 0 ? void 0 : ct,
    ft;
  if (typeof nt == 'function') ft = nt;
  else if (isPlainObject$1(nt)) ft = combineReducers(nt);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var pt = it;
  typeof pt == 'function' && (pt = pt(et));
  var gt = applyMiddleware.apply(void 0, pt),
    bt = compose;
  st &&
    (bt = composeWithDevTools(
      __spreadValues({ trace: !IS_PRODUCTION }, typeof st == 'object' && st)
    ));
  var ht = [gt];
  Array.isArray(dt) ? (ht = __spreadArray([gt], dt)) : typeof dt == 'function' && (ht = dt(ht));
  var mt = bt.apply(void 0, ht);
  return createStore$1(ft, ut, mt);
}
function createAction($, et) {
  function tt() {
    for (var rt = [], nt = 0; nt < arguments.length; nt++) rt[nt] = arguments[nt];
    if (et) {
      var ot = et.apply(void 0, rt);
      if (!ot) throw new Error('prepareAction did not return an object');
      return __spreadValues(
        __spreadValues({ type: $, payload: ot.payload }, 'meta' in ot && { meta: ot.meta }),
        'error' in ot && { error: ot.error }
      );
    }
    return { type: $, payload: rt[0] };
  }
  return (
    (tt.toString = function () {
      return '' + $;
    }),
    (tt.type = $),
    (tt.match = function (rt) {
      return rt.type === $;
    }),
    tt
  );
}
function executeReducerBuilderCallback($) {
  var et = {},
    tt = [],
    rt,
    nt = {
      addCase: function (ot, it) {
        var at = typeof ot == 'string' ? ot : ot.type;
        if (at in et)
          throw new Error('addCase cannot be called with two reducers for the same action type');
        return (et[at] = it), nt;
      },
      addMatcher: function (ot, it) {
        return tt.push({ matcher: ot, reducer: it }), nt;
      },
      addDefaultCase: function (ot) {
        return (rt = ot), nt;
      }
    };
  return $(nt), [et, tt, rt];
}
function isStateFunction($) {
  return typeof $ == 'function';
}
function createReducer($, et, tt, rt) {
  tt === void 0 && (tt = []);
  var nt = typeof et == 'function' ? executeReducerBuilderCallback(et) : [et, tt, rt],
    ot = nt[0],
    it = nt[1],
    at = nt[2],
    st;
  if (isStateFunction($))
    st = function () {
      return freezeDraftable($());
    };
  else {
    var lt = freezeDraftable($);
    st = function () {
      return lt;
    };
  }
  function ut(ct, dt) {
    ct === void 0 && (ct = st());
    var ft = __spreadArray(
      [ot[dt.type]],
      it
        .filter(function (pt) {
          var gt = pt.matcher;
          return gt(dt);
        })
        .map(function (pt) {
          var gt = pt.reducer;
          return gt;
        })
    );
    return (
      ft.filter(function (pt) {
        return !!pt;
      }).length === 0 && (ft = [at]),
      ft.reduce(function (pt, gt) {
        if (gt)
          if (r$4(pt)) {
            var bt = pt,
              ht = gt(bt, dt);
            return ht === void 0 ? pt : ht;
          } else {
            if (t$5(pt))
              return fn(pt, function (mt) {
                return gt(mt, dt);
              });
            var ht = gt(pt, dt);
            if (ht === void 0) {
              if (pt === null) return pt;
              throw Error('A case reducer on a non-draftable value must not return undefined');
            }
            return ht;
          }
        return pt;
      }, ct)
    );
  }
  return (ut.getInitialState = st), ut;
}
function getType2($, et) {
  return $ + '/' + et;
}
function createSlice($) {
  var et = $.name;
  if (!et) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var tt = typeof $.initialState == 'function' ? $.initialState : freezeDraftable($.initialState),
    rt = $.reducers || {},
    nt = Object.keys(rt),
    ot = {},
    it = {},
    at = {};
  nt.forEach(function (ut) {
    var ct = rt[ut],
      dt = getType2(et, ut),
      ft,
      pt;
    'reducer' in ct ? ((ft = ct.reducer), (pt = ct.prepare)) : (ft = ct),
      (ot[ut] = ft),
      (it[dt] = ft),
      (at[ut] = pt ? createAction(dt, pt) : createAction(dt));
  });
  function st() {
    var ut =
        typeof $.extraReducers == 'function'
          ? executeReducerBuilderCallback($.extraReducers)
          : [$.extraReducers],
      ct = ut[0],
      dt = ct === void 0 ? {} : ct,
      ft = ut[1],
      pt = ft === void 0 ? [] : ft,
      gt = ut[2],
      bt = gt === void 0 ? void 0 : gt,
      ht = __spreadValues(__spreadValues({}, dt), it);
    return createReducer(tt, function (mt) {
      for (var yt in ht) mt.addCase(yt, ht[yt]);
      for (var St = 0, _t = pt; St < _t.length; St++) {
        var Ct = _t[St];
        mt.addMatcher(Ct.matcher, Ct.reducer);
      }
      bt && mt.addDefaultCase(bt);
    });
  }
  var lt;
  return {
    name: et,
    reducer: function (ut, ct) {
      return lt || (lt = st()), lt(ut, ct);
    },
    actions: at,
    caseReducers: ot,
    getInitialState: function () {
      return lt || (lt = st()), lt.getInitialState();
    }
  };
}
var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  nanoid = function ($) {
    $ === void 0 && ($ = 21);
    for (var et = '', tt = $; tt--; ) et += urlAlphabet[(Math.random() * 64) | 0];
    return et;
  },
  commonProperties = ['name', 'message', 'stack', 'code'],
  RejectWithValue = (function () {
    function $(et, tt) {
      (this.payload = et), (this.meta = tt);
    }
    return $;
  })(),
  FulfillWithMeta = (function () {
    function $(et, tt) {
      (this.payload = et), (this.meta = tt);
    }
    return $;
  })(),
  miniSerializeError = function ($) {
    if (typeof $ == 'object' && $ !== null) {
      for (var et = {}, tt = 0, rt = commonProperties; tt < rt.length; tt++) {
        var nt = rt[tt];
        typeof $[nt] == 'string' && (et[nt] = $[nt]);
      }
      return et;
    }
    return { message: String($) };
  };
(function () {
  function $(et, tt, rt) {
    var nt = createAction(et + '/fulfilled', function (lt, ut, ct, dt) {
        return {
          payload: lt,
          meta: __spreadProps(__spreadValues({}, dt || {}), {
            arg: ct,
            requestId: ut,
            requestStatus: 'fulfilled'
          })
        };
      }),
      ot = createAction(et + '/pending', function (lt, ut, ct) {
        return {
          payload: void 0,
          meta: __spreadProps(__spreadValues({}, ct || {}), {
            arg: ut,
            requestId: lt,
            requestStatus: 'pending'
          })
        };
      }),
      it = createAction(et + '/rejected', function (lt, ut, ct, dt, ft) {
        return {
          payload: dt,
          error: ((rt && rt.serializeError) || miniSerializeError)(lt || 'Rejected'),
          meta: __spreadProps(__spreadValues({}, ft || {}), {
            arg: ct,
            requestId: ut,
            rejectedWithValue: !!dt,
            requestStatus: 'rejected',
            aborted: (lt == null ? void 0 : lt.name) === 'AbortError',
            condition: (lt == null ? void 0 : lt.name) === 'ConditionError'
          })
        };
      }),
      at =
        typeof AbortController < 'u'
          ? AbortController
          : (function () {
              function lt() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {}
                };
              }
              return (lt.prototype.abort = function () {}), lt;
            })();
    function st(lt) {
      return function (ut, ct, dt) {
        var ft = rt != null && rt.idGenerator ? rt.idGenerator(lt) : nanoid(),
          pt = new at(),
          gt;
        function bt(mt) {
          (gt = mt), pt.abort();
        }
        var ht = (function () {
          return __async(this, null, function () {
            var mt, yt, St, _t, Ct, wt, Et;
            return __generator(this, function (Rt) {
              switch (Rt.label) {
                case 0:
                  return (
                    Rt.trys.push([0, 4, , 5]),
                    (_t =
                      (mt = rt == null ? void 0 : rt.condition) == null
                        ? void 0
                        : mt.call(rt, lt, { getState: ct, extra: dt })),
                    isThenable(_t) ? [4, _t] : [3, 2]
                  );
                case 1:
                  (_t = Rt.sent()), (Rt.label = 2);
                case 2:
                  if (_t === !1 || pt.signal.aborted)
                    throw {
                      name: 'ConditionError',
                      message: 'Aborted due to condition callback returning false.'
                    };
                  return (
                    (Ct = new Promise(function (kt, jt) {
                      return pt.signal.addEventListener('abort', function () {
                        return jt({ name: 'AbortError', message: gt || 'Aborted' });
                      });
                    })),
                    ut(
                      ot(
                        ft,
                        lt,
                        (yt = rt == null ? void 0 : rt.getPendingMeta) == null
                          ? void 0
                          : yt.call(rt, { requestId: ft, arg: lt }, { getState: ct, extra: dt })
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        Ct,
                        Promise.resolve(
                          tt(lt, {
                            dispatch: ut,
                            getState: ct,
                            extra: dt,
                            requestId: ft,
                            signal: pt.signal,
                            abort: bt,
                            rejectWithValue: function (kt, jt) {
                              return new RejectWithValue(kt, jt);
                            },
                            fulfillWithValue: function (kt, jt) {
                              return new FulfillWithMeta(kt, jt);
                            }
                          })
                        ).then(function (kt) {
                          if (kt instanceof RejectWithValue) throw kt;
                          return kt instanceof FulfillWithMeta
                            ? nt(kt.payload, ft, lt, kt.meta)
                            : nt(kt, ft, lt);
                        })
                      ])
                    ]
                  );
                case 3:
                  return (St = Rt.sent()), [3, 5];
                case 4:
                  return (
                    (wt = Rt.sent()),
                    (St =
                      wt instanceof RejectWithValue
                        ? it(null, ft, lt, wt.payload, wt.meta)
                        : it(wt, ft, lt)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (Et =
                      rt && !rt.dispatchConditionRejection && it.match(St) && St.meta.condition),
                    Et || ut(St),
                    [2, St]
                  );
              }
            });
          });
        })();
        return Object.assign(ht, {
          abort: bt,
          requestId: ft,
          arg: lt,
          unwrap: function () {
            return ht.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(st, { pending: ot, rejected: it, fulfilled: nt, typePrefix: et });
  }
  return (
    ($.withTypes = function () {
      return $;
    }),
    $
  );
})();
function unwrapResult($) {
  if ($.meta && $.meta.rejectedWithValue) throw $.payload;
  if ($.error) throw $.error;
  return $.payload;
}
function isThenable($) {
  return $ !== null && typeof $ == 'object' && typeof $.then == 'function';
}
var alm = 'listenerMiddleware';
createAction(alm + '/add');
createAction(alm + '/removeAll');
createAction(alm + '/remove');
var promise;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis);
F();
const healtSlice = createSlice({
    name: 'healt',
    initialState: { status: 'PENDING...' },
    reducers: {
      updateStatus: ($) => {
        $.status = 'OK';
      }
    }
  }),
  healtReducer = healtSlice.reducer,
  emptyUser = { id: 0, name: '' },
  userSlice = createSlice({
    name: 'healt',
    initialState: emptyUser,
    reducers: {
      createUser: ($, et) => et.payload,
      modifyUser: ($, et) => ({ ...$, ...et.payload }),
      resetUser: () => emptyUser
    }
  }),
  userReducer = userSlice.reducer,
  rootReducers = combineReducers({ healt: healtReducer, user: userReducer }),
  store = configureStore({ reducer: rootReducers });
var shimExports = {},
  shim$1 = {
    get exports() {
      return shimExports;
    },
    set exports($) {
      shimExports = $;
    }
  },
  useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e$2 = reactExports;
function h$3($, et) {
  return ($ === et && ($ !== 0 || 1 / $ === 1 / et)) || ($ !== $ && et !== et);
}
var k$2 = typeof Object.is == 'function' ? Object.is : h$3,
  l$2 = e$2.useState,
  m$2 = e$2.useEffect,
  n$3 = e$2.useLayoutEffect,
  p$3 = e$2.useDebugValue;
function q$3($, et) {
  var tt = et(),
    rt = l$2({ inst: { value: tt, getSnapshot: et } }),
    nt = rt[0].inst,
    ot = rt[1];
  return (
    n$3(
      function () {
        (nt.value = tt), (nt.getSnapshot = et), r$3(nt) && ot({ inst: nt });
      },
      [$, tt, et]
    ),
    m$2(
      function () {
        return (
          r$3(nt) && ot({ inst: nt }),
          $(function () {
            r$3(nt) && ot({ inst: nt });
          })
        );
      },
      [$]
    ),
    p$3(tt),
    tt
  );
}
function r$3($) {
  var et = $.getSnapshot;
  $ = $.value;
  try {
    var tt = et();
    return !k$2($, tt);
  } catch {
    return !0;
  }
}
function t$4($, et) {
  return et();
}
var u$2 =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? t$4
    : q$3;
useSyncExternalStoreShim_production_min.useSyncExternalStore =
  e$2.useSyncExternalStore !== void 0 ? e$2.useSyncExternalStore : u$2;
(function ($) {
  $.exports = useSyncExternalStoreShim_production_min;
})(shim$1);
var withSelectorExports = {},
  withSelector = {
    get exports() {
      return withSelectorExports;
    },
    set exports($) {
      withSelectorExports = $;
    }
  },
  withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h$2 = reactExports,
  n$2 = shimExports;
function p$2($, et) {
  return ($ === et && ($ !== 0 || 1 / $ === 1 / et)) || ($ !== $ && et !== et);
}
var q$2 = typeof Object.is == 'function' ? Object.is : p$2,
  r$2 = n$2.useSyncExternalStore,
  t$3 = h$2.useRef,
  u$1 = h$2.useEffect,
  v$2 = h$2.useMemo,
  w$1 = h$2.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function ($, et, tt, rt, nt) {
  var ot = t$3(null);
  if (ot.current === null) {
    var it = { hasValue: !1, value: null };
    ot.current = it;
  } else it = ot.current;
  ot = v$2(
    function () {
      function st(ft) {
        if (!lt) {
          if (((lt = !0), (ut = ft), (ft = rt(ft)), nt !== void 0 && it.hasValue)) {
            var pt = it.value;
            if (nt(pt, ft)) return (ct = pt);
          }
          return (ct = ft);
        }
        if (((pt = ct), q$2(ut, ft))) return pt;
        var gt = rt(ft);
        return nt !== void 0 && nt(pt, gt) ? pt : ((ut = ft), (ct = gt));
      }
      var lt = !1,
        ut,
        ct,
        dt = tt === void 0 ? null : tt;
      return [
        function () {
          return st(et());
        },
        dt === null
          ? void 0
          : function () {
              return st(dt());
            }
      ];
    },
    [et, tt, rt, nt]
  );
  var at = r$2($, ot[0], ot[1]);
  return (
    u$1(
      function () {
        (it.hasValue = !0), (it.value = at);
      },
      [at]
    ),
    w$1(at),
    at
  );
};
(function ($) {
  $.exports = withSelector_production_min;
})(withSelector);
function defaultNoopBatch($) {
  $();
}
let batch = defaultNoopBatch;
const setBatch = ($) => (batch = $),
  getBatch = () => batch,
  ReactReduxContext = reactExports.createContext(null);
function _extends$3() {
  return (
    (_extends$3 = Object.assign
      ? Object.assign.bind()
      : function ($) {
          for (var et = 1; et < arguments.length; et++) {
            var tt = arguments[et];
            for (var rt in tt) Object.prototype.hasOwnProperty.call(tt, rt) && ($[rt] = tt[rt]);
          }
          return $;
        }),
    _extends$3.apply(this, arguments)
  );
}
var reactIsExports$1 = {},
  reactIs$2 = {
    get exports() {
      return reactIsExports$1;
    },
    set exports($) {
      reactIsExports$1 = $;
    }
  },
  reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b$1 = typeof Symbol == 'function' && Symbol.for,
  c$1 = b$1 ? Symbol.for('react.element') : 60103,
  d$1 = b$1 ? Symbol.for('react.portal') : 60106,
  e$1 = b$1 ? Symbol.for('react.fragment') : 60107,
  f$1 = b$1 ? Symbol.for('react.strict_mode') : 60108,
  g$1 = b$1 ? Symbol.for('react.profiler') : 60114,
  h$1 = b$1 ? Symbol.for('react.provider') : 60109,
  k$1 = b$1 ? Symbol.for('react.context') : 60110,
  l$1 = b$1 ? Symbol.for('react.async_mode') : 60111,
  m$1 = b$1 ? Symbol.for('react.concurrent_mode') : 60111,
  n$1 = b$1 ? Symbol.for('react.forward_ref') : 60112,
  p$1 = b$1 ? Symbol.for('react.suspense') : 60113,
  q$1 = b$1 ? Symbol.for('react.suspense_list') : 60120,
  r$1 = b$1 ? Symbol.for('react.memo') : 60115,
  t$2 = b$1 ? Symbol.for('react.lazy') : 60116,
  v$1 = b$1 ? Symbol.for('react.block') : 60121,
  w = b$1 ? Symbol.for('react.fundamental') : 60117,
  x = b$1 ? Symbol.for('react.responder') : 60118,
  y = b$1 ? Symbol.for('react.scope') : 60119;
function z($) {
  if (typeof $ == 'object' && $ !== null) {
    var et = $.$$typeof;
    switch (et) {
      case c$1:
        switch ((($ = $.type), $)) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return $;
          default:
            switch ((($ = $ && $.$$typeof), $)) {
              case k$1:
              case n$1:
              case t$2:
              case r$1:
              case h$1:
                return $;
              default:
                return et;
            }
        }
      case d$1:
        return et;
    }
  }
}
function A($) {
  return z($) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$2;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function ($) {
  return A($) || z($) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A;
reactIs_production_min$1.isContextConsumer = function ($) {
  return z($) === k$1;
};
reactIs_production_min$1.isContextProvider = function ($) {
  return z($) === h$1;
};
reactIs_production_min$1.isElement = function ($) {
  return typeof $ == 'object' && $ !== null && $.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function ($) {
  return z($) === n$1;
};
reactIs_production_min$1.isFragment = function ($) {
  return z($) === e$1;
};
reactIs_production_min$1.isLazy = function ($) {
  return z($) === t$2;
};
reactIs_production_min$1.isMemo = function ($) {
  return z($) === r$1;
};
reactIs_production_min$1.isPortal = function ($) {
  return z($) === d$1;
};
reactIs_production_min$1.isProfiler = function ($) {
  return z($) === g$1;
};
reactIs_production_min$1.isStrictMode = function ($) {
  return z($) === f$1;
};
reactIs_production_min$1.isSuspense = function ($) {
  return z($) === p$1;
};
reactIs_production_min$1.isValidElementType = function ($) {
  return (
    typeof $ == 'string' ||
    typeof $ == 'function' ||
    $ === e$1 ||
    $ === m$1 ||
    $ === g$1 ||
    $ === f$1 ||
    $ === p$1 ||
    $ === q$1 ||
    (typeof $ == 'object' &&
      $ !== null &&
      ($.$$typeof === t$2 ||
        $.$$typeof === r$1 ||
        $.$$typeof === h$1 ||
        $.$$typeof === k$1 ||
        $.$$typeof === n$1 ||
        $.$$typeof === w ||
        $.$$typeof === x ||
        $.$$typeof === y ||
        $.$$typeof === v$1))
  );
};
reactIs_production_min$1.typeOf = z;
(function ($) {
  $.exports = reactIs_production_min$1;
})(reactIs$2);
var reactIs$1 = reactIsExports$1,
  FORWARD_REF_STATICS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  },
  MEMO_STATICS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
var reactIsExports = {},
  reactIs = {
    get exports() {
      return reactIsExports;
    },
    set exports($) {
      reactIsExports = $;
    }
  },
  reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = Symbol.for('react.element'),
  c = Symbol.for('react.portal'),
  d = Symbol.for('react.fragment'),
  e = Symbol.for('react.strict_mode'),
  f = Symbol.for('react.profiler'),
  g = Symbol.for('react.provider'),
  h = Symbol.for('react.context'),
  k = Symbol.for('react.server_context'),
  l = Symbol.for('react.forward_ref'),
  m = Symbol.for('react.suspense'),
  n = Symbol.for('react.suspense_list'),
  p = Symbol.for('react.memo'),
  q = Symbol.for('react.lazy'),
  t$1 = Symbol.for('react.offscreen'),
  u;
u = Symbol.for('react.module.reference');
function v($) {
  if (typeof $ == 'object' && $ !== null) {
    var et = $.$$typeof;
    switch (et) {
      case b:
        switch ((($ = $.type), $)) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return $;
          default:
            switch ((($ = $ && $.$$typeof), $)) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return $;
              default:
                return et;
            }
        }
      case c:
        return et;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function () {
  return !1;
};
reactIs_production_min.isConcurrentMode = function () {
  return !1;
};
reactIs_production_min.isContextConsumer = function ($) {
  return v($) === h;
};
reactIs_production_min.isContextProvider = function ($) {
  return v($) === g;
};
reactIs_production_min.isElement = function ($) {
  return typeof $ == 'object' && $ !== null && $.$$typeof === b;
};
reactIs_production_min.isForwardRef = function ($) {
  return v($) === l;
};
reactIs_production_min.isFragment = function ($) {
  return v($) === d;
};
reactIs_production_min.isLazy = function ($) {
  return v($) === q;
};
reactIs_production_min.isMemo = function ($) {
  return v($) === p;
};
reactIs_production_min.isPortal = function ($) {
  return v($) === c;
};
reactIs_production_min.isProfiler = function ($) {
  return v($) === f;
};
reactIs_production_min.isStrictMode = function ($) {
  return v($) === e;
};
reactIs_production_min.isSuspense = function ($) {
  return v($) === m;
};
reactIs_production_min.isSuspenseList = function ($) {
  return v($) === n;
};
reactIs_production_min.isValidElementType = function ($) {
  return (
    typeof $ == 'string' ||
    typeof $ == 'function' ||
    $ === d ||
    $ === f ||
    $ === e ||
    $ === m ||
    $ === n ||
    $ === t$1 ||
    (typeof $ == 'object' &&
      $ !== null &&
      ($.$$typeof === q ||
        $.$$typeof === p ||
        $.$$typeof === g ||
        $.$$typeof === h ||
        $.$$typeof === l ||
        $.$$typeof === u ||
        $.getModuleId !== void 0))
  );
};
reactIs_production_min.typeOf = v;
(function ($) {
  $.exports = reactIs_production_min;
})(reactIs);
function createListenerCollection() {
  const $ = getBatch();
  let et = null,
    tt = null;
  return {
    clear() {
      (et = null), (tt = null);
    },
    notify() {
      $(() => {
        let rt = et;
        for (; rt; ) rt.callback(), (rt = rt.next);
      });
    },
    get() {
      let rt = [],
        nt = et;
      for (; nt; ) rt.push(nt), (nt = nt.next);
      return rt;
    },
    subscribe(rt) {
      let nt = !0,
        ot = (tt = { callback: rt, next: null, prev: tt });
      return (
        ot.prev ? (ot.prev.next = ot) : (et = ot),
        function () {
          !nt ||
            et === null ||
            ((nt = !1),
            ot.next ? (ot.next.prev = ot.prev) : (tt = ot.prev),
            ot.prev ? (ot.prev.next = ot.next) : (et = ot.next));
        }
      );
    }
  };
}
const nullListeners = { notify() {}, get: () => [] };
function createSubscription($, et) {
  let tt,
    rt = nullListeners;
  function nt(ct) {
    return st(), rt.subscribe(ct);
  }
  function ot() {
    rt.notify();
  }
  function it() {
    ut.onStateChange && ut.onStateChange();
  }
  function at() {
    return Boolean(tt);
  }
  function st() {
    tt || ((tt = et ? et.addNestedSub(it) : $.subscribe(it)), (rt = createListenerCollection()));
  }
  function lt() {
    tt && (tt(), (tt = void 0), rt.clear(), (rt = nullListeners));
  }
  const ut = {
    addNestedSub: nt,
    notifyNestedSubs: ot,
    handleChangeWrapper: it,
    isSubscribed: at,
    trySubscribe: st,
    tryUnsubscribe: lt,
    getListeners: () => rt
  };
  return ut;
}
const canUseDOM$1 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  useIsomorphicLayoutEffect$1 = canUseDOM$1 ? reactExports.useLayoutEffect : reactExports.useEffect;
function Provider({ store: $, context: et, children: tt, serverState: rt }) {
  const nt = reactExports.useMemo(() => {
      const at = createSubscription($);
      return { store: $, subscription: at, getServerState: rt ? () => rt : void 0 };
    }, [$, rt]),
    ot = reactExports.useMemo(() => $.getState(), [$]);
  useIsomorphicLayoutEffect$1(() => {
    const { subscription: at } = nt;
    return (
      (at.onStateChange = at.notifyNestedSubs),
      at.trySubscribe(),
      ot !== $.getState() && at.notifyNestedSubs(),
      () => {
        at.tryUnsubscribe(), (at.onStateChange = void 0);
      }
    );
  }, [nt, ot]);
  const it = et || ReactReduxContext;
  return React.createElement(it.Provider, { value: nt }, tt);
}
setBatch(reactDomExports.unstable_batchedUpdates);
function sheetForTag($) {
  if ($.sheet) return $.sheet;
  for (var et = 0; et < document.styleSheets.length; et++)
    if (document.styleSheets[et].ownerNode === $) return document.styleSheets[et];
}
function createStyleElement($) {
  var et = document.createElement('style');
  return (
    et.setAttribute('data-emotion', $.key),
    $.nonce !== void 0 && et.setAttribute('nonce', $.nonce),
    et.appendChild(document.createTextNode('')),
    et.setAttribute('data-s', ''),
    et
  );
}
var StyleSheet = (function () {
    function $(tt) {
      var rt = this;
      (this._insertTag = function (nt) {
        var ot;
        rt.tags.length === 0
          ? rt.insertionPoint
            ? (ot = rt.insertionPoint.nextSibling)
            : rt.prepend
            ? (ot = rt.container.firstChild)
            : (ot = rt.before)
          : (ot = rt.tags[rt.tags.length - 1].nextSibling),
          rt.container.insertBefore(nt, ot),
          rt.tags.push(nt);
      }),
        (this.isSpeedy = tt.speedy === void 0 ? !0 : tt.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = tt.nonce),
        (this.key = tt.key),
        (this.container = tt.container),
        (this.prepend = tt.prepend),
        (this.insertionPoint = tt.insertionPoint),
        (this.before = null);
    }
    var et = $.prototype;
    return (
      (et.hydrate = function (rt) {
        rt.forEach(this._insertTag);
      }),
      (et.insert = function (rt) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
        var nt = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var ot = sheetForTag(nt);
          try {
            ot.insertRule(rt, ot.cssRules.length);
          } catch {}
        } else nt.appendChild(document.createTextNode(rt));
        this.ctr++;
      }),
      (et.flush = function () {
        this.tags.forEach(function (rt) {
          return rt.parentNode && rt.parentNode.removeChild(rt);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      $
    );
  })(),
  MS = '-ms-',
  MOZ = '-moz-',
  WEBKIT = '-webkit-',
  COMMENT = 'comm',
  RULESET = 'rule',
  DECLARATION = 'decl',
  IMPORT = '@import',
  KEYFRAMES = '@keyframes',
  abs = Math.abs,
  from = String.fromCharCode,
  assign = Object.assign;
function hash$1($, et) {
  return charat($, 0) ^ 45
    ? (((((((et << 2) ^ charat($, 0)) << 2) ^ charat($, 1)) << 2) ^ charat($, 2)) << 2) ^
        charat($, 3)
    : 0;
}
function trim$1($) {
  return $.trim();
}
function match($, et) {
  return ($ = et.exec($)) ? $[0] : $;
}
function replace($, et, tt) {
  return $.replace(et, tt);
}
function indexof($, et) {
  return $.indexOf(et);
}
function charat($, et) {
  return $.charCodeAt(et) | 0;
}
function substr($, et, tt) {
  return $.slice(et, tt);
}
function strlen($) {
  return $.length;
}
function sizeof($) {
  return $.length;
}
function append($, et) {
  return et.push($), $;
}
function combine($, et) {
  return $.map(et).join('');
}
var line = 1,
  column = 1,
  length = 0,
  position$1 = 0,
  character = 0,
  characters = '';
function node($, et, tt, rt, nt, ot, it) {
  return {
    value: $,
    root: et,
    parent: tt,
    type: rt,
    props: nt,
    children: ot,
    line,
    column,
    length: it,
    return: ''
  };
}
function copy($, et) {
  return assign(node('', null, null, '', null, null, 0), $, { length: -$.length }, et);
}
function char() {
  return character;
}
function prev() {
  return (
    (character = position$1 > 0 ? charat(characters, --position$1) : 0),
    column--,
    character === 10 && ((column = 1), line--),
    character
  );
}
function next() {
  return (
    (character = position$1 < length ? charat(characters, position$1++) : 0),
    column++,
    character === 10 && ((column = 1), line++),
    character
  );
}
function peek() {
  return charat(characters, position$1);
}
function caret() {
  return position$1;
}
function slice($, et) {
  return substr(characters, $, et);
}
function token($) {
  switch ($) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc($) {
  return (line = column = 1), (length = strlen((characters = $))), (position$1 = 0), [];
}
function dealloc($) {
  return (characters = ''), $;
}
function delimit($) {
  return trim$1(slice(position$1 - 1, delimiter($ === 91 ? $ + 2 : $ === 40 ? $ + 1 : $)));
}
function whitespace($) {
  for (; (character = peek()) && character < 33; ) next();
  return token($) > 2 || token(character) > 3 ? '' : ' ';
}
function escaping($, et) {
  for (
    ;
    --et &&
    next() &&
    !(
      character < 48 ||
      character > 102 ||
      (character > 57 && character < 65) ||
      (character > 70 && character < 97)
    );

  );
  return slice($, caret() + (et < 6 && peek() == 32 && next() == 32));
}
function delimiter($) {
  for (; next(); )
    switch (character) {
      case $:
        return position$1;
      case 34:
      case 39:
        $ !== 34 && $ !== 39 && delimiter(character);
        break;
      case 40:
        $ === 41 && delimiter($);
        break;
      case 92:
        next();
        break;
    }
  return position$1;
}
function commenter($, et) {
  for (; next() && $ + character !== 47 + 10; )
    if ($ + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(et, position$1 - 1) + '*' + from($ === 47 ? $ : next());
}
function identifier($) {
  for (; !token(peek()); ) next();
  return slice($, position$1);
}
function compile($) {
  return dealloc(parse$1('', null, null, null, [''], ($ = alloc($)), 0, [0], $));
}
function parse$1($, et, tt, rt, nt, ot, it, at, st) {
  for (
    var lt = 0,
      ut = 0,
      ct = it,
      dt = 0,
      ft = 0,
      pt = 0,
      gt = 1,
      bt = 1,
      ht = 1,
      mt = 0,
      yt = '',
      St = nt,
      _t = ot,
      Ct = rt,
      wt = yt;
    bt;

  )
    switch (((pt = mt), (mt = next()))) {
      case 40:
        if (pt != 108 && charat(wt, ct - 1) == 58) {
          indexof((wt += replace(delimit(mt), '&', '&\f')), '&\f') != -1 && (ht = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        wt += delimit(mt);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        wt += whitespace(pt);
        break;
      case 92:
        wt += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), et, tt), st);
            break;
          default:
            wt += '/';
        }
        break;
      case 123 * gt:
        at[lt++] = strlen(wt) * ht;
      case 125 * gt:
      case 59:
      case 0:
        switch (mt) {
          case 0:
          case 125:
            bt = 0;
          case 59 + ut:
            ft > 0 &&
              strlen(wt) - ct &&
              append(
                ft > 32
                  ? declaration(wt + ';', rt, tt, ct - 1)
                  : declaration(replace(wt, ' ', '') + ';', rt, tt, ct - 2),
                st
              );
            break;
          case 59:
            wt += ';';
          default:
            if (
              (append((Ct = ruleset(wt, et, tt, lt, ut, nt, at, yt, (St = []), (_t = []), ct)), ot),
              mt === 123)
            )
              if (ut === 0) parse$1(wt, et, Ct, Ct, St, ot, ct, at, _t);
              else
                switch (dt === 99 && charat(wt, 3) === 110 ? 100 : dt) {
                  case 100:
                  case 109:
                  case 115:
                    parse$1(
                      $,
                      Ct,
                      Ct,
                      rt && append(ruleset($, Ct, Ct, 0, 0, nt, at, yt, nt, (St = []), ct), _t),
                      nt,
                      _t,
                      ct,
                      at,
                      rt ? St : _t
                    );
                    break;
                  default:
                    parse$1(wt, Ct, Ct, Ct, [''], _t, 0, at, _t);
                }
        }
        (lt = ut = ft = 0), (gt = ht = 1), (yt = wt = ''), (ct = it);
        break;
      case 58:
        (ct = 1 + strlen(wt)), (ft = pt);
      default:
        if (gt < 1) {
          if (mt == 123) --gt;
          else if (mt == 125 && gt++ == 0 && prev() == 125) continue;
        }
        switch (((wt += from(mt)), mt * gt)) {
          case 38:
            ht = ut > 0 ? 1 : ((wt += '\f'), -1);
            break;
          case 44:
            (at[lt++] = (strlen(wt) - 1) * ht), (ht = 1);
            break;
          case 64:
            peek() === 45 && (wt += delimit(next())),
              (dt = peek()),
              (ut = ct = strlen((yt = wt += identifier(caret())))),
              mt++;
            break;
          case 45:
            pt === 45 && strlen(wt) == 2 && (gt = 0);
        }
    }
  return ot;
}
function ruleset($, et, tt, rt, nt, ot, it, at, st, lt, ut) {
  for (
    var ct = nt - 1, dt = nt === 0 ? ot : [''], ft = sizeof(dt), pt = 0, gt = 0, bt = 0;
    pt < rt;
    ++pt
  )
    for (var ht = 0, mt = substr($, ct + 1, (ct = abs((gt = it[pt])))), yt = $; ht < ft; ++ht)
      (yt = trim$1(gt > 0 ? dt[ht] + ' ' + mt : replace(mt, /&\f/g, dt[ht]))) && (st[bt++] = yt);
  return node($, et, tt, nt === 0 ? RULESET : at, st, lt, ut);
}
function comment($, et, tt) {
  return node($, et, tt, COMMENT, from(char()), substr($, 2, -2), 0);
}
function declaration($, et, tt, rt) {
  return node($, et, tt, DECLARATION, substr($, 0, rt), substr($, rt + 1, -1), rt);
}
function serialize($, et) {
  for (var tt = '', rt = sizeof($), nt = 0; nt < rt; nt++) tt += et($[nt], nt, $, et) || '';
  return tt;
}
function stringify($, et, tt, rt) {
  switch ($.type) {
    case IMPORT:
    case DECLARATION:
      return ($.return = $.return || $.value);
    case COMMENT:
      return '';
    case KEYFRAMES:
      return ($.return = $.value + '{' + serialize($.children, rt) + '}');
    case RULESET:
      $.value = $.props.join(',');
  }
  return strlen((tt = serialize($.children, rt))) ? ($.return = $.value + '{' + tt + '}') : '';
}
function middleware($) {
  var et = sizeof($);
  return function (tt, rt, nt, ot) {
    for (var it = '', at = 0; at < et; at++) it += $[at](tt, rt, nt, ot) || '';
    return it;
  };
}
function rulesheet($) {
  return function (et) {
    et.root || ((et = et.return) && $(et));
  };
}
var weakMemoize = function (et) {
  var tt = new WeakMap();
  return function (rt) {
    if (tt.has(rt)) return tt.get(rt);
    var nt = et(rt);
    return tt.set(rt, nt), nt;
  };
};
function memoize$2($) {
  var et = Object.create(null);
  return function (tt) {
    return et[tt] === void 0 && (et[tt] = $(tt)), et[tt];
  };
}
var identifierWithPointTracking = function (et, tt, rt) {
    for (
      var nt = 0, ot = 0;
      (nt = ot), (ot = peek()), nt === 38 && ot === 12 && (tt[rt] = 1), !token(ot);

    )
      next();
    return slice(et, position$1);
  },
  toRules = function (et, tt) {
    var rt = -1,
      nt = 44;
    do
      switch (token(nt)) {
        case 0:
          nt === 38 && peek() === 12 && (tt[rt] = 1),
            (et[rt] += identifierWithPointTracking(position$1 - 1, tt, rt));
          break;
        case 2:
          et[rt] += delimit(nt);
          break;
        case 4:
          if (nt === 44) {
            (et[++rt] = peek() === 58 ? '&\f' : ''), (tt[rt] = et[rt].length);
            break;
          }
        default:
          et[rt] += from(nt);
      }
    while ((nt = next()));
    return et;
  },
  getRules = function (et, tt) {
    return dealloc(toRules(alloc(et), tt));
  },
  fixedElements = new WeakMap(),
  compat = function (et) {
    if (!(et.type !== 'rule' || !et.parent || et.length < 1)) {
      for (
        var tt = et.value, rt = et.parent, nt = et.column === rt.column && et.line === rt.line;
        rt.type !== 'rule';

      )
        if (((rt = rt.parent), !rt)) return;
      if (!(et.props.length === 1 && tt.charCodeAt(0) !== 58 && !fixedElements.get(rt)) && !nt) {
        fixedElements.set(et, !0);
        for (
          var ot = [], it = getRules(tt, ot), at = rt.props, st = 0, lt = 0;
          st < it.length;
          st++
        )
          for (var ut = 0; ut < at.length; ut++, lt++)
            et.props[lt] = ot[st] ? it[st].replace(/&\f/g, at[ut]) : at[ut] + ' ' + it[st];
      }
    }
  },
  removeLabel = function (et) {
    if (et.type === 'decl') {
      var tt = et.value;
      tt.charCodeAt(0) === 108 && tt.charCodeAt(2) === 98 && ((et.return = ''), (et.value = ''));
    }
  };
function prefix($, et) {
  switch (hash$1($, et)) {
    case 5103:
      return WEBKIT + 'print-' + $ + $;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + $ + $;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + $ + MOZ + $ + MS + $ + $;
    case 6828:
    case 4268:
      return WEBKIT + $ + MS + $ + $;
    case 6165:
      return WEBKIT + $ + MS + 'flex-' + $ + $;
    case 5187:
      return WEBKIT + $ + replace($, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + $;
    case 5443:
      return WEBKIT + $ + MS + 'flex-item-' + replace($, /flex-|-self/, '') + $;
    case 4675:
      return WEBKIT + $ + MS + 'flex-line-pack' + replace($, /align-content|flex-|-self/, '') + $;
    case 5548:
      return WEBKIT + $ + MS + replace($, 'shrink', 'negative') + $;
    case 5292:
      return WEBKIT + $ + MS + replace($, 'basis', 'preferred-size') + $;
    case 6060:
      return (
        WEBKIT +
        'box-' +
        replace($, '-grow', '') +
        WEBKIT +
        $ +
        MS +
        replace($, 'grow', 'positive') +
        $
      );
    case 4554:
      return WEBKIT + replace($, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + $;
    case 6187:
      return (
        replace(
          replace(replace($, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'),
          $,
          ''
        ) + $
      );
    case 5495:
    case 3959:
      return replace($, /(image-set\([^]*)/, WEBKIT + '$1$`$1');
    case 4968:
      return (
        replace(
          replace($, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        WEBKIT +
        $ +
        $
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace($, /(.+)-inline(.+)/, WEBKIT + '$1$2') + $;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen($) - 1 - et > 6)
        switch (charat($, et + 1)) {
          case 109:
            if (charat($, et + 4) !== 45) break;
          case 102:
            return (
              replace(
                $,
                /(.+:)(.+)-([^]+)/,
                '$1' + WEBKIT + '$2-$3$1' + MOZ + (charat($, et + 3) == 108 ? '$3' : '$2-$3')
              ) + $
            );
          case 115:
            return ~indexof($, 'stretch')
              ? prefix(replace($, 'stretch', 'fill-available'), et) + $
              : $;
        }
      break;
    case 4949:
      if (charat($, et + 1) !== 115) break;
    case 6444:
      switch (charat($, strlen($) - 3 - (~indexof($, '!important') && 10))) {
        case 107:
          return replace($, ':', ':' + WEBKIT) + $;
        case 101:
          return (
            replace(
              $,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                WEBKIT +
                (charat($, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                WEBKIT +
                '$2$3$1' +
                MS +
                '$2box$3'
            ) + $
          );
      }
      break;
    case 5936:
      switch (charat($, et + 11)) {
        case 114:
          return WEBKIT + $ + MS + replace($, /[svh]\w+-[tblr]{2}/, 'tb') + $;
        case 108:
          return WEBKIT + $ + MS + replace($, /[svh]\w+-[tblr]{2}/, 'tb-rl') + $;
        case 45:
          return WEBKIT + $ + MS + replace($, /[svh]\w+-[tblr]{2}/, 'lr') + $;
      }
      return WEBKIT + $ + MS + $ + $;
  }
  return $;
}
var prefixer = function (et, tt, rt, nt) {
    if (et.length > -1 && !et.return)
      switch (et.type) {
        case DECLARATION:
          et.return = prefix(et.value, et.length);
          break;
        case KEYFRAMES:
          return serialize([copy(et, { value: replace(et.value, '@', '@' + WEBKIT) })], nt);
        case RULESET:
          if (et.length)
            return combine(et.props, function (ot) {
              switch (match(ot, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return serialize(
                    [copy(et, { props: [replace(ot, /:(read-\w+)/, ':' + MOZ + '$1')] })],
                    nt
                  );
                case '::placeholder':
                  return serialize(
                    [
                      copy(et, { props: [replace(ot, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')] }),
                      copy(et, { props: [replace(ot, /:(plac\w+)/, ':' + MOZ + '$1')] }),
                      copy(et, { props: [replace(ot, /:(plac\w+)/, MS + 'input-$1')] })
                    ],
                    nt
                  );
              }
              return '';
            });
      }
  },
  defaultStylisPlugins = [prefixer],
  createCache = function (et) {
    var tt = et.key;
    if (tt === 'css') {
      var rt = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(rt, function (gt) {
        var bt = gt.getAttribute('data-emotion');
        bt.indexOf(' ') !== -1 && (document.head.appendChild(gt), gt.setAttribute('data-s', ''));
      });
    }
    var nt = et.stylisPlugins || defaultStylisPlugins,
      ot = {},
      it,
      at = [];
    (it = et.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + tt + ' "]'),
        function (gt) {
          for (var bt = gt.getAttribute('data-emotion').split(' '), ht = 1; ht < bt.length; ht++)
            ot[bt[ht]] = !0;
          at.push(gt);
        }
      );
    var st,
      lt = [compat, removeLabel];
    {
      var ut,
        ct = [
          stringify,
          rulesheet(function (gt) {
            ut.insert(gt);
          })
        ],
        dt = middleware(lt.concat(nt, ct)),
        ft = function (bt) {
          return serialize(compile(bt), dt);
        };
      st = function (bt, ht, mt, yt) {
        (ut = mt),
          ft(bt ? bt + '{' + ht.styles + '}' : ht.styles),
          yt && (pt.inserted[ht.name] = !0);
      };
    }
    var pt = {
      key: tt,
      sheet: new StyleSheet({
        key: tt,
        container: it,
        nonce: et.nonce,
        speedy: et.speedy,
        prepend: et.prepend,
        insertionPoint: et.insertionPoint
      }),
      nonce: et.nonce,
      inserted: ot,
      registered: {},
      insert: st
    };
    return pt.sheet.hydrate(at), pt;
  },
  isBrowser$1 = !0;
function getRegisteredStyles($, et, tt) {
  var rt = '';
  return (
    tt.split(' ').forEach(function (nt) {
      $[nt] !== void 0 ? et.push($[nt] + ';') : (rt += nt + ' ');
    }),
    rt
  );
}
var registerStyles = function (et, tt, rt) {
    var nt = et.key + '-' + tt.name;
    (rt === !1 || isBrowser$1 === !1) &&
      et.registered[nt] === void 0 &&
      (et.registered[nt] = tt.styles);
  },
  insertStyles = function (et, tt, rt) {
    registerStyles(et, tt, rt);
    var nt = et.key + '-' + tt.name;
    if (et.inserted[tt.name] === void 0) {
      var ot = tt;
      do et.insert(tt === ot ? '.' + nt : '', ot, et.sheet, !0), (ot = ot.next);
      while (ot !== void 0);
    }
  };
function murmur2($) {
  for (var et = 0, tt, rt = 0, nt = $.length; nt >= 4; ++rt, nt -= 4)
    (tt =
      ($.charCodeAt(rt) & 255) |
      (($.charCodeAt(++rt) & 255) << 8) |
      (($.charCodeAt(++rt) & 255) << 16) |
      (($.charCodeAt(++rt) & 255) << 24)),
      (tt = (tt & 65535) * 1540483477 + (((tt >>> 16) * 59797) << 16)),
      (tt ^= tt >>> 24),
      (et =
        ((tt & 65535) * 1540483477 + (((tt >>> 16) * 59797) << 16)) ^
        ((et & 65535) * 1540483477 + (((et >>> 16) * 59797) << 16)));
  switch (nt) {
    case 3:
      et ^= ($.charCodeAt(rt + 2) & 255) << 16;
    case 2:
      et ^= ($.charCodeAt(rt + 1) & 255) << 8;
    case 1:
      (et ^= $.charCodeAt(rt) & 255),
        (et = (et & 65535) * 1540483477 + (((et >>> 16) * 59797) << 16));
  }
  return (
    (et ^= et >>> 13),
    (et = (et & 65535) * 1540483477 + (((et >>> 16) * 59797) << 16)),
    ((et ^ (et >>> 15)) >>> 0).toString(36)
  );
}
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  hyphenateRegex = /[A-Z]|^ms/g,
  animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  isCustomProperty = function (et) {
    return et.charCodeAt(1) === 45;
  },
  isProcessableValue = function (et) {
    return et != null && typeof et != 'boolean';
  },
  processStyleName = memoize$2(function ($) {
    return isCustomProperty($) ? $ : $.replace(hyphenateRegex, '-$&').toLowerCase();
  }),
  processStyleValue = function (et, tt) {
    switch (et) {
      case 'animation':
      case 'animationName':
        if (typeof tt == 'string')
          return tt.replace(animationRegex, function (rt, nt, ot) {
            return (cursor = { name: nt, styles: ot, next: cursor }), nt;
          });
    }
    return unitlessKeys[et] !== 1 && !isCustomProperty(et) && typeof tt == 'number' && tt !== 0
      ? tt + 'px'
      : tt;
  },
  noComponentSelectorMessage =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function handleInterpolation($, et, tt) {
  if (tt == null) return '';
  if (tt.__emotion_styles !== void 0) return tt;
  switch (typeof tt) {
    case 'boolean':
      return '';
    case 'object': {
      if (tt.anim === 1)
        return (cursor = { name: tt.name, styles: tt.styles, next: cursor }), tt.name;
      if (tt.styles !== void 0) {
        var rt = tt.next;
        if (rt !== void 0)
          for (; rt !== void 0; )
            (cursor = { name: rt.name, styles: rt.styles, next: cursor }), (rt = rt.next);
        var nt = tt.styles + ';';
        return nt;
      }
      return createStringFromObject($, et, tt);
    }
    case 'function': {
      if ($ !== void 0) {
        var ot = cursor,
          it = tt($);
        return (cursor = ot), handleInterpolation($, et, it);
      }
      break;
    }
  }
  if (et == null) return tt;
  var at = et[tt];
  return at !== void 0 ? at : tt;
}
function createStringFromObject($, et, tt) {
  var rt = '';
  if (Array.isArray(tt))
    for (var nt = 0; nt < tt.length; nt++) rt += handleInterpolation($, et, tt[nt]) + ';';
  else
    for (var ot in tt) {
      var it = tt[ot];
      if (typeof it != 'object')
        et != null && et[it] !== void 0
          ? (rt += ot + '{' + et[it] + '}')
          : isProcessableValue(it) &&
            (rt += processStyleName(ot) + ':' + processStyleValue(ot, it) + ';');
      else if (
        Array.isArray(it) &&
        typeof it[0] == 'string' &&
        (et == null || et[it[0]] === void 0)
      )
        for (var at = 0; at < it.length; at++)
          isProcessableValue(it[at]) &&
            (rt += processStyleName(ot) + ':' + processStyleValue(ot, it[at]) + ';');
      else {
        var st = handleInterpolation($, et, it);
        switch (ot) {
          case 'animation':
          case 'animationName': {
            rt += processStyleName(ot) + ':' + st + ';';
            break;
          }
          default:
            rt += ot + '{' + st + '}';
        }
      }
    }
  return rt;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  cursor,
  serializeStyles = function (et, tt, rt) {
    if (et.length === 1 && typeof et[0] == 'object' && et[0] !== null && et[0].styles !== void 0)
      return et[0];
    var nt = !0,
      ot = '';
    cursor = void 0;
    var it = et[0];
    it == null || it.raw === void 0
      ? ((nt = !1), (ot += handleInterpolation(rt, tt, it)))
      : (ot += it[0]);
    for (var at = 1; at < et.length; at++)
      (ot += handleInterpolation(rt, tt, et[at])), nt && (ot += it[at]);
    labelPattern.lastIndex = 0;
    for (var st = '', lt; (lt = labelPattern.exec(ot)) !== null; ) st += '-' + lt[1];
    var ut = murmur2(ot) + st;
    return { name: ut, styles: ot, next: cursor };
  },
  syncFallback = function (et) {
    return et();
  },
  useInsertionEffect = React$1['useInsertionEffect'] ? React$1['useInsertionEffect'] : !1,
  useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback,
  useInsertionEffectWithLayoutFallback = useInsertionEffect || reactExports.useLayoutEffect,
  EmotionCacheContext = reactExports.createContext(
    typeof HTMLElement < 'u' ? createCache({ key: 'css' }) : null
  );
EmotionCacheContext.Provider;
var withEmotionCache = function (et) {
    return reactExports.forwardRef(function (tt, rt) {
      var nt = reactExports.useContext(EmotionCacheContext);
      return et(tt, nt, rt);
    });
  },
  ThemeContext = reactExports.createContext({}),
  getTheme$1 = function (et, tt) {
    if (typeof tt == 'function') {
      var rt = tt(et);
      return rt;
    }
    return _extends$3({}, et, tt);
  },
  createCacheWithTheme = weakMemoize(function ($) {
    return weakMemoize(function (et) {
      return getTheme$1($, et);
    });
  }),
  ThemeProvider$1 = function (et) {
    var tt = reactExports.useContext(ThemeContext);
    return (
      et.theme !== tt && (tt = createCacheWithTheme(tt)(et.theme)),
      reactExports.createElement(ThemeContext.Provider, { value: tt }, et.children)
    );
  },
  Global = withEmotionCache(function ($, et) {
    var tt = $.styles,
      rt = serializeStyles([tt], void 0, reactExports.useContext(ThemeContext)),
      nt = reactExports.useRef();
    return (
      useInsertionEffectWithLayoutFallback(
        function () {
          var ot = et.key + '-global',
            it = new et.sheet.constructor({
              key: ot,
              nonce: et.sheet.nonce,
              container: et.sheet.container,
              speedy: et.sheet.isSpeedy
            }),
            at = !1,
            st = document.querySelector('style[data-emotion="' + ot + ' ' + rt.name + '"]');
          return (
            et.sheet.tags.length && (it.before = et.sheet.tags[0]),
            st !== null && ((at = !0), st.setAttribute('data-emotion', ot), it.hydrate([st])),
            (nt.current = [it, at]),
            function () {
              it.flush();
            }
          );
        },
        [et]
      ),
      useInsertionEffectWithLayoutFallback(
        function () {
          var ot = nt.current,
            it = ot[0],
            at = ot[1];
          if (at) {
            ot[1] = !1;
            return;
          }
          if ((rt.next !== void 0 && insertStyles(et, rt.next, !0), it.tags.length)) {
            var st = it.tags[it.tags.length - 1].nextElementSibling;
            (it.before = st), it.flush();
          }
          et.insert('', rt, it, !1);
        },
        [et, rt.name]
      ),
      null
    );
  });
function css$1() {
  for (var $ = arguments.length, et = new Array($), tt = 0; tt < $; tt++) et[tt] = arguments[tt];
  return serializeStyles(et);
}
var keyframes$1 = function () {
    var et = css$1.apply(void 0, arguments),
      tt = 'animation-' + et.name;
    return {
      name: tt,
      styles: '@keyframes ' + tt + '{' + et.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      }
    };
  },
  vhPolyfill = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,
  CSSPolyfill = () => jsx(Global, { styles: vhPolyfill }),
  CSSReset = () =>
    jsx(Global, {
      styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `
    });
function getErrorMessage($, et) {
  return `${$} returned \`undefined\`. Seems you forgot to wrap component within ${et}`;
}
function createContext$1($ = {}) {
  const {
      name: et,
      strict: tt = !0,
      hookName: rt = 'useContext',
      providerName: nt = 'Provider',
      errorMessage: ot
    } = $,
    it = reactExports.createContext(void 0);
  it.displayName = et;
  function at() {
    var st;
    const lt = reactExports.useContext(it);
    if (!lt && tt) {
      const ut = new Error(ot ?? getErrorMessage(rt, nt));
      throw (
        ((ut.name = 'ContextError'),
        (st = Error.captureStackTrace) == null || st.call(Error, ut, at),
        ut)
      );
    }
    return lt;
  }
  return [it.Provider, at, it];
}
var [PortalManagerContextProvider, usePortalManager] = createContext$1({
  strict: !1,
  name: 'PortalManagerContext'
});
function PortalManager($) {
  const { children: et, zIndex: tt } = $;
  return jsx(PortalManagerContextProvider, { value: { zIndex: tt }, children: et });
}
PortalManager.displayName = 'PortalManager';
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document)
    ? reactExports.useLayoutEffect
    : reactExports.useEffect,
  [PortalContextProvider, usePortalContext] = createContext$1({
    strict: !1,
    name: 'PortalContext'
  }),
  PORTAL_CLASSNAME = 'chakra-portal',
  PORTAL_SELECTOR = '.chakra-portal',
  Container = ($) =>
    jsx('div', {
      className: 'chakra-portal-zIndex',
      style: { position: 'absolute', zIndex: $.zIndex, top: 0, left: 0, right: 0 },
      children: $.children
    }),
  DefaultPortal = ($) => {
    const { appendToParentPortal: et, children: tt } = $,
      [rt, nt] = reactExports.useState(null),
      ot = reactExports.useRef(null),
      [, it] = reactExports.useState({});
    reactExports.useEffect(() => it({}), []);
    const at = usePortalContext(),
      st = usePortalManager();
    useSafeLayoutEffect(() => {
      if (!rt) return;
      const ut = rt.ownerDocument,
        ct = et ? at ?? ut.body : ut.body;
      if (!ct) return;
      (ot.current = ut.createElement('div')),
        (ot.current.className = PORTAL_CLASSNAME),
        ct.appendChild(ot.current),
        it({});
      const dt = ot.current;
      return () => {
        ct.contains(dt) && ct.removeChild(dt);
      };
    }, [rt]);
    const lt =
      st != null && st.zIndex
        ? jsx(Container, { zIndex: st == null ? void 0 : st.zIndex, children: tt })
        : tt;
    return ot.current
      ? reactDomExports.createPortal(
          jsx(PortalContextProvider, { value: ot.current, children: lt }),
          ot.current
        )
      : jsx('span', {
          ref: (ut) => {
            ut && nt(ut);
          }
        });
  },
  ContainerPortal = ($) => {
    const { children: et, containerRef: tt, appendToParentPortal: rt } = $,
      nt = tt.current,
      ot = nt ?? (typeof window < 'u' ? document.body : void 0),
      it = reactExports.useMemo(() => {
        const st = nt == null ? void 0 : nt.ownerDocument.createElement('div');
        return st && (st.className = PORTAL_CLASSNAME), st;
      }, [nt]),
      [, at] = reactExports.useState({});
    return (
      useSafeLayoutEffect(() => at({}), []),
      useSafeLayoutEffect(() => {
        if (!(!it || !ot))
          return (
            ot.appendChild(it),
            () => {
              ot.removeChild(it);
            }
          );
      }, [it, ot]),
      ot && it
        ? reactDomExports.createPortal(
            jsx(PortalContextProvider, { value: rt ? it : null, children: et }),
            it
          )
        : null
    );
  };
function Portal($) {
  const et = { appendToParentPortal: !0, ...$ },
    { containerRef: tt, ...rt } = et;
  return tt ? jsx(ContainerPortal, { containerRef: tt, ...rt }) : jsx(DefaultPortal, { ...rt });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = 'Portal';
function useTheme() {
  const $ = reactExports.useContext(ThemeContext);
  if (!$)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    );
  return $;
}
var ColorModeContext = reactExports.createContext({});
ColorModeContext.displayName = 'ColorModeContext';
function useColorMode() {
  const $ = reactExports.useContext(ColorModeContext);
  if ($ === void 0) throw new Error('useColorMode must be used within a ColorModeProvider');
  return $;
}
var classNames = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' };
function getColorModeUtils($ = {}) {
  const { preventTransition: et = !0 } = $,
    tt = {
      setDataset: (rt) => {
        const nt = et ? tt.preventTransition() : void 0;
        (document.documentElement.dataset.theme = rt),
          (document.documentElement.style.colorScheme = rt),
          nt == null || nt();
      },
      setClassName(rt) {
        document.body.classList.add(rt ? classNames.dark : classNames.light),
          document.body.classList.remove(rt ? classNames.light : classNames.dark);
      },
      query() {
        return window.matchMedia('(prefers-color-scheme: dark)');
      },
      getSystemTheme(rt) {
        var nt;
        return ((nt = tt.query().matches) != null ? nt : rt === 'dark') ? 'dark' : 'light';
      },
      addListener(rt) {
        const nt = tt.query(),
          ot = (it) => {
            rt(it.matches ? 'dark' : 'light');
          };
        return (
          typeof nt.addListener == 'function'
            ? nt.addListener(ot)
            : nt.addEventListener('change', ot),
          () => {
            typeof nt.removeListener == 'function'
              ? nt.removeListener(ot)
              : nt.removeEventListener('change', ot);
          }
        );
      },
      preventTransition() {
        const rt = document.createElement('style');
        return (
          rt.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          document.head.appendChild(rt),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(rt);
                });
              });
          }
        );
      }
    };
  return tt;
}
var STORAGE_KEY = 'chakra-ui-color-mode';
function createLocalStorageManager($) {
  return {
    ssr: !1,
    type: 'localStorage',
    get(et) {
      if (!(globalThis != null && globalThis.document)) return et;
      let tt;
      try {
        tt = localStorage.getItem($) || et;
      } catch {}
      return tt || et;
    },
    set(et) {
      try {
        localStorage.setItem($, et);
      } catch {}
    }
  };
}
var localStorageManager = createLocalStorageManager(STORAGE_KEY),
  noop$3 = () => {};
function getTheme($, et) {
  return $.type === 'cookie' && $.ssr ? $.get(et) : et;
}
function ColorModeProvider($) {
  const {
      value: et,
      children: tt,
      options: { useSystemColorMode: rt, initialColorMode: nt, disableTransitionOnChange: ot } = {},
      colorModeManager: it = localStorageManager
    } = $,
    at = nt === 'dark' ? 'dark' : 'light',
    [st, lt] = reactExports.useState(() => getTheme(it, at)),
    [ut, ct] = reactExports.useState(() => getTheme(it)),
    {
      getSystemTheme: dt,
      setClassName: ft,
      setDataset: pt,
      addListener: gt
    } = reactExports.useMemo(() => getColorModeUtils({ preventTransition: ot }), [ot]),
    bt = nt === 'system' && !st ? ut : st,
    ht = reactExports.useCallback(
      (St) => {
        const _t = St === 'system' ? dt() : St;
        lt(_t), ft(_t === 'dark'), pt(_t), it.set(_t);
      },
      [it, dt, ft, pt]
    );
  useSafeLayoutEffect(() => {
    nt === 'system' && ct(dt());
  }, []),
    reactExports.useEffect(() => {
      const St = it.get();
      if (St) {
        ht(St);
        return;
      }
      if (nt === 'system') {
        ht('system');
        return;
      }
      ht(at);
    }, [it, at, nt, ht]);
  const mt = reactExports.useCallback(() => {
    ht(bt === 'dark' ? 'light' : 'dark');
  }, [bt, ht]);
  reactExports.useEffect(() => {
    if (rt) return gt(ht);
  }, [rt, gt, ht]);
  const yt = reactExports.useMemo(
    () => ({
      colorMode: et ?? bt,
      toggleColorMode: et ? noop$3 : mt,
      setColorMode: et ? noop$3 : ht,
      forced: et !== void 0
    }),
    [bt, mt, ht, et]
  );
  return jsx(ColorModeContext.Provider, { value: yt, children: tt });
}
ColorModeProvider.displayName = 'ColorModeProvider';
function useChakra() {
  const $ = useColorMode(),
    et = useTheme();
  return { ...$, theme: et };
}
var cx = (...$) => $.filter(Boolean).join(' ');
function isObject$1($) {
  const et = typeof $;
  return $ != null && (et === 'object' || et === 'function') && !Array.isArray($);
}
function runIfFn$2($, ...et) {
  return isFunction$3($) ? $(...et) : $;
}
var isFunction$3 = ($) => typeof $ == 'function',
  dataAttr = ($) => ($ ? '' : void 0),
  ariaAttr = ($) => ($ ? !0 : void 0);
function callAllHandlers(...$) {
  return function (tt) {
    $.some((rt) => (rt == null || rt(tt), tt == null ? void 0 : tt.defaultPrevented));
  };
}
var lodash_mergewithExports = {},
  lodash_mergewith = {
    get exports() {
      return lodash_mergewithExports;
    },
    set exports($) {
      lodash_mergewithExports = $;
    }
  };
(function ($, et) {
  var tt = 200,
    rt = '__lodash_hash_undefined__',
    nt = 800,
    ot = 16,
    it = 9007199254740991,
    at = '[object Arguments]',
    st = '[object Array]',
    lt = '[object AsyncFunction]',
    ut = '[object Boolean]',
    ct = '[object Date]',
    dt = '[object Error]',
    ft = '[object Function]',
    pt = '[object GeneratorFunction]',
    gt = '[object Map]',
    bt = '[object Number]',
    ht = '[object Null]',
    mt = '[object Object]',
    yt = '[object Proxy]',
    St = '[object RegExp]',
    _t = '[object Set]',
    Ct = '[object String]',
    wt = '[object Undefined]',
    Et = '[object WeakMap]',
    Rt = '[object ArrayBuffer]',
    kt = '[object DataView]',
    jt = '[object Float32Array]',
    Ut = '[object Float64Array]',
    Qt = '[object Int8Array]',
    Yt = '[object Int16Array]',
    Vt = '[object Int32Array]',
    Ht = '[object Uint8Array]',
    Wt = '[object Uint8ClampedArray]',
    Pt = '[object Uint16Array]',
    At = '[object Uint32Array]',
    Mt = /[\\^$.*+?()[\]{}|]/g,
    Ft = /^\[object .+?Constructor\]$/,
    Nt = /^(?:0|[1-9]\d*)$/,
    Dt = {};
  (Dt[jt] = Dt[Ut] = Dt[Qt] = Dt[Yt] = Dt[Vt] = Dt[Ht] = Dt[Wt] = Dt[Pt] = Dt[At] = !0),
    (Dt[at] =
      Dt[st] =
      Dt[Rt] =
      Dt[ut] =
      Dt[kt] =
      Dt[ct] =
      Dt[dt] =
      Dt[ft] =
      Dt[gt] =
      Dt[bt] =
      Dt[mt] =
      Dt[St] =
      Dt[_t] =
      Dt[Ct] =
      Dt[Et] =
        !1);
  var Xt =
      typeof commonjsGlobal == 'object' &&
      commonjsGlobal &&
      commonjsGlobal.Object === Object &&
      commonjsGlobal,
    ar = typeof self == 'object' && self && self.Object === Object && self,
    Kt = Xt || ar || Function('return this')(),
    er = et && !et.nodeType && et,
    sr = er && !0 && $ && !$.nodeType && $,
    Ar = sr && sr.exports === er,
    br = Ar && Xt.process,
    Mr = (function () {
      try {
        var vt = sr && sr.require && sr.require('util').types;
        return vt || (br && br.binding && br.binding('util'));
      } catch {}
    })(),
    Or = Mr && Mr.isTypedArray;
  function Jr(vt, xt, $t) {
    switch ($t.length) {
      case 0:
        return vt.call(xt);
      case 1:
        return vt.call(xt, $t[0]);
      case 2:
        return vt.call(xt, $t[0], $t[1]);
      case 3:
        return vt.call(xt, $t[0], $t[1], $t[2]);
    }
    return vt.apply(xt, $t);
  }
  function sn(vt, xt) {
    for (var $t = -1, Tt = Array(vt); ++$t < vt; ) Tt[$t] = xt($t);
    return Tt;
  }
  function ln(vt) {
    return function (xt) {
      return vt(xt);
    };
  }
  function cn(vt, xt) {
    return vt == null ? void 0 : vt[xt];
  }
  function dn(vt, xt) {
    return function ($t) {
      return vt(xt($t));
    };
  }
  var pn = Array.prototype,
    hn = Function.prototype,
    dr = Object.prototype,
    Sr = Kt['__core-js_shared__'],
    fr = hn.toString,
    Zt = dr.hasOwnProperty,
    Ir = (function () {
      var vt = /[^.]+$/.exec((Sr && Sr.keys && Sr.keys.IE_PROTO) || '');
      return vt ? 'Symbol(src)_1.' + vt : '';
    })(),
    jr = dr.toString,
    mn = fr.call(Object),
    gn = RegExp(
      '^' +
        fr
          .call(Zt)
          .replace(Mt, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    ),
    pr = Ar ? Kt.Buffer : void 0,
    Dr = Kt.Symbol,
    zr = Kt.Uint8Array,
    Lr = pr ? pr.allocUnsafe : void 0,
    Br = dn(Object.getPrototypeOf, Object),
    Vr = Object.create,
    yn = dr.propertyIsEnumerable,
    vn = pn.splice,
    tr = Dr ? Dr.toStringTag : void 0,
    hr = (function () {
      try {
        var vt = _r(Object, 'defineProperty');
        return vt({}, '', {}), vt;
      } catch {}
    })(),
    bn = pr ? pr.isBuffer : void 0,
    Fr = Math.max,
    Sn = Date.now,
    Nr = _r(Kt, 'Map'),
    lr = _r(Object, 'create'),
    xn = (function () {
      function vt() {}
      return function (xt) {
        if (!nr(xt)) return {};
        if (Vr) return Vr(xt);
        vt.prototype = xt;
        var $t = new vt();
        return (vt.prototype = void 0), $t;
      };
    })();
  function rr(vt) {
    var xt = -1,
      $t = vt == null ? 0 : vt.length;
    for (this.clear(); ++xt < $t; ) {
      var Tt = vt[xt];
      this.set(Tt[0], Tt[1]);
    }
  }
  function $n() {
    (this.__data__ = lr ? lr(null) : {}), (this.size = 0);
  }
  function _n(vt) {
    var xt = this.has(vt) && delete this.__data__[vt];
    return (this.size -= xt ? 1 : 0), xt;
  }
  function wn(vt) {
    var xt = this.__data__;
    if (lr) {
      var $t = xt[vt];
      return $t === rt ? void 0 : $t;
    }
    return Zt.call(xt, vt) ? xt[vt] : void 0;
  }
  function Cn(vt) {
    var xt = this.__data__;
    return lr ? xt[vt] !== void 0 : Zt.call(xt, vt);
  }
  function En(vt, xt) {
    var $t = this.__data__;
    return (this.size += this.has(vt) ? 0 : 1), ($t[vt] = lr && xt === void 0 ? rt : xt), this;
  }
  (rr.prototype.clear = $n),
    (rr.prototype.delete = _n),
    (rr.prototype.get = wn),
    (rr.prototype.has = Cn),
    (rr.prototype.set = En);
  function Jt(vt) {
    var xt = -1,
      $t = vt == null ? 0 : vt.length;
    for (this.clear(); ++xt < $t; ) {
      var Tt = vt[xt];
      this.set(Tt[0], Tt[1]);
    }
  }
  function kn() {
    (this.__data__ = []), (this.size = 0);
  }
  function Pn(vt) {
    var xt = this.__data__,
      $t = mr(xt, vt);
    if ($t < 0) return !1;
    var Tt = xt.length - 1;
    return $t == Tt ? xt.pop() : vn.call(xt, $t, 1), --this.size, !0;
  }
  function Tn(vt) {
    var xt = this.__data__,
      $t = mr(xt, vt);
    return $t < 0 ? void 0 : xt[$t][1];
  }
  function Rn(vt) {
    return mr(this.__data__, vt) > -1;
  }
  function An(vt, xt) {
    var $t = this.__data__,
      Tt = mr($t, vt);
    return Tt < 0 ? (++this.size, $t.push([vt, xt])) : ($t[Tt][1] = xt), this;
  }
  (Jt.prototype.clear = kn),
    (Jt.prototype.delete = Pn),
    (Jt.prototype.get = Tn),
    (Jt.prototype.has = Rn),
    (Jt.prototype.set = An);
  function or(vt) {
    var xt = -1,
      $t = vt == null ? 0 : vt.length;
    for (this.clear(); ++xt < $t; ) {
      var Tt = vt[xt];
      this.set(Tt[0], Tt[1]);
    }
  }
  function Mn() {
    (this.size = 0), (this.__data__ = { hash: new rr(), map: new (Nr || Jt)(), string: new rr() });
  }
  function On(vt) {
    var xt = yr(this, vt).delete(vt);
    return (this.size -= xt ? 1 : 0), xt;
  }
  function In(vt) {
    return yr(this, vt).get(vt);
  }
  function jn(vt) {
    return yr(this, vt).has(vt);
  }
  function Dn(vt, xt) {
    var $t = yr(this, vt),
      Tt = $t.size;
    return $t.set(vt, xt), (this.size += $t.size == Tt ? 0 : 1), this;
  }
  (or.prototype.clear = Mn),
    (or.prototype.delete = On),
    (or.prototype.get = In),
    (or.prototype.has = jn),
    (or.prototype.set = Dn);
  function ir(vt) {
    var xt = (this.__data__ = new Jt(vt));
    this.size = xt.size;
  }
  function zn() {
    (this.__data__ = new Jt()), (this.size = 0);
  }
  function Ln(vt) {
    var xt = this.__data__,
      $t = xt.delete(vt);
    return (this.size = xt.size), $t;
  }
  function Bn(vt) {
    return this.__data__.get(vt);
  }
  function Vn(vt) {
    return this.__data__.has(vt);
  }
  function Fn(vt, xt) {
    var $t = this.__data__;
    if ($t instanceof Jt) {
      var Tt = $t.__data__;
      if (!Nr || Tt.length < tt - 1) return Tt.push([vt, xt]), (this.size = ++$t.size), this;
      $t = this.__data__ = new or(Tt);
    }
    return $t.set(vt, xt), (this.size = $t.size), this;
  }
  (ir.prototype.clear = zn),
    (ir.prototype.delete = Ln),
    (ir.prototype.get = Bn),
    (ir.prototype.has = Vn),
    (ir.prototype.set = Fn);
  function Nn(vt, xt) {
    var $t = Er(vt),
      Tt = !$t && Cr(vt),
      It = !$t && !Tt && Gr(vt),
      zt = !$t && !Tt && !It && Qr(vt),
      Lt = $t || Tt || It || zt,
      Ot = Lt ? sn(vt.length, String) : [],
      Bt = Ot.length;
    for (var qt in vt)
      (xt || Zt.call(vt, qt)) &&
        !(
          Lt &&
          (qt == 'length' ||
            (It && (qt == 'offset' || qt == 'parent')) ||
            (zt && (qt == 'buffer' || qt == 'byteLength' || qt == 'byteOffset')) ||
            Hr(qt, Bt))
        ) &&
        Ot.push(qt);
    return Ot;
  }
  function xr(vt, xt, $t) {
    (($t !== void 0 && !vr(vt[xt], $t)) || ($t === void 0 && !(xt in vt))) && $r(vt, xt, $t);
  }
  function Wn(vt, xt, $t) {
    var Tt = vt[xt];
    (!(Zt.call(vt, xt) && vr(Tt, $t)) || ($t === void 0 && !(xt in vt))) && $r(vt, xt, $t);
  }
  function mr(vt, xt) {
    for (var $t = vt.length; $t--; ) if (vr(vt[$t][0], xt)) return $t;
    return -1;
  }
  function $r(vt, xt, $t) {
    xt == '__proto__' && hr
      ? hr(vt, xt, { configurable: !0, enumerable: !0, value: $t, writable: !0 })
      : (vt[xt] = $t);
  }
  var Un = no();
  function gr(vt) {
    return vt == null ? (vt === void 0 ? wt : ht) : tr && tr in Object(vt) ? oo(vt) : co(vt);
  }
  function Wr(vt) {
    return ur(vt) && gr(vt) == at;
  }
  function Hn(vt) {
    if (!nr(vt) || lo(vt)) return !1;
    var xt = Pr(vt) ? gn : Ft;
    return xt.test(mo(vt));
  }
  function Kn(vt) {
    return ur(vt) && qr(vt.length) && !!Dt[gr(vt)];
  }
  function Gn(vt) {
    if (!nr(vt)) return uo(vt);
    var xt = Kr(vt),
      $t = [];
    for (var Tt in vt) (Tt == 'constructor' && (xt || !Zt.call(vt, Tt))) || $t.push(Tt);
    return $t;
  }
  function Ur(vt, xt, $t, Tt, It) {
    vt !== xt &&
      Un(
        xt,
        function (zt, Lt) {
          if ((It || (It = new ir()), nr(zt))) qn(vt, xt, Lt, $t, Ur, Tt, It);
          else {
            var Ot = Tt ? Tt(wr(vt, Lt), zt, Lt + '', vt, xt, It) : void 0;
            Ot === void 0 && (Ot = zt), xr(vt, Lt, Ot);
          }
        },
        Yr
      );
  }
  function qn(vt, xt, $t, Tt, It, zt, Lt) {
    var Ot = wr(vt, $t),
      Bt = wr(xt, $t),
      qt = Lt.get(Bt);
    if (qt) {
      xr(vt, $t, qt);
      return;
    }
    var Gt = zt ? zt(Ot, Bt, $t + '', vt, xt, Lt) : void 0,
      cr = Gt === void 0;
    if (cr) {
      var Tr = Er(Bt),
        Rr = !Tr && Gr(Bt),
        Zr = !Tr && !Rr && Qr(Bt);
      (Gt = Bt),
        Tr || Rr || Zr
          ? Er(Ot)
            ? (Gt = Ot)
            : go(Ot)
            ? (Gt = eo(Ot))
            : Rr
            ? ((cr = !1), (Gt = Xn(Bt, !0)))
            : Zr
            ? ((cr = !1), (Gt = Jn(Bt, !0)))
            : (Gt = [])
          : yo(Bt) || Cr(Bt)
          ? ((Gt = Ot), Cr(Ot) ? (Gt = vo(Ot)) : (!nr(Ot) || Pr(Ot)) && (Gt = io(Bt)))
          : (cr = !1);
    }
    cr && (Lt.set(Bt, Gt), It(Gt, Bt, Tt, zt, Lt), Lt.delete(Bt)), xr(vt, $t, Gt);
  }
  function Qn(vt, xt) {
    return po(fo(vt, xt, Xr), vt + '');
  }
  var Yn = hr
    ? function (vt, xt) {
        return hr(vt, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: So(xt),
          writable: !0
        });
      }
    : Xr;
  function Xn(vt, xt) {
    if (xt) return vt.slice();
    var $t = vt.length,
      Tt = Lr ? Lr($t) : new vt.constructor($t);
    return vt.copy(Tt), Tt;
  }
  function Zn(vt) {
    var xt = new vt.constructor(vt.byteLength);
    return new zr(xt).set(new zr(vt)), xt;
  }
  function Jn(vt, xt) {
    var $t = xt ? Zn(vt.buffer) : vt.buffer;
    return new vt.constructor($t, vt.byteOffset, vt.length);
  }
  function eo(vt, xt) {
    var $t = -1,
      Tt = vt.length;
    for (xt || (xt = Array(Tt)); ++$t < Tt; ) xt[$t] = vt[$t];
    return xt;
  }
  function to(vt, xt, $t, Tt) {
    var It = !$t;
    $t || ($t = {});
    for (var zt = -1, Lt = xt.length; ++zt < Lt; ) {
      var Ot = xt[zt],
        Bt = Tt ? Tt($t[Ot], vt[Ot], Ot, $t, vt) : void 0;
      Bt === void 0 && (Bt = vt[Ot]), It ? $r($t, Ot, Bt) : Wn($t, Ot, Bt);
    }
    return $t;
  }
  function ro(vt) {
    return Qn(function (xt, $t) {
      var Tt = -1,
        It = $t.length,
        zt = It > 1 ? $t[It - 1] : void 0,
        Lt = It > 2 ? $t[2] : void 0;
      for (
        zt = vt.length > 3 && typeof zt == 'function' ? (It--, zt) : void 0,
          Lt && ao($t[0], $t[1], Lt) && ((zt = It < 3 ? void 0 : zt), (It = 1)),
          xt = Object(xt);
        ++Tt < It;

      ) {
        var Ot = $t[Tt];
        Ot && vt(xt, Ot, Tt, zt);
      }
      return xt;
    });
  }
  function no(vt) {
    return function (xt, $t, Tt) {
      for (var It = -1, zt = Object(xt), Lt = Tt(xt), Ot = Lt.length; Ot--; ) {
        var Bt = Lt[vt ? Ot : ++It];
        if ($t(zt[Bt], Bt, zt) === !1) break;
      }
      return xt;
    };
  }
  function yr(vt, xt) {
    var $t = vt.__data__;
    return so(xt) ? $t[typeof xt == 'string' ? 'string' : 'hash'] : $t.map;
  }
  function _r(vt, xt) {
    var $t = cn(vt, xt);
    return Hn($t) ? $t : void 0;
  }
  function oo(vt) {
    var xt = Zt.call(vt, tr),
      $t = vt[tr];
    try {
      vt[tr] = void 0;
      var Tt = !0;
    } catch {}
    var It = jr.call(vt);
    return Tt && (xt ? (vt[tr] = $t) : delete vt[tr]), It;
  }
  function io(vt) {
    return typeof vt.constructor == 'function' && !Kr(vt) ? xn(Br(vt)) : {};
  }
  function Hr(vt, xt) {
    var $t = typeof vt;
    return (
      (xt = xt ?? it),
      !!xt &&
        ($t == 'number' || ($t != 'symbol' && Nt.test(vt))) &&
        vt > -1 &&
        vt % 1 == 0 &&
        vt < xt
    );
  }
  function ao(vt, xt, $t) {
    if (!nr($t)) return !1;
    var Tt = typeof xt;
    return (Tt == 'number' ? kr($t) && Hr(xt, $t.length) : Tt == 'string' && xt in $t)
      ? vr($t[xt], vt)
      : !1;
  }
  function so(vt) {
    var xt = typeof vt;
    return xt == 'string' || xt == 'number' || xt == 'symbol' || xt == 'boolean'
      ? vt !== '__proto__'
      : vt === null;
  }
  function lo(vt) {
    return !!Ir && Ir in vt;
  }
  function Kr(vt) {
    var xt = vt && vt.constructor,
      $t = (typeof xt == 'function' && xt.prototype) || dr;
    return vt === $t;
  }
  function uo(vt) {
    var xt = [];
    if (vt != null) for (var $t in Object(vt)) xt.push($t);
    return xt;
  }
  function co(vt) {
    return jr.call(vt);
  }
  function fo(vt, xt, $t) {
    return (
      (xt = Fr(xt === void 0 ? vt.length - 1 : xt, 0)),
      function () {
        for (var Tt = arguments, It = -1, zt = Fr(Tt.length - xt, 0), Lt = Array(zt); ++It < zt; )
          Lt[It] = Tt[xt + It];
        It = -1;
        for (var Ot = Array(xt + 1); ++It < xt; ) Ot[It] = Tt[It];
        return (Ot[xt] = $t(Lt)), Jr(vt, this, Ot);
      }
    );
  }
  function wr(vt, xt) {
    if (!(xt === 'constructor' && typeof vt[xt] == 'function') && xt != '__proto__') return vt[xt];
  }
  var po = ho(Yn);
  function ho(vt) {
    var xt = 0,
      $t = 0;
    return function () {
      var Tt = Sn(),
        It = ot - (Tt - $t);
      if ((($t = Tt), It > 0)) {
        if (++xt >= nt) return arguments[0];
      } else xt = 0;
      return vt.apply(void 0, arguments);
    };
  }
  function mo(vt) {
    if (vt != null) {
      try {
        return fr.call(vt);
      } catch {}
      try {
        return vt + '';
      } catch {}
    }
    return '';
  }
  function vr(vt, xt) {
    return vt === xt || (vt !== vt && xt !== xt);
  }
  var Cr = Wr(
      (function () {
        return arguments;
      })()
    )
      ? Wr
      : function (vt) {
          return ur(vt) && Zt.call(vt, 'callee') && !yn.call(vt, 'callee');
        },
    Er = Array.isArray;
  function kr(vt) {
    return vt != null && qr(vt.length) && !Pr(vt);
  }
  function go(vt) {
    return ur(vt) && kr(vt);
  }
  var Gr = bn || xo;
  function Pr(vt) {
    if (!nr(vt)) return !1;
    var xt = gr(vt);
    return xt == ft || xt == pt || xt == lt || xt == yt;
  }
  function qr(vt) {
    return typeof vt == 'number' && vt > -1 && vt % 1 == 0 && vt <= it;
  }
  function nr(vt) {
    var xt = typeof vt;
    return vt != null && (xt == 'object' || xt == 'function');
  }
  function ur(vt) {
    return vt != null && typeof vt == 'object';
  }
  function yo(vt) {
    if (!ur(vt) || gr(vt) != mt) return !1;
    var xt = Br(vt);
    if (xt === null) return !0;
    var $t = Zt.call(xt, 'constructor') && xt.constructor;
    return typeof $t == 'function' && $t instanceof $t && fr.call($t) == mn;
  }
  var Qr = Or ? ln(Or) : Kn;
  function vo(vt) {
    return to(vt, Yr(vt));
  }
  function Yr(vt) {
    return kr(vt) ? Nn(vt, !0) : Gn(vt);
  }
  var bo = ro(function (vt, xt, $t, Tt) {
    Ur(vt, xt, $t, Tt);
  });
  function So(vt) {
    return function () {
      return vt;
    };
  }
  function Xr(vt) {
    return vt;
  }
  function xo() {
    return !1;
  }
  $.exports = bo;
})(lodash_mergewith, lodash_mergewithExports);
const mergeWith = lodash_mergewithExports;
var isImportant = ($) => /!(important)?$/.test($),
  withoutImportant = ($) => (typeof $ == 'string' ? $.replace(/!(important)?$/, '').trim() : $),
  tokenToCSSVar = ($, et) => (tt) => {
    const rt = String(et),
      nt = isImportant(rt),
      ot = withoutImportant(rt),
      it = $ ? `${$}.${ot}` : ot;
    let at = isObject$1(tt.__cssMap) && it in tt.__cssMap ? tt.__cssMap[it].varRef : et;
    return (at = withoutImportant(at)), nt ? `${at} !important` : at;
  };
function createTransform($) {
  const { scale: et, transform: tt, compose: rt } = $;
  return (ot, it) => {
    var at;
    const st = tokenToCSSVar(et, ot)(it);
    let lt = (at = tt == null ? void 0 : tt(st, it)) != null ? at : st;
    return rt && (lt = rt(lt, it)), lt;
  };
}
var pipe$1 =
  (...$) =>
  (et) =>
    $.reduce((tt, rt) => rt(tt), et);
function toConfig($, et) {
  return (tt) => {
    const rt = { property: tt, scale: $ };
    return (rt.transform = createTransform({ scale: $, transform: et })), rt;
  };
}
var getRtl =
  ({ rtl: $, ltr: et }) =>
  (tt) =>
    tt.direction === 'rtl' ? $ : et;
function logical($) {
  const { property: et, scale: tt, transform: rt } = $;
  return {
    scale: tt,
    property: getRtl(et),
    transform: tt ? createTransform({ scale: tt, compose: rt }) : rt
  };
}
var transformTemplate = [
  'rotate(var(--chakra-rotate, 0))',
  'scaleX(var(--chakra-scale-x, 1))',
  'scaleY(var(--chakra-scale-y, 1))',
  'skewX(var(--chakra-skew-x, 0))',
  'skewY(var(--chakra-skew-y, 0))'
];
function getTransformTemplate() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
    ...transformTemplate
  ].join(' ');
}
function getTransformGpuTemplate() {
  return [
    'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
    ...transformTemplate
  ].join(' ');
}
var filterTemplate = {
    '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    filter: [
      'var(--chakra-blur)',
      'var(--chakra-brightness)',
      'var(--chakra-contrast)',
      'var(--chakra-grayscale)',
      'var(--chakra-hue-rotate)',
      'var(--chakra-invert)',
      'var(--chakra-saturate)',
      'var(--chakra-sepia)',
      'var(--chakra-drop-shadow)'
    ].join(' ')
  },
  backdropFilterTemplate = {
    backdropFilter: [
      'var(--chakra-backdrop-blur)',
      'var(--chakra-backdrop-brightness)',
      'var(--chakra-backdrop-contrast)',
      'var(--chakra-backdrop-grayscale)',
      'var(--chakra-backdrop-hue-rotate)',
      'var(--chakra-backdrop-invert)',
      'var(--chakra-backdrop-opacity)',
      'var(--chakra-backdrop-saturate)',
      'var(--chakra-backdrop-sepia)'
    ].join(' '),
    '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)'
  };
function getRingTemplate($) {
  return {
    '--chakra-ring-offset-shadow':
      'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
    '--chakra-ring-shadow':
      'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
    '--chakra-ring-width': $,
    boxShadow: [
      'var(--chakra-ring-offset-shadow)',
      'var(--chakra-ring-shadow)',
      'var(--chakra-shadow, 0 0 #0000)'
    ].join(', ')
  };
}
var flexDirectionTemplate = {
    'row-reverse': { space: '--chakra-space-x-reverse', divide: '--chakra-divide-x-reverse' },
    'column-reverse': { space: '--chakra-space-y-reverse', divide: '--chakra-divide-y-reverse' }
  },
  owlSelector = '& > :not(style) ~ :not(style)',
  spaceXTemplate = {
    [owlSelector]: {
      marginInlineStart: 'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
      marginInlineEnd: 'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))'
    }
  },
  spaceYTemplate = {
    [owlSelector]: {
      marginTop: 'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
      marginBottom: 'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))'
    }
  },
  directionMap = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left'
  },
  valueSet = new Set(Object.values(directionMap)),
  globalSet = new Set(['none', '-moz-initial', 'inherit', 'initial', 'revert', 'unset']),
  trimSpace = ($) => $.trim();
function parseGradient($, et) {
  var tt, rt;
  if ($ == null || globalSet.has($)) return $;
  const nt = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,
    { type: ot, values: it } =
      (rt = (tt = nt.exec($)) == null ? void 0 : tt.groups) != null ? rt : {};
  if (!ot || !it) return $;
  const at = ot.includes('-gradient') ? ot : `${ot}-gradient`,
    [st, ...lt] = it.split(',').map(trimSpace).filter(Boolean);
  if ((lt == null ? void 0 : lt.length) === 0) return $;
  const ut = st in directionMap ? directionMap[st] : st;
  lt.unshift(ut);
  const ct = lt.map((dt) => {
    if (valueSet.has(dt)) return dt;
    const ft = dt.indexOf(' '),
      [pt, gt] = ft !== -1 ? [dt.substr(0, ft), dt.substr(ft + 1)] : [dt],
      bt = isCSSFunction(gt) ? gt : gt && gt.split(' '),
      ht = `colors.${pt}`,
      mt = ht in et.__cssMap ? et.__cssMap[ht].varRef : pt;
    return bt ? [mt, ...(Array.isArray(bt) ? bt : [bt])].join(' ') : mt;
  });
  return `${at}(${ct.join(', ')})`;
}
var isCSSFunction = ($) => typeof $ == 'string' && $.includes('(') && $.includes(')'),
  gradientTransform = ($, et) => parseGradient($, et ?? {});
function isCssVar($) {
  return /^var\(--.+\)$/.test($);
}
var analyzeCSSValue = ($) => {
    const et = parseFloat($.toString()),
      tt = $.toString().replace(String(et), '');
    return { unitless: !tt, value: et, unit: tt };
  },
  wrap = ($) => (et) => `${$}(${et})`,
  transformFunctions = {
    filter($) {
      return $ !== 'auto' ? $ : filterTemplate;
    },
    backdropFilter($) {
      return $ !== 'auto' ? $ : backdropFilterTemplate;
    },
    ring($) {
      return getRingTemplate(transformFunctions.px($));
    },
    bgClip($) {
      return $ === 'text'
        ? { color: 'transparent', backgroundClip: 'text' }
        : { backgroundClip: $ };
    },
    transform($) {
      return $ === 'auto'
        ? getTransformTemplate()
        : $ === 'auto-gpu'
        ? getTransformGpuTemplate()
        : $;
    },
    vh($) {
      return $ === '$100vh' ? 'var(--chakra-vh)' : $;
    },
    px($) {
      if ($ == null) return $;
      const { unitless: et } = analyzeCSSValue($);
      return et || typeof $ == 'number' ? `${$}px` : $;
    },
    fraction($) {
      return typeof $ != 'number' || $ > 1 ? $ : `${$ * 100}%`;
    },
    float($, et) {
      const tt = { left: 'right', right: 'left' };
      return et.direction === 'rtl' ? tt[$] : $;
    },
    degree($) {
      if (isCssVar($) || $ == null) return $;
      const et = typeof $ == 'string' && !$.endsWith('deg');
      return typeof $ == 'number' || et ? `${$}deg` : $;
    },
    gradient: gradientTransform,
    blur: wrap('blur'),
    opacity: wrap('opacity'),
    brightness: wrap('brightness'),
    contrast: wrap('contrast'),
    dropShadow: wrap('drop-shadow'),
    grayscale: wrap('grayscale'),
    hueRotate: wrap('hue-rotate'),
    invert: wrap('invert'),
    saturate: wrap('saturate'),
    sepia: wrap('sepia'),
    bgImage($) {
      return $ == null || isCSSFunction($) || globalSet.has($) ? $ : `url(${$})`;
    },
    outline($) {
      const et = String($) === '0' || String($) === 'none';
      return $ !== null && et
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: $ };
    },
    flexDirection($) {
      var et;
      const { space: tt, divide: rt } = (et = flexDirectionTemplate[$]) != null ? et : {},
        nt = { flexDirection: $ };
      return tt && (nt[tt] = 1), rt && (nt[rt] = 1), nt;
    }
  },
  t = {
    borderWidths: toConfig('borderWidths'),
    borderStyles: toConfig('borderStyles'),
    colors: toConfig('colors'),
    borders: toConfig('borders'),
    radii: toConfig('radii', transformFunctions.px),
    space: toConfig('space', pipe$1(transformFunctions.vh, transformFunctions.px)),
    spaceT: toConfig('space', pipe$1(transformFunctions.vh, transformFunctions.px)),
    degreeT($) {
      return { property: $, transform: transformFunctions.degree };
    },
    prop($, et, tt) {
      return {
        property: $,
        scale: et,
        ...(et && { transform: createTransform({ scale: et, transform: tt }) })
      };
    },
    propT($, et) {
      return { property: $, transform: et };
    },
    sizes: toConfig('sizes', pipe$1(transformFunctions.vh, transformFunctions.px)),
    sizesT: toConfig('sizes', pipe$1(transformFunctions.vh, transformFunctions.fraction)),
    shadows: toConfig('shadows'),
    logical,
    blur: toConfig('blur', transformFunctions.blur)
  },
  background = {
    background: t.colors('background'),
    backgroundColor: t.colors('backgroundColor'),
    backgroundImage: t.propT('backgroundImage', transformFunctions.bgImage),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: transformFunctions.bgClip },
    bgSize: t.prop('backgroundSize'),
    bgPosition: t.prop('backgroundPosition'),
    bg: t.colors('background'),
    bgColor: t.colors('backgroundColor'),
    bgPos: t.prop('backgroundPosition'),
    bgRepeat: t.prop('backgroundRepeat'),
    bgAttachment: t.prop('backgroundAttachment'),
    bgGradient: t.propT('backgroundImage', transformFunctions.gradient),
    bgClip: { transform: transformFunctions.bgClip }
  };
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t.borders('border'),
  borderWidth: t.borderWidths('borderWidth'),
  borderStyle: t.borderStyles('borderStyle'),
  borderColor: t.colors('borderColor'),
  borderRadius: t.radii('borderRadius'),
  borderTop: t.borders('borderTop'),
  borderBlockStart: t.borders('borderBlockStart'),
  borderTopLeftRadius: t.radii('borderTopLeftRadius'),
  borderStartStartRadius: t.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' }
  }),
  borderEndStartRadius: t.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' }
  }),
  borderTopRightRadius: t.radii('borderTopRightRadius'),
  borderStartEndRadius: t.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' }
  }),
  borderEndEndRadius: t.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' }
  }),
  borderRight: t.borders('borderRight'),
  borderInlineEnd: t.borders('borderInlineEnd'),
  borderBottom: t.borders('borderBottom'),
  borderBlockEnd: t.borders('borderBlockEnd'),
  borderBottomLeftRadius: t.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: t.radii('borderBottomRightRadius'),
  borderLeft: t.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius']
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius']
    }
  }),
  borderX: t.borders(['borderLeft', 'borderRight']),
  borderInline: t.borders('borderInline'),
  borderY: t.borders(['borderTop', 'borderBottom']),
  borderBlock: t.borders('borderBlock'),
  borderTopWidth: t.borderWidths('borderTopWidth'),
  borderBlockStartWidth: t.borderWidths('borderBlockStartWidth'),
  borderTopColor: t.colors('borderTopColor'),
  borderBlockStartColor: t.colors('borderBlockStartColor'),
  borderTopStyle: t.borderStyles('borderTopStyle'),
  borderBlockStartStyle: t.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: t.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: t.borderWidths('borderBlockEndWidth'),
  borderBottomColor: t.colors('borderBottomColor'),
  borderBlockEndColor: t.colors('borderBlockEndColor'),
  borderBottomStyle: t.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: t.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: t.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: t.borderWidths('borderInlineStartWidth'),
  borderLeftColor: t.colors('borderLeftColor'),
  borderInlineStartColor: t.colors('borderInlineStartColor'),
  borderLeftStyle: t.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: t.borderStyles('borderInlineStartStyle'),
  borderRightWidth: t.borderWidths('borderRightWidth'),
  borderInlineEndWidth: t.borderWidths('borderInlineEndWidth'),
  borderRightColor: t.colors('borderRightColor'),
  borderInlineEndColor: t.colors('borderInlineEndColor'),
  borderRightStyle: t.borderStyles('borderRightStyle'),
  borderInlineEndStyle: t.borderStyles('borderInlineEndStyle'),
  borderTopRadius: t.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: t.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
  borderLeftRadius: t.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: t.radii(['borderTopRightRadius', 'borderBottomRightRadius'])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color$1 = {
    color: t.colors('color'),
    textColor: t.colors('color'),
    fill: t.colors('fill'),
    stroke: t.colors('stroke')
  },
  effect = {
    boxShadow: t.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: t.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: t.prop('backgroundBlendMode'),
    opacity: !0
  };
Object.assign(effect, { shadow: effect.boxShadow });
var filter$1 = {
    filter: { transform: transformFunctions.filter },
    blur: t.blur('--chakra-blur'),
    brightness: t.propT('--chakra-brightness', transformFunctions.brightness),
    contrast: t.propT('--chakra-contrast', transformFunctions.contrast),
    hueRotate: t.degreeT('--chakra-hue-rotate'),
    invert: t.propT('--chakra-invert', transformFunctions.invert),
    saturate: t.propT('--chakra-saturate', transformFunctions.saturate),
    dropShadow: t.propT('--chakra-drop-shadow', transformFunctions.dropShadow),
    backdropFilter: { transform: transformFunctions.backdropFilter },
    backdropBlur: t.blur('--chakra-backdrop-blur'),
    backdropBrightness: t.propT('--chakra-backdrop-brightness', transformFunctions.brightness),
    backdropContrast: t.propT('--chakra-backdrop-contrast', transformFunctions.contrast),
    backdropHueRotate: t.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: t.propT('--chakra-backdrop-invert', transformFunctions.invert),
    backdropSaturate: t.propT('--chakra-backdrop-saturate', transformFunctions.saturate)
  },
  flexbox = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: transformFunctions.flexDirection },
    experimental_spaceX: {
      static: spaceXTemplate,
      transform: createTransform({
        scale: 'space',
        transform: ($) => ($ !== null ? { '--chakra-space-x': $ } : null)
      })
    },
    experimental_spaceY: {
      static: spaceYTemplate,
      transform: createTransform({
        scale: 'space',
        transform: ($) => ($ != null ? { '--chakra-space-y': $ } : null)
      })
    },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: t.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: t.space('gap'),
    rowGap: t.space('rowGap'),
    columnGap: t.space('columnGap')
  };
Object.assign(flexbox, { flexDir: flexbox.flexDirection });
var grid = {
    gridGap: t.space('gridGap'),
    gridColumnGap: t.space('gridColumnGap'),
    gridRowGap: t.space('gridRowGap'),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0
  },
  interactivity = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: transformFunctions.outline },
    outlineOffset: !0,
    outlineColor: t.colors('outlineColor')
  },
  layout = {
    width: t.sizesT('width'),
    inlineSize: t.sizesT('inlineSize'),
    height: t.sizes('height'),
    blockSize: t.sizes('blockSize'),
    boxSize: t.sizes(['width', 'height']),
    minWidth: t.sizes('minWidth'),
    minInlineSize: t.sizes('minInlineSize'),
    minHeight: t.sizes('minHeight'),
    minBlockSize: t.sizes('minBlockSize'),
    maxWidth: t.sizes('maxWidth'),
    maxInlineSize: t.sizes('maxInlineSize'),
    maxHeight: t.sizes('maxHeight'),
    maxBlockSize: t.sizes('maxBlockSize'),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: t.propT('float', transformFunctions.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0
  };
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: t.prop('listStylePosition'),
  listStyleImage: !0,
  listStyleImg: t.prop('listStyleImage')
};
function get$1($, et, tt, rt) {
  const nt = typeof et == 'string' ? et.split('.') : [et];
  for (rt = 0; rt < nt.length && $; rt += 1) $ = $[nt[rt]];
  return $ === void 0 ? tt : $;
}
var memoize$1 = ($) => {
    const et = new WeakMap();
    return (rt, nt, ot, it) => {
      if (typeof rt > 'u') return $(rt, nt, ot);
      et.has(rt) || et.set(rt, new Map());
      const at = et.get(rt);
      if (at.has(nt)) return at.get(nt);
      const st = $(rt, nt, ot, it);
      return at.set(nt, st), st;
    };
  },
  memoizedGet$1 = memoize$1(get$1),
  srOnly = {
    border: '0px',
    clip: 'rect(0, 0, 0, 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute'
  },
  srFocusable = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal'
  },
  getWithPriority = ($, et, tt) => {
    const rt = {},
      nt = memoizedGet$1($, et, {});
    for (const ot in nt) (ot in tt && tt[ot] != null) || (rt[ot] = nt[ot]);
    return rt;
  },
  others = {
    srOnly: {
      transform($) {
        return $ === !0 ? srOnly : $ === 'focusable' ? srFocusable : {};
      }
    },
    layerStyle: {
      processResult: !0,
      transform: ($, et, tt) => getWithPriority(et, `layerStyles.${$}`, tt)
    },
    textStyle: {
      processResult: !0,
      transform: ($, et, tt) => getWithPriority(et, `textStyles.${$}`, tt)
    },
    apply: { processResult: !0, transform: ($, et, tt) => getWithPriority(et, $, tt) }
  },
  position = {
    position: !0,
    pos: t.prop('position'),
    zIndex: t.prop('zIndex', 'zIndices'),
    inset: t.spaceT('inset'),
    insetX: t.spaceT(['left', 'right']),
    insetInline: t.spaceT('insetInline'),
    insetY: t.spaceT(['top', 'bottom']),
    insetBlock: t.spaceT('insetBlock'),
    top: t.spaceT('top'),
    insetBlockStart: t.spaceT('insetBlockStart'),
    bottom: t.spaceT('bottom'),
    insetBlockEnd: t.spaceT('insetBlockEnd'),
    left: t.spaceT('left'),
    insetInlineStart: t.logical({ scale: 'space', property: { ltr: 'left', rtl: 'right' } }),
    right: t.spaceT('right'),
    insetInlineEnd: t.logical({ scale: 'space', property: { ltr: 'right', rtl: 'left' } })
  };
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var ring = {
    ring: { transform: transformFunctions.ring },
    ringColor: t.colors('--chakra-ring-color'),
    ringOffset: t.prop('--chakra-ring-offset-width'),
    ringOffsetColor: t.colors('--chakra-ring-offset-color'),
    ringInset: t.prop('--chakra-ring-inset')
  },
  space = {
    margin: t.spaceT('margin'),
    marginTop: t.spaceT('marginTop'),
    marginBlockStart: t.spaceT('marginBlockStart'),
    marginRight: t.spaceT('marginRight'),
    marginInlineEnd: t.spaceT('marginInlineEnd'),
    marginBottom: t.spaceT('marginBottom'),
    marginBlockEnd: t.spaceT('marginBlockEnd'),
    marginLeft: t.spaceT('marginLeft'),
    marginInlineStart: t.spaceT('marginInlineStart'),
    marginX: t.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: t.spaceT('marginInline'),
    marginY: t.spaceT(['marginTop', 'marginBottom']),
    marginBlock: t.spaceT('marginBlock'),
    padding: t.space('padding'),
    paddingTop: t.space('paddingTop'),
    paddingBlockStart: t.space('paddingBlockStart'),
    paddingRight: t.space('paddingRight'),
    paddingBottom: t.space('paddingBottom'),
    paddingBlockEnd: t.space('paddingBlockEnd'),
    paddingLeft: t.space('paddingLeft'),
    paddingInlineStart: t.space('paddingInlineStart'),
    paddingInlineEnd: t.space('paddingInlineEnd'),
    paddingX: t.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: t.space('paddingInline'),
    paddingY: t.space(['paddingTop', 'paddingBottom']),
    paddingBlock: t.space('paddingBlock')
  };
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
    textDecorationColor: t.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: t.shadows('textShadow')
  },
  transform = {
    clipPath: !0,
    transform: t.propT('transform', transformFunctions.transform),
    transformOrigin: !0,
    translateX: t.spaceT('--chakra-translate-x'),
    translateY: t.spaceT('--chakra-translate-y'),
    skewX: t.degreeT('--chakra-skew-x'),
    skewY: t.degreeT('--chakra-skew-y'),
    scaleX: t.prop('--chakra-scale-x'),
    scaleY: t.prop('--chakra-scale-y'),
    scale: t.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: t.degreeT('--chakra-rotate')
  },
  transition$1 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: t.prop('transitionDuration', 'transition.duration'),
    transitionProperty: t.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: t.prop('transitionTimingFunction', 'transition.easing')
  },
  typography$1 = {
    fontFamily: t.prop('fontFamily', 'fonts'),
    fontSize: t.prop('fontSize', 'fontSizes', transformFunctions.px),
    fontWeight: t.prop('fontWeight', 'fontWeights'),
    lineHeight: t.prop('lineHeight', 'lineHeights'),
    letterSpacing: t.prop('letterSpacing', 'letterSpacings'),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform($) {
        if ($ === !0) return { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };
      }
    },
    noOfLines: {
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--chakra-line-clamp)'
      },
      property: '--chakra-line-clamp'
    }
  },
  scroll = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: t.spaceT('scrollMargin'),
    scrollMarginTop: t.spaceT('scrollMarginTop'),
    scrollMarginBottom: t.spaceT('scrollMarginBottom'),
    scrollMarginLeft: t.spaceT('scrollMarginLeft'),
    scrollMarginRight: t.spaceT('scrollMarginRight'),
    scrollMarginX: t.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
    scrollMarginY: t.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
    scrollPadding: t.spaceT('scrollPadding'),
    scrollPaddingTop: t.spaceT('scrollPaddingTop'),
    scrollPaddingBottom: t.spaceT('scrollPaddingBottom'),
    scrollPaddingLeft: t.spaceT('scrollPaddingLeft'),
    scrollPaddingRight: t.spaceT('scrollPaddingRight'),
    scrollPaddingX: t.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
    scrollPaddingY: t.spaceT(['scrollPaddingTop', 'scrollPaddingBottom'])
  };
function resolveReference($) {
  return isObject$1($) && $.reference ? $.reference : String($);
}
var toExpression = ($, ...et) => et.map(resolveReference).join(` ${$} `).replace(/calc/g, ''),
  add$1 = (...$) => `calc(${toExpression('+', ...$)})`,
  subtract$1 = (...$) => `calc(${toExpression('-', ...$)})`,
  multiply$1 = (...$) => `calc(${toExpression('*', ...$)})`,
  divide$1 = (...$) => `calc(${toExpression('/', ...$)})`,
  negate$1 = ($) => {
    const et = resolveReference($);
    return et != null && !Number.isNaN(parseFloat(et))
      ? String(et).startsWith('-')
        ? String(et).slice(1)
        : `-${et}`
      : multiply$1(et, -1);
  },
  calc$1 = Object.assign(
    ($) => ({
      add: (...et) => calc$1(add$1($, ...et)),
      subtract: (...et) => calc$1(subtract$1($, ...et)),
      multiply: (...et) => calc$1(multiply$1($, ...et)),
      divide: (...et) => calc$1(divide$1($, ...et)),
      negate: () => calc$1(negate$1($)),
      toString: () => $.toString()
    }),
    { add: add$1, subtract: subtract$1, multiply: multiply$1, divide: divide$1, negate: negate$1 }
  );
function replaceWhiteSpace$1($, et = '-') {
  return $.replace(/\s+/g, et);
}
function escape$1($) {
  const et = replaceWhiteSpace$1($.toString());
  return escapeSymbol(escapeDot(et));
}
function escapeDot($) {
  return $.includes('\\.')
    ? $
    : !Number.isInteger(parseFloat($.toString()))
    ? $.replace('.', '\\.')
    : $;
}
function escapeSymbol($) {
  return $.replace(/[!-,/:-@[-^`{-~]/g, '\\$&');
}
function addPrefix$1($, et = '') {
  return [et, $].filter(Boolean).join('-');
}
function toVarReference($, et) {
  return `var(${$}${et ? `, ${et}` : ''})`;
}
function toVarDefinition($, et = '') {
  return escape$1(`--${addPrefix$1($, et)}`);
}
function cssVar$1($, et, tt) {
  const rt = toVarDefinition($, tt);
  return { variable: rt, reference: toVarReference(rt, et) };
}
function getLastItem($) {
  const et = $ == null ? 0 : $.length;
  return et ? $[et - 1] : void 0;
}
function analyzeCSSValue2($) {
  const et = parseFloat($.toString()),
    tt = $.toString().replace(String(et), '');
  return { unitless: !tt, value: et, unit: tt };
}
function px$1($) {
  if ($ == null) return $;
  const { unitless: et } = analyzeCSSValue2($);
  return et || typeof $ == 'number' ? `${$}px` : $;
}
var sortByBreakpointValue = ($, et) => (parseInt($[1], 10) > parseInt(et[1], 10) ? 1 : -1),
  sortBps = ($) => Object.fromEntries(Object.entries($).sort(sortByBreakpointValue));
function normalize($) {
  const et = sortBps($);
  return Object.assign(Object.values(et), et);
}
function keys($) {
  const et = Object.keys(sortBps($));
  return new Set(et);
}
var OFFSET = 0.02;
function subtract2($) {
  var et;
  if (!$) return $;
  $ = (et = px$1($)) != null ? et : $;
  const tt = $.endsWith('px') ? -OFFSET : -(OFFSET / 16);
  return typeof $ == 'number'
    ? `${$ + tt}`
    : $.replace(/(\d+\.?\d*)/u, (rt) => `${parseFloat(rt) + tt}`);
}
function toMediaQueryString($, et) {
  const tt = ['@media screen'];
  return (
    $ && tt.push('and', `(min-width: ${px$1($)})`),
    et && tt.push('and', `(max-width: ${px$1(et)})`),
    tt.join(' ')
  );
}
function analyzeBreakpoints($) {
  var et;
  if (!$) return null;
  $.base = (et = $.base) != null ? et : '0px';
  const tt = normalize($),
    rt = Object.entries($)
      .sort(sortByBreakpointValue)
      .map(([it, at], st, lt) => {
        var ut;
        let [, ct] = (ut = lt[st + 1]) != null ? ut : [];
        return (
          (ct = parseFloat(ct) > 0 ? subtract2(ct) : void 0),
          {
            _minW: subtract2(at),
            breakpoint: it,
            minW: at,
            maxW: ct,
            maxWQuery: toMediaQueryString(null, ct),
            minWQuery: toMediaQueryString(at),
            minMaxQuery: toMediaQueryString(at, ct)
          }
        );
      }),
    nt = keys($),
    ot = Array.from(nt.values());
  return {
    keys: nt,
    normalized: tt,
    isResponsive(it) {
      const at = Object.keys(it);
      return at.length > 0 && at.every((st) => nt.has(st));
    },
    asObject: sortBps($),
    asArray: normalize($),
    details: rt,
    media: [null, ...tt.map((it) => toMediaQueryString(it)).slice(1)],
    toArrayValue(it) {
      if (!isObject$1(it)) throw new Error('toArrayValue: value must be an object');
      const at = ot.map((st) => {
        var lt;
        return (lt = it[st]) != null ? lt : null;
      });
      for (; getLastItem(at) === null; ) at.pop();
      return at;
    },
    toObjectValue(it) {
      if (!Array.isArray(it)) throw new Error('toObjectValue: value must be an array');
      return it.reduce((at, st, lt) => {
        const ut = ot[lt];
        return ut != null && st != null && (at[ut] = st), at;
      }, {});
    }
  };
}
var state = {
    hover: ($, et) => `${$}:hover ${et}, ${$}[data-hover] ${et}`,
    focus: ($, et) => `${$}:focus ${et}, ${$}[data-focus] ${et}`,
    focusVisible: ($, et) => `${$}:focus-visible ${et}`,
    focusWithin: ($, et) => `${$}:focus-within ${et}`,
    active: ($, et) => `${$}:active ${et}, ${$}[data-active] ${et}`,
    disabled: ($, et) => `${$}:disabled ${et}, ${$}[data-disabled] ${et}`,
    invalid: ($, et) => `${$}:invalid ${et}, ${$}[data-invalid] ${et}`,
    checked: ($, et) => `${$}:checked ${et}, ${$}[data-checked] ${et}`,
    indeterminate: ($, et) =>
      `${$}:indeterminate ${et}, ${$}[aria-checked=mixed] ${et}, ${$}[data-indeterminate] ${et}`,
    readOnly: ($, et) => `${$}:read-only ${et}, ${$}[readonly] ${et}, ${$}[data-read-only] ${et}`,
    expanded: ($, et) =>
      `${$}:read-only ${et}, ${$}[aria-expanded=true] ${et}, ${$}[data-expanded] ${et}`,
    placeholderShown: ($, et) => `${$}:placeholder-shown ${et}`
  },
  toGroup = ($) => merge$1((et) => $(et, '&'), '[role=group]', '[data-group]', '.group'),
  toPeer = ($) => merge$1((et) => $(et, '~ &'), '[data-peer]', '.peer'),
  merge$1 = ($, ...et) => et.map($).join(', '),
  pseudoSelectors = {
    _hover: '&:hover, &[data-hover]',
    _active: '&:active, &[data-active]',
    _focus: '&:focus, &[data-focus]',
    _highlighted: '&[data-highlighted]',
    _focusWithin: '&:focus-within',
    _focusVisible: '&:focus-visible, &[data-focus-visible]',
    _disabled: '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
    _before: '&::before',
    _after: '&::after',
    _empty: '&:empty',
    _expanded: '&[aria-expanded=true], &[data-expanded]',
    _checked: '&[aria-checked=true], &[data-checked]',
    _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
    _pressed: '&[aria-pressed=true], &[data-pressed]',
    _invalid: '&[aria-invalid=true], &[data-invalid]',
    _valid: '&[data-valid], &[data-state=valid]',
    _loading: '&[data-loading], &[aria-busy=true]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _autofill: '&:-webkit-autofill',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _visited: '&:visited',
    _activeLink: '&[aria-current=page]',
    _activeStep: '&[aria-current=step]',
    _indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
    _groupHover: toGroup(state.hover),
    _peerHover: toPeer(state.hover),
    _groupFocus: toGroup(state.focus),
    _peerFocus: toPeer(state.focus),
    _groupFocusVisible: toGroup(state.focusVisible),
    _peerFocusVisible: toPeer(state.focusVisible),
    _groupActive: toGroup(state.active),
    _peerActive: toPeer(state.active),
    _groupDisabled: toGroup(state.disabled),
    _peerDisabled: toPeer(state.disabled),
    _groupInvalid: toGroup(state.invalid),
    _peerInvalid: toPeer(state.invalid),
    _groupChecked: toGroup(state.checked),
    _peerChecked: toPeer(state.checked),
    _groupFocusWithin: toGroup(state.focusWithin),
    _peerFocusWithin: toPeer(state.focusWithin),
    _peerPlaceholderShown: toPeer(state.placeholderShown),
    _placeholder: '&::placeholder',
    _placeholderShown: '&:placeholder-shown',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &, &[dir=rtl]',
    _ltr: '[dir=ltr] &, &[dir=ltr]',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
    _dark:
      '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
    _light:
      '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]'
  },
  pseudoPropNames = Object.keys(pseudoSelectors);
function tokenToCssVar($, et) {
  return cssVar$1(String($).replace(/\./g, '-'), void 0, et);
}
function createThemeVars($, et) {
  let tt = {};
  const rt = {};
  for (const [nt, ot] of Object.entries($)) {
    const { isSemantic: it, value: at } = ot,
      { variable: st, reference: lt } = tokenToCssVar(nt, et == null ? void 0 : et.cssVarPrefix);
    if (!it) {
      if (nt.startsWith('space')) {
        const dt = nt.split('.'),
          [ft, ...pt] = dt,
          gt = `${ft}.-${pt.join('.')}`,
          bt = calc$1.negate(at),
          ht = calc$1.negate(lt);
        rt[gt] = { value: bt, var: st, varRef: ht };
      }
      (tt[st] = at), (rt[nt] = { value: at, var: st, varRef: lt });
      continue;
    }
    const ut = (dt) => {
        const pt = [String(nt).split('.')[0], dt].join('.');
        if (!$[pt]) return dt;
        const { reference: bt } = tokenToCssVar(pt, et == null ? void 0 : et.cssVarPrefix);
        return bt;
      },
      ct = isObject$1(at) ? at : { default: at };
    (tt = mergeWith(
      tt,
      Object.entries(ct).reduce((dt, [ft, pt]) => {
        var gt, bt;
        const ht = ut(pt);
        if (ft === 'default') return (dt[st] = ht), dt;
        const mt = (bt = (gt = pseudoSelectors) == null ? void 0 : gt[ft]) != null ? bt : ft;
        return (dt[mt] = { [st]: ht }), dt;
      }, {})
    )),
      (rt[nt] = { value: lt, var: st, varRef: lt });
  }
  return { cssVars: tt, cssMap: rt };
}
function omit$1($, et = []) {
  const tt = Object.assign({}, $);
  for (const rt of et) rt in tt && delete tt[rt];
  return tt;
}
function pick($, et) {
  const tt = {};
  for (const rt of et) rt in $ && (tt[rt] = $[rt]);
  return tt;
}
var tokens = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur'
];
function extractTokens($) {
  return pick($, tokens);
}
function extractSemanticTokens($) {
  return $.semanticTokens;
}
function omitVars($) {
  const { __cssMap: et, __cssVars: tt, __breakpoints: rt, ...nt } = $;
  return nt;
}
function flattenTokens({ tokens: $, semanticTokens: et }) {
  var tt, rt;
  const nt = Object.entries((tt = flatten($)) != null ? tt : {}).map(([it, at]) => [
      it,
      { isSemantic: !1, value: at }
    ]),
    ot = Object.entries((rt = flatten(et, 1)) != null ? rt : {}).map(([it, at]) => [
      it,
      { isSemantic: !0, value: at }
    ]);
  return Object.fromEntries([...nt, ...ot]);
}
function flatten($, et = 1 / 0) {
  return (!isObject$1($) && !Array.isArray($)) || !et
    ? $
    : Object.entries($).reduce(
        (tt, [rt, nt]) => (
          isObject$1(nt) || Array.isArray(nt)
            ? Object.entries(flatten(nt, et - 1)).forEach(([ot, it]) => {
                tt[`${rt}.${ot}`] = it;
              })
            : (tt[rt] = nt),
          tt
        ),
        {}
      );
}
function toCSSVar($) {
  var et;
  const tt = omitVars($),
    rt = extractTokens(tt),
    nt = extractSemanticTokens(tt),
    ot = flattenTokens({ tokens: rt, semanticTokens: nt }),
    it = (et = tt.config) == null ? void 0 : et.cssVarPrefix,
    { cssMap: at, cssVars: st } = createThemeVars(ot, { cssVarPrefix: it });
  return (
    Object.assign(tt, {
      __cssVars: {
        ...{
          '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-ring-offset-width': '0px',
          '--chakra-ring-offset-color': '#fff',
          '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
          '--chakra-ring-offset-shadow': '0 0 #0000',
          '--chakra-ring-shadow': '0 0 #0000',
          '--chakra-space-x-reverse': '0',
          '--chakra-space-y-reverse': '0'
        },
        ...st
      },
      __cssMap: at,
      __breakpoints: analyzeBreakpoints(tt.breakpoints)
    }),
    tt
  );
}
var systemProps = mergeWith(
  {},
  background,
  border,
  color$1,
  flexbox,
  layout,
  filter$1,
  ring,
  interactivity,
  grid,
  others,
  position,
  effect,
  space,
  scroll,
  typography$1,
  textDecoration,
  transform,
  list,
  transition$1
);
Object.assign({}, space, layout, flexbox, grid, position);
var propNames = [...Object.keys(systemProps), ...pseudoPropNames],
  styleProps = { ...systemProps, ...pseudoSelectors },
  isStyleProp = ($) => $ in styleProps,
  expandResponsive = ($) => (et) => {
    if (!et.__breakpoints) return $;
    const { isResponsive: tt, toArrayValue: rt, media: nt } = et.__breakpoints,
      ot = {};
    for (const it in $) {
      let at = runIfFn$2($[it], et);
      if (at == null) continue;
      if (((at = isObject$1(at) && tt(at) ? rt(at) : at), !Array.isArray(at))) {
        ot[it] = at;
        continue;
      }
      const st = at.slice(0, nt.length).length;
      for (let lt = 0; lt < st; lt += 1) {
        const ut = nt == null ? void 0 : nt[lt];
        if (!ut) {
          ot[it] = at[lt];
          continue;
        }
        (ot[ut] = ot[ut] || {}), at[lt] != null && (ot[ut][it] = at[lt]);
      }
    }
    return ot;
  };
function splitByComma($) {
  const et = [];
  let tt = '',
    rt = !1;
  for (let nt = 0; nt < $.length; nt++) {
    const ot = $[nt];
    ot === '('
      ? ((rt = !0), (tt += ot))
      : ot === ')'
      ? ((rt = !1), (tt += ot))
      : ot === ',' && !rt
      ? (et.push(tt), (tt = ''))
      : (tt += ot);
  }
  return (tt = tt.trim()), tt && et.push(tt), et;
}
function isCssVar2($) {
  return /^var\(--.+\)$/.test($);
}
var isCSSVariableTokenValue = ($, et) =>
    $.startsWith('--') && typeof et == 'string' && !isCssVar2(et),
  resolveTokenValue = ($, et) => {
    var tt, rt;
    if (et == null) return et;
    const nt = (st) => {
        var lt, ut;
        return (ut = (lt = $.__cssMap) == null ? void 0 : lt[st]) == null ? void 0 : ut.varRef;
      },
      ot = (st) => {
        var lt;
        return (lt = nt(st)) != null ? lt : st;
      },
      [it, at] = splitByComma(et);
    return (et = (rt = (tt = nt(it)) != null ? tt : ot(at)) != null ? rt : ot(et)), et;
  };
function getCss($) {
  const { configs: et = {}, pseudos: tt = {}, theme: rt } = $,
    nt = (ot, it = !1) => {
      var at, st, lt;
      const ut = runIfFn$2(ot, rt),
        ct = expandResponsive(ut)(rt);
      let dt = {};
      for (let ft in ct) {
        const pt = ct[ft];
        let gt = runIfFn$2(pt, rt);
        ft in tt && (ft = tt[ft]),
          isCSSVariableTokenValue(ft, gt) && (gt = resolveTokenValue(rt, gt));
        let bt = et[ft];
        if ((bt === !0 && (bt = { property: ft }), isObject$1(gt))) {
          (dt[ft] = (at = dt[ft]) != null ? at : {}), (dt[ft] = mergeWith({}, dt[ft], nt(gt, !0)));
          continue;
        }
        let ht =
          (lt =
            (st = bt == null ? void 0 : bt.transform) == null ? void 0 : st.call(bt, gt, rt, ut)) !=
          null
            ? lt
            : gt;
        ht = bt != null && bt.processResult ? nt(ht, !0) : ht;
        const mt = runIfFn$2(bt == null ? void 0 : bt.property, rt);
        if (!it && bt != null && bt.static) {
          const yt = runIfFn$2(bt.static, rt);
          dt = mergeWith({}, dt, yt);
        }
        if (mt && Array.isArray(mt)) {
          for (const yt of mt) dt[yt] = ht;
          continue;
        }
        if (mt) {
          mt === '&' && isObject$1(ht) ? (dt = mergeWith({}, dt, ht)) : (dt[mt] = ht);
          continue;
        }
        if (isObject$1(ht)) {
          dt = mergeWith({}, dt, ht);
          continue;
        }
        dt[ft] = ht;
      }
      return dt;
    };
  return nt;
}
var css = ($) => (et) => getCss({ theme: et, pseudos: pseudoSelectors, configs: systemProps })($);
function defineStyle($) {
  return $;
}
function defineStyleConfig($) {
  return $;
}
function createMultiStyleConfigHelpers($) {
  return {
    definePartsStyle(et) {
      return et;
    },
    defineMultiStyleConfig(et) {
      return { parts: $, ...et };
    }
  };
}
function normalize2($, et) {
  if (Array.isArray($)) return $;
  if (isObject$1($)) return et($);
  if ($ != null) return [$];
}
function getNextIndex($, et) {
  for (let tt = et + 1; tt < $.length; tt++) if ($[tt] != null) return tt;
  return -1;
}
function createResolver($) {
  const et = $.__breakpoints;
  return function (rt, nt, ot, it) {
    var at, st;
    if (!et) return;
    const lt = {},
      ut = normalize2(ot, et.toArrayValue);
    if (!ut) return lt;
    const ct = ut.length,
      dt = ct === 1,
      ft = !!rt.parts;
    for (let pt = 0; pt < ct; pt++) {
      const gt = et.details[pt],
        bt = et.details[getNextIndex(ut, pt)],
        ht = toMediaQueryString(gt.minW, bt == null ? void 0 : bt._minW),
        mt = runIfFn$2((at = rt[nt]) == null ? void 0 : at[ut[pt]], it);
      if (mt) {
        if (ft) {
          (st = rt.parts) == null ||
            st.forEach((yt) => {
              mergeWith(lt, { [yt]: dt ? mt[yt] : { [ht]: mt[yt] } });
            });
          continue;
        }
        if (!ft) {
          dt ? mergeWith(lt, mt) : (lt[ht] = mt);
          continue;
        }
        lt[ht] = mt;
      }
    }
    return lt;
  };
}
function resolveStyleConfig($) {
  return (et) => {
    var tt;
    const { variant: rt, size: nt, theme: ot } = et,
      it = createResolver(ot);
    return mergeWith(
      {},
      runIfFn$2((tt = $.baseStyle) != null ? tt : {}, et),
      it($, 'sizes', nt, et),
      it($, 'variants', rt, et)
    );
  };
}
function omitThemingProps($) {
  return omit$1($, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
var zIndices = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },
  z_index_default = zIndices,
  breakpoints = { base: '0em', sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' },
  breakpoints_default = breakpoints,
  colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)'
    },
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)'
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923'
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B'
    },
    orange: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19'
    },
    yellow: {
      50: '#FFFFF0',
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
      700: '#975A16',
      800: '#744210',
      900: '#5F370E'
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532'
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044'
    },
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D'
    },
    cyan: {
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666'
    },
    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
      800: '#44337A',
      900: '#322659'
    },
    pink: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41'
    },
    linkedin: {
      50: '#E8F4F9',
      100: '#CFEDFB',
      200: '#9BDAF3',
      300: '#68C7EC',
      400: '#34B3E4',
      500: '#00A0DC',
      600: '#008CC9',
      700: '#0077B5',
      800: '#005E93',
      900: '#004471'
    },
    facebook: {
      50: '#E8F4F9',
      100: '#D9DEE9',
      200: '#B7C2DA',
      300: '#6482C0',
      400: '#4267B2',
      500: '#385898',
      600: '#314E89',
      700: '#29487D',
      800: '#223B67',
      900: '#1E355B'
    },
    messenger: {
      50: '#D0E6FF',
      100: '#B9DAFF',
      200: '#A2CDFF',
      300: '#7AB8FF',
      400: '#2E90FF',
      500: '#0078FF',
      600: '#0063D1',
      700: '#0052AC',
      800: '#003C7E',
      900: '#002C5C'
    },
    whatsapp: {
      50: '#dffeec',
      100: '#b9f5d0',
      200: '#90edb3',
      300: '#65e495',
      400: '#3cdd78',
      500: '#22c35e',
      600: '#179848',
      700: '#0c6c33',
      800: '#01421c',
      900: '#001803'
    },
    twitter: {
      50: '#E5F4FD',
      100: '#C8E9FB',
      200: '#A8DCFA',
      300: '#83CDF7',
      400: '#57BBF5',
      500: '#1DA1F2',
      600: '#1A94DA',
      700: '#1681BF',
      800: '#136B9E',
      900: '#0D4D71'
    },
    telegram: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E'
    }
  },
  colors_default = colors,
  radii = {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  radius_default = radii,
  shadows = {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px'
  },
  shadows_default = shadows,
  transitionProperty = {
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position'
  },
  transitionTimingFunction = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  transitionDuration = {
    'ultra-fast': '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    'ultra-slow': '500ms'
  },
  transition = {
    property: transitionProperty,
    easing: transitionTimingFunction,
    duration: transitionDuration
  },
  transition_default = transition,
  blur = {
    none: 0,
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px'
  },
  blur_default = blur,
  borders$1 = {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid'
  },
  borders_default = borders$1,
  typography = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem'
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
    },
    fontSizes: {
      '3xs': '0.45rem',
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    }
  },
  typography_default = typography,
  spacing = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  largeSizes = {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    prose: '60ch'
  },
  container = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  sizes$m = { ...spacing, ...largeSizes, container },
  sizes_default = sizes$m,
  foundations = {
    breakpoints: breakpoints_default,
    zIndices: z_index_default,
    radii: radius_default,
    blur: blur_default,
    colors: colors_default,
    ...typography_default,
    sizes: sizes_default,
    shadows: shadows_default,
    space: spacing,
    borders: borders_default,
    transition: transition_default
  };
function anatomy($, et = {}) {
  let tt = !1;
  function rt() {
    if (!tt) {
      tt = !0;
      return;
    }
    throw new Error(
      '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
    );
  }
  function nt(...ut) {
    rt();
    for (const ct of ut) et[ct] = st(ct);
    return anatomy($, et);
  }
  function ot(...ut) {
    for (const ct of ut) ct in et || (et[ct] = st(ct));
    return anatomy($, et);
  }
  function it() {
    return Object.fromEntries(Object.entries(et).map(([ct, dt]) => [ct, dt.selector]));
  }
  function at() {
    return Object.fromEntries(Object.entries(et).map(([ct, dt]) => [ct, dt.className]));
  }
  function st(ut) {
    const ft = `chakra-${(['container', 'root'].includes(ut ?? '') ? [$] : [$, ut])
      .filter(Boolean)
      .join('__')}`;
    return { className: ft, selector: `.${ft}`, toString: () => ut };
  }
  return {
    parts: nt,
    toPart: st,
    extend: ot,
    selectors: it,
    classnames: at,
    get keys() {
      return Object.keys(et);
    },
    __type: {}
  };
}
var accordionAnatomy = anatomy('accordion')
    .parts('root', 'container', 'button', 'panel')
    .extend('icon'),
  alertAnatomy = anatomy('alert')
    .parts('title', 'description', 'container')
    .extend('icon', 'spinner'),
  avatarAnatomy = anatomy('avatar')
    .parts('label', 'badge', 'container')
    .extend('excessLabel', 'group'),
  breadcrumbAnatomy = anatomy('breadcrumb').parts('link', 'item', 'container').extend('separator');
anatomy('button').parts();
var checkboxAnatomy = anatomy('checkbox').parts('control', 'icon', 'container').extend('label');
anatomy('progress').parts('track', 'filledTrack').extend('label');
var drawerAnatomy = anatomy('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  editableAnatomy = anatomy('editable').parts('preview', 'input', 'textarea'),
  formAnatomy = anatomy('form').parts('container', 'requiredIndicator', 'helperText'),
  formErrorAnatomy = anatomy('formError').parts('text', 'icon'),
  inputAnatomy = anatomy('input').parts('addon', 'field', 'element'),
  listAnatomy = anatomy('list').parts('container', 'item', 'icon'),
  menuAnatomy = anatomy('menu')
    .parts('button', 'list', 'item')
    .extend('groupTitle', 'command', 'divider'),
  modalAnatomy = anatomy('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  numberInputAnatomy = anatomy('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
anatomy('pininput').parts('field');
var popoverAnatomy = anatomy('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  progressAnatomy = anatomy('progress').parts('label', 'filledTrack', 'track'),
  radioAnatomy = anatomy('radio').parts('container', 'control', 'label'),
  selectAnatomy = anatomy('select').parts('field', 'icon'),
  sliderAnatomy = anatomy('slider').parts('container', 'track', 'thumb', 'filledTrack', 'mark'),
  statAnatomy = anatomy('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  switchAnatomy = anatomy('switch').parts('container', 'track', 'thumb'),
  tableAnatomy = anatomy('table').parts(
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'tfoot',
    'caption'
  ),
  tabsAnatomy = anatomy('tabs').parts(
    'root',
    'tab',
    'tablist',
    'tabpanel',
    'tabpanels',
    'indicator'
  ),
  tagAnatomy = anatomy('tag').parts('container', 'label', 'closeButton'),
  cardAnatomy = anatomy('card').parts('container', 'header', 'body', 'footer');
function guard($, et, tt) {
  return Math.min(Math.max($, tt), et);
}
class ColorError extends Error {
  constructor(et) {
    super(`Failed to parse color: "${et}"`);
  }
}
var ColorError$1 = ColorError;
function parseToRgba($) {
  if (typeof $ != 'string') throw new ColorError$1($);
  if ($.trim().toLowerCase() === 'transparent') return [0, 0, 0, 0];
  let et = $.trim();
  et = namedColorRegex.test($) ? nameToHex($) : $;
  const tt = reducedHexRegex.exec(et);
  if (tt) {
    const it = Array.from(tt).slice(1);
    return [
      ...it.slice(0, 3).map((at) => parseInt(r(at, 2), 16)),
      parseInt(r(it[3] || 'f', 2), 16) / 255
    ];
  }
  const rt = hexRegex.exec(et);
  if (rt) {
    const it = Array.from(rt).slice(1);
    return [...it.slice(0, 3).map((at) => parseInt(at, 16)), parseInt(it[3] || 'ff', 16) / 255];
  }
  const nt = rgbaRegex.exec(et);
  if (nt) {
    const it = Array.from(nt).slice(1);
    return [...it.slice(0, 3).map((at) => parseInt(at, 10)), parseFloat(it[3] || '1')];
  }
  const ot = hslaRegex.exec(et);
  if (ot) {
    const [it, at, st, lt] = Array.from(ot).slice(1).map(parseFloat);
    if (guard(0, 100, at) !== at) throw new ColorError$1($);
    if (guard(0, 100, st) !== st) throw new ColorError$1($);
    return [...hslToRgb(it, at, st), Number.isNaN(lt) ? 1 : lt];
  }
  throw new ColorError$1($);
}
function hash($) {
  let et = 5381,
    tt = $.length;
  for (; tt; ) et = (et * 33) ^ $.charCodeAt(--tt);
  return (et >>> 0) % 2341;
}
const colorToInt = ($) => parseInt($.replace(/_/g, ''), 36),
  compressedColorMap =
    '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
      .split(' ')
      .reduce(($, et) => {
        const tt = colorToInt(et.substring(0, 3)),
          rt = colorToInt(et.substring(3)).toString(16);
        let nt = '';
        for (let ot = 0; ot < 6 - rt.length; ot++) nt += '0';
        return ($[tt] = `${nt}${rt}`), $;
      }, {});
function nameToHex($) {
  const et = $.toLowerCase().trim(),
    tt = compressedColorMap[hash(et)];
  if (!tt) throw new ColorError$1($);
  return `#${tt}`;
}
const r = ($, et) =>
    Array.from(Array(et))
      .map(() => $)
      .join(''),
  reducedHexRegex = new RegExp(`^#${r('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
  hexRegex = new RegExp(`^#${r('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
  rgbaRegex = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${r(',\\s*(\\d+)\\s*', 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    'i'
  ),
  hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  namedColorRegex = /^[a-z]+$/i,
  roundColor = ($) => Math.round($ * 255),
  hslToRgb = ($, et, tt) => {
    let rt = tt / 100;
    if (et === 0) return [rt, rt, rt].map(roundColor);
    const nt = ((($ % 360) + 360) % 360) / 60,
      ot = (1 - Math.abs(2 * rt - 1)) * (et / 100),
      it = ot * (1 - Math.abs((nt % 2) - 1));
    let at = 0,
      st = 0,
      lt = 0;
    nt >= 0 && nt < 1
      ? ((at = ot), (st = it))
      : nt >= 1 && nt < 2
      ? ((at = it), (st = ot))
      : nt >= 2 && nt < 3
      ? ((st = ot), (lt = it))
      : nt >= 3 && nt < 4
      ? ((st = it), (lt = ot))
      : nt >= 4 && nt < 5
      ? ((at = it), (lt = ot))
      : nt >= 5 && nt < 6 && ((at = ot), (lt = it));
    const ut = rt - ot / 2,
      ct = at + ut,
      dt = st + ut,
      ft = lt + ut;
    return [ct, dt, ft].map(roundColor);
  };
function rgba$1($, et, tt, rt) {
  return `rgba(${guard(0, 255, $).toFixed()}, ${guard(0, 255, et).toFixed()}, ${guard(
    0,
    255,
    tt
  ).toFixed()}, ${parseFloat(guard(0, 1, rt).toFixed(3))})`;
}
function transparentize$1($, et) {
  const [tt, rt, nt, ot] = parseToRgba($);
  return rgba$1(tt, rt, nt, ot - et);
}
function toHex($) {
  const [et, tt, rt, nt] = parseToRgba($);
  let ot = (it) => {
    const at = guard(0, 255, it).toString(16);
    return at.length === 1 ? `0${at}` : at;
  };
  return `#${ot(et)}${ot(tt)}${ot(rt)}${nt < 1 ? ot(Math.round(nt * 255)) : ''}`;
}
function dlv_es_default($, et, tt, rt, nt) {
  for (et = et.split ? et.split('.') : et, rt = 0; rt < et.length; rt++) $ = $ ? $[et[rt]] : nt;
  return $ === nt ? tt : $;
}
var isEmptyObject = ($) => Object.keys($).length === 0,
  getColor = ($, et, tt) => {
    const rt = dlv_es_default($, `colors.${et}`, et);
    try {
      return toHex(rt), rt;
    } catch {
      return tt ?? '#000000';
    }
  },
  getBrightness = ($) => {
    const [et, tt, rt] = parseToRgba($);
    return (et * 299 + tt * 587 + rt * 114) / 1e3;
  },
  tone = ($) => (et) => {
    const tt = getColor(et, $);
    return getBrightness(tt) < 128 ? 'dark' : 'light';
  },
  isDark = ($) => (et) => tone($)(et) === 'dark',
  transparentize = ($, et) => (tt) => {
    const rt = getColor(tt, $);
    return transparentize$1(rt, 1 - et);
  };
function generateStripe($ = '1rem', et = 'rgba(255, 255, 255, 0.15)') {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${et} 25%,
    transparent 25%,
    transparent 50%,
    ${et} 50%,
    ${et} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${$} ${$}`
  };
}
var randomHex = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`;
function randomColor($) {
  const et = randomHex();
  return !$ || isEmptyObject($)
    ? et
    : $.string && $.colors
    ? randomColorFromList($.string, $.colors)
    : $.string && !$.colors
    ? randomColorFromString($.string)
    : $.colors && !$.string
    ? randomFromList($.colors)
    : et;
}
function randomColorFromString($) {
  let et = 0;
  if ($.length === 0) return et.toString();
  for (let rt = 0; rt < $.length; rt += 1)
    (et = $.charCodeAt(rt) + ((et << 5) - et)), (et = et & et);
  let tt = '#';
  for (let rt = 0; rt < 3; rt += 1) {
    const nt = (et >> (rt * 8)) & 255;
    tt += `00${nt.toString(16)}`.substr(-2);
  }
  return tt;
}
function randomColorFromList($, et) {
  let tt = 0;
  if ($.length === 0) return et[0];
  for (let rt = 0; rt < $.length; rt += 1)
    (tt = $.charCodeAt(rt) + ((tt << 5) - tt)), (tt = tt & tt);
  return (tt = ((tt % et.length) + et.length) % et.length), et[tt];
}
function randomFromList($) {
  return $[Math.floor(Math.random() * $.length)];
}
function mode($, et) {
  return (tt) => (tt.colorMode === 'dark' ? et : $);
}
function orient($) {
  const { orientation: et, vertical: tt, horizontal: rt } = $;
  return et ? (et === 'vertical' ? tt : rt) : {};
}
function toRef($) {
  return isObject$1($) && $.reference ? $.reference : String($);
}
var toExpr = ($, ...et) => et.map(toRef).join(` ${$} `).replace(/calc/g, ''),
  add = (...$) => `calc(${toExpr('+', ...$)})`,
  subtract = (...$) => `calc(${toExpr('-', ...$)})`,
  multiply = (...$) => `calc(${toExpr('*', ...$)})`,
  divide = (...$) => `calc(${toExpr('/', ...$)})`,
  negate = ($) => {
    const et = toRef($);
    return et != null && !Number.isNaN(parseFloat(et))
      ? String(et).startsWith('-')
        ? String(et).slice(1)
        : `-${et}`
      : multiply(et, -1);
  },
  calc = Object.assign(
    ($) => ({
      add: (...et) => calc(add($, ...et)),
      subtract: (...et) => calc(subtract($, ...et)),
      multiply: (...et) => calc(multiply($, ...et)),
      divide: (...et) => calc(divide($, ...et)),
      negate: () => calc(negate($)),
      toString: () => $.toString()
    }),
    { add, subtract, multiply, divide, negate }
  );
function isDecimal($) {
  return !Number.isInteger(parseFloat($.toString()));
}
function replaceWhiteSpace($, et = '-') {
  return $.replace(/\s+/g, et);
}
function escape($) {
  const et = replaceWhiteSpace($.toString());
  return et.includes('\\.') ? $ : isDecimal($) ? et.replace('.', '\\.') : $;
}
function addPrefix($, et = '') {
  return [et, escape($)].filter(Boolean).join('-');
}
function toVarRef($, et) {
  return `var(${escape($)}${et ? `, ${et}` : ''})`;
}
function toVar($, et = '') {
  return `--${addPrefix($, et)}`;
}
function cssVar($, et) {
  const tt = toVar($, et == null ? void 0 : et.prefix);
  return { variable: tt, reference: toVarRef(tt, getFallback(et == null ? void 0 : et.fallback)) };
}
function getFallback($) {
  return typeof $ == 'string' ? $ : $ == null ? void 0 : $.reference;
}
var { defineMultiStyleConfig: defineMultiStyleConfig$o, definePartsStyle: definePartsStyle$o } =
    createMultiStyleConfigHelpers(switchAnatomy.keys),
  $width = cssVar('switch-track-width'),
  $height = cssVar('switch-track-height'),
  $diff = cssVar('switch-track-diff'),
  diffValue = calc.subtract($width, $height),
  $translateX = cssVar('switch-thumb-x'),
  $bg$e = cssVar('switch-bg'),
  baseStyleTrack$2 = ($) => {
    const { colorScheme: et } = $;
    return {
      borderRadius: 'full',
      p: '0.5',
      width: [$width.reference],
      height: [$height.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      [$bg$e.variable]: 'colors.gray.300',
      _dark: { [$bg$e.variable]: 'colors.whiteAlpha.400' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: {
        [$bg$e.variable]: `colors.${et}.500`,
        _dark: { [$bg$e.variable]: `colors.${et}.200` }
      },
      bg: $bg$e.reference
    };
  },
  baseStyleThumb$1 = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [$height.reference],
    height: [$height.reference],
    _checked: { transform: `translateX(${$translateX.reference})` }
  },
  baseStyle$E = definePartsStyle$o(($) => ({
    container: {
      [$diff.variable]: diffValue,
      [$translateX.variable]: $diff.reference,
      _rtl: { [$translateX.variable]: calc($diff).negate().toString() }
    },
    track: baseStyleTrack$2($),
    thumb: baseStyleThumb$1
  })),
  sizes$l = {
    sm: definePartsStyle$o({
      container: { [$width.variable]: '1.375rem', [$height.variable]: 'sizes.3' }
    }),
    md: definePartsStyle$o({
      container: { [$width.variable]: '1.875rem', [$height.variable]: 'sizes.4' }
    }),
    lg: definePartsStyle$o({
      container: { [$width.variable]: '2.875rem', [$height.variable]: 'sizes.6' }
    })
  },
  switchTheme = defineMultiStyleConfig$o({
    baseStyle: baseStyle$E,
    sizes: sizes$l,
    defaultProps: { size: 'md', colorScheme: 'blue' }
  }),
  { defineMultiStyleConfig: defineMultiStyleConfig$n, definePartsStyle: definePartsStyle$n } =
    createMultiStyleConfigHelpers(tableAnatomy.keys),
  baseStyle$D = definePartsStyle$n({
    table: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full'
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      textAlign: 'start'
    },
    td: { textAlign: 'start' },
    caption: { mt: 4, fontFamily: 'heading', textAlign: 'center', fontWeight: 'medium' }
  }),
  numericStyles = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  variantSimple = definePartsStyle$n(($) => {
    const { colorScheme: et } = $;
    return {
      th: {
        color: mode('gray.600', 'gray.400')($),
        borderBottom: '1px',
        borderColor: mode(`${et}.100`, `${et}.700`)($),
        ...numericStyles
      },
      td: { borderBottom: '1px', borderColor: mode(`${et}.100`, `${et}.700`)($), ...numericStyles },
      caption: { color: mode('gray.600', 'gray.100')($) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } }
    };
  }),
  variantStripe = definePartsStyle$n(($) => {
    const { colorScheme: et } = $;
    return {
      th: {
        color: mode('gray.600', 'gray.400')($),
        borderBottom: '1px',
        borderColor: mode(`${et}.100`, `${et}.700`)($),
        ...numericStyles
      },
      td: { borderBottom: '1px', borderColor: mode(`${et}.100`, `${et}.700`)($), ...numericStyles },
      caption: { color: mode('gray.600', 'gray.100')($) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': { borderBottomWidth: '1px', borderColor: mode(`${et}.100`, `${et}.700`)($) },
            td: { background: mode(`${et}.100`, `${et}.700`)($) }
          }
        }
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } }
    };
  }),
  variants$b = { simple: variantSimple, striped: variantStripe, unstyled: {} },
  sizes$k = {
    sm: definePartsStyle$n({
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' }
    }),
    md: definePartsStyle$n({
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' }
    }),
    lg: definePartsStyle$n({
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' }
    })
  },
  tableTheme = defineMultiStyleConfig$n({
    baseStyle: baseStyle$D,
    variants: variants$b,
    sizes: sizes$k,
    defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' }
  }),
  $fg$6 = cssVar$1('tabs-color'),
  $bg$d = cssVar$1('tabs-bg'),
  $border$2 = cssVar$1('tabs-border-color'),
  { defineMultiStyleConfig: defineMultiStyleConfig$m, definePartsStyle: definePartsStyle$m } =
    createMultiStyleConfigHelpers(tabsAnatomy.keys),
  baseStyleRoot$1 = ($) => {
    const { orientation: et } = $;
    return { display: et === 'vertical' ? 'flex' : 'block' };
  },
  baseStyleTab = ($) => {
    const { isFitted: et } = $;
    return {
      flex: et ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 }
    };
  },
  baseStyleTablist = ($) => {
    const { align: et = 'start', orientation: tt } = $;
    return {
      justifyContent: { end: 'flex-end', center: 'center', start: 'flex-start' }[et],
      flexDirection: tt === 'vertical' ? 'column' : 'row'
    };
  },
  baseStyleTabpanel = { p: 4 },
  baseStyle$C = definePartsStyle$m(($) => ({
    root: baseStyleRoot$1($),
    tab: baseStyleTab($),
    tablist: baseStyleTablist($),
    tabpanel: baseStyleTabpanel
  })),
  sizes$j = {
    sm: definePartsStyle$m({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
    md: definePartsStyle$m({ tab: { fontSize: 'md', py: 2, px: 4 } }),
    lg: definePartsStyle$m({ tab: { fontSize: 'lg', py: 3, px: 4 } })
  },
  variantLine = definePartsStyle$m(($) => {
    const { colorScheme: et, orientation: tt } = $,
      rt = tt === 'vertical',
      nt = tt === 'vertical' ? 'borderStart' : 'borderBottom',
      ot = rt ? 'marginStart' : 'marginBottom';
    return {
      tablist: { [nt]: '2px solid', borderColor: 'inherit' },
      tab: {
        [nt]: '2px solid',
        borderColor: 'transparent',
        [ot]: '-2px',
        _selected: {
          [$fg$6.variable]: `colors.${et}.600`,
          _dark: { [$fg$6.variable]: `colors.${et}.300` },
          borderColor: 'currentColor'
        },
        _active: {
          [$bg$d.variable]: 'colors.gray.200',
          _dark: { [$bg$d.variable]: 'colors.whiteAlpha.300' }
        },
        _disabled: { _active: { bg: 'none' } },
        color: $fg$6.reference,
        bg: $bg$d.reference
      }
    };
  }),
  variantEnclosed = definePartsStyle$m(($) => {
    const { colorScheme: et } = $;
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        [$border$2.variable]: 'transparent',
        _selected: {
          [$fg$6.variable]: `colors.${et}.600`,
          [$border$2.variable]: 'colors.white',
          _dark: { [$fg$6.variable]: `colors.${et}.300`, [$border$2.variable]: 'colors.gray.800' },
          borderColor: 'inherit',
          borderBottomColor: $border$2.reference
        },
        color: $fg$6.reference
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' }
    };
  }),
  variantEnclosedColored = definePartsStyle$m(($) => {
    const { colorScheme: et } = $;
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        [$bg$d.variable]: 'colors.gray.50',
        _dark: { [$bg$d.variable]: 'colors.whiteAlpha.50' },
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          [$bg$d.variable]: 'colors.white',
          [$fg$6.variable]: `colors.${et}.600`,
          _dark: { [$bg$d.variable]: 'colors.gray.800', [$fg$6.variable]: `colors.${et}.300` },
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent'
        },
        color: $fg$6.reference,
        bg: $bg$d.reference
      },
      tablist: { mb: '-1px', borderBottom: '1px solid', borderColor: 'inherit' }
    };
  }),
  variantSoftRounded = definePartsStyle$m(($) => {
    const { colorScheme: et, theme: tt } = $;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: getColor(tt, `${et}.700`), bg: getColor(tt, `${et}.100`) }
      }
    };
  }),
  variantSolidRounded = definePartsStyle$m(($) => {
    const { colorScheme: et } = $;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        [$fg$6.variable]: 'colors.gray.600',
        _dark: { [$fg$6.variable]: 'inherit' },
        _selected: {
          [$fg$6.variable]: 'colors.white',
          [$bg$d.variable]: `colors.${et}.600`,
          _dark: { [$fg$6.variable]: 'colors.gray.800', [$bg$d.variable]: `colors.${et}.300` }
        },
        color: $fg$6.reference,
        bg: $bg$d.reference
      }
    };
  }),
  variantUnstyled$2 = definePartsStyle$m({}),
  variants$a = {
    line: variantLine,
    enclosed: variantEnclosed,
    'enclosed-colored': variantEnclosedColored,
    'soft-rounded': variantSoftRounded,
    'solid-rounded': variantSolidRounded,
    unstyled: variantUnstyled$2
  },
  tabsTheme = defineMultiStyleConfig$m({
    baseStyle: baseStyle$C,
    sizes: sizes$j,
    variants: variants$a,
    defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' }
  }),
  baseStyle$B = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold'
  },
  $bg$c = cssVar$1('badge-bg'),
  $fg$5 = cssVar$1('badge-color'),
  variantSolid$3 = ($) => {
    const { colorScheme: et, theme: tt } = $,
      rt = transparentize(`${et}.500`, 0.6)(tt);
    return {
      [$bg$c.variable]: `colors.${et}.500`,
      [$fg$5.variable]: 'colors.white',
      _dark: { [$bg$c.variable]: rt, [$fg$5.variable]: 'colors.whiteAlpha.800' },
      bg: $bg$c.reference,
      color: $fg$5.reference
    };
  },
  variantSubtle$1 = ($) => {
    const { colorScheme: et, theme: tt } = $,
      rt = transparentize(`${et}.200`, 0.16)(tt);
    return {
      [$bg$c.variable]: `colors.${et}.100`,
      [$fg$5.variable]: `colors.${et}.800`,
      _dark: { [$bg$c.variable]: rt, [$fg$5.variable]: `colors.${et}.200` },
      bg: $bg$c.reference,
      color: $fg$5.reference
    };
  },
  variantOutline$2 = ($) => {
    const { colorScheme: et, theme: tt } = $,
      rt = transparentize(`${et}.200`, 0.8)(tt);
    return {
      [$fg$5.variable]: `colors.${et}.500`,
      _dark: { [$fg$5.variable]: rt },
      color: $fg$5.reference,
      boxShadow: `inset 0 0 0px 1px ${$fg$5.reference}`
    };
  },
  variants$9 = { solid: variantSolid$3, subtle: variantSubtle$1, outline: variantOutline$2 },
  badgeTheme = {
    baseStyle: baseStyle$B,
    variants: variants$9,
    defaultProps: { variant: 'subtle', colorScheme: 'gray' }
  },
  { defineMultiStyleConfig: defineMultiStyleConfig$l, definePartsStyle: definePartsStyle$l } =
    createMultiStyleConfigHelpers(tagAnatomy.keys),
  baseStyleContainer$4 = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    borderRadius: 'md',
    _focusVisible: { boxShadow: 'outline' }
  },
  baseStyleLabel$3 = { lineHeight: 1.2, overflow: 'visible' },
  baseStyleCloseButton$3 = {
    fontSize: 'lg',
    w: '5',
    h: '5',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    borderRadius: 'full',
    marginStart: '1.5',
    marginEnd: '-1',
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 }
  },
  baseStyle$A = definePartsStyle$l({
    container: baseStyleContainer$4,
    label: baseStyleLabel$3,
    closeButton: baseStyleCloseButton$3
  }),
  sizes$i = {
    sm: definePartsStyle$l({
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' }
    }),
    md: definePartsStyle$l({ container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' } }),
    lg: definePartsStyle$l({ container: { minH: '8', minW: '8', fontSize: 'md', px: '3' } })
  },
  variants$8 = {
    subtle: definePartsStyle$l(($) => {
      var et;
      return { container: (et = badgeTheme.variants) == null ? void 0 : et.subtle($) };
    }),
    solid: definePartsStyle$l(($) => {
      var et;
      return { container: (et = badgeTheme.variants) == null ? void 0 : et.solid($) };
    }),
    outline: definePartsStyle$l(($) => {
      var et;
      return { container: (et = badgeTheme.variants) == null ? void 0 : et.outline($) };
    })
  },
  tagTheme = defineMultiStyleConfig$l({
    variants: variants$8,
    baseStyle: baseStyle$A,
    sizes: sizes$i,
    defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' }
  }),
  { definePartsStyle: definePartsStyle$k, defineMultiStyleConfig: defineMultiStyleConfig$k } =
    createMultiStyleConfigHelpers(inputAnatomy.keys),
  baseStyle$z = definePartsStyle$k({
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _disabled: { opacity: 0.4, cursor: 'not-allowed' }
    }
  }),
  size = {
    lg: { fontSize: 'lg', px: '4', h: '12', borderRadius: 'md' },
    md: { fontSize: 'md', px: '4', h: '10', borderRadius: 'md' },
    sm: { fontSize: 'sm', px: '3', h: '8', borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: '2', h: '6', borderRadius: 'sm' }
  },
  sizes$h = {
    lg: definePartsStyle$k({ field: size.lg, addon: size.lg }),
    md: definePartsStyle$k({ field: size.md, addon: size.md }),
    sm: definePartsStyle$k({ field: size.sm, addon: size.sm }),
    xs: definePartsStyle$k({ field: size.xs, addon: size.xs })
  };
function getDefaults($) {
  const { focusBorderColor: et, errorBorderColor: tt } = $;
  return {
    focusBorderColor: et || mode('blue.500', 'blue.300')($),
    errorBorderColor: tt || mode('red.500', 'red.300')($)
  };
}
var variantOutline$1 = definePartsStyle$k(($) => {
    const { theme: et } = $,
      { focusBorderColor: tt, errorBorderColor: rt } = getDefaults($);
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: mode('gray.300', 'whiteAlpha.400')($) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: getColor(et, rt), boxShadow: `0 0 0 1px ${getColor(et, rt)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: getColor(et, tt),
          boxShadow: `0 0 0 1px ${getColor(et, tt)}`
        }
      },
      addon: {
        border: '1px solid',
        borderColor: mode('inherit', 'whiteAlpha.50')($),
        bg: mode('gray.100', 'whiteAlpha.300')($)
      }
    };
  }),
  variantFilled = definePartsStyle$k(($) => {
    const { theme: et } = $,
      { focusBorderColor: tt, errorBorderColor: rt } = getDefaults($);
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: mode('gray.100', 'whiteAlpha.50')($),
        _hover: { bg: mode('gray.200', 'whiteAlpha.100')($) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: { borderColor: getColor(et, rt) },
        _focusVisible: { bg: 'transparent', borderColor: getColor(et, tt) }
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: mode('gray.100', 'whiteAlpha.50')($)
      }
    };
  }),
  variantFlushed = definePartsStyle$k(($) => {
    const { theme: et } = $,
      { focusBorderColor: tt, errorBorderColor: rt } = getDefaults($);
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: {
          borderColor: getColor(et, rt),
          boxShadow: `0px 1px 0px 0px ${getColor(et, rt)}`
        },
        _focusVisible: {
          borderColor: getColor(et, tt),
          boxShadow: `0px 1px 0px 0px ${getColor(et, tt)}`
        }
      },
      addon: {
        borderBottom: '2px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent'
      }
    };
  }),
  variantUnstyled$1 = definePartsStyle$k({
    field: { bg: 'transparent', px: '0', height: 'auto' },
    addon: { bg: 'transparent', px: '0', height: 'auto' }
  }),
  variants$7 = {
    outline: variantOutline$1,
    filled: variantFilled,
    flushed: variantFlushed,
    unstyled: variantUnstyled$1
  },
  inputTheme = defineMultiStyleConfig$k({
    baseStyle: baseStyle$z,
    sizes: sizes$h,
    variants: variants$7,
    defaultProps: { size: 'md', variant: 'outline' }
  }),
  _a$3,
  baseStyle$y = {
    ...((_a$3 = inputTheme.baseStyle) == null ? void 0 : _a$3.field),
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top'
  },
  _a2$2,
  _b$2,
  variants$6 = {
    outline: ($) => {
      var et, tt;
      return (tt = (et = inputTheme.variants) == null ? void 0 : et.outline($).field) != null
        ? tt
        : {};
    },
    flushed: ($) => {
      var et, tt;
      return (tt = (et = inputTheme.variants) == null ? void 0 : et.flushed($).field) != null
        ? tt
        : {};
    },
    filled: ($) => {
      var et, tt;
      return (tt = (et = inputTheme.variants) == null ? void 0 : et.filled($).field) != null
        ? tt
        : {};
    },
    unstyled:
      (_b$2 = (_a2$2 = inputTheme.variants) == null ? void 0 : _a2$2.unstyled.field) != null
        ? _b$2
        : {}
  },
  _a3,
  _b2,
  _c$1,
  _d$1,
  _e$1,
  _f$1,
  _g$1,
  _h$1,
  sizes$g = {
    xs: (_b2 = (_a3 = inputTheme.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
    sm: (_d$1 = (_c$1 = inputTheme.sizes) == null ? void 0 : _c$1.sm.field) != null ? _d$1 : {},
    md: (_f$1 = (_e$1 = inputTheme.sizes) == null ? void 0 : _e$1.md.field) != null ? _f$1 : {},
    lg: (_h$1 = (_g$1 = inputTheme.sizes) == null ? void 0 : _g$1.lg.field) != null ? _h$1 : {}
  },
  textareaTheme = {
    baseStyle: baseStyle$y,
    sizes: sizes$g,
    variants: variants$6,
    defaultProps: { size: 'md', variant: 'outline' }
  },
  $bg$b = cssVar('tooltip-bg'),
  $fg$4 = cssVar('tooltip-fg'),
  $arrowBg$1 = cssVar('popper-arrow-bg'),
  baseStyle$x = {
    bg: $bg$b.reference,
    color: $fg$4.reference,
    [$bg$b.variable]: 'colors.gray.700',
    [$fg$4.variable]: 'colors.whiteAlpha.900',
    _dark: { [$bg$b.variable]: 'colors.gray.300', [$fg$4.variable]: 'colors.gray.900' },
    [$arrowBg$1.variable]: $bg$b.reference,
    px: '2',
    py: '0.5',
    borderRadius: 'sm',
    fontWeight: 'medium',
    fontSize: 'sm',
    boxShadow: 'md',
    maxW: 'xs',
    zIndex: 'tooltip'
  },
  tooltipTheme = { baseStyle: baseStyle$x },
  { defineMultiStyleConfig: defineMultiStyleConfig$j, definePartsStyle: definePartsStyle$j } =
    createMultiStyleConfigHelpers(progressAnatomy.keys),
  filledStyle = ($) => {
    const { colorScheme: et, theme: tt, isIndeterminate: rt, hasStripe: nt } = $,
      ot = mode(generateStripe(), generateStripe('1rem', 'rgba(0,0,0,0.1)'))($),
      it = mode(`${et}.500`, `${et}.200`)($),
      at = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(tt, it)} 50%,
    transparent 100%
  )`;
    return { ...(!rt && nt && ot), ...(rt ? { bgImage: at } : { bgColor: it }) };
  },
  baseStyleLabel$2 = { lineHeight: '1', fontSize: '0.25em', fontWeight: 'bold', color: 'white' },
  baseStyleTrack$1 = ($) => ({ bg: mode('gray.100', 'whiteAlpha.300')($) }),
  baseStyleFilledTrack$1 = ($) => ({
    transitionProperty: 'common',
    transitionDuration: 'slow',
    ...filledStyle($)
  }),
  baseStyle$w = definePartsStyle$j(($) => ({
    label: baseStyleLabel$2,
    filledTrack: baseStyleFilledTrack$1($),
    track: baseStyleTrack$1($)
  })),
  sizes$f = {
    xs: definePartsStyle$j({ track: { h: '1' } }),
    sm: definePartsStyle$j({ track: { h: '2' } }),
    md: definePartsStyle$j({ track: { h: '3' } }),
    lg: definePartsStyle$j({ track: { h: '4' } })
  },
  progressTheme = defineMultiStyleConfig$j({
    sizes: sizes$f,
    baseStyle: baseStyle$w,
    defaultProps: { size: 'md', colorScheme: 'blue' }
  }),
  isFunction$2 = ($) => typeof $ == 'function';
function runIfFn$1($, ...et) {
  return isFunction$2($) ? $(...et) : $;
}
var { definePartsStyle: definePartsStyle$i, defineMultiStyleConfig: defineMultiStyleConfig$i } =
    createMultiStyleConfigHelpers(checkboxAnatomy.keys),
  $size$2 = cssVar$1('checkbox-size'),
  baseStyleControl$1 = ($) => {
    const { colorScheme: et } = $;
    return {
      w: $size$2.reference,
      h: $size$2.reference,
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: mode(`${et}.500`, `${et}.200`)($),
        borderColor: mode(`${et}.500`, `${et}.200`)($),
        color: mode('white', 'gray.900')($),
        _hover: {
          bg: mode(`${et}.600`, `${et}.300`)($),
          borderColor: mode(`${et}.600`, `${et}.300`)($)
        },
        _disabled: {
          borderColor: mode('gray.200', 'transparent')($),
          bg: mode('gray.200', 'whiteAlpha.300')($),
          color: mode('gray.500', 'whiteAlpha.500')($)
        }
      },
      _indeterminate: {
        bg: mode(`${et}.500`, `${et}.200`)($),
        borderColor: mode(`${et}.500`, `${et}.200`)($),
        color: mode('white', 'gray.900')($)
      },
      _disabled: {
        bg: mode('gray.100', 'whiteAlpha.100')($),
        borderColor: mode('gray.100', 'transparent')($)
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: mode('red.500', 'red.300')($) }
    };
  },
  baseStyleContainer$3 = { _disabled: { cursor: 'not-allowed' } },
  baseStyleLabel$1 = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  baseStyleIcon$5 = { transitionProperty: 'transform', transitionDuration: 'normal' },
  baseStyle$v = definePartsStyle$i(($) => ({
    icon: baseStyleIcon$5,
    container: baseStyleContainer$3,
    control: runIfFn$1(baseStyleControl$1, $),
    label: baseStyleLabel$1
  })),
  sizes$e = {
    sm: definePartsStyle$i({
      control: { [$size$2.variable]: 'sizes.3' },
      label: { fontSize: 'sm' },
      icon: { fontSize: '3xs' }
    }),
    md: definePartsStyle$i({
      control: { [$size$2.variable]: 'sizes.4' },
      label: { fontSize: 'md' },
      icon: { fontSize: '2xs' }
    }),
    lg: definePartsStyle$i({
      control: { [$size$2.variable]: 'sizes.5' },
      label: { fontSize: 'lg' },
      icon: { fontSize: '2xs' }
    })
  },
  checkboxTheme = defineMultiStyleConfig$i({
    baseStyle: baseStyle$v,
    sizes: sizes$e,
    defaultProps: { size: 'md', colorScheme: 'blue' }
  }),
  { defineMultiStyleConfig: defineMultiStyleConfig$h, definePartsStyle: definePartsStyle$h } =
    createMultiStyleConfigHelpers(radioAnatomy.keys),
  baseStyleControl = ($) => {
    var et;
    const tt = (et = runIfFn$1(checkboxTheme.baseStyle, $)) == null ? void 0 : et.control;
    return {
      ...tt,
      borderRadius: 'full',
      _checked: {
        ...(tt == null ? void 0 : tt._checked),
        _before: {
          content: '""',
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor'
        }
      }
    };
  },
  baseStyle$u = definePartsStyle$h(($) => {
    var et, tt, rt, nt;
    return {
      label: (tt = (et = checkboxTheme).baseStyle) == null ? void 0 : tt.call(et, $).label,
      container: (nt = (rt = checkboxTheme).baseStyle) == null ? void 0 : nt.call(rt, $).container,
      control: baseStyleControl($)
    };
  }),
  sizes$d = {
    md: definePartsStyle$h({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
    lg: definePartsStyle$h({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
    sm: definePartsStyle$h({ control: { width: '3', height: '3' }, label: { fontSize: 'sm' } })
  },
  radioTheme = defineMultiStyleConfig$h({
    baseStyle: baseStyle$u,
    sizes: sizes$d,
    defaultProps: { size: 'md', colorScheme: 'blue' }
  }),
  { defineMultiStyleConfig: defineMultiStyleConfig$g, definePartsStyle: definePartsStyle$g } =
    createMultiStyleConfigHelpers(selectAnatomy.keys),
  $bg$a = cssVar$1('select-bg'),
  _a$2,
  baseStyleField$1 = {
    ...((_a$2 = inputTheme.baseStyle) == null ? void 0 : _a$2.field),
    appearance: 'none',
    paddingBottom: '1px',
    lineHeight: 'normal',
    bg: $bg$a.reference,
    [$bg$a.variable]: 'colors.white',
    _dark: { [$bg$a.variable]: 'colors.gray.700' },
    '> option, > optgroup': { bg: $bg$a.reference }
  },
  baseStyleIcon$4 = {
    width: '6',
    height: '100%',
    insetEnd: '2',
    position: 'relative',
    color: 'currentColor',
    fontSize: 'xl',
    _disabled: { opacity: 0.5 }
  },
  baseStyle$t = definePartsStyle$g({ field: baseStyleField$1, icon: baseStyleIcon$4 }),
  iconSpacing = { paddingInlineEnd: '8' },
  _a2$1,
  _b$1,
  _c,
  _d,
  _e,
  _f,
  _g,
  _h,
  sizes$c = {
    lg: {
      ...((_a2$1 = inputTheme.sizes) == null ? void 0 : _a2$1.lg),
      field: { ...((_b$1 = inputTheme.sizes) == null ? void 0 : _b$1.lg.field), ...iconSpacing }
    },
    md: {
      ...((_c = inputTheme.sizes) == null ? void 0 : _c.md),
      field: { ...((_d = inputTheme.sizes) == null ? void 0 : _d.md.field), ...iconSpacing }
    },
    sm: {
      ...((_e = inputTheme.sizes) == null ? void 0 : _e.sm),
      field: { ...((_f = inputTheme.sizes) == null ? void 0 : _f.sm.field), ...iconSpacing }
    },
    xs: {
      ...((_g = inputTheme.sizes) == null ? void 0 : _g.xs),
      field: { ...((_h = inputTheme.sizes) == null ? void 0 : _h.xs.field), ...iconSpacing },
      icon: { insetEnd: '1' }
    }
  },
  selectTheme = defineMultiStyleConfig$g({
    baseStyle: baseStyle$t,
    sizes: sizes$c,
    variants: inputTheme.variants,
    defaultProps: inputTheme.defaultProps
  }),
  $startColor = cssVar$1('skeleton-start-color'),
  $endColor = cssVar$1('skeleton-end-color'),
  baseStyle$s = {
    [$startColor.variable]: 'colors.gray.100',
    [$endColor.variable]: 'colors.gray.400',
    _dark: { [$startColor.variable]: 'colors.gray.800', [$endColor.variable]: 'colors.gray.600' },
    background: $startColor.reference,
    borderColor: $endColor.reference,
    opacity: 0.7,
    borderRadius: 'sm'
  },
  skeletonTheme = { baseStyle: baseStyle$s },
  $bg$9 = cssVar$1('skip-link-bg'),
  baseStyle$r = {
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focusVisible: {
      boxShadow: 'outline',
      padding: '4',
      position: 'fixed',
      top: '6',
      insetStart: '6',
      [$bg$9.variable]: 'colors.white',
      _dark: { [$bg$9.variable]: 'colors.gray.700' },
      bg: $bg$9.reference
    }
  },
  skipLinkTheme = { baseStyle: baseStyle$r },
  { defineMultiStyleConfig: defineMultiStyleConfig$f, definePartsStyle: definePartsStyle$f } =
    createMultiStyleConfigHelpers(sliderAnatomy.keys),
  $thumbSize = cssVar$1('slider-thumb-size'),
  $trackSize = cssVar$1('slider-track-size'),
  $bg$8 = cssVar$1('slider-bg'),
  baseStyleContainer$2 = ($) => {
    const { orientation: et } = $;
    return {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      ...orient({ orientation: et, vertical: { h: '100%' }, horizontal: { w: '100%' } })
    };
  },
  baseStyleTrack = ($) => ({
    ...orient({
      orientation: $.orientation,
      horizontal: { h: $trackSize.reference },
      vertical: { w: $trackSize.reference }
    }),
    overflow: 'hidden',
    borderRadius: 'sm',
    [$bg$8.variable]: 'colors.gray.200',
    _dark: { [$bg$8.variable]: 'colors.whiteAlpha.200' },
    _disabled: {
      [$bg$8.variable]: 'colors.gray.300',
      _dark: { [$bg$8.variable]: 'colors.whiteAlpha.300' }
    },
    bg: $bg$8.reference
  }),
  baseStyleThumb = ($) => {
    const { orientation: et } = $;
    return {
      ...orient({
        orientation: et,
        vertical: {
          left: '50%',
          transform: 'translateX(-50%)',
          _active: { transform: 'translateX(-50%) scale(1.15)' }
        },
        horizontal: {
          top: '50%',
          transform: 'translateY(-50%)',
          _active: { transform: 'translateY(-50%) scale(1.15)' }
        }
      }),
      w: $thumbSize.reference,
      h: $thumbSize.reference,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      outline: 0,
      zIndex: 1,
      borderRadius: 'full',
      bg: 'white',
      boxShadow: 'base',
      border: '1px solid',
      borderColor: 'transparent',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { bg: 'gray.300' }
    };
  },
  baseStyleFilledTrack = ($) => {
    const { colorScheme: et } = $;
    return {
      width: 'inherit',
      height: 'inherit',
      [$bg$8.variable]: `colors.${et}.500`,
      _dark: { [$bg$8.variable]: `colors.${et}.200` },
      bg: $bg$8.reference
    };
  },
  baseStyle$q = definePartsStyle$f(($) => ({
    container: baseStyleContainer$2($),
    track: baseStyleTrack($),
    thumb: baseStyleThumb($),
    filledTrack: baseStyleFilledTrack($)
  })),
  sizeLg = definePartsStyle$f({
    container: { [$thumbSize.variable]: 'sizes.4', [$trackSize.variable]: 'sizes.1' }
  }),
  sizeMd = definePartsStyle$f({
    container: { [$thumbSize.variable]: 'sizes.3.5', [$trackSize.variable]: 'sizes.1' }
  }),
  sizeSm = definePartsStyle$f({
    container: { [$thumbSize.variable]: 'sizes.2.5', [$trackSize.variable]: 'sizes.0.5' }
  }),
  sizes$b = { lg: sizeLg, md: sizeMd, sm: sizeSm },
  sliderTheme = defineMultiStyleConfig$f({
    baseStyle: baseStyle$q,
    sizes: sizes$b,
    defaultProps: { size: 'md', colorScheme: 'blue' }
  }),
  $size$1 = cssVar('spinner-size'),
  baseStyle$p = { width: [$size$1.reference], height: [$size$1.reference] },
  sizes$a = {
    xs: { [$size$1.variable]: 'sizes.3' },
    sm: { [$size$1.variable]: 'sizes.4' },
    md: { [$size$1.variable]: 'sizes.6' },
    lg: { [$size$1.variable]: 'sizes.8' },
    xl: { [$size$1.variable]: 'sizes.12' }
  },
  spinnerTheme = { baseStyle: baseStyle$p, sizes: sizes$a, defaultProps: { size: 'md' } },
  { defineMultiStyleConfig: defineMultiStyleConfig$e, definePartsStyle: definePartsStyle$e } =
    createMultiStyleConfigHelpers(statAnatomy.keys),
  baseStyleLabel = { fontWeight: 'medium' },
  baseStyleHelpText = { opacity: 0.8, marginBottom: '2' },
  baseStyleNumber = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  baseStyleIcon$3 = { marginEnd: 1, w: '3.5', h: '3.5', verticalAlign: 'middle' },
  baseStyle$o = definePartsStyle$e({
    container: {},
    label: baseStyleLabel,
    helpText: baseStyleHelpText,
    number: baseStyleNumber,
    icon: baseStyleIcon$3
  }),
  sizes$9 = {
    md: definePartsStyle$e({
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' }
    })
  },
  statTheme = defineMultiStyleConfig$e({
    baseStyle: baseStyle$o,
    sizes: sizes$9,
    defaultProps: { size: 'md' }
  }),
  $bg$7 = cssVar$1('kbd-bg'),
  baseStyle$n = {
    [$bg$7.variable]: 'colors.gray.100',
    _dark: { [$bg$7.variable]: 'colors.whiteAlpha.100' },
    bg: $bg$7.reference,
    borderRadius: 'md',
    borderWidth: '1px',
    borderBottomWidth: '3px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    lineHeight: 'normal',
    px: '0.4em',
    whiteSpace: 'nowrap'
  },
  kbdTheme = { baseStyle: baseStyle$n },
  baseStyle$m = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' }
  },
  linkTheme = { baseStyle: baseStyle$m },
  { defineMultiStyleConfig: defineMultiStyleConfig$d, definePartsStyle: definePartsStyle$d } =
    createMultiStyleConfigHelpers(listAnatomy.keys),
  baseStyleIcon$2 = { marginEnd: '2', display: 'inline', verticalAlign: 'text-bottom' },
  baseStyle$l = definePartsStyle$d({ icon: baseStyleIcon$2 }),
  listTheme = defineMultiStyleConfig$d({ baseStyle: baseStyle$l }),
  { defineMultiStyleConfig: defineMultiStyleConfig$c, definePartsStyle: definePartsStyle$c } =
    createMultiStyleConfigHelpers(menuAnatomy.keys),
  $bg$6 = cssVar$1('menu-bg'),
  $shadow = cssVar$1('menu-shadow'),
  baseStyleList = {
    [$bg$6.variable]: '#fff',
    [$shadow.variable]: 'shadows.sm',
    _dark: { [$bg$6.variable]: 'colors.gray.700', [$shadow.variable]: 'shadows.dark-lg' },
    color: 'inherit',
    minW: '3xs',
    py: '2',
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
    bg: $bg$6.reference,
    boxShadow: $shadow.reference
  },
  baseStyleItem = {
    py: '1.5',
    px: '3',
    transitionProperty: 'background',
    transitionDuration: 'ultra-fast',
    transitionTimingFunction: 'ease-in',
    _focus: {
      [$bg$6.variable]: 'colors.gray.100',
      _dark: { [$bg$6.variable]: 'colors.whiteAlpha.100' }
    },
    _active: {
      [$bg$6.variable]: 'colors.gray.200',
      _dark: { [$bg$6.variable]: 'colors.whiteAlpha.200' }
    },
    _expanded: {
      [$bg$6.variable]: 'colors.gray.100',
      _dark: { [$bg$6.variable]: 'colors.whiteAlpha.100' }
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    bg: $bg$6.reference
  },
  baseStyleGroupTitle = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  baseStyleCommand = { opacity: 0.6 },
  baseStyleDivider = {
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    my: '2',
    opacity: 0.6
  },
  baseStyleButton$1 = { transitionProperty: 'common', transitionDuration: 'normal' },
  baseStyle$k = definePartsStyle$c({
    button: baseStyleButton$1,
    list: baseStyleList,
    item: baseStyleItem,
    groupTitle: baseStyleGroupTitle,
    command: baseStyleCommand,
    divider: baseStyleDivider
  }),
  menuTheme = defineMultiStyleConfig$c({ baseStyle: baseStyle$k }),
  { defineMultiStyleConfig: defineMultiStyleConfig$b, definePartsStyle: definePartsStyle$b } =
    createMultiStyleConfigHelpers(modalAnatomy.keys),
  baseStyleOverlay$1 = { bg: 'blackAlpha.600', zIndex: 'modal' },
  baseStyleDialogContainer$1 = ($) => {
    const { isCentered: et, scrollBehavior: tt } = $;
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: et ? 'center' : 'flex-start',
      overflow: tt === 'inside' ? 'hidden' : 'auto',
      overscrollBehaviorY: 'none'
    };
  },
  baseStyleDialog$1 = ($) => {
    const { scrollBehavior: et } = $;
    return {
      borderRadius: 'md',
      bg: mode('white', 'gray.700')($),
      color: 'inherit',
      my: '16',
      zIndex: 'modal',
      maxH: et === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      boxShadow: mode('lg', 'dark-lg')($)
    };
  },
  baseStyleHeader$2 = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  baseStyleCloseButton$2 = { position: 'absolute', top: '2', insetEnd: '3' },
  baseStyleBody$2 = ($) => {
    const { scrollBehavior: et } = $;
    return { px: '6', py: '2', flex: '1', overflow: et === 'inside' ? 'auto' : void 0 };
  },
  baseStyleFooter$2 = { px: '6', py: '4' },
  baseStyle$j = definePartsStyle$b(($) => ({
    overlay: baseStyleOverlay$1,
    dialogContainer: runIfFn$1(baseStyleDialogContainer$1, $),
    dialog: runIfFn$1(baseStyleDialog$1, $),
    header: baseStyleHeader$2,
    closeButton: baseStyleCloseButton$2,
    body: runIfFn$1(baseStyleBody$2, $),
    footer: baseStyleFooter$2
  }));
function getSize$3($) {
  return definePartsStyle$b(
    $ === 'full'
      ? { dialog: { maxW: '100vw', minH: '$100vh', my: '0', borderRadius: '0' } }
      : { dialog: { maxW: $ } }
  );
}
var sizes$8 = {
    xs: getSize$3('xs'),
    sm: getSize$3('sm'),
    md: getSize$3('md'),
    lg: getSize$3('lg'),
    xl: getSize$3('xl'),
    '2xl': getSize$3('2xl'),
    '3xl': getSize$3('3xl'),
    '4xl': getSize$3('4xl'),
    '5xl': getSize$3('5xl'),
    '6xl': getSize$3('6xl'),
    full: getSize$3('full')
  },
  modalTheme = defineMultiStyleConfig$b({
    baseStyle: baseStyle$j,
    sizes: sizes$8,
    defaultProps: { size: 'md' }
  }),
  { defineMultiStyleConfig: defineMultiStyleConfig$a, definePartsStyle: definePartsStyle$a } =
    createMultiStyleConfigHelpers(numberInputAnatomy.keys),
  $stepperWidth = cssVar('number-input-stepper-width'),
  $inputPadding = cssVar('number-input-input-padding'),
  inputPaddingValue = calc($stepperWidth).add('0.5rem').toString(),
  $bg$5 = cssVar('number-input-bg'),
  $fg$3 = cssVar('number-input-color'),
  $border$1 = cssVar('number-input-border-color'),
  baseStyleRoot = {
    [$stepperWidth.variable]: 'sizes.6',
    [$inputPadding.variable]: inputPaddingValue
  },
  baseStyleField = ($) => {
    var et, tt;
    return (tt = (et = runIfFn$1(inputTheme.baseStyle, $)) == null ? void 0 : et.field) != null
      ? tt
      : {};
  },
  baseStyleStepperGroup = { width: $stepperWidth.reference },
  baseStyleStepper = {
    borderStart: '1px solid',
    borderStartColor: $border$1.reference,
    color: $fg$3.reference,
    bg: $bg$5.reference,
    [$fg$3.variable]: 'colors.chakra-body-text',
    [$border$1.variable]: 'colors.chakra-border-color',
    _dark: {
      [$fg$3.variable]: 'colors.whiteAlpha.800',
      [$border$1.variable]: 'colors.whiteAlpha.300'
    },
    _active: {
      [$bg$5.variable]: 'colors.gray.200',
      _dark: { [$bg$5.variable]: 'colors.whiteAlpha.300' }
    },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' }
  },
  baseStyle$i = definePartsStyle$a(($) => {
    var et;
    return {
      root: baseStyleRoot,
      field: (et = runIfFn$1(baseStyleField, $)) != null ? et : {},
      stepperGroup: baseStyleStepperGroup,
      stepper: baseStyleStepper
    };
  });
function getSize$2($) {
  var et, tt, rt;
  const nt = (et = inputTheme.sizes) == null ? void 0 : et[$],
    ot = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    it = (rt = (tt = nt.field) == null ? void 0 : tt.fontSize) != null ? rt : 'md',
    at = typography_default.fontSizes[it];
  return definePartsStyle$a({
    field: { ...nt.field, paddingInlineEnd: $inputPadding.reference, verticalAlign: 'top' },
    stepper: {
      fontSize: calc(at).multiply(0.75).toString(),
      _first: { borderTopEndRadius: ot[$] },
      _last: { borderBottomEndRadius: ot[$], mt: '-1px', borderTopWidth: 1 }
    }
  });
}
var sizes$7 = {
    xs: getSize$2('xs'),
    sm: getSize$2('sm'),
    md: getSize$2('md'),
    lg: getSize$2('lg')
  },
  numberInputTheme = defineMultiStyleConfig$a({
    baseStyle: baseStyle$i,
    sizes: sizes$7,
    variants: inputTheme.variants,
    defaultProps: inputTheme.defaultProps
  }),
  _a$1,
  baseStyle$h = {
    ...((_a$1 = inputTheme.baseStyle) == null ? void 0 : _a$1.field),
    textAlign: 'center'
  },
  sizes$6 = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' }
  },
  _a2,
  _b,
  variants$5 = {
    outline: ($) => {
      var et, tt, rt;
      return (rt =
        (tt = runIfFn$1((et = inputTheme.variants) == null ? void 0 : et.outline, $)) == null
          ? void 0
          : tt.field) != null
        ? rt
        : {};
    },
    flushed: ($) => {
      var et, tt, rt;
      return (rt =
        (tt = runIfFn$1((et = inputTheme.variants) == null ? void 0 : et.flushed, $)) == null
          ? void 0
          : tt.field) != null
        ? rt
        : {};
    },
    filled: ($) => {
      var et, tt, rt;
      return (rt =
        (tt = runIfFn$1((et = inputTheme.variants) == null ? void 0 : et.filled, $)) == null
          ? void 0
          : tt.field) != null
        ? rt
        : {};
    },
    unstyled:
      (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
  },
  pinInputTheme = {
    baseStyle: baseStyle$h,
    sizes: sizes$6,
    variants: variants$5,
    defaultProps: inputTheme.defaultProps
  },
  { defineMultiStyleConfig: defineMultiStyleConfig$9, definePartsStyle: definePartsStyle$9 } =
    createMultiStyleConfigHelpers(popoverAnatomy.keys),
  $popperBg = cssVar('popper-bg'),
  $arrowBg = cssVar('popper-arrow-bg'),
  $arrowShadowColor = cssVar('popper-arrow-shadow-color'),
  baseStylePopper = { zIndex: 10 },
  baseStyleContent = {
    [$popperBg.variable]: 'colors.white',
    bg: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: 'colors.gray.200',
    _dark: {
      [$popperBg.variable]: 'colors.gray.700',
      [$arrowShadowColor.variable]: 'colors.whiteAlpha.300'
    },
    width: 'xs',
    border: '1px solid',
    borderColor: 'inherit',
    borderRadius: 'md',
    boxShadow: 'sm',
    zIndex: 'inherit',
    _focusVisible: { outline: 0, boxShadow: 'outline' }
  },
  baseStyleHeader$1 = { px: 3, py: 2, borderBottomWidth: '1px' },
  baseStyleBody$1 = { px: 3, py: 2 },
  baseStyleFooter$1 = { px: 3, py: 2, borderTopWidth: '1px' },
  baseStyleCloseButton$1 = {
    position: 'absolute',
    borderRadius: 'md',
    top: 1,
    insetEnd: 2,
    padding: 2
  },
  baseStyle$g = definePartsStyle$9({
    popper: baseStylePopper,
    content: baseStyleContent,
    header: baseStyleHeader$1,
    body: baseStyleBody$1,
    footer: baseStyleFooter$1,
    closeButton: baseStyleCloseButton$1
  }),
  popoverTheme = defineMultiStyleConfig$9({ baseStyle: baseStyle$g }),
  { definePartsStyle: definePartsStyle$8, defineMultiStyleConfig: defineMultiStyleConfig$8 } =
    createMultiStyleConfigHelpers(drawerAnatomy.keys),
  $bg$4 = cssVar$1('drawer-bg'),
  $bs = cssVar$1('drawer-box-shadow');
function getSize$1($) {
  return definePartsStyle$8(
    $ === 'full' ? { dialog: { maxW: '100vw', h: '100vh' } } : { dialog: { maxW: $ } }
  );
}
var baseStyleOverlay = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  baseStyleDialogContainer = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  baseStyleDialog = ($) => {
    const { isFullHeight: et } = $;
    return {
      ...(et && { height: '100vh' }),
      zIndex: 'modal',
      maxH: '100vh',
      color: 'inherit',
      [$bg$4.variable]: 'colors.white',
      [$bs.variable]: 'shadows.lg',
      _dark: { [$bg$4.variable]: 'colors.gray.700', [$bs.variable]: 'shadows.dark-lg' },
      bg: $bg$4.reference,
      boxShadow: $bs.reference
    };
  },
  baseStyleHeader = { px: '6', py: '4', fontSize: 'xl', fontWeight: 'semibold' },
  baseStyleCloseButton = { position: 'absolute', top: '2', insetEnd: '3' },
  baseStyleBody = { px: '6', py: '2', flex: '1', overflow: 'auto' },
  baseStyleFooter = { px: '6', py: '4' },
  baseStyle$f = definePartsStyle$8(($) => ({
    overlay: baseStyleOverlay,
    dialogContainer: baseStyleDialogContainer,
    dialog: runIfFn$1(baseStyleDialog, $),
    header: baseStyleHeader,
    closeButton: baseStyleCloseButton,
    body: baseStyleBody,
    footer: baseStyleFooter
  })),
  sizes$5 = {
    xs: getSize$1('xs'),
    sm: getSize$1('md'),
    md: getSize$1('lg'),
    lg: getSize$1('2xl'),
    xl: getSize$1('4xl'),
    full: getSize$1('full')
  },
  drawerTheme = defineMultiStyleConfig$8({
    baseStyle: baseStyle$f,
    sizes: sizes$5,
    defaultProps: { size: 'xs' }
  }),
  { definePartsStyle: definePartsStyle$7, defineMultiStyleConfig: defineMultiStyleConfig$7 } =
    createMultiStyleConfigHelpers(editableAnatomy.keys),
  baseStylePreview = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal'
  },
  baseStyleInput = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 }
  },
  baseStyleTextarea = {
    borderRadius: 'md',
    py: '1',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focusVisible: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 }
  },
  baseStyle$e = definePartsStyle$7({
    preview: baseStylePreview,
    input: baseStyleInput,
    textarea: baseStyleTextarea
  }),
  editableTheme = defineMultiStyleConfig$7({ baseStyle: baseStyle$e }),
  { definePartsStyle: definePartsStyle$6, defineMultiStyleConfig: defineMultiStyleConfig$6 } =
    createMultiStyleConfigHelpers(formAnatomy.keys),
  $fg$2 = cssVar$1('form-control-color'),
  baseStyleRequiredIndicator = {
    marginStart: '1',
    [$fg$2.variable]: 'colors.red.500',
    _dark: { [$fg$2.variable]: 'colors.red.300' },
    color: $fg$2.reference
  },
  baseStyleHelperText = {
    mt: '2',
    [$fg$2.variable]: 'colors.gray.600',
    _dark: { [$fg$2.variable]: 'colors.whiteAlpha.600' },
    color: $fg$2.reference,
    lineHeight: 'normal',
    fontSize: 'sm'
  },
  baseStyle$d = definePartsStyle$6({
    container: { width: '100%', position: 'relative' },
    requiredIndicator: baseStyleRequiredIndicator,
    helperText: baseStyleHelperText
  }),
  formTheme = defineMultiStyleConfig$6({ baseStyle: baseStyle$d }),
  { definePartsStyle: definePartsStyle$5, defineMultiStyleConfig: defineMultiStyleConfig$5 } =
    createMultiStyleConfigHelpers(formErrorAnatomy.keys),
  $fg$1 = cssVar$1('form-error-color'),
  baseStyleText = {
    [$fg$1.variable]: 'colors.red.500',
    _dark: { [$fg$1.variable]: 'colors.red.300' },
    color: $fg$1.reference,
    mt: '2',
    fontSize: 'sm',
    lineHeight: 'normal'
  },
  baseStyleIcon$1 = {
    marginEnd: '0.5em',
    [$fg$1.variable]: 'colors.red.500',
    _dark: { [$fg$1.variable]: 'colors.red.300' },
    color: $fg$1.reference
  },
  baseStyle$c = definePartsStyle$5({ text: baseStyleText, icon: baseStyleIcon$1 }),
  formErrorTheme = defineMultiStyleConfig$5({ baseStyle: baseStyle$c }),
  baseStyle$b = {
    fontSize: 'md',
    marginEnd: '3',
    mb: '2',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 }
  },
  formLabelTheme = { baseStyle: baseStyle$b },
  baseStyle$a = { fontFamily: 'heading', fontWeight: 'bold' },
  sizes$4 = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: 'xl', lineHeight: 1.2 },
    sm: { fontSize: 'md', lineHeight: 1.2 },
    xs: { fontSize: 'sm', lineHeight: 1.2 }
  },
  headingTheme = { baseStyle: baseStyle$a, sizes: sizes$4, defaultProps: { size: 'xl' } },
  { defineMultiStyleConfig: defineMultiStyleConfig$4, definePartsStyle: definePartsStyle$4 } =
    createMultiStyleConfigHelpers(breadcrumbAnatomy.keys),
  baseStyleLink = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' }
  },
  baseStyle$9 = definePartsStyle$4({ link: baseStyleLink }),
  breadcrumbTheme = defineMultiStyleConfig$4({ baseStyle: baseStyle$9 }),
  baseStyle$8 = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } }
  },
  variantGhost = ($) => {
    const { colorScheme: et, theme: tt } = $;
    if (et === 'gray')
      return {
        color: mode('inherit', 'whiteAlpha.900')($),
        _hover: { bg: mode('gray.100', 'whiteAlpha.200')($) },
        _active: { bg: mode('gray.200', 'whiteAlpha.300')($) }
      };
    const rt = transparentize(`${et}.200`, 0.12)(tt),
      nt = transparentize(`${et}.200`, 0.24)(tt);
    return {
      color: mode(`${et}.600`, `${et}.200`)($),
      bg: 'transparent',
      _hover: { bg: mode(`${et}.50`, rt)($) },
      _active: { bg: mode(`${et}.100`, nt)($) }
    };
  },
  variantOutline = ($) => {
    const { colorScheme: et } = $,
      tt = mode('gray.200', 'whiteAlpha.300')($);
    return {
      border: '1px solid',
      borderColor: et === 'gray' ? tt : 'currentColor',
      '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)': {
        marginEnd: '-1px'
      },
      '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)': {
        marginBottom: '-1px'
      },
      ...runIfFn$1(variantGhost, $)
    };
  },
  accessibleColorMap = {
    yellow: { bg: 'yellow.400', color: 'black', hoverBg: 'yellow.500', activeBg: 'yellow.600' },
    cyan: { bg: 'cyan.400', color: 'black', hoverBg: 'cyan.500', activeBg: 'cyan.600' }
  },
  variantSolid$2 = ($) => {
    var et;
    const { colorScheme: tt } = $;
    if (tt === 'gray') {
      const st = mode('gray.100', 'whiteAlpha.200')($);
      return {
        bg: st,
        _hover: { bg: mode('gray.200', 'whiteAlpha.300')($), _disabled: { bg: st } },
        _active: { bg: mode('gray.300', 'whiteAlpha.400')($) }
      };
    }
    const {
        bg: rt = `${tt}.500`,
        color: nt = 'white',
        hoverBg: ot = `${tt}.600`,
        activeBg: it = `${tt}.700`
      } = (et = accessibleColorMap[tt]) != null ? et : {},
      at = mode(rt, `${tt}.200`)($);
    return {
      bg: at,
      color: mode(nt, 'gray.800')($),
      _hover: { bg: mode(ot, `${tt}.300`)($), _disabled: { bg: at } },
      _active: { bg: mode(it, `${tt}.400`)($) }
    };
  },
  variantLink = ($) => {
    const { colorScheme: et } = $;
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: mode(`${et}.500`, `${et}.200`)($),
      _hover: { textDecoration: 'underline', _disabled: { textDecoration: 'none' } },
      _active: { color: mode(`${et}.700`, `${et}.500`)($) }
    };
  },
  variantUnstyled = {
    bg: 'none',
    color: 'inherit',
    display: 'inline',
    lineHeight: 'inherit',
    m: '0',
    p: '0'
  },
  variants$4 = {
    ghost: variantGhost,
    outline: variantOutline,
    solid: variantSolid$2,
    link: variantLink,
    unstyled: variantUnstyled
  },
  sizes$3 = {
    lg: { h: '12', minW: '12', fontSize: 'lg', px: '6' },
    md: { h: '10', minW: '10', fontSize: 'md', px: '4' },
    sm: { h: '8', minW: '8', fontSize: 'sm', px: '3' },
    xs: { h: '6', minW: '6', fontSize: 'xs', px: '2' }
  },
  buttonTheme = {
    baseStyle: baseStyle$8,
    variants: variants$4,
    sizes: sizes$3,
    defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' }
  },
  { definePartsStyle: definePartsStyle$3, defineMultiStyleConfig: defineMultiStyleConfig$3 } =
    createMultiStyleConfigHelpers(cardAnatomy.keys),
  $bg$3 = cssVar$1('card-bg'),
  $padding = cssVar$1('card-padding'),
  baseStyle$7 = definePartsStyle$3({
    container: {
      [$bg$3.variable]: 'chakra-body-bg',
      backgroundColor: $bg$3.reference,
      color: 'chakra-body-text'
    },
    body: { padding: $padding.reference, flex: '1 1 0%' },
    header: { padding: $padding.reference },
    footer: { padding: $padding.reference }
  }),
  sizes$2 = {
    sm: definePartsStyle$3({ container: { borderRadius: 'base', [$padding.variable]: 'space.3' } }),
    md: definePartsStyle$3({ container: { borderRadius: 'md', [$padding.variable]: 'space.5' } }),
    lg: definePartsStyle$3({ container: { borderRadius: 'xl', [$padding.variable]: 'space.7' } })
  },
  variants$3 = {
    elevated: definePartsStyle$3({
      container: { boxShadow: 'base', _dark: { [$bg$3.variable]: 'colors.gray.700' } }
    }),
    outline: definePartsStyle$3({
      container: { borderWidth: '1px', borderColor: 'chakra-border-color' }
    }),
    filled: definePartsStyle$3({ container: { [$bg$3.variable]: 'colors.chakra-subtle-bg' } }),
    unstyled: { body: { padding: 0 }, header: { padding: 0 }, footer: { padding: 0 } }
  },
  cardTheme = defineMultiStyleConfig$3({
    baseStyle: baseStyle$7,
    variants: variants$3,
    sizes: sizes$2,
    defaultProps: { variant: 'elevated', size: 'md' }
  }),
  $size = cssVar('close-button-size'),
  $bg$2 = cssVar('close-button-bg'),
  baseStyle$6 = {
    w: [$size.reference],
    h: [$size.reference],
    borderRadius: 'md',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: {
      [$bg$2.variable]: 'colors.blackAlpha.100',
      _dark: { [$bg$2.variable]: 'colors.whiteAlpha.100' }
    },
    _active: {
      [$bg$2.variable]: 'colors.blackAlpha.200',
      _dark: { [$bg$2.variable]: 'colors.whiteAlpha.200' }
    },
    _focusVisible: { boxShadow: 'outline' },
    bg: $bg$2.reference
  },
  sizes$1 = {
    lg: { [$size.variable]: 'sizes.10', fontSize: 'md' },
    md: { [$size.variable]: 'sizes.8', fontSize: 'xs' },
    sm: { [$size.variable]: 'sizes.6', fontSize: '2xs' }
  },
  closeButtonTheme = { baseStyle: baseStyle$6, sizes: sizes$1, defaultProps: { size: 'md' } },
  { variants: variants$2, defaultProps } = badgeTheme,
  baseStyle$5 = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
  codeTheme = { baseStyle: baseStyle$5, variants: variants$2, defaultProps },
  baseStyle$4 = { w: '100%', mx: 'auto', maxW: 'prose', px: '4' },
  containerTheme = { baseStyle: baseStyle$4 },
  baseStyle$3 = { opacity: 0.6, borderColor: 'inherit' },
  variantSolid$1 = { borderStyle: 'solid' },
  variantDashed = { borderStyle: 'dashed' },
  variants$1 = { solid: variantSolid$1, dashed: variantDashed },
  dividerTheme = {
    baseStyle: baseStyle$3,
    variants: variants$1,
    defaultProps: { variant: 'solid' }
  },
  { definePartsStyle: definePartsStyle$2, defineMultiStyleConfig: defineMultiStyleConfig$2 } =
    createMultiStyleConfigHelpers(accordionAnatomy.keys),
  baseStyleContainer$1 = {
    borderTopWidth: '1px',
    borderColor: 'inherit',
    _last: { borderBottomWidth: '1px' }
  },
  baseStyleButton = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: 'md',
    _focusVisible: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: '4',
    py: '2'
  },
  baseStylePanel = { pt: '2', px: '4', pb: '5' },
  baseStyleIcon = { fontSize: '1.25em' },
  baseStyle$2 = definePartsStyle$2({
    container: baseStyleContainer$1,
    button: baseStyleButton,
    panel: baseStylePanel,
    icon: baseStyleIcon
  }),
  accordionTheme = defineMultiStyleConfig$2({ baseStyle: baseStyle$2 }),
  { definePartsStyle: definePartsStyle$1, defineMultiStyleConfig: defineMultiStyleConfig$1 } =
    createMultiStyleConfigHelpers(alertAnatomy.keys),
  $fg = cssVar$1('alert-fg'),
  $bg$1 = cssVar$1('alert-bg'),
  baseStyle$1 = definePartsStyle$1({
    container: { bg: $bg$1.reference, px: '4', py: '3' },
    title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
    description: { lineHeight: '6' },
    icon: { color: $fg.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '6' },
    spinner: { color: $fg.reference, flexShrink: 0, marginEnd: '3', w: '5', h: '5' }
  });
function getBg($) {
  const { theme: et, colorScheme: tt } = $,
    rt = transparentize(`${tt}.200`, 0.16)(et);
  return { light: `colors.${tt}.100`, dark: rt };
}
var variantSubtle = definePartsStyle$1(($) => {
    const { colorScheme: et } = $,
      tt = getBg($);
    return {
      container: {
        [$fg.variable]: `colors.${et}.500`,
        [$bg$1.variable]: tt.light,
        _dark: { [$fg.variable]: `colors.${et}.200`, [$bg$1.variable]: tt.dark }
      }
    };
  }),
  variantLeftAccent = definePartsStyle$1(($) => {
    const { colorScheme: et } = $,
      tt = getBg($);
    return {
      container: {
        [$fg.variable]: `colors.${et}.500`,
        [$bg$1.variable]: tt.light,
        _dark: { [$fg.variable]: `colors.${et}.200`, [$bg$1.variable]: tt.dark },
        paddingStart: '3',
        borderStartWidth: '4px',
        borderStartColor: $fg.reference
      }
    };
  }),
  variantTopAccent = definePartsStyle$1(($) => {
    const { colorScheme: et } = $,
      tt = getBg($);
    return {
      container: {
        [$fg.variable]: `colors.${et}.500`,
        [$bg$1.variable]: tt.light,
        _dark: { [$fg.variable]: `colors.${et}.200`, [$bg$1.variable]: tt.dark },
        pt: '2',
        borderTopWidth: '4px',
        borderTopColor: $fg.reference
      }
    };
  }),
  variantSolid = definePartsStyle$1(($) => {
    const { colorScheme: et } = $;
    return {
      container: {
        [$fg.variable]: 'colors.white',
        [$bg$1.variable]: `colors.${et}.500`,
        _dark: { [$fg.variable]: 'colors.gray.900', [$bg$1.variable]: `colors.${et}.200` },
        color: $fg.reference
      }
    };
  }),
  variants = {
    subtle: variantSubtle,
    'left-accent': variantLeftAccent,
    'top-accent': variantTopAccent,
    solid: variantSolid
  },
  alertTheme = defineMultiStyleConfig$1({
    baseStyle: baseStyle$1,
    variants,
    defaultProps: { variant: 'subtle', colorScheme: 'blue' }
  }),
  { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys),
  $border = cssVar$1('avatar-border-color'),
  $bg = cssVar$1('avatar-bg'),
  baseStyleBadge = {
    borderRadius: 'full',
    border: '0.2em solid',
    [$border.variable]: 'white',
    _dark: { [$border.variable]: 'colors.gray.800' },
    borderColor: $border.reference
  },
  baseStyleExcessLabel = {
    [$bg.variable]: 'colors.gray.200',
    _dark: { [$bg.variable]: 'colors.whiteAlpha.400' },
    bgColor: $bg.reference
  },
  $avatarBg = cssVar$1('avatar-background'),
  baseStyleContainer = ($) => {
    const { name: et, theme: tt } = $,
      rt = et ? randomColor({ string: et }) : 'colors.gray.400',
      nt = isDark(rt)(tt);
    let ot = 'white';
    return (
      nt || (ot = 'gray.800'),
      {
        bg: $avatarBg.reference,
        '&:not([data-loaded])': { [$avatarBg.variable]: rt },
        color: ot,
        [$border.variable]: 'colors.white',
        _dark: { [$border.variable]: 'colors.gray.800' },
        borderColor: $border.reference,
        verticalAlign: 'top'
      }
    );
  },
  baseStyle = definePartsStyle(($) => ({
    badge: runIfFn$1(baseStyleBadge, $),
    excessLabel: runIfFn$1(baseStyleExcessLabel, $),
    container: runIfFn$1(baseStyleContainer, $)
  }));
function getSize($) {
  const et = $ !== '100%' ? sizes_default[$] : void 0;
  return definePartsStyle({
    container: { width: $, height: $, fontSize: `calc(${et ?? $} / 2.5)` },
    excessLabel: { width: $, height: $ },
    label: { fontSize: `calc(${et ?? $} / 2.5)`, lineHeight: $ !== '100%' ? et ?? $ : void 0 }
  });
}
var sizes = {
    '2xs': getSize(4),
    xs: getSize(6),
    sm: getSize(8),
    md: getSize(12),
    lg: getSize(16),
    xl: getSize(24),
    '2xl': getSize(32),
    full: getSize('100%')
  },
  avatarTheme = defineMultiStyleConfig({ baseStyle, sizes, defaultProps: { size: 'md' } }),
  components = {
    Accordion: accordionTheme,
    Alert: alertTheme,
    Avatar: avatarTheme,
    Badge: badgeTheme,
    Breadcrumb: breadcrumbTheme,
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    CloseButton: closeButtonTheme,
    Code: codeTheme,
    Container: containerTheme,
    Divider: dividerTheme,
    Drawer: drawerTheme,
    Editable: editableTheme,
    Form: formTheme,
    FormError: formErrorTheme,
    FormLabel: formLabelTheme,
    Heading: headingTheme,
    Input: inputTheme,
    Kbd: kbdTheme,
    Link: linkTheme,
    List: listTheme,
    Menu: menuTheme,
    Modal: modalTheme,
    NumberInput: numberInputTheme,
    PinInput: pinInputTheme,
    Popover: popoverTheme,
    Progress: progressTheme,
    Radio: radioTheme,
    Select: selectTheme,
    Skeleton: skeletonTheme,
    SkipLink: skipLinkTheme,
    Slider: sliderTheme,
    Spinner: spinnerTheme,
    Stat: statTheme,
    Switch: switchTheme,
    Table: tableTheme,
    Tabs: tabsTheme,
    Tag: tagTheme,
    Textarea: textareaTheme,
    Tooltip: tooltipTheme,
    Card: cardTheme
  },
  semanticTokens = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
      'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' }
    }
  },
  styles = {
    global: {
      body: {
        fontFamily: 'body',
        color: 'chakra-body-text',
        bg: 'chakra-body-bg',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
        lineHeight: 'base'
      },
      '*::placeholder': { color: 'chakra-placeholder-color' },
      '*, *::before, &::after': { borderColor: 'chakra-border-color', wordWrap: 'break-word' }
    }
  },
  direction = 'ltr',
  config = { useSystemColorMode: !1, initialColorMode: 'light', cssVarPrefix: 'chakra' },
  theme$1 = { semanticTokens, direction, ...foundations, components, styles, config };
({ ...foundations });
function omit($, et) {
  const tt = {};
  return (
    Object.keys($).forEach((rt) => {
      et.includes(rt) || (tt[rt] = $[rt]);
    }),
    tt
  );
}
function get($, et, tt, rt) {
  const nt = typeof et == 'string' ? et.split('.') : [et];
  for (rt = 0; rt < nt.length && $; rt += 1) $ = $[nt[rt]];
  return $ === void 0 ? tt : $;
}
var memoize = ($) => {
    const et = new WeakMap();
    return (rt, nt, ot, it) => {
      if (typeof rt > 'u') return $(rt, nt, ot);
      et.has(rt) || et.set(rt, new Map());
      const at = et.get(rt);
      if (at.has(nt)) return at.get(nt);
      const st = $(rt, nt, ot, it);
      return at.set(nt, st), st;
    };
  },
  memoizedGet = memoize(get);
function objectFilter($, et) {
  const tt = {};
  return (
    Object.keys($).forEach((rt) => {
      const nt = $[rt];
      et(nt, rt, $) && (tt[rt] = nt);
    }),
    tt
  );
}
var filterUndefined = ($) => objectFilter($, (et) => et != null);
function isFunction$1($) {
  return typeof $ == 'function';
}
function runIfFn($, ...et) {
  return isFunction$1($) ? $(...et) : $;
}
var hasElementType = typeof Element < 'u',
  hasMap = typeof Map == 'function',
  hasSet = typeof Set == 'function',
  hasArrayBuffer = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function equal($, et) {
  if ($ === et) return !0;
  if ($ && et && typeof $ == 'object' && typeof et == 'object') {
    if ($.constructor !== et.constructor) return !1;
    var tt, rt, nt;
    if (Array.isArray($)) {
      if (((tt = $.length), tt != et.length)) return !1;
      for (rt = tt; rt-- !== 0; ) if (!equal($[rt], et[rt])) return !1;
      return !0;
    }
    var ot;
    if (hasMap && $ instanceof Map && et instanceof Map) {
      if ($.size !== et.size) return !1;
      for (ot = $.entries(); !(rt = ot.next()).done; ) if (!et.has(rt.value[0])) return !1;
      for (ot = $.entries(); !(rt = ot.next()).done; )
        if (!equal(rt.value[1], et.get(rt.value[0]))) return !1;
      return !0;
    }
    if (hasSet && $ instanceof Set && et instanceof Set) {
      if ($.size !== et.size) return !1;
      for (ot = $.entries(); !(rt = ot.next()).done; ) if (!et.has(rt.value[0])) return !1;
      return !0;
    }
    if (hasArrayBuffer && ArrayBuffer.isView($) && ArrayBuffer.isView(et)) {
      if (((tt = $.length), tt != et.length)) return !1;
      for (rt = tt; rt-- !== 0; ) if ($[rt] !== et[rt]) return !1;
      return !0;
    }
    if ($.constructor === RegExp) return $.source === et.source && $.flags === et.flags;
    if ($.valueOf !== Object.prototype.valueOf) return $.valueOf() === et.valueOf();
    if ($.toString !== Object.prototype.toString) return $.toString() === et.toString();
    if (((nt = Object.keys($)), (tt = nt.length), tt !== Object.keys(et).length)) return !1;
    for (rt = tt; rt-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(et, nt[rt])) return !1;
    if (hasElementType && $ instanceof Element) return !1;
    for (rt = tt; rt-- !== 0; )
      if (
        !((nt[rt] === '_owner' || nt[rt] === '__v' || nt[rt] === '__o') && $.$$typeof) &&
        !equal($[nt[rt]], et[nt[rt]])
      )
        return !1;
    return !0;
  }
  return $ !== $ && et !== et;
}
var reactFastCompare = function (et, tt) {
  try {
    return equal(et, tt);
  } catch (rt) {
    if ((rt.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1;
    throw rt;
  }
};
function useStyleConfigImpl($, et = {}) {
  var tt;
  const { styleConfig: rt, ...nt } = et,
    { theme: ot, colorMode: it } = useChakra(),
    at = $ ? memoizedGet(ot, `components.${$}`) : void 0,
    st = rt || at,
    lt = mergeWith(
      { theme: ot, colorMode: it },
      (tt = st == null ? void 0 : st.defaultProps) != null ? tt : {},
      filterUndefined(omit(nt, ['children']))
    ),
    ut = reactExports.useRef({});
  if (st) {
    const dt = resolveStyleConfig(st)(lt);
    reactFastCompare(ut.current, dt) || (ut.current = dt);
  }
  return ut.current;
}
function useStyleConfig($, et = {}) {
  return useStyleConfigImpl($, et);
}
function useMultiStyleConfig($, et = {}) {
  return useStyleConfigImpl($, et);
}
var allPropNames = new Set([
    ...propNames,
    'textStyle',
    'layerStyle',
    'apply',
    'noOfLines',
    'focusBorderColor',
    'errorBorderColor',
    'as',
    '__css',
    'css',
    'sx'
  ]),
  validHTMLProps = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']);
function shouldForwardProp($) {
  return validHTMLProps.has($) || !allPropNames.has($);
}
var reactPropsRegex =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  isPropValid = memoize$2(function ($) {
    return (
      reactPropsRegex.test($) ||
      ($.charCodeAt(0) === 111 && $.charCodeAt(1) === 110 && $.charCodeAt(2) < 91)
    );
  }),
  testOmitPropsOnStringTag = isPropValid,
  testOmitPropsOnComponent = function (et) {
    return et !== 'theme';
  },
  getDefaultShouldForwardProp = function (et) {
    return typeof et == 'string' && et.charCodeAt(0) > 96
      ? testOmitPropsOnStringTag
      : testOmitPropsOnComponent;
  },
  composeShouldForwardProps = function (et, tt, rt) {
    var nt;
    if (tt) {
      var ot = tt.shouldForwardProp;
      nt =
        et.__emotion_forwardProp && ot
          ? function (it) {
              return et.__emotion_forwardProp(it) && ot(it);
            }
          : ot;
    }
    return typeof nt != 'function' && rt && (nt = et.__emotion_forwardProp), nt;
  },
  Insertion = function (et) {
    var tt = et.cache,
      rt = et.serialized,
      nt = et.isStringTag;
    return (
      registerStyles(tt, rt, nt),
      useInsertionEffectAlwaysWithSyncFallback(function () {
        return insertStyles(tt, rt, nt);
      }),
      null
    );
  },
  createStyled = function $(et, tt) {
    var rt = et.__emotion_real === et,
      nt = (rt && et.__emotion_base) || et,
      ot,
      it;
    tt !== void 0 && ((ot = tt.label), (it = tt.target));
    var at = composeShouldForwardProps(et, tt, rt),
      st = at || getDefaultShouldForwardProp(nt),
      lt = !st('as');
    return function () {
      var ut = arguments,
        ct = rt && et.__emotion_styles !== void 0 ? et.__emotion_styles.slice(0) : [];
      if ((ot !== void 0 && ct.push('label:' + ot + ';'), ut[0] == null || ut[0].raw === void 0))
        ct.push.apply(ct, ut);
      else {
        ct.push(ut[0][0]);
        for (var dt = ut.length, ft = 1; ft < dt; ft++) ct.push(ut[ft], ut[0][ft]);
      }
      var pt = withEmotionCache(function (gt, bt, ht) {
        var mt = (lt && gt.as) || nt,
          yt = '',
          St = [],
          _t = gt;
        if (gt.theme == null) {
          _t = {};
          for (var Ct in gt) _t[Ct] = gt[Ct];
          _t.theme = reactExports.useContext(ThemeContext);
        }
        typeof gt.className == 'string'
          ? (yt = getRegisteredStyles(bt.registered, St, gt.className))
          : gt.className != null && (yt = gt.className + ' ');
        var wt = serializeStyles(ct.concat(St), bt.registered, _t);
        (yt += bt.key + '-' + wt.name), it !== void 0 && (yt += ' ' + it);
        var Et = lt && at === void 0 ? getDefaultShouldForwardProp(mt) : st,
          Rt = {};
        for (var kt in gt) (lt && kt === 'as') || (Et(kt) && (Rt[kt] = gt[kt]));
        return (
          (Rt.className = yt),
          (Rt.ref = ht),
          reactExports.createElement(
            reactExports.Fragment,
            null,
            reactExports.createElement(Insertion, {
              cache: bt,
              serialized: wt,
              isStringTag: typeof mt == 'string'
            }),
            reactExports.createElement(mt, Rt)
          )
        );
      });
      return (
        (pt.displayName =
          ot !== void 0
            ? ot
            : 'Styled(' +
              (typeof nt == 'string' ? nt : nt.displayName || nt.name || 'Component') +
              ')'),
        (pt.defaultProps = et.defaultProps),
        (pt.__emotion_real = pt),
        (pt.__emotion_base = nt),
        (pt.__emotion_styles = ct),
        (pt.__emotion_forwardProp = at),
        Object.defineProperty(pt, 'toString', {
          value: function () {
            return '.' + it;
          }
        }),
        (pt.withComponent = function (gt, bt) {
          return $(
            gt,
            _extends$3({}, tt, bt, { shouldForwardProp: composeShouldForwardProps(pt, bt, !0) })
          ).apply(void 0, ct);
        }),
        pt
      );
    };
  },
  tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
  ],
  newStyled = createStyled.bind();
tags.forEach(function ($) {
  newStyled[$] = newStyled($);
});
var _a,
  emotion_styled = (_a = newStyled.default) != null ? _a : newStyled,
  toCSSObject =
    ({ baseStyle: $ }) =>
    (et) => {
      const { theme: tt, css: rt, __css: nt, sx: ot, ...it } = et,
        at = objectFilter(it, (ct, dt) => isStyleProp(dt)),
        st = runIfFn($, et),
        lt = Object.assign({}, nt, st, filterUndefined(at), ot),
        ut = css(lt)(et.theme);
      return rt ? [ut, rt] : ut;
    };
function styled($, et) {
  const { baseStyle: tt, ...rt } = et ?? {};
  rt.shouldForwardProp || (rt.shouldForwardProp = shouldForwardProp);
  const nt = toCSSObject({ baseStyle: tt }),
    ot = emotion_styled($, rt)(nt);
  return React.forwardRef(function (st, lt) {
    const { colorMode: ut, forced: ct } = useColorMode();
    return React.createElement(ot, { ref: lt, 'data-theme': ct ? ut : void 0, ...st });
  });
}
function factory() {
  const $ = new Map();
  return new Proxy(styled, {
    apply(et, tt, rt) {
      return styled(...rt);
    },
    get(et, tt) {
      return $.has(tt) || $.set(tt, styled(tt)), $.get(tt);
    }
  });
}
var chakra = factory();
function forwardRef($) {
  return reactExports.forwardRef($);
}
function createContext($ = {}) {
  const {
      strict: et = !0,
      errorMessage:
        tt = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
      name: rt
    } = $,
    nt = reactExports.createContext(void 0);
  nt.displayName = rt;
  function ot() {
    var it;
    const at = reactExports.useContext(nt);
    if (!at && et) {
      const st = new Error(tt);
      throw (
        ((st.name = 'ContextError'),
        (it = Error.captureStackTrace) == null || it.call(Error, st, ot),
        st)
      );
    }
    return at;
  }
  return [nt.Provider, ot, nt];
}
function ThemeProvider($) {
  const { cssVarsRoot: et, theme: tt, children: rt } = $,
    nt = reactExports.useMemo(() => toCSSVar(tt), [tt]);
  return jsxs(ThemeProvider$1, { theme: nt, children: [jsx(CSSVars, { root: et }), rt] });
}
function CSSVars({ root: $ = ':host, :root' }) {
  const et = [$, '[data-theme]'].join(',');
  return jsx(Global, { styles: (tt) => ({ [et]: tt.__cssVars }) });
}
createContext({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` '
});
function GlobalStyle() {
  const { colorMode: $ } = useColorMode();
  return jsx(Global, {
    styles: (et) => {
      const tt = memoizedGet(et, 'styles.global'),
        rt = runIfFn(tt, { theme: et, colorMode: $ });
      return rt ? css(rt)(et) : void 0;
    }
  });
}
var doc = {
    body: { classList: { add() {}, remove() {} } },
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
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
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        }
      };
    }
  },
  ssrDocument = doc,
  noop$2 = () => {},
  win = {
    document: ssrDocument,
    navigator: { userAgent: '' },
    CustomEvent: function () {
      return this;
    },
    addEventListener: noop$2,
    removeEventListener: noop$2,
    getComputedStyle() {
      return {
        getPropertyValue() {
          return '';
        }
      };
    },
    matchMedia() {
      return { matches: !1, addListener: noop$2, removeListener: noop$2 };
    },
    requestAnimationFrame($) {
      return typeof setTimeout > 'u' ? ($(), null) : setTimeout($, 0);
    },
    cancelAnimationFrame($) {
      typeof setTimeout > 'u' || clearTimeout($);
    },
    setTimeout: () => 0,
    clearTimeout: noop$2,
    setInterval: () => 0,
    clearInterval: noop$2
  },
  ssrWindow = win,
  mockEnv = { window: ssrWindow, document: ssrDocument },
  defaultEnv = typeof window < 'u' ? { window, document } : mockEnv,
  EnvironmentContext = reactExports.createContext(defaultEnv);
EnvironmentContext.displayName = 'EnvironmentContext';
function EnvironmentProvider($) {
  const { children: et, environment: tt } = $,
    [rt, nt] = reactExports.useState(null),
    [ot, it] = reactExports.useState(!1);
  reactExports.useEffect(() => it(!0), []);
  const at = reactExports.useMemo(() => {
    if (tt) return tt;
    const st = rt == null ? void 0 : rt.ownerDocument,
      lt = rt == null ? void 0 : rt.ownerDocument.defaultView;
    return st ? { document: st, window: lt } : defaultEnv;
  }, [rt, tt]);
  return jsxs(EnvironmentContext.Provider, {
    value: at,
    children: [
      et,
      !tt &&
        ot &&
        jsx('span', {
          id: '__chakra_env',
          hidden: !0,
          ref: (st) => {
            reactExports.startTransition(() => {
              st && nt(st);
            });
          }
        })
    ]
  });
}
EnvironmentProvider.displayName = 'EnvironmentProvider';
var ChakraProvider$1 = ($) => {
    const {
        children: et,
        colorModeManager: tt,
        portalZIndex: rt,
        resetCSS: nt = !0,
        theme: ot = {},
        environment: it,
        cssVarsRoot: at
      } = $,
      st = jsx(EnvironmentProvider, { environment: it, children: et });
    return jsx(ThemeProvider, {
      theme: ot,
      cssVarsRoot: at,
      children: jsxs(ColorModeProvider, {
        colorModeManager: tt,
        options: ot.config,
        children: [
          nt ? jsx(CSSReset, {}) : jsx(CSSPolyfill, {}),
          jsx(GlobalStyle, {}),
          rt ? jsx(PortalManager, { zIndex: rt, children: st }) : st
        ]
      })
    });
  },
  findById = ($, et) => $.find((tt) => tt.id === et);
function findToast($, et) {
  const tt = getToastPosition($, et),
    rt = tt ? $[tt].findIndex((nt) => nt.id === et) : -1;
  return { position: tt, index: rt };
}
function getToastPosition($, et) {
  for (const [tt, rt] of Object.entries($)) if (findById(rt, et)) return tt;
}
function getToastStyle($) {
  const et = $.includes('right'),
    tt = $.includes('left');
  let rt = 'center';
  return (
    et && (rt = 'flex-end'),
    tt && (rt = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: rt }
  );
}
function getToastListStyle($) {
  const tt = $ === 'top' || $ === 'bottom' ? '0 auto' : void 0,
    rt = $.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
    nt = $.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
    ot = $.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
    it = $.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)';
  return {
    position: 'fixed',
    zIndex: 5500,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: tt,
    top: rt,
    bottom: nt,
    right: ot,
    left: it
  };
}
var fallbackIcon = {
    path: jsxs('g', {
      stroke: 'currentColor',
      strokeWidth: '1.5',
      children: [
        jsx('path', {
          strokeLinecap: 'round',
          fill: 'none',
          d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'
        }),
        jsx('path', {
          fill: 'currentColor',
          strokeLinecap: 'round',
          d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'
        }),
        jsx('circle', { fill: 'none', strokeMiterlimit: '10', cx: '12', cy: '12', r: '11.25' })
      ]
    }),
    viewBox: '0 0 24 24'
  },
  Icon = forwardRef(($, et) => {
    const {
        as: tt,
        viewBox: rt,
        color: nt = 'currentColor',
        focusable: ot = !1,
        children: it,
        className: at,
        __css: st,
        ...lt
      } = $,
      ut = cx('chakra-icon', at),
      ct = useStyleConfig('Icon', $),
      dt = {
        w: '1em',
        h: '1em',
        display: 'inline-block',
        lineHeight: '1em',
        flexShrink: 0,
        color: nt,
        ...st,
        ...ct
      },
      ft = { ref: et, focusable: ot, className: ut, __css: dt },
      pt = rt ?? fallbackIcon.viewBox;
    if (tt && typeof tt != 'string') return jsx(chakra.svg, { as: tt, ...ft, ...lt });
    const gt = it ?? fallbackIcon.path;
    return jsx(chakra.svg, { verticalAlign: 'middle', viewBox: pt, ...ft, ...lt, children: gt });
  });
Icon.displayName = 'Icon';
function CheckIcon($) {
  return jsx(Icon, {
    viewBox: '0 0 24 24',
    ...$,
    children: jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z'
    })
  });
}
function InfoIcon($) {
  return jsx(Icon, {
    viewBox: '0 0 24 24',
    ...$,
    children: jsx('path', {
      fill: 'currentColor',
      d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z'
    })
  });
}
function WarningIcon($) {
  return jsx(Icon, {
    viewBox: '0 0 24 24',
    ...$,
    children: jsx('path', {
      fill: 'currentColor',
      d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z'
    })
  });
}
var spin = keyframes$1({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }),
  Spinner = forwardRef(($, et) => {
    const tt = useStyleConfig('Spinner', $),
      {
        label: rt = 'Loading...',
        thickness: nt = '2px',
        speed: ot = '0.45s',
        emptyColor: it = 'transparent',
        className: at,
        ...st
      } = omitThemingProps($),
      lt = cx('chakra-spinner', at),
      ut = {
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: nt,
        borderBottomColor: it,
        borderLeftColor: it,
        animation: `${spin} ${ot} linear infinite`,
        ...tt
      };
    return jsx(chakra.div, {
      ref: et,
      __css: ut,
      className: lt,
      ...st,
      children: rt && jsx(chakra.span, { srOnly: !0, children: rt })
    });
  });
Spinner.displayName = 'Spinner';
var [AlertProvider, useAlertContext] = createContext$1({
    name: 'AlertContext',
    hookName: 'useAlertContext',
    providerName: '<Alert />'
  }),
  [AlertStylesProvider, useAlertStyles] = createContext$1({
    name: 'AlertStylesContext',
    hookName: 'useAlertStyles',
    providerName: '<Alert />'
  }),
  STATUSES = {
    info: { icon: InfoIcon, colorScheme: 'blue' },
    warning: { icon: WarningIcon, colorScheme: 'orange' },
    success: { icon: CheckIcon, colorScheme: 'green' },
    error: { icon: WarningIcon, colorScheme: 'red' },
    loading: { icon: Spinner, colorScheme: 'blue' }
  };
function getStatusColorScheme($) {
  return STATUSES[$].colorScheme;
}
function getStatusIcon($) {
  return STATUSES[$].icon;
}
var AlertDescription = forwardRef(function (et, tt) {
  const nt = { display: 'inline', ...useAlertStyles().description };
  return jsx(chakra.div, {
    ref: tt,
    ...et,
    className: cx('chakra-alert__desc', et.className),
    __css: nt
  });
});
AlertDescription.displayName = 'AlertDescription';
function AlertIcon($) {
  const { status: et } = useAlertContext(),
    tt = getStatusIcon(et),
    rt = useAlertStyles(),
    nt = et === 'loading' ? rt.spinner : rt.icon;
  return jsx(chakra.span, {
    display: 'inherit',
    ...$,
    className: cx('chakra-alert__icon', $.className),
    __css: nt,
    children: $.children || jsx(tt, { h: '100%', w: '100%' })
  });
}
AlertIcon.displayName = 'AlertIcon';
var AlertTitle = forwardRef(function (et, tt) {
  const rt = useAlertStyles();
  return jsx(chakra.div, {
    ref: tt,
    ...et,
    className: cx('chakra-alert__title', et.className),
    __css: rt.title
  });
});
AlertTitle.displayName = 'AlertTitle';
var Alert = forwardRef(function (et, tt) {
  var rt;
  const { status: nt = 'info', addRole: ot = !0, ...it } = omitThemingProps(et),
    at = (rt = et.colorScheme) != null ? rt : getStatusColorScheme(nt),
    st = useMultiStyleConfig('Alert', { ...et, colorScheme: at }),
    lt = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...st.container
    };
  return jsx(AlertProvider, {
    value: { status: nt },
    children: jsx(AlertStylesProvider, {
      value: st,
      children: jsx(chakra.div, {
        role: ot ? 'alert' : void 0,
        ref: tt,
        ...it,
        className: cx('chakra-alert', et.className),
        __css: lt
      })
    })
  });
});
Alert.displayName = 'Alert';
function CloseIcon($) {
  return jsx(Icon, {
    focusable: 'false',
    'aria-hidden': !0,
    ...$,
    children: jsx('path', {
      fill: 'currentColor',
      d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z'
    })
  });
}
var CloseButton = forwardRef(function (et, tt) {
  const rt = useStyleConfig('CloseButton', et),
    { children: nt, isDisabled: ot, __css: it, ...at } = omitThemingProps(et),
    st = {
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    };
  return jsx(chakra.button, {
    type: 'button',
    'aria-label': 'Close',
    ref: tt,
    disabled: ot,
    __css: { ...st, ...rt, ...it },
    ...at,
    children: nt || jsx(CloseIcon, { width: '1em', height: '1em' })
  });
});
CloseButton.displayName = 'CloseButton';
var initialState = {
    top: [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    bottom: [],
    'bottom-right': []
  },
  toastStore = createStore(initialState);
function createStore($) {
  let et = $;
  const tt = new Set(),
    rt = (nt) => {
      (et = nt(et)), tt.forEach((ot) => ot());
    };
  return {
    getState: () => et,
    subscribe: (nt) => (
      tt.add(nt),
      () => {
        rt(() => $), tt.delete(nt);
      }
    ),
    removeToast: (nt, ot) => {
      rt((it) => ({ ...it, [ot]: it[ot].filter((at) => at.id != nt) }));
    },
    notify: (nt, ot) => {
      const it = createToast(nt, ot),
        { position: at, id: st } = it;
      return (
        rt((lt) => {
          var ut, ct;
          const ft = at.includes('top')
            ? [it, ...((ut = lt[at]) != null ? ut : [])]
            : [...((ct = lt[at]) != null ? ct : []), it];
          return { ...lt, [at]: ft };
        }),
        st
      );
    },
    update: (nt, ot) => {
      nt &&
        rt((it) => {
          const at = { ...it },
            { position: st, index: lt } = findToast(at, nt);
          return (
            st &&
              lt !== -1 &&
              (at[st][lt] = { ...at[st][lt], ...ot, message: createRenderToast(ot) }),
            at
          );
        });
    },
    closeAll: ({ positions: nt } = {}) => {
      rt((ot) =>
        (nt ?? ['bottom', 'bottom-right', 'bottom-left', 'top', 'top-left', 'top-right']).reduce(
          (st, lt) => ((st[lt] = ot[lt].map((ut) => ({ ...ut, requestClose: !0 }))), st),
          { ...ot }
        )
      );
    },
    close: (nt) => {
      rt((ot) => {
        const it = getToastPosition(ot, nt);
        return it
          ? { ...ot, [it]: ot[it].map((at) => (at.id == nt ? { ...at, requestClose: !0 } : at)) }
          : ot;
      });
    },
    isActive: (nt) => Boolean(findToast(toastStore.getState(), nt).position)
  };
}
var counter = 0;
function createToast($, et = {}) {
  var tt, rt;
  counter += 1;
  const nt = (tt = et.id) != null ? tt : counter,
    ot = (rt = et.position) != null ? rt : 'bottom';
  return {
    id: nt,
    message: $,
    position: ot,
    duration: et.duration,
    onCloseComplete: et.onCloseComplete,
    onRequestRemove: () => toastStore.removeToast(String(nt), ot),
    status: et.status,
    requestClose: !1,
    containerStyle: et.containerStyle
  };
}
var Toast = ($) => {
  const {
      status: et,
      variant: tt = 'solid',
      id: rt,
      title: nt,
      isClosable: ot,
      onClose: it,
      description: at,
      icon: st
    } = $,
    lt = rt
      ? { root: `toast-${rt}`, title: `toast-${rt}-title`, description: `toast-${rt}-description` }
      : void 0;
  return jsxs(Alert, {
    addRole: !1,
    status: et,
    variant: tt,
    id: lt == null ? void 0 : lt.root,
    alignItems: 'start',
    borderRadius: 'md',
    boxShadow: 'lg',
    paddingEnd: 8,
    textAlign: 'start',
    width: 'auto',
    children: [
      jsx(AlertIcon, { children: st }),
      jsxs(chakra.div, {
        flex: '1',
        maxWidth: '100%',
        children: [
          nt && jsx(AlertTitle, { id: lt == null ? void 0 : lt.title, children: nt }),
          at &&
            jsx(AlertDescription, {
              id: lt == null ? void 0 : lt.description,
              display: 'block',
              children: at
            })
        ]
      }),
      ot && jsx(CloseButton, { size: 'sm', onClick: it, position: 'absolute', insetEnd: 1, top: 1 })
    ]
  });
};
function createRenderToast($ = {}) {
  const { render: et, toastComponent: tt = Toast } = $;
  return (nt) => (typeof et == 'function' ? et({ ...nt, ...$ }) : jsx(tt, { ...nt, ...$ }));
}
function useCallbackRef($, et = []) {
  const tt = reactExports.useRef($);
  return (
    reactExports.useEffect(() => {
      tt.current = $;
    }),
    reactExports.useCallback((...rt) => {
      var nt;
      return (nt = tt.current) == null ? void 0 : nt.call(tt, ...rt);
    }, et)
  );
}
function useTimeout($, et) {
  const tt = useCallbackRef($);
  reactExports.useEffect(() => {
    if (et == null) return;
    let rt = null;
    return (
      (rt = window.setTimeout(() => {
        tt();
      }, et)),
      () => {
        rt && window.clearTimeout(rt);
      }
    );
  }, [et, tt]);
}
function useUpdateEffect($, et) {
  const tt = reactExports.useRef(!1),
    rt = reactExports.useRef(!1);
  reactExports.useEffect(() => {
    if (tt.current && rt.current) return $();
    rt.current = !0;
  }, et),
    reactExports.useEffect(
      () => (
        (tt.current = !0),
        () => {
          tt.current = !1;
        }
      ),
      []
    );
}
const MotionConfigContext = reactExports.createContext({
    transformPagePoint: ($) => $,
    isStatic: !1,
    reducedMotion: 'never'
  }),
  MotionContext = reactExports.createContext({});
function useVisualElementContext() {
  return reactExports.useContext(MotionContext).visualElement;
}
const PresenceContext = reactExports.createContext(null),
  isBrowser = typeof document < 'u',
  useIsomorphicLayoutEffect = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect,
  LazyContext = reactExports.createContext({ strict: !1 });
function useVisualElement($, et, tt, rt) {
  const nt = useVisualElementContext(),
    ot = reactExports.useContext(LazyContext),
    it = reactExports.useContext(PresenceContext),
    at = reactExports.useContext(MotionConfigContext).reducedMotion,
    st = reactExports.useRef();
  (rt = rt || ot.renderer),
    !st.current &&
      rt &&
      (st.current = rt($, {
        visualState: et,
        parent: nt,
        props: tt,
        presenceId: it ? it.id : void 0,
        blockInitialAnimation: it ? it.initial === !1 : !1,
        reducedMotionConfig: at
      }));
  const lt = st.current;
  return (
    useIsomorphicLayoutEffect(() => {
      lt && lt.render();
    }),
    useIsomorphicLayoutEffect(() => {
      lt && lt.animationState && lt.animationState.animateChanges();
    }),
    lt
  );
}
function isRefObject($) {
  return typeof $ == 'object' && Object.prototype.hasOwnProperty.call($, 'current');
}
function useMotionRef($, et, tt) {
  return reactExports.useCallback(
    (rt) => {
      rt && $.mount && $.mount(rt),
        et && (rt ? et.mount(rt) : et.unmount()),
        tt && (typeof tt == 'function' ? tt(rt) : isRefObject(tt) && (tt.current = rt));
    },
    [et]
  );
}
function isVariantLabel($) {
  return typeof $ == 'string' || Array.isArray($);
}
function isAnimationControls($) {
  return typeof $ == 'object' && typeof $.start == 'function';
}
const variantProps$1 = [
  'initial',
  'animate',
  'exit',
  'whileHover',
  'whileDrag',
  'whileTap',
  'whileFocus',
  'whileInView'
];
function isControllingVariants($) {
  return isAnimationControls($.animate) || variantProps$1.some((et) => isVariantLabel($[et]));
}
function isVariantNode($) {
  return Boolean(isControllingVariants($) || $.variants);
}
function getCurrentTreeVariants($, et) {
  if (isControllingVariants($)) {
    const { initial: tt, animate: rt } = $;
    return {
      initial: tt === !1 || isVariantLabel(tt) ? tt : void 0,
      animate: isVariantLabel(rt) ? rt : void 0
    };
  }
  return $.inherit !== !1 ? et : {};
}
function useCreateMotionContext($) {
  const { initial: et, animate: tt } = getCurrentTreeVariants(
    $,
    reactExports.useContext(MotionContext)
  );
  return reactExports.useMemo(
    () => ({ initial: et, animate: tt }),
    [variantLabelsAsDependency(et), variantLabelsAsDependency(tt)]
  );
}
function variantLabelsAsDependency($) {
  return Array.isArray($) ? $.join(' ') : $;
}
const createDefinition = ($) => ({ isEnabled: (et) => $.some((tt) => !!et[tt]) }),
  featureDefinitions = {
    measureLayout: createDefinition(['layout', 'layoutId', 'drag']),
    animation: createDefinition([
      'animate',
      'exit',
      'variants',
      'whileHover',
      'whileTap',
      'whileFocus',
      'whileDrag',
      'whileInView'
    ]),
    exit: createDefinition(['exit']),
    drag: createDefinition(['drag', 'dragControls']),
    focus: createDefinition(['whileFocus']),
    hover: createDefinition(['whileHover', 'onHoverStart', 'onHoverEnd']),
    tap: createDefinition(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
    pan: createDefinition(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
    inView: createDefinition(['whileInView', 'onViewportEnter', 'onViewportLeave'])
  };
function loadFeatures($) {
  for (const et in $)
    et === 'projectionNodeConstructor'
      ? (featureDefinitions.projectionNodeConstructor = $[et])
      : (featureDefinitions[et].Component = $[et]);
}
function useConstant($) {
  const et = reactExports.useRef(null);
  return et.current === null && (et.current = $()), et.current;
}
const globalProjectionState = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let id$1 = 1;
function useProjectionId() {
  return useConstant(() => {
    if (globalProjectionState.hasEverUpdated) return id$1++;
  });
}
const LayoutGroupContext = reactExports.createContext({});
class VisualElementHandler extends React.Component {
  getSnapshotBeforeUpdate() {
    const { visualElement: et, props: tt } = this.props;
    return et && et.setProps(tt), null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
const SwitchLayoutGroupContext = reactExports.createContext({}),
  motionComponentSymbol = Symbol.for('motionComponentSymbol');
function createMotionComponent({
  preloadedFeatures: $,
  createVisualElement: et,
  projectionNodeConstructor: tt,
  useRender: rt,
  useVisualState: nt,
  Component: ot
}) {
  $ && loadFeatures($);
  function it(st, lt) {
    const ut = {
        ...reactExports.useContext(MotionConfigContext),
        ...st,
        layoutId: useLayoutId(st)
      },
      { isStatic: ct } = ut;
    let dt = null;
    const ft = useCreateMotionContext(st),
      pt = ct ? void 0 : useProjectionId(),
      gt = nt(st, ct);
    if (!ct && isBrowser) {
      ft.visualElement = useVisualElement(ot, gt, ut, et);
      const bt = reactExports.useContext(LazyContext).strict,
        ht = reactExports.useContext(SwitchLayoutGroupContext);
      ft.visualElement &&
        (dt = ft.visualElement.loadFeatures(
          ut,
          bt,
          $,
          pt,
          tt || featureDefinitions.projectionNodeConstructor,
          ht
        ));
    }
    return reactExports.createElement(
      VisualElementHandler,
      { visualElement: ft.visualElement, props: ut },
      dt,
      reactExports.createElement(
        MotionContext.Provider,
        { value: ft },
        rt(ot, st, pt, useMotionRef(gt, ft.visualElement, lt), gt, ct, ft.visualElement)
      )
    );
  }
  const at = reactExports.forwardRef(it);
  return (at[motionComponentSymbol] = ot), at;
}
function useLayoutId({ layoutId: $ }) {
  const et = reactExports.useContext(LayoutGroupContext).id;
  return et && $ !== void 0 ? et + '-' + $ : $;
}
function createMotionProxy($) {
  function et(rt, nt = {}) {
    return createMotionComponent($(rt, nt));
  }
  if (typeof Proxy > 'u') return et;
  const tt = new Map();
  return new Proxy(et, { get: (rt, nt) => (tt.has(nt) || tt.set(nt, et(nt)), tt.get(nt)) });
}
const lowercaseSVGElements = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view'
];
function isSVGComponent($) {
  return typeof $ != 'string' || $.includes('-')
    ? !1
    : !!(lowercaseSVGElements.indexOf($) > -1 || /[A-Z]/.test($));
}
const scaleCorrectors = {};
function addScaleCorrector($) {
  Object.assign(scaleCorrectors, $);
}
const transformPropOrder = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY'
  ],
  transformProps = new Set(transformPropOrder);
function isForcedMotionValue($, { layout: et, layoutId: tt }) {
  return (
    transformProps.has($) ||
    $.startsWith('origin') ||
    ((et || tt !== void 0) && (!!scaleCorrectors[$] || $ === 'opacity'))
  );
}
const isMotionValue = ($) => !!($ != null && $.getVelocity),
  translateAlias = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective'
  },
  sortTransformProps = ($, et) => transformPropOrder.indexOf($) - transformPropOrder.indexOf(et);
function buildTransform(
  { transform: $, transformKeys: et },
  { enableHardwareAcceleration: tt = !0, allowTransformNone: rt = !0 },
  nt,
  ot
) {
  let it = '';
  et.sort(sortTransformProps);
  for (const at of et) it += `${translateAlias[at] || at}(${$[at]}) `;
  return (
    tt && !$.z && (it += 'translateZ(0)'),
    (it = it.trim()),
    ot ? (it = ot($, nt ? '' : it)) : rt && nt && (it = 'none'),
    it
  );
}
function isCSSVariable$1($) {
  return $.startsWith('--');
}
const getValueAsType = ($, et) => (et && typeof $ == 'number' ? et.transform($) : $),
  clamp = ($, et, tt) => Math.min(Math.max(tt, $), et),
  number = { test: ($) => typeof $ == 'number', parse: parseFloat, transform: ($) => $ },
  alpha = { ...number, transform: ($) => clamp(0, 1, $) },
  scale = { ...number, default: 1 },
  sanitize = ($) => Math.round($ * 1e5) / 1e5,
  floatRegex = /(-)?([\d]*\.?[\d])+/g,
  colorRegex =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  singleColorRegex =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString$1($) {
  return typeof $ == 'string';
}
const createUnitType = ($) => ({
    test: (et) => isString$1(et) && et.endsWith($) && et.split(' ').length === 1,
    parse: parseFloat,
    transform: (et) => `${et}${$}`
  }),
  degrees = createUnitType('deg'),
  percent = createUnitType('%'),
  px = createUnitType('px'),
  vh = createUnitType('vh'),
  vw = createUnitType('vw'),
  progressPercentage = {
    ...percent,
    parse: ($) => percent.parse($) / 100,
    transform: ($) => percent.transform($ * 100)
  },
  int = { ...number, transform: Math.round },
  numberValueTypes = {
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    zIndex: int,
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  };
function buildHTMLStyles($, et, tt, rt) {
  const { style: nt, vars: ot, transform: it, transformKeys: at, transformOrigin: st } = $;
  at.length = 0;
  let lt = !1,
    ut = !1,
    ct = !0;
  for (const dt in et) {
    const ft = et[dt];
    if (isCSSVariable$1(dt)) {
      ot[dt] = ft;
      continue;
    }
    const pt = numberValueTypes[dt],
      gt = getValueAsType(ft, pt);
    if (transformProps.has(dt)) {
      if (((lt = !0), (it[dt] = gt), at.push(dt), !ct)) continue;
      ft !== (pt.default || 0) && (ct = !1);
    } else dt.startsWith('origin') ? ((ut = !0), (st[dt] = gt)) : (nt[dt] = gt);
  }
  if (
    (et.transform ||
      (lt || rt
        ? (nt.transform = buildTransform($, tt, ct, rt))
        : nt.transform && (nt.transform = 'none')),
    ut)
  ) {
    const { originX: dt = '50%', originY: ft = '50%', originZ: pt = 0 } = st;
    nt.transformOrigin = `${dt} ${ft} ${pt}`;
  }
}
const createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function copyRawValuesOnly($, et, tt) {
  for (const rt in et) !isMotionValue(et[rt]) && !isForcedMotionValue(rt, tt) && ($[rt] = et[rt]);
}
function useInitialMotionValues({ transformTemplate: $ }, et, tt) {
  return reactExports.useMemo(() => {
    const rt = createHtmlRenderState();
    return (
      buildHTMLStyles(rt, et, { enableHardwareAcceleration: !tt }, $),
      Object.assign({}, rt.vars, rt.style)
    );
  }, [et]);
}
function useStyle($, et, tt) {
  const rt = $.style || {},
    nt = {};
  return (
    copyRawValuesOnly(nt, rt, $),
    Object.assign(nt, useInitialMotionValues($, et, tt)),
    $.transformValues ? $.transformValues(nt) : nt
  );
}
function useHTMLProps($, et, tt) {
  const rt = {},
    nt = useStyle($, et, tt);
  return (
    $.drag &&
      $.dragListener !== !1 &&
      ((rt.draggable = !1),
      (nt.userSelect = nt.WebkitUserSelect = nt.WebkitTouchCallout = 'none'),
      (nt.touchAction = $.drag === !0 ? 'none' : `pan-${$.drag === 'x' ? 'y' : 'x'}`)),
    (rt.style = nt),
    rt
  );
}
const animationProps = [
    'animate',
    'exit',
    'variants',
    'whileHover',
    'whileTap',
    'whileFocus',
    'whileDrag',
    'whileInView'
  ],
  tapProps = ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
  panProps = ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
  inViewProps = ['whileInView', 'onViewportEnter', 'onViewportLeave', 'viewport'],
  validMotionProps = new Set([
    'initial',
    'style',
    'values',
    'variants',
    'transition',
    'transformTemplate',
    'transformValues',
    'custom',
    'inherit',
    'layout',
    'layoutId',
    'layoutDependency',
    'onLayoutAnimationStart',
    'onLayoutAnimationComplete',
    'onLayoutMeasure',
    'onBeforeLayoutMeasure',
    'onAnimationStart',
    'onAnimationComplete',
    'onUpdate',
    'onDragStart',
    'onDrag',
    'onDragEnd',
    'onMeasureDragConstraints',
    'onDirectionLock',
    'onDragTransitionEnd',
    'drag',
    'dragControls',
    'dragListener',
    'dragConstraints',
    'dragDirectionLock',
    'dragSnapToOrigin',
    '_dragX',
    '_dragY',
    'dragElastic',
    'dragMomentum',
    'dragPropagation',
    'dragTransition',
    'onHoverStart',
    'onHoverEnd',
    'layoutScroll',
    ...inViewProps,
    ...tapProps,
    ...animationProps,
    ...panProps
  ]);
function isValidMotionProp($) {
  return validMotionProps.has($);
}
let shouldForward = ($) => !isValidMotionProp($);
function loadExternalIsValidProp($) {
  $ && (shouldForward = (et) => (et.startsWith('on') ? !isValidMotionProp(et) : $(et)));
}
try {
  loadExternalIsValidProp(require('@emotion/is-prop-valid').default);
} catch {}
function filterProps($, et, tt) {
  const rt = {};
  for (const nt in $)
    (shouldForward(nt) ||
      (tt === !0 && isValidMotionProp(nt)) ||
      (!et && !isValidMotionProp(nt)) ||
      ($.draggable && nt.startsWith('onDrag'))) &&
      (rt[nt] = $[nt]);
  return rt;
}
function calcOrigin$1($, et, tt) {
  return typeof $ == 'string' ? $ : px.transform(et + tt * $);
}
function calcSVGTransformOrigin($, et, tt) {
  const rt = calcOrigin$1(et, $.x, $.width),
    nt = calcOrigin$1(tt, $.y, $.height);
  return `${rt} ${nt}`;
}
const dashKeys = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  camelKeys = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function buildSVGPath($, et, tt = 1, rt = 0, nt = !0) {
  $.pathLength = 1;
  const ot = nt ? dashKeys : camelKeys;
  $[ot.offset] = px.transform(-rt);
  const it = px.transform(et),
    at = px.transform(tt);
  $[ot.array] = `${it} ${at}`;
}
function buildSVGAttrs(
  $,
  {
    attrX: et,
    attrY: tt,
    originX: rt,
    originY: nt,
    pathLength: ot,
    pathSpacing: it = 1,
    pathOffset: at = 0,
    ...st
  },
  lt,
  ut,
  ct
) {
  if ((buildHTMLStyles($, st, lt, ct), ut)) {
    $.style.viewBox && ($.attrs.viewBox = $.style.viewBox);
    return;
  }
  ($.attrs = $.style), ($.style = {});
  const { attrs: dt, style: ft, dimensions: pt } = $;
  dt.transform && (pt && (ft.transform = dt.transform), delete dt.transform),
    pt &&
      (rt !== void 0 || nt !== void 0 || ft.transform) &&
      (ft.transformOrigin = calcSVGTransformOrigin(
        pt,
        rt !== void 0 ? rt : 0.5,
        nt !== void 0 ? nt : 0.5
      )),
    et !== void 0 && (dt.x = et),
    tt !== void 0 && (dt.y = tt),
    ot !== void 0 && buildSVGPath(dt, ot, it, at, !1);
}
const createSvgRenderState = () => ({ ...createHtmlRenderState(), attrs: {} }),
  isSVGTag = ($) => typeof $ == 'string' && $.toLowerCase() === 'svg';
function useSVGProps($, et, tt, rt) {
  const nt = reactExports.useMemo(() => {
    const ot = createSvgRenderState();
    return (
      buildSVGAttrs(ot, et, { enableHardwareAcceleration: !1 }, isSVGTag(rt), $.transformTemplate),
      { ...ot.attrs, style: { ...ot.style } }
    );
  }, [et]);
  if ($.style) {
    const ot = {};
    copyRawValuesOnly(ot, $.style, $), (nt.style = { ...ot, ...nt.style });
  }
  return nt;
}
function createUseRender($ = !1) {
  return (tt, rt, nt, ot, { latestValues: it }, at) => {
    const lt = (isSVGComponent(tt) ? useSVGProps : useHTMLProps)(rt, it, at, tt),
      ct = { ...filterProps(rt, typeof tt == 'string', $), ...lt, ref: ot },
      { children: dt } = rt,
      ft = reactExports.useMemo(() => (isMotionValue(dt) ? dt.get() : dt), [dt]);
    return (
      nt && (ct['data-projection-id'] = nt), reactExports.createElement(tt, { ...ct, children: ft })
    );
  };
}
const camelToDash = ($) => $.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function renderHTML($, { style: et, vars: tt }, rt, nt) {
  Object.assign($.style, et, nt && nt.getProjectionStyles(rt));
  for (const ot in tt) $.style.setProperty(ot, tt[ot]);
}
const camelCaseAttributes = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust'
]);
function renderSVG($, et, tt, rt) {
  renderHTML($, et, void 0, rt);
  for (const nt in et.attrs)
    $.setAttribute(camelCaseAttributes.has(nt) ? nt : camelToDash(nt), et.attrs[nt]);
}
function scrapeMotionValuesFromProps$1($, et) {
  const { style: tt } = $,
    rt = {};
  for (const nt in tt)
    (isMotionValue(tt[nt]) ||
      (et.style && isMotionValue(et.style[nt])) ||
      isForcedMotionValue(nt, $)) &&
      (rt[nt] = tt[nt]);
  return rt;
}
function scrapeMotionValuesFromProps($, et) {
  const tt = scrapeMotionValuesFromProps$1($, et);
  for (const rt in $)
    if (isMotionValue($[rt]) || isMotionValue(et[rt])) {
      const nt = rt === 'x' || rt === 'y' ? 'attr' + rt.toUpperCase() : rt;
      tt[nt] = $[rt];
    }
  return tt;
}
function resolveVariantFromProps($, et, tt, rt = {}, nt = {}) {
  return (
    typeof et == 'function' && (et = et(tt !== void 0 ? tt : $.custom, rt, nt)),
    typeof et == 'string' && (et = $.variants && $.variants[et]),
    typeof et == 'function' && (et = et(tt !== void 0 ? tt : $.custom, rt, nt)),
    et
  );
}
const isKeyframesTarget = ($) => Array.isArray($),
  isCustomValue = ($) => Boolean($ && typeof $ == 'object' && $.mix && $.toValue),
  resolveFinalValueInKeyframes = ($) => (isKeyframesTarget($) ? $[$.length - 1] || 0 : $);
function resolveMotionValue($) {
  const et = isMotionValue($) ? $.get() : $;
  return isCustomValue(et) ? et.toValue() : et;
}
function makeState(
  { scrapeMotionValuesFromProps: $, createRenderState: et, onMount: tt },
  rt,
  nt,
  ot
) {
  const it = { latestValues: makeLatestValues(rt, nt, ot, $), renderState: et() };
  return tt && (it.mount = (at) => tt(rt, at, it)), it;
}
const makeUseVisualState = ($) => (et, tt) => {
  const rt = reactExports.useContext(MotionContext),
    nt = reactExports.useContext(PresenceContext),
    ot = () => makeState($, et, rt, nt);
  return tt ? ot() : useConstant(ot);
};
function makeLatestValues($, et, tt, rt) {
  const nt = {},
    ot = rt($, {});
  for (const dt in ot) nt[dt] = resolveMotionValue(ot[dt]);
  let { initial: it, animate: at } = $;
  const st = isControllingVariants($),
    lt = isVariantNode($);
  et &&
    lt &&
    !st &&
    $.inherit !== !1 &&
    (it === void 0 && (it = et.initial), at === void 0 && (at = et.animate));
  let ut = tt ? tt.initial === !1 : !1;
  ut = ut || it === !1;
  const ct = ut ? at : it;
  return (
    ct &&
      typeof ct != 'boolean' &&
      !isAnimationControls(ct) &&
      (Array.isArray(ct) ? ct : [ct]).forEach((ft) => {
        const pt = resolveVariantFromProps($, ft);
        if (!pt) return;
        const { transitionEnd: gt, transition: bt, ...ht } = pt;
        for (const mt in ht) {
          let yt = ht[mt];
          if (Array.isArray(yt)) {
            const St = ut ? yt.length - 1 : 0;
            yt = yt[St];
          }
          yt !== null && (nt[mt] = yt);
        }
        for (const mt in gt) nt[mt] = gt[mt];
      }),
    nt
  );
}
const svgMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps,
      createRenderState: createSvgRenderState,
      onMount: ($, et, { renderState: tt, latestValues: rt }) => {
        try {
          tt.dimensions =
            typeof et.getBBox == 'function' ? et.getBBox() : et.getBoundingClientRect();
        } catch {
          tt.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        buildSVGAttrs(
          tt,
          rt,
          { enableHardwareAcceleration: !1 },
          isSVGTag(et.tagName),
          $.transformTemplate
        ),
          renderSVG(et, tt);
      }
    })
  },
  htmlMotionConfig = {
    useVisualState: makeUseVisualState({
      scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
      createRenderState: createHtmlRenderState
    })
  };
function createDomMotionConfig($, { forwardMotionProps: et = !1 }, tt, rt, nt) {
  return {
    ...(isSVGComponent($) ? svgMotionConfig : htmlMotionConfig),
    preloadedFeatures: tt,
    useRender: createUseRender(et),
    createVisualElement: rt,
    projectionNodeConstructor: nt,
    Component: $
  };
}
var AnimationType;
(function ($) {
  ($.Animate = 'animate'),
    ($.Hover = 'whileHover'),
    ($.Tap = 'whileTap'),
    ($.Drag = 'whileDrag'),
    ($.Focus = 'whileFocus'),
    ($.InView = 'whileInView'),
    ($.Exit = 'exit');
})(AnimationType || (AnimationType = {}));
function addDomEvent($, et, tt, rt = { passive: !0 }) {
  return $.addEventListener(et, tt, rt), () => $.removeEventListener(et, tt);
}
function useDomEvent($, et, tt, rt) {
  reactExports.useEffect(() => {
    const nt = $.current;
    if (tt && nt) return addDomEvent(nt, et, tt, rt);
  }, [$, et, tt, rt]);
}
function useFocusGesture({ whileFocus: $, visualElement: et }) {
  const { animationState: tt } = et,
    rt = reactExports.useCallback(() => {
      tt && tt.setActive(AnimationType.Focus, !0);
    }, [tt]),
    nt = reactExports.useCallback(() => {
      tt && tt.setActive(AnimationType.Focus, !1);
    }, [tt]);
  useDomEvent(et, 'focus', $ ? rt : void 0), useDomEvent(et, 'blur', $ ? nt : void 0);
}
const isPrimaryPointer = ($) => $.isPrimary !== !1;
function extractEventInfo($, et = 'page') {
  return { point: { x: $[et + 'X'], y: $[et + 'Y'] } };
}
const addPointerInfo = ($) => (et) => isPrimaryPointer(et) && $(et, extractEventInfo(et));
function addPointerEvent($, et, tt, rt) {
  return addDomEvent($, et, addPointerInfo(tt), rt);
}
function usePointerEvent($, et, tt, rt) {
  return useDomEvent($, et, tt && addPointerInfo(tt), rt);
}
function createLock($) {
  let et = null;
  return () => {
    const tt = () => {
      et = null;
    };
    return et === null ? ((et = $), tt) : !1;
  };
}
const globalHorizontalLock = createLock('dragHorizontal'),
  globalVerticalLock = createLock('dragVertical');
function getGlobalLock($) {
  let et = !1;
  if ($ === 'y') et = globalVerticalLock();
  else if ($ === 'x') et = globalHorizontalLock();
  else {
    const tt = globalHorizontalLock(),
      rt = globalVerticalLock();
    tt && rt
      ? (et = () => {
          tt(), rt();
        })
      : (tt && tt(), rt && rt());
  }
  return et;
}
function isDragActive() {
  const $ = getGlobalLock(!0);
  return $ ? ($(), !1) : !0;
}
function createHoverEvent($, et, tt) {
  return (rt, nt) => {
    rt.type === 'touch' ||
      isDragActive() ||
      ($.animationState && $.animationState.setActive(AnimationType.Hover, et), tt && tt(rt, nt));
  };
}
function useHoverGesture({ onHoverStart: $, onHoverEnd: et, whileHover: tt, visualElement: rt }) {
  usePointerEvent(
    rt,
    'pointerenter',
    reactExports.useMemo(
      () => ($ || tt ? createHoverEvent(rt, !0, $) : void 0),
      [$, Boolean(tt), rt]
    ),
    { passive: !$ }
  ),
    usePointerEvent(
      rt,
      'pointerleave',
      reactExports.useMemo(
        () => (et || tt ? createHoverEvent(rt, !1, et) : void 0),
        [$, Boolean(tt), rt]
      ),
      { passive: !et }
    );
}
const isNodeOrChild = ($, et) => (et ? ($ === et ? !0 : isNodeOrChild($, et.parentElement)) : !1);
function useUnmountEffect($) {
  return reactExports.useEffect(() => () => $(), []);
}
const combineFunctions = ($, et) => (tt) => et($(tt)),
  pipe = (...$) => $.reduce(combineFunctions);
function useTapGesture({
  onTap: $,
  onTapStart: et,
  onTapCancel: tt,
  whileTap: rt,
  visualElement: nt,
  ...ot
}) {
  const it = $ || et || tt || rt,
    at = reactExports.useRef(!1),
    st = reactExports.useRef(null),
    lt = { passive: !(et || $ || tt || ot.onPointerDown) };
  function ut() {
    st.current && st.current(), (st.current = null);
  }
  function ct() {
    return (
      ut(),
      (at.current = !1),
      nt.animationState && nt.animationState.setActive(AnimationType.Tap, !1),
      !isDragActive()
    );
  }
  function dt(gt, bt) {
    var ht, mt, yt, St;
    ct() &&
      (isNodeOrChild(nt.current, gt.target)
        ? (St = (yt = nt.getProps()).onTap) === null || St === void 0 || St.call(yt, gt, bt)
        : (mt = (ht = nt.getProps()).onTapCancel) === null || mt === void 0 || mt.call(ht, gt, bt));
  }
  function ft(gt, bt) {
    var ht, mt;
    ct() &&
      ((mt = (ht = nt.getProps()).onTapCancel) === null || mt === void 0 || mt.call(ht, gt, bt));
  }
  const pt = reactExports.useCallback(
    (gt, bt) => {
      var ht, mt;
      ut(),
        !at.current &&
          ((at.current = !0),
          (st.current = pipe(
            addPointerEvent(window, 'pointerup', dt, lt),
            addPointerEvent(window, 'pointercancel', ft, lt)
          )),
          nt.animationState && nt.animationState.setActive(AnimationType.Tap, !0),
          (mt = (ht = nt.getProps()).onTapStart) === null || mt === void 0 || mt.call(ht, gt, bt));
    },
    [Boolean(et), nt]
  );
  usePointerEvent(nt, 'pointerdown', it ? pt : void 0, lt), useUnmountEffect(ut);
}
const observerCallbacks = new WeakMap(),
  observers = new WeakMap(),
  fireObserverCallback = ($) => {
    const et = observerCallbacks.get($.target);
    et && et($);
  },
  fireAllObserverCallbacks = ($) => {
    $.forEach(fireObserverCallback);
  };
function initIntersectionObserver({ root: $, ...et }) {
  const tt = $ || document;
  observers.has(tt) || observers.set(tt, {});
  const rt = observers.get(tt),
    nt = JSON.stringify(et);
  return (
    rt[nt] || (rt[nt] = new IntersectionObserver(fireAllObserverCallbacks, { root: $, ...et })),
    rt[nt]
  );
}
function observeIntersection($, et, tt) {
  const rt = initIntersectionObserver(et);
  return (
    observerCallbacks.set($, tt),
    rt.observe($),
    () => {
      observerCallbacks.delete($), rt.unobserve($);
    }
  );
}
function useViewport({
  visualElement: $,
  whileInView: et,
  onViewportEnter: tt,
  onViewportLeave: rt,
  viewport: nt = {}
}) {
  const ot = reactExports.useRef({ hasEnteredView: !1, isInView: !1 });
  let it = Boolean(et || tt || rt);
  nt.once && ot.current.hasEnteredView && (it = !1),
    (typeof IntersectionObserver > 'u' ? useMissingIntersectionObserver : useIntersectionObserver)(
      it,
      ot.current,
      $,
      nt
    );
}
const thresholdNames = { some: 0, all: 1 };
function useIntersectionObserver(
  $,
  et,
  tt,
  { root: rt, margin: nt, amount: ot = 'some', once: it }
) {
  reactExports.useEffect(() => {
    if (!$ || !tt.current) return;
    const at = {
        root: rt == null ? void 0 : rt.current,
        rootMargin: nt,
        threshold: typeof ot == 'number' ? ot : thresholdNames[ot]
      },
      st = (lt) => {
        const { isIntersecting: ut } = lt;
        if (et.isInView === ut || ((et.isInView = ut), it && !ut && et.hasEnteredView)) return;
        ut && (et.hasEnteredView = !0),
          tt.animationState && tt.animationState.setActive(AnimationType.InView, ut);
        const ct = tt.getProps(),
          dt = ut ? ct.onViewportEnter : ct.onViewportLeave;
        dt && dt(lt);
      };
    return observeIntersection(tt.current, at, st);
  }, [$, rt, nt, ot]);
}
function useMissingIntersectionObserver($, et, tt, { fallback: rt = !0 }) {
  reactExports.useEffect(() => {
    !$ ||
      !rt ||
      requestAnimationFrame(() => {
        et.hasEnteredView = !0;
        const { onViewportEnter: nt } = tt.getProps();
        nt && nt(null), tt.animationState && tt.animationState.setActive(AnimationType.InView, !0);
      });
  }, [$]);
}
const makeRenderlessComponent = ($) => (et) => ($(et), null),
  gestureAnimations = {
    inView: makeRenderlessComponent(useViewport),
    tap: makeRenderlessComponent(useTapGesture),
    focus: makeRenderlessComponent(useFocusGesture),
    hover: makeRenderlessComponent(useHoverGesture)
  };
function usePresence() {
  const $ = reactExports.useContext(PresenceContext);
  if ($ === null) return [!0, null];
  const { isPresent: et, onExitComplete: tt, register: rt } = $,
    nt = reactExports.useId();
  return reactExports.useEffect(() => rt(nt), []), !et && tt ? [!1, () => tt && tt(nt)] : [!0];
}
function useIsPresent() {
  return isPresent(reactExports.useContext(PresenceContext));
}
function isPresent($) {
  return $ === null ? !0 : $.isPresent;
}
function shallowCompare($, et) {
  if (!Array.isArray(et)) return !1;
  const tt = et.length;
  if (tt !== $.length) return !1;
  for (let rt = 0; rt < tt; rt++) if (et[rt] !== $[rt]) return !1;
  return !0;
}
const isNumericalString = ($) => /^\-?\d*\.?\d+$/.test($),
  isZeroValueString = ($) => /^0[^.\s]+$/.test($),
  frameData = { delta: 0, timestamp: 0 },
  defaultTimestep = (1 / 60) * 1e3,
  getCurrentTime = typeof performance < 'u' ? () => performance.now() : () => Date.now(),
  onNextFrame =
    typeof window < 'u'
      ? ($) => window.requestAnimationFrame($)
      : ($) => setTimeout(() => $(getCurrentTime()), defaultTimestep);
function createRenderStep($) {
  let et = [],
    tt = [],
    rt = 0,
    nt = !1,
    ot = !1;
  const it = new WeakSet(),
    at = {
      schedule: (st, lt = !1, ut = !1) => {
        const ct = ut && nt,
          dt = ct ? et : tt;
        return (
          lt && it.add(st), dt.indexOf(st) === -1 && (dt.push(st), ct && nt && (rt = et.length)), st
        );
      },
      cancel: (st) => {
        const lt = tt.indexOf(st);
        lt !== -1 && tt.splice(lt, 1), it.delete(st);
      },
      process: (st) => {
        if (nt) {
          ot = !0;
          return;
        }
        if (((nt = !0), ([et, tt] = [tt, et]), (tt.length = 0), (rt = et.length), rt))
          for (let lt = 0; lt < rt; lt++) {
            const ut = et[lt];
            ut(st), it.has(ut) && (at.schedule(ut), $());
          }
        (nt = !1), ot && ((ot = !1), at.process(st));
      }
    };
  return at;
}
const maxElapsed = 40;
let useDefaultElapsed = !0,
  runNextFrame = !1,
  isProcessing = !1;
const stepsOrder = ['read', 'update', 'preRender', 'render', 'postRender'],
  steps = stepsOrder.reduce(
    ($, et) => (($[et] = createRenderStep(() => (runNextFrame = !0))), $),
    {}
  ),
  sync = stepsOrder.reduce(($, et) => {
    const tt = steps[et];
    return (
      ($[et] = (rt, nt = !1, ot = !1) => (runNextFrame || startLoop(), tt.schedule(rt, nt, ot))), $
    );
  }, {}),
  cancelSync = stepsOrder.reduce(($, et) => (($[et] = steps[et].cancel), $), {}),
  flushSync = stepsOrder.reduce(($, et) => (($[et] = () => steps[et].process(frameData)), $), {}),
  processStep = ($) => steps[$].process(frameData),
  processFrame = ($) => {
    (runNextFrame = !1),
      (frameData.delta = useDefaultElapsed
        ? defaultTimestep
        : Math.max(Math.min($ - frameData.timestamp, maxElapsed), 1)),
      (frameData.timestamp = $),
      (isProcessing = !0),
      stepsOrder.forEach(processStep),
      (isProcessing = !1),
      runNextFrame && ((useDefaultElapsed = !1), onNextFrame(processFrame));
  },
  startLoop = () => {
    (runNextFrame = !0), (useDefaultElapsed = !0), isProcessing || onNextFrame(processFrame);
  };
function addUniqueItem($, et) {
  $.indexOf(et) === -1 && $.push(et);
}
function removeItem($, et) {
  const tt = $.indexOf(et);
  tt > -1 && $.splice(tt, 1);
}
class SubscriptionManager {
  constructor() {
    this.subscriptions = [];
  }
  add(et) {
    return addUniqueItem(this.subscriptions, et), () => removeItem(this.subscriptions, et);
  }
  notify(et, tt, rt) {
    const nt = this.subscriptions.length;
    if (nt)
      if (nt === 1) this.subscriptions[0](et, tt, rt);
      else
        for (let ot = 0; ot < nt; ot++) {
          const it = this.subscriptions[ot];
          it && it(et, tt, rt);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function velocityPerSecond($, et) {
  return et ? $ * (1e3 / et) : 0;
}
const isFloat = ($) => !isNaN(parseFloat($));
class MotionValue {
  constructor(et, tt = {}) {
    (this.version = '8.3.3'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (rt, nt = !0) => {
        (this.prev = this.current), (this.current = rt);
        const { delta: ot, timestamp: it } = frameData;
        this.lastUpdated !== it &&
          ((this.timeDelta = ot),
          (this.lastUpdated = it),
          sync.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          nt && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => sync.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: rt }) => {
        rt !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = et),
      (this.canTrackVelocity = isFloat(this.current)),
      (this.owner = tt.owner);
  }
  onChange(et) {
    return this.on('change', et);
  }
  on(et, tt) {
    this.events[et] || (this.events[et] = new SubscriptionManager());
    const rt = this.events[et].add(tt);
    return et === 'change'
      ? () => {
          rt(),
            sync.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : rt;
  }
  clearListeners() {
    for (const et in this.events) this.events[et].clear();
  }
  attach(et, tt) {
    (this.passiveEffect = et), (this.stopPassiveEffect = tt);
  }
  set(et, tt = !0) {
    !tt || !this.passiveEffect
      ? this.updateAndNotify(et, tt)
      : this.passiveEffect(et, this.updateAndNotify);
  }
  setWithVelocity(et, tt, rt) {
    this.set(tt), (this.prev = et), (this.timeDelta = rt);
  }
  jump(et) {
    this.updateAndNotify(et),
      (this.prev = et),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(et) {
    return (
      this.stop(),
      new Promise((tt) => {
        (this.hasAnimated = !0),
          (this.stopAnimation = et(tt)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.stopAnimation &&
      (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function motionValue($, et) {
  return new MotionValue($, et);
}
const isColorString = ($, et) => (tt) =>
    Boolean(
      (isString$1(tt) && singleColorRegex.test(tt) && tt.startsWith($)) ||
        (et && Object.prototype.hasOwnProperty.call(tt, et))
    ),
  splitColor = ($, et, tt) => (rt) => {
    if (!isString$1(rt)) return rt;
    const [nt, ot, it, at] = rt.match(floatRegex);
    return {
      [$]: parseFloat(nt),
      [et]: parseFloat(ot),
      [tt]: parseFloat(it),
      alpha: at !== void 0 ? parseFloat(at) : 1
    };
  },
  clampRgbUnit = ($) => clamp(0, 255, $),
  rgbUnit = { ...number, transform: ($) => Math.round(clampRgbUnit($)) },
  rgba = {
    test: isColorString('rgb', 'red'),
    parse: splitColor('red', 'green', 'blue'),
    transform: ({ red: $, green: et, blue: tt, alpha: rt = 1 }) =>
      'rgba(' +
      rgbUnit.transform($) +
      ', ' +
      rgbUnit.transform(et) +
      ', ' +
      rgbUnit.transform(tt) +
      ', ' +
      sanitize(alpha.transform(rt)) +
      ')'
  };
function parseHex($) {
  let et = '',
    tt = '',
    rt = '',
    nt = '';
  return (
    $.length > 5
      ? ((et = $.substring(1, 3)),
        (tt = $.substring(3, 5)),
        (rt = $.substring(5, 7)),
        (nt = $.substring(7, 9)))
      : ((et = $.substring(1, 2)),
        (tt = $.substring(2, 3)),
        (rt = $.substring(3, 4)),
        (nt = $.substring(4, 5)),
        (et += et),
        (tt += tt),
        (rt += rt),
        (nt += nt)),
    {
      red: parseInt(et, 16),
      green: parseInt(tt, 16),
      blue: parseInt(rt, 16),
      alpha: nt ? parseInt(nt, 16) / 255 : 1
    }
  );
}
const hex = { test: isColorString('#'), parse: parseHex, transform: rgba.transform },
  hsla = {
    test: isColorString('hsl', 'hue'),
    parse: splitColor('hue', 'saturation', 'lightness'),
    transform: ({ hue: $, saturation: et, lightness: tt, alpha: rt = 1 }) =>
      'hsla(' +
      Math.round($) +
      ', ' +
      percent.transform(sanitize(et)) +
      ', ' +
      percent.transform(sanitize(tt)) +
      ', ' +
      sanitize(alpha.transform(rt)) +
      ')'
  },
  color = {
    test: ($) => rgba.test($) || hex.test($) || hsla.test($),
    parse: ($) => (rgba.test($) ? rgba.parse($) : hsla.test($) ? hsla.parse($) : hex.parse($)),
    transform: ($) =>
      isString$1($) ? $ : $.hasOwnProperty('red') ? rgba.transform($) : hsla.transform($)
  },
  colorToken = '${c}',
  numberToken = '${n}';
function test($) {
  var et, tt;
  return (
    isNaN($) &&
    isString$1($) &&
    (((et = $.match(floatRegex)) === null || et === void 0 ? void 0 : et.length) || 0) +
      (((tt = $.match(colorRegex)) === null || tt === void 0 ? void 0 : tt.length) || 0) >
      0
  );
}
function analyseComplexValue($) {
  typeof $ == 'number' && ($ = `${$}`);
  const et = [];
  let tt = 0,
    rt = 0;
  const nt = $.match(colorRegex);
  nt &&
    ((tt = nt.length), ($ = $.replace(colorRegex, colorToken)), et.push(...nt.map(color.parse)));
  const ot = $.match(floatRegex);
  return (
    ot &&
      ((rt = ot.length),
      ($ = $.replace(floatRegex, numberToken)),
      et.push(...ot.map(number.parse))),
    { values: et, numColors: tt, numNumbers: rt, tokenised: $ }
  );
}
function parse($) {
  return analyseComplexValue($).values;
}
function createTransformer($) {
  const { values: et, numColors: tt, tokenised: rt } = analyseComplexValue($),
    nt = et.length;
  return (ot) => {
    let it = rt;
    for (let at = 0; at < nt; at++)
      it = it.replace(
        at < tt ? colorToken : numberToken,
        at < tt ? color.transform(ot[at]) : sanitize(ot[at])
      );
    return it;
  };
}
const convertNumbersToZero = ($) => (typeof $ == 'number' ? 0 : $);
function getAnimatableNone$1($) {
  const et = parse($);
  return createTransformer($)(et.map(convertNumbersToZero));
}
const complex = { test, parse, createTransformer, getAnimatableNone: getAnimatableNone$1 },
  maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function applyDefaultFilter($) {
  const [et, tt] = $.slice(0, -1).split('(');
  if (et === 'drop-shadow') return $;
  const [rt] = tt.match(floatRegex) || [];
  if (!rt) return $;
  const nt = tt.replace(rt, '');
  let ot = maxDefaults.has(et) ? 1 : 0;
  return rt !== tt && (ot *= 100), et + '(' + ot + nt + ')';
}
const functionRegex = /([a-z-]*)\(.*?\)/g,
  filter = {
    ...complex,
    getAnimatableNone: ($) => {
      const et = $.match(functionRegex);
      return et ? et.map(applyDefaultFilter).join(' ') : $;
    }
  },
  defaultValueTypes = {
    ...numberValueTypes,
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter
  },
  getDefaultValueType = ($) => defaultValueTypes[$];
function getAnimatableNone($, et) {
  var tt;
  let rt = getDefaultValueType($);
  return (
    rt !== filter && (rt = complex),
    (tt = rt.getAnimatableNone) === null || tt === void 0 ? void 0 : tt.call(rt, et)
  );
}
const testValueType = ($) => (et) => et.test($),
  auto = { test: ($) => $ === 'auto', parse: ($) => $ },
  dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto],
  findDimensionValueType = ($) => dimensionValueTypes.find(testValueType($)),
  valueTypes = [...dimensionValueTypes, color, complex],
  findValueType = ($) => valueTypes.find(testValueType($));
function getCurrent($) {
  const et = {};
  return $.values.forEach((tt, rt) => (et[rt] = tt.get())), et;
}
function getVelocity$1($) {
  const et = {};
  return $.values.forEach((tt, rt) => (et[rt] = tt.getVelocity())), et;
}
function resolveVariant($, et, tt) {
  const rt = $.getProps();
  return resolveVariantFromProps(
    rt,
    et,
    tt !== void 0 ? tt : rt.custom,
    getCurrent($),
    getVelocity$1($)
  );
}
function setMotionValue($, et, tt) {
  $.hasValue(et) ? $.getValue(et).set(tt) : $.addValue(et, motionValue(tt));
}
function setTarget($, et) {
  const tt = resolveVariant($, et);
  let {
    transitionEnd: rt = {},
    transition: nt = {},
    ...ot
  } = tt ? $.makeTargetAnimatable(tt, !1) : {};
  ot = { ...ot, ...rt };
  for (const it in ot) {
    const at = resolveFinalValueInKeyframes(ot[it]);
    setMotionValue($, it, at);
  }
}
function checkTargetForNewValues($, et, tt) {
  var rt, nt;
  const ot = Object.keys(et).filter((at) => !$.hasValue(at)),
    it = ot.length;
  if (it)
    for (let at = 0; at < it; at++) {
      const st = ot[at],
        lt = et[st];
      let ut = null;
      Array.isArray(lt) && (ut = lt[0]),
        ut === null &&
          (ut =
            (nt = (rt = tt[st]) !== null && rt !== void 0 ? rt : $.readValue(st)) !== null &&
            nt !== void 0
              ? nt
              : et[st]),
        ut != null &&
          (typeof ut == 'string' && (isNumericalString(ut) || isZeroValueString(ut))
            ? (ut = parseFloat(ut))
            : !findValueType(ut) && complex.test(lt) && (ut = getAnimatableNone(st, lt)),
          $.addValue(st, motionValue(ut, { owner: $ })),
          tt[st] === void 0 && (tt[st] = ut),
          ut !== null && $.setBaseTarget(st, ut));
    }
}
function getOriginFromTransition($, et) {
  return et ? (et[$] || et.default || et).from : void 0;
}
function getOrigin($, et, tt) {
  var rt;
  const nt = {};
  for (const ot in $) {
    const it = getOriginFromTransition(ot, et);
    nt[ot] =
      it !== void 0 ? it : (rt = tt.getValue(ot)) === null || rt === void 0 ? void 0 : rt.get();
  }
  return nt;
}
function isWillChangeMotionValue($) {
  return Boolean(isMotionValue($) && $.add);
}
const appearStoreId = ($, et) => `${$}: ${et}`;
function handoffOptimizedAppearAnimation($, et) {
  const { MotionAppearAnimations: tt } = window,
    rt = appearStoreId($, transformProps.has(et) ? 'transform' : et),
    nt = tt && tt.get(rt);
  return nt
    ? (sync.render(() => {
        try {
          nt.cancel(), tt.delete(rt);
        } catch {}
      }),
      nt.currentTime || 0)
    : 0;
}
const optimizedAppearDataId = 'framerAppearId',
  optimizedAppearDataAttribute = 'data-' + camelToDash(optimizedAppearDataId);
var warning$1 = function () {},
  invariant$1 = function () {};
const secondsToMilliseconds = ($) => $ * 1e3,
  instantAnimationState = { current: !1 },
  mirrorEasing = ($) => (et) => et <= 0.5 ? $(2 * et) / 2 : (2 - $(2 * (1 - et))) / 2,
  reverseEasing = ($) => (et) => 1 - $(1 - et),
  easeIn = ($) => $ * $,
  easeOut = reverseEasing(easeIn),
  easeInOut = mirrorEasing(easeIn),
  mix = ($, et, tt) => -tt * $ + tt * et + $;
function hueToRgb($, et, tt) {
  return (
    tt < 0 && (tt += 1),
    tt > 1 && (tt -= 1),
    tt < 1 / 6
      ? $ + (et - $) * 6 * tt
      : tt < 1 / 2
      ? et
      : tt < 2 / 3
      ? $ + (et - $) * (2 / 3 - tt) * 6
      : $
  );
}
function hslaToRgba({ hue: $, saturation: et, lightness: tt, alpha: rt }) {
  ($ /= 360), (et /= 100), (tt /= 100);
  let nt = 0,
    ot = 0,
    it = 0;
  if (!et) nt = ot = it = tt;
  else {
    const at = tt < 0.5 ? tt * (1 + et) : tt + et - tt * et,
      st = 2 * tt - at;
    (nt = hueToRgb(st, at, $ + 1 / 3)),
      (ot = hueToRgb(st, at, $)),
      (it = hueToRgb(st, at, $ - 1 / 3));
  }
  return {
    red: Math.round(nt * 255),
    green: Math.round(ot * 255),
    blue: Math.round(it * 255),
    alpha: rt
  };
}
const mixLinearColor = ($, et, tt) => {
    const rt = $ * $;
    return Math.sqrt(Math.max(0, tt * (et * et - rt) + rt));
  },
  colorTypes = [hex, rgba, hsla],
  getColorType = ($) => colorTypes.find((et) => et.test($));
function asRGBA($) {
  const et = getColorType($);
  let tt = et.parse($);
  return et === hsla && (tt = hslaToRgba(tt)), tt;
}
const mixColor = ($, et) => {
  const tt = asRGBA($),
    rt = asRGBA(et),
    nt = { ...tt };
  return (ot) => (
    (nt.red = mixLinearColor(tt.red, rt.red, ot)),
    (nt.green = mixLinearColor(tt.green, rt.green, ot)),
    (nt.blue = mixLinearColor(tt.blue, rt.blue, ot)),
    (nt.alpha = mix(tt.alpha, rt.alpha, ot)),
    rgba.transform(nt)
  );
};
function getMixer($, et) {
  return typeof $ == 'number'
    ? (tt) => mix($, et, tt)
    : color.test($)
    ? mixColor($, et)
    : mixComplex($, et);
}
const mixArray = ($, et) => {
    const tt = [...$],
      rt = tt.length,
      nt = $.map((ot, it) => getMixer(ot, et[it]));
    return (ot) => {
      for (let it = 0; it < rt; it++) tt[it] = nt[it](ot);
      return tt;
    };
  },
  mixObject = ($, et) => {
    const tt = { ...$, ...et },
      rt = {};
    for (const nt in tt)
      $[nt] !== void 0 && et[nt] !== void 0 && (rt[nt] = getMixer($[nt], et[nt]));
    return (nt) => {
      for (const ot in rt) tt[ot] = rt[ot](nt);
      return tt;
    };
  },
  mixComplex = ($, et) => {
    const tt = complex.createTransformer(et),
      rt = analyseComplexValue($),
      nt = analyseComplexValue(et);
    return rt.numColors === nt.numColors && rt.numNumbers >= nt.numNumbers
      ? pipe(mixArray(rt.values, nt.values), tt)
      : (it) => `${it > 0 ? et : $}`;
  },
  progress = ($, et, tt) => {
    const rt = et - $;
    return rt === 0 ? 1 : (tt - $) / rt;
  },
  mixNumber = ($, et) => (tt) => mix($, et, tt);
function detectMixerFactory($) {
  return typeof $ == 'number'
    ? mixNumber
    : typeof $ == 'string'
    ? color.test($)
      ? mixColor
      : mixComplex
    : Array.isArray($)
    ? mixArray
    : typeof $ == 'object'
    ? mixObject
    : mixNumber;
}
function createMixers($, et, tt) {
  const rt = [],
    nt = tt || detectMixerFactory($[0]),
    ot = $.length - 1;
  for (let it = 0; it < ot; it++) {
    let at = nt($[it], $[it + 1]);
    if (et) {
      const st = Array.isArray(et) ? et[it] : et;
      at = pipe(st, at);
    }
    rt.push(at);
  }
  return rt;
}
function interpolate($, et, { clamp: tt = !0, ease: rt, mixer: nt } = {}) {
  const ot = $.length;
  invariant$1(ot === et.length),
    invariant$1(!rt || !Array.isArray(rt) || rt.length === ot - 1),
    $[0] > $[ot - 1] && (($ = [...$].reverse()), (et = [...et].reverse()));
  const it = createMixers(et, rt, nt),
    at = it.length,
    st = (lt) => {
      let ut = 0;
      if (at > 1) for (; ut < $.length - 2 && !(lt < $[ut + 1]); ut++);
      const ct = progress($[ut], $[ut + 1], lt);
      return it[ut](ct);
    };
  return tt ? (lt) => st(clamp($[0], $[ot - 1], lt)) : st;
}
const noop$1 = ($) => $,
  calcBezier = ($, et, tt) => (((1 - 3 * tt + 3 * et) * $ + (3 * tt - 6 * et)) * $ + 3 * et) * $,
  subdivisionPrecision = 1e-7,
  subdivisionMaxIterations = 12;
function binarySubdivide($, et, tt, rt, nt) {
  let ot,
    it,
    at = 0;
  do (it = et + (tt - et) / 2), (ot = calcBezier(it, rt, nt) - $), ot > 0 ? (tt = it) : (et = it);
  while (Math.abs(ot) > subdivisionPrecision && ++at < subdivisionMaxIterations);
  return it;
}
function cubicBezier($, et, tt, rt) {
  if ($ === et && tt === rt) return noop$1;
  const nt = (ot) => binarySubdivide(ot, 0, 1, $, tt);
  return (ot) => (ot === 0 || ot === 1 ? ot : calcBezier(nt(ot), et, rt));
}
const circIn = ($) => 1 - Math.sin(Math.acos($)),
  circOut = reverseEasing(circIn),
  circInOut = mirrorEasing(circOut),
  backOut = cubicBezier(0.33, 1.53, 0.69, 0.99),
  backIn = reverseEasing(backOut),
  backInOut = mirrorEasing(backIn),
  anticipate = ($) => (($ *= 2) < 1 ? 0.5 * backIn($) : 0.5 * (2 - Math.pow(2, -10 * ($ - 1)))),
  easingLookup = {
    linear: noop$1,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate
  },
  easingDefinitionToFunction = ($) => {
    if (Array.isArray($)) {
      invariant$1($.length === 4);
      const [et, tt, rt, nt] = $;
      return cubicBezier(et, tt, rt, nt);
    } else if (typeof $ == 'string') return easingLookup[$];
    return $;
  },
  isEasingArray = ($) => Array.isArray($) && typeof $[0] != 'number';
function defaultEasing($, et) {
  return $.map(() => et || easeInOut).splice(0, $.length - 1);
}
function defaultOffset($) {
  const et = $.length;
  return $.map((tt, rt) => (rt !== 0 ? rt / (et - 1) : 0));
}
function convertOffsetToTimes($, et) {
  return $.map((tt) => tt * et);
}
function keyframes({ keyframes: $, ease: et = easeInOut, times: tt, duration: rt = 300 }) {
  $ = [...$];
  const nt = isEasingArray(et)
      ? et.map(easingDefinitionToFunction)
      : easingDefinitionToFunction(et),
    ot = { done: !1, value: $[0] },
    it = convertOffsetToTimes(tt && tt.length === $.length ? tt : defaultOffset($), rt);
  function at() {
    return interpolate(it, $, { ease: Array.isArray(nt) ? nt : defaultEasing($, nt) });
  }
  let st = at();
  return {
    next: (lt) => ((ot.value = st(lt)), (ot.done = lt >= rt), ot),
    flipTarget: () => {
      $.reverse(), (st = at());
    }
  };
}
const safeMin = 0.001,
  minDuration = 0.01,
  maxDuration = 10,
  minDamping = 0.05,
  maxDamping = 1;
function findSpring({ duration: $ = 800, bounce: et = 0.25, velocity: tt = 0, mass: rt = 1 }) {
  let nt, ot;
  warning$1($ <= maxDuration * 1e3);
  let it = 1 - et;
  (it = clamp(minDamping, maxDamping, it)),
    ($ = clamp(minDuration, maxDuration, $ / 1e3)),
    it < 1
      ? ((nt = (lt) => {
          const ut = lt * it,
            ct = ut * $,
            dt = ut - tt,
            ft = calcAngularFreq(lt, it),
            pt = Math.exp(-ct);
          return safeMin - (dt / ft) * pt;
        }),
        (ot = (lt) => {
          const ct = lt * it * $,
            dt = ct * tt + tt,
            ft = Math.pow(it, 2) * Math.pow(lt, 2) * $,
            pt = Math.exp(-ct),
            gt = calcAngularFreq(Math.pow(lt, 2), it);
          return ((-nt(lt) + safeMin > 0 ? -1 : 1) * ((dt - ft) * pt)) / gt;
        }))
      : ((nt = (lt) => {
          const ut = Math.exp(-lt * $),
            ct = (lt - tt) * $ + 1;
          return -safeMin + ut * ct;
        }),
        (ot = (lt) => {
          const ut = Math.exp(-lt * $),
            ct = (tt - lt) * ($ * $);
          return ut * ct;
        }));
  const at = 5 / $,
    st = approximateRoot(nt, ot, at);
  if ((($ = $ * 1e3), isNaN(st))) return { stiffness: 100, damping: 10, duration: $ };
  {
    const lt = Math.pow(st, 2) * rt;
    return { stiffness: lt, damping: it * 2 * Math.sqrt(rt * lt), duration: $ };
  }
}
const rootIterations = 12;
function approximateRoot($, et, tt) {
  let rt = tt;
  for (let nt = 1; nt < rootIterations; nt++) rt = rt - $(rt) / et(rt);
  return rt;
}
function calcAngularFreq($, et) {
  return $ * Math.sqrt(1 - et * et);
}
const durationKeys = ['duration', 'bounce'],
  physicsKeys = ['stiffness', 'damping', 'mass'];
function isSpringType($, et) {
  return et.some((tt) => $[tt] !== void 0);
}
function getSpringOptions($) {
  let et = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...$ };
  if (!isSpringType($, physicsKeys) && isSpringType($, durationKeys)) {
    const tt = findSpring($);
    (et = { ...et, ...tt, velocity: 0, mass: 1 }), (et.isResolvedFromDuration = !0);
  }
  return et;
}
const velocitySampleDuration = 5;
function spring({ keyframes: $, restSpeed: et = 2, restDelta: tt = 0.01, ...rt }) {
  let nt = $[0],
    ot = $[$.length - 1];
  const it = { done: !1, value: nt },
    {
      stiffness: at,
      damping: st,
      mass: lt,
      velocity: ut,
      duration: ct,
      isResolvedFromDuration: dt
    } = getSpringOptions(rt);
  let ft = zero,
    pt = ut ? -(ut / 1e3) : 0;
  const gt = st / (2 * Math.sqrt(at * lt));
  function bt() {
    const ht = ot - nt,
      mt = Math.sqrt(at / lt) / 1e3;
    if ((tt === void 0 && (tt = Math.min(Math.abs(ot - nt) / 100, 0.4)), gt < 1)) {
      const yt = calcAngularFreq(mt, gt);
      ft = (St) => {
        const _t = Math.exp(-gt * mt * St);
        return ot - _t * (((pt + gt * mt * ht) / yt) * Math.sin(yt * St) + ht * Math.cos(yt * St));
      };
    } else if (gt === 1) ft = (yt) => ot - Math.exp(-mt * yt) * (ht + (pt + mt * ht) * yt);
    else {
      const yt = mt * Math.sqrt(gt * gt - 1);
      ft = (St) => {
        const _t = Math.exp(-gt * mt * St),
          Ct = Math.min(yt * St, 300);
        return ot - (_t * ((pt + gt * mt * ht) * Math.sinh(Ct) + yt * ht * Math.cosh(Ct))) / yt;
      };
    }
  }
  return (
    bt(),
    {
      next: (ht) => {
        const mt = ft(ht);
        if (dt) it.done = ht >= ct;
        else {
          let yt = pt;
          if (ht !== 0)
            if (gt < 1) {
              const Ct = Math.max(0, ht - velocitySampleDuration);
              yt = velocityPerSecond(mt - ft(Ct), ht - Ct);
            } else yt = 0;
          const St = Math.abs(yt) <= et,
            _t = Math.abs(ot - mt) <= tt;
          it.done = St && _t;
        }
        return (it.value = it.done ? ot : mt), it;
      },
      flipTarget: () => {
        (pt = -pt), ([nt, ot] = [ot, nt]), bt();
      }
    }
  );
}
spring.needsInterpolation = ($, et) => typeof $ == 'string' || typeof et == 'string';
const zero = ($) => 0;
function decay({
  keyframes: $ = [0],
  velocity: et = 0,
  power: tt = 0.8,
  timeConstant: rt = 350,
  restDelta: nt = 0.5,
  modifyTarget: ot
}) {
  const it = $[0],
    at = { done: !1, value: it };
  let st = tt * et;
  const lt = it + st,
    ut = ot === void 0 ? lt : ot(lt);
  return (
    ut !== lt && (st = ut - it),
    {
      next: (ct) => {
        const dt = -st * Math.exp(-ct / rt);
        return (at.done = !(dt > nt || dt < -nt)), (at.value = at.done ? ut : ut + dt), at;
      },
      flipTarget: () => {}
    }
  );
}
const types = { decay, keyframes, tween: keyframes, spring };
function loopElapsed($, et, tt = 0) {
  return $ - et - tt;
}
function reverseElapsed($, et = 0, tt = 0, rt = !0) {
  return rt ? loopElapsed(et + -$, et, tt) : et - ($ - et) + tt;
}
function hasRepeatDelayElapsed($, et, tt, rt) {
  return rt ? $ >= et + tt : $ <= -tt;
}
const framesync = ($) => {
  const et = ({ delta: tt }) => $(tt);
  return { start: () => sync.update(et, !0), stop: () => cancelSync.update(et) };
};
function animate$1({
  duration: $,
  driver: et = framesync,
  elapsed: tt = 0,
  repeat: rt = 0,
  repeatType: nt = 'loop',
  repeatDelay: ot = 0,
  keyframes: it,
  autoplay: at = !0,
  onPlay: st,
  onStop: lt,
  onComplete: ut,
  onRepeat: ct,
  onUpdate: dt,
  type: ft = 'keyframes',
  ...pt
}) {
  var gt, bt;
  const ht = tt;
  let mt,
    yt = 0,
    St = $,
    _t = !1,
    Ct = !0,
    wt;
  const Et = types[it.length > 2 ? 'keyframes' : ft] || keyframes,
    Rt = it[0],
    kt = it[it.length - 1];
  let jt = { done: !1, value: Rt };
  !((bt = (gt = Et).needsInterpolation) === null || bt === void 0) &&
    bt.call(gt, Rt, kt) &&
    ((wt = interpolate([0, 100], [Rt, kt], { clamp: !1 })), (it = [0, 100]));
  const Ut = Et({ ...pt, duration: $, keyframes: it });
  function Qt() {
    yt++,
      nt === 'reverse'
        ? ((Ct = yt % 2 === 0), (tt = reverseElapsed(tt, St, ot, Ct)))
        : ((tt = loopElapsed(tt, St, ot)), nt === 'mirror' && Ut.flipTarget()),
      (_t = !1),
      ct && ct();
  }
  function Yt() {
    mt && mt.stop(), ut && ut();
  }
  function Vt(Wt) {
    Ct || (Wt = -Wt),
      (tt += Wt),
      _t ||
        ((jt = Ut.next(Math.max(0, tt))),
        wt && (jt.value = wt(jt.value)),
        (_t = Ct ? jt.done : tt <= 0)),
      dt && dt(jt.value),
      _t &&
        (yt === 0 && (St = St !== void 0 ? St : tt),
        yt < rt ? hasRepeatDelayElapsed(tt, St, ot, Ct) && Qt() : Yt());
  }
  function Ht() {
    st && st(), (mt = et(Vt)), mt.start();
  }
  return (
    at && Ht(),
    {
      stop: () => {
        lt && lt(), mt && mt.stop();
      },
      sample: (Wt) => {
        tt = ht;
        const Pt = $ && typeof $ == 'number' ? Math.max($ * 0.5, 50) : 50;
        let At = 0;
        for (Vt(0); At <= Wt; ) {
          const Mt = Wt - At;
          Vt(Math.min(Mt, Pt)), (At += Pt);
        }
        return jt;
      }
    }
  );
}
function isWaapiSupportedEasing($) {
  return !$ || Array.isArray($) || (typeof $ == 'string' && supportedWaapiEasing[$]);
}
const cubicBezierAsString = ([$, et, tt, rt]) => `cubic-bezier(${$}, ${et}, ${tt}, ${rt})`,
  supportedWaapiEasing = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
  };
function mapEasingToNativeEasing($) {
  if ($) return Array.isArray($) ? cubicBezierAsString($) : supportedWaapiEasing[$];
}
function animateStyle(
  $,
  et,
  tt,
  { delay: rt = 0, duration: nt, repeat: ot = 0, repeatType: it = 'loop', ease: at, times: st } = {}
) {
  return $.animate(
    { [et]: tt, offset: st },
    {
      delay: rt,
      duration: nt,
      easing: mapEasingToNativeEasing(at),
      fill: 'both',
      iterations: ot + 1,
      direction: it === 'reverse' ? 'alternate' : 'normal'
    }
  );
}
const featureTests = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') },
  results = {},
  supports = {};
for (const $ in featureTests)
  supports[$] = () => (results[$] === void 0 && (results[$] = featureTests[$]()), results[$]);
function getFinalKeyframe($, { repeat: et, repeatType: tt = 'loop' }) {
  const rt = et && tt !== 'loop' && et % 2 === 1 ? 0 : $.length - 1;
  return $[rt];
}
const acceleratedValues = new Set(['opacity']),
  sampleDelta = 10;
function createAcceleratedAnimation($, et, { onUpdate: tt, onComplete: rt, ...nt }) {
  if (
    !(
      supports.waapi() &&
      acceleratedValues.has(et) &&
      !nt.repeatDelay &&
      nt.repeatType !== 'mirror' &&
      nt.damping !== 0
    )
  )
    return !1;
  let { keyframes: it, duration: at = 300, elapsed: st = 0, ease: lt } = nt;
  if (nt.type === 'spring' || !isWaapiSupportedEasing(nt.ease)) {
    if (nt.repeat === 1 / 0) return;
    const ct = animate$1(nt);
    let dt = { done: !1, value: it[0] };
    const ft = [];
    let pt = 0;
    for (; !dt.done && pt < 2e4; ) (dt = ct.sample(pt)), ft.push(dt.value), (pt += sampleDelta);
    (it = ft), (at = pt - sampleDelta), (lt = 'linear');
  }
  const ut = animateStyle($.owner.current, et, it, { ...nt, delay: -st, duration: at, ease: lt });
  return (
    (ut.onfinish = () => {
      $.set(getFinalKeyframe(it, nt)), rt && rt();
    }),
    () => {
      const { currentTime: ct } = ut;
      if (ct) {
        const dt = animate$1({ ...nt, autoplay: !1 });
        $.setWithVelocity(dt.sample(ct - sampleDelta).value, dt.sample(ct).value, sampleDelta);
      }
      sync.update(() => ut.cancel());
    }
  );
}
function delay($, et) {
  const tt = performance.now(),
    rt = ({ timestamp: nt }) => {
      const ot = nt - tt;
      ot >= et && (cancelSync.read(rt), $(ot - et));
    };
  return sync.read(rt, !0), () => cancelSync.read(rt);
}
function createInstantAnimation({ keyframes: $, elapsed: et, onUpdate: tt, onComplete: rt }) {
  const nt = () => (tt && tt($[$.length - 1]), rt && rt(), () => {});
  return et ? delay(nt, -et) : nt();
}
function inertia({
  keyframes: $,
  velocity: et = 0,
  min: tt,
  max: rt,
  power: nt = 0.8,
  timeConstant: ot = 750,
  bounceStiffness: it = 500,
  bounceDamping: at = 10,
  restDelta: st = 1,
  modifyTarget: lt,
  driver: ut,
  onUpdate: ct,
  onComplete: dt,
  onStop: ft
}) {
  const pt = $[0];
  let gt;
  function bt(St) {
    return (tt !== void 0 && St < tt) || (rt !== void 0 && St > rt);
  }
  function ht(St) {
    return tt === void 0 ? rt : rt === void 0 || Math.abs(tt - St) < Math.abs(rt - St) ? tt : rt;
  }
  function mt(St) {
    gt == null || gt.stop(),
      (gt = animate$1({
        keyframes: [0, 1],
        velocity: 0,
        ...St,
        driver: ut,
        onUpdate: (_t) => {
          var Ct;
          ct == null || ct(_t), (Ct = St.onUpdate) === null || Ct === void 0 || Ct.call(St, _t);
        },
        onComplete: dt,
        onStop: ft
      }));
  }
  function yt(St) {
    mt({ type: 'spring', stiffness: it, damping: at, restDelta: st, ...St });
  }
  if (bt(pt)) yt({ velocity: et, keyframes: [pt, ht(pt)] });
  else {
    let St = nt * et + pt;
    typeof lt < 'u' && (St = lt(St));
    const _t = ht(St),
      Ct = _t === tt ? -1 : 1;
    let wt, Et;
    const Rt = (kt) => {
      (wt = Et),
        (Et = kt),
        (et = velocityPerSecond(kt - wt, frameData.delta)),
        ((Ct === 1 && kt > _t) || (Ct === -1 && kt < _t)) &&
          yt({ keyframes: [kt, _t], velocity: et });
    };
    mt({
      type: 'decay',
      keyframes: [pt, 0],
      velocity: et,
      timeConstant: ot,
      power: nt,
      restDelta: st,
      modifyTarget: lt,
      onUpdate: bt(St) ? Rt : void 0
    });
  }
  return { stop: () => (gt == null ? void 0 : gt.stop()) };
}
const underDampedSpring = () => ({ type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 }),
  criticallyDampedSpring = ($) => ({
    type: 'spring',
    stiffness: 550,
    damping: $ === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  linearTween = () => ({ type: 'keyframes', ease: 'linear', duration: 0.3 }),
  keyframesTransition = { type: 'keyframes', duration: 0.8 },
  defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: criticallyDampedSpring,
    scaleY: criticallyDampedSpring,
    scale: criticallyDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: criticallyDampedSpring
  },
  getDefaultTransition = ($, { keyframes: et }) =>
    et.length > 2
      ? keyframesTransition
      : (defaultTransitions[$] || defaultTransitions.default)(et[1]),
  isAnimatable = ($, et) =>
    $ === 'zIndex'
      ? !1
      : !!(
          typeof et == 'number' ||
          Array.isArray(et) ||
          (typeof et == 'string' && complex.test(et) && !et.startsWith('url('))
        );
function isTransitionDefined({
  when: $,
  delay: et,
  delayChildren: tt,
  staggerChildren: rt,
  staggerDirection: nt,
  repeat: ot,
  repeatType: it,
  repeatDelay: at,
  from: st,
  elapsed: lt,
  ...ut
}) {
  return !!Object.keys(ut).length;
}
function isZero($) {
  return $ === 0 || (typeof $ == 'string' && parseFloat($) === 0 && $.indexOf(' ') === -1);
}
function getZeroUnit($) {
  return typeof $ == 'number' ? 0 : getAnimatableNone('', $);
}
function getValueTransition($, et) {
  return $[et] || $.default || $;
}
function getKeyframes($, et, tt, rt) {
  const nt = isAnimatable(et, tt);
  let ot = rt.from !== void 0 ? rt.from : $.get();
  return (
    ot === 'none' && nt && typeof tt == 'string'
      ? (ot = getAnimatableNone(et, tt))
      : isZero(ot) && typeof tt == 'string'
      ? (ot = getZeroUnit(tt))
      : !Array.isArray(tt) && isZero(tt) && typeof ot == 'string' && (tt = getZeroUnit(ot)),
    Array.isArray(tt) ? (tt[0] === null && (tt[0] = ot), tt) : [ot, tt]
  );
}
const createMotionValueAnimation =
  ($, et, tt, rt = {}) =>
  (nt) => {
    const ot = getValueTransition(rt, $) || {},
      it = ot.delay || rt.delay || 0;
    let { elapsed: at = 0 } = rt;
    at = at - secondsToMilliseconds(it);
    const st = getKeyframes(et, $, tt, ot),
      lt = st[0],
      ut = st[st.length - 1],
      ct = isAnimatable($, lt),
      dt = isAnimatable($, ut);
    let ft = {
      keyframes: st,
      velocity: et.getVelocity(),
      ...ot,
      elapsed: at,
      onUpdate: (ht) => {
        et.set(ht), ot.onUpdate && ot.onUpdate(ht);
      },
      onComplete: () => {
        nt(), ot.onComplete && ot.onComplete();
      }
    };
    if (!ct || !dt || instantAnimationState.current || ot.type === !1)
      return createInstantAnimation(ft);
    if (ot.type === 'inertia') {
      const ht = inertia(ft);
      return () => ht.stop();
    }
    isTransitionDefined(ot) || (ft = { ...ft, ...getDefaultTransition($, ft) }),
      ft.duration && (ft.duration = secondsToMilliseconds(ft.duration)),
      ft.repeatDelay && (ft.repeatDelay = secondsToMilliseconds(ft.repeatDelay));
    const pt = et.owner,
      gt = pt && pt.current;
    if (pt && gt instanceof HTMLElement && !(pt != null && pt.getProps().onUpdate)) {
      const ht = createAcceleratedAnimation(et, $, ft);
      if (ht) return ht;
    }
    const bt = animate$1(ft);
    return () => bt.stop();
  };
function animateVisualElement($, et, tt = {}) {
  $.notify('AnimationStart', et);
  let rt;
  if (Array.isArray(et)) {
    const nt = et.map((ot) => animateVariant($, ot, tt));
    rt = Promise.all(nt);
  } else if (typeof et == 'string') rt = animateVariant($, et, tt);
  else {
    const nt = typeof et == 'function' ? resolveVariant($, et, tt.custom) : et;
    rt = animateTarget($, nt, tt);
  }
  return rt.then(() => $.notify('AnimationComplete', et));
}
function animateVariant($, et, tt = {}) {
  var rt;
  const nt = resolveVariant($, et, tt.custom);
  let { transition: ot = $.getDefaultTransition() || {} } = nt || {};
  tt.transitionOverride && (ot = tt.transitionOverride);
  const it = nt ? () => animateTarget($, nt, tt) : () => Promise.resolve(),
    at =
      !((rt = $.variantChildren) === null || rt === void 0) && rt.size
        ? (lt = 0) => {
            const { delayChildren: ut = 0, staggerChildren: ct, staggerDirection: dt } = ot;
            return animateChildren($, et, ut + lt, ct, dt, tt);
          }
        : () => Promise.resolve(),
    { when: st } = ot;
  if (st) {
    const [lt, ut] = st === 'beforeChildren' ? [it, at] : [at, it];
    return lt().then(ut);
  } else return Promise.all([it(), at(tt.delay)]);
}
function animateTarget($, et, { delay: tt = 0, transitionOverride: rt, type: nt } = {}) {
  var ot;
  let {
    transition: it = $.getDefaultTransition(),
    transitionEnd: at,
    ...st
  } = $.makeTargetAnimatable(et);
  const lt = $.getValue('willChange');
  rt && (it = rt);
  const ut = [],
    ct = nt && ((ot = $.animationState) === null || ot === void 0 ? void 0 : ot.getState()[nt]);
  for (const dt in st) {
    const ft = $.getValue(dt),
      pt = st[dt];
    if (!ft || pt === void 0 || (ct && shouldBlockAnimation(ct, dt))) continue;
    let gt = { delay: tt, elapsed: 0, ...it };
    if (
      ($.shouldReduceMotion && transformProps.has(dt) && (gt = { ...gt, type: !1, delay: 0 }),
      !ft.hasAnimated)
    ) {
      const ht = $.getProps()[optimizedAppearDataAttribute];
      ht && (gt.elapsed = handoffOptimizedAppearAnimation(ht, dt));
    }
    let bt = ft.start(createMotionValueAnimation(dt, ft, pt, gt));
    isWillChangeMotionValue(lt) && (lt.add(dt), (bt = bt.then(() => lt.remove(dt)))), ut.push(bt);
  }
  return Promise.all(ut).then(() => {
    at && setTarget($, at);
  });
}
function animateChildren($, et, tt = 0, rt = 0, nt = 1, ot) {
  const it = [],
    at = ($.variantChildren.size - 1) * rt,
    st = nt === 1 ? (lt = 0) => lt * rt : (lt = 0) => at - lt * rt;
  return (
    Array.from($.variantChildren)
      .sort(sortByTreeOrder)
      .forEach((lt, ut) => {
        lt.notify('AnimationStart', et),
          it.push(
            animateVariant(lt, et, { ...ot, delay: tt + st(ut) }).then(() =>
              lt.notify('AnimationComplete', et)
            )
          );
      }),
    Promise.all(it)
  );
}
function sortByTreeOrder($, et) {
  return $.sortNodePosition(et);
}
function shouldBlockAnimation({ protectedKeys: $, needsAnimating: et }, tt) {
  const rt = $.hasOwnProperty(tt) && et[tt] !== !0;
  return (et[tt] = !1), rt;
}
const variantPriorityOrder = [
    AnimationType.Animate,
    AnimationType.InView,
    AnimationType.Focus,
    AnimationType.Hover,
    AnimationType.Tap,
    AnimationType.Drag,
    AnimationType.Exit
  ],
  reversePriorityOrder = [...variantPriorityOrder].reverse(),
  numAnimationTypes = variantPriorityOrder.length;
function animateList($) {
  return (et) =>
    Promise.all(et.map(({ animation: tt, options: rt }) => animateVisualElement($, tt, rt)));
}
function createAnimationState($) {
  let et = animateList($);
  const tt = createState();
  let rt = !0;
  const nt = (st, lt) => {
    const ut = resolveVariant($, lt);
    if (ut) {
      const { transition: ct, transitionEnd: dt, ...ft } = ut;
      st = { ...st, ...ft, ...dt };
    }
    return st;
  };
  function ot(st) {
    et = st($);
  }
  function it(st, lt) {
    const ut = $.getProps(),
      ct = $.getVariantContext(!0) || {},
      dt = [],
      ft = new Set();
    let pt = {},
      gt = 1 / 0;
    for (let ht = 0; ht < numAnimationTypes; ht++) {
      const mt = reversePriorityOrder[ht],
        yt = tt[mt],
        St = ut[mt] !== void 0 ? ut[mt] : ct[mt],
        _t = isVariantLabel(St),
        Ct = mt === lt ? yt.isActive : null;
      Ct === !1 && (gt = ht);
      let wt = St === ct[mt] && St !== ut[mt] && _t;
      if (
        (wt && rt && $.manuallyAnimateOnMount && (wt = !1),
        (yt.protectedKeys = { ...pt }),
        (!yt.isActive && Ct === null) ||
          (!St && !yt.prevProp) ||
          isAnimationControls(St) ||
          typeof St == 'boolean')
      )
        continue;
      const Et = checkVariantsDidChange(yt.prevProp, St);
      let Rt = Et || (mt === lt && yt.isActive && !wt && _t) || (ht > gt && _t);
      const kt = Array.isArray(St) ? St : [St];
      let jt = kt.reduce(nt, {});
      Ct === !1 && (jt = {});
      const { prevResolvedValues: Ut = {} } = yt,
        Qt = { ...Ut, ...jt },
        Yt = (Vt) => {
          (Rt = !0), ft.delete(Vt), (yt.needsAnimating[Vt] = !0);
        };
      for (const Vt in Qt) {
        const Ht = jt[Vt],
          Wt = Ut[Vt];
        pt.hasOwnProperty(Vt) ||
          (Ht !== Wt
            ? isKeyframesTarget(Ht) && isKeyframesTarget(Wt)
              ? !shallowCompare(Ht, Wt) || Et
                ? Yt(Vt)
                : (yt.protectedKeys[Vt] = !0)
              : Ht !== void 0
              ? Yt(Vt)
              : ft.add(Vt)
            : Ht !== void 0 && ft.has(Vt)
            ? Yt(Vt)
            : (yt.protectedKeys[Vt] = !0));
      }
      (yt.prevProp = St),
        (yt.prevResolvedValues = jt),
        yt.isActive && (pt = { ...pt, ...jt }),
        rt && $.blockInitialAnimation && (Rt = !1),
        Rt && !wt && dt.push(...kt.map((Vt) => ({ animation: Vt, options: { type: mt, ...st } })));
    }
    if (ft.size) {
      const ht = {};
      ft.forEach((mt) => {
        const yt = $.getBaseTarget(mt);
        yt !== void 0 && (ht[mt] = yt);
      }),
        dt.push({ animation: ht });
    }
    let bt = Boolean(dt.length);
    return (
      rt && ut.initial === !1 && !$.manuallyAnimateOnMount && (bt = !1),
      (rt = !1),
      bt ? et(dt) : Promise.resolve()
    );
  }
  function at(st, lt, ut) {
    var ct;
    if (tt[st].isActive === lt) return Promise.resolve();
    (ct = $.variantChildren) === null ||
      ct === void 0 ||
      ct.forEach((ft) => {
        var pt;
        return (pt = ft.animationState) === null || pt === void 0 ? void 0 : pt.setActive(st, lt);
      }),
      (tt[st].isActive = lt);
    const dt = it(ut, st);
    for (const ft in tt) tt[ft].protectedKeys = {};
    return dt;
  }
  return { animateChanges: it, setActive: at, setAnimateFunction: ot, getState: () => tt };
}
function checkVariantsDidChange($, et) {
  return typeof et == 'string' ? et !== $ : Array.isArray(et) ? !shallowCompare(et, $) : !1;
}
function createTypeState($ = !1) {
  return { isActive: $, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function createState() {
  return {
    [AnimationType.Animate]: createTypeState(!0),
    [AnimationType.InView]: createTypeState(),
    [AnimationType.Hover]: createTypeState(),
    [AnimationType.Tap]: createTypeState(),
    [AnimationType.Drag]: createTypeState(),
    [AnimationType.Focus]: createTypeState(),
    [AnimationType.Exit]: createTypeState()
  };
}
const animations = {
    animation: makeRenderlessComponent(({ visualElement: $, animate: et }) => {
      $.animationState || ($.animationState = createAnimationState($)),
        isAnimationControls(et) && reactExports.useEffect(() => et.subscribe($), [et]);
    }),
    exit: makeRenderlessComponent(($) => {
      const { custom: et, visualElement: tt } = $,
        [rt, nt] = usePresence(),
        ot = reactExports.useContext(PresenceContext);
      reactExports.useEffect(() => {
        tt.isPresent = rt;
        const it =
          tt.animationState &&
          tt.animationState.setActive(AnimationType.Exit, !rt, { custom: (ot && ot.custom) || et });
        it && !rt && it.then(nt);
      }, [rt]);
    })
  },
  distance = ($, et) => Math.abs($ - et);
function distance2D($, et) {
  const tt = distance($.x, et.x),
    rt = distance($.y, et.y);
  return Math.sqrt(tt ** 2 + rt ** 2);
}
class PanSession {
  constructor(et, tt, { transformPagePoint: rt } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const lt = getPanInfo(this.lastMoveEventInfo, this.history),
          ut = this.startEvent !== null,
          ct = distance2D(lt.offset, { x: 0, y: 0 }) >= 3;
        if (!ut && !ct) return;
        const { point: dt } = lt,
          { timestamp: ft } = frameData;
        this.history.push({ ...dt, timestamp: ft });
        const { onStart: pt, onMove: gt } = this.handlers;
        ut || (pt && pt(this.lastMoveEvent, lt), (this.startEvent = this.lastMoveEvent)),
          gt && gt(this.lastMoveEvent, lt);
      }),
      (this.handlePointerMove = (lt, ut) => {
        (this.lastMoveEvent = lt),
          (this.lastMoveEventInfo = transformPoint(ut, this.transformPagePoint)),
          sync.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (lt, ut) => {
        this.end();
        const { onEnd: ct, onSessionEnd: dt } = this.handlers,
          ft = getPanInfo(transformPoint(ut, this.transformPagePoint), this.history);
        this.startEvent && ct && ct(lt, ft), dt && dt(lt, ft);
      }),
      !isPrimaryPointer(et))
    )
      return;
    (this.handlers = tt), (this.transformPagePoint = rt);
    const nt = extractEventInfo(et),
      ot = transformPoint(nt, this.transformPagePoint),
      { point: it } = ot,
      { timestamp: at } = frameData;
    this.history = [{ ...it, timestamp: at }];
    const { onSessionStart: st } = tt;
    st && st(et, getPanInfo(ot, this.history)),
      (this.removeListeners = pipe(
        addPointerEvent(window, 'pointermove', this.handlePointerMove),
        addPointerEvent(window, 'pointerup', this.handlePointerUp),
        addPointerEvent(window, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(et) {
    this.handlers = et;
  }
  end() {
    this.removeListeners && this.removeListeners(), cancelSync.update(this.updatePoint);
  }
}
function transformPoint($, et) {
  return et ? { point: et($.point) } : $;
}
function subtractPoint($, et) {
  return { x: $.x - et.x, y: $.y - et.y };
}
function getPanInfo({ point: $ }, et) {
  return {
    point: $,
    delta: subtractPoint($, lastDevicePoint(et)),
    offset: subtractPoint($, startDevicePoint(et)),
    velocity: getVelocity(et, 0.1)
  };
}
function startDevicePoint($) {
  return $[0];
}
function lastDevicePoint($) {
  return $[$.length - 1];
}
function getVelocity($, et) {
  if ($.length < 2) return { x: 0, y: 0 };
  let tt = $.length - 1,
    rt = null;
  const nt = lastDevicePoint($);
  for (; tt >= 0 && ((rt = $[tt]), !(nt.timestamp - rt.timestamp > secondsToMilliseconds(et))); )
    tt--;
  if (!rt) return { x: 0, y: 0 };
  const ot = (nt.timestamp - rt.timestamp) / 1e3;
  if (ot === 0) return { x: 0, y: 0 };
  const it = { x: (nt.x - rt.x) / ot, y: (nt.y - rt.y) / ot };
  return it.x === 1 / 0 && (it.x = 0), it.y === 1 / 0 && (it.y = 0), it;
}
function calcLength($) {
  return $.max - $.min;
}
function isNear($, et = 0, tt = 0.01) {
  return Math.abs($ - et) <= tt;
}
function calcAxisDelta($, et, tt, rt = 0.5) {
  ($.origin = rt),
    ($.originPoint = mix(et.min, et.max, $.origin)),
    ($.scale = calcLength(tt) / calcLength(et)),
    (isNear($.scale, 1, 1e-4) || isNaN($.scale)) && ($.scale = 1),
    ($.translate = mix(tt.min, tt.max, $.origin) - $.originPoint),
    (isNear($.translate) || isNaN($.translate)) && ($.translate = 0);
}
function calcBoxDelta($, et, tt, rt) {
  calcAxisDelta($.x, et.x, tt.x, rt == null ? void 0 : rt.originX),
    calcAxisDelta($.y, et.y, tt.y, rt == null ? void 0 : rt.originY);
}
function calcRelativeAxis($, et, tt) {
  ($.min = tt.min + et.min), ($.max = $.min + calcLength(et));
}
function calcRelativeBox($, et, tt) {
  calcRelativeAxis($.x, et.x, tt.x), calcRelativeAxis($.y, et.y, tt.y);
}
function calcRelativeAxisPosition($, et, tt) {
  ($.min = et.min - tt.min), ($.max = $.min + calcLength(et));
}
function calcRelativePosition($, et, tt) {
  calcRelativeAxisPosition($.x, et.x, tt.x), calcRelativeAxisPosition($.y, et.y, tt.y);
}
function applyConstraints($, { min: et, max: tt }, rt) {
  return (
    et !== void 0 && $ < et
      ? ($ = rt ? mix(et, $, rt.min) : Math.max($, et))
      : tt !== void 0 && $ > tt && ($ = rt ? mix(tt, $, rt.max) : Math.min($, tt)),
    $
  );
}
function calcRelativeAxisConstraints($, et, tt) {
  return {
    min: et !== void 0 ? $.min + et : void 0,
    max: tt !== void 0 ? $.max + tt - ($.max - $.min) : void 0
  };
}
function calcRelativeConstraints($, { top: et, left: tt, bottom: rt, right: nt }) {
  return {
    x: calcRelativeAxisConstraints($.x, tt, nt),
    y: calcRelativeAxisConstraints($.y, et, rt)
  };
}
function calcViewportAxisConstraints($, et) {
  let tt = et.min - $.min,
    rt = et.max - $.max;
  return et.max - et.min < $.max - $.min && ([tt, rt] = [rt, tt]), { min: tt, max: rt };
}
function calcViewportConstraints($, et) {
  return { x: calcViewportAxisConstraints($.x, et.x), y: calcViewportAxisConstraints($.y, et.y) };
}
function calcOrigin($, et) {
  let tt = 0.5;
  const rt = calcLength($),
    nt = calcLength(et);
  return (
    nt > rt
      ? (tt = progress(et.min, et.max - rt, $.min))
      : rt > nt && (tt = progress($.min, $.max - nt, et.min)),
    clamp(0, 1, tt)
  );
}
function rebaseAxisConstraints($, et) {
  const tt = {};
  return (
    et.min !== void 0 && (tt.min = et.min - $.min),
    et.max !== void 0 && (tt.max = et.max - $.min),
    tt
  );
}
const defaultElastic = 0.35;
function resolveDragElastic($ = defaultElastic) {
  return (
    $ === !1 ? ($ = 0) : $ === !0 && ($ = defaultElastic),
    { x: resolveAxisElastic($, 'left', 'right'), y: resolveAxisElastic($, 'top', 'bottom') }
  );
}
function resolveAxisElastic($, et, tt) {
  return { min: resolvePointElastic($, et), max: resolvePointElastic($, tt) };
}
function resolvePointElastic($, et) {
  return typeof $ == 'number' ? $ : $[et] || 0;
}
const createAxisDelta = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  createDelta = () => ({ x: createAxisDelta(), y: createAxisDelta() }),
  createAxis = () => ({ min: 0, max: 0 }),
  createBox = () => ({ x: createAxis(), y: createAxis() });
function eachAxis($) {
  return [$('x'), $('y')];
}
function convertBoundingBoxToBox({ top: $, left: et, right: tt, bottom: rt }) {
  return { x: { min: et, max: tt }, y: { min: $, max: rt } };
}
function convertBoxToBoundingBox({ x: $, y: et }) {
  return { top: et.min, right: $.max, bottom: et.max, left: $.min };
}
function transformBoxPoints($, et) {
  if (!et) return $;
  const tt = et({ x: $.left, y: $.top }),
    rt = et({ x: $.right, y: $.bottom });
  return { top: tt.y, left: tt.x, bottom: rt.y, right: rt.x };
}
function isIdentityScale($) {
  return $ === void 0 || $ === 1;
}
function hasScale({ scale: $, scaleX: et, scaleY: tt }) {
  return !isIdentityScale($) || !isIdentityScale(et) || !isIdentityScale(tt);
}
function hasTransform($) {
  return hasScale($) || has2DTranslate($) || $.z || $.rotate || $.rotateX || $.rotateY;
}
function has2DTranslate($) {
  return is2DTranslate($.x) || is2DTranslate($.y);
}
function is2DTranslate($) {
  return $ && $ !== '0%';
}
function scalePoint($, et, tt) {
  const rt = $ - tt,
    nt = et * rt;
  return tt + nt;
}
function applyPointDelta($, et, tt, rt, nt) {
  return nt !== void 0 && ($ = scalePoint($, nt, rt)), scalePoint($, tt, rt) + et;
}
function applyAxisDelta($, et = 0, tt = 1, rt, nt) {
  ($.min = applyPointDelta($.min, et, tt, rt, nt)),
    ($.max = applyPointDelta($.max, et, tt, rt, nt));
}
function applyBoxDelta($, { x: et, y: tt }) {
  applyAxisDelta($.x, et.translate, et.scale, et.originPoint),
    applyAxisDelta($.y, tt.translate, tt.scale, tt.originPoint);
}
function applyTreeDeltas($, et, tt, rt = !1) {
  var nt, ot;
  const it = tt.length;
  if (!it) return;
  et.x = et.y = 1;
  let at, st;
  for (let lt = 0; lt < it; lt++)
    (at = tt[lt]),
      (st = at.projectionDelta),
      ((ot = (nt = at.instance) === null || nt === void 0 ? void 0 : nt.style) === null ||
      ot === void 0
        ? void 0
        : ot.display) !== 'contents' &&
        (rt &&
          at.options.layoutScroll &&
          at.scroll &&
          at !== at.root &&
          transformBox($, { x: -at.scroll.offset.x, y: -at.scroll.offset.y }),
        st && ((et.x *= st.x.scale), (et.y *= st.y.scale), applyBoxDelta($, st)),
        rt && hasTransform(at.latestValues) && transformBox($, at.latestValues));
  (et.x = snapToDefault(et.x)), (et.y = snapToDefault(et.y));
}
function snapToDefault($) {
  return Number.isInteger($) || $ > 1.0000000000001 || $ < 0.999999999999 ? $ : 1;
}
function translateAxis($, et) {
  ($.min = $.min + et), ($.max = $.max + et);
}
function transformAxis($, et, [tt, rt, nt]) {
  const ot = et[nt] !== void 0 ? et[nt] : 0.5,
    it = mix($.min, $.max, ot);
  applyAxisDelta($, et[tt], et[rt], it, et.scale);
}
const xKeys$1 = ['x', 'scaleX', 'originX'],
  yKeys$1 = ['y', 'scaleY', 'originY'];
function transformBox($, et) {
  transformAxis($.x, et, xKeys$1), transformAxis($.y, et, yKeys$1);
}
function measureViewportBox($, et) {
  return convertBoundingBoxToBox(transformBoxPoints($.getBoundingClientRect(), et));
}
function measurePageBox($, et, tt) {
  const rt = measureViewportBox($, tt),
    { scroll: nt } = et;
  return nt && (translateAxis(rt.x, nt.offset.x), translateAxis(rt.y, nt.offset.y)), rt;
}
const elementDragControls = new WeakMap();
class VisualElementDragControls {
  constructor(et) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = createBox()),
      (this.visualElement = et);
  }
  start(et, { snapToCursor: tt = !1 } = {}) {
    if (this.visualElement.isPresent === !1) return;
    const rt = (at) => {
        this.stopAnimation(), tt && this.snapToCursor(extractEventInfo(at, 'page').point);
      },
      nt = (at, st) => {
        var lt;
        const { drag: ut, dragPropagation: ct, onDragStart: dt } = this.getProps();
        (ut &&
          !ct &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = getGlobalLock(ut)),
          !this.openGlobalLock)) ||
          ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          eachAxis((ft) => {
            var pt, gt;
            let bt = this.getAxisMotionValue(ft).get() || 0;
            if (percent.test(bt)) {
              const ht =
                (gt =
                  (pt = this.visualElement.projection) === null || pt === void 0
                    ? void 0
                    : pt.layout) === null || gt === void 0
                  ? void 0
                  : gt.layoutBox[ft];
              ht && (bt = calcLength(ht) * (parseFloat(bt) / 100));
            }
            this.originPoint[ft] = bt;
          }),
          dt == null || dt(at, st),
          (lt = this.visualElement.animationState) === null ||
            lt === void 0 ||
            lt.setActive(AnimationType.Drag, !0));
      },
      ot = (at, st) => {
        const {
          dragPropagation: lt,
          dragDirectionLock: ut,
          onDirectionLock: ct,
          onDrag: dt
        } = this.getProps();
        if (!lt && !this.openGlobalLock) return;
        const { offset: ft } = st;
        if (ut && this.currentDirection === null) {
          (this.currentDirection = getCurrentDirection(ft)),
            this.currentDirection !== null && (ct == null || ct(this.currentDirection));
          return;
        }
        this.updateAxis('x', st.point, ft),
          this.updateAxis('y', st.point, ft),
          this.visualElement.render(),
          dt == null || dt(at, st);
      },
      it = (at, st) => this.stop(at, st);
    this.panSession = new PanSession(
      et,
      { onSessionStart: rt, onStart: nt, onMove: ot, onSessionEnd: it },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(et, tt) {
    const rt = this.isDragging;
    if ((this.cancel(), !rt)) return;
    const { velocity: nt } = tt;
    this.startAnimation(nt);
    const { onDragEnd: ot } = this.getProps();
    ot == null || ot(et, tt);
  }
  cancel() {
    var et, tt;
    (this.isDragging = !1),
      this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
      (et = this.panSession) === null || et === void 0 || et.end(),
      (this.panSession = void 0);
    const { dragPropagation: rt } = this.getProps();
    !rt && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      (tt = this.visualElement.animationState) === null ||
        tt === void 0 ||
        tt.setActive(AnimationType.Drag, !1);
  }
  updateAxis(et, tt, rt) {
    const { drag: nt } = this.getProps();
    if (!rt || !shouldDrag(et, nt, this.currentDirection)) return;
    const ot = this.getAxisMotionValue(et);
    let it = this.originPoint[et] + rt[et];
    this.constraints &&
      this.constraints[et] &&
      (it = applyConstraints(it, this.constraints[et], this.elastic[et])),
      ot.set(it);
  }
  resolveConstraints() {
    const { dragConstraints: et, dragElastic: tt } = this.getProps(),
      { layout: rt } = this.visualElement.projection || {},
      nt = this.constraints;
    et && isRefObject(et)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : et && rt
      ? (this.constraints = calcRelativeConstraints(rt.layoutBox, et))
      : (this.constraints = !1),
      (this.elastic = resolveDragElastic(tt)),
      nt !== this.constraints &&
        rt &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        eachAxis((ot) => {
          this.getAxisMotionValue(ot) &&
            (this.constraints[ot] = rebaseAxisConstraints(rt.layoutBox[ot], this.constraints[ot]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: et, onMeasureDragConstraints: tt } = this.getProps();
    if (!et || !isRefObject(et)) return !1;
    const rt = et.current,
      { projection: nt } = this.visualElement;
    if (!nt || !nt.layout) return !1;
    const ot = measurePageBox(rt, nt.root, this.visualElement.getTransformPagePoint());
    let it = calcViewportConstraints(nt.layout.layoutBox, ot);
    if (tt) {
      const at = tt(convertBoxToBoundingBox(it));
      (this.hasMutatedConstraints = !!at), at && (it = convertBoundingBoxToBox(at));
    }
    return it;
  }
  startAnimation(et) {
    const {
        drag: tt,
        dragMomentum: rt,
        dragElastic: nt,
        dragTransition: ot,
        dragSnapToOrigin: it,
        onDragTransitionEnd: at
      } = this.getProps(),
      st = this.constraints || {},
      lt = eachAxis((ut) => {
        if (!shouldDrag(ut, tt, this.currentDirection)) return;
        let ct = (st == null ? void 0 : st[ut]) || {};
        it && (ct = { min: 0, max: 0 });
        const dt = nt ? 200 : 1e6,
          ft = nt ? 40 : 1e7,
          pt = {
            type: 'inertia',
            velocity: rt ? et[ut] : 0,
            bounceStiffness: dt,
            bounceDamping: ft,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...ot,
            ...ct
          };
        return this.startAxisValueAnimation(ut, pt);
      });
    return Promise.all(lt).then(at);
  }
  startAxisValueAnimation(et, tt) {
    const rt = this.getAxisMotionValue(et);
    return rt.start(createMotionValueAnimation(et, rt, 0, tt));
  }
  stopAnimation() {
    eachAxis((et) => this.getAxisMotionValue(et).stop());
  }
  getAxisMotionValue(et) {
    var tt;
    const rt = '_drag' + et.toUpperCase(),
      nt = this.visualElement.getProps()[rt];
    return (
      nt ||
      this.visualElement.getValue(
        et,
        ((tt = this.visualElement.getProps().initial) === null || tt === void 0
          ? void 0
          : tt[et]) || 0
      )
    );
  }
  snapToCursor(et) {
    eachAxis((tt) => {
      const { drag: rt } = this.getProps();
      if (!shouldDrag(tt, rt, this.currentDirection)) return;
      const { projection: nt } = this.visualElement,
        ot = this.getAxisMotionValue(tt);
      if (nt && nt.layout) {
        const { min: it, max: at } = nt.layout.layoutBox[tt];
        ot.set(et[tt] - mix(it, at, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    var et;
    if (!this.visualElement.current) return;
    const { drag: tt, dragConstraints: rt } = this.getProps(),
      { projection: nt } = this.visualElement;
    if (!isRefObject(rt) || !nt || !this.constraints) return;
    this.stopAnimation();
    const ot = { x: 0, y: 0 };
    eachAxis((at) => {
      const st = this.getAxisMotionValue(at);
      if (st) {
        const lt = st.get();
        ot[at] = calcOrigin({ min: lt, max: lt }, this.constraints[at]);
      }
    });
    const { transformTemplate: it } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = it ? it({}, '') : 'none'),
      (et = nt.root) === null || et === void 0 || et.updateScroll(),
      nt.updateLayout(),
      this.resolveConstraints(),
      eachAxis((at) => {
        if (!shouldDrag(at, tt, null)) return;
        const st = this.getAxisMotionValue(at),
          { min: lt, max: ut } = this.constraints[at];
        st.set(mix(lt, ut, ot[at]));
      });
  }
  addListeners() {
    var et;
    if (!this.visualElement.current) return;
    elementDragControls.set(this.visualElement, this);
    const tt = this.visualElement.current,
      rt = addPointerEvent(tt, 'pointerdown', (lt) => {
        const { drag: ut, dragListener: ct = !0 } = this.getProps();
        ut && ct && this.start(lt);
      }),
      nt = () => {
        const { dragConstraints: lt } = this.getProps();
        isRefObject(lt) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: ot } = this.visualElement,
      it = ot.addEventListener('measure', nt);
    ot &&
      !ot.layout &&
      ((et = ot.root) === null || et === void 0 || et.updateScroll(), ot.updateLayout()),
      nt();
    const at = addDomEvent(window, 'resize', () => this.scalePositionWithinConstraints()),
      st = ot.addEventListener('didUpdate', ({ delta: lt, hasLayoutChanged: ut }) => {
        this.isDragging &&
          ut &&
          (eachAxis((ct) => {
            const dt = this.getAxisMotionValue(ct);
            dt && ((this.originPoint[ct] += lt[ct].translate), dt.set(dt.get() + lt[ct].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      at(), rt(), it(), st == null || st();
    };
  }
  getProps() {
    const et = this.visualElement.getProps(),
      {
        drag: tt = !1,
        dragDirectionLock: rt = !1,
        dragPropagation: nt = !1,
        dragConstraints: ot = !1,
        dragElastic: it = defaultElastic,
        dragMomentum: at = !0
      } = et;
    return {
      ...et,
      drag: tt,
      dragDirectionLock: rt,
      dragPropagation: nt,
      dragConstraints: ot,
      dragElastic: it,
      dragMomentum: at
    };
  }
}
function shouldDrag($, et, tt) {
  return (et === !0 || et === $) && (tt === null || tt === $);
}
function getCurrentDirection($, et = 10) {
  let tt = null;
  return Math.abs($.y) > et ? (tt = 'y') : Math.abs($.x) > et && (tt = 'x'), tt;
}
function useDrag($) {
  const { dragControls: et, visualElement: tt } = $,
    rt = useConstant(() => new VisualElementDragControls(tt));
  reactExports.useEffect(() => et && et.subscribe(rt), [rt, et]),
    reactExports.useEffect(() => rt.addListeners(), [rt]);
}
function usePanGesture({
  onPan: $,
  onPanStart: et,
  onPanEnd: tt,
  onPanSessionStart: rt,
  visualElement: nt
}) {
  const ot = $ || et || tt || rt,
    it = reactExports.useRef(null),
    { transformPagePoint: at } = reactExports.useContext(MotionConfigContext),
    st = {
      onSessionStart: rt,
      onStart: et,
      onMove: $,
      onEnd: (ut, ct) => {
        (it.current = null), tt && tt(ut, ct);
      }
    };
  reactExports.useEffect(() => {
    it.current !== null && it.current.updateHandlers(st);
  });
  function lt(ut) {
    it.current = new PanSession(ut, st, { transformPagePoint: at });
  }
  usePointerEvent(nt, 'pointerdown', ot && lt),
    useUnmountEffect(() => it.current && it.current.end());
}
const drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};
function isCSSVariable($) {
  return typeof $ == 'string' && $.startsWith('var(--');
}
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable($) {
  const et = cssVariableRegex.exec($);
  if (!et) return [,];
  const [, tt, rt] = et;
  return [tt, rt];
}
function getVariableValue($, et, tt = 1) {
  const [rt, nt] = parseCSSVariable($);
  if (!rt) return;
  const ot = window.getComputedStyle(et).getPropertyValue(rt);
  return ot ? ot.trim() : isCSSVariable(nt) ? getVariableValue(nt, et, tt + 1) : nt;
}
function resolveCSSVariables($, { ...et }, tt) {
  const rt = $.current;
  if (!(rt instanceof Element)) return { target: et, transitionEnd: tt };
  tt && (tt = { ...tt }),
    $.values.forEach((nt) => {
      const ot = nt.get();
      if (!isCSSVariable(ot)) return;
      const it = getVariableValue(ot, rt);
      it && nt.set(it);
    });
  for (const nt in et) {
    const ot = et[nt];
    if (!isCSSVariable(ot)) continue;
    const it = getVariableValue(ot, rt);
    it && ((et[nt] = it), tt && tt[nt] === void 0 && (tt[nt] = ot));
  }
  return { target: et, transitionEnd: tt };
}
const positionalKeys = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
  isPositionalKey = ($) => positionalKeys.has($),
  hasPositionalKey = ($) => Object.keys($).some(isPositionalKey),
  isNumOrPxType = ($) => $ === number || $ === px;
var BoundingBoxDimension;
(function ($) {
  ($.width = 'width'),
    ($.height = 'height'),
    ($.left = 'left'),
    ($.right = 'right'),
    ($.top = 'top'),
    ($.bottom = 'bottom');
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
const getPosFromMatrix = ($, et) => parseFloat($.split(', ')[et]),
  getTranslateFromMatrix =
    ($, et) =>
    (tt, { transform: rt }) => {
      if (rt === 'none' || !rt) return 0;
      const nt = rt.match(/^matrix3d\((.+)\)$/);
      if (nt) return getPosFromMatrix(nt[1], et);
      {
        const ot = rt.match(/^matrix\((.+)\)$/);
        return ot ? getPosFromMatrix(ot[1], $) : 0;
      }
    },
  transformKeys = new Set(['x', 'y', 'z']),
  nonTranslationalTransformKeys = transformPropOrder.filter(($) => !transformKeys.has($));
function removeNonTranslationalTransform($) {
  const et = [];
  return (
    nonTranslationalTransformKeys.forEach((tt) => {
      const rt = $.getValue(tt);
      rt !== void 0 && (et.push([tt, rt.get()]), rt.set(tt.startsWith('scale') ? 1 : 0));
    }),
    et.length && $.render(),
    et
  );
}
const positionalValues = {
    width: ({ x: $ }, { paddingLeft: et = '0', paddingRight: tt = '0' }) =>
      $.max - $.min - parseFloat(et) - parseFloat(tt),
    height: ({ y: $ }, { paddingTop: et = '0', paddingBottom: tt = '0' }) =>
      $.max - $.min - parseFloat(et) - parseFloat(tt),
    top: ($, { top: et }) => parseFloat(et),
    left: ($, { left: et }) => parseFloat(et),
    bottom: ({ y: $ }, { top: et }) => parseFloat(et) + ($.max - $.min),
    right: ({ x: $ }, { left: et }) => parseFloat(et) + ($.max - $.min),
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
  },
  convertChangedValueTypes = ($, et, tt) => {
    const rt = et.measureViewportBox(),
      nt = et.current,
      ot = getComputedStyle(nt),
      { display: it } = ot,
      at = {};
    it === 'none' && et.setStaticValue('display', $.display || 'block'),
      tt.forEach((lt) => {
        at[lt] = positionalValues[lt](rt, ot);
      }),
      et.render();
    const st = et.measureViewportBox();
    return (
      tt.forEach((lt) => {
        const ut = et.getValue(lt);
        ut && ut.jump(at[lt]), ($[lt] = positionalValues[lt](st, ot));
      }),
      $
    );
  },
  checkAndConvertChangedValueTypes = ($, et, tt = {}, rt = {}) => {
    (et = { ...et }), (rt = { ...rt });
    const nt = Object.keys(et).filter(isPositionalKey);
    let ot = [],
      it = !1;
    const at = [];
    if (
      (nt.forEach((st) => {
        const lt = $.getValue(st);
        if (!$.hasValue(st)) return;
        let ut = tt[st],
          ct = findDimensionValueType(ut);
        const dt = et[st];
        let ft;
        if (isKeyframesTarget(dt)) {
          const pt = dt.length,
            gt = dt[0] === null ? 1 : 0;
          (ut = dt[gt]), (ct = findDimensionValueType(ut));
          for (let bt = gt; bt < pt; bt++)
            ft
              ? invariant$1(findDimensionValueType(dt[bt]) === ft)
              : (ft = findDimensionValueType(dt[bt]));
        } else ft = findDimensionValueType(dt);
        if (ct !== ft)
          if (isNumOrPxType(ct) && isNumOrPxType(ft)) {
            const pt = lt.get();
            typeof pt == 'string' && lt.set(parseFloat(pt)),
              typeof dt == 'string'
                ? (et[st] = parseFloat(dt))
                : Array.isArray(dt) && ft === px && (et[st] = dt.map(parseFloat));
          } else
            ct != null && ct.transform && ft != null && ft.transform && (ut === 0 || dt === 0)
              ? ut === 0
                ? lt.set(ft.transform(ut))
                : (et[st] = ct.transform(dt))
              : (it || ((ot = removeNonTranslationalTransform($)), (it = !0)),
                at.push(st),
                (rt[st] = rt[st] !== void 0 ? rt[st] : et[st]),
                lt.jump(dt));
      }),
      at.length)
    ) {
      const st = at.indexOf('height') >= 0 ? window.pageYOffset : null,
        lt = convertChangedValueTypes(et, $, at);
      return (
        ot.length &&
          ot.forEach(([ut, ct]) => {
            $.getValue(ut).set(ct);
          }),
        $.render(),
        isBrowser && st !== null && window.scrollTo({ top: st }),
        { target: lt, transitionEnd: rt }
      );
    } else return { target: et, transitionEnd: rt };
  };
function unitConversion($, et, tt, rt) {
  return hasPositionalKey(et)
    ? checkAndConvertChangedValueTypes($, et, tt, rt)
    : { target: et, transitionEnd: rt };
}
const parseDomVariant = ($, et, tt, rt) => {
    const nt = resolveCSSVariables($, et, rt);
    return (et = nt.target), (rt = nt.transitionEnd), unitConversion($, et, tt, rt);
  },
  prefersReducedMotion = { current: null },
  hasReducedMotionListener = { current: !1 };
function initPrefersReducedMotion() {
  if (((hasReducedMotionListener.current = !0), !!isBrowser))
    if (window.matchMedia) {
      const $ = window.matchMedia('(prefers-reduced-motion)'),
        et = () => (prefersReducedMotion.current = $.matches);
      $.addListener(et), et();
    } else prefersReducedMotion.current = !1;
}
function updateMotionValuesFromProps($, et, tt) {
  const { willChange: rt } = et;
  for (const nt in et) {
    const ot = et[nt],
      it = tt[nt];
    if (isMotionValue(ot)) $.addValue(nt, ot), isWillChangeMotionValue(rt) && rt.add(nt);
    else if (isMotionValue(it))
      $.addValue(nt, motionValue(ot, { owner: $ })), isWillChangeMotionValue(rt) && rt.remove(nt);
    else if (it !== ot)
      if ($.hasValue(nt)) {
        const at = $.getValue(nt);
        !at.hasAnimated && at.set(ot);
      } else {
        const at = $.getStaticValue(nt);
        $.addValue(nt, motionValue(at !== void 0 ? at : ot));
      }
  }
  for (const nt in tt) et[nt] === void 0 && $.removeValue(nt);
  return et;
}
const featureNames = Object.keys(featureDefinitions),
  numFeatures = featureNames.length,
  propEventHandlers = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ];
class VisualElement {
  constructor({ parent: et, props: tt, reducedMotionConfig: rt, visualState: nt }, ot = {}) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.isPresent = !0),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.scheduleRender = () => sync.render(this.render, !1, !0));
    const { latestValues: it, renderState: at } = nt;
    (this.latestValues = it),
      (this.baseTarget = { ...it }),
      (this.initialValues = tt.initial ? { ...it } : {}),
      (this.renderState = at),
      (this.parent = et),
      (this.props = tt),
      (this.depth = et ? et.depth + 1 : 0),
      (this.reducedMotionConfig = rt),
      (this.options = ot),
      (this.isControllingVariants = isControllingVariants(tt)),
      (this.isVariantNode = isVariantNode(tt)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = Boolean(et && et.current));
    const { willChange: st, ...lt } = this.scrapeMotionValuesFromProps(tt, {});
    for (const ut in lt) {
      const ct = lt[ut];
      it[ut] !== void 0 &&
        isMotionValue(ct) &&
        (ct.set(it[ut], !1), isWillChangeMotionValue(st) && st.add(ut));
    }
  }
  scrapeMotionValuesFromProps(et, tt) {
    return {};
  }
  mount(et) {
    var tt;
    (this.current = et),
      this.projection && this.projection.mount(et),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree =
          (tt = this.parent) === null || tt === void 0 ? void 0 : tt.addVariantChild(this)),
      this.values.forEach((rt, nt) => this.bindToMotionValue(nt, rt)),
      hasReducedMotionListener.current || initPrefersReducedMotion(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : prefersReducedMotion.current),
      this.parent && this.parent.children.add(this),
      this.setProps(this.props);
  }
  unmount() {
    var et, tt, rt;
    (et = this.projection) === null || et === void 0 || et.unmount(),
      cancelSync.update(this.notifyUpdate),
      cancelSync.render(this.render),
      this.valueSubscriptions.forEach((nt) => nt()),
      (tt = this.removeFromVariantTree) === null || tt === void 0 || tt.call(this),
      (rt = this.parent) === null || rt === void 0 || rt.children.delete(this);
    for (const nt in this.events) this.events[nt].clear();
    this.current = null;
  }
  bindToMotionValue(et, tt) {
    const rt = transformProps.has(et),
      nt = tt.on('change', (it) => {
        (this.latestValues[et] = it),
          this.props.onUpdate && sync.update(this.notifyUpdate, !1, !0),
          rt && this.projection && (this.projection.isTransformDirty = !0);
      }),
      ot = tt.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(et, () => {
      nt(), ot();
    });
  }
  sortNodePosition(et) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== et.type
      ? 0
      : this.sortInstanceNodePosition(this.current, et.current);
  }
  loadFeatures({ children: et, ...tt }, rt, nt, ot, it, at) {
    const st = [];
    for (let lt = 0; lt < numFeatures; lt++) {
      const ut = featureNames[lt],
        { isEnabled: ct, Component: dt } = featureDefinitions[ut];
      ct(tt) &&
        dt &&
        st.push(reactExports.createElement(dt, { key: ut, ...tt, visualElement: this }));
    }
    if (!this.projection && it) {
      this.projection = new it(ot, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: lt, layout: ut, drag: ct, dragConstraints: dt, layoutScroll: ft } = tt;
      this.projection.setOptions({
        layoutId: lt,
        layout: ut,
        alwaysMeasureLayout: Boolean(ct) || (dt && isRefObject(dt)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof ut == 'string' ? ut : 'both',
        initialPromotionConfig: at,
        layoutScroll: ft
      });
    }
    return st;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(et) {
    return this.latestValues[et];
  }
  setStaticValue(et, tt) {
    this.latestValues[et] = tt;
  }
  makeTargetAnimatable(et, tt = !0) {
    return this.makeTargetAnimatableFromInstance(et, this.props, tt);
  }
  setProps(et) {
    (et.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
    const tt = this.props;
    this.props = et;
    for (let rt = 0; rt < propEventHandlers.length; rt++) {
      const nt = propEventHandlers[rt];
      this.propEventSubscriptions[nt] &&
        (this.propEventSubscriptions[nt](), delete this.propEventSubscriptions[nt]);
      const ot = et['on' + nt];
      ot && (this.propEventSubscriptions[nt] = this.on(nt, ot));
    }
    (this.prevMotionValues = updateMotionValuesFromProps(
      this,
      this.scrapeMotionValuesFromProps(et, tt),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(et) {
    var tt;
    return (tt = this.props.variants) === null || tt === void 0 ? void 0 : tt[et];
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var et;
    return this.isVariantNode
      ? this
      : (et = this.parent) === null || et === void 0
      ? void 0
      : et.getClosestVariantNode();
  }
  getVariantContext(et = !1) {
    var tt, rt;
    if (et) return (tt = this.parent) === null || tt === void 0 ? void 0 : tt.getVariantContext();
    if (!this.isControllingVariants) {
      const ot =
        ((rt = this.parent) === null || rt === void 0 ? void 0 : rt.getVariantContext()) || {};
      return this.props.initial !== void 0 && (ot.initial = this.props.initial), ot;
    }
    const nt = {};
    for (let ot = 0; ot < numVariantProps; ot++) {
      const it = variantProps[ot],
        at = this.props[it];
      (isVariantLabel(at) || at === !1) && (nt[it] = at);
    }
    return nt;
  }
  addVariantChild(et) {
    var tt;
    const rt = this.getClosestVariantNode();
    if (rt)
      return (
        (tt = rt.variantChildren) === null || tt === void 0 || tt.add(et),
        () => rt.variantChildren.delete(et)
      );
  }
  addValue(et, tt) {
    tt !== this.values.get(et) && (this.removeValue(et), this.bindToMotionValue(et, tt)),
      this.values.set(et, tt),
      (this.latestValues[et] = tt.get());
  }
  removeValue(et) {
    var tt;
    this.values.delete(et),
      (tt = this.valueSubscriptions.get(et)) === null || tt === void 0 || tt(),
      this.valueSubscriptions.delete(et),
      delete this.latestValues[et],
      this.removeValueFromRenderState(et, this.renderState);
  }
  hasValue(et) {
    return this.values.has(et);
  }
  getValue(et, tt) {
    if (this.props.values && this.props.values[et]) return this.props.values[et];
    let rt = this.values.get(et);
    return (
      rt === void 0 &&
        tt !== void 0 &&
        ((rt = motionValue(tt, { owner: this })), this.addValue(et, rt)),
      rt
    );
  }
  readValue(et) {
    return this.latestValues[et] !== void 0 || !this.current
      ? this.latestValues[et]
      : this.readValueFromInstance(this.current, et, this.options);
  }
  setBaseTarget(et, tt) {
    this.baseTarget[et] = tt;
  }
  getBaseTarget(et) {
    var tt;
    const { initial: rt } = this.props,
      nt =
        typeof rt == 'string' || typeof rt == 'object'
          ? (tt = resolveVariantFromProps(this.props, rt)) === null || tt === void 0
            ? void 0
            : tt[et]
          : void 0;
    if (rt && nt !== void 0) return nt;
    const ot = this.getBaseTargetFromProps(this.props, et);
    return ot !== void 0 && !isMotionValue(ot)
      ? ot
      : this.initialValues[et] !== void 0 && nt === void 0
      ? void 0
      : this.baseTarget[et];
  }
  on(et, tt) {
    return (
      this.events[et] || (this.events[et] = new SubscriptionManager()), this.events[et].add(tt)
    );
  }
  notify(et, ...tt) {
    var rt;
    (rt = this.events[et]) === null || rt === void 0 || rt.notify(...tt);
  }
}
const variantProps = ['initial', ...variantPriorityOrder],
  numVariantProps = variantProps.length;
class DOMVisualElement extends VisualElement {
  sortInstanceNodePosition(et, tt) {
    return et.compareDocumentPosition(tt) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(et, tt) {
    var rt;
    return (rt = et.style) === null || rt === void 0 ? void 0 : rt[tt];
  }
  removeValueFromRenderState(et, { vars: tt, style: rt }) {
    delete tt[et], delete rt[et];
  }
  makeTargetAnimatableFromInstance(
    { transition: et, transitionEnd: tt, ...rt },
    { transformValues: nt },
    ot
  ) {
    let it = getOrigin(rt, et || {}, this);
    if ((nt && (tt && (tt = nt(tt)), rt && (rt = nt(rt)), it && (it = nt(it))), ot)) {
      checkTargetForNewValues(this, rt, it);
      const at = parseDomVariant(this, rt, it, tt);
      (tt = at.transitionEnd), (rt = at.target);
    }
    return { transition: et, transitionEnd: tt, ...rt };
  }
}
function getComputedStyle$1($) {
  return window.getComputedStyle($);
}
class HTMLVisualElement extends DOMVisualElement {
  readValueFromInstance(et, tt) {
    if (transformProps.has(tt)) {
      const rt = getDefaultValueType(tt);
      return (rt && rt.default) || 0;
    } else {
      const rt = getComputedStyle$1(et),
        nt = (isCSSVariable$1(tt) ? rt.getPropertyValue(tt) : rt[tt]) || 0;
      return typeof nt == 'string' ? nt.trim() : nt;
    }
  }
  measureInstanceViewportBox(et, { transformPagePoint: tt }) {
    return measureViewportBox(et, tt);
  }
  build(et, tt, rt, nt) {
    buildHTMLStyles(et, tt, rt, nt.transformTemplate);
  }
  scrapeMotionValuesFromProps(et, tt) {
    return scrapeMotionValuesFromProps$1(et, tt);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: et } = this.props;
    isMotionValue(et) &&
      (this.childSubscription = et.on('change', (tt) => {
        this.current && (this.current.textContent = `${tt}`);
      }));
  }
  renderInstance(et, tt, rt, nt) {
    renderHTML(et, tt, rt, nt);
  }
}
class SVGVisualElement extends DOMVisualElement {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(et, tt) {
    return et[tt];
  }
  readValueFromInstance(et, tt) {
    var rt;
    return transformProps.has(tt)
      ? ((rt = getDefaultValueType(tt)) === null || rt === void 0 ? void 0 : rt.default) || 0
      : ((tt = camelCaseAttributes.has(tt) ? tt : camelToDash(tt)), et.getAttribute(tt));
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(et, tt) {
    return scrapeMotionValuesFromProps(et, tt);
  }
  build(et, tt, rt, nt) {
    buildSVGAttrs(et, tt, rt, this.isSVGTag, nt.transformTemplate);
  }
  renderInstance(et, tt, rt, nt) {
    renderSVG(et, tt, rt, nt);
  }
  mount(et) {
    (this.isSVGTag = isSVGTag(et.tagName)), super.mount(et);
  }
}
const createDomVisualElement = ($, et) =>
  isSVGComponent($)
    ? new SVGVisualElement(et, { enableHardwareAcceleration: !1 })
    : new HTMLVisualElement(et, { enableHardwareAcceleration: !0 });
function pixelsToPercent($, et) {
  return et.max === et.min ? 0 : ($ / (et.max - et.min)) * 100;
}
const correctBorderRadius = {
    correct: ($, et) => {
      if (!et.target) return $;
      if (typeof $ == 'string')
        if (px.test($)) $ = parseFloat($);
        else return $;
      const tt = pixelsToPercent($, et.target.x),
        rt = pixelsToPercent($, et.target.y);
      return `${tt}% ${rt}%`;
    }
  },
  varToken = '_$css',
  correctBoxShadow = {
    correct: ($, { treeScale: et, projectionDelta: tt }) => {
      const rt = $,
        nt = $.includes('var('),
        ot = [];
      nt && ($ = $.replace(cssVariableRegex, (ft) => (ot.push(ft), varToken)));
      const it = complex.parse($);
      if (it.length > 5) return rt;
      const at = complex.createTransformer($),
        st = typeof it[0] != 'number' ? 1 : 0,
        lt = tt.x.scale * et.x,
        ut = tt.y.scale * et.y;
      (it[0 + st] /= lt), (it[1 + st] /= ut);
      const ct = mix(lt, ut, 0.5);
      typeof it[2 + st] == 'number' && (it[2 + st] /= ct),
        typeof it[3 + st] == 'number' && (it[3 + st] /= ct);
      let dt = at(it);
      if (nt) {
        let ft = 0;
        dt = dt.replace(varToken, () => {
          const pt = ot[ft];
          return ft++, pt;
        });
      }
      return dt;
    }
  };
class MeasureLayoutWithContext extends React.Component {
  componentDidMount() {
    const { visualElement: et, layoutGroup: tt, switchLayoutGroup: rt, layoutId: nt } = this.props,
      { projection: ot } = et;
    addScaleCorrector(defaultScaleCorrectors),
      ot &&
        (tt.group && tt.group.add(ot),
        rt && rt.register && nt && rt.register(ot),
        ot.root.didUpdate(),
        ot.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        ot.setOptions({ ...ot.options, onExitComplete: () => this.safeToRemove() })),
      (globalProjectionState.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(et) {
    const { layoutDependency: tt, visualElement: rt, drag: nt, isPresent: ot } = this.props,
      it = rt.projection;
    return (
      it &&
        ((it.isPresent = ot),
        nt || et.layoutDependency !== tt || tt === void 0 ? it.willUpdate() : this.safeToRemove(),
        et.isPresent !== ot &&
          (ot
            ? it.promote()
            : it.relegate() ||
              sync.postRender(() => {
                var at;
                (!((at = it.getStack()) === null || at === void 0) && at.members.length) ||
                  this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: et } = this.props.visualElement;
    et && (et.root.didUpdate(), !et.currentAnimation && et.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const { visualElement: et, layoutGroup: tt, switchLayoutGroup: rt } = this.props,
      { projection: nt } = et;
    nt &&
      (nt.scheduleCheckAfterUnmount(),
      tt != null && tt.group && tt.group.remove(nt),
      rt != null && rt.deregister && rt.deregister(nt));
  }
  safeToRemove() {
    const { safeToRemove: et } = this.props;
    et == null || et();
  }
  render() {
    return null;
  }
}
function MeasureLayout($) {
  const [et, tt] = usePresence(),
    rt = reactExports.useContext(LayoutGroupContext);
  return React.createElement(MeasureLayoutWithContext, {
    ...$,
    layoutGroup: rt,
    switchLayoutGroup: reactExports.useContext(SwitchLayoutGroupContext),
    isPresent: et,
    safeToRemove: tt
  });
}
const defaultScaleCorrectors = {
    borderRadius: {
      ...correctBorderRadius,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius'
      ]
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
  },
  layoutFeatures = { measureLayout: MeasureLayout };
function animate($, et, tt = {}) {
  const rt = isMotionValue($) ? $ : motionValue($);
  return (
    rt.start(createMotionValueAnimation('', rt, et, tt)),
    { stop: () => rt.stop(), isAnimating: () => rt.isAnimating() }
  );
}
const borders = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  numBorders = borders.length,
  asNumber = ($) => (typeof $ == 'string' ? parseFloat($) : $),
  isPx = ($) => typeof $ == 'number' || px.test($);
function mixValues($, et, tt, rt, nt, ot) {
  nt
    ? (($.opacity = mix(0, tt.opacity !== void 0 ? tt.opacity : 1, easeCrossfadeIn(rt))),
      ($.opacityExit = mix(et.opacity !== void 0 ? et.opacity : 1, 0, easeCrossfadeOut(rt))))
    : ot &&
      ($.opacity = mix(
        et.opacity !== void 0 ? et.opacity : 1,
        tt.opacity !== void 0 ? tt.opacity : 1,
        rt
      ));
  for (let it = 0; it < numBorders; it++) {
    const at = `border${borders[it]}Radius`;
    let st = getRadius(et, at),
      lt = getRadius(tt, at);
    if (st === void 0 && lt === void 0) continue;
    st || (st = 0),
      lt || (lt = 0),
      st === 0 || lt === 0 || isPx(st) === isPx(lt)
        ? (($[at] = Math.max(mix(asNumber(st), asNumber(lt), rt), 0)),
          (percent.test(lt) || percent.test(st)) && ($[at] += '%'))
        : ($[at] = lt);
  }
  (et.rotate || tt.rotate) && ($.rotate = mix(et.rotate || 0, tt.rotate || 0, rt));
}
function getRadius($, et) {
  return $[et] !== void 0 ? $[et] : $.borderRadius;
}
const easeCrossfadeIn = compress(0, 0.5, circOut),
  easeCrossfadeOut = compress(0.5, 0.95, noop$1);
function compress($, et, tt) {
  return (rt) => (rt < $ ? 0 : rt > et ? 1 : tt(progress($, et, rt)));
}
function copyAxisInto($, et) {
  ($.min = et.min), ($.max = et.max);
}
function copyBoxInto($, et) {
  copyAxisInto($.x, et.x), copyAxisInto($.y, et.y);
}
function removePointDelta($, et, tt, rt, nt) {
  return (
    ($ -= et), ($ = scalePoint($, 1 / tt, rt)), nt !== void 0 && ($ = scalePoint($, 1 / nt, rt)), $
  );
}
function removeAxisDelta($, et = 0, tt = 1, rt = 0.5, nt, ot = $, it = $) {
  if (
    (percent.test(et) && ((et = parseFloat(et)), (et = mix(it.min, it.max, et / 100) - it.min)),
    typeof et != 'number')
  )
    return;
  let at = mix(ot.min, ot.max, rt);
  $ === ot && (at -= et),
    ($.min = removePointDelta($.min, et, tt, at, nt)),
    ($.max = removePointDelta($.max, et, tt, at, nt));
}
function removeAxisTransforms($, et, [tt, rt, nt], ot, it) {
  removeAxisDelta($, et[tt], et[rt], et[nt], et.scale, ot, it);
}
const xKeys = ['x', 'scaleX', 'originX'],
  yKeys = ['y', 'scaleY', 'originY'];
function removeBoxTransforms($, et, tt, rt) {
  removeAxisTransforms($.x, et, xKeys, tt == null ? void 0 : tt.x, rt == null ? void 0 : rt.x),
    removeAxisTransforms($.y, et, yKeys, tt == null ? void 0 : tt.y, rt == null ? void 0 : rt.y);
}
function isAxisDeltaZero($) {
  return $.translate === 0 && $.scale === 1;
}
function isDeltaZero($) {
  return isAxisDeltaZero($.x) && isAxisDeltaZero($.y);
}
function boxEquals($, et) {
  return (
    $.x.min === et.x.min && $.x.max === et.x.max && $.y.min === et.y.min && $.y.max === et.y.max
  );
}
function aspectRatio($) {
  return calcLength($.x) / calcLength($.y);
}
class NodeStack {
  constructor() {
    this.members = [];
  }
  add(et) {
    addUniqueItem(this.members, et), et.scheduleRender();
  }
  remove(et) {
    if (
      (removeItem(this.members, et),
      et === this.prevLead && (this.prevLead = void 0),
      et === this.lead)
    ) {
      const tt = this.members[this.members.length - 1];
      tt && this.promote(tt);
    }
  }
  relegate(et) {
    const tt = this.members.findIndex((nt) => et === nt);
    if (tt === 0) return !1;
    let rt;
    for (let nt = tt; nt >= 0; nt--) {
      const ot = this.members[nt];
      if (ot.isPresent !== !1) {
        rt = ot;
        break;
      }
    }
    return rt ? (this.promote(rt), !0) : !1;
  }
  promote(et, tt) {
    var rt;
    const nt = this.lead;
    if (et !== nt && ((this.prevLead = nt), (this.lead = et), et.show(), nt)) {
      nt.instance && nt.scheduleRender(),
        et.scheduleRender(),
        (et.resumeFrom = nt),
        tt && (et.resumeFrom.preserveOpacity = !0),
        nt.snapshot &&
          ((et.snapshot = nt.snapshot),
          (et.snapshot.latestValues = nt.animationValues || nt.latestValues)),
        !((rt = et.root) === null || rt === void 0) && rt.isUpdating && (et.isLayoutDirty = !0);
      const { crossfade: ot } = et.options;
      ot === !1 && nt.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((et) => {
      var tt, rt, nt, ot, it;
      (rt = (tt = et.options).onExitComplete) === null || rt === void 0 || rt.call(tt),
        (it =
          (nt = et.resumingFrom) === null || nt === void 0
            ? void 0
            : (ot = nt.options).onExitComplete) === null ||
          it === void 0 ||
          it.call(ot);
    });
  }
  scheduleRender() {
    this.members.forEach((et) => {
      et.instance && et.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function buildProjectionTransform($, et, tt) {
  let rt = '';
  const nt = $.x.translate / et.x,
    ot = $.y.translate / et.y;
  if (
    ((nt || ot) && (rt = `translate3d(${nt}px, ${ot}px, 0) `),
    (et.x !== 1 || et.y !== 1) && (rt += `scale(${1 / et.x}, ${1 / et.y}) `),
    tt)
  ) {
    const { rotate: st, rotateX: lt, rotateY: ut } = tt;
    st && (rt += `rotate(${st}deg) `),
      lt && (rt += `rotateX(${lt}deg) `),
      ut && (rt += `rotateY(${ut}deg) `);
  }
  const it = $.x.scale * et.x,
    at = $.y.scale * et.y;
  return (it !== 1 || at !== 1) && (rt += `scale(${it}, ${at})`), rt || 'none';
}
const compareByDepth = ($, et) => $.depth - et.depth;
class FlatTree {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(et) {
    addUniqueItem(this.children, et), (this.isDirty = !0);
  }
  remove(et) {
    removeItem(this.children, et), (this.isDirty = !0);
  }
  forEach(et) {
    this.isDirty && this.children.sort(compareByDepth),
      (this.isDirty = !1),
      this.children.forEach(et);
  }
}
const transformAxes = ['', 'X', 'Y', 'Z'],
  animationTarget = 1e3;
let id = 0;
function createProjectionNode({
  attachResizeListener: $,
  defaultParent: et,
  measureScroll: tt,
  checkIsScrollRoot: rt,
  resetTransform: nt
}) {
  return class {
    constructor(it, at = {}, st = et == null ? void 0 : et()) {
      (this.id = id++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isTransformDirty = !1),
        (this.isProjectionDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          this.nodes.forEach(propagateDirtyNodes),
            this.nodes.forEach(resolveTargetDelta),
            this.nodes.forEach(calcProjection);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = it),
        (this.latestValues = at),
        (this.root = st ? st.root || st : this),
        (this.path = st ? [...st.path, st] : []),
        (this.parent = st),
        (this.depth = st ? st.depth + 1 : 0),
        it && this.root.registerPotentialNode(it, this);
      for (let lt = 0; lt < this.path.length; lt++) this.path[lt].shouldResetTransform = !0;
      this.root === this && (this.nodes = new FlatTree());
    }
    addEventListener(it, at) {
      return (
        this.eventHandlers.has(it) || this.eventHandlers.set(it, new SubscriptionManager()),
        this.eventHandlers.get(it).add(at)
      );
    }
    notifyListeners(it, ...at) {
      const st = this.eventHandlers.get(it);
      st == null || st.notify(...at);
    }
    hasListeners(it) {
      return this.eventHandlers.has(it);
    }
    registerPotentialNode(it, at) {
      this.potentialNodes.set(it, at);
    }
    mount(it, at = !1) {
      var st;
      if (this.instance) return;
      (this.isSVG = it instanceof SVGElement && it.tagName !== 'svg'), (this.instance = it);
      const { layoutId: lt, layout: ut, visualElement: ct } = this.options;
      if (
        (ct && !ct.current && ct.mount(it),
        this.root.nodes.add(this),
        (st = this.parent) === null || st === void 0 || st.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        at && (ut || lt) && (this.isLayoutDirty = !0),
        $)
      ) {
        let dt;
        const ft = () => (this.root.updateBlockedByResize = !1);
        $(it, () => {
          (this.root.updateBlockedByResize = !0),
            dt && dt(),
            (dt = delay(ft, 250)),
            globalProjectionState.hasAnimatedSinceResize &&
              ((globalProjectionState.hasAnimatedSinceResize = !1),
              this.nodes.forEach(finishAnimation));
        });
      }
      lt && this.root.registerSharedNode(lt, this),
        this.options.animate !== !1 &&
          ct &&
          (lt || ut) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: dt, hasLayoutChanged: ft, hasRelativeTargetChanged: pt, layout: gt }) => {
              var bt, ht, mt, yt, St;
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const _t =
                  (ht =
                    (bt = this.options.transition) !== null && bt !== void 0
                      ? bt
                      : ct.getDefaultTransition()) !== null && ht !== void 0
                    ? ht
                    : defaultLayoutTransition,
                { onLayoutAnimationStart: Ct, onLayoutAnimationComplete: wt } = ct.getProps(),
                Et = !this.targetLayout || !boxEquals(this.targetLayout, gt) || pt,
                Rt = !ft && pt;
              if (
                (!((mt = this.resumeFrom) === null || mt === void 0) && mt.instance) ||
                Rt ||
                (ft && (Et || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(dt, Rt);
                const kt = { ...getValueTransition(_t, 'layout'), onPlay: Ct, onComplete: wt };
                ct.shouldReduceMotion && ((kt.delay = 0), (kt.type = !1)), this.startAnimation(kt);
              } else
                !ft && this.animationProgress === 0 && finishAnimation(this),
                  this.isLead() &&
                    ((St = (yt = this.options).onExitComplete) === null ||
                      St === void 0 ||
                      St.call(yt));
              this.targetLayout = gt;
            }
          );
    }
    unmount() {
      var it, at;
      this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this),
        (it = this.getStack()) === null || it === void 0 || it.remove(this),
        (at = this.parent) === null || at === void 0 || at.children.delete(this),
        (this.instance = void 0),
        cancelSync.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var it;
      return (
        this.isAnimationBlocked ||
        ((it = this.parent) === null || it === void 0 ? void 0 : it.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      var it;
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        (it = this.nodes) === null || it === void 0 || it.forEach(resetRotation),
        this.animationId++);
    }
    willUpdate(it = !0) {
      var at, st, lt;
      if (this.root.isUpdateBlocked()) {
        (st = (at = this.options).onExitComplete) === null || st === void 0 || st.call(at);
        return;
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
      this.isLayoutDirty = !0;
      for (let ft = 0; ft < this.path.length; ft++) {
        const pt = this.path[ft];
        (pt.shouldResetTransform = !0), pt.updateScroll('snapshot');
      }
      const { layoutId: ut, layout: ct } = this.options;
      if (ut === void 0 && !ct) return;
      const dt =
        (lt = this.options.visualElement) === null || lt === void 0
          ? void 0
          : lt.getProps().transformTemplate;
      (this.prevTransformTemplateValue = dt == null ? void 0 : dt(this.latestValues, '')),
        this.updateSnapshot(),
        it && this.notifyListeners('willUpdate');
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(mountNodeEarly), this.potentialNodes.clear()),
        this.nodes.forEach(resetTransformStyle),
        this.nodes.forEach(updateLayout),
        this.nodes.forEach(notifyLayoutUpdate),
        this.clearAllSnapshots(),
        flushSync.update(),
        flushSync.preRender(),
        flushSync.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      sync.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      sync.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      var it;
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let st = 0; st < this.path.length; st++) this.path[st].updateScroll();
      const at = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = createBox()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox),
        (it = this.options.visualElement) === null ||
          it === void 0 ||
          it.notify('LayoutMeasure', this.layout.layoutBox, at == null ? void 0 : at.layoutBox);
    }
    updateScroll(it = 'measure') {
      let at = Boolean(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === it &&
        (at = !1),
        at &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: it,
            isRoot: rt(this.instance),
            offset: tt(this.instance)
          });
    }
    resetTransform() {
      var it;
      if (!nt) return;
      const at = this.isLayoutDirty || this.shouldResetTransform,
        st = this.projectionDelta && !isDeltaZero(this.projectionDelta),
        lt =
          (it = this.options.visualElement) === null || it === void 0
            ? void 0
            : it.getProps().transformTemplate,
        ut = lt == null ? void 0 : lt(this.latestValues, ''),
        ct = ut !== this.prevTransformTemplateValue;
      at &&
        (st || hasTransform(this.latestValues) || ct) &&
        (nt(this.instance, ut), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(it = !0) {
      const at = this.measurePageBox();
      let st = this.removeElementScroll(at);
      return (
        it && (st = this.removeTransform(st)),
        roundBox(st),
        {
          animationId: this.root.animationId,
          measuredBox: at,
          layoutBox: st,
          latestValues: {},
          source: this.id
        }
      );
    }
    measurePageBox() {
      const { visualElement: it } = this.options;
      if (!it) return createBox();
      const at = it.measureViewportBox(),
        { scroll: st } = this.root;
      return st && (translateAxis(at.x, st.offset.x), translateAxis(at.y, st.offset.y)), at;
    }
    removeElementScroll(it) {
      const at = createBox();
      copyBoxInto(at, it);
      for (let st = 0; st < this.path.length; st++) {
        const lt = this.path[st],
          { scroll: ut, options: ct } = lt;
        if (lt !== this.root && ut && ct.layoutScroll) {
          if (ut.isRoot) {
            copyBoxInto(at, it);
            const { scroll: dt } = this.root;
            dt && (translateAxis(at.x, -dt.offset.x), translateAxis(at.y, -dt.offset.y));
          }
          translateAxis(at.x, ut.offset.x), translateAxis(at.y, ut.offset.y);
        }
      }
      return at;
    }
    applyTransform(it, at = !1) {
      const st = createBox();
      copyBoxInto(st, it);
      for (let lt = 0; lt < this.path.length; lt++) {
        const ut = this.path[lt];
        !at &&
          ut.options.layoutScroll &&
          ut.scroll &&
          ut !== ut.root &&
          transformBox(st, { x: -ut.scroll.offset.x, y: -ut.scroll.offset.y }),
          hasTransform(ut.latestValues) && transformBox(st, ut.latestValues);
      }
      return hasTransform(this.latestValues) && transformBox(st, this.latestValues), st;
    }
    removeTransform(it) {
      var at;
      const st = createBox();
      copyBoxInto(st, it);
      for (let lt = 0; lt < this.path.length; lt++) {
        const ut = this.path[lt];
        if (!ut.instance || !hasTransform(ut.latestValues)) continue;
        hasScale(ut.latestValues) && ut.updateSnapshot();
        const ct = createBox(),
          dt = ut.measurePageBox();
        copyBoxInto(ct, dt),
          removeBoxTransforms(
            st,
            ut.latestValues,
            (at = ut.snapshot) === null || at === void 0 ? void 0 : at.layoutBox,
            ct
          );
      }
      return hasTransform(this.latestValues) && removeBoxTransforms(st, this.latestValues), st;
    }
    setTargetDelta(it) {
      (this.targetDelta = it), (this.isProjectionDirty = !0), this.root.scheduleUpdateProjection();
    }
    setOptions(it) {
      this.options = {
        ...this.options,
        ...it,
        crossfade: it.crossfade !== void 0 ? it.crossfade : !0
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta() {
      var it;
      const at = this.getLead();
      if (
        (this.isProjectionDirty || (this.isProjectionDirty = at.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = at.isTransformDirty),
        !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
      )
        return;
      const { layout: st, layoutId: lt } = this.options;
      if (!(!this.layout || !(st || lt))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const ut = this.getClosestProjectingParent();
          ut && ut.layout
            ? ((this.relativeParent = ut),
              (this.relativeTarget = createBox()),
              (this.relativeTargetOrigin = createBox()),
              calcRelativePosition(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                ut.layout.layoutBox
              ),
              copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = createBox()), (this.targetWithTransforms = createBox())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          !((it = this.relativeParent) === null || it === void 0) &&
          it.target
            ? calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)
            : this.targetDelta
            ? (Boolean(this.resumingFrom)
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : copyBoxInto(this.target, this.layout.layoutBox),
              applyBoxDelta(this.target, this.targetDelta))
            : copyBoxInto(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const ut = this.getClosestProjectingParent();
          ut &&
          Boolean(ut.resumingFrom) === Boolean(this.resumingFrom) &&
          !ut.options.layoutScroll &&
          ut.target
            ? ((this.relativeParent = ut),
              (this.relativeTarget = createBox()),
              (this.relativeTargetOrigin = createBox()),
              calcRelativePosition(this.relativeTargetOrigin, this.target, ut.target),
              copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          hasScale(this.parent.latestValues) ||
          has2DTranslate(this.parent.latestValues)
        )
      )
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var it;
      const { isProjectionDirty: at, isTransformDirty: st } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const lt = this.getLead(),
        ut = Boolean(this.resumingFrom) || this !== lt;
      let ct = !0;
      if ((at && (ct = !1), ut && st && (ct = !1), ct)) return;
      const { layout: dt, layoutId: ft } = this.options;
      if (
        ((this.isTreeAnimating = Boolean(
          ((it = this.parent) === null || it === void 0 ? void 0 : it.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(dt || ft))
      )
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox),
        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, ut);
      const { target: pt } = lt;
      if (!pt) return;
      this.projectionDelta ||
        ((this.projectionDelta = createDelta()),
        (this.projectionDeltaWithTransform = createDelta()));
      const gt = this.treeScale.x,
        bt = this.treeScale.y,
        ht = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, pt, this.latestValues),
        (this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== ht || this.treeScale.x !== gt || this.treeScale.y !== bt) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', pt));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(it = !0) {
      var at, st, lt;
      (st = (at = this.options).scheduleRender) === null || st === void 0 || st.call(at),
        it && ((lt = this.getStack()) === null || lt === void 0 || lt.scheduleRender()),
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(it, at = !1) {
      var st, lt;
      const ut = this.snapshot,
        ct = (ut == null ? void 0 : ut.latestValues) || {},
        dt = { ...this.latestValues },
        ft = createDelta();
      (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !at);
      const pt = createBox(),
        gt =
          (ut == null ? void 0 : ut.source) !==
          ((st = this.layout) === null || st === void 0 ? void 0 : st.source),
        bt =
          (((lt = this.getStack()) === null || lt === void 0 ? void 0 : lt.members.length) || 0) <=
          1,
        ht = Boolean(
          gt && !bt && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade)
        );
      (this.animationProgress = 0),
        (this.mixTargetDelta = (mt) => {
          var yt;
          const St = mt / 1e3;
          mixAxisDelta(ft.x, it.x, St),
            mixAxisDelta(ft.y, it.y, St),
            this.setTargetDelta(ft),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              !((yt = this.relativeParent) === null || yt === void 0) &&
              yt.layout &&
              (calcRelativePosition(
                pt,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox
              ),
              mixBox(this.relativeTarget, this.relativeTargetOrigin, pt, St)),
            gt && ((this.animationValues = dt), mixValues(dt, ct, this.latestValues, St, ht, bt)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = St);
        }),
        this.mixTargetDelta(0);
    }
    startAnimation(it) {
      var at, st;
      this.notifyListeners('animationStart'),
        (at = this.currentAnimation) === null || at === void 0 || at.stop(),
        this.resumingFrom &&
          ((st = this.resumingFrom.currentAnimation) === null || st === void 0 || st.stop()),
        this.pendingAnimation &&
          (cancelSync.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = sync.update(() => {
          (globalProjectionState.hasAnimatedSinceResize = !0),
            (this.currentAnimation = animate(0, animationTarget, {
              ...it,
              onUpdate: (lt) => {
                var ut;
                this.mixTargetDelta(lt),
                  (ut = it.onUpdate) === null || ut === void 0 || ut.call(it, lt);
              },
              onComplete: () => {
                var lt;
                (lt = it.onComplete) === null || lt === void 0 || lt.call(it),
                  this.completeAnimation();
              }
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      var it;
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0)),
        (it = this.getStack()) === null || it === void 0 || it.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      var it;
      this.currentAnimation &&
        ((it = this.mixTargetDelta) === null || it === void 0 || it.call(this, animationTarget),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const it = this.getLead();
      let { targetWithTransforms: at, target: st, layout: lt, latestValues: ut } = it;
      if (!(!at || !st || !lt)) {
        if (
          this !== it &&
          this.layout &&
          lt &&
          shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, lt.layoutBox)
        ) {
          st = this.target || createBox();
          const ct = calcLength(this.layout.layoutBox.x);
          (st.x.min = it.target.x.min), (st.x.max = st.x.min + ct);
          const dt = calcLength(this.layout.layoutBox.y);
          (st.y.min = it.target.y.min), (st.y.max = st.y.min + dt);
        }
        copyBoxInto(at, st),
          transformBox(at, ut),
          calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, at, ut);
      }
    }
    registerSharedNode(it, at) {
      var st, lt, ut;
      this.sharedNodes.has(it) || this.sharedNodes.set(it, new NodeStack()),
        this.sharedNodes.get(it).add(at),
        at.promote({
          transition:
            (st = at.options.initialPromotionConfig) === null || st === void 0
              ? void 0
              : st.transition,
          preserveFollowOpacity:
            (ut =
              (lt = at.options.initialPromotionConfig) === null || lt === void 0
                ? void 0
                : lt.shouldPreserveFollowOpacity) === null || ut === void 0
              ? void 0
              : ut.call(lt, at)
        });
    }
    isLead() {
      const it = this.getStack();
      return it ? it.lead === this : !0;
    }
    getLead() {
      var it;
      const { layoutId: at } = this.options;
      return at
        ? ((it = this.getStack()) === null || it === void 0 ? void 0 : it.lead) || this
        : this;
    }
    getPrevLead() {
      var it;
      const { layoutId: at } = this.options;
      return at
        ? (it = this.getStack()) === null || it === void 0
          ? void 0
          : it.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: it } = this.options;
      if (it) return this.root.sharedNodes.get(it);
    }
    promote({ needsReset: it, transition: at, preserveFollowOpacity: st } = {}) {
      const lt = this.getStack();
      lt && lt.promote(this, st),
        it && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        at && this.setOptions({ transition: at });
    }
    relegate() {
      const it = this.getStack();
      return it ? it.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: it } = this.options;
      if (!it) return;
      let at = !1;
      const { latestValues: st } = it;
      if (((st.rotate || st.rotateX || st.rotateY || st.rotateZ) && (at = !0), !at)) return;
      const lt = {};
      for (let ut = 0; ut < transformAxes.length; ut++) {
        const ct = 'rotate' + transformAxes[ut];
        st[ct] && ((lt[ct] = st[ct]), it.setStaticValue(ct, 0));
      }
      it == null || it.render();
      for (const ut in lt) it.setStaticValue(ut, lt[ut]);
      it.scheduleRender();
    }
    getProjectionStyles(it = {}) {
      var at, st, lt;
      const ut = {};
      if (!this.instance || this.isSVG) return ut;
      if (this.isVisible) ut.visibility = '';
      else return { visibility: 'hidden' };
      const ct =
        (at = this.options.visualElement) === null || at === void 0
          ? void 0
          : at.getProps().transformTemplate;
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (ut.opacity = ''),
          (ut.pointerEvents = resolveMotionValue(it.pointerEvents) || ''),
          (ut.transform = ct ? ct(this.latestValues, '') : 'none'),
          ut
        );
      const dt = this.getLead();
      if (!this.projectionDelta || !this.layout || !dt.target) {
        const bt = {};
        return (
          this.options.layoutId &&
            ((bt.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (bt.pointerEvents = resolveMotionValue(it.pointerEvents) || '')),
          this.hasProjected &&
            !hasTransform(this.latestValues) &&
            ((bt.transform = ct ? ct({}, '') : 'none'), (this.hasProjected = !1)),
          bt
        );
      }
      const ft = dt.animationValues || dt.latestValues;
      this.applyTransformsToTarget(),
        (ut.transform = buildProjectionTransform(
          this.projectionDeltaWithTransform,
          this.treeScale,
          ft
        )),
        ct && (ut.transform = ct(ft, ut.transform));
      const { x: pt, y: gt } = this.projectionDelta;
      (ut.transformOrigin = `${pt.origin * 100}% ${gt.origin * 100}% 0`),
        dt.animationValues
          ? (ut.opacity =
              dt === this
                ? (lt =
                    (st = ft.opacity) !== null && st !== void 0
                      ? st
                      : this.latestValues.opacity) !== null && lt !== void 0
                  ? lt
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : ft.opacityExit)
          : (ut.opacity =
              dt === this
                ? ft.opacity !== void 0
                  ? ft.opacity
                  : ''
                : ft.opacityExit !== void 0
                ? ft.opacityExit
                : 0);
      for (const bt in scaleCorrectors) {
        if (ft[bt] === void 0) continue;
        const { correct: ht, applyTo: mt } = scaleCorrectors[bt],
          yt = ut.transform === 'none' ? ft[bt] : ht(ft[bt], dt);
        if (mt) {
          const St = mt.length;
          for (let _t = 0; _t < St; _t++) ut[mt[_t]] = yt;
        } else ut[bt] = yt;
      }
      return (
        this.options.layoutId &&
          (ut.pointerEvents = dt === this ? resolveMotionValue(it.pointerEvents) || '' : 'none'),
        ut
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((it) => {
        var at;
        return (at = it.currentAnimation) === null || at === void 0 ? void 0 : at.stop();
      }),
        this.root.nodes.forEach(clearMeasurements),
        this.root.sharedNodes.clear();
    }
  };
}
function updateLayout($) {
  $.updateLayout();
}
function notifyLayoutUpdate($) {
  var et, tt, rt;
  const nt = ((et = $.resumeFrom) === null || et === void 0 ? void 0 : et.snapshot) || $.snapshot;
  if ($.isLead() && $.layout && nt && $.hasListeners('didUpdate')) {
    const { layoutBox: ot, measuredBox: it } = $.layout,
      { animationType: at } = $.options,
      st = nt.source !== $.layout.source;
    at === 'size'
      ? eachAxis((ft) => {
          const pt = st ? nt.measuredBox[ft] : nt.layoutBox[ft],
            gt = calcLength(pt);
          (pt.min = ot[ft].min), (pt.max = pt.min + gt);
        })
      : shouldAnimatePositionOnly(at, nt.layoutBox, ot) &&
        eachAxis((ft) => {
          const pt = st ? nt.measuredBox[ft] : nt.layoutBox[ft],
            gt = calcLength(ot[ft]);
          pt.max = pt.min + gt;
        });
    const lt = createDelta();
    calcBoxDelta(lt, ot, nt.layoutBox);
    const ut = createDelta();
    st
      ? calcBoxDelta(ut, $.applyTransform(it, !0), nt.measuredBox)
      : calcBoxDelta(ut, ot, nt.layoutBox);
    const ct = !isDeltaZero(lt);
    let dt = !1;
    if (!$.resumeFrom) {
      const ft = $.getClosestProjectingParent();
      if (ft && !ft.resumeFrom) {
        const { snapshot: pt, layout: gt } = ft;
        if (pt && gt) {
          const bt = createBox();
          calcRelativePosition(bt, nt.layoutBox, pt.layoutBox);
          const ht = createBox();
          calcRelativePosition(ht, ot, gt.layoutBox), boxEquals(bt, ht) || (dt = !0);
        }
      }
    }
    $.notifyListeners('didUpdate', {
      layout: ot,
      snapshot: nt,
      delta: ut,
      layoutDelta: lt,
      hasLayoutChanged: ct,
      hasRelativeTargetChanged: dt
    });
  } else
    $.isLead() && ((rt = (tt = $.options).onExitComplete) === null || rt === void 0 || rt.call(tt));
  $.options.transition = void 0;
}
function propagateDirtyNodes($) {
  $.isProjectionDirty || ($.isProjectionDirty = Boolean($.parent && $.parent.isProjectionDirty)),
    $.isTransformDirty || ($.isTransformDirty = Boolean($.parent && $.parent.isTransformDirty));
}
function clearSnapshot($) {
  $.clearSnapshot();
}
function clearMeasurements($) {
  $.clearMeasurements();
}
function resetTransformStyle($) {
  const { visualElement: et } = $.options;
  et != null && et.getProps().onBeforeLayoutMeasure && et.notify('BeforeLayoutMeasure'),
    $.resetTransform();
}
function finishAnimation($) {
  $.finishAnimation(), ($.targetDelta = $.relativeTarget = $.target = void 0);
}
function resolveTargetDelta($) {
  $.resolveTargetDelta();
}
function calcProjection($) {
  $.calcProjection();
}
function resetRotation($) {
  $.resetRotation();
}
function removeLeadSnapshots($) {
  $.removeLeadSnapshot();
}
function mixAxisDelta($, et, tt) {
  ($.translate = mix(et.translate, 0, tt)),
    ($.scale = mix(et.scale, 1, tt)),
    ($.origin = et.origin),
    ($.originPoint = et.originPoint);
}
function mixAxis($, et, tt, rt) {
  ($.min = mix(et.min, tt.min, rt)), ($.max = mix(et.max, tt.max, rt));
}
function mixBox($, et, tt, rt) {
  mixAxis($.x, et.x, tt.x, rt), mixAxis($.y, et.y, tt.y, rt);
}
function hasOpacityCrossfade($) {
  return $.animationValues && $.animationValues.opacityExit !== void 0;
}
const defaultLayoutTransition = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function mountNodeEarly($, et) {
  let tt = $.root;
  for (let ot = $.path.length - 1; ot >= 0; ot--)
    if (Boolean($.path[ot].instance)) {
      tt = $.path[ot];
      break;
    }
  const nt = (tt && tt !== $.root ? tt.instance : document).querySelector(
    `[data-projection-id="${et}"]`
  );
  nt && $.mount(nt, !0);
}
function roundAxis($) {
  ($.min = Math.round($.min)), ($.max = Math.round($.max));
}
function roundBox($) {
  roundAxis($.x), roundAxis($.y);
}
function shouldAnimatePositionOnly($, et, tt) {
  return (
    $ === 'position' || ($ === 'preserve-aspect' && !isNear(aspectRatio(et), aspectRatio(tt), 0.2))
  );
}
const DocumentProjectionNode = createProjectionNode({
    attachResizeListener: ($, et) => addDomEvent($, 'resize', et),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  rootProjectionNode = { current: void 0 },
  HTMLProjectionNode = createProjectionNode({
    measureScroll: ($) => ({ x: $.scrollLeft, y: $.scrollTop }),
    defaultParent: () => {
      if (!rootProjectionNode.current) {
        const $ = new DocumentProjectionNode(0, {});
        $.mount(window), $.setOptions({ layoutScroll: !0 }), (rootProjectionNode.current = $);
      }
      return rootProjectionNode.current;
    },
    resetTransform: ($, et) => {
      $.style.transform = et !== void 0 ? et : 'none';
    },
    checkIsScrollRoot: ($) => Boolean(window.getComputedStyle($).position === 'fixed')
  }),
  featureBundle = { ...animations, ...gestureAnimations, ...drag, ...layoutFeatures },
  motion = createMotionProxy(($, et) =>
    createDomMotionConfig($, et, featureBundle, createDomVisualElement, HTMLProjectionNode)
  );
function useIsMounted() {
  const $ = reactExports.useRef(!1);
  return (
    useIsomorphicLayoutEffect(
      () => (
        ($.current = !0),
        () => {
          $.current = !1;
        }
      ),
      []
    ),
    $
  );
}
function useForceUpdate() {
  const $ = useIsMounted(),
    [et, tt] = reactExports.useState(0),
    rt = reactExports.useCallback(() => {
      $.current && tt(et + 1);
    }, [et]);
  return [reactExports.useCallback(() => sync.postRender(rt), [rt]), et];
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(et) {
    const tt = this.props.childRef.current;
    if (tt && et.isPresent && !this.props.isPresent) {
      const rt = this.props.sizeRef.current;
      (rt.height = tt.offsetHeight || 0),
        (rt.width = tt.offsetWidth || 0),
        (rt.top = tt.offsetTop),
        (rt.left = tt.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function PopChild({ children: $, isPresent: et }) {
  const tt = reactExports.useId(),
    rt = reactExports.useRef(null),
    nt = reactExports.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    reactExports.useInsertionEffect(() => {
      const { width: ot, height: it, top: at, left: st } = nt.current;
      if (et || !rt.current || !ot || !it) return;
      rt.current.dataset.motionPopId = tt;
      const lt = document.createElement('style');
      return (
        document.head.appendChild(lt),
        lt.sheet &&
          lt.sheet.insertRule(`
          [data-motion-pop-id="${tt}"] {
            position: absolute !important;
            width: ${ot}px !important;
            height: ${it}px !important;
            top: ${at}px !important;
            left: ${st}px !important;
          }
        `),
        () => {
          document.head.removeChild(lt);
        }
      );
    }, [et]),
    reactExports.createElement(
      PopChildMeasure,
      { isPresent: et, childRef: rt, sizeRef: nt },
      reactExports.cloneElement($, { ref: rt })
    )
  );
}
const PresenceChild = ({
  children: $,
  initial: et,
  isPresent: tt,
  onExitComplete: rt,
  custom: nt,
  presenceAffectsLayout: ot,
  mode: it
}) => {
  const at = useConstant(newChildrenMap),
    st = reactExports.useId(),
    lt = reactExports.useMemo(
      () => ({
        id: st,
        initial: et,
        isPresent: tt,
        custom: nt,
        onExitComplete: (ut) => {
          at.set(ut, !0);
          for (const ct of at.values()) if (!ct) return;
          rt && rt();
        },
        register: (ut) => (at.set(ut, !1), () => at.delete(ut))
      }),
      ot ? void 0 : [tt]
    );
  return (
    reactExports.useMemo(() => {
      at.forEach((ut, ct) => at.set(ct, !1));
    }, [tt]),
    reactExports.useEffect(() => {
      !tt && !at.size && rt && rt();
    }, [tt]),
    it === 'popLayout' && ($ = reactExports.createElement(PopChild, { isPresent: tt }, $)),
    reactExports.createElement(PresenceContext.Provider, { value: lt }, $)
  );
};
function newChildrenMap() {
  return new Map();
}
const getChildKey = ($) => $.key || '';
function updateChildLookup($, et) {
  $.forEach((tt) => {
    const rt = getChildKey(tt);
    et.set(rt, tt);
  });
}
function onlyElements($) {
  const et = [];
  return (
    reactExports.Children.forEach($, (tt) => {
      reactExports.isValidElement(tt) && et.push(tt);
    }),
    et
  );
}
const AnimatePresence = ({
  children: $,
  custom: et,
  initial: tt = !0,
  onExitComplete: rt,
  exitBeforeEnter: nt,
  presenceAffectsLayout: ot = !0,
  mode: it = 'sync'
}) => {
  nt && (it = 'wait');
  let [at] = useForceUpdate();
  const st = reactExports.useContext(LayoutGroupContext).forceRender;
  st && (at = st);
  const lt = useIsMounted(),
    ut = onlyElements($);
  let ct = ut;
  const dt = new Set(),
    ft = reactExports.useRef(ct),
    pt = reactExports.useRef(new Map()).current,
    gt = reactExports.useRef(!0);
  if (
    (useIsomorphicLayoutEffect(() => {
      (gt.current = !1), updateChildLookup(ut, pt), (ft.current = ct);
    }),
    useUnmountEffect(() => {
      (gt.current = !0), pt.clear(), dt.clear();
    }),
    gt.current)
  )
    return reactExports.createElement(
      reactExports.Fragment,
      null,
      ct.map((yt) =>
        reactExports.createElement(
          PresenceChild,
          {
            key: getChildKey(yt),
            isPresent: !0,
            initial: tt ? void 0 : !1,
            presenceAffectsLayout: ot,
            mode: it
          },
          yt
        )
      )
    );
  ct = [...ct];
  const bt = ft.current.map(getChildKey),
    ht = ut.map(getChildKey),
    mt = bt.length;
  for (let yt = 0; yt < mt; yt++) {
    const St = bt[yt];
    ht.indexOf(St) === -1 && dt.add(St);
  }
  return (
    it === 'wait' && dt.size && (ct = []),
    dt.forEach((yt) => {
      if (ht.indexOf(yt) !== -1) return;
      const St = pt.get(yt);
      if (!St) return;
      const _t = bt.indexOf(yt),
        Ct = () => {
          pt.delete(yt), dt.delete(yt);
          const wt = ft.current.findIndex((Et) => Et.key === yt);
          if ((ft.current.splice(wt, 1), !dt.size)) {
            if (((ft.current = ut), lt.current === !1)) return;
            at(), rt && rt();
          }
        };
      ct.splice(
        _t,
        0,
        reactExports.createElement(
          PresenceChild,
          {
            key: getChildKey(St),
            isPresent: !1,
            onExitComplete: Ct,
            custom: et,
            presenceAffectsLayout: ot,
            mode: it
          },
          St
        )
      );
    }),
    (ct = ct.map((yt) => {
      const St = yt.key;
      return dt.has(St)
        ? yt
        : reactExports.createElement(
            PresenceChild,
            { key: getChildKey(yt), isPresent: !0, presenceAffectsLayout: ot, mode: it },
            yt
          );
    })),
    reactExports.createElement(
      reactExports.Fragment,
      null,
      dt.size ? ct : ct.map((yt) => reactExports.cloneElement(yt))
    )
  );
};
var toastMotionVariants = {
    initial: ($) => {
      const { position: et } = $,
        tt = ['top', 'bottom'].includes(et) ? 'y' : 'x';
      let rt = ['top-right', 'bottom-right'].includes(et) ? 1 : -1;
      return et === 'bottom' && (rt = 1), { opacity: 0, [tt]: rt * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    },
    exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }
  },
  ToastComponent = reactExports.memo(($) => {
    const {
        id: et,
        message: tt,
        onCloseComplete: rt,
        onRequestRemove: nt,
        requestClose: ot = !1,
        position: it = 'bottom',
        duration: at = 5e3,
        containerStyle: st,
        motionVariants: lt = toastMotionVariants,
        toastSpacing: ut = '0.5rem'
      } = $,
      [ct, dt] = reactExports.useState(at),
      ft = useIsPresent();
    useUpdateEffect(() => {
      ft || rt == null || rt();
    }, [ft]),
      useUpdateEffect(() => {
        dt(at);
      }, [at]);
    const pt = () => dt(null),
      gt = () => dt(at),
      bt = () => {
        ft && nt();
      };
    reactExports.useEffect(() => {
      ft && ot && nt();
    }, [ft, ot, nt]),
      useTimeout(bt, ct);
    const ht = reactExports.useMemo(
        () => ({ pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: ut, ...st }),
        [st, ut]
      ),
      mt = reactExports.useMemo(() => getToastStyle(it), [it]);
    return jsx(motion.li, {
      layout: !0,
      className: 'chakra-toast',
      variants: lt,
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      onHoverStart: pt,
      onHoverEnd: gt,
      custom: { position: it },
      style: mt,
      children: jsx(chakra.div, {
        role: 'status',
        'aria-atomic': 'true',
        className: 'chakra-toast__inner',
        __css: ht,
        children: runIfFn$2(tt, { id: et, onClose: bt })
      })
    });
  });
ToastComponent.displayName = 'ToastComponent';
var ToastProvider = ($) => {
    const et = reactExports.useSyncExternalStore(
        toastStore.subscribe,
        toastStore.getState,
        toastStore.getState
      ),
      { children: tt, motionVariants: rt, component: nt = ToastComponent, portalProps: ot } = $,
      at = Object.keys(et).map((st) => {
        const lt = et[st];
        return jsx(
          'ul',
          {
            role: 'region',
            'aria-live': 'polite',
            id: `chakra-toast-manager-${st}`,
            style: getToastListStyle(st),
            children: jsx(AnimatePresence, {
              initial: !1,
              children: lt.map((ut) => jsx(nt, { motionVariants: rt, ...ut }, ut.id))
            })
          },
          st
        );
      });
    return jsxs(Fragment, { children: [tt, jsx(Portal, { ...ot, children: at })] });
  },
  createChakraProvider = ($) =>
    function ({ children: tt, theme: rt = $, toastOptions: nt, ...ot }) {
      return jsxs(ChakraProvider$1, {
        theme: rt,
        ...ot,
        children: [tt, jsx(ToastProvider, { ...nt })]
      });
    },
  ChakraProvider = createChakraProvider(theme$1);
function assignRef($, et) {
  if ($ != null) {
    if (typeof $ == 'function') {
      $(et);
      return;
    }
    try {
      $.current = et;
    } catch {
      throw new Error(`Cannot assign value '${et}' to ref '${$}'`);
    }
  }
}
function mergeRefs(...$) {
  return (et) => {
    $.forEach((tt) => {
      assignRef(tt, et);
    });
  };
}
function useMergeRefs(...$) {
  return reactExports.useMemo(() => mergeRefs(...$), $);
}
var [ButtonGroupProvider, useButtonGroup] = createContext$1({
  strict: !1,
  name: 'ButtonGroupContext'
});
function useButtonType($) {
  const [et, tt] = reactExports.useState(!$);
  return {
    ref: reactExports.useCallback((ot) => {
      ot && tt(ot.tagName === 'BUTTON');
    }, []),
    type: et ? 'button' : void 0
  };
}
function ButtonIcon($) {
  const { children: et, className: tt, ...rt } = $,
    nt = reactExports.isValidElement(et)
      ? reactExports.cloneElement(et, { 'aria-hidden': !0, focusable: !1 })
      : et,
    ot = cx('chakra-button__icon', tt);
  return jsx(chakra.span, {
    display: 'inline-flex',
    alignSelf: 'center',
    flexShrink: 0,
    ...rt,
    className: ot,
    children: nt
  });
}
ButtonIcon.displayName = 'ButtonIcon';
function ButtonSpinner($) {
  const {
      label: et,
      placement: tt,
      spacing: rt = '0.5rem',
      children: nt = jsx(Spinner, { color: 'currentColor', width: '1em', height: '1em' }),
      className: ot,
      __css: it,
      ...at
    } = $,
    st = cx('chakra-button__spinner', ot),
    lt = tt === 'start' ? 'marginEnd' : 'marginStart',
    ut = reactExports.useMemo(
      () => ({
        display: 'flex',
        alignItems: 'center',
        position: et ? 'relative' : 'absolute',
        [lt]: et ? rt : 0,
        fontSize: '1em',
        lineHeight: 'normal',
        ...it
      }),
      [it, et, lt, rt]
    );
  return jsx(chakra.div, { className: st, ...at, __css: ut, children: nt });
}
ButtonSpinner.displayName = 'ButtonSpinner';
var Button = forwardRef(($, et) => {
  const tt = useButtonGroup(),
    rt = useStyleConfig('Button', { ...tt, ...$ }),
    {
      isDisabled: nt = tt == null ? void 0 : tt.isDisabled,
      isLoading: ot,
      isActive: it,
      children: at,
      leftIcon: st,
      rightIcon: lt,
      loadingText: ut,
      iconSpacing: ct = '0.5rem',
      type: dt,
      spinner: ft,
      spinnerPlacement: pt = 'start',
      className: gt,
      as: bt,
      ...ht
    } = omitThemingProps($),
    mt = reactExports.useMemo(() => {
      const Ct = { ...(rt == null ? void 0 : rt._focus), zIndex: 1 };
      return {
        display: 'inline-flex',
        appearance: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',
        ...rt,
        ...(!!tt && { _focus: Ct })
      };
    }, [rt, tt]),
    { ref: yt, type: St } = useButtonType(bt),
    _t = { rightIcon: lt, leftIcon: st, iconSpacing: ct, children: at };
  return jsxs(chakra.button, {
    disabled: nt || ot,
    ref: useMergeRefs(et, yt),
    as: bt,
    type: dt ?? St,
    'data-active': dataAttr(it),
    'data-loading': dataAttr(ot),
    __css: mt,
    className: cx('chakra-button', gt),
    ...ht,
    children: [
      ot &&
        pt === 'start' &&
        jsx(ButtonSpinner, {
          className: 'chakra-button__spinner--start',
          label: ut,
          placement: 'start',
          spacing: ct,
          children: ft
        }),
      ot
        ? ut || jsx(chakra.span, { opacity: 0, children: jsx(ButtonContent, { ..._t }) })
        : jsx(ButtonContent, { ..._t }),
      ot &&
        pt === 'end' &&
        jsx(ButtonSpinner, {
          className: 'chakra-button__spinner--end',
          label: ut,
          placement: 'end',
          spacing: ct,
          children: ft
        })
    ]
  });
});
Button.displayName = 'Button';
function ButtonContent($) {
  const { leftIcon: et, rightIcon: tt, children: rt, iconSpacing: nt } = $;
  return jsxs(Fragment, {
    children: [
      et && jsx(ButtonIcon, { marginEnd: nt, children: et }),
      rt,
      tt && jsx(ButtonIcon, { marginStart: nt, children: tt })
    ]
  });
}
var [FormControlStylesProvider, useFormControlStyles] = createContext$1({
    name: 'FormControlStylesContext',
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
  }),
  [FormControlProvider, useFormControlContext] = createContext$1({
    strict: !1,
    name: 'FormControlContext'
  });
function useFormControlProvider($) {
  const { id: et, isRequired: tt, isInvalid: rt, isDisabled: nt, isReadOnly: ot, ...it } = $,
    at = reactExports.useId(),
    st = et || `field-${at}`,
    lt = `${st}-label`,
    ut = `${st}-feedback`,
    ct = `${st}-helptext`,
    [dt, ft] = reactExports.useState(!1),
    [pt, gt] = reactExports.useState(!1),
    [bt, ht] = reactExports.useState(!1),
    mt = reactExports.useCallback(
      (wt = {}, Et = null) => ({
        id: ct,
        ...wt,
        ref: mergeRefs(Et, (Rt) => {
          Rt && gt(!0);
        })
      }),
      [ct]
    ),
    yt = reactExports.useCallback(
      (wt = {}, Et = null) => {
        var Rt, kt;
        return {
          ...wt,
          ref: Et,
          'data-focus': dataAttr(bt),
          'data-disabled': dataAttr(nt),
          'data-invalid': dataAttr(rt),
          'data-readonly': dataAttr(ot),
          id: (Rt = wt.id) != null ? Rt : lt,
          htmlFor: (kt = wt.htmlFor) != null ? kt : st
        };
      },
      [st, nt, bt, rt, ot, lt]
    ),
    St = reactExports.useCallback(
      (wt = {}, Et = null) => ({
        id: ut,
        ...wt,
        ref: mergeRefs(Et, (Rt) => {
          Rt && ft(!0);
        }),
        'aria-live': 'polite'
      }),
      [ut]
    ),
    _t = reactExports.useCallback(
      (wt = {}, Et = null) => ({ ...wt, ...it, ref: Et, role: 'group' }),
      [it]
    ),
    Ct = reactExports.useCallback(
      (wt = {}, Et = null) => ({
        ...wt,
        ref: Et,
        role: 'presentation',
        'aria-hidden': !0,
        children: wt.children || '*'
      }),
      []
    );
  return {
    isRequired: !!tt,
    isInvalid: !!rt,
    isReadOnly: !!ot,
    isDisabled: !!nt,
    isFocused: !!bt,
    onFocus: () => ht(!0),
    onBlur: () => ht(!1),
    hasFeedbackText: dt,
    setHasFeedbackText: ft,
    hasHelpText: pt,
    setHasHelpText: gt,
    id: st,
    labelId: lt,
    feedbackId: ut,
    helpTextId: ct,
    htmlProps: it,
    getHelpTextProps: mt,
    getErrorMessageProps: St,
    getRootProps: _t,
    getLabelProps: yt,
    getRequiredIndicatorProps: Ct
  };
}
var FormControl = forwardRef(function (et, tt) {
  const rt = useMultiStyleConfig('Form', et),
    nt = omitThemingProps(et),
    { getRootProps: ot, htmlProps: it, ...at } = useFormControlProvider(nt),
    st = cx('chakra-form-control', et.className);
  return jsx(FormControlProvider, {
    value: at,
    children: jsx(FormControlStylesProvider, {
      value: rt,
      children: jsx(chakra.div, { ...ot({}, tt), className: st, __css: rt.container })
    })
  });
});
FormControl.displayName = 'FormControl';
var FormHelperText = forwardRef(function (et, tt) {
  const rt = useFormControlContext(),
    nt = useFormControlStyles(),
    ot = cx('chakra-form__helper-text', et.className);
  return jsx(chakra.div, {
    ...(rt == null ? void 0 : rt.getHelpTextProps(et, tt)),
    __css: nt.helperText,
    className: ot
  });
});
FormHelperText.displayName = 'FormHelperText';
function useFormControl($) {
  const {
    isDisabled: et,
    isInvalid: tt,
    isReadOnly: rt,
    isRequired: nt,
    ...ot
  } = useFormControlProps($);
  return {
    ...ot,
    disabled: et,
    readOnly: rt,
    required: nt,
    'aria-invalid': ariaAttr(tt),
    'aria-required': ariaAttr(nt),
    'aria-readonly': ariaAttr(rt)
  };
}
function useFormControlProps($) {
  var et, tt, rt;
  const nt = useFormControlContext(),
    {
      id: ot,
      disabled: it,
      readOnly: at,
      required: st,
      isRequired: lt,
      isInvalid: ut,
      isReadOnly: ct,
      isDisabled: dt,
      onFocus: ft,
      onBlur: pt,
      ...gt
    } = $,
    bt = $['aria-describedby'] ? [$['aria-describedby']] : [];
  return (
    nt != null && nt.hasFeedbackText && nt != null && nt.isInvalid && bt.push(nt.feedbackId),
    nt != null && nt.hasHelpText && bt.push(nt.helpTextId),
    {
      ...gt,
      'aria-describedby': bt.join(' ') || void 0,
      id: ot ?? (nt == null ? void 0 : nt.id),
      isDisabled: (et = it ?? dt) != null ? et : nt == null ? void 0 : nt.isDisabled,
      isReadOnly: (tt = at ?? ct) != null ? tt : nt == null ? void 0 : nt.isReadOnly,
      isRequired: (rt = st ?? lt) != null ? rt : nt == null ? void 0 : nt.isRequired,
      isInvalid: ut ?? (nt == null ? void 0 : nt.isInvalid),
      onFocus: callAllHandlers(nt == null ? void 0 : nt.onFocus, ft),
      onBlur: callAllHandlers(nt == null ? void 0 : nt.onBlur, pt)
    }
  );
}
var Input = forwardRef(function (et, tt) {
  const { htmlSize: rt, ...nt } = et,
    ot = useMultiStyleConfig('Input', nt),
    it = omitThemingProps(nt),
    at = useFormControl(it),
    st = cx('chakra-input', et.className);
  return jsx(chakra.input, { size: rt, ...at, __css: ot.field, ref: tt, className: st });
});
Input.displayName = 'Input';
Input.id = 'Input';
var propTypesExports = {},
  propTypes = {
    get exports() {
      return propTypesExports;
    },
    set exports($) {
      propTypesExports = $;
    }
  },
  ReactPropTypesSecret_1,
  hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var $ = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (ReactPropTypesSecret_1 = $), ReactPropTypesSecret_1;
}
var factoryWithThrowingShims, hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var $ = requireReactPropTypesSecret();
  function et() {}
  function tt() {}
  return (
    (tt.resetWarningCache = et),
    (factoryWithThrowingShims = function () {
      function rt(it, at, st, lt, ut, ct) {
        if (ct !== $) {
          var dt = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((dt.name = 'Invariant Violation'), dt);
        }
      }
      rt.isRequired = rt;
      function nt() {
        return rt;
      }
      var ot = {
        array: rt,
        bigint: rt,
        bool: rt,
        func: rt,
        number: rt,
        object: rt,
        string: rt,
        symbol: rt,
        any: rt,
        arrayOf: nt,
        element: rt,
        elementType: rt,
        instanceOf: nt,
        node: rt,
        objectOf: nt,
        oneOf: nt,
        oneOfType: nt,
        shape: nt,
        exact: nt,
        checkPropTypes: tt,
        resetWarningCache: et
      };
      return (ot.PropTypes = ot), ot;
    }),
    factoryWithThrowingShims
  );
}
var hasRequiredPropTypes;
function requirePropTypes() {
  return (
    hasRequiredPropTypes ||
      ((hasRequiredPropTypes = 1), (propTypes.exports = requireFactoryWithThrowingShims()())),
    propTypesExports
  );
}
const theme = {
  colors: {
    primary: '#32357c',
    primaryRGBA: 'rgba(50,53,124, 0.75)',
    primaryLight: '#4A4C92',
    primaryGradientDiagonal: 'linear-gradient(52deg, rgba(74,76,146,1) 0%, rgba(50,53,124,1) 100%)',
    primaryGradient: 'linear-gradient(90deg, rgba(88,136,253,1) 0%, rgba(88,42,231,1) 100%)',
    contrastPrimary: '#fefffe',
    secondary: '#53c8cf',
    ternary: '#e18654'
  }
};
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _extends$2() {
  return (
    (_extends$2 = Object.assign
      ? Object.assign.bind()
      : function ($) {
          for (var et = 1; et < arguments.length; et++) {
            var tt = arguments[et];
            for (var rt in tt) Object.prototype.hasOwnProperty.call(tt, rt) && ($[rt] = tt[rt]);
          }
          return $;
        }),
    _extends$2.apply(this, arguments)
  );
}
var Action;
(function ($) {
  ($.Pop = 'POP'), ($.Push = 'PUSH'), ($.Replace = 'REPLACE');
})(Action || (Action = {}));
const PopStateEventType = 'popstate';
function createBrowserHistory($) {
  $ === void 0 && ($ = {});
  function et(rt, nt) {
    let { pathname: ot, search: it, hash: at } = rt.location;
    return createLocation(
      '',
      { pathname: ot, search: it, hash: at },
      (nt.state && nt.state.usr) || null,
      (nt.state && nt.state.key) || 'default'
    );
  }
  function tt(rt, nt) {
    return typeof nt == 'string' ? nt : createPath(nt);
  }
  return getUrlBasedHistory(et, tt, null, $);
}
function invariant($, et) {
  if ($ === !1 || $ === null || typeof $ > 'u') throw new Error(et);
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState($) {
  return { usr: $.state, key: $.key };
}
function createLocation($, et, tt, rt) {
  return (
    tt === void 0 && (tt = null),
    _extends$2(
      { pathname: typeof $ == 'string' ? $ : $.pathname, search: '', hash: '' },
      typeof et == 'string' ? parsePath(et) : et,
      { state: tt, key: (et && et.key) || rt || createKey() }
    )
  );
}
function createPath($) {
  let { pathname: et = '/', search: tt = '', hash: rt = '' } = $;
  return (
    tt && tt !== '?' && (et += tt.charAt(0) === '?' ? tt : '?' + tt),
    rt && rt !== '#' && (et += rt.charAt(0) === '#' ? rt : '#' + rt),
    et
  );
}
function parsePath($) {
  let et = {};
  if ($) {
    let tt = $.indexOf('#');
    tt >= 0 && ((et.hash = $.substr(tt)), ($ = $.substr(0, tt)));
    let rt = $.indexOf('?');
    rt >= 0 && ((et.search = $.substr(rt)), ($ = $.substr(0, rt))), $ && (et.pathname = $);
  }
  return et;
}
function createClientSideURL($) {
  let et =
      typeof window < 'u' && typeof window.location < 'u' && window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href,
    tt = typeof $ == 'string' ? $ : createPath($);
  return (
    invariant(et, 'No window.location.(origin|href) available to create URL for href: ' + tt),
    new URL(tt, et)
  );
}
function getUrlBasedHistory($, et, tt, rt) {
  rt === void 0 && (rt = {});
  let { window: nt = document.defaultView, v5Compat: ot = !1 } = rt,
    it = nt.history,
    at = Action.Pop,
    st = null;
  function lt() {
    (at = Action.Pop), st && st({ action: at, location: dt.location });
  }
  function ut(ft, pt) {
    at = Action.Push;
    let gt = createLocation(dt.location, ft, pt);
    tt && tt(gt, ft);
    let bt = getHistoryState(gt),
      ht = dt.createHref(gt);
    try {
      it.pushState(bt, '', ht);
    } catch {
      nt.location.assign(ht);
    }
    ot && st && st({ action: at, location: dt.location });
  }
  function ct(ft, pt) {
    at = Action.Replace;
    let gt = createLocation(dt.location, ft, pt);
    tt && tt(gt, ft);
    let bt = getHistoryState(gt),
      ht = dt.createHref(gt);
    it.replaceState(bt, '', ht), ot && st && st({ action: at, location: dt.location });
  }
  let dt = {
    get action() {
      return at;
    },
    get location() {
      return $(nt, it);
    },
    listen(ft) {
      if (st) throw new Error('A history only accepts one active listener');
      return (
        nt.addEventListener(PopStateEventType, lt),
        (st = ft),
        () => {
          nt.removeEventListener(PopStateEventType, lt), (st = null);
        }
      );
    },
    createHref(ft) {
      return et(nt, ft);
    },
    encodeLocation(ft) {
      let pt = createClientSideURL(typeof ft == 'string' ? ft : createPath(ft));
      return { pathname: pt.pathname, search: pt.search, hash: pt.hash };
    },
    push: ut,
    replace: ct,
    go(ft) {
      return it.go(ft);
    }
  };
  return dt;
}
var ResultType;
(function ($) {
  ($.data = 'data'), ($.deferred = 'deferred'), ($.redirect = 'redirect'), ($.error = 'error');
})(ResultType || (ResultType = {}));
function matchRoutes($, et, tt) {
  tt === void 0 && (tt = '/');
  let rt = typeof et == 'string' ? parsePath(et) : et,
    nt = stripBasename(rt.pathname || '/', tt);
  if (nt == null) return null;
  let ot = flattenRoutes($);
  rankRouteBranches(ot);
  let it = null;
  for (let at = 0; it == null && at < ot.length; ++at)
    it = matchRouteBranch(ot[at], safelyDecodeURI(nt));
  return it;
}
function flattenRoutes($, et, tt, rt) {
  et === void 0 && (et = []), tt === void 0 && (tt = []), rt === void 0 && (rt = '');
  let nt = (ot, it, at) => {
    let st = {
      relativePath: at === void 0 ? ot.path || '' : at,
      caseSensitive: ot.caseSensitive === !0,
      childrenIndex: it,
      route: ot
    };
    st.relativePath.startsWith('/') &&
      (invariant(
        st.relativePath.startsWith(rt),
        'Absolute route path "' +
          st.relativePath +
          '" nested under path ' +
          ('"' + rt + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (st.relativePath = st.relativePath.slice(rt.length)));
    let lt = joinPaths([rt, st.relativePath]),
      ut = tt.concat(st);
    ot.children &&
      ot.children.length > 0 &&
      (invariant(
        ot.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + lt + '".')
      ),
      flattenRoutes(ot.children, et, ut, lt)),
      !(ot.path == null && !ot.index) &&
        et.push({ path: lt, score: computeScore(lt, ot.index), routesMeta: ut });
  };
  return (
    $.forEach((ot, it) => {
      var at;
      if (ot.path === '' || !((at = ot.path) != null && at.includes('?'))) nt(ot, it);
      else for (let st of explodeOptionalSegments(ot.path)) nt(ot, it, st);
    }),
    et
  );
}
function explodeOptionalSegments($) {
  let et = $.split('/');
  if (et.length === 0) return [];
  let [tt, ...rt] = et,
    nt = tt.endsWith('?'),
    ot = tt.replace(/\?$/, '');
  if (rt.length === 0) return nt ? [ot, ''] : [ot];
  let it = explodeOptionalSegments(rt.join('/')),
    at = [];
  return (
    at.push(...it.map((st) => (st === '' ? ot : [ot, st].join('/')))),
    nt && at.push(...it),
    at.map((st) => ($.startsWith('/') && st === '' ? '/' : st))
  );
}
function rankRouteBranches($) {
  $.sort((et, tt) =>
    et.score !== tt.score
      ? tt.score - et.score
      : compareIndexes(
          et.routesMeta.map((rt) => rt.childrenIndex),
          tt.routesMeta.map((rt) => rt.childrenIndex)
        )
  );
}
const paramRe = /^:\w+$/,
  dynamicSegmentValue = 3,
  indexRouteValue = 2,
  emptySegmentValue = 1,
  staticSegmentValue = 10,
  splatPenalty = -2,
  isSplat = ($) => $ === '*';
function computeScore($, et) {
  let tt = $.split('/'),
    rt = tt.length;
  return (
    tt.some(isSplat) && (rt += splatPenalty),
    et && (rt += indexRouteValue),
    tt
      .filter((nt) => !isSplat(nt))
      .reduce(
        (nt, ot) =>
          nt +
          (paramRe.test(ot)
            ? dynamicSegmentValue
            : ot === ''
            ? emptySegmentValue
            : staticSegmentValue),
        rt
      )
  );
}
function compareIndexes($, et) {
  return $.length === et.length && $.slice(0, -1).every((rt, nt) => rt === et[nt])
    ? $[$.length - 1] - et[et.length - 1]
    : 0;
}
function matchRouteBranch($, et) {
  let { routesMeta: tt } = $,
    rt = {},
    nt = '/',
    ot = [];
  for (let it = 0; it < tt.length; ++it) {
    let at = tt[it],
      st = it === tt.length - 1,
      lt = nt === '/' ? et : et.slice(nt.length) || '/',
      ut = matchPath({ path: at.relativePath, caseSensitive: at.caseSensitive, end: st }, lt);
    if (!ut) return null;
    Object.assign(rt, ut.params);
    let ct = at.route;
    ot.push({
      params: rt,
      pathname: joinPaths([nt, ut.pathname]),
      pathnameBase: normalizePathname(joinPaths([nt, ut.pathnameBase])),
      route: ct
    }),
      ut.pathnameBase !== '/' && (nt = joinPaths([nt, ut.pathnameBase]));
  }
  return ot;
}
function matchPath($, et) {
  typeof $ == 'string' && ($ = { path: $, caseSensitive: !1, end: !0 });
  let [tt, rt] = compilePath($.path, $.caseSensitive, $.end),
    nt = et.match(tt);
  if (!nt) return null;
  let ot = nt[0],
    it = ot.replace(/(.)\/+$/, '$1'),
    at = nt.slice(1);
  return {
    params: rt.reduce((lt, ut, ct) => {
      if (ut === '*') {
        let dt = at[ct] || '';
        it = ot.slice(0, ot.length - dt.length).replace(/(.)\/+$/, '$1');
      }
      return (lt[ut] = safelyDecodeURIComponent(at[ct] || '', ut)), lt;
    }, {}),
    pathname: ot,
    pathnameBase: it,
    pattern: $
  };
}
function compilePath($, et, tt) {
  et === void 0 && (et = !1),
    tt === void 0 && (tt = !0),
    warning(
      $ === '*' || !$.endsWith('*') || $.endsWith('/*'),
      'Route path "' +
        $ +
        '" will be treated as if it were ' +
        ('"' + $.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + $.replace(/\*$/, '/*') + '".')
    );
  let rt = [],
    nt =
      '^' +
      $.replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (it, at) => (rt.push(at), '/([^\\/]+)'));
  return (
    $.endsWith('*')
      ? (rt.push('*'), (nt += $ === '*' || $ === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : tt
      ? (nt += '\\/*$')
      : $ !== '' && $ !== '/' && (nt += '(?:(?=\\/|$))'),
    [new RegExp(nt, et ? void 0 : 'i'), rt]
  );
}
function safelyDecodeURI($) {
  try {
    return decodeURI($);
  } catch (et) {
    return (
      warning(
        !1,
        'The URL path "' +
          $ +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + et + ').')
      ),
      $
    );
  }
}
function safelyDecodeURIComponent($, et) {
  try {
    return decodeURIComponent($);
  } catch (tt) {
    return (
      warning(
        !1,
        'The value for the URL param "' +
          et +
          '" will not be decoded because' +
          (' the string "' + $ + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + tt + ').')
      ),
      $
    );
  }
}
function stripBasename($, et) {
  if (et === '/') return $;
  if (!$.toLowerCase().startsWith(et.toLowerCase())) return null;
  let tt = et.endsWith('/') ? et.length - 1 : et.length,
    rt = $.charAt(tt);
  return rt && rt !== '/' ? null : $.slice(tt) || '/';
}
function warning($, et) {
  if (!$) {
    typeof console < 'u' && console.warn(et);
    try {
      throw new Error(et);
    } catch {}
  }
}
function resolvePath($, et) {
  et === void 0 && (et = '/');
  let { pathname: tt, search: rt = '', hash: nt = '' } = typeof $ == 'string' ? parsePath($) : $;
  return {
    pathname: tt ? (tt.startsWith('/') ? tt : resolvePathname(tt, et)) : et,
    search: normalizeSearch(rt),
    hash: normalizeHash(nt)
  };
}
function resolvePathname($, et) {
  let tt = et.replace(/\/+$/, '').split('/');
  return (
    $.split('/').forEach((nt) => {
      nt === '..' ? tt.length > 1 && tt.pop() : nt !== '.' && tt.push(nt);
    }),
    tt.length > 1 ? tt.join('/') : '/'
  );
}
function getInvalidPathError($, et, tt, rt) {
  return (
    "Cannot include a '" +
    $ +
    "' character in a manually specified " +
    ('`to.' + et + '` field [' + JSON.stringify(rt) + '].  Please separate it out to the ') +
    ('`to.' + tt + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function getPathContributingMatches($) {
  return $.filter((et, tt) => tt === 0 || (et.route.path && et.route.path.length > 0));
}
function resolveTo($, et, tt, rt) {
  rt === void 0 && (rt = !1);
  let nt;
  typeof $ == 'string'
    ? (nt = parsePath($))
    : ((nt = _extends$2({}, $)),
      invariant(
        !nt.pathname || !nt.pathname.includes('?'),
        getInvalidPathError('?', 'pathname', 'search', nt)
      ),
      invariant(
        !nt.pathname || !nt.pathname.includes('#'),
        getInvalidPathError('#', 'pathname', 'hash', nt)
      ),
      invariant(
        !nt.search || !nt.search.includes('#'),
        getInvalidPathError('#', 'search', 'hash', nt)
      ));
  let ot = $ === '' || nt.pathname === '',
    it = ot ? '/' : nt.pathname,
    at;
  if (rt || it == null) at = tt;
  else {
    let ct = et.length - 1;
    if (it.startsWith('..')) {
      let dt = it.split('/');
      for (; dt[0] === '..'; ) dt.shift(), (ct -= 1);
      nt.pathname = dt.join('/');
    }
    at = ct >= 0 ? et[ct] : '/';
  }
  let st = resolvePath(nt, at),
    lt = it && it !== '/' && it.endsWith('/'),
    ut = (ot || it === '.') && tt.endsWith('/');
  return !st.pathname.endsWith('/') && (lt || ut) && (st.pathname += '/'), st;
}
const joinPaths = ($) => $.join('/').replace(/\/\/+/g, '/'),
  normalizePathname = ($) => $.replace(/\/+$/, '').replace(/^\/*/, '/'),
  normalizeSearch = ($) => (!$ || $ === '?' ? '' : $.startsWith('?') ? $ : '?' + $),
  normalizeHash = ($) => (!$ || $ === '#' ? '' : $.startsWith('#') ? $ : '#' + $);
class ErrorResponse {
  constructor(et, tt, rt, nt) {
    nt === void 0 && (nt = !1),
      (this.status = et),
      (this.statusText = tt || ''),
      (this.internal = nt),
      rt instanceof Error ? ((this.data = rt.toString()), (this.error = rt)) : (this.data = rt);
  }
}
function isRouteErrorResponse($) {
  return $ instanceof ErrorResponse;
}
const validMutationMethodsArr = ['post', 'put', 'patch', 'delete'];
[...validMutationMethodsArr];
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _extends$1() {
  return (
    (_extends$1 = Object.assign
      ? Object.assign.bind()
      : function ($) {
          for (var et = 1; et < arguments.length; et++) {
            var tt = arguments[et];
            for (var rt in tt) Object.prototype.hasOwnProperty.call(tt, rt) && ($[rt] = tt[rt]);
          }
          return $;
        }),
    _extends$1.apply(this, arguments)
  );
}
function isPolyfill($, et) {
  return ($ === et && ($ !== 0 || 1 / $ === 1 / et)) || ($ !== $ && et !== et);
}
const is = typeof Object.is == 'function' ? Object.is : isPolyfill,
  { useState, useEffect, useLayoutEffect, useDebugValue } = React$1;
function useSyncExternalStore$2($, et, tt) {
  const rt = et(),
    [{ inst: nt }, ot] = useState({ inst: { value: rt, getSnapshot: et } });
  return (
    useLayoutEffect(() => {
      (nt.value = rt), (nt.getSnapshot = et), checkIfSnapshotChanged(nt) && ot({ inst: nt });
    }, [$, rt, et]),
    useEffect(
      () => (
        checkIfSnapshotChanged(nt) && ot({ inst: nt }),
        $(() => {
          checkIfSnapshotChanged(nt) && ot({ inst: nt });
        })
      ),
      [$]
    ),
    useDebugValue(rt),
    rt
  );
}
function checkIfSnapshotChanged($) {
  const et = $.getSnapshot,
    tt = $.value;
  try {
    const rt = et();
    return !is(tt, rt);
  } catch {
    return !0;
  }
}
function useSyncExternalStore$1($, et, tt) {
  return et();
}
const canUseDOM =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  isServerEnvironment = !canUseDOM,
  shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
'useSyncExternalStore' in React$1 && (($) => $.useSyncExternalStore)(React$1);
const DataRouterContext = reactExports.createContext(null),
  DataRouterStateContext = reactExports.createContext(null),
  NavigationContext = reactExports.createContext(null),
  LocationContext = reactExports.createContext(null),
  RouteContext = reactExports.createContext({ outlet: null, matches: [] }),
  RouteErrorContext = reactExports.createContext(null);
function useHref($, et) {
  let { relative: tt } = et === void 0 ? {} : et;
  useInRouterContext() || invariant(!1);
  let { basename: rt, navigator: nt } = reactExports.useContext(NavigationContext),
    { hash: ot, pathname: it, search: at } = useResolvedPath($, { relative: tt }),
    st = it;
  return (
    rt !== '/' && (st = it === '/' ? rt : joinPaths([rt, it])),
    nt.createHref({ pathname: st, search: at, hash: ot })
  );
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  return useInRouterContext() || invariant(!1), reactExports.useContext(LocationContext).location;
}
function useNavigate() {
  useInRouterContext() || invariant(!1);
  let { basename: $, navigator: et } = reactExports.useContext(NavigationContext),
    { matches: tt } = reactExports.useContext(RouteContext),
    { pathname: rt } = useLocation(),
    nt = JSON.stringify(getPathContributingMatches(tt).map((at) => at.pathnameBase)),
    ot = reactExports.useRef(!1);
  return (
    reactExports.useEffect(() => {
      ot.current = !0;
    }),
    reactExports.useCallback(
      function (at, st) {
        if ((st === void 0 && (st = {}), !ot.current)) return;
        if (typeof at == 'number') {
          et.go(at);
          return;
        }
        let lt = resolveTo(at, JSON.parse(nt), rt, st.relative === 'path');
        $ !== '/' && (lt.pathname = lt.pathname === '/' ? $ : joinPaths([$, lt.pathname])),
          (st.replace ? et.replace : et.push)(lt, st.state, st);
      },
      [$, et, nt, rt]
    )
  );
}
const OutletContext = reactExports.createContext(null);
function useOutlet($) {
  let et = reactExports.useContext(RouteContext).outlet;
  return et && reactExports.createElement(OutletContext.Provider, { value: $ }, et);
}
function useResolvedPath($, et) {
  let { relative: tt } = et === void 0 ? {} : et,
    { matches: rt } = reactExports.useContext(RouteContext),
    { pathname: nt } = useLocation(),
    ot = JSON.stringify(getPathContributingMatches(rt).map((it) => it.pathnameBase));
  return reactExports.useMemo(
    () => resolveTo($, JSON.parse(ot), nt, tt === 'path'),
    [$, ot, nt, tt]
  );
}
function useRoutes($, et) {
  useInRouterContext() || invariant(!1);
  let { navigator: tt } = reactExports.useContext(NavigationContext),
    rt = reactExports.useContext(DataRouterStateContext),
    { matches: nt } = reactExports.useContext(RouteContext),
    ot = nt[nt.length - 1],
    it = ot ? ot.params : {};
  ot && ot.pathname;
  let at = ot ? ot.pathnameBase : '/';
  ot && ot.route;
  let st = useLocation(),
    lt;
  if (et) {
    var ut;
    let gt = typeof et == 'string' ? parsePath(et) : et;
    at === '/' || ((ut = gt.pathname) != null && ut.startsWith(at)) || invariant(!1), (lt = gt);
  } else lt = st;
  let ct = lt.pathname || '/',
    dt = at === '/' ? ct : ct.slice(at.length) || '/',
    ft = matchRoutes($, { pathname: dt }),
    pt = _renderMatches(
      ft &&
        ft.map((gt) =>
          Object.assign({}, gt, {
            params: Object.assign({}, it, gt.params),
            pathname: joinPaths([
              at,
              tt.encodeLocation ? tt.encodeLocation(gt.pathname).pathname : gt.pathname
            ]),
            pathnameBase:
              gt.pathnameBase === '/'
                ? at
                : joinPaths([
                    at,
                    tt.encodeLocation
                      ? tt.encodeLocation(gt.pathnameBase).pathname
                      : gt.pathnameBase
                  ])
          })
        ),
      nt,
      rt || void 0
    );
  return et && pt
    ? reactExports.createElement(
        LocationContext.Provider,
        {
          value: {
            location: _extends$1(
              { pathname: '/', search: '', hash: '', state: null, key: 'default' },
              lt
            ),
            navigationType: Action.Pop
          }
        },
        pt
      )
    : pt;
}
function DefaultErrorElement() {
  let $ = useRouteError(),
    et = isRouteErrorResponse($)
      ? $.status + ' ' + $.statusText
      : $ instanceof Error
      ? $.message
      : JSON.stringify($),
    tt = $ instanceof Error ? $.stack : null,
    rt = 'rgba(200,200,200, 0.5)',
    nt = { padding: '0.5rem', backgroundColor: rt },
    ot = { padding: '2px 4px', backgroundColor: rt };
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement('h2', null, 'Unhandled Thrown Error!'),
    reactExports.createElement('h3', { style: { fontStyle: 'italic' } }, et),
    tt ? reactExports.createElement('pre', { style: nt }, tt) : null,
    reactExports.createElement('p', null, '💿 Hey developer 👋'),
    reactExports.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own ',
      reactExports.createElement('code', { style: ot }, 'errorElement'),
      ' props on ',
      reactExports.createElement('code', { style: ot }, '<Route>')
    )
  );
}
class RenderErrorBoundary extends reactExports.Component {
  constructor(et) {
    super(et), (this.state = { location: et.location, error: et.error });
  }
  static getDerivedStateFromError(et) {
    return { error: et };
  }
  static getDerivedStateFromProps(et, tt) {
    return tt.location !== et.location
      ? { error: et.error, location: et.location }
      : { error: et.error || tt.error, location: tt.location };
  }
  componentDidCatch(et, tt) {
    console.error('React Router caught the following error during render', et, tt);
  }
  render() {
    return this.state.error
      ? reactExports.createElement(
          RouteContext.Provider,
          { value: this.props.routeContext },
          reactExports.createElement(RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
          })
        )
      : this.props.children;
  }
}
function RenderedRoute($) {
  let { routeContext: et, match: tt, children: rt } = $,
    nt = reactExports.useContext(DataRouterContext);
  return (
    nt &&
      nt.static &&
      nt.staticContext &&
      tt.route.errorElement &&
      (nt.staticContext._deepestRenderedBoundaryId = tt.route.id),
    reactExports.createElement(RouteContext.Provider, { value: et }, rt)
  );
}
function _renderMatches($, et, tt) {
  if ((et === void 0 && (et = []), $ == null))
    if (tt != null && tt.errors) $ = tt.matches;
    else return null;
  let rt = $,
    nt = tt == null ? void 0 : tt.errors;
  if (nt != null) {
    let ot = rt.findIndex((it) => it.route.id && (nt == null ? void 0 : nt[it.route.id]));
    ot >= 0 || invariant(!1), (rt = rt.slice(0, Math.min(rt.length, ot + 1)));
  }
  return rt.reduceRight((ot, it, at) => {
    let st = it.route.id ? (nt == null ? void 0 : nt[it.route.id]) : null,
      lt = tt
        ? it.route.errorElement || reactExports.createElement(DefaultErrorElement, null)
        : null,
      ut = et.concat(rt.slice(0, at + 1)),
      ct = () =>
        reactExports.createElement(
          RenderedRoute,
          { match: it, routeContext: { outlet: ot, matches: ut } },
          st ? lt : it.route.element !== void 0 ? it.route.element : ot
        );
    return tt && (it.route.errorElement || at === 0)
      ? reactExports.createElement(RenderErrorBoundary, {
          location: tt.location,
          component: lt,
          error: st,
          children: ct(),
          routeContext: { outlet: null, matches: ut }
        })
      : ct();
  }, null);
}
var DataRouterHook$1;
(function ($) {
  $.UseRevalidator = 'useRevalidator';
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function ($) {
  ($.UseLoaderData = 'useLoaderData'),
    ($.UseActionData = 'useActionData'),
    ($.UseRouteError = 'useRouteError'),
    ($.UseNavigation = 'useNavigation'),
    ($.UseRouteLoaderData = 'useRouteLoaderData'),
    ($.UseMatches = 'useMatches'),
    ($.UseRevalidator = 'useRevalidator');
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterState($) {
  let et = reactExports.useContext(DataRouterStateContext);
  return et || invariant(!1), et;
}
function useRouteContext($) {
  let et = reactExports.useContext(RouteContext);
  return et || invariant(!1), et;
}
function useCurrentRouteId($) {
  let et = useRouteContext(),
    tt = et.matches[et.matches.length - 1];
  return tt.route.id || invariant(!1), tt.route.id;
}
function useRouteError() {
  var $;
  let et = reactExports.useContext(RouteErrorContext),
    tt = useDataRouterState(DataRouterStateHook$1.UseRouteError),
    rt = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  return et || (($ = tt.errors) == null ? void 0 : $[rt]);
}
function Navigate($) {
  let { to: et, replace: tt, state: rt, relative: nt } = $;
  useInRouterContext() || invariant(!1);
  let ot = reactExports.useContext(DataRouterStateContext),
    it = useNavigate();
  return (
    reactExports.useEffect(() => {
      (ot && ot.navigation.state !== 'idle') || it(et, { replace: tt, state: rt, relative: nt });
    }),
    null
  );
}
function Outlet($) {
  return useOutlet($.context);
}
function Route($) {
  invariant(!1);
}
function Router($) {
  let {
    basename: et = '/',
    children: tt = null,
    location: rt,
    navigationType: nt = Action.Pop,
    navigator: ot,
    static: it = !1
  } = $;
  useInRouterContext() && invariant(!1);
  let at = et.replace(/^\/*/, '/'),
    st = reactExports.useMemo(() => ({ basename: at, navigator: ot, static: it }), [at, ot, it]);
  typeof rt == 'string' && (rt = parsePath(rt));
  let {
      pathname: lt = '/',
      search: ut = '',
      hash: ct = '',
      state: dt = null,
      key: ft = 'default'
    } = rt,
    pt = reactExports.useMemo(() => {
      let gt = stripBasename(lt, at);
      return gt == null ? null : { pathname: gt, search: ut, hash: ct, state: dt, key: ft };
    }, [at, lt, ut, ct, dt, ft]);
  return pt == null
    ? null
    : reactExports.createElement(
        NavigationContext.Provider,
        { value: st },
        reactExports.createElement(LocationContext.Provider, {
          children: tt,
          value: { location: pt, navigationType: nt }
        })
      );
}
function Routes($) {
  let { children: et, location: tt } = $,
    rt = reactExports.useContext(DataRouterContext),
    nt = rt && !et ? rt.router.routes : createRoutesFromChildren(et);
  return useRoutes(nt, tt);
}
var AwaitRenderStatus;
(function ($) {
  ($[($.pending = 0)] = 'pending'), ($[($.success = 1)] = 'success'), ($[($.error = 2)] = 'error');
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {});
function createRoutesFromChildren($, et) {
  et === void 0 && (et = []);
  let tt = [];
  return (
    reactExports.Children.forEach($, (rt, nt) => {
      if (!reactExports.isValidElement(rt)) return;
      if (rt.type === reactExports.Fragment) {
        tt.push.apply(tt, createRoutesFromChildren(rt.props.children, et));
        return;
      }
      rt.type !== Route && invariant(!1), !rt.props.index || !rt.props.children || invariant(!1);
      let ot = [...et, nt],
        it = {
          id: rt.props.id || ot.join('-'),
          caseSensitive: rt.props.caseSensitive,
          element: rt.props.element,
          index: rt.props.index,
          path: rt.props.path,
          loader: rt.props.loader,
          action: rt.props.action,
          errorElement: rt.props.errorElement,
          hasErrorBoundary: rt.props.errorElement != null,
          shouldRevalidate: rt.props.shouldRevalidate,
          handle: rt.props.handle
        };
      rt.props.children && (it.children = createRoutesFromChildren(rt.props.children, ot)),
        tt.push(it);
    }),
    tt
  );
}
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function ($) {
          for (var et = 1; et < arguments.length; et++) {
            var tt = arguments[et];
            for (var rt in tt) Object.prototype.hasOwnProperty.call(tt, rt) && ($[rt] = tt[rt]);
          }
          return $;
        }),
    _extends.apply(this, arguments)
  );
}
function _objectWithoutPropertiesLoose($, et) {
  if ($ == null) return {};
  var tt = {},
    rt = Object.keys($),
    nt,
    ot;
  for (ot = 0; ot < rt.length; ot++) (nt = rt[ot]), !(et.indexOf(nt) >= 0) && (tt[nt] = $[nt]);
  return tt;
}
function isModifiedEvent($) {
  return !!($.metaKey || $.altKey || $.ctrlKey || $.shiftKey);
}
function shouldProcessLinkClick($, et) {
  return $.button === 0 && (!et || et === '_self') && !isModifiedEvent($);
}
const _excluded = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset'
  ],
  _excluded2 = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'children'];
function BrowserRouter($) {
  let { basename: et, children: tt, window: rt } = $,
    nt = reactExports.useRef();
  nt.current == null && (nt.current = createBrowserHistory({ window: rt, v5Compat: !0 }));
  let ot = nt.current,
    [it, at] = reactExports.useState({ action: ot.action, location: ot.location });
  return (
    reactExports.useLayoutEffect(() => ot.listen(at), [ot]),
    reactExports.createElement(Router, {
      basename: et,
      children: tt,
      location: it.location,
      navigationType: it.action,
      navigator: ot
    })
  );
}
const Link = reactExports.forwardRef(function (et, tt) {
    let {
        onClick: rt,
        relative: nt,
        reloadDocument: ot,
        replace: it,
        state: at,
        target: st,
        to: lt,
        preventScrollReset: ut
      } = et,
      ct = _objectWithoutPropertiesLoose(et, _excluded),
      dt = useHref(lt, { relative: nt }),
      ft = useLinkClickHandler(lt, {
        replace: it,
        state: at,
        target: st,
        preventScrollReset: ut,
        relative: nt
      });
    function pt(gt) {
      rt && rt(gt), gt.defaultPrevented || ft(gt);
    }
    return reactExports.createElement(
      'a',
      _extends({}, ct, { href: dt, onClick: ot ? rt : pt, ref: tt, target: st })
    );
  }),
  NavLink = reactExports.forwardRef(function (et, tt) {
    let {
        'aria-current': rt = 'page',
        caseSensitive: nt = !1,
        className: ot = '',
        end: it = !1,
        style: at,
        to: st,
        children: lt
      } = et,
      ut = _objectWithoutPropertiesLoose(et, _excluded2),
      ct = useResolvedPath(st, { relative: ut.relative }),
      dt = useLocation(),
      ft = reactExports.useContext(DataRouterStateContext),
      { navigator: pt } = reactExports.useContext(NavigationContext),
      gt = pt.encodeLocation ? pt.encodeLocation(ct).pathname : ct.pathname,
      bt = dt.pathname,
      ht = ft && ft.navigation && ft.navigation.location ? ft.navigation.location.pathname : null;
    nt || ((bt = bt.toLowerCase()), (ht = ht ? ht.toLowerCase() : null), (gt = gt.toLowerCase()));
    let mt = bt === gt || (!it && bt.startsWith(gt) && bt.charAt(gt.length) === '/'),
      yt = ht != null && (ht === gt || (!it && ht.startsWith(gt) && ht.charAt(gt.length) === '/')),
      St = mt ? rt : void 0,
      _t;
    typeof ot == 'function'
      ? (_t = ot({ isActive: mt, isPending: yt }))
      : (_t = [ot, mt ? 'active' : null, yt ? 'pending' : null].filter(Boolean).join(' '));
    let Ct = typeof at == 'function' ? at({ isActive: mt, isPending: yt }) : at;
    return reactExports.createElement(
      Link,
      _extends({}, ut, { 'aria-current': St, className: _t, ref: tt, style: Ct, to: st }),
      typeof lt == 'function' ? lt({ isActive: mt, isPending: yt }) : lt
    );
  });
var DataRouterHook;
(function ($) {
  ($.UseScrollRestoration = 'useScrollRestoration'),
    ($.UseSubmitImpl = 'useSubmitImpl'),
    ($.UseFetcher = 'useFetcher');
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function ($) {
  ($.UseFetchers = 'useFetchers'), ($.UseScrollRestoration = 'useScrollRestoration');
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler($, et) {
  let {
      target: tt,
      replace: rt,
      state: nt,
      preventScrollReset: ot,
      relative: it
    } = et === void 0 ? {} : et,
    at = useNavigate(),
    st = useLocation(),
    lt = useResolvedPath($, { relative: it });
  return reactExports.useCallback(
    (ut) => {
      if (shouldProcessLinkClick(ut, tt)) {
        ut.preventDefault();
        let ct = rt !== void 0 ? rt : createPath(st) === createPath(lt);
        at($, { replace: ct, state: nt, preventScrollReset: ot, relative: it });
      }
    },
    [st, at, lt, rt, nt, tt, $, ot, it]
  );
}
const CardStyled = newStyled.div`
  position: relative;
  border: ${($) => ($.color === 'primary' ? 'none' : 'solid 0.5px #8087B2')};
  background-color: ${($) => ($.color === 'primary' ? $.theme.colors.primary : 'white')};
  border-radius: 15px;
  color: ${($) => ($.color === 'primary' ? 'white' : 'black')};
  //padding: 10px;
  z-index: 1;

  .background-left {
    background-color: ${($) => ($.color === 'primary' ? $.theme.colors.primaryLight : 'white')};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    width: 60%;
    height: 40%;
    top: 25%;
    left: 0;
    z-index: -1;
  }

  .background-right-top {
    background: ${($) =>
      $.color === 'primary' ? $.theme.colors.primaryGradientDiagonal : 'white'};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    position: absolute;
    width: 25%;
    height: 50%;
    top: 0px;
    right: 0;
    z-index: -2;
  }

  .background-right-bottom {
    background: ${($) => ($.color === 'primary' ? $.theme.colors.primaryLight : 'white')};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    width: 20%;
    height: 55%;
    bottom: 0;
    right: 0;
    z-index: -1;
    -webkit-box-shadow: -5px -8px 12px -7px
      ${($) => ($.color === 'primary' ? $.theme.colors.primaryRGBA : 'white')};
    -moz-box-shadow: -5px -8px 12px -7px
      ${($) => ($.color === 'primary' ? $.theme.colors.primaryRGBA : 'white')};
    box-shadow: -5px -8px 12px -7px
      ${($) => ($.color === 'primary' ? $.theme.colors.primaryRGBA : 'white')};
  }
`;
function Card({ children: $, color: et = 'default' }) {
  return jsxs(CardStyled, {
    color: et,
    children: [
      $,
      jsx('div', { className: 'background-left' }),
      jsx('div', { className: 'background-right-top' }),
      jsx('div', { className: 'background-right-bottom' })
    ]
  });
}
const CitizenItemStyled = newStyled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1em;

  .name {
    img {
      width: 50px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .document {
    display: flex;
    flex-direction: column;
    justify-content: left;

    h3 {
      margin: 0;
    }
  }
`;
function CitizenItem({ name: $, typeDocument: et, idDocument: tt, urlImage: rt, sisbenLevel: nt }) {
  return jsxs(CitizenItemStyled, {
    children: [
      jsxs('div', {
        className: 'name',
        children: [
          jsx('img', { src: rt || 'https://avatars.dicebear.com/api/micah/john.svg', alt: 'name' }),
          $
        ]
      }),
      jsxs('div', {
        className: 'document',
        children: [jsx('h3', { children: tt }), jsx('span', { children: et })]
      }),
      jsx('div', { className: 'id-document', children: jsx(Button, { children: 'Click!' }) })
    ]
  });
}
CitizenItem.defaultProps = { urlImage: '' };
newStyled.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
`;
var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  },
  IconContext = React.createContext && React.createContext(DefaultContext),
  __assign =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (__assign =
          Object.assign ||
          function ($) {
            for (var et, tt = 1, rt = arguments.length; tt < rt; tt++) {
              et = arguments[tt];
              for (var nt in et) Object.prototype.hasOwnProperty.call(et, nt) && ($[nt] = et[nt]);
            }
            return $;
          }),
        __assign.apply(this, arguments)
      );
    },
  __rest =
    (globalThis && globalThis.__rest) ||
    function ($, et) {
      var tt = {};
      for (var rt in $)
        Object.prototype.hasOwnProperty.call($, rt) && et.indexOf(rt) < 0 && (tt[rt] = $[rt]);
      if ($ != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var nt = 0, rt = Object.getOwnPropertySymbols($); nt < rt.length; nt++)
          et.indexOf(rt[nt]) < 0 &&
            Object.prototype.propertyIsEnumerable.call($, rt[nt]) &&
            (tt[rt[nt]] = $[rt[nt]]);
      return tt;
    };
function Tree2Element($) {
  return (
    $ &&
    $.map(function (et, tt) {
      return React.createElement(et.tag, __assign({ key: tt }, et.attr), Tree2Element(et.child));
    })
  );
}
function GenIcon($) {
  return function (et) {
    return React.createElement(
      IconBase,
      __assign({ attr: __assign({}, $.attr) }, et),
      Tree2Element($.child)
    );
  };
}
function IconBase($) {
  var et = function (tt) {
    var rt = $.attr,
      nt = $.size,
      ot = $.title,
      it = __rest($, ['attr', 'size', 'title']),
      at = nt || tt.size || '1em',
      st;
    return (
      tt.className && (st = tt.className),
      $.className && (st = (st ? st + ' ' : '') + $.className),
      React.createElement(
        'svg',
        __assign(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          tt.attr,
          rt,
          it,
          {
            className: st,
            style: __assign(__assign({ color: $.color || tt.color }, tt.style), $.style),
            height: at,
            width: at,
            xmlns: 'http://www.w3.org/2000/svg'
          }
        ),
        ot && React.createElement('title', null, ot),
        $.children
      )
    );
  };
  return IconContext !== void 0
    ? React.createElement(IconContext.Consumer, null, function (tt) {
        return et(tt);
      })
    : et(DefaultContext);
}
function IoBalloonOutline($) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 11316.53-44.49z'
        }
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41'
        }
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'M266.71 368.21l-9.17 49.61 63.31-8.9-22.49-45.16-31.65 4.45z'
        }
      }
    ]
  })($);
}
function IoSearchOutline($) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
        }
      },
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '32',
          d: 'M338.29 338.29L448 448'
        }
      }
    ]
  })($);
}
const PlayerAudioStyled = newStyled.div``;
var bundle = (function ($) {
  var et = {};
  function tt(rt) {
    if (et[rt]) return et[rt].exports;
    var nt = (et[rt] = { i: rt, l: !1, exports: {} });
    return $[rt].call(nt.exports, nt, nt.exports, tt), (nt.l = !0), nt.exports;
  }
  return (
    (tt.m = $),
    (tt.c = et),
    (tt.d = function (rt, nt, ot) {
      tt.o(rt, nt) || Object.defineProperty(rt, nt, { enumerable: !0, get: ot });
    }),
    (tt.r = function (rt) {
      typeof Symbol < 'u' &&
        Symbol.toStringTag &&
        Object.defineProperty(rt, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(rt, '__esModule', { value: !0 });
    }),
    (tt.t = function (rt, nt) {
      if (
        (1 & nt && (rt = tt(rt)),
        8 & nt || (4 & nt && typeof rt == 'object' && rt && rt.__esModule))
      )
        return rt;
      var ot = Object.create(null);
      if (
        (tt.r(ot),
        Object.defineProperty(ot, 'default', { enumerable: !0, value: rt }),
        2 & nt && typeof rt != 'string')
      )
        for (var it in rt)
          tt.d(
            ot,
            it,
            function (at) {
              return rt[at];
            }.bind(null, it)
          );
      return ot;
    }),
    (tt.n = function (rt) {
      var nt =
        rt && rt.__esModule
          ? function () {
              return rt.default;
            }
          : function () {
              return rt;
            };
      return tt.d(nt, 'a', nt), nt;
    }),
    (tt.o = function (rt, nt) {
      return Object.prototype.hasOwnProperty.call(rt, nt);
    }),
    (tt.p = ''),
    tt((tt.s = 2))
  );
})([
  function ($, et) {
    $.exports = requirePropTypes();
  },
  function ($, et) {
    $.exports = reactExports;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__),
      function (module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
          prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          ),
          enterModule;
        function _typeof($) {
          return (_typeof =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (et) {
                  return typeof et;
                }
              : function (et) {
                  return et &&
                    typeof Symbol == 'function' &&
                    et.constructor === Symbol &&
                    et !== Symbol.prototype
                    ? 'symbol'
                    : typeof et;
                })($);
        }
        function _extends() {
          return (_extends =
            Object.assign ||
            function ($) {
              for (var et = 1; et < arguments.length; et++) {
                var tt = arguments[et];
                for (var rt in tt) Object.prototype.hasOwnProperty.call(tt, rt) && ($[rt] = tt[rt]);
              }
              return $;
            }).apply(this, arguments);
        }
        function _classCallCheck($, et) {
          if (!($ instanceof et)) throw new TypeError('Cannot call a class as a function');
        }
        function _defineProperties($, et) {
          for (var tt = 0; tt < et.length; tt++) {
            var rt = et[tt];
            (rt.enumerable = rt.enumerable || !1),
              (rt.configurable = !0),
              'value' in rt && (rt.writable = !0),
              Object.defineProperty($, rt.key, rt);
          }
        }
        function _createClass($, et, tt) {
          return et && _defineProperties($.prototype, et), tt && _defineProperties($, tt), $;
        }
        function _inherits($, et) {
          if (typeof et != 'function' && et !== null)
            throw new TypeError('Super expression must either be null or a function');
          ($.prototype = Object.create(et && et.prototype, {
            constructor: { value: $, writable: !0, configurable: !0 }
          })),
            et && _setPrototypeOf($, et);
        }
        function _setPrototypeOf($, et) {
          return (_setPrototypeOf =
            Object.setPrototypeOf ||
            function (tt, rt) {
              return (tt.__proto__ = rt), tt;
            })($, et);
        }
        function _createSuper($) {
          return function () {
            var et,
              tt = _getPrototypeOf($);
            if (_isNativeReflectConstruct()) {
              var rt = _getPrototypeOf(this).constructor;
              et = Reflect.construct(tt, arguments, rt);
            } else et = tt.apply(this, arguments);
            return _possibleConstructorReturn(this, et);
          };
        }
        function _possibleConstructorReturn($, et) {
          return !et || (_typeof(et) !== 'object' && typeof et != 'function')
            ? _assertThisInitialized($)
            : et;
        }
        function _assertThisInitialized($) {
          if ($ === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return $;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == 'function') return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch {
            return !1;
          }
        }
        function _getPrototypeOf($) {
          return (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (et) {
                return et.__proto__ || Object.getPrototypeOf(et);
              })($);
        }
        function _defineProperty($, et, tt) {
          return (
            et in $
              ? Object.defineProperty($, et, {
                  value: tt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : ($[et] = tt),
            $
          );
        }
        (enterModule =
          typeof reactHotLoaderGlobal < 'u' ? reactHotLoaderGlobal.enterModule : void 0),
          enterModule && enterModule(module),
          typeof reactHotLoaderGlobal < 'u' && reactHotLoaderGlobal.default.signature;
        var ReactAudioPlayer = (function (_Component) {
          _inherits(ReactAudioPlayer, _Component);
          var _super = _createSuper(ReactAudioPlayer);
          function ReactAudioPlayer() {
            var $;
            _classCallCheck(this, ReactAudioPlayer);
            for (var et = arguments.length, tt = new Array(et), rt = 0; rt < et; rt++)
              tt[rt] = arguments[rt];
            return (
              _defineProperty(
                _assertThisInitialized(($ = _super.call.apply(_super, [this].concat(tt)))),
                'audioEl',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
              ),
              _defineProperty(_assertThisInitialized($), 'listenTracker', void 0),
              _defineProperty(_assertThisInitialized($), 'onError', function (nt) {
                var ot, it;
                return (ot = (it = $.props).onError) === null || ot === void 0
                  ? void 0
                  : ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onCanPlay', function (nt) {
                var ot, it;
                return (ot = (it = $.props).onCanPlay) === null || ot === void 0
                  ? void 0
                  : ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onCanPlayThrough', function (nt) {
                var ot, it;
                return (ot = (it = $.props).onCanPlayThrough) === null || ot === void 0
                  ? void 0
                  : ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onPlay', function (nt) {
                var ot, it;
                $.setListenTrack(),
                  (ot = (it = $.props).onPlay) === null || ot === void 0 || ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onAbort', function (nt) {
                var ot, it;
                $.clearListenTrack(),
                  (ot = (it = $.props).onAbort) === null || ot === void 0 || ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onEnded', function (nt) {
                var ot, it;
                $.clearListenTrack(),
                  (ot = (it = $.props).onEnded) === null || ot === void 0 || ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onPause', function (nt) {
                var ot, it;
                $.clearListenTrack(),
                  (ot = (it = $.props).onPause) === null || ot === void 0 || ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onSeeked', function (nt) {
                var ot, it;
                (ot = (it = $.props).onSeeked) === null || ot === void 0 || ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onLoadedMetadata', function (nt) {
                var ot, it;
                (ot = (it = $.props).onLoadedMetadata) === null || ot === void 0 || ot.call(it, nt);
              }),
              _defineProperty(_assertThisInitialized($), 'onVolumeChanged', function (nt) {
                var ot, it;
                (ot = (it = $.props).onVolumeChanged) === null || ot === void 0 || ot.call(it, nt);
              }),
              $
            );
          }
          return (
            _createClass(ReactAudioPlayer, [
              {
                key: 'componentDidMount',
                value: function () {
                  var $ = this.audioEl.current;
                  $ &&
                    (this.updateVolume(this.props.volume),
                    $.addEventListener('error', this.onError),
                    $.addEventListener('canplay', this.onCanPlay),
                    $.addEventListener('canplaythrough', this.onCanPlayThrough),
                    $.addEventListener('play', this.onPlay),
                    $.addEventListener('abort', this.onAbort),
                    $.addEventListener('ended', this.onEnded),
                    $.addEventListener('pause', this.onPause),
                    $.addEventListener('seeked', this.onSeeked),
                    $.addEventListener('loadedmetadata', this.onLoadedMetadata),
                    $.addEventListener('volumechange', this.onVolumeChanged));
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var $ = this.audioEl.current;
                  $ &&
                    ($.removeEventListener('error', this.onError),
                    $.removeEventListener('canplay', this.onCanPlay),
                    $.removeEventListener('canplaythrough', this.onCanPlayThrough),
                    $.removeEventListener('play', this.onPlay),
                    $.removeEventListener('abort', this.onAbort),
                    $.removeEventListener('ended', this.onEnded),
                    $.removeEventListener('pause', this.onPause),
                    $.removeEventListener('seeked', this.onSeeked),
                    $.removeEventListener('loadedmetadata', this.onLoadedMetadata),
                    $.removeEventListener('volumechange', this.onVolumeChanged));
                }
              },
              {
                key: 'componentDidUpdate',
                value: function ($) {
                  this.updateVolume(this.props.volume);
                }
              },
              {
                key: 'setListenTrack',
                value: function () {
                  var $ = this;
                  if (!this.listenTracker) {
                    var et = this.props.listenInterval;
                    this.listenTracker = window.setInterval(function () {
                      var tt, rt;
                      $.audioEl.current &&
                        ((tt = (rt = $.props).onListen) === null ||
                          tt === void 0 ||
                          tt.call(rt, $.audioEl.current.currentTime));
                    }, et);
                  }
                }
              },
              {
                key: 'updateVolume',
                value: function ($) {
                  var et = this.audioEl.current;
                  et !== null &&
                    typeof $ == 'number' &&
                    $ !== (et == null ? void 0 : et.volume) &&
                    (et.volume = $);
                }
              },
              {
                key: 'clearListenTrack',
                value: function () {
                  this.listenTracker &&
                    (clearInterval(this.listenTracker), delete this.listenTracker);
                }
              },
              {
                key: 'render',
                value: function () {
                  var $ =
                      this.props.children ||
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'Your browser does not support the ',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'code',
                          null,
                          'audio'
                        ),
                        ' element.'
                      ),
                    et = this.props.controls !== !1,
                    tt = this.props.title ? this.props.title : this.props.src,
                    rt = {};
                  return (
                    this.props.controlsList && (rt.controlsList = this.props.controlsList),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'audio',
                      _extends(
                        {
                          autoPlay: this.props.autoPlay,
                          className: 'react-audio-player '.concat(this.props.className),
                          controls: et,
                          crossOrigin: this.props.crossOrigin,
                          id: this.props.id,
                          loop: this.props.loop,
                          muted: this.props.muted,
                          preload: this.props.preload,
                          ref: this.audioEl,
                          src: this.props.src,
                          style: this.props.style,
                          title: tt
                        },
                        rt
                      ),
                      $
                    )
                  );
                }
              },
              {
                key: '__reactstandin__regenerateByEval',
                value: function __reactstandin__regenerateByEval(key, code) {
                  this[key] = eval(code);
                }
              }
            ]),
            ReactAudioPlayer
          );
        })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
        _defineProperty(ReactAudioPlayer, 'propTypes', void 0),
          _defineProperty(ReactAudioPlayer, 'defaultProps', void 0),
          (ReactAudioPlayer.defaultProps = {
            autoPlay: !1,
            children: null,
            className: '',
            controls: !1,
            controlsList: '',
            id: '',
            listenInterval: 1e4,
            loop: !1,
            muted: !1,
            onAbort: function () {},
            onCanPlay: function () {},
            onCanPlayThrough: function () {},
            onEnded: function () {},
            onError: function () {},
            onListen: function () {},
            onPause: function () {},
            onPlay: function () {},
            onSeeked: function () {},
            onVolumeChanged: function () {},
            onLoadedMetadata: function () {},
            preload: 'metadata',
            style: {},
            title: '',
            volume: 1
          }),
          (ReactAudioPlayer.propTypes = {
            autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
            className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            controlsList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            crossOrigin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            listenInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
            loop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onAbort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onCanPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onCanPlayThrough: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onEnded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onListen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onLoadedMetadata: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onPause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onSeeked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onVolumeChanged: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            preload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              '',
              'none',
              'metadata',
              'auto'
            ]),
            src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            ),
            title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            volume: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
          });
        var _default = ReactAudioPlayer,
          reactHotLoader,
          leaveModule;
        (__webpack_exports__.default = _default),
          (reactHotLoader =
            typeof reactHotLoaderGlobal < 'u' ? reactHotLoaderGlobal.default : void 0),
          reactHotLoader &&
            (reactHotLoader.register(
              ReactAudioPlayer,
              'ReactAudioPlayer',
              '/home/justin/Projects/react-audio-player/src/index.tsx'
            ),
            reactHotLoader.register(
              _default,
              'default',
              '/home/justin/Projects/react-audio-player/src/index.tsx'
            )),
          (leaveModule =
            typeof reactHotLoaderGlobal < 'u' ? reactHotLoaderGlobal.leaveModule : void 0),
          leaveModule && leaveModule(module);
      }.call(this, __webpack_require__(3)(module));
  },
  function ($, et) {
    $.exports = function (tt) {
      if (!tt.webpackPolyfill) {
        var rt = Object.create(tt);
        rt.children || (rt.children = []),
          Object.defineProperty(rt, 'loaded', {
            enumerable: !0,
            get: function () {
              return rt.l;
            }
          }),
          Object.defineProperty(rt, 'id', {
            enumerable: !0,
            get: function () {
              return rt.i;
            }
          }),
          Object.defineProperty(rt, 'exports', { enumerable: !0 }),
          (rt.webpackPolyfill = 1);
      }
      return rt;
    };
  }
]);
function PlayerAudio({ source: $ }) {
  return jsx(PlayerAudioStyled, { children: jsx(bundle, { src: $, autoPlay: !0, controls: !0 }) });
}
const SearchInputStyled = newStyled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  background-color: #f4f4fd;
  border-radius: 25px;
  padding: 15px 20px 15px 20px;
  margin-bottom: 50px;
  color: ${({ theme: $ }) => $.colors.primaryLight};
`;
function SearchInput({ value: $, onChange: et, onClick: tt }) {
  return (
    console.log($),
    jsxs(SearchInputStyled, {
      children: [
        jsx(IoSearchOutline, { className: 'icon', size: 22 }),
        jsx(Input, {
          className: 'input',
          variant: 'unstyled',
          placeholder: 'Search a topic',
          value: $ || '',
          onChange: ({ target: { value: rt } }) => et(rt)
        }),
        jsx(Button, { onClick: tt || (() => {}), children: 'Search...' })
      ]
    })
  );
}
const WordStyled = newStyled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  align-items: center;
  gap: 2em;

  .image {
    border-radius: 15px;
    img {
      width: 500px;
      object-fit: cover;
      border-top-left-radius: 13px;
      border-bottom-left-radius: 13px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: justify;
    gap: 1em;

    .subtitle {
      color: ${({ theme: $ }) => $.colors.ternary};
    }

    h1 {
      font-size: 50px;
    }
  }
`;
function Word({ title: $, subtitle: et, imageUrl: tt, audioSourceUrl: rt }) {
  return jsx(Card, {
    children: jsxs(WordStyled, {
      children: [
        jsx('div', {
          className: 'image',
          children: tt && jsx('img', { src: tt, alt: 'image_' + $ })
        }),
        jsxs('div', {
          className: 'info',
          children: [
            jsx('h1', { children: $ }),
            et && jsx('h2', { className: 'subtitle', children: et }),
            rt && jsx(PlayerAudio, { source: rt })
          ]
        })
      ]
    })
  });
}
newStyled.h1`
  color: ${($) => $.theme.colors.primary};
`;
const ListStyled = newStyled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`,
  CitizensStyled = newStyled.div``;
function Citizens() {
  return jsxs(CitizensStyled, {
    children: [
      jsx('h1', { children: 'Citizens' }),
      jsxs(ListStyled, {
        children: [
          jsx(CitizenItem, { idDocument: '12355', name: 'Julio melgar', typeDocument: 'Cédula' }),
          jsx(CitizenItem, { idDocument: '12355', name: 'Julio melgar', typeDocument: 'Cédula' }),
          jsx(CitizenItem, { idDocument: '12355', name: 'Julio melgar', typeDocument: 'Cédula' })
        ]
      })
    ]
  });
}
const PeopleImage = '/assets/persons-a51d7a1c.svg',
  BannerStyled = newStyled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;

  img {
    width: 200px;
    object-fit: cover;
  }
`;
function Banner({ title: $, imageUrl: et }) {
  return jsx(Card, {
    color: 'primary',
    children: jsxs(BannerStyled, {
      children: [
        jsx('img', { src: et, alt: 'banner' + $ }),
        jsx('div', { className: 'info', children: jsx('h2', { children: $ }) })
      ]
    })
  });
}
const LayoutStyled = newStyled.div`
  // width: 100%;
  // margin: 0;
  display: flex;

  main {
    width: 100%;
    padding: 20px;

    @media screen and (min-width: 900px) {
      margin-left: 150px;
    }
  }
`,
  SidebarStyled = newStyled.div`
  width: 55px;
  height: 100vh;
  box-sizing: border-box;
  padding: 10px 20px;
  display: none;

  @media screen and (min-width: 900px) {
    width: 200px;
    position: fixed;
    display: block;
  }

  .top_section {
    display: flex;
    width: 115px;
    justify-content: space-between;
    margin-bottom: 20px;
    display: none;

    img {
      width: 30px;
    }

    @media screen and (min-width: 900px) {
      display: block;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 1.3em;

    .menu-item {
      display: flex;
      gap: 1em;
      align-items: center;
      justify-content: left;
      place-items: center;
      color: #b5b8c4;

      &:hover {
        color: ${($) => $.theme.colors.primary};
      }

      .icon {
        padding-top: 2px;
      }

      .text {
        display: none;

        @media screen and (min-width: 900px) {
          display: block;
        }
      }
    }

    .active {
      color: ${($) => $.theme.colors.primary};

      &::after {
        content: '';
        position: absolute;
        background: ${($) => $.theme.colors.primary};
        left: 0%;
        width: 5px;
        height: 40px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;
function Sidebar() {
  return (
    reactExports.useState(!0),
    jsxs(SidebarStyled, {
      children: [
        jsx('div', { className: 'top_section', children: jsx('h3', { children: 'CiafWeb' }) }),
        jsx('nav', {
          className: 'nav',
          children: [
            { path: '/', name: 'Home', icon: jsx(IoBalloonOutline, {}) },
            { path: '/citizens', name: 'Citizens', icon: jsx(IoBalloonOutline, {}) }
          ].map((et, tt) =>
            jsxs(
              NavLink,
              {
                to: et.path,
                className: 'menu-item',
                children: [
                  jsx('div', { className: 'icon', children: et.icon }),
                  jsx('div', { className: 'text', children: et.name })
                ]
              },
              tt
            )
          )
        })
      ]
    })
  );
}
function Layout({ children: $ }) {
  return jsxs(LayoutStyled, { children: [jsx(Sidebar, {}), jsx('main', { children: $ })] });
}
function bind($, et) {
  return function () {
    return $.apply(et, arguments);
  };
}
const { toString } = Object.prototype,
  { getPrototypeOf } = Object,
  kindOf = (($) => (et) => {
    const tt = toString.call(et);
    return $[tt] || ($[tt] = tt.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  kindOfTest = ($) => (($ = $.toLowerCase()), (et) => kindOf(et) === $),
  typeOfTest = ($) => (et) => typeof et === $,
  { isArray } = Array,
  isUndefined = typeOfTest('undefined');
function isBuffer($) {
  return (
    $ !== null &&
    !isUndefined($) &&
    $.constructor !== null &&
    !isUndefined($.constructor) &&
    isFunction($.constructor.isBuffer) &&
    $.constructor.isBuffer($)
  );
}
const isArrayBuffer = kindOfTest('ArrayBuffer');
function isArrayBufferView($) {
  let et;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (et = ArrayBuffer.isView($))
      : (et = $ && $.buffer && isArrayBuffer($.buffer)),
    et
  );
}
const isString = typeOfTest('string'),
  isFunction = typeOfTest('function'),
  isNumber = typeOfTest('number'),
  isObject = ($) => $ !== null && typeof $ == 'object',
  isBoolean = ($) => $ === !0 || $ === !1,
  isPlainObject = ($) => {
    if (kindOf($) !== 'object') return !1;
    const et = getPrototypeOf($);
    return (
      (et === null || et === Object.prototype || Object.getPrototypeOf(et) === null) &&
      !(Symbol.toStringTag in $) &&
      !(Symbol.iterator in $)
    );
  },
  isDate = kindOfTest('Date'),
  isFile = kindOfTest('File'),
  isBlob = kindOfTest('Blob'),
  isFileList = kindOfTest('FileList'),
  isStream = ($) => isObject($) && isFunction($.pipe),
  isFormData = ($) => {
    const et = '[object FormData]';
    return (
      $ &&
      ((typeof FormData == 'function' && $ instanceof FormData) ||
        toString.call($) === et ||
        (isFunction($.toString) && $.toString() === et))
    );
  },
  isURLSearchParams = kindOfTest('URLSearchParams'),
  trim = ($) => ($.trim ? $.trim() : $.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function forEach($, et, { allOwnKeys: tt = !1 } = {}) {
  if ($ === null || typeof $ > 'u') return;
  let rt, nt;
  if ((typeof $ != 'object' && ($ = [$]), isArray($)))
    for (rt = 0, nt = $.length; rt < nt; rt++) et.call(null, $[rt], rt, $);
  else {
    const ot = tt ? Object.getOwnPropertyNames($) : Object.keys($),
      it = ot.length;
    let at;
    for (rt = 0; rt < it; rt++) (at = ot[rt]), et.call(null, $[at], at, $);
  }
}
function findKey($, et) {
  et = et.toLowerCase();
  const tt = Object.keys($);
  let rt = tt.length,
    nt;
  for (; rt-- > 0; ) if (((nt = tt[rt]), et === nt.toLowerCase())) return nt;
  return null;
}
const _global = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  isContextDefined = ($) => !isUndefined($) && $ !== _global;
function merge() {
  const { caseless: $ } = (isContextDefined(this) && this) || {},
    et = {},
    tt = (rt, nt) => {
      const ot = ($ && findKey(et, nt)) || nt;
      isPlainObject(et[ot]) && isPlainObject(rt)
        ? (et[ot] = merge(et[ot], rt))
        : isPlainObject(rt)
        ? (et[ot] = merge({}, rt))
        : isArray(rt)
        ? (et[ot] = rt.slice())
        : (et[ot] = rt);
    };
  for (let rt = 0, nt = arguments.length; rt < nt; rt++)
    arguments[rt] && forEach(arguments[rt], tt);
  return et;
}
const extend = ($, et, tt, { allOwnKeys: rt } = {}) => (
    forEach(
      et,
      (nt, ot) => {
        tt && isFunction(nt) ? ($[ot] = bind(nt, tt)) : ($[ot] = nt);
      },
      { allOwnKeys: rt }
    ),
    $
  ),
  stripBOM = ($) => ($.charCodeAt(0) === 65279 && ($ = $.slice(1)), $),
  inherits = ($, et, tt, rt) => {
    ($.prototype = Object.create(et.prototype, rt)),
      ($.prototype.constructor = $),
      Object.defineProperty($, 'super', { value: et.prototype }),
      tt && Object.assign($.prototype, tt);
  },
  toFlatObject = ($, et, tt, rt) => {
    let nt, ot, it;
    const at = {};
    if (((et = et || {}), $ == null)) return et;
    do {
      for (nt = Object.getOwnPropertyNames($), ot = nt.length; ot-- > 0; )
        (it = nt[ot]), (!rt || rt(it, $, et)) && !at[it] && ((et[it] = $[it]), (at[it] = !0));
      $ = tt !== !1 && getPrototypeOf($);
    } while ($ && (!tt || tt($, et)) && $ !== Object.prototype);
    return et;
  },
  endsWith = ($, et, tt) => {
    ($ = String($)), (tt === void 0 || tt > $.length) && (tt = $.length), (tt -= et.length);
    const rt = $.indexOf(et, tt);
    return rt !== -1 && rt === tt;
  },
  toArray = ($) => {
    if (!$) return null;
    if (isArray($)) return $;
    let et = $.length;
    if (!isNumber(et)) return null;
    const tt = new Array(et);
    for (; et-- > 0; ) tt[et] = $[et];
    return tt;
  },
  isTypedArray = (
    ($) => (et) =>
      $ && et instanceof $
  )(typeof Uint8Array < 'u' && getPrototypeOf(Uint8Array)),
  forEachEntry = ($, et) => {
    const rt = ($ && $[Symbol.iterator]).call($);
    let nt;
    for (; (nt = rt.next()) && !nt.done; ) {
      const ot = nt.value;
      et.call($, ot[0], ot[1]);
    }
  },
  matchAll = ($, et) => {
    let tt;
    const rt = [];
    for (; (tt = $.exec(et)) !== null; ) rt.push(tt);
    return rt;
  },
  isHTMLForm = kindOfTest('HTMLFormElement'),
  toCamelCase = ($) =>
    $.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (tt, rt, nt) {
      return rt.toUpperCase() + nt;
    }),
  hasOwnProperty = (
    ({ hasOwnProperty: $ }) =>
    (et, tt) =>
      $.call(et, tt)
  )(Object.prototype),
  isRegExp = kindOfTest('RegExp'),
  reduceDescriptors = ($, et) => {
    const tt = Object.getOwnPropertyDescriptors($),
      rt = {};
    forEach(tt, (nt, ot) => {
      et(nt, ot, $) !== !1 && (rt[ot] = nt);
    }),
      Object.defineProperties($, rt);
  },
  freezeMethods = ($) => {
    reduceDescriptors($, (et, tt) => {
      if (isFunction($) && ['arguments', 'caller', 'callee'].indexOf(tt) !== -1) return !1;
      const rt = $[tt];
      if (isFunction(rt)) {
        if (((et.enumerable = !1), 'writable' in et)) {
          et.writable = !1;
          return;
        }
        et.set ||
          (et.set = () => {
            throw Error("Can not rewrite read-only method '" + tt + "'");
          });
      }
    });
  },
  toObjectSet = ($, et) => {
    const tt = {},
      rt = (nt) => {
        nt.forEach((ot) => {
          tt[ot] = !0;
        });
      };
    return isArray($) ? rt($) : rt(String($).split(et)), tt;
  },
  noop = () => {},
  toFiniteNumber = ($, et) => (($ = +$), Number.isFinite($) ? $ : et),
  toJSONObject = ($) => {
    const et = new Array(10),
      tt = (rt, nt) => {
        if (isObject(rt)) {
          if (et.indexOf(rt) >= 0) return;
          if (!('toJSON' in rt)) {
            et[nt] = rt;
            const ot = isArray(rt) ? [] : {};
            return (
              forEach(rt, (it, at) => {
                const st = tt(it, nt + 1);
                !isUndefined(st) && (ot[at] = st);
              }),
              (et[nt] = void 0),
              ot
            );
          }
        }
        return rt;
      };
    return tt($, 0);
  },
  utils = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    toJSONObject
  };
function AxiosError($, et, tt, rt, nt) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = $),
    (this.name = 'AxiosError'),
    et && (this.code = et),
    tt && (this.config = tt),
    rt && (this.request = rt),
    nt && (this.response = nt);
}
utils.inherits(AxiosError, Error, {
  toJSON: function $() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype$1 = AxiosError.prototype,
  descriptors = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach(($) => {
  descriptors[$] = { value: $ };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', { value: !0 });
AxiosError.from = ($, et, tt, rt, nt, ot) => {
  const it = Object.create(prototype$1);
  return (
    utils.toFlatObject(
      $,
      it,
      function (st) {
        return st !== Error.prototype;
      },
      (at) => at !== 'isAxiosError'
    ),
    AxiosError.call(it, $.message, et, tt, rt, nt),
    (it.cause = $),
    (it.name = $.name),
    ot && Object.assign(it, ot),
    it
  );
};
var browser = typeof self == 'object' ? self.FormData : window.FormData;
const FormData$2 = browser;
function isVisitable($) {
  return utils.isPlainObject($) || utils.isArray($);
}
function removeBrackets($) {
  return utils.endsWith($, '[]') ? $.slice(0, -2) : $;
}
function renderKey($, et, tt) {
  return $
    ? $.concat(et)
        .map(function (nt, ot) {
          return (nt = removeBrackets(nt)), !tt && ot ? '[' + nt + ']' : nt;
        })
        .join(tt ? '.' : '')
    : et;
}
function isFlatArray($) {
  return utils.isArray($) && !$.some(isVisitable);
}
const predicates = utils.toFlatObject(utils, {}, null, function $(et) {
  return /^is[A-Z]/.test(et);
});
function isSpecCompliant($) {
  return (
    $ && utils.isFunction($.append) && $[Symbol.toStringTag] === 'FormData' && $[Symbol.iterator]
  );
}
function toFormData($, et, tt) {
  if (!utils.isObject($)) throw new TypeError('target must be an object');
  (et = et || new (FormData$2 || FormData)()),
    (tt = utils.toFlatObject(tt, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (gt, bt) {
      return !utils.isUndefined(bt[gt]);
    }));
  const rt = tt.metaTokens,
    nt = tt.visitor || ut,
    ot = tt.dots,
    it = tt.indexes,
    st = (tt.Blob || (typeof Blob < 'u' && Blob)) && isSpecCompliant(et);
  if (!utils.isFunction(nt)) throw new TypeError('visitor must be a function');
  function lt(pt) {
    if (pt === null) return '';
    if (utils.isDate(pt)) return pt.toISOString();
    if (!st && utils.isBlob(pt))
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    return utils.isArrayBuffer(pt) || utils.isTypedArray(pt)
      ? st && typeof Blob == 'function'
        ? new Blob([pt])
        : Buffer.from(pt)
      : pt;
  }
  function ut(pt, gt, bt) {
    let ht = pt;
    if (pt && !bt && typeof pt == 'object') {
      if (utils.endsWith(gt, '{}')) (gt = rt ? gt : gt.slice(0, -2)), (pt = JSON.stringify(pt));
      else if (
        (utils.isArray(pt) && isFlatArray(pt)) ||
        utils.isFileList(pt) ||
        (utils.endsWith(gt, '[]') && (ht = utils.toArray(pt)))
      )
        return (
          (gt = removeBrackets(gt)),
          ht.forEach(function (yt, St) {
            !(utils.isUndefined(yt) || yt === null) &&
              et.append(it === !0 ? renderKey([gt], St, ot) : it === null ? gt : gt + '[]', lt(yt));
          }),
          !1
        );
    }
    return isVisitable(pt) ? !0 : (et.append(renderKey(bt, gt, ot), lt(pt)), !1);
  }
  const ct = [],
    dt = Object.assign(predicates, { defaultVisitor: ut, convertValue: lt, isVisitable });
  function ft(pt, gt) {
    if (!utils.isUndefined(pt)) {
      if (ct.indexOf(pt) !== -1) throw Error('Circular reference detected in ' + gt.join('.'));
      ct.push(pt),
        utils.forEach(pt, function (ht, mt) {
          (!(utils.isUndefined(ht) || ht === null) &&
            nt.call(et, ht, utils.isString(mt) ? mt.trim() : mt, gt, dt)) === !0 &&
            ft(ht, gt ? gt.concat(mt) : [mt]);
        }),
        ct.pop();
    }
  }
  if (!utils.isObject($)) throw new TypeError('data must be an object');
  return ft($), et;
}
function encode$1($) {
  const et = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0'
  };
  return encodeURIComponent($).replace(/[!'()~]|%20|%00/g, function (rt) {
    return et[rt];
  });
}
function AxiosURLSearchParams($, et) {
  (this._pairs = []), $ && toFormData($, this, et);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function $(et, tt) {
  this._pairs.push([et, tt]);
};
prototype.toString = function $(et) {
  const tt = et
    ? function (rt) {
        return et.call(this, rt, encode$1);
      }
    : encode$1;
  return this._pairs
    .map(function (nt) {
      return tt(nt[0]) + '=' + tt(nt[1]);
    }, '')
    .join('&');
};
function encode($) {
  return encodeURIComponent($)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function buildURL($, et, tt) {
  if (!et) return $;
  const rt = (tt && tt.encode) || encode,
    nt = tt && tt.serialize;
  let ot;
  if (
    (nt
      ? (ot = nt(et, tt))
      : (ot = utils.isURLSearchParams(et)
          ? et.toString()
          : new AxiosURLSearchParams(et, tt).toString(rt)),
    ot)
  ) {
    const it = $.indexOf('#');
    it !== -1 && ($ = $.slice(0, it)), ($ += ($.indexOf('?') === -1 ? '?' : '&') + ot);
  }
  return $;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  use(et, tt, rt) {
    return (
      this.handlers.push({
        fulfilled: et,
        rejected: tt,
        synchronous: rt ? rt.synchronous : !1,
        runWhen: rt ? rt.runWhen : null
      }),
      this.handlers.length - 1
    );
  }
  eject(et) {
    this.handlers[et] && (this.handlers[et] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(et) {
    utils.forEach(this.handlers, function (rt) {
      rt !== null && et(rt);
    });
  }
}
const InterceptorManager$1 = InterceptorManager,
  transitionalDefaults = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  URLSearchParams$1 = typeof URLSearchParams < 'u' ? URLSearchParams : AxiosURLSearchParams,
  FormData$1 = FormData,
  isStandardBrowserEnv = (() => {
    let $;
    return typeof navigator < 'u' &&
      (($ = navigator.product) === 'ReactNative' || $ === 'NativeScript' || $ === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  isStandardBrowserWebWorkerEnv = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  platform = {
    isBrowser: !0,
    classes: { URLSearchParams: URLSearchParams$1, FormData: FormData$1, Blob },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  };
function toURLEncodedForm($, et) {
  return toFormData(
    $,
    new platform.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (tt, rt, nt, ot) {
          return platform.isNode && utils.isBuffer(tt)
            ? (this.append(rt, tt.toString('base64')), !1)
            : ot.defaultVisitor.apply(this, arguments);
        }
      },
      et
    )
  );
}
function parsePropPath($) {
  return utils.matchAll(/\w+|\[(\w*)]/g, $).map((et) => (et[0] === '[]' ? '' : et[1] || et[0]));
}
function arrayToObject($) {
  const et = {},
    tt = Object.keys($);
  let rt;
  const nt = tt.length;
  let ot;
  for (rt = 0; rt < nt; rt++) (ot = tt[rt]), (et[ot] = $[ot]);
  return et;
}
function formDataToJSON($) {
  function et(tt, rt, nt, ot) {
    let it = tt[ot++];
    const at = Number.isFinite(+it),
      st = ot >= tt.length;
    return (
      (it = !it && utils.isArray(nt) ? nt.length : it),
      st
        ? (utils.hasOwnProp(nt, it) ? (nt[it] = [nt[it], rt]) : (nt[it] = rt), !at)
        : ((!nt[it] || !utils.isObject(nt[it])) && (nt[it] = []),
          et(tt, rt, nt[it], ot) && utils.isArray(nt[it]) && (nt[it] = arrayToObject(nt[it])),
          !at)
    );
  }
  if (utils.isFormData($) && utils.isFunction($.entries)) {
    const tt = {};
    return (
      utils.forEachEntry($, (rt, nt) => {
        et(parsePropPath(rt), nt, tt, 0);
      }),
      tt
    );
  }
  return null;
}
const DEFAULT_CONTENT_TYPE = { 'Content-Type': void 0 };
function stringifySafely($, et, tt) {
  if (utils.isString($))
    try {
      return (et || JSON.parse)($), utils.trim($);
    } catch (rt) {
      if (rt.name !== 'SyntaxError') throw rt;
    }
  return (tt || JSON.stringify)($);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function $(et, tt) {
      const rt = tt.getContentType() || '',
        nt = rt.indexOf('application/json') > -1,
        ot = utils.isObject(et);
      if ((ot && utils.isHTMLForm(et) && (et = new FormData(et)), utils.isFormData(et)))
        return nt && nt ? JSON.stringify(formDataToJSON(et)) : et;
      if (
        utils.isArrayBuffer(et) ||
        utils.isBuffer(et) ||
        utils.isStream(et) ||
        utils.isFile(et) ||
        utils.isBlob(et)
      )
        return et;
      if (utils.isArrayBufferView(et)) return et.buffer;
      if (utils.isURLSearchParams(et))
        return (
          tt.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), et.toString()
        );
      let at;
      if (ot) {
        if (rt.indexOf('application/x-www-form-urlencoded') > -1)
          return toURLEncodedForm(et, this.formSerializer).toString();
        if ((at = utils.isFileList(et)) || rt.indexOf('multipart/form-data') > -1) {
          const st = this.env && this.env.FormData;
          return toFormData(at ? { 'files[]': et } : et, st && new st(), this.formSerializer);
        }
      }
      return ot || nt ? (tt.setContentType('application/json', !1), stringifySafely(et)) : et;
    }
  ],
  transformResponse: [
    function $(et) {
      const tt = this.transitional || defaults.transitional,
        rt = tt && tt.forcedJSONParsing,
        nt = this.responseType === 'json';
      if (et && utils.isString(et) && ((rt && !this.responseType) || nt)) {
        const it = !(tt && tt.silentJSONParsing) && nt;
        try {
          return JSON.parse(et);
        } catch (at) {
          if (it)
            throw at.name === 'SyntaxError'
              ? AxiosError.from(at, AxiosError.ERR_BAD_RESPONSE, this, null, this.response)
              : at;
        }
      }
      return et;
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: platform.classes.FormData, Blob: platform.classes.Blob },
  validateStatus: function $(et) {
    return et >= 200 && et < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } }
};
utils.forEach(['delete', 'get', 'head'], function $(et) {
  defaults.headers[et] = {};
});
utils.forEach(['post', 'put', 'patch'], function $(et) {
  defaults.headers[et] = utils.merge(DEFAULT_CONTENT_TYPE);
});
const defaults$1 = defaults,
  ignoreDuplicateOf = utils.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  parseHeaders = ($) => {
    const et = {};
    let tt, rt, nt;
    return (
      $ &&
        $.split(
          `
`
        ).forEach(function (it) {
          (nt = it.indexOf(':')),
            (tt = it.substring(0, nt).trim().toLowerCase()),
            (rt = it.substring(nt + 1).trim()),
            !(!tt || (et[tt] && ignoreDuplicateOf[tt])) &&
              (tt === 'set-cookie'
                ? et[tt]
                  ? et[tt].push(rt)
                  : (et[tt] = [rt])
                : (et[tt] = et[tt] ? et[tt] + ', ' + rt : rt));
        }),
      et
    );
  },
  $internals = Symbol('internals');
function normalizeHeader($) {
  return $ && String($).trim().toLowerCase();
}
function normalizeValue($) {
  return $ === !1 || $ == null ? $ : utils.isArray($) ? $.map(normalizeValue) : String($);
}
function parseTokens($) {
  const et = Object.create(null),
    tt = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let rt;
  for (; (rt = tt.exec($)); ) et[rt[1]] = rt[2];
  return et;
}
function isValidHeaderName($) {
  return /^[-_a-zA-Z]+$/.test($.trim());
}
function matchHeaderValue($, et, tt, rt) {
  if (utils.isFunction(rt)) return rt.call(this, et, tt);
  if (utils.isString(et)) {
    if (utils.isString(rt)) return et.indexOf(rt) !== -1;
    if (utils.isRegExp(rt)) return rt.test(et);
  }
}
function formatHeader($) {
  return $.trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (et, tt, rt) => tt.toUpperCase() + rt);
}
function buildAccessors($, et) {
  const tt = utils.toCamelCase(' ' + et);
  ['get', 'set', 'has'].forEach((rt) => {
    Object.defineProperty($, rt + tt, {
      value: function (nt, ot, it) {
        return this[rt].call(this, et, nt, ot, it);
      },
      configurable: !0
    });
  });
}
class AxiosHeaders {
  constructor(et) {
    et && this.set(et);
  }
  set(et, tt, rt) {
    const nt = this;
    function ot(at, st, lt) {
      const ut = normalizeHeader(st);
      if (!ut) throw new Error('header name must be a non-empty string');
      const ct = utils.findKey(nt, ut);
      (!ct || nt[ct] === void 0 || lt === !0 || (lt === void 0 && nt[ct] !== !1)) &&
        (nt[ct || st] = normalizeValue(at));
    }
    const it = (at, st) => utils.forEach(at, (lt, ut) => ot(lt, ut, st));
    return (
      utils.isPlainObject(et) || et instanceof this.constructor
        ? it(et, tt)
        : utils.isString(et) && (et = et.trim()) && !isValidHeaderName(et)
        ? it(parseHeaders(et), tt)
        : et != null && ot(tt, et, rt),
      this
    );
  }
  get(et, tt) {
    if (((et = normalizeHeader(et)), et)) {
      const rt = utils.findKey(this, et);
      if (rt) {
        const nt = this[rt];
        if (!tt) return nt;
        if (tt === !0) return parseTokens(nt);
        if (utils.isFunction(tt)) return tt.call(this, nt, rt);
        if (utils.isRegExp(tt)) return tt.exec(nt);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(et, tt) {
    if (((et = normalizeHeader(et)), et)) {
      const rt = utils.findKey(this, et);
      return !!(rt && (!tt || matchHeaderValue(this, this[rt], rt, tt)));
    }
    return !1;
  }
  delete(et, tt) {
    const rt = this;
    let nt = !1;
    function ot(it) {
      if (((it = normalizeHeader(it)), it)) {
        const at = utils.findKey(rt, it);
        at && (!tt || matchHeaderValue(rt, rt[at], at, tt)) && (delete rt[at], (nt = !0));
      }
    }
    return utils.isArray(et) ? et.forEach(ot) : ot(et), nt;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(et) {
    const tt = this,
      rt = {};
    return (
      utils.forEach(this, (nt, ot) => {
        const it = utils.findKey(rt, ot);
        if (it) {
          (tt[it] = normalizeValue(nt)), delete tt[ot];
          return;
        }
        const at = et ? formatHeader(ot) : String(ot).trim();
        at !== ot && delete tt[ot], (tt[at] = normalizeValue(nt)), (rt[at] = !0);
      }),
      this
    );
  }
  concat(...et) {
    return this.constructor.concat(this, ...et);
  }
  toJSON(et) {
    const tt = Object.create(null);
    return (
      utils.forEach(this, (rt, nt) => {
        rt != null && rt !== !1 && (tt[nt] = et && utils.isArray(rt) ? rt.join(', ') : rt);
      }),
      tt
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([et, tt]) => et + ': ' + tt).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(et) {
    return et instanceof this ? et : new this(et);
  }
  static concat(et, ...tt) {
    const rt = new this(et);
    return tt.forEach((nt) => rt.set(nt)), rt;
  }
  static accessor(et) {
    const rt = (this[$internals] = this[$internals] = { accessors: {} }).accessors,
      nt = this.prototype;
    function ot(it) {
      const at = normalizeHeader(it);
      rt[at] || (buildAccessors(nt, it), (rt[at] = !0));
    }
    return utils.isArray(et) ? et.forEach(ot) : ot(et), this;
  }
}
AxiosHeaders.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent'
]);
utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
function transformData($, et) {
  const tt = this || defaults$1,
    rt = et || tt,
    nt = AxiosHeaders$1.from(rt.headers);
  let ot = rt.data;
  return (
    utils.forEach($, function (at) {
      ot = at.call(tt, ot, nt.normalize(), et ? et.status : void 0);
    }),
    nt.normalize(),
    ot
  );
}
function isCancel($) {
  return !!($ && $.__CANCEL__);
}
function CanceledError($, et, tt) {
  AxiosError.call(this, $ ?? 'canceled', AxiosError.ERR_CANCELED, et, tt),
    (this.name = 'CanceledError');
}
utils.inherits(CanceledError, AxiosError, { __CANCEL__: !0 });
const httpAdapter = null;
function settle($, et, tt) {
  const rt = tt.config.validateStatus;
  !tt.status || !rt || rt(tt.status)
    ? $(tt)
    : et(
        new AxiosError(
          'Request failed with status code ' + tt.status,
          [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][
            Math.floor(tt.status / 100) - 4
          ],
          tt.config,
          tt.request,
          tt
        )
      );
}
const cookies = platform.isStandardBrowserEnv
  ? (function $() {
      return {
        write: function (tt, rt, nt, ot, it, at) {
          const st = [];
          st.push(tt + '=' + encodeURIComponent(rt)),
            utils.isNumber(nt) && st.push('expires=' + new Date(nt).toGMTString()),
            utils.isString(ot) && st.push('path=' + ot),
            utils.isString(it) && st.push('domain=' + it),
            at === !0 && st.push('secure'),
            (document.cookie = st.join('; '));
        },
        read: function (tt) {
          const rt = document.cookie.match(new RegExp('(^|;\\s*)(' + tt + ')=([^;]*)'));
          return rt ? decodeURIComponent(rt[3]) : null;
        },
        remove: function (tt) {
          this.write(tt, '', Date.now() - 864e5);
        }
      };
    })()
  : (function $() {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {}
      };
    })();
function isAbsoluteURL($) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test($);
}
function combineURLs($, et) {
  return et ? $.replace(/\/+$/, '') + '/' + et.replace(/^\/+/, '') : $;
}
function buildFullPath($, et) {
  return $ && !isAbsoluteURL(et) ? combineURLs($, et) : et;
}
const isURLSameOrigin = platform.isStandardBrowserEnv
  ? (function $() {
      const et = /(msie|trident)/i.test(navigator.userAgent),
        tt = document.createElement('a');
      let rt;
      function nt(ot) {
        let it = ot;
        return (
          et && (tt.setAttribute('href', it), (it = tt.href)),
          tt.setAttribute('href', it),
          {
            href: tt.href,
            protocol: tt.protocol ? tt.protocol.replace(/:$/, '') : '',
            host: tt.host,
            search: tt.search ? tt.search.replace(/^\?/, '') : '',
            hash: tt.hash ? tt.hash.replace(/^#/, '') : '',
            hostname: tt.hostname,
            port: tt.port,
            pathname: tt.pathname.charAt(0) === '/' ? tt.pathname : '/' + tt.pathname
          }
        );
      }
      return (
        (rt = nt(window.location.href)),
        function (it) {
          const at = utils.isString(it) ? nt(it) : it;
          return at.protocol === rt.protocol && at.host === rt.host;
        }
      );
    })()
  : (function $() {
      return function () {
        return !0;
      };
    })();
function parseProtocol($) {
  const et = /^([-+\w]{1,25})(:?\/\/|:)/.exec($);
  return (et && et[1]) || '';
}
function speedometer($, et) {
  $ = $ || 10;
  const tt = new Array($),
    rt = new Array($);
  let nt = 0,
    ot = 0,
    it;
  return (
    (et = et !== void 0 ? et : 1e3),
    function (st) {
      const lt = Date.now(),
        ut = rt[ot];
      it || (it = lt), (tt[nt] = st), (rt[nt] = lt);
      let ct = ot,
        dt = 0;
      for (; ct !== nt; ) (dt += tt[ct++]), (ct = ct % $);
      if (((nt = (nt + 1) % $), nt === ot && (ot = (ot + 1) % $), lt - it < et)) return;
      const ft = ut && lt - ut;
      return ft ? Math.round((dt * 1e3) / ft) : void 0;
    }
  );
}
function progressEventReducer($, et) {
  let tt = 0;
  const rt = speedometer(50, 250);
  return (nt) => {
    const ot = nt.loaded,
      it = nt.lengthComputable ? nt.total : void 0,
      at = ot - tt,
      st = rt(at),
      lt = ot <= it;
    tt = ot;
    const ut = {
      loaded: ot,
      total: it,
      progress: it ? ot / it : void 0,
      bytes: at,
      rate: st || void 0,
      estimated: st && it && lt ? (it - ot) / st : void 0,
      event: nt
    };
    (ut[et ? 'download' : 'upload'] = !0), $(ut);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest < 'u',
  xhrAdapter =
    isXHRAdapterSupported &&
    function ($) {
      return new Promise(function (tt, rt) {
        let nt = $.data;
        const ot = AxiosHeaders$1.from($.headers).normalize(),
          it = $.responseType;
        let at;
        function st() {
          $.cancelToken && $.cancelToken.unsubscribe(at),
            $.signal && $.signal.removeEventListener('abort', at);
        }
        utils.isFormData(nt) &&
          (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) &&
          ot.setContentType(!1);
        let lt = new XMLHttpRequest();
        if ($.auth) {
          const ft = $.auth.username || '',
            pt = $.auth.password ? unescape(encodeURIComponent($.auth.password)) : '';
          ot.set('Authorization', 'Basic ' + btoa(ft + ':' + pt));
        }
        const ut = buildFullPath($.baseURL, $.url);
        lt.open($.method.toUpperCase(), buildURL(ut, $.params, $.paramsSerializer), !0),
          (lt.timeout = $.timeout);
        function ct() {
          if (!lt) return;
          const ft = AxiosHeaders$1.from(
              'getAllResponseHeaders' in lt && lt.getAllResponseHeaders()
            ),
            gt = {
              data: !it || it === 'text' || it === 'json' ? lt.responseText : lt.response,
              status: lt.status,
              statusText: lt.statusText,
              headers: ft,
              config: $,
              request: lt
            };
          settle(
            function (ht) {
              tt(ht), st();
            },
            function (ht) {
              rt(ht), st();
            },
            gt
          ),
            (lt = null);
        }
        if (
          ('onloadend' in lt
            ? (lt.onloadend = ct)
            : (lt.onreadystatechange = function () {
                !lt ||
                  lt.readyState !== 4 ||
                  (lt.status === 0 && !(lt.responseURL && lt.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(ct);
              }),
          (lt.onabort = function () {
            lt &&
              (rt(new AxiosError('Request aborted', AxiosError.ECONNABORTED, $, lt)), (lt = null));
          }),
          (lt.onerror = function () {
            rt(new AxiosError('Network Error', AxiosError.ERR_NETWORK, $, lt)), (lt = null);
          }),
          (lt.ontimeout = function () {
            let pt = $.timeout ? 'timeout of ' + $.timeout + 'ms exceeded' : 'timeout exceeded';
            const gt = $.transitional || transitionalDefaults;
            $.timeoutErrorMessage && (pt = $.timeoutErrorMessage),
              rt(
                new AxiosError(
                  pt,
                  gt.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
                  $,
                  lt
                )
              ),
              (lt = null);
          }),
          platform.isStandardBrowserEnv)
        ) {
          const ft =
            ($.withCredentials || isURLSameOrigin(ut)) &&
            $.xsrfCookieName &&
            cookies.read($.xsrfCookieName);
          ft && ot.set($.xsrfHeaderName, ft);
        }
        nt === void 0 && ot.setContentType(null),
          'setRequestHeader' in lt &&
            utils.forEach(ot.toJSON(), function (pt, gt) {
              lt.setRequestHeader(gt, pt);
            }),
          utils.isUndefined($.withCredentials) || (lt.withCredentials = !!$.withCredentials),
          it && it !== 'json' && (lt.responseType = $.responseType),
          typeof $.onDownloadProgress == 'function' &&
            lt.addEventListener('progress', progressEventReducer($.onDownloadProgress, !0)),
          typeof $.onUploadProgress == 'function' &&
            lt.upload &&
            lt.upload.addEventListener('progress', progressEventReducer($.onUploadProgress)),
          ($.cancelToken || $.signal) &&
            ((at = (ft) => {
              lt &&
                (rt(!ft || ft.type ? new CanceledError(null, $, lt) : ft), lt.abort(), (lt = null));
            }),
            $.cancelToken && $.cancelToken.subscribe(at),
            $.signal && ($.signal.aborted ? at() : $.signal.addEventListener('abort', at)));
        const dt = parseProtocol(ut);
        if (dt && platform.protocols.indexOf(dt) === -1) {
          rt(new AxiosError('Unsupported protocol ' + dt + ':', AxiosError.ERR_BAD_REQUEST, $));
          return;
        }
        lt.send(nt || null);
      });
    },
  knownAdapters = { http: httpAdapter, xhr: xhrAdapter };
utils.forEach(knownAdapters, ($, et) => {
  if ($) {
    try {
      Object.defineProperty($, 'name', { value: et });
    } catch {}
    Object.defineProperty($, 'adapterName', { value: et });
  }
});
const adapters = {
  getAdapter: ($) => {
    $ = utils.isArray($) ? $ : [$];
    const { length: et } = $;
    let tt, rt;
    for (
      let nt = 0;
      nt < et && ((tt = $[nt]), !(rt = utils.isString(tt) ? knownAdapters[tt.toLowerCase()] : tt));
      nt++
    );
    if (!rt)
      throw rt === !1
        ? new AxiosError(`Adapter ${tt} is not supported by the environment`, 'ERR_NOT_SUPPORT')
        : new Error(
            utils.hasOwnProp(knownAdapters, tt)
              ? `Adapter '${tt}' is not available in the build`
              : `Unknown adapter '${tt}'`
          );
    if (!utils.isFunction(rt)) throw new TypeError('adapter is not a function');
    return rt;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested($) {
  if (($.cancelToken && $.cancelToken.throwIfRequested(), $.signal && $.signal.aborted))
    throw new CanceledError(null, $);
}
function dispatchRequest($) {
  return (
    throwIfCancellationRequested($),
    ($.headers = AxiosHeaders$1.from($.headers)),
    ($.data = transformData.call($, $.transformRequest)),
    ['post', 'put', 'patch'].indexOf($.method) !== -1 &&
      $.headers.setContentType('application/x-www-form-urlencoded', !1),
    adapters
      .getAdapter($.adapter || defaults$1.adapter)($)
      .then(
        function (rt) {
          return (
            throwIfCancellationRequested($),
            (rt.data = transformData.call($, $.transformResponse, rt)),
            (rt.headers = AxiosHeaders$1.from(rt.headers)),
            rt
          );
        },
        function (rt) {
          return (
            isCancel(rt) ||
              (throwIfCancellationRequested($),
              rt &&
                rt.response &&
                ((rt.response.data = transformData.call($, $.transformResponse, rt.response)),
                (rt.response.headers = AxiosHeaders$1.from(rt.response.headers)))),
            Promise.reject(rt)
          );
        }
      )
  );
}
const headersToObject = ($) => ($ instanceof AxiosHeaders$1 ? $.toJSON() : $);
function mergeConfig($, et) {
  et = et || {};
  const tt = {};
  function rt(lt, ut, ct) {
    return utils.isPlainObject(lt) && utils.isPlainObject(ut)
      ? utils.merge.call({ caseless: ct }, lt, ut)
      : utils.isPlainObject(ut)
      ? utils.merge({}, ut)
      : utils.isArray(ut)
      ? ut.slice()
      : ut;
  }
  function nt(lt, ut, ct) {
    if (utils.isUndefined(ut)) {
      if (!utils.isUndefined(lt)) return rt(void 0, lt, ct);
    } else return rt(lt, ut, ct);
  }
  function ot(lt, ut) {
    if (!utils.isUndefined(ut)) return rt(void 0, ut);
  }
  function it(lt, ut) {
    if (utils.isUndefined(ut)) {
      if (!utils.isUndefined(lt)) return rt(void 0, lt);
    } else return rt(void 0, ut);
  }
  function at(lt, ut, ct) {
    if (ct in et) return rt(lt, ut);
    if (ct in $) return rt(void 0, lt);
  }
  const st = {
    url: ot,
    method: ot,
    data: ot,
    baseURL: it,
    transformRequest: it,
    transformResponse: it,
    paramsSerializer: it,
    timeout: it,
    timeoutMessage: it,
    withCredentials: it,
    adapter: it,
    responseType: it,
    xsrfCookieName: it,
    xsrfHeaderName: it,
    onUploadProgress: it,
    onDownloadProgress: it,
    decompress: it,
    maxContentLength: it,
    maxBodyLength: it,
    beforeRedirect: it,
    transport: it,
    httpAgent: it,
    httpsAgent: it,
    cancelToken: it,
    socketPath: it,
    responseEncoding: it,
    validateStatus: at,
    headers: (lt, ut) => nt(headersToObject(lt), headersToObject(ut), !0)
  };
  return (
    utils.forEach(Object.keys($).concat(Object.keys(et)), function (ut) {
      const ct = st[ut] || nt,
        dt = ct($[ut], et[ut], ut);
      (utils.isUndefined(dt) && ct !== at) || (tt[ut] = dt);
    }),
    tt
  );
}
const VERSION = '1.2.2',
  validators$1 = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(($, et) => {
  validators$1[$] = function (rt) {
    return typeof rt === $ || 'a' + (et < 1 ? 'n ' : ' ') + $;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function $(et, tt, rt) {
  function nt(ot, it) {
    return '[Axios v' + VERSION + "] Transitional option '" + ot + "'" + it + (rt ? '. ' + rt : '');
  }
  return (ot, it, at) => {
    if (et === !1)
      throw new AxiosError(
        nt(it, ' has been removed' + (tt ? ' in ' + tt : '')),
        AxiosError.ERR_DEPRECATED
      );
    return (
      tt &&
        !deprecatedWarnings[it] &&
        ((deprecatedWarnings[it] = !0),
        console.warn(
          nt(it, ' has been deprecated since v' + tt + ' and will be removed in the near future')
        )),
      et ? et(ot, it, at) : !0
    );
  };
};
function assertOptions($, et, tt) {
  if (typeof $ != 'object')
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  const rt = Object.keys($);
  let nt = rt.length;
  for (; nt-- > 0; ) {
    const ot = rt[nt],
      it = et[ot];
    if (it) {
      const at = $[ot],
        st = at === void 0 || it(at, ot, $);
      if (st !== !0)
        throw new AxiosError('option ' + ot + ' must be ' + st, AxiosError.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (tt !== !0) throw new AxiosError('Unknown option ' + ot, AxiosError.ERR_BAD_OPTION);
  }
}
const validator = { assertOptions, validators: validators$1 },
  validators = validator.validators;
class Axios {
  constructor(et) {
    (this.defaults = et),
      (this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      });
  }
  request(et, tt) {
    typeof et == 'string' ? ((tt = tt || {}), (tt.url = et)) : (tt = et || {}),
      (tt = mergeConfig(this.defaults, tt));
    const { transitional: rt, paramsSerializer: nt, headers: ot } = tt;
    rt !== void 0 &&
      validator.assertOptions(
        rt,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        },
        !1
      ),
      nt !== void 0 &&
        validator.assertOptions(
          nt,
          { encode: validators.function, serialize: validators.function },
          !0
        ),
      (tt.method = (tt.method || this.defaults.method || 'get').toLowerCase());
    let it;
    (it = ot && utils.merge(ot.common, ot[tt.method])),
      it &&
        utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (pt) => {
          delete ot[pt];
        }),
      (tt.headers = AxiosHeaders$1.concat(it, ot));
    const at = [];
    let st = !0;
    this.interceptors.request.forEach(function (gt) {
      (typeof gt.runWhen == 'function' && gt.runWhen(tt) === !1) ||
        ((st = st && gt.synchronous), at.unshift(gt.fulfilled, gt.rejected));
    });
    const lt = [];
    this.interceptors.response.forEach(function (gt) {
      lt.push(gt.fulfilled, gt.rejected);
    });
    let ut,
      ct = 0,
      dt;
    if (!st) {
      const pt = [dispatchRequest.bind(this), void 0];
      for (
        pt.unshift.apply(pt, at), pt.push.apply(pt, lt), dt = pt.length, ut = Promise.resolve(tt);
        ct < dt;

      )
        ut = ut.then(pt[ct++], pt[ct++]);
      return ut;
    }
    dt = at.length;
    let ft = tt;
    for (ct = 0; ct < dt; ) {
      const pt = at[ct++],
        gt = at[ct++];
      try {
        ft = pt(ft);
      } catch (bt) {
        gt.call(this, bt);
        break;
      }
    }
    try {
      ut = dispatchRequest.call(this, ft);
    } catch (pt) {
      return Promise.reject(pt);
    }
    for (ct = 0, dt = lt.length; ct < dt; ) ut = ut.then(lt[ct++], lt[ct++]);
    return ut;
  }
  getUri(et) {
    et = mergeConfig(this.defaults, et);
    const tt = buildFullPath(et.baseURL, et.url);
    return buildURL(tt, et.params, et.paramsSerializer);
  }
}
utils.forEach(['delete', 'get', 'head', 'options'], function $(et) {
  Axios.prototype[et] = function (tt, rt) {
    return this.request(mergeConfig(rt || {}, { method: et, url: tt, data: (rt || {}).data }));
  };
});
utils.forEach(['post', 'put', 'patch'], function $(et) {
  function tt(rt) {
    return function (ot, it, at) {
      return this.request(
        mergeConfig(at || {}, {
          method: et,
          headers: rt ? { 'Content-Type': 'multipart/form-data' } : {},
          url: ot,
          data: it
        })
      );
    };
  }
  (Axios.prototype[et] = tt()), (Axios.prototype[et + 'Form'] = tt(!0));
});
const Axios$1 = Axios;
class CancelToken {
  constructor(et) {
    if (typeof et != 'function') throw new TypeError('executor must be a function.');
    let tt;
    this.promise = new Promise(function (ot) {
      tt = ot;
    });
    const rt = this;
    this.promise.then((nt) => {
      if (!rt._listeners) return;
      let ot = rt._listeners.length;
      for (; ot-- > 0; ) rt._listeners[ot](nt);
      rt._listeners = null;
    }),
      (this.promise.then = (nt) => {
        let ot;
        const it = new Promise((at) => {
          rt.subscribe(at), (ot = at);
        }).then(nt);
        return (
          (it.cancel = function () {
            rt.unsubscribe(ot);
          }),
          it
        );
      }),
      et(function (ot, it, at) {
        rt.reason || ((rt.reason = new CanceledError(ot, it, at)), tt(rt.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(et) {
    if (this.reason) {
      et(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(et) : (this._listeners = [et]);
  }
  unsubscribe(et) {
    if (!this._listeners) return;
    const tt = this._listeners.indexOf(et);
    tt !== -1 && this._listeners.splice(tt, 1);
  }
  static source() {
    let et;
    return {
      token: new CancelToken(function (nt) {
        et = nt;
      }),
      cancel: et
    };
  }
}
const CancelToken$1 = CancelToken;
function spread($) {
  return function (tt) {
    return $.apply(null, tt);
  };
}
function isAxiosError($) {
  return utils.isObject($) && $.isAxiosError === !0;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([$, et]) => {
  HttpStatusCode[et] = $;
});
const HttpStatusCode$1 = HttpStatusCode;
function createInstance($) {
  const et = new Axios$1($),
    tt = bind(Axios$1.prototype.request, et);
  return (
    utils.extend(tt, Axios$1.prototype, et, { allOwnKeys: !0 }),
    utils.extend(tt, et, null, { allOwnKeys: !0 }),
    (tt.create = function (nt) {
      return createInstance(mergeConfig($, nt));
    }),
    tt
  );
}
const axios = createInstance(defaults$1);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function $(et) {
  return Promise.all(et);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = ($) => formDataToJSON(utils.isHTMLForm($) ? new FormData($) : $);
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const axios$1 = axios,
  BASE_URL$1 = 'https://api.dictionaryapi.dev/api/v2',
  fetchDictionary = async ({ url: $, method: et, data: tt, token: rt, customHeaders: nt }) => {
    const ot = nt ?? {},
      it = { Authorization: `token ${rt}`, ...ot };
    return await axios$1({ method: et, url: `${BASE_URL$1}/${$}`, data: tt, headers: it });
  },
  getWord = async ($) => (await fetchDictionary({ url: 'entries/en/' + $, method: 'GET' })).data,
  TOKEN = 'OrzT10iOExjzJxlnwj_wzVggWl1RMKsIRRXGGqhVxbw',
  BASE_URL = 'https://api.unsplash.com',
  fetchUnplash = async ({ url: $, method: et, data: tt, token: rt, customHeaders: nt }) => {
    const ot = nt ?? {},
      it = { Authorization: `Client-ID ${TOKEN}`, ...ot };
    return await axios$1({ method: et, url: `${BASE_URL}/${$}`, data: tt, headers: it });
  },
  getImageByWord = async ($) =>
    (await fetchUnplash({ url: 'search/photos?query=' + $, method: 'GET' })).data,
  useWordDictionary = () => {
    const [$, et] = reactExports.useState({ wordInfo: { word: '' }, error: null, loading: !1 });
    return {
      ...$,
      callsService: async (rt) => {
        try {
          et({ wordInfo: { word: '' }, error: null, loading: !0 });
          const nt = await getWord(rt);
          et({ wordInfo: nt[0], error: null, loading: !1 });
        } catch (nt) {
          et({ wordInfo: { word: '' }, error: nt, loading: !1 });
        }
      }
    };
  },
  useImageByWord = () => {
    const [$, et] = reactExports.useState({ image: {}, error: null, loading: !1 });
    return {
      ...$,
      callImageByWord: async (rt) => {
        try {
          et({ image: { word: '' }, error: null, loading: !0 });
          const nt = await getImageByWord(rt);
          et({ image: nt.results[0], error: null, loading: !1 });
        } catch (nt) {
          et({ image: {}, error: nt, loading: !1 });
        }
      }
    };
  };
function Home() {
  var dt;
  const [$, et] = reactExports.useState(''),
    { callsService: tt, loading: rt, error: nt, wordInfo: ot } = useWordDictionary(),
    { callImageByWord: it, image: at, error: st, loading: lt } = useImageByWord(),
    ut = (ft) => {
      et(ft);
    },
    ct = () => {
      tt($).catch((ft) => console.log(ft)), it($).catch((ft) => console.log(ft));
    };
  return rt
    ? jsx(Fragment, { children: 'Loading...' })
    : nt
    ? jsx(Fragment, { children: 'error' })
    : jsxs('div', {
        children: [
          jsx(SearchInput, { value: $, onChange: ut, onClick: ct }),
          ot.word &&
            ot.word !== '' &&
            jsx(Word, {
              title: ot.word || '',
              subtitle:
                ot.word &&
                ot.meanings &&
                ot.meanings[0].definitions &&
                ot.meanings[0].definitions[0].definition
                  ? ot.meanings[0].definitions[0].definition
                  : '',
              imageUrl: (dt = at == null ? void 0 : at.urls) != null && dt.raw ? at.urls.raw : '',
              audioSourceUrl:
                ot.word && ot.phonetics && ot.phonetics[0].audio ? ot.phonetics[0].audio : ''
            }),
          jsx(Banner, { title: 'Home', imageUrl: PeopleImage })
        ]
      });
}
const isAuth = () =>
  !(localStorage.getItem('token_user') === void 0 || localStorage.getItem('token_user') === null);
function PrivateRoutes({ component: $, redirectTo: et, path: tt, ...rt }) {
  const nt = isAuth(),
    ot = useLocation();
  return nt ? jsx(Outlet, {}) : jsx(Navigate, { to: '/login', state: { from: ot } });
}
function RoutesConfig() {
  const $ = [
      { name: 'home', path: '/', element: jsx(Home, {}) },
      { name: 'Citizens', path: '/citizens', element: jsx(Citizens, {}) },
      { name: 'page-not-found', path: '/*', element: jsx('div', { children: 'Page not found!!!' }) }
    ],
    et = [],
    tt = useLocation();
  return jsxs(
    Routes,
    {
      location: tt,
      children: [
        jsx(Route, {
          element: jsx(PrivateRoutes, {}),
          children: et.map((rt) => jsx(Route, { path: rt.path, element: rt.element }, rt.name))
        }),
        $.map((rt) => jsx(Route, { path: rt.path, element: rt.element }, `${rt.name}`))
      ]
    },
    tt.pathname
  );
}
const App$1 = '';
function App() {
  return jsx(BrowserRouter, { children: jsx(Layout, { children: jsx(RoutesConfig, {}) }) });
}
const index = '';
client.createRoot(document.getElementById('root')).render(
  jsx(React.StrictMode, {
    children: jsx(ChakraProvider, {
      children: jsx(ThemeProvider$1, {
        theme,
        children: jsx(Provider, { store, children: jsx(App, {}) })
      })
    })
  })
);
