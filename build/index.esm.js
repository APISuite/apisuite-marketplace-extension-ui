import { registerTranslations, makeStyles, useTranslation, Avatar, Button, useConfig, FormControlLabel, Checkbox, TextField, InputAdornment, FormControl, FormLabel, RadioGroup, Radio, Accordion, AccordionSummary, Typography, AccordionDetails, FormGroup } from '@apisuite/fe-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import React__default, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Pagination } from '@material-ui/lab';
import AmpStoriesRoundedIcon from '@material-ui/icons/AmpStoriesRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SortRoundedIcon from '@material-ui/icons/SortRounded';
import { Link as Link$1 } from 'react-router-dom';
import marketplace from 'assets/marketplace.svg';
import appCarouselBackground from 'assets/appCarouselBackground.svg';
import spaceBackground from 'assets/space-background.svg';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';
import { takeLatest, put, call } from 'redux-saga/effects';
import http from 'http';
import https from 'https';
import url from 'url';
import require$$0$1 from 'stream';
import assert from 'assert';
import tty from 'tty';
import util from 'util';
import os from 'os';
import zlib from 'zlib';

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
//# sourceMappingURL=index.js.map
});

var extensions$1 = {
	Marketplace: {
		admin: {
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
		},
		appListing: {
			browseMarketplaceApps: "Browse the app marketplace",
			marketplaceAppsSectionTitle: "Marketplace applications",
			noAppDescriptionProvided: "No description provided",
			noMarketplaceAppSubscriptions: "You have not subscribed to any marketplace apps yet."
		},
		appMarketplace: {
			headerTitlePartOne: "Explore the",
			headerTitlePartTwo: "Marketplace",
			searchForAppsTextField: "Search for apps",
			sortByTitle: "Sort by:",
			sortModes: {
				appName: "Application name",
				publisherName: "Publisher name",
				lastUpdated: "Last updated"
			},
			filterByTitle: "Filter by:",
			filterByModes: {
				labels: "Labels",
				noLabels: "No labels to filter with",
				publishers: "Publishers",
				noPublishers: "No publishers to filter with"
			},
			amountOfAppsTextPartOne: "apps",
			amountOfAppsTextPartTwo: "available",
			noAppsToDisplayText: "No apps to display!",
			retrievingAppsToDisplayText: "Retrieving all apps, please hold...",
			noDescriptionAvailableText: "No description provided",
			noLabelsProvidedText: "No labels provided",
			featuredAppsTitle: "Featured apps",
			featuredAppsSubtitle: "Ready to try? Subscribe to one of your featured apps to get started!",
			appDetails: {
				loadingAppDetails: "Loading the selected app's details...",
				appSubscribeButton: "Subscribe app",
				appAlreadySubscribedButton: "Subscribed to app",
				subSectionTitleOne: "Application links:",
				subSectionTitleTwo: "Published by:",
				subSectionTitleThree: "Publisher links:",
				appLinks: {
					websiteURL: "Website URL",
					tosURL: "Terms of Service",
					privacyPolicyURL: "Privacy Policy URL",
					youTubeURL: "YouTube URL",
					supportURL: "Support URL",
					noAppLinks: "No application links provided"
				},
				publisherLinks: {
					tosURL: "Terms of Service",
					privacyPolicyURL: "Privacy Policy URL",
					supportURL: "Support URL",
					noPublisherLinks: "No publisher links provided"
				},
				noShortDescription: "No short description provided",
				noLabels: "No labels provided",
				partOfAppOverviewTitle: "Overview",
				noAppOverview: "No application overview provided"
			}
		}
	}
};
var enUS = {
	extensions: extensions$1
};

var extensions = {
	Marketplace: {
		admin: {
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
		}
	}
};
var ptPT = {
	extensions: extensions
};

registerTranslations('en-US', enUS);
registerTranslations('pt-PT', ptPT);

var name$1 = "@apisuite/apisuite-marketplace-extension-ui";
var version$1 = "1.0.4";

var BASE_URI = '/marketplace';

var _a$1;
var menuConfig = (_a$1 = {},
    _a$1[Menus.HeaderAnonymousMain] = [
        {
            label: 'Marketplace',
            title: 'Marketplace',
            route: BASE_URI,
        },
    ],
    _a$1[Menus.HeaderAuthenticatedMain] = [
        {
            label: 'Marketplace',
            title: 'Marketplace',
            route: BASE_URI,
        },
    ],
    _a$1);
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
var initialState$1 = {
    allMarketplaceApps: [],
    allMarketplaceLabels: [],
    allMarketplacePublishers: [],
    allSubbedMarketplaceApps: [],
    filteredMarketplaceApps: [],
    retrievedAllMarketplaceApps: false,
    retrievedAllMarketplaceLabels: false,
    retrievedAllMarketplacePublishers: false,
    retrievedAllSubbedMarketplaceApps: false,
    selectedAppDetails: {
        createdAt: '',
        description: '',
        id: 0,
        labels: [],
        logo: '',
        name: '',
        organization: {
            id: '',
            name: '',
            privacyUrl: '',
            supportUrl: '',
            tosUrl: '',
        },
        orgId: 0,
        privacyUrl: '',
        shortDescription: '',
        supportUrl: '',
        tosUrl: '',
        updatedAt: '',
        websiteUrl: '',
        youtubeUrl: '',
    },
    retrievedSelectedAppDetails: false,
};
/** Action types */
var GET_ALL_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION';
var GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS';
var GET_ALL_MARKETPLACE_LABELS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION';
var GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS';
var GET_ALL_MARKETPLACE_PUBLISHERS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION';
var GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS';
var GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION';
var GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS';
var GET_APP_DETAILS_ACTION = 'Marketplace/GET_APP_DETAILS_ACTION';
var GET_APP_DETAILS_ACTION_SUCCESS = 'Marketplace/GET_APP_DETAILS_ACTION_SUCCESS';
var GET_FILTERED_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION';
var GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS';
var SUBSCRIBE_TO_MARKETPLACE_APP_ACTION = 'Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION';
var SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = 'Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS';
var UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION = 'Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION';
var UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = 'Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS';
/** Reducer */
function reducer(state, action) {
    if (state === void 0) { state = initialState$1; }
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
        case GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION: {
            return state;
        }
        case GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS: {
            return update(state, {
                allSubbedMarketplaceApps: { $set: action.allSubbedMarketplaceApps },
                retrievedAllSubbedMarketplaceApps: { $set: true },
            });
        }
        case SUBSCRIBE_TO_MARKETPLACE_APP_ACTION:
        case SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS: {
            return state;
        }
        case UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION:
        case UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS: {
            return state;
        }
        case GET_FILTERED_MARKETPLACE_APPS_ACTION: {
            return state;
        }
        case GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS: {
            return update(state, {
                filteredMarketplaceApps: { $set: action.filteredMarketplaceApps },
            });
        }
        case GET_APP_DETAILS_ACTION: {
            return update(state, {
                retrievedSelectedAppDetails: { $set: false },
            });
        }
        case GET_APP_DETAILS_ACTION_SUCCESS: {
            return update(state, {
                selectedAppDetails: { $set: action.appDetails },
                retrievedSelectedAppDetails: { $set: true },
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
function getAllSubbedMarketplaceAppsAction(userID) {
    return {
        type: GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION,
        userID: userID,
    };
}
function getAllSubbedMarketplaceAppsActionSuccess(allSubbedMarketplaceApps) {
    return {
        type: GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS,
        allSubbedMarketplaceApps: allSubbedMarketplaceApps,
    };
}
function subscribeToMarketplaceAppAction(userID, appID) {
    return {
        type: SUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
        userID: userID,
        appID: appID,
    };
}
function subscribeToMarketplaceAppActionSuccess() {
    return {
        type: SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
    };
}
function unsubscribeToMarketplaceAppAction(userID, appID) {
    return {
        type: UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
        userID: userID,
        appID: appID,
    };
}
function unsubscribeToMarketplaceAppActionSuccess() {
    return {
        type: UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
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
function getAppDetailsAction(appID) {
    return { type: GET_APP_DETAILS_ACTION, appID: appID };
}
function getAppDetailsActionSuccess(appDetails) {
    return { type: GET_APP_DETAILS_ACTION_SUCCESS, appDetails: appDetails };
}

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx_m () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var clsx_m$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': clsx_m
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h$1=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w$1=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m$1:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h$1:return a;default:return u}}case d$1:return u}}}function A(a){return z(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k;var ContextProvider=h$1;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d$1;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h$1};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d$1};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m$1||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h$1||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaultProps = {
  preventDefaultTouchmoveEvent: false,
  delta: 10,
  rotationAngle: 0,
  trackMouse: false,
  trackTouch: true
};
var initialState = {
  xy: [0, 0],
  swiping: false,
  eventData: undefined,
  start: undefined
};
var LEFT = 'Left';
var RIGHT = 'Right';
var UP = 'Up';
var DOWN = 'Down';
var touchStart = 'touchstart';
var touchMove = 'touchmove';
var touchEnd = 'touchend';
var mouseMove = 'mousemove';
var mouseUp = 'mouseup';

function getDirection(absX, absY, deltaX, deltaY) {
  if (absX > absY) {
    if (deltaX > 0) {
      return LEFT;
    }

    return RIGHT;
  } else if (deltaY > 0) {
    return UP;
  }

  return DOWN;
}

function rotateXYByAngle(pos, angle) {
  if (angle === 0) return pos;
  var angleInRadians = Math.PI / 180 * angle;
  var x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
  var y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
  return [x, y];
}

function getHandlers(set, handlerProps) {
  var onStart = function onStart(event) {
    // if more than a single touch don't track, for now...
    if (event.touches && event.touches.length > 1) return;
    set(function (state, props) {
      // setup mouse listeners on document to track swipe since swipe can leave container
      if (props.trackMouse) {
        document.addEventListener(mouseMove, onMove);
        document.addEventListener(mouseUp, onUp);
      }

      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
      return _extends({}, state, initialState, {
        eventData: {
          initial: [].concat(xy),
          first: true
        },
        xy: xy,
        start: event.timeStamp || 0
      });
    });
  };

  var onMove = function onMove(event) {
    set(function (state, props) {
      if (!state.xy[0] || !state.xy[1] || event.touches && event.touches.length > 1) {
        return state;
      }

      var _ref2 = event.touches ? event.touches[0] : event,
          clientX = _ref2.clientX,
          clientY = _ref2.clientY;

      var _rotateXYByAngle = rotateXYByAngle([clientX, clientY], props.rotationAngle),
          x = _rotateXYByAngle[0],
          y = _rotateXYByAngle[1];

      var deltaX = state.xy[0] - x;
      var deltaY = state.xy[1] - y;
      var absX = Math.abs(deltaX);
      var absY = Math.abs(deltaY);
      var time = (event.timeStamp || 0) - state.start;
      var velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1); // if swipe is under delta and we have not started to track a swipe: skip update

      if (absX < props.delta && absY < props.delta && !state.swiping) return state;
      var dir = getDirection(absX, absY, deltaX, deltaY);

      var eventData = _extends({}, state.eventData, {
        event: event,
        absX: absX,
        absY: absY,
        deltaX: deltaX,
        deltaY: deltaY,
        velocity: velocity,
        dir: dir
      });

      props.onSwiping && props.onSwiping(eventData); // track if a swipe is cancelable(handler for swiping or swiped(dir) exists)
      // so we can call preventDefault if needed

      var cancelablePageSwipe = false;

      if (props.onSwiping || props.onSwiped || props["onSwiped" + dir]) {
        cancelablePageSwipe = true;
      }

      if (cancelablePageSwipe && props.preventDefaultTouchmoveEvent && props.trackTouch && event.cancelable) event.preventDefault(); // first is now always false

      return _extends({}, state, {
        eventData: _extends({}, eventData, {
          first: false
        }),
        swiping: true
      });
    });
  };

  var onEnd = function onEnd(event) {
    set(function (state, props) {
      var eventData;

      if (state.swiping) {
        eventData = _extends({}, state.eventData, {
          event: event
        });
        props.onSwiped && props.onSwiped(eventData);
        props["onSwiped" + eventData.dir] && props["onSwiped" + eventData.dir](eventData);
      }

      return _extends({}, state, initialState, {
        eventData: eventData
      });
    });
  };

  var cleanUpMouse = function cleanUpMouse() {
    // safe to just call removeEventListener
    document.removeEventListener(mouseMove, onMove);
    document.removeEventListener(mouseUp, onUp);
  };

  var onUp = function onUp(e) {
    cleanUpMouse();
    onEnd(e);
  };

  var attachTouch = function attachTouch(el) {
    if (el && el.addEventListener) {
      // attach touch event listeners and handlers
      var tls = [[touchStart, onStart], [touchMove, onMove], [touchEnd, onEnd]];
      tls.forEach(function (_ref3) {
        var e = _ref3[0],
            h = _ref3[1];
        return el.addEventListener(e, h);
      }); // return properly scoped cleanup method for removing listeners

      return function () {
        return tls.forEach(function (_ref4) {
          var e = _ref4[0],
              h = _ref4[1];
          return el.removeEventListener(e, h);
        });
      };
    }
  };

  var onRef = function onRef(el) {
    // "inline" ref functions are called twice on render, once with null then again with DOM element
    // ignore null here
    if (el === null) return;
    set(function (state, props) {
      // if the same DOM el as previous just return state
      if (state.el === el) return state;
      var addState = {}; // if new DOM el clean up old DOM and reset cleanUpTouch

      if (state.el && state.el !== el && state.cleanUpTouch) {
        state.cleanUpTouch();
        addState.cleanUpTouch = null;
      } // only attach if we want to track touch


      if (props.trackTouch && el) {
        addState.cleanUpTouch = attachTouch(el);
      } // store event attached DOM el for comparison, clean up, and re-attachment


      return _extends({}, state, {
        el: el
      }, addState);
    });
  }; // set ref callback to attach touch event listeners


  var output = {
    ref: onRef // if track mouse attach mouse down listener

  };

  if (handlerProps.trackMouse) {
    output.onMouseDown = onStart;
  }

  return [output, attachTouch];
}

function updateTransientState(state, props, attachTouch) {
  var addState = {}; // clean up touch handlers if no longer tracking touches

  if (!props.trackTouch && state.cleanUpTouch) {
    state.cleanUpTouch();
    addState.cleanUpTouch = null;
  } else if (props.trackTouch && !state.cleanUpTouch) {
    // attach/re-attach touch handlers
    if (state.el) {
      addState.cleanUpTouch = attachTouch(state.el);
    }
  }

  return _extends({}, state, addState);
}

function useSwipeable(props) {
  var trackMouse = props.trackMouse;
  var transientState = React__default.useRef(_extends({}, initialState, {
    type: 'hook'
  }));
  var transientProps = React__default.useRef();
  transientProps.current = _extends({}, defaultProps, props);

  var _React$useMemo = React__default.useMemo(function () {
    return getHandlers(function (cb) {
      return transientState.current = cb(transientState.current, transientProps.current);
    }, {
      trackMouse: trackMouse
    });
  }, [trackMouse]),
      handlers = _React$useMemo[0],
      attachTouch = _React$useMemo[1];

  transientState.current = updateTransientState(transientState.current, transientProps.current, attachTouch);
  return handlers;
}
var Swipeable =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Swipeable, _React$PureComponent);

  function Swipeable(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this._set = function (cb) {
      _this.transientState = cb(_this.transientState, _this.props);
    };

    _this.transientState = _extends({}, initialState, {
      type: 'class'
    });
    return _this;
  }

  var _proto = Swipeable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        _this$props$nodeName = _this$props.nodeName,
        nodeName = _this$props$nodeName === void 0 ? 'div' : _this$props$nodeName,
        innerRef = _this$props.innerRef,
        children = _this$props.children,
        trackMouse = _this$props.trackMouse;

    var _getHandlers = getHandlers(this._set, {
      trackMouse: trackMouse
    }),
        handlers = _getHandlers[0],
        attachTouch = _getHandlers[1];

    this.transientState = updateTransientState(this.transientState, this.props, attachTouch);
    var ref = innerRef ? function (el) {
      return innerRef(el), handlers.ref(el);
    } : handlers.ref;
    return React__default.createElement(nodeName, _extends({}, handlers, {
      className: className,
      style: style,
      ref: ref
    }), children);
  };

  return Swipeable;
}(React__default.PureComponent);
Swipeable.propTypes = {
  onSwiped: propTypes.func,
  onSwiping: propTypes.func,
  onSwipedUp: propTypes.func,
  onSwipedRight: propTypes.func,
  onSwipedDown: propTypes.func,
  onSwipedLeft: propTypes.func,
  delta: propTypes.number,
  preventDefaultTouchmoveEvent: propTypes.bool,
  nodeName: propTypes.string,
  trackMouse: propTypes.bool,
  trackTouch: propTypes.bool,
  innerRef: propTypes.func,
  rotationAngle: propTypes.number
};
Swipeable.defaultProps = defaultProps;

var es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DOWN: DOWN,
    LEFT: LEFT,
    RIGHT: RIGHT,
    Swipeable: Swipeable,
    UP: UP,
    useSwipeable: useSwipeable
});

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$1 = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$1 = function() {
  return root$1.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle$1(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject$2(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var lodash_throttle = throttle$1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

var lodash_isequal = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

var ResizeObserver_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index
});

var SVG_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _react2 = _interopRequireDefault(React__default);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var left = _react2.default.createElement('polyline', { points: '15 18 9 12 15 6' });
var right = _react2.default.createElement('polyline', { points: '9 18 15 12 9 6' });
var maximize = _react2.default.createElement('path', { d: 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3' });
var minimize = _react2.default.createElement('path', { d: 'M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3' });
var play = _react2.default.createElement('polygon', { points: '5 3 19 12 5 21 5 3' });
var pause = _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement('rect', { x: '6', y: '4', width: '4', height: '16' }),
  _react2.default.createElement('rect', { x: '14', y: '4', width: '4', height: '16' })
);

var iconMapper = {
  left: left,
  right: right,
  maximize: maximize,
  minimize: minimize,
  play: play,
  pause: pause
};

var SVG = function SVG(props) {
  var strokeWidth = props.strokeWidth,
      viewBox = props.viewBox,
      icon = props.icon;

  return _react2.default.createElement(
    'svg',
    {
      className: 'image-gallery-svg',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: viewBox,
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
    iconMapper[icon]
  );
};

SVG.propTypes = {
  strokeWidth: propTypes.number,
  viewBox: propTypes.string,
  icon: (0, propTypes.oneOf)(['left', 'right', 'maximize', 'minimize', 'play', 'pause']).isRequired
};

SVG.defaultProps = {
  strokeWidth: 1,
  viewBox: '0 0 24 24'
};

exports.default = SVG;
});

var _clsx = /*@__PURE__*/getAugmentedNamespace(clsx_m$1);

var _reactSwipeable = /*@__PURE__*/getAugmentedNamespace(es);

var _resizeObserverPolyfill = /*@__PURE__*/getAugmentedNamespace(ResizeObserver_es);

var imageGallery = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _clsx2 = _interopRequireDefault(_clsx);



var _react2 = _interopRequireDefault(React__default);





var _lodash2 = _interopRequireDefault(lodash_throttle);



var _lodash4 = _interopRequireDefault(lodash_debounce);



var _lodash6 = _interopRequireDefault(lodash_isequal);



var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);





var _SVG2 = _interopRequireDefault(SVG_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var screenChangeEvents = ['fullscreenchange', 'MSFullscreenChange', 'mozfullscreenchange', 'webkitfullscreenchange'];

var imageSetType = (0, propTypes.arrayOf)((0, propTypes.shape)({
  srcSet: propTypes.string,
  media: propTypes.string
}));

function isEnterOrSpaceKey(event) {
  var key = parseInt(event.keyCode || event.which || 0, 10);
  var ENTER_KEY_CODE = 66;
  var SPACEBAR_KEY_CODE = 62;
  return key === ENTER_KEY_CODE || key === SPACEBAR_KEY_CODE;
}

var ImageGallery = function (_React$Component) {
  _inherits(ImageGallery, _React$Component);

  function ImageGallery(props) {
    _classCallCheck(this, ImageGallery);

    var _this = _possibleConstructorReturn(this, (ImageGallery.__proto__ || Object.getPrototypeOf(ImageGallery)).call(this, props));

    _this.state = {
      currentIndex: props.startIndex,
      thumbsTranslate: 0,
      currentSlideOffset: 0,
      galleryWidth: 0,
      thumbnailsWrapperWidth: 0,
      thumbnailsWrapperHeight: 0,
      isFullscreen: false,
      isPlaying: false
    };
    _this.loadedImages = {};
    _this.imageGallery = _react2.default.createRef();
    _this.thumbnailsWrapper = _react2.default.createRef();
    _this.thumbnails = _react2.default.createRef();
    _this.imageGallerySlideWrapper = _react2.default.createRef();

    // bindings
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleOnSwiped = _this.handleOnSwiped.bind(_this);
    _this.handleScreenChange = _this.handleScreenChange.bind(_this);
    _this.handleSwiping = _this.handleSwiping.bind(_this);
    _this.onThumbnailMouseLeave = _this.onThumbnailMouseLeave.bind(_this);
    _this.handleImageError = _this.handleImageError.bind(_this);
    _this.pauseOrPlay = _this.pauseOrPlay.bind(_this);
    _this.renderThumbInner = _this.renderThumbInner.bind(_this);
    _this.renderItem = _this.renderItem.bind(_this);
    _this.slideLeft = _this.slideLeft.bind(_this);
    _this.slideRight = _this.slideRight.bind(_this);
    _this.toggleFullScreen = _this.toggleFullScreen.bind(_this);
    _this.togglePlay = _this.togglePlay.bind(_this);

    // Used to update the throttle if slideDuration changes
    _this.unthrottledSlideToIndex = _this.slideToIndex;
    _this.slideToIndex = (0, _lodash2.default)(_this.unthrottledSlideToIndex, props.slideDuration, { trailing: false });

    if (props.lazyLoad) {
      _this.lazyLoaded = [];
    }
    return _this;
  }

  _createClass(ImageGallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoPlay = _props.autoPlay,
          useWindowKeyDown = _props.useWindowKeyDown;

      if (autoPlay) {
        this.play();
      }
      if (useWindowKeyDown) {
        window.addEventListener('keydown', this.handleKeyDown);
      } else {
        this.imageGallery.current.addEventListener('keydown', this.handleKeyDown);
      }
      window.addEventListener('mousedown', this.handleMouseDown);
      this.initResizeObserver(this.imageGallerySlideWrapper);
      this.addScreenChangeEvent();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props2 = this.props,
          items = _props2.items,
          lazyLoad = _props2.lazyLoad,
          slideDuration = _props2.slideDuration,
          startIndex = _props2.startIndex,
          thumbnailPosition = _props2.thumbnailPosition,
          showThumbnails = _props2.showThumbnails,
          useWindowKeyDown = _props2.useWindowKeyDown;
      var currentIndex = this.state.currentIndex;

      var itemsSizeChanged = prevProps.items.length !== items.length;
      var itemsChanged = !(0, _lodash6.default)(prevProps.items, items);
      var startIndexUpdated = prevProps.startIndex !== startIndex;
      var thumbnailsPositionChanged = prevProps.thumbnailPosition !== thumbnailPosition;
      var showThumbnailsChanged = prevProps.showThumbnails !== showThumbnails;

      if (thumbnailsPositionChanged) {
        // re-initialize resizeObserver because slides was unmounted and mounted again
        this.removeResizeObserver();
        this.initResizeObserver(this.imageGallerySlideWrapper);
      }

      if (itemsSizeChanged || showThumbnailsChanged) {
        this.handleResize();
      }
      if (prevState.currentIndex !== currentIndex) {
        this.slideThumbnailBar(prevState.currentIndex);
      }
      // if slideDuration changes, update slideToIndex throttle
      if (prevProps.slideDuration !== slideDuration) {
        this.slideToIndex = (0, _lodash2.default)(this.unthrottledSlideToIndex, slideDuration, { trailing: false });
      }
      if (lazyLoad && (!prevProps.lazyLoad || itemsChanged)) {
        this.lazyLoaded = [];
      }

      if (useWindowKeyDown !== prevProps.useWindowKeyDown) {
        if (useWindowKeyDown) {
          this.imageGallery.current.removeEventListener('keydown', this.handleKeyDown);
          window.addEventListener('keydown', this.handleKeyDown);
        } else {
          window.removeEventListener('keydown', this.handleKeyDown);
          this.imageGallery.current.addEventListener('keydown', this.handleKeyDown);
        }
      }

      if (startIndexUpdated || itemsChanged) {
        // TODO: this should be fix/removed if all it is doing
        // is resetting the gallery currentIndext state
        this.setState({ currentIndex: startIndex });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var useWindowKeyDown = this.props.useWindowKeyDown;

      window.removeEventListener('mousedown', this.handleMouseDown);
      this.removeScreenChangeEvent();
      this.removeResizeObserver();
      if (this.playPauseIntervalId) {
        window.clearInterval(this.playPauseIntervalId);
        this.playPauseIntervalId = null;
      }
      if (this.transitionTimer) {
        window.clearTimeout(this.transitionTimer);
      }
      if (useWindowKeyDown) {
        window.removeEventListener('keydown', this.handleKeyDown);
      } else {
        this.imageGallery.current.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }, {
    key: 'onSliding',
    value: function onSliding() {
      var _this2 = this;

      var _state = this.state,
          currentIndex = _state.currentIndex,
          isTransitioning = _state.isTransitioning;
      var _props3 = this.props,
          onSlide = _props3.onSlide,
          slideDuration = _props3.slideDuration;

      this.transitionTimer = window.setTimeout(function () {
        if (isTransitioning) {
          _this2.setState({ isTransitioning: !isTransitioning });
          if (onSlide) {
            onSlide(currentIndex);
          }
        }
      }, slideDuration + 50);
    }
  }, {
    key: 'onThumbnailClick',
    value: function onThumbnailClick(event, index) {
      var onThumbnailClick = this.props.onThumbnailClick;

      this.slideToIndex(index, event);
      if (onThumbnailClick) {
        onThumbnailClick(event, index);
      }
    }
  }, {
    key: 'onThumbnailMouseOver',
    value: function onThumbnailMouseOver(event, index) {
      var _this3 = this;

      if (this.thumbnailMouseOverTimer) {
        window.clearTimeout(this.thumbnailMouseOverTimer);
        this.thumbnailMouseOverTimer = null;
      }
      this.thumbnailMouseOverTimer = window.setTimeout(function () {
        _this3.slideToIndex(index);
        _this3.pause();
      }, 300);
    }
  }, {
    key: 'onThumbnailMouseLeave',
    value: function onThumbnailMouseLeave() {
      if (this.thumbnailMouseOverTimer) {
        var autoPlay = this.props.autoPlay;

        window.clearTimeout(this.thumbnailMouseOverTimer);
        this.thumbnailMouseOverTimer = null;
        if (autoPlay) {
          this.play();
        }
      }
    }
  }, {
    key: 'setScrollDirection',
    value: function setScrollDirection(dir) {
      var _state2 = this.state,
          scrollingUpDown = _state2.scrollingUpDown,
          scrollingLeftRight = _state2.scrollingLeftRight;


      if (!scrollingUpDown && !scrollingLeftRight) {
        if (dir === _reactSwipeable.LEFT || dir === _reactSwipeable.RIGHT) {
          this.setState({ scrollingLeftRight: true });
        } else {
          this.setState({ scrollingUpDown: true });
        }
      }
    }
  }, {
    key: 'setThumbsTranslate',
    value: function setThumbsTranslate(thumbsTranslate) {
      this.setState({ thumbsTranslate: thumbsTranslate });
    }
  }, {
    key: 'setModalFullscreen',
    value: function setModalFullscreen(state) {
      var onScreenChange = this.props.onScreenChange;

      this.setState({ modalFullscreen: state });
      // manually call because browser does not support screenchange events
      if (onScreenChange) {
        onScreenChange(state);
      }
    }
  }, {
    key: 'getThumbsTranslate',
    value: function getThumbsTranslate(indexDifference) {
      var _props4 = this.props,
          disableThumbnailScroll = _props4.disableThumbnailScroll,
          items = _props4.items;
      var _state3 = this.state,
          thumbnailsWrapperWidth = _state3.thumbnailsWrapperWidth,
          thumbnailsWrapperHeight = _state3.thumbnailsWrapperHeight;

      var totalScroll = void 0;
      var thumbElement = this.thumbnails && this.thumbnails.current;

      if (disableThumbnailScroll) return 0;

      if (thumbElement) {
        // total scroll required to see the last thumbnail
        if (this.isThumbnailVertical()) {
          if (thumbElement.scrollHeight <= thumbnailsWrapperHeight) {
            return 0;
          }
          totalScroll = thumbElement.scrollHeight - thumbnailsWrapperHeight;
        } else {
          if (thumbElement.scrollWidth <= thumbnailsWrapperWidth || thumbnailsWrapperWidth <= 0) {
            return 0;
          }
          totalScroll = thumbElement.scrollWidth - thumbnailsWrapperWidth;
        }
        // scroll-x required per index change
        var perIndexScroll = totalScroll / (items.length - 1);
        return indexDifference * perIndexScroll;
      }
      return 0;
    }
  }, {
    key: 'getAlignmentClassName',
    value: function getAlignmentClassName(index) {
      // Necessary for lazing loading
      var currentIndex = this.state.currentIndex;
      var _props5 = this.props,
          infinite = _props5.infinite,
          items = _props5.items;

      var alignment = '';
      var leftClassName = 'left';
      var centerClassName = 'center';
      var rightClassName = 'right';

      switch (index) {
        case currentIndex - 1:
          alignment = ' ' + leftClassName;
          break;
        case currentIndex:
          alignment = ' ' + centerClassName;
          break;
        case currentIndex + 1:
          alignment = ' ' + rightClassName;
          break;
      }

      if (items.length >= 3 && infinite) {
        if (index === 0 && currentIndex === items.length - 1) {
          // set first slide as right slide if were sliding right from last slide
          alignment = ' ' + rightClassName;
        } else if (index === items.length - 1 && currentIndex === 0) {
          // set last slide as left slide if were sliding left from first slide
          alignment = ' ' + leftClassName;
        }
      }

      return alignment;
    }
  }, {
    key: 'getTranslateXForTwoSlide',
    value: function getTranslateXForTwoSlide(index) {
      // For taking care of infinite swipe when there are only two slides
      var _state4 = this.state,
          currentIndex = _state4.currentIndex,
          currentSlideOffset = _state4.currentSlideOffset,
          previousIndex = _state4.previousIndex;

      var indexChanged = currentIndex !== previousIndex;
      var firstSlideWasPrevSlide = index === 0 && previousIndex === 0;
      var secondSlideWasPrevSlide = index === 1 && previousIndex === 1;
      var firstSlideIsNextSlide = index === 0 && currentIndex === 1;
      var secondSlideIsNextSlide = index === 1 && currentIndex === 0;
      var swipingEnded = currentSlideOffset === 0;
      var baseTranslateX = -100 * currentIndex;
      var translateX = baseTranslateX + index * 100 + currentSlideOffset;

      // keep track of user swiping direction
      // important to understand how to translateX based on last direction
      if (currentSlideOffset > 0) {
        this.direction = 'left';
      } else if (currentSlideOffset < 0) {
        this.direction = 'right';
      }

      // when swiping between two slides make sure the next and prev slides
      // are on both left and right
      if (secondSlideIsNextSlide && currentSlideOffset > 0) {
        // swiping right
        translateX = -100 + currentSlideOffset;
      }
      if (firstSlideIsNextSlide && currentSlideOffset < 0) {
        // swiping left
        translateX = 100 + currentSlideOffset;
      }

      if (indexChanged) {
        // when indexChanged move the slide to the correct side
        if (firstSlideWasPrevSlide && swipingEnded && this.direction === 'left') {
          translateX = 100;
        } else if (secondSlideWasPrevSlide && swipingEnded && this.direction === 'right') {
          translateX = -100;
        }
      } else {
        // keep the slide on the correct side if the swipe was not successful
        if (secondSlideIsNextSlide && swipingEnded && this.direction === 'left') {
          translateX = -100;
        }
        if (firstSlideIsNextSlide && swipingEnded && this.direction === 'right') {
          translateX = 100;
        }
      }

      return translateX;
    }
  }, {
    key: 'getThumbnailBarHeight',
    value: function getThumbnailBarHeight() {
      if (this.isThumbnailVertical()) {
        var gallerySlideWrapperHeight = this.state.gallerySlideWrapperHeight;

        return { height: gallerySlideWrapperHeight };
      }
      return {};
    }
  }, {
    key: 'getSlideStyle',
    value: function getSlideStyle(index) {
      var _state5 = this.state,
          currentIndex = _state5.currentIndex,
          currentSlideOffset = _state5.currentSlideOffset,
          slideStyle = _state5.slideStyle;
      var _props6 = this.props,
          infinite = _props6.infinite,
          items = _props6.items,
          useTranslate3D = _props6.useTranslate3D,
          isRTL = _props6.isRTL;

      var baseTranslateX = -100 * currentIndex;
      var totalSlides = items.length - 1;

      // calculates where the other slides belong based on currentIndex
      // if it is RTL the base line should be reversed
      var translateX = (baseTranslateX + index * 100) * (isRTL ? -1 : 1) + currentSlideOffset;

      if (infinite && items.length > 2) {
        if (currentIndex === 0 && index === totalSlides) {
          // make the last slide the slide before the first
          // if it is RTL the base line should be reversed
          translateX = -100 * (isRTL ? -1 : 1) + currentSlideOffset;
        } else if (currentIndex === totalSlides && index === 0) {
          // make the first slide the slide after the last
          // if it is RTL the base line should be reversed
          translateX = 100 * (isRTL ? -1 : 1) + currentSlideOffset;
        }
      }

      // Special case when there are only 2 items with infinite on
      if (infinite && items.length === 2) {
        translateX = this.getTranslateXForTwoSlide(index);
      }

      var translate = 'translate(' + translateX + '%, 0)';

      if (useTranslate3D) {
        translate = 'translate3d(' + translateX + '%, 0, 0)';
      }

      return _extends({}, {
        WebkitTransform: translate,
        MozTransform: translate,
        msTransform: translate,
        OTransform: translate,
        transform: translate
      }, slideStyle);
    }
  }, {
    key: 'getCurrentIndex',
    value: function getCurrentIndex() {
      var currentIndex = this.state.currentIndex;

      return currentIndex;
    }
  }, {
    key: 'getThumbnailStyle',
    value: function getThumbnailStyle() {
      var translate = void 0;
      var _props7 = this.props,
          useTranslate3D = _props7.useTranslate3D,
          isRTL = _props7.isRTL;
      var thumbsTranslate = this.state.thumbsTranslate;

      var verticalTranslateValue = isRTL ? thumbsTranslate * -1 : thumbsTranslate;

      if (this.isThumbnailVertical()) {
        translate = 'translate(0, ' + thumbsTranslate + 'px)';
        if (useTranslate3D) {
          translate = 'translate3d(0, ' + thumbsTranslate + 'px, 0)';
        }
      } else {
        translate = 'translate(' + verticalTranslateValue + 'px, 0)';
        if (useTranslate3D) {
          translate = 'translate3d(' + verticalTranslateValue + 'px, 0, 0)';
        }
      }
      return {
        WebkitTransform: translate,
        MozTransform: translate,
        msTransform: translate,
        OTransform: translate,
        transform: translate
      };
    }
  }, {
    key: 'getSlideItems',
    value: function getSlideItems() {
      var _this4 = this;

      var currentIndex = this.state.currentIndex;
      var _props8 = this.props,
          infinite = _props8.infinite,
          items = _props8.items,
          slideOnThumbnailOver = _props8.slideOnThumbnailOver,
          onClick = _props8.onClick,
          lazyLoad = _props8.lazyLoad,
          onTouchMove = _props8.onTouchMove,
          onTouchEnd = _props8.onTouchEnd,
          onTouchStart = _props8.onTouchStart,
          onMouseOver = _props8.onMouseOver,
          onMouseLeave = _props8.onMouseLeave,
          renderItem = _props8.renderItem,
          renderThumbInner = _props8.renderThumbInner,
          showThumbnails = _props8.showThumbnails,
          showBullets = _props8.showBullets;


      var slides = [];
      var thumbnails = [];
      var bullets = [];

      items.forEach(function (item, index) {
        var alignment = _this4.getAlignmentClassName(index);
        var originalClass = item.originalClass ? ' ' + item.originalClass : '';
        var thumbnailClass = item.thumbnailClass ? ' ' + item.thumbnailClass : '';
        var handleRenderItem = item.renderItem || renderItem || _this4.renderItem;
        var handleRenderThumbInner = item.renderThumbInner || renderThumbInner || _this4.renderThumbInner;

        var showItem = !lazyLoad || alignment || _this4.lazyLoaded[index];
        if (showItem && lazyLoad && !_this4.lazyLoaded[index]) {
          _this4.lazyLoaded[index] = true;
        }

        var slideStyle = _this4.getSlideStyle(index);

        var slide = _react2.default.createElement(
          'div',
          {
            'aria-label': 'Go to Slide ' + (index + 1),
            key: 'slide-' + item.original + '-' + index,
            tabIndex: '-1',
            className: 'image-gallery-slide ' + alignment + ' ' + originalClass,
            style: slideStyle,
            onClick: onClick,
            onKeyUp: _this4.handleSlideKeyUp,
            onTouchMove: onTouchMove,
            onTouchEnd: onTouchEnd,
            onTouchStart: onTouchStart,
            onMouseOver: onMouseOver,
            onFocus: onMouseOver,
            onMouseLeave: onMouseLeave,
            role: 'button'
          },
          showItem ? handleRenderItem(item) : _react2.default.createElement('div', { style: { height: '100%' } })
        );

        if (infinite) {
          // don't add some slides while transitioning to avoid background transitions
          if (_this4.shouldPushSlideOnInfiniteMode(index)) {
            slides.push(slide);
          }
        } else {
          slides.push(slide);
        }

        if (showThumbnails) {
          var igThumbnailClass = (0, _clsx2.default)('image-gallery-thumbnail', thumbnailClass, { active: currentIndex === index });
          thumbnails.push(_react2.default.createElement(
            'button',
            {
              key: 'thumbnail-' + item.original + '-' + index,
              type: 'button',
              tabIndex: '0',
              'aria-pressed': currentIndex === index ? 'true' : 'false',
              'aria-label': 'Go to Slide ' + (index + 1),
              className: igThumbnailClass,
              onMouseLeave: slideOnThumbnailOver ? _this4.onThumbnailMouseLeave : null,
              onMouseOver: function onMouseOver(event) {
                return _this4.handleThumbnailMouseOver(event, index);
              },
              onFocus: function onFocus(event) {
                return _this4.handleThumbnailMouseOver(event, index);
              },
              onKeyUp: function onKeyUp(event) {
                return _this4.handleThumbnailKeyUp(event, index);
              },
              onClick: function onClick(event) {
                return _this4.onThumbnailClick(event, index);
              }
            },
            handleRenderThumbInner(item)
          ));
        }

        if (showBullets) {
          // generate bullet elements and store them in array
          var bulletOnClick = function bulletOnClick(event) {
            if (item.bulletOnClick) {
              item.bulletOnClick({ item: item, itemIndex: index, currentIndex: currentIndex });
            }
            return _this4.slideToIndex.call(_this4, index, event);
          };
          var igBulletClass = (0, _clsx2.default)('image-gallery-bullet', item.bulletClass, { active: currentIndex === index });
          bullets.push(_react2.default.createElement('button', {
            type: 'button',
            key: 'bullet-' + item.original + '-' + index,
            className: igBulletClass,
            onClick: bulletOnClick,
            'aria-pressed': currentIndex === index ? 'true' : 'false',
            'aria-label': 'Go to Slide ' + (index + 1)
          }));
        }
      });

      return {
        slides: slides,
        thumbnails: thumbnails,
        bullets: bullets
      };
    }
  }, {
    key: 'ignoreIsTransitioning',
    value: function ignoreIsTransitioning() {
      /*
        Ignore isTransitioning because were not going to sibling slides
        e.g. center to left or center to right
      */
      var items = this.props.items;
      var _state6 = this.state,
          previousIndex = _state6.previousIndex,
          currentIndex = _state6.currentIndex;

      var totalSlides = items.length - 1;
      // we want to show the in between slides transition
      var slidingMoreThanOneSlideLeftOrRight = Math.abs(previousIndex - currentIndex) > 1;
      var notGoingFromFirstToLast = !(previousIndex === 0 && currentIndex === totalSlides);
      var notGoingFromLastToFirst = !(previousIndex === totalSlides && currentIndex === 0);

      return slidingMoreThanOneSlideLeftOrRight && notGoingFromFirstToLast && notGoingFromLastToFirst;
    }
  }, {
    key: 'isFirstOrLastSlide',
    value: function isFirstOrLastSlide(index) {
      var items = this.props.items;

      var totalSlides = items.length - 1;
      var isLastSlide = index === totalSlides;
      var isFirstSlide = index === 0;
      return isLastSlide || isFirstSlide;
    }
  }, {
    key: 'slideIsTransitioning',
    value: function slideIsTransitioning(index) {
      /*
      returns true if the gallery is transitioning and the index is not the
      previous or currentIndex
      */
      var _state7 = this.state,
          isTransitioning = _state7.isTransitioning,
          previousIndex = _state7.previousIndex,
          currentIndex = _state7.currentIndex;

      var indexIsNotPreviousOrNextSlide = !(index === previousIndex || index === currentIndex);
      return isTransitioning && indexIsNotPreviousOrNextSlide;
    }
  }, {
    key: 'shouldPushSlideOnInfiniteMode',
    value: function shouldPushSlideOnInfiniteMode(index) {
      /*
        Push (show) slide if slide is the current slide and the next slide
        OR
        The slide is going more than one slide left or right, but not going from
        first to last and not going from last to first
         Edge case:
        If you go to the first or last slide, when they're
        not left, or right of each other they will try to catch up in the background
        so unless were going from first to last or vice versa we don't want the first
        or last slide to show up during the transition
      */
      return !this.slideIsTransitioning(index) || this.ignoreIsTransitioning() && !this.isFirstOrLastSlide(index);
    }
  }, {
    key: 'slideThumbnailBar',
    value: function slideThumbnailBar(previousIndex) {
      var _state8 = this.state,
          thumbsTranslate = _state8.thumbsTranslate,
          currentIndex = _state8.currentIndex;

      if (currentIndex === 0) {
        this.setThumbsTranslate(0);
      } else {
        var indexDifference = Math.abs(previousIndex - currentIndex);
        var scroll = this.getThumbsTranslate(indexDifference);
        if (scroll > 0) {
          if (previousIndex < currentIndex) {
            this.setThumbsTranslate(thumbsTranslate - scroll);
          } else if (previousIndex > currentIndex) {
            this.setThumbsTranslate(thumbsTranslate + scroll);
          }
        }
      }
    }
  }, {
    key: 'canSlide',
    value: function canSlide() {
      var items = this.props.items;

      return items.length >= 2;
    }
  }, {
    key: 'canSlideLeft',
    value: function canSlideLeft() {
      var _props9 = this.props,
          infinite = _props9.infinite,
          isRTL = _props9.isRTL;

      return infinite || (isRTL ? this.canSlideNext() : this.canSlidePrevious());
    }
  }, {
    key: 'canSlideRight',
    value: function canSlideRight() {
      var _props10 = this.props,
          infinite = _props10.infinite,
          isRTL = _props10.isRTL;

      return infinite || (isRTL ? this.canSlidePrevious() : this.canSlideNext());
    }
  }, {
    key: 'canSlidePrevious',
    value: function canSlidePrevious() {
      var currentIndex = this.state.currentIndex;

      return currentIndex > 0;
    }
  }, {
    key: 'canSlideNext',
    value: function canSlideNext() {
      var currentIndex = this.state.currentIndex;
      var items = this.props.items;

      return currentIndex < items.length - 1;
    }
  }, {
    key: 'handleSwiping',
    value: function handleSwiping(_ref) {
      var event = _ref.event,
          absX = _ref.absX,
          dir = _ref.dir;
      var _props11 = this.props,
          preventDefaultTouchmoveEvent = _props11.preventDefaultTouchmoveEvent,
          disableSwipe = _props11.disableSwipe,
          stopPropagation = _props11.stopPropagation;
      var _state9 = this.state,
          galleryWidth = _state9.galleryWidth,
          isTransitioning = _state9.isTransitioning,
          scrollingUpDown = _state9.scrollingUpDown,
          scrollingLeftRight = _state9.scrollingLeftRight;


      if (disableSwipe) return;
      var swipingTransitionDuration = this.props.swipingTransitionDuration;

      this.setScrollDirection(dir);
      if (stopPropagation) event.stopPropagation();
      if ((preventDefaultTouchmoveEvent || scrollingLeftRight) && event.cancelable) {
        event.preventDefault();
      }
      if (!isTransitioning && !scrollingUpDown) {
        var side = dir === _reactSwipeable.RIGHT ? 1 : -1;

        var currentSlideOffset = absX / galleryWidth * 100;
        if (Math.abs(currentSlideOffset) >= 100) {
          currentSlideOffset = 100;
        }

        var swipingTransition = {
          transition: 'transform ' + swipingTransitionDuration + 'ms ease-out'
        };

        this.setState({
          currentSlideOffset: side * currentSlideOffset,
          slideStyle: swipingTransition
        });
      } else {
        // don't move the slide
        this.setState({ currentSlideOffset: 0 });
      }
    }
  }, {
    key: 'sufficientSwipe',
    value: function sufficientSwipe() {
      var currentSlideOffset = this.state.currentSlideOffset;
      var swipeThreshold = this.props.swipeThreshold;

      return Math.abs(currentSlideOffset) > swipeThreshold;
    }
  }, {
    key: 'handleOnSwiped',
    value: function handleOnSwiped(_ref2) {
      var event = _ref2.event,
          dir = _ref2.dir,
          velocity = _ref2.velocity;
      var _props12 = this.props,
          disableSwipe = _props12.disableSwipe,
          stopPropagation = _props12.stopPropagation,
          flickThreshold = _props12.flickThreshold;
      var _state10 = this.state,
          scrollingUpDown = _state10.scrollingUpDown,
          scrollingLeftRight = _state10.scrollingLeftRight;


      if (disableSwipe) return;

      var isRTL = this.props.isRTL;

      if (stopPropagation) event.stopPropagation();
      if (scrollingUpDown) {
        // user stopped scrollingUpDown
        this.setState({ scrollingUpDown: false });
      }

      if (scrollingLeftRight) {
        // user stopped scrollingLeftRight
        this.setState({ scrollingLeftRight: false });
      }

      if (!scrollingUpDown) {
        // don't swipe if user is scrolling
        // if it is RTL the direction is reversed
        var swipeDirection = (dir === _reactSwipeable.LEFT ? 1 : -1) * (isRTL ? -1 : 1);
        var isFlick = velocity > flickThreshold;
        this.handleOnSwipedTo(swipeDirection, isFlick);
      }
    }
  }, {
    key: 'handleOnSwipedTo',
    value: function handleOnSwipedTo(swipeDirection, isFlick) {
      var _state11 = this.state,
          currentIndex = _state11.currentIndex,
          isTransitioning = _state11.isTransitioning;

      var slideTo = currentIndex;

      if ((this.sufficientSwipe() || isFlick) && !isTransitioning) {
        // slideto the next/prev slide
        slideTo += swipeDirection;
      }

      // If we can't swipe left or right, stay in the current index (noop)
      if (swipeDirection === -1 && !this.canSlideLeft() || swipeDirection === 1 && !this.canSlideRight()) {
        slideTo = currentIndex;
      }

      this.unthrottledSlideToIndex(slideTo);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      // keep track of mouse vs keyboard usage for a11y
      this.imageGallery.current.classList.add('image-gallery-using-mouse');
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var _props13 = this.props,
          disableKeyDown = _props13.disableKeyDown,
          useBrowserFullscreen = _props13.useBrowserFullscreen;
      var isFullscreen = this.state.isFullscreen;
      // keep track of mouse vs keyboard usage for a11y

      this.imageGallery.current.classList.remove('image-gallery-using-mouse');

      if (disableKeyDown) return;
      var LEFT_ARROW = 37;
      var RIGHT_ARROW = 39;
      var ESC_KEY = 27;
      var key = parseInt(event.keyCode || event.which || 0, 10);

      switch (key) {
        case LEFT_ARROW:
          if (this.canSlideLeft() && !this.playPauseIntervalId) {
            this.slideLeft(event);
          }
          break;
        case RIGHT_ARROW:
          if (this.canSlideRight() && !this.playPauseIntervalId) {
            this.slideRight(event);
          }
          break;
        case ESC_KEY:
          if (isFullscreen && !useBrowserFullscreen) {
            this.exitFullScreen();
          }
          break;
      }
    }
  }, {
    key: 'handleImageError',
    value: function handleImageError(event) {
      var onErrorImageURL = this.props.onErrorImageURL;

      if (onErrorImageURL && event.target.src.indexOf(onErrorImageURL) === -1) {
        /* eslint-disable no-param-reassign */
        event.target.src = onErrorImageURL;
        /* eslint-enable no-param-reassign */
      }
    }
  }, {
    key: 'removeResizeObserver',
    value: function removeResizeObserver() {
      if (this.resizeObserver && this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current) {
        this.resizeObserver.unobserve(this.imageGallerySlideWrapper.current);
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var currentIndex = this.state.currentIndex;

      if (this.imageGallery && this.imageGallery.current) {
        this.setState({ galleryWidth: this.imageGallery.current.offsetWidth });
      }

      if (this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current) {
        this.setState({
          gallerySlideWrapperHeight: this.imageGallerySlideWrapper.current.offsetHeight
        });
      }

      if (this.thumbnailsWrapper && this.thumbnailsWrapper.current) {
        if (this.isThumbnailVertical()) {
          this.setState({ thumbnailsWrapperHeight: this.thumbnailsWrapper.current.offsetHeight });
        } else {
          this.setState({ thumbnailsWrapperWidth: this.thumbnailsWrapper.current.offsetWidth });
        }
      }

      // Adjust thumbnail container when thumbnail width or height is adjusted
      this.setThumbsTranslate(-this.getThumbsTranslate(currentIndex));
    }
  }, {
    key: 'initResizeObserver',
    value: function initResizeObserver(element) {
      var _this5 = this;

      this.resizeObserver = new _resizeObserverPolyfill2.default((0, _lodash4.default)(function (entries) {
        if (!entries) return;
        entries.forEach(function () {
          _this5.handleResize();
        });
      }, 300));
      this.resizeObserver.observe(element.current);
    }
  }, {
    key: 'toggleFullScreen',
    value: function toggleFullScreen() {
      var isFullscreen = this.state.isFullscreen;

      if (isFullscreen) {
        this.exitFullScreen();
      } else {
        this.fullScreen();
      }
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      if (this.playPauseIntervalId) {
        this.pause();
      } else {
        this.play();
      }
    }
  }, {
    key: 'handleScreenChange',
    value: function handleScreenChange() {
      /*
        handles screen change events that the browser triggers e.g. esc key
      */
      var _props14 = this.props,
          onScreenChange = _props14.onScreenChange,
          useBrowserFullscreen = _props14.useBrowserFullscreen;

      var fullScreenElement = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

      // check if screenchange element is the gallery
      var isFullscreen = this.imageGallery.current === fullScreenElement;
      if (onScreenChange) onScreenChange(isFullscreen);
      if (useBrowserFullscreen) this.setState({ isFullscreen: isFullscreen });
    }
  }, {
    key: 'slideToIndex',
    value: function slideToIndex(index, event) {
      var _state12 = this.state,
          currentIndex = _state12.currentIndex,
          isTransitioning = _state12.isTransitioning;
      var _props15 = this.props,
          items = _props15.items,
          slideDuration = _props15.slideDuration,
          onBeforeSlide = _props15.onBeforeSlide;


      if (!isTransitioning) {
        if (event) {
          if (this.playPauseIntervalId) {
            // user triggered event while ImageGallery is playing, reset interval
            this.pause(false);
            this.play(false);
          }
        }

        var slideCount = items.length - 1;
        var nextIndex = index;
        if (index < 0) {
          nextIndex = slideCount;
        } else if (index > slideCount) {
          nextIndex = 0;
        }

        if (onBeforeSlide && nextIndex !== currentIndex) {
          onBeforeSlide(nextIndex);
        }

        this.setState({
          previousIndex: currentIndex,
          currentIndex: nextIndex,
          isTransitioning: nextIndex !== currentIndex,
          currentSlideOffset: 0,
          slideStyle: { transition: 'all ' + slideDuration + 'ms ease-out' }
        }, this.onSliding);
      }
    }
  }, {
    key: 'slideLeft',
    value: function slideLeft(event) {
      var isRTL = this.props.isRTL;

      if (isRTL) {
        this.slideNext(event);
      } else {
        this.slidePrevious(event);
      }
    }
  }, {
    key: 'slideRight',
    value: function slideRight(event) {
      var isRTL = this.props.isRTL;

      if (isRTL) {
        this.slidePrevious(event);
      } else {
        this.slideNext(event);
      }
    }
  }, {
    key: 'slidePrevious',
    value: function slidePrevious(event) {
      var _this6 = this;

      var _state13 = this.state,
          currentIndex = _state13.currentIndex,
          currentSlideOffset = _state13.currentSlideOffset,
          isTransitioning = _state13.isTransitioning;
      var items = this.props.items;

      var nextIndex = currentIndex - 1;

      if (isTransitioning) return;

      if (items.length === 2) {
        /*
          When there are only 2 slides fake a tiny swipe to get the slides
          on the correct side for transitioning
        */
        this.setState({
          currentSlideOffset: currentSlideOffset + 0.001, // this will reset once index changes
          slideStyle: { transition: 'none' } // move the slide over instantly
        }, function () {
          // add 25ms timeout to avoid delay in moving slides over
          window.setTimeout(function () {
            return _this6.slideToIndex(nextIndex, event);
          }, 25);
        });
      } else {
        this.slideToIndex(nextIndex, event);
      }
    }
  }, {
    key: 'slideNext',
    value: function slideNext(event) {
      var _this7 = this;

      var _state14 = this.state,
          currentIndex = _state14.currentIndex,
          currentSlideOffset = _state14.currentSlideOffset,
          isTransitioning = _state14.isTransitioning;
      var items = this.props.items;

      var nextIndex = currentIndex + 1;

      if (isTransitioning) return;

      if (items.length === 2) {
        // same as above for 2 slides
        this.setState({
          currentSlideOffset: currentSlideOffset - 0.001,
          slideStyle: { transition: 'none' }
        }, function () {
          window.setTimeout(function () {
            return _this7.slideToIndex(nextIndex, event);
          }, 25);
        });
      } else {
        this.slideToIndex(nextIndex, event);
      }
    }
  }, {
    key: 'handleThumbnailMouseOver',
    value: function handleThumbnailMouseOver(event, index) {
      var slideOnThumbnailOver = this.props.slideOnThumbnailOver;

      if (slideOnThumbnailOver) this.onThumbnailMouseOver(event, index);
    }
  }, {
    key: 'handleThumbnailKeyUp',
    value: function handleThumbnailKeyUp(event, index) {
      // a11y support ^_^
      if (isEnterOrSpaceKey(event)) this.onThumbnailClick(event, index);
    }
  }, {
    key: 'handleSlideKeyUp',
    value: function handleSlideKeyUp(event) {
      // a11y support ^_^
      if (isEnterOrSpaceKey(event)) {
        var onClick = this.props.onClick;

        onClick(event);
      }
    }
  }, {
    key: 'isThumbnailVertical',
    value: function isThumbnailVertical() {
      var thumbnailPosition = this.props.thumbnailPosition;

      return thumbnailPosition === 'left' || thumbnailPosition === 'right';
    }
  }, {
    key: 'addScreenChangeEvent',
    value: function addScreenChangeEvent() {
      var _this8 = this;

      screenChangeEvents.forEach(function (eventName) {
        document.addEventListener(eventName, _this8.handleScreenChange);
      });
    }
  }, {
    key: 'removeScreenChangeEvent',
    value: function removeScreenChangeEvent() {
      var _this9 = this;

      screenChangeEvents.forEach(function (eventName) {
        document.removeEventListener(eventName, _this9.handleScreenChange);
      });
    }
  }, {
    key: 'fullScreen',
    value: function fullScreen() {
      var useBrowserFullscreen = this.props.useBrowserFullscreen;

      var gallery = this.imageGallery.current;
      if (useBrowserFullscreen) {
        if (gallery.requestFullscreen) {
          gallery.requestFullscreen();
        } else if (gallery.msRequestFullscreen) {
          gallery.msRequestFullscreen();
        } else if (gallery.mozRequestFullScreen) {
          gallery.mozRequestFullScreen();
        } else if (gallery.webkitRequestFullscreen) {
          gallery.webkitRequestFullscreen();
        } else {
          // fallback to fullscreen modal for unsupported browsers
          this.setModalFullscreen(true);
        }
      } else {
        this.setModalFullscreen(true);
      }
      this.setState({ isFullscreen: true });
    }
  }, {
    key: 'exitFullScreen',
    value: function exitFullScreen() {
      var isFullscreen = this.state.isFullscreen;
      var useBrowserFullscreen = this.props.useBrowserFullscreen;

      if (isFullscreen) {
        if (useBrowserFullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else {
            // fallback to fullscreen modal for unsupported browsers
            this.setModalFullscreen(false);
          }
        } else {
          this.setModalFullscreen(false);
        }
        this.setState({ isFullscreen: false });
      }
    }
  }, {
    key: 'pauseOrPlay',
    value: function pauseOrPlay() {
      var infinite = this.props.infinite;
      var currentIndex = this.state.currentIndex;

      if (!infinite && !this.canSlideRight()) {
        this.pause();
      } else {
        this.slideToIndex(currentIndex + 1);
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var shouldCallOnPlay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _props16 = this.props,
          onPlay = _props16.onPlay,
          slideInterval = _props16.slideInterval,
          slideDuration = _props16.slideDuration;
      var currentIndex = this.state.currentIndex;

      if (!this.playPauseIntervalId) {
        this.setState({ isPlaying: true });
        this.playPauseIntervalId = window.setInterval(this.pauseOrPlay, Math.max(slideInterval, slideDuration));
        if (onPlay && shouldCallOnPlay) {
          onPlay(currentIndex);
        }
      }
    }
  }, {
    key: 'pause',
    value: function pause() {
      var shouldCallOnPause = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var onPause = this.props.onPause;
      var currentIndex = this.state.currentIndex;

      if (this.playPauseIntervalId) {
        window.clearInterval(this.playPauseIntervalId);
        this.playPauseIntervalId = null;
        this.setState({ isPlaying: false });
        if (onPause && shouldCallOnPause) {
          onPause(currentIndex);
        }
      }
    }
  }, {
    key: 'isImageLoaded',
    value: function isImageLoaded(item) {
      /*
        Keep track of images loaded so that onImageLoad prop is not
        called multiple times when re-render the images
      */
      var imageExists = this.loadedImages[item.original];
      if (imageExists) {
        return true;
      }
      // add image as loaded
      this.loadedImages[item.original] = true;
      return false;
    }
  }, {
    key: 'handleImageLoaded',
    value: function handleImageLoaded(event, item) {
      var onImageLoad = this.props.onImageLoad;

      var imageExists = this.loadedImages[item.original];
      if (!imageExists && onImageLoad) {
        this.loadedImages[item.original] = true; // prevent from call again
        // image just loaded, call onImageLoad
        onImageLoad(event);
      }
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var _this10 = this;

      var isFullscreen = this.state.isFullscreen;
      var onImageError = this.props.onImageError;

      var handleImageError = onImageError || this.handleImageError;
      var itemSrc = isFullscreen ? item.fullscreen || item.original : item.original;

      return _react2.default.createElement(
        'div',
        null,
        item.imageSet ? _react2.default.createElement(
          'picture',
          {
            onLoad: function onLoad(event) {
              return _this10.handleImageLoaded(event, item);
            },
            onError: handleImageError
          },
          item.imageSet.map(function (source, index) {
            return _react2.default.createElement('source', {
              key: 'media-' + source.srcSet + '-' + index,
              media: source.media,
              srcSet: source.srcSet,
              type: source.type
            });
          }),
          _react2.default.createElement('img', {
            className: 'image-gallery-image',
            alt: item.originalAlt,
            src: itemSrc
          })
        ) : _react2.default.createElement('img', {
          className: 'image-gallery-image',
          src: itemSrc,
          alt: item.originalAlt,
          srcSet: item.srcSet,
          sizes: item.sizes,
          title: item.originalTitle,
          onLoad: function onLoad(event) {
            return _this10.handleImageLoaded(event, item);
          },
          onError: handleImageError
        }),
        item.description && _react2.default.createElement(
          'span',
          { className: 'image-gallery-description' },
          item.description
        )
      );
    }
  }, {
    key: 'renderThumbInner',
    value: function renderThumbInner(item) {
      var onThumbnailError = this.props.onThumbnailError;

      var handleThumbnailError = onThumbnailError || this.handleImageError;

      return _react2.default.createElement(
        'div',
        { className: 'image-gallery-thumbnail-inner' },
        _react2.default.createElement('img', {
          className: 'image-gallery-thumbnail-image',
          src: item.thumbnail,
          alt: item.thumbnailAlt,
          title: item.thumbnailTitle,
          onError: handleThumbnailError
        }),
        item.thumbnailLabel && _react2.default.createElement(
          'div',
          { className: 'image-gallery-thumbnail-label' },
          item.thumbnailLabel
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state15 = this.state,
          currentIndex = _state15.currentIndex,
          isFullscreen = _state15.isFullscreen,
          modalFullscreen = _state15.modalFullscreen,
          isPlaying = _state15.isPlaying;
      var _props17 = this.props,
          additionalClass = _props17.additionalClass,
          indexSeparator = _props17.indexSeparator,
          isRTL = _props17.isRTL,
          items = _props17.items,
          thumbnailPosition = _props17.thumbnailPosition,
          renderFullscreenButton = _props17.renderFullscreenButton,
          renderCustomControls = _props17.renderCustomControls,
          renderLeftNav = _props17.renderLeftNav,
          renderRightNav = _props17.renderRightNav,
          showBullets = _props17.showBullets,
          showFullscreenButton = _props17.showFullscreenButton,
          showIndex = _props17.showIndex,
          showThumbnails = _props17.showThumbnails,
          showNav = _props17.showNav,
          showPlayButton = _props17.showPlayButton,
          renderPlayPauseButton = _props17.renderPlayPauseButton;


      var thumbnailStyle = this.getThumbnailStyle();

      var _getSlideItems = this.getSlideItems(),
          slides = _getSlideItems.slides,
          thumbnails = _getSlideItems.thumbnails,
          bullets = _getSlideItems.bullets;

      var slideWrapperClass = (0, _clsx2.default)('image-gallery-slide-wrapper', thumbnailPosition, { 'image-gallery-rtl': isRTL });

      var slideWrapper = _react2.default.createElement(
        'div',
        { ref: this.imageGallerySlideWrapper, className: slideWrapperClass },
        renderCustomControls && renderCustomControls(),
        this.canSlide() ? _react2.default.createElement(
          _react2.default.Fragment,
          null,
          showNav && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            renderLeftNav(this.slideLeft, !this.canSlideLeft()),
            renderRightNav(this.slideRight, !this.canSlideRight())
          ),
          _react2.default.createElement(
            _reactSwipeable.Swipeable,
            {
              className: 'image-gallery-swipe',
              delta: 0,
              onSwiping: this.handleSwiping,
              onSwiped: this.handleOnSwiped
            },
            _react2.default.createElement(
              'div',
              { className: 'image-gallery-slides' },
              slides
            )
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'image-gallery-slides' },
          slides
        ),
        showPlayButton && renderPlayPauseButton(this.togglePlay, isPlaying),
        showBullets && _react2.default.createElement(
          'div',
          { className: 'image-gallery-bullets' },
          _react2.default.createElement(
            'div',
            {
              className: 'image-gallery-bullets-container',
              role: 'navigation',
              'aria-label': 'Bullet Navigation'
            },
            bullets
          )
        ),
        showFullscreenButton && renderFullscreenButton(this.toggleFullScreen, isFullscreen),
        showIndex && _react2.default.createElement(
          'div',
          { className: 'image-gallery-index' },
          _react2.default.createElement(
            'span',
            { className: 'image-gallery-index-current' },
            currentIndex + 1
          ),
          _react2.default.createElement(
            'span',
            { className: 'image-gallery-index-separator' },
            indexSeparator
          ),
          _react2.default.createElement(
            'span',
            { className: 'image-gallery-index-total' },
            items.length
          )
        )
      );

      var igClass = (0, _clsx2.default)('image-gallery', additionalClass, { 'fullscreen-modal': modalFullscreen });
      var igContentClass = (0, _clsx2.default)('image-gallery-content', thumbnailPosition, { fullscreen: isFullscreen });
      var thumbnailWrapperClass = (0, _clsx2.default)('image-gallery-thumbnails-wrapper', thumbnailPosition, { 'thumbnails-wrapper-rtl': !this.isThumbnailVertical() && isRTL });
      return _react2.default.createElement(
        'div',
        {
          ref: this.imageGallery,
          className: igClass,
          'aria-live': 'polite'
        },
        _react2.default.createElement(
          'div',
          { className: igContentClass },
          (thumbnailPosition === 'bottom' || thumbnailPosition === 'right') && slideWrapper,
          showThumbnails && _react2.default.createElement(
            'div',
            {
              className: thumbnailWrapperClass,
              style: this.getThumbnailBarHeight()
            },
            _react2.default.createElement(
              'div',
              {
                className: 'image-gallery-thumbnails',
                ref: this.thumbnailsWrapper
              },
              _react2.default.createElement(
                'div',
                {
                  ref: this.thumbnails,
                  className: 'image-gallery-thumbnails-container',
                  style: thumbnailStyle,
                  'aria-label': 'Thumbnail Navigation'
                },
                thumbnails
              )
            )
          ),
          (thumbnailPosition === 'top' || thumbnailPosition === 'left') && slideWrapper
        )
      );
    }
  }]);

  return ImageGallery;
}(_react2.default.Component);

ImageGallery.propTypes = {
  flickThreshold: propTypes.number,
  items: (0, propTypes.arrayOf)((0, propTypes.shape)({
    bulletClass: propTypes.string,
    bulletOnClick: propTypes.func,
    description: propTypes.string,
    original: propTypes.string.isRequired,
    fullscreen: propTypes.string,
    originalAlt: propTypes.string,
    originalTitle: propTypes.string,
    thumbnail: propTypes.string,
    thumbnailAlt: propTypes.string,
    thumbnailLabel: propTypes.string,
    thumbnailTitle: propTypes.string,
    originalClass: propTypes.string,
    thumbnailClass: propTypes.string,
    renderItem: propTypes.func,
    renderThumbInner: propTypes.func,
    imageSet: imageSetType,
    srcSet: propTypes.string,
    sizes: propTypes.string
  })).isRequired,
  showNav: propTypes.bool,
  autoPlay: propTypes.bool,
  lazyLoad: propTypes.bool,
  infinite: propTypes.bool,
  showIndex: propTypes.bool,
  showBullets: propTypes.bool,
  showThumbnails: propTypes.bool,
  showPlayButton: propTypes.bool,
  showFullscreenButton: propTypes.bool,
  disableThumbnailScroll: propTypes.bool,
  disableKeyDown: propTypes.bool,
  disableSwipe: propTypes.bool,
  useBrowserFullscreen: propTypes.bool,
  preventDefaultTouchmoveEvent: propTypes.bool,
  onErrorImageURL: propTypes.string,
  indexSeparator: propTypes.string,
  thumbnailPosition: (0, propTypes.oneOf)(['top', 'bottom', 'left', 'right']),
  startIndex: propTypes.number,
  slideDuration: propTypes.number,
  slideInterval: propTypes.number,
  slideOnThumbnailOver: propTypes.bool,
  swipeThreshold: propTypes.number,
  swipingTransitionDuration: propTypes.number,
  onSlide: propTypes.func,
  onBeforeSlide: propTypes.func,
  onScreenChange: propTypes.func,
  onPause: propTypes.func,
  onPlay: propTypes.func,
  onClick: propTypes.func,
  onImageLoad: propTypes.func,
  onImageError: propTypes.func,
  onTouchMove: propTypes.func,
  onTouchEnd: propTypes.func,
  onTouchStart: propTypes.func,
  onMouseOver: propTypes.func,
  onMouseLeave: propTypes.func,
  onThumbnailError: propTypes.func,
  onThumbnailClick: propTypes.func,
  renderCustomControls: propTypes.func,
  renderLeftNav: propTypes.func,
  renderRightNav: propTypes.func,
  renderPlayPauseButton: propTypes.func,
  renderFullscreenButton: propTypes.func,
  renderItem: propTypes.func,
  renderThumbInner: propTypes.func,
  stopPropagation: propTypes.bool,
  additionalClass: propTypes.string,
  useTranslate3D: propTypes.bool,
  isRTL: propTypes.bool,
  useWindowKeyDown: propTypes.bool
};
ImageGallery.defaultProps = {
  onErrorImageURL: '',
  additionalClass: '',
  showNav: true,
  autoPlay: false,
  lazyLoad: false,
  infinite: true,
  showIndex: false,
  showBullets: false,
  showThumbnails: true,
  showPlayButton: true,
  showFullscreenButton: true,
  disableThumbnailScroll: false,
  disableKeyDown: false,
  disableSwipe: false,
  useTranslate3D: true,
  isRTL: false,
  useBrowserFullscreen: true,
  preventDefaultTouchmoveEvent: false,
  flickThreshold: 0.4,
  stopPropagation: false,
  indexSeparator: ' / ',
  thumbnailPosition: 'bottom',
  startIndex: 0,
  slideDuration: 450,
  swipingTransitionDuration: 0,
  onSlide: null,
  onBeforeSlide: null,
  onScreenChange: null,
  onPause: null,
  onPlay: null,
  onClick: null,
  onImageLoad: null,
  onImageError: null,
  onTouchMove: null,
  onTouchEnd: null,
  onTouchStart: null,
  onMouseOver: null,
  onMouseLeave: null,
  onThumbnailError: null,
  onThumbnailClick: null,
  renderCustomControls: null,
  renderThumbInner: null,
  renderItem: null,
  slideInterval: 3000,
  slideOnThumbnailOver: false,
  swipeThreshold: 30,
  renderLeftNav: function renderLeftNav(onClick, disabled) {
    return _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'image-gallery-icon image-gallery-left-nav',
        disabled: disabled,
        onClick: onClick,
        'aria-label': 'Previous Slide'
      },
      _react2.default.createElement(_SVG2.default, { icon: 'left', viewBox: '6 0 12 24' })
    );
  },
  renderRightNav: function renderRightNav(onClick, disabled) {
    return _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'image-gallery-icon image-gallery-right-nav',
        disabled: disabled,
        onClick: onClick,
        'aria-label': 'Next Slide'
      },
      _react2.default.createElement(_SVG2.default, { icon: 'right', viewBox: '6 0 12 24' })
    );
  },
  renderPlayPauseButton: function renderPlayPauseButton(onClick, isPlaying) {
    return _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'image-gallery-icon image-gallery-play-button',
        onClick: onClick,
        'aria-label': 'Play or Pause Slideshow'
      },
      _react2.default.createElement(_SVG2.default, { strokeWidth: 2, icon: isPlaying ? 'pause' : 'play' })
    );
  },
  renderFullscreenButton: function renderFullscreenButton(onClick, isFullscreen) {
    return _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'image-gallery-icon image-gallery-fullscreen-button',
        onClick: onClick,
        'aria-label': 'Open Fullscreen'
      },
      _react2.default.createElement(_SVG2.default, { strokeWidth: 2, icon: isFullscreen ? 'minimize' : 'maximize' })
    );
  },
  useWindowKeyDown: true
};
exports.default = ImageGallery;
});

var ImageGallery = /*@__PURE__*/getDefaultExportFromCjs(imageGallery);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".image-gallery-icon {\n  color: #fff;\n  transition: all .2s ease-out;\n  appearance: none;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  z-index: 4;\n  filter: drop-shadow(0 2px 2px #1a1a1a); }\n  @media (min-width: 768px) {\n    .image-gallery-icon:hover {\n      color: #337ab7; }\n      .image-gallery-icon:hover .image-gallery-svg {\n        transform: scale(1.1); } }\n  .image-gallery-icon:focus {\n    outline: 2px solid #337ab7; }\n\n.image-gallery-using-mouse .image-gallery-icon:focus {\n  outline: none; }\n\n.image-gallery-fullscreen-button,\n.image-gallery-play-button {\n  bottom: 0;\n  padding: 20px; }\n  .image-gallery-fullscreen-button .image-gallery-svg,\n  .image-gallery-play-button .image-gallery-svg {\n    height: 36px;\n    width: 36px; }\n  @media (max-width: 768px) {\n    .image-gallery-fullscreen-button,\n    .image-gallery-play-button {\n      padding: 15px; }\n      .image-gallery-fullscreen-button .image-gallery-svg,\n      .image-gallery-play-button .image-gallery-svg {\n        height: 24px;\n        width: 24px; } }\n  @media (max-width: 480px) {\n    .image-gallery-fullscreen-button,\n    .image-gallery-play-button {\n      padding: 10px; }\n      .image-gallery-fullscreen-button .image-gallery-svg,\n      .image-gallery-play-button .image-gallery-svg {\n        height: 16px;\n        width: 16px; } }\n\n.image-gallery-fullscreen-button {\n  right: 0; }\n\n.image-gallery-play-button {\n  left: 0; }\n\n.image-gallery-left-nav,\n.image-gallery-right-nav {\n  padding: 50px 10px;\n  top: 50%;\n  transform: translateY(-50%); }\n  .image-gallery-left-nav .image-gallery-svg,\n  .image-gallery-right-nav .image-gallery-svg {\n    height: 120px;\n    width: 60px; }\n  @media (max-width: 768px) {\n    .image-gallery-left-nav .image-gallery-svg,\n    .image-gallery-right-nav .image-gallery-svg {\n      height: 72px;\n      width: 36px; } }\n  @media (max-width: 480px) {\n    .image-gallery-left-nav .image-gallery-svg,\n    .image-gallery-right-nav .image-gallery-svg {\n      height: 48px;\n      width: 24px; } }\n  .image-gallery-left-nav[disabled],\n  .image-gallery-right-nav[disabled] {\n    cursor: disabled;\n    opacity: .6;\n    pointer-events: none; }\n\n.image-gallery-left-nav {\n  left: 0; }\n\n.image-gallery-right-nav {\n  right: 0; }\n\n.image-gallery {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: relative; }\n  .image-gallery.fullscreen-modal {\n    background: #000;\n    bottom: 0;\n    height: 100%;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n    width: 100%;\n    z-index: 5; }\n    .image-gallery.fullscreen-modal .image-gallery-content {\n      top: 50%;\n      transform: translateY(-50%); }\n\n.image-gallery-content {\n  position: relative;\n  line-height: 0;\n  top: 0; }\n  .image-gallery-content.fullscreen {\n    background: #000; }\n  .image-gallery-content .image-gallery-slide .image-gallery-image {\n    max-height: calc(100vh - 80px); }\n  .image-gallery-content.left .image-gallery-slide .image-gallery-image, .image-gallery-content.right .image-gallery-slide .image-gallery-image {\n    max-height: 100vh; }\n\n.image-gallery-slide-wrapper {\n  position: relative; }\n  .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {\n    display: inline-block;\n    width: calc(100% - 110px); }\n    @media (max-width: 768px) {\n      .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {\n        width: calc(100% - 87px); } }\n  .image-gallery-slide-wrapper.image-gallery-rtl {\n    direction: rtl; }\n\n.image-gallery-slides {\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n  white-space: nowrap;\n  text-align: center; }\n\n.image-gallery-slide {\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n  .image-gallery-slide.center {\n    position: relative; }\n  .image-gallery-slide .image-gallery-image {\n    width: 100%;\n    object-fit: contain; }\n  .image-gallery-slide .image-gallery-description {\n    background: rgba(0, 0, 0, 0.4);\n    bottom: 70px;\n    color: #fff;\n    left: 0;\n    line-height: 1;\n    padding: 10px 20px;\n    position: absolute;\n    white-space: normal; }\n    @media (max-width: 768px) {\n      .image-gallery-slide .image-gallery-description {\n        bottom: 45px;\n        font-size: .8em;\n        padding: 8px 15px; } }\n\n.image-gallery-bullets {\n  bottom: 20px;\n  left: 0;\n  margin: 0 auto;\n  position: absolute;\n  right: 0;\n  width: 80%;\n  z-index: 4; }\n  .image-gallery-bullets .image-gallery-bullets-container {\n    margin: 0;\n    padding: 0;\n    text-align: center; }\n  .image-gallery-bullets .image-gallery-bullet {\n    appearance: none;\n    background-color: transparent;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    box-shadow: 0 1px 0 #1a1a1a;\n    cursor: pointer;\n    display: inline-block;\n    margin: 0 5px;\n    outline: none;\n    padding: 5px;\n    transition: background .2s ease-out; }\n    @media (max-width: 768px) {\n      .image-gallery-bullets .image-gallery-bullet {\n        margin: 0 3px;\n        padding: 3px; } }\n    @media (max-width: 480px) {\n      .image-gallery-bullets .image-gallery-bullet {\n        padding: 2.7px; } }\n    .image-gallery-bullets .image-gallery-bullet:focus, .image-gallery-bullets .image-gallery-bullet:hover {\n      background: #337ab7;\n      transform: scale(1.1); }\n    .image-gallery-bullets .image-gallery-bullet.active {\n      background: #fff; }\n\n.image-gallery-thumbnails-wrapper {\n  position: relative; }\n  .image-gallery-thumbnails-wrapper.thumbnails-wrapper-rtl {\n    direction: rtl; }\n  .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {\n    display: inline-block;\n    vertical-align: top;\n    width: 100px; }\n    @media (max-width: 768px) {\n      .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {\n        width: 81px; } }\n    .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails {\n      height: 100%;\n      width: 100%;\n      left: 0;\n      padding: 0;\n      position: absolute;\n      top: 0; }\n      .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail {\n        display: block;\n        margin-right: 0;\n        padding: 0; }\n        .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail {\n          margin-left: 0;\n          margin-top: 2px; }\n  .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {\n    margin: 0 5px; }\n    @media (max-width: 768px) {\n      .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {\n        margin: 0 3px; } }\n\n.image-gallery-thumbnails {\n  overflow: hidden;\n  padding: 5px 0; }\n  @media (max-width: 768px) {\n    .image-gallery-thumbnails {\n      padding: 3px 0; } }\n  .image-gallery-thumbnails .image-gallery-thumbnails-container {\n    cursor: pointer;\n    text-align: center;\n    transition: transform .45s ease-out;\n    white-space: nowrap; }\n\n.image-gallery-thumbnail {\n  display: inline-block;\n  border: 4px solid transparent;\n  transition: border .3s ease-out;\n  width: 100px;\n  background: transparent;\n  padding: 0; }\n  @media (max-width: 768px) {\n    .image-gallery-thumbnail {\n      border: 3px solid transparent;\n      width: 81px; } }\n  .image-gallery-thumbnail + .image-gallery-thumbnail {\n    margin-left: 2px; }\n  .image-gallery-thumbnail .image-gallery-thumbnail-inner {\n    position: relative; }\n  .image-gallery-thumbnail .image-gallery-thumbnail-image {\n    vertical-align: middle;\n    width: 100%;\n    line-height: 0; }\n  .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {\n    outline: none;\n    border: 4px solid #337ab7; }\n    @media (max-width: 768px) {\n      .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {\n        border: 3px solid #337ab7; } }\n\n.image-gallery-thumbnail-label {\n  box-sizing: border-box;\n  color: white;\n  font-size: 1em;\n  left: 0;\n  line-height: 1em;\n  padding: 5%;\n  position: absolute;\n  top: 50%;\n  text-shadow: 1px 1px 0 black;\n  transform: translateY(-50%);\n  white-space: normal;\n  width: 100%; }\n  @media (max-width: 768px) {\n    .image-gallery-thumbnail-label {\n      font-size: .8em;\n      line-height: .8em; } }\n\n.image-gallery-index {\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  line-height: 1;\n  padding: 10px 20px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 4; }\n  @media (max-width: 768px) {\n    .image-gallery-index {\n      font-size: .8em;\n      padding: 5px 10px; } }\n";
styleInject(css_248z);

var useStyles$3 = makeStyles(function (theme) { return ({
    appAvatar: {
        background: theme.palette.gradient.light,
        fontSize: '55px',
        fontWeight: 300,
        height: '150px',
        margin: '0px auto 50px auto',
        textTransform: 'uppercase',
        width: '150px',
    },
    appAlreadySubscribedButton: {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: theme.palette.secondary.contrastText,
        fontSize: '16px',
        fontWeight: 500,
        opacity: 0.5,
        // Keep this commented for demo purposes - we want to be able to sub and unsub Marketplace apps
        // pointerEvents: 'none',
        textTransform: 'inherit',
        width: '100%',
        '&:active, &:hover, &:link, &:visited': {
            backgroundColor: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.palette.dimensions.borderRadius,
            color: theme.palette.secondary.contrastText,
        },
    },
    appDescription: {
        color: theme.palette.text.primary,
        fontSize: '20px',
        fontWeight: 200,
        marginBottom: '15px',
    },
    appDetailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: '110px auto 0px auto',
        maxWidth: '900px',
        padding: '40px 0px 60px 0px',
        width: '100%',
    },
    appImage: {
        borderRadius: '50%',
        height: '150px',
        margin: '0px 25px 42.5px 25px',
        width: '150px',
    },
    appImageGallery: {
        '& .image-gallery-slides': {
            borderRadius: '10px',
        },
        '& .active': {
            border: "4px solid theme.palette.action.focus",
        },
    },
    appLabel: {
        backgroundColor: theme.palette.grey['100'],
        borderRadius: theme.palette.dimensions.borderRadius,
        color: theme.palette.text.primary,
        fontSize: '12px',
        fontWeight: 300,
        marginBottom: '7.5px',
        marginRight: '7.5px',
        padding: '0px 7.5px',
        width: 'fit-content',
    },
    appLabelsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '40px',
    },
    appLinksSubSection: {
        height: '120px',
        width: '100%',
    },
    appOverviewDescription: {
        color: theme.palette.text.secondary,
        fontSize: '16px',
        fontWeight: 300,
    },
    appOverviewTitle: {
        color: theme.palette.text.primary,
        fontSize: '24px',
        fontWeight: 500,
        margin: '40px 0px 25px 0px',
    },
    appSubscribeButton: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: theme.palette.common.white,
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'inherit',
        width: '100%',
        '&:active, &:hover, &:link, &:visited': {
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            borderRadius: theme.palette.dimensions.borderRadius,
            color: theme.palette.common.white,
        },
    },
    appTitle: {
        color: theme.palette.text.primary,
        fontSize: '42px',
        fontWeight: 700,
        marginBottom: '20px',
    },
    leftAppDetailsContainer: {
        maxWidth: '200px',
        width: '100%',
    },
    loadingAppDetails: {
        color: theme.palette.text.primary,
        fontSize: '20px',
        fontWeight: 200,
    },
    providedLink: {
        color: theme.palette.info.main + " !important",
        display: 'block',
        fontSize: '14px',
        fontWeight: 300,
    },
    rightAppDetailsContainer: {
        maxWidth: '700px',
        paddingLeft: '40px',
        width: '100%',
    },
    subSectionSeparator: {
        border: '1px solid #E3E3E3',
        borderRadius: theme.palette.dimensions.borderRadius,
        margin: '15px 0px 15px 0px',
        width: '100%',
    },
    subSectionText: {
        color: theme.palette.text.secondary,
        fontSize: '14px',
        fontWeight: 300,
    },
    subSectionTitle: {
        color: theme.palette.text.primary,
        fontSize: '16px',
        fontWeight: 500,
    },
    topMostSubSection: {
        height: '250px',
        width: '100%',
    },
}); });

var AppDetails$1 = function (_a) {
    var allSubbedMarketplaceApps = _a.allSubbedMarketplaceApps, getAllSubbedMarketplaceAppsAction = _a.getAllSubbedMarketplaceAppsAction, getAppDetailsAction = _a.getAppDetailsAction, retrievedSelectedAppDetails = _a.retrievedSelectedAppDetails, selectedAppDetails = _a.selectedAppDetails, subscribeToMarketplaceAppAction = _a.subscribeToMarketplaceAppAction, unsubscribeToMarketplaceAppAction = _a.unsubscribeToMarketplaceAppAction, userProfile = _a.userProfile;
    var classes = useStyles$3();
    var trans = useTranslation();
    function t(str) {
        return trans.t("extensions.Marketplace." + str);
    }
    // 1. All subbed Marketplace app's retrieval
    /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > allSubbedMarketplaceApps')
    of all information we presently have on a user's marketplace app subscriptions. This will come in handy when
    we want to check if the currently selected app is one that the user's already subscribed to. */
    useEffect(function () {
        if (userProfile && userProfile.id) {
            var userID = parseInt(userProfile.id);
            getAllSubbedMarketplaceAppsAction(userID);
        }
    }, [userProfile]);
    // 2. Subscription logic for the currently selected Marketplace app
    // Retrieves the app's ID from the browser window's URL
    var appID = useParams().appID;
    /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > selectedAppDetails')
    of all information we presently have on the currently selected marketplace app. */
    useEffect(function () {
        if (appID !== '')
            getAppDetailsAction(appID);
    }, [appID]);
    var _b = useState(false), isUserSubbedToApp = _b[0], setIsUserSubbedToApp = _b[1];
    /* The following effect code will check if the currently selected app is one that
    the user's already subscribed to. */
    useEffect(function () {
        var currentAppIsInSubs = allSubbedMarketplaceApps.find(function (marketplaceApp) {
            return marketplaceApp.id.toString() === appID;
        });
        if (currentAppIsInSubs) {
            setIsUserSubbedToApp(true);
        }
    }, [allSubbedMarketplaceApps]);
    var handleMarketplaceAppSubscription = function () {
        var userID = parseInt(userProfile.id);
        var selectedAppID = selectedAppDetails.id;
        if (isUserSubbedToApp) {
            unsubscribeToMarketplaceAppAction(userID, selectedAppID);
            setIsUserSubbedToApp(false);
        }
        else {
            subscribeToMarketplaceAppAction(userID, selectedAppID);
            setIsUserSubbedToApp(true);
        }
    };
    // 3. Currently selected Marketplace app's details logic
    var _c = useState('...'), appNameInitials = _c[0], setAppNameInitials = _c[1];
    useEffect(function () {
        var appNameInitialsArray = selectedAppDetails.name.split(' ');
        var appNameInitials = appNameInitialsArray.length >= 2
            ? "" + appNameInitialsArray[0][0] + appNameInitialsArray[1][0]
            : "" + appNameInitialsArray[0][0] + appNameInitialsArray[0][1];
        setAppNameInitials(appNameInitials);
    }, [selectedAppDetails]);
    var isURLEmpty = function (providedURL) {
        return providedURL === null || providedURL === '';
    };
    // All images - as well as all thumbnails - must be of the same size
    var imagesArray = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (React__default.createElement("main", null,
        React__default.createElement("section", { className: classes.appDetailsContainer }, retrievedSelectedAppDetails ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("section", { className: classes.leftAppDetailsContainer },
                React__default.createElement("div", { className: classes.topMostSubSection },
                    selectedAppDetails && selectedAppDetails.logo !== '' ? (React__default.createElement("img", { className: classes.appImage, src: selectedAppDetails.logo })) : (React__default.createElement(Avatar, { className: classes.appAvatar }, appNameInitials ? appNameInitials : '...')),
                    React__default.createElement(Button, { className: isUserSubbedToApp
                            ? classes.appAlreadySubscribedButton
                            : classes.appSubscribeButton, onClick: handleMarketplaceAppSubscription }, isUserSubbedToApp
                        ? t('appMarketplace.appDetails.appAlreadySubscribedButton')
                        : t('appMarketplace.appDetails.appSubscribeButton'))),
                React__default.createElement("hr", { className: classes.subSectionSeparator }),
                React__default.createElement("div", null,
                    React__default.createElement("p", { className: classes.subSectionTitle }, t('appMarketplace.appDetails.subSectionTitleOne')),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.websiteUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.websiteUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.websiteURL'))),
                    selectedAppDetails && !isURLEmpty(selectedAppDetails.tosUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.tosUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.tosURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.privacyUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.privacyUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.privacyPolicyURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.youtubeUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.youtubeUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.youTubeURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.supportUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.supportUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.supportURL'))),
                    selectedAppDetails &&
                        isURLEmpty(selectedAppDetails.privacyUrl) &&
                        isURLEmpty(selectedAppDetails.supportUrl) &&
                        isURLEmpty(selectedAppDetails.tosUrl) &&
                        isURLEmpty(selectedAppDetails.websiteUrl) &&
                        isURLEmpty(selectedAppDetails.youtubeUrl) && (React__default.createElement("p", { className: classes.subSectionText }, t('appMarketplace.appDetails.appLinks.noAppLinks')))),
                React__default.createElement("hr", { className: classes.subSectionSeparator }),
                React__default.createElement("div", null,
                    React__default.createElement("p", { className: classes.subSectionTitle }, t('appMarketplace.appDetails.subSectionTitleTwo')),
                    React__default.createElement("p", { className: classes.subSectionText }, selectedAppDetails && selectedAppDetails.organization.name
                        ? selectedAppDetails.organization.name
                        : '...')),
                React__default.createElement("hr", { className: classes.subSectionSeparator }),
                React__default.createElement("div", null,
                    React__default.createElement("p", { className: classes.subSectionTitle }, t('appMarketplace.appDetails.subSectionTitleThree')),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.tosUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.tosUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.tosURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.privacyUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.privacyUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.privacyPolicyURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.supportUrl) && (React__default.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.supportUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.supportURL'))),
                    selectedAppDetails &&
                        isURLEmpty(selectedAppDetails.organization.privacyUrl) &&
                        isURLEmpty(selectedAppDetails.organization.supportUrl) &&
                        isURLEmpty(selectedAppDetails.organization.tosUrl) && (React__default.createElement("p", { className: classes.subSectionText }, t('appMarketplace.appDetails.publisherLinks.noPublisherLinks'))))),
            React__default.createElement("section", { className: classes.rightAppDetailsContainer },
                React__default.createElement("h1", { className: classes.appTitle }, selectedAppDetails && selectedAppDetails.name
                    ? selectedAppDetails.name
                    : '...'),
                React__default.createElement("p", { className: classes.appDescription }, selectedAppDetails && selectedAppDetails.shortDescription
                    ? selectedAppDetails.shortDescription
                    : t('appMarketplace.appDetails.noShortDescription')),
                React__default.createElement("div", { className: classes.appLabelsContainer }, selectedAppDetails && selectedAppDetails.labels.length ? (selectedAppDetails.labels.map(function (label, index) {
                    return (React__default.createElement("p", { className: classes.appLabel, key: "appLabel" + index }, label));
                })) : (React__default.createElement("p", { className: classes.appLabel }, t('appMarketplace.appDetails.noLabels')))),
                React__default.createElement(ImageGallery, { additionalClass: classes.appImageGallery, items: imagesArray, showNav: false, showPlayButton: false }),
                React__default.createElement("h1", { className: classes.appOverviewTitle }, t('appMarketplace.appDetails.partOfAppOverviewTitle')),
                React__default.createElement("p", { className: classes.appOverviewDescription }, selectedAppDetails && selectedAppDetails.description
                    ? selectedAppDetails.description
                    : t('appMarketplace.appDetails.noAppOverview'))))) : (React__default.createElement("p", { className: classes.loadingAppDetails }, t('appMarketplace.appDetails.loadingAppDetails'))))));
};

var mapStateToProps$2 = function (_a) {
    var marketplace = _a.marketplace, profile = _a.profile;
    return ({
        allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
        retrievedSelectedAppDetails: marketplace.retrievedSelectedAppDetails,
        selectedAppDetails: marketplace.selectedAppDetails,
        userProfile: profile.profile.user,
    });
};
var mapDispatchToProps$2 = function (dispatch) {
    return bindActionCreators({
        getAllSubbedMarketplaceAppsAction: getAllSubbedMarketplaceAppsAction,
        getAppDetailsAction: getAppDetailsAction,
        subscribeToMarketplaceAppAction: subscribeToMarketplaceAppAction,
        unsubscribeToMarketplaceAppAction: unsubscribeToMarketplaceAppAction,
    }, dispatch);
};
var AppDetails = connect(mapStateToProps$2, mapDispatchToProps$2)(AppDetails$1);

var Link = React.forwardRef(function (_a, ref) {
    var _b = _a.externalTarget, externalTarget = _b === void 0 ? '_blank' : _b, href = _a.href, to = _a.to, props = __rest(_a, ["externalTarget", "href", "to"]);
    var destination = href || to;
    if (typeof destination === 'string' && /^https?:\/\//.test(destination)) {
        return (React.createElement("a", __assign({ href: destination, target: externalTarget }, props), props.children));
    }
    else {
        return React.createElement(Link$1, __assign({ ref: ref, to: destination }, props));
    }
});
Link.displayName = 'Link';

var useStyles$2 = makeStyles(function (theme) { return ({
    appCatalogEntry: {
        backgroundColor: theme.palette.common.white,
        border: "1px solid " + theme.palette.grey['300'],
        borderRadius: theme.palette.dimensions.borderRadius,
        height: '175px',
        padding: '20px 20px 0px 20px',
        width: '215px',
    },
    appCatalogEntryAvatar: {
        background: theme.palette.gradient.light,
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
        color: theme.palette.text.secondary,
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
        backgroundColor: theme.palette.grey['100'],
        borderRadius: theme.palette.dimensions.borderRadius,
        color: theme.palette.text.primary,
        fontSize: '12px',
        fontWeight: 300,
        height: '27.5px',
        marginRight: '7.5px',
        padding: '0px 7.5px',
        width: 'fit-content',
    },
    appCatalogEntryLabelsContainer: {
        display: 'flex',
        height: '40px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
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
    appCatalogEntryName: {
        color: theme.palette.text.primary,
        fontSize: '16px',
        fontWeight: 700,
        marginBottom: '-10px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    appCatalogEntryNameAndOwnerContainer: {
        display: 'block',
        width: '110px',
    },
    appCatalogEntryOwner: {
        color: theme.palette.text.hint,
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
    appCatalogEntryTopDetails: {
        display: 'flex',
        marginBottom: '15px',
        maxWidth: '175px',
        width: '100%',
    },
    appCatalogEntryVersion: {
        borderRadius: theme.palette.dimensions.borderRadius,
        marginRight: '8px',
        padding: '5px 10px',
    },
    appCatalogEntryVersionAndAccess: {
        color: theme.palette.text.hint,
        fontSize: '14px',
        fontWeight: 300,
    },
}); });

var AppCatalog = function (_a) {
    var appsToDisplay = _a.appsToDisplay;
    var classes = useStyles$2();
    var trans = useTranslation();
    function t(str) {
        return trans.t("extensions.Marketplace." + str);
    }
    var generateAppCatalogEntry = function (appDetails, index) {
        var appSplitName = appDetails.appName.split(' ');
        var appInitials = appSplitName[0].slice(0, 2);
        return (React__default.createElement("div", { className: classes.appCatalogEntry, key: "appCatalogEntry" + index },
            React__default.createElement("div", { className: classes.appCatalogEntryTopDetails },
                appDetails.appLogo !== '' ? (React__default.createElement("img", { className: classes.appCatalogEntryImage, src: appDetails.appLogo })) : (React__default.createElement(Avatar, { className: classes.appCatalogEntryAvatar }, appInitials)),
                React__default.createElement("div", { className: classes.appCatalogEntryNameAndOwnerContainer },
                    React__default.createElement("p", { className: classes.appCatalogEntryName }, appDetails.appName),
                    React__default.createElement("p", { className: classes.appCatalogEntryOwner }, appDetails.appPublisher))),
            React__default.createElement("div", { className: classes.appCatalogEntryBottomDetails },
                React__default.createElement("p", { className: classes.appCatalogEntryDescription }, appDetails.appDescription),
                React__default.createElement("div", { className: classes.appCatalogEntryLabelsContainer }, appDetails.appLabels.length ? (appDetails.appLabels.map(function (appLabel, index) {
                    return (React__default.createElement("p", { className: classes.appCatalogEntryLabel, key: "appLabel" + index }, appLabel));
                })) : (React__default.createElement("p", { className: classes.appCatalogEntryLabel }, t('appMarketplace.noLabelsProvidedText')))))));
    };
    var appCatalogEntries = appsToDisplay.map(function (appDetails, index) {
        return (React__default.createElement(Link, { className: classes.appCatalogEntryLink, key: "linkToApp" + index, to: "marketplace/app-details/" + appDetails.appID }, generateAppCatalogEntry(appDetails, index)));
    });
    return React__default.createElement(React__default.Fragment, null, appCatalogEntries);
};

var useStyles$1 = makeStyles(function (theme) { return ({
    amountOfAppMarketAppsText: {
        color: '#4E616F',
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '25px',
        '& > :first-child': {
            color: theme.palette.text.primary,
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
    appMarketHeader: {
        // First color is a fallback one - do not remove!
        background: theme.palette.primary.main,
        backgroundImage: 'url(' + spaceBackground + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom: '4px solid rgba(20, 40, 60, 0.1)',
        height: '335px',
        marginTop: '110px',
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
            color: theme.palette.grey['300'],
            fontSize: '16px',
            fontWeight: 400,
            height: '10px',
        },
        // The input field's SVG icon
        '& svg': {
            color: theme.palette.grey['300'],
        },
    },
    appMarketHeaderTitle: {
        color: theme.palette.common.white,
        fontSize: '42px',
        fontWeight: 700,
        marginBottom: '25px',
    },
    appMarketHeaderTitleAndSearchField: {
        maxWidth: '425px',
        width: '100%',
    },
    featuredAppCard: {
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.palette.dimensions.borderRadius,
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
            color: theme.palette.text.primary,
            fontSize: '14px',
            fontWeight: 700,
            marginBottom: '-10px',
        },
        '& > :last-child': {
            color: theme.palette.text.hint,
            fontSize: '12px',
            fontWeight: 400,
        },
    },
    featuredAppCardLogo: {
        margin: 'auto 0px',
        fontSize: '35px',
        color: theme.palette.text.primary,
    },
    featuredAppCardsSlider: {
        display: 'flex',
        justifyContent: 'center',
    },
    featuredAppsInnerContainer: {
        margin: 'auto',
        padding: '25px 0px',
        textAlign: 'center',
        width: '100%',
    },
    featuredAppsOuterContainer: {
        background: '#007D7D',
        backgroundImage: 'url(' + appCarouselBackground + ')',
        backgroundSize: 'cover',
        borderRadius: theme.palette.dimensions.borderRadius,
        display: 'flex',
        height: '230px',
        justifyContent: 'space-between',
        marginTop: '50px',
        maxWidth: '720px',
        width: '100%',
    },
    featuredAppsSubtitle: {
        color: theme.palette.common.white,
        fontSize: '16px',
        fontWeight: 300,
        marginBottom: '25px',
    },
    featuredAppsTitle: {
        color: theme.palette.common.white,
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
        color: theme.palette.text.hint,
    },
    filterAccordionTitle: {
        color: theme.palette.text.hint,
        fontSize: '16px',
        fontWeight: 400,
    },
    filterSeparator: {
        border: '1px solid #E3E3E3',
        borderRadius: theme.palette.dimensions.borderRadius,
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
        color: theme.palette.text.primary,
        marginRight: '7.5px',
    },
    filterTitleText: {
        color: theme.palette.text.primary,
        fontSize: '18px',
        fontWeight: 500,
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
    noAppsToDisplay: {
        color: '#4E616F',
        fontSize: '16px',
        fontWeight: 200,
    },
    noFiltersAvailable: {
        color: theme.palette.text.primary,
        fontSize: '12px',
        fontWeight: 400,
    },
    notSelectedFilter: {
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '-5px',
        '& > :first-child': {
            color: theme.palette.text.primary,
        },
        '& > :last-child': {
            color: theme.palette.text.primary,
        },
    },
    selectedFilter: {
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '-5px',
        '& > :first-child': {
            color: theme.palette.action.focus,
        },
        '& > :last-child': {
            color: theme.palette.action.focus,
            fontWeight: 500,
        },
    },
    visibleFeaturedAppCardsSliderButton: {
        cursor: 'pointer',
        margin: 'auto 0px',
        '& > svg': {
            color: theme.palette.common.white,
            fontSize: '35px',
            verticalAlign: 'middle',
        },
    },
}); });

var Marketplace$1 = function (_a) {
    var allMarketplaceApps = _a.allMarketplaceApps, allMarketplaceLabels = _a.allMarketplaceLabels, allMarketplacePublishers = _a.allMarketplacePublishers, filteredMarketplaceApps = _a.filteredMarketplaceApps, getAllMarketplaceAppsAction = _a.getAllMarketplaceAppsAction, getAllMarketplaceLabelsAction = _a.getAllMarketplaceLabelsAction, getAllMarketplacePublishersAction = _a.getAllMarketplacePublishersAction, getFilteredMarketplaceAppsAction = _a.getFilteredMarketplaceAppsAction, retrievedAllMarketplaceApps = _a.retrievedAllMarketplaceApps, retrievedAllMarketplaceLabels = _a.retrievedAllMarketplaceLabels, retrievedAllMarketplacePublishers = _a.retrievedAllMarketplacePublishers;
    var classes = useStyles$1();
    var portalSettings = useConfig();
    var trans = useTranslation();
    function t(str) {
        return trans.t("extensions.Marketplace." + str);
    }
    useEffect(function () {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all information we presently have on public apps, and their respective labels & publishers. */
        getAllMarketplaceAppsAction();
        getAllMarketplaceLabelsAction();
        getAllMarketplacePublishersAction();
    }, []);
    var _b = useState([]), allAppsList = _b[0], setAllAppsList = _b[1];
    useEffect(function () {
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
                            : t('appMarketplace.noDescriptionAvailableText'),
                    appID: app.id,
                    appLabels: app.labels,
                    appLogo: app.logo,
                    appName: app.name,
                    appPublisher: app.organization.name,
                    appUpdatedAt: app.updatedAt,
                };
            });
            setAllAppsList(newAllAvailableAppsArray);
        }
    }, [allMarketplaceApps]);
    /* App filtering & sorting set-up */
    // 1 - Search term filter
    var _c = useState(''), searchTerm = _c[0], setSearchTerm = _c[1];
    var handleSearchTermChanges = function (changeEvent) {
        var newSearchTerm = changeEvent === null || changeEvent === void 0 ? void 0 : changeEvent.target.value.toLowerCase();
        setSearchTerm(newSearchTerm);
    };
    // 2 - Label & publisher filters
    var _d = useState(false), filtersHaveChanged = _d[0], setFiltersHaveChanged = _d[1];
    var _e = useState({}), labelFilters = _e[0], setLabelFilters = _e[1];
    var _f = useState([]), labelFilterElements = _f[0], setLabelFilterElements = _f[1];
    var _g = useState([]), publisherNames = _g[0], setPublisherNames = _g[1];
    var _h = useState({}), publisherFilters = _h[0], setPublisherFilters = _h[1];
    var _j = useState([]), publisherFilterElements = _j[0], setPublisherFilterElements = _j[1];
    var filterSelection = function (labelOrPublisherString, filterType) {
        if (filterType === 'labels') {
            var newLabelFilters = __assign({}, labelFilters);
            newLabelFilters[labelOrPublisherString] = !newLabelFilters[labelOrPublisherString];
            setLabelFilters(newLabelFilters);
            setFiltersHaveChanged(true);
        }
        else {
            var newPublisherFilters = __assign({}, publisherFilters);
            newPublisherFilters[labelOrPublisherString] = !newPublisherFilters[labelOrPublisherString];
            setPublisherFilters(newPublisherFilters);
            setFiltersHaveChanged(true);
        }
    };
    useEffect(function () {
        var newLabelFilters = {};
        allMarketplaceLabels.map(function (label) {
            newLabelFilters[label] = false;
        });
        setLabelFilters(newLabelFilters);
    }, [allMarketplaceLabels]);
    useEffect(function () {
        var newLabelFilterElements = allMarketplaceLabels.map(function (label, index) {
            return (React__default.createElement(FormControlLabel, { className: labelFilters[label]
                    ? classes.selectedFilter
                    : classes.notSelectedFilter, control: React__default.createElement(Checkbox, { checked: labelFilters[label], name: label, onClick: function () { return filterSelection(label, 'labels'); } }), key: "labelFilterElement" + index, label: label }));
        });
        setLabelFilterElements(newLabelFilterElements);
    }, [labelFilters]);
    useEffect(function () {
        var newPublisherNames = [];
        var newPublisherFilters = {};
        allMarketplacePublishers.map(function (publisher) {
            var publisherName = publisher['name'];
            newPublisherNames.push(publisherName);
            newPublisherFilters[publisherName] = false;
        });
        setPublisherNames(newPublisherNames);
        setPublisherFilters(newPublisherFilters);
    }, [allMarketplacePublishers]);
    useEffect(function () {
        var newPublisherFilterElements = publisherNames.map(function (publisherName, index) {
            return (React__default.createElement(FormControlLabel, { className: publisherFilters[publisherName]
                    ? classes.selectedFilter
                    : classes.notSelectedFilter, control: React__default.createElement(Checkbox, { checked: publisherFilters[publisherName], name: publisherName, onClick: function () { return filterSelection(publisherName, 'publishers'); } }), key: "publisherFilterElement" + index, label: publisherName }));
        });
        setPublisherFilterElements(newPublisherFilterElements);
    }, [publisherFilters]);
    // 3 - Sort mode
    var _k = useState('appName'), sortMode = _k[0], setSortMode = _k[1]; // Either 'appName', 'publisherName', or 'lastUpdated'
    var sortModeSelection = function (clickEvent) {
        var selectedSortMode = clickEvent.target.value;
        setSortMode(selectedSortMode);
    };
    /* App filtering & sorting process */
    var _l = useState([]), filteredAppsList = _l[0], setFilteredAppsList = _l[1];
    useEffect(function () {
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
                            : t('appMarketplace.noDescriptionAvailableText'),
                    appID: filteredApp.id,
                    appLabels: filteredApp.labels,
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
        var labelFiltersForFilterAction = [];
        var publisherFiltersForFilterAction = [];
        var sortModeForFilterAction = sortMode === 'appName'
            ? 'app'
            : sortMode === 'publisherName'
                ? 'org'
                : 'updated';
        var orderModeForFilterAction = 'asc'; // TODO: Eventually create something that allows us to set the order mode
        allMarketplaceLabels.map(function (label) {
            if (labelFilters[label]) {
                labelFiltersForFilterAction.push(label);
            }
        });
        allMarketplacePublishers.map(function (publisher) {
            if (publisherFilters[publisher.name]) {
                publisherFiltersForFilterAction.push(publisher.id);
            }
        });
        getFilteredMarketplaceAppsAction({
            org_id: publisherFiltersForFilterAction,
            label: labelFiltersForFilterAction,
            sort_by: sortModeForFilterAction,
            order: orderModeForFilterAction,
        });
    };
    useEffect(function () {
        filterAndSortApps();
        setFiltersHaveChanged(false);
    }, [filtersHaveChanged, labelFilters, publisherFilters, sortMode]);
    useEffect(function () {
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
    var _m = useState(0), currentSlide = _m[0]; _m[1];
    return (React__default.createElement("main", null,
        React__default.createElement("header", { className: classes.appMarketHeader },
            React__default.createElement("div", { className: classes.appMarketHeaderContentsContainer },
                React__default.createElement("div", { className: classes.appMarketHeaderTitleAndSearchField },
                    React__default.createElement("h1", { className: classes.appMarketHeaderTitle },
                        React__default.createElement(React__default.Fragment, null,
                            t('appMarketplace.headerTitlePartOne'),
                            " "),
                        React__default.createElement(React__default.Fragment, null,
                            portalSettings.portalName,
                            " "),
                        React__default.createElement(React__default.Fragment, null, t('appMarketplace.headerTitlePartTwo'))),
                    React__default.createElement(TextField, { className: classes.appMarketHeaderSearchField, InputProps: {
                            endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                                React__default.createElement(SearchRoundedIcon, null))),
                        }, onChange: handleSearchTermChanges, placeholder: t('appMarketplace.searchForAppsTextField'), variant: "outlined" })),
                React__default.createElement("div", null,
                    React__default.createElement("img", { className: classes.appMarketHeaderImage, src: marketplace })))),
        React__default.createElement("section", { className: classes.appMarketFiltersAndAppsSection },
            React__default.createElement("div", { className: classes.appMarketFilters },
                React__default.createElement(FormControl, null,
                    React__default.createElement(FormLabel, null,
                        React__default.createElement("div", { className: classes.filterTitleContainer },
                            React__default.createElement(SortRoundedIcon, { className: classes.filterTitleIcon }),
                            React__default.createElement("p", { className: classes.filterTitleText }, t('appMarketplace.sortByTitle')))),
                    React__default.createElement(RadioGroup, { name: "sortMode", onChange: sortModeSelection, value: sortMode },
                        React__default.createElement(FormControlLabel, { className: sortMode === 'appName'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React__default.createElement(Radio, null), label: t('appMarketplace.sortModes.appName'), value: "appName" }),
                        React__default.createElement(FormControlLabel, { className: sortMode === 'publisherName'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React__default.createElement(Radio, null), label: t('appMarketplace.sortModes.publisherName'), value: "publisherName" }),
                        React__default.createElement(FormControlLabel, { className: sortMode === 'lastUpdated'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React__default.createElement(Radio, null), label: t('appMarketplace.sortModes.lastUpdated'), value: "lastUpdated" }))),
                React__default.createElement("hr", { className: classes.filterSeparator }),
                React__default.createElement(FormControl, null,
                    React__default.createElement(FormLabel, null,
                        React__default.createElement("div", { className: classes.filterTitleContainer },
                            React__default.createElement(FilterListRoundedIcon, { className: classes.filterTitleIcon }),
                            React__default.createElement("p", { className: classes.filterTitleText }, t('appMarketplace.filterByTitle')))),
                    React__default.createElement(Accordion, { className: classes.filterAccordionContainer },
                        React__default.createElement(AccordionSummary, { expandIcon: React__default.createElement(ExpandMoreRoundedIcon, { className: classes.filterAccordionIcon }) },
                            React__default.createElement(Typography, { className: classes.filterAccordionTitle }, t('appMarketplace.filterByModes.labels'))),
                        React__default.createElement(AccordionDetails, null,
                            React__default.createElement(FormGroup, null, labelFilterElements.length !== 0 ? (labelFilterElements) : (React__default.createElement("p", { className: classes.noFiltersAvailable }, t('appMarketplace.filterByModes.noLabels')))))),
                    React__default.createElement(Accordion, { className: classes.filterAccordionContainer },
                        React__default.createElement(AccordionSummary, { expandIcon: React__default.createElement(ExpandMoreRoundedIcon, { className: classes.filterAccordionIcon }) },
                            React__default.createElement(Typography, { className: classes.filterAccordionTitle }, t('appMarketplace.filterByModes.publishers'))),
                        React__default.createElement(AccordionDetails, null,
                            React__default.createElement(FormGroup, null, publisherFilterElements.length !== 0 ? (publisherFilterElements) : (React__default.createElement("p", { className: classes.noFiltersAvailable }, t('appMarketplace.filterByModes.noPublishers')))))))),
            React__default.createElement("div", { className: classes.appMarketApps },
                React__default.createElement("p", { className: classes.amountOfAppMarketAppsText },
                    React__default.createElement("span", null,
                        filteredAppsList.length > 0
                            ? filteredAppsList.length
                            : searchTerm.length === 0 &&
                                Object.values(labelFilters).includes(false) &&
                                Object.values(publisherFilters).includes(false)
                                ? allAppsList.length
                                : '0',
                        React__default.createElement(React__default.Fragment, null,
                            " ",
                            t('appMarketplace.amountOfAppsTextPartOne'),
                            " ")),
                    React__default.createElement(React__default.Fragment, null, t('appMarketplace.amountOfAppsTextPartTwo'))),
                retrievedAllMarketplaceApps &&
                    retrievedAllMarketplaceLabels &&
                    retrievedAllMarketplacePublishers ? (filteredAppsList.length > 0 ? (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", { className: classes.appCatalogContainer },
                        React__default.createElement(AppCatalog, { appsToDisplay: filteredAppsList })),
                    React__default.createElement(Pagination, { count: 5, disabled: true, shape: "rounded", variant: "outlined" }))) : Object.values(labelFilters).includes(false) &&
                    Object.values(publisherFilters).includes(false) &&
                    searchTerm.length === 0 ? (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", { className: classes.appCatalogContainer },
                        React__default.createElement(AppCatalog, { appsToDisplay: allAppsList })),
                    React__default.createElement(Pagination, { count: 5, disabled: true, shape: "rounded", variant: "outlined" }))) : (React__default.createElement("p", { className: classes.noAppsToDisplay }, t('appMarketplace.noAppsToDisplayText')))) : (React__default.createElement("p", { className: classes.noAppsToDisplay }, t('appMarketplace.retrievingAppsToDisplayText'))),
                allMarketplaceApps && (React__default.createElement("div", { className: classes.featuredAppsOuterContainer },
                    React__default.createElement("div", { className: classes.featuredAppsInnerContainer },
                        React__default.createElement("p", { className: classes.featuredAppsTitle }, t('appMarketplace.featuredAppsTitle')),
                        React__default.createElement("p", { className: classes.featuredAppsSubtitle }, t('appMarketplace.featuredAppsSubtitle')),
                        React__default.createElement("div", { className: classes.featuredAppCardsSlider },
                            React__default.createElement("div", { className: currentSlide === 1 || currentSlide === 2
                                    ? classes.visibleFeaturedAppCardsSliderButton
                                    : classes.invisibleFeaturedAppCardsSliderButton },
                                React__default.createElement(ChevronLeftRoundedIcon, null)),
                            React__default.createElement("div", { className: classes.featuredAppCard },
                                React__default.createElement(AmpStoriesRoundedIcon, { className: classes.featuredAppCardLogo }),
                                React__default.createElement("div", { className: classes.featuredAppCardInfo },
                                    React__default.createElement("p", null, "Featured app 1"),
                                    React__default.createElement("p", null, "Publisher A"))),
                            React__default.createElement("div", { className: classes.featuredAppCard },
                                React__default.createElement(AmpStoriesRoundedIcon, { className: classes.featuredAppCardLogo }),
                                React__default.createElement("div", { className: classes.featuredAppCardInfo },
                                    React__default.createElement("p", null, "Featured app 2"),
                                    React__default.createElement("p", null, "Publisher B"))),
                            React__default.createElement("div", { className: classes.featuredAppCard },
                                React__default.createElement(AmpStoriesRoundedIcon, { className: classes.featuredAppCardLogo }),
                                React__default.createElement("div", { className: classes.featuredAppCardInfo },
                                    React__default.createElement("p", null, "Featured app 3"),
                                    React__default.createElement("p", null, "Publisher C"))),
                            React__default.createElement("div", { className: currentSlide === 0 || currentSlide === 1
                                    ? classes.visibleFeaturedAppCardsSliderButton
                                    : classes.invisibleFeaturedAppCardsSliderButton },
                                React__default.createElement(ChevronRightRoundedIcon, null))))))))));
};

var mapStateToProps$1 = function (_a) {
    var marketplace = _a.marketplace;
    return ({
        allMarketplaceApps: marketplace.allMarketplaceApps,
        allMarketplaceLabels: marketplace.allMarketplaceLabels,
        allMarketplacePublishers: marketplace.allMarketplacePublishers,
        filteredMarketplaceApps: marketplace.filteredMarketplaceApps,
        retrievedAllMarketplaceApps: marketplace.retrievedAllMarketplaceApps,
        retrievedAllMarketplaceLabels: marketplace.retrievedAllMarketplaceLabels,
        retrievedAllMarketplacePublishers: marketplace.retrievedAllMarketplacePublishers,
    });
};
var mapDispatchToProps$1 = function (dispatch) {
    return bindActionCreators({
        getAllMarketplaceAppsAction: getAllMarketplaceAppsAction,
        getAllMarketplaceLabelsAction: getAllMarketplaceLabelsAction,
        getAllMarketplacePublishersAction: getAllMarketplacePublishersAction,
        getFilteredMarketplaceAppsAction: getFilteredMarketplaceAppsAction,
    }, dispatch);
};
var Marketplace = connect(mapStateToProps$1, mapDispatchToProps$1)(Marketplace$1);

var pagesConfig = [
    {
        auth: false,
        component: Marketplace,
        exact: true,
        path: '/marketplace',
    },
    {
        auth: false,
        component: AppDetails,
        exact: true,
        path: '/marketplace/app-details/:appID',
    },
];
var hookPages = function () {
    return pagesConfig;
};

var useStyles = makeStyles(function (theme) { return ({
    allSubbedMarketplaceAppsContainer: {
        display: 'flex',
    },
    applicationsContainerTitle: {
        color: theme.palette.text.primary,
        fontSize: '24px',
        fontWeight: 400,
        marginBottom: '24px',
        marginTop: '24px',
    },
    browseMarketplaceAppsButton: {
        backgroundColor: theme.palette.common.white,
        border: "1px solid " + theme.palette.grey['300'],
        borderRadius: "4px",
        color: theme.palette.text.hint + " !important",
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '40px',
        padding: '6px 21px',
        textDecoration: 'none',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.common.white,
        },
    },
    loadingMarketplaceApplicationCards: {
        color: theme.palette.text.secondary,
        fontSize: '16px',
        fontWeight: 200,
        marginBottom: '25px',
    },
    marketplaceAppCard: {
        height: '331.5px',
        marginBottom: '15px',
        marginRight: '15px',
        textDecoration: 'none',
        width: '285px',
        '&:hover': {
            cursor: 'pointer',
            filter: 'drop-shadow(0px 2.5px 2.5px rgba(0, 0, 0, 0.25))',
            '& > :first-child': {
                '& > :first-child': {
                    color: '#505F6F',
                },
            },
        },
    },
    marketplaceAppCardAvatar: {
        background: theme.palette.gradient.light,
        fontSize: '20px',
        fontWeight: 300,
        height: '120px',
        margin: '24px auto',
        textTransform: 'uppercase',
        width: '120px',
    },
    marketplaceAppCardBottomSection: {
        backgroundColor: '#F5F5F5',
        border: "1px solid " + theme.palette.grey['300'],
        borderRadius: theme.palette.dimensions.borderRadius,
        borderTop: 'none',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        padding: '12px 24px 24px 24px',
    },
    marketplaceAppCardDescription: {
        color: theme.palette.text.secondary,
        display: '-webkit-box',
        fontSize: '16px',
        fontWeight: 300,
        height: '44.5px',
        lineHeight: '22px',
        marginBottom: '12px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
    },
    marketplaceAppCardImage: {
        borderRadius: '50%',
        fontSize: '20px',
        fontWeight: 300,
        height: '120px',
        margin: '20px auto',
        width: '120px',
    },
    marketplaceAppCardLink: {
        textDecoration: 'none',
    },
    marketplaceAppCardTitle: {
        color: theme.palette.text.primary,
        fontSize: '22px',
        fontWeight: 400,
        marginBottom: '12px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    marketplaceAppCardTopSection: {
        backgroundColor: theme.palette.background.default,
        border: "1px solid " + theme.palette.grey['300'],
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        borderRadius: theme.palette.dimensions.borderRadius,
        textAlign: 'center',
    },
    marketplaceAppCardWithAvatarIcon: {
        color: theme.palette.grey['300'],
        fontSize: '30px',
        position: 'absolute',
        transform: 'translate(105px, 10px) rotate(45deg)',
    },
    marketplaceAppCardWithImageIcon: {
        color: theme.palette.grey['300'],
        fontSize: '30px',
        position: 'absolute',
        transform: 'translate(165px, 10px) rotate(45deg)',
    },
}); });

var SubbedMarketplaceAppCards$1 = function (_a) {
    var allSubbedMarketplaceApps = _a.allSubbedMarketplaceApps, getAllSubbedMarketplaceAppsAction = _a.getAllSubbedMarketplaceAppsAction, retrievedAllSubbedMarketplaceApps = _a.retrievedAllSubbedMarketplaceApps, userProfile = _a.userProfile;
    var classes = useStyles();
    var trans = useTranslation();
    function t(str) {
        return trans.t("extensions.Marketplace." + str);
    }
    useEffect(function () {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all information we presently have on some user's marketplace app subscriptions. */
        if (userProfile) {
            var userID = parseInt(userProfile.id);
            getAllSubbedMarketplaceAppsAction(userID);
        }
    }, [userProfile]);
    var stringChecker = function (providedString) {
        return providedString.length ? providedString : false;
    };
    var allMarketplaceAppNames = [];
    /* Generates an 'app card' for every marketplace app a user has subscribed to. */
    var subbedMarketplaceAppCardGenerator = function (subbedMarketplaceApps) {
        if (!retrievedAllSubbedMarketplaceApps) {
            return (React__default.createElement("p", { className: classes.loadingMarketplaceApplicationCards }, "Retrieving all subscribed Marketplace apps..."));
        }
        if (subbedMarketplaceApps.length === 0) {
            return (React__default.createElement("p", { className: classes.loadingMarketplaceApplicationCards }, t('appListing.noMarketplaceAppSubscriptions')));
        }
        var allSubbedMarketplaceAppCardsArray = subbedMarketplaceApps.map(function (subbedMarketplaceApp, index) {
            var appNameInitialsArray = subbedMarketplaceApp.name.split(' ');
            var appNameInitials = appNameInitialsArray.length >= 2
                ? "" + appNameInitialsArray[0][0] + appNameInitialsArray[1][0]
                : "" + appNameInitialsArray[0][0] + appNameInitialsArray[0][1];
            allMarketplaceAppNames = __spreadArray(__spreadArray([], allMarketplaceAppNames), [
                subbedMarketplaceApp.name,
            ]);
            return (React__default.createElement(Link, { className: classes.marketplaceAppCardLink, key: "marketplaceAppCardLink" + index, to: "/marketplace/app-details/" + subbedMarketplaceApp.id },
                React__default.createElement("div", { className: classes.marketplaceAppCard },
                    React__default.createElement("div", { className: classes.marketplaceAppCardTopSection },
                        React__default.createElement(HeightRoundedIcon, { className: subbedMarketplaceApp.logo !== ''
                                ? classes.marketplaceAppCardWithImageIcon
                                : classes.marketplaceAppCardWithAvatarIcon }),
                        subbedMarketplaceApp.logo !== '' ? (React__default.createElement("img", { className: classes.marketplaceAppCardImage, src: subbedMarketplaceApp.logo })) : (React__default.createElement(Avatar, { className: classes.marketplaceAppCardAvatar }, appNameInitials))),
                    React__default.createElement("div", { className: classes.marketplaceAppCardBottomSection },
                        React__default.createElement("p", { className: classes.marketplaceAppCardTitle }, subbedMarketplaceApp.name),
                        React__default.createElement("p", { className: classes.marketplaceAppCardDescription }, 
                        //stringChecker(subbedMarketplaceApp.shortDescription) ||
                        stringChecker(subbedMarketplaceApp.description) ||
                            t('appListing.noAppDescriptionProvided'))))));
        });
        return allSubbedMarketplaceAppCardsArray;
    };
    return (React__default.createElement("div", null,
        React__default.createElement("p", { className: classes.applicationsContainerTitle }, t('appListing.marketplaceAppsSectionTitle')),
        React__default.createElement(Button, { className: classes.browseMarketplaceAppsButton, href: "/marketplace" }, t('appListing.browseMarketplaceApps')),
        React__default.createElement("div", { className: classes.allSubbedMarketplaceAppsContainer }, subbedMarketplaceAppCardGenerator(allSubbedMarketplaceApps))));
};

var mapStateToProps = function (_a) {
    var marketplace = _a.marketplace, profile = _a.profile;
    return ({
        allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
        retrievedAllSubbedMarketplaceApps: marketplace.retrievedAllSubbedMarketplaceApps,
        userProfile: profile.profile.user,
    });
};
var mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        getAllSubbedMarketplaceAppsAction: getAllSubbedMarketplaceAppsAction,
    }, dispatch);
};
var SubbedMarketplaceAppCards = connect(mapStateToProps, mapDispatchToProps)(SubbedMarketplaceAppCards$1);

var _a;
var sections = (_a = {},
    // TODO: Fix the error ignored by the following ts-ignore
    // @ts-ignore
    _a['SUBBED_MARKETPLACE_APPS'] = SubbedMarketplaceAppCards,
    _a);
var hookSections = function (section, props) {
    var Component = sections[section];
    if (Component) {
        return React__default.createElement(Component, __assign({}, props));
    }
    return null;
};

var hooks = {
    menu: hookMenu,
    pages: hookPages,
    sections: hookSections,
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
		const osRelease = os.release().split('.');
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
exports.destroy = util.deprecate(
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
		tty.isatty(process.stderr.fd);
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
	return process.stderr.write(util.format(...args) + '\n');
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
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
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

var URL = url.URL;


var Writable = require$$0$1.Writable;



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
  this._currentUrl = url.format(this._options);

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
      url.parse(this._currentUrl).hostname;

    // Create the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug_1("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url.parse(redirectUrl);
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
          input = url.parse(urlStr);
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

      assert.equal(options.protocol, protocol, "protocol mismatch");
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
var followRedirects = wrap({ http: http, https: https });
var wrap_1 = wrap;
followRedirects.wrap = wrap_1;

var _args = [
	[
		"axios@0.21.1",
		"/Users/pedrocloudoki/Documents/Trabalho/API Suite Extensions/Marketplace/apisuite-marketplace-extension-ui"
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
var _where = "/Users/pedrocloudoki/Documents/Trabalho/API Suite Extensions/Marketplace/apisuite-marketplace-extension-ui";
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
    var parsed = url.parse(fullPath);
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
        var parsedProxyUrl = url.parse(proxyUrl);
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
      transport = isHttpsProxy ? https : http;
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
          stream = stream.pipe(zlib.createUnzip());

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
var API_URL = getApiUrl();
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
                getAllMarketplaceAppsActionUrl = API_URL + "/apps/public";
                return [4 /*yield*/, call(request, {
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
                    labels: marketplaceApp.labels,
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
                return [4 /*yield*/, put(getAllMarketplaceAppsActionSuccess(allMarketplaceApps.sort(function (appA, appB) { return appA.id - appB.id; })))];
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
                getAllMarketplaceLabelsActionUrl = API_URL + "/apps/public/labels";
                return [4 /*yield*/, call(request, {
                        url: getAllMarketplaceLabelsActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, put(getAllMarketplaceLabelsActionSuccess(response))];
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
                getAllMarketplacePublishersActionUrl = API_URL + "/organizations/publishers";
                return [4 /*yield*/, call(request, {
                        url: getAllMarketplacePublishersActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, put(getAllMarketplacePublishersActionSuccess(response))];
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
function getAllSubbedMarketplaceAppsActionSaga(action) {
    var getAllSubbedMarketplaceAppsActionUrl, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                getAllSubbedMarketplaceAppsActionUrl = "https://marketplace.develop.apisuite.io/users/" + action.userID + "/subscriptions";
                return [4 /*yield*/, call(request, {
                        url: getAllSubbedMarketplaceAppsActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log('getAllSubbedMarketplaceAppsActionSaga response', response);
                return [4 /*yield*/, put(getAllSubbedMarketplaceAppsActionSuccess(response.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log('Error fetching all subscribed marketplace apps');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function subscribeToMarketplaceAppActionSaga(action) {
    var subscribeToMarketplaceAppActionUrl, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                subscribeToMarketplaceAppActionUrl = "https://marketplace.develop.apisuite.io/users/" + action.userID + "/subscriptions/" + action.appID;
                return [4 /*yield*/, call(request, {
                        url: subscribeToMarketplaceAppActionUrl,
                        method: 'POST',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log('subscribeToMarketplaceAppActionSaga response', response);
                return [4 /*yield*/, put(subscribeToMarketplaceAppActionSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log('Error subscribing');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function unsubscribeToMarketplaceAppActionSaga(action) {
    var unsubscribeToMarketplaceAppActionUrl, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                unsubscribeToMarketplaceAppActionUrl = "https://marketplace.develop.apisuite.io/users/" + action.userID + "/subscriptions/" + action.appID;
                return [4 /*yield*/, call(request, {
                        url: unsubscribeToMarketplaceAppActionUrl,
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                console.log('unsubscribeToMarketplaceAppActionSaga response', response);
                return [4 /*yield*/, put(unsubscribeToMarketplaceAppActionSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log('Error unsubscribing');
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
                getFilteredMarketplaceAppsActionUrl = API_URL + "/apps/public";
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
                return [4 /*yield*/, call(request, {
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
                    labels: marketplaceApp.labels,
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
                return [4 /*yield*/, put(getFilteredMarketplaceAppsActionSuccess(filteredMarketplaceApps))];
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
function getAppDetailsActionSaga(action) {
    var getAppDetailsActionUrl, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                getAppDetailsActionUrl = API_URL + "/apps/public/" + action.appID;
                return [4 /*yield*/, call(request, {
                        url: getAppDetailsActionUrl,
                        method: 'GET',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, put(getAppDetailsActionSuccess(response))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                _a.sent();
                console.log("Error fetching the selected app's details");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, takeLatest(GET_ALL_MARKETPLACE_APPS_ACTION, getAllMarketplaceAppsActionSaga)];
            case 1:
                _a.sent();
                return [4 /*yield*/, takeLatest(GET_ALL_MARKETPLACE_LABELS_ACTION, getAllMarketplaceLabelsActionSaga)];
            case 2:
                _a.sent();
                return [4 /*yield*/, takeLatest(GET_ALL_MARKETPLACE_PUBLISHERS_ACTION, getAllMarketplacePublishersActionSaga)];
            case 3:
                _a.sent();
                return [4 /*yield*/, takeLatest(GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION, getAllSubbedMarketplaceAppsActionSaga)];
            case 4:
                _a.sent();
                return [4 /*yield*/, takeLatest(SUBSCRIBE_TO_MARKETPLACE_APP_ACTION, subscribeToMarketplaceAppActionSaga)];
            case 5:
                _a.sent();
                return [4 /*yield*/, takeLatest(UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION, unsubscribeToMarketplaceAppActionSaga)];
            case 6:
                _a.sent();
                return [4 /*yield*/, takeLatest(GET_FILTERED_MARKETPLACE_APPS_ACTION, getFilteredMarketplaceAppsActionSaga)];
            case 7:
                _a.sent();
                return [4 /*yield*/, takeLatest(GET_APP_DETAILS_ACTION, getAppDetailsActionSaga)];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var injectStuffIntoStore = function (coreStoreProps) {
    coreStoreProps.injectReducer('marketplace', reducer);
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

export default MarketplaceExtension;
//# sourceMappingURL=index.esm.js.map
