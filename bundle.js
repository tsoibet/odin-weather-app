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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: calc(10px + 0.4vw + 0.2vh);\n}\n\nbody {\n    color: white;\n    background-color: rgb(45, 116, 187);\n    transition: background-color ease-out 500ms;\n    padding: 2rem 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 2rem;\n}\n\nbody.clear {\n    background-color: rgb(45, 116, 187);\n}\n\nbody.cloud {\n    background-color: rgb(101, 124, 148);\n}\n\nbody.rain {\n    background-color: rgb(71, 109, 153);  \n}\n\nbody.snow {\n    background-color: rgb(161, 191, 209);\n}\n\n.toggleSwitch {\n    position: fixed;\n    right: 2rem;\n    width: 4.5rem;\n    height: 2.2rem;\n    border-radius: 2rem;\n    border: solid 0.15rem white;\n    background-color: rgba(0, 0, 0, 0.2);\n    transition: background-color linear 150ms;\n    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5) inset;\n    display: flex;\n    gap: 0.2rem;\n    justify-content: space-evenly;\n    align-items: center;\n    cursor: pointer;\n}\n\n.toggleSwitch:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.toggleButton {\n    position: absolute;\n    width: 1.8rem;\n    height: 1.4rem;\n    border-radius: 0.8rem;\n    background-color: white;\n    box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3);\n    transform: translateX(-50%);\n    transition: transform ease-in-out 150ms;\n}\n\n.toggleButton.imperial {\n    transform: translateX(50%);\n}\n\n.toggle {\n    z-index: 1;\n    color: black;\n}\n\n.searchBar {\n    margin: 0 auto;\n}\n\ninput, button {\n    appearance: none;\n    border: none;\n    height: 2.4rem;\n    padding: 0.5rem 1rem;\n}\n\ninput:focus {\n    outline: none;\n}\n\ninput[type=\"search\"] {\n    background-color: white;\n    color: black;\n}\n\nbutton[type=\"submit\"] {\n    cursor: pointer;\n    background-color: rgb(109, 109, 109);\n    color: white;\n    transition: background-color linear 300ms;\n}\n\nbutton[type=\"submit\"]::after {\n    content: \">\";\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgb(73, 73, 73);\n}\n\n.weatherInfo {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.currentWeather, .weatherForecast {\n    background-color: rgba(0, 0, 0, 20%);\n    opacity: 100;\n    transition: all linear 500ms;\n    cursor: default;\n}\n\n.currentWeather.fadeIn, .weatherForecast.fadeIn {\n    opacity: 0;\n}\n\n.currentWeather:hover, .weatherForecast:hover {\n    background-color: rgba(0, 0, 0, 15%);\n}\n\n.currentWeather {\n    margin: auto;\n    width: max-content;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    align-items: center;\n}\n\n.currentWeather .cityName {\n    font-size: 1.8rem;\n}\n\n.currentWeather .temp {\n    font-size: 5rem;\n}\n\n.degree.metric::after {\n    content: \"°C\";\n    font-size: 0.6em;\n}\n\n.degree.imperial::after {\n    content: \"°F\";\n    font-size: 0.6em;\n}\n\n.currentWeather img {\n    width: 8rem;\n    height: 8rem;\n    margin-top: -0.6rem;\n    margin-bottom: -1.2rem;\n}\n\n.weatherForecast img {\n    width: 4rem;\n    height: 4rem;\n    margin-top: -0.2rem;\n    margin-bottom: -0.2rem;\n}\n\n.infoRow {\n    display: flex;\n    gap: 0.5rem;\n    opacity: 0.85;\n}\n\n.windSpeed::before {\n    content: \"Wind: \";\n}\n\n.windSpeed.metric::after {\n    content: \"m/s\";\n    font-size: 0.8em;\n}\n\n.windSpeed.imperial::after {\n    content: \"mph\";\n    font-size: 0.8em;\n}\n\n.humidity::before {\n    content: \"Humid: \";\n}\n\n.humidity::after {\n    content: \"%\";\n    font-size: 0.8em;\n}\n\n.maxTemp::before {\n    content: \"H: \";\n}\n\n.minTemp::before {\n    content: \"L: \";\n}\n\n.maxTemp::after, .minTemp::after {\n    content: \"°\";\n}\n\n.weatherForecast {\n    margin: auto;\n    width: max-content;\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.forecastBlock {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n    align-items: center;\n}\n\n.weatherForecast .time {\n    font-size: 0.9rem;\n}\n\n.weatherForecast .temp {\n    font-size: 1.5rem;\n}\n\n.weatherForecast .windSpeed,\n.weatherForecast .humidity {\n    font-size: 0.8rem;\n}\n\n.error {\n    color: white;\n    font-size: 1.2rem;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n}\n\n.error.message {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.footer {\n    margin: 0 auto;\n    font-size: 0.9rem;\n}\n\n.loading {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    border: 0.8rem solid rgba(0, 0, 0, 20%);\n    border-top: 0.8rem solid white;\n    animation: spin 1s linear infinite;\n}\n  \n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: calc(10px + 0.4vw + 0.2vh);\n}\n\nbody {\n    color: white;\n    background-color: rgb(45, 116, 187);\n    transition: background-color ease-out 500ms;\n    padding: 2rem 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 2rem;\n}\n\nbody.clear {\n    background-color: rgb(45, 116, 187);\n}\n\nbody.cloud {\n    background-color: rgb(101, 124, 148);\n}\n\nbody.rain {\n    background-color: rgb(71, 109, 153);  \n}\n\nbody.snow {\n    background-color: rgb(161, 191, 209);\n}\n\n.toggleSwitch {\n    position: fixed;\n    right: 2rem;\n    width: 4.5rem;\n    height: 2.2rem;\n    border-radius: 2rem;\n    border: solid 0.15rem white;\n    background-color: rgba(0, 0, 0, 0.2);\n    transition: background-color linear 150ms;\n    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5) inset;\n    display: flex;\n    gap: 0.2rem;\n    justify-content: space-evenly;\n    align-items: center;\n    cursor: pointer;\n}\n\n.toggleSwitch:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.toggleButton {\n    position: absolute;\n    width: 1.8rem;\n    height: 1.4rem;\n    border-radius: 0.8rem;\n    background-color: white;\n    box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.3);\n    transform: translateX(-50%);\n    transition: transform ease-in-out 150ms;\n}\n\n.toggleButton.imperial {\n    transform: translateX(50%);\n}\n\n.toggle {\n    z-index: 1;\n    color: black;\n}\n\n.searchBar {\n    margin: 0 auto;\n}\n\ninput, button {\n    appearance: none;\n    border: none;\n    height: 2.4rem;\n    padding: 0.5rem 1rem;\n}\n\ninput:focus {\n    outline: none;\n}\n\ninput[type=\"search\"] {\n    background-color: white;\n    color: black;\n}\n\nbutton[type=\"submit\"] {\n    cursor: pointer;\n    background-color: rgb(109, 109, 109);\n    color: white;\n    transition: background-color linear 300ms;\n}\n\nbutton[type=\"submit\"]::after {\n    content: \">\";\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgb(73, 73, 73);\n}\n\n.weatherInfo {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.currentWeather, .weatherForecast {\n    background-color: rgba(0, 0, 0, 20%);\n    opacity: 100;\n    transition: all linear 500ms;\n    cursor: default;\n}\n\n.currentWeather.fadeIn, .weatherForecast.fadeIn {\n    opacity: 0;\n}\n\n.currentWeather:hover, .weatherForecast:hover {\n    background-color: rgba(0, 0, 0, 15%);\n}\n\n.currentWeather {\n    margin: auto;\n    width: max-content;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n    align-items: center;\n}\n\n.currentWeather .cityName {\n    font-size: 1.8rem;\n}\n\n.currentWeather .temp {\n    font-size: 5rem;\n}\n\n.degree.metric::after {\n    content: \"°C\";\n    font-size: 0.6em;\n}\n\n.degree.imperial::after {\n    content: \"°F\";\n    font-size: 0.6em;\n}\n\n.currentWeather img {\n    width: 8rem;\n    height: 8rem;\n    margin-top: -0.6rem;\n    margin-bottom: -1.2rem;\n}\n\n.weatherForecast img {\n    width: 4rem;\n    height: 4rem;\n    margin-top: -0.2rem;\n    margin-bottom: -0.2rem;\n}\n\n.infoRow {\n    display: flex;\n    gap: 0.5rem;\n    opacity: 0.85;\n}\n\n.windSpeed::before {\n    content: \"Wind: \";\n}\n\n.windSpeed.metric::after {\n    content: \"m/s\";\n    font-size: 0.8em;\n}\n\n.windSpeed.imperial::after {\n    content: \"mph\";\n    font-size: 0.8em;\n}\n\n.humidity::before {\n    content: \"Humid: \";\n}\n\n.humidity::after {\n    content: \"%\";\n    font-size: 0.8em;\n}\n\n.maxTemp::before {\n    content: \"H: \";\n}\n\n.minTemp::before {\n    content: \"L: \";\n}\n\n.maxTemp::after, .minTemp::after {\n    content: \"°\";\n}\n\n.weatherForecast {\n    margin: auto;\n    width: max-content;\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.forecastBlock {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n    align-items: center;\n}\n\n.weatherForecast .time {\n    font-size: 0.9rem;\n}\n\n.weatherForecast .temp {\n    font-size: 1.5rem;\n}\n\n.weatherForecast .windSpeed,\n.weatherForecast .humidity {\n    font-size: 0.8rem;\n}\n\n.error {\n    color: white;\n    font-size: 1.2rem;\n    text-shadow: 0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.2);\n}\n\n.error.message {\n    font-size: 0.8rem;\n    text-align: center;\n}\n\n.footer {\n    margin: 0 auto;\n    font-size: 0.9rem;\n}\n\n.loading {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    border: 0.8rem solid rgba(0, 0, 0, 20%);\n    border-top: 0.8rem solid white;\n    animation: spin 1s linear infinite;\n}\n  \n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
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
  icon.src = `../weatherIcon/${data.icon}.png`;
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
    icon.src = `../weatherIcon/${item.icon}.png`;
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
const API_KEY = 'd788732bd839cde5cbf83ee69d3ad8ff';

async function getWeatherInfo(cityName, unit) {
  const data = await Promise.all([getCurrentWeather(cityName, unit), getWeatherForecast(cityName, unit)]);
  return processData(data, unit);
}

async function getCurrentWeather(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

async function getWeatherForecast(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${unit}`);
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



window.unit = 'metric';
(0,_homepageDOM__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JSQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRixTQUFTLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGLFNBQVMsU0FBUyxRQUFRLFNBQVMsS0FBSztBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ3JCOztBQUV0QjtBQUNBLHdEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaG9tZXBhZ2VET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAwLjR2dyArIDAuMnZoKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAxMTYsIDE4Nyk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgNTAwbXM7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG5ib2R5LmNsZWFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAxMTYsIDE4Nyk7XFxufVxcblxcbmJvZHkuY2xvdWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMjQsIDE0OCk7XFxufVxcblxcbmJvZHkucmFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTA5LCAxNTMpOyAgXFxufVxcblxcbmJvZHkuc25vdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE5MSwgMjA5KTtcXG59XFxuXFxuLnRvZ2dsZVN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0LjVyZW07XFxuICAgIGhlaWdodDogMi4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBib3JkZXI6IHNvbGlkIDAuMTVyZW0gd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgMTUwbXM7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC4zcmVtIHJnYmEoMCwgMCwgMCwgMC41KSBpbnNldDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGVTd2l0Y2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi50b2dnbGVCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDE1MG1zO1xcbn1cXG5cXG4udG9nZ2xlQnV0dG9uLmltcGVyaWFsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zZWFyY2hCYXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMDksIDEwOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgMzAwbXM7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzMsIDczKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciwgLndlYXRoZXJGb3JlY2FzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMjAlKTtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDUwMG1zO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlci5mYWRlSW4sIC53ZWF0aGVyRm9yZWNhc3QuZmFkZUluIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyOmhvdmVyLCAud2VhdGhlckZvcmVjYXN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxNSUpO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMTVyZW0gMC4xNXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIgLmNpdHlOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciAudGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLmRlZ3JlZS5tZXRyaWM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxufVxcblxcbi5kZWdyZWUuaW1wZXJpYWw6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciBpbWcge1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMC42cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMS4ycmVtO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IGltZyB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIG1hcmdpbi10b3A6IC0wLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XFxufVxcblxcbi5pbmZvUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi53aW5kU3BlZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJXaW5kOiBcXFwiO1xcbn1cXG5cXG4ud2luZFNwZWVkLm1ldHJpYzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwibS9zXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLndpbmRTcGVlZC5pbXBlcmlhbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwibXBoXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLmh1bWlkaXR5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiSHVtaWQ6IFxcXCI7XFxufVxcblxcbi5odW1pZGl0eTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiJVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5tYXhUZW1wOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiSDogXFxcIjtcXG59XFxuXFxuLm1pblRlbXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJMOiBcXFwiO1xcbn1cXG5cXG4ubWF4VGVtcDo6YWZ0ZXIsIC5taW5UZW1wOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3Qge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3RCbG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4xcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IC50aW1lIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgLnRlbXAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCAud2luZFNwZWVkLFxcbi53ZWF0aGVyRm9yZWNhc3QgLmh1bWlkaXR5IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtc2hhZG93OiAwLjE1cmVtIDAuMTVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmVycm9yLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubG9hZGluZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuXFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjhyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAyMCUpO1xcbiAgICBib3JkZXItdG9wOiAwLjhyZW0gc29saWQgd2hpdGU7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbiAgXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9D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O0lBQzlCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAwLjR2dyArIDAuMnZoKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAxMTYsIDE4Nyk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgNTAwbXM7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG5ib2R5LmNsZWFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAxMTYsIDE4Nyk7XFxufVxcblxcbmJvZHkuY2xvdWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMjQsIDE0OCk7XFxufVxcblxcbmJvZHkucmFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTA5LCAxNTMpOyAgXFxufVxcblxcbmJvZHkuc25vdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE5MSwgMjA5KTtcXG59XFxuXFxuLnRvZ2dsZVN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiA0LjVyZW07XFxuICAgIGhlaWdodDogMi4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBib3JkZXI6IHNvbGlkIDAuMTVyZW0gd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgMTUwbXM7XFxuICAgIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC4zcmVtIHJnYmEoMCwgMCwgMCwgMC41KSBpbnNldDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGVTd2l0Y2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi50b2dnbGVCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4tb3V0IDE1MG1zO1xcbn1cXG5cXG4udG9nZ2xlQnV0dG9uLmltcGVyaWFsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zZWFyY2hCYXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAyLjRyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMDksIDEwOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgMzAwbXM7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiPlxcXCI7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzMsIDczKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciwgLndlYXRoZXJGb3JlY2FzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMjAlKTtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDUwMG1zO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlci5mYWRlSW4sIC53ZWF0aGVyRm9yZWNhc3QuZmFkZUluIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyOmhvdmVyLCAud2VhdGhlckZvcmVjYXN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxNSUpO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMTVyZW0gMC4xNXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIgLmNpdHlOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciAudGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLmRlZ3JlZS5tZXRyaWM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxufVxcblxcbi5kZWdyZWUuaW1wZXJpYWw6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIsKwRlxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC42ZW07XFxufVxcblxcbi5jdXJyZW50V2VhdGhlciBpbWcge1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMC42cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMS4ycmVtO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IGltZyB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIG1hcmdpbi10b3A6IC0wLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XFxufVxcblxcbi5pbmZvUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi53aW5kU3BlZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJXaW5kOiBcXFwiO1xcbn1cXG5cXG4ud2luZFNwZWVkLm1ldHJpYzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwibS9zXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLndpbmRTcGVlZC5pbXBlcmlhbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwibXBoXFxcIjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuLmh1bWlkaXR5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiSHVtaWQ6IFxcXCI7XFxufVxcblxcbi5odW1pZGl0eTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiJVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5tYXhUZW1wOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiSDogXFxcIjtcXG59XFxuXFxuLm1pblRlbXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJMOiBcXFwiO1xcbn1cXG5cXG4ubWF4VGVtcDo6YWZ0ZXIsIC5taW5UZW1wOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3Qge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9yZWNhc3RCbG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4xcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IC50aW1lIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgLnRlbXAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCAud2luZFNwZWVkLFxcbi53ZWF0aGVyRm9yZWNhc3QgLmh1bWlkaXR5IHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtc2hhZG93OiAwLjE1cmVtIDAuMTVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmVycm9yLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubG9hZGluZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuXFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjhyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAyMCUpO1xcbiAgICBib3JkZXItdG9wOiAwLjhyZW0gc29saWQgd2hpdGU7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbiAgXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRXZWF0aGVySW5mbyBmcm9tICcuL3dlYXRoZXJBcGknO1xuXG5jb25zdCBpbml0aWFsTG9jYXRpb24gPSAnVG9reW8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lcGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJhcicpO1xuXG4gIGNvbnN0IHRvZ2dsZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2dnbGVTd2l0Y2guY2xhc3NMaXN0LmFkZCgndG9nZ2xlU3dpdGNoJyk7XG4gIHRvZ2dsZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGVVbml0KCk7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVySW5mbyAuY2l0eU5hbWUnKS50ZXh0Q29udGVudDtcbiAgICBkaXNwbGF5TG9hZGluZygpO1xuICAgIGdldFdlYXRoZXJJbmZvKGNpdHksIHdpbmRvdy51bml0KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHJlbmRlcldlYXRoZXJJbmZvKGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVuZGVyRXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpKTtcbiAgfSk7XG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlQnV0dG9uJyk7XG4gIHRvZ2dsZVN3aXRjaC5hcHBlbmRDaGlsZCh0b2dnbGVCdXR0b24pO1xuICBjb25zdCBjVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNUb2dnbGUudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgY1RvZ2dsZS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgdG9nZ2xlU3dpdGNoLmFwcGVuZENoaWxkKGNUb2dnbGUpO1xuICBjb25zdCBmVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZUb2dnbGUudGV4dENvbnRlbnQgPSAnwrBGJztcbiAgZlRvZ2dsZS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgdG9nZ2xlU3dpdGNoLmFwcGVuZENoaWxkKGZUb2dnbGUpO1xuICBib2R5LmFwcGVuZENoaWxkKHRvZ2dsZVN3aXRjaCk7XG5cbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoc2VhcmNoRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGRpc3BsYXlMb2FkaW5nKCk7XG4gICAgICBnZXRXZWF0aGVySW5mbyhzZWFyY2hCb3gudmFsdWUsIHdpbmRvdy51bml0KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gcmVuZGVyV2VhdGhlckluZm8oZGF0YSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlbmRlckVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKSk7XG4gICAgfVxuICAgIHNlYXJjaEJveC52YWx1ZSA9ICcnO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaEJveC50eXBlID0gJ3NlYXJjaCc7XG4gIHNlYXJjaEJveC5uYW1lID0gJ3NlYXJjaEJveCc7XG4gIHNlYXJjaEJveC5yZXF1aXJlZCA9IHRydWU7XG4gIHNlYXJjaEJveC5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgc2VhcmNoQm94LnBsYWNlaG9sZGVyID0gJ0NpdHkgbmFtZSc7XG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VhcmNoQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuXG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xuXG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJJbmZvLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJJbmZvJyk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVySW5mbyk7XG5cbiAgZGlzcGxheUxvYWRpbmcoKTtcbiAgZ2V0V2VhdGhlckluZm8oaW5pdGlhbExvY2F0aW9uLCB3aW5kb3cudW5pdClcbiAgICAudGhlbigoZGF0YSkgPT4gcmVuZGVyV2VhdGhlckluZm8oZGF0YSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gcmVuZGVyRXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBCZXRzeSBAIFRoZSBPZGluIFByb2plY3QgMjAyMic7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyV2VhdGhlckluZm8oZGF0YSkge1xuICBjbGVhcldlYXRoZXJJbmZvKCk7XG4gIHJlbmRlckN1cnJlbnRXZWF0aGVyKGRhdGFbMF0pO1xuICByZW5kZXJXZWF0aGVyRm9yZWNhc3QoZGF0YVsxXSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRXZWF0aGVyJyk7XG4gICAgY3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluJyk7XG4gICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJGb3JlY2FzdCcpO1xuICAgIHdlYXRoZXJGb3JlY2FzdC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW4nKTtcbiAgfSwgMTAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJXZWF0aGVySW5mbygpIHtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckluZm8nKTtcbiAgd2VhdGhlckluZm8udGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVySW5mbycpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdjdXJyZW50V2VhdGhlcicpO1xuICBjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcblxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdjaXR5TmFtZScpO1xuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eU5hbWU7XG4gIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcblxuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaWNvbi5zcmMgPSBgLi4vd2VhdGhlckljb24vJHtkYXRhLmljb259LnBuZ2A7XG4gIHdlYXRoZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnZGVncmVlJyk7XG4gIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ21ldHJpYycpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLnRlbXAudG9GaXhlZCgxKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cudW5pdCA9PT0gJ2ltcGVyaWFsJykge1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gZGF0YS50ZW1wLnRvRml4ZWQoKTtcbiAgfVxuICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICBjb25zdCBvdGhlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3RoZXJJbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm9Sb3cnKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kU3BlZWQnKTtcbiAgaWYgKHdpbmRvdy51bml0ID09PSAnbWV0cmljJykge1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cudW5pdCA9PT0gJ2ltcGVyaWFsJykge1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICB9XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGRhdGEud2luZFNwZWVkLnRvRml4ZWQoKTtcbiAgb3RoZXJJbmZvLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZGF0YS5odW1pZGl0eS50b0ZpeGVkKCk7XG4gIG90aGVySW5mby5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKG90aGVySW5mbyk7XG5cbiAgY29uc3QgZGF5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXlUZW1wLmNsYXNzTGlzdC5hZGQoJ2luZm9Sb3cnKTtcbiAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ21heFRlbXAnKTtcbiAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdkZWdyZWUnKTtcbiAgaWYgKHdpbmRvdy51bml0ID09PSAnbWV0cmljJykge1xuICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGRhdGEubWF4VGVtcC50b0ZpeGVkKDEpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBkYXRhLm1heFRlbXAudG9GaXhlZCgpO1xuICB9XG4gIGRheVRlbXAuYXBwZW5kQ2hpbGQobWF4VGVtcCk7XG4gIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdtaW5UZW1wJyk7XG4gIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnZGVncmVlJyk7XG4gIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ21ldHJpYycpO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBkYXRhLm1pblRlbXAudG9GaXhlZCgxKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cudW5pdCA9PT0gJ2ltcGVyaWFsJykge1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gZGF0YS5taW5UZW1wLnRvRml4ZWQoKTtcbiAgfVxuICBkYXlUZW1wLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZChkYXlUZW1wKTtcbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGlmIChib2R5LmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoYm9keS5jbGFzc0xpc3QuaXRlbSgwKSk7XG4gIH1cbiAgaWYgKGRhdGEud2VhdGhlci5pbmNsdWRlcygnQ2xlYXInKSkge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnY2xlYXInKTtcbiAgfSBlbHNlIGlmIChkYXRhLndlYXRoZXIuaW5jbHVkZXMoJ0Nsb3VkJykpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2Nsb3VkJyk7XG4gIH0gZWxzZSBpZiAoZGF0YS53ZWF0aGVyLmluY2x1ZGVzKCdSYWluJykpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3JhaW4nKTtcbiAgfSBlbHNlIGlmIChkYXRhLndlYXRoZXIuaW5jbHVkZXMoJ1Nub3cnKSkge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc25vdycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlcldlYXRoZXJGb3JlY2FzdChkYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJJbmZvJyk7XG4gIGNvbnN0IHdlYXRoZXJGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnd2VhdGhlckZvcmVjYXN0Jyk7XG4gIHdlYXRoZXJGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RCbG9jaycpO1xuXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgndGltZScpO1xuICAgIHRpbWUudGV4dENvbnRlbnQgPSBob3VyMjR0bzEyKGl0ZW0ubG9jYWxUaW1lKTtcbiAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbi5zcmMgPSBgLi4vd2VhdGhlckljb24vJHtpdGVtLmljb259LnBuZ2A7XG4gICAgd2VhdGhlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBmb3JlY2FzdC5hcHBlbmRDaGlsZCh3ZWF0aGVyKTtcblxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2RlZ3JlZScpO1xuICAgIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gaXRlbS50ZW1wLnRvRml4ZWQoMSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cudW5pdCA9PT0gJ2ltcGVyaWFsJykge1xuICAgICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGl0ZW0udGVtcC50b0ZpeGVkKCk7XG4gICAgfVxuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKHRlbXApO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmRTcGVlZCcpO1xuICAgIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgICB9XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gaXRlbS53aW5kU3BlZWQudG9GaXhlZCgpO1xuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBpdGVtLmh1bWlkaXR5O1xuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICAgIHdlYXRoZXJGb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdCk7XG4gICAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckZvcmVjYXN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJFcnJvck1lc3NhZ2UoZXJyTXNnKSB7XG4gIGNsZWFyV2VhdGhlckluZm8oKTtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckluZm8nKTtcblxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICBlcnJvci50ZXh0Q29udGVudCA9ICdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZy4gVHJ5IGFnYWluISc7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGVycm9yKTtcblxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGBFcnJvciBtZXNzYWdlOiAke2Vyck1zZ31gO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBob3VyMjR0bzEyKGhvdXIpIHtcbiAgY29uc3QgZW5kID0gKGhvdXIgPj0gMTIpID8gJ1BNJyA6ICdBTSc7XG4gIGlmIChob3VyICE9PSAxMikge1xuICAgIGhvdXIgJT0gMTI7XG4gIH1cbiAgcmV0dXJuIGhvdXIgKyBlbmQ7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXQoKSB7XG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVCdXR0b24nKTtcbiAgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgd2luZG93LnVuaXQgPSAnbWV0cmljJztcbiAgICBpZiAodG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaW1wZXJpYWwnKSkge1xuICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcGVyaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy51bml0ID0gJ2ltcGVyaWFsJztcbiAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TG9hZGluZygpIHtcbiAgY2xlYXJXZWF0aGVySW5mbygpO1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVySW5mbycpO1xuICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChsb2FkaW5nKTtcbn1cbiIsImNvbnN0IEFQSV9LRVkgPSAnZDc4ODczMmJkODM5Y2RlNWNiZjgzZWU2OWQzYWQ4ZmYnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mbyhjaXR5TmFtZSwgdW5pdCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoW2dldEN1cnJlbnRXZWF0aGVyKGNpdHlOYW1lLCB1bml0KSwgZ2V0V2VhdGhlckZvcmVjYXN0KGNpdHlOYW1lLCB1bml0KV0pO1xuICByZXR1cm4gcHJvY2Vzc0RhdGEoZGF0YSwgdW5pdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGNpdHlOYW1lLCB1bml0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz0ke3VuaXR9YCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJGb3JlY2FzdChjaXR5TmFtZSwgdW5pdCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPSR7dW5pdH1gKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YUFycmF5LCB1bml0KSB7XG4gIGNvbnN0IGN1cnJlbnRPYmplY3QgPSB7XG4gICAgY2l0eU5hbWU6IGRhdGFBcnJheVswXS5uYW1lLFxuICAgIGRpc3BsYXlVbml0OiB1bml0LFxuICAgIHRlbXA6IGRhdGFBcnJheVswXS5tYWluLnRlbXAsXG4gICAgd2VhdGhlcjogZGF0YUFycmF5WzBdLndlYXRoZXJbMF0ubWFpbixcbiAgICBpY29uOiBkYXRhQXJyYXlbMF0ud2VhdGhlclswXS5pY29uLFxuICAgIHdpbmRTcGVlZDogZGF0YUFycmF5WzBdLndpbmQuc3BlZWQsXG4gICAgaHVtaWRpdHk6IGRhdGFBcnJheVswXS5tYWluLmh1bWlkaXR5LFxuICAgIG1heFRlbXA6IGRhdGFBcnJheVswXS5tYWluLnRlbXBfbWF4LFxuICAgIG1pblRlbXA6IGRhdGFBcnJheVswXS5tYWluLnRlbXBfbWluLFxuICB9O1xuXG4gIGNvbnN0IGZvcmVjYXN0T2JqZWN0QXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoKGRhdGFBcnJheVsxXS5saXN0W2ldLmR0ICsgZGF0YUFycmF5WzFdLmNpdHkudGltZXpvbmUpICogMTAwMCk7XG4gICAgY29uc3Qgb2JqZWN0ID0ge1xuICAgICAgbG9jYWxUaW1lOiBkYXRlT2JqZWN0LmdldFVUQ0hvdXJzKCksXG4gICAgICB0ZW1wOiBkYXRhQXJyYXlbMV0ubGlzdFtpXS5tYWluLnRlbXAsXG4gICAgICB3ZWF0aGVyOiBkYXRhQXJyYXlbMV0ubGlzdFtpXS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICBpY29uOiBkYXRhQXJyYXlbMV0ubGlzdFtpXS53ZWF0aGVyWzBdLmljb24sXG4gICAgICB3aW5kU3BlZWQ6IGRhdGFBcnJheVsxXS5saXN0W2ldLndpbmQuc3BlZWQsXG4gICAgICBodW1pZGl0eTogZGF0YUFycmF5WzFdLmxpc3RbaV0ubWFpbi5odW1pZGl0eSxcbiAgICB9O1xuICAgIGZvcmVjYXN0T2JqZWN0QXJyYXkucHVzaChvYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIFtjdXJyZW50T2JqZWN0LCBmb3JlY2FzdE9iamVjdEFycmF5XTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW5kZXJIb21lcGFnZSBmcm9tICcuL2hvbWVwYWdlRE9NJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxud2luZG93LnVuaXQgPSAnbWV0cmljJztcbnJlbmRlckhvbWVwYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=