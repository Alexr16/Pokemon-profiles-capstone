/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/like.png */ "./src/images/like.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/heart.png */ "./src/images/heart.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close.png */ "./src/images/close.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.logo {\n  width: 60px;\n  margin: 0 40px 0 1rem;\n}\n\n.logo-img {\n  width: 100%;\n}\n\n.nav-bar {\n  display: flex;\n  max-width: 90%;\n  margin: 10px auto;\n  padding: 5px 5px 50px 5px;\n  align-items: center;\n}\n\n.navigation {\n  display: flex;\n  list-style: none;\n}\n.navigation .link {\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n}\n.navigation .link:hover,\n.navigation .active {\n  color: #d5a100;\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.contact-link {\n  margin-right: 10px;\n}\n\n.add-new-link {\n  padding: 0 20px;\n  margin: 0 20px;\n}\n\n#cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 200px;\n  border: 2px solid black;\n  margin-bottom: 1rem;\n  background: radial-gradient(circle, #555, #535353, #505050, #5a5858, #4c4c4c);\n  box-shadow: 3px 3px #536e87;\n}\n\n.poke-img {\n  width: 80%;\n  height: 80%;\n}\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  margin-bottom: 2.5rem;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n}\n\n.title {\n  padding-right: 3rem;\n}\n\n.like {\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n}\n\n.like:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.count {\n  display: contents;\n}\n\n.likes-count {\n  align-self: end;\n  padding: 0.5rem 0 0.2rem;\n}\n\n.btns {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment,\n.reservation {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px #536e87;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n}\n\n.comment:hover,\n.reservation:hover {\n  background: #536e87;\n  color: #fff;\n}\n\nfooter {\n  max-width: 100%;\n  padding: 5px 5px 5px 15px;\n  border: 2px solid #000;\n  background-color: #fff;\n  margin-top: 2rem;\n}\n\n.modalBackground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  align-content: center;\n}\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 95%;\n  width: 95%;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  background-color: #fff;\n  border: 3px solid #000;\n  align-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 28px;\n}\n\n.scroll {\n  overflow-y: hidden;\n}\n\n.image-popup {\n  display: flex;\n  justify-content: center;\n}\n\n.popup-img {\n  padding-top: 20px;\n  width: 25%;\n  height: 25%;\n}\n\n.poke-title {\n  font-size: 3em;\n}\n\n.pokeInfo {\n  gap: 10px;\n  text-align: left;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto auto;\n  grid-row-gap: 10px;\n  grid-column-gap: 77px;\n  font-weight: bold;\n}\n\n.pop-title {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n}\n\n.form {\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 20px;\n  width: 300px;\n  justify-content: center;\n}\n\n.formName,\n.formInsight {\n  border: 2px solid;\n  padding: 2px;\n}\n\n.formButton {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px #536e87;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n  width: 200px;\n}\n\n.formContain {\n  display: flex;\n  justify-content: center;\n}\n\n.commentContain {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.commentTitle {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.commentInfo {\n  display: flex;\n  justify-content: center;\n}\n\n.closeBtn {\n  display: block;\n  position: absolute;\n  right: 10px;\n  transition: 0.3s;\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n  margin-top: 10px;\n}\n\n.ulComment {\n  text-decoration: none;\n  list-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$shadow: #536e87;\r\n$btn-hover: #536e87;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.logo {\r\n  width: 60px;\r\n  margin: 0 40px 0 1rem;\r\n}\r\n\r\n.logo-img {\r\n  width: 100%;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  max-width: 90%;\r\n  margin: 10px auto;\r\n  padding: 5px 5px 50px 5px;\r\n  align-items: center;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  list-style: none;\r\n\r\n  .link {\r\n    text-decoration: none;\r\n    color: #000;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .link:hover,\r\n  .active {\r\n    color: #d5a100;\r\n    text-decoration: underline;\r\n    font-weight: bold;\r\n  }\r\n}\r\n\r\n.contact-link {\r\n  margin-right: 10px;\r\n}\r\n\r\n.add-new-link {\r\n  padding: 0 20px;\r\n  margin: 0 20px;\r\n}\r\n\r\n#cards {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.image-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 200px;\r\n  height: 200px;\r\n  border: 2px solid black;\r\n  margin-bottom: 1rem;\r\n  background: radial-gradient(circle, #555, #535353, #505050, #5a5858, #4c4c4c);\r\n  box-shadow: 3px 3px #536e87;\r\n}\r\n\r\n.poke-img {\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: auto;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.card-title {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.title {\r\n  padding-right: 3rem;\r\n}\r\n\r\n.like {\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n  background-image: url('./images/like.png');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.like:hover {\r\n  background-image: url('./images/heart.png');\r\n}\r\n\r\n.count {\r\n  display: contents;\r\n}\r\n\r\n.likes-count {\r\n  align-self: end;\r\n  padding: 0.5rem 0 0.2rem;\r\n}\r\n\r\n.btns {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment,\r\n.reservation {\r\n  background: none;\r\n  border: 2px solid black;\r\n  box-shadow: 3px 3px $shadow;\r\n  cursor: pointer;\r\n  margin: 0.5rem 0;\r\n  padding: 5px;\r\n}\r\n\r\n.comment:hover,\r\n.reservation:hover {\r\n  background: $btn-hover;\r\n  color: #fff;\r\n}\r\n\r\nfooter {\r\n  max-width: 100%;\r\n  padding: 5px 5px 5px 15px;\r\n  border: 2px solid #000;\r\n  background-color: #fff;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.modalBackground {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  align-content: center;\r\n}\r\n\r\n.modalContainer {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 95%;\r\n  width: 95%;\r\n  margin-left: 2rem;\r\n  margin-right: 2rem;\r\n  margin-top: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  background-color: #fff;\r\n  border: 3px solid #000;\r\n  align-content: center;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  padding-bottom: 28px;\r\n}\r\n\r\n.scroll {\r\n  overflow-y: hidden;\r\n}\r\n\r\n.image-popup {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popup-img {\r\n  padding-top: 20px;\r\n  width: 25%;\r\n  height: 25%;\r\n}\r\n\r\n.poke-title {\r\n  font-size: 3em;\r\n}\r\n\r\n.pokeInfo {\r\n  gap: 10px;\r\n  text-align: left;\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  grid-row-gap: 10px;\r\n  grid-column-gap: 77px;\r\n  font-weight: bold;\r\n}\r\n\r\n.pop-title {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.form {\r\n  display: grid;\r\n  grid-template-rows: auto;\r\n  grid-row-gap: 20px;\r\n  width: 300px;\r\n  justify-content: center;\r\n}\r\n\r\n.formName,\r\n.formInsight {\r\n  border: 2px solid;\r\n  padding: 2px;\r\n}\r\n\r\n.formButton {\r\n  background: none;\r\n  border: 2px solid black;\r\n  box-shadow: 3px 3px $shadow;\r\n  cursor: pointer;\r\n  margin: 0.5rem 0;\r\n  padding: 5px;\r\n  width: 200px;\r\n}\r\n\r\n.formContain {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.commentContain {\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.commentTitle {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.commentInfo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.closeBtn {\r\n  display: block;\r\n  position: absolute;\r\n  right: 10px;\r\n  transition: 0.3s;\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n  background-image: url('./images/close.png');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.ulComment {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalized": () => (/* binding */ capitalized),
/* harmony export */   "commentsCounter": () => (/* binding */ commentsCounter),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createLikes": () => (/* binding */ createLikes),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getPokemon": () => (/* binding */ getPokemon),
/* harmony export */   "idArray": () => (/* binding */ idArray),
/* harmony export */   "itemsCounter": () => (/* binding */ itemsCounter),
/* harmony export */   "sendComment": () => (/* binding */ sendComment),
/* harmony export */   "sendLike": () => (/* binding */ sendLike),
/* harmony export */   "updatelikes": () => (/* binding */ updatelikes)
/* harmony export */ });
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AWM7JxII6f3dlrfRP916/likes/';
const urlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AWM7JxII6f3dlrfRP916/comments';

const idArray = () => {
  const id = ['charizard', 'pikachu', 'ampharos', 'magmar', 'dragonite', 'mewtwo', 'arcanine', 'lugia', 'altaria'];
  return id;
};
const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

const createApp = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response.json();
};

const createLikes = async (data) => {
  await fetch(urlLikes, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: data.item_id }),
  });
};

const getLikes = async () => {
  const response = await fetch(urlLikes);
  const likes = await response.json();
  return likes;
};

const createComment = async (data) => {
  await fetch(urlComments, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: data.item_id,
      username: data.username,
      comment: data.comment,
    }),
  });
};

const getComment = async (id) => {
  const response = await fetch(`${urlComments}?item_id=${id}`);
  const likes = Promise.resolve(await response.json());
  return likes;
};

const sendComment = async (pokemon, name, comments) => {
  const data = {
    item_id: pokemon,
    username: name,
    comment: comments,
  };
  Promise.resolve(await createComment(data));
};

const capitalized = (string) => {
  const capit = string.split('');
  capit[0] = capit[0].toUpperCase();
  return capit.join('');
};

const sendLike = async (pokemon) => {
  const data = {
    item_id: pokemon,
  };
  Promise.resolve(await createLikes(data));
};

const updatelikes = async (id) => {
  const data = await Promise.resolve(getLikes());
  const likeApi = data.find((x) => {
    if (x.item_id === id) return true;
    return false;
  });
  return likeApi.likes;
};

const itemsCounter = () => {
  const data = idArray();
  const count = data.length;
  return count;
};

const commentsCounter = async (id) => {
  const dataComment = await getComment(id);
  const count = dataComment.length;
  return count;
};




/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");


const body = document.getElementById('body');

const nav = document.getElementById('menu');
const ul = document.createElement('ul');
ul.classList.add('navigation');
ul.innerHTML = `
          <li class="nav-link list-link"><a class="link active">Pokedex(${(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.itemsCounter)()})</a></li>
          <li class="nav-link add-new-link"><a class="link">Region</a></li>
          <li class="nav-link contact-link"><a class="link">Types</a></li>
`;
nav.appendChild(ul);

const alert = (message, className) => {
  const DIV = document.createElement('div');
  DIV.className = `alert alert-${className}`;
  DIV.appendChild(document.createTextNode(message));
  const CONTAINER = document.querySelector('.form');
  const PAGE = document.querySelector('.formButton');
  CONTAINER.insertBefore(DIV, PAGE);
  setTimeout(() => document.querySelector('.alert').remove(), 1500);
};

const popupWindow = async (pokemon) => {
  const cardContainer = document.getElementById('cards');
  const modalBackground = document.createElement('section');
  modalBackground.className = 'modalBackground';
  cardContainer.appendChild(modalBackground);

  const modalContainer = document.createElement('section');
  modalContainer.className = 'modalContainer';

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('closeBtn');
  modalContainer.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    body.classList.toggle('scroll');
    modalBackground.remove();
  });

  const imageontainer = document.createElement('div');
  imageontainer.classList.add('image-popup');
  modalContainer.appendChild(imageontainer);

  const image = document.createElement('img');
  image.classList.add('popup-img');
  image.src = pokemon.sprites.other.dream_world.front_default;
  image.alt = pokemon.name;
  imageontainer.appendChild(image);

  const popTitle = document.createElement('div');
  popTitle.classList.add('pop-title');
  modalContainer.appendChild(popTitle);

  const title = document.createElement('h2');
  title.classList.add('poke-title');
  title.innerText = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.capitalized)(pokemon.name);
  popTitle.appendChild(title);

  const pokeInfo = document.createElement('div');
  pokeInfo.classList.add('pokeInfo');
  modalContainer.appendChild(pokeInfo);

  const weight = document.createElement('span');
  weight.classList.add('weight');
  weight.innerText = `Weight: ${pokemon.weight}`;

  pokeInfo.appendChild(weight);

  const pokeID = document.createElement('span');
  pokeID.classList.add('pokeId');
  pokeID.innerText = `id: ${pokemon.id} `;
  pokeInfo.appendChild(pokeID);

  const type = document.createElement('span');
  type.classList.add('type');
  type.innerText = `Type: ${pokemon.types[0].type.name}`;
  pokeInfo.appendChild(type);

  const ability1 = document.createElement('span');
  ability1.classList.add('ability1');
  ability1.innerText = `Ability 1: ${pokemon.abilities[0].ability.name}`;
  pokeInfo.appendChild(ability1);

  const ability2 = document.createElement('span');
  ability2.classList.add('ability2');
  ability2.innerText = `Ability 2: ${pokemon.abilities[1].ability.name}`;
  pokeInfo.appendChild(ability2);

  const commentContain = document.createElement('div');
  commentContain.classList.add('commentContain');
  modalContainer.appendChild(commentContain);

  const dataComment = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(pokemon.name);
  const count = 0;

  const commentTitle = document.createElement('h2');
  commentTitle.classList.add('commentTitle');
  if (dataComment.length === undefined) {
    commentTitle.textContent = `Comments(${count})`;
  } else {
    commentTitle.textContent = `Comments(${await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.commentsCounter)(pokemon.name)})`;
  }
  commentContain.appendChild(commentTitle);

  const commentInfo = document.createElement('div');
  commentInfo.classList.add('commentInfo');
  commentContain.appendChild(commentInfo);
  const ul = document.createElement('ul');
  ul.classList.add('ulComment');
  ul.id = 'comments';
  commentInfo.appendChild(ul);

  for (let i = 0; i < dataComment.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('liComment');
    li.innerHTML = `${dataComment[i].creation_date} ${dataComment[i].username}: ${dataComment[i].comment}`;
    ul.appendChild(li);
  }

  const formContain = document.createElement('div');
  formContain.classList.add('formContain');
  modalContainer.appendChild(formContain);

  const form = document.createElement('form');
  form.classList.add('form');

  const formTitle = document.createElement('h2');
  formTitle.classList.add('formTitle');
  formTitle.textContent = 'Add a comment';
  form.appendChild(formTitle);

  const formName = document.createElement('input');
  formName.classList.add('formName');
  formName.id = 'formName';
  formName.setAttribute('type', 'text');
  formName.setAttribute('name', 'name');
  formName.setAttribute('placeholder', 'Your name');
  form.appendChild(formName);

  const formInsight = document.createElement('textarea');
  formInsight.id = 'formInsight';
  formInsight.classList.add('formInsight');
  formInsight.setAttribute('type', 'textarea');
  formInsight.setAttribute('name', 'name');
  formInsight.setAttribute('placeholder', 'Your insight');
  form.appendChild(formInsight);

  const formButton = document.createElement('input');
  formButton.classList.add('formButton');
  formButton.setAttribute('type', 'submit');
  formButton.setAttribute('value', 'Comment');
  form.appendChild(formButton);

  formButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const formInsight = document.getElementById('formInsight').value;
    const formName = document.getElementById('formName').value;
    if (formInsight === '' && formName === '') {
      alert('Form cannot be empty', 'danger');
    } else {
      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.sendComment)(pokemon.name, formName, formInsight);
      body.classList.toggle('scroll');
      modalBackground.remove();
    }
  });

  formContain.appendChild(form);
  modalBackground.appendChild(modalContainer);
};

const display = async (monster) => {
  const pokemon = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPokemon)(monster);
  const cardContainer = document.getElementById('cards');
  const card = document.createElement('div');
  card.classList.add('card-container');
  cardContainer.appendChild(card);

  const imageontainer = document.createElement('div');
  imageontainer.classList.add('image-container');
  card.appendChild(imageontainer);

  const image = document.createElement('img');
  image.classList.add('poke-img');
  image.src = pokemon.sprites.other.dream_world.front_default;
  image.alt = pokemon.name;
  imageontainer.appendChild(image);

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  card.appendChild(cardTitle);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.innerText = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.capitalized)(pokemon.name);
  cardTitle.appendChild(title);

  const like = document.createElement('button');
  like.classList.add('like');
  cardTitle.appendChild(like);

  const likesText = document.createElement('div');
  likesText.classList.add('count');
  card.appendChild(likesText);

  const likesCount = document.createElement('p');
  likesCount.classList.add('likes-count');
  likesCount.innerHTML = `${await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.updatelikes)(pokemon.name))} likes`;
  likesText.appendChild(likesCount);

  like.addEventListener('click', async () => {
    await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.sendLike)(pokemon.name));
    likesCount.innerHTML = `${await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.updatelikes)(pokemon.name))} likes`;
  });

  const buttons = document.createElement('div');
  buttons.classList.add('btns');
  card.appendChild(buttons);

  const comments = document.createElement('button');
  comments.classList.add('comment');
  comments.id = 'comment-btn';
  comments.innerText = 'Comment';
  buttons.appendChild(comments);

  comments.addEventListener('click', () => {
    body.classList.toggle('scroll');
    popupWindow(pokemon);
  });

  const reservations = document.createElement('button');
  reservations.classList.add('reservation');
  reservations.id = 'reservation-btn';
  reservations.innerText = 'Reservations';
  buttons.appendChild(reservations);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");



const monsters = (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.idArray)();
const createCards = () => {
  monsters.forEach((pokemon) => (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pokemon));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCards);

/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c623043a998c86047c46.png";

/***/ }),

/***/ "./src/images/heart.png":
/*!******************************!*\
  !*** ./src/images/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4e47dce19955d2d5db5.png";

/***/ }),

/***/ "./src/images/like.png":
/*!*****************************!*\
  !*** ./src/images/like.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d07c665420f28d7064d2.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions.js */ "./src/modules/functions.js");



document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFB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QUMyQjs7QUFFakQ7QUFDQSxFQUFFLGlFQUFXO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2xpa2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaGVhcnQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2xvc2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW46IDAgNDBweCAwIDFyZW07XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBwYWRkaW5nOiA1cHggNXB4IDUwcHggNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5uYXZpZ2F0aW9uIC5saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLm5hdmlnYXRpb24gLmxpbms6aG92ZXIsXFxuLm5hdmlnYXRpb24gLmFjdGl2ZSB7XFxuICBjb2xvcjogI2Q1YTEwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250YWN0LWxpbmsge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saW5rIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4jY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjNTU1LCAjNTM1MzUzLCAjNTA1MDUwLCAjNWE1ODU4LCAjNGM0YzRjKTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzUzNmU4NztcXG59XFxuXFxuLnBva2UtaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ubGlrZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5saWtlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5jb3VudCB7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLmxpa2VzLWNvdW50IHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuMnJlbTtcXG59XFxuXFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LFxcbi5yZXNlcnZhdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAzcHggM3B4ICM1MzZlODc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY29tbWVudDpob3ZlcixcXG4ucmVzZXJ2YXRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzUzNmU4NztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLm1vZGFsQmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogOTUlO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxufVxcblxcbi5zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2UtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMjUlO1xcbn1cXG5cXG4ucG9rZS10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLnBva2VJbmZvIHtcXG4gIGdhcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMTBweDtcXG4gIGdyaWQtY29sdW1uLWdhcDogNzdweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtTmFtZSxcXG4uZm9ybUluc2lnaHQge1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5mb3JtQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzUzNmU4NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50Q29udGFpbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmNvbW1lbnRUaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29tbWVudEluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udWxDb21tZW50IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRko7QUFLRTs7RUFFRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkVBQUE7RUFDQSwyQkFBQTtBQUpGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UseURBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUpGOztBQU9BOztFQUVFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTs7RUFFRSxtQkE1SVU7RUE2SVYsV0FBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFPQTs7RUFFRSxpQkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUpGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRzaGFkb3c6ICM1MzZlODc7XFxyXFxuJGJ0bi1ob3ZlcjogIzUzNmU4NztcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBtYXJnaW46IDAgNDBweCAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDUwcHggNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFxyXFxuICAubGluayB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGluazpob3ZlcixcXHJcXG4gIC5hY3RpdmUge1xcclxcbiAgICBjb2xvcjogI2Q1YTEwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1saW5rIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1uZXctbGluayB7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBtYXJnaW46IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzU1NSwgIzUzNTM1MywgIzUwNTA1MCwgIzVhNTg1OCwgIzRjNGM0Yyk7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4ICM1MzZlODc7XFxyXFxufVxcclxcblxcclxcbi5wb2tlLWltZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvbGlrZS5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvaGVhcnQucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5jb3VudCB7XFxyXFxuICBkaXNwbGF5OiBjb250ZW50cztcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvdW50IHtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LFxcclxcbi5yZXNlcnZhdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4ICRzaGFkb3c7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW46IDAuNXJlbSAwO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudDpob3ZlcixcXHJcXG4ucmVzZXJ2YXRpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogJGJ0bi1ob3ZlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsQmFja2dyb3VuZCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxDb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogOTUlO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2VJbmZvIHtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtcm93LWdhcDogMTBweDtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogNzdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtTmFtZSxcXHJcXG4uZm9ybUluc2lnaHQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggJHNoYWRvdztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ29udGFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50Q29udGFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRUaXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9jbG9zZS5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udWxDb21tZW50IHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xyXG5jb25zdCB1cmxMaWtlcyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9BV003SnhJSTZmM2RscmZSUDkxNi9saWtlcy8nO1xyXG5jb25zdCB1cmxDb21tZW50cyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9BV003SnhJSTZmM2RscmZSUDkxNi9jb21tZW50cyc7XHJcblxyXG5jb25zdCBpZEFycmF5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlkID0gWydjaGFyaXphcmQnLCAncGlrYWNodScsICdhbXBoYXJvcycsICdtYWdtYXInLCAnZHJhZ29uaXRlJywgJ21ld3R3bycsICdhcmNhbmluZScsICdsdWdpYScsICdhbHRhcmlhJ107XHJcbiAgcmV0dXJuIGlkO1xyXG59O1xyXG5jb25zdCBnZXRQb2tlbW9uID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUFwcCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTGlrZXMgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKHVybExpa2VzLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGRhdGEuaXRlbV9pZCB9KSxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsTGlrZXMpO1xyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBsaWtlcztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKHVybENvbW1lbnRzLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGRhdGEuaXRlbV9pZCxcclxuICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgIGNvbW1lbnQ6IGRhdGEuY29tbWVudCxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsQ29tbWVudHN9P2l0ZW1faWQ9JHtpZH1gKTtcclxuICBjb25zdCBsaWtlcyA9IFByb21pc2UucmVzb2x2ZShhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gIHJldHVybiBsaWtlcztcclxufTtcclxuXHJcbmNvbnN0IHNlbmRDb21tZW50ID0gYXN5bmMgKHBva2Vtb24sIG5hbWUsIGNvbW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGl0ZW1faWQ6IHBva2Vtb24sXHJcbiAgICB1c2VybmFtZTogbmFtZSxcclxuICAgIGNvbW1lbnQ6IGNvbW1lbnRzLFxyXG4gIH07XHJcbiAgUHJvbWlzZS5yZXNvbHZlKGF3YWl0IGNyZWF0ZUNvbW1lbnQoZGF0YSkpO1xyXG59O1xyXG5cclxuY29uc3QgY2FwaXRhbGl6ZWQgPSAoc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY2FwaXQgPSBzdHJpbmcuc3BsaXQoJycpO1xyXG4gIGNhcGl0WzBdID0gY2FwaXRbMF0udG9VcHBlckNhc2UoKTtcclxuICByZXR1cm4gY2FwaXQuam9pbignJyk7XHJcbn07XHJcblxyXG5jb25zdCBzZW5kTGlrZSA9IGFzeW5jIChwb2tlbW9uKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGl0ZW1faWQ6IHBva2Vtb24sXHJcbiAgfTtcclxuICBQcm9taXNlLnJlc29sdmUoYXdhaXQgY3JlYXRlTGlrZXMoZGF0YSkpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlbGlrZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdldExpa2VzKCkpO1xyXG4gIGNvbnN0IGxpa2VBcGkgPSBkYXRhLmZpbmQoKHgpID0+IHtcclxuICAgIGlmICh4Lml0ZW1faWQgPT09IGlkKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuICByZXR1cm4gbGlrZUFwaS5saWtlcztcclxufTtcclxuXHJcbmNvbnN0IGl0ZW1zQ291bnRlciA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gaWRBcnJheSgpO1xyXG4gIGNvbnN0IGNvdW50ID0gZGF0YS5sZW5ndGg7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgY29tbWVudHNDb3VudGVyID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgZGF0YUNvbW1lbnQgPSBhd2FpdCBnZXRDb21tZW50KGlkKTtcclxuICBjb25zdCBjb3VudCA9IGRhdGFDb21tZW50Lmxlbmd0aDtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGlkQXJyYXksIGdldFBva2Vtb24sIGNyZWF0ZUxpa2VzLCBnZXRMaWtlcywgZ2V0Q29tbWVudCwgY3JlYXRlQXBwLCBzZW5kQ29tbWVudCwgaXRlbXNDb3VudGVyLFxyXG4gIGNhcGl0YWxpemVkLCBzZW5kTGlrZSwgdXBkYXRlbGlrZXMsIGNvbW1lbnRzQ291bnRlcixcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBnZXRQb2tlbW9uLCBnZXRDb21tZW50LCBzZW5kQ29tbWVudCxcclxuICBpdGVtc0NvdW50ZXIsIGNhcGl0YWxpemVkLCBzZW5kTGlrZSwgdXBkYXRlbGlrZXMsIGNvbW1lbnRzQ291bnRlcixcclxufSBmcm9tICcuL2FwaS5qcyc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbmNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxudWwuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbicpO1xyXG51bC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtbGluayBsaXN0LWxpbmtcIj48YSBjbGFzcz1cImxpbmsgYWN0aXZlXCI+UG9rZWRleCgke2l0ZW1zQ291bnRlcigpfSk8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1saW5rIGFkZC1uZXctbGlua1wiPjxhIGNsYXNzPVwibGlua1wiPlJlZ2lvbjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWxpbmsgY29udGFjdC1saW5rXCI+PGEgY2xhc3M9XCJsaW5rXCI+VHlwZXM8L2E+PC9saT5cclxuYDtcclxubmF2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbmNvbnN0IGFsZXJ0ID0gKG1lc3NhZ2UsIGNsYXNzTmFtZSkgPT4ge1xyXG4gIGNvbnN0IERJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIERJVi5jbGFzc05hbWUgPSBgYWxlcnQgYWxlcnQtJHtjbGFzc05hbWV9YDtcclxuICBESVYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZSkpO1xyXG4gIGNvbnN0IENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgY29uc3QgUEFHRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQnV0dG9uJyk7XHJcbiAgQ09OVEFJTkVSLmluc2VydEJlZm9yZShESVYsIFBBR0UpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0JykucmVtb3ZlKCksIDE1MDApO1xyXG59O1xyXG5cclxuY29uc3QgcG9wdXBXaW5kb3cgPSBhc3luYyAocG9rZW1vbikgPT4ge1xyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZHMnKTtcclxuICBjb25zdCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTmFtZSA9ICdtb2RhbEJhY2tncm91bmQnO1xyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsQ29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ0bicpO1xyXG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuXHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbCcpO1xyXG4gICAgbW9kYWxCYWNrZ3JvdW5kLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBpbWFnZW9udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW1hZ2VvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1wb3B1cCcpO1xyXG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlb250YWluZXIpO1xyXG5cclxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWltZycpO1xyXG4gIGltYWdlLnNyYyA9IHBva2Vtb24uc3ByaXRlcy5vdGhlci5kcmVhbV93b3JsZC5mcm9udF9kZWZhdWx0O1xyXG4gIGltYWdlLmFsdCA9IHBva2Vtb24ubmFtZTtcclxuICBpbWFnZW9udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgY29uc3QgcG9wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3BUaXRsZS5jbGFzc0xpc3QuYWRkKCdwb3AtdGl0bGUnKTtcclxuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BUaXRsZSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwb2tlLXRpdGxlJyk7XHJcbiAgdGl0bGUuaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZWQocG9rZW1vbi5uYW1lKTtcclxuICBwb3BUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IHBva2VJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9rZUluZm8uY2xhc3NMaXN0LmFkZCgncG9rZUluZm8nKTtcclxuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChwb2tlSW5mbyk7XHJcblxyXG4gIGNvbnN0IHdlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB3ZWlnaHQuY2xhc3NMaXN0LmFkZCgnd2VpZ2h0Jyk7XHJcbiAgd2VpZ2h0LmlubmVyVGV4dCA9IGBXZWlnaHQ6ICR7cG9rZW1vbi53ZWlnaHR9YDtcclxuXHJcbiAgcG9rZUluZm8uYXBwZW5kQ2hpbGQod2VpZ2h0KTtcclxuXHJcbiAgY29uc3QgcG9rZUlEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHBva2VJRC5jbGFzc0xpc3QuYWRkKCdwb2tlSWQnKTtcclxuICBwb2tlSUQuaW5uZXJUZXh0ID0gYGlkOiAke3Bva2Vtb24uaWR9IGA7XHJcbiAgcG9rZUluZm8uYXBwZW5kQ2hpbGQocG9rZUlEKTtcclxuXHJcbiAgY29uc3QgdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0eXBlLmNsYXNzTGlzdC5hZGQoJ3R5cGUnKTtcclxuICB0eXBlLmlubmVyVGV4dCA9IGBUeXBlOiAke3Bva2Vtb24udHlwZXNbMF0udHlwZS5uYW1lfWA7XHJcbiAgcG9rZUluZm8uYXBwZW5kQ2hpbGQodHlwZSk7XHJcblxyXG4gIGNvbnN0IGFiaWxpdHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGFiaWxpdHkxLmNsYXNzTGlzdC5hZGQoJ2FiaWxpdHkxJyk7XHJcbiAgYWJpbGl0eTEuaW5uZXJUZXh0ID0gYEFiaWxpdHkgMTogJHtwb2tlbW9uLmFiaWxpdGllc1swXS5hYmlsaXR5Lm5hbWV9YDtcclxuICBwb2tlSW5mby5hcHBlbmRDaGlsZChhYmlsaXR5MSk7XHJcblxyXG4gIGNvbnN0IGFiaWxpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGFiaWxpdHkyLmNsYXNzTGlzdC5hZGQoJ2FiaWxpdHkyJyk7XHJcbiAgYWJpbGl0eTIuaW5uZXJUZXh0ID0gYEFiaWxpdHkgMjogJHtwb2tlbW9uLmFiaWxpdGllc1sxXS5hYmlsaXR5Lm5hbWV9YDtcclxuICBwb2tlSW5mby5hcHBlbmRDaGlsZChhYmlsaXR5Mik7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29tbWVudENvbnRhaW4uY2xhc3NMaXN0LmFkZCgnY29tbWVudENvbnRhaW4nKTtcclxuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50Q29udGFpbik7XHJcblxyXG4gIGNvbnN0IGRhdGFDb21tZW50ID0gYXdhaXQgZ2V0Q29tbWVudChwb2tlbW9uLm5hbWUpO1xyXG4gIGNvbnN0IGNvdW50ID0gMDtcclxuXHJcbiAgY29uc3QgY29tbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb21tZW50VGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tbWVudFRpdGxlJyk7XHJcbiAgaWYgKGRhdGFDb21tZW50Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb21tZW50VGl0bGUudGV4dENvbnRlbnQgPSBgQ29tbWVudHMoJHtjb3VudH0pYDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29tbWVudFRpdGxlLnRleHRDb250ZW50ID0gYENvbW1lbnRzKCR7YXdhaXQgY29tbWVudHNDb3VudGVyKHBva2Vtb24ubmFtZSl9KWA7XHJcbiAgfVxyXG4gIGNvbW1lbnRDb250YWluLmFwcGVuZENoaWxkKGNvbW1lbnRUaXRsZSk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29tbWVudEluZm8uY2xhc3NMaXN0LmFkZCgnY29tbWVudEluZm8nKTtcclxuICBjb21tZW50Q29udGFpbi5hcHBlbmRDaGlsZChjb21tZW50SW5mbyk7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIHVsLmNsYXNzTGlzdC5hZGQoJ3VsQ29tbWVudCcpO1xyXG4gIHVsLmlkID0gJ2NvbW1lbnRzJztcclxuICBjb21tZW50SW5mby5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUNvbW1lbnQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpQ29tbWVudCcpO1xyXG4gICAgbGkuaW5uZXJIVE1MID0gYCR7ZGF0YUNvbW1lbnRbaV0uY3JlYXRpb25fZGF0ZX0gJHtkYXRhQ29tbWVudFtpXS51c2VybmFtZX06ICR7ZGF0YUNvbW1lbnRbaV0uY29tbWVudH1gO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybUNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb3JtQ29udGFpbi5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbicpO1xyXG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcclxuXHJcbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybVRpdGxlJyk7XHJcbiAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBhIGNvbW1lbnQnO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuXHJcbiAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGZvcm1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm1OYW1lJyk7XHJcbiAgZm9ybU5hbWUuaWQgPSAnZm9ybU5hbWUnO1xyXG4gIGZvcm1OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcclxuICBmb3JtTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybU5hbWUpO1xyXG5cclxuICBjb25zdCBmb3JtSW5zaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgZm9ybUluc2lnaHQuaWQgPSAnZm9ybUluc2lnaHQnO1xyXG4gIGZvcm1JbnNpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm1JbnNpZ2h0Jyk7XHJcbiAgZm9ybUluc2lnaHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XHJcbiAgZm9ybUluc2lnaHQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcclxuICBmb3JtSW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgaW5zaWdodCcpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUluc2lnaHQpO1xyXG5cclxuICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm1CdXR0b24nKTtcclxuICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ29tbWVudCcpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XHJcblxyXG4gIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybUluc2lnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUluc2lnaHQnKS52YWx1ZTtcclxuICAgIGNvbnN0IGZvcm1OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1OYW1lJykudmFsdWU7XHJcbiAgICBpZiAoZm9ybUluc2lnaHQgPT09ICcnICYmIGZvcm1OYW1lID09PSAnJykge1xyXG4gICAgICBhbGVydCgnRm9ybSBjYW5ub3QgYmUgZW1wdHknLCAnZGFuZ2VyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZW5kQ29tbWVudChwb2tlbW9uLm5hbWUsIGZvcm1OYW1lLCBmb3JtSW5zaWdodCk7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsJyk7XHJcbiAgICAgIG1vZGFsQmFja2dyb3VuZC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9ybUNvbnRhaW4uYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgbW9kYWxCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXkgPSBhc3luYyAobW9uc3RlcikgPT4ge1xyXG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBnZXRQb2tlbW9uKG1vbnN0ZXIpO1xyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZHMnKTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gIGNvbnN0IGltYWdlb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbWFnZW9udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWNvbnRhaW5lcicpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2VvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgncG9rZS1pbWcnKTtcclxuICBpbWFnZS5zcmMgPSBwb2tlbW9uLnNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdDtcclxuICBpbWFnZS5hbHQgPSBwb2tlbW9uLm5hbWU7XHJcbiAgaW1hZ2VvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICB0aXRsZS5pbm5lclRleHQgPSBjYXBpdGFsaXplZChwb2tlbW9uLm5hbWUpO1xyXG4gIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBsaWtlLmNsYXNzTGlzdC5hZGQoJ2xpa2UnKTtcclxuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQobGlrZSk7XHJcblxyXG4gIGNvbnN0IGxpa2VzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxpa2VzVGV4dC5jbGFzc0xpc3QuYWRkKCdjb3VudCcpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlrZXNUZXh0KTtcclxuXHJcbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBsaWtlc0NvdW50LmNsYXNzTGlzdC5hZGQoJ2xpa2VzLWNvdW50Jyk7XHJcbiAgbGlrZXNDb3VudC5pbm5lckhUTUwgPSBgJHthd2FpdCBQcm9taXNlLnJlc29sdmUodXBkYXRlbGlrZXMocG9rZW1vbi5uYW1lKSl9IGxpa2VzYDtcclxuICBsaWtlc1RleHQuYXBwZW5kQ2hpbGQobGlrZXNDb3VudCk7XHJcblxyXG4gIGxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUoc2VuZExpa2UocG9rZW1vbi5uYW1lKSk7XHJcbiAgICBsaWtlc0NvdW50LmlubmVySFRNTCA9IGAke2F3YWl0IFByb21pc2UucmVzb2x2ZSh1cGRhdGVsaWtlcyhwb2tlbW9uLm5hbWUpKX0gbGlrZXNgO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidG5zJyk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuXHJcbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb21tZW50cy5jbGFzc0xpc3QuYWRkKCdjb21tZW50Jyk7XHJcbiAgY29tbWVudHMuaWQgPSAnY29tbWVudC1idG4nO1xyXG4gIGNvbW1lbnRzLmlubmVyVGV4dCA9ICdDb21tZW50JztcclxuICBidXR0b25zLmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcclxuXHJcbiAgY29tbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbCcpO1xyXG4gICAgcG9wdXBXaW5kb3cocG9rZW1vbik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlc2VydmF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlc2VydmF0aW9ucy5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbicpO1xyXG4gIHJlc2VydmF0aW9ucy5pZCA9ICdyZXNlcnZhdGlvbi1idG4nO1xyXG4gIHJlc2VydmF0aW9ucy5pbm5lclRleHQgPSAnUmVzZXJ2YXRpb25zJztcclxuICBidXR0b25zLmFwcGVuZENoaWxkKHJlc2VydmF0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyIsImltcG9ydCBkaXNwbGF5IGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IHsgaWRBcnJheSB9IGZyb20gJy4vYXBpLmpzJztcclxuXHJcbmNvbnN0IG1vbnN0ZXJzID0gaWRBcnJheSgpO1xyXG5jb25zdCBjcmVhdGVDYXJkcyA9ICgpID0+IHtcclxuICBtb25zdGVycy5mb3JFYWNoKChwb2tlbW9uKSA9PiBkaXNwbGF5KHBva2Vtb24pKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBjcmVhdGVDYXJkcyBmcm9tICcuL21vZHVsZXMvZnVuY3Rpb25zLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY3JlYXRlQ2FyZHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9