'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactSpring = require('react-spring');
var styled = _interopDefault(require('styled-components'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var vars = {
  light: {
    main: '#E5EEFC',
    secondary: '',
    contrast: '#000000'
  },
  dark: {
    main: '',
    secondary: '',
    contrast: ''
  }
};

/* eslint-disable no-sequences */

/* eslint-disable eqeqeq */

/* eslint-disable no-unused-expressions */
var pSBC = function pSBC(p, c0, c1, l) {
  var r,
      g,
      b,
      P,
      f,
      t,
      h,
      i = parseInt,
      m = Math.round,
      a = typeof c1 == 'string';
  if (typeof p != 'number' || p < -1 || p > 1 || typeof c0 != 'string' || c0[0] != 'r' && c0[0] != '#' || c1 && !a) return null;

  var pSBCr = function pSBCr(d) {
    var n = d.length,
        x = {};

    if (n > 9) {
      var _d, _d2;
      (_d = d = d.split(','), _d2 = _slicedToArray(_d, 4), r = _d2[0], g = _d2[1], b = _d2[2], a = _d2[3], _d), n = d.length;
      if (n < 3 || n > 4) return null // eslint-disable-next-line no-unused-expressions
      ;
      x.r = i(r[3] == 'a' ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1;
    } else {
      if (n == 8 || n == 6 || n < 4) return null;
      if (n < 6) d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : '');
      d = i(d.slice(1), 16);
      if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000;else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1;
    }

    return x;
  };

  h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 == 'c' ? !h : false : h, f = pSBCr(c0), P = p < 0, t = c1 && c1 != 'c' ? pSBCr(c1) : P ? {
    r: 0,
    g: 0,
    b: 0,
    a: -1
  } : {
    r: 255,
    g: 255,
    b: 255,
    a: -1
  }, p = P ? p * -1 : p, P = 1 - p;
  if (!f || !t) return null;
  if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b);else r = m(Math.pow(P * Math.pow(f.r, 2) + p * Math.pow(t.r, 2), 0.5)), g = m(Math.pow(P * Math.pow(f.g, 2) + p * Math.pow(t.g, 2), 0.5)), b = m(Math.pow(P * Math.pow(f.b, 2) + p * Math.pow(t.b, 2), 0.5));
  a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
  if (h) return 'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + m(a * 1000) / 1000 : '') + ')';else return '#' + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2);
};

console.log(pSBC(-0.25, '#E5EEFC'));

var light = vars.light;
var theme = {
  light: _objectSpread2({}, light),
  inset0: "inset 0px 0px 0px rgba(0,0,0,0), inset -0px -0px 0px rgba(255,255,255,0)",
  flatToPushed: "inset 0px 0px 0px rgba(0,0,0,0.18), inset -0px -0px 0px rgba(255,255,255,0.95)",
  pulled: " ".concat(pSBC(0.3, light.main), " 1px 1px 1px 0px inset, ").concat(pSBC(-0.15, light.main), " -1px -1px 1px 0px inset, ").concat(pSBC(0.6, light.main), " -2px -2px 5px 1px, ").concat(pSBC(-0.3, light.main), " 2px 4px 6px 1px"),
  pressed: " ".concat(pSBC(0.1, light.main), " 1px 1px 1px 0px inset, ").concat(pSBC(-0.3, light.main), " -1px -1px 1px 0px inset, ").concat(pSBC(0.2, light.main), " -2px -2px 2px 1px, ").concat(pSBC(-0.3, light.main), " 2px 2px 2px 1px"),
  pushed: "".concat(pSBC(-0.4, light.main), "  3px 3px 3px 0px inset,").concat(pSBC(0.6, light.main), "  -1px -1px 2px 0px inset, ").concat(pSBC(-0.05, light.main), " -1px -1px 2px 0px  ,  ").concat(pSBC(0.3, light.main), " 1px 1px 3px 0px "),
  flat: " ".concat(pSBC(-0.3, light.main), " 1px 1px 1px 1px inset ,").concat(pSBC(0.2, light.main), " -1px  -1px 1px 1px  inset ,").concat(pSBC(0.2, light.main), " -1px -1px 0.4px 1px ,").concat(pSBC(-0.3, light.main), " -1px -1px 0.4px 1px "),
  backgroundImage: "linear-gradient(\n\t\t150deg,\n\t\t".concat(pSBC(0.03, light.main), ",\n\t\t").concat(pSBC(-0.03, light.main), "\n\t  );"),
  flatDown: "".concat(pSBC(-0.3, light.main), " 0px 0px 0px 0px inset,").concat(pSBC(0.1, light.main), "   -0px  -0px 0px 0px inset,").concat(pSBC(0.2, light.main), " -0px -0px 0px 0px , ").concat(pSBC(-0.3, light.main), " -0px -0px 0px 0px "),
  checkboxUp: "".concat(pSBC(0.2, light.main), " 1px 1px 2px 0px inset, ").concat(pSBC(-0.3, light.main), " -3px -4px 4px 2px inset, ").concat(pSBC(0.2, light.main), " -2px -2px 3px 1px, ").concat(pSBC(-0.3, light.main), " 2px 1px 4px 2px")
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-width: 150px;\n  height: 50px;\n  left: 42px;\n  top: 48px;\n  border-radius: 25px;\n  margin: 5px;\n  box-sizing: border-box;\n  outline: none;\n  border: 0;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BTN = styled(reactSpring.animated.button)(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color || theme.light.contrast;
});

var ButtonComponent = function ButtonComponent(_ref2) {
  var children = _ref2.children,
      handleClick = _ref2.handleClick,
      styles = _ref2.styles,
      color = _ref2.color,
      handleMouseDown = _ref2.handleMouseDown,
      handleMouseUp = _ref2.handleMouseUp;
  return /*#__PURE__*/React.createElement(BTN, {
    color: color,
    style: styles,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp
  }, children);
};

var ButtonExport = function ButtonExport(_ref3) {
  var active = _ref3.active,
      handleClick = _ref3.handleClick,
      children = _ref3.children,
      color = _ref3.color;
  var pulled = {
    boxShadow: theme.pulled,
    backgroundImage: "linear-gradient(\n\t\t\t150deg,\n\t\t\t".concat((theme.light.main), ",\n\t\t\t").concat((theme.light.main), "\n\t\t  )")
  };
  var pressed = {
    boxShadow: theme.pushed,
    backgroundImage: "linear-gradient(\n\t\t\t150deg,\n\t\t\t".concat((theme.light.main), ",\n\t\t\t").concat((theme.light.main), "\n\t\t  )")
  };
  var pressedFull = {
    boxShadow: theme.flat,
    backgroundImage: "linear-gradient(\n\t\t\t150deg,\n\t\t\t".concat((theme.light.main), ",\n\t\t\t").concat((theme.light.main), "\n\t\t  )")
  };

  var _useSpring = reactSpring.useSpring(function () {
    return {
      from: active ? pressed : pulled,
      config: {
        tension: 170,
        friction: 15,
        precision: 0.1
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      styles = _useSpring2[0],
      set = _useSpring2[1];

  var handleMouseDown = function handleMouseDown() {
    if (!active) set(pressedFull);
  };

  var handleMouseUp = function handleMouseUp() {
    if (!active) set(pulled);
  };

  return /*#__PURE__*/React.createElement(ButtonComponent, {
    handleClick: handleClick,
    handleMouseDown: handleMouseDown,
    handleMouseUp: handleMouseUp,
    styles: styles,
    color: color,
    active: active
  }, children);
};

exports.Button = ButtonExport;
