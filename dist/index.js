"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _chevronDown = require("lucide-react/dist/esm/icons/chevron-down");
var _framerMotion = require("framer-motion");
var _go = require("react-icons/go");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ScrollDownIndicator = function ScrollDownIndicator(_ref) {
  var _ref$showOnlyOnce = _ref.showOnlyOnce,
    showOnlyOnce = _ref$showOnlyOnce === void 0 ? true : _ref$showOnlyOnce;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasScrolledPastBreakpoint = _useState4[0],
    setHasScrolledPastBreakpoint = _useState4[1];
  var SCROLLBREAK = 100;
  (0, _react.useEffect)(function () {
    var _handleScroll = function handleScroll() {
      var scrollPosition = window.scrollY;
      if (scrollPosition >= SCROLLBREAK) {
        setIsVisible(false);
        if (showOnlyOnce) {
          setHasScrolledPastBreakpoint(true);
          window.removeEventListener("scroll", _handleScroll);
        }
      } else if (!showOnlyOnce) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", _handleScroll);
    return function () {
      return window.removeEventListener("scroll", _handleScroll);
    };
  }, [showOnlyOnce]);
  if (showOnlyOnce && hasScrolledPastBreakpoint) {
    return null;
  }
  return /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, null, isVisible && /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    className: "fixed z-50 bottom-4 right-8",
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: 20
    },
    transition: {
      duration: 0.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center justify-center w-10 h-20 gap-2 py-2 border border-white rounded-3xl bg-black/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-2"
  }, /*#__PURE__*/React.createElement(_go.GoDotFill, {
    className: "text-white/60 size-6"
  })), /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    initial: {
      y: 0,
      opacity: 0
    },
    animate: {
      y: [-10, 10, -10],
      opacity: [0, 1, 0]
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    },
    className: "absolute bottom-2"
  }, /*#__PURE__*/React.createElement(_chevronDown.ChevronDown, {
    className: "text-white size-10"
  })))));
};
var _default = exports["default"] = ScrollDownIndicator;