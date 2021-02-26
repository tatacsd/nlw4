webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");


var _jsxFileName = "D:\\Developer\\nlw4\\moveit-next\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var countdownTimeout;
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      startNewChallange = _useContext.startNewChallange; // STATES
  // Set the timer


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60),
      time = _useState[0],
      setTime = _useState[1]; // state to check if the countdown is active or not (it starts false)


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1]; // Get minutes and seconds


  var minutes = Math.floor(time / 60);
  var seconds = time % 60; // function to reduce second by second when clicked the button

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }
  /*
  Explanation:
  UseEffect is a hook for collateral damage -> when something happen do something else
  It has two parameters:
    - The first one is -> what will be executed (always a function -> arrow function)
      -- check if countdown is active and time is grater than zero
        -- execute another function (setTimeout) AFTER one second
          -- timeoutfunction -> reduce one second of the time.
    - Second one is -> when i want to execute it
      -- when active and time change.
  */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallange();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes: minutes,
      seconds: seconds,
      hasFinished: hasFinished,
      isActive: isActive,
      startCountdown: startCountdown,
      resetCountdown: resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

_s(CountdownProvider, "+PqWCON/Td/Sg2Za/BMsMLinGLw=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvdW50ZG93bkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsYW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBRSxFQUFGLENBQXRDO0FBRVAsSUFBSUMsZ0JBQUo7QUFFTyxTQUFTQyxpQkFBVCxPQUFpRTtBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7O0FBQUEsb0JBRXhDQyx3REFBVSxDQUFDQyxvRUFBRCxDQUY4QjtBQUFBLE1BRTlEQyxpQkFGOEQsZUFFOURBLGlCQUY4RCxFQUl0RTtBQUNBOzs7QUFMc0Usa0JBTS9DQyxzREFBUSxDQUFDLE1BQU0sRUFBUCxDQU51QztBQUFBLE1BTWhFQyxJQU5nRTtBQUFBLE1BTTFEQyxPQU4wRCxpQkFPdEU7OztBQVBzRSxtQkFRdENGLHNEQUFRLENBQUMsS0FBRCxDQVI4QjtBQUFBLE1BUS9ERyxRQVIrRDtBQUFBLE1BUXJEQyxXQVJxRDs7QUFBQSxtQkFTaENKLHNEQUFRLENBQUMsS0FBRCxDQVR3QjtBQUFBLE1BUy9ESyxXQVQrRDtBQUFBLE1BU2xEQyxjQVRrRCxrQkFZdEU7OztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCLENBZHNFLENBZ0J0RTs7QUFDQSxXQUFTVSxjQUFULEdBQXlCO0FBQ3ZCUCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsV0FBU1EsY0FBVCxHQUF5QjtBQUN2QkMsZ0JBQVksQ0FBQ25CLGdCQUFELENBQVo7QUFDQVUsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBRixXQUFPLENBQUMsTUFBTSxFQUFQLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFWSx5REFBUyxDQUFDLFlBQUs7QUFDYixRQUFHWCxRQUFRLElBQUlGLElBQUksR0FBRyxDQUF0QixFQUF3QjtBQUN0QlAsc0JBQWdCLEdBQUdxQixVQUFVLENBQUMsWUFBTTtBQUNsQ2IsZUFBTyxDQUFDRCxJQUFJLEdBQUMsQ0FBTixDQUFQO0FBQ0QsT0FGNEIsRUFFMUIsSUFGMEIsQ0FBN0I7QUFHRCxLQUpELE1BSU8sSUFBR0UsUUFBUSxJQUFLRixJQUFJLElBQUksQ0FBeEIsRUFBMEI7QUFDL0JLLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FGLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FMLHVCQUFpQjtBQUNsQjtBQUNGLEdBVlEsRUFVTixDQUFDSSxRQUFELEVBQVdGLElBQVgsQ0FWTSxDQUFUO0FBWUEsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFO0FBQ2hDTSxhQUFPLEVBQVBBLE9BRGdDO0FBRWhDRyxhQUFPLEVBQVBBLE9BRmdDO0FBR2hDTCxpQkFBVyxFQUFYQSxXQUhnQztBQUloQ0YsY0FBUSxFQUFSQSxRQUpnQztBQUtoQ1Esb0JBQWMsRUFBZEEsY0FMZ0M7QUFNaENDLG9CQUFjLEVBQWRBO0FBTmdDLEtBQWxDO0FBQUEsY0FRR2hCO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBOURlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGMzMzUxMjc2NzdjMzZlMDkwYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duQ29udGV4dERhdGEge1xyXG4gIG1pbnV0ZXM6IG51bWJlcjtcclxuICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbiAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQgKHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcclxuXHJcbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7IGNoaWxkcmVuIH06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyBzdGFydE5ld0NoYWxsYW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgXHJcbiAgLy8gU1RBVEVTXHJcbiAgLy8gU2V0IHRoZSB0aW1lclxyXG4gIGNvbnN0W3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogNjApO1xyXG4gIC8vIHN0YXRlIHRvIGNoZWNrIGlmIHRoZSBjb3VudGRvd24gaXMgYWN0aXZlIG9yIG5vdCAoaXQgc3RhcnRzIGZhbHNlKVxyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAvLyBHZXQgbWludXRlcyBhbmQgc2Vjb25kc1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgLy8gZnVuY3Rpb24gdG8gcmVkdWNlIHNlY29uZCBieSBzZWNvbmQgd2hlbiBjbGlja2VkIHRoZSBidXR0b25cclxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xyXG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7ICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKXtcclxuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgIHNldFRpbWUoMC4xICogNjApO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICBFeHBsYW5hdGlvbjpcclxuICBVc2VFZmZlY3QgaXMgYSBob29rIGZvciBjb2xsYXRlcmFsIGRhbWFnZSAtPiB3aGVuIHNvbWV0aGluZyBoYXBwZW4gZG8gc29tZXRoaW5nIGVsc2VcclxuICBJdCBoYXMgdHdvIHBhcmFtZXRlcnM6XHJcbiAgICAtIFRoZSBmaXJzdCBvbmUgaXMgLT4gd2hhdCB3aWxsIGJlIGV4ZWN1dGVkIChhbHdheXMgYSBmdW5jdGlvbiAtPiBhcnJvdyBmdW5jdGlvbilcclxuICAgICAgLS0gY2hlY2sgaWYgY291bnRkb3duIGlzIGFjdGl2ZSBhbmQgdGltZSBpcyBncmF0ZXIgdGhhbiB6ZXJvXHJcbiAgICAgICAgLS0gZXhlY3V0ZSBhbm90aGVyIGZ1bmN0aW9uIChzZXRUaW1lb3V0KSBBRlRFUiBvbmUgc2Vjb25kXHJcbiAgICAgICAgICAtLSB0aW1lb3V0ZnVuY3Rpb24gLT4gcmVkdWNlIG9uZSBzZWNvbmQgb2YgdGhlIHRpbWUuXHJcbiAgICAtIFNlY29uZCBvbmUgaXMgLT4gd2hlbiBpIHdhbnQgdG8gZXhlY3V0ZSBpdFxyXG4gICAgICAtLSB3aGVuIGFjdGl2ZSBhbmQgdGltZSBjaGFuZ2UuXHJcbiAgKi9cclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBpZihpc0FjdGl2ZSAmJiB0aW1lID4gMCl7XHJcbiAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKHRpbWUtMSk7XHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9IGVsc2UgaWYoaXNBY3RpdmUgJiYgIHRpbWUgPT0gMCl7XHJcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgIHN0YXJ0TmV3Q2hhbGxhbmdlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgbWludXRlcyxcclxuICAgICAgc2Vjb25kcyxcclxuICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgIGlzQWN0aXZlLFxyXG4gICAgICBzdGFydENvdW50ZG93bixcclxuICAgICAgcmVzZXRDb3VudGRvd25cclxuICAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9