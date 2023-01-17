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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFB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LFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5QztBQUNBLGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6UkE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBb0YsU0FBUyxTQUFTLFFBQVEsU0FBUyxLQUFLO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRixTQUFTLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUNyQjs7QUFFdEI7QUFDQSx3REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2hvbWVwYWdlRE9NLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckFwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC40dncgKyAwLjJ2aCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgMTE2LCAxODcpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDUwMG1zO1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuYm9keS5jbGVhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgMTE2LCAxODcpO1xcbn1cXG5cXG5ib2R5LmNsb3VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTI0LCAxNDgpO1xcbn1cXG5cXG5ib2R5LnJhaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDEwOSwgMTUzKTsgIFxcbn1cXG5cXG5ib2R5LnNub3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxOTEsIDIwOSk7XFxufVxcblxcbi50b2dnbGVTd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNC41cmVtO1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjE1cmVtIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgbGluZWFyIDE1MG1zO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuM3JlbSByZ2JhKDAsIDAsIDAsIDAuNSkgaW5zZXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlU3dpdGNoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4udG9nZ2xlQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMS44cmVtO1xcbiAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAxNTBtcztcXG59XFxuXFxuLnRvZ2dsZUJ1dHRvbi5pbXBlcmlhbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2VhcmNoQmFyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmlucHV0LCBidXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMi40cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgbGluZWFyIDMwMG1zO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XFxufVxcblxcbi53ZWF0aGVySW5mbyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIsIC53ZWF0aGVyRm9yZWNhc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDIwJSk7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciA1MDBtcztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIuZmFkZUluLCAud2VhdGhlckZvcmVjYXN0LmZhZGVJbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlcjpob3ZlciwgLndlYXRoZXJGb3JlY2FzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMTUlKTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRleHQtc2hhZG93OiAwLjE1cmVtIDAuMTVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIC5jaXR5TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIgLnRlbXAge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5kZWdyZWUubWV0cmljOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgICBmb250LXNpemU6IDAuNmVtO1xcbn1cXG5cXG4uZGVncmVlLmltcGVyaWFsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgICBmb250LXNpemU6IDAuNmVtO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIgaW1nIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTAuNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCBpbWcge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMC4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4ycmVtO1xcbn1cXG5cXG4uaW5mb1JvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4ud2luZFNwZWVkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiV2luZDogXFxcIjtcXG59XFxuXFxuLndpbmRTcGVlZC5tZXRyaWM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIm0vc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi53aW5kU3BlZWQuaW1wZXJpYWw6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIm1waFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5odW1pZGl0eTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkh1bWlkOiBcXFwiO1xcbn1cXG5cXG4uaHVtaWRpdHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiVcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4ubWF4VGVtcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkg6IFxcXCI7XFxufVxcblxcbi5taW5UZW1wOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiTDogXFxcIjtcXG59XFxuXFxuLm1heFRlbXA6OmFmdGVyLCAubWluVGVtcDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiwrBcXFwiO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0QmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCAudGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IC50ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgLndpbmRTcGVlZCxcXG4ud2VhdGhlckZvcmVjYXN0IC5odW1pZGl0eSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4xNXJlbSAwLjE1cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5lcnJvci5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmxvYWRpbmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC44cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMjAlKTtcXG4gICAgYm9yZGVyLXRvcDogMC44cmVtIHNvbGlkIHdoaXRlO1xcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4gIFxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBeUM7SUFDekMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQywyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FB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QUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC40dncgKyAwLjJ2aCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgMTE2LCAxODcpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDUwMG1zO1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuYm9keS5jbGVhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgMTE2LCAxODcpO1xcbn1cXG5cXG5ib2R5LmNsb3VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTI0LCAxNDgpO1xcbn1cXG5cXG5ib2R5LnJhaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDEwOSwgMTUzKTsgIFxcbn1cXG5cXG5ib2R5LnNub3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxOTEsIDIwOSk7XFxufVxcblxcbi50b2dnbGVTd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNC41cmVtO1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAwLjE1cmVtIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgbGluZWFyIDE1MG1zO1xcbiAgICBib3gtc2hhZG93OiAwLjFyZW0gMC4xcmVtIDAuM3JlbSByZ2JhKDAsIDAsIDAsIDAuNSkgaW5zZXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlU3dpdGNoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4udG9nZ2xlQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMS44cmVtO1xcbiAgICBoZWlnaHQ6IDEuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluLW91dCAxNTBtcztcXG59XFxuXFxuLnRvZ2dsZUJ1dHRvbi5pbXBlcmlhbCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2VhcmNoQmFyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmlucHV0LCBidXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMi40cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgbGluZWFyIDMwMG1zO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XFxufVxcblxcbi53ZWF0aGVySW5mbyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIsIC53ZWF0aGVyRm9yZWNhc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDIwJSk7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciA1MDBtcztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIuZmFkZUluLCAud2VhdGhlckZvcmVjYXN0LmZhZGVJbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jdXJyZW50V2VhdGhlcjpob3ZlciwgLndlYXRoZXJGb3JlY2FzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMTUlKTtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHRleHQtc2hhZG93OiAwLjE1cmVtIDAuMTVyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnRXZWF0aGVyIC5jaXR5TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIgLnRlbXAge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5kZWdyZWUubWV0cmljOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsENcXFwiO1xcbiAgICBmb250LXNpemU6IDAuNmVtO1xcbn1cXG5cXG4uZGVncmVlLmltcGVyaWFsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLCsEZcXFwiO1xcbiAgICBmb250LXNpemU6IDAuNmVtO1xcbn1cXG5cXG4uY3VycmVudFdlYXRoZXIgaW1nIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTAuNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCBpbWcge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMC4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4ycmVtO1xcbn1cXG5cXG4uaW5mb1JvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4ud2luZFNwZWVkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiV2luZDogXFxcIjtcXG59XFxuXFxuLndpbmRTcGVlZC5tZXRyaWM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIm0vc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi53aW5kU3BlZWQuaW1wZXJpYWw6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIm1waFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbi5odW1pZGl0eTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkh1bWlkOiBcXFwiO1xcbn1cXG5cXG4uaHVtaWRpdHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiVcXFwiO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4ubWF4VGVtcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkg6IFxcXCI7XFxufVxcblxcbi5taW5UZW1wOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiTDogXFxcIjtcXG59XFxuXFxuLm1heFRlbXA6OmFmdGVyLCAubWluVGVtcDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiwrBcXFwiO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0QmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXJGb3JlY2FzdCAudGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ud2VhdGhlckZvcmVjYXN0IC50ZW1wIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi53ZWF0aGVyRm9yZWNhc3QgLndpbmRTcGVlZCxcXG4ud2VhdGhlckZvcmVjYXN0IC5odW1pZGl0eSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4xNXJlbSAwLjE1cmVtIDAuMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5lcnJvci5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmxvYWRpbmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC44cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMjAlKTtcXG4gICAgYm9yZGVyLXRvcDogMC44cmVtIHNvbGlkIHdoaXRlO1xcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4gIFxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2V0V2VhdGhlckluZm8gZnJvbSAnLi93ZWF0aGVyQXBpJztcblxuY29uc3QgaW5pdGlhbExvY2F0aW9uID0gJ1Rva3lvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySG9tZXBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCYXInKTtcblxuICBjb25zdCB0b2dnbGVTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9nZ2xlU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZVN3aXRjaCcpO1xuICB0b2dnbGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlVW5pdCgpO1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckluZm8gLmNpdHlOYW1lJykudGV4dENvbnRlbnQ7XG4gICAgZGlzcGxheUxvYWRpbmcoKTtcbiAgICBnZXRXZWF0aGVySW5mbyhjaXR5LCB3aW5kb3cudW5pdClcbiAgICAgIC50aGVuKChkYXRhKSA9PiByZW5kZXJXZWF0aGVySW5mbyhkYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlbmRlckVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKSk7XG4gIH0pO1xuICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZUJ1dHRvbicpO1xuICB0b2dnbGVTd2l0Y2guYXBwZW5kQ2hpbGQodG9nZ2xlQnV0dG9uKTtcbiAgY29uc3QgY1RvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjVG9nZ2xlLnRleHRDb250ZW50ID0gJ8KwQyc7XG4gIGNUb2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gIHRvZ2dsZVN3aXRjaC5hcHBlbmRDaGlsZChjVG9nZ2xlKTtcbiAgY29uc3QgZlRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmVG9nZ2xlLnRleHRDb250ZW50ID0gJ8KwRic7XG4gIGZUb2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gIHRvZ2dsZVN3aXRjaC5hcHBlbmRDaGlsZChmVG9nZ2xlKTtcbiAgYm9keS5hcHBlbmRDaGlsZCh0b2dnbGVTd2l0Y2gpO1xuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKHNlYXJjaEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBkaXNwbGF5TG9hZGluZygpO1xuICAgICAgZ2V0V2VhdGhlckluZm8oc2VhcmNoQm94LnZhbHVlLCB3aW5kb3cudW5pdClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHJlbmRlcldlYXRoZXJJbmZvKGRhdGEpKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZW5kZXJFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZWFyY2hCb3gudmFsdWUgPSAnJztcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hCb3gudHlwZSA9ICdzZWFyY2gnO1xuICBzZWFyY2hCb3gubmFtZSA9ICdzZWFyY2hCb3gnO1xuICBzZWFyY2hCb3gucmVxdWlyZWQgPSB0cnVlO1xuICBzZWFyY2hCb3guYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gIHNlYXJjaEJveC5wbGFjZWhvbGRlciA9ICdDaXR5IG5hbWUnO1xuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG5cbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNlYXJjaEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcblxuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcblxuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVySW5mby5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVySW5mbycpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQod2VhdGhlckluZm8pO1xuXG4gIGRpc3BsYXlMb2FkaW5nKCk7XG4gIGdldFdlYXRoZXJJbmZvKGluaXRpYWxMb2NhdGlvbiwgd2luZG93LnVuaXQpXG4gICAgLnRoZW4oKGRhdGEpID0+IHJlbmRlcldlYXRoZXJJbmZvKGRhdGEpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlbmRlckVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKSk7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgQmV0c3kgQCBUaGUgT2RpbiBQcm9qZWN0IDIwMjInO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcldlYXRoZXJJbmZvKGRhdGEpIHtcbiAgY2xlYXJXZWF0aGVySW5mbygpO1xuICByZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhWzBdKTtcbiAgcmVuZGVyV2VhdGhlckZvcmVjYXN0KGRhdGFbMV0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50V2VhdGhlcicpO1xuICAgIGN1cnJlbnRXZWF0aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbicpO1xuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyRm9yZWNhc3QnKTtcbiAgICB3ZWF0aGVyRm9yZWNhc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluJyk7XG4gIH0sIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyV2VhdGhlckluZm8oKSB7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJJbmZvJyk7XG4gIHdlYXRoZXJJbmZvLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKGRhdGEpIHtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckluZm8nKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudFdlYXRoZXInKTtcbiAgY3VycmVudFdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnZmFkZUluJyk7XG5cbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eU5hbWUnKTtcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBkYXRhLmNpdHlOYW1lO1xuICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG5cbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gIC8vIGljb24uc3JjID0gYC4uL3dlYXRoZXJJY29uLyR7ZGF0YS5pY29ufS5wbmdgO1xuICAvLyBGb3IgR2l0aHViIFBhZ2VzOlxuICBpY29uLnNyYyA9IGAuL3dlYXRoZXJJY29uLyR7ZGF0YS5pY29ufS5wbmdgO1xuICB3ZWF0aGVyLmFwcGVuZENoaWxkKGljb24pO1xuICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZCh3ZWF0aGVyKTtcblxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2RlZ3JlZScpO1xuICBpZiAod2luZG93LnVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gZGF0YS50ZW1wLnRvRml4ZWQoMSk7XG4gIH0gZWxzZSBpZiAod2luZG93LnVuaXQgPT09ICdpbXBlcmlhbCcpIHtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGEudGVtcC50b0ZpeGVkKCk7XG4gIH1cbiAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQodGVtcCk7XG5cbiAgY29uc3Qgb3RoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG90aGVySW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvUm93Jyk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnd2luZFNwZWVkJyk7XG4gIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gIH0gZWxzZSBpZiAod2luZG93LnVuaXQgPT09ICdpbXBlcmlhbCcpIHtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgfVxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBkYXRhLndpbmRTcGVlZC50b0ZpeGVkKCk7XG4gIG90aGVySW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGRhdGEuaHVtaWRpdHkudG9GaXhlZCgpO1xuICBvdGhlckluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZChvdGhlckluZm8pO1xuXG4gIGNvbnN0IGRheVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF5VGVtcC5jbGFzc0xpc3QuYWRkKCdpbmZvUm93Jyk7XG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdtYXhUZW1wJyk7XG4gIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnZGVncmVlJyk7XG4gIGlmICh3aW5kb3cudW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ21ldHJpYycpO1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBkYXRhLm1heFRlbXAudG9GaXhlZCgxKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cudW5pdCA9PT0gJ2ltcGVyaWFsJykge1xuICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gZGF0YS5tYXhUZW1wLnRvRml4ZWQoKTtcbiAgfVxuICBkYXlUZW1wLmFwcGVuZENoaWxkKG1heFRlbXApO1xuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnbWluVGVtcCcpO1xuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ2RlZ3JlZScpO1xuICBpZiAod2luZG93LnVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gZGF0YS5taW5UZW1wLnRvRml4ZWQoMSk7XG4gIH0gZWxzZSBpZiAod2luZG93LnVuaXQgPT09ICdpbXBlcmlhbCcpIHtcbiAgICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGRhdGEubWluVGVtcC50b0ZpeGVkKCk7XG4gIH1cbiAgZGF5VGVtcC5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQoZGF5VGVtcCk7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBpZiAoYm9keS5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKGJvZHkuY2xhc3NMaXN0Lml0ZW0oMCkpO1xuICB9XG4gIGlmIChkYXRhLndlYXRoZXIuaW5jbHVkZXMoJ0NsZWFyJykpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2NsZWFyJyk7XG4gIH0gZWxzZSBpZiAoZGF0YS53ZWF0aGVyLmluY2x1ZGVzKCdDbG91ZCcpKSB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdjbG91ZCcpO1xuICB9IGVsc2UgaWYgKGRhdGEud2VhdGhlci5pbmNsdWRlcygnUmFpbicpKSB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdyYWluJyk7XG4gIH0gZWxzZSBpZiAoZGF0YS53ZWF0aGVyLmluY2x1ZGVzKCdTbm93JykpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Nub3cnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJXZWF0aGVyRm9yZWNhc3QoZGF0YSkge1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVySW5mbycpO1xuICBjb25zdCB3ZWF0aGVyRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJGb3JlY2FzdCcpO1xuICB3ZWF0aGVyRm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZmFkZUluJyk7XG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0QmxvY2snKTtcblxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3RpbWUnKTtcbiAgICB0aW1lLnRleHRDb250ZW50ID0gaG91cjI0dG8xMihpdGVtLmxvY2FsVGltZSk7XG4gICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQodGltZSk7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIGljb24uc3JjID0gYC4uL3dlYXRoZXJJY29uLyR7aXRlbS5pY29ufS5wbmdgO1xuICAgIC8vIEZvciBHaXRodWIgUGFnZXM6XG4gICAgaWNvbi5zcmMgPSBgLi93ZWF0aGVySWNvbi8ke2l0ZW0uaWNvbn0ucG5nYDtcbiAgICB3ZWF0aGVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgnZGVncmVlJyk7XG4gICAgaWYgKHdpbmRvdy51bml0ID09PSAnbWV0cmljJykge1xuICAgICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdtZXRyaWMnKTtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBpdGVtLnRlbXAudG9GaXhlZCgxKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2ltcGVyaWFsJyk7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gaXRlbS50ZW1wLnRvRml4ZWQoKTtcbiAgICB9XG4gICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQodGVtcCk7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnd2luZFNwZWVkJyk7XG4gICAgaWYgKHdpbmRvdy51bml0ID09PSAnbWV0cmljJykge1xuICAgICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ21ldHJpYycpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LnVuaXQgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgIH1cbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBpdGVtLndpbmRTcGVlZC50b0ZpeGVkKCk7XG4gICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGl0ZW0uaHVtaWRpdHk7XG4gICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuXG4gICAgd2VhdGhlckZvcmVjYXN0LmFwcGVuZENoaWxkKGZvcmVjYXN0KTtcbiAgICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZCh3ZWF0aGVyRm9yZWNhc3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVycm9yTWVzc2FnZShlcnJNc2cpIHtcbiAgY2xlYXJXZWF0aGVySW5mbygpO1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVySW5mbycpO1xuXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gIGVycm9yLnRleHRDb250ZW50ID0gJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nLiBUcnkgYWdhaW4hJztcbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZXJyb3IpO1xuXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gYEVycm9yIG1lc3NhZ2U6ICR7ZXJyTXNnfWA7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGhvdXIyNHRvMTIoaG91cikge1xuICBjb25zdCBlbmQgPSAoaG91ciA+PSAxMikgPyAnUE0nIDogJ0FNJztcbiAgaWYgKGhvdXIgIT09IDEyKSB7XG4gICAgaG91ciAlPSAxMjtcbiAgfVxuICByZXR1cm4gaG91ciArIGVuZDtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVW5pdCgpIHtcbiAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZUJ1dHRvbicpO1xuICBpZiAod2luZG93LnVuaXQgPT09ICdpbXBlcmlhbCcpIHtcbiAgICB3aW5kb3cudW5pdCA9ICdtZXRyaWMnO1xuICAgIGlmICh0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBlcmlhbCcpKSB7XG4gICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW1wZXJpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnVuaXQgPSAnaW1wZXJpYWwnO1xuICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2FkaW5nKCkge1xuICBjbGVhcldlYXRoZXJJbmZvKCk7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJJbmZvJyk7XG4gIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGxvYWRpbmcpO1xufVxuIiwiY29uc3QgQVBJX0tFWSA9ICdkNzg4NzMyYmQ4MzljZGU1Y2JmODNlZTY5ZDNhZDhmZic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvKGNpdHlOYW1lLCB1bml0KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChbZ2V0Q3VycmVudFdlYXRoZXIoY2l0eU5hbWUsIHVuaXQpLCBnZXRXZWF0aGVyRm9yZWNhc3QoY2l0eU5hbWUsIHVuaXQpXSk7XG4gIHJldHVybiBwcm9jZXNzRGF0YShkYXRhLCB1bml0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoY2l0eU5hbWUsIHVuaXQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPSR7dW5pdH1gKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckZvcmVjYXN0KGNpdHlOYW1lLCB1bml0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9JHt1bml0fWApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhQXJyYXksIHVuaXQpIHtcbiAgY29uc3QgY3VycmVudE9iamVjdCA9IHtcbiAgICBjaXR5TmFtZTogZGF0YUFycmF5WzBdLm5hbWUsXG4gICAgZGlzcGxheVVuaXQ6IHVuaXQsXG4gICAgdGVtcDogZGF0YUFycmF5WzBdLm1haW4udGVtcCxcbiAgICB3ZWF0aGVyOiBkYXRhQXJyYXlbMF0ud2VhdGhlclswXS5tYWluLFxuICAgIGljb246IGRhdGFBcnJheVswXS53ZWF0aGVyWzBdLmljb24sXG4gICAgd2luZFNwZWVkOiBkYXRhQXJyYXlbMF0ud2luZC5zcGVlZCxcbiAgICBodW1pZGl0eTogZGF0YUFycmF5WzBdLm1haW4uaHVtaWRpdHksXG4gICAgbWF4VGVtcDogZGF0YUFycmF5WzBdLm1haW4udGVtcF9tYXgsXG4gICAgbWluVGVtcDogZGF0YUFycmF5WzBdLm1haW4udGVtcF9taW4sXG4gIH07XG5cbiAgY29uc3QgZm9yZWNhc3RPYmplY3RBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgoZGF0YUFycmF5WzFdLmxpc3RbaV0uZHQgKyBkYXRhQXJyYXlbMV0uY2l0eS50aW1lem9uZSkgKiAxMDAwKTtcbiAgICBjb25zdCBvYmplY3QgPSB7XG4gICAgICBsb2NhbFRpbWU6IGRhdGVPYmplY3QuZ2V0VVRDSG91cnMoKSxcbiAgICAgIHRlbXA6IGRhdGFBcnJheVsxXS5saXN0W2ldLm1haW4udGVtcCxcbiAgICAgIHdlYXRoZXI6IGRhdGFBcnJheVsxXS5saXN0W2ldLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIGljb246IGRhdGFBcnJheVsxXS5saXN0W2ldLndlYXRoZXJbMF0uaWNvbixcbiAgICAgIHdpbmRTcGVlZDogZGF0YUFycmF5WzFdLmxpc3RbaV0ud2luZC5zcGVlZCxcbiAgICAgIGh1bWlkaXR5OiBkYXRhQXJyYXlbMV0ubGlzdFtpXS5tYWluLmh1bWlkaXR5LFxuICAgIH07XG4gICAgZm9yZWNhc3RPYmplY3RBcnJheS5wdXNoKG9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gW2N1cnJlbnRPYmplY3QsIGZvcmVjYXN0T2JqZWN0QXJyYXldO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHJlbmRlckhvbWVwYWdlIGZyb20gJy4vaG9tZXBhZ2VET00nO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG53aW5kb3cudW5pdCA9ICdtZXRyaWMnO1xucmVuZGVySG9tZXBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==