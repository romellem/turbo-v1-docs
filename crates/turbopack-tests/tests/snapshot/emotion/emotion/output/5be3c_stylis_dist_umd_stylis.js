(self.TURBOPACK = self.TURBOPACK || []).push(["output/5be3c_stylis_dist_umd_stylis.js", {

"[project]/node_modules/.pnpm/stylis@4.0.13/node_modules/stylis/dist/umd/stylis.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, p: process, __dirname, m: module, e: exports }) { !function() {

(function(e, r) {
    typeof exports === "object" && typeof module !== "undefined" ? r(exports) : typeof define === "function" && define.amd ? ((r)=>r !== undefined && __turbopack_export_value__(r))(r(exports)) : (e = e || self, r(e.stylis = {}));
})(this, function(e) {
    "use strict";
    var r = "-ms-";
    var a = "-moz-";
    var c = "-webkit-";
    var t = "comm";
    var n = "rule";
    var s = "decl";
    var i = "@page";
    var u = "@media";
    var o = "@import";
    var f = "@charset";
    var l = "@viewport";
    var h = "@supports";
    var p = "@document";
    var v = "@namespace";
    var b = "@keyframes";
    var d = "@font-face";
    var m = "@counter-style";
    var w = "@font-feature-values";
    var k = Math.abs;
    var $ = String.fromCharCode;
    var g = Object.assign;
    function x(e, r) {
        return (((r << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3);
    }
    function E(e) {
        return e.trim();
    }
    function y(e, r) {
        return (e = r.exec(e)) ? e[0] : e;
    }
    function T(e, r, a) {
        return e.replace(r, a);
    }
    function A(e, r) {
        return e.indexOf(r);
    }
    function O(e, r) {
        return e.charCodeAt(r) | 0;
    }
    function C(e, r, a) {
        return e.slice(r, a);
    }
    function M(e) {
        return e.length;
    }
    function S(e) {
        return e.length;
    }
    function R(e, r) {
        return r.push(e), e;
    }
    function z(e, r) {
        return e.map(r).join("");
    }
    e.line = 1;
    e.column = 1;
    e.length = 0;
    e.position = 0;
    e.character = 0;
    e.characters = "";
    function N(r, a, c, t, n, s, i) {
        return {
            value: r,
            root: a,
            parent: c,
            type: t,
            props: n,
            children: s,
            line: e.line,
            column: e.column,
            length: i,
            return: ""
        };
    }
    function P(e, r) {
        return g(N("", null, null, "", null, null, 0), e, {
            length: -e.length
        }, r);
    }
    function j() {
        return e.character;
    }
    function U() {
        e.character = e.position > 0 ? O(e.characters, --e.position) : 0;
        if (e.column--, e.character === 10) e.column = 1, e.line--;
        return e.character;
    }
    function _() {
        e.character = e.position < e.length ? O(e.characters, e.position++) : 0;
        if (e.column++, e.character === 10) e.column = 1, e.line++;
        return e.character;
    }
    function F() {
        return O(e.characters, e.position);
    }
    function I() {
        return e.position;
    }
    function L(r, a) {
        return C(e.characters, r, a);
    }
    function D(e) {
        switch(e){
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
                return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
                return 4;
            case 58:
                return 3;
            case 34:
            case 39:
            case 40:
            case 91:
                return 2;
            case 41:
            case 93:
                return 1;
        }
        return 0;
    }
    function K(r) {
        return e.line = e.column = 1, e.length = M(e.characters = r), e.position = 0, [];
    }
    function V(r) {
        return e.characters = "", r;
    }
    function W(r) {
        return E(L(e.position - 1, Z(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
    }
    function Y(e) {
        return V(G(K(e)));
    }
    function B(r) {
        while(e.character = F())if (e.character < 33) _();
        else break;
        return D(r) > 2 || D(e.character) > 3 ? "" : " ";
    }
    function G(r) {
        while(_())switch(D(e.character)){
            case 0:
                R(J(e.position - 1), r);
                break;
            case 2:
                R(W(e.character), r);
                break;
            default:
                R($(e.character), r);
        }
        return r;
    }
    function H(r, a) {
        while(--a && _())if (e.character < 48 || e.character > 102 || e.character > 57 && e.character < 65 || e.character > 70 && e.character < 97) break;
        return L(r, I() + (a < 6 && F() == 32 && _() == 32));
    }
    function Z(r) {
        while(_())switch(e.character){
            case r:
                return e.position;
            case 34:
            case 39:
                if (r !== 34 && r !== 39) Z(e.character);
                break;
            case 40:
                if (r === 41) Z(r);
                break;
            case 92:
                _();
                break;
        }
        return e.position;
    }
    function q(r, a) {
        while(_())if (r + e.character === 47 + 10) break;
        else if (r + e.character === 42 + 42 && F() === 47) break;
        return "/*" + L(a, e.position - 1) + "*" + $(r === 47 ? r : _());
    }
    function J(r) {
        while(!D(F()))_();
        return L(r, e.position);
    }
    function Q(e) {
        return V(X("", null, null, null, [
            ""
        ], e = K(e), 0, [
            0
        ], e));
    }
    function X(e, r, a, c, t, n, s, i, u) {
        var o = 0;
        var f = 0;
        var l = s;
        var h = 0;
        var p = 0;
        var v = 0;
        var b = 1;
        var d = 1;
        var m = 1;
        var w = 0;
        var k = "";
        var g = t;
        var x = n;
        var E = c;
        var y = k;
        while(d)switch(v = w, w = _()){
            case 40:
                if (v != 108 && y.charCodeAt(l - 1) == 58) {
                    if (A(y += T(W(w), "&", "&\f"), "&\f") != -1) m = -1;
                    break;
                }
            case 34:
            case 39:
            case 91:
                y += W(w);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                y += B(v);
                break;
            case 92:
                y += H(I() - 1, 7);
                continue;
            case 47:
                switch(F()){
                    case 42:
                    case 47:
                        R(re(q(_(), I()), r, a), u);
                        break;
                    default:
                        y += "/";
                }
                break;
            case 123 * b:
                i[o++] = M(y) * m;
            case 125 * b:
            case 59:
            case 0:
                switch(w){
                    case 0:
                    case 125:
                        d = 0;
                    case 59 + f:
                        if (p > 0 && M(y) - l) R(p > 32 ? ae(y + ";", c, a, l - 1) : ae(T(y, " ", "") + ";", c, a, l - 2), u);
                        break;
                    case 59:
                        y += ";";
                    default:
                        R(E = ee(y, r, a, o, f, t, i, k, g = [], x = [], l), n);
                        if (w === 123) if (f === 0) X(y, r, E, E, g, n, l, i, x);
                        else switch(h){
                            case 100:
                            case 109:
                            case 115:
                                X(e, E, E, c && R(ee(e, E, E, 0, 0, t, i, k, t, g = [], l), x), t, x, l, i, c ? g : x);
                                break;
                            default:
                                X(y, E, E, E, [
                                    ""
                                ], x, 0, i, x);
                        }
                }
                o = f = p = 0, b = m = 1, k = y = "", l = s;
                break;
            case 58:
                l = 1 + M(y), p = v;
            default:
                if (b < 1) {
                    if (w == 123) --b;
                    else if (w == 125 && b++ == 0 && U() == 125) continue;
                }
                switch(y += $(w), w * b){
                    case 38:
                        m = f > 0 ? 1 : (y += "\f", -1);
                        break;
                    case 44:
                        i[o++] = (M(y) - 1) * m, m = 1;
                        break;
                    case 64:
                        if (F() === 45) y += W(_());
                        h = F(), f = l = M(k = y += J(I())), w++;
                        break;
                    case 45:
                        if (v === 45 && M(y) == 2) b = 0;
                }
        }
        return n;
    }
    function ee(e, r, a, c, t, s, i, u, o, f, l) {
        var h = t - 1;
        var p = t === 0 ? s : [
            ""
        ];
        var v = S(p);
        for(var b = 0, d = 0, m = 0; b < c; ++b)for(var w = 0, $ = C(e, h + 1, h = k(d = i[b])), g = e; w < v; ++w)if (g = E(d > 0 ? p[w] + " " + $ : T($, /&\f/g, p[w]))) o[m++] = g;
        return N(e, r, a, t === 0 ? n : u, o, f, l);
    }
    function re(e, r, a) {
        return N(e, r, a, t, $(j()), C(e, 2, -2), 0);
    }
    function ae(e, r, a, c) {
        return N(e, r, a, s, C(e, 0, c), C(e, c + 1, -1), c);
    }
    function ce(e, t) {
        switch(x(e, t)){
            case 5103:
                return c + "print-" + e + e;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
                return c + e + e;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
                return c + e + a + e + r + e + e;
            case 6828:
            case 4268:
                return c + e + r + e + e;
            case 6165:
                return c + e + r + "flex-" + e + e;
            case 5187:
                return c + e + T(e, /(\w+).+(:[^]+)/, c + "box-$1$2" + r + "flex-$1$2") + e;
            case 5443:
                return c + e + r + "flex-item-" + T(e, /flex-|-self/, "") + e;
            case 4675:
                return c + e + r + "flex-line-pack" + T(e, /align-content|flex-|-self/, "") + e;
            case 5548:
                return c + e + r + T(e, "shrink", "negative") + e;
            case 5292:
                return c + e + r + T(e, "basis", "preferred-size") + e;
            case 6060:
                return c + "box-" + T(e, "-grow", "") + c + e + r + T(e, "grow", "positive") + e;
            case 4554:
                return c + T(e, /([^-])(transform)/g, "$1" + c + "$2") + e;
            case 6187:
                return T(T(T(e, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e, "") + e;
            case 5495:
            case 3959:
                return T(e, /(image-set\([^]*)/, c + "$1" + "$`$1");
            case 4968:
                return T(T(e, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + e + e;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
                return T(e, /(.+)-inline(.+)/, c + "$1$2") + e;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
                if (M(e) - 1 - t > 6) switch(O(e, t + 1)){
                    case 109:
                        if (O(e, t + 4) !== 45) break;
                    case 102:
                        return T(e, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3" + "$1" + a + (O(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                    case 115:
                        return ~A(e, "stretch") ? ce(T(e, "stretch", "fill-available"), t) + e : e;
                }
                break;
            case 4949:
                if (O(e, t + 1) !== 115) break;
            case 6444:
                switch(O(e, M(e) - 3 - (~A(e, "!important") && 10))){
                    case 107:
                        return T(e, ":", ":" + c) + e;
                    case 101:
                        return T(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + c + (O(e, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + c + "$2$3" + "$1" + r + "$2box$3") + e;
                }
                break;
            case 5936:
                switch(O(e, t + 11)){
                    case 114:
                        return c + e + r + T(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                    case 108:
                        return c + e + r + T(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                    case 45:
                        return c + e + r + T(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
                }
                return c + e + r + e + e;
        }
        return e;
    }
    function te(e, r) {
        var a = "";
        var c = S(e);
        for(var t = 0; t < c; t++)a += r(e[t], t, e, r) || "";
        return a;
    }
    function ne(e, r, a, c) {
        switch(e.type){
            case o:
            case s:
                return e.return = e.return || e.value;
            case t:
                return "";
            case b:
                return e.return = e.value + "{" + te(e.children, c) + "}";
            case n:
                e.value = e.props.join(",");
        }
        return M(a = te(e.children, c)) ? e.return = e.value + "{" + a + "}" : "";
    }
    function se(e) {
        var r = S(e);
        return function(a, c, t, n) {
            var s = "";
            for(var i = 0; i < r; i++)s += e[i](a, c, t, n) || "";
            return s;
        };
    }
    function ie(e) {
        return function(r) {
            if (!r.root) {
                if (r = r.return) e(r);
            }
        };
    }
    function ue(e, t, i, u) {
        if (e.length > -1) {
            if (!e.return) switch(e.type){
                case s:
                    e.return = ce(e.value, e.length);
                    break;
                case b:
                    return te([
                        P(e, {
                            value: T(e.value, "@", "@" + c)
                        })
                    ], u);
                case n:
                    if (e.length) return z(e.props, function(t) {
                        switch(y(t, /(::plac\w+|:read-\w+)/)){
                            case ":read-only":
                            case ":read-write":
                                return te([
                                    P(e, {
                                        props: [
                                            T(t, /:(read-\w+)/, ":" + a + "$1")
                                        ]
                                    })
                                ], u);
                            case "::placeholder":
                                return te([
                                    P(e, {
                                        props: [
                                            T(t, /:(plac\w+)/, ":" + c + "input-$1")
                                        ]
                                    }),
                                    P(e, {
                                        props: [
                                            T(t, /:(plac\w+)/, ":" + a + "$1")
                                        ]
                                    }),
                                    P(e, {
                                        props: [
                                            T(t, /:(plac\w+)/, r + "input-$1")
                                        ]
                                    })
                                ], u);
                        }
                        return "";
                    });
            }
        }
    }
    function oe(e) {
        switch(e.type){
            case n:
                e.props = e.props.map(function(r) {
                    return z(Y(r), function(r, a, c) {
                        switch(O(r, 0)){
                            case 12:
                                return C(r, 1, M(r));
                            case 0:
                            case 40:
                            case 43:
                            case 62:
                            case 126:
                                return r;
                            case 58:
                                if (c[++a] === "global") c[a] = "", c[++a] = "\f" + C(c[a], a = 1, -1);
                            case 32:
                                return a === 1 ? "" : r;
                            default:
                                switch(a){
                                    case 0:
                                        e = r;
                                        return S(c) > 1 ? "" : r;
                                    case a = S(c) - 1:
                                    case 2:
                                        return a === 2 ? r + e + e : r + e;
                                    default:
                                        return r;
                                }
                        }
                    });
                });
        }
    }
    e.CHARSET = f;
    e.COMMENT = t;
    e.COUNTER_STYLE = m;
    e.DECLARATION = s;
    e.DOCUMENT = p;
    e.FONT_FACE = d;
    e.FONT_FEATURE_VALUES = w;
    e.IMPORT = o;
    e.KEYFRAMES = b;
    e.MEDIA = u;
    e.MOZ = a;
    e.MS = r;
    e.NAMESPACE = v;
    e.PAGE = i;
    e.RULESET = n;
    e.SUPPORTS = h;
    e.VIEWPORT = l;
    e.WEBKIT = c;
    e.abs = k;
    e.alloc = K;
    e.append = R;
    e.assign = g;
    e.caret = I;
    e.char = j;
    e.charat = O;
    e.combine = z;
    e.comment = re;
    e.commenter = q;
    e.compile = Q;
    e.copy = P;
    e.dealloc = V;
    e.declaration = ae;
    e.delimit = W;
    e.delimiter = Z;
    e.escaping = H;
    e.from = $;
    e.hash = x;
    e.identifier = J;
    e.indexof = A;
    e.match = y;
    e.middleware = se;
    e.namespace = oe;
    e.next = _;
    e.node = N;
    e.parse = X;
    e.peek = F;
    e.prefix = ce;
    e.prefixer = ue;
    e.prev = U;
    e.replace = T;
    e.ruleset = ee;
    e.rulesheet = ie;
    e.serialize = te;
    e.sizeof = S;
    e.slice = L;
    e.stringify = ne;
    e.strlen = M;
    e.substr = C;
    e.token = D;
    e.tokenize = Y;
    e.tokenizer = G;
    e.trim = E;
    e.whitespace = B;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
});

}.call(this) }),
}]);


//# sourceMappingURL=5be3c_stylis_dist_umd_stylis.js.map