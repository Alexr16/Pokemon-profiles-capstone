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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.logo {\n  width: 60px;\n  margin: 0 40px 0 1rem;\n}\n\n.logo-img {\n  width: 100%;\n}\n\n.nav-bar {\n  display: flex;\n  max-width: 90%;\n  margin: 10px auto;\n  padding: 5px 5px 50px 5px;\n  align-items: center;\n}\n\n.navigation {\n  display: flex;\n  list-style: none;\n}\n.navigation .link {\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n}\n.navigation .link:hover,\n.navigation .active {\n  color: #d5a100;\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.contact-link {\n  margin-right: 10px;\n}\n\n.add-new-link {\n  padding: 0 20px;\n  margin: 0 20px;\n}\n\n#cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 200px;\n  border: 2px solid black;\n  margin-bottom: 1rem;\n  background: radial-gradient(circle, #555, #535353, #505050, #5a5858, #4c4c4c);\n  box-shadow: 3px 3px #536e87;\n}\n\n.poke-img {\n  width: 80%;\n  height: 80%;\n}\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  margin-bottom: 2.5rem;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n}\n\n.title {\n  padding-right: 3rem;\n}\n\n.like {\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n}\n\n.like:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.count {\n  display: contents;\n}\n\n.likes-count {\n  align-self: end;\n  padding: 0.5rem 0 0.2rem;\n}\n\n.btns {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment,\n.reservation {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px #536e87;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n}\n\n.comment:hover,\n.reservation:hover {\n  background: #536e87;\n  color: #fff;\n}\n\nfooter {\n  max-width: 100%;\n  padding: 5px 5px 5px 15px;\n  border: 2px solid #000;\n  background-color: #fff;\n  margin-top: 2rem;\n}\n\n.modalBackground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  align-content: center;\n}\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 95%;\n  width: 95%;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  background-color: #fff;\n  border: 3px solid #000;\n  align-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 28px;\n}\n\n.scroll {\n  overflow-y: hidden;\n}\n\n.image-popup {\n  display: flex;\n  justify-content: center;\n}\n\n.popup-img {\n  padding-top: 20px;\n  width: 25%;\n  height: 25%;\n}\n\n.poke-title {\n  font-size: 3em;\n}\n\n.pokeInfo {\n  gap: 10px;\n  text-align: left;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto auto;\n  grid-row-gap: 10px;\n  grid-column-gap: 77px;\n  font-weight: bold;\n}\n\n.pop-title {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n}\n\n.form {\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 20px;\n  width: 300px;\n  justify-content: center;\n}\n\n.formName,\n.formInsight {\n  border: 2px solid;\n  padding: 2px;\n}\n\n.formButton {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px #536e87;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n  width: 200px;\n}\n\n.formContain {\n  display: flex;\n  justify-content: center;\n}\n\n.commentContain {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.commentTitle {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.commentInfo {\n  display: flex;\n  justify-content: center;\n}\n\n.closeBtn {\n  display: block;\n  position: absolute;\n  right: 10px;\n  transition: 0.3s;\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n  margin-top: 10px;\n}\n\n.ulComment {\n  text-decoration: none;\n  list-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$shadow: #536e87;\n$btn-hover: #536e87;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Poppins', sans-serif;\n}\n\n.logo {\n  width: 60px;\n  margin: 0 40px 0 1rem;\n}\n\n.logo-img {\n  width: 100%;\n}\n\n.nav-bar {\n  display: flex;\n  max-width: 90%;\n  margin: 10px auto;\n  padding: 5px 5px 50px 5px;\n  align-items: center;\n}\n\n.navigation {\n  display: flex;\n  list-style: none;\n\n  .link {\n    text-decoration: none;\n    color: #000;\n    font-weight: 500;\n  }\n  .link:hover,\n  .active {\n    color: #d5a100;\n    text-decoration: underline;\n    font-weight: bold;\n  }\n}\n\n.contact-link {\n  margin-right: 10px;\n}\n\n.add-new-link {\n  padding: 0 20px;\n  margin: 0 20px;\n}\n\n#cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 200px;\n  border: 2px solid black;\n  margin-bottom: 1rem;\n  background: radial-gradient(circle, #555, #535353, #505050, #5a5858, #4c4c4c);\n  box-shadow: 3px 3px #536e87;\n}\n\n.poke-img {\n  width: 80%;\n  height: 80%;\n}\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  margin-bottom: 2.5rem;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n}\n\n.title {\n  padding-right: 3rem;\n}\n\n.like {\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url('./images/like.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n}\n\n.like:hover {\n  background-image: url('./images/heart.png');\n}\n\n.count {\n  display: contents;\n}\n\n.likes-count {\n  align-self: end;\n  padding: 0.5rem 0 0.2rem;\n}\n\n.btns {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment,\n.reservation {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px $shadow;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n}\n\n.comment:hover,\n.reservation:hover {\n  background: $btn-hover;\n  color: #fff;\n}\n\nfooter {\n  max-width: 100%;\n  padding: 5px 5px 5px 15px;\n  border: 2px solid #000;\n  background-color: #fff;\n  margin-top: 2rem;\n}\n\n.modalBackground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  align-content: center;\n}\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 95%;\n  width: 95%;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  background-color: #fff;\n  border: 3px solid #000;\n  align-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 28px;\n}\n\n.scroll {\n  overflow-y: hidden;\n}\n\n.image-popup {\n  display: flex;\n  justify-content: center;\n}\n\n.popup-img {\n  padding-top: 20px;\n  width: 25%;\n  height: 25%;\n}\n\n.poke-title {\n  font-size: 3em;\n}\n\n.pokeInfo {\n  gap: 10px;\n  text-align: left;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto auto;\n  grid-row-gap: 10px;\n  grid-column-gap: 77px;\n  font-weight: bold;\n}\n\n.pop-title {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n}\n\n.form {\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 20px;\n  width: 300px;\n  justify-content: center;\n}\n\n.formName,\n.formInsight {\n  border: 2px solid;\n  padding: 2px;\n}\n\n.formButton {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px $shadow;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n  width: 200px;\n}\n\n.formContain {\n  display: flex;\n  justify-content: center;\n}\n\n.commentContain {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.commentTitle {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.commentInfo {\n  display: flex;\n  justify-content: center;\n}\n\n.closeBtn {\n  display: block;\n  position: absolute;\n  right: 10px;\n  transition: 0.3s;\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url('./images/close.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n  margin-top: 10px;\n}\n\n.ulComment {\n  text-decoration: none;\n  list-style: none;\n}\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFB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QU87QUFDeEI7QUFDQSxnQ0FBZ0MsbURBQU87QUFDdkM7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckJzQjtBQUMyQjs7QUFFakQ7QUFDQSxFQUFFLGlFQUFXO0FBQ2IsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Qb2tlbW9uLXByb2ZpbGVzLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1Bva2Vtb24tcHJvZmlsZXMtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vUG9rZW1vbi1wcm9maWxlcy1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGlrZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9oZWFydC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jbG9zZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbjogMCA0MHB4IDAgMXJlbTtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDVweCA1cHggNTBweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm5hdmlnYXRpb24gLmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ubmF2aWdhdGlvbiAubGluazpob3ZlcixcXG4ubmF2aWdhdGlvbiAuYWN0aXZlIHtcXG4gIGNvbG9yOiAjZDVhMTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhY3QtbGluayB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hZGQtbmV3LWxpbmsge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbiNjYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICM1NTUsICM1MzUzNTMsICM1MDUwNTAsICM1YTU4NTgsICM0YzRjNGMpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAjNTM2ZTg3O1xcbn1cXG5cXG4ucG9rZS1pbWcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxufVxcblxcbi5saWtlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmxpa2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLmNvdW50IHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG4ubGlrZXMtY291bnQge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgcGFkZGluZzogMC41cmVtIDAgMC4ycmVtO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQsXFxuLnJlc2VydmF0aW9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzUzNmU4NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb21tZW50OmhvdmVyLFxcbi5yZXNlcnZhdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTM2ZTg3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubW9kYWxCYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcXG59XFxuXFxuLnNjcm9sbCB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZS1wb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1pbWcge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAyNSU7XFxufVxcblxcbi5wb2tlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4ucG9rZUluZm8ge1xcbiAgZ2FwOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA3N3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3AtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBncmlkLXJvdy1nYXA6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1OYW1lLFxcbi5mb3JtSW5zaWdodCB7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmZvcm1CdXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAjNTM2ZTg3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZvcm1Db250YWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRDb250YWluIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uY29tbWVudFRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5jb21tZW50SW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi51bENvbW1lbnQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlFOztFQUVFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RUFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSx5REFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7O0VBRUUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BOztFQUVFLG1CQTNJVTtFQTRJVixXQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BOztFQUVFLGlCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBSEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNoYWRvdzogIzUzNmU4NztcXG4kYnRuLWhvdmVyOiAjNTM2ZTg3O1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbjogMCA0MHB4IDAgMXJlbTtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDVweCA1cHggNTBweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gIC5saW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG4gIC5saW5rOmhvdmVyLFxcbiAgLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZDVhMTAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxufVxcblxcbi5jb250YWN0LWxpbmsge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saW5rIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4jY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjNTU1LCAjNTM1MzUzLCAjNTA1MDUwLCAjNWE1ODU4LCAjNGM0YzRjKTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzUzNmU4NztcXG59XFxuXFxuLnBva2UtaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ubGlrZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9saWtlLnBuZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmxpa2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9oZWFydC5wbmcnKTtcXG59XFxuXFxuLmNvdW50IHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG4ubGlrZXMtY291bnQge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgcGFkZGluZzogMC41cmVtIDAgMC4ycmVtO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQsXFxuLnJlc2VydmF0aW9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggJHNoYWRvdztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb21tZW50OmhvdmVyLFxcbi5yZXNlcnZhdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAkYnRuLWhvdmVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubW9kYWxCYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcXG59XFxuXFxuLnNjcm9sbCB7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZS1wb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1pbWcge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAyNSU7XFxufVxcblxcbi5wb2tlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4ucG9rZUluZm8ge1xcbiAgZ2FwOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA3N3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb3AtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBncmlkLXJvdy1nYXA6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm1OYW1lLFxcbi5mb3JtSW5zaWdodCB7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmZvcm1CdXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAkc2hhZG93O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZvcm1Db250YWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRDb250YWluIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uY29tbWVudFRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5jb21tZW50SW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2Nsb3NlLnBuZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi51bENvbW1lbnQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCB1cmxMaWtlcyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9BV003SnhJSTZmM2RscmZSUDkxNi9saWtlcy8nO1xuY29uc3QgdXJsQ29tbWVudHMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQVdNN0p4SUk2ZjNkbHJmUlA5MTYvY29tbWVudHMnO1xuXG5jb25zdCBpZEFycmF5ID0gKCkgPT4ge1xuICBjb25zdCBpZCA9IFsnY2hhcml6YXJkJywgJ3Bpa2FjaHUnLCAnYW1waGFyb3MnLCAnbWFnbWFyJywgJ2RyYWdvbml0ZScsICdtZXd0d28nLCAnYXJjYW5pbmUnLCAnbHVnaWEnLCAnYWx0YXJpYSddO1xuICByZXR1cm4gaWQ7XG59O1xuXG5jb25zdCBnZXRQb2tlbW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpa2VzID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgYXdhaXQgZmV0Y2godXJsTGlrZXMsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBkYXRhLml0ZW1faWQgfSksXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsTGlrZXMpO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGxpa2VzO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGF3YWl0IGZldGNoKHVybENvbW1lbnRzLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGRhdGEuaXRlbV9pZCxcbiAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxuICAgICAgY29tbWVudDogZGF0YS5jb21tZW50LFxuICAgIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmxDb21tZW50c30/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBsaWtlcyA9IFByb21pc2UucmVzb2x2ZShhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuICByZXR1cm4gbGlrZXM7XG59O1xuXG5jb25zdCBzZW5kQ29tbWVudCA9IGFzeW5jIChwb2tlbW9uLCBuYW1lLCBjb21tZW50cykgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGl0ZW1faWQ6IHBva2Vtb24sXG4gICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgY29tbWVudDogY29tbWVudHMsXG4gIH07XG4gIFByb21pc2UucmVzb2x2ZShhd2FpdCBjcmVhdGVDb21tZW50KGRhdGEpKTtcbn07XG5cbmNvbnN0IGNhcGl0YWxpemVkID0gKHN0cmluZykgPT4ge1xuICBjb25zdCBjYXBpdCA9IHN0cmluZy5zcGxpdCgnJyk7XG4gIGNhcGl0WzBdID0gY2FwaXRbMF0udG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIGNhcGl0LmpvaW4oJycpO1xufTtcblxuY29uc3Qgc2VuZExpa2UgPSBhc3luYyAocG9rZW1vbikgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGl0ZW1faWQ6IHBva2Vtb24sXG4gIH07XG4gIFByb21pc2UucmVzb2x2ZShhd2FpdCBjcmVhdGVMaWtlcyhkYXRhKSk7XG59O1xuXG5jb25zdCB1cGRhdGVsaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdldExpa2VzKCkpO1xuICBjb25zdCBsaWtlQXBpID0gZGF0YS5maW5kKCh4KSA9PiB7XG4gICAgaWYgKHguaXRlbV9pZCA9PT0gaWQpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBsaWtlQXBpLmxpa2VzO1xufTtcblxuY29uc3QgaXRlbXNDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaWRBcnJheSgpO1xuICBjb25zdCBjb3VudCA9IGRhdGEubGVuZ3RoO1xuICByZXR1cm4gY291bnQ7XG59O1xuXG5jb25zdCBjb21tZW50c0NvdW50ZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGF0YUNvbW1lbnQgPSBhd2FpdCBnZXRDb21tZW50KGlkKTtcbiAgY29uc3QgY291bnQgPSBkYXRhQ29tbWVudC5sZW5ndGg7XG4gIHJldHVybiBjb3VudDtcbn07XG5cbmV4cG9ydCB7XG4gIGlkQXJyYXksIGdldFBva2Vtb24sIGNyZWF0ZUxpa2VzLCBnZXRMaWtlcywgZ2V0Q29tbWVudCwgY3JlYXRlQXBwLCBzZW5kQ29tbWVudCwgaXRlbXNDb3VudGVyLFxuICBjYXBpdGFsaXplZCwgc2VuZExpa2UsIHVwZGF0ZWxpa2VzLCBjb21tZW50c0NvdW50ZXIsXG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0UG9rZW1vbiwgZ2V0Q29tbWVudCwgc2VuZENvbW1lbnQsXG4gIGl0ZW1zQ291bnRlciwgY2FwaXRhbGl6ZWQsIHNlbmRMaWtlLCB1cGRhdGVsaWtlcywgY29tbWVudHNDb3VudGVyLFxufSBmcm9tICcuL2FwaS5qcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xudWwuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbicpO1xudWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1saW5rIGxpc3QtbGlua1wiPjxhIGNsYXNzPVwibGluayBhY3RpdmVcIj5Qb2tlZGV4KCR7aXRlbXNDb3VudGVyKCl9KTwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1saW5rIGFkZC1uZXctbGlua1wiPjxhIGNsYXNzPVwibGlua1wiPlJlZ2lvbjwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1saW5rIGNvbnRhY3QtbGlua1wiPjxhIGNsYXNzPVwibGlua1wiPlR5cGVzPC9hPjwvbGk+XG5gO1xubmF2LmFwcGVuZENoaWxkKHVsKTtcblxuY29uc3QgYWxlcnQgPSAobWVzc2FnZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IERJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBESVYuY2xhc3NOYW1lID0gYGFsZXJ0IGFsZXJ0LSR7Y2xhc3NOYW1lfWA7XG4gIERJVi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtZXNzYWdlKSk7XG4gIGNvbnN0IENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gIGNvbnN0IFBBR0UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUJ1dHRvbicpO1xuICBDT05UQUlORVIuaW5zZXJ0QmVmb3JlKERJViwgUEFHRSk7XG4gIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0JykucmVtb3ZlKCksIDE1MDApO1xufTtcblxuY29uc3QgcG9wdXBXaW5kb3cgPSBhc3luYyAocG9rZW1vbikgPT4ge1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRzJyk7XG4gIGNvbnN0IG1vZGFsQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTmFtZSA9ICdtb2RhbEJhY2tncm91bmQnO1xuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQmFja2dyb3VuZCk7XG5cbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG1vZGFsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtb2RhbENvbnRhaW5lcic7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdG4nKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsJyk7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBpbWFnZW9udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtcG9wdXAnKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VvbnRhaW5lcik7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgncG9wdXAtaW1nJyk7XG4gIGltYWdlLnNyYyA9IHBva2Vtb24uc3ByaXRlcy5vdGhlci5kcmVhbV93b3JsZC5mcm9udF9kZWZhdWx0O1xuICBpbWFnZS5hbHQgPSBwb2tlbW9uLm5hbWU7XG4gIGltYWdlb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IHBvcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcC10aXRsZScpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BUaXRsZSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwb2tlLXRpdGxlJyk7XG4gIHRpdGxlLmlubmVyVGV4dCA9IGNhcGl0YWxpemVkKHBva2Vtb24ubmFtZSk7XG4gIHBvcFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBwb2tlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb2tlSW5mby5jbGFzc0xpc3QuYWRkKCdwb2tlSW5mbycpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChwb2tlSW5mbyk7XG5cbiAgY29uc3Qgd2VpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB3ZWlnaHQuY2xhc3NMaXN0LmFkZCgnd2VpZ2h0Jyk7XG4gIHdlaWdodC5pbm5lclRleHQgPSBgV2VpZ2h0OiAke3Bva2Vtb24ud2VpZ2h0fWA7XG5cbiAgcG9rZUluZm8uYXBwZW5kQ2hpbGQod2VpZ2h0KTtcblxuICBjb25zdCBwb2tlSUQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHBva2VJRC5jbGFzc0xpc3QuYWRkKCdwb2tlSWQnKTtcbiAgcG9rZUlELmlubmVyVGV4dCA9IGBpZDogJHtwb2tlbW9uLmlkfSBgO1xuICBwb2tlSW5mby5hcHBlbmRDaGlsZChwb2tlSUQpO1xuXG4gIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHR5cGUuY2xhc3NMaXN0LmFkZCgndHlwZScpO1xuICB0eXBlLmlubmVyVGV4dCA9IGBUeXBlOiAke3Bva2Vtb24udHlwZXNbMF0udHlwZS5uYW1lfWA7XG4gIHBva2VJbmZvLmFwcGVuZENoaWxkKHR5cGUpO1xuXG4gIGNvbnN0IGFiaWxpdHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBhYmlsaXR5MS5jbGFzc0xpc3QuYWRkKCdhYmlsaXR5MScpO1xuICBhYmlsaXR5MS5pbm5lclRleHQgPSBgQWJpbGl0eSAxOiAke3Bva2Vtb24uYWJpbGl0aWVzWzBdLmFiaWxpdHkubmFtZX1gO1xuICBwb2tlSW5mby5hcHBlbmRDaGlsZChhYmlsaXR5MSk7XG5cbiAgY29uc3QgYWJpbGl0eTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGFiaWxpdHkyLmNsYXNzTGlzdC5hZGQoJ2FiaWxpdHkyJyk7XG4gIGFiaWxpdHkyLmlubmVyVGV4dCA9IGBBYmlsaXR5IDI6ICR7cG9rZW1vbi5hYmlsaXRpZXNbMV0uYWJpbGl0eS5uYW1lfWA7XG4gIHBva2VJbmZvLmFwcGVuZENoaWxkKGFiaWxpdHkyKTtcblxuICBjb25zdCBjb21tZW50Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50Q29udGFpbicpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50Q29udGFpbik7XG5cbiAgY29uc3QgZGF0YUNvbW1lbnQgPSBhd2FpdCBnZXRDb21tZW50KHBva2Vtb24ubmFtZSk7XG4gIGNvbnN0IGNvdW50ID0gMDtcblxuICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb21tZW50VGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tbWVudFRpdGxlJyk7XG4gIGlmIChkYXRhQ29tbWVudC5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBDb21tZW50cygke2NvdW50fSlgO1xuICB9IGVsc2Uge1xuICAgIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBDb21tZW50cygke2F3YWl0IGNvbW1lbnRzQ291bnRlcihwb2tlbW9uLm5hbWUpfSlgO1xuICB9XG4gIGNvbW1lbnRDb250YWluLmFwcGVuZENoaWxkKGNvbW1lbnRUaXRsZSk7XG5cbiAgY29uc3QgY29tbWVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudEluZm8uY2xhc3NMaXN0LmFkZCgnY29tbWVudEluZm8nKTtcbiAgY29tbWVudENvbnRhaW4uYXBwZW5kQ2hpbGQoY29tbWVudEluZm8pO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTGlzdC5hZGQoJ3VsQ29tbWVudCcpO1xuICB1bC5pZCA9ICdjb21tZW50cyc7XG4gIGNvbW1lbnRJbmZvLmFwcGVuZENoaWxkKHVsKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFDb21tZW50Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpQ29tbWVudCcpO1xuICAgIGxpLmlubmVySFRNTCA9IGAke2RhdGFDb21tZW50W2ldLmNyZWF0aW9uX2RhdGV9ICR7ZGF0YUNvbW1lbnRbaV0udXNlcm5hbWV9OiAke2RhdGFDb21tZW50W2ldLmNvbW1lbnR9YDtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cblxuICBjb25zdCBmb3JtQ29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQ29udGFpbi5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbicpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm1UaXRsZScpO1xuICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIGEgY29tbWVudCc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICBjb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZvcm1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvcm1OYW1lJyk7XG4gIGZvcm1OYW1lLmlkID0gJ2Zvcm1OYW1lJztcbiAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG5hbWUnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtTmFtZSk7XG5cbiAgY29uc3QgZm9ybUluc2lnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBmb3JtSW5zaWdodC5pZCA9ICdmb3JtSW5zaWdodCc7XG4gIGZvcm1JbnNpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Zvcm1JbnNpZ2h0Jyk7XG4gIGZvcm1JbnNpZ2h0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0YXJlYScpO1xuICBmb3JtSW5zaWdodC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICBmb3JtSW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgaW5zaWdodCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1JbnNpZ2h0KTtcblxuICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtQnV0dG9uJyk7XG4gIGZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ29tbWVudCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdXR0b24pO1xuXG4gIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtSW5zaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtSW5zaWdodCcpLnZhbHVlO1xuICAgIGNvbnN0IGZvcm1OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1OYW1lJykudmFsdWU7XG4gICAgaWYgKGZvcm1JbnNpZ2h0ID09PSAnJyAmJiBmb3JtTmFtZSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdGb3JtIGNhbm5vdCBiZSBlbXB0eScsICdkYW5nZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VuZENvbW1lbnQocG9rZW1vbi5uYW1lLCBmb3JtTmFtZSwgZm9ybUluc2lnaHQpO1xuICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwnKTtcbiAgICAgIG1vZGFsQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZvcm1Db250YWluLmFwcGVuZENoaWxkKGZvcm0pO1xuICBtb2RhbEJhY2tncm91bmQuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xufTtcblxuY29uc3QgZGlzcGxheSA9IGFzeW5jIChtb25zdGVyKSA9PiB7XG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBnZXRQb2tlbW9uKG1vbnN0ZXIpO1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRzJyk7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gIGNvbnN0IGltYWdlb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1jb250YWluZXInKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZW9udGFpbmVyKTtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdwb2tlLWltZycpO1xuICBpbWFnZS5zcmMgPSBwb2tlbW9uLnNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdDtcbiAgaW1hZ2UuYWx0ID0gcG9rZW1vbi5uYW1lO1xuICBpbWFnZW9udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZWQocG9rZW1vbi5uYW1lKTtcbiAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxpa2UuY2xhc3NMaXN0LmFkZCgnbGlrZScpO1xuICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQobGlrZSk7XG5cbiAgY29uc3QgbGlrZXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpa2VzVGV4dC5jbGFzc0xpc3QuYWRkKCdjb3VudCcpO1xuICBjYXJkLmFwcGVuZENoaWxkKGxpa2VzVGV4dCk7XG5cbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGlrZXNDb3VudC5jbGFzc0xpc3QuYWRkKCdsaWtlcy1jb3VudCcpO1xuICBsaWtlc0NvdW50LmlubmVySFRNTCA9IGAke2F3YWl0IFByb21pc2UucmVzb2x2ZSh1cGRhdGVsaWtlcyhwb2tlbW9uLm5hbWUpKX0gbGlrZXNgO1xuICBsaWtlc1RleHQuYXBwZW5kQ2hpbGQobGlrZXNDb3VudCk7XG5cbiAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUoc2VuZExpa2UocG9rZW1vbi5uYW1lKSk7XG4gICAgbGlrZXNDb3VudC5pbm5lckhUTUwgPSBgJHthd2FpdCBQcm9taXNlLnJlc29sdmUodXBkYXRlbGlrZXMocG9rZW1vbi5uYW1lKSl9IGxpa2VzYDtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb21tZW50cy5jbGFzc0xpc3QuYWRkKCdjb21tZW50Jyk7XG4gIGNvbW1lbnRzLmlkID0gJ2NvbW1lbnQtYnRuJztcbiAgY29tbWVudHMuaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuICBidXR0b25zLmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcblxuICBjb21tZW50cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbCcpO1xuICAgIHBvcHVwV2luZG93KHBva2Vtb24pO1xuICB9KTtcblxuICBjb25zdCByZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXJ2YXRpb25zLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uJyk7XG4gIHJlc2VydmF0aW9ucy5pZCA9ICdyZXNlcnZhdGlvbi1idG4nO1xuICByZXNlcnZhdGlvbnMuaW5uZXJUZXh0ID0gJ1Jlc2VydmF0aW9ucyc7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XG4iLCJpbXBvcnQgZGlzcGxheSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpZEFycmF5IH0gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBtb25zdGVycyA9IGlkQXJyYXkoKTtcbmNvbnN0IGNyZWF0ZUNhcmRzID0gKCkgPT4ge1xuICBtb25zdGVycy5mb3JFYWNoKChwb2tlbW9uKSA9PiBkaXNwbGF5KHBva2Vtb24pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUNhcmRzIGZyb20gJy4vbW9kdWxlcy9mdW5jdGlvbnMuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjcmVhdGVDYXJkcygpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9

