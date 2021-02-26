webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Developer_nlw4_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Developer_nlw4_moveit_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");





var _jsxFileName = "D:\\Developer\\nlw4\\moveit-next\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




function Countdown() {
  _s();

  // import useContext from the react
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(CountdownContext);

  Object(D_Developer_nlw4_moveit_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_useContext); // Convert the int to String
  // Test if there is 2 spaces, if not add a 0 on the left (padStart)
  // Then split into 2 in array -> set one side and the other
  // ex.: 25 => "2" "5"   5 => "0"  "5"


  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(D_Developer_nlw4_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(D_Developer_nlw4_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonActive),
        onClick: resetCountdown,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
        onClick: startCountdown,
        children: "Iniciar um ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Countdown, "GEVSeSrD72hjJ3fa3BFTxaVyljk=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

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

/***/ }),

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
    children: react__WEBPACK_IMPORTED_MODULE_1__["Children"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvdW50ZG93biIsInVzZUNvbnRleHQiLCJDb3VudGRvd25Db250ZXh0IiwiU3RyaW5nIiwibWludXRlcyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRzIiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0Iiwic3R5bGVzIiwiY291bnRkb3duQ29udGFpbmVyIiwiaGFzRmluaXNoZWQiLCJjb3VudGRvd25CdXR0b24iLCJpc0FjdGl2ZSIsImNvdW50ZG93bkJ1dHRvbkFjdGl2ZSIsInJlc2V0Q291bnRkb3duIiwic3RhcnRDb3VudGRvd24iLCJjcmVhdGVDb250ZXh0IiwiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxhbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsInNldElzQWN0aXZlIiwic2V0SGFzRmluaXNoZWQiLCJNYXRoIiwiZmxvb3IiLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiQ2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBSU8sU0FBU0EsU0FBVCxHQUFvQjtBQUFBOztBQUV6QjtBQUZ5QixvQkFHZEMsd0RBQVUsQ0FBQ0MsZ0JBQUQsQ0FISTs7QUFBQSw2SkFLekI7QUFDQTtBQUNBO0FBQ0E7OztBQVJ5Qiw4QkFTU0MsTUFBTSxDQUFDQyxPQUFELENBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCLENBQXpCLEVBQTJCLEdBQTNCLEVBQWdDQyxLQUFoQyxDQUFzQyxFQUF0QyxDQVRU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QUFDWixnQkFBRCxDQUFaO0FBQ0FRLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUQsV0FBTyxDQUFDLE1BQU0sRUFBUCxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRU0seURBQVMsQ0FBQyxZQUFLO0FBQ2IsUUFBR2xCLFFBQVEsSUFBSVcsSUFBSSxHQUFHLENBQXRCLEVBQXdCO0FBQ3RCTixzQkFBZ0IsR0FBR2MsVUFBVSxDQUFDLFlBQU07QUFDbENQLGVBQU8sQ0FBQ0QsSUFBSSxHQUFDLENBQU4sQ0FBUDtBQUNELE9BRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBR0QsS0FKRCxNQUlPLElBQUdYLFFBQVEsSUFBS1csSUFBSSxJQUFJLENBQXhCLEVBQTBCO0FBQy9CRyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBRCxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBSix1QkFBaUI7QUFDbEI7QUFDRixHQVZRLEVBVU4sQ0FBQ1QsUUFBRCxFQUFXVyxJQUFYLENBVk0sQ0FBVDtBQVlBLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRTtBQUNoQ3ZCLGFBQU8sRUFBUEEsT0FEZ0M7QUFFaENLLGFBQU8sRUFBUEEsT0FGZ0M7QUFHaENLLGlCQUFXLEVBQVhBLFdBSGdDO0FBSWhDRSxjQUFRLEVBQVJBLFFBSmdDO0FBS2hDRyxvQkFBYyxFQUFkQSxjQUxnQztBQU1oQ0Qsb0JBQWMsRUFBZEE7QUFOZ0MsS0FBbEM7QUFBQSxjQVFHa0IsOENBQVFBO0FBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBOURlZCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjU1OTdkMjgyZWVhZTlhZWRlNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgIH0gIGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCl7XHJcblxyXG4gIC8vIGltcG9ydCB1c2VDb250ZXh0IGZyb20gdGhlIHJlYWN0XHJcbiAgY29uc3Qge30gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpXHJcbiAgXHJcbiAgLy8gQ29udmVydCB0aGUgaW50IHRvIFN0cmluZ1xyXG4gIC8vIFRlc3QgaWYgdGhlcmUgaXMgMiBzcGFjZXMsIGlmIG5vdCBhZGQgYSAwIG9uIHRoZSBsZWZ0IChwYWRTdGFydClcclxuICAvLyBUaGVuIHNwbGl0IGludG8gMiBpbiBhcnJheSAtPiBzZXQgb25lIHNpZGUgYW5kIHRoZSBvdGhlclxyXG4gIC8vIGV4LjogMjUgPT4gXCIyXCIgXCI1XCIgICA1ID0+IFwiMFwiICBcIjVcIlxyXG4gIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKTtcclxuICBjb25zdFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKTtcclxuICBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICB7IGhhc0ZpbmlzaGVkID8gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufVxyXG4gICAgICA+XHJcbiAgICAgICAgQ2ljbG8gZW5jZXJyYWRvXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgeyBpc0FjdGl2ZSA/IChcclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50ZG93bn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEluaWNpYXIgdW0gY2ljbG9cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICl9XHJcblxyXG4gICAgICA8Lz5cclxuICAgICl9ICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59IiwiaW1wb3J0IHsgQ2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duQ29udGV4dERhdGEge1xyXG4gIG1pbnV0ZXM6IG51bWJlcjtcclxuICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbiAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQgKHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcclxuXHJcbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7IGNoaWxkcmVuIH06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyBzdGFydE5ld0NoYWxsYW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgXHJcbiAgLy8gU1RBVEVTXHJcbiAgLy8gU2V0IHRoZSB0aW1lclxyXG4gIGNvbnN0W3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4xICogNjApO1xyXG4gIC8vIHN0YXRlIHRvIGNoZWNrIGlmIHRoZSBjb3VudGRvd24gaXMgYWN0aXZlIG9yIG5vdCAoaXQgc3RhcnRzIGZhbHNlKVxyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAvLyBHZXQgbWludXRlcyBhbmQgc2Vjb25kc1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgLy8gZnVuY3Rpb24gdG8gcmVkdWNlIHNlY29uZCBieSBzZWNvbmQgd2hlbiBjbGlja2VkIHRoZSBidXR0b25cclxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xyXG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7ICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKXtcclxuICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgIHNldFRpbWUoMC4xICogNjApO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICBFeHBsYW5hdGlvbjpcclxuICBVc2VFZmZlY3QgaXMgYSBob29rIGZvciBjb2xsYXRlcmFsIGRhbWFnZSAtPiB3aGVuIHNvbWV0aGluZyBoYXBwZW4gZG8gc29tZXRoaW5nIGVsc2VcclxuICBJdCBoYXMgdHdvIHBhcmFtZXRlcnM6XHJcbiAgICAtIFRoZSBmaXJzdCBvbmUgaXMgLT4gd2hhdCB3aWxsIGJlIGV4ZWN1dGVkIChhbHdheXMgYSBmdW5jdGlvbiAtPiBhcnJvdyBmdW5jdGlvbilcclxuICAgICAgLS0gY2hlY2sgaWYgY291bnRkb3duIGlzIGFjdGl2ZSBhbmQgdGltZSBpcyBncmF0ZXIgdGhhbiB6ZXJvXHJcbiAgICAgICAgLS0gZXhlY3V0ZSBhbm90aGVyIGZ1bmN0aW9uIChzZXRUaW1lb3V0KSBBRlRFUiBvbmUgc2Vjb25kXHJcbiAgICAgICAgICAtLSB0aW1lb3V0ZnVuY3Rpb24gLT4gcmVkdWNlIG9uZSBzZWNvbmQgb2YgdGhlIHRpbWUuXHJcbiAgICAtIFNlY29uZCBvbmUgaXMgLT4gd2hlbiBpIHdhbnQgdG8gZXhlY3V0ZSBpdFxyXG4gICAgICAtLSB3aGVuIGFjdGl2ZSBhbmQgdGltZSBjaGFuZ2UuXHJcbiAgKi9cclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBpZihpc0FjdGl2ZSAmJiB0aW1lID4gMCl7XHJcbiAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKHRpbWUtMSk7XHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9IGVsc2UgaWYoaXNBY3RpdmUgJiYgIHRpbWUgPT0gMCl7XHJcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgIHN0YXJ0TmV3Q2hhbGxhbmdlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgbWludXRlcyxcclxuICAgICAgc2Vjb25kcyxcclxuICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgIGlzQWN0aXZlLFxyXG4gICAgICBzdGFydENvdW50ZG93bixcclxuICAgICAgcmVzZXRDb3VudGRvd25cclxuICAgICB9fT5cclxuICAgICAge0NoaWxkcmVufVxyXG4gICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9