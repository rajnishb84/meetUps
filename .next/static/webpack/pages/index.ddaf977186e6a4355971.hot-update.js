webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\rajni\\ReactJS\\next-starting-project\\pages\\index.js";


 // const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A first meetup',
//         image: 'https://tacchi-canvas-prod.s3.amazonaws.com/uploads/work/image/174/Fab_Meetup_-_Identity_Design_by_Benjamin_Thomas__Creative_Director_in_Tokyo.jpg',
//         address: 'some address 5, 12345, some city',
//         description: 'Details of meetup coming up'
//     },
//     {
//         id: 'm2',
//         title: 'A Second meetup',
//         image: 'https://777944.smushcdn.com/1518562/wp-content/uploads/2021/10/1600x900-1.png?lossy=1&strip=1&webp=1',
//         address: 'some address 15, 88888, some city',
//         description: 'Details of meetup coming up'
//     },
//     {
//         id: 'm3',
//         title: 'A final meetup',
//         image: 'https://777944.smushcdn.com/1518562/wp-content/uploads/2021/10/1600x900-1.png?lossy=1&strip=1&webp=1',
//         address: 'some address 8, 333333, some city',
//         description: 'Details of meetup coming up'
//     }
// ];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React JS Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "meetups for ReactJS in your city coming"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps() {
//     const client = await MongoClient.connect('mongodb+srv://rajnishkumar:Airtel@eventsdb.f5wxu.mongodb.net/meetups?retryWrites=true&w=majority');
//     const db = client.db();
//     const collection = db.collection('meetups');
//     const meetupData = await collection.find().toArray();
//     client.close();
//     return {
//         props: {
//             meetups: meetupData.map(meetup => ({
//                 title: meetup.title,
//                 image: meetup.image,
//                 address: meetup.address,
//                 id: (meetup._id).toString(),
//             }))
//         }
//     }
// }


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCLHNCQUNBLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0kscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBU0gsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQTlCU0YsUTs7QUFxRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkYWY5NzcxODZlNmE0MzU1OTcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcblxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnQSBmaXJzdCBtZWV0dXAnLFxyXG4vLyAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly90YWNjaGktY2FudmFzLXByb2QuczMuYW1hem9uYXdzLmNvbS91cGxvYWRzL3dvcmsvaW1hZ2UvMTc0L0ZhYl9NZWV0dXBfLV9JZGVudGl0eV9EZXNpZ25fYnlfQmVuamFtaW5fVGhvbWFzX19DcmVhdGl2ZV9EaXJlY3Rvcl9pbl9Ub2t5by5qcGcnLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6ICdzb21lIGFkZHJlc3MgNSwgMTIzNDUsIHNvbWUgY2l0eScsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246ICdEZXRhaWxzIG9mIG1lZXR1cCBjb21pbmcgdXAnXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAnbTInLFxyXG4vLyAgICAgICAgIHRpdGxlOiAnQSBTZWNvbmQgbWVldHVwJyxcclxuLy8gICAgICAgICBpbWFnZTogJ2h0dHBzOi8vNzc3OTQ0LnNtdXNoY2RuLmNvbS8xNTE4NTYyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzEwLzE2MDB4OTAwLTEucG5nP2xvc3N5PTEmc3RyaXA9MSZ3ZWJwPTEnLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6ICdzb21lIGFkZHJlc3MgMTUsIDg4ODg4LCBzb21lIGNpdHknLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGV0YWlscyBvZiBtZWV0dXAgY29taW5nIHVwJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogJ20zJyxcclxuLy8gICAgICAgICB0aXRsZTogJ0EgZmluYWwgbWVldHVwJyxcclxuLy8gICAgICAgICBpbWFnZTogJ2h0dHBzOi8vNzc3OTQ0LnNtdXNoY2RuLmNvbS8xNTE4NTYyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzEwLzE2MDB4OTAwLTEucG5nP2xvc3N5PTEmc3RyaXA9MSZ3ZWJwPTEnLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6ICdzb21lIGFkZHJlc3MgOCwgMzMzMzMzLCBzb21lIGNpdHknLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGV0YWlscyBvZiBtZWV0dXAgY29taW5nIHVwJ1xyXG4vLyAgICAgfVxyXG4vLyBdO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5SZWFjdCBKUyBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J21lZXR1cHMgZm9yIFJlYWN0SlMgaW4geW91ciBjaXR5IGNvbWluZycgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbi8vICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3Jham5pc2hrdW1hcjpBaXJ0ZWxAZXZlbnRzZGIuZjV3eHUubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuLy8gICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbi8vICAgICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuLy8gICAgIGNvbnN0IG1lZXR1cERhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbi8vICAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cERhdGEubWFwKG1lZXR1cCA9PiAoe1xyXG4vLyAgICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuLy8gICAgICAgICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbi8vICAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuLy8gICAgICAgICAgICAgICAgIGlkOiAobWVldHVwLl9pZCkudG9TdHJpbmcoKSxcclxuLy8gICAgICAgICAgICAgfSkpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3Jham5pc2hrdW1hcjpBaXJ0ZWxAZXZlbnRzZGIuZjV3eHUubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cERhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cERhdGEubWFwKG1lZXR1cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGlkOiAobWVldHVwLl9pZCkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==