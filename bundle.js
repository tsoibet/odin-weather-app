/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: calc(10px + 0.4vw + 0.2vh);\n}\n\nbody {\n    color: white;\n    background-color: rgb(45, 116, 187);\n    transition: background-color ease-out 500ms;\n    padding: 2rem 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 2rem;\n}\n\nbody.clear {\n    background-color: rgb(45, 116, 187);\n}\n\nbody.cloud {\n    background-color: rgb(101, 124, 148);\n}\n\nbody.rain {\n    background-color: rgb(71, 109, 153);  \n}\n\nbody.snow {\n    background-color: rgb(161, 191, 209);\n}\n\n.toggleSwitch {\n    position: fixed;\n    right: 2rem;\n    width: 4.5rem;\n    height: 2.2rem;\n    border-radius: 2rem;\n    border: solid 0.15rem white;\n    background-color: rgba(0, 0, 0, 0.2);\n    transition: background-color linear 150ms;\n    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5) inset;\n    display: flex;\n    gap: 0.2rem;\n    justify-content: space-evenly;\n    align-items: center;\n    cursor: pointer;\n}\n\n.toggleSwitch:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.toggleButton {\n    position: absolute;\n    width: 1.8rem;\n    height: 1.4rem;\n    border-radius: 0.8rem;\n    background-color: white;\n    box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3);\n    transform: translateX(-50%);\n    transition: transform ease-in-out 150ms;\n}\n\n.toggleButton.imperial {\n    transform: translateX(50%);\n}\n\n.toggle {\n    z-index: 1;\n    color: black;\n}\n\n.searchBar {\n    margin: 0 auto;\n}\n\ninput, button {\n    appearance: none;\n    border: none;\n    height: 2.4rem;\n    padding: 0.5rem 1rem;\n}\n\ninput:focus {\n    outline: none;\n}\n\ninput[type=\"search\"] {\n    background-color: white;\n    color: black;\n}\n\nbutton[type=\"submit\"] {\n    cursor: pointer;\n    background-color: rgb(109, 109, 109);\n    color: white;\n    transition: background-color linear 300ms;\n}\n\nbutton[type=\"submit\"]::after {\n    content: \">\";\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgb(73, 73, 73);\n}\n\n.weatherInfo {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.currentWeather, .weatherForecast {\n    background-color: rgba(0, 0, 0, 20%);\n    opacity: 100;\n    transition: all linear 500ms;\n    cursor: default;\n}\n\n.currentWeather.fadeIn, .weatherForecast.fadeIn {\n    opacity: 0;\n}\n\n.currentWeather:hover, .weatherForecast:hover {\n    background-color: rgba(0, 0, 0, 15%);\n}\n\n.currentWeather {\n    margin: auto;\n    width: max-content;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    align-items: center;\n}\n\n.currentWeather .cityName {\n    font-size: 1.8rem;\n}\n\n.currentWeather .temp {\n    font-size: 5rem;\n}\n\n.degree.metric::after {\n    content: \"°C\";\n    font-size: 0.6em;\n}\n\n.degree.imperial::after {\n    content: \"°F\";\n    font-size: 0.6em;\n}\n\n.currentWeather img {\n    width: 8rem;\n    height: 8rem;\n    margin-top: -0.6rem;\n    margin-bottom: -1.2rem;\n}\n\n.weatherForecast img {\n    width: 4rem;\n    height: 4rem;\n    margin-top: -0.2rem;\n    margin-bottom: -0.2rem;\n}\n\n.infoRow {\n    display: flex;\n    gap: 0.5rem;\n    opacity: 0.85;\n}\n\n.windSpeed::before {\n    content: \"Wind: \";\n}\n\n.windSpeed.metric::after {\n    content: \"m/s\";\n    font-size: 0.8em;\n}\n\n.windSpeed.imperial::after {\n    content: \"mph\";\n    font-size: 0.8em;\n}\n\n.humidity::before {\n    content: \"Humid: \";\n}\n\n.humidity::after {\n    content: \"%\";\n    font-size: 0.8em;\n}\n\n.maxTemp::before {\n    content: \"H: \";\n}\n\n.minTemp::before {\n    content: \"L: \";\n}\n\n.maxTemp::after, .minTemp::after {\n    content: \"°\";\n}\n\n.weatherForecast {\n    margin: auto;\n    width: max-content;\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.forecastBlock {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n    align-items: center;\n}\n\n.weatherForecast .time {\n    font-size: 0.9rem;\n}\n\n.weatherForecast .temp {\n    font-size: 1.5rem;\n}\n\n.weatherForecast .windSpeed,\n.weatherForecast .humidity {\n    font-size: 0.8rem;\n}\n\n.error {\n    color: white;\n    font-size: 1.2rem;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n}\n\n.error.message {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.footer {\n    margin: 0 auto;\n    font-size: 0.9rem;\n}\n\n.loading {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    border: 0.8rem solid rgba(0, 0, 0, 20%);\n    border-top: 0.8rem solid white;\n    animation: spin 1s linear infinite;\n}\n  \n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,yCAAyC;IACzC,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,mCAAmC;IACnC,2CAA2C;IAC3C,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,2BAA2B;IAC3B,oCAAoC;IACpC,yCAAyC;IACzC,yDAAyD;IACzD,aAAa;IACb,WAAW;IACX,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,qBAAqB;IACrB,uBAAuB;IACvB,mDAAmD;IACnD,2BAA2B;IAC3B,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,oCAAoC;IACpC,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,sDAAsD;IACtD,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,sDAAsD;AAC1D;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,YAAY;;IAEZ,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uCAAuC;IACvC,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,KAAK,uBAAuB,EAAE;IAC9B,OAAO,yBAAyB,EAAE;AACtC","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: calc(10px + 0.4vw + 0.2vh);\n}\n\nbody {\n    color: white;\n    background-color: rgb(45, 116, 187);\n    transition: background-color ease-out 500ms;\n    padding: 2rem 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 2rem;\n}\n\nbody.clear {\n    background-color: rgb(45, 116, 187);\n}\n\nbody.cloud {\n    background-color: rgb(101, 124, 148);\n}\n\nbody.rain {\n    background-color: rgb(71, 109, 153);  \n}\n\nbody.snow {\n    background-color: rgb(161, 191, 209);\n}\n\n.toggleSwitch {\n    position: fixed;\n    right: 2rem;\n    width: 4.5rem;\n    height: 2.2rem;\n    border-radius: 2rem;\n    border: solid 0.15rem white;\n    background-color: rgba(0, 0, 0, 0.2);\n    transition: background-color linear 150ms;\n    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5) inset;\n    display: flex;\n    gap: 0.2rem;\n    justify-content: space-evenly;\n    align-items: center;\n    cursor: pointer;\n}\n\n.toggleSwitch:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.toggleButton {\n    position: absolute;\n    width: 1.8rem;\n    height: 1.4rem;\n    border-radius: 0.8rem;\n    background-color: white;\n    box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3);\n    transform: translateX(-50%);\n    transition: transform ease-in-out 150ms;\n}\n\n.toggleButton.imperial {\n    transform: translateX(50%);\n}\n\n.toggle {\n    z-index: 1;\n    color: black;\n}\n\n.searchBar {\n    margin: 0 auto;\n}\n\ninput, button {\n    appearance: none;\n    border: none;\n    height: 2.4rem;\n    padding: 0.5rem 1rem;\n}\n\ninput:focus {\n    outline: none;\n}\n\ninput[type=\"search\"] {\n    background-color: white;\n    color: black;\n}\n\nbutton[type=\"submit\"] {\n    cursor: pointer;\n    background-color: rgb(109, 109, 109);\n    color: white;\n    transition: background-color linear 300ms;\n}\n\nbutton[type=\"submit\"]::after {\n    content: \">\";\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgb(73, 73, 73);\n}\n\n.weatherInfo {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.currentWeather, .weatherForecast {\n    background-color: rgba(0, 0, 0, 20%);\n    opacity: 100;\n    transition: all linear 500ms;\n    cursor: default;\n}\n\n.currentWeather.fadeIn, .weatherForecast.fadeIn {\n    opacity: 0;\n}\n\n.currentWeather:hover, .weatherForecast:hover {\n    background-color: rgba(0, 0, 0, 15%);\n}\n\n.currentWeather {\n    margin: auto;\n    width: max-content;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    align-items: center;\n}\n\n.currentWeather .cityName {\n    font-size: 1.8rem;\n}\n\n.currentWeather .temp {\n    font-size: 5rem;\n}\n\n.degree.metric::after {\n    content: \"°C\";\n    font-size: 0.6em;\n}\n\n.degree.imperial::after {\n    content: \"°F\";\n    font-size: 0.6em;\n}\n\n.currentWeather img {\n    width: 8rem;\n    height: 8rem;\n    margin-top: -0.6rem;\n    margin-bottom: -1.2rem;\n}\n\n.weatherForecast img {\n    width: 4rem;\n    height: 4rem;\n    margin-top: -0.2rem;\n    margin-bottom: -0.2rem;\n}\n\n.infoRow {\n    display: flex;\n    gap: 0.5rem;\n    opacity: 0.85;\n}\n\n.windSpeed::before {\n    content: \"Wind: \";\n}\n\n.windSpeed.metric::after {\n    content: \"m/s\";\n    font-size: 0.8em;\n}\n\n.windSpeed.imperial::after {\n    content: \"mph\";\n    font-size: 0.8em;\n}\n\n.humidity::before {\n    content: \"Humid: \";\n}\n\n.humidity::after {\n    content: \"%\";\n    font-size: 0.8em;\n}\n\n.maxTemp::before {\n    content: \"H: \";\n}\n\n.minTemp::before {\n    content: \"L: \";\n}\n\n.maxTemp::after, .minTemp::after {\n    content: \"°\";\n}\n\n.weatherForecast {\n    margin: auto;\n    width: max-content;\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.forecastBlock {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n    align-items: center;\n}\n\n.weatherForecast .time {\n    font-size: 0.9rem;\n}\n\n.weatherForecast .temp {\n    font-size: 1.5rem;\n}\n\n.weatherForecast .windSpeed,\n.weatherForecast .humidity {\n    font-size: 0.8rem;\n}\n\n.error {\n    color: white;\n    font-size: 1.2rem;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n}\n\n.error.message {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.footer {\n    margin: 0 auto;\n    font-size: 0.9rem;\n}\n\n.loading {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    border: 0.8rem solid rgba(0, 0, 0, 20%);\n    border-top: 0.8rem solid white;\n    animation: spin 1s linear infinite;\n}\n  \n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/homepageDOM.js":
/*!****************************!*\
  !*** ./src/homepageDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHomepage)
/* harmony export */ });
/* harmony import */ var _weatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherApi */ "./src/weatherApi.js");


const initialLocation = 'Tokyo';

function renderHomepage() {
  const body = document.querySelector('body');

  const searchBar = document.createElement('div');
  searchBar.classList.add('searchBar');

  const toggleSwitch = document.createElement('div');
  toggleSwitch.classList.add('toggleSwitch');
  toggleSwitch.addEventListener('click', () => {
    toggleUnit();
    const city = document.querySelector('.weatherInfo .cityName').textContent;
    displayLoading();
    (0,_weatherApi__WEBPACK_IMPORTED_MODULE_0__["default"])(city, window.unit)
      .then((data) => renderWeatherInfo(data))
      .catch((error) => renderErrorMessage(error.message));
  });
  const toggleButton = document.createElement('div');
  toggleButton.classList.add('toggleButton');
  toggleSwitch.appendChild(toggleButton);
  const cToggle = document.createElement('div');
  cToggle.textContent = '°C';
  cToggle.classList.add('toggle');
  toggleSwitch.appendChild(cToggle);
  const fToggle = document.createElement('div');
  fToggle.textContent = '°F';
  fToggle.classList.add('toggle');
  toggleSwitch.appendChild(fToggle);
  body.appendChild(toggleSwitch);

  const searchForm = document.createElement('form');
  searchForm.addEventListener('submit', (event) => {
    if (searchForm.checkValidity()) {
      displayLoading();
      (0,_weatherApi__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBox.value, window.unit)
        .then((data) => renderWeatherInfo(data))
        .catch((error) => renderErrorMessage(error.message));
    }
    searchBox.value = '';
    event.preventDefault();
  });

  const searchBox = document.createElement('input');
  searchBox.type = 'search';
  searchBox.name = 'searchBox';
  searchBox.required = true;
  searchBox.autocomplete = 'off';
  searchBox.placeholder = 'City name';
  searchForm.appendChild(searchBox);

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchForm.appendChild(searchButton);

  searchBar.appendChild(searchForm);
  body.appendChild(searchBar);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weatherInfo');

  body.appendChild(weatherInfo);

  displayLoading();
  (0,_weatherApi__WEBPACK_IMPORTED_MODULE_0__["default"])(initialLocation, window.unit)
    .then((data) => renderWeatherInfo(data))
    .catch((error) => renderErrorMessage(error.message));

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Created by Betsy @ The Odin Project 2022';
  body.appendChild(footer);
}

function renderWeatherInfo(data) {
  clearWeatherInfo();
  renderCurrentWeather(data[0]);
  renderWeatherForecast(data[1]);
  setTimeout(() => {
    const currentWeather = document.querySelector('.currentWeather');
    currentWeather.classList.remove('fadeIn');
    const weatherForecast = document.querySelector('.weatherForecast');
    weatherForecast.classList.remove('fadeIn');
  }, 100);
}

function clearWeatherInfo() {
  const weatherInfo = document.querySelector('.weatherInfo');
  weatherInfo.textContent = '';
}

function renderCurrentWeather(data) {
  const weatherInfo = document.querySelector('.weatherInfo');
  const currentWeather = document.createElement('div');
  currentWeather.classList.add('currentWeather');
  currentWeather.classList.add('fadeIn');

  const cityName = document.createElement('div');
  cityName.classList.add('cityName');
  cityName.textContent = data.cityName;
  currentWeather.appendChild(cityName);

  const weather = document.createElement('div');
  const icon = new Image();
  // icon.src = `../weatherIcon/${data.icon}.png`;
  // For Github Pages:
  icon.src = `./weatherIcon/${data.icon}.png`;
  weather.appendChild(icon);
  currentWeather.appendChild(weather);

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.classList.add('degree');
  if (window.unit === 'metric') {
    temp.classList.add('metric');
    temp.textContent = data.temp.toFixed(1);
  } else if (window.unit === 'imperial') {
    temp.classList.add('imperial');
    temp.textContent = data.temp.toFixed();
  }
  currentWeather.appendChild(temp);

  const otherInfo = document.createElement('div');
  otherInfo.classList.add('infoRow');
  const windSpeed = document.createElement('div');
  windSpeed.classList.add('windSpeed');
  if (window.unit === 'metric') {
    windSpeed.classList.add('metric');
  } else if (window.unit === 'imperial') {
    windSpeed.classList.add('imperial');
  }
  windSpeed.textContent = data.windSpeed.toFixed();
  otherInfo.appendChild(windSpeed);
  const humidity = document.createElement('div');
  humidity.classList.add('humidity');
  humidity.textContent = data.humidity.toFixed();
  otherInfo.appendChild(humidity);
  currentWeather.appendChild(otherInfo);

  const dayTemp = document.createElement('div');
  dayTemp.classList.add('infoRow');
  const maxTemp = document.createElement('div');
  maxTemp.classList.add('maxTemp');
  maxTemp.classList.add('degree');
  if (window.unit === 'metric') {
    maxTemp.classList.add('metric');
    maxTemp.textContent = data.maxTemp.toFixed(1);
  } else if (window.unit === 'imperial') {
    maxTemp.classList.add('imperial');
    maxTemp.textContent = data.maxTemp.toFixed();
  }
  dayTemp.appendChild(maxTemp);
  const minTemp = document.createElement('div');
  minTemp.classList.add('minTemp');
  minTemp.classList.add('degree');
  if (window.unit === 'metric') {
    minTemp.classList.add('metric');
    minTemp.textContent = data.minTemp.toFixed(1);
  } else if (window.unit === 'imperial') {
    minTemp.classList.add('imperial');
    minTemp.textContent = data.minTemp.toFixed();
  }
  dayTemp.appendChild(minTemp);
  currentWeather.appendChild(dayTemp);
  weatherInfo.appendChild(currentWeather);

  const body = document.querySelector('body');
  if (body.classList.length) {
    body.classList.remove(body.classList.item(0));
  }
  if (data.weather.includes('Clear')) {
    body.classList.add('clear');
  } else if (data.weather.includes('Cloud')) {
    body.classList.add('cloud');
  } else if (data.weather.includes('Rain')) {
    body.classList.add('rain');
  } else if (data.weather.includes('Snow')) {
    body.classList.add('snow');
  }
}

function renderWeatherForecast(data) {
  const weatherInfo = document.querySelector('.weatherInfo');
  const weatherForecast = document.createElement('div');
  weatherForecast.classList.add('weatherForecast');
  weatherForecast.classList.add('fadeIn');

  for (const item of data) {
    const forecast = document.createElement('div');
    forecast.classList.add('forecastBlock');

    const time = document.createElement('div');
    time.classList.add('time');
    time.textContent = hour24to12(item.localTime);
    forecast.appendChild(time);

    const weather = document.createElement('div');
    const icon = new Image();
    // icon.src = `../weatherIcon/${item.icon}.png`;
    // For Github Pages:
    icon.src = `./weatherIcon/${item.icon}.png`;
    weather.appendChild(icon);
    forecast.appendChild(weather);

    const temp = document.createElement('div');
    temp.classList.add('temp');
    temp.classList.add('degree');
    if (window.unit === 'metric') {
      temp.classList.add('metric');
      temp.textContent = item.temp.toFixed(1);
    } else if (window.unit === 'imperial') {
      temp.classList.add('imperial');
      temp.textContent = item.temp.toFixed();
    }
    forecast.appendChild(temp);

    const windSpeed = document.createElement('div');
    windSpeed.classList.add('windSpeed');
    if (window.unit === 'metric') {
      windSpeed.classList.add('metric');
    } else if (window.unit === 'imperial') {
      windSpeed.classList.add('imperial');
    }
    windSpeed.textContent = item.windSpeed.toFixed();
    forecast.appendChild(windSpeed);

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    humidity.textContent = item.humidity;
    forecast.appendChild(humidity);

    weatherForecast.appendChild(forecast);
    weatherInfo.appendChild(weatherForecast);
  }
}

function renderErrorMessage(errMsg) {
  clearWeatherInfo();
  const weatherInfo = document.querySelector('.weatherInfo');

  const error = document.createElement('div');
  error.classList.add('error');
  error.textContent = 'Oops, something went wrong. Try again!';
  weatherInfo.appendChild(error);

  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error');
  errorMessage.classList.add('message');
  errorMessage.textContent = `Error message: ${errMsg}`;
  weatherInfo.appendChild(errorMessage);
}

function hour24to12(hour) {
  const end = (hour >= 12) ? 'PM' : 'AM';
  if (hour !== 12) {
    hour %= 12;
  }
  return hour + end;
}

function toggleUnit() {
  const toggleButton = document.querySelector('.toggleButton');
  if (window.unit === 'imperial') {
    window.unit = 'metric';
    if (toggleButton.classList.contains('imperial')) {
      toggleButton.classList.remove('imperial');
    }
  } else {
    window.unit = 'imperial';
    toggleButton.classList.add('imperial');
  }
}

function displayLoading() {
  clearWeatherInfo();
  const weatherInfo = document.querySelector('.weatherInfo');
  const loading = document.createElement('div');
  loading.classList.add('loading');
  weatherInfo.appendChild(loading);
}


/***/ }),

/***/ "./src/weatherApi.js":
/*!***************************!*\
  !*** ./src/weatherApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherInfo)
/* harmony export */ });
// const API_KEY = '667974092ff79de9e866ec77f51b5fb3';

async function getWeatherInfo(cityName, unit) {
  const data = await Promise.all([getCurrentWeather(cityName, unit), getWeatherForecast(cityName, unit)]);
  return processData(data, unit);
}

async function getCurrentWeather(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${window.API_KEY}&units=${unit}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

async function getWeatherForecast(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${window.API_KEY}&units=${unit}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

function processData(dataArray, unit) {
  const currentObject = {
    cityName: dataArray[0].name,
    displayUnit: unit,
    temp: dataArray[0].main.temp,
    weather: dataArray[0].weather[0].main,
    icon: dataArray[0].weather[0].icon,
    windSpeed: dataArray[0].wind.speed,
    humidity: dataArray[0].main.humidity,
    maxTemp: dataArray[0].main.temp_max,
    minTemp: dataArray[0].main.temp_min,
  };

  const forecastObjectArray = [];
  for (let i = 0; i < 6; i += 1) {
    const dateObject = new Date((dataArray[1].list[i].dt + dataArray[1].city.timezone) * 1000);
    const object = {
      localTime: dateObject.getUTCHours(),
      temp: dataArray[1].list[i].main.temp,
      weather: dataArray[1].list[i].weather[0].main,
      icon: dataArray[1].list[i].weather[0].icon,
      windSpeed: dataArray[1].list[i].wind.speed,
      humidity: dataArray[1].list[i].main.humidity,
    };
    forecastObjectArray.push(object);
  }

  return [currentObject, forecastObjectArray];
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepageDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepageDOM */ "./src/homepageDOM.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const apiKey = prompt("1. Get a free api key at https://openweathermap.org\n2. Enter your api key:");
window.API_KEY = apiKey;
window.unit = 'metric';
(0,_homepageDOM__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFB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LFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5QztBQUNBLGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6UkE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBb0YsU0FBUyxTQUFTLGVBQWUsU0FBUyxLQUFLO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRixTQUFTLFNBQVMsZUFBZSxTQUFTLEtBQUs7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUNyQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0Esd0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9ob21lcGFnZURPTS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJBcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDAuNHZ3ICsgMC4ydmgpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDExNiwgMTg3KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCA1MDBtcztcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbmJvZHkuY2xlYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDExNiwgMTg3KTtcXG59XFxuXFxuYm9keS5jbG91ZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDEyNCwgMTQ4KTtcXG59XFxuXFxuYm9keS5yYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxMDksIDE1Myk7ICBcXG59XFxuXFxuYm9keS5zbm93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTkxLCAyMDkpO1xcbn1cXG5cXG4udG9nZ2xlU3dpdGNoIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogc29saWQgMC4xNXJlbSB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGxpbmVhciAxNTBtcztcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjNyZW0gcmdiYSgwLCAwLCAwLCAwLjUpIGluc2V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZ2dsZVN3aXRjaDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnRvZ2dsZUJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMTUwbXM7XFxufVxcblxcbi50b2dnbGVCdXR0b24uaW1wZXJpYWwge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNlYXJjaEJhciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDIuNHJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEwOSwgMTA5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGxpbmVhciAzMDBtcztcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCI+XFxcIjtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA3MywgNzMpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyLCAud2VhdGhlckZvcmVjYXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAyMCUpO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgNTAwbXM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyLmZhZGVJbiwgLndlYXRoZXJGb3JlY2FzdC5mYWRlSW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXI6aG92ZXIsIC53ZWF0aGVyRm9yZWNhc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDE1JSk7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB0ZXh0LXNoYWRvdzogMC4xNXJlbSAwLjE1cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciAuY2l0eU5hbWUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIC50ZW1wIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4uZGVncmVlLm1ldHJpYzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjZlbTtcXG59XFxuXFxuLmRlZ3JlZS5pbXBlcmlhbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjZlbTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIGltZyB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIG1hcmdpbi10b3A6IC0wLjZyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC0xLjJyZW07XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgaW1nIHtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTAuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMnJlbTtcXG59XFxuXFxuLmluZm9Sb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLndpbmRTcGVlZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIldpbmQ6IFxcXCI7XFxufVxcblxcbi53aW5kU3BlZWQubWV0cmljOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJtL3NcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4ud2luZFNwZWVkLmltcGVyaWFsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJtcGhcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4uaHVtaWRpdHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJIdW1pZDogXFxcIjtcXG59XFxuXFxuLmh1bWlkaXR5OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIlXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLm1heFRlbXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJIOiBcXFwiO1xcbn1cXG5cXG4ubWluVGVtcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkw6IFxcXCI7XFxufVxcblxcbi5tYXhUZW1wOjphZnRlciwgLm1pblRlbXA6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIsKwXFxcIjtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JlY2FzdEJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgLnRpbWUge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCAudGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IC53aW5kU3BlZWQsXFxuLndlYXRoZXJGb3JlY2FzdCAuaHVtaWRpdHkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMTVyZW0gMC4xNXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uZXJyb3IubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDAuOHJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDIwJSk7XFxuICAgIGJvcmRlci10b3A6IDAuOHJlbSBzb2xpZCB3aGl0ZTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuICBcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVB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QUVaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDAuNHZ3ICsgMC4ydmgpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDExNiwgMTg3KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCA1MDBtcztcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbmJvZHkuY2xlYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDExNiwgMTg3KTtcXG59XFxuXFxuYm9keS5jbG91ZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDEyNCwgMTQ4KTtcXG59XFxuXFxuYm9keS5yYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxMDksIDE1Myk7ICBcXG59XFxuXFxuYm9keS5zbm93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTkxLCAyMDkpO1xcbn1cXG5cXG4udG9nZ2xlU3dpdGNoIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogc29saWQgMC4xNXJlbSB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGxpbmVhciAxNTBtcztcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjNyZW0gcmdiYSgwLCAwLCAwLCAwLjUpIGluc2V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZ2dsZVN3aXRjaDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnRvZ2dsZUJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgMTUwbXM7XFxufVxcblxcbi50b2dnbGVCdXR0b24uaW1wZXJpYWwge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNlYXJjaEJhciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDIuNHJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEwOSwgMTA5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGxpbmVhciAzMDBtcztcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCI+XFxcIjtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA3MywgNzMpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyLCAud2VhdGhlckZvcmVjYXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAyMCUpO1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgNTAwbXM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyLmZhZGVJbiwgLndlYXRoZXJGb3JlY2FzdC5mYWRlSW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXI6aG92ZXIsIC53ZWF0aGVyRm9yZWNhc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDE1JSk7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB0ZXh0LXNoYWRvdzogMC4xNXJlbSAwLjE1cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciAuY2l0eU5hbWUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIC50ZW1wIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4uZGVncmVlLm1ldHJpYzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiwrBDXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjZlbTtcXG59XFxuXFxuLmRlZ3JlZS5pbXBlcmlhbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiwrBGXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjZlbTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIGltZyB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIG1hcmdpbi10b3A6IC0wLjZyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC0xLjJyZW07XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgaW1nIHtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTAuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMnJlbTtcXG59XFxuXFxuLmluZm9Sb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuLndpbmRTcGVlZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIldpbmQ6IFxcXCI7XFxufVxcblxcbi53aW5kU3BlZWQubWV0cmljOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJtL3NcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4ud2luZFNwZWVkLmltcGVyaWFsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJtcGhcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4uaHVtaWRpdHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJIdW1pZDogXFxcIjtcXG59XFxuXFxuLmh1bWlkaXR5OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIlXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLm1heFRlbXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJIOiBcXFwiO1xcbn1cXG5cXG4ubWluVGVtcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkw6IFxcXCI7XFxufVxcblxcbi5tYXhUZW1wOjphZnRlciwgLm1pblRlbXA6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIsKwXFxcIjtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JlY2FzdEJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgLnRpbWUge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCAudGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IC53aW5kU3BlZWQsXFxuLndlYXRoZXJGb3JlY2FzdCAuaHVtaWRpdHkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMTVyZW0gMC4xNXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uZXJyb3IubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDAuOHJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDIwJSk7XFxuICAgIGJvcmRlci10b3A6IDAuOHJlbSBzb2xpZCB3aGl0ZTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuICBcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldFdlYXRoZXJJbmZvIGZyb20gJy4vd2VhdGhlckFwaSc7XG5cbmNvbnN0IGluaXRpYWxMb2NhdGlvbiA9ICdUb2t5byc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhvbWVwYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoQmFyJyk7XG5cbiAgY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZ2dsZVN3aXRjaC5jbGFzc0xpc3QuYWRkKCd0b2dnbGVTd2l0Y2gnKTtcbiAgdG9nZ2xlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZVVuaXQoKTtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJJbmZvIC5jaXR5TmFtZScpLnRleHRDb250ZW50O1xuICAgIGRpc3BsYXlMb2FkaW5nKCk7XG4gICAgZ2V0V2VhdGhlckluZm8oY2l0eSwgd2luZG93LnVuaXQpXG4gICAgICAudGhlbigoZGF0YSkgPT4gcmVuZGVyV2VhdGhlckluZm8oZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZW5kZXJFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSkpO1xuICB9KTtcbiAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGVCdXR0b24nKTtcbiAgdG9nZ2xlU3dpdGNoLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XG4gIGNvbnN0IGNUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY1RvZ2dsZS50ZXh0Q29udGVudCA9ICfCsEMnO1xuICBjVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuICB0b2dnbGVTd2l0Y2guYXBwZW5kQ2hpbGQoY1RvZ2dsZSk7XG4gIGNvbnN0IGZUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZlRvZ2dsZS50ZXh0Q29udGVudCA9ICfCsEYnO1xuICBmVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuICB0b2dnbGVTd2l0Y2guYXBwZW5kQ2hpbGQoZlRvZ2dsZSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9nZ2xlU3dpdGNoKTtcblxuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGlmIChzZWFyY2hGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgZGlzcGxheUxvYWRpbmcoKTtcbiAgICAgIGdldFdlYXRoZXJJbmZvKHNlYXJjaEJveC52YWx1ZSwgd2luZG93LnVuaXQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiByZW5kZXJXZWF0aGVySW5mbyhkYXRhKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVuZGVyRXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgc2VhcmNoQm94LnZhbHVlID0gJyc7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQm94LnR5cGUgPSAnc2VhcmNoJztcbiAgc2VhcmNoQm94Lm5hbWUgPSAnc2VhcmNoQm94JztcbiAgc2VhcmNoQm94LnJlcXVpcmVkID0gdHJ1ZTtcbiAgc2VhcmNoQm94LmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICBzZWFyY2hCb3gucGxhY2Vob2xkZXIgPSAnQ2l0eSBuYW1lJztcbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG5cbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuICBib2R5LmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG5cbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnd2VhdGhlckluZm8nKTtcblxuICBib2R5LmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvKTtcblxuICBkaXNwbGF5TG9hZGluZygpO1xuICBnZXRXZWF0aGVySW5mbyhpbml0aWFsTG9jYXRpb24sIHdpbmRvdy51bml0KVxuICAgIC50aGVuKChkYXRhKSA9PiByZW5kZXJXZWF0aGVySW5mbyhkYXRhKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiByZW5kZXJFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSkpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEJldHN5IEAgVGhlIE9kaW4gUHJvamVjdCAyMDIyJztcbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJXZWF0aGVySW5mbyhkYXRhKSB7XG4gIGNsZWFyV2VhdGhlckluZm8oKTtcbiAgcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YVswXSk7XG4gIHJlbmRlcldlYXRoZXJGb3JlY2FzdChkYXRhWzFdKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFdlYXRoZXInKTtcbiAgICBjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW4nKTtcbiAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckZvcmVjYXN0Jyk7XG4gICAgd2VhdGhlckZvcmVjYXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbicpO1xuICB9LCAxMDApO1xufVxuXG5mdW5jdGlvbiBjbGVhcldlYXRoZXJJbmZvKCkge1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVySW5mbycpO1xuICB3ZWF0aGVySW5mby50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJJbmZvJyk7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnRXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRXZWF0aGVyJyk7XG4gIGN1cnJlbnRXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xuXG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHlOYW1lJyk7XG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gZGF0YS5jaXR5TmFtZTtcbiAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuXG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAvLyBpY29uLnNyYyA9IGAuLi93ZWF0aGVySWNvbi8ke2RhdGEuaWNvbn0ucG5nYDtcbiAgLy8gRm9yIEdpdGh1YiBQYWdlczpcbiAgaWNvbi5zcmMgPSBgLi93ZWF0aGVySWNvbi8ke2RhdGEuaWNvbn0ucG5nYDtcbiAgd2VhdGhlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCdkZWdyZWUnKTtcbiAgaWYgKHdpbmRvdy51bml0ID09PSAnbWV0cmljJykge1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGEudGVtcC50b0ZpeGVkKDEpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLnRlbXAudG9GaXhlZCgpO1xuICB9XG4gIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKHRlbXApO1xuXG4gIGNvbnN0IG90aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnaW5mb1JvdycpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmRTcGVlZCcpO1xuICBpZiAod2luZG93LnVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ21ldHJpYycpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gIH1cbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gZGF0YS53aW5kU3BlZWQudG9GaXhlZCgpO1xuICBvdGhlckluZm8uYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBkYXRhLmh1bWlkaXR5LnRvRml4ZWQoKTtcbiAgb3RoZXJJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQob3RoZXJJbmZvKTtcblxuICBjb25zdCBkYXlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRheVRlbXAuY2xhc3NMaXN0LmFkZCgnaW5mb1JvdycpO1xuICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnbWF4VGVtcCcpO1xuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ2RlZ3JlZScpO1xuICBpZiAod2luZG93LnVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gZGF0YS5tYXhUZW1wLnRvRml4ZWQoMSk7XG4gIH0gZWxzZSBpZiAod2luZG93LnVuaXQgPT09ICdpbXBlcmlhbCcpIHtcbiAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGRhdGEubWF4VGVtcC50b0ZpeGVkKCk7XG4gIH1cbiAgZGF5VGVtcC5hcHBlbmRDaGlsZChtYXhUZW1wKTtcbiAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ21pblRlbXAnKTtcbiAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdkZWdyZWUnKTtcbiAgaWYgKHdpbmRvdy51bml0ID09PSAnbWV0cmljJykge1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGRhdGEubWluVGVtcC50b0ZpeGVkKDEpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBkYXRhLm1pblRlbXAudG9GaXhlZCgpO1xuICB9XG4gIGRheVRlbXAuYXBwZW5kQ2hpbGQobWluVGVtcCk7XG4gIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKGRheVRlbXApO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcik7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgaWYgKGJvZHkuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShib2R5LmNsYXNzTGlzdC5pdGVtKDApKTtcbiAgfVxuICBpZiAoZGF0YS53ZWF0aGVyLmluY2x1ZGVzKCdDbGVhcicpKSB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdjbGVhcicpO1xuICB9IGVsc2UgaWYgKGRhdGEud2VhdGhlci5pbmNsdWRlcygnQ2xvdWQnKSkge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnY2xvdWQnKTtcbiAgfSBlbHNlIGlmIChkYXRhLndlYXRoZXIuaW5jbHVkZXMoJ1JhaW4nKSkge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgncmFpbicpO1xuICB9IGVsc2UgaWYgKGRhdGEud2VhdGhlci5pbmNsdWRlcygnU25vdycpKSB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdzbm93Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyV2VhdGhlckZvcmVjYXN0KGRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckluZm8nKTtcbiAgY29uc3Qgd2VhdGhlckZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyRm9yZWNhc3QnKTtcbiAgd2VhdGhlckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xuXG4gIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdEJsb2NrJyk7XG5cbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgdGltZS50ZXh0Q29udGVudCA9IGhvdXIyNHRvMTIoaXRlbS5sb2NhbFRpbWUpO1xuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBpY29uLnNyYyA9IGAuLi93ZWF0aGVySWNvbi8ke2l0ZW0uaWNvbn0ucG5nYDtcbiAgICAvLyBGb3IgR2l0aHViIFBhZ2VzOlxuICAgIGljb24uc3JjID0gYC4vd2VhdGhlckljb24vJHtpdGVtLmljb259LnBuZ2A7XG4gICAgd2VhdGhlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZCh3ZWF0aGVyKTtcblxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2RlZ3JlZScpO1xuICAgIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gaXRlbS50ZW1wLnRvRml4ZWQoMSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cudW5pdCA9PT0gJ2ltcGVyaWFsJykge1xuICAgICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGl0ZW0udGVtcC50b0ZpeGVkKCk7XG4gICAgfVxuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKHRlbXApO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmRTcGVlZCcpO1xuICAgIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgICB9XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gaXRlbS53aW5kU3BlZWQudG9GaXhlZCgpO1xuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBpdGVtLmh1bWlkaXR5O1xuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICAgIHdlYXRoZXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdCk7XG4gICAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckZvcmVjYXN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJFcnJvck1lc3NhZ2UoZXJyTXNnKSB7XG4gIGNsZWFyV2VhdGhlckluZm8oKTtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckluZm8nKTtcblxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICBlcnJvci50ZXh0Q29udGVudCA9ICdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZy4gVHJ5IGFnYWluISc7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGVycm9yKTtcblxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGBFcnJvciBtZXNzYWdlOiAke2Vyck1zZ31gO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBob3VyMjR0bzEyKGhvdXIpIHtcbiAgY29uc3QgZW5kID0gKGhvdXIgPj0gMTIpID8gJ1BNJyA6ICdBTSc7XG4gIGlmIChob3VyICE9PSAxMikge1xuICAgIGhvdXIgJT0gMTI7XG4gIH1cbiAgcmV0dXJuIGhvdXIgKyBlbmQ7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXQoKSB7XG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVCdXR0b24nKTtcbiAgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgd2luZG93LnVuaXQgPSAnbWV0cmljJztcbiAgICBpZiAodG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaW1wZXJpYWwnKSkge1xuICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcGVyaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy51bml0ID0gJ2ltcGVyaWFsJztcbiAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TG9hZGluZygpIHtcbiAgY2xlYXJXZWF0aGVySW5mbygpO1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVySW5mbycpO1xuICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChsb2FkaW5nKTtcbn1cbiIsIi8vIGNvbnN0IEFQSV9LRVkgPSAnNjY3OTc0MDkyZmY3OWRlOWU4NjZlYzc3ZjUxYjVmYjMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mbyhjaXR5TmFtZSwgdW5pdCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoW2dldEN1cnJlbnRXZWF0aGVyKGNpdHlOYW1lLCB1bml0KSwgZ2V0V2VhdGhlckZvcmVjYXN0KGNpdHlOYW1lLCB1bml0KV0pO1xuICByZXR1cm4gcHJvY2Vzc0RhdGEoZGF0YSwgdW5pdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGNpdHlOYW1lLCB1bml0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHt3aW5kb3cuQVBJX0tFWX0mdW5pdHM9JHt1bml0fWApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3QoY2l0eU5hbWUsIHVuaXQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHt3aW5kb3cuQVBJX0tFWX0mdW5pdHM9JHt1bml0fWApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhQXJyYXksIHVuaXQpIHtcbiAgY29uc3QgY3VycmVudE9iamVjdCA9IHtcbiAgICBjaXR5TmFtZTogZGF0YUFycmF5WzBdLm5hbWUsXG4gICAgZGlzcGxheVVuaXQ6IHVuaXQsXG4gICAgdGVtcDogZGF0YUFycmF5WzBdLm1haW4udGVtcCxcbiAgICB3ZWF0aGVyOiBkYXRhQXJyYXlbMF0ud2VhdGhlclswXS5tYWluLFxuICAgIGljb246IGRhdGFBcnJheVswXS53ZWF0aGVyWzBdLmljb24sXG4gICAgd2luZFNwZWVkOiBkYXRhQXJyYXlbMF0ud2luZC5zcGVlZCxcbiAgICBodW1pZGl0eTogZGF0YUFycmF5WzBdLm1haW4uaHVtaWRpdHksXG4gICAgbWF4VGVtcDogZGF0YUFycmF5WzBdLm1haW4udGVtcF9tYXgsXG4gICAgbWluVGVtcDogZGF0YUFycmF5WzBdLm1haW4udGVtcF9taW4sXG4gIH07XG5cbiAgY29uc3QgZm9yZWNhc3RPYmplY3RBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgoZGF0YUFycmF5WzFdLmxpc3RbaV0uZHQgKyBkYXRhQXJyYXlbMV0uY2l0eS50aW1lem9uZSkgKiAxMDAwKTtcbiAgICBjb25zdCBvYmplY3QgPSB7XG4gICAgICBsb2NhbFRpbWU6IGRhdGVPYmplY3QuZ2V0VVRDSG91cnMoKSxcbiAgICAgIHRlbXA6IGRhdGFBcnJheVsxXS5saXN0W2ldLm1haW4udGVtcCxcbiAgICAgIHdlYXRoZXI6IGRhdGFBcnJheVsxXS5saXN0W2ldLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIGljb246IGRhdGFBcnJheVsxXS5saXN0W2ldLndlYXRoZXJbMF0uaWNvbixcbiAgICAgIHdpbmRTcGVlZDogZGF0YUFycmF5WzFdLmxpc3RbaV0ud2luZC5zcGVlZCxcbiAgICAgIGh1bWlkaXR5OiBkYXRhQXJyYXlbMV0ubGlzdFtpXS5tYWluLmh1bWlkaXR5LFxuICAgIH07XG4gICAgZm9yZWNhc3RPYmplY3RBcnJheS5wdXNoKG9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gW2N1cnJlbnRPYmplY3QsIGZvcmVjYXN0T2JqZWN0QXJyYXldO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHJlbmRlckhvbWVwYWdlIGZyb20gJy4vaG9tZXBhZ2VET00nO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBhcGlLZXkgPSBwcm9tcHQoXCIxLiBHZXQgYSBmcmVlIGFwaSBrZXkgYXQgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmdcXG4yLiBFbnRlciB5b3VyIGFwaSBrZXk6XCIpO1xud2luZG93LkFQSV9LRVkgPSBhcGlLZXk7XG53aW5kb3cudW5pdCA9ICdtZXRyaWMnO1xucmVuZGVySG9tZXBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==