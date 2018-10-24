/*!
 * 
 * dd/v1.7.24
 * Mon Aug 20 2018 16:05:42 GMT+0800 (CST)
 * 
 */
var my =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web-view/embed/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime-loose/helpers/extends.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime-loose/helpers/extends.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var slice = Array.prototype.slice;

module.exports = function _extends(to) {
  var from = slice.call(arguments, 1);
  from.forEach(function t(f) {
    if (f && typeof (f) === 'object') {
      Object.keys(f).forEach(function tt(k) {
        to[k] = f[k];
      });
    }
  });
  return to;
};


/***/ }),

/***/ "./src/bridge/shared/BizCustomAP.tsx":
/*!*******************************************!*\
  !*** ./src/bridge/shared/BizCustomAP.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function doOpenTaobao(callBridge, url, login, result) {
    if ('installed' in result) {
        if (result.installed) {
            if (login) {
                callBridge('getLoginToken', {}, function (res) {
                    var loginToken = null;
                    var encrypted = false;
                    if ('token' in res && res.token !== '') {
                        loginToken = res.token;
                        encrypted = res.encrypted;
                    }
                    if (loginToken) {
                        url += '&loginToken=' + loginToken + '&tokenEncrypted=' + encrypted;
                    }
                    callBridge('openInBrowser', {
                        url: url
                    });
                });
            } else {
                callBridge('openInBrowser', {
                    url: url
                });
            }
        } else {
            callBridge('openInBrowser', {
                url: 'https://h5.m.taobao.com/bcec/downloadTaobao.html'
            });
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (function (fn) {
    return {
        d: function d(opt) {
            var callBridge = fn();
            callBridge('isInstalledApp', {
                packagename: 'com.taobao.taobao',
                scheme: 'taobao://'
            }, function (res) {
                doOpenTaobao(callBridge, opt.url, opt.login, res);
            });
        }
    };
});

/***/ }),

/***/ "./src/bridge/shared/Location.tsx":
/*!****************************************!*\
  !*** ./src/bridge/shared/Location.tsx ***!
  \****************************************/
/*! exports provided: openLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
var openLocation = {
    b: function b(opt) {
        opt.scale = opt.scale || 15; // 默认缩放15级
        opt.hidden = '1';
    }
};

/***/ }),

/***/ "./src/bridge/shared/Media.tsx":
/*!*************************************!*\
  !*** ./src/bridge/shared/Media.tsx ***!
  \*************************************/
/*! exports provided: chooseImage, previewImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony import */ var _utils_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/bridge */ "./src/utils/bridge.tsx");

var chooseImage = {
    b: function b(opt) {
        opt.count = opt.count || 1;
        if (typeof opt.sourceType === 'string') {
            opt.sourceType = [opt.sourceType];
        }
    },
    a: function a(res) {
        Object(_utils_bridge__WEBPACK_IMPORTED_MODULE_0__["mapping"])(res, {
            errorCode: 'error',
            errorDesc: 'errorMessage',
            localIds: 'apFilePaths',
            tempFilePaths: 'apFilePaths'
        });
        // android 返回字符串
        if (typeof res.apFilePaths === 'string') {
            res.apFilePaths = JSON.parse(res.apFilePaths);
        }
    }
};
var previewImage = {
    m: 'imageViewer',
    b: function b(opt) {
        Object(_utils_bridge__WEBPACK_IMPORTED_MODULE_0__["mapping"])(opt, {
            current: 'init%d'
        });
        // 处理默认索引
        if (!opt.init) {
            opt.init = 0;
        }
        // 处理图片链接
        opt.images = [];
        (opt.urls || []).forEach(function (url) {
            opt.images.push({
                u: url
            });
        });
        delete opt.urls;
    }
};

/***/ }),

/***/ "./src/bridge/shared/Network.tsx":
/*!***************************************!*\
  !*** ./src/bridge/shared/Network.tsx ***!
  \***************************************/
/*! exports provided: getNetworkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
var getNetworkType = {
    a: function a(res) {
        if (res.networkInfo) {
            res.networkType = res.networkInfo.toUpperCase();
        }
    }
};

/***/ }),

/***/ "./src/bridge/shared/UI.tsx":
/*!**********************************!*\
  !*** ./src/bridge/shared/UI.tsx ***!
  \**********************************/
/*! exports provided: alert, showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony import */ var _utils_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/bridge */ "./src/utils/bridge.tsx");

var alert = {
    b: function b(opt) {
        Object(_utils_bridge__WEBPACK_IMPORTED_MODULE_0__["mapping"])(opt, {
            content: 'message%s',
            buttonText: 'button%s'
        });
    }
};
var showLoading = {
    b: function b(opt) {
        Object(_utils_bridge__WEBPACK_IMPORTED_MODULE_0__["mapping"])(opt, {
            content: 'text%s'
        });
    }
};
var hideLoading = {};

/***/ }),

/***/ "./src/utils/bridge.tsx":
/*!******************************!*\
  !*** ./src/utils/bridge.tsx ***!
  \******************************/
/*! exports provided: toType, mapping, apCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toType", function() { return toType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapping", function() { return mapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apCallback", function() { return apCallback; });
/* harmony import */ var _objectKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectKeys */ "./src/utils/objectKeys.tsx");

/**
 * 拆分类型键名里真正的 key 和对应的 type
 * @method _separateTypeKey
 * @param  {String}         key 带类型标识的键名
 * @return {Object}             返回键名和类型标识两个字段，
 *                              如{k: 'content', t: '%s'}
 */
function _separateTypeKey(key) {
    var matches = (key || '').match(/(\w+)(%\w)$/i);
    var tk = {
        k: key
    };
    if (matches) {
        tk.k = matches[1];
        tk.t = matches[2];
    }
    return tk;
}
/**
 * 超级字符串转换
 */
function __superToString(content) {
    var str = content;
    if (typeof content === 'object') {
        str = JSON.stringify(content);
    } else {
        str = content + '';
    }
    return str;
}
/**
 * 16进制颜色转成10进制数字
 * @method __h2dColor
 * @param  {String}   hex 16进制颜色字符串
 * @return {Number}       10进制数字
 */
function __h2dColor(hex) {
    var dec = '' + hex;
    // 如果加了#号，去掉
    if (dec.indexOf('#') === 0) {
        dec = dec.substr(1);
    }
    // 如果是3位简写，补全成6位
    if (dec.length === 3) {
        dec = dec.replace(/(.)/g, '$1$1');
    }
    dec = parseInt(dec, 16);
    if (isNaN(dec)) {
        console.error(hex + ' is invalid hex color.');
    }
    return dec;
}
/**
 * 移除 base64 数据头，native 接口不需要传入头部
 * @method __removeBase64Head
 * @param  {String}           base64 有头数据
 * @return {String}                  无头数据
 */
function __removeBase64Head(base64) {
    if (typeof base64 === 'string') {
        base64 = base64.replace(/^data:(\/|\w|\-|\.)+;base64,/i, '');
    }
    return base64;
}
/**
 * 把值转换成相应类型
 * @method toType
 * @param  {String} type  类型标识，目前支持
 *                        %s(字符串)
 *                        %c(16转10进制颜色)
 *                        %h(10转16进制颜色)
 *                        %b(移除 base64 数据格式头)
 *                        %a{mimeType}(添加 base64 数据头)
 *                        %d(整数)
 *                        %f(浮点数)
 * @param  {any} value 待转换值，类型未知
 * @return {any}       转换好的相应类型的
 */
function toType(type, value) {
    if (type === '%s') {
        value = __superToString(value);
    } else if (type === '%c') {
        value = __h2dColor(value);
    } else if (type === '%b') {
        value = __removeBase64Head(value);
    } else if (type === '%d') {
        value = parseInt(value, 10);
    } else if (type === '%f') {
        value = parseFloat(value);
    }
    return value;
}
/**
 * 处理对象映射关系
 * @method _mapping
 * @param  {Object}  tObj 原始目标对象
 * @param  {Object}  map 映射关系，如{content: 'text'}，
 *                       即把 sObj.content 的值赋给 tObj.text，
 *                       并删除 tObj 的 content 属性，
 *                       所以 content 就是 sKey，text 就是 tKey。
 *                       可以把 map 对象中的冒号(:)理解成 to，
 *                       即 {content to text}。
 *                       其中 tKey 的值的最后可以加 %s 等类型标识转换成相应类型，
 *                       注意：要加到 最后赋值给 tObj 的 那个 tKey 的后面。
 *                       这么做的目的是因为：
 *                       有些接口的入参字段直接传入 非字符串 值时，接口完全无响应，
 *                       比如 AlipayJSBridge.call('alert',{message: 12345})
 *
 * @param  {Object} sObj 参照来源对象
 * @return {Object}     处理映射后的 tObj
 */
function mapping(tObj, map, sObj) {
    var typeKey = void 0;
    sObj = sObj || {};
    Object(_objectKeys__WEBPACK_IMPORTED_MODULE_0__["default"])(map).forEach(function (sKey) {
        var tKey = map[sKey];
        typeKey = _separateTypeKey(tKey);
        // 目标 key
        tKey = typeKey.k;
        // 映射条件，否则不赋值，避免添加 value 为 undefined 的 key
        if (tKey !== undefined && ( // 目标 key 定义过
        sKey in tObj || sKey in sObj) && // 源数据至少有一个有效
        tObj[tKey] === undefined // 目标数据空缺待赋值
        ) {
                // sKey 既可以是 sObj 的，也可以是 tObj 自己的，但sObj 优先级高于原始 tObj
                // 即 sObj[sKey]的值 会覆盖 tObj[sKey]的值
                // 并且要根据 type 占位符做相应类型转换
                tObj[tKey] = toType(typeKey.t, sObj[sKey] === undefined ? tObj[sKey] : sObj[sKey]);
                // 删除原始 tObj 中的 sKey，tKey 和 sKey 同名时不做删除
                if (tKey !== sKey) {
                    delete tObj[sKey];
                }
            }
    });
    return tObj;
}
function apCallback() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var res = arguments[1];
    var complete = params.complete,
        success = params.success,
        fail = params.fail;

    if (res && res.error) {
        if (fail) {
            fail(res);
        }
    } else {
        if (success) {
            success(res);
        }
    }
    if (complete) {
        complete(res);
    }
}

/***/ }),

/***/ "./src/utils/objectKeys.tsx":
/*!**********************************!*\
  !*** ./src/utils/objectKeys.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectKeys; });
function objectKeys(obj) {
    if (obj && typeof obj === 'object') {
        return Object.keys(obj);
    }
    return [];
}

/***/ }),

/***/ "./src/utils/system.tsx":
/*!******************************!*\
  !*** ./src/utils/system.tsx ***!
  \******************************/
/*! exports provided: systemVersion, ddSystemVersion, UCVersion, isAndroid, isIOS, isIDE, SDKVersion, compareVersion, logSystemInfo, compareSystemVersion, compareUCVersion, compareDDSysVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemVersion", function() { return systemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ddSystemVersion", function() { return ddSystemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UCVersion", function() { return UCVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIDE", function() { return isIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKVersion", function() { return SDKVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareVersion", function() { return compareVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logSystemInfo", function() { return logSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareSystemVersion", function() { return compareSystemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareUCVersion", function() { return compareUCVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDDSysVersion", function() { return compareDDSysVersion; });
var ua = navigator.userAgent || navigator.swuserAgent;
var _systemVersion = ua.match(/AlipayClient\/(\d+\.\d+\.\d+)/);
var _UCVersion = ua.match(/UCBS\/(\d+\.\d+)/);
var _ddVersion = ua.match(/DingTalk\/([\d\.]+)/);
// expose all functions for ant fortune app
var systemVersion = _systemVersion && _systemVersion[1] || '100.0.0';
var ddSystemVersion = _ddVersion && _ddVersion[1] || '100.0.0';
var UCVersion = _UCVersion && _UCVersion[1] || '2.12';
var isAndroid = ua.indexOf('Android') > -1;
var isIOS = !isAndroid;
var isIDE = ua.indexOf('AlipayIDE') > -1;
var SDKVersion = "1.7.24" + '';
var caches = {};
var cacheIntArray = {};
function toIntArray(v) {
    if (cacheIntArray[v]) {
        return cacheIntArray[v];
    }
    var ret = [];
    var version = v.split('.');
    for (var i = 0; i < version.length; i++) {
        ret.push(parseInt(version[i], 10));
    }
    cacheIntArray[v] = ret;
    return ret;
}
function compareVersion(version, targetVersion) {
    if (version && targetVersion) {
        var key = version + '__' + targetVersion;
        if (key in caches) {
            return caches[key];
        }
        version = toIntArray(version);
        targetVersion = toIntArray(targetVersion);
        for (var i = 0, n1, n2; i < version.length; i++) {
            n1 = targetVersion[i] || 0;
            n2 = version[i] || 0;
            if (n1 > n2) {
                caches[key] = -1;
                break;
            }
            if (n1 < n2) {
                caches[key] = 1;
                break;
            }
        }
        caches[key] = caches[key] || 0;
        return caches[key];
    }
    return 0;
}
function logSystemInfo() {
    console.log("dd" + '/SDKVersion: ' + SDKVersion);
}
function compareSystemVersion(targetVersion) {
    return compareVersion(systemVersion, targetVersion);
}
function compareUCVersion(targetVersion) {
    return compareVersion(UCVersion, targetVersion);
}
function compareDDSysVersion(targetVersion) {
    return compareVersion(ddSystemVersion, targetVersion);
}

/***/ }),

/***/ "./src/web-view/embed/api.tsx":
/*!************************************!*\
  !*** ./src/web-view/embed/api.tsx ***!
  \************************************/
/*! exports provided: API, workerAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workerAPI", function() { return workerAPI; });
/* harmony import */ var _bridge_shared_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bridge/shared/UI */ "./src/bridge/shared/UI.tsx");
/* harmony import */ var _bridge_shared_Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bridge/shared/Media */ "./src/bridge/shared/Media.tsx");
/* harmony import */ var _bridge_shared_Network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bridge/shared/Network */ "./src/bridge/shared/Network.tsx");
/* harmony import */ var _bridge_shared_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bridge/shared/Location */ "./src/bridge/shared/Location.tsx");
/* harmony import */ var _bridge_shared_BizCustomAP__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bridge/shared/BizCustomAP */ "./src/bridge/shared/BizCustomAP.tsx");





var g = self;
var API = {
    alert: _bridge_shared_UI__WEBPACK_IMPORTED_MODULE_0__["alert"],
    showLoading: _bridge_shared_UI__WEBPACK_IMPORTED_MODULE_0__["showLoading"],
    hideLoading: _bridge_shared_UI__WEBPACK_IMPORTED_MODULE_0__["hideLoading"],
    previewImage: _bridge_shared_Media__WEBPACK_IMPORTED_MODULE_1__["previewImage"],
    chooseImage: _bridge_shared_Media__WEBPACK_IMPORTED_MODULE_1__["chooseImage"],
    getNetworkType: _bridge_shared_Network__WEBPACK_IMPORTED_MODULE_2__["getNetworkType"],
    openLocation: _bridge_shared_Location__WEBPACK_IMPORTED_MODULE_3__["openLocation"],
    openTaobao: Object(_bridge_shared_BizCustomAP__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        return g.AlipayJSBridge.call;
    })
};
var workerAPI = ['navigateTo', 'navigateBack', 'switchTab', 'reLaunch', 'redirectTo', 'getLocation'];

/***/ }),

/***/ "./src/web-view/embed/index.tsx":
/*!**************************************!*\
  !*** ./src/web-view/embed/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime-loose/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/web-view/embed/api.tsx");
/* harmony import */ var _utils_bridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/bridge */ "./src/utils/bridge.tsx");
/* harmony import */ var _utils_objectKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/objectKeys */ "./src/utils/objectKeys.tsx");
/* harmony import */ var _utils_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/system */ "./src/utils/system.tsx");





var promise = new Promise(function (resolve) {
    document.addEventListener('AlipayJSBridgeReady', resolve);
});
var id = 0;
var callPool = {};
var g = self;
var noop = function noop() {};
var handleParamsBeforeCall = function handleParamsBeforeCall(param, apiName) {
    var newParam = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, param);
    var apiConfig = _api__WEBPACK_IMPORTED_MODULE_1__["API"][apiName];
    var callbackParam = {
        success: newParam.success || noop,
        fail: newParam.fail || noop,
        complete: newParam.complete || noop
    };
    delete newParam.success;
    delete newParam.fail;
    delete newParam.complete;
    if (apiConfig && apiConfig.b) {
        apiConfig.b(newParam);
    }
    return {
        newParam: newParam,
        callbackParam: callbackParam,
        apiName: apiConfig.m ? apiConfig.m : apiName
    };
};
var my = {
    call: function call() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        promise.then(function () {
            var _g$AlipayJSBridge;

            (_g$AlipayJSBridge = g.AlipayJSBridge).call.apply(_g$AlipayJSBridge, args);
        });
    },
    postMessage: function postMessage(detail) {
        promise.then(function () {
            var postDta = {
                type: 'message',
                detail: detail
            };
            // todo 10.1.20 ios好坑
            if (_utils_system__WEBPACK_IMPORTED_MODULE_4__["systemVersion"] === '10.1.20' && _utils_system__WEBPACK_IMPORTED_MODULE_4__["isIOS"]) {
                postDta = {
                    type: 'getLocation',
                    appXsubType: 'message',
                    detail: detail
                };
            }
            g.AlipayJSBridge.call('postWebViewMessage', postDta);
        });
    },
    getEnv: function getEnv(callback) {
        // 代表注入了AlipayJSBridge
        if (navigator.userAgent.indexOf('Nebula') === -1) {
            if (callback) {
                callback({ miniprogram: false });
            }
        } else {
            promise.then(function () {
                g.AlipayJSBridge.call('getEmbedWebViewEnv', function (res) {
                    if (callback) {
                        callback(res);
                    }
                });
            });
        }
    }
};
_api__WEBPACK_IMPORTED_MODULE_1__["workerAPI"].forEach(function (apiName) {
    my[apiName] = function (param) {
        promise.then(function () {
            var newParam = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, param);
            if (newParam.success || newParam.complete || newParam.fail) {
                callPool[++id] = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, newParam);
                delete newParam.success;
                delete newParam.complete;
                delete newParam.fail;
            }
            g.AlipayJSBridge.call('postWebViewMessage', {
                type: apiName,
                callback: id,
                param: newParam
            });
        });
    };
});
Object(_utils_objectKeys__WEBPACK_IMPORTED_MODULE_3__["default"])(_api__WEBPACK_IMPORTED_MODULE_1__["API"]).forEach(function (apiName) {
    var apiConfig = _api__WEBPACK_IMPORTED_MODULE_1__["API"][apiName] || {};
    my[apiName] = function (param) {
        var paramObj = handleParamsBeforeCall(param, apiName);
        promise.then(function () {
            if (apiConfig.d) {
                apiConfig.d(paramObj.newParam);
            } else if (param === undefined) {
                g.AlipayJSBridge.call(paramObj.apiName);
            } else {
                g.AlipayJSBridge.call(paramObj.apiName, paramObj.newParam, function (originRes) {
                    var res = originRes;
                    if (apiConfig.a) {
                        apiConfig.a(res);
                    }
                    Object(_utils_bridge__WEBPACK_IMPORTED_MODULE_2__["apCallback"])(paramObj.callbackParam, res);
                });
            }
        });
    };
});
document.addEventListener('onToWebViewMessage', function (e) {
    var _e$data = e.data,
        callback = _e$data.callback,
        res = _e$data.res;

    if (res.type === 'response') {
        if (callPool[callback]) {
            Object(_utils_bridge__WEBPACK_IMPORTED_MODULE_2__["apCallback"])(callPool[callback], res.res);
            delete callPool[callback];
        }
    } else if (res.type === 'message') {
        if (my.onMessage) {
            my.onMessage(res.data);
        }
    }
});
if (true) {
    g.dd = my;
}
/* harmony default export */ __webpack_exports__["default"] = (my);

/***/ })

/******/ })["default"];