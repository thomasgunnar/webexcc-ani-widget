(() => {
    var e = {
            124: e => {
                window,
                e.exports = function(e) {
                    var t = {};

                    function n(i) {
                        if (t[i]) return t[i].exports;
                        var r = t[i] = {
                            i,
                            l: !1,
                            exports: {}
                        };
                        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, i) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: i
                        })
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var i = Object.create(null);
                        if (n.r(i), Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var r in e) n.d(i, r, function(t) {
                                return e[t]
                            }.bind(null, r));
                        return i
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.p = "/", n(n.s = 65)
                }([function(e, t, n) {
                    window,
                    e.exports = function(e) {
                        var t = {};

                        function n(i) {
                            if (t[i]) return t[i].exports;
                            var r = t[i] = {
                                i,
                                l: !1,
                                exports: {}
                            };
                            return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
                        }
                        return n.m = e, n.c = t, n.d = function(e, t, i) {
                            n.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: i
                            })
                        }, n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }, n.t = function(e, t) {
                            if (1 & t && (e = n(e)), 8 & t) return e;
                            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                            var i = Object.create(null);
                            if (n.r(i), Object.defineProperty(i, "default", {
                                    enumerable: !0,
                                    value: e
                                }), 2 & t && "string" != typeof e)
                                for (var r in e) n.d(i, r, function(t) {
                                    return e[t]
                                }.bind(null, r));
                            return i
                        }, n.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return n.d(t, "a", t), t
                        }, n.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, n.p = "/", n(n.s = 8)
                    }([function(e, t) {
                        e.exports = n(5)
                    }, function(e, t) {
                        e.exports = n(39)
                    }, function(e, t) {
                        e.exports = n(9)
                    }, function(e, t) {
                        e.exports = n(42)
                    }, function(e, t) {
                        e.exports = n(66)
                    }, function(e, t) {
                        e.exports = n(67)
                    }, function(e, t) {
                        e.exports = n(62)
                    }, function(e, t) {
                        e.exports = n(64)
                    }, function(e, t, n) {
                        "use strict";
                        n.r(t), n.d(t, "BrowserNotification", (function() {
                            return l
                        })), n.d(t, "createBrowserNotifications", (function() {
                            return f
                        })), n.d(t, "Decorator", (function() {
                            return p
                        })), n.d(t, "Err", (function() {
                            return d
                        })), n.d(t, "Evt", (function() {
                            return m
                        })), n.d(t, "createHttp", (function() {
                            return w
                        })), n.d(t, "I18N", (function() {
                            return E
                        })), n.d(t, "createLogger", (function() {
                            return u
                        })), n.d(t, "Logger", (function() {
                            return a
                        })), n.d(t, "createNotifications", (function() {
                            return M
                        })), n.d(t, "Notifications", (function() {
                            return A
                        })), n.d(t, "Signal", (function() {
                            return D
                        }));
                        var i = n(0),
                            r = n.n(i),
                            o = n(1);
                        const s = (...e) => e.map((e => "string" == typeof e ? e : JSON.stringify(e)));
                        var a;

                        function u(e) {
                            const t = new a.Service(e);
                            return a.POOL.addLogger(t), t
                        }! function(e) {
                            e.MAX_LOGS_SIZE = 1048576, e.LS_LOGS_KEY = "uuip-client-logs";
                            const t = /[\u0100-\uFFFF]/g;
                            let n;
                            ! function(e) {
                                e[e.Trace = 1] = "Trace", e[e.Debug = 2] = "Debug", e[e.Warn = 3] = "Warn", e[e.Error = 4] = "Error", e[e.Fatal = 5] = "Fatal"
                            }(n = e.Level || (e.Level = {})), e.Service = class {
                                constructor(e) {
                                    this.loggerEmitter = r()(), this.prefix = e
                                }
                                log(t, ...n) {
                                    const i = s(this.prefix ? ["" + this.prefix, ...n] : n),
                                        r = Date.now(),
                                        a = o.DateTime.fromMillis(r).toFormat("yyyy-LL-dd HH:mm:ss:SSS");
                                    switch (t) {
                                        case e.Level.Trace:
                                            console.info(a, ...i);
                                            break;
                                        case e.Level.Debug:
                                            console.log(a, ...i);
                                            break;
                                        case e.Level.Warn:
                                            console.warn(a, ...i);
                                            break;
                                        case e.Level.Error:
                                        case e.Level.Fatal:
                                            console.error(a, ...i);
                                            break;
                                        default:
                                            console.log(...i)
                                    }
                                    const u = {
                                        pfx: this.prefix,
                                        msgs: [...n],
                                        ts: r,
                                        lvl: t
                                    };
                                    this.emit("add", u)
                                }
                                info(...e) {
                                    this.log(n.Trace, ...e)
                                }
                                debug(...e) {
                                    this.log(n.Debug, ...e)
                                }
                                warn(...e) {
                                    this.log(n.Warn, ...e)
                                }
                                error(...e) {
                                    this.log(n.Error, ...e)
                                }
                                emit(e, ...t) {
                                    this.loggerEmitter.emit(e, ...t)
                                }
                                addEventListener(e, t) {
                                    return this.loggerEmitter.on(e, t), () => {
                                        this.removeEventListener(e, t)
                                    }
                                }
                                removeEventListener(e, t) {
                                    this.loggerEmitter.off(e, t)
                                }
                            };
                            class i {
                                constructor() {
                                    this.loggers = new Map, this.logsCollection = [], this.logsCollectionString = "", this.prefixedLogsCollections = {}, this.logRecordsSerializedLength = 0, this.onLoggerAddRecord = e => {
                                        this.addLogRecord(e), this.save()
                                    }, this.restore()
                                }
                                static getSerializedJsonLogRecordBytesSize(e = "") {
                                    const n = e.length;
                                    if (n) {
                                        const i = e.replace(t, "").length;
                                        return 1 * i + 2 * (n - i)
                                    }
                                    return n
                                }
                                get serializedJsonLogsBytesSize() {
                                    const e = this.logsCollectionString.split("<uuip-eol>").length;
                                    return 2 + this.logRecordsSerializedLength + 1 * (e - 1)
                                }
                                save() {
                                    window.sessionStorage.setItem(e.LS_LOGS_KEY, this.logsCollectionString)
                                }
                                restore() {
                                    try {
                                        const t = window.sessionStorage.getItem(e.LS_LOGS_KEY) || "";
                                        this.logsCollectionString = t, this.logRecordsSerializedLength += i.getSerializedJsonLogRecordBytesSize(this.logsCollectionString), this.restorePreFixedLogs()
                                    } catch (e) {
                                        console.warn("Logger failed read logs from sessionStorage: ", e)
                                    }
                                }
                                getLogObjectFromString() {
                                    try {
                                        return "" !== this.logsCollectionString ? JSON.parse(`[${this.logsCollectionString.split("<uuip-eol>").join(",")}]`) : []
                                    } catch (e) {
                                        console.log("Error parsing local storage data")
                                    }
                                }
                                restorePreFixedLogs() {
                                    const e = this.getLogObjectFromString();
                                    e && Array.isArray(e) && e.length > 0 && e.forEach((e => {
                                        this.addPreFixedLogs(e), this.removeOversized()
                                    }))
                                }
                                addPreFixedLogs(e) {
                                    this.prefixedLogsCollections[e.pfx] = this.prefixedLogsCollections[e.pfx] || new Set, this.prefixedLogsCollections[e.pfx].add(e)
                                }
                                removeOversized() {
                                    for (; this.serializedJsonLogsBytesSize > e.MAX_LOGS_SIZE && "" !== this.logsCollectionString;) this.removeLogRecord()
                                }
                                removeTextFromString(e, t, n) {
                                    return `${e.slice(0,t)}${e.slice(n+t)}`
                                }
                                addLogRecord(e) {
                                    try {
                                        const t = JSON.stringify(e),
                                            n = this.logsCollectionString;
                                        this.logsCollectionString = null == n ? void 0 : n.concat(`${""!==n.trim()?"<uuip-eol>":""}${t}`)
                                    } catch (t) {
                                        const n = JSON.stringify(e);
                                        this.logsCollectionString = n, console.warn("Logger failed read logs from sessionStorage: ", t)
                                    }
                                    this.logRecordsSerializedLength += i.getSerializedJsonLogRecordBytesSize(JSON.stringify(e)), this.addPreFixedLogs(e), this.removeOversized()
                                }
                                removeLogRecord() {
                                    if ("" !== this.logsCollectionString) {
                                        const e = this.logsCollectionString.indexOf("<uuip-eol>");
                                        if (-1 !== e) {
                                            const t = this.logsCollectionString.substring(0, e),
                                                n = e + "<uuip-eol>".length,
                                                r = this.removeTextFromString(this.logsCollectionString, 0, n);
                                            this.logsCollectionString = r, this.logRecordsSerializedLength -= i.getSerializedJsonLogRecordBytesSize(t);
                                            try {
                                                const e = JSON.parse(t);
                                                this.prefixedLogsCollections[e.pfx] && this.prefixedLogsCollections[e.pfx].forEach((t => {
                                                    t.ts === e.ts && this.prefixedLogsCollections[e.pfx].delete(t)
                                                }))
                                            } catch (e) {
                                                console.warn("Logger failed to read/parse the first logs from sessionStorage: ", e)
                                            }
                                        }
                                    }
                                }
                                removePreFixedLogs(e) {
                                    const t = this.getLogObjectFromString();
                                    e.forEach((e => {
                                        const n = t.findIndex((t => t.pfx === e.pfx)); - 1 !== n && (t.splice(n, 1), this.logRecordsSerializedLength -= i.getSerializedJsonLogRecordBytesSize(JSON.stringify(e)), this.prefixedLogsCollections[e.pfx] && this.prefixedLogsCollections[e.pfx].has(e) && this.prefixedLogsCollections[e.pfx].delete(e))
                                    })), this.logsCollectionString = t.map((e => JSON.stringify(e))).join("<uuip-eol>")
                                }
                                static getLogRecordReadable(e) {
                                    if (e.ts) return {
                                        prefix: e.pfx,
                                        messages: e.msgs,
                                        timestamp: o.DateTime.fromMillis(e.ts).toFormat("yyyy-LL-dd HH:mm:ss:SSS"),
                                        level: n[e.lvl]
                                    }
                                }
                                static getLogsReadableJson(e) {
                                    const t = e => e.map((e => i.getLogRecordReadable(e)));
                                    return JSON.stringify(Array.isArray(e) ? t(e) : Object.keys(e).reduce(((n, i) => (n[i] = t(e[i]), n)), {}), null, 2)
                                }
                                static getLogsReadableText(e) {
                                    const t = e => e.reduce(((e, t) => {
                                        const n = i.getLogRecordReadable(t);
                                        return n && (e += n.timestamp + " " + n.prefix + " " + n.level + " " + s(n.messages).join(" ") + " \r\n"), e
                                    }), "");
                                    return Array.isArray(e) ? t(e) : Object.keys(e).reduce(((n, i) => (n += `[SERVICE "${i}" LOGS]: `) + t(e[i])), "")
                                }
                                static getLogsUrl(e) {
                                    return "data:text/plain;charset=utf-8," + encodeURIComponent(e)
                                }
                                static browserDownload(e, t) {
                                    try {
                                        if (document && document.createElement) {
                                            const n = document.createElement("a");
                                            n.setAttribute("href", e), n.setAttribute("download", t), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
                                        } else console.warn("Browser is not supported to download logs")
                                    } catch (e) {}
                                }
                                addLogger(e) {
                                    this.loggers.set(e.prefix, e), e.removeEventListener("add", this.onLoggerAddRecord), e.addEventListener("add", this.onLoggerAddRecord)
                                }
                                getAllLogsJsonUrl() {
                                    return i.getLogsUrl(i.getLogsReadableJson(this.getLogObjectFromString()))
                                }
                                getAllPrefixedLogsJsonUrl() {
                                    return i.getLogsUrl(i.getLogsReadableJson(this.getAllPrefixedLogsCollections()))
                                }
                                getPrefixedLogsJsonUrl(e) {
                                    return i.getLogsUrl(i.getLogsReadableJson(this.getPrefixedLogsCollection(e)))
                                }
                                getAllLogsTextUrl() {
                                    return i.getLogsUrl(i.getLogsReadableText(this.getLogObjectFromString()))
                                }
                                getPrefixedLogsTextUrl(e) {
                                    return i.getLogsUrl(i.getLogsReadableText(this.getPrefixedLogsCollection(e)))
                                }
                                browserDownloadAllLogsJson() {
                                    i.browserDownload(this.getAllLogsJsonUrl(), new Date + "_all_logs.json")
                                }
                                browserDownloadAllPrefixedLogsJson() {
                                    i.browserDownload(this.getAllPrefixedLogsJsonUrl(), new Date + "_all_prefixed_logs.json")
                                }
                                browserDownloadPrefixedLogsJson(e) {
                                    i.browserDownload(this.getPrefixedLogsJsonUrl(e), `${new Date}_${e}_logs.json`)
                                }
                                browserDownloadAllLogsText() {
                                    i.browserDownload(this.getAllLogsTextUrl(), new Date + "_all_logs.log")
                                }
                                browserDownloadPrefixedLogsText(e) {
                                    i.browserDownload(this.getPrefixedLogsTextUrl(e), `${new Date}_${e}_logs.log`)
                                }
                                cleanupAllLogs() {
                                    this.logsCollection.length = 0, this.logRecordsSerializedLength = 0, this.logsCollectionString = "", Object.keys(this.prefixedLogsCollections).forEach((e => this.prefixedLogsCollections[e] = new Set)), this.save()
                                }
                                cleanupPrefixedLogs(e) {
                                    const t = this.getPrefixedLogsCollection(e);
                                    this.removePreFixedLogs(t), this.prefixedLogsCollections[e] = new Set, this.save()
                                }
                                getAllPrefixedLogsCollections() {
                                    return Object.keys(this.prefixedLogsCollections).reduce(((e, t) => (e[t] = this.getPrefixedLogsCollection(t), e)), {})
                                }
                                getPrefixedLogsCollection(e) {
                                    return Array.from(this.prefixedLogsCollections[e] || new Set)
                                }
                            }
                            e.ServicesPool = i, e.POOL = new e.ServicesPool
                        }(a || (a = {}));
                        const c = u("unified-ui-platform-sdk");
                        var l, d;

                        function f(e) {
                            return new l.Service(e)
                        }

                        function h(e, t) {
                            if (e.descriptor = e.descriptor || Object.getOwnPropertyDescriptor(e.target, e.key), "function" != typeof e.descriptor.value) return console.warn(e.key, "Decorator must be used on function"), e.descriptor;
                            const n = e.descriptor.value,
                                i = e.target.constructor.name;
                            return e.descriptor.value = function() {
                                const e = [];
                                for (let t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return t.call(this, n, e, i)
                            }, e.descriptor
                        }! function(e) {
                            class t {
                                constructor(e) {
                                    this.defaultOptions = e || {}
                                }
                                static get isBrowserNotificationPromiseSupported() {
                                    try {
                                        window.Notification.requestPermission().then()
                                    } catch (e) {
                                        return !1
                                    }
                                    return !0
                                }
                                get isBrowserNotificationSupported() {
                                    return !!("Notification" in window)
                                }
                                get isBrowserNotificationIconSupported() {
                                    return this.isBrowserNotificationSupported && "icon" in window.Notification.prototype
                                }
                                get isBrowserNotificationImageSupported() {
                                    return this.isBrowserNotificationSupported && "image" in window.Notification.prototype
                                }
                                get isBrowserNotificationBadgeSupported() {
                                    return this.isBrowserNotificationSupported && "badge" in window.Notification.prototype
                                }
                                get isPermissionGranted() {
                                    return "granted" === window.Notification.permission
                                }
                                get isPermissionDenied() {
                                    return "denied" === window.Notification.permission
                                }
                                get isPermissionUnknown() {
                                    return !this.isPermissionGranted && !this.isPermissionDenied
                                }
                                requestNotificationUserPermission() {
                                    return function(e, t, n, i) {
                                        return new(n || (n = Promise))((function(t, r) {
                                            function o(e) {
                                                try {
                                                    a(i.next(e))
                                                } catch (e) {
                                                    r(e)
                                                }
                                            }

                                            function s(e) {
                                                try {
                                                    a(i.throw(e))
                                                } catch (e) {
                                                    r(e)
                                                }
                                            }

                                            function a(e) {
                                                var i;
                                                e.done ? t(e.value) : (i = e.value, i instanceof n ? i : new n((function(e) {
                                                    e(i)
                                                }))).then(o, s)
                                            }
                                            a((i = i.apply(e, [])).next())
                                        }))
                                    }(this, 0, void 0, (function*() {
                                        this.isBrowserNotificationSupported ? t.isBrowserNotificationPromiseSupported ? yield window.Notification.requestPermission(): yield new Promise((e => window.Notification.requestPermission((t => e(t))))): c.warn("Browser notification is not supported...")
                                    }))
                                }
                                fire(e, t) {
                                    return new window.Notification(e, Object.assign(Object.assign({}, this.defaultOptions), t || {}))
                                }
                            }
                            e.Service = t
                        }(l || (l = {})),
                        function(e) {
                            class t extends Error {
                                constructor(e, t) {
                                    super(), this.isErr = "yes", this.id = e, this.stack = (new Error).stack, "string" == typeof t ? this.message = t : t instanceof Error ? (this.message = t.message, this.name = t.name) : this.message = ""
                                }
                            }
                            e.Message = t;
                            class n extends Error {
                                constructor(e, t) {
                                    super(), this.isErr = "yes", this.id = e, this.stack = (new Error).stack, this.details = t
                                }
                            }
                            e.Details = n
                        }(d || (d = {}));
                        var p, g, v = function(e, t, n, i) {
                            return new(n || (n = Promise))((function(r, o) {
                                function s(e) {
                                    try {
                                        u(i.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        u(i.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    var t;
                                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(s, a)
                                }
                                u((i = i.apply(e, t || [])).next())
                            }))
                        };
                        (g = p || (p = {})).Debounce = function(e = 250) {
                            return function(t, n, i) {
                                let r;
                                return h({
                                    target: t,
                                    key: n,
                                    descriptor: i
                                }, (function(t, n) {
                                    clearTimeout(r), r = window.setTimeout((() => {
                                        clearTimeout(r), t.apply(this, n)
                                    }), e)
                                }))
                            }
                        }, g.Evt = function() {
                            return (e, t) => {
                                const n = {
                                    get() {
                                        return new m(this, void 0 !== t ? t : e.key)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                };
                                return void 0 !== t ? Object.defineProperty(e, t, n) : {
                                    kind: "method",
                                    placement: "prototype",
                                    key: e.key,
                                    descriptor: n
                                }
                            }
                        }, g.Exec = function(e, t = !0) {
                            return function(n, i, r) {
                                return h({
                                    target: n,
                                    key: i,
                                    descriptor: r
                                }, (function(n, r) {
                                    return function(e, t, n, i) {
                                        return new(n || (n = Promise))((function(t, r) {
                                            function o(e) {
                                                try {
                                                    a(i.next(e))
                                                } catch (e) {
                                                    r(e)
                                                }
                                            }

                                            function s(e) {
                                                try {
                                                    a(i.throw(e))
                                                } catch (e) {
                                                    r(e)
                                                }
                                            }

                                            function a(e) {
                                                var i;
                                                e.done ? t(e.value) : (i = e.value, i instanceof n ? i : new n((function(e) {
                                                    e(i)
                                                }))).then(o, s)
                                            }
                                            a((i = i.apply(e, [])).next())
                                        }))
                                    }(this, 0, void 0, (function*() {
                                        const o = "_" + i + "_exec_flag";
                                        if (t && this[o]) return void console.log("PREVENTING DOUBLE EXECUTION");
                                        const s = t => {
                                            if (this[o] = t, "function" == typeof e) e.call(this, {
                                                isExec: t,
                                                ctx: this
                                            });
                                            else {
                                                const n = e;
                                                t ? n.before && n.before.call(this, this) : n.after && n.after.call(this, this)
                                            }
                                        };
                                        s(!0);
                                        const a = n.apply(this, r);
                                        return a instanceof Promise ? a.then((() => s(!1))).catch((() => s(!1))) : (console.warn("Must be async function to use [@Executing] decorator"), s(!1)), a
                                    }))
                                }))
                            }
                        }, g.Handle = function(e) {
                            return function(t, n, i) {
                                return h({
                                    target: t,
                                    key: n,
                                    descriptor: i
                                }, (function(t, i, r) {
                                    return v(this, void 0, void 0, (function*() {
                                        const o = this,
                                            s = t => v(this, void 0, void 0, (function*() {
                                                t.id && "string" == typeof t.id && "yes" === t.isErr || ("string" == typeof t || t instanceof Error ? t = new d.Message("system", t) : (console.warn("Err must be 'string' or 'new Error()' instance"), t = new d.Message("system", "")));
                                                const i = t;
                                                i.ctx = o;
                                                const s = `Error] ${r}.${n} [${i.id}]: ${i.message}`;
                                                if ("function" == typeof e) {
                                                    const t = e;
                                                    console.log("[Handled" + s);
                                                    const n = t.call(o, i);
                                                    n instanceof Promise && (yield n)
                                                } else {
                                                    const t = e;
                                                    if (t[i.id]) {
                                                        console.log("[Handled" + s);
                                                        const e = t[i.id].call(o, i);
                                                        e instanceof Promise && (yield e)
                                                    } else if (t.handle) {
                                                        console.log("[Handled" + s);
                                                        const e = t.handle.call(o, i);
                                                        e instanceof Promise && (yield e)
                                                    } else console.warn("[Unhandled " + s);
                                                    if (t.fallback) {
                                                        const e = t.fallback.call(o, i);
                                                        e instanceof Promise && (yield e)
                                                    }
                                                }
                                            }));
                                        try {
                                            const e = t.apply(o, i);
                                            return e instanceof Promise ? new Promise((t => {
                                                e.then(t).catch((e => v(this, void 0, void 0, (function*() {
                                                    yield s(e), t(void 0)
                                                }))))
                                            })) : e
                                        } catch (e) {
                                            return void(yield s(e))
                                        }
                                    }))
                                }))
                            }
                        }, g.Once = function() {
                            return function(e, t, n) {
                                return h({
                                    target: e,
                                    key: t,
                                    descriptor: n
                                }, (function(e, n) {
                                    const i = "_" + t + "_once_flag";
                                    if (!this[i]) return this[i] = !0, e.call(this, n)
                                }))
                            }
                        }, g.Throttle = function(e = 1e3 / 60) {
                            return function(t, n, i) {
                                let r, o = Date.now();
                                return h({
                                    target: t,
                                    key: n,
                                    descriptor: i
                                }, (function(t, n) {
                                    const i = (...n) => {
                                        const s = Date.now();
                                        window.clearTimeout(r), !o || s - o >= e ? (o = s, t.apply(this, n)) : r = window.setTimeout((() => i(...n)), e - (s - o))
                                    };
                                    i(...n)
                                }))
                            }
                        };
                        class m {
                            constructor(e, t) {
                                this.target = e, this.eventName = t
                            }
                            emit(e, t = {
                                bubbles: !0,
                                composed: !0,
                                cancelable: !1
                            }) {
                                this.target.dispatchEvent(new CustomEvent(this.eventName, Object.assign({
                                    detail: e
                                }, t)))
                            }
                        }
                        var y = n(3),
                            b = n.n(y),
                            S = n(4);

                        function w(e) {
                            const t = b.a.create();
                            return t.accessToken = e, t.interceptors.request.use((e => {
                                if (!e.headers.Authorization && t.accessToken && (e.headers.Authorization = "Bearer " + t.accessToken), !e.headers.TrackingID) {
                                    const t = Object(S.v1)();
                                    e.headers.TrackingID = `uuip_${t}_1.0:1.0`
                                }
                                return e.headers["Content-Type"] || (e.headers["Content-Type"] = "application/json"), e
                            })), t
                        }
                        var E, k, O = n(5),
                            x = n.n(O),
                            T = n(6),
                            C = n.n(T),
                            L = n(7),
                            I = n.n(L);
                        (k = E || (E = {})).createService = e => {
                            const t = x.a.createInstance();
                            {
                                const n = e && e.backend ? e.backend : new C.a;
                                t.use(n)
                            } {
                                const n = e && e.languageDetector ? e.languageDetector : new I.a;
                                t.use(n)
                            }
                            return e && e.logger && t.use({
                                log: "log" in e.logger ? e.logger.log : e.logger.info,
                                warn: e.logger.warn,
                                error: e.logger.error,
                                type: "logger"
                            }), t
                        }, k.mergeServiceInitOptions = (...e) => Object.assign.call(null, {}, ...e), k.createMixin = e => {
                            const t = "i18n" in e ? e.i18n : k.createService(),
                                n = "i18nInitOptions" in e ? e.i18nInitOptions : null;
                            n || c.info("i18n mixin instance waiting service initialization outside...");
                            let i = !1;
                            return e => class extends e {
                                constructor() {
                                    super(...arguments), this.onI18NInitialized = e => this.requestUpdate(), this.onI18NLanguageChanged = e => this.requestUpdate()
                                }
                                connectedCallback() {
                                    super.connectedCallback && super.connectedCallback(), t.on("initialized", this.onI18NInitialized), t.on("languageChanged", this.onI18NLanguageChanged), t.isInitialized || i || !n || (i = !0, t.init(n).finally((() => i = !1)))
                                }
                                disconnectedCallback() {
                                    t.off("initialized", this.onI18NInitialized), t.off("languageChanged", this.onI18NLanguageChanged), super.disconnectedCallback && super.disconnectedCallback()
                                }
                                t(...e) {
                                    return t.t(...e)
                                }
                            }
                        };
                        var A, D, N = n(2),
                            R = n.n(N);

                        function M(e = {}) {
                            const t = new A.Service;
                            return t.updateConfig(e), t
                        }! function(e) {
                            let t, n;
                            ! function(e) {
                                let t, n, i, r, o, s, a, u;
                                ! function(e) {
                                    e.Info = "info", e.Warn = "warn", e.Error = "error", e.Success = "success", e.Chat = "chat", e.Default = "default"
                                }(t = e.Type || (e.Type = {})), e.TYPES = Object.values(t),
                                    function(e) {
                                        e.Silent = "silent", e.AutoDismiss = "autodismiss", e.Acknowledge = "acknowledge"
                                    }(n = e.Mode || (e.Mode = {})), e.MODES = Object.values(n),
                                    function(e) {
                                        e.Added = "added", e.Pended = "pended", e.Activated = "activated", e.Deactivated = "deactivated", e.Removed = "removed"
                                    }(i = e.Status || (e.Status = {})), e.StatusWeight = {
                                        [i.Added]: 0,
                                        [i.Pended]: 1,
                                        [i.Activated]: 2,
                                        [i.Deactivated]: 3,
                                        [i.Removed]: 4
                                    }, e.STATUSES = Object.values(i),
                                    function(e) {
                                        e.User = "user_add"
                                    }(r = e.AddEventReason || (e.AddEventReason = {})),
                                    function(e) {
                                        e.ServiceAutoPropagate = "service_auto_propagate_pending", e.ServiceAutoDismiss = "service_autodismiss_pending", e.UserSilent = "user_silent_pending"
                                    }(o = e.PendingEventReason || (e.PendingEventReason = {})),
                                    function(e) {
                                        e.ServiceAutoPropagate = "service_auto_propagate_activate"
                                    }(s = e.ActivateEventReason || (e.ActivateEventReason = {})),
                                    function(e) {
                                        e.UserNegative = "user_negative_deactivate", e.UserPositive = "user_positive_deactivate", e.UserNeutral = "user_neutral_deactivate"
                                    }(a = e.DeactivateEventReason || (e.DeactivateEventReason = {})),
                                    function(e) {
                                        e.User = "user_remove"
                                    }(u = e.RemoveEventReason || (e.RemoveEventReason = {}))
                            }(t = e.ItemMeta || (e.ItemMeta = {})),
                            function(e) {
                                e.STATUS_EVENTS = ["add", "pending", "activate", "deactivate", "remove"], e.STATUS_EVENT_MAP = {
                                    add: t.Status.Added,
                                    pending: t.Status.Pended,
                                    activate: t.Status.Activated,
                                    deactivate: t.Status.Deactivated,
                                    remove: t.Status.Removed
                                }, e.DISABLED_ITEM_MODE = {
                                    [t.Mode.Silent]: !1,
                                    [t.Mode.AutoDismiss]: !1,
                                    [t.Mode.Acknowledge]: !1
                                }, e.ACTIVATED_ITEM_MODE_LIMIT = {
                                    [t.Mode.Silent]: 0,
                                    [t.Mode.AutoDismiss]: 10,
                                    [t.Mode.Acknowledge]: 1
                                }, e.AUTO_DISMISS_TIMEOUT = 5e3
                            }(n = e.ServiceMeta || (e.ServiceMeta = {}));
                            class i {
                                constructor() {
                                    this.hubEmitter = r()()
                                }
                                emit(e, ...t) {
                                    this.hubEmitter.emit(e, ...t)
                                }
                                addEventListener(e, t) {
                                    this.hubEmitter.on(e, t)
                                }
                                addOnceEventListener(e, t) {
                                    this.hubEmitter.once(e, t)
                                }
                                removeEventListener(e, t) {
                                    this.hubEmitter.off(e, t)
                                }
                                removeAllEventListeners() {
                                    R()(this.hubEmitter)
                                }
                            }
                            e.Item = class {
                                constructor(e, n) {
                                    this._serviceHubSubscriptions = [], this._itemEmitter = r()();
                                    const {
                                        type: i,
                                        mode: s,
                                        title: a,
                                        data: u,
                                        timestamp: c
                                    } = e.data;
                                    this.type = i, this.title = a, this.data = u, this._mode = s, this.timestamp = c || (new Date).toISOString(), this.datetime = o.DateTime.fromISO(this.timestamp).toLocaleString(o.DateTime.DATETIME_SHORT_WITH_SECONDS), this.options = Object.freeze(this.validateAuxOptions(e.options || {})), n && (this._serviceHubAdapter = n, this._status = t.Status.Added, this._reason = t.AddEventReason.User, this.bindItemHubListeners())
                                }
                                get status() {
                                    return this._status
                                }
                                get reason() {
                                    return this._reason
                                }
                                get mode() {
                                    return this._mode
                                }
                                validateAuxOptions(e) {
                                    let n = {};
                                    return e && void 0 !== e.AUTO_DISMISS_TIMEOUT && this.mode === t.Mode.AutoDismiss && (n = Object.assign(Object.assign({}, n), {
                                        AUTO_DISMISS_TIMEOUT: e.AUTO_DISMISS_TIMEOUT
                                    })), n
                                }
                                bindItemHubListeners() {
                                    if (this._serviceHubAdapter) {
                                        {
                                            const e = (e, n, i) => {
                                                this.timestamp in e && (this._status = n, this._reason = i, n === t.Status.Removed && (this.unbindItemHubListeners(), this.removeAllEventListeners()), this.emit("statusUpdate", n, i))
                                            };
                                            this._serviceHubAdapter.addEventListener("statusServiceUpdateResponse", e);
                                            const n = () => {
                                                var t;
                                                null === (t = this._serviceHubAdapter) || void 0 === t || t.removeEventListener("statusServiceUpdateResponse", e)
                                            };
                                            this._serviceHubSubscriptions.push(n)
                                        } {
                                            const e = (e, t) => {
                                                this.timestamp in e && (this._mode = t, this.emit("modeUpdate", t))
                                            };
                                            this._serviceHubAdapter.addEventListener("modeStatusUpdateResponse", e);
                                            const t = () => {
                                                var t;
                                                null === (t = this._serviceHubAdapter) || void 0 === t || t.removeEventListener("modeStatusUpdateResponse", e)
                                            };
                                            this._serviceHubSubscriptions.push(t)
                                        }
                                    }
                                }
                                unbindItemHubListeners() {
                                    this._serviceHubSubscriptions && (this._serviceHubSubscriptions.forEach((e => e())), this._serviceHubSubscriptions.length = 0)
                                }
                                deactivate(e) {
                                    this._status && t.StatusWeight[this._status] < t.StatusWeight[t.Status.Deactivated] ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, t.Status.Deactivated, e) : c.warn("Service hub adapter is not initialized for this notification item instance: ", this) : c.warn(`Notification should have "${t.Status.Pended}" or "${t.Status.Activated}" status to be able change status to "${t.Status.Deactivated}".Current notification status is "${this._status}". Ignoring this change`)
                                }
                                pending() {
                                    this._status === t.Status.Activated || this.mode !== t.Mode.Silent ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, t.Status.Pended, t.PendingEventReason.UserSilent) : c.warn("Service hub adapter is not initialized for this notification item instance: ", this) : c.warn(`Notification should have "${t.Status.Activated}" status or not "${t.Mode.Silent}" mode, to be able change status to "${t.Status.Pended}" and mode to "${t.Mode.Silent}".Current notification status is "${this._status}" and mode is "${this.mode}". Ignoring this change`)
                                }
                                emit(e, ...t) {
                                    this._itemEmitter.emit(e, ...t)
                                }
                                addEventListener(e, t) {
                                    this._itemEmitter.on(e, t)
                                }
                                addOnceEventListener(e, t) {
                                    this._itemEmitter.once(e, t)
                                }
                                removeEventListener(e, t) {
                                    this._itemEmitter.off(e, t)
                                }
                                removeAllEventListeners() {
                                    R()(this._itemEmitter)
                                }
                            };
                            const s = (e, t, n = (() => 0)) => [...e, ...t].sort(n),
                                a = (e, t) => e.reduce(((e, n) => (-1 === t.indexOf(n) && e.push(n), e)), []);
                            class u {
                                constructor() {
                                    this.emitter = r()(), this.map = {}, this.status = u.createStatus(), this.serviceConfig = {
                                        DISABLED_ITEM_MODE: Object.assign({}, n.DISABLED_ITEM_MODE),
                                        ACTIVATED_ITEM_MODE_LIMIT: Object.assign({}, n.ACTIVATED_ITEM_MODE_LIMIT),
                                        AUTO_DISMISS_TIMEOUT: n.AUTO_DISMISS_TIMEOUT
                                    }, this.activeAutoDismissTimeoutRefs = {}, this.serviceHubAdapter = new i, this.bindServiceHubEvents()
                                }
                                static mergeConfig(e, ...t) {
                                    if (!t.length) return e;
                                    const n = t.shift(),
                                        i = e => e && "object" == typeof e && !Array.isArray(e);
                                    if (i(e) && i(n))
                                        for (const t in n) i(n[t]) ? (e[t] || Object.assign(e, {
                                            [t]: {}
                                        }), this.mergeConfig(e[t], n[t])) : Object.assign(e, {
                                            [t]: n[t]
                                        });
                                    return this.mergeConfig(e, ...t)
                                }
                                static createStatus() {
                                    return {
                                        [t.Status.Added]: this.createStatusHolderCollection(),
                                        [t.Status.Pended]: this.createStatusHolderCollection(),
                                        [t.Status.Activated]: this.createStatusHolderCollection(),
                                        [t.Status.Deactivated]: this.createStatusHolderCollection(),
                                        [t.Status.Removed]: this.createStatusHolderCollection()
                                    }
                                }
                                static createStatusHolderCollection() {
                                    return Object.assign([], Object.assign(Object.assign({
                                        ids: []
                                    }, this.createStatusHolderSubCollections(t.MODES)), this.createStatusHolderSubCollections(t.TYPES)))
                                }
                                static createStatusHolderSubCollections(e) {
                                    return Object.assign({}, e.reduce(((e, t) => (e[t] = [], e)), {}))
                                }
                                updateNotificationsCollections() {
                                    const e = u.createStatus();
                                    this.status.added.ids.forEach((n => {
                                        const i = this.map[n];
                                        t.STATUSES.forEach((t => {
                                            -1 !== this.status[t].ids.indexOf(i.timestamp) && (e[t].push(i), e[t].ids.push(n), e[t][i.mode].push(i), e[t][i.type].push(i))
                                        }))
                                    })), this.status = e
                                }
                                setAutoDismiss(e, n = (() => {})) {
                                    this.prepareUpdateNotifications(e).forEach((e => {
                                        var i;
                                        if (e.mode === t.Mode.AutoDismiss) {
                                            const t = () => n(e);
                                            this.activeAutoDismissTimeoutRefs[e.timestamp] = window.setTimeout(t, null !== (i = e.options.AUTO_DISMISS_TIMEOUT) && void 0 !== i ? i : this.serviceConfig.AUTO_DISMISS_TIMEOUT)
                                        }
                                    }))
                                }
                                removeAutoDismiss(e, t = (() => {})) {
                                    this.prepareUpdateNotifications(e).forEach((e => {
                                        e.timestamp in this.activeAutoDismissTimeoutRefs && (t(e), window.clearTimeout(this.activeAutoDismissTimeoutRefs[e.timestamp]), delete this.activeAutoDismissTimeoutRefs[e.timestamp])
                                    }))
                                }
                                update(e, t, n) {
                                    const i = Array.isArray(n) ? n : [n];
                                    if (i.length) {
                                        const n = i.map((e => e.timestamp));
                                        switch (e) {
                                            case "add":
                                                i.forEach((e => this.map[e.timestamp] = e)), this.status.added.ids = s(this.status.added.ids, n, u.sortTimestampsFn);
                                                break;
                                            case "pending":
                                                this.status.pended.ids = s(this.status.pended.ids, n, u.sortTimestampsFn), this.status.activated.ids = a(this.status.activated.ids, n), this.status.deactivated.ids = a(this.status.deactivated.ids, n);
                                                break;
                                            case "activate":
                                                this.status.pended.ids = a(this.status.pended.ids, n), this.status.activated.ids = s(this.status.activated.ids, n, u.sortTimestampsFn), this.status.deactivated.ids = a(this.status.deactivated.ids, n);
                                                break;
                                            case "deactivate":
                                                this.status.pended.ids = a(this.status.pended.ids, n), this.status.activated.ids = a(this.status.activated.ids, n), this.status.deactivated.ids = s(this.status.deactivated.ids, n, u.sortTimestampsFn);
                                                break;
                                            case "remove":
                                                this.status.pended.ids = a(this.status.pended.ids, n), this.status.activated.ids = a(this.status.activated.ids, n), this.status.deactivated.ids = a(this.status.deactivated.ids, n), this.status.added.ids = a(this.status.added.ids, n), this.status.removed.ids = s(this.status.removed.ids, n, u.sortTimestampsFn), n.forEach((e => delete this.map[e]))
                                        }
                                        this.updateNotificationsCollections(), this.emit(e, i, t), this.propagate(e, t, i)
                                    }
                                }
                                propagate(e, n, i) {
                                    const r = Array.isArray(i) ? i : [i];
                                    if (r.length) switch (e) {
                                        case "add":
                                            this.update("pending", t.PendingEventReason.ServiceAutoPropagate, r);
                                            break;
                                        case "pending":
                                        case "deactivate":
                                            r.forEach((e => {
                                                this.removeAutoDismiss(e)
                                            })), this.update("activate", t.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                                            break;
                                        case "activate":
                                            r.forEach((e => {
                                                this.setAutoDismiss(e, (e => {
                                                    e.mode === t.Mode.AutoDismiss && this.serviceHubAdapter.emit("statusServiceUpdateRequest", e, t.Status.Pended, t.PendingEventReason.ServiceAutoDismiss)
                                                }))
                                            }));
                                            break;
                                        case "remove":
                                            this.update("deactivate", t.DeactivateEventReason.UserNegative, r)
                                    }
                                }
                                prepareAddNotifications(t) {
                                    const n = Object.keys(this.serviceConfig.DISABLED_ITEM_MODE).reduce(((e, t) => (this.serviceConfig.DISABLED_ITEM_MODE[t] || e.push(t), e)), []).map((e => `"${e}"`)).join(", ");
                                    return (Array.isArray(t) ? t : [t]).filter((e => !this.serviceConfig.DISABLED_ITEM_MODE[e.data.mode] || (c.error(`Trying to .add(...) notification mode "${e.data.mode}" that is disabled in this notifications service instance by configuration.Current configuration is: "${JSON.stringify(this.config)}"Only ${n} allowed. Ignoring .add(${JSON.stringify(e)}) notification...`), !1))).map((t => new e.Item(t, this.serviceHubAdapter)))
                                }
                                prepareUpdateNotifications(e) {
                                    return (Array.isArray(e) ? e : [e]).reduce(((e, t) => (t.timestamp in this.map ? e.push(t) : c.error("Trying to handle untracked notification. Call .add(...) first...", JSON.stringify(t)), e)), [])
                                }
                                prepareActiveCandidatesNotifications(e) {
                                    const n = (Array.isArray(e) ? e : [e]).reduce(((e, t) => (this.status.activated[t.mode].length + e[t.mode].length < this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[t.mode] && e[t.mode].push(t), e)), u.createStatusHolderSubCollections(t.MODES));
                                    return Object.values(n).reduce(((e, t) => e.concat(t)), [])
                                }
                                static sortByTimestampsFn(e, t) {
                                    return u.sortTimestampsFn(e.timestamp, t.timestamp)
                                }
                                get added() {
                                    return this.status.added
                                }
                                get pended() {
                                    return this.status.pended
                                }
                                get activated() {
                                    return this.status.activated
                                }
                                get deactivated() {
                                    return this.status.deactivated
                                }
                                getNotificationStatus(e) {
                                    return Object.keys(this.status).filter((e => e !== t.Status.Added)).find((t => -1 !== this.status[t].ids.indexOf(e.timestamp)))
                                }
                                get config() {
                                    return Object.freeze(this.serviceConfig)
                                }
                                static validateUpdateConfig(e) {
                                    const i = e;
                                    if (i.ACTIVATED_ITEM_MODE_LIMIT && i.ACTIVATED_ITEM_MODE_LIMIT.acknowledge > n.ACTIVATED_ITEM_MODE_LIMIT.acknowledge) throw new Error(`\n          Max ${t.Mode.Acknowledge} limit is ${n.ACTIVATED_ITEM_MODE_LIMIT.acknowledge}\n        `);
                                    if (i.DISABLED_ITEM_MODE) {
                                        if (!Object.keys(i.DISABLED_ITEM_MODE).reduce(((e, t) => (i.DISABLED_ITEM_MODE[t] && e++, e)), 0)) throw new Error("At least one notifications mode should be allowed in service instance");
                                        Object.keys(i.ACTIVATED_ITEM_MODE_LIMIT).forEach((e => {
                                            e in i.DISABLED_ITEM_MODE && i.DISABLED_ITEM_MODE[e] && c.warn(`Changing configuration limit count for mode "${e}" won't have any effect, because this mode is disabled in notifications service instance`)
                                        })), "AUTO_DISMISS_TIMEOUT" in i && i.DISABLED_ITEM_MODE[t.Mode.AutoDismiss] && c.warn(`Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "${t.Mode.AutoDismiss}" mode is disabled in notifications service instance`)
                                    }
                                    return !0
                                }
                                updateConfig(e) {
                                    u.validateUpdateConfig(e) && (this.serviceConfig = u.mergeConfig({}, this.serviceConfig, e), c.info("Updated notifications service configuration: ", this.config))
                                }
                                add(e) {
                                    const n = this.prepareAddNotifications(e);
                                    return this.update("add", t.AddEventReason.User, n), n
                                }
                                pending(e) {
                                    const n = this.prepareUpdateNotifications(e);
                                    return this.serviceHubAdapter.emit("statusServiceUpdateRequest", n, t.Status.Pended, t.PendingEventReason.UserSilent), n
                                }
                                deactivate(e, n) {
                                    const i = this.prepareUpdateNotifications(e);
                                    return this.serviceHubAdapter.emit("statusServiceUpdateRequest", i, t.Status.Deactivated, n), i
                                }
                                remove(e) {
                                    const n = this.prepareUpdateNotifications(e);
                                    return this.serviceHubAdapter.emit("statusServiceUpdateRequest", n, t.Status.Removed, t.RemoveEventReason.User), n
                                }
                                pendingAllActivated() {
                                    return this.pending(this.status.activated)
                                }
                                pendingAll() {
                                    return this.pending([...this.status.pended, ...this.status.activated])
                                }
                                deactivateAllActivated(e) {
                                    return this.deactivate(this.status.activated, e)
                                }
                                deactivateAll(e) {
                                    return this.deactivate([...this.status.pended, ...this.status.activated], e)
                                }
                                removeAllDeactivated() {
                                    return this.remove(this.status.deactivated)
                                }
                                removeAll() {
                                    return this.remove(this.status.added)
                                }
                                addEventListener(e, t) {
                                    this.emitter.on(e, t)
                                }
                                removeEventListener(e, t) {
                                    this.emitter.off(e, t)
                                }
                                addOnceEventListener(e, t) {
                                    this.emitter.once(e, t)
                                }
                                removeAllEventListeners() {
                                    R()(this.emitter)
                                }
                                emit(e, ...t) {
                                    this.emitter.emit(e, ...t)
                                }
                                bindServiceHubEvents() {
                                    this.serviceHubAdapter.addEventListener("statusServiceUpdateRequest", ((e, n, i) => {
                                        const r = Array.isArray(e) ? e : [e],
                                            o = r.reduce(((e, t) => (e[t.timestamp] = this.getNotificationStatus(t), e)), {});
                                        {
                                            const e = r.filter((e => (o[e.timestamp] === t.Status.Activated || e.mode !== t.Mode.Silent) && n === t.Status.Pended));
                                            {
                                                const n = e.filter((e => e.mode !== t.Mode.Silent));
                                                n.length && this.serviceHubAdapter.emit("modeStatusUpdateResponse", n.reduce(((e, t) => (e[t.timestamp] = t, e)), {}), t.Mode.Silent)
                                            }
                                            e.length && this.update("pending", i, e)
                                        } {
                                            const e = r.filter((e => {
                                                const i = o[e.timestamp];
                                                return (i === t.Status.Pended || i === t.Status.Activated) && n === t.Status.Deactivated
                                            }));
                                            e.length && this.update("deactivate", i, e)
                                        }
                                        r.filter((e => {
                                            const i = o[e.timestamp];
                                            return (i === t.Status.Pended || i === t.Status.Activated || i === t.Status.Deactivated) && n === t.Status.Removed
                                        })).length && this.update("remove", i, e)
                                    })), n.STATUS_EVENTS.forEach((e => {
                                        this.addEventListener(e, ((t, i) => {
                                            const r = n.STATUS_EVENT_MAP[e],
                                                o = t.reduce(((e, t) => (e[t.timestamp] = t, e)), {});
                                            this.serviceHubAdapter.emit("statusServiceUpdateResponse", o, r, i)
                                        }))
                                    }))
                                }
                            }
                            u.sortTimestampsFn = (e, t) => e > t ? 1 : e < t ? -1 : 0, e.Service = u
                        }(A || (A = {})),
                        function(e) {
                            class t {
                                constructor() {
                                    this.listeners = [], this.listenersOnce = [], this.listen = e => (this.listeners.push(e), {
                                        stopListen: () => this.stopListen(e)
                                    }), this.listenOnce = e => (this.listenersOnce.push(e), {
                                        stopListenOnce: () => this.stopListenOnce(e)
                                    }), this.stopListen = e => {
                                        const t = this.listeners.indexOf(e, 0);
                                        return t > -1 && (this.listeners.splice(t, 1), !0)
                                    }, this.stopListenOnce = e => {
                                        const t = this.listenersOnce.indexOf(e, 0);
                                        return t > -1 && (this.listenersOnce.splice(t, 1), !0)
                                    }, this.stopListenAll = () => {
                                        this.listeners = [], this.listenersOnce = []
                                    }, this.send = e => {
                                        this.listeners.forEach((t => t(e))), this.listenersOnce.forEach((t => t(e))), this.listenersOnce = []
                                    }
                                }
                            }
                            class n {
                                constructor() {
                                    this.listeners = [], this.listenersOnce = [], this.listen = e => (this.listeners.push(e), {
                                        stopListen: () => this.stopListen(e)
                                    }), this.listenOnce = e => (this.listenersOnce.push(e), {
                                        stopListenOnce: () => this.stopListenOnce(e)
                                    }), this.stopListen = e => {
                                        const t = this.listeners.indexOf(e, 0);
                                        return t > -1 && (this.listeners.splice(t, 1), !0)
                                    }, this.stopListenOnce = e => {
                                        const t = this.listenersOnce.indexOf(e, 0);
                                        return t > -1 && (this.listenersOnce.splice(t, 1), !0)
                                    }, this.stopListenAll = () => {
                                        this.listeners = [], this.listenersOnce = []
                                    }, this.send = () => {
                                        this.listeners.forEach((e => e())), this.listenersOnce.forEach((e => e())), this.listenersOnce = []
                                    }
                                }
                            }
                            e.create = new class {
                                withData() {
                                    const e = new t;
                                    return {
                                        signal: e,
                                        send: e.send,
                                        stopListenAll: e.stopListenAll
                                    }
                                }
                                empty() {
                                    const e = new n;
                                    return {
                                        signal: e,
                                        send: e.send,
                                        stopListenAll: e.stopListenAll
                                    }
                                }
                            }
                        }(D || (D = {}))
                    }])
                }, function(e, t, n) {
                    "use strict";
                    var i = n(11),
                        r = Object.prototype.toString;

                    function o(e) {
                        return "[object Array]" === r.call(e)
                    }

                    function s(e) {
                        return void 0 === e
                    }

                    function a(e) {
                        return null !== e && "object" == typeof e
                    }

                    function u(e) {
                        if ("[object Object]" !== r.call(e)) return !1;
                        var t = Object.getPrototypeOf(e);
                        return null === t || t === Object.prototype
                    }

                    function c(e) {
                        return "[object Function]" === r.call(e)
                    }

                    function l(e, t) {
                        if (null != e)
                            if ("object" != typeof e && (e = [e]), o(e))
                                for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
                            else
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
                    }
                    e.exports = {
                        isArray: o,
                        isArrayBuffer: function(e) {
                            return "[object ArrayBuffer]" === r.call(e)
                        },
                        isBuffer: function(e) {
                            return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                        },
                        isFormData: function(e) {
                            return "undefined" != typeof FormData && e instanceof FormData
                        },
                        isArrayBufferView: function(e) {
                            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                        },
                        isString: function(e) {
                            return "string" == typeof e
                        },
                        isNumber: function(e) {
                            return "number" == typeof e
                        },
                        isObject: a,
                        isPlainObject: u,
                        isUndefined: s,
                        isDate: function(e) {
                            return "[object Date]" === r.call(e)
                        },
                        isFile: function(e) {
                            return "[object File]" === r.call(e)
                        },
                        isBlob: function(e) {
                            return "[object Blob]" === r.call(e)
                        },
                        isFunction: c,
                        isStream: function(e) {
                            return a(e) && c(e.pipe)
                        },
                        isURLSearchParams: function(e) {
                            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                        },
                        isStandardBrowserEnv: function() {
                            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                        },
                        forEach: l,
                        merge: function e() {
                            var t = {};

                            function n(n, i) {
                                u(t[i]) && u(n) ? t[i] = e(t[i], n) : u(n) ? t[i] = e({}, n) : o(n) ? t[i] = n.slice() : t[i] = n
                            }
                            for (var i = 0, r = arguments.length; i < r; i++) l(arguments[i], n);
                            return t
                        },
                        extend: function(e, t, n) {
                            return l(t, (function(t, r) {
                                e[r] = n && "function" == typeof t ? i(t, n) : t
                            })), e
                        },
                        trim: function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        },
                        stripBOM: function(e) {
                            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                        }
                    }
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    n.d(t, "a", (function() {
                        return i
                    }))
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function r(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                    }
                    n.d(t, "a", (function() {
                        return r
                    }))
                }, function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    n.d(t, "a", (function() {
                        return a
                    })), n.d(t, "b", (function() {
                        return u
                    })), n.d(t, "c", (function() {
                        return c
                    }));
                    var r = [],
                        o = r.forEach,
                        s = r.slice;

                    function a(e) {
                        return o.call(s.call(arguments, 1), (function(t) {
                            if (t)
                                for (var n in t) void 0 === e[n] && (e[n] = t[n])
                        })), e
                    }

                    function u() {
                        return "function" == typeof XMLHttpRequest || "object" === ("undefined" == typeof XMLHttpRequest ? "undefined" : i(XMLHttpRequest))
                    }

                    function c(e) {
                        return function(e) {
                            return !!e && "function" == typeof e.then
                        }(e) ? e : Promise.resolve(e)
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i, r, o, s, a, u, c, l = n(21),
                        d = n(38),
                        f = Function.prototype.apply,
                        h = Function.prototype.call,
                        p = Object.create,
                        g = Object.defineProperty,
                        v = Object.defineProperties,
                        m = Object.prototype.hasOwnProperty,
                        y = {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0
                        };
                    r = function(e, t) {
                        var n, r;
                        return d(t), r = this, i.call(this, e, n = function() {
                            o.call(r, e, n), f.call(t, this, arguments)
                        }), n.__eeOnceListener__ = t, this
                    }, a = {
                        on: i = function(e, t) {
                            var n;
                            return d(t), m.call(this, "__ee__") ? n = this.__ee__ : (n = y.value = p(null), g(this, "__ee__", y), y.value = null), n[e] ? "object" == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
                        },
                        once: r,
                        off: o = function(e, t) {
                            var n, i, r, o;
                            if (d(t), !m.call(this, "__ee__")) return this;
                            if (!(n = this.__ee__)[e]) return this;
                            if ("object" == typeof(i = n[e]))
                                for (o = 0; r = i[o]; ++o) r !== t && r.__eeOnceListener__ !== t || (2 === i.length ? n[e] = i[o ? 0 : 1] : i.splice(o, 1));
                            else i !== t && i.__eeOnceListener__ !== t || delete n[e];
                            return this
                        },
                        emit: s = function(e) {
                            var t, n, i, r, o;
                            if (m.call(this, "__ee__") && (r = this.__ee__[e]))
                                if ("object" == typeof r) {
                                    for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                                    for (r = r.slice(), t = 0; i = r[t]; ++t) f.call(i, this, o)
                                } else switch (arguments.length) {
                                    case 1:
                                        h.call(r, this);
                                        break;
                                    case 2:
                                        h.call(r, this, arguments[1]);
                                        break;
                                    case 3:
                                        h.call(r, this, arguments[1], arguments[2]);
                                        break;
                                    default:
                                        for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                                        f.call(r, this, o)
                                }
                        }
                    }, u = {
                        on: l(i),
                        once: l(r),
                        off: l(o),
                        emit: l(s)
                    }, c = v({}, u), e.exports = t = function(e) {
                        return null == e ? p(c) : v(Object(e), u)
                    }, t.methods = a
                }, function(e, t, n) {
                    "use strict";
                    var i = n(32)();
                    e.exports = function(e) {
                        return e !== i && null !== e
                    }
                }, function(e, t, n) {
                    (function(i) {
                        var r;
                        if ("function" == typeof fetch && (void 0 !== i && i.fetch ? r = i.fetch : "undefined" != typeof window && window.fetch && (r = window.fetch)), "undefined" == typeof window || void 0 === window.document) {
                            var o = r || n(63);
                            o.default && (o = o.default), t.default = o, e.exports = t.default
                        }
                    }).call(this, n(19))
                }, function(e, t, n) {
                    "use strict";
                    (function(t) {
                        var i = n(1),
                            r = n(49),
                            o = n(13),
                            s = {
                                "Content-Type": "application/x-www-form-urlencoded"
                            };

                        function a(e, t) {
                            !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                        }
                        var u, c = {
                            transitional: {
                                silentJSONParsing: !0,
                                forcedJSONParsing: !0,
                                clarifyTimeoutError: !1
                            },
                            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (u = n(14)), u),
                            transformRequest: [function(e, t) {
                                return r(t, "Accept"), r(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) || t && "application/json" === t["Content-Type"] ? (a(t, "application/json"), function(e, t, n) {
                                    if (i.isString(e)) try {
                                        return (0, JSON.parse)(e), i.trim(e)
                                    } catch (e) {
                                        if ("SyntaxError" !== e.name) throw e
                                    }
                                    return (0, JSON.stringify)(e)
                                }(e)) : e
                            }],
                            transformResponse: [function(e) {
                                var t = this.transitional,
                                    n = t && t.silentJSONParsing,
                                    r = t && t.forcedJSONParsing,
                                    s = !n && "json" === this.responseType;
                                if (s || r && i.isString(e) && e.length) try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    if (s) {
                                        if ("SyntaxError" === e.name) throw o(e, this, "E_JSON_PARSE");
                                        throw e
                                    }
                                }
                                return e
                            }],
                            timeout: 0,
                            xsrfCookieName: "XSRF-TOKEN",
                            xsrfHeaderName: "X-XSRF-TOKEN",
                            maxContentLength: -1,
                            maxBodyLength: -1,
                            validateStatus: function(e) {
                                return e >= 200 && e < 300
                            },
                            headers: {
                                common: {
                                    Accept: "application/json, text/plain, */*"
                                }
                            }
                        };
                        i.forEach(["delete", "get", "head"], (function(e) {
                            c.headers[e] = {}
                        })), i.forEach(["post", "put", "patch"], (function(e) {
                            c.headers[e] = i.merge(s)
                        })), e.exports = c
                    }).call(this, n(48))
                }, function(e, t, n) {
                    "use strict";
                    var i = n(40),
                        r = Object.prototype.hasOwnProperty;
                    e.exports = function(e) {
                        var t, n = arguments[1];
                        if (i(e), void 0 === n) r.call(e, "__ee__") && delete e.__ee__;
                        else {
                            if (!(t = r.call(e, "__ee__") && e.__ee__)) return;
                            t[n] && delete t[n]
                        }
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e) {
                        return null != e
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e, t) {
                        return function() {
                            for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
                            return e.apply(t, n)
                        }
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1);

                    function r(e) {
                        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                    }
                    e.exports = function(e, t, n) {
                        if (!t) return e;
                        var o;
                        if (n) o = n(t);
                        else if (i.isURLSearchParams(t)) o = t.toString();
                        else {
                            var s = [];
                            i.forEach(t, (function(e, t) {
                                null != e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, (function(e) {
                                    i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e))
                                })))
                            })), o = s.join("&")
                        }
                        if (o) {
                            var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
                        }
                        return e
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e, t, n, i, r) {
                        return e.config = t, n && (e.code = n), e.request = i, e.response = r, e.isAxiosError = !0, e.toJSON = function() {
                            return {
                                message: this.message,
                                name: this.name,
                                description: this.description,
                                number: this.number,
                                fileName: this.fileName,
                                lineNumber: this.lineNumber,
                                columnNumber: this.columnNumber,
                                stack: this.stack,
                                config: this.config,
                                code: this.code
                            }
                        }, e
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1),
                        r = n(50),
                        o = n(51),
                        s = n(12),
                        a = n(52),
                        u = n(55),
                        c = n(56),
                        l = n(15);
                    e.exports = function(e) {
                        return new Promise((function(t, n) {
                            var d = e.data,
                                f = e.headers,
                                h = e.responseType;
                            i.isFormData(d) && delete f["Content-Type"];
                            var p = new XMLHttpRequest;
                            if (e.auth) {
                                var g = e.auth.username || "",
                                    v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                                f.Authorization = "Basic " + btoa(g + ":" + v)
                            }
                            var m = a(e.baseURL, e.url);

                            function y() {
                                if (p) {
                                    var i = "getAllResponseHeaders" in p ? u(p.getAllResponseHeaders()) : null,
                                        o = {
                                            data: h && "text" !== h && "json" !== h ? p.response : p.responseText,
                                            status: p.status,
                                            statusText: p.statusText,
                                            headers: i,
                                            config: e,
                                            request: p
                                        };
                                    r(t, n, o), p = null
                                }
                            }
                            if (p.open(e.method.toUpperCase(), s(m, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
                                    p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:")) && setTimeout(y)
                                }, p.onabort = function() {
                                    p && (n(l("Request aborted", e, "ECONNABORTED", p)), p = null)
                                }, p.onerror = function() {
                                    n(l("Network Error", e, null, p)), p = null
                                }, p.ontimeout = function() {
                                    var t = "timeout of " + e.timeout + "ms exceeded";
                                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(l(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", p)), p = null
                                }, i.isStandardBrowserEnv()) {
                                var b = (e.withCredentials || c(m)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
                                b && (f[e.xsrfHeaderName] = b)
                            }
                            "setRequestHeader" in p && i.forEach(f, (function(e, t) {
                                void 0 === d && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
                            })), i.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), h && "json" !== h && (p.responseType = e.responseType), "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                                p && (p.abort(), n(e), p = null)
                            })), d || (d = null), p.send(d)
                        }))
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(13);
                    e.exports = function(e, t, n, r, o) {
                        var s = new Error(e);
                        return i(s, t, n, r, o)
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e) {
                        return !(!e || !e.__CANCEL__)
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1);
                    e.exports = function(e, t) {
                        t = t || {};
                        var n = {},
                            r = ["url", "method", "data"],
                            o = ["headers", "auth", "proxy", "params"],
                            s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                            a = ["validateStatus"];

                        function u(e, t) {
                            return i.isPlainObject(e) && i.isPlainObject(t) ? i.merge(e, t) : i.isPlainObject(t) ? i.merge({}, t) : i.isArray(t) ? t.slice() : t
                        }

                        function c(r) {
                            i.isUndefined(t[r]) ? i.isUndefined(e[r]) || (n[r] = u(void 0, e[r])) : n[r] = u(e[r], t[r])
                        }
                        i.forEach(r, (function(e) {
                            i.isUndefined(t[e]) || (n[e] = u(void 0, t[e]))
                        })), i.forEach(o, c), i.forEach(s, (function(r) {
                            i.isUndefined(t[r]) ? i.isUndefined(e[r]) || (n[r] = u(void 0, e[r])) : n[r] = u(void 0, t[r])
                        })), i.forEach(a, (function(i) {
                            i in t ? n[i] = u(e[i], t[i]) : i in e && (n[i] = u(void 0, e[i]))
                        }));
                        var l = r.concat(o).concat(s).concat(a),
                            d = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                                return -1 === l.indexOf(e)
                            }));
                        return i.forEach(d, c), n
                    }
                }, function(e, t, n) {
                    "use strict";

                    function i(e) {
                        this.message = e
                    }
                    i.prototype.toString = function() {
                        return "Cancel" + (this.message ? ": " + this.message : "")
                    }, i.prototype.__CANCEL__ = !0, e.exports = i
                }, function(e, t) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || new Function("return this")()
                    } catch (e) {
                        "object" == typeof window && (n = window)
                    }
                    e.exports = n
                }, function(e, t, n) {
                    "use strict";
                    (function(e) {
                        var i, r, o, s = n(4),
                            a = n(7),
                            u = n.n(a);

                        function c(e) {
                            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            })(e)
                        }
                        "function" == typeof fetch && (void 0 !== e && e.fetch ? i = e.fetch : "undefined" != typeof window && window.fetch && (i = window.fetch)), s.b && (void 0 !== e && e.XMLHttpRequest ? r = e.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (r = window.XMLHttpRequest)), "function" == typeof ActiveXObject && (void 0 !== e && e.ActiveXObject ? o = e.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (o = window.ActiveXObject)), i || !a || r || o || (i = u.a || a), "function" != typeof i && (i = void 0);
                        var l = function(e, t) {
                            if (t && "object" === c(t)) {
                                var n = "";
                                for (var i in t) n += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
                                if (!n) return e;
                                e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
                            }
                            return e
                        };
                        t.a = function(e, t, n, a) {
                            return "function" == typeof n && (a = n, n = void 0), a = a || function() {}, i ? function(e, t, n, r) {
                                e.queryStringParams && (t = l(t, e.queryStringParams));
                                var o = Object(s.a)({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                                n && (o["Content-Type"] = "application/json"), i(t, Object(s.a)({
                                    method: n ? "POST" : "GET",
                                    body: n ? e.stringify(n) : void 0,
                                    headers: o
                                }, "function" == typeof e.requestOptions ? e.requestOptions(n) : e.requestOptions)).then((function(e) {
                                    if (!e.ok) return r(e.statusText || "Error", {
                                        status: e.status
                                    });
                                    e.text().then((function(t) {
                                        r(null, {
                                            status: e.status,
                                            data: t
                                        })
                                    })).catch(r)
                                })).catch(r)
                            }(e, t, n, a) : s.b || "function" == typeof ActiveXObject ? function(e, t, n, i) {
                                n && "object" === c(n) && (n = l("", n).slice(1)), e.queryStringParams && (t = l(t, e.queryStringParams));
                                try {
                                    var s;
                                    (s = r ? new r : new o("MSXML2.XMLHTTP.3.0")).open(n ? "POST" : "GET", t, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, n && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
                                    var a = e.customHeaders;
                                    if (a = "function" == typeof a ? a() : a)
                                        for (var u in a) s.setRequestHeader(u, a[u]);
                                    s.onreadystatechange = function() {
                                        s.readyState > 3 && i(s.status >= 400 ? s.statusText : null, {
                                            status: s.status,
                                            data: s.responseText
                                        })
                                    }, s.send(n)
                                } catch (e) {
                                    console && console.log(e)
                                }
                            }(e, t, n, a) : void 0
                        }
                    }).call(this, n(19))
                }, function(e, t, n) {
                    "use strict";
                    var i = n(10),
                        r = n(22),
                        o = n(26),
                        s = n(34),
                        a = n(35);
                    (e.exports = function(e, t) {
                        var n, r, u, c, l;
                        return arguments.length < 2 || "string" != typeof e ? (c = t, t = e, e = null) : c = arguments[2], i(e) ? (n = a.call(e, "c"), r = a.call(e, "e"), u = a.call(e, "w")) : (n = u = !0, r = !1), l = {
                            value: t,
                            configurable: n,
                            enumerable: r,
                            writable: u
                        }, c ? o(s(c), l) : l
                    }).gs = function(e, t, n) {
                        var u, c, l, d;
                        return "string" != typeof e ? (l = n, n = t, t = e, e = null) : l = arguments[3], i(t) ? r(t) ? i(n) ? r(n) || (l = n, n = void 0) : n = void 0 : (l = t, t = n = void 0) : t = void 0, i(e) ? (u = a.call(e, "c"), c = a.call(e, "e")) : (u = !0, c = !1), d = {
                            get: t,
                            set: n,
                            configurable: u,
                            enumerable: c
                        }, l ? o(s(l), d) : d
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(23),
                        r = /^\s*class[\s{/}]/,
                        o = Function.prototype.toString;
                    e.exports = function(e) {
                        return !!i(e) && !r.test(o.call(e))
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(24);
                    e.exports = function(e) {
                        if ("function" != typeof e) return !1;
                        if (!hasOwnProperty.call(e, "length")) return !1;
                        try {
                            if ("number" != typeof e.length) return !1;
                            if ("function" != typeof e.call) return !1;
                            if ("function" != typeof e.apply) return !1
                        } catch (e) {
                            return !1
                        }
                        return !i(e)
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(25);
                    e.exports = function(e) {
                        if (!i(e)) return !1;
                        try {
                            return !!e.constructor && e.constructor.prototype === e
                        } catch (e) {
                            return !1
                        }
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(10),
                        r = {
                            object: !0,
                            function: !0,
                            undefined: !0
                        };
                    e.exports = function(e) {
                        return !!i(e) && hasOwnProperty.call(r, typeof e)
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = n(27)() ? Object.assign : n(28)
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function() {
                        var e, t = Object.assign;
                        return "function" == typeof t && (t(e = {
                            foo: "raz"
                        }, {
                            bar: "dwa"
                        }, {
                            trzy: "trzy"
                        }), e.foo + e.bar + e.trzy === "razdwatrzy")
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(29),
                        r = n(33),
                        o = Math.max;
                    e.exports = function(e, t) {
                        var n, s, a, u = o(arguments.length, 2);
                        for (e = Object(r(e)), a = function(i) {
                                try {
                                    e[i] = t[i]
                                } catch (e) {
                                    n || (n = e)
                                }
                            }, s = 1; s < u; ++s) i(t = arguments[s]).forEach(a);
                        if (void 0 !== n) throw n;
                        return e
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = n(30)() ? Object.keys : n(31)
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function() {
                        try {
                            return Object.keys("primitive"), !0
                        } catch (e) {
                            return !1
                        }
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(6),
                        r = Object.keys;
                    e.exports = function(e) {
                        return r(i(e) ? Object(e) : e)
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function() {}
                }, function(e, t, n) {
                    "use strict";
                    var i = n(6);
                    e.exports = function(e) {
                        if (!i(e)) throw new TypeError("Cannot use null or undefined");
                        return e
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(6),
                        r = Array.prototype.forEach,
                        o = Object.create,
                        s = function(e, t) {
                            var n;
                            for (n in e) t[n] = e[n]
                        };
                    e.exports = function(e) {
                        var t = o(null);
                        return r.call(arguments, (function(e) {
                            i(e) && s(Object(e), t)
                        })), t
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = n(36)() ? String.prototype.contains : n(37)
                }, function(e, t, n) {
                    "use strict";
                    var i = "razdwatrzy";
                    e.exports = function() {
                        return "function" == typeof i.contains && !0 === i.contains("dwa") && !1 === i.contains("foo")
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = String.prototype.indexOf;
                    e.exports = function(e) {
                        return i.call(this, e, arguments[1]) > -1
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e) {
                        if ("function" != typeof e) throw new TypeError(e + " is not a function");
                        return e
                    }
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function r(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }

                    function o(e, t) {
                        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                    }

                    function s(e) {
                        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function a(e, t) {
                        return (a = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function u() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function c(e, t, n) {
                        return (c = u() ? Reflect.construct : function(e, t, n) {
                            var i = [null];
                            i.push.apply(i, t);
                            var r = new(Function.bind.apply(e, i));
                            return n && a(r, n.prototype), r
                        }).apply(null, arguments)
                    }

                    function l(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return (l = function(e) {
                            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                            var n;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, i)
                            }

                            function i() {
                                return c(e, arguments, s(this).constructor)
                            }
                            return i.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: i,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), a(i, e)
                        })(e)
                    }

                    function d(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i
                    }

                    function f(e) {
                        var t = 0;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (e = function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return d(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                                    }
                                }(e))) return function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            };
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        return (t = e[Symbol.iterator]()).next.bind(t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var h = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            return o(t, e), t
                        }(l(Error)),
                        p = function(e) {
                            function t(t) {
                                return e.call(this, "Invalid DateTime: " + t.toMessage()) || this
                            }
                            return o(t, e), t
                        }(h),
                        g = function(e) {
                            function t(t) {
                                return e.call(this, "Invalid Interval: " + t.toMessage()) || this
                            }
                            return o(t, e), t
                        }(h),
                        v = function(e) {
                            function t(t) {
                                return e.call(this, "Invalid Duration: " + t.toMessage()) || this
                            }
                            return o(t, e), t
                        }(h),
                        m = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            return o(t, e), t
                        }(h),
                        y = function(e) {
                            function t(t) {
                                return e.call(this, "Invalid unit " + t) || this
                            }
                            return o(t, e), t
                        }(h),
                        b = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            return o(t, e), t
                        }(h),
                        S = function(e) {
                            function t() {
                                return e.call(this, "Zone is an abstract class") || this
                            }
                            return o(t, e), t
                        }(h),
                        w = "numeric",
                        E = "short",
                        k = "long",
                        O = {
                            year: w,
                            month: w,
                            day: w
                        },
                        x = {
                            year: w,
                            month: E,
                            day: w
                        },
                        T = {
                            year: w,
                            month: E,
                            day: w,
                            weekday: E
                        },
                        C = {
                            year: w,
                            month: k,
                            day: w
                        },
                        L = {
                            year: w,
                            month: k,
                            day: w,
                            weekday: k
                        },
                        I = {
                            hour: w,
                            minute: w
                        },
                        A = {
                            hour: w,
                            minute: w,
                            second: w
                        },
                        D = {
                            hour: w,
                            minute: w,
                            second: w,
                            timeZoneName: E
                        },
                        N = {
                            hour: w,
                            minute: w,
                            second: w,
                            timeZoneName: k
                        },
                        R = {
                            hour: w,
                            minute: w,
                            hour12: !1
                        },
                        M = {
                            hour: w,
                            minute: w,
                            second: w,
                            hour12: !1
                        },
                        _ = {
                            hour: w,
                            minute: w,
                            second: w,
                            hour12: !1,
                            timeZoneName: E
                        },
                        j = {
                            hour: w,
                            minute: w,
                            second: w,
                            hour12: !1,
                            timeZoneName: k
                        },
                        P = {
                            year: w,
                            month: w,
                            day: w,
                            hour: w,
                            minute: w
                        },
                        V = {
                            year: w,
                            month: w,
                            day: w,
                            hour: w,
                            minute: w,
                            second: w
                        },
                        q = {
                            year: w,
                            month: E,
                            day: w,
                            hour: w,
                            minute: w
                        },
                        U = {
                            year: w,
                            month: E,
                            day: w,
                            hour: w,
                            minute: w,
                            second: w
                        },
                        F = {
                            year: w,
                            month: E,
                            day: w,
                            weekday: E,
                            hour: w,
                            minute: w
                        },
                        H = {
                            year: w,
                            month: k,
                            day: w,
                            hour: w,
                            minute: w,
                            timeZoneName: E
                        },
                        z = {
                            year: w,
                            month: k,
                            day: w,
                            hour: w,
                            minute: w,
                            second: w,
                            timeZoneName: E
                        },
                        B = {
                            year: w,
                            month: k,
                            day: w,
                            weekday: k,
                            hour: w,
                            minute: w,
                            timeZoneName: k
                        },
                        J = {
                            year: w,
                            month: k,
                            day: w,
                            weekday: k,
                            hour: w,
                            minute: w,
                            second: w,
                            timeZoneName: k
                        };

                    function Z(e) {
                        return void 0 === e
                    }

                    function G(e) {
                        return "number" == typeof e
                    }

                    function W(e) {
                        return "number" == typeof e && e % 1 == 0
                    }

                    function $() {
                        try {
                            return "undefined" != typeof Intl && Intl.DateTimeFormat
                        } catch (e) {
                            return !1
                        }
                    }

                    function Y() {
                        return !Z(Intl.DateTimeFormat.prototype.formatToParts)
                    }

                    function K() {
                        try {
                            return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat
                        } catch (e) {
                            return !1
                        }
                    }

                    function X(e, t, n) {
                        if (0 !== e.length) return e.reduce((function(e, i) {
                            var r = [t(i), i];
                            return e && n(e[0], r[0]) === e[0] ? e : r
                        }), null)[1]
                    }

                    function Q(e, t) {
                        return t.reduce((function(t, n) {
                            return t[n] = e[n], t
                        }), {})
                    }

                    function ee(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }

                    function te(e, t, n) {
                        return W(e) && e >= t && e <= n
                    }

                    function ne(e, t) {
                        void 0 === t && (t = 2);
                        var n = e < 0 ? "-" : "",
                            i = n ? -1 * e : e;
                        return "" + n + (i.toString().length < t ? ("0".repeat(t) + i).slice(-t) : i.toString())
                    }

                    function ie(e) {
                        return Z(e) || null === e || "" === e ? void 0 : parseInt(e, 10)
                    }

                    function re(e) {
                        if (!Z(e) && null !== e && "" !== e) {
                            var t = 1e3 * parseFloat("0." + e);
                            return Math.floor(t)
                        }
                    }

                    function oe(e, t, n) {
                        void 0 === n && (n = !1);
                        var i = Math.pow(10, t);
                        return (n ? Math.trunc : Math.round)(e * i) / i
                    }

                    function se(e) {
                        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
                    }

                    function ae(e) {
                        return se(e) ? 366 : 365
                    }

                    function ue(e, t) {
                        var n = function(e, t) {
                            return e - 12 * Math.floor(e / 12)
                        }(t - 1) + 1;
                        return 2 === n ? se(e + (t - n) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1]
                    }

                    function ce(e) {
                        var t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
                        return e.year < 100 && e.year >= 0 && (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900), +t
                    }

                    function le(e) {
                        var t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
                            n = e - 1,
                            i = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
                        return 4 === t || 3 === i ? 53 : 52
                    }

                    function de(e) {
                        return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e
                    }

                    function fe(e, t, n, i) {
                        void 0 === i && (i = null);
                        var r = new Date(e),
                            o = {
                                hour12: !1,
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit"
                            };
                        i && (o.timeZone = i);
                        var s = Object.assign({
                                timeZoneName: t
                            }, o),
                            a = $();
                        if (a && Y()) {
                            var u = new Intl.DateTimeFormat(n, s).formatToParts(r).find((function(e) {
                                return "timezonename" === e.type.toLowerCase()
                            }));
                            return u ? u.value : null
                        }
                        if (a) {
                            var c = new Intl.DateTimeFormat(n, o).format(r);
                            return new Intl.DateTimeFormat(n, s).format(r).substring(c.length).replace(/^[, \u200e]+/, "")
                        }
                        return null
                    }

                    function he(e, t) {
                        var n = parseInt(e, 10);
                        Number.isNaN(n) && (n = 0);
                        var i = parseInt(t, 10) || 0;
                        return 60 * n + (n < 0 || Object.is(n, -0) ? -i : i)
                    }

                    function pe(e) {
                        var t = Number(e);
                        if ("boolean" == typeof e || "" === e || Number.isNaN(t)) throw new b("Invalid unit value " + e);
                        return t
                    }

                    function ge(e, t, n) {
                        var i = {};
                        for (var r in e)
                            if (ee(e, r)) {
                                if (n.indexOf(r) >= 0) continue;
                                var o = e[r];
                                if (null == o) continue;
                                i[t(r)] = pe(o)
                            } return i
                    }

                    function ve(e, t) {
                        var n = Math.trunc(Math.abs(e / 60)),
                            i = Math.trunc(Math.abs(e % 60)),
                            r = e >= 0 ? "+" : "-";
                        switch (t) {
                            case "short":
                                return "" + r + ne(n, 2) + ":" + ne(i, 2);
                            case "narrow":
                                return "" + r + n + (i > 0 ? ":" + i : "");
                            case "techie":
                                return "" + r + ne(n, 2) + ne(i, 2);
                            default:
                                throw new RangeError("Value format " + t + " is out of range for property format")
                        }
                    }

                    function me(e) {
                        return Q(e, ["hour", "minute", "second", "millisecond"])
                    }
                    var ye = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

                    function be(e) {
                        return JSON.stringify(e, Object.keys(e).sort())
                    }
                    var Se = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        we = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        Ee = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

                    function ke(e) {
                        switch (e) {
                            case "narrow":
                                return [].concat(Ee);
                            case "short":
                                return [].concat(we);
                            case "long":
                                return [].concat(Se);
                            case "numeric":
                                return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
                            case "2-digit":
                                return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                            default:
                                return null
                        }
                    }
                    var Oe = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        xe = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        Te = ["M", "T", "W", "T", "F", "S", "S"];

                    function Ce(e) {
                        switch (e) {
                            case "narrow":
                                return [].concat(Te);
                            case "short":
                                return [].concat(xe);
                            case "long":
                                return [].concat(Oe);
                            case "numeric":
                                return ["1", "2", "3", "4", "5", "6", "7"];
                            default:
                                return null
                        }
                    }
                    var Le = ["AM", "PM"],
                        Ie = ["Before Christ", "Anno Domini"],
                        Ae = ["BC", "AD"],
                        De = ["B", "A"];

                    function Ne(e) {
                        switch (e) {
                            case "narrow":
                                return [].concat(De);
                            case "short":
                                return [].concat(Ae);
                            case "long":
                                return [].concat(Ie);
                            default:
                                return null
                        }
                    }

                    function Re(e, t) {
                        for (var n, i = "", r = f(e); !(n = r()).done;) {
                            var o = n.value;
                            o.literal ? i += o.val : i += t(o.val)
                        }
                        return i
                    }
                    var Me = {
                            D: O,
                            DD: x,
                            DDD: C,
                            DDDD: L,
                            t: I,
                            tt: A,
                            ttt: D,
                            tttt: N,
                            T: R,
                            TT: M,
                            TTT: _,
                            TTTT: j,
                            f: P,
                            ff: q,
                            fff: H,
                            ffff: B,
                            F: V,
                            FF: U,
                            FFF: z,
                            FFFF: J
                        },
                        _e = function() {
                            function e(e, t) {
                                this.opts = t, this.loc = e, this.systemLoc = null
                            }
                            e.create = function(t, n) {
                                return void 0 === n && (n = {}), new e(t, n)
                            }, e.parseFormat = function(e) {
                                for (var t = null, n = "", i = !1, r = [], o = 0; o < e.length; o++) {
                                    var s = e.charAt(o);
                                    "'" === s ? (n.length > 0 && r.push({
                                        literal: i,
                                        val: n
                                    }), t = null, n = "", i = !i) : i || s === t ? n += s : (n.length > 0 && r.push({
                                        literal: !1,
                                        val: n
                                    }), n = s, t = s)
                                }
                                return n.length > 0 && r.push({
                                    literal: i,
                                    val: n
                                }), r
                            }, e.macroTokenToFormatOpts = function(e) {
                                return Me[e]
                            };
                            var t = e.prototype;
                            return t.formatWithSystemDefault = function(e, t) {
                                return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, Object.assign({}, this.opts, t)).format()
                            }, t.formatDateTime = function(e, t) {
                                return void 0 === t && (t = {}), this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).format()
                            }, t.formatDateTimeParts = function(e, t) {
                                return void 0 === t && (t = {}), this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).formatToParts()
                            }, t.resolvedOptions = function(e, t) {
                                return void 0 === t && (t = {}), this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).resolvedOptions()
                            }, t.num = function(e, t) {
                                if (void 0 === t && (t = 0), this.opts.forceSimple) return ne(e, t);
                                var n = Object.assign({}, this.opts);
                                return t > 0 && (n.padTo = t), this.loc.numberFormatter(n).format(e)
                            }, t.formatDateTimeFromString = function(t, n) {
                                var i = this,
                                    r = "en" === this.loc.listingMode(),
                                    o = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar && Y(),
                                    s = function(e, n) {
                                        return i.loc.extract(t, e, n)
                                    },
                                    a = function(e) {
                                        return t.isOffsetFixed && 0 === t.offset && e.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, e.format) : ""
                                    },
                                    u = function(e, n) {
                                        return r ? function(e, t) {
                                            return ke(t)[e.month - 1]
                                        }(t, e) : s(n ? {
                                            month: e
                                        } : {
                                            month: e,
                                            day: "numeric"
                                        }, "month")
                                    },
                                    c = function(e, n) {
                                        return r ? function(e, t) {
                                            return Ce(t)[e.weekday - 1]
                                        }(t, e) : s(n ? {
                                            weekday: e
                                        } : {
                                            weekday: e,
                                            month: "long",
                                            day: "numeric"
                                        }, "weekday")
                                    },
                                    l = function(e) {
                                        return r ? function(e, t) {
                                            return Ne(t)[e.year < 0 ? 0 : 1]
                                        }(t, e) : s({
                                            era: e
                                        }, "era")
                                    };
                                return Re(e.parseFormat(n), (function(n) {
                                    switch (n) {
                                        case "S":
                                            return i.num(t.millisecond);
                                        case "u":
                                        case "SSS":
                                            return i.num(t.millisecond, 3);
                                        case "s":
                                            return i.num(t.second);
                                        case "ss":
                                            return i.num(t.second, 2);
                                        case "m":
                                            return i.num(t.minute);
                                        case "mm":
                                            return i.num(t.minute, 2);
                                        case "h":
                                            return i.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
                                        case "hh":
                                            return i.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
                                        case "H":
                                            return i.num(t.hour);
                                        case "HH":
                                            return i.num(t.hour, 2);
                                        case "Z":
                                            return a({
                                                format: "narrow",
                                                allowZ: i.opts.allowZ
                                            });
                                        case "ZZ":
                                            return a({
                                                format: "short",
                                                allowZ: i.opts.allowZ
                                            });
                                        case "ZZZ":
                                            return a({
                                                format: "techie",
                                                allowZ: i.opts.allowZ
                                            });
                                        case "ZZZZ":
                                            return t.zone.offsetName(t.ts, {
                                                format: "short",
                                                locale: i.loc.locale
                                            });
                                        case "ZZZZZ":
                                            return t.zone.offsetName(t.ts, {
                                                format: "long",
                                                locale: i.loc.locale
                                            });
                                        case "z":
                                            return t.zoneName;
                                        case "a":
                                            return r ? function(e) {
                                                return Le[e.hour < 12 ? 0 : 1]
                                            }(t) : s({
                                                hour: "numeric",
                                                hour12: !0
                                            }, "dayperiod");
                                        case "d":
                                            return o ? s({
                                                day: "numeric"
                                            }, "day") : i.num(t.day);
                                        case "dd":
                                            return o ? s({
                                                day: "2-digit"
                                            }, "day") : i.num(t.day, 2);
                                        case "c":
                                        case "E":
                                            return i.num(t.weekday);
                                        case "ccc":
                                            return c("short", !0);
                                        case "cccc":
                                            return c("long", !0);
                                        case "ccccc":
                                            return c("narrow", !0);
                                        case "EEE":
                                            return c("short", !1);
                                        case "EEEE":
                                            return c("long", !1);
                                        case "EEEEE":
                                            return c("narrow", !1);
                                        case "L":
                                            return o ? s({
                                                month: "numeric",
                                                day: "numeric"
                                            }, "month") : i.num(t.month);
                                        case "LL":
                                            return o ? s({
                                                month: "2-digit",
                                                day: "numeric"
                                            }, "month") : i.num(t.month, 2);
                                        case "LLL":
                                            return u("short", !0);
                                        case "LLLL":
                                            return u("long", !0);
                                        case "LLLLL":
                                            return u("narrow", !0);
                                        case "M":
                                            return o ? s({
                                                month: "numeric"
                                            }, "month") : i.num(t.month);
                                        case "MM":
                                            return o ? s({
                                                month: "2-digit"
                                            }, "month") : i.num(t.month, 2);
                                        case "MMM":
                                            return u("short", !1);
                                        case "MMMM":
                                            return u("long", !1);
                                        case "MMMMM":
                                            return u("narrow", !1);
                                        case "y":
                                            return o ? s({
                                                year: "numeric"
                                            }, "year") : i.num(t.year);
                                        case "yy":
                                            return o ? s({
                                                year: "2-digit"
                                            }, "year") : i.num(t.year.toString().slice(-2), 2);
                                        case "yyyy":
                                            return o ? s({
                                                year: "numeric"
                                            }, "year") : i.num(t.year, 4);
                                        case "yyyyyy":
                                            return o ? s({
                                                year: "numeric"
                                            }, "year") : i.num(t.year, 6);
                                        case "G":
                                            return l("short");
                                        case "GG":
                                            return l("long");
                                        case "GGGGG":
                                            return l("narrow");
                                        case "kk":
                                            return i.num(t.weekYear.toString().slice(-2), 2);
                                        case "kkkk":
                                            return i.num(t.weekYear, 4);
                                        case "W":
                                            return i.num(t.weekNumber);
                                        case "WW":
                                            return i.num(t.weekNumber, 2);
                                        case "o":
                                            return i.num(t.ordinal);
                                        case "ooo":
                                            return i.num(t.ordinal, 3);
                                        case "q":
                                            return i.num(t.quarter);
                                        case "qq":
                                            return i.num(t.quarter, 2);
                                        case "X":
                                            return i.num(Math.floor(t.ts / 1e3));
                                        case "x":
                                            return i.num(t.ts);
                                        default:
                                            return function(n) {
                                                var r = e.macroTokenToFormatOpts(n);
                                                return r ? i.formatWithSystemDefault(t, r) : n
                                            }(n)
                                    }
                                }))
                            }, t.formatDurationFromString = function(t, n) {
                                var i, r = this,
                                    o = function(e) {
                                        switch (e[0]) {
                                            case "S":
                                                return "millisecond";
                                            case "s":
                                                return "second";
                                            case "m":
                                                return "minute";
                                            case "h":
                                                return "hour";
                                            case "d":
                                                return "day";
                                            case "M":
                                                return "month";
                                            case "y":
                                                return "year";
                                            default:
                                                return null
                                        }
                                    },
                                    s = e.parseFormat(n),
                                    a = s.reduce((function(e, t) {
                                        var n = t.literal,
                                            i = t.val;
                                        return n ? e : e.concat(i)
                                    }), []),
                                    u = t.shiftTo.apply(t, a.map(o).filter((function(e) {
                                        return e
                                    })));
                                return Re(s, (i = u, function(e) {
                                    var t = o(e);
                                    return t ? r.num(i.get(t), e.length) : e
                                }))
                            }, e
                        }(),
                        je = function() {
                            function e(e, t) {
                                this.reason = e, this.explanation = t
                            }
                            return e.prototype.toMessage = function() {
                                return this.explanation ? this.reason + ": " + this.explanation : this.reason
                            }, e
                        }(),
                        Pe = function() {
                            function e() {}
                            var t = e.prototype;
                            return t.offsetName = function(e, t) {
                                throw new S
                            }, t.formatOffset = function(e, t) {
                                throw new S
                            }, t.offset = function(e) {
                                throw new S
                            }, t.equals = function(e) {
                                throw new S
                            }, r(e, [{
                                key: "type",
                                get: function() {
                                    throw new S
                                }
                            }, {
                                key: "name",
                                get: function() {
                                    throw new S
                                }
                            }, {
                                key: "universal",
                                get: function() {
                                    throw new S
                                }
                            }, {
                                key: "isValid",
                                get: function() {
                                    throw new S
                                }
                            }]), e
                        }(),
                        Ve = null,
                        qe = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            o(t, e);
                            var n = t.prototype;
                            return n.offsetName = function(e, t) {
                                return fe(e, t.format, t.locale)
                            }, n.formatOffset = function(e, t) {
                                return ve(this.offset(e), t)
                            }, n.offset = function(e) {
                                return -new Date(e).getTimezoneOffset()
                            }, n.equals = function(e) {
                                return "local" === e.type
                            }, r(t, [{
                                key: "type",
                                get: function() {
                                    return "local"
                                }
                            }, {
                                key: "name",
                                get: function() {
                                    return $() ? (new Intl.DateTimeFormat).resolvedOptions().timeZone : "local"
                                }
                            }, {
                                key: "universal",
                                get: function() {
                                    return !1
                                }
                            }, {
                                key: "isValid",
                                get: function() {
                                    return !0
                                }
                            }], [{
                                key: "instance",
                                get: function() {
                                    return null === Ve && (Ve = new t), Ve
                                }
                            }]), t
                        }(Pe),
                        Ue = RegExp("^" + ye.source + "$"),
                        Fe = {},
                        He = {
                            year: 0,
                            month: 1,
                            day: 2,
                            hour: 3,
                            minute: 4,
                            second: 5
                        },
                        ze = {},
                        Be = function(e) {
                            function t(n) {
                                var i;
                                return (i = e.call(this) || this).zoneName = n, i.valid = t.isValidZone(n), i
                            }
                            o(t, e), t.create = function(e) {
                                return ze[e] || (ze[e] = new t(e)), ze[e]
                            }, t.resetCache = function() {
                                ze = {}, Fe = {}
                            }, t.isValidSpecifier = function(e) {
                                return !(!e || !e.match(Ue))
                            }, t.isValidZone = function(e) {
                                try {
                                    return new Intl.DateTimeFormat("en-US", {
                                        timeZone: e
                                    }).format(), !0
                                } catch (e) {
                                    return !1
                                }
                            }, t.parseGMTOffset = function(e) {
                                if (e) {
                                    var t = e.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
                                    if (t) return -60 * parseInt(t[1])
                                }
                                return null
                            };
                            var n = t.prototype;
                            return n.offsetName = function(e, t) {
                                return fe(e, t.format, t.locale, this.name)
                            }, n.formatOffset = function(e, t) {
                                return ve(this.offset(e), t)
                            }, n.offset = function(e) {
                                var t = new Date(e);
                                if (isNaN(t)) return NaN;
                                var n, i = (n = this.name, Fe[n] || (Fe[n] = new Intl.DateTimeFormat("en-US", {
                                        hour12: !1,
                                        timeZone: n,
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit"
                                    })), Fe[n]),
                                    r = i.formatToParts ? function(e, t) {
                                        for (var n = e.formatToParts(t), i = [], r = 0; r < n.length; r++) {
                                            var o = n[r],
                                                s = o.type,
                                                a = o.value,
                                                u = He[s];
                                            Z(u) || (i[u] = parseInt(a, 10))
                                        }
                                        return i
                                    }(i, t) : function(e, t) {
                                        var n = e.format(t).replace(/\u200E/g, ""),
                                            i = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),
                                            r = i[1],
                                            o = i[2];
                                        return [i[3], r, o, i[4], i[5], i[6]]
                                    }(i, t),
                                    o = r[0],
                                    s = r[1],
                                    a = r[2],
                                    u = r[3],
                                    c = +t,
                                    l = c % 1e3;
                                return (ce({
                                    year: o,
                                    month: s,
                                    day: a,
                                    hour: 24 === u ? 0 : u,
                                    minute: r[4],
                                    second: r[5],
                                    millisecond: 0
                                }) - (c -= l >= 0 ? l : 1e3 + l)) / 6e4
                            }, n.equals = function(e) {
                                return "iana" === e.type && e.name === this.name
                            }, r(t, [{
                                key: "type",
                                get: function() {
                                    return "iana"
                                }
                            }, {
                                key: "name",
                                get: function() {
                                    return this.zoneName
                                }
                            }, {
                                key: "universal",
                                get: function() {
                                    return !1
                                }
                            }, {
                                key: "isValid",
                                get: function() {
                                    return this.valid
                                }
                            }]), t
                        }(Pe),
                        Je = null,
                        Ze = function(e) {
                            function t(t) {
                                var n;
                                return (n = e.call(this) || this).fixed = t, n
                            }
                            o(t, e), t.instance = function(e) {
                                return 0 === e ? t.utcInstance : new t(e)
                            }, t.parseSpecifier = function(e) {
                                if (e) {
                                    var n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                                    if (n) return new t(he(n[1], n[2]))
                                }
                                return null
                            }, r(t, null, [{
                                key: "utcInstance",
                                get: function() {
                                    return null === Je && (Je = new t(0)), Je
                                }
                            }]);
                            var n = t.prototype;
                            return n.offsetName = function() {
                                return this.name
                            }, n.formatOffset = function(e, t) {
                                return ve(this.fixed, t)
                            }, n.offset = function() {
                                return this.fixed
                            }, n.equals = function(e) {
                                return "fixed" === e.type && e.fixed === this.fixed
                            }, r(t, [{
                                key: "type",
                                get: function() {
                                    return "fixed"
                                }
                            }, {
                                key: "name",
                                get: function() {
                                    return 0 === this.fixed ? "UTC" : "UTC" + ve(this.fixed, "narrow")
                                }
                            }, {
                                key: "universal",
                                get: function() {
                                    return !0
                                }
                            }, {
                                key: "isValid",
                                get: function() {
                                    return !0
                                }
                            }]), t
                        }(Pe),
                        Ge = function(e) {
                            function t(t) {
                                var n;
                                return (n = e.call(this) || this).zoneName = t, n
                            }
                            o(t, e);
                            var n = t.prototype;
                            return n.offsetName = function() {
                                return null
                            }, n.formatOffset = function() {
                                return ""
                            }, n.offset = function() {
                                return NaN
                            }, n.equals = function() {
                                return !1
                            }, r(t, [{
                                key: "type",
                                get: function() {
                                    return "invalid"
                                }
                            }, {
                                key: "name",
                                get: function() {
                                    return this.zoneName
                                }
                            }, {
                                key: "universal",
                                get: function() {
                                    return !1
                                }
                            }, {
                                key: "isValid",
                                get: function() {
                                    return !1
                                }
                            }]), t
                        }(Pe);

                    function We(e, t) {
                        var n;
                        if (Z(e) || null === e) return t;
                        if (e instanceof Pe) return e;
                        if ("string" == typeof e) {
                            var i = e.toLowerCase();
                            return "local" === i ? t : "utc" === i || "gmt" === i ? Ze.utcInstance : null != (n = Be.parseGMTOffset(e)) ? Ze.instance(n) : Be.isValidSpecifier(i) ? Be.create(e) : Ze.parseSpecifier(i) || new Ge(e)
                        }
                        return G(e) ? Ze.instance(e) : "object" == typeof e && e.offset && "number" == typeof e.offset ? e : new Ge(e)
                    }
                    var $e = function() {
                            return Date.now()
                        },
                        Ye = null,
                        Ke = null,
                        Xe = null,
                        Qe = null,
                        et = !1,
                        tt = function() {
                            function e() {}
                            return e.resetCaches = function() {
                                dt.resetCache(), Be.resetCache()
                            }, r(e, null, [{
                                key: "now",
                                get: function() {
                                    return $e
                                },
                                set: function(e) {
                                    $e = e
                                }
                            }, {
                                key: "defaultZoneName",
                                get: function() {
                                    return e.defaultZone.name
                                },
                                set: function(e) {
                                    Ye = e ? We(e) : null
                                }
                            }, {
                                key: "defaultZone",
                                get: function() {
                                    return Ye || qe.instance
                                }
                            }, {
                                key: "defaultLocale",
                                get: function() {
                                    return Ke
                                },
                                set: function(e) {
                                    Ke = e
                                }
                            }, {
                                key: "defaultNumberingSystem",
                                get: function() {
                                    return Xe
                                },
                                set: function(e) {
                                    Xe = e
                                }
                            }, {
                                key: "defaultOutputCalendar",
                                get: function() {
                                    return Qe
                                },
                                set: function(e) {
                                    Qe = e
                                }
                            }, {
                                key: "throwOnInvalid",
                                get: function() {
                                    return et
                                },
                                set: function(e) {
                                    et = e
                                }
                            }]), e
                        }(),
                        nt = {};

                    function it(e, t) {
                        void 0 === t && (t = {});
                        var n = JSON.stringify([e, t]),
                            i = nt[n];
                        return i || (i = new Intl.DateTimeFormat(e, t), nt[n] = i), i
                    }
                    var rt = {},
                        ot = {};
                    var st = null;

                    function at(e, t, n, i, r) {
                        var o = e.listingMode(n);
                        return "error" === o ? null : "en" === o ? i(t) : r(t)
                    }
                    var ut = function() {
                            function e(e, t, n) {
                                if (this.padTo = n.padTo || 0, this.floor = n.floor || !1, !t && $()) {
                                    var i = {
                                        useGrouping: !1
                                    };
                                    n.padTo > 0 && (i.minimumIntegerDigits = n.padTo), this.inf = function(e, t) {
                                        void 0 === t && (t = {});
                                        var n = JSON.stringify([e, t]),
                                            i = rt[n];
                                        return i || (i = new Intl.NumberFormat(e, t), rt[n] = i), i
                                    }(e, i)
                                }
                            }
                            return e.prototype.format = function(e) {
                                if (this.inf) {
                                    var t = this.floor ? Math.floor(e) : e;
                                    return this.inf.format(t)
                                }
                                return ne(this.floor ? Math.floor(e) : oe(e, 3), this.padTo)
                            }, e
                        }(),
                        ct = function() {
                            function e(e, t, n) {
                                var i;
                                if (this.opts = n, this.hasIntl = $(), e.zone.universal && this.hasIntl) {
                                    var r = e.offset / 60 * -1,
                                        o = r >= 0 ? "Etc/GMT+" + r : "Etc/GMT" + r,
                                        s = Be.isValidZone(o);
                                    0 !== e.offset && s ? (i = o, this.dt = e) : (i = "UTC", n.timeZoneName ? this.dt = e : this.dt = 0 === e.offset ? e : si.fromMillis(e.ts + 60 * e.offset * 1e3))
                                } else "local" === e.zone.type ? this.dt = e : (this.dt = e, i = e.zone.name);
                                if (this.hasIntl) {
                                    var a = Object.assign({}, this.opts);
                                    i && (a.timeZone = i), this.dtf = it(t, a)
                                }
                            }
                            var t = e.prototype;
                            return t.format = function() {
                                if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
                                var e = function(e) {
                                        switch (be(Q(e, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]))) {
                                            case be(O):
                                                return "M/d/yyyy";
                                            case be(x):
                                                return "LLL d, yyyy";
                                            case be(T):
                                                return "EEE, LLL d, yyyy";
                                            case be(C):
                                                return "LLLL d, yyyy";
                                            case be(L):
                                                return "EEEE, LLLL d, yyyy";
                                            case be(I):
                                                return "h:mm a";
                                            case be(A):
                                                return "h:mm:ss a";
                                            case be(D):
                                            case be(N):
                                                return "h:mm a";
                                            case be(R):
                                                return "HH:mm";
                                            case be(M):
                                                return "HH:mm:ss";
                                            case be(_):
                                            case be(j):
                                                return "HH:mm";
                                            case be(P):
                                                return "M/d/yyyy, h:mm a";
                                            case be(q):
                                                return "LLL d, yyyy, h:mm a";
                                            case be(H):
                                                return "LLLL d, yyyy, h:mm a";
                                            case be(B):
                                                return "EEEE, LLLL d, yyyy, h:mm a";
                                            case be(V):
                                                return "M/d/yyyy, h:mm:ss a";
                                            case be(U):
                                                return "LLL d, yyyy, h:mm:ss a";
                                            case be(F):
                                                return "EEE, d LLL yyyy, h:mm a";
                                            case be(z):
                                                return "LLLL d, yyyy, h:mm:ss a";
                                            case be(J):
                                                return "EEEE, LLLL d, yyyy, h:mm:ss a";
                                            default:
                                                return "EEEE, LLLL d, yyyy, h:mm a"
                                        }
                                    }(this.opts),
                                    t = dt.create("en-US");
                                return _e.create(t).formatDateTimeFromString(this.dt, e)
                            }, t.formatToParts = function() {
                                return this.hasIntl && Y() ? this.dtf.formatToParts(this.dt.toJSDate()) : []
                            }, t.resolvedOptions = function() {
                                return this.hasIntl ? this.dtf.resolvedOptions() : {
                                    locale: "en-US",
                                    numberingSystem: "latn",
                                    outputCalendar: "gregory"
                                }
                            }, e
                        }(),
                        lt = function() {
                            function e(e, t, n) {
                                this.opts = Object.assign({
                                    style: "long"
                                }, n), !t && K() && (this.rtf = function(e, t) {
                                    void 0 === t && (t = {});
                                    var n = t,
                                        i = (n.base, function(e, t) {
                                            if (null == e) return {};
                                            var n, i, r = {},
                                                o = Object.keys(e);
                                            for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                            return r
                                        }(n, ["base"])),
                                        r = JSON.stringify([e, i]),
                                        o = ot[r];
                                    return o || (o = new Intl.RelativeTimeFormat(e, t), ot[r] = o), o
                                }(e, n))
                            }
                            var t = e.prototype;
                            return t.format = function(e, t) {
                                return this.rtf ? this.rtf.format(e, t) : function(e, t, n, i) {
                                    void 0 === n && (n = "always"), void 0 === i && (i = !1);
                                    var r = {
                                            years: ["year", "yr."],
                                            quarters: ["quarter", "qtr."],
                                            months: ["month", "mo."],
                                            weeks: ["week", "wk."],
                                            days: ["day", "day", "days"],
                                            hours: ["hour", "hr."],
                                            minutes: ["minute", "min."],
                                            seconds: ["second", "sec."]
                                        },
                                        o = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                                    if ("auto" === n && o) {
                                        var s = "days" === e;
                                        switch (t) {
                                            case 1:
                                                return s ? "tomorrow" : "next " + r[e][0];
                                            case -1:
                                                return s ? "yesterday" : "last " + r[e][0];
                                            case 0:
                                                return s ? "today" : "this " + r[e][0]
                                        }
                                    }
                                    var a = Object.is(t, -0) || t < 0,
                                        u = Math.abs(t),
                                        c = 1 === u,
                                        l = r[e],
                                        d = i ? c ? l[1] : l[2] || l[1] : c ? r[e][0] : e;
                                    return a ? u + " " + d + " ago" : "in " + u + " " + d
                                }(t, e, this.opts.numeric, "long" !== this.opts.style)
                            }, t.formatToParts = function(e, t) {
                                return this.rtf ? this.rtf.formatToParts(e, t) : []
                            }, e
                        }(),
                        dt = function() {
                            function e(e, t, n, i) {
                                var r = function(e) {
                                        var t = e.indexOf("-u-");
                                        if (-1 === t) return [e];
                                        var n, i = e.substring(0, t);
                                        try {
                                            n = it(e).resolvedOptions()
                                        } catch (e) {
                                            n = it(i).resolvedOptions()
                                        }
                                        var r = n;
                                        return [i, r.numberingSystem, r.calendar]
                                    }(e),
                                    o = r[0],
                                    s = r[1],
                                    a = r[2];
                                this.locale = o, this.numberingSystem = t || s || null, this.outputCalendar = n || a || null, this.intl = function(e, t, n) {
                                    return $() ? n || t ? (e += "-u", n && (e += "-ca-" + n), t && (e += "-nu-" + t), e) : e : []
                                }(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
                                    format: {},
                                    standalone: {}
                                }, this.monthsCache = {
                                    format: {},
                                    standalone: {}
                                }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null
                            }
                            e.fromOpts = function(t) {
                                return e.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN)
                            }, e.create = function(t, n, i, r) {
                                void 0 === r && (r = !1);
                                var o = t || tt.defaultLocale;
                                return new e(o || (r ? "en-US" : function() {
                                    if (st) return st;
                                    if ($()) {
                                        var e = (new Intl.DateTimeFormat).resolvedOptions().locale;
                                        return st = e && "und" !== e ? e : "en-US"
                                    }
                                    return st = "en-US"
                                }()), n || tt.defaultNumberingSystem, i || tt.defaultOutputCalendar, o)
                            }, e.resetCache = function() {
                                st = null, nt = {}, rt = {}, ot = {}
                            }, e.fromObject = function(t) {
                                var n = void 0 === t ? {} : t,
                                    i = n.locale,
                                    r = n.numberingSystem,
                                    o = n.outputCalendar;
                                return e.create(i, r, o)
                            };
                            var t = e.prototype;
                            return t.listingMode = function(e) {
                                void 0 === e && (e = !0);
                                var t = $() && Y(),
                                    n = this.isEnglish(),
                                    i = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar);
                                return t || n && i || e ? !t || n && i ? "en" : "intl" : "error"
                            }, t.clone = function(t) {
                                return t && 0 !== Object.getOwnPropertyNames(t).length ? e.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1) : this
                            }, t.redefaultToEN = function(e) {
                                return void 0 === e && (e = {}), this.clone(Object.assign({}, e, {
                                    defaultToEN: !0
                                }))
                            }, t.redefaultToSystem = function(e) {
                                return void 0 === e && (e = {}), this.clone(Object.assign({}, e, {
                                    defaultToEN: !1
                                }))
                            }, t.months = function(e, t, n) {
                                var i = this;
                                return void 0 === t && (t = !1), void 0 === n && (n = !0), at(this, e, n, ke, (function() {
                                    var n = t ? {
                                            month: e,
                                            day: "numeric"
                                        } : {
                                            month: e
                                        },
                                        r = t ? "format" : "standalone";
                                    return i.monthsCache[r][e] || (i.monthsCache[r][e] = function(e) {
                                        for (var t = [], n = 1; n <= 12; n++) {
                                            var i = si.utc(2016, n, 1);
                                            t.push(e(i))
                                        }
                                        return t
                                    }((function(e) {
                                        return i.extract(e, n, "month")
                                    }))), i.monthsCache[r][e]
                                }))
                            }, t.weekdays = function(e, t, n) {
                                var i = this;
                                return void 0 === t && (t = !1), void 0 === n && (n = !0), at(this, e, n, Ce, (function() {
                                    var n = t ? {
                                            weekday: e,
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        } : {
                                            weekday: e
                                        },
                                        r = t ? "format" : "standalone";
                                    return i.weekdaysCache[r][e] || (i.weekdaysCache[r][e] = function(e) {
                                        for (var t = [], n = 1; n <= 7; n++) {
                                            var i = si.utc(2016, 11, 13 + n);
                                            t.push(e(i))
                                        }
                                        return t
                                    }((function(e) {
                                        return i.extract(e, n, "weekday")
                                    }))), i.weekdaysCache[r][e]
                                }))
                            }, t.meridiems = function(e) {
                                var t = this;
                                return void 0 === e && (e = !0), at(this, void 0, e, (function() {
                                    return Le
                                }), (function() {
                                    if (!t.meridiemCache) {
                                        var e = {
                                            hour: "numeric",
                                            hour12: !0
                                        };
                                        t.meridiemCache = [si.utc(2016, 11, 13, 9), si.utc(2016, 11, 13, 19)].map((function(n) {
                                            return t.extract(n, e, "dayperiod")
                                        }))
                                    }
                                    return t.meridiemCache
                                }))
                            }, t.eras = function(e, t) {
                                var n = this;
                                return void 0 === t && (t = !0), at(this, e, t, Ne, (function() {
                                    var t = {
                                        era: e
                                    };
                                    return n.eraCache[e] || (n.eraCache[e] = [si.utc(-40, 1, 1), si.utc(2017, 1, 1)].map((function(e) {
                                        return n.extract(e, t, "era")
                                    }))), n.eraCache[e]
                                }))
                            }, t.extract = function(e, t, n) {
                                var i = this.dtFormatter(e, t).formatToParts().find((function(e) {
                                    return e.type.toLowerCase() === n
                                }));
                                return i ? i.value : null
                            }, t.numberFormatter = function(e) {
                                return void 0 === e && (e = {}), new ut(this.intl, e.forceSimple || this.fastNumbers, e)
                            }, t.dtFormatter = function(e, t) {
                                return void 0 === t && (t = {}), new ct(e, this.intl, t)
                            }, t.relFormatter = function(e) {
                                return void 0 === e && (e = {}), new lt(this.intl, this.isEnglish(), e)
                            }, t.isEnglish = function() {
                                return "en" === this.locale || "en-us" === this.locale.toLowerCase() || $() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
                            }, t.equals = function(e) {
                                return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar
                            }, r(e, [{
                                key: "fastNumbers",
                                get: function() {
                                    var e;
                                    return null == this.fastNumbersCached && (this.fastNumbersCached = (!(e = this).numberingSystem || "latn" === e.numberingSystem) && ("latn" === e.numberingSystem || !e.locale || e.locale.startsWith("en") || $() && "latn" === new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)), this.fastNumbersCached
                                }
                            }]), e
                        }();

                    function ft() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var i = t.reduce((function(e, t) {
                            return e + t.source
                        }), "");
                        return RegExp("^" + i + "$")
                    }

                    function ht() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e) {
                            return t.reduce((function(t, n) {
                                var i = t[0],
                                    r = t[1],
                                    o = t[2],
                                    s = n(e, o),
                                    a = s[0],
                                    u = s[1],
                                    c = s[2];
                                return [Object.assign(i, a), r || u, c]
                            }), [{}, null, 1]).slice(0, 2)
                        }
                    }

                    function pt(e) {
                        if (null == e) return [null, null];
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        for (var r = 0, o = n; r < o.length; r++) {
                            var s = o[r],
                                a = s[0],
                                u = s[1],
                                c = a.exec(e);
                            if (c) return u(c)
                        }
                        return [null, null]
                    }

                    function gt() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, n) {
                            var i, r = {};
                            for (i = 0; i < t.length; i++) r[t[i]] = ie(e[n + i]);
                            return [r, null, n + i]
                        }
                    }
                    var vt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
                        mt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
                        yt = RegExp("" + mt.source + vt.source + "?"),
                        bt = RegExp("(?:T" + yt.source + ")?"),
                        St = gt("weekYear", "weekNumber", "weekDay"),
                        wt = gt("year", "ordinal"),
                        Et = RegExp(mt.source + " ?(?:" + vt.source + "|(" + ye.source + "))?"),
                        kt = RegExp("(?: " + Et.source + ")?");

                    function Ot(e, t, n) {
                        var i = e[t];
                        return Z(i) ? n : ie(i)
                    }

                    function xt(e, t) {
                        return [{
                            year: Ot(e, t),
                            month: Ot(e, t + 1, 1),
                            day: Ot(e, t + 2, 1)
                        }, null, t + 3]
                    }

                    function Tt(e, t) {
                        return [{
                            hours: Ot(e, t, 0),
                            minutes: Ot(e, t + 1, 0),
                            seconds: Ot(e, t + 2, 0),
                            milliseconds: re(e[t + 3])
                        }, null, t + 4]
                    }

                    function Ct(e, t) {
                        var n = !e[t] && !e[t + 1],
                            i = he(e[t + 1], e[t + 2]);
                        return [{}, n ? null : Ze.instance(i), t + 3]
                    }

                    function Lt(e, t) {
                        return [{}, e[t] ? Be.create(e[t]) : null, t + 1]
                    }
                    var It = RegExp("^T?" + mt.source + "$"),
                        At = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

                    function Dt(e) {
                        var t = e[0],
                            n = e[1],
                            i = e[2],
                            r = e[3],
                            o = e[4],
                            s = e[5],
                            a = e[6],
                            u = e[7],
                            c = e[8],
                            l = "-" === t[0],
                            d = u && "-" === u[0],
                            f = function(e, t) {
                                return void 0 === t && (t = !1), void 0 !== e && (t || e && l) ? -e : e
                            };
                        return [{
                            years: f(ie(n)),
                            months: f(ie(i)),
                            weeks: f(ie(r)),
                            days: f(ie(o)),
                            hours: f(ie(s)),
                            minutes: f(ie(a)),
                            seconds: f(ie(u), "-0" === u),
                            milliseconds: f(re(c), d)
                        }]
                    }
                    var Nt = {
                        GMT: 0,
                        EDT: -240,
                        EST: -300,
                        CDT: -300,
                        CST: -360,
                        MDT: -360,
                        MST: -420,
                        PDT: -420,
                        PST: -480
                    };

                    function Rt(e, t, n, i, r, o, s) {
                        var a = {
                            year: 2 === t.length ? de(ie(t)) : ie(t),
                            month: we.indexOf(n) + 1,
                            day: ie(i),
                            hour: ie(r),
                            minute: ie(o)
                        };
                        return s && (a.second = ie(s)), e && (a.weekday = e.length > 3 ? Oe.indexOf(e) + 1 : xe.indexOf(e) + 1), a
                    }
                    var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

                    function _t(e) {
                        var t, n = e[1],
                            i = e[2],
                            r = e[3],
                            o = e[4],
                            s = e[5],
                            a = e[6],
                            u = e[7],
                            c = e[8],
                            l = e[9],
                            d = e[10],
                            f = e[11],
                            h = Rt(n, o, r, i, s, a, u);
                        return t = c ? Nt[c] : l ? 0 : he(d, f), [h, new Ze(t)]
                    }
                    var jt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
                        Pt = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
                        Vt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

                    function qt(e) {
                        var t = e[1],
                            n = e[2],
                            i = e[3];
                        return [Rt(t, e[4], i, n, e[5], e[6], e[7]), Ze.utcInstance]
                    }

                    function Ut(e) {
                        var t = e[1],
                            n = e[2],
                            i = e[3],
                            r = e[4],
                            o = e[5],
                            s = e[6];
                        return [Rt(t, e[7], n, i, r, o, s), Ze.utcInstance]
                    }
                    var Ft = ft(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, bt),
                        Ht = ft(/(\d{4})-?W(\d\d)(?:-?(\d))?/, bt),
                        zt = ft(/(\d{4})-?(\d{3})/, bt),
                        Bt = ft(yt),
                        Jt = ht(xt, Tt, Ct),
                        Zt = ht(St, Tt, Ct),
                        Gt = ht(wt, Tt, Ct),
                        Wt = ht(Tt, Ct),
                        $t = ht(Tt),
                        Yt = ft(/(\d{4})-(\d\d)-(\d\d)/, kt),
                        Kt = ft(Et),
                        Xt = ht(xt, Tt, Ct, Lt),
                        Qt = ht(Tt, Ct, Lt),
                        en = {
                            weeks: {
                                days: 7,
                                hours: 168,
                                minutes: 10080,
                                seconds: 604800,
                                milliseconds: 6048e5
                            },
                            days: {
                                hours: 24,
                                minutes: 1440,
                                seconds: 86400,
                                milliseconds: 864e5
                            },
                            hours: {
                                minutes: 60,
                                seconds: 3600,
                                milliseconds: 36e5
                            },
                            minutes: {
                                seconds: 60,
                                milliseconds: 6e4
                            },
                            seconds: {
                                milliseconds: 1e3
                            }
                        },
                        tn = Object.assign({
                            years: {
                                quarters: 4,
                                months: 12,
                                weeks: 52,
                                days: 365,
                                hours: 8760,
                                minutes: 525600,
                                seconds: 31536e3,
                                milliseconds: 31536e6
                            },
                            quarters: {
                                months: 3,
                                weeks: 13,
                                days: 91,
                                hours: 2184,
                                minutes: 131040,
                                seconds: 7862400,
                                milliseconds: 78624e5
                            },
                            months: {
                                weeks: 4,
                                days: 30,
                                hours: 720,
                                minutes: 43200,
                                seconds: 2592e3,
                                milliseconds: 2592e6
                            }
                        }, en),
                        nn = Object.assign({
                            years: {
                                quarters: 4,
                                months: 12,
                                weeks: 52.1775,
                                days: 365.2425,
                                hours: 8765.82,
                                minutes: 525949.2,
                                seconds: 525949.2 * 60,
                                milliseconds: 525949.2 * 60 * 1e3
                            },
                            quarters: {
                                months: 3,
                                weeks: 13.044375,
                                days: 91.310625,
                                hours: 2191.455,
                                minutes: 131487.3,
                                seconds: 525949.2 * 60 / 4,
                                milliseconds: 7889237999.999999
                            },
                            months: {
                                weeks: 30.436875 / 7,
                                days: 30.436875,
                                hours: 730.485,
                                minutes: 43829.1,
                                seconds: 2629746,
                                milliseconds: 2629746e3
                            }
                        }, en),
                        rn = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
                        on = rn.slice(0).reverse();

                    function sn(e, t, n) {
                        void 0 === n && (n = !1);
                        var i = {
                            values: n ? t.values : Object.assign({}, e.values, t.values || {}),
                            loc: e.loc.clone(t.loc),
                            conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
                        };
                        return new un(i)
                    }

                    function an(e, t, n, i, r) {
                        var o = e[r][n],
                            s = t[n] / o,
                            a = Math.sign(s) !== Math.sign(i[r]) && 0 !== i[r] && Math.abs(s) <= 1 ? function(e) {
                                return e < 0 ? Math.floor(e) : Math.ceil(e)
                            }(s) : Math.trunc(s);
                        i[r] += a, t[n] -= a * o
                    }
                    var un = function() {
                        function e(e) {
                            var t = "longterm" === e.conversionAccuracy || !1;
                            this.values = e.values, this.loc = e.loc || dt.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = t ? nn : tn, this.isLuxonDuration = !0
                        }
                        e.fromMillis = function(t, n) {
                            return e.fromObject(Object.assign({
                                milliseconds: t
                            }, n))
                        }, e.fromObject = function(t) {
                            if (null == t || "object" != typeof t) throw new b("Duration.fromObject: argument expected to be an object, got " + (null === t ? "null" : typeof t));
                            return new e({
                                values: ge(t, e.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone"]),
                                loc: dt.fromObject(t),
                                conversionAccuracy: t.conversionAccuracy
                            })
                        }, e.fromISO = function(t, n) {
                            var i = function(e) {
                                return pt(e, [At, Dt])
                            }(t)[0];
                            if (i) {
                                var r = Object.assign(i, n);
                                return e.fromObject(r)
                            }
                            return e.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
                        }, e.fromISOTime = function(t, n) {
                            var i = function(e) {
                                return pt(e, [It, $t])
                            }(t)[0];
                            if (i) {
                                var r = Object.assign(i, n);
                                return e.fromObject(r)
                            }
                            return e.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
                        }, e.invalid = function(t, n) {
                            if (void 0 === n && (n = null), !t) throw new b("need to specify a reason the Duration is invalid");
                            var i = t instanceof je ? t : new je(t, n);
                            if (tt.throwOnInvalid) throw new v(i);
                            return new e({
                                invalid: i
                            })
                        }, e.normalizeUnit = function(e) {
                            var t = {
                                year: "years",
                                years: "years",
                                quarter: "quarters",
                                quarters: "quarters",
                                month: "months",
                                months: "months",
                                week: "weeks",
                                weeks: "weeks",
                                day: "days",
                                days: "days",
                                hour: "hours",
                                hours: "hours",
                                minute: "minutes",
                                minutes: "minutes",
                                second: "seconds",
                                seconds: "seconds",
                                millisecond: "milliseconds",
                                milliseconds: "milliseconds"
                            } [e ? e.toLowerCase() : e];
                            if (!t) throw new y(e);
                            return t
                        }, e.isDuration = function(e) {
                            return e && e.isLuxonDuration || !1
                        };
                        var t = e.prototype;
                        return t.toFormat = function(e, t) {
                            void 0 === t && (t = {});
                            var n = Object.assign({}, t, {
                                floor: !1 !== t.round && !1 !== t.floor
                            });
                            return this.isValid ? _e.create(this.loc, n).formatDurationFromString(this, e) : "Invalid Duration"
                        }, t.toObject = function(e) {
                            if (void 0 === e && (e = {}), !this.isValid) return {};
                            var t = Object.assign({}, this.values);
                            return e.includeConfig && (t.conversionAccuracy = this.conversionAccuracy, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t
                        }, t.toISO = function() {
                            if (!this.isValid) return null;
                            var e = "P";
                            return 0 !== this.years && (e += this.years + "Y"), 0 === this.months && 0 === this.quarters || (e += this.months + 3 * this.quarters + "M"), 0 !== this.weeks && (e += this.weeks + "W"), 0 !== this.days && (e += this.days + "D"), 0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e += "T"), 0 !== this.hours && (e += this.hours + "H"), 0 !== this.minutes && (e += this.minutes + "M"), 0 === this.seconds && 0 === this.milliseconds || (e += oe(this.seconds + this.milliseconds / 1e3, 3) + "S"), "P" === e && (e += "T0S"), e
                        }, t.toISOTime = function(e) {
                            if (void 0 === e && (e = {}), !this.isValid) return null;
                            var t = this.toMillis();
                            if (t < 0 || t >= 864e5) return null;
                            e = Object.assign({
                                suppressMilliseconds: !1,
                                suppressSeconds: !1,
                                includePrefix: !1,
                                format: "extended"
                            }, e);
                            var n = this.shiftTo("hours", "minutes", "seconds", "milliseconds"),
                                i = "basic" === e.format ? "hhmm" : "hh:mm";
                            e.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds || (i += "basic" === e.format ? "ss" : ":ss", e.suppressMilliseconds && 0 === n.milliseconds || (i += ".SSS"));
                            var r = n.toFormat(i);
                            return e.includePrefix && (r = "T" + r), r
                        }, t.toJSON = function() {
                            return this.toISO()
                        }, t.toString = function() {
                            return this.toISO()
                        }, t.toMillis = function() {
                            return this.as("milliseconds")
                        }, t.valueOf = function() {
                            return this.toMillis()
                        }, t.plus = function(e) {
                            if (!this.isValid) return this;
                            for (var t, n = cn(e), i = {}, r = f(rn); !(t = r()).done;) {
                                var o = t.value;
                                (ee(n.values, o) || ee(this.values, o)) && (i[o] = n.get(o) + this.get(o))
                            }
                            return sn(this, {
                                values: i
                            }, !0)
                        }, t.minus = function(e) {
                            if (!this.isValid) return this;
                            var t = cn(e);
                            return this.plus(t.negate())
                        }, t.mapUnits = function(e) {
                            if (!this.isValid) return this;
                            for (var t = {}, n = 0, i = Object.keys(this.values); n < i.length; n++) {
                                var r = i[n];
                                t[r] = pe(e(this.values[r], r))
                            }
                            return sn(this, {
                                values: t
                            }, !0)
                        }, t.get = function(t) {
                            return this[e.normalizeUnit(t)]
                        }, t.set = function(t) {
                            return this.isValid ? sn(this, {
                                values: Object.assign(this.values, ge(t, e.normalizeUnit, []))
                            }) : this
                        }, t.reconfigure = function(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.locale,
                                i = t.numberingSystem,
                                r = t.conversionAccuracy,
                                o = {
                                    loc: this.loc.clone({
                                        locale: n,
                                        numberingSystem: i
                                    })
                                };
                            return r && (o.conversionAccuracy = r), sn(this, o)
                        }, t.as = function(e) {
                            return this.isValid ? this.shiftTo(e).get(e) : NaN
                        }, t.normalize = function() {
                            if (!this.isValid) return this;
                            var e = this.toObject();
                            return function(e, t) {
                                on.reduce((function(n, i) {
                                    return Z(t[i]) ? n : (n && an(e, t, n, t, i), i)
                                }), null)
                            }(this.matrix, e), sn(this, {
                                values: e
                            }, !0)
                        }, t.shiftTo = function() {
                            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            if (!this.isValid) return this;
                            if (0 === n.length) return this;
                            n = n.map((function(t) {
                                return e.normalizeUnit(t)
                            }));
                            for (var r, o, s = {}, a = {}, u = this.toObject(), c = f(rn); !(o = c()).done;) {
                                var l = o.value;
                                if (n.indexOf(l) >= 0) {
                                    r = l;
                                    var d = 0;
                                    for (var h in a) d += this.matrix[h][l] * a[h], a[h] = 0;
                                    G(u[l]) && (d += u[l]);
                                    var p = Math.trunc(d);
                                    for (var g in s[l] = p, a[l] = d - p, u) rn.indexOf(g) > rn.indexOf(l) && an(this.matrix, u, g, s, l)
                                } else G(u[l]) && (a[l] = u[l])
                            }
                            for (var v in a) 0 !== a[v] && (s[r] += v === r ? a[v] : a[v] / this.matrix[r][v]);
                            return sn(this, {
                                values: s
                            }, !0).normalize()
                        }, t.negate = function() {
                            if (!this.isValid) return this;
                            for (var e = {}, t = 0, n = Object.keys(this.values); t < n.length; t++) {
                                var i = n[t];
                                e[i] = -this.values[i]
                            }
                            return sn(this, {
                                values: e
                            }, !0)
                        }, t.equals = function(e) {
                            if (!this.isValid || !e.isValid) return !1;
                            if (!this.loc.equals(e.loc)) return !1;
                            for (var t, n = f(rn); !(t = n()).done;) {
                                var i = t.value;
                                if (r = this.values[i], o = e.values[i], !(void 0 === r || 0 === r ? void 0 === o || 0 === o : r === o)) return !1
                            }
                            var r, o;
                            return !0
                        }, r(e, [{
                            key: "locale",
                            get: function() {
                                return this.isValid ? this.loc.locale : null
                            }
                        }, {
                            key: "numberingSystem",
                            get: function() {
                                return this.isValid ? this.loc.numberingSystem : null
                            }
                        }, {
                            key: "years",
                            get: function() {
                                return this.isValid ? this.values.years || 0 : NaN
                            }
                        }, {
                            key: "quarters",
                            get: function() {
                                return this.isValid ? this.values.quarters || 0 : NaN
                            }
                        }, {
                            key: "months",
                            get: function() {
                                return this.isValid ? this.values.months || 0 : NaN
                            }
                        }, {
                            key: "weeks",
                            get: function() {
                                return this.isValid ? this.values.weeks || 0 : NaN
                            }
                        }, {
                            key: "days",
                            get: function() {
                                return this.isValid ? this.values.days || 0 : NaN
                            }
                        }, {
                            key: "hours",
                            get: function() {
                                return this.isValid ? this.values.hours || 0 : NaN
                            }
                        }, {
                            key: "minutes",
                            get: function() {
                                return this.isValid ? this.values.minutes || 0 : NaN
                            }
                        }, {
                            key: "seconds",
                            get: function() {
                                return this.isValid ? this.values.seconds || 0 : NaN
                            }
                        }, {
                            key: "milliseconds",
                            get: function() {
                                return this.isValid ? this.values.milliseconds || 0 : NaN
                            }
                        }, {
                            key: "isValid",
                            get: function() {
                                return null === this.invalid
                            }
                        }, {
                            key: "invalidReason",
                            get: function() {
                                return this.invalid ? this.invalid.reason : null
                            }
                        }, {
                            key: "invalidExplanation",
                            get: function() {
                                return this.invalid ? this.invalid.explanation : null
                            }
                        }]), e
                    }();

                    function cn(e) {
                        if (G(e)) return un.fromMillis(e);
                        if (un.isDuration(e)) return e;
                        if ("object" == typeof e) return un.fromObject(e);
                        throw new b("Unknown duration argument " + e + " of type " + typeof e)
                    }
                    var ln = "Invalid Interval";
                    var dn = function() {
                            function e(e) {
                                this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0
                            }
                            e.invalid = function(t, n) {
                                if (void 0 === n && (n = null), !t) throw new b("need to specify a reason the Interval is invalid");
                                var i = t instanceof je ? t : new je(t, n);
                                if (tt.throwOnInvalid) throw new g(i);
                                return new e({
                                    invalid: i
                                })
                            }, e.fromDateTimes = function(t, n) {
                                var i = ai(t),
                                    r = ai(n),
                                    o = function(e, t) {
                                        return e && e.isValid ? t && t.isValid ? t < e ? dn.invalid("end before start", "The end of an interval must be after its start, but you had start=" + e.toISO() + " and end=" + t.toISO()) : null : dn.invalid("missing or invalid end") : dn.invalid("missing or invalid start")
                                    }(i, r);
                                return null == o ? new e({
                                    start: i,
                                    end: r
                                }) : o
                            }, e.after = function(t, n) {
                                var i = cn(n),
                                    r = ai(t);
                                return e.fromDateTimes(r, r.plus(i))
                            }, e.before = function(t, n) {
                                var i = cn(n),
                                    r = ai(t);
                                return e.fromDateTimes(r.minus(i), r)
                            }, e.fromISO = function(t, n) {
                                var i = (t || "").split("/", 2),
                                    r = i[0],
                                    o = i[1];
                                if (r && o) {
                                    var s, a, u, c;
                                    try {
                                        a = (s = si.fromISO(r, n)).isValid
                                    } catch (o) {
                                        a = !1
                                    }
                                    try {
                                        c = (u = si.fromISO(o, n)).isValid
                                    } catch (o) {
                                        c = !1
                                    }
                                    if (a && c) return e.fromDateTimes(s, u);
                                    if (a) {
                                        var l = un.fromISO(o, n);
                                        if (l.isValid) return e.after(s, l)
                                    } else if (c) {
                                        var d = un.fromISO(r, n);
                                        if (d.isValid) return e.before(u, d)
                                    }
                                }
                                return e.invalid("unparsable", 'the input "' + t + "\" can't be parsed as ISO 8601")
                            }, e.isInterval = function(e) {
                                return e && e.isLuxonInterval || !1
                            };
                            var t = e.prototype;
                            return t.length = function(e) {
                                return void 0 === e && (e = "milliseconds"), this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
                            }, t.count = function(e) {
                                if (void 0 === e && (e = "milliseconds"), !this.isValid) return NaN;
                                var t = this.start.startOf(e),
                                    n = this.end.startOf(e);
                                return Math.floor(n.diff(t, e).get(e)) + 1
                            }, t.hasSame = function(e) {
                                return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
                            }, t.isEmpty = function() {
                                return this.s.valueOf() === this.e.valueOf()
                            }, t.isAfter = function(e) {
                                return !!this.isValid && this.s > e
                            }, t.isBefore = function(e) {
                                return !!this.isValid && this.e <= e
                            }, t.contains = function(e) {
                                return !!this.isValid && this.s <= e && this.e > e
                            }, t.set = function(t) {
                                var n = void 0 === t ? {} : t,
                                    i = n.start,
                                    r = n.end;
                                return this.isValid ? e.fromDateTimes(i || this.s, r || this.e) : this
                            }, t.splitAt = function() {
                                var t = this;
                                if (!this.isValid) return [];
                                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                                for (var o = i.map(ai).filter((function(e) {
                                        return t.contains(e)
                                    })).sort(), s = [], a = this.s, u = 0; a < this.e;) {
                                    var c = o[u] || this.e,
                                        l = +c > +this.e ? this.e : c;
                                    s.push(e.fromDateTimes(a, l)), a = l, u += 1
                                }
                                return s
                            }, t.splitBy = function(t) {
                                var n = cn(t);
                                if (!this.isValid || !n.isValid || 0 === n.as("milliseconds")) return [];
                                for (var i, r = this.s, o = 1, s = []; r < this.e;) {
                                    var a = this.start.plus(n.mapUnits((function(e) {
                                        return e * o
                                    })));
                                    i = +a > +this.e ? this.e : a, s.push(e.fromDateTimes(r, i)), r = i, o += 1
                                }
                                return s
                            }, t.divideEqually = function(e) {
                                return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
                            }, t.overlaps = function(e) {
                                return this.e > e.s && this.s < e.e
                            }, t.abutsStart = function(e) {
                                return !!this.isValid && +this.e == +e.s
                            }, t.abutsEnd = function(e) {
                                return !!this.isValid && +e.e == +this.s
                            }, t.engulfs = function(e) {
                                return !!this.isValid && this.s <= e.s && this.e >= e.e
                            }, t.equals = function(e) {
                                return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
                            }, t.intersection = function(t) {
                                if (!this.isValid) return this;
                                var n = this.s > t.s ? this.s : t.s,
                                    i = this.e < t.e ? this.e : t.e;
                                return n >= i ? null : e.fromDateTimes(n, i)
                            }, t.union = function(t) {
                                if (!this.isValid) return this;
                                var n = this.s < t.s ? this.s : t.s,
                                    i = this.e > t.e ? this.e : t.e;
                                return e.fromDateTimes(n, i)
                            }, e.merge = function(e) {
                                var t = e.sort((function(e, t) {
                                        return e.s - t.s
                                    })).reduce((function(e, t) {
                                        var n = e[0],
                                            i = e[1];
                                        return i ? i.overlaps(t) || i.abutsStart(t) ? [n, i.union(t)] : [n.concat([i]), t] : [n, t]
                                    }), [
                                        [], null
                                    ]),
                                    n = t[0],
                                    i = t[1];
                                return i && n.push(i), n
                            }, e.xor = function(t) {
                                for (var n, i, r = null, o = 0, s = [], a = t.map((function(e) {
                                        return [{
                                            time: e.s,
                                            type: "s"
                                        }, {
                                            time: e.e,
                                            type: "e"
                                        }]
                                    })), u = f((n = Array.prototype).concat.apply(n, a).sort((function(e, t) {
                                        return e.time - t.time
                                    }))); !(i = u()).done;) {
                                    var c = i.value;
                                    1 === (o += "s" === c.type ? 1 : -1) ? r = c.time : (r && +r != +c.time && s.push(e.fromDateTimes(r, c.time)), r = null)
                                }
                                return e.merge(s)
                            }, t.difference = function() {
                                for (var t = this, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                                return e.xor([this].concat(i)).map((function(e) {
                                    return t.intersection(e)
                                })).filter((function(e) {
                                    return e && !e.isEmpty()
                                }))
                            }, t.toString = function() {
                                return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : ln
                            }, t.toISO = function(e) {
                                return this.isValid ? this.s.toISO(e) + "/" + this.e.toISO(e) : ln
                            }, t.toISODate = function() {
                                return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : ln
                            }, t.toISOTime = function(e) {
                                return this.isValid ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e) : ln
                            }, t.toFormat = function(e, t) {
                                var n = (void 0 === t ? {} : t).separator,
                                    i = void 0 === n ? " – " : n;
                                return this.isValid ? "" + this.s.toFormat(e) + i + this.e.toFormat(e) : ln
                            }, t.toDuration = function(e, t) {
                                return this.isValid ? this.e.diff(this.s, e, t) : un.invalid(this.invalidReason)
                            }, t.mapEndpoints = function(t) {
                                return e.fromDateTimes(t(this.s), t(this.e))
                            }, r(e, [{
                                key: "start",
                                get: function() {
                                    return this.isValid ? this.s : null
                                }
                            }, {
                                key: "end",
                                get: function() {
                                    return this.isValid ? this.e : null
                                }
                            }, {
                                key: "isValid",
                                get: function() {
                                    return null === this.invalidReason
                                }
                            }, {
                                key: "invalidReason",
                                get: function() {
                                    return this.invalid ? this.invalid.reason : null
                                }
                            }, {
                                key: "invalidExplanation",
                                get: function() {
                                    return this.invalid ? this.invalid.explanation : null
                                }
                            }]), e
                        }(),
                        fn = function() {
                            function e() {}
                            return e.hasDST = function(e) {
                                void 0 === e && (e = tt.defaultZone);
                                var t = si.now().setZone(e).set({
                                    month: 12
                                });
                                return !e.universal && t.offset !== t.set({
                                    month: 6
                                }).offset
                            }, e.isValidIANAZone = function(e) {
                                return Be.isValidSpecifier(e) && Be.isValidZone(e)
                            }, e.normalizeZone = function(e) {
                                return We(e, tt.defaultZone)
                            }, e.months = function(e, t) {
                                void 0 === e && (e = "long");
                                var n = void 0 === t ? {} : t,
                                    i = n.locale,
                                    r = void 0 === i ? null : i,
                                    o = n.numberingSystem,
                                    s = void 0 === o ? null : o,
                                    a = n.locObj,
                                    u = void 0 === a ? null : a,
                                    c = n.outputCalendar,
                                    l = void 0 === c ? "gregory" : c;
                                return (u || dt.create(r, s, l)).months(e)
                            }, e.monthsFormat = function(e, t) {
                                void 0 === e && (e = "long");
                                var n = void 0 === t ? {} : t,
                                    i = n.locale,
                                    r = void 0 === i ? null : i,
                                    o = n.numberingSystem,
                                    s = void 0 === o ? null : o,
                                    a = n.locObj,
                                    u = void 0 === a ? null : a,
                                    c = n.outputCalendar,
                                    l = void 0 === c ? "gregory" : c;
                                return (u || dt.create(r, s, l)).months(e, !0)
                            }, e.weekdays = function(e, t) {
                                void 0 === e && (e = "long");
                                var n = void 0 === t ? {} : t,
                                    i = n.locale,
                                    r = void 0 === i ? null : i,
                                    o = n.numberingSystem,
                                    s = void 0 === o ? null : o,
                                    a = n.locObj;
                                return ((void 0 === a ? null : a) || dt.create(r, s, null)).weekdays(e)
                            }, e.weekdaysFormat = function(e, t) {
                                void 0 === e && (e = "long");
                                var n = void 0 === t ? {} : t,
                                    i = n.locale,
                                    r = void 0 === i ? null : i,
                                    o = n.numberingSystem,
                                    s = void 0 === o ? null : o,
                                    a = n.locObj;
                                return ((void 0 === a ? null : a) || dt.create(r, s, null)).weekdays(e, !0)
                            }, e.meridiems = function(e) {
                                var t = (void 0 === e ? {} : e).locale,
                                    n = void 0 === t ? null : t;
                                return dt.create(n).meridiems()
                            }, e.eras = function(e, t) {
                                void 0 === e && (e = "short");
                                var n = (void 0 === t ? {} : t).locale,
                                    i = void 0 === n ? null : n;
                                return dt.create(i, null, "gregory").eras(e)
                            }, e.features = function() {
                                var e = !1,
                                    t = !1,
                                    n = !1,
                                    i = !1;
                                if ($()) {
                                    e = !0, t = Y(), i = K();
                                    try {
                                        n = "America/New_York" === new Intl.DateTimeFormat("en", {
                                            timeZone: "America/New_York"
                                        }).resolvedOptions().timeZone
                                    } catch (e) {
                                        n = !1
                                    }
                                }
                                return {
                                    intl: e,
                                    intlTokens: t,
                                    zones: n,
                                    relative: i
                                }
                            }, e
                        }();

                    function hn(e, t) {
                        var n = function(e) {
                                return e.toUTC(0, {
                                    keepLocalTime: !0
                                }).startOf("day").valueOf()
                            },
                            i = n(t) - n(e);
                        return Math.floor(un.fromMillis(i).as("days"))
                    }
                    var pn = {
                            arab: "[٠-٩]",
                            arabext: "[۰-۹]",
                            bali: "[᭐-᭙]",
                            beng: "[০-৯]",
                            deva: "[०-९]",
                            fullwide: "[０-９]",
                            gujr: "[૦-૯]",
                            hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
                            khmr: "[០-៩]",
                            knda: "[೦-೯]",
                            laoo: "[໐-໙]",
                            limb: "[᥆-᥏]",
                            mlym: "[൦-൯]",
                            mong: "[᠐-᠙]",
                            mymr: "[၀-၉]",
                            orya: "[୦-୯]",
                            tamldec: "[௦-௯]",
                            telu: "[౦-౯]",
                            thai: "[๐-๙]",
                            tibt: "[༠-༩]",
                            latn: "\\d"
                        },
                        gn = {
                            arab: [1632, 1641],
                            arabext: [1776, 1785],
                            bali: [6992, 7001],
                            beng: [2534, 2543],
                            deva: [2406, 2415],
                            fullwide: [65296, 65303],
                            gujr: [2790, 2799],
                            khmr: [6112, 6121],
                            knda: [3302, 3311],
                            laoo: [3792, 3801],
                            limb: [6470, 6479],
                            mlym: [3430, 3439],
                            mong: [6160, 6169],
                            mymr: [4160, 4169],
                            orya: [2918, 2927],
                            tamldec: [3046, 3055],
                            telu: [3174, 3183],
                            thai: [3664, 3673],
                            tibt: [3872, 3881]
                        },
                        vn = pn.hanidec.replace(/[\[|\]]/g, "").split("");

                    function mn(e, t) {
                        var n = e.numberingSystem;
                        return void 0 === t && (t = ""), new RegExp("" + pn[n || "latn"] + t)
                    }

                    function yn(e, t) {
                        return void 0 === t && (t = function(e) {
                            return e
                        }), {
                            regex: e,
                            deser: function(e) {
                                var n = e[0];
                                return t(function(e) {
                                    var t = parseInt(e, 10);
                                    if (isNaN(t)) {
                                        t = "";
                                        for (var n = 0; n < e.length; n++) {
                                            var i = e.charCodeAt(n);
                                            if (-1 !== e[n].search(pn.hanidec)) t += vn.indexOf(e[n]);
                                            else
                                                for (var r in gn) {
                                                    var o = gn[r],
                                                        s = o[0],
                                                        a = o[1];
                                                    i >= s && i <= a && (t += i - s)
                                                }
                                        }
                                        return parseInt(t, 10)
                                    }
                                    return t
                                }(n))
                            }
                        }
                    }
                    var bn = "( |" + String.fromCharCode(160) + ")",
                        Sn = new RegExp(bn, "g");

                    function wn(e) {
                        return e.replace(/\./g, "\\.?").replace(Sn, bn)
                    }

                    function En(e) {
                        return e.replace(/\./g, "").replace(Sn, " ").toLowerCase()
                    }

                    function kn(e, t) {
                        return null === e ? null : {
                            regex: RegExp(e.map(wn).join("|")),
                            deser: function(n) {
                                var i = n[0];
                                return e.findIndex((function(e) {
                                    return En(i) === En(e)
                                })) + t
                            }
                        }
                    }

                    function On(e, t) {
                        return {
                            regex: e,
                            deser: function(e) {
                                return he(e[1], e[2])
                            },
                            groups: t
                        }
                    }

                    function xn(e) {
                        return {
                            regex: e,
                            deser: function(e) {
                                return e[0]
                            }
                        }
                    }
                    var Tn = {
                            year: {
                                "2-digit": "yy",
                                numeric: "yyyyy"
                            },
                            month: {
                                numeric: "M",
                                "2-digit": "MM",
                                short: "MMM",
                                long: "MMMM"
                            },
                            day: {
                                numeric: "d",
                                "2-digit": "dd"
                            },
                            weekday: {
                                short: "EEE",
                                long: "EEEE"
                            },
                            dayperiod: "a",
                            dayPeriod: "a",
                            hour: {
                                numeric: "h",
                                "2-digit": "hh"
                            },
                            minute: {
                                numeric: "m",
                                "2-digit": "mm"
                            },
                            second: {
                                numeric: "s",
                                "2-digit": "ss"
                            }
                        },
                        Cn = null;

                    function Ln(e, t, n) {
                        var i = function(e, t) {
                                var n;
                                return (n = Array.prototype).concat.apply(n, e.map((function(e) {
                                    return function(e, t) {
                                        if (e.literal) return e;
                                        var n = _e.macroTokenToFormatOpts(e.val);
                                        if (!n) return e;
                                        var i = _e.create(t, n).formatDateTimeParts((Cn || (Cn = si.fromMillis(1555555555555)), Cn)).map((function(e) {
                                            return function(e, t, n) {
                                                var i = e.type,
                                                    r = e.value;
                                                if ("literal" === i) return {
                                                    literal: !0,
                                                    val: r
                                                };
                                                var o = n[i],
                                                    s = Tn[i];
                                                return "object" == typeof s && (s = s[o]), s ? {
                                                    literal: !1,
                                                    val: s
                                                } : void 0
                                            }(e, 0, n)
                                        }));
                                        return i.includes(void 0) ? e : i
                                    }(e, t)
                                })))
                            }(_e.parseFormat(n), e),
                            r = i.map((function(t) {
                                return n = t, r = mn(i = e), o = mn(i, "{2}"), s = mn(i, "{3}"), a = mn(i, "{4}"), u = mn(i, "{6}"), c = mn(i, "{1,2}"), l = mn(i, "{1,3}"), d = mn(i, "{1,6}"), f = mn(i, "{1,9}"), h = mn(i, "{2,4}"), p = mn(i, "{4,6}"), g = function(e) {
                                    return {
                                        regex: RegExp((t = e.val, t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))),
                                        deser: function(e) {
                                            return e[0]
                                        },
                                        literal: !0
                                    };
                                    var t
                                }, (v = function(e) {
                                    if (n.literal) return g(e);
                                    switch (e.val) {
                                        case "G":
                                            return kn(i.eras("short", !1), 0);
                                        case "GG":
                                            return kn(i.eras("long", !1), 0);
                                        case "y":
                                            return yn(d);
                                        case "yy":
                                        case "kk":
                                            return yn(h, de);
                                        case "yyyy":
                                        case "kkkk":
                                            return yn(a);
                                        case "yyyyy":
                                            return yn(p);
                                        case "yyyyyy":
                                            return yn(u);
                                        case "M":
                                        case "L":
                                        case "d":
                                        case "H":
                                        case "h":
                                        case "m":
                                        case "q":
                                        case "s":
                                        case "W":
                                            return yn(c);
                                        case "MM":
                                        case "LL":
                                        case "dd":
                                        case "HH":
                                        case "hh":
                                        case "mm":
                                        case "qq":
                                        case "ss":
                                        case "WW":
                                            return yn(o);
                                        case "MMM":
                                            return kn(i.months("short", !0, !1), 1);
                                        case "MMMM":
                                            return kn(i.months("long", !0, !1), 1);
                                        case "LLL":
                                            return kn(i.months("short", !1, !1), 1);
                                        case "LLLL":
                                            return kn(i.months("long", !1, !1), 1);
                                        case "o":
                                        case "S":
                                            return yn(l);
                                        case "ooo":
                                        case "SSS":
                                            return yn(s);
                                        case "u":
                                            return xn(f);
                                        case "a":
                                            return kn(i.meridiems(), 0);
                                        case "E":
                                        case "c":
                                            return yn(r);
                                        case "EEE":
                                            return kn(i.weekdays("short", !1, !1), 1);
                                        case "EEEE":
                                            return kn(i.weekdays("long", !1, !1), 1);
                                        case "ccc":
                                            return kn(i.weekdays("short", !0, !1), 1);
                                        case "cccc":
                                            return kn(i.weekdays("long", !0, !1), 1);
                                        case "Z":
                                        case "ZZ":
                                            return On(new RegExp("([+-]" + c.source + ")(?::(" + o.source + "))?"), 2);
                                        case "ZZZ":
                                            return On(new RegExp("([+-]" + c.source + ")(" + o.source + ")?"), 2);
                                        case "z":
                                            return xn(/[a-z_+-/]{1,256}?/i);
                                        default:
                                            return g(e)
                                    }
                                }(n) || {
                                    invalidReason: "missing Intl.DateTimeFormat.formatToParts support"
                                }).token = n, v;
                                var n, i, r, o, s, a, u, c, l, d, f, h, p, g, v
                            })),
                            o = r.find((function(e) {
                                return e.invalidReason
                            }));
                        if (o) return {
                            input: t,
                            tokens: i,
                            invalidReason: o.invalidReason
                        };
                        var s = function(e) {
                                return ["^" + e.map((function(e) {
                                    return e.regex
                                })).reduce((function(e, t) {
                                    return e + "(" + t.source + ")"
                                }), "") + "$", e]
                            }(r),
                            a = s[0],
                            u = s[1],
                            c = RegExp(a, "i"),
                            l = function(e, t, n) {
                                var i = e.match(t);
                                if (i) {
                                    var r = {},
                                        o = 1;
                                    for (var s in n)
                                        if (ee(n, s)) {
                                            var a = n[s],
                                                u = a.groups ? a.groups + 1 : 1;
                                            !a.literal && a.token && (r[a.token.val[0]] = a.deser(i.slice(o, o + u))), o += u
                                        } return [i, r]
                                }
                                return [i, {}]
                            }(t, c, u),
                            d = l[0],
                            f = l[1],
                            h = f ? function(e) {
                                var t;
                                return t = Z(e.Z) ? Z(e.z) ? null : Be.create(e.z) : new Ze(e.Z), Z(e.q) || (e.M = 3 * (e.q - 1) + 1), Z(e.h) || (e.h < 12 && 1 === e.a ? e.h += 12 : 12 === e.h && 0 === e.a && (e.h = 0)), 0 === e.G && e.y && (e.y = -e.y), Z(e.u) || (e.S = re(e.u)), [Object.keys(e).reduce((function(t, n) {
                                    var i = function(e) {
                                        switch (e) {
                                            case "S":
                                                return "millisecond";
                                            case "s":
                                                return "second";
                                            case "m":
                                                return "minute";
                                            case "h":
                                            case "H":
                                                return "hour";
                                            case "d":
                                                return "day";
                                            case "o":
                                                return "ordinal";
                                            case "L":
                                            case "M":
                                                return "month";
                                            case "y":
                                                return "year";
                                            case "E":
                                            case "c":
                                                return "weekday";
                                            case "W":
                                                return "weekNumber";
                                            case "k":
                                                return "weekYear";
                                            case "q":
                                                return "quarter";
                                            default:
                                                return null
                                        }
                                    }(n);
                                    return i && (t[i] = e[n]), t
                                }), {}), t]
                            }(f) : [null, null],
                            p = h[0],
                            g = h[1];
                        if (ee(f, "a") && ee(f, "H")) throw new m("Can't include meridiem when specifying 24-hour format");
                        return {
                            input: t,
                            tokens: i,
                            regex: c,
                            rawMatches: d,
                            matches: f,
                            result: p,
                            zone: g
                        }
                    }
                    var In = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                        An = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

                    function Dn(e, t) {
                        return new je("unit out of range", "you specified " + t + " (of type " + typeof t + ") as a " + e + ", which is invalid")
                    }

                    function Nn(e, t, n) {
                        var i = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
                        return 0 === i ? 7 : i
                    }

                    function Rn(e, t, n) {
                        return n + (se(e) ? An : In)[t - 1]
                    }

                    function Mn(e, t) {
                        var n = se(e) ? An : In,
                            i = n.findIndex((function(e) {
                                return e < t
                            }));
                        return {
                            month: i + 1,
                            day: t - n[i]
                        }
                    }

                    function _n(e) {
                        var t, n = e.year,
                            i = e.month,
                            r = e.day,
                            o = Rn(n, i, r),
                            s = Nn(n, i, r),
                            a = Math.floor((o - s + 10) / 7);
                        return a < 1 ? a = le(t = n - 1) : a > le(n) ? (t = n + 1, a = 1) : t = n, Object.assign({
                            weekYear: t,
                            weekNumber: a,
                            weekday: s
                        }, me(e))
                    }

                    function jn(e) {
                        var t, n = e.weekYear,
                            i = e.weekNumber,
                            r = e.weekday,
                            o = Nn(n, 1, 4),
                            s = ae(n),
                            a = 7 * i + r - o - 3;
                        a < 1 ? a += ae(t = n - 1) : a > s ? (t = n + 1, a -= ae(n)) : t = n;
                        var u = Mn(t, a),
                            c = u.month,
                            l = u.day;
                        return Object.assign({
                            year: t,
                            month: c,
                            day: l
                        }, me(e))
                    }

                    function Pn(e) {
                        var t = e.year,
                            n = Rn(t, e.month, e.day);
                        return Object.assign({
                            year: t,
                            ordinal: n
                        }, me(e))
                    }

                    function Vn(e) {
                        var t = e.year,
                            n = Mn(t, e.ordinal),
                            i = n.month,
                            r = n.day;
                        return Object.assign({
                            year: t,
                            month: i,
                            day: r
                        }, me(e))
                    }

                    function qn(e) {
                        var t = W(e.year),
                            n = te(e.month, 1, 12),
                            i = te(e.day, 1, ue(e.year, e.month));
                        return t ? n ? !i && Dn("day", e.day) : Dn("month", e.month) : Dn("year", e.year)
                    }

                    function Un(e) {
                        var t = e.hour,
                            n = e.minute,
                            i = e.second,
                            r = e.millisecond,
                            o = te(t, 0, 23) || 24 === t && 0 === n && 0 === i && 0 === r,
                            s = te(n, 0, 59),
                            a = te(i, 0, 59),
                            u = te(r, 0, 999);
                        return o ? s ? a ? !u && Dn("millisecond", r) : Dn("second", i) : Dn("minute", n) : Dn("hour", t)
                    }

                    function Fn(e) {
                        return new je("unsupported zone", 'the zone "' + e.name + '" is not supported')
                    }

                    function Hn(e) {
                        return null === e.weekData && (e.weekData = _n(e.c)), e.weekData
                    }

                    function zn(e, t) {
                        var n = {
                            ts: e.ts,
                            zone: e.zone,
                            c: e.c,
                            o: e.o,
                            loc: e.loc,
                            invalid: e.invalid
                        };
                        return new si(Object.assign({}, n, t, {
                            old: n
                        }))
                    }

                    function Bn(e, t, n) {
                        var i = e - 60 * t * 1e3,
                            r = n.offset(i);
                        if (t === r) return [i, t];
                        i -= 60 * (r - t) * 1e3;
                        var o = n.offset(i);
                        return r === o ? [i, r] : [e - 60 * Math.min(r, o) * 1e3, Math.max(r, o)]
                    }

                    function Jn(e, t) {
                        var n = new Date(e += 60 * t * 1e3);
                        return {
                            year: n.getUTCFullYear(),
                            month: n.getUTCMonth() + 1,
                            day: n.getUTCDate(),
                            hour: n.getUTCHours(),
                            minute: n.getUTCMinutes(),
                            second: n.getUTCSeconds(),
                            millisecond: n.getUTCMilliseconds()
                        }
                    }

                    function Zn(e, t, n) {
                        return Bn(ce(e), t, n)
                    }

                    function Gn(e, t) {
                        var n = e.o,
                            i = e.c.year + Math.trunc(t.years),
                            r = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
                            o = Object.assign({}, e.c, {
                                year: i,
                                month: r,
                                day: Math.min(e.c.day, ue(i, r)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks)
                            }),
                            s = un.fromObject({
                                years: t.years - Math.trunc(t.years),
                                quarters: t.quarters - Math.trunc(t.quarters),
                                months: t.months - Math.trunc(t.months),
                                weeks: t.weeks - Math.trunc(t.weeks),
                                days: t.days - Math.trunc(t.days),
                                hours: t.hours,
                                minutes: t.minutes,
                                seconds: t.seconds,
                                milliseconds: t.milliseconds
                            }).as("milliseconds"),
                            a = Bn(ce(o), n, e.zone),
                            u = a[0],
                            c = a[1];
                        return 0 !== s && (u += s, c = e.zone.offset(u)), {
                            ts: u,
                            o: c
                        }
                    }

                    function Wn(e, t, n, i, r) {
                        var o = n.setZone,
                            s = n.zone;
                        if (e && 0 !== Object.keys(e).length) {
                            var a = t || s,
                                u = si.fromObject(Object.assign(e, n, {
                                    zone: a,
                                    setZone: void 0
                                }));
                            return o ? u : u.setZone(s)
                        }
                        return si.invalid(new je("unparsable", 'the input "' + r + "\" can't be parsed as " + i))
                    }

                    function $n(e, t, n) {
                        return void 0 === n && (n = !0), e.isValid ? _e.create(dt.create("en-US"), {
                            allowZ: n,
                            forceSimple: !0
                        }).formatDateTimeFromString(e, t) : null
                    }

                    function Yn(e, t) {
                        var n = t.suppressSeconds,
                            i = void 0 !== n && n,
                            r = t.suppressMilliseconds,
                            o = void 0 !== r && r,
                            s = t.includeOffset,
                            a = t.includePrefix,
                            u = void 0 !== a && a,
                            c = t.includeZone,
                            l = void 0 !== c && c,
                            d = t.spaceZone,
                            f = void 0 !== d && d,
                            h = t.format,
                            p = void 0 === h ? "extended" : h,
                            g = "basic" === p ? "HHmm" : "HH:mm";
                        i && 0 === e.second && 0 === e.millisecond || (g += "basic" === p ? "ss" : ":ss", o && 0 === e.millisecond || (g += ".SSS")), (l || s) && f && (g += " "), l ? g += "z" : s && (g += "basic" === p ? "ZZZ" : "ZZ");
                        var v = $n(e, g);
                        return u && (v = "T" + v), v
                    }
                    var Kn = {
                            month: 1,
                            day: 1,
                            hour: 0,
                            minute: 0,
                            second: 0,
                            millisecond: 0
                        },
                        Xn = {
                            weekNumber: 1,
                            weekday: 1,
                            hour: 0,
                            minute: 0,
                            second: 0,
                            millisecond: 0
                        },
                        Qn = {
                            ordinal: 1,
                            hour: 0,
                            minute: 0,
                            second: 0,
                            millisecond: 0
                        },
                        ei = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
                        ti = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
                        ni = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

                    function ii(e) {
                        var t = {
                            year: "year",
                            years: "year",
                            month: "month",
                            months: "month",
                            day: "day",
                            days: "day",
                            hour: "hour",
                            hours: "hour",
                            minute: "minute",
                            minutes: "minute",
                            quarter: "quarter",
                            quarters: "quarter",
                            second: "second",
                            seconds: "second",
                            millisecond: "millisecond",
                            milliseconds: "millisecond",
                            weekday: "weekday",
                            weekdays: "weekday",
                            weeknumber: "weekNumber",
                            weeksnumber: "weekNumber",
                            weeknumbers: "weekNumber",
                            weekyear: "weekYear",
                            weekyears: "weekYear",
                            ordinal: "ordinal"
                        } [e.toLowerCase()];
                        if (!t) throw new y(e);
                        return t
                    }

                    function ri(e, t) {
                        for (var n, i = f(ei); !(n = i()).done;) {
                            var r = n.value;
                            Z(e[r]) && (e[r] = Kn[r])
                        }
                        var o = qn(e) || Un(e);
                        if (o) return si.invalid(o);
                        var s = tt.now(),
                            a = Zn(e, t.offset(s), t),
                            u = a[0],
                            c = a[1];
                        return new si({
                            ts: u,
                            zone: t,
                            o: c
                        })
                    }

                    function oi(e, t, n) {
                        var i = !!Z(n.round) || n.round,
                            r = function(e, r) {
                                return e = oe(e, i || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(e, r)
                            },
                            o = function(i) {
                                return n.calendary ? t.hasSame(e, i) ? 0 : t.startOf(i).diff(e.startOf(i), i).get(i) : t.diff(e, i).get(i)
                            };
                        if (n.unit) return r(o(n.unit), n.unit);
                        for (var s, a = f(n.units); !(s = a()).done;) {
                            var u = s.value,
                                c = o(u);
                            if (Math.abs(c) >= 1) return r(c, u)
                        }
                        return r(e > t ? -0 : 0, n.units[n.units.length - 1])
                    }
                    var si = function() {
                        function e(e) {
                            var t = e.zone || tt.defaultZone,
                                n = e.invalid || (Number.isNaN(e.ts) ? new je("invalid input") : null) || (t.isValid ? null : Fn(t));
                            this.ts = Z(e.ts) ? tt.now() : e.ts;
                            var i = null,
                                r = null;
                            if (!n)
                                if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) {
                                    var o = [e.old.c, e.old.o];
                                    i = o[0], r = o[1]
                                } else {
                                    var s = t.offset(this.ts);
                                    i = Jn(this.ts, s), i = (n = Number.isNaN(i.year) ? new je("invalid input") : null) ? null : i, r = n ? null : s
                                } this._zone = t, this.loc = e.loc || dt.create(), this.invalid = n, this.weekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0
                        }
                        e.now = function() {
                            return new e({})
                        }, e.local = function(t, n, i, r, o, s, a) {
                            return Z(t) ? e.now() : ri({
                                year: t,
                                month: n,
                                day: i,
                                hour: r,
                                minute: o,
                                second: s,
                                millisecond: a
                            }, tt.defaultZone)
                        }, e.utc = function(t, n, i, r, o, s, a) {
                            return Z(t) ? new e({
                                ts: tt.now(),
                                zone: Ze.utcInstance
                            }) : ri({
                                year: t,
                                month: n,
                                day: i,
                                hour: r,
                                minute: o,
                                second: s,
                                millisecond: a
                            }, Ze.utcInstance)
                        }, e.fromJSDate = function(t, n) {
                            void 0 === n && (n = {});
                            var i, r = (i = t, "[object Date]" === Object.prototype.toString.call(i) ? t.valueOf() : NaN);
                            if (Number.isNaN(r)) return e.invalid("invalid input");
                            var o = We(n.zone, tt.defaultZone);
                            return o.isValid ? new e({
                                ts: r,
                                zone: o,
                                loc: dt.fromObject(n)
                            }) : e.invalid(Fn(o))
                        }, e.fromMillis = function(t, n) {
                            if (void 0 === n && (n = {}), G(t)) return t < -864e13 || t > 864e13 ? e.invalid("Timestamp out of range") : new e({
                                ts: t,
                                zone: We(n.zone, tt.defaultZone),
                                loc: dt.fromObject(n)
                            });
                            throw new b("fromMillis requires a numerical input, but received a " + typeof t + " with value " + t)
                        }, e.fromSeconds = function(t, n) {
                            if (void 0 === n && (n = {}), G(t)) return new e({
                                ts: 1e3 * t,
                                zone: We(n.zone, tt.defaultZone),
                                loc: dt.fromObject(n)
                            });
                            throw new b("fromSeconds requires a numerical input")
                        }, e.fromObject = function(t) {
                            var n = We(t.zone, tt.defaultZone);
                            if (!n.isValid) return e.invalid(Fn(n));
                            var i = tt.now(),
                                r = n.offset(i),
                                o = ge(t, ii, ["zone", "locale", "outputCalendar", "numberingSystem"]),
                                s = !Z(o.ordinal),
                                a = !Z(o.year),
                                u = !Z(o.month) || !Z(o.day),
                                c = a || u,
                                l = o.weekYear || o.weekNumber,
                                d = dt.fromObject(t);
                            if ((c || s) && l) throw new m("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
                            if (u && s) throw new m("Can't mix ordinal dates with month/day");
                            var h, p, g = l || o.weekday && !c,
                                v = Jn(i, r);
                            g ? (h = ti, p = Xn, v = _n(v)) : s ? (h = ni, p = Qn, v = Pn(v)) : (h = ei, p = Kn);
                            for (var y, b = !1, S = f(h); !(y = S()).done;) {
                                var w = y.value;
                                Z(o[w]) ? o[w] = b ? p[w] : v[w] : b = !0
                            }
                            var E = (g ? function(e) {
                                var t = W(e.weekYear),
                                    n = te(e.weekNumber, 1, le(e.weekYear)),
                                    i = te(e.weekday, 1, 7);
                                return t ? n ? !i && Dn("weekday", e.weekday) : Dn("week", e.week) : Dn("weekYear", e.weekYear)
                            }(o) : s ? function(e) {
                                var t = W(e.year),
                                    n = te(e.ordinal, 1, ae(e.year));
                                return t ? !n && Dn("ordinal", e.ordinal) : Dn("year", e.year)
                            }(o) : qn(o)) || Un(o);
                            if (E) return e.invalid(E);
                            var k = Zn(g ? jn(o) : s ? Vn(o) : o, r, n),
                                O = new e({
                                    ts: k[0],
                                    zone: n,
                                    o: k[1],
                                    loc: d
                                });
                            return o.weekday && c && t.weekday !== O.weekday ? e.invalid("mismatched weekday", "you can't specify both a weekday of " + o.weekday + " and a date of " + O.toISO()) : O
                        }, e.fromISO = function(e, t) {
                            void 0 === t && (t = {});
                            var n = function(e) {
                                return pt(e, [Ft, Jt], [Ht, Zt], [zt, Gt], [Bt, Wt])
                            }(e);
                            return Wn(n[0], n[1], t, "ISO 8601", e)
                        }, e.fromRFC2822 = function(e, t) {
                            void 0 === t && (t = {});
                            var n = function(e) {
                                return pt(function(e) {
                                    return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
                                }(e), [Mt, _t])
                            }(e);
                            return Wn(n[0], n[1], t, "RFC 2822", e)
                        }, e.fromHTTP = function(e, t) {
                            void 0 === t && (t = {});
                            var n = function(e) {
                                return pt(e, [jt, qt], [Pt, qt], [Vt, Ut])
                            }(e);
                            return Wn(n[0], n[1], t, "HTTP", t)
                        }, e.fromFormat = function(t, n, i) {
                            if (void 0 === i && (i = {}), Z(t) || Z(n)) throw new b("fromFormat requires an input string and a format");
                            var r = i,
                                o = r.locale,
                                s = void 0 === o ? null : o,
                                a = r.numberingSystem,
                                u = void 0 === a ? null : a,
                                c = function(e, t, n) {
                                    var i = Ln(e, t, n);
                                    return [i.result, i.zone, i.invalidReason]
                                }(dt.fromOpts({
                                    locale: s,
                                    numberingSystem: u,
                                    defaultToEN: !0
                                }), t, n),
                                l = c[0],
                                d = c[1],
                                f = c[2];
                            return f ? e.invalid(f) : Wn(l, d, i, "format " + n, t)
                        }, e.fromString = function(t, n, i) {
                            return void 0 === i && (i = {}), e.fromFormat(t, n, i)
                        }, e.fromSQL = function(e, t) {
                            void 0 === t && (t = {});
                            var n = function(e) {
                                return pt(e, [Yt, Xt], [Kt, Qt])
                            }(e);
                            return Wn(n[0], n[1], t, "SQL", e)
                        }, e.invalid = function(t, n) {
                            if (void 0 === n && (n = null), !t) throw new b("need to specify a reason the DateTime is invalid");
                            var i = t instanceof je ? t : new je(t, n);
                            if (tt.throwOnInvalid) throw new p(i);
                            return new e({
                                invalid: i
                            })
                        }, e.isDateTime = function(e) {
                            return e && e.isLuxonDateTime || !1
                        };
                        var t = e.prototype;
                        return t.get = function(e) {
                            return this[e]
                        }, t.resolvedLocaleOpts = function(e) {
                            void 0 === e && (e = {});
                            var t = _e.create(this.loc.clone(e), e).resolvedOptions(this);
                            return {
                                locale: t.locale,
                                numberingSystem: t.numberingSystem,
                                outputCalendar: t.calendar
                            }
                        }, t.toUTC = function(e, t) {
                            return void 0 === e && (e = 0), void 0 === t && (t = {}), this.setZone(Ze.instance(e), t)
                        }, t.toLocal = function() {
                            return this.setZone(tt.defaultZone)
                        }, t.setZone = function(t, n) {
                            var i = void 0 === n ? {} : n,
                                r = i.keepLocalTime,
                                o = void 0 !== r && r,
                                s = i.keepCalendarTime,
                                a = void 0 !== s && s;
                            if ((t = We(t, tt.defaultZone)).equals(this.zone)) return this;
                            if (t.isValid) {
                                var u = this.ts;
                                if (o || a) {
                                    var c = t.offset(this.ts);
                                    u = Zn(this.toObject(), c, t)[0]
                                }
                                return zn(this, {
                                    ts: u,
                                    zone: t
                                })
                            }
                            return e.invalid(Fn(t))
                        }, t.reconfigure = function(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.locale,
                                i = t.numberingSystem,
                                r = t.outputCalendar;
                            return zn(this, {
                                loc: this.loc.clone({
                                    locale: n,
                                    numberingSystem: i,
                                    outputCalendar: r
                                })
                            })
                        }, t.setLocale = function(e) {
                            return this.reconfigure({
                                locale: e
                            })
                        }, t.set = function(e) {
                            if (!this.isValid) return this;
                            var t, n = ge(e, ii, []),
                                i = !Z(n.weekYear) || !Z(n.weekNumber) || !Z(n.weekday),
                                r = !Z(n.ordinal),
                                o = !Z(n.year),
                                s = !Z(n.month) || !Z(n.day),
                                a = o || s,
                                u = n.weekYear || n.weekNumber;
                            if ((a || r) && u) throw new m("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
                            if (s && r) throw new m("Can't mix ordinal dates with month/day");
                            i ? t = jn(Object.assign(_n(this.c), n)) : Z(n.ordinal) ? (t = Object.assign(this.toObject(), n), Z(n.day) && (t.day = Math.min(ue(t.year, t.month), t.day))) : t = Vn(Object.assign(Pn(this.c), n));
                            var c = Zn(t, this.o, this.zone);
                            return zn(this, {
                                ts: c[0],
                                o: c[1]
                            })
                        }, t.plus = function(e) {
                            return this.isValid ? zn(this, Gn(this, cn(e))) : this
                        }, t.minus = function(e) {
                            return this.isValid ? zn(this, Gn(this, cn(e).negate())) : this
                        }, t.startOf = function(e) {
                            if (!this.isValid) return this;
                            var t = {},
                                n = un.normalizeUnit(e);
                            switch (n) {
                                case "years":
                                    t.month = 1;
                                case "quarters":
                                case "months":
                                    t.day = 1;
                                case "weeks":
                                case "days":
                                    t.hour = 0;
                                case "hours":
                                    t.minute = 0;
                                case "minutes":
                                    t.second = 0;
                                case "seconds":
                                    t.millisecond = 0
                            }
                            if ("weeks" === n && (t.weekday = 1), "quarters" === n) {
                                var i = Math.ceil(this.month / 3);
                                t.month = 3 * (i - 1) + 1
                            }
                            return this.set(t)
                        }, t.endOf = function(e) {
                            var t;
                            return this.isValid ? this.plus((t = {}, t[e] = 1, t)).startOf(e).minus(1) : this
                        }, t.toFormat = function(e, t) {
                            return void 0 === t && (t = {}), this.isValid ? _e.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : "Invalid DateTime"
                        }, t.toLocaleString = function(e) {
                            return void 0 === e && (e = O), this.isValid ? _e.create(this.loc.clone(e), e).formatDateTime(this) : "Invalid DateTime"
                        }, t.toLocaleParts = function(e) {
                            return void 0 === e && (e = {}), this.isValid ? _e.create(this.loc.clone(e), e).formatDateTimeParts(this) : []
                        }, t.toISO = function(e) {
                            return void 0 === e && (e = {}), this.isValid ? this.toISODate(e) + "T" + this.toISOTime(e) : null
                        }, t.toISODate = function(e) {
                            var t = (void 0 === e ? {} : e).format,
                                n = "basic" === (void 0 === t ? "extended" : t) ? "yyyyMMdd" : "yyyy-MM-dd";
                            return this.year > 9999 && (n = "+" + n), $n(this, n)
                        }, t.toISOWeekDate = function() {
                            return $n(this, "kkkk-'W'WW-c")
                        }, t.toISOTime = function(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.suppressMilliseconds,
                                i = void 0 !== n && n,
                                r = t.suppressSeconds,
                                o = void 0 !== r && r,
                                s = t.includeOffset,
                                a = void 0 === s || s,
                                u = t.includePrefix,
                                c = void 0 !== u && u,
                                l = t.format;
                            return Yn(this, {
                                suppressSeconds: o,
                                suppressMilliseconds: i,
                                includeOffset: a,
                                includePrefix: c,
                                format: void 0 === l ? "extended" : l
                            })
                        }, t.toRFC2822 = function() {
                            return $n(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
                        }, t.toHTTP = function() {
                            return $n(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
                        }, t.toSQLDate = function() {
                            return $n(this, "yyyy-MM-dd")
                        }, t.toSQLTime = function(e) {
                            var t = void 0 === e ? {} : e,
                                n = t.includeOffset,
                                i = void 0 === n || n,
                                r = t.includeZone;
                            return Yn(this, {
                                includeOffset: i,
                                includeZone: void 0 !== r && r,
                                spaceZone: !0
                            })
                        }, t.toSQL = function(e) {
                            return void 0 === e && (e = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null
                        }, t.toString = function() {
                            return this.isValid ? this.toISO() : "Invalid DateTime"
                        }, t.valueOf = function() {
                            return this.toMillis()
                        }, t.toMillis = function() {
                            return this.isValid ? this.ts : NaN
                        }, t.toSeconds = function() {
                            return this.isValid ? this.ts / 1e3 : NaN
                        }, t.toJSON = function() {
                            return this.toISO()
                        }, t.toBSON = function() {
                            return this.toJSDate()
                        }, t.toObject = function(e) {
                            if (void 0 === e && (e = {}), !this.isValid) return {};
                            var t = Object.assign({}, this.c);
                            return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t
                        }, t.toJSDate = function() {
                            return new Date(this.isValid ? this.ts : NaN)
                        }, t.diff = function(e, t, n) {
                            if (void 0 === t && (t = "milliseconds"), void 0 === n && (n = {}), !this.isValid || !e.isValid) return un.invalid(this.invalid || e.invalid, "created by diffing an invalid DateTime");
                            var i, r = Object.assign({
                                    locale: this.locale,
                                    numberingSystem: this.numberingSystem
                                }, n),
                                o = (i = t, Array.isArray(i) ? i : [i]).map(un.normalizeUnit),
                                s = e.valueOf() > this.valueOf(),
                                a = function(e, t, n, i) {
                                    var r, o = function(e, t, n) {
                                            for (var i, r, o = {}, s = 0, a = [
                                                    ["years", function(e, t) {
                                                        return t.year - e.year
                                                    }],
                                                    ["quarters", function(e, t) {
                                                        return t.quarter - e.quarter
                                                    }],
                                                    ["months", function(e, t) {
                                                        return t.month - e.month + 12 * (t.year - e.year)
                                                    }],
                                                    ["weeks", function(e, t) {
                                                        var n = hn(e, t);
                                                        return (n - n % 7) / 7
                                                    }],
                                                    ["days", hn]
                                                ]; s < a.length; s++) {
                                                var u = a[s],
                                                    c = u[0],
                                                    l = u[1];
                                                if (n.indexOf(c) >= 0) {
                                                    var d;
                                                    i = c;
                                                    var f, h = l(e, t);
                                                    (r = e.plus(((d = {})[c] = h, d))) > t ? (e = e.plus(((f = {})[c] = h - 1, f)), h -= 1) : e = r, o[c] = h
                                                }
                                            }
                                            return [e, o, r, i]
                                        }(e, t, n),
                                        s = o[0],
                                        a = o[1],
                                        u = o[2],
                                        c = o[3],
                                        l = t - s,
                                        d = n.filter((function(e) {
                                            return ["hours", "minutes", "seconds", "milliseconds"].indexOf(e) >= 0
                                        }));
                                    0 === d.length && (u < t && (u = s.plus(((r = {})[c] = 1, r))), u !== s && (a[c] = (a[c] || 0) + l / (u - s)));
                                    var f, h = un.fromObject(Object.assign(a, i));
                                    return d.length > 0 ? (f = un.fromMillis(l, i)).shiftTo.apply(f, d).plus(h) : h
                                }(s ? this : e, s ? e : this, o, r);
                            return s ? a.negate() : a
                        }, t.diffNow = function(t, n) {
                            return void 0 === t && (t = "milliseconds"), void 0 === n && (n = {}), this.diff(e.now(), t, n)
                        }, t.until = function(e) {
                            return this.isValid ? dn.fromDateTimes(this, e) : this
                        }, t.hasSame = function(e, t) {
                            if (!this.isValid) return !1;
                            var n = e.valueOf(),
                                i = this.setZone(e.zone, {
                                    keepLocalTime: !0
                                });
                            return i.startOf(t) <= n && n <= i.endOf(t)
                        }, t.equals = function(e) {
                            return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc)
                        }, t.toRelative = function(t) {
                            if (void 0 === t && (t = {}), !this.isValid) return null;
                            var n = t.base || e.fromObject({
                                    zone: this.zone
                                }),
                                i = t.padding ? this < n ? -t.padding : t.padding : 0,
                                r = ["years", "months", "days", "hours", "minutes", "seconds"],
                                o = t.unit;
                            return Array.isArray(t.unit) && (r = t.unit, o = void 0), oi(n, this.plus(i), Object.assign(t, {
                                numeric: "always",
                                units: r,
                                unit: o
                            }))
                        }, t.toRelativeCalendar = function(t) {
                            return void 0 === t && (t = {}), this.isValid ? oi(t.base || e.fromObject({
                                zone: this.zone
                            }), this, Object.assign(t, {
                                numeric: "auto",
                                units: ["years", "months", "days"],
                                calendary: !0
                            })) : null
                        }, e.min = function() {
                            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            if (!n.every(e.isDateTime)) throw new b("min requires all arguments be DateTimes");
                            return X(n, (function(e) {
                                return e.valueOf()
                            }), Math.min)
                        }, e.max = function() {
                            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            if (!n.every(e.isDateTime)) throw new b("max requires all arguments be DateTimes");
                            return X(n, (function(e) {
                                return e.valueOf()
                            }), Math.max)
                        }, e.fromFormatExplain = function(e, t, n) {
                            void 0 === n && (n = {});
                            var i = n,
                                r = i.locale,
                                o = void 0 === r ? null : r,
                                s = i.numberingSystem,
                                a = void 0 === s ? null : s;
                            return Ln(dt.fromOpts({
                                locale: o,
                                numberingSystem: a,
                                defaultToEN: !0
                            }), e, t)
                        }, e.fromStringExplain = function(t, n, i) {
                            return void 0 === i && (i = {}), e.fromFormatExplain(t, n, i)
                        }, r(e, [{
                            key: "isValid",
                            get: function() {
                                return null === this.invalid
                            }
                        }, {
                            key: "invalidReason",
                            get: function() {
                                return this.invalid ? this.invalid.reason : null
                            }
                        }, {
                            key: "invalidExplanation",
                            get: function() {
                                return this.invalid ? this.invalid.explanation : null
                            }
                        }, {
                            key: "locale",
                            get: function() {
                                return this.isValid ? this.loc.locale : null
                            }
                        }, {
                            key: "numberingSystem",
                            get: function() {
                                return this.isValid ? this.loc.numberingSystem : null
                            }
                        }, {
                            key: "outputCalendar",
                            get: function() {
                                return this.isValid ? this.loc.outputCalendar : null
                            }
                        }, {
                            key: "zone",
                            get: function() {
                                return this._zone
                            }
                        }, {
                            key: "zoneName",
                            get: function() {
                                return this.isValid ? this.zone.name : null
                            }
                        }, {
                            key: "year",
                            get: function() {
                                return this.isValid ? this.c.year : NaN
                            }
                        }, {
                            key: "quarter",
                            get: function() {
                                return this.isValid ? Math.ceil(this.c.month / 3) : NaN
                            }
                        }, {
                            key: "month",
                            get: function() {
                                return this.isValid ? this.c.month : NaN
                            }
                        }, {
                            key: "day",
                            get: function() {
                                return this.isValid ? this.c.day : NaN
                            }
                        }, {
                            key: "hour",
                            get: function() {
                                return this.isValid ? this.c.hour : NaN
                            }
                        }, {
                            key: "minute",
                            get: function() {
                                return this.isValid ? this.c.minute : NaN
                            }
                        }, {
                            key: "second",
                            get: function() {
                                return this.isValid ? this.c.second : NaN
                            }
                        }, {
                            key: "millisecond",
                            get: function() {
                                return this.isValid ? this.c.millisecond : NaN
                            }
                        }, {
                            key: "weekYear",
                            get: function() {
                                return this.isValid ? Hn(this).weekYear : NaN
                            }
                        }, {
                            key: "weekNumber",
                            get: function() {
                                return this.isValid ? Hn(this).weekNumber : NaN
                            }
                        }, {
                            key: "weekday",
                            get: function() {
                                return this.isValid ? Hn(this).weekday : NaN
                            }
                        }, {
                            key: "ordinal",
                            get: function() {
                                return this.isValid ? Pn(this.c).ordinal : NaN
                            }
                        }, {
                            key: "monthShort",
                            get: function() {
                                return this.isValid ? fn.months("short", {
                                    locObj: this.loc
                                })[this.month - 1] : null
                            }
                        }, {
                            key: "monthLong",
                            get: function() {
                                return this.isValid ? fn.months("long", {
                                    locObj: this.loc
                                })[this.month - 1] : null
                            }
                        }, {
                            key: "weekdayShort",
                            get: function() {
                                return this.isValid ? fn.weekdays("short", {
                                    locObj: this.loc
                                })[this.weekday - 1] : null
                            }
                        }, {
                            key: "weekdayLong",
                            get: function() {
                                return this.isValid ? fn.weekdays("long", {
                                    locObj: this.loc
                                })[this.weekday - 1] : null
                            }
                        }, {
                            key: "offset",
                            get: function() {
                                return this.isValid ? +this.o : NaN
                            }
                        }, {
                            key: "offsetNameShort",
                            get: function() {
                                return this.isValid ? this.zone.offsetName(this.ts, {
                                    format: "short",
                                    locale: this.locale
                                }) : null
                            }
                        }, {
                            key: "offsetNameLong",
                            get: function() {
                                return this.isValid ? this.zone.offsetName(this.ts, {
                                    format: "long",
                                    locale: this.locale
                                }) : null
                            }
                        }, {
                            key: "isOffsetFixed",
                            get: function() {
                                return this.isValid ? this.zone.universal : null
                            }
                        }, {
                            key: "isInDST",
                            get: function() {
                                return !this.isOffsetFixed && (this.offset > this.set({
                                    month: 1
                                }).offset || this.offset > this.set({
                                    month: 5
                                }).offset)
                            }
                        }, {
                            key: "isInLeapYear",
                            get: function() {
                                return se(this.year)
                            }
                        }, {
                            key: "daysInMonth",
                            get: function() {
                                return ue(this.year, this.month)
                            }
                        }, {
                            key: "daysInYear",
                            get: function() {
                                return this.isValid ? ae(this.year) : NaN
                            }
                        }, {
                            key: "weeksInWeekYear",
                            get: function() {
                                return this.isValid ? le(this.weekYear) : NaN
                            }
                        }], [{
                            key: "DATE_SHORT",
                            get: function() {
                                return O
                            }
                        }, {
                            key: "DATE_MED",
                            get: function() {
                                return x
                            }
                        }, {
                            key: "DATE_MED_WITH_WEEKDAY",
                            get: function() {
                                return T
                            }
                        }, {
                            key: "DATE_FULL",
                            get: function() {
                                return C
                            }
                        }, {
                            key: "DATE_HUGE",
                            get: function() {
                                return L
                            }
                        }, {
                            key: "TIME_SIMPLE",
                            get: function() {
                                return I
                            }
                        }, {
                            key: "TIME_WITH_SECONDS",
                            get: function() {
                                return A
                            }
                        }, {
                            key: "TIME_WITH_SHORT_OFFSET",
                            get: function() {
                                return D
                            }
                        }, {
                            key: "TIME_WITH_LONG_OFFSET",
                            get: function() {
                                return N
                            }
                        }, {
                            key: "TIME_24_SIMPLE",
                            get: function() {
                                return R
                            }
                        }, {
                            key: "TIME_24_WITH_SECONDS",
                            get: function() {
                                return M
                            }
                        }, {
                            key: "TIME_24_WITH_SHORT_OFFSET",
                            get: function() {
                                return _
                            }
                        }, {
                            key: "TIME_24_WITH_LONG_OFFSET",
                            get: function() {
                                return j
                            }
                        }, {
                            key: "DATETIME_SHORT",
                            get: function() {
                                return P
                            }
                        }, {
                            key: "DATETIME_SHORT_WITH_SECONDS",
                            get: function() {
                                return V
                            }
                        }, {
                            key: "DATETIME_MED",
                            get: function() {
                                return q
                            }
                        }, {
                            key: "DATETIME_MED_WITH_SECONDS",
                            get: function() {
                                return U
                            }
                        }, {
                            key: "DATETIME_MED_WITH_WEEKDAY",
                            get: function() {
                                return F
                            }
                        }, {
                            key: "DATETIME_FULL",
                            get: function() {
                                return H
                            }
                        }, {
                            key: "DATETIME_FULL_WITH_SECONDS",
                            get: function() {
                                return z
                            }
                        }, {
                            key: "DATETIME_HUGE",
                            get: function() {
                                return B
                            }
                        }, {
                            key: "DATETIME_HUGE_WITH_SECONDS",
                            get: function() {
                                return J
                            }
                        }]), e
                    }();

                    function ai(e) {
                        if (si.isDateTime(e)) return e;
                        if (e && e.valueOf && G(e.valueOf())) return si.fromJSDate(e);
                        if (e && "object" == typeof e) return si.fromObject(e);
                        throw new b("Unknown datetime argument: " + e + ", of type " + typeof e)
                    }
                    t.DateTime = si, t.Duration = un, t.FixedOffsetZone = Ze, t.IANAZone = Be, t.Info = fn, t.Interval = dn, t.InvalidZone = Ge, t.LocalZone = qe, t.Settings = tt, t.VERSION = "1.28.0", t.Zone = Pe
                }, function(e, t, n) {
                    "use strict";
                    var i = n(41);
                    e.exports = function(e) {
                        if (!i(e)) throw new TypeError(e + " is not an Object");
                        return e
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(6),
                        r = {
                            function: !0,
                            object: !0
                        };
                    e.exports = function(e) {
                        return i(e) && r[typeof e] || !1
                    }
                }, function(e, t, n) {
                    e.exports = n(43)
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1),
                        r = n(11),
                        o = n(44),
                        s = n(17);

                    function a(e) {
                        var t = new o(e),
                            n = r(o.prototype.request, t);
                        return i.extend(n, o.prototype, t), i.extend(n, t), n
                    }
                    var u = a(n(8));
                    u.Axios = o, u.create = function(e) {
                        return a(s(u.defaults, e))
                    }, u.Cancel = n(18), u.CancelToken = n(59), u.isCancel = n(16), u.all = function(e) {
                        return Promise.all(e)
                    }, u.spread = n(60), u.isAxiosError = n(61), e.exports = u, e.exports.default = u
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1),
                        r = n(12),
                        o = n(45),
                        s = n(46),
                        a = n(17),
                        u = n(57),
                        c = u.validators;

                    function l(e) {
                        this.defaults = e, this.interceptors = {
                            request: new o,
                            response: new o
                        }
                    }
                    l.prototype.request = function(e) {
                        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                        var t = e.transitional;
                        void 0 !== t && u.assertOptions(t, {
                            silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
                            forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
                            clarifyTimeoutError: c.transitional(c.boolean, "1.0.0")
                        }, !1);
                        var n = [],
                            i = !0;
                        this.interceptors.request.forEach((function(t) {
                            "function" == typeof t.runWhen && !1 === t.runWhen(e) || (i = i && t.synchronous, n.unshift(t.fulfilled, t.rejected))
                        }));
                        var r, o = [];
                        if (this.interceptors.response.forEach((function(e) {
                                o.push(e.fulfilled, e.rejected)
                            })), !i) {
                            var l = [s, void 0];
                            for (Array.prototype.unshift.apply(l, n), l = l.concat(o), r = Promise.resolve(e); l.length;) r = r.then(l.shift(), l.shift());
                            return r
                        }
                        for (var d = e; n.length;) {
                            var f = n.shift(),
                                h = n.shift();
                            try {
                                d = f(d)
                            } catch (e) {
                                h(e);
                                break
                            }
                        }
                        try {
                            r = s(d)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                        for (; o.length;) r = r.then(o.shift(), o.shift());
                        return r
                    }, l.prototype.getUri = function(e) {
                        return e = a(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
                    }, i.forEach(["delete", "get", "head", "options"], (function(e) {
                        l.prototype[e] = function(t, n) {
                            return this.request(a(n || {}, {
                                method: e,
                                url: t,
                                data: (n || {}).data
                            }))
                        }
                    })), i.forEach(["post", "put", "patch"], (function(e) {
                        l.prototype[e] = function(t, n, i) {
                            return this.request(a(i || {}, {
                                method: e,
                                url: t,
                                data: n
                            }))
                        }
                    })), e.exports = l
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1);

                    function r() {
                        this.handlers = []
                    }
                    r.prototype.use = function(e, t, n) {
                        return this.handlers.push({
                            fulfilled: e,
                            rejected: t,
                            synchronous: !!n && n.synchronous,
                            runWhen: n ? n.runWhen : null
                        }), this.handlers.length - 1
                    }, r.prototype.eject = function(e) {
                        this.handlers[e] && (this.handlers[e] = null)
                    }, r.prototype.forEach = function(e) {
                        i.forEach(this.handlers, (function(t) {
                            null !== t && e(t)
                        }))
                    }, e.exports = r
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1),
                        r = n(47),
                        o = n(16),
                        s = n(8);

                    function a(e) {
                        e.cancelToken && e.cancelToken.throwIfRequested()
                    }
                    e.exports = function(e) {
                        return a(e), e.headers = e.headers || {}, e.data = r.call(e, e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                            delete e.headers[t]
                        })), (e.adapter || s.adapter)(e).then((function(t) {
                            return a(e), t.data = r.call(e, t.data, t.headers, e.transformResponse), t
                        }), (function(t) {
                            return o(t) || (a(e), t && t.response && (t.response.data = r.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                        }))
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1),
                        r = n(8);
                    e.exports = function(e, t, n) {
                        var o = this || r;
                        return i.forEach(n, (function(n) {
                            e = n.call(o, e, t)
                        })), e
                    }
                }, function(e, t) {
                    var n, i, r = e.exports = {};

                    function o() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function s() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function a(e) {
                        if (n === setTimeout) return setTimeout(e, 0);
                        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                        try {
                            return n(e, 0)
                        } catch (t) {
                            try {
                                return n.call(null, e, 0)
                            } catch (t) {
                                return n.call(this, e, 0)
                            }
                        }
                    }! function() {
                        try {
                            n = "function" == typeof setTimeout ? setTimeout : o
                        } catch (e) {
                            n = o
                        }
                        try {
                            i = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch (e) {
                            i = s
                        }
                    }();
                    var u, c = [],
                        l = !1,
                        d = -1;

                    function f() {
                        l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && h())
                    }

                    function h() {
                        if (!l) {
                            var e = a(f);
                            l = !0;
                            for (var t = c.length; t;) {
                                for (u = c, c = []; ++d < t;) u && u[d].run();
                                d = -1, t = c.length
                            }
                            u = null, l = !1,
                                function(e) {
                                    if (i === clearTimeout) return clearTimeout(e);
                                    if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                                    try {
                                        i(e)
                                    } catch (t) {
                                        try {
                                            return i.call(null, e)
                                        } catch (t) {
                                            return i.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }

                    function p(e, t) {
                        this.fun = e, this.array = t
                    }

                    function g() {}
                    r.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        c.push(new p(e, t)), 1 !== c.length || l || a(h)
                    }, p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function(e) {
                        return []
                    }, r.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, r.cwd = function() {
                        return "/"
                    }, r.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, r.umask = function() {
                        return 0
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1);
                    e.exports = function(e, t) {
                        i.forEach(e, (function(n, i) {
                            i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i])
                        }))
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(15);
                    e.exports = function(e, t, n) {
                        var r = n.config.validateStatus;
                        n.status && r && !r(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1);
                    e.exports = i.isStandardBrowserEnv() ? {
                        write: function(e, t, n, r, o, s) {
                            var a = [];
                            a.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), i.isString(r) && a.push("path=" + r), i.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
                        },
                        read: function(e) {
                            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                            return t ? decodeURIComponent(t[3]) : null
                        },
                        remove: function(e) {
                            this.write(e, "", Date.now() - 864e5)
                        }
                    } : {
                        write: function() {},
                        read: function() {
                            return null
                        },
                        remove: function() {}
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(53),
                        r = n(54);
                    e.exports = function(e, t) {
                        return e && !i(t) ? r(e, t) : t
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e) {
                        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e, t) {
                        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1),
                        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                    e.exports = function(e) {
                        var t, n, o, s = {};
                        return e ? (i.forEach(e.split("\n"), (function(e) {
                            if (o = e.indexOf(":"), t = i.trim(e.substr(0, o)).toLowerCase(), n = i.trim(e.substr(o + 1)), t) {
                                if (s[t] && r.indexOf(t) >= 0) return;
                                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                            }
                        })), s) : s
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1);
                    e.exports = i.isStandardBrowserEnv() ? function() {
                        var e, t = /(msie|trident)/i.test(navigator.userAgent),
                            n = document.createElement("a");

                        function r(e) {
                            var i = e;
                            return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
                                href: n.href,
                                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                                host: n.host,
                                search: n.search ? n.search.replace(/^\?/, "") : "",
                                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                                hostname: n.hostname,
                                port: n.port,
                                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                            }
                        }
                        return e = r(window.location.href),
                            function(t) {
                                var n = i.isString(t) ? r(t) : t;
                                return n.protocol === e.protocol && n.host === e.host
                            }
                    }() : function() {
                        return !0
                    }
                }, function(e, t, n) {
                    "use strict";
                    var i = n(58),
                        r = {};
                    ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                        r[e] = function(n) {
                            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                        }
                    }));
                    var o = {},
                        s = i.version.split(".");

                    function a(e, t) {
                        for (var n = t ? t.split(".") : s, i = e.split("."), r = 0; r < 3; r++) {
                            if (n[r] > i[r]) return !0;
                            if (n[r] < i[r]) return !1
                        }
                        return !1
                    }
                    r.transitional = function(e, t, n) {
                        var r = t && a(t);

                        function s(e, t) {
                            return "[Axios v" + i.version + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                        }
                        return function(n, i, a) {
                            if (!1 === e) throw new Error(s(i, " has been removed in " + t));
                            return r && !o[i] && (o[i] = !0, console.warn(s(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a)
                        }
                    }, e.exports = {
                        isOlderVersion: a,
                        assertOptions: function(e, t, n) {
                            if ("object" != typeof e) throw new TypeError("options must be an object");
                            for (var i = Object.keys(e), r = i.length; r-- > 0;) {
                                var o = i[r],
                                    s = t[o];
                                if (s) {
                                    var a = e[o],
                                        u = void 0 === a || s(a, o, e);
                                    if (!0 !== u) throw new TypeError("option " + o + " must be " + u)
                                } else if (!0 !== n) throw Error("Unknown option " + o)
                            }
                        },
                        validators: r
                    }
                }, function(e) {
                    e.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')
                }, function(e, t, n) {
                    "use strict";
                    var i = n(18);

                    function r(e) {
                        if ("function" != typeof e) throw new TypeError("executor must be a function.");
                        var t;
                        this.promise = new Promise((function(e) {
                            t = e
                        }));
                        var n = this;
                        e((function(e) {
                            n.reason || (n.reason = new i(e), t(n.reason))
                        }))
                    }
                    r.prototype.throwIfRequested = function() {
                        if (this.reason) throw this.reason
                    }, r.source = function() {
                        var e;
                        return {
                            token: new r((function(t) {
                                e = t
                            })),
                            cancel: e
                        }
                    }, e.exports = r
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e) {
                        return function(t) {
                            return e.apply(null, t)
                        }
                    }
                }, function(e, t, n) {
                    "use strict";
                    e.exports = function(e) {
                        return "object" == typeof e && !0 === e.isAxiosError
                    }
                }, function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var i = n(4),
                        r = n(20);

                    function o(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function s(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    var a = function() {
                            return {
                                loadPath: "/locales/{{lng}}/{{ns}}.json",
                                addPath: "/locales/add/{{lng}}/{{ns}}",
                                allowMultiLoading: !1,
                                parse: function(e) {
                                    return JSON.parse(e)
                                },
                                stringify: JSON.stringify,
                                parsePayload: function(e, t, n) {
                                    return function(e, t, n) {
                                        return t in e ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = n, e
                                    }({}, t, n || "")
                                },
                                request: r.a,
                                reloadInterval: "undefined" == typeof window && 36e5,
                                customHeaders: {},
                                queryStringParams: {},
                                crossDomain: !1,
                                withCredentials: !1,
                                overrideMimeType: !1,
                                requestOptions: {
                                    mode: "cors",
                                    credentials: "same-origin",
                                    cache: "default"
                                }
                            }
                        },
                        u = function() {
                            function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                o(this, e), this.services = t, this.options = n, this.allOptions = i, this.type = "backend", this.init(t, n, i)
                            }
                            var t, n;
                            return t = e, (n = [{
                                key: "init",
                                value: function(e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    this.services = e, this.options = Object(i.a)(n, this.options || {}, a()), this.allOptions = r, this.services && this.options.reloadInterval && setInterval((function() {
                                        return t.reload()
                                    }), this.options.reloadInterval)
                                }
                            }, {
                                key: "readMulti",
                                value: function(e, t, n) {
                                    this._readAny(e, e, t, t, n)
                                }
                            }, {
                                key: "read",
                                value: function(e, t, n) {
                                    this._readAny([e], e, [t], t, n)
                                }
                            }, {
                                key: "_readAny",
                                value: function(e, t, n, r, o) {
                                    var s = this,
                                        a = this.options.loadPath;
                                    "function" == typeof this.options.loadPath && (a = this.options.loadPath(e, n)), (a = Object(i.c)(a)).then((function(i) {
                                        var a = s.services.interpolator.interpolate(i, {
                                            lng: e.join("+"),
                                            ns: n.join("+")
                                        });
                                        s.loadUrl(a, o, t, r)
                                    }))
                                }
                            }, {
                                key: "loadUrl",
                                value: function(e, t, n, i) {
                                    var r = this;
                                    this.options.request(this.options, e, void 0, (function(o, s) {
                                        if (s && (s.status >= 500 && s.status < 600 || !s.status)) return t("failed loading " + e + "; status code: " + s.status, !0);
                                        if (s && s.status >= 400 && s.status < 500) return t("failed loading " + e + "; status code: " + s.status, !1);
                                        if (!s && o && o.message && o.message.indexOf("Failed to fetch") > -1) return t("failed loading " + e + ": " + o.message, !0);
                                        if (o) return t(o, !1);
                                        var a, u;
                                        try {
                                            a = "string" == typeof s.data ? r.options.parse(s.data, n, i) : s.data
                                        } catch (t) {
                                            u = "failed parsing " + e + " to json"
                                        }
                                        if (u) return t(u, !1);
                                        t(null, a)
                                    }))
                                }
                            }, {
                                key: "create",
                                value: function(e, t, n, i, r) {
                                    var o = this;
                                    if (this.options.addPath) {
                                        "string" == typeof e && (e = [e]);
                                        var s = this.options.parsePayload(t, n, i),
                                            a = 0,
                                            u = [],
                                            c = [];
                                        e.forEach((function(n) {
                                            var i = o.options.addPath;
                                            "function" == typeof o.options.addPath && (i = o.options.addPath(n, t));
                                            var l = o.services.interpolator.interpolate(i, {
                                                lng: n,
                                                ns: t
                                            });
                                            o.options.request(o.options, l, s, (function(t, n) {
                                                a += 1, u.push(t), c.push(n), a === e.length && r && r(u, c)
                                            }))
                                        }))
                                    }
                                }
                            }, {
                                key: "reload",
                                value: function() {
                                    var e = this,
                                        t = this.services,
                                        n = t.backendConnector,
                                        i = t.languageUtils,
                                        r = t.logger,
                                        o = n.language;
                                    if (!o || "cimode" !== o.toLowerCase()) {
                                        var s = [],
                                            a = function(e) {
                                                i.toResolveHierarchy(e).forEach((function(e) {
                                                    s.indexOf(e) < 0 && s.push(e)
                                                }))
                                            };
                                        a(o), this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                                            return a(e)
                                        })), s.forEach((function(t) {
                                            e.allOptions.ns.forEach((function(e) {
                                                n.read(t, e, "read", null, null, (function(i, o) {
                                                    i && r.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), i), !i && o && r.log("loaded namespace ".concat(e, " for language ").concat(t), o), n.loaded("".concat(t, "|").concat(e), i, o)
                                                }))
                                            }))
                                        }))
                                    }
                                }
                            }]) && s(t.prototype, n), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e
                        }();
                    u.type = "backend", t.default = u
                }, function(e, t) {
                    var n = "undefined" != typeof self ? self : this,
                        i = function() {
                            function e() {
                                this.fetch = !1, this.DOMException = n.DOMException
                            }
                            return e.prototype = n, new e
                        }();
                    ! function(e) {
                        ! function(t) {
                            var n = "URLSearchParams" in e,
                                i = "Symbol" in e && "iterator" in Symbol,
                                r = "FileReader" in e && "Blob" in e && function() {
                                    try {
                                        return new Blob, !0
                                    } catch (e) {
                                        return !1
                                    }
                                }(),
                                o = "FormData" in e,
                                s = "ArrayBuffer" in e;
                            if (s) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                                u = ArrayBuffer.isView || function(e) {
                                    return e && a.indexOf(Object.prototype.toString.call(e)) > -1
                                };

                            function c(e) {
                                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                                return e.toLowerCase()
                            }

                            function l(e) {
                                return "string" != typeof e && (e = String(e)), e
                            }

                            function d(e) {
                                var t = {
                                    next: function() {
                                        var t = e.shift();
                                        return {
                                            done: void 0 === t,
                                            value: t
                                        }
                                    }
                                };
                                return i && (t[Symbol.iterator] = function() {
                                    return t
                                }), t
                            }

                            function f(e) {
                                this.map = {}, e instanceof f ? e.forEach((function(e, t) {
                                    this.append(t, e)
                                }), this) : Array.isArray(e) ? e.forEach((function(e) {
                                    this.append(e[0], e[1])
                                }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                                    this.append(t, e[t])
                                }), this)
                            }

                            function h(e) {
                                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                                e.bodyUsed = !0
                            }

                            function p(e) {
                                return new Promise((function(t, n) {
                                    e.onload = function() {
                                        t(e.result)
                                    }, e.onerror = function() {
                                        n(e.error)
                                    }
                                }))
                            }

                            function g(e) {
                                var t = new FileReader,
                                    n = p(t);
                                return t.readAsArrayBuffer(e), n
                            }

                            function v(e) {
                                if (e.slice) return e.slice(0);
                                var t = new Uint8Array(e.byteLength);
                                return t.set(new Uint8Array(e)), t.buffer
                            }

                            function m() {
                                return this.bodyUsed = !1, this._initBody = function(e) {
                                    var t;
                                    this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : r && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : o && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : n && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : s && r && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = v(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e)) ? this._bodyArrayBuffer = v(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                                }, r && (this.blob = function() {
                                    var e = h(this);
                                    if (e) return e;
                                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                                    return Promise.resolve(new Blob([this._bodyText]))
                                }, this.arrayBuffer = function() {
                                    return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                                }), this.text = function() {
                                    var e, t, n, i = h(this);
                                    if (i) return i;
                                    if (this._bodyBlob) return e = this._bodyBlob, n = p(t = new FileReader), t.readAsText(e), n;
                                    if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                        for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++) n[i] = String.fromCharCode(t[i]);
                                        return n.join("")
                                    }(this._bodyArrayBuffer));
                                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                                    return Promise.resolve(this._bodyText)
                                }, o && (this.formData = function() {
                                    return this.text().then(S)
                                }), this.json = function() {
                                    return this.text().then(JSON.parse)
                                }, this
                            }
                            f.prototype.append = function(e, t) {
                                e = c(e), t = l(t);
                                var n = this.map[e];
                                this.map[e] = n ? n + ", " + t : t
                            }, f.prototype.delete = function(e) {
                                delete this.map[c(e)]
                            }, f.prototype.get = function(e) {
                                return e = c(e), this.has(e) ? this.map[e] : null
                            }, f.prototype.has = function(e) {
                                return this.map.hasOwnProperty(c(e))
                            }, f.prototype.set = function(e, t) {
                                this.map[c(e)] = l(t)
                            }, f.prototype.forEach = function(e, t) {
                                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                            }, f.prototype.keys = function() {
                                var e = [];
                                return this.forEach((function(t, n) {
                                    e.push(n)
                                })), d(e)
                            }, f.prototype.values = function() {
                                var e = [];
                                return this.forEach((function(t) {
                                    e.push(t)
                                })), d(e)
                            }, f.prototype.entries = function() {
                                var e = [];
                                return this.forEach((function(t, n) {
                                    e.push([n, t])
                                })), d(e)
                            }, i && (f.prototype[Symbol.iterator] = f.prototype.entries);
                            var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                            function b(e, t) {
                                var n, i, r = (t = t || {}).body;
                                if (e instanceof b) {
                                    if (e.bodyUsed) throw new TypeError("Already read");
                                    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new f(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0)
                                } else this.url = String(e);
                                if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new f(t.headers)), this.method = (i = (n = t.method || this.method || "GET").toUpperCase(), y.indexOf(i) > -1 ? i : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                                this._initBody(r)
                            }

                            function S(e) {
                                var t = new FormData;
                                return e.trim().split("&").forEach((function(e) {
                                    if (e) {
                                        var n = e.split("="),
                                            i = n.shift().replace(/\+/g, " "),
                                            r = n.join("=").replace(/\+/g, " ");
                                        t.append(decodeURIComponent(i), decodeURIComponent(r))
                                    }
                                })), t
                            }

                            function w(e, t) {
                                t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new f(t.headers), this.url = t.url || "", this._initBody(e)
                            }
                            b.prototype.clone = function() {
                                return new b(this, {
                                    body: this._bodyInit
                                })
                            }, m.call(b.prototype), m.call(w.prototype), w.prototype.clone = function() {
                                return new w(this._bodyInit, {
                                    status: this.status,
                                    statusText: this.statusText,
                                    headers: new f(this.headers),
                                    url: this.url
                                })
                            }, w.error = function() {
                                var e = new w(null, {
                                    status: 0,
                                    statusText: ""
                                });
                                return e.type = "error", e
                            };
                            var E = [301, 302, 303, 307, 308];
                            w.redirect = function(e, t) {
                                if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
                                return new w(null, {
                                    status: t,
                                    headers: {
                                        location: e
                                    }
                                })
                            }, t.DOMException = e.DOMException;
                            try {
                                new t.DOMException
                            } catch (e) {
                                t.DOMException = function(e, t) {
                                    this.message = e, this.name = t;
                                    var n = Error(e);
                                    this.stack = n.stack
                                }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                            }

                            function k(e, n) {
                                return new Promise((function(i, o) {
                                    var s = new b(e, n);
                                    if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                                    var a = new XMLHttpRequest;

                                    function u() {
                                        a.abort()
                                    }
                                    a.onload = function() {
                                        var e, t, n = {
                                            status: a.status,
                                            statusText: a.statusText,
                                            headers: (e = a.getAllResponseHeaders() || "", t = new f, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                                                var n = e.split(":"),
                                                    i = n.shift().trim();
                                                if (i) {
                                                    var r = n.join(":").trim();
                                                    t.append(i, r)
                                                }
                                            })), t)
                                        };
                                        n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                                        var r = "response" in a ? a.response : a.responseText;
                                        i(new w(r, n))
                                    }, a.onerror = function() {
                                        o(new TypeError("Network request failed"))
                                    }, a.ontimeout = function() {
                                        o(new TypeError("Network request failed"))
                                    }, a.onabort = function() {
                                        o(new t.DOMException("Aborted", "AbortError"))
                                    }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && r && (a.responseType = "blob"), s.headers.forEach((function(e, t) {
                                        a.setRequestHeader(t, e)
                                    })), s.signal && (s.signal.addEventListener("abort", u), a.onreadystatechange = function() {
                                        4 === a.readyState && s.signal.removeEventListener("abort", u)
                                    }), a.send(void 0 === s._bodyInit ? null : s._bodyInit)
                                }))
                            }
                            k.polyfill = !0, e.fetch || (e.fetch = k, e.Headers = f, e.Request = b, e.Response = w), t.Headers = f, t.Request = b, t.Response = w, t.fetch = k, Object.defineProperty(t, "__esModule", {
                                value: !0
                            })
                        }({})
                    }(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
                    var r = i;
                    (t = r.fetch).default = r.fetch, t.fetch = r.fetch, t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response, e.exports = t
                }, function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, "default", (function() {
                        return k
                    }));
                    var i = n(2),
                        r = n(3),
                        o = [],
                        s = o.forEach,
                        a = o.slice;

                    function u(e) {
                        return s.call(a.call(arguments, 1), (function(t) {
                            if (t)
                                for (var n in t) void 0 === e[n] && (e[n] = t[n])
                        })), e
                    }
                    var c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                        l = function(e, t, n) {
                            var i = n || {};
                            i.path = i.path || "/";
                            var r = e + "=" + encodeURIComponent(t);
                            if (i.maxAge > 0) {
                                var o = i.maxAge - 0;
                                if (isNaN(o)) throw new Error("maxAge should be a Number");
                                r += "; Max-Age=" + Math.floor(o)
                            }
                            if (i.domain) {
                                if (!c.test(i.domain)) throw new TypeError("option domain is invalid");
                                r += "; Domain=" + i.domain
                            }
                            if (i.path) {
                                if (!c.test(i.path)) throw new TypeError("option path is invalid");
                                r += "; Path=" + i.path
                            }
                            if (i.expires) {
                                if ("function" != typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
                                r += "; Expires=" + i.expires.toUTCString()
                            }
                            if (i.httpOnly && (r += "; HttpOnly"), i.secure && (r += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                                case !0:
                                    r += "; SameSite=Strict";
                                    break;
                                case "lax":
                                    r += "; SameSite=Lax";
                                    break;
                                case "strict":
                                    r += "; SameSite=Strict";
                                    break;
                                case "none":
                                    r += "; SameSite=None";
                                    break;
                                default:
                                    throw new TypeError("option sameSite is invalid")
                            }
                            return r
                        },
                        d = {
                            name: "cookie",
                            lookup: function(e) {
                                var t;
                                if (e.lookupCookie && "undefined" != typeof document) {
                                    var n = function(e) {
                                        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                            for (var r = n[i];
                                                " " === r.charAt(0);) r = r.substring(1, r.length);
                                            if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                                        }
                                        return null
                                    }(e.lookupCookie);
                                    n && (t = n)
                                }
                                return t
                            },
                            cacheUserLanguage: function(e, t) {
                                t.lookupCookie && "undefined" != typeof document && function(e, t, n, i) {
                                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                        path: "/",
                                        sameSite: "strict"
                                    };
                                    n && (r.expires = new Date, r.expires.setTime(r.expires.getTime() + 60 * n * 1e3)), i && (r.domain = i), document.cookie = l(e, encodeURIComponent(t), r)
                                }(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                            }
                        },
                        f = {
                            name: "querystring",
                            lookup: function(e) {
                                var t;
                                if ("undefined" != typeof window)
                                    for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                                        var r = n[i].indexOf("=");
                                        r > 0 && n[i].substring(0, r) === e.lookupQuerystring && (t = n[i].substring(r + 1))
                                    }
                                return t
                            }
                        },
                        h = null,
                        p = function() {
                            if (null !== h) return h;
                            try {
                                h = "undefined" !== window && null !== window.localStorage, window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo")
                            } catch (e) {
                                h = !1
                            }
                            return h
                        },
                        g = {
                            name: "localStorage",
                            lookup: function(e) {
                                var t;
                                if (e.lookupLocalStorage && p()) {
                                    var n = window.localStorage.getItem(e.lookupLocalStorage);
                                    n && (t = n)
                                }
                                return t
                            },
                            cacheUserLanguage: function(e, t) {
                                t.lookupLocalStorage && p() && window.localStorage.setItem(t.lookupLocalStorage, e)
                            }
                        },
                        v = null,
                        m = function() {
                            if (null !== v) return v;
                            try {
                                v = "undefined" !== window && null !== window.sessionStorage, window.sessionStorage.setItem("i18next.translate.boo", "foo"), window.sessionStorage.removeItem("i18next.translate.boo")
                            } catch (e) {
                                v = !1
                            }
                            return v
                        },
                        y = {
                            name: "sessionStorage",
                            lookup: function(e) {
                                var t;
                                if (e.lookupSessionStorage && m()) {
                                    var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                                    n && (t = n)
                                }
                                return t
                            },
                            cacheUserLanguage: function(e, t) {
                                t.lookupSessionStorage && m() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
                            }
                        },
                        b = {
                            name: "navigator",
                            lookup: function(e) {
                                var t = [];
                                if ("undefined" != typeof navigator) {
                                    if (navigator.languages)
                                        for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                                    navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                                }
                                return t.length > 0 ? t : void 0
                            }
                        },
                        S = {
                            name: "htmlTag",
                            lookup: function(e) {
                                var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                                return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t
                            }
                        },
                        w = {
                            name: "path",
                            lookup: function(e) {
                                var t;
                                if ("undefined" != typeof window) {
                                    var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                                    if (n instanceof Array)
                                        if ("number" == typeof e.lookupFromPathIndex) {
                                            if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                            t = n[e.lookupFromPathIndex].replace("/", "")
                                        } else t = n[0].replace("/", "")
                                }
                                return t
                            }
                        },
                        E = {
                            name: "subdomain",
                            lookup: function(e) {
                                var t;
                                if ("undefined" != typeof window) {
                                    var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                                    n instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                                }
                                return t
                            }
                        },
                        k = function() {
                            function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                Object(i.a)(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n)
                            }
                            return Object(r.a)(e, [{
                                key: "init",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    this.services = e, this.options = u(t, this.options || {}, {
                                        order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                                        lookupQuerystring: "lng",
                                        lookupCookie: "i18next",
                                        lookupLocalStorage: "i18nextLng",
                                        lookupSessionStorage: "i18nextLng",
                                        caches: ["localStorage"],
                                        excludeCacheFor: ["cimode"]
                                    }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(d), this.addDetector(f), this.addDetector(g), this.addDetector(y), this.addDetector(b), this.addDetector(S), this.addDetector(w), this.addDetector(E)
                                }
                            }, {
                                key: "addDetector",
                                value: function(e) {
                                    this.detectors[e.name] = e
                                }
                            }, {
                                key: "detect",
                                value: function(e) {
                                    var t = this;
                                    e || (e = this.options.order);
                                    var n = [];
                                    return e.forEach((function(e) {
                                        if (t.detectors[e]) {
                                            var i = t.detectors[e].lookup(t.options);
                                            i && "string" == typeof i && (i = [i]), i && (n = n.concat(i))
                                        }
                                    })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                                }
                            }, {
                                key: "cacheUserLanguage",
                                value: function(e, t) {
                                    var n = this;
                                    t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function(t) {
                                        n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                                    })))
                                }
                            }]), e
                        }();
                    k.type = "languageDetector"
                }, function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, "Desktop", (function() {
                        return se
                    }));
                    var i = n(0);
                    const r = Object(i.createLogger)("agentx-js-api"),
                        o = (e, t) => ({
                            info: (...n) => e.info(t, ...n),
                            warn: (...n) => e.warn(t, ...n),
                            error: (...n) => e.error(t, ...n)
                        });
                    class s {
                        constructor(e) {
                            this.logger = e.logger
                        }
                        check(e) {
                            return e ? !!e.isInited || (this.logger.error("SERVICE still not initialized... Await it's init(...) first."), !1) : (this.logger.error("SERVICE is not defined..."), !1)
                        }
                    }
                    const a = e => new s(e);
                    var u = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, o) {
                            function s(e) {
                                try {
                                    u(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            u((i = i.apply(e, t || [])).next())
                        }))
                    };
                    const c = {
                            rps: 120,
                            tag: "jsapi"
                        },
                        l = {
                            rps: 0,
                            tag: "jsapi"
                        },
                        d = {
                            tag: "jsapi"
                        },
                        f = e => e.actionsChannels.createSource("fireGeneralSilentNotification/Req", c),
                        h = e => e.actionsChannels.createSource("fireGeneralAutoDismissNotification/Req", l),
                        p = e => e.actionsChannels.createDestination("fireGeneralAutoDismissNotification/Res", l),
                        g = e => e.actionsChannels.createSource("fireGeneralAcknowledgeNotification/Req", l),
                        v = e => e.actionsChannels.createDestination("fireGeneralAcknowledgeNotification/Res", l),
                        m = e => e.actionsChannels.createSource("addCustomTask", c),
                        y = e => e.actionsChannels.createSource("getToken/Req", l),
                        b = e => e.actionsChannels.createDestination("getToken/Res", d),
                        S = e => e.actionsChannels.createSource("getTaskMap/Req", l),
                        w = e => e.actionsChannels.createDestination("getTaskMap/Res", d),
                        E = e => e.actionsChannels.createSource("getMediaTypeQueue/Req", l),
                        k = e => e.actionsChannels.createDestination("getMediaTypeQueue/Res", d),
                        O = e => e.actionsChannels.createSource("getIdleCodes/Req", l),
                        x = e => e.actionsChannels.createDestination("getIdleCodes/Res", d),
                        T = e => e.actionsChannels.createSource("getWrapUpCodes/Req", l),
                        C = e => e.actionsChannels.createDestination("getWrapUpCodes/Res", d);
                    class L {
                        constructor(e) {
                            this.lastReqTs = Date.now(), this.lastReqN = 0, this.logger = e.logger, this.serviceChecker = e.serviceChecker
                        }
                        checkService() {
                            return this.serviceChecker.check(this.SERVICE)
                        }
                        getNextReqId() {
                            const e = Date.now();
                            return this.lastReqTs !== e ? (this.lastReqTs = e, this.lastReqN = 0) : this.lastReqN++, `${this.lastReqTs}_${this.lastReqN}`
                        }
                        init(e) {
                            e && (this.SERVICE = e), this.checkService() && (this.sourceActionsChannels = {
                                fireGeneralSilentNotification: f(this.SERVICE),
                                fireGeneralAutoDismissNotification: h(this.SERVICE),
                                fireGeneralAcknowledgeNotification: g(this.SERVICE),
                                addCustomTask: m(this.SERVICE),
                                getToken: y(this.SERVICE),
                                getTaskMap: S(this.SERVICE),
                                getMediaTypeQueue: E(this.SERVICE),
                                getIdleCodes: O(this.SERVICE),
                                getWrapUpCodes: T(this.SERVICE)
                            }, this.destinationActionsChannels = {
                                fireGeneralAutoDismissNotification: p(this.SERVICE),
                                fireGeneralAcknowledgeNotification: v(this.SERVICE),
                                getToken: b(this.SERVICE),
                                getTaskMap: w(this.SERVICE),
                                getMediaTypeQueue: k(this.SERVICE),
                                getIdleCodes: x(this.SERVICE),
                                getWrapUpCodes: C(this.SERVICE)
                            }, this.logger.info("Inited"))
                        }
                        cleanup() {
                            this.SERVICE = void 0, this.logger.info("Cleaned")
                        }
                        fireGeneralSilentNotification(...e) {
                            this.checkService() && this.sourceActionsChannels.fireGeneralSilentNotification.send(...e)
                        }
                        fireGeneralAutoDismissNotification(...e) {
                            return u(this, void 0, void 0, (function*() {
                                if (this.checkService()) return yield new Promise((t => {
                                    const n = this.getNextReqId(),
                                        r = ({
                                            args: [e, o, s, a]
                                        }) => {
                                            a === n && (s !== i.Notifications.ItemMeta.Mode.AutoDismiss && s !== i.Notifications.ItemMeta.Mode.Silent || e === i.Notifications.ItemMeta.Status.Deactivated && (t([e, o, s]), this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(r)))
                                        };
                                    this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(r), this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(...e)
                                }))
                            }))
                        }
                        fireGeneralAcknowledgeNotification(...e) {
                            return u(this, void 0, void 0, (function*() {
                                if (this.checkService()) return yield new Promise((t => {
                                    const n = this.getNextReqId(),
                                        r = ({
                                            args: [e, o, s, a]
                                        }) => {
                                            a === n && (s !== i.Notifications.ItemMeta.Mode.Acknowledge && s !== i.Notifications.ItemMeta.Mode.Silent || e === i.Notifications.ItemMeta.Status.Deactivated && (t([e, o, s]), this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(r)))
                                        };
                                    this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(r), this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(...e)
                                }))
                            }))
                        }
                        addCustomTask(...e) {
                            this.checkService() && this.sourceActionsChannels.addCustomTask.send(...e)
                        }
                        getTaskMap() {
                            return u(this, void 0, void 0, (function*() {
                                if (this.checkService()) return yield new Promise((e => {
                                    const t = this.getNextReqId(),
                                        n = ({
                                            args: [i, r]
                                        }) => {
                                            r === t && (e(i), this.destinationActionsChannels.getTaskMap.removeListener(n))
                                        };
                                    this.destinationActionsChannels.getTaskMap.addListener(n), this.sourceActionsChannels.getTaskMap.send(t)
                                }))
                            }))
                        }
                        getMediaTypeQueue(e) {
                            return u(this, void 0, void 0, (function*() {
                                if (this.checkService()) return yield new Promise((t => {
                                    const n = this.getNextReqId(),
                                        i = ({
                                            args: [e, r]
                                        }) => {
                                            r === n && (t(e), this.destinationActionsChannels.getMediaTypeQueue.removeListener(i))
                                        };
                                    this.destinationActionsChannels.getMediaTypeQueue.addListener(i), this.sourceActionsChannels.getMediaTypeQueue.send(e, n)
                                }))
                            }))
                        }
                        getToken() {
                            return u(this, void 0, void 0, (function*() {
                                if (this.checkService()) return yield new Promise((e => {
                                    const t = this.getNextReqId(),
                                        n = ({
                                            args: [i, r]
                                        }) => {
                                            r === t && (e(i), this.destinationActionsChannels.getToken.removeListener(n))
                                        };
                                    this.destinationActionsChannels.getToken.addListener(n), this.sourceActionsChannels.getToken.send(t)
                                }))
                            }))
                        }
                        getIdleCodes() {
                            return u(this, void 0, void 0, (function*() {
                                if (this.checkService()) return yield new Promise((e => {
                                    const t = this.getNextReqId(),
                                        n = ({
                                            args: [i, r]
                                        }) => {
                                            r === t && (e(i), this.destinationActionsChannels.getIdleCodes.removeListener(n))
                                        };
                                    this.destinationActionsChannels.getIdleCodes.addListener(n), this.sourceActionsChannels.getIdleCodes.send(t)
                                }))
                            }))
                        }
                        getWrapUpCodes() {
                            return u(this, void 0, void 0, (function*() {
                                if (this.checkService()) return yield new Promise((e => {
                                    const t = this.getNextReqId(),
                                        n = ({
                                            args: [i, r]
                                        }) => {
                                            r === t && (e(i), this.destinationActionsChannels.getWrapUpCodes.removeListener(n))
                                        };
                                    this.destinationActionsChannels.getWrapUpCodes.addListener(n), this.sourceActionsChannels.getWrapUpCodes.send(t)
                                }))
                            }))
                        }
                    }
                    const I = o(r, "[Actions JSAPI] =>");
                    class A {
                        constructor(e) {
                            this.isInited = !1, this.listeners = new Map, this.listenersOnce = new Map, this.logger = e.logger
                        }
                        init(e) {
                            this.aqmServiceEntity = e.aqmServiceEntity, this.aqmServiceEntityString = e.aqmServiceEntityString, this.isInited = !0
                        }
                        cleanup() {
                            this.removeAllEventListeners(), this.aqmServiceEntity = void 0, this.aqmServiceEntityString = void 0, this.isInited = !1
                        }
                        _addEventListener(e, t, n) {
                            var i, r, o;
                            const s = n ? "listenersOnce" : "listeners";
                            this[s].has(e) || this[s].set(e, new Map);
                            const a = this[s].get(e),
                                u = n ? "listenOnce" : "listen",
                                c = i => {
                                    let r = null;
                                    return n && (r = this.aqmServiceEntity[e].listenOnce((() => this.removeOnceEventListener(e, t)))), () => {
                                        var t;
                                        if (i) {
                                            n ? (i.stopListenOnce(), r && r.stopListenOnce()) : i.stopListen();
                                            const o = [];
                                            o.push(`UnBound "${e}"`), n && o.push("Once"), this.aqmServiceEntityString && o.push(`from "${this.aqmServiceEntityString}"`), null === (t = this.logger) || void 0 === t || t.info(o.join(" "))
                                        }
                                    }
                                };
                            if (this.aqmServiceEntity)
                                if (e in this.aqmServiceEntity && u in this.aqmServiceEntity[e]) {
                                    const r = this.aqmServiceEntity[e][u](t);
                                    a.set(t, c(r));
                                    const o = [];
                                    o.push(`Bound "${e}"`), n && o.push("Once"), this.aqmServiceEntityString && o.push(`to "${this.aqmServiceEntityString}"`), null === (i = this.logger) || void 0 === i || i.info(o.join(" "))
                                } else null === (r = this.logger) || void 0 === r || r.warn(`EventName "${e}" is not recognized, so won't be subscribed...`);
                            else null === (o = this.logger) || void 0 === o || o.error(`"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`)
                        }
                        _removeEventListener(e, t, n) {
                            const i = n ? "listenersOnce" : "listeners";
                            if (this[i].has(e)) {
                                const n = this[i].get(e);
                                n && (n.has(t) && (n.get(t)(), n.delete(t)), n.size < 1 && this[i].delete(e))
                            }
                        }
                        addEventListener(e, t) {
                            this._addEventListener(e, t, !1)
                        }
                        addOnceEventListener(e, t) {
                            this._addEventListener(e, t, !0)
                        }
                        removeEventListener(e, t) {
                            this._removeEventListener(e, t, !1)
                        }
                        removeOnceEventListener(e, t) {
                            this._removeEventListener(e, t, !0)
                        }
                        removeAllEventListeners() {
                            ["listeners", "listenersOnce"].forEach((e => {
                                this[e].forEach(((e, t) => {
                                    e.forEach(((e, t) => e())), e.clear()
                                })), this[e].clear()
                            }))
                        }
                    }
                    const D = e => new A(e);
                    var N = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, o) {
                            function s(e) {
                                try {
                                    u(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            u((i = i.apply(e, t || [])).next())
                        }))
                    };
                    class R {
                        constructor(e) {
                            this.logger = e.logger, this.aqmEvents = e.aqmEvents, this.serviceChecker = e.serviceChecker
                        }
                        checkService() {
                            return this.serviceChecker.check(this.SERVICE)
                        }
                        init(e) {
                            e && (this.SERVICE = e), this.checkService() && (this.aqmEvents.init({
                                aqmServiceEntity: this.SERVICE.aqm.contact,
                                aqmServiceEntityString: "SERVICE.aqm.contact"
                            }), this.logger.info("Inited"))
                        }
                        cleanup() {
                            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned")
                        }
                        accept(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.accept(e)
                            }))
                        }
                        consultAccept(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultAccept(e)
                            }))
                        }
                        buddyAgents(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.buddyAgents(e)
                            }))
                        }
                        end(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.end(e)
                            }))
                        }
                        consultEnd(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultEnd(e)
                            }))
                        }
                        cancelCtq(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.cancelCtq(e)
                            }))
                        }
                        wrapup(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.wrapup(e)
                            }))
                        }
                        vteamTransfer(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.vteamTransfer(e)
                            }))
                        }
                        blindTransfer(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.blindTransfer(e)
                            }))
                        }
                        hold(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.hold(e)
                            }))
                        }
                        unHold(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.unHold(e)
                            }))
                        }
                        consult(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consult(e)
                            }))
                        }
                        consultConference(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultConference(e)
                            }))
                        }
                        decline(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.decline(e)
                            }))
                        }
                        consultTransfer(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.consultTransfer(e)
                            }))
                        }
                        vteamList(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.vteamList(e)
                            }))
                        }
                        pauseRecording(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.pauseRecording(e)
                            }))
                        }
                        resumeRecording(e) {
                            var t;
                            return N(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.contact.resumeRecording(e)
                            }))
                        }
                        addEventListener(e, t) {
                            this.checkService() && this.aqmEvents.addEventListener(e, t)
                        }
                        addOnceEventListener(e, t) {
                            this.checkService() && this.aqmEvents.addOnceEventListener(e, t)
                        }
                        removeEventListener(e, t) {
                            this.aqmEvents.removeEventListener(e, t)
                        }
                        removeOnceEventListener(e, t) {
                            this.aqmEvents.removeOnceEventListener(e, t)
                        }
                        removeAllEventListeners() {
                            this.aqmEvents.removeAllEventListeners()
                        }
                    }
                    const M = o(r, "[AgentContact JSAPI] =>"),
                        _ = o(M, "[AqmServiceEvents: Contact] => ");
                    var j = n(5),
                        P = n.n(j),
                        V = n(9),
                        q = n.n(V),
                        U = function(e, t, n, i) {
                            return new(n || (n = Promise))((function(r, o) {
                                function s(e) {
                                    try {
                                        u(i.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        u(i.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    var t;
                                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(s, a)
                                }
                                u((i = i.apply(e, t || [])).next())
                            }))
                        };
                    const F = {
                        agentName: void 0,
                        agentProfileID: void 0,
                        agentSessionId: void 0,
                        idleCode: void 0,
                        teamId: void 0,
                        teamName: void 0,
                        dn: void 0,
                        status: void 0,
                        subStatus: void 0,
                        idleCodes: void 0,
                        wrapupCodes: void 0,
                        outDialRegex: void 0,
                        isOutboundEnabledForTenant: void 0,
                        isOutboundEnabledForAgent: void 0,
                        isEndCallEnabled: void 0,
                        isEndConsultEnabled: void 0,
                        allowConsultToQueue: void 0,
                        isAdhocDialingEnabled: void 0,
                        isAgentAvailableAfterOutdial: void 0,
                        isCampaignManagementEnabled: void 0,
                        agentPersonalStatsEnabled: void 0
                    };
                    class H {
                        constructor(e) {
                            this.emitter = P()(), this.listeners = new Set, this.teams = [], this.idleCodes = {}, this.latestData = JSON.parse(JSON.stringify(F)), this.logger = e.logger, this.serviceChecker = e.serviceChecker
                        }
                        checkService() {
                            return this.serviceChecker.check(this.SERVICE)
                        }
                        emit(e, ...t) {
                            this.emitter.emit(e, ...t)
                        }
                        update(e) {
                            const t = Object.keys(e).reduce(((t, n) => {
                                const i = e[n],
                                    r = this.latestData[n];
                                return JSON.stringify(i) !== JSON.stringify(r) && t.push({
                                    name: n,
                                    value: i,
                                    oldValue: r
                                }), t
                            }), []);
                            t.length && (t.forEach((e => this.latestData[e.name] = e.value)), this.emit("updated", t))
                        }
                        static getOutdialRegex(e) {
                            if (e && e.dialPlanEntity) {
                                const t = e.dialPlanEntity.find((e => "Any Format" === e.name));
                                if (t) return t.regex
                            }
                            return ""
                        }
                        static findTeamName(e, t) {
                            const n = e.find((e => e.teamId === t));
                            return (null == n ? void 0 : n.teamName) || ""
                        }
                        init(e) {
                            return U(this, void 0, void 0, (function*() {
                                e && (this.SERVICE = e), this.checkService() && (yield this.fetchLatestData(), this.subscribeSelfDataEvents(), this.logger.info("Inited"))
                            }))
                        }
                        cleanup() {
                            this.unsubscribeSelfDataEvents(), this.removeAllEventListeners(), this.SERVICE = void 0, this.update(JSON.parse(JSON.stringify(F))), this.logger.info("Cleaned")
                        }
                        fetchLatestData() {
                            var e, t, n;
                            return U(this, void 0, void 0, (function*() {
                                const i = (null === (e = this.SERVICE) || void 0 === e ? void 0 : e.conf.profile) ? null === (t = this.SERVICE) || void 0 === t ? void 0 : t.conf.profile : yield null === (n = this.SERVICE) || void 0 === n ? void 0 : n.conf.fetchProfile();
                                if (i) {
                                    const {
                                        teams: e,
                                        agentName: t,
                                        agentProfileID: n,
                                        defaultDn: r,
                                        defaultIdleName: o,
                                        agentSubStatus: s,
                                        idleCodes: a,
                                        wrapupCodes: u,
                                        dialPlan: c,
                                        isOutboundEnabledForTenant: l,
                                        isOutboundEnabledForAgent: d,
                                        isAdhocDialingEnabled: f,
                                        isEndCallEnabled: h,
                                        isEndConsultEnabled: p,
                                        allowConsultToQueue: g,
                                        isAgentAvailableAfterOutdial: v,
                                        isCampaignManagementEnabled: m,
                                        agentPersonalStatsEnabled: y
                                    } = i;
                                    this.teams = e, a.forEach((e => {
                                        this.idleCodes[e.id] = {
                                            id: e.id,
                                            name: e.name
                                        }
                                    }));
                                    const b = r,
                                        S = o,
                                        w = s,
                                        E = H.getOutdialRegex(c);
                                    this.update({
                                        agentName: t,
                                        agentProfileID: n,
                                        dn: b,
                                        status: S,
                                        subStatus: w,
                                        idleCodes: a,
                                        wrapupCodes: u,
                                        outDialRegex: E,
                                        isOutboundEnabledForTenant: l,
                                        isOutboundEnabledForAgent: d,
                                        isAdhocDialingEnabled: f,
                                        isEndCallEnabled: h,
                                        isEndConsultEnabled: p,
                                        allowConsultToQueue: g,
                                        isAgentAvailableAfterOutdial: v,
                                        isCampaignManagementEnabled: m,
                                        agentPersonalStatsEnabled: y
                                    })
                                }
                            }))
                        }
                        subscribeSelfDataEvents() {
                            var e, t, n, i;
                            if (this.checkService()) {
                                {
                                    const t = null === (e = this.SERVICE) || void 0 === e ? void 0 : e.aqm.agent.eAgentReloginSuccess.listen((({
                                        data: e
                                    }) => {
                                        const {
                                            agentSessionId: t,
                                            teamId: n,
                                            dn: i,
                                            status: r,
                                            subStatus: o,
                                            auxCodeId: s
                                        } = e, a = H.findTeamName(this.teams, n);
                                        this.update({
                                            agentSessionId: t,
                                            teamId: n,
                                            teamName: a,
                                            dn: i,
                                            status: r,
                                            subStatus: o,
                                            idleCode: this.idleCodes[s]
                                        })
                                    }));
                                    this.listeners.add((() => null == t ? void 0 : t.stopListen()))
                                } {
                                    const e = null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.agent.eAgentStationLoginSuccess.listen((({
                                        data: e
                                    }) => {
                                        const {
                                            agentSessionId: t,
                                            teamId: n,
                                            status: i,
                                            subStatus: r,
                                            auxCodeId: o
                                        } = e, s = H.findTeamName(this.teams, n);
                                        this.update({
                                            agentSessionId: t,
                                            teamId: n,
                                            teamName: s,
                                            status: i,
                                            subStatus: r,
                                            idleCode: this.idleCodes[o]
                                        })
                                    }));
                                    this.listeners.add((() => null == e ? void 0 : e.stopListen()))
                                } {
                                    const e = null === (n = this.SERVICE) || void 0 === n ? void 0 : n.aqm.agent.eAgentStateChangeSuccess.listen((({
                                        data: e
                                    }) => {
                                        const {
                                            agentSessionId: t,
                                            status: n,
                                            subStatus: i,
                                            auxCodeId: r
                                        } = e;
                                        this.update({
                                            agentSessionId: t,
                                            status: n,
                                            subStatus: i,
                                            idleCode: this.idleCodes[r]
                                        })
                                    }));
                                    this.listeners.add((() => null == e ? void 0 : e.stopListen()))
                                } {
                                    const e = null === (i = this.SERVICE) || void 0 === i ? void 0 : i.aqm.agent.eAgentDNRegistered.listen((({
                                        data: e
                                    }) => {
                                        const {
                                            dn: t
                                        } = e;
                                        this.update({
                                            dn: t
                                        })
                                    }));
                                    this.listeners.add((() => null == e ? void 0 : e.stopListen()))
                                }
                            }
                        }
                        unsubscribeSelfDataEvents() {
                            this.listeners.forEach((e => e())), this.listeners.clear()
                        }
                        stateChange(e) {
                            var t;
                            return U(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.agent.stateChange({
                                    data: e
                                })
                            }))
                        }
                        mockOutdialAniList() {
                            var e;
                            return U(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.aqm.agent.mockOutdialAniList({
                                    p: null
                                })
                            }))
                        }
                        fetchAddressBooks() {
                            var e;
                            return U(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.aqm.agent.fetchAddressBooks({
                                    p: null
                                })
                            }))
                        }
                        addEventListener(e, t) {
                            this.checkService() && this.emitter.on(e, t)
                        }
                        removeEventListener(e, t) {
                            this.checkService() && this.emitter.off(e, t)
                        }
                        removeAllEventListeners() {
                            q()(this.emitter)
                        }
                    }
                    const z = o(r, "[AgentInfo JSAPI] =>");
                    var B = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, o) {
                            function s(e) {
                                try {
                                    u(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            u((i = i.apply(e, t || [])).next())
                        }))
                    };
                    class J {
                        constructor(e) {
                            this.emitter = P()(), this.logger = e.logger, this.agentxSERVICE = e.SERVICE
                        }
                        waitUntil(e) {
                            return B(this, void 0, void 0, (function*() {
                                "function" == typeof e && (yield new Promise((e => setTimeout(e, 1e3 / 30))), !e() && (yield this.waitUntil(e)))
                            }))
                        }
                        checkService(e) {
                            return B(this, void 0, void 0, (function*() {
                                e ? (e.isInited || (this.logger.warn("SERVICE is not inited. Awaiting it's initAgentxServices(...)..."), yield this.waitUntil((() => e.isInited))), this.logger.info("SERVICE is inited. Continuing..."), this.emit("inited")) : this.logger.error("SERVICE is not defiend...")
                            }))
                        }
                        emit(e, ...t) {
                            this.emitter.emit(e, ...t)
                        }
                        init() {
                            return B(this, void 0, void 0, (function*() {
                                this.agentxSERVICE ? yield this.checkService(this.agentxSERVICE): this.logger.error("SERVICE is not defined...")
                            }))
                        }
                        cleanup() {
                            this.agentxSERVICE = void 0, this.emit("cleaned"), this.logger.info("Cleaned")
                        }
                        get clientLocale() {
                            return null != window.navigator.languages ? window.navigator.languages[0] : window.navigator.language
                        }
                        addEventListener(e, t) {
                            this.emitter.on(e, t)
                        }
                        removeEventListener(e, t) {
                            this.emitter.off(e, t)
                        }
                    }
                    const Z = o(r, "[Config JSAPI] =>");
                    var G = function(e, t, n, i) {
                        return new(n || (n = Promise))((function(r, o) {
                            function s(e) {
                                try {
                                    u(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            u((i = i.apply(e, t || [])).next())
                        }))
                    };
                    class W {
                        constructor(e) {
                            this.logger = e.logger, this.aqmEvents = e.aqmEvents, this.serviceChecker = e.serviceChecker
                        }
                        checkService() {
                            return this.serviceChecker.check(this.SERVICE)
                        }
                        init(e) {
                            e && (this.SERVICE = e), this.checkService() && (this.aqmEvents.init({
                                aqmServiceEntity: this.SERVICE.aqm.dialer,
                                aqmServiceEntityString: "SERVICE.aqm.dialer"
                            }), this.logger.info("Inited"))
                        }
                        cleanup() {
                            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned")
                        }
                        startOutdial(e) {
                            var t;
                            return G(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.dialer.startOutdial(e)
                            }))
                        }
                        updateCadVariables(e) {
                            var t;
                            return G(this, void 0, void 0, (function*() {
                                if (this.checkService()) return null === (t = this.SERVICE) || void 0 === t ? void 0 : t.aqm.dialer.updateCadVariables(e)
                            }))
                        }
                        addEventListener(e, t) {
                            this.checkService() && this.aqmEvents.addEventListener(e, t)
                        }
                        addOnceEventListener(e, t) {
                            this.checkService() && this.aqmEvents.addOnceEventListener(e, t)
                        }
                        removeEventListener(e, t) {
                            this.aqmEvents.removeEventListener(e, t)
                        }
                        removeOnceEventListener(e, t) {
                            this.aqmEvents.removeOnceEventListener(e, t)
                        }
                        removeAllEventListeners() {
                            this.aqmEvents.removeAllEventListeners()
                        }
                    }
                    const $ = o(r, "[Dialer JSAPI] =>"),
                        Y = o($, "[AqmServiceEvents: Dialer] =>");
                    class K {
                        constructor(e) {
                            this.logger = e.logger, this.serviceChecker = e.serviceChecker
                        }
                        checkService() {
                            return this.serviceChecker.check(this.SERVICE)
                        }
                        init(e) {
                            e && (this.SERVICE = e), this.checkService() && this.logger.info("Inited")
                        }
                        cleanup() {
                            this.SERVICE = void 0, this.logger.info("Cleaned")
                        }
                        createInstance(e) {
                            return i.I18N.createService(e)
                        }
                        createMixin(e) {
                            return i.I18N.createMixin(e)
                        }
                        get DEFAULT_INIT_OPTIONS() {
                            var e;
                            if (this.checkService()) return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.i18n.DEFAULT_INIT_OPTIONS
                        }
                        getMergedInitOptions(...e) {
                            return i.I18N.mergeServiceInitOptions(...e)
                        }
                    }
                    const X = o(r, "[I18N JSAPI] =>");
                    class Q {
                        constructor(e) {
                            this.clientLoggers = new Map, this.logger = e.logger
                        }
                        createLogger(e) {
                            const t = Object(i.createLogger)(e);
                            return this.clientLoggers.set(e, t), this.logger.info(`Client logger created: "${e}"`), t
                        }
                        cleanupLogs(e) {
                            this.clientLoggers.has(e) && i.Logger.POOL.cleanupPrefixedLogs(e)
                        }
                        browserDownloadLogsJson(e) {
                            this.clientLoggers.has(e) && i.Logger.POOL.browserDownloadPrefixedLogsJson(e)
                        }
                        browserDownloadLogsText(e) {
                            this.clientLoggers.has(e) && i.Logger.POOL.browserDownloadPrefixedLogsText(e)
                        }
                        getLogsCollection(e) {
                            if (this.clientLoggers.has(e)) return i.Logger.POOL.getPrefixedLogsCollection(e)
                        }
                        getLogsJsonUrl(e) {
                            if (this.clientLoggers.has(e)) return i.Logger.POOL.getPrefixedLogsJsonUrl(e)
                        }
                        getLogsTextUrl(e) {
                            if (this.clientLoggers.has(e)) return i.Logger.POOL.getPrefixedLogsTextUrl(e)
                        }
                    }
                    const ee = o(r, "[Logger JSAPI] =>");
                    class te {
                        constructor(e) {
                            this.logger = e.logger, this.aqmEvents = e.aqmEvents, this.serviceChecker = e.serviceChecker
                        }
                        checkService() {
                            return this.serviceChecker.check(this.SERVICE)
                        }
                        init(e) {
                            e && (this.SERVICE = e), this.checkService() && (this.aqmEvents.init({
                                aqmServiceEntity: this.SERVICE.aqm.screenpop,
                                aqmServiceEntityString: "SERVICE.aqm.screenpop"
                            }), this.logger.info("Inited"))
                        }
                        cleanup() {
                            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned")
                        }
                        addEventListener(e, t) {
                            this.checkService() && this.aqmEvents.addEventListener(e, t)
                        }
                        addOnceEventListener(e, t) {
                            this.checkService() && this.aqmEvents.addOnceEventListener(e, t)
                        }
                        removeEventListener(e, t) {
                            this.aqmEvents.removeEventListener(e, t)
                        }
                        removeOnceEventListener(e, t) {
                            this.aqmEvents.removeOnceEventListener(e, t)
                        }
                        removeAllEventListeners() {
                            this.aqmEvents.removeAllEventListeners()
                        }
                    }
                    const ne = o(r, "[ScreenPop JSAPI] =>"),
                        ie = o(ne, "[AqmServiceEvents: ScreenPop] =>");
                    class re {
                        constructor(e) {
                            this.logger = e.logger, this.serviceChecker = e.serviceChecker
                        }
                        checkService() {
                            return this.serviceChecker.check(this.SERVICE)
                        }
                        init(e) {
                            e && (this.SERVICE = e), this.checkService() && this.logger.info("Inited")
                        }
                        cleanup() {
                            this.SERVICE = void 0, this.logger.info("Cleaned")
                        }
                        listenKeyPress(...e) {
                            var t;
                            this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.event.listenKeyPress(...e))
                        }
                        listenKeyConflict(...e) {
                            var t;
                            this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.event.listenKeyConflict(...e))
                        }
                        listenConflictResolved(...e) {
                            var t;
                            this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.event.listenConflictResolved(...e))
                        }
                        register(...e) {
                            var t;
                            this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.register(...e))
                        }
                        unregisterKeys(...e) {
                            var t;
                            this.checkService() && (null === (t = this.SERVICE) || void 0 === t || t.shortcut.unregisterKeys(...e))
                        }
                        getRegisteredKeys() {
                            var e;
                            if (this.checkService()) return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.getRegisteredKeys()
                        }
                        get DEFAULT_SHORTCUT_KEYS() {
                            var e;
                            return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.DEFAULT_SHORTCUT_KEYS
                        }
                        get MODIFIERS() {
                            var e;
                            return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.MODIFIERS
                        }
                        get REGISTERED_KEYS() {
                            var e;
                            return null === (e = this.SERVICE) || void 0 === e ? void 0 : e.shortcut.REGISTERED_KEYS
                        }
                    }
                    const oe = o(r, "[ShortcutKey JSAPI] =>"),
                        se = (() => {
                            AGENTX_SERVICE ? r.info('Found global "AGENTX_SERVICE"!') : r.error('Missed global "AGENTX_SERVICE"...');
                            const e = (t = AGENTX_SERVICE, new J({
                                logger: Z,
                                SERVICE: t
                            }));
                            var t;
                            const n = new Q({
                                    logger: ee
                                }),
                                i = new re({
                                    logger: oe,
                                    serviceChecker: a({
                                        logger: oe
                                    })
                                }),
                                o = new L({
                                    logger: I,
                                    serviceChecker: a({
                                        logger: I
                                    })
                                }),
                                s = new H({
                                    logger: z,
                                    serviceChecker: a({
                                        logger: z
                                    })
                                }),
                                u = new R({
                                    logger: M,
                                    serviceChecker: a({
                                        logger: M
                                    }),
                                    aqmEvents: D({
                                        logger: _
                                    })
                                }),
                                c = new W({
                                    logger: $,
                                    aqmEvents: D({
                                        logger: Y
                                    }),
                                    serviceChecker: a({
                                        logger: $
                                    })
                                }),
                                l = new te({
                                    logger: ne,
                                    aqmEvents: D({
                                        logger: ie
                                    }),
                                    serviceChecker: a({
                                        logger: ne
                                    })
                                }),
                                d = new K({
                                    logger: X,
                                    serviceChecker: a({
                                        logger: X
                                    })
                                });
                            return e.addEventListener("inited", (() => {
                                u.init(AGENTX_SERVICE), s.init(AGENTX_SERVICE), c.init(AGENTX_SERVICE), l.init(AGENTX_SERVICE), i.init(AGENTX_SERVICE), o.init(AGENTX_SERVICE), d.init(AGENTX_SERVICE)
                            })), e.addEventListener("cleaned", (() => {
                                u.cleanup(), s.cleanup(), c.cleanup(), l.cleanup(), i.cleanup(), d.cleanup(), o.cleanup()
                            })), {
                                config: e,
                                logger: n,
                                shortcutKey: i,
                                actions: o,
                                agentContact: u,
                                agentStateInfo: s,
                                dialer: c,
                                screenpop: l,
                                i18n: d
                            }
                        })()
                }, function(e, t, n) {
                    "use strict";
                    n.r(t), n.d(t, "v1", (function() {
                        return h
                    })), n.d(t, "v3", (function() {
                        return w
                    })), n.d(t, "v4", (function() {
                        return E
                    })), n.d(t, "v5", (function() {
                        return x
                    }));
                    var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
                        r = new Uint8Array(16);

                    function o() {
                        if (!i) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                        return i(r)
                    }
                    for (var s = [], a = 0; a < 256; ++a) s[a] = (a + 256).toString(16).substr(1);
                    var u, c, l = function(e, t) {
                            var n = t || 0,
                                i = s;
                            return [i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]]].join("")
                        },
                        d = 0,
                        f = 0,
                        h = function(e, t, n) {
                            var i = t && n || 0,
                                r = t || [],
                                s = (e = e || {}).node || u,
                                a = void 0 !== e.clockseq ? e.clockseq : c;
                            if (null == s || null == a) {
                                var h = e.random || (e.rng || o)();
                                null == s && (s = u = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]), null == a && (a = c = 16383 & (h[6] << 8 | h[7]))
                            }
                            var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                                g = void 0 !== e.nsecs ? e.nsecs : f + 1,
                                v = p - d + (g - f) / 1e4;
                            if (v < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (v < 0 || p > d) && void 0 === e.nsecs && (g = 0), g >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                            d = p, f = g, c = a;
                            var m = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
                            r[i++] = m >>> 24 & 255, r[i++] = m >>> 16 & 255, r[i++] = m >>> 8 & 255, r[i++] = 255 & m;
                            var y = p / 4294967296 * 1e4 & 268435455;
                            r[i++] = y >>> 8 & 255, r[i++] = 255 & y, r[i++] = y >>> 24 & 15 | 16, r[i++] = y >>> 16 & 255, r[i++] = a >>> 8 | 128, r[i++] = 255 & a;
                            for (var b = 0; b < 6; ++b) r[i + b] = s[b];
                            return t || l(r)
                        },
                        p = function(e, t, n) {
                            var i = function(e, i, r, o) {
                                var s = r && o || 0;
                                if ("string" == typeof e && (e = function(e) {
                                        e = unescape(encodeURIComponent(e));
                                        for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                                        return t
                                    }(e)), "string" == typeof i && (i = function(e) {
                                        var t = [];
                                        return e.replace(/[a-fA-F0-9]{2}/g, (function(e) {
                                            t.push(parseInt(e, 16))
                                        })), t
                                    }(i)), !Array.isArray(e)) throw TypeError("value must be an array of bytes");
                                if (!Array.isArray(i) || 16 !== i.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
                                var a = n(i.concat(e));
                                if (a[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, r)
                                    for (var u = 0; u < 16; ++u) r[s + u] = a[u];
                                return r || l(a)
                            };
                            try {
                                i.name = e
                            } catch (e) {}
                            return i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", i
                        };

                    function g(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                    }

                    function v(e, t, n, i, r, o) {
                        return g((s = g(g(t, e), g(i, o))) << (a = r) | s >>> 32 - a, n);
                        var s, a
                    }

                    function m(e, t, n, i, r, o, s) {
                        return v(t & n | ~t & i, e, t, r, o, s)
                    }

                    function y(e, t, n, i, r, o, s) {
                        return v(t & i | n & ~i, e, t, r, o, s)
                    }

                    function b(e, t, n, i, r, o, s) {
                        return v(t ^ n ^ i, e, t, r, o, s)
                    }

                    function S(e, t, n, i, r, o, s) {
                        return v(n ^ (t | ~i), e, t, r, o, s)
                    }
                    var w = p("v3", 48, (function(e) {
                            if ("string" == typeof e) {
                                var t = unescape(encodeURIComponent(e));
                                e = new Array(t.length);
                                for (var n = 0; n < t.length; n++) e[n] = t.charCodeAt(n)
                            }
                            return function(e) {
                                var t, n, i, r = [],
                                    o = 32 * e.length;
                                for (t = 0; t < o; t += 8) n = e[t >> 5] >>> t % 32 & 255, i = parseInt("0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n), 16), r.push(i);
                                return r
                            }(function(e, t) {
                                var n, i, r, o, s;
                                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                var a = 1732584193,
                                    u = -271733879,
                                    c = -1732584194,
                                    l = 271733878;
                                for (n = 0; n < e.length; n += 16) i = a, r = u, o = c, s = l, a = m(a, u, c, l, e[n], 7, -680876936), l = m(l, a, u, c, e[n + 1], 12, -389564586), c = m(c, l, a, u, e[n + 2], 17, 606105819), u = m(u, c, l, a, e[n + 3], 22, -1044525330), a = m(a, u, c, l, e[n + 4], 7, -176418897), l = m(l, a, u, c, e[n + 5], 12, 1200080426), c = m(c, l, a, u, e[n + 6], 17, -1473231341), u = m(u, c, l, a, e[n + 7], 22, -45705983), a = m(a, u, c, l, e[n + 8], 7, 1770035416), l = m(l, a, u, c, e[n + 9], 12, -1958414417), c = m(c, l, a, u, e[n + 10], 17, -42063), u = m(u, c, l, a, e[n + 11], 22, -1990404162), a = m(a, u, c, l, e[n + 12], 7, 1804603682), l = m(l, a, u, c, e[n + 13], 12, -40341101), c = m(c, l, a, u, e[n + 14], 17, -1502002290), a = y(a, u = m(u, c, l, a, e[n + 15], 22, 1236535329), c, l, e[n + 1], 5, -165796510), l = y(l, a, u, c, e[n + 6], 9, -1069501632), c = y(c, l, a, u, e[n + 11], 14, 643717713), u = y(u, c, l, a, e[n], 20, -373897302), a = y(a, u, c, l, e[n + 5], 5, -701558691), l = y(l, a, u, c, e[n + 10], 9, 38016083), c = y(c, l, a, u, e[n + 15], 14, -660478335), u = y(u, c, l, a, e[n + 4], 20, -405537848), a = y(a, u, c, l, e[n + 9], 5, 568446438), l = y(l, a, u, c, e[n + 14], 9, -1019803690), c = y(c, l, a, u, e[n + 3], 14, -187363961), u = y(u, c, l, a, e[n + 8], 20, 1163531501), a = y(a, u, c, l, e[n + 13], 5, -1444681467), l = y(l, a, u, c, e[n + 2], 9, -51403784), c = y(c, l, a, u, e[n + 7], 14, 1735328473), a = b(a, u = y(u, c, l, a, e[n + 12], 20, -1926607734), c, l, e[n + 5], 4, -378558), l = b(l, a, u, c, e[n + 8], 11, -2022574463), c = b(c, l, a, u, e[n + 11], 16, 1839030562), u = b(u, c, l, a, e[n + 14], 23, -35309556), a = b(a, u, c, l, e[n + 1], 4, -1530992060), l = b(l, a, u, c, e[n + 4], 11, 1272893353), c = b(c, l, a, u, e[n + 7], 16, -155497632), u = b(u, c, l, a, e[n + 10], 23, -1094730640), a = b(a, u, c, l, e[n + 13], 4, 681279174), l = b(l, a, u, c, e[n], 11, -358537222), c = b(c, l, a, u, e[n + 3], 16, -722521979), u = b(u, c, l, a, e[n + 6], 23, 76029189), a = b(a, u, c, l, e[n + 9], 4, -640364487), l = b(l, a, u, c, e[n + 12], 11, -421815835), c = b(c, l, a, u, e[n + 15], 16, 530742520), a = S(a, u = b(u, c, l, a, e[n + 2], 23, -995338651), c, l, e[n], 6, -198630844), l = S(l, a, u, c, e[n + 7], 10, 1126891415), c = S(c, l, a, u, e[n + 14], 15, -1416354905), u = S(u, c, l, a, e[n + 5], 21, -57434055), a = S(a, u, c, l, e[n + 12], 6, 1700485571), l = S(l, a, u, c, e[n + 3], 10, -1894986606), c = S(c, l, a, u, e[n + 10], 15, -1051523), u = S(u, c, l, a, e[n + 1], 21, -2054922799), a = S(a, u, c, l, e[n + 8], 6, 1873313359), l = S(l, a, u, c, e[n + 15], 10, -30611744), c = S(c, l, a, u, e[n + 6], 15, -1560198380), u = S(u, c, l, a, e[n + 13], 21, 1309151649), a = S(a, u, c, l, e[n + 4], 6, -145523070), l = S(l, a, u, c, e[n + 11], 10, -1120210379), c = S(c, l, a, u, e[n + 2], 15, 718787259), u = S(u, c, l, a, e[n + 9], 21, -343485551), a = g(a, i), u = g(u, r), c = g(c, o), l = g(l, s);
                                return [a, u, c, l]
                            }(function(e) {
                                var t, n = [];
                                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                                var i = 8 * e.length;
                                for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e[t / 8]) << t % 32;
                                return n
                            }(e), 8 * e.length))
                        })),
                        E = function(e, t, n) {
                            var i = t && n || 0;
                            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                            var r = (e = e || {}).random || (e.rng || o)();
                            if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t)
                                for (var s = 0; s < 16; ++s) t[i + s] = r[s];
                            return t || l(r)
                        };

                    function k(e, t, n, i) {
                        switch (e) {
                            case 0:
                                return t & n ^ ~t & i;
                            case 1:
                            case 3:
                                return t ^ n ^ i;
                            case 2:
                                return t & n ^ t & i ^ n & i
                        }
                    }

                    function O(e, t) {
                        return e << t | e >>> 32 - t
                    }
                    var x = p("v5", 80, (function(e) {
                        var t = [1518500249, 1859775393, 2400959708, 3395469782],
                            n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                        if ("string" == typeof e) {
                            var i = unescape(encodeURIComponent(e));
                            e = new Array(i.length);
                            for (var r = 0; r < i.length; r++) e[r] = i.charCodeAt(r)
                        }
                        e.push(128);
                        var o = e.length / 4 + 2,
                            s = Math.ceil(o / 16),
                            a = new Array(s);
                        for (r = 0; r < s; r++) {
                            a[r] = new Array(16);
                            for (var u = 0; u < 16; u++) a[r][u] = e[64 * r + 4 * u] << 24 | e[64 * r + 4 * u + 1] << 16 | e[64 * r + 4 * u + 2] << 8 | e[64 * r + 4 * u + 3]
                        }
                        for (a[s - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = 8 * (e.length - 1) & 4294967295, r = 0; r < s; r++) {
                            for (var c = new Array(80), l = 0; l < 16; l++) c[l] = a[r][l];
                            for (l = 16; l < 80; l++) c[l] = O(c[l - 3] ^ c[l - 8] ^ c[l - 14] ^ c[l - 16], 1);
                            var d = n[0],
                                f = n[1],
                                h = n[2],
                                p = n[3],
                                g = n[4];
                            for (l = 0; l < 80; l++) {
                                var v = Math.floor(l / 20),
                                    m = O(d, 5) + k(v, f, h, p) + g + t[v] + c[l] >>> 0;
                                g = p, p = h, h = O(f, 30) >>> 0, f = d, d = m
                            }
                            n[0] = n[0] + d >>> 0, n[1] = n[1] + f >>> 0, n[2] = n[2] + h >>> 0, n[3] = n[3] + p >>> 0, n[4] = n[4] + g >>> 0
                        }
                        return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
                    }))
                }, function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function r(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function o(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? Object(arguments[t]) : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), i.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }
                    n.r(t);
                    var s = n(2),
                        a = n(3);

                    function u(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function c(e, t) {
                        if (t && ("object" === i(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return u(e)
                    }

                    function l(e) {
                        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function d(e, t) {
                        return (d = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function f(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && d(e, t)
                    }
                    var h = {
                            type: "logger",
                            log: function(e) {
                                this.output("log", e)
                            },
                            warn: function(e) {
                                this.output("warn", e)
                            },
                            error: function(e) {
                                this.output("error", e)
                            },
                            output: function(e, t) {
                                console && console[e] && console[e].apply(console, t)
                            }
                        },
                        p = new(function() {
                            function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                Object(s.a)(this, e), this.init(t, n)
                            }
                            return Object(a.a)(e, [{
                                key: "init",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    this.prefix = t.prefix || "i18next:", this.logger = e || h, this.options = t, this.debug = t.debug
                                }
                            }, {
                                key: "setDebug",
                                value: function(e) {
                                    this.debug = e
                                }
                            }, {
                                key: "log",
                                value: function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "log", "", !0)
                                }
                            }, {
                                key: "warn",
                                value: function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "warn", "", !0)
                                }
                            }, {
                                key: "error",
                                value: function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "error", "")
                                }
                            }, {
                                key: "deprecate",
                                value: function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                                }
                            }, {
                                key: "forward",
                                value: function(e, t, n, i) {
                                    return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                                }
                            }, {
                                key: "create",
                                value: function(t) {
                                    return new e(this.logger, o({}, {
                                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                                    }, this.options))
                                }
                            }]), e
                        }()),
                        g = function() {
                            function e() {
                                Object(s.a)(this, e), this.observers = {}
                            }
                            return Object(a.a)(e, [{
                                key: "on",
                                value: function(e, t) {
                                    var n = this;
                                    return e.split(" ").forEach((function(e) {
                                        n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                                    })), this
                                }
                            }, {
                                key: "off",
                                value: function(e, t) {
                                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                                        return e !== t
                                    })) : delete this.observers[e])
                                }
                            }, {
                                key: "emit",
                                value: function(e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                    this.observers[e] && [].concat(this.observers[e]).forEach((function(e) {
                                        e.apply(void 0, n)
                                    })), this.observers["*"] && [].concat(this.observers["*"]).forEach((function(t) {
                                        t.apply(t, [e].concat(n))
                                    }))
                                }
                            }]), e
                        }();

                    function v() {
                        var e, t, n = new Promise((function(n, i) {
                            e = n, t = i
                        }));
                        return n.resolve = e, n.reject = t, n
                    }

                    function m(e) {
                        return null == e ? "" : "" + e
                    }

                    function y(e, t, n) {
                        e.forEach((function(e) {
                            t[e] && (n[e] = t[e])
                        }))
                    }

                    function b(e, t, n) {
                        function i(e) {
                            return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                        }

                        function r() {
                            return !e || "string" == typeof e
                        }
                        for (var o = "string" != typeof t ? [].concat(t) : t.split("."); o.length > 1;) {
                            if (r()) return {};
                            var s = i(o.shift());
                            !e[s] && n && (e[s] = new n), e = Object.prototype.hasOwnProperty.call(e, s) ? e[s] : {}
                        }
                        return r() ? {} : {
                            obj: e,
                            k: i(o.shift())
                        }
                    }

                    function S(e, t, n) {
                        var i = b(e, t, Object);
                        i.obj[i.k] = n
                    }

                    function w(e, t) {
                        var n = b(e, t),
                            i = n.obj,
                            r = n.k;
                        if (i) return i[r]
                    }

                    function E(e, t, n) {
                        var i = w(e, n);
                        return void 0 !== i ? i : w(t, n)
                    }

                    function k(e, t, n) {
                        for (var i in t) "__proto__" !== i && "constructor" !== i && (i in e ? "string" == typeof e[i] || e[i] instanceof String || "string" == typeof t[i] || t[i] instanceof String ? n && (e[i] = t[i]) : k(e[i], t[i], n) : e[i] = t[i]);
                        return e
                    }

                    function O(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    }
                    var x = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;"
                    };

                    function T(e) {
                        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                            return x[e]
                        })) : e
                    }
                    var C = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                        L = function(e) {
                            function t(e) {
                                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    ns: ["translation"],
                                    defaultNS: "translation"
                                };
                                return Object(s.a)(this, t), n = c(this, l(t).call(this)), C && g.call(u(n)), n.data = e || {}, n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n
                            }
                            return f(t, e), Object(a.a)(t, [{
                                key: "addNamespaces",
                                value: function(e) {
                                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                                }
                            }, {
                                key: "removeNamespaces",
                                value: function(e) {
                                    var t = this.options.ns.indexOf(e);
                                    t > -1 && this.options.ns.splice(t, 1)
                                }
                            }, {
                                key: "getResource",
                                value: function(e, t, n) {
                                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        r = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                                        o = [e, t];
                                    return n && "string" != typeof n && (o = o.concat(n)), n && "string" == typeof n && (o = o.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (o = e.split(".")), w(this.data, o)
                                }
                            }, {
                                key: "addResource",
                                value: function(e, t, n, i) {
                                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                            silent: !1
                                        },
                                        o = this.options.keySeparator;
                                    void 0 === o && (o = ".");
                                    var s = [e, t];
                                    n && (s = s.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (i = t, t = (s = e.split("."))[1]), this.addNamespaces(t), S(this.data, s, i), r.silent || this.emit("added", e, t, n, i)
                                }
                            }, {
                                key: "addResources",
                                value: function(e, t, n) {
                                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                        silent: !1
                                    };
                                    for (var r in n) "string" != typeof n[r] && "[object Array]" !== Object.prototype.toString.apply(n[r]) || this.addResource(e, t, r, n[r], {
                                        silent: !0
                                    });
                                    i.silent || this.emit("added", e, t, n)
                                }
                            }, {
                                key: "addResourceBundle",
                                value: function(e, t, n, i, r) {
                                    var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                            silent: !1
                                        },
                                        a = [e, t];
                                    e.indexOf(".") > -1 && (i = n, n = t, t = (a = e.split("."))[1]), this.addNamespaces(t);
                                    var u = w(this.data, a) || {};
                                    i ? k(u, n, r) : u = o({}, u, n), S(this.data, a, u), s.silent || this.emit("added", e, t, n)
                                }
                            }, {
                                key: "removeResourceBundle",
                                value: function(e, t) {
                                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                                }
                            }, {
                                key: "hasResourceBundle",
                                value: function(e, t) {
                                    return void 0 !== this.getResource(e, t)
                                }
                            }, {
                                key: "getResourceBundle",
                                value: function(e, t) {
                                    return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? o({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                                }
                            }, {
                                key: "getDataByLanguage",
                                value: function(e) {
                                    return this.data[e]
                                }
                            }, {
                                key: "toJSON",
                                value: function() {
                                    return this.data
                                }
                            }]), t
                        }(g),
                        I = {
                            processors: {},
                            addPostProcessor: function(e) {
                                this.processors[e.name] = e
                            },
                            handle: function(e, t, n, i, r) {
                                var o = this;
                                return e.forEach((function(e) {
                                    o.processors[e] && (t = o.processors[e].process(t, n, i, r))
                                })), t
                            }
                        },
                        A = {},
                        D = function(e) {
                            function t(e) {
                                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return Object(s.a)(this, t), n = c(this, l(t).call(this)), C && g.call(u(n)), y(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, u(n)), n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = p.create("translator"), n
                            }
                            return f(t, e), Object(a.a)(t, [{
                                key: "changeLanguage",
                                value: function(e) {
                                    e && (this.language = e)
                                }
                            }, {
                                key: "exists",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                            interpolation: {}
                                        },
                                        n = this.resolve(e, t);
                                    return n && void 0 !== n.res
                                }
                            }, {
                                key: "extractFromKey",
                                value: function(e, t) {
                                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                    void 0 === n && (n = ":");
                                    var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                        r = t.ns || this.options.defaultNS;
                                    if (n && e.indexOf(n) > -1) {
                                        var o = e.match(this.interpolator.nestingRegexp);
                                        if (o && o.length > 0) return {
                                            key: e,
                                            namespaces: r
                                        };
                                        var s = e.split(n);
                                        (n !== i || n === i && this.options.ns.indexOf(s[0]) > -1) && (r = s.shift()), e = s.join(i)
                                    }
                                    return "string" == typeof r && (r = [r]), {
                                        key: e,
                                        namespaces: r
                                    }
                                }
                            }, {
                                key: "translate",
                                value: function(e, n, r) {
                                    var s = this;
                                    if ("object" !== i(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == e) return "";
                                    Array.isArray(e) || (e = [String(e)]);
                                    var a = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                        u = this.extractFromKey(e[e.length - 1], n),
                                        c = u.key,
                                        l = u.namespaces,
                                        d = l[l.length - 1],
                                        f = n.lng || this.language,
                                        h = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                    if (f && "cimode" === f.toLowerCase()) {
                                        if (h) {
                                            var p = n.nsSeparator || this.options.nsSeparator;
                                            return d + p + c
                                        }
                                        return c
                                    }
                                    var g = this.resolve(e, n),
                                        v = g && g.res,
                                        m = g && g.usedKey || c,
                                        y = g && g.exactUsedKey || c,
                                        b = Object.prototype.toString.apply(v),
                                        S = ["[object Number]", "[object Function]", "[object RegExp]"],
                                        w = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                        E = !this.i18nFormat || this.i18nFormat.handleAsObject;
                                    if (E && v && "string" != typeof v && "boolean" != typeof v && "number" != typeof v && S.indexOf(b) < 0 && ("string" != typeof w || "[object Array]" !== b)) {
                                        if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, v, n) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                                        if (a) {
                                            var k = "[object Array]" === b,
                                                O = k ? [] : {},
                                                x = k ? y : m;
                                            for (var T in v)
                                                if (Object.prototype.hasOwnProperty.call(v, T)) {
                                                    var C = "".concat(x).concat(a).concat(T);
                                                    O[T] = this.translate(C, o({}, n, {
                                                        joinArrays: !1,
                                                        ns: l
                                                    })), O[T] === C && (O[T] = v[T])
                                                } v = O
                                        }
                                    } else if (E && "string" == typeof w && "[object Array]" === b)(v = v.join(w)) && (v = this.extendTranslation(v, e, n, r));
                                    else {
                                        var L = !1,
                                            I = !1,
                                            A = void 0 !== n.count && "string" != typeof n.count,
                                            D = t.hasDefaultValue(n),
                                            N = A ? this.pluralResolver.getSuffix(f, n.count) : "",
                                            R = n["defaultValue".concat(N)] || n.defaultValue;
                                        !this.isValidLookup(v) && D && (L = !0, v = R), this.isValidLookup(v) || (I = !0, v = c);
                                        var M = D && R !== v && this.options.updateMissing;
                                        if (I || L || M) {
                                            if (this.logger.log(M ? "updateKey" : "missingKey", f, d, c, M ? R : v), a) {
                                                var _ = this.resolve(c, o({}, n, {
                                                    keySeparator: !1
                                                }));
                                                _ && _.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                            }
                                            var j = [],
                                                P = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                            if ("fallback" === this.options.saveMissingTo && P && P[0])
                                                for (var V = 0; V < P.length; V++) j.push(P[V]);
                                            else "all" === this.options.saveMissingTo ? j = this.languageUtils.toResolveHierarchy(n.lng || this.language) : j.push(n.lng || this.language);
                                            var q = function(e, t, i) {
                                                s.options.missingKeyHandler ? s.options.missingKeyHandler(e, d, t, M ? i : v, M, n) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(e, d, t, M ? i : v, M, n), s.emit("missingKey", e, d, t, v)
                                            };
                                            this.options.saveMissing && (this.options.saveMissingPlurals && A ? j.forEach((function(e) {
                                                s.pluralResolver.getSuffixes(e).forEach((function(t) {
                                                    q([e], c + t, n["defaultValue".concat(t)] || R)
                                                }))
                                            })) : q(j, c, R))
                                        }
                                        v = this.extendTranslation(v, e, n, g, r), I && v === c && this.options.appendNamespaceToMissingKey && (v = "".concat(d, ":").concat(c)), I && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(v))
                                    }
                                    return v
                                }
                            }, {
                                key: "extendTranslation",
                                value: function(e, t, n, i, r) {
                                    var s = this;
                                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, i.usedLng, i.usedNS, i.usedKey, {
                                        resolved: i
                                    });
                                    else if (!n.skipInterpolation) {
                                        n.interpolation && this.interpolator.init(o({}, n, {
                                            interpolation: o({}, this.options.interpolation, n.interpolation)
                                        }));
                                        var a, u = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                        if (u) {
                                            var c = e.match(this.interpolator.nestingRegexp);
                                            a = c && c.length
                                        }
                                        var l = n.replace && "string" != typeof n.replace ? n.replace : n;
                                        if (this.options.interpolation.defaultVariables && (l = o({}, this.options.interpolation.defaultVariables, l)), e = this.interpolator.interpolate(e, l, n.lng || this.language, n), u) {
                                            var d = e.match(this.interpolator.nestingRegexp);
                                            a < (d && d.length) && (n.nest = !1)
                                        }!1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                                            for (var e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                                            return r && r[0] === i[0] && !n.context ? (s.logger.warn("It seems you are nesting recursively key: ".concat(i[0], " in key: ").concat(t[0])), null) : s.translate.apply(s, i.concat([t]))
                                        }), n)), n.interpolation && this.interpolator.reset()
                                    }
                                    var f = n.postProcess || this.options.postProcess,
                                        h = "string" == typeof f ? [f] : f;
                                    return null != e && h && h.length && !1 !== n.applyPostProcessor && (e = I.handle(h, e, t, this.options && this.options.postProcessPassResolved ? o({
                                        i18nResolved: i
                                    }, n) : n, this)), e
                                }
                            }, {
                                key: "resolve",
                                value: function(e) {
                                    var t, n, i, r, o, s = this,
                                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return "string" == typeof e && (e = [e]), e.forEach((function(e) {
                                        if (!s.isValidLookup(t)) {
                                            var u = s.extractFromKey(e, a),
                                                c = u.key;
                                            n = c;
                                            var l = u.namespaces;
                                            s.options.fallbackNS && (l = l.concat(s.options.fallbackNS));
                                            var d = void 0 !== a.count && "string" != typeof a.count,
                                                f = void 0 !== a.context && "string" == typeof a.context && "" !== a.context,
                                                h = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
                                            l.forEach((function(e) {
                                                s.isValidLookup(t) || (o = e, !A["".concat(h[0], "-").concat(e)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(o) && (A["".concat(h[0], "-").concat(e)] = !0, s.logger.warn('key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(o, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach((function(n) {
                                                    if (!s.isValidLookup(t)) {
                                                        r = n;
                                                        var o, u, l = c,
                                                            h = [l];
                                                        for (s.i18nFormat && s.i18nFormat.addLookupKeys ? s.i18nFormat.addLookupKeys(h, c, n, e, a) : (d && (o = s.pluralResolver.getSuffix(n, a.count)), d && f && h.push(l + o), f && h.push(l += "".concat(s.options.contextSeparator).concat(a.context)), d && h.push(l += o)); u = h.pop();) s.isValidLookup(t) || (i = u, t = s.getResource(n, e, u, a))
                                                    }
                                                })))
                                            }))
                                        }
                                    })), {
                                        res: t,
                                        usedKey: n,
                                        exactUsedKey: i,
                                        usedLng: r,
                                        usedNS: o
                                    }
                                }
                            }, {
                                key: "isValidLookup",
                                value: function(e) {
                                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                                }
                            }, {
                                key: "getResource",
                                value: function(e, t, n) {
                                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i)
                                }
                            }], [{
                                key: "hasDefaultValue",
                                value: function(e) {
                                    for (var t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t) && "defaultValue" === t.substring(0, "defaultValue".length) && void 0 !== e[t]) return !0;
                                    return !1
                                }
                            }]), t
                        }(g);

                    function N(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }
                    var R = function() {
                            function e(t) {
                                Object(s.a)(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = p.create("languageUtils")
                            }
                            return Object(a.a)(e, [{
                                key: "getScriptPartFromCode",
                                value: function(e) {
                                    if (!e || e.indexOf("-") < 0) return null;
                                    var t = e.split("-");
                                    return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                                }
                            }, {
                                key: "getLanguagePartFromCode",
                                value: function(e) {
                                    if (!e || e.indexOf("-") < 0) return e;
                                    var t = e.split("-");
                                    return this.formatLanguageCode(t[0])
                                }
                            }, {
                                key: "formatLanguageCode",
                                value: function(e) {
                                    if ("string" == typeof e && e.indexOf("-") > -1) {
                                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                            n = e.split("-");
                                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                                            return e.toLowerCase()
                                        })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = N(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = N(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = N(n[2].toLowerCase()))), n.join("-")
                                    }
                                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                                }
                            }, {
                                key: "isWhitelisted",
                                value: function(e) {
                                    return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e)
                                }
                            }, {
                                key: "isSupportedCode",
                                value: function(e) {
                                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                                }
                            }, {
                                key: "getBestMatchFromCodes",
                                value: function(e) {
                                    var t, n = this;
                                    return e ? (e.forEach((function(e) {
                                        if (!t) {
                                            var i = n.formatLanguageCode(e);
                                            n.options.supportedLngs && !n.isSupportedCode(i) || (t = i)
                                        }
                                    })), !t && this.options.supportedLngs && e.forEach((function(e) {
                                        if (!t) {
                                            var i = n.getLanguagePartFromCode(e);
                                            if (n.isSupportedCode(i)) return t = i;
                                            t = n.options.supportedLngs.find((function(e) {
                                                if (0 === e.indexOf(i)) return e
                                            }))
                                        }
                                    })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                                }
                            }, {
                                key: "getFallbackCodes",
                                value: function(e, t) {
                                    if (!e) return [];
                                    if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                                    if (!t) return e.default || [];
                                    var n = e[t];
                                    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                                }
                            }, {
                                key: "toResolveHierarchy",
                                value: function(e, t) {
                                    var n = this,
                                        i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                        r = [],
                                        o = function(e) {
                                            e && (n.isSupportedCode(e) ? r.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                                        };
                                    return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" == typeof e && o(this.formatLanguageCode(e)), i.forEach((function(e) {
                                        r.indexOf(e) < 0 && o(n.formatLanguageCode(e))
                                    })), r
                                }
                            }]), e
                        }(),
                        M = [{
                            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                            nr: [1, 2],
                            fc: 1
                        }, {
                            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                            nr: [1, 2],
                            fc: 2
                        }, {
                            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                            nr: [1],
                            fc: 3
                        }, {
                            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                            nr: [1, 2, 5],
                            fc: 4
                        }, {
                            lngs: ["ar"],
                            nr: [0, 1, 2, 3, 11, 100],
                            fc: 5
                        }, {
                            lngs: ["cs", "sk"],
                            nr: [1, 2, 5],
                            fc: 6
                        }, {
                            lngs: ["csb", "pl"],
                            nr: [1, 2, 5],
                            fc: 7
                        }, {
                            lngs: ["cy"],
                            nr: [1, 2, 3, 8],
                            fc: 8
                        }, {
                            lngs: ["fr"],
                            nr: [1, 2],
                            fc: 9
                        }, {
                            lngs: ["ga"],
                            nr: [1, 2, 3, 7, 11],
                            fc: 10
                        }, {
                            lngs: ["gd"],
                            nr: [1, 2, 3, 20],
                            fc: 11
                        }, {
                            lngs: ["is"],
                            nr: [1, 2],
                            fc: 12
                        }, {
                            lngs: ["jv"],
                            nr: [0, 1],
                            fc: 13
                        }, {
                            lngs: ["kw"],
                            nr: [1, 2, 3, 4],
                            fc: 14
                        }, {
                            lngs: ["lt"],
                            nr: [1, 2, 10],
                            fc: 15
                        }, {
                            lngs: ["lv"],
                            nr: [1, 2, 0],
                            fc: 16
                        }, {
                            lngs: ["mk"],
                            nr: [1, 2],
                            fc: 17
                        }, {
                            lngs: ["mnk"],
                            nr: [0, 1, 2],
                            fc: 18
                        }, {
                            lngs: ["mt"],
                            nr: [1, 2, 11, 20],
                            fc: 19
                        }, {
                            lngs: ["or"],
                            nr: [2, 1],
                            fc: 2
                        }, {
                            lngs: ["ro"],
                            nr: [1, 2, 20],
                            fc: 20
                        }, {
                            lngs: ["sl"],
                            nr: [5, 1, 2, 3],
                            fc: 21
                        }, {
                            lngs: ["he", "iw"],
                            nr: [1, 2, 20, 21],
                            fc: 22
                        }],
                        _ = {
                            1: function(e) {
                                return Number(e > 1)
                            },
                            2: function(e) {
                                return Number(1 != e)
                            },
                            3: function(e) {
                                return 0
                            },
                            4: function(e) {
                                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                            },
                            5: function(e) {
                                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                            },
                            6: function(e) {
                                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                            },
                            7: function(e) {
                                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                            },
                            8: function(e) {
                                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                            },
                            9: function(e) {
                                return Number(e >= 2)
                            },
                            10: function(e) {
                                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                            },
                            11: function(e) {
                                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                            },
                            12: function(e) {
                                return Number(e % 10 != 1 || e % 100 == 11)
                            },
                            13: function(e) {
                                return Number(0 !== e)
                            },
                            14: function(e) {
                                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                            },
                            15: function(e) {
                                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                            },
                            16: function(e) {
                                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                            },
                            17: function(e) {
                                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                            },
                            18: function(e) {
                                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                            },
                            19: function(e) {
                                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                            },
                            20: function(e) {
                                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                            },
                            21: function(e) {
                                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                            },
                            22: function(e) {
                                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                            }
                        };

                    function j() {
                        var e = {};
                        return M.forEach((function(t) {
                            t.lngs.forEach((function(n) {
                                e[n] = {
                                    numbers: t.nr,
                                    plurals: _[t.fc]
                                }
                            }))
                        })), e
                    }
                    var P = function() {
                            function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                Object(s.a)(this, e), this.languageUtils = t, this.options = n, this.logger = p.create("pluralResolver"), this.rules = j()
                            }
                            return Object(a.a)(e, [{
                                key: "addRule",
                                value: function(e, t) {
                                    this.rules[e] = t
                                }
                            }, {
                                key: "getRule",
                                value: function(e) {
                                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                                }
                            }, {
                                key: "needsPlural",
                                value: function(e) {
                                    var t = this.getRule(e);
                                    return t && t.numbers.length > 1
                                }
                            }, {
                                key: "getPluralFormsOfKey",
                                value: function(e, t) {
                                    return this.getSuffixes(e).map((function(e) {
                                        return t + e
                                    }))
                                }
                            }, {
                                key: "getSuffixes",
                                value: function(e) {
                                    var t = this,
                                        n = this.getRule(e);
                                    return n ? n.numbers.map((function(n) {
                                        return t.getSuffix(e, n)
                                    })) : []
                                }
                            }, {
                                key: "getSuffix",
                                value: function(e, t) {
                                    var n = this,
                                        i = this.getRule(e);
                                    if (i) {
                                        var r = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t)),
                                            o = i.numbers[r];
                                        this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                                        var s = function() {
                                            return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                                        };
                                        return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_".concat(o.toString()) : s() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? s() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                                    }
                                    return this.logger.warn("no plural rule found for: ".concat(e)), ""
                                }
                            }]), e
                        }(),
                        V = function() {
                            function e() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                Object(s.a)(this, e), this.logger = p.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
                                    return e
                                }, this.init(t)
                            }
                            return Object(a.a)(e, [{
                                key: "init",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    e.interpolation || (e.interpolation = {
                                        escapeValue: !0
                                    });
                                    var t = e.interpolation;
                                    this.escape = void 0 !== t.escape ? t.escape : T, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? O(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? O(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? O(t.nestingPrefix) : t.nestingPrefixEscaped || O("$t("), this.nestingSuffix = t.nestingSuffix ? O(t.nestingSuffix) : t.nestingSuffixEscaped || O(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                                }
                            }, {
                                key: "reset",
                                value: function() {
                                    this.options && this.init(this.options)
                                }
                            }, {
                                key: "resetRegExp",
                                value: function() {
                                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                                    this.regexp = new RegExp(e, "g");
                                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                                    this.regexpUnescape = new RegExp(t, "g");
                                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                                    this.nestingRegexp = new RegExp(n, "g")
                                }
                            }, {
                                key: "interpolate",
                                value: function(e, t, n, i) {
                                    var r, o, s, a = this,
                                        u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                                    function c(e) {
                                        return e.replace(/\$/g, "$$$$")
                                    }
                                    var l = function(e) {
                                        if (e.indexOf(a.formatSeparator) < 0) {
                                            var r = E(t, u, e);
                                            return a.alwaysFormat ? a.format(r, void 0, n) : r
                                        }
                                        var o = e.split(a.formatSeparator),
                                            s = o.shift().trim(),
                                            c = o.join(a.formatSeparator).trim();
                                        return a.format(E(t, u, s), c, n, i)
                                    };
                                    this.resetRegExp();
                                    var d = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                        f = i && i.interpolation && i.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                    return [{
                                        regex: this.regexpUnescape,
                                        safeValue: function(e) {
                                            return c(e)
                                        }
                                    }, {
                                        regex: this.regexp,
                                        safeValue: function(e) {
                                            return a.escapeValue ? c(a.escape(e)) : c(e)
                                        }
                                    }].forEach((function(t) {
                                        for (s = 0; r = t.regex.exec(e);) {
                                            if (void 0 === (o = l(r[1].trim())))
                                                if ("function" == typeof d) {
                                                    var n = d(e, r, i);
                                                    o = "string" == typeof n ? n : ""
                                                } else {
                                                    if (f) {
                                                        o = r[0];
                                                        continue
                                                    }
                                                    a.logger.warn("missed to pass in variable ".concat(r[1], " for interpolating ").concat(e)), o = ""
                                                }
                                            else "string" == typeof o || a.useRawValueToEscape || (o = m(o));
                                            if (e = e.replace(r[0], t.safeValue(o)), t.regex.lastIndex = 0, ++s >= a.maxReplaces) break
                                        }
                                    })), e
                                }
                            }, {
                                key: "nest",
                                value: function(e, t) {
                                    var n, i, r = this,
                                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        a = o({}, s);

                                    function u(e, t) {
                                        var n = this.nestingOptionsSeparator;
                                        if (e.indexOf(n) < 0) return e;
                                        var i = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                            r = "{".concat(i[1]);
                                        e = i[0], r = (r = this.interpolate(r, a)).replace(/'/g, '"');
                                        try {
                                            a = JSON.parse(r), t && (a = o({}, t, a))
                                        } catch (t) {
                                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(r)
                                        }
                                        return delete a.defaultValue, e
                                    }
                                    for (a.applyPostProcessor = !1, delete a.defaultValue; n = this.nestingRegexp.exec(e);) {
                                        var c = [],
                                            l = !1;
                                        if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                            var d = n[1].split(this.formatSeparator).map((function(e) {
                                                return e.trim()
                                            }));
                                            n[1] = d.shift(), c = d, l = !0
                                        }
                                        if ((i = t(u.call(this, n[1].trim(), a), a)) && n[0] === e && "string" != typeof i) return i;
                                        "string" != typeof i && (i = m(i)), i || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), i = ""), l && (i = c.reduce((function(e, t) {
                                            return r.format(e, t, s.lng, s)
                                        }), i.trim())), e = e.replace(n[0], i), this.regexp.lastIndex = 0
                                    }
                                    return e
                                }
                            }]), e
                        }(),
                        q = function(e) {
                            function t(e, n, i) {
                                var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                return Object(s.a)(this, t), r = c(this, l(t).call(this)), C && g.call(u(r)), r.backend = e, r.store = n, r.services = i, r.languageUtils = i.languageUtils, r.options = o, r.logger = p.create("backendConnector"), r.state = {}, r.queue = [], r.backend && r.backend.init && r.backend.init(i, o.backend, o), r
                            }
                            return f(t, e), Object(a.a)(t, [{
                                key: "queueLoad",
                                value: function(e, t, n, i) {
                                    var r = this,
                                        o = [],
                                        s = [],
                                        a = [],
                                        u = [];
                                    return e.forEach((function(e) {
                                        var i = !0;
                                        t.forEach((function(t) {
                                            var a = "".concat(e, "|").concat(t);
                                            !n.reload && r.store.hasResourceBundle(e, t) ? r.state[a] = 2 : r.state[a] < 0 || (1 === r.state[a] ? s.indexOf(a) < 0 && s.push(a) : (r.state[a] = 1, i = !1, s.indexOf(a) < 0 && s.push(a), o.indexOf(a) < 0 && o.push(a), u.indexOf(t) < 0 && u.push(t)))
                                        })), i || a.push(e)
                                    })), (o.length || s.length) && this.queue.push({
                                        pending: s,
                                        loaded: {},
                                        errors: [],
                                        callback: i
                                    }), {
                                        toLoad: o,
                                        pending: s,
                                        toLoadLanguages: a,
                                        toLoadNamespaces: u
                                    }
                                }
                            }, {
                                key: "loaded",
                                value: function(e, t, n) {
                                    var i = e.split("|"),
                                        r = i[0],
                                        o = i[1];
                                    t && this.emit("failedLoading", r, o, t), n && this.store.addResourceBundle(r, o, n), this.state[e] = t ? -1 : 2;
                                    var s = {};
                                    this.queue.forEach((function(n) {
                                        var i, a, u, c, l;
                                        i = n.loaded, a = o, (c = (u = b(i, [r], Object)).obj)[l = u.k] = c[l] || [], c[l].push(a),
                                            function(e, t) {
                                                for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
                                            }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
                                                s[e] || (s[e] = []), n.loaded[e].length && n.loaded[e].forEach((function(t) {
                                                    s[e].indexOf(t) < 0 && s[e].push(t)
                                                }))
                                            })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                                    })), this.emit("loaded", s), this.queue = this.queue.filter((function(e) {
                                        return !e.done
                                    }))
                                }
                            }, {
                                key: "read",
                                value: function(e, t, n) {
                                    var i = this,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                        s = arguments.length > 5 ? arguments[5] : void 0;
                                    return e.length ? this.backend[n](e, t, (function(a, u) {
                                        a && u && r < 5 ? setTimeout((function() {
                                            i.read.call(i, e, t, n, r + 1, 2 * o, s)
                                        }), o) : s(a, u)
                                    })) : s(null, {})
                                }
                            }, {
                                key: "prepareLoading",
                                value: function(e, t) {
                                    var n = this,
                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        r = arguments.length > 3 ? arguments[3] : void 0;
                                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                                    var o = this.queueLoad(e, t, i, r);
                                    if (!o.toLoad.length) return o.pending.length || r(), null;
                                    o.toLoad.forEach((function(e) {
                                        n.loadOne(e)
                                    }))
                                }
                            }, {
                                key: "load",
                                value: function(e, t, n) {
                                    this.prepareLoading(e, t, {}, n)
                                }
                            }, {
                                key: "reload",
                                value: function(e, t, n) {
                                    this.prepareLoading(e, t, {
                                        reload: !0
                                    }, n)
                                }
                            }, {
                                key: "loadOne",
                                value: function(e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                        i = e.split("|"),
                                        r = i[0],
                                        o = i[1];
                                    this.read(r, o, "read", void 0, void 0, (function(i, s) {
                                        i && t.logger.warn("".concat(n, "loading namespace ").concat(o, " for language ").concat(r, " failed"), i), !i && s && t.logger.log("".concat(n, "loaded namespace ").concat(o, " for language ").concat(r), s), t.loaded(e, i, s)
                                    }))
                                }
                            }, {
                                key: "saveMissing",
                                value: function(e, t, n, i, r) {
                                    var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, i, null, o({}, s, {
                                        isUpdate: r
                                    })), e && e[0] && this.store.addResource(e[0], t, n, i))
                                }
                            }]), t
                        }(g);

                    function U() {
                        return {
                            debug: !1,
                            initImmediate: !0,
                            ns: ["translation"],
                            defaultNS: ["translation"],
                            fallbackLng: ["dev"],
                            fallbackNS: !1,
                            whitelist: !1,
                            nonExplicitWhitelist: !1,
                            supportedLngs: !1,
                            nonExplicitSupportedLngs: !1,
                            load: "all",
                            preload: !1,
                            simplifyPluralSuffix: !0,
                            keySeparator: ".",
                            nsSeparator: ":",
                            pluralSeparator: "_",
                            contextSeparator: "_",
                            partialBundledLanguages: !1,
                            saveMissing: !1,
                            updateMissing: !1,
                            saveMissingTo: "fallback",
                            saveMissingPlurals: !0,
                            missingKeyHandler: !1,
                            missingInterpolationHandler: !1,
                            postProcess: !1,
                            postProcessPassResolved: !1,
                            returnNull: !0,
                            returnEmptyString: !0,
                            returnObjects: !1,
                            joinArrays: !1,
                            returnedObjectHandler: !1,
                            parseMissingKeyHandler: !1,
                            appendNamespaceToMissingKey: !1,
                            appendNamespaceToCIMode: !1,
                            overloadTranslationOptionHandler: function(e) {
                                var t = {};
                                if ("object" === i(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === i(e[2]) || "object" === i(e[3])) {
                                    var n = e[3] || e[2];
                                    Object.keys(n).forEach((function(e) {
                                        t[e] = n[e]
                                    }))
                                }
                                return t
                            },
                            interpolation: {
                                escapeValue: !0,
                                format: function(e, t, n, i) {
                                    return e
                                },
                                prefix: "{{",
                                suffix: "}}",
                                formatSeparator: ",",
                                unescapePrefix: "-",
                                nestingPrefix: "$t(",
                                nestingSuffix: ")",
                                nestingOptionsSeparator: ",",
                                maxReplaces: 1e3,
                                skipOnVariables: !1
                            }
                        }
                    }

                    function F(e) {
                        return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
                    }

                    function H() {}
                    var z = new(function(e) {
                        function t() {
                            var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = arguments.length > 1 ? arguments[1] : void 0;
                            if (Object(s.a)(this, t), e = c(this, l(t).call(this)), C && g.call(u(e)), e.options = F(n), e.services = {}, e.logger = p, e.modules = {
                                    external: []
                                }, i && !e.isInitialized && !n.isClone) {
                                if (!e.options.initImmediate) return e.init(n, i), c(e, u(e));
                                setTimeout((function() {
                                    e.init(n, i)
                                }), 0)
                            }
                            return e
                        }
                        return f(t, e), Object(a.a)(t, [{
                            key: "init",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = arguments.length > 1 ? arguments[1] : void 0;

                                function i(e) {
                                    return e ? "function" == typeof e ? new e : e : null
                                }
                                if ("function" == typeof t && (n = t, t = {}), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = o({}, U(), this.options, F(t)), this.format = this.options.interpolation.format, n || (n = H), !this.options.isClone) {
                                    this.modules.logger ? p.init(i(this.modules.logger), this.options) : p.init(null, this.options);
                                    var r = new R(this.options);
                                    this.store = new L(this.options.resources, this.options);
                                    var s = this.services;
                                    s.logger = p, s.resourceStore = this.store, s.languageUtils = r, s.pluralResolver = new P(r, {
                                        prepend: this.options.pluralSeparator,
                                        compatibilityJSON: this.options.compatibilityJSON,
                                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                                    }), s.interpolator = new V(this.options), s.utils = {
                                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                                    }, s.backendConnector = new q(i(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", (function(t) {
                                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                                        e.emit.apply(e, [t].concat(i))
                                    })), this.modules.languageDetector && (s.languageDetector = i(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = i(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new D(this.services, this.options), this.translator.on("*", (function(t) {
                                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                                        e.emit.apply(e, [t].concat(i))
                                    })), this.modules.external.forEach((function(t) {
                                        t.init && t.init(e)
                                    }))
                                }
                                if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                    var a = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    a.length > 0 && "dev" !== a[0] && (this.options.lng = a[0])
                                }
                                this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((function(t) {
                                    e[t] = function() {
                                        var n;
                                        return (n = e.store)[t].apply(n, arguments)
                                    }
                                })), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((function(t) {
                                    e[t] = function() {
                                        var n;
                                        return (n = e.store)[t].apply(n, arguments), e
                                    }
                                }));
                                var u = v(),
                                    c = function() {
                                        var t = function(t, i) {
                                            e.isInitialized && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), u.resolve(i), n(t, i)
                                        };
                                        if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                        e.changeLanguage(e.options.lng, t)
                                    };
                                return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), u
                            }
                        }, {
                            key: "loadResources",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H,
                                    i = "string" == typeof e ? e : this.language;
                                if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                                    if (i && "cimode" === i.toLowerCase()) return n();
                                    var r = [],
                                        o = function(e) {
                                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                                r.indexOf(e) < 0 && r.push(e)
                                            }))
                                        };
                                    i ? o(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(e) {
                                        return o(e)
                                    })), this.options.preload && this.options.preload.forEach((function(e) {
                                        return o(e)
                                    })), this.services.backendConnector.load(r, this.options.ns, n)
                                } else n(null)
                            }
                        }, {
                            key: "reloadResources",
                            value: function(e, t, n) {
                                var i = v();
                                return e || (e = this.languages), t || (t = this.options.ns), n || (n = H), this.services.backendConnector.reload(e, t, (function(e) {
                                    i.resolve(), n(e)
                                })), i
                            }
                        }, {
                            key: "use",
                            value: function(e) {
                                if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                                if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                                return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && I.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                            }
                        }, {
                            key: "changeLanguage",
                            value: function(e, t) {
                                var n = this;
                                this.isLanguageChangingTo = e;
                                var i = v();
                                this.emit("languageChanging", e);
                                var r = function(e) {
                                    var r = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                                    r && (n.language || (n.language = r, n.languages = n.services.languageUtils.toResolveHierarchy(r)), n.translator.language || n.translator.changeLanguage(r), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(r)), n.loadResources(r, (function(e) {
                                        ! function(e, r) {
                                            r ? (n.language = r, n.languages = n.services.languageUtils.toResolveHierarchy(r), n.translator.changeLanguage(r), n.isLanguageChangingTo = void 0, n.emit("languageChanged", r), n.logger.log("languageChanged", r)) : n.isLanguageChangingTo = void 0, i.resolve((function() {
                                                return n.t.apply(n, arguments)
                                            })), t && t(e, (function() {
                                                return n.t.apply(n, arguments)
                                            }))
                                        }(e, r)
                                    }))
                                };
                                return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r) : r(e) : r(this.services.languageDetector.detect()), i
                            }
                        }, {
                            key: "getFixedT",
                            value: function(e, t) {
                                var n = this,
                                    r = function e(t, r) {
                                        var s;
                                        if ("object" !== i(r)) {
                                            for (var a = arguments.length, u = new Array(a > 2 ? a - 2 : 0), c = 2; c < a; c++) u[c - 2] = arguments[c];
                                            s = n.options.overloadTranslationOptionHandler([t, r].concat(u))
                                        } else s = o({}, r);
                                        return s.lng = s.lng || e.lng, s.lngs = s.lngs || e.lngs, s.ns = s.ns || e.ns, n.t(t, s)
                                    };
                                return "string" == typeof e ? r.lng = e : r.lngs = e, r.ns = t, r
                            }
                        }, {
                            key: "t",
                            value: function() {
                                var e;
                                return this.translator && (e = this.translator).translate.apply(e, arguments)
                            }
                        }, {
                            key: "exists",
                            value: function() {
                                var e;
                                return this.translator && (e = this.translator).exists.apply(e, arguments)
                            }
                        }, {
                            key: "setDefaultNamespace",
                            value: function(e) {
                                this.options.defaultNS = e
                            }
                        }, {
                            key: "hasLoadedNamespace",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                                if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                                var i = this.languages[0],
                                    r = !!this.options && this.options.fallbackLng,
                                    o = this.languages[this.languages.length - 1];
                                if ("cimode" === i.toLowerCase()) return !0;
                                var s = function(e, n) {
                                    var i = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                                    return -1 === i || 2 === i
                                };
                                if (n.precheck) {
                                    var a = n.precheck(this, s);
                                    if (void 0 !== a) return a
                                }
                                return !!this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || !(!s(i, e) || r && !s(o, e))
                            }
                        }, {
                            key: "loadNamespaces",
                            value: function(e, t) {
                                var n = this,
                                    i = v();
                                return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function(e) {
                                    n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                                })), this.loadResources((function(e) {
                                    i.resolve(), t && t(e)
                                })), i) : (t && t(), Promise.resolve())
                            }
                        }, {
                            key: "loadLanguages",
                            value: function(e, t) {
                                var n = v();
                                "string" == typeof e && (e = [e]);
                                var i = this.options.preload || [],
                                    r = e.filter((function(e) {
                                        return i.indexOf(e) < 0
                                    }));
                                return r.length ? (this.options.preload = i.concat(r), this.loadResources((function(e) {
                                    n.resolve(), t && t(e)
                                })), n) : (t && t(), Promise.resolve())
                            }
                        }, {
                            key: "dir",
                            value: function(e) {
                                return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl"
                            }
                        }, {
                            key: "createInstance",
                            value: function() {
                                return new t(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
                            }
                        }, {
                            key: "cloneInstance",
                            value: function() {
                                var e = this,
                                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H,
                                    r = o({}, this.options, n, {
                                        isClone: !0
                                    }),
                                    s = new t(r);
                                return ["store", "services", "language"].forEach((function(t) {
                                    s[t] = e[t]
                                })), s.services = o({}, this.services), s.services.utils = {
                                    hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
                                }, s.translator = new D(s.services, s.options), s.translator.on("*", (function(e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                                    s.emit.apply(s, [e].concat(n))
                                })), s.init(r, i), s.translator.options = s.options, s.translator.backendConnector.services.utils = {
                                    hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
                                }, s
                            }
                        }]), t
                    }(g));
                    t.default = z
                }])
            }
        },
        t = {};

    function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = t[i] = {
            exports: {}
        };
        return e[i](o, o.exports, n), o.exports
    }(() => {
        "use strict";
        var e = n(124);
        const t = document.createElement("template");
        t.innerHTML = '\n  <style>\n\n  .container{\n    font-family: \'Poppins\', sans-serif;\n    display: grid;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgrid-column-gap: 10px;\n    overflow: scroll;  \n  }\n  .outline {\n    box-shadow: 10px 10px 20px -9px rgba(0,0,0,0.75);\n    margin-bottom: 25px;\n    padding: 12px;\n    height: 100px;\n  }\n  .button{\n    display: block;\n    border-radius: 5px;\n    background: #064157;\n    color: white;\n    padding: 4px;\n    margin-top: 10px;\n    width: 100%;\n    border: none;\n    transition:.3s;\n  }\n  \n  input{\n    border-top: none;\n    border-right: none;\n    border-left: none;\n    border-color: #DDDDDD;\n    border-width: 1.5px;\n    color: #005E7D\n  }\n  *:focus {\n    outline: none;\n  }\n  fieldset{\n    border-radius: 5px;\n  }\n  .atr{\n    color: #899499;\n  }\n  .space{\n    margin-bottom: 10px;\n  }\n  .val{\n    color: #005E7D;\n    font-weight: bold;\n  }\n  legend {\n    color: #064157;\n  }\n\n  .outline:hover legend{\n    color:#007AA3;\n    transition: 1s;\n  }\n  .outline:hover .button{\n    color:#fff;\n    background-color:#007AA3;\n    cursor: pointer;\n    transition:  1s;\n  }\n\n  .hold {\n    box-shadow: 10px 10px 20px -9px rgba(0,0,0,0.75);\n    margin-bottom: 25px;\n    padding: 12px;\n    height: 100px;\n  }\n  .unHold {\n    box-shadow: 10px 10px 20px -9px rgba(0,0,0,0.75);\n    margin-bottom: 25px;\n    padding: 12px;\n    height: 100px;\n  }\n\n  .hold:hover legend{\n    color:#D4371C;\n    transition: 1s;\n  }\n  .hold:hover .button{\n    color:#fff;\n    background-color:#D4371C;\n    cursor: pointer;\n    transition:  1s;\n  }\n\n  .unHold:hover legend{\n    color:#00853C;\n    transition: 1s;\n  }\n  .unHold:hover .button{\n    color:#fff;\n    background-color:#00853C;\n    cursor: pointer;\n    transition:  1s;\n  }\n\n  input[type="tel"]\n{\n    background: rgba(0, 0, 0, 0);\n    border: none;\n    border-bottom: 1px solid DarkGray;\n    outline: none;\n}\n\n  input[type="text"]\n{\n    background: rgba(0, 0, 0, 0);\n    border: none;\n    border-bottom: 1px solid DarkGray;\n    outline: none;\n    float: right;\n}\n.letters{\n  letter-spacing: 3px;\n  font-size: 1em;\n  width: 200px;\n}\n.icon {\n  margin-left: 30px;\n  font-size: 2em;\n}\n\n  .imageBkGd {\n    background: url(https://wxccdemo.s3.us-west-1.amazonaws.com/widgets/background/voice_bkg4.png);\n    background-repeat: no-repeat;\n  }\n\n  .list {\n    background-color: transparent;\n    color: darkgray;\n    border: 1px solid darkgray;\n    padding: 0 1em 0 0;\n    margin: 0;\n    width: 90%;\n    font-family: inherit;\n    cursor: pointer;\n    border-radius: 5px;\n  }\n  .list:focus{\n    color: #00853C;\n    font-size: 1.1em;\n  }\n \n \n  @media screen and (max-width:1200px){\n    .container{\n      grid-template-columns: repeat(2, 1fr);\n      height: 100%;\n      overflow: scroll;  \n    }\n  }\n  @media screen and (max-width:600px){\n    .container{\n      grid-template-columns: repeat(2, 1fr);\n      height: 100%;\n      overflow: scroll;  \n    }\n  }\n  @media screen and (max-width:599px){\n    .container{\n      grid-template-columns: repeat(1, 1fr);\n      height: 100%;\n      overflow: scroll;  \n    }\n  }\n  </style>\n\n  <div class="container">\n          <div>\n                <fieldset class="outline imageBkGd">\n                  <legend> <b>Make an OutDial Call</b></legend>\n                  <div>\n                  <span class="atr" >OutDial EP Id #</span>\n                    <input class="val" type="text" id="entryPointId" onfocus="this.value=\'\'"></input>\n                    <span class="atr" >Destination # </span>\n                    <input class="val" type="text" id="destination" onfocus="this.value=\'\'"></input>\n                    <button class="button" id ="makeCallButton">Call</button>\n                  </div>\n                </fieldset>\n          </div>\n          <div>\n                <fieldset class="outline imageBkGd">\n                  <legend> <b>Transfer to Queue</b></legend>\n                  <div>\n                    <br>\n                    <span class="atr" >Queue Id #</span>\n                    <input class="val" type="text" id="queueId" onfocus="this.value=\'\'"></input>\n                    <button class="button" id ="transferToQueue">Transfer to Queue</button>\n                  </div>\n                </fieldset>\n          </div>\n          <div>\n                <fieldset class="outline imageBkGd">\n                  <legend> <b>Transfer to Entry Point</b></legend>\n                  <div>\n                    <br>\n                    <span class="atr" >Entry Point Id #</span>\n                    <input class="val" type="text" id="entryPtId" onfocus="this.value=\'\'"></input>\n                    <button id ="transferToEndPoint" class="button">Transfer to Entry Point</button>\n                  </div>\n                </fieldset>\n          </div>\n          <div>\n              <fieldset class="outline imageBkGd">\n                <legend> <b>Transfer to DN ie Blind-Transfer</b></legend>\n                  <div>\n                  <br>\n                  <span class="atr" >Dest Phone #</span>\n                  <input class="val" type="tel" id="phoneDN" onfocus="this.value=\'\'"></input>\n                    <br>\n                    <button id ="transferToDN" class="button"> Blind Transfer to DN</button>\n                  </div>\n              </fieldset>\n          </div>\n          <div>\n              <fieldset class="outline imageBkGd">\n                <legend> <b>Consult to Agent</b></legend>\n                  <div>\n                    <span class="atr" >Agent Id #</span>\n                      <input class="val" type="text" id="conAgentId" onfocus="this.value=\'\'"></input>\n                    <span class="atr" >DestAgent Id # </span>\n                      <input class="val" type="text" id="conDestAgentId" onfocus="this.value=\'\'"></input>\n                    <button class="button" id ="consultAgent">Consult to Agent</button>\n                  </div>\n              </fieldset>\n          </div>\n          <div>\n              <fieldset class="outline imageBkGd">\n                <legend> <b>Consult to DN</b></legend>\n                  <div>\n                    <br>\n                    <span class="atr" >Dest Phone #</span>\n                    <input class="val" type="text" id="consultDNId" onfocus="this.value=\'\'"></input>\n                    <button class="button" id ="consultDN">Consult to DN</button>\n                  </div>\n              </fieldset>\n          </div>\n          <div>\n              <fieldset class=" hold imageBkGd">\n                <legend> <b>Hold</b></legend>\n                  <div>\n                  <br>\n                  <br>\n                    <button class=" button" id ="hold">Hold</button>\n                  </div>\n              </fieldset>\n          </div>\n          <div>\n              <fieldset class=" unHold imageBkGd">\n                <legend> <b>unHold</b></legend>\n                  <div>\n                  <br>\n                  <br>\n                    <button class=" button" id ="unHold">UnHold</button>\n                  </div>\n              </fieldset>\n          </div>\n          <div>\n              <fieldset class="outline imageBkGd">\n                <legend> <b>Pause Recording</b></legend>\n                  <div>\n                    <div class="atr space">Enter CreditCard/watch record pause </div>\n                    <div class="val"><input class="val letters" type="tel" id="credit" placeholder=" 0000 0000 0000 0000"></input><span class="icon">&#128179;</span></div>\n                  </div>\n              </fieldset>\n          </div>\n          \n  </div>\n';
        const i = e.Desktop.logger.createLogger("Niko-logger");
        class r extends HTMLElement {
            constructor() {
                super();
                const e = document.createElement("link");
                e.href = "https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Darker+Grotesque:wght@300&family=Poppins:wght@200;400&display=swap", e.rel = "stylesheet", document.head.appendChild(e), this.attachShadow({
                    mode: "open"
                }), this.shadowRoot.appendChild(t.content.cloneNode(!0)), this.interactionId = null
            }
            connectedCallback() {
                this.init(), this.getAgentInfo()
            }
            disconnectedCallback() {
                e.Desktop.agentContact.removeAllEventListeners()
            }
            getAgentInfo() {
                const t = e.Desktop.agentStateInfo.latestData;
                i.info("myLatestData", t)
            }
            inputElement(e) {
                return this.shadowRoot.getElementById(e)
            }
            async init() {
                e.Desktop.config.init(), this.shadowRoot.querySelector(".button").addEventListener("click", (() => this.makeCall(this.inputElement("entryPointId").value, this.inputElement("destination").value))), this.shadowRoot.getElementById("transferToQueue").addEventListener("click", (e => {
                    this.transferToQueue(this.inputElement("queueId").value)
                })), this.shadowRoot.querySelector("#transferToEndPoint").addEventListener("click", (e => {
                    this.transferToEntryPnt(this.inputElement("entryPtId").value)
                })), this.shadowRoot.querySelector("#transferToDN").addEventListener("click", (e => {
                    this.transferToDN(this.inputElement("phoneDN").value)
                })), this.shadowRoot.querySelector("#consultAgent").addEventListener("click", (e => {
                    this.consultToAgent(this.inputElement("conAgentId").value, this.inputElement("conDestAgentId").value)
                })), this.shadowRoot.querySelector("#consultDN").addEventListener("click", (e => {
                    this.consultToDN(this.inputElement("consultDNId").value)
                })), this.shadowRoot.querySelector("#hold").addEventListener("click", (e => {
                    this.holdCall()
                })), this.shadowRoot.querySelector("#unHold").addEventListener("click", (e => {
                    this.unHoldCall()
                })), this.shadowRoot.getElementById("credit").addEventListener("focus", (() => this.pauseRecord()))
            }
            async getInteractionId() {
                const t = await e.Desktop.actions.getTaskMap();
                for (const e of t) return e[1].interactionId
            }
            async makeCall(t, n) {
                try {
                    const r = await e.Desktop.dialer.startOutdial({
                        data: {
                            entryPointId: t,
                            destination: n,
                            direction: "OUTBOUND",
                            origin: "+1xxxxxxxxxx",
                            attributes: {},
                            mediaType: "telephony",
                            outboundType: "OUTDIAL"
                        }
                    });
                    i.info("myOutDial" + JSON.stringify(r))
                } catch (t) {
                    e.Desktop.dialer.addEventListener("eOutdialFailed", (e => i.info(e)))
                }
            }
            async transferToQueue(t) {
                let n = await this.getInteractionId(),
                    r = await e.Desktop.agentContact.vteamTransfer({
                        interactionId: n,
                        data: {
                            vteamId: t,
                            vteamType: "inboundqueue"
                        }
                    });
                i.info("transferToQueue" + JSON.stringify(r))
            }
            async transferToEntryPnt(t) {
                let n = await this.getInteractionId(),
                    r = await e.Desktop.agentContact.vteamTransfer({
                        interactionId: n,
                        data: {
                            vteamId: t,
                            vteamType: "inboundentrypoint"
                        }
                    });
                i.info("transferToEndpoint" + JSON.stringify(r))
            }
            async transferToDN(t) {
                let n = await this.getInteractionId(),
                    r = await e.Desktop.agentContact.blindTransfer({
                        interactionId: n,
                        data: {
                            destAgentId: t,
                            mediaType: "telephony",
                            destinationType: "DN"
                        }
                    });
                i.info("transferToDN" + JSON.stringify(r))
            }
            async consultToAgent(t, n) {
                let r = await this.getInteractionId(),
                    o = await e.Desktop.agentContact.consult({
                        interactionId: r,
                        data: {
                            agentId: t,
                            destAgentId: n,
                            mediaType: "telephony",
                            destinationType: "Agent"
                        }
                    });
                i.info("consultToAgent" + JSON.stringify(o))
            }
            async consultToDN(t) {
                let n = await this.getInteractionId(),
                    r = await e.Desktop.agentContact.consult({
                        interactionId: n,
                        data: {
                            agentId: "dff61993-b9a3-4e74-8f57-32f92529ccd7",
                            destAgentId: t,
                            mediaType: "telephony",
                            destinationType: "DN"
                        }
                    });
                i.info("consultToDN" + JSON.stringify(r))
            }
            async holdCall() {
                let t = await this.getInteractionId();
                await e.Desktop.agentContact.hold({
                    interactionId: t,
                    data: {
                        mediaResourceId: t
                    }
                }), i.info("holdMyCall" + JSON.stringify(response))
            }
            async unHoldCall() {
                let t = await this.getInteractionId();
                await e.Desktop.agentContact.unHold({
                    interactionId: t,
                    data: {
                        mediaResourceId: t
                    }
                }), i.info("unHoldMyCall" + JSON.stringify(response))
            }
            async pauseRecord() {
                let t = await this.getInteractionId();
                await e.Desktop.agentContact.pauseRecording({
                    interactionId: t
                })
            }
        }
        customElements.define("sa-ds-voice-sdk", r)
    })()
})();
