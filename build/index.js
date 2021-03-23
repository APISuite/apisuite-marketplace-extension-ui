'use strict';

var React = require('react');
var i18next = require('i18next');
var reactI18next = require('react-i18next');
var redux = require('redux');
var reactRedux = require('react-redux');
var reactRouterDom = require('react-router-dom');
var core$1 = require('@material-ui/core');
var styles = require('@material-ui/styles');
var lab = require('@material-ui/lab');
var AmpStoriesRoundedIcon = require('@material-ui/icons/AmpStoriesRounded');
var ChevronLeftRoundedIcon = require('@material-ui/icons/ChevronLeftRounded');
var ChevronRightRoundedIcon = require('@material-ui/icons/ChevronRightRounded');
var ExpandMoreRoundedIcon = require('@material-ui/icons/ExpandMoreRounded');
var FilterListRoundedIcon = require('@material-ui/icons/FilterListRounded');
var SearchRoundedIcon = require('@material-ui/icons/SearchRounded');
var SortRoundedIcon = require('@material-ui/icons/SortRounded');
var appCarouselBackground = require('assets/appCarouselBackground.svg');
var spaceBackground = require('assets/space-background.svg');
var marketplace = require('assets/marketplace.svg');
var effects = require('redux-saga/effects');
var http = require('http');
var https = require('https');
var url = require('url');
var require$$0$1 = require('stream');
var assert = require('assert');
var tty = require('tty');
var util = require('util');
var os = require('os');
var zlib = require('zlib');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var i18next__default = /*#__PURE__*/_interopDefaultLegacy(i18next);
var AmpStoriesRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(AmpStoriesRoundedIcon);
var ChevronLeftRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeftRoundedIcon);
var ChevronRightRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRightRoundedIcon);
var ExpandMoreRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreRoundedIcon);
var FilterListRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(FilterListRoundedIcon);
var SearchRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchRoundedIcon);
var SortRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(SortRoundedIcon);
var appCarouselBackground__default = /*#__PURE__*/_interopDefaultLegacy(appCarouselBackground);
var spaceBackground__default = /*#__PURE__*/_interopDefaultLegacy(spaceBackground);
var marketplace__default = /*#__PURE__*/_interopDefaultLegacy(marketplace);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var url__default = /*#__PURE__*/_interopDefaultLegacy(url);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/**
 * The base layouts APISuite supports.
 */
var Layouts;
(function (Layouts) {
    Layouts["Main"] = "MAIN";
    Layouts["Essential"] = "ESSENTIAL";
})(Layouts || (Layouts = {}));
/**
 * The different (sub)menus that the APISuite provides.
 */
var Menus;
(function (Menus) {
    // Header Anonymous
    Menus["HeaderAnonymousMain"] = "HEADER_ANONYMOUS_MAIN";
    // Header Authenticated
    Menus["HeaderAuthenticatedMain"] = "HEADER_AUTHENTICATED_MAIN";
    Menus["HeaderAuthenticatedDashboard"] = "HEADER_AUTHENTICATED_DASHBOARD";
    Menus["HeaderAuthenticatedProfile"] = "HEADER_AUTHENTICATED_PROFILE";
    // Footer
    Menus["FooterProducts"] = "FOOTER_PRODUCTS";
    Menus["FooterProfile"] = "FOOTER_PROFILE";
    Menus["FooterDocumentation"] = "FOOTER_DOCUMENTATION";
    Menus["FooterTeam"] = "FOOTER_TEAM";
    Menus["FooterDashboard"] = "FOOTER_DASHBOARD";
    Menus["FooterLegal"] = "FOOTER_LEGAL";
    Menus["FooterSupport"] = "FOOTER_SUPPORT";
    Menus["FooterStatus"] = "FOOTER_STATUS";
})(Menus || (Menus = {}));
/**
 * A `Section` is an area/section/place anywhere in the portal.
 *
 * These are the different sections that the APISuite portal provides for
 * extensions to inject arbitrary React components.
 */
var Sections;
(function (Sections) {
    Sections["HomepagePrecontent"] = "HOMEPAGE_PRECONTENT";
})(Sections || (Sections = {}));

var apisuiteExtensionUiTypes_es5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get Layouts () { return Layouts; },
    get Menus () { return Menus; },
    get Sections () { return Sections; }
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(apisuiteExtensionUiTypes_es5);

var v1 = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extension = exports.protocolVersion = void 0;
exports.protocolVersion = '1';
__exportStar(require$$0, exports);
/**
 * All extensions must inherit from this base `Extension` class. It encapsulates
 * and provides all the functionality that the APISuite Portal needs to interact
 * with any extension.
 *
 * Example usage:
 *
 * ```typescript
 * import { Extension } from "@apisuite/extension-ui-types/v1";
 * import hooks from "./hooks";
 * import configHelper from "./helpers/config";
 * import { name, version } from "../package.json";
 *
 * class MyExtension extends Extension {
 *   static info = {
 *     name,
 *     version,
 *     protocolVersion: '1',
 *   };
 *
 *   hooks = hooks;
 *
 *   constructor({ core, config }: MyExtensionParameters) {
 *     super({ core, config });
 *     configHelper.set(config);
 *   }
 * }
 *
 * export default MyExtension;
 * ```
 */
var Extension = /** @class */ (function () {
    function Extension(_a) {
        var core = _a.core, config = _a.config;
        // constructor(config?: ExtensionConfig) {
        this.config = config || {};
        this.core = core || {};
        this.hooks = {
            menu: function () { return null; },
            pages: function () { return null; },
            sections: function () { return null; },
        };
    }
    Object.defineProperty(Extension.prototype, "name", {
        /**
         * The name of the extension
         */
        get: function () {
            return this.constructor.info.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extension.prototype, "version", {
        /**
         * The version of the extension
         */
        get: function () {
            return this.constructor.info.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extension.prototype, "protocolVersion", {
        /**
         * The version of the extension
         */
        get: function () {
            return this.constructor.info.protocolVersion;
        },
        enumerable: false,
        configurable: true
    });
    return Extension;
}());
exports.Extension = Extension;

});

var name$1 = "@apisuite/apisuite-marketplace-extension-ui";
var version$1 = "1.0.0";

var EXT_NAME = name$1;
var BASE_URI = '/marketplace';

var admin$1 = {
	title: "Admin area",
	tabGeneral: {
		tabTitle: "General settings",
		pageTitle: "General settings",
		description: "Personalise the API Suite Cloud portal to your organisaion’s image.",
		portalTitle: "Portal title",
		ownerName: "Owner name"
	},
	tabNavigation: {
		tabTitle: "Navigation",
		pageTitle: "Social media accounts",
		description: "Adjust the icon links in the footer of the portal.",
		url: "URL",
		types: {
			other: "Other"
		}
	},
	tabIntegrations: {
		tabTitle: "Service integrations",
		pageTitle: "Service integrations",
		description: "Maximize the experience of your users by customizing the service integrations of your APISuite Portal Cloud account.",
		gateway: {
			title: "Gateway integration",
			providers: {
				kong: "Kong"
			},
			url: "Gateway URL",
			apiKey: "Gateway API Key",
			submitCoreSubscriptions: "Sync Core Subscriptions",
			docsText: "To successfully link your local gateway with this cloud portal, please read the <0>step-by-step documentation</0>."
		},
		idp: {
			title: "Open Identity service",
			providers: {
				internal: "Internal Open Identity service",
				keycloak: "Keycloak Identity service"
			},
			clientRegistrationURL: "Client registration URL",
			initialAccessToken: "Initial access token",
			docsText: "To successfully link your Identity Provider with this cloud portal, please read the <0>step-by-step documentation</0>."
		}
	},
	tabAPICatalog: {
		tabTitle: "API Catalog",
		pageTitle: "Cloud API Catalog",
		description: "Manage the accessibility of your API Products.",
		apiProductsTable: {
			tableTitle: "API Products Catalog",
			tableSubTitle: "No entries",
			noProductsToShow: {
				paragraphText: "No products yet",
				linkText: "Learn how to work with API Products"
			}
		},
		apiProductsAddButtonLabel: "Add API Product",
		apiProductsSideNote: "API Products collected from your gateway are shown in the API Products catalog. You are able to augment the gateway products with \"additional\" information.",
		noticeText: "You might want to refresh your page and browser's cache if you don't see the update appear."
	},
	tabOrganisations: {
		tabTitle: "Organisations",
		pageTitle: "Organisations",
		description: "Multi-user accounts overview, referred to as \"Organisations\".",
		organisationsTable: {
			tableTitle: "Organisations",
			tableSubTitle: "Applications",
			noProductsToShow: {
				paragraphText: "No products yet",
				linkText: "Learn how to work with API Products"
			}
		},
		notices: {
			noticeOneText: "The APISuite Cloud's billing metrics are based on active organisations, regardless of how many individual users one Organisation holds.",
			noticeTwoText: "You might want to refresh your page and browser's cache if you don't see the update appear."
		}
	},
	tabSocial: {
		tabTitle: "Social media accounts",
		addTitle: "Add account..."
	},
	feedback: {
		saveSuccess: "Settings saved",
		saveError: "Could not save settings"
	},
	"delete": {
		success: "The account was removed successfully.",
		error: "Failed to delete account."
	},
	api: {
		saveSuccess: "API saved",
		saveError: "Could not save API",
		getError: "Failed to get API",
		addEntry: "Add Entry",
		dragText: "Click or Drag 'n' drop file...",
		updateSuccess: "API updated successfully",
		updateError: "Failed to updated API",
		deleteSuccess: "API deleted successfully",
		deleteError: "Failed to delete API"
	}
};
var enUS = {
	admin: admin$1
};

var admin = {
	title: "Área de administração",
	tabGeneral: {
		tabTitle: "Definições gerais",
		portalTitle: "Título do portal",
		ownerName: "Nome do proprietário"
	},
	tabGateway: {
		tabTitle: "Set up da gateway",
		url: "URL da gateway",
		apiKey: "API Key da gateway",
		submitCoreSubscriptions: "Submeter as subscrições do core"
	},
	tabSocial: {
		tabTitle: "Contas de redes sociais",
		addTitle: "Adicionar conta...",
		types: {
			other: "Outro"
		}
	}
};
var ptPT = {
	admin: admin
};

i18next__default['default'].addResourceBundle('en', EXT_NAME, enUS);
i18next__default['default'].addResourceBundle('pt', EXT_NAME, ptPT);
i18next__default['default'].getFixedT(null, EXT_NAME);
i18next__default['default'].t;

var _a;
var menuConfig = (_a = {},
    _a[Menus.HeaderAnonymousMain] = [
        {
            label: 'Marketplace',
            title: 'Marketplace',
            route: BASE_URI,
        },
    ],
    _a[Menus.HeaderAuthenticatedMain] = [
        {
            label: 'Marketplace',
            title: 'Marketplace',
            route: BASE_URI,
        },
    ],
    _a);
var hookMenu = function (menu) {
    return menuConfig[menu] || null;
};

var immutabilityHelper = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function stringifiable(obj) {
    // Safely stringify Object.create(null)
    /* istanbul ignore next */
    return typeof obj === 'object' && !('toString' in obj) ?
        Object.prototype.toString.call(obj).slice(8, -1) :
        obj;
}
var isProduction = typeof process === 'object' && process.env.NODE_ENV === 'production';
function invariant(condition, message) {
    if (!condition) {
        /* istanbul ignore next */
        if (isProduction) {
            throw new Error('Invariant failed');
        }
        throw new Error(message());
    }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), function () { return "update(): You provided an invalid spec to update(). The spec may " +
                "not contain an array except as the value of $set, $push, $unshift, " +
                "$splice or any custom command allowing an array value."; });
        }
        invariant(typeof spec === 'object' && spec !== null, function () { return "update(): You provided an invalid spec to update(). The spec and " +
            "every included key path must be plain objects containing one of the " +
            ("following commands: " + Object.keys(_this.commands).join(', ') + "."); });
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), function () { return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + "."; });
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), function () { return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " +
        "Did you forget to wrap your parameter in an array?"; });
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), function () { return "Expected $splice target to be an array; got " + stringifiable(value); });
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), function () { return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " +
        "Did you forget to wrap your parameters in an array?"; });
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', function () { return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + "."; });
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, function () { return "Cannot have more than one key in an object with $set"; });
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', function () { return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue); });
    invariant(target && typeof target === 'object', function () { return "update(): $merge expects a target of type 'object'; got " + stringifiable(target); });
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function () { return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget); });
}
});

var update = /*@__PURE__*/getDefaultExportFromCjs(immutabilityHelper);

/** Initial state */
var initialState = {
    allMarketplaceApps: [],
    allMarketplaceLabels: [],
    allMarketplacePublishers: [],
    filteredMarketplaceApps: [],
    retrievedAllMarketplaceApps: false,
    retrievedAllMarketplaceLabels: false,
    retrievedAllMarketplacePublishers: false,
    retrievedFilteredMarketplaceApps: false,
};
/** Action types */
var GET_ALL_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION';
var GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS';
var GET_ALL_MARKETPLACE_LABELS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION';
var GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS';
var GET_ALL_MARKETPLACE_PUBLISHERS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION';
var GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS';
var GET_FILTERED_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION';
var GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS';
/** Reducer */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case GET_ALL_MARKETPLACE_APPS_ACTION: {
            return state;
        }
        case GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS: {
            return update(state, {
                allMarketplaceApps: { $set: action.allMarketplaceApps },
                retrievedAllMarketplaceApps: { $set: true },
            });
        }
        case GET_ALL_MARKETPLACE_LABELS_ACTION: {
            return state;
        }
        case GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS: {
            return update(state, {
                allMarketplaceLabels: { $set: action.allMarketplaceLabels },
                retrievedAllMarketplaceLabels: { $set: true },
            });
        }
        case GET_ALL_MARKETPLACE_PUBLISHERS_ACTION: {
            return state;
        }
        case GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS: {
            return update(state, {
                allMarketplacePublishers: { $set: action.allMarketplacePublishers },
                retrievedAllMarketplacePublishers: { $set: true },
            });
        }
        case GET_FILTERED_MARKETPLACE_APPS_ACTION: {
            return update(state, {
                retrievedFilteredMarketplaceApps: { $set: false },
            });
        }
        case GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS: {
            return update(state, {
                filteredMarketplaceApps: { $set: action.filteredMarketplaceApps },
                retrievedFilteredMarketplaceApps: { $set: true },
            });
        }
        default:
            return state;
    }
}
/** Action builders */
function getAllMarketplaceAppsAction() {
    return { type: GET_ALL_MARKETPLACE_APPS_ACTION };
}
function getAllMarketplaceAppsActionSuccess(allMarketplaceApps) {
    return { type: GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS, allMarketplaceApps: allMarketplaceApps };
}
function getAllMarketplaceLabelsAction() {
    return { type: GET_ALL_MARKETPLACE_LABELS_ACTION };
}
function getAllMarketplaceLabelsActionSuccess(allMarketplaceLabels) {
    return {
        type: GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS,
        allMarketplaceLabels: allMarketplaceLabels,
    };
}
function getAllMarketplacePublishersAction() {
    return { type: GET_ALL_MARKETPLACE_PUBLISHERS_ACTION };
}
function getAllMarketplacePublishersActionSuccess(allMarketplacePublishers) {
    return {
        type: GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS,
        allMarketplacePublishers: allMarketplacePublishers,
    };
}
function getFilteredMarketplaceAppsAction(filters) {
    return {
        type: GET_FILTERED_MARKETPLACE_APPS_ACTION,
        filters: filters,
    };
}
function getFilteredMarketplaceAppsActionSuccess(filteredMarketplaceApps) {
    return {
        type: GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS,
        filteredMarketplaceApps: filteredMarketplaceApps,
    };
}

var Link = React.forwardRef(function (_a, ref) {
    var _b = _a.externalTarget, externalTarget = _b === void 0 ? '_blank' : _b, href = _a.href, to = _a.to, props = __rest(_a, ["externalTarget", "href", "to"]);
    var destination = href || to;
    if (typeof destination === 'string' && /^https?:\/\//.test(destination)) {
        return (React.createElement("a", __assign({ href: destination, target: externalTarget }, props), props.children));
    }
    else {
        return React.createElement(reactRouterDom.Link, __assign({ ref: ref, to: destination }, props));
    }
});
Link.displayName = 'Link';

var useStyles$1 = styles.makeStyles({
    appCatalogEntry: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #BAC0C6',
        borderRadius: '4px',
        height: '175px',
        padding: '20px',
        width: '215px',
    },
    appCatalogEntryAvatar: {
        background: '#C8DC8C linear-gradient(270deg, rgba(200, 220, 140, 1) 0%, rgba(25, 165, 140, 1) 100%)',
        fontSize: '15px',
        fontWeight: 300,
        height: '45px',
        marginRight: '12.5px',
        textTransform: 'uppercase',
        width: '45px',
    },
    appCatalogEntryBottomDetails: {
        display: 'block',
        maxWidth: '175px',
        width: '100%',
    },
    appCatalogEntryDescription: {
        color: '#85909A',
        display: '-webkit-box',
        fontSize: '14px',
        fontWeight: 300,
        height: '35px',
        lineHeight: '18px',
        marginBottom: '15px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
    },
    appCatalogEntryImage: {
        borderRadius: '50%',
        fontSize: '20px',
        fontWeight: 300,
        height: '45px',
        marginRight: '12.5px',
        width: '45px',
    },
    appCatalogEntryLabel: {
        backgroundColor: '#EEEEEE',
        borderRadius: '4px',
        color: '#14283C',
        fontSize: '12px',
        fontWeight: 300,
        padding: '0px 7.5px',
        width: 'fit-content',
    },
    appCatalogEntryLink: {
        marginBottom: '25px',
        marginRight: '25px',
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
            filter: 'drop-shadow(0px 2.5px 2.5px rgba(0, 0, 0, 0.25))',
        },
    },
    appCatalogEntryNameAndOwnerContainer: {
        display: 'block',
        width: '110px',
    },
    appCatalogEntryTopDetails: {
        display: 'flex',
        marginBottom: '15px',
        maxWidth: '175px',
        width: '100%',
    },
    appCatalogEntryName: {
        color: '#14283C',
        fontSize: '16px',
        fontWeight: 700,
        marginBottom: '-10px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    appCatalogEntryOwner: {
        color: '#51606E',
        fontSize: '14px',
        fontWeight: 400,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    appCatalogEntryText: {
        padding: '15px 12.5px 15px 0px',
        width: '130px',
    },
    appCatalogEntryVersion: {
        borderRadius: '4px',
        marginRight: '8px',
        padding: '5px 10px',
    },
    appCatalogEntryVersionAndAccess: {
        color: '#51606E',
        fontSize: '14px',
        fontWeight: 300,
    },
});

var AppCatalog = function (_a) {
    var appsToDisplay = _a.appsToDisplay;
    var classes = useStyles$1();
    var generateAppCatalogEntry = function (appDetails, index) {
        var appSplitName = appDetails.appName.split(' ');
        var appInitials = appSplitName[0].slice(0, 2);
        return (React.createElement("div", { className: classes.appCatalogEntry, key: "appCatalogEntry" + index },
            React.createElement("div", { className: classes.appCatalogEntryTopDetails },
                appDetails.appLogo !== '' ? (React.createElement("img", { className: classes.appCatalogEntryImage, src: appDetails.appLogo })) : (React.createElement(core$1.Avatar, { className: classes.appCatalogEntryAvatar }, appInitials)),
                React.createElement("div", { className: classes.appCatalogEntryNameAndOwnerContainer },
                    React.createElement("p", { className: classes.appCatalogEntryName }, appDetails.appName),
                    React.createElement("p", { className: classes.appCatalogEntryOwner }, appDetails.appPublisher))),
            React.createElement("div", { className: classes.appCatalogEntryBottomDetails },
                React.createElement("p", { className: classes.appCatalogEntryDescription }, appDetails.appDescription),
                React.createElement("p", { className: classes.appCatalogEntryLabel }, appDetails.appLabel))));
    };
    var appCatalogEntries = appsToDisplay.map(function (appDetails, index) {
        return (React.createElement(Link, { className: classes.appCatalogEntryLink, key: "linkToApp" + index, to: "#" }, generateAppCatalogEntry(appDetails, index)));
    });
    return React.createElement(React.Fragment, null, appCatalogEntries);
};

var useStyles = styles.makeStyles({
    amountOfAppMarketAppsText: {
        color: '#4E616F',
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '25px',
        '& > :first-child': {
            color: '#14283C',
            fontWeight: 700,
        },
    },
    appCatalogContainer: {
        alignItems: 'flex-start',
        display: 'flex',
        flexFlow: 'wrap',
        marginBottom: '25px',
    },
    appMarketApps: {
        maxWidth: '975px',
        padding: '60px 45px',
        width: '100%',
    },
    appMarketHeader: {
        // First color is a fallback one - do not remove!
        background: '#7DD291 linear-gradient(270deg, rgba(125, 210, 145, 1) 0%, rgba(0, 125, 125, 1) 100%)',
        backgroundImage: 'url(' + spaceBackground__default['default'] + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '4px solid rgba(20, 40, 60, 0.1)',
        height: '335px',
        width: '100%',
    },
    appMarketHeaderContentsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px auto',
        maxWidth: '1200px',
        padding: '70px 60px 0px 60px',
        width: '100%',
    },
    appMarketHeaderImage: {
        maxWidth: '330px',
        transform: 'translate(-25px, -10px)',
        width: '100%',
    },
    appMarketHeaderSearchField: {
        maxWidth: '425px',
        width: '100%',
        // The input field itself
        '& input': {
            color: '#BAC0C6',
            fontSize: '16px',
            fontWeight: 400,
            height: '10px',
        },
        // The input field's SVG icon
        '& svg': {
            color: '#BAC0C6',
        },
    },
    appMarketHeaderTitle: {
        color: '#FFFFFF',
        fontSize: '42px',
        fontWeight: 700,
        marginBottom: '25px',
    },
    appMarketHeaderTitleAndSearchField: {
        maxWidth: '425px',
        width: '100%',
    },
    appMarketFilters: {
        borderRight: '1px solid #E3E3E3',
        maxWidth: '250px',
        padding: '60px 0px',
        width: '100%',
    },
    appMarketFiltersAndAppsSection: {
        display: 'flex',
        margin: '0px auto',
        maxWidth: '1200px',
        minHeight: '630px',
        padding: '0px 60px',
        width: '100%',
    },
    featuredAppCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        boxShadow: '1px 5px 5px 0px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        display: 'flex',
        height: '60px',
        justifyContent: 'center',
        margin: '0px 10px',
        width: '165px',
    },
    featuredAppCardInfo: {
        textAlign: 'left',
        margin: 'auto 7.5px',
        '& > :first-child': {
            color: '#14283C',
            fontSize: '14px',
            fontWeight: 700,
            marginBottom: '-10px',
        },
        '& > :last-child': {
            color: '#51606E',
            fontSize: '12px',
            fontWeight: 400,
        },
    },
    featuredAppCardLogo: {
        margin: 'auto 0px',
        fontSize: '35px',
        color: '#14283C',
    },
    featuredAppCardsSlider: {
        display: 'flex',
        justifyContent: 'center',
    },
    invisibleFeaturedAppCardsSliderButton: {
        cursor: 'auto',
        margin: 'auto 0px',
        '& > svg': {
            color: 'transparent',
            fontSize: '35px',
            verticalAlign: 'middle',
        },
    },
    visibleFeaturedAppCardsSliderButton: {
        cursor: 'pointer',
        margin: 'auto 0px',
        '& > svg': {
            color: '#FFFFFF',
            fontSize: '35px',
            verticalAlign: 'middle',
        },
    },
    featuredAppsInnerContainer: {
        margin: 'auto',
        padding: '25px 0px',
        textAlign: 'center',
        width: '100%',
    },
    featuredAppsOuterContainer: {
        background: 'rgba(0, 125, 125, 1)',
        backgroundImage: 'url(' + appCarouselBackground__default['default'] + ')',
        backgroundSize: 'cover',
        borderRadius: '4px',
        display: 'flex',
        height: '230px',
        justifyContent: 'space-between',
        marginTop: '50px',
        maxWidth: '720px',
        width: '100%',
    },
    featuredAppsSubtitle: {
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: 300,
        marginBottom: '25px',
    },
    featuredAppsTitle: {
        color: '#FFFFFF',
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '10px',
    },
    filterAccordionContainer: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&::before': {
            content: 'none',
        },
    },
    filterAccordionIcon: {
        color: '#51606E',
    },
    filterAccordionTitle: {
        color: '#51606E',
        fontSize: '16px',
        fontWeight: 400,
    },
    filterSeparator: {
        border: '1px solid #E3E3E3',
        borderRadius: '4px',
        margin: '25px 0px',
        maxWidth: '175px',
        width: '100%',
    },
    filterTitleContainer: {
        alignItems: 'center',
        display: 'flex',
        marginBottom: '10px',
    },
    filterTitleIcon: {
        color: '#14283C',
        marginRight: '7.5px',
    },
    filterTitleText: {
        color: '#14283C',
        fontSize: '18px',
        fontWeight: 500,
    },
    noAppsToDisplay: {
        color: '#4E616F',
        fontSize: '16px',
        fontWeight: 200,
    },
    noFiltersAvailable: {
        color: '#14283C',
        fontSize: '12px',
        fontWeight: 400,
    },
    notSelectedFilter: {
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '-5px',
        '& > :first-child': {
            color: '#14283C',
        },
        '& > :last-child': {
            color: '#14283C',
        },
    },
    selectedFilter: {
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '-5px',
        '& > :first-child': {
            color: '#19B3EE',
        },
        '& > :last-child': {
            color: '#19B3EE',
            fontWeight: 500,
        },
    },
});

var Marketplace$1 = function (_a) {
    var allMarketplaceApps = _a.allMarketplaceApps, allMarketplaceLabels = _a.allMarketplaceLabels, allMarketplacePublishers = _a.allMarketplacePublishers, filteredMarketplaceApps = _a.filteredMarketplaceApps, getAllMarketplaceAppsAction = _a.getAllMarketplaceAppsAction, getAllMarketplaceLabelsAction = _a.getAllMarketplaceLabelsAction, getAllMarketplacePublishersAction = _a.getAllMarketplacePublishersAction, getFilteredMarketplaceAppsAction = _a.getFilteredMarketplaceAppsAction, retrievedAllMarketplaceApps = _a.retrievedAllMarketplaceApps, retrievedAllMarketplaceLabels = _a.retrievedAllMarketplaceLabels, retrievedAllMarketplacePublishers = _a.retrievedAllMarketplacePublishers, settings = _a.settings;
    var classes = useStyles();
    reactI18next.useTranslation()[0];
    var _b = React.useState([]), allAppsList = _b[0], setAllAppsList = _b[1];
    React.useEffect(function () {
        /* Triggers the retrieval and storage (under the 'marketplace' section of the app's Store)
        of all information we presently have on public apps, and their respective labels & publishers. */
        getAllMarketplaceAppsAction();
        getAllMarketplaceLabelsAction();
        getAllMarketplacePublishersAction();
    }, []);
    React.useEffect(function () {
        /* Once 'marketplace -> allMarketplaceApps' info is made available to us, we process it
        so as to later display it on our 'Apps catalog' section. */
        var allAvailableAppsArray = allMarketplaceApps;
        if (allAvailableAppsArray.length) {
            var newAllAvailableAppsArray = allAvailableAppsArray.map(function (app) {
                return {
                    appDescription: app.shortDescription.length > 0
                        ? app.shortDescription
                        : app.description.length > 0
                            ? app.description
                            : 'No description available.',
                    appID: app.id,
                    appLabel: 'Some label',
                    appLogo: app.logo,
                    appName: app.name,
                    appPublisher: app.organization.name,
                    appUpdatedAt: app.updatedAt,
                };
            });
            setAllAppsList(newAllAvailableAppsArray);
        }
    }, [allMarketplaceApps]);
    // App filtering & sorting set-up
    // Search term filter
    var _c = React.useState(''), searchTerm = _c[0], setSearchTerm = _c[1];
    var handleSearchTermChanges = function (changeEvent) {
        var newSearchTerm = changeEvent === null || changeEvent === void 0 ? void 0 : changeEvent.target.value.toLowerCase();
        setSearchTerm(newSearchTerm);
    };
    // Label filters
    var _d = React.useState({}), labelFilters = _d[0], setLabelFilters = _d[1];
    var _e = React.useState([]), labelFilterElements = _e[0], setLabelFilterElements = _e[1];
    React.useEffect(function () {
        var newLabelFilters = {};
        allMarketplaceLabels.map(function (label) {
            newLabelFilters[label] = false;
        });
        var newLabelFilterElements = allMarketplaceLabels.map(function (label, index) {
            return (React.createElement(core$1.FormControlLabel, { className: newLabelFilters[label]
                    ? classes.selectedFilter
                    : classes.notSelectedFilter, control: React.createElement(core$1.Checkbox, { checked: newLabelFilters[label], name: label, onChange: function (clickEvent) { return filterSelection(clickEvent, 'labels'); } }), key: "labelFilterElement" + index, label: label }));
        });
        setLabelFilters(newLabelFilters);
        setLabelFilterElements(newLabelFilterElements);
    }, [allMarketplaceLabels]);
    // Publisher filters
    var _f = React.useState({}), publisherFilters = _f[0], setPublisherFilters = _f[1];
    var _g = React.useState([]), publisherFilterElements = _g[0], setPublisherFilterElements = _g[1];
    React.useEffect(function () {
        var newPublisherFilters = {};
        var publisherNames = [];
        allMarketplacePublishers.map(function (publisher) {
            var publisherName = publisher['name'];
            publisherNames.push(publisher['name']);
            newPublisherFilters[publisherName] = false;
        });
        var newPublisherFilterElements = publisherNames.map(function (publisherName, index) {
            console.log('newPublisherFilters[publisherName]', newPublisherFilters[publisherName]);
            return (React.createElement(core$1.FormControlLabel, { className: newPublisherFilters[publisherName]
                    ? classes.selectedFilter
                    : classes.notSelectedFilter, control: React.createElement(core$1.Checkbox, { checked: newPublisherFilters[publisherName], name: publisherName, onChange: function (clickEvent) {
                        return filterSelection(clickEvent, 'publishers');
                    } }), key: "publisherFilterElement" + index, label: publisherName }));
        });
        setPublisherFilters(newPublisherFilters);
        setPublisherFilterElements(newPublisherFilterElements);
    }, [allMarketplacePublishers]);
    var filterSelection = function (clickEvent, filterType) {
        if (filterType === 'labels') {
            var newLabelFilters = __assign({}, labelFilters);
            newLabelFilters[clickEvent.target.name] = !newLabelFilters[clickEvent.target.name];
            setLabelFilters(newLabelFilters);
        }
        else {
            var newPublisherFilters = __assign({}, publisherFilters);
            newPublisherFilters[clickEvent.target.name] = !newPublisherFilters[clickEvent.target.name];
            setPublisherFilters(newPublisherFilters);
        }
    };
    // App sorting mode
    var _h = React.useState('appName'), sortMode = _h[0], setSortMode = _h[1]; // Either 'appName', 'publisherName', or 'lastUpdated'
    var sortModeSelection = function (clickEvent) {
        var selectedSortMode = clickEvent.target.value;
        setSortMode(selectedSortMode);
    };
    // App filtering & sorting process
    var _j = React.useState([]), filteredAppsList = _j[0], setFilteredAppsList = _j[1];
    React.useEffect(function () {
        /* Once 'marketplace -> filteredMarketplaceApps' info is made available to us, we process it
        so as to later display it on our 'Apps catalog' section. */
        var filteredAppsArray = filteredMarketplaceApps;
        if (filteredAppsArray.length) {
            var newFilteredAppsArray = filteredAppsArray.map(function (filteredApp) {
                return {
                    appDescription: filteredApp.shortDescription.length > 0
                        ? filteredApp.shortDescription
                        : filteredApp.description.length > 0
                            ? filteredApp.description
                            : 'No description available.',
                    appID: filteredApp.id,
                    appLabel: 'Some label',
                    appLogo: filteredApp.logo,
                    appName: filteredApp.name,
                    appPublisher: filteredApp.organization.name,
                    appUpdatedAt: filteredApp.updatedAt,
                };
            });
            setFilteredAppsList(newFilteredAppsArray);
        }
    }, [filteredMarketplaceApps]);
    var filterAndSortApps = function () {
        if (!(retrievedAllMarketplaceApps &&
            retrievedAllMarketplaceLabels &&
            retrievedAllMarketplacePublishers)) {
            return;
        }
        var publisherFiltersForFilterAction = [];
        var labelFiltersForFilterAction = [];
        var sortModeForFilterAction = sortMode === 'appName'
            ? 'app'
            : sortMode === 'publisherName'
                ? 'org'
                : 'updated';
        var orderModeForFilterAction = 'asc'; // TODO: Eventually create something that allows us to set the order mode
        allMarketplacePublishers.map(function (publisher) {
            if (publisherFilters[publisher.name]) {
                publisherFiltersForFilterAction.push(publisher.id);
            }
        });
        allMarketplaceLabels.map(function (label) {
            if (labelFilters[label]) {
                labelFiltersForFilterAction.push(label);
            }
        });
        getFilteredMarketplaceAppsAction({
            org_id: publisherFiltersForFilterAction,
            label: labelFiltersForFilterAction,
            sort_by: sortModeForFilterAction,
            order: orderModeForFilterAction,
        });
    };
    React.useEffect(function () {
        filterAndSortApps();
    }, [labelFilters, publisherFilters, sortMode]);
    React.useEffect(function () {
        if (searchTerm.length === 0) {
            filterAndSortApps();
        }
        else {
            var appsToFilter = filteredAppsList.length !== 0 ? __spreadArray([], filteredAppsList) : __spreadArray([], allAppsList);
            var newFilteredApps = [];
            newFilteredApps = appsToFilter.filter(function (app) {
                return app.appName.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredAppsList(newFilteredApps);
        }
    }, [searchTerm]);
    // Carousel of 'featured apps'
    var _k = React.useState(0), currentSlide = _k[0]; _k[1];
    console.log('publisherFilters:', publisherFilters);
    return (React.createElement("main", null,
        React.createElement("header", { className: classes.appMarketHeader },
            React.createElement("div", { className: classes.appMarketHeaderContentsContainer },
                React.createElement("div", { className: classes.appMarketHeaderTitleAndSearchField },
                    React.createElement("h1", { className: classes.appMarketHeaderTitle },
                        React.createElement(React.Fragment, null,
                            "Explore the ",
                            settings.portalName,
                            " Marketplace")),
                    React.createElement(core$1.TextField, { className: classes.appMarketHeaderSearchField, InputProps: {
                            endAdornment: (React.createElement(core$1.InputAdornment, { position: "end" },
                                React.createElement(SearchRoundedIcon__default['default'], null))),
                        }, placeholder: "Search for apps", variant: "outlined", onChange: handleSearchTermChanges })),
                React.createElement("div", null,
                    React.createElement("img", { className: classes.appMarketHeaderImage, src: marketplace__default['default'] })))),
        React.createElement("section", { className: classes.appMarketFiltersAndAppsSection },
            React.createElement("div", { className: classes.appMarketFilters },
                React.createElement(core$1.FormControl, null,
                    React.createElement(core$1.FormLabel, null,
                        React.createElement("div", { className: classes.filterTitleContainer },
                            React.createElement(SortRoundedIcon__default['default'], { className: classes.filterTitleIcon }),
                            React.createElement("p", { className: classes.filterTitleText }, "Sort by:"))),
                    React.createElement(core$1.RadioGroup, { name: "sortMode", onChange: sortModeSelection, value: sortMode },
                        React.createElement(core$1.FormControlLabel, { className: sortMode === 'appName'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React.createElement(core$1.Radio, null), label: "Application name", value: "appName" }),
                        React.createElement(core$1.FormControlLabel, { className: sortMode === 'publisherName'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React.createElement(core$1.Radio, null), label: "Publisher name", value: "publisherName" }),
                        React.createElement(core$1.FormControlLabel, { className: sortMode === 'lastUpdated'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React.createElement(core$1.Radio, null), label: "Last updated", value: "lastUpdated" }))),
                React.createElement("hr", { className: classes.filterSeparator }),
                React.createElement(core$1.FormControl, null,
                    React.createElement(core$1.FormLabel, null,
                        React.createElement("div", { className: classes.filterTitleContainer },
                            React.createElement(FilterListRoundedIcon__default['default'], { className: classes.filterTitleIcon }),
                            React.createElement("p", { className: classes.filterTitleText }, "Filter by:"))),
                    React.createElement(core$1.Accordion, { className: classes.filterAccordionContainer },
                        React.createElement(core$1.AccordionSummary, { expandIcon: React.createElement(ExpandMoreRoundedIcon__default['default'], { className: classes.filterAccordionIcon }) },
                            React.createElement(core$1.Typography, { className: classes.filterAccordionTitle },
                                React.createElement(React.Fragment, null, "Labels"))),
                        React.createElement(core$1.AccordionDetails, null,
                            React.createElement(core$1.FormGroup, null, labelFilterElements.length !== 0 ? (labelFilterElements) : (React.createElement("p", { className: classes.noFiltersAvailable }, "No labels to filter with"))))),
                    React.createElement(core$1.Accordion, { className: classes.filterAccordionContainer },
                        React.createElement(core$1.AccordionSummary, { expandIcon: React.createElement(ExpandMoreRoundedIcon__default['default'], { className: classes.filterAccordionIcon }) },
                            React.createElement(core$1.Typography, { className: classes.filterAccordionTitle },
                                React.createElement(React.Fragment, null, "Publishers"))),
                        React.createElement(core$1.AccordionDetails, null,
                            React.createElement(core$1.FormGroup, null, publisherFilterElements.length !== 0 ? (publisherFilterElements) : (React.createElement("p", { className: classes.noFiltersAvailable }, "No publishers to filter with"))))))),
            React.createElement("div", { className: classes.appMarketApps },
                React.createElement("p", { className: classes.amountOfAppMarketAppsText },
                    React.createElement("span", null,
                        filteredAppsList.length > 0
                            ? filteredAppsList.length
                            : searchTerm.length === 0 &&
                                Object.values(labelFilters).includes(false) &&
                                Object.values(publisherFilters).includes(false)
                                ? allAppsList.length
                                : '0',
                        React.createElement(React.Fragment, null, " apps ")),
                    React.createElement(React.Fragment, null, "available")),
                filteredAppsList.length > 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: classes.appCatalogContainer },
                        React.createElement(AppCatalog, { appsToDisplay: filteredAppsList })),
                    React.createElement(lab.Pagination, { count: 5, disabled: true, shape: "rounded", variant: "outlined" }))) : searchTerm.length === 0 &&
                    Object.values(labelFilters).includes(false) &&
                    Object.values(publisherFilters).includes(false) ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: classes.appCatalogContainer },
                        React.createElement(AppCatalog, { appsToDisplay: allAppsList })),
                    React.createElement(lab.Pagination, { count: 5, disabled: true, shape: "rounded", variant: "outlined" }))) : (React.createElement("p", { className: classes.noAppsToDisplay }, "No apps to display!")),
                allMarketplaceApps && (React.createElement("div", { className: classes.featuredAppsOuterContainer },
                    React.createElement("div", { className: classes.featuredAppsInnerContainer },
                        React.createElement("p", { className: classes.featuredAppsTitle }, "Featured apps"),
                        React.createElement("p", { className: classes.featuredAppsSubtitle }, "Ready to try? Subscribe to one of your featured apps to get started!"),
                        React.createElement("div", { className: classes.featuredAppCardsSlider },
                            React.createElement("div", { className: currentSlide === 1 || currentSlide === 2
                                    ? classes.visibleFeaturedAppCardsSliderButton
                                    : classes.invisibleFeaturedAppCardsSliderButton },
                                React.createElement(ChevronLeftRoundedIcon__default['default'], null)),
                            React.createElement("div", { className: classes.featuredAppCard },
                                React.createElement(AmpStoriesRoundedIcon__default['default'], { className: classes.featuredAppCardLogo }),
                                React.createElement("div", { className: classes.featuredAppCardInfo },
                                    React.createElement("p", null, "Featured app 1"),
                                    React.createElement("p", null, "Publisher A"))),
                            React.createElement("div", { className: classes.featuredAppCard },
                                React.createElement(AmpStoriesRoundedIcon__default['default'], { className: classes.featuredAppCardLogo }),
                                React.createElement("div", { className: classes.featuredAppCardInfo },
                                    React.createElement("p", null, "Featured app 2"),
                                    React.createElement("p", null, "Publisher B"))),
                            React.createElement("div", { className: classes.featuredAppCard },
                                React.createElement(AmpStoriesRoundedIcon__default['default'], { className: classes.featuredAppCardLogo }),
                                React.createElement("div", { className: classes.featuredAppCardInfo },
                                    React.createElement("p", null, "Featured app 3"),
                                    React.createElement("p", null, "Publisher C"))),
                            React.createElement("div", { className: currentSlide === 0 || currentSlide === 1
                                    ? classes.visibleFeaturedAppCardsSliderButton
                                    : classes.invisibleFeaturedAppCardsSliderButton },
                                React.createElement(ChevronRightRoundedIcon__default['default'], null))))))))));
};

var mapStateToProps = function (_a) {
    var marketplace = _a.marketplace, settings = _a.settings;
    return ({
        allMarketplaceApps: marketplace.allMarketplaceApps,
        allMarketplaceLabels: marketplace.allMarketplaceLabels,
        allMarketplacePublishers: marketplace.allMarketplacePublishers,
        filteredMarketplaceApps: marketplace.filteredMarketplaceApps,
        retrievedAllMarketplaceApps: marketplace.retrievedAllMarketplaceApps,
        retrievedAllMarketplaceLabels: marketplace.retrievedAllMarketplaceLabels,
        retrievedAllMarketplacePublishers: marketplace.retrievedAllMarketplacePublishers,
        retrievedFilteredMarketplaceApps: marketplace.retrievedFilteredMarketplaceApps,
        settings: settings,
    });
};
var mapDispatchToProps = function (dispatch) {
    return redux.bindActionCreators({
        getAllMarketplaceAppsAction: getAllMarketplaceAppsAction,
        getAllMarketplaceLabelsAction: getAllMarketplaceLabelsAction,
        getAllMarketplacePublishersAction: getAllMarketplacePublishersAction,
        getFilteredMarketplaceAppsAction: getFilteredMarketplaceAppsAction,
    }, dispatch);
};
var Marketplace = reactRedux.connect(mapStateToProps, mapDispatchToProps)(Marketplace$1);

var pagesConfig = [
    {
        path: '/marketplace',
        exact: true,
        component: Marketplace,
    },
];
var hookPages = function () {
    return pagesConfig;
};

var hooks = {
    menu: hookMenu,
    pages: hookPages,
    sections: null,
};

var baseConfig = {};

var values$1 = __assign({}, baseConfig);
var config = function () { return values$1; };
config.set = function (conf) {
    values$1 = __assign(__assign({}, values$1), conf);
};

var values = {};
var core = function () { return values; };
core.set = function (core) {
    values = __assign(__assign({}, values), core);
};

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

var browser$1 = createCommonjsModule(function (module, exports) {
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});

var hasFlag = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os__default['default'].release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util__default['default'].deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty__default['default'].isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util__default['default'].format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts);
};
});

var src = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = browser$1;
} else {
	module.exports = node;
}
});

var debug;

var debug_1 = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = src("follow-redirects");
    }
    catch (error) {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};

var URL = url__default['default'].URL;


var Writable = require$$0__default['default'].Writable;



// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "connect", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  ""
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  // Abort the internal request
  this._currentRequest.removeAllListeners();
  this._currentRequest.on("error", noop);
  this._currentRequest.abort();

  // Abort this request
  this.emit("abort");
  this.removeAllListeners();
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;
  if (callback) {
    this.on("timeout", callback);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer() {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
  }

  // Prevent a timeout from triggering
  function clearTimer() {
    clearTimeout(this._timeout);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!this.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Start the timer when the socket is opened
  if (this.socket) {
    startTimer();
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  this.once("response", clearTimer);
  this.once("error", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url__default['default'].format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      statusCode >= 300 && statusCode < 400) {
    // Abort the current request
    this._currentRequest.removeAllListeners();
    this._currentRequest.on("error", noop);
    this._currentRequest.abort();
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
        // RFC7231§6.4.4: The 303 (See Other) status code indicates that
        // the server is redirecting the user agent to a different resource […]
        // A user agent can perform a retrieval request targeting that URI
        // (a GET or HEAD request if using HTTP) […]
        (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) ||
      url__default['default'].parse(this._currentUrl).hostname;

    // Create the redirected request
    var redirectUrl = url__default['default'].resolve(this._currentUrl, location);
    debug_1("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url__default['default'].parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);

    // Drop the Authorization header if redirecting to another host
    if (redirectUrlParts.hostname !== previousHostName) {
      removeMatchingHeaders(/^authorization$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (typeof this._options.beforeRedirect === "function") {
      var responseDetails = { headers: response.headers };
      try {
        this._options.beforeRedirect.call(null, this._options, responseDetails);
      }
      catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    try {
      this._performRequest();
    }
    catch (cause) {
      var error = new RedirectionError("Redirected request failed: " + cause.message);
      error.cause = cause;
      this.emit("error", error);
    }
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url__default['default'].parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert__default['default'].equal(options.protocol, protocol, "protocol mismatch");
      debug_1("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue;
}

function createErrorType(code, defaultMessage) {
  function CustomError(message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message || defaultMessage;
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

// Exports
var followRedirects = wrap({ http: http__default['default'], https: https__default['default'] });
var wrap_1 = wrap;
followRedirects.wrap = wrap_1;

var _args = [
	[
		"axios@0.21.1",
		"/Users/pedrocloudoki/Documents/Trabalho/API Suite Extensions/apisuite-marketplace-extension-ui"
	]
];
var _from = "axios@0.21.1";
var _id = "axios@0.21.1";
var _inBundle = false;
var _integrity = "sha512-dKQiRHxGD9PPRIUNIWvZhPTPpl1rf/OxTYKsqKUDjBwYylTvV7SjSHJb9ratfyzM6wCdLCOYLzs73qpg5c4iGA==";
var _location = "/axios";
var _phantomChildren = {
};
var _requested = {
	type: "version",
	registry: true,
	raw: "axios@0.21.1",
	name: "axios",
	escapedName: "axios",
	rawSpec: "0.21.1",
	saveSpec: null,
	fetchSpec: "0.21.1"
};
var _requiredBy = [
	"/"
];
var _resolved = "https://registry.npmjs.org/axios/-/axios-0.21.1.tgz";
var _spec = "0.21.1";
var _where = "/Users/pedrocloudoki/Documents/Trabalho/API Suite Extensions/apisuite-marketplace-extension-ui";
var author = {
	name: "Matt Zabriskie"
};
var browser = {
	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
var bugs = {
	url: "https://github.com/axios/axios/issues"
};
var bundlesize = [
	{
		path: "./dist/axios.min.js",
		threshold: "5kB"
	}
];
var dependencies = {
	"follow-redirects": "^1.10.0"
};
var description = "Promise based HTTP client for the browser and node.js";
var devDependencies = {
	bundlesize: "^0.17.0",
	coveralls: "^3.0.0",
	"es6-promise": "^4.2.4",
	grunt: "^1.0.2",
	"grunt-banner": "^0.6.0",
	"grunt-cli": "^1.2.0",
	"grunt-contrib-clean": "^1.1.0",
	"grunt-contrib-watch": "^1.0.0",
	"grunt-eslint": "^20.1.0",
	"grunt-karma": "^2.0.0",
	"grunt-mocha-test": "^0.13.3",
	"grunt-ts": "^6.0.0-beta.19",
	"grunt-webpack": "^1.0.18",
	"istanbul-instrumenter-loader": "^1.0.0",
	"jasmine-core": "^2.4.1",
	karma: "^1.3.0",
	"karma-chrome-launcher": "^2.2.0",
	"karma-coverage": "^1.1.1",
	"karma-firefox-launcher": "^1.1.0",
	"karma-jasmine": "^1.1.1",
	"karma-jasmine-ajax": "^0.1.13",
	"karma-opera-launcher": "^1.0.0",
	"karma-safari-launcher": "^1.0.0",
	"karma-sauce-launcher": "^1.2.0",
	"karma-sinon": "^1.0.5",
	"karma-sourcemap-loader": "^0.3.7",
	"karma-webpack": "^1.7.0",
	"load-grunt-tasks": "^3.5.2",
	minimist: "^1.2.0",
	mocha: "^5.2.0",
	sinon: "^4.5.0",
	typescript: "^2.8.1",
	"url-search-params": "^0.10.0",
	webpack: "^1.13.1",
	"webpack-dev-server": "^1.14.1"
};
var homepage = "https://github.com/axios/axios";
var jsdelivr = "dist/axios.min.js";
var keywords = [
	"xhr",
	"http",
	"ajax",
	"promise",
	"node"
];
var license = "MIT";
var main = "index.js";
var name = "axios";
var repository = {
	type: "git",
	url: "git+https://github.com/axios/axios.git"
};
var scripts = {
	build: "NODE_ENV=production grunt build",
	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
	examples: "node ./examples/server.js",
	fix: "eslint --fix lib/**/*.js",
	postversion: "git push && git push --tags",
	preversion: "npm test",
	start: "node ./sandbox/server.js",
	test: "grunt test && bundlesize",
	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
};
var typings = "./index.d.ts";
var unpkg = "dist/axios.min.js";
var version = "0.21.1";
var pkg = {
	_args: _args,
	_from: _from,
	_id: _id,
	_inBundle: _inBundle,
	_integrity: _integrity,
	_location: _location,
	_phantomChildren: _phantomChildren,
	_requested: _requested,
	_requiredBy: _requiredBy,
	_resolved: _resolved,
	_spec: _spec,
	_where: _where,
	author: author,
	browser: browser,
	bugs: bugs,
	bundlesize: bundlesize,
	dependencies: dependencies,
	description: description,
	devDependencies: devDependencies,
	homepage: homepage,
	jsdelivr: jsdelivr,
	keywords: keywords,
	license: license,
	main: main,
	name: name,
	repository: repository,
	scripts: scripts,
	typings: typings,
	unpkg: unpkg,
	version: version
};

var httpFollow = followRedirects.http;
var httpsFollow = followRedirects.https;






var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url__default['default'].parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url__default['default'].parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https__default['default'] : http__default['default'];
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib__default['default'].createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Factory for creating new instances
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var _default = axios$1;
axios_1.default = _default;

var axios = axios_1;

/** Endpoints constants */
var hostname = window.location.hostname;
var IS_CLOUD = hostname.indexOf('.cloud.apisuite.io') >= 0;
function getApiUrl() {
    if (IS_CLOUD) {
        // Transform the Portal's hostname into the API's hostname
        // Ex: ${client}.cloud.apisuite.io -> ${client}-apisuite-api.cloud.apisuite.io
        var apiHostname = hostname.replace('.', '-apisuite-api.');
        return "https://" + apiHostname;
    }
    return process.env.API_URL || '';
}
getApiUrl();
process.env.INFORM_URL || '';

/*
 * Request
 * fetch wrapper
 */
function checkToken(response) {
    var search = response.request.responseURL.split('?')[1];
    var urlParams = new URLSearchParams(search);
    var token = urlParams.get('token');
    return {
        hasToken: !!token,
        token: token,
    };
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 400) {
        // check if the response has a token and get it
        var _a = checkToken(response), hasToken = _a.hasToken, token = _a.token;
        if (hasToken) {
            return { token: token };
        }
        return response.data;
    }
    var errorsMsg = response.data;
    if (response.data && response.data.errors) {
        errorsMsg = response.data.errors.join(' ');
    }
    var reason = {
        status: response.status,
        statusText: response.statusText,
        message: errorsMsg || response.statusText || response,
    };
    return reason;
}
function request(init) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1, reason;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios(__assign(__assign({}, init), { withCredentials: true }))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, checkStatus(response)];
                case 2:
                    error_1 = _a.sent();
                    if (error_1.response) {
                        throw checkStatus(error_1.response);
                    }
                    else if (error_1.request) {
                        throw checkStatus(error_1.request);
                    }
                    else {
                        reason = {
                            status: 500,
                            statusText: 'Internal Server Error',
                            message: error_1.message,
                        };
                        throw reason;
                    }
                case 3: return [2 /*return*/];
            }
        });
    });
}

function getAllMarketplaceAppsActionSaga() {
    var getAllMarketplaceAppsActionUrl, response, allMarketplaceApps;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                getAllMarketplaceAppsActionUrl = 'https://api.develop.apisuite.io/apps/public';
                return [4 /*yield*/, effects.call(request, {
                        url: getAllMarketplaceAppsActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                allMarketplaceApps = response.map(function (marketplaceApp) { return ({
                    createdAt: marketplaceApp.createdAt,
                    description: marketplaceApp.description,
                    id: marketplaceApp.id,
                    logo: marketplaceApp.logo,
                    name: marketplaceApp.name,
                    organization: {
                        id: marketplaceApp.organization.id,
                        name: marketplaceApp.organization.name,
                        privacyUrl: marketplaceApp.organization.privacyUrl,
                        supportUrl: marketplaceApp.organization.supportUrl,
                        tosUrl: marketplaceApp.organization.tosUrl,
                    },
                    orgId: marketplaceApp.orgId,
                    privacyUrl: marketplaceApp.privacyUrl,
                    shortDescription: marketplaceApp.shortDescription,
                    supportUrl: marketplaceApp.supportUrl,
                    tosUrl: marketplaceApp.tosUrl,
                    updatedAt: marketplaceApp.updatedAt,
                    websiteUrl: marketplaceApp.websiteUrl,
                    youtubeUrl: marketplaceApp.youtubeUrl,
                }); });
                return [4 /*yield*/, effects.put(getAllMarketplaceAppsActionSuccess(allMarketplaceApps.sort(function (appA, appB) { return appA.id - appB.id; })))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log('Error fetching all marketplace apps');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function getAllMarketplaceLabelsActionSaga() {
    var getAllMarketplaceLabelsActionUrl, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                getAllMarketplaceLabelsActionUrl = 'https://api.develop.apisuite.io/apps/public/labels';
                return [4 /*yield*/, effects.call(request, {
                        url: getAllMarketplaceLabelsActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, effects.put(getAllMarketplaceLabelsActionSuccess(response))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log("Error fetching all marketplace apps' labels");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function getAllMarketplacePublishersActionSaga() {
    var getAllMarketplacePublishersActionUrl, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                getAllMarketplacePublishersActionUrl = 'https://api.develop.apisuite.io/organizations/publishers';
                return [4 /*yield*/, effects.call(request, {
                        url: getAllMarketplacePublishersActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, effects.put(getAllMarketplacePublishersActionSuccess(response))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log("Error fetching all marketplace apps' publishers");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function getFilteredMarketplaceAppsActionSaga(action) {
    var getFilteredMarketplaceAppsActionUrl, orgIDParameters_1, labelParameters_1, sortModeParameters, orderModeParameters, response, filteredMarketplaceApps;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                getFilteredMarketplaceAppsActionUrl = 'https://api.develop.apisuite.io/apps/public';
                orgIDParameters_1 = '';
                labelParameters_1 = '';
                sortModeParameters = '';
                orderModeParameters = '';
                if (action.filters.org_id.length !== 0) {
                    action.filters.org_id.map(function (orgID, index) {
                        if (index === 0) {
                            orgIDParameters_1 = orgIDParameters_1 + ("?org_id=" + orgID);
                        }
                        else {
                            orgIDParameters_1 = orgIDParameters_1 + ("&org_id=" + orgID);
                        }
                    });
                }
                if (action.filters.label.length !== 0) {
                    action.filters.label.map(function (label, index) {
                        if (index === 0 && orgIDParameters_1.length === 0) {
                            labelParameters_1 = labelParameters_1 + ("?label=" + label);
                        }
                        else {
                            labelParameters_1 = labelParameters_1 + ("&label=" + label);
                        }
                    });
                }
                if (orgIDParameters_1.length === 0 && labelParameters_1.length === 0) {
                    sortModeParameters =
                        sortModeParameters + ("?sort_by=" + action.filters.sort_by);
                }
                else {
                    sortModeParameters =
                        sortModeParameters + ("&sort_by=" + action.filters.sort_by);
                }
                if (orgIDParameters_1.length === 0 &&
                    labelParameters_1.length === 0 &&
                    sortModeParameters.length === 0) {
                    orderModeParameters =
                        orderModeParameters + ("?order=" + action.filters.order);
                }
                else {
                    orderModeParameters =
                        orderModeParameters + ("&order=" + action.filters.order);
                }
                getFilteredMarketplaceAppsActionUrl =
                    getFilteredMarketplaceAppsActionUrl +
                        orgIDParameters_1 +
                        labelParameters_1 +
                        sortModeParameters +
                        orderModeParameters;
                return [4 /*yield*/, effects.call(request, {
                        url: getFilteredMarketplaceAppsActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                filteredMarketplaceApps = response.map(function (marketplaceApp) { return ({
                    createdAt: marketplaceApp.createdAt,
                    description: marketplaceApp.description,
                    id: marketplaceApp.id,
                    logo: marketplaceApp.logo,
                    name: marketplaceApp.name,
                    organization: {
                        id: marketplaceApp.organization.id,
                        name: marketplaceApp.organization.name,
                        privacyUrl: marketplaceApp.organization.privacyUrl,
                        supportUrl: marketplaceApp.organization.supportUrl,
                        tosUrl: marketplaceApp.organization.tosUrl,
                    },
                    orgId: marketplaceApp.orgId,
                    privacyUrl: marketplaceApp.privacyUrl,
                    shortDescription: marketplaceApp.shortDescription,
                    supportUrl: marketplaceApp.supportUrl,
                    tosUrl: marketplaceApp.tosUrl,
                    updatedAt: marketplaceApp.updatedAt,
                    websiteUrl: marketplaceApp.websiteUrl,
                    youtubeUrl: marketplaceApp.youtubeUrl,
                }); });
                return [4 /*yield*/, effects.put(getFilteredMarketplaceAppsActionSuccess(filteredMarketplaceApps))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log('Error fetching all marketplace apps');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects.takeLatest(GET_ALL_MARKETPLACE_APPS_ACTION, getAllMarketplaceAppsActionSaga)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects.takeLatest(GET_ALL_MARKETPLACE_LABELS_ACTION, getAllMarketplaceLabelsActionSaga)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects.takeLatest(GET_ALL_MARKETPLACE_PUBLISHERS_ACTION, getAllMarketplacePublishersActionSaga)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects.takeLatest(GET_FILTERED_MARKETPLACE_APPS_ACTION, getFilteredMarketplaceAppsActionSaga)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var injectStuffIntoStore = function (coreStoreProps) {
    coreStoreProps.injectReducer('marketplace', reducer);
    coreStoreProps.injectReducer('settings', reducer);
    coreStoreProps.injectSaga('marketplace', rootSaga);
};

var MarketplaceExtension = /** @class */ (function (_super) {
    __extends(MarketplaceExtension, _super);
    function MarketplaceExtension(_a) {
        var core$1 = _a.core, config$1 = _a.config;
        var _this = _super.call(this, { core: core$1, config: config$1 }) || this;
        _this.hooks = hooks;
        config.set(config$1);
        core.set(core$1);
        injectStuffIntoStore(core$1.store);
        return _this;
    }
    MarketplaceExtension.info = {
        name: name$1,
        version: version$1,
        protocolVersion: v1.protocolVersion,
    };
    return MarketplaceExtension;
}(v1.Extension));

module.exports = MarketplaceExtension;
//# sourceMappingURL=index.js.map
