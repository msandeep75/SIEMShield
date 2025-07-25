const style = document.createElement("style");
style.innerHTML = `*::-webkit-scrollbar { display: none; }`;
document.head.appendChild(style);

const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap";
fontLink.rel = "stylesheet";
fontLink.onload = () => {
  document.body.style.fontFamily = "'Poppins', sans-serif";
  document.querySelectorAll(".use-poppins").forEach((el) => {
    el.style.fontFamily = "'Poppins', sans-serif";
  });

  console.log("Poppins font applied successfully.");
};
document.head.appendChild(fontLink);

("use strict");
(() => {
  var $t = "4.0.6";
  var ke = 92,
    Re = 47,
    Oe = 42,
    eo = 34,
    to = 39,
    ro = 58,
    Ke = 59,
    ie = 10,
    we = 32,
    Pe = 9,
    Nt = 123,
    Xe = 125,
    rt = 40,
    Tt = 41,
    oo = 91,
    no = 93,
    Vt = 45,
    et = 64,
    io = 33;
  function de(t) {
    t = t.replaceAll(
      `\r
`,
      `
`
    );
    let r = [],
      o = [],
      e = [],
      n = null,
      u = null,
      a = "",
      p = "",
      f;
    for (let s = 0; s < t.length; s++) {
      let d = t.charCodeAt(s);
      if (d === ke) (a += t.slice(s, s + 2)), (s += 1);
      else if (d === Re && t.charCodeAt(s + 1) === Oe) {
        let m = s;
        for (let b = s + 2; b < t.length; b++)
          if (((f = t.charCodeAt(b)), f === ke)) b += 1;
          else if (f === Oe && t.charCodeAt(b + 1) === Re) {
            s = b + 1;
            break;
          }
        let g = t.slice(m, s + 1);
        g.charCodeAt(2) === io && o.push(ze(g.slice(2, -2)));
      } else if (d === to || d === eo) {
        let m = s;
        for (let g = s + 1; g < t.length; g++)
          if (((f = t.charCodeAt(g)), f === ke)) g += 1;
          else if (f === d) {
            s = g;
            break;
          } else {
            if (f === Ke && t.charCodeAt(g + 1) === ie)
              throw new Error(
                `Unterminated string: ${
                  t.slice(m, g + 1) + String.fromCharCode(d)
                }`
              );
            if (f === ie)
              throw new Error(
                `Unterminated string: ${t.slice(m, g) + String.fromCharCode(d)}`
              );
          }
        a += t.slice(m, s + 1);
      } else {
        if (
          (d === we || d === ie || d === Pe) &&
          (f = t.charCodeAt(s + 1)) &&
          (f === we || f === ie || f === Pe)
        )
          continue;
        if (d === ie) {
          if (a.length === 0) continue;
          (f = a.charCodeAt(a.length - 1)),
            f !== we && f !== ie && f !== Pe && (a += " ");
        } else if (d === Vt && t.charCodeAt(s + 1) === Vt && a.length === 0) {
          let m = "",
            g = s,
            b = -1;
          for (let y = s + 2; y < t.length; y++)
            if (((f = t.charCodeAt(y)), f === ke)) y += 1;
            else if (f === Re && t.charCodeAt(y + 1) === Oe) {
              for (let x = y + 2; x < t.length; x++)
                if (((f = t.charCodeAt(x)), f === ke)) x += 1;
                else if (f === Oe && t.charCodeAt(x + 1) === Re) {
                  y = x + 1;
                  break;
                }
            } else if (b === -1 && f === ro) b = a.length + y - g;
            else if (f === Ke && m.length === 0) {
              (a += t.slice(g, y)), (s = y);
              break;
            } else if (f === rt) m += ")";
            else if (f === oo) m += "]";
            else if (f === Nt) m += "}";
            else if ((f === Xe || t.length - 1 === y) && m.length === 0) {
              (s = y - 1), (a += t.slice(g, y));
              break;
            } else
              (f === Tt || f === no || f === Xe) &&
                m.length > 0 &&
                t[y] === m[m.length - 1] &&
                (m = m.slice(0, -1));
          let v = tt(a, b);
          if (!v) throw new Error("Invalid custom property, expected a value");
          n ? n.nodes.push(v) : r.push(v), (a = "");
        } else if (d === Ke && a.charCodeAt(0) === et)
          (u = xe(a)), n ? n.nodes.push(u) : r.push(u), (a = ""), (u = null);
        else if (d === Ke && p[p.length - 1] !== ")") {
          let m = tt(a);
          if (!m)
            throw a.length === 0
              ? new Error("Unexpected semicolon")
              : new Error(`Invalid declaration: \`${a.trim()}\``);
          n ? n.nodes.push(m) : r.push(m), (a = "");
        } else if (d === Nt && p[p.length - 1] !== ")")
          (p += "}"),
            (u = M(a.trim())),
            n && n.nodes.push(u),
            e.push(n),
            (n = u),
            (a = ""),
            (u = null);
        else if (d === Xe && p[p.length - 1] !== ")") {
          if (p === "") throw new Error("Missing opening {");
          if (((p = p.slice(0, -1)), a.length > 0))
            if (a.charCodeAt(0) === et)
              (u = xe(a)),
                n ? n.nodes.push(u) : r.push(u),
                (a = ""),
                (u = null);
            else {
              let g = a.indexOf(":");
              if (n) {
                let b = tt(a, g);
                if (!b) throw new Error(`Invalid declaration: \`${a.trim()}\``);
                n.nodes.push(b);
              }
            }
          let m = e.pop() ?? null;
          m === null && n && r.push(n), (n = m), (a = ""), (u = null);
        } else if (d === rt) (p += ")"), (a += "(");
        else if (d === Tt) {
          if (p[p.length - 1] !== ")") throw new Error("Missing opening (");
          (p = p.slice(0, -1)), (a += ")");
        } else {
          if (a.length === 0 && (d === we || d === ie || d === Pe)) continue;
          a += String.fromCharCode(d);
        }
      }
    }
    if ((a.charCodeAt(0) === et && r.push(xe(a)), p.length > 0 && n)) {
      if (n.kind === "rule")
        throw new Error(`Missing closing } at ${n.selector}`);
      if (n.kind === "at-rule")
        throw new Error(`Missing closing } at ${n.name} ${n.params}`);
    }
    return o.length > 0 ? o.concat(r) : r;
  }
  function xe(t, r = []) {
    for (let o = 5; o < t.length; o++) {
      let e = t.charCodeAt(o);
      if (e === we || e === rt) {
        let n = t.slice(0, o).trim(),
          u = t.slice(o).trim();
        return z(n, u, r);
      }
    }
    return z(t.trim(), "", r);
  }
  function tt(t, r = t.indexOf(":")) {
    if (r === -1) return null;
    let o = t.indexOf("!important", r + 1);
    return l(
      t.slice(0, r).trim(),
      t.slice(r + 1, o === -1 ? t.length : o).trim(),
      o !== -1
    );
  }
  function pe(t) {
    if (arguments.length == 0)
      throw new TypeError("`CSS.escape` requires an argument.");
    var r = String(t),
      o = r.length,
      e = -1,
      n,
      u = "",
      a = r.charCodeAt(0);
    if (o == 1 && a == 45) return "\\" + r;
    for (; ++e < o; ) {
      if (((n = r.charCodeAt(e)), n == 0)) {
        u += "\uFFFD";
        continue;
      }
      if (
        (n >= 1 && n <= 31) ||
        n == 127 ||
        (e == 0 && n >= 48 && n <= 57) ||
        (e == 1 && n >= 48 && n <= 57 && a == 45)
      ) {
        u += "\\" + n.toString(16) + " ";
        continue;
      }
      if (
        n >= 128 ||
        n == 45 ||
        n == 95 ||
        (n >= 48 && n <= 57) ||
        (n >= 65 && n <= 90) ||
        (n >= 97 && n <= 122)
      ) {
        u += r.charAt(e);
        continue;
      }
      u += "\\" + r.charAt(e);
    }
    return u;
  }
  function le(t) {
    return t.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (r) =>
      r.length > 2
        ? String.fromCodePoint(Number.parseInt(r.slice(1).trim(), 16))
        : r[1]
    );
  }
  var Rt = new Map([
    ["--font", ["--font-weight", "--font-size"]],
    ["--inset", ["--inset-shadow", "--inset-ring"]],
    [
      "--text",
      [
        "--text-color",
        "--text-underline-offset",
        "--text-indent",
        "--text-decoration-thickness",
        "--text-decoration-color",
      ],
    ],
  ]);
  function Et(t, r) {
    return (Rt.get(r) ?? []).some((o) => t === o || t.startsWith(`${o}-`));
  }
  var _e = class {
    constructor(r = new Map(), o = new Set([])) {
      this.values = r;
      this.keyframes = o;
    }
    prefix = null;
    add(r, o, e = 0) {
      if (r.endsWith("-*")) {
        if (o !== "initial")
          throw new Error(
            `Invalid theme value \`${o}\` for namespace \`${r}\``
          );
        r === "--*"
          ? this.values.clear()
          : this.clearNamespace(r.slice(0, -2), 0);
      }
      if (e & 4) {
        let n = this.values.get(r);
        if (n && !(n.options & 4)) return;
      }
      o === "initial"
        ? this.values.delete(r)
        : this.values.set(r, { value: o, options: e });
    }
    keysInNamespaces(r) {
      let o = [];
      for (let e of r) {
        let n = `${e}-`;
        for (let u of this.values.keys())
          u.startsWith(n) &&
            u.indexOf("--", 2) === -1 &&
            (Et(u, e) || o.push(u.slice(n.length)));
      }
      return o;
    }
    get(r) {
      for (let o of r) {
        let e = this.values.get(o);
        if (e) return e.value;
      }
      return null;
    }
    hasDefault(r) {
      return (this.getOptions(r) & 4) === 4;
    }
    getOptions(r) {
      return (r = le(this.#o(r))), this.values.get(r)?.options ?? 0;
    }
    entries() {
      return this.prefix
        ? Array.from(this.values, (r) => ((r[0] = this.#r(r[0])), r))
        : this.values.entries();
    }
    #r(r) {
      return this.prefix ? `--${this.prefix}-${r.slice(2)}` : r;
    }
    #o(r) {
      return this.prefix ? `--${r.slice(3 + this.prefix.length)}` : r;
    }
    clearNamespace(r, o) {
      let e = Rt.get(r) ?? [];
      e: for (let n of this.values.keys())
        if (n.startsWith(r)) {
          if (o !== 0 && (this.getOptions(n) & o) !== o) continue;
          for (let u of e) if (n.startsWith(u)) continue e;
          this.values.delete(n);
        }
    }
    #e(r, o) {
      for (let e of o) {
        let n = r !== null ? `${e}-${r}` : e;
        if (!this.values.has(n))
          if (r !== null && r.includes(".")) {
            if (((n = `${e}-${r.replaceAll(".", "_")}`), !this.values.has(n)))
              continue;
          } else continue;
        if (!Et(n, e)) return n;
      }
      return null;
    }
    #t(r) {
      return this.values.has(r) ? `var(${pe(this.#r(r))})` : null;
    }
    markUsedVariable(r) {
      let o = le(this.#o(r)),
        e = this.values.get(o);
      e && (e.options |= 16);
    }
    resolve(r, o) {
      let e = this.#e(r, o);
      if (!e) return null;
      let n = this.values.get(e);
      return n.options & 1 ? n.value : this.#t(e);
    }
    resolveValue(r, o) {
      let e = this.#e(r, o);
      return e ? this.values.get(e).value : null;
    }
    resolveWith(r, o, e = []) {
      let n = this.#e(r, o);
      if (!n) return null;
      let u = {};
      for (let p of e) {
        let f = `${n}${p}`,
          s = this.values.get(f);
        s && (s.options & 1 ? (u[p] = s.value) : (u[p] = this.#t(f)));
      }
      let a = this.values.get(n);
      return a.options & 1 ? [a.value, u] : [this.#t(n), u];
    }
    namespace(r) {
      let o = new Map(),
        e = `${r}-`;
      for (let [n, u] of this.values)
        n === r
          ? o.set(null, u.value)
          : n.startsWith(`${e}-`)
          ? o.set(n.slice(r.length), u.value)
          : n.startsWith(e) && o.set(n.slice(e.length), u.value);
      return o;
    }
    addKeyframes(r) {
      this.keyframes.add(r);
    }
    getKeyframes() {
      return Array.from(this.keyframes);
    }
  };
  var I = class extends Map {
    constructor(o) {
      super();
      this.factory = o;
    }
    get(o) {
      let e = super.get(o);
      return e === void 0 && ((e = this.factory(o, this)), this.set(o, e)), e;
    }
  };
  var ao = 64;
  function U(t, r = []) {
    return { kind: "rule", selector: t, nodes: r };
  }
  function z(t, r = "", o = []) {
    return { kind: "at-rule", name: t, params: r, nodes: o };
  }
  function M(t, r = []) {
    return t.charCodeAt(0) === ao ? xe(t, r) : U(t, r);
  }
  function l(t, r, o = !1) {
    return { kind: "declaration", property: t, value: r, important: o };
  }
  function ze(t) {
    return { kind: "comment", value: t };
  }
  function X(t, r) {
    return { kind: "context", context: t, nodes: r };
  }
  function D(t) {
    return { kind: "at-root", nodes: t };
  }
  function _(t, r, o = [], e = {}) {
    for (let n = 0; n < t.length; n++) {
      let u = t[n],
        a = o[o.length - 1] ?? null;
      if (u.kind === "context") {
        if (_(u.nodes, r, o, { ...e, ...u.context }) === 2) return 2;
        continue;
      }
      o.push(u);
      let p = !1,
        f = 0,
        s =
          r(u, {
            parent: a,
            context: e,
            path: o,
            replaceWith(d) {
              (p = !0),
                Array.isArray(d)
                  ? d.length === 0
                    ? (t.splice(n, 1), (f = 0))
                    : d.length === 1
                    ? ((t[n] = d[0]), (f = 1))
                    : (t.splice(n, 1, ...d), (f = d.length))
                  : ((t[n] = d), (f = 1));
            },
          }) ?? 0;
      if ((o.pop(), p)) {
        s === 0 ? n-- : (n += f - 1);
        continue;
      }
      if (s === 2) return 2;
      if (s !== 1 && "nodes" in u) {
        o.push(u);
        let d = _(u.nodes, r, o, e);
        if ((o.pop(), d === 2)) return 2;
      }
    }
  }
  function De(t, r, o = [], e = {}) {
    for (let n = 0; n < t.length; n++) {
      let u = t[n],
        a = o[o.length - 1] ?? null;
      if (u.kind === "rule" || u.kind === "at-rule")
        o.push(u), De(u.nodes, r, o, e), o.pop();
      else if (u.kind === "context") {
        De(u.nodes, r, o, { ...e, ...u.context });
        continue;
      }
      o.push(u),
        r(u, {
          parent: a,
          context: e,
          path: o,
          replaceWith(p) {
            Array.isArray(p)
              ? p.length === 0
                ? t.splice(n, 1)
                : p.length === 1
                ? (t[n] = p[0])
                : t.splice(n, 1, ...p)
              : (t[n] = p),
              (n += p.length - 1);
          },
        }),
        o.pop();
    }
  }
  function ae(t, r) {
    let o = [],
      e = new Set(),
      n = new I(() => new Set()),
      u = new Set(),
      a = new Set();
    function p(s, d, m = {}, g = 0) {
      if (s.kind === "declaration") {
        if (
          s.property === "--tw-sort" ||
          s.value === void 0 ||
          s.value === null
        )
          return;
        if (
          (m.theme &&
            s.property[0] === "-" &&
            s.property[1] === "-" &&
            n.get(d).add(s),
          s.value.includes("var(") && r.trackUsedVariables(s.value),
          s.property === "animation")
        ) {
          let b = s.value.split(/\s+/);
          for (let v of b) a.add(v);
        }
        d.push(s);
      } else if (s.kind === "rule")
        if (s.selector === "&")
          for (let b of s.nodes) {
            let v = [];
            p(b, v, m, g + 1), v.length > 0 && d.push(...v);
          }
        else {
          let b = { ...s, nodes: [] };
          for (let v of s.nodes) p(v, b.nodes, m, g + 1);
          b.nodes.length > 0 && d.push(b);
        }
      else if (s.kind === "at-rule" && s.name === "@property" && g === 0) {
        if (e.has(s.params)) return;
        e.add(s.params);
        let b = { ...s, nodes: [] };
        for (let v of s.nodes) p(v, b.nodes, m, g + 1);
        d.push(b);
      } else if (s.kind === "at-rule") {
        let b = { ...s, nodes: [] };
        for (let v of s.nodes) p(v, b.nodes, m, g + 1);
        s.name === "@keyframes" && m.theme && u.add(b),
          (b.nodes.length > 0 ||
            b.name === "@layer" ||
            b.name === "@charset" ||
            b.name === "@custom-media" ||
            b.name === "@namespace" ||
            b.name === "@import") &&
            d.push(b);
      } else if (s.kind === "at-root")
        for (let b of s.nodes) {
          let v = [];
          p(b, v, m, 0);
          for (let y of v) o.push(y);
        }
      else if (s.kind === "context") {
        if (s.context.reference) return;
        for (let b of s.nodes) p(b, d, { ...m, ...s.context }, g);
      } else s.kind === "comment" && d.push(s);
    }
    let f = [];
    for (let s of t) p(s, f, {}, 0);
    if (!1) {
      e: for (let [s, d] of n)
        for (let m of d) {
          if (r.theme.getOptions(m.property) & 24) {
            if (m.property.startsWith("--animate-")) {
              let v = m.value.split(/\s+/);
              for (let y of v) a.add(y);
            }
            continue;
          }
          let b = s.indexOf(m);
          if ((s.splice(b, 1), s.length === 0)) {
            for (let [v, y] of f.entries())
              if (y.kind === "rule" && y.nodes === s) {
                f.splice(v, 1);
                break;
              }
            continue e;
          }
        }
      for (let s of u)
        if (!a.has(s.params)) {
          let d = o.indexOf(s);
          o.splice(d, 1);
        }
    }
    return f.concat(o);
  }
  function Y(t) {
    function r(e, n = 0) {
      let u = "",
        a = "  ".repeat(n);
      if (e.kind === "declaration")
        u += `${a}${e.property}: ${e.value}${e.important ? " !important" : ""};
`;
      else if (e.kind === "rule") {
        u += `${a}${e.selector} {
`;
        for (let p of e.nodes) u += r(p, n + 1);
        u += `${a}}
`;
      } else if (e.kind === "at-rule") {
        if (e.nodes.length === 0)
          return `${a}${e.name} ${e.params};
`;
        u += `${a}${e.name}${e.params ? ` ${e.params} ` : " "}{
`;
        for (let p of e.nodes) u += r(p, n + 1);
        u += `${a}}
`;
      } else if (e.kind === "comment")
        u += `${a}/*${e.value}*/
`;
      else if (e.kind === "context" || e.kind === "at-root") return "";
      return u;
    }
    let o = "";
    for (let e of t) {
      let n = r(e);
      n !== "" && (o += n);
    }
    return o;
  }
  function it(t) {
    return { kind: "word", value: t };
  }
  function so(t, r) {
    return { kind: "function", value: t, nodes: r };
  }
  function uo(t) {
    return { kind: "separator", value: t };
  }
  function ee(t, r, o = null) {
    for (let e = 0; e < t.length; e++) {
      let n = t[e],
        u = !1,
        a = 0,
        p =
          r(n, {
            parent: o,
            replaceWith(f) {
              (u = !0),
                Array.isArray(f)
                  ? f.length === 0
                    ? (t.splice(e, 1), (a = 0))
                    : f.length === 1
                    ? ((t[e] = f[0]), (a = 1))
                    : (t.splice(e, 1, ...f), (a = f.length))
                  : (t[e] = f);
            },
          }) ?? 0;
      if (u) {
        p === 0 ? e-- : (e += a - 1);
        continue;
      }
      if (p === 2) return 2;
      if (p !== 1 && n.kind === "function" && ee(n.nodes, r, n) === 2) return 2;
    }
  }
  function H(t) {
    let r = "";
    for (let o of t)
      switch (o.kind) {
        case "word":
        case "separator": {
          r += o.value;
          break;
        }
        case "function":
          r += o.value + "(" + H(o.nodes) + ")";
      }
    return r;
  }
  var Ot = 92,
    co = 41,
    Kt = 58,
    Pt = 44,
    fo = 34,
    zt = 61,
    _t = 62,
    Dt = 60,
    Ut = 10,
    po = 40,
    mo = 39,
    jt = 47,
    It = 32,
    Ft = 9;
  function L(t) {
    t = t.replaceAll(
      `\r
`,
      `
`
    );
    let r = [],
      o = [],
      e = null,
      n = "",
      u;
    for (let a = 0; a < t.length; a++) {
      let p = t.charCodeAt(a);
      switch (p) {
        case Ot: {
          (n += t[a] + t[a + 1]), a++;
          break;
        }
        case Kt:
        case Pt:
        case zt:
        case _t:
        case Dt:
        case Ut:
        case jt:
        case It:
        case Ft: {
          if (n.length > 0) {
            let m = it(n);
            e ? e.nodes.push(m) : r.push(m), (n = "");
          }
          let f = a,
            s = a + 1;
          for (
            ;
            s < t.length &&
            ((u = t.charCodeAt(s)),
            !(
              u !== Kt &&
              u !== Pt &&
              u !== zt &&
              u !== _t &&
              u !== Dt &&
              u !== Ut &&
              u !== jt &&
              u !== It &&
              u !== Ft
            ));
            s++
          );
          a = s - 1;
          let d = uo(t.slice(f, s));
          e ? e.nodes.push(d) : r.push(d);
          break;
        }
        case mo:
        case fo: {
          let f = a;
          for (let s = a + 1; s < t.length; s++)
            if (((u = t.charCodeAt(s)), u === Ot)) s += 1;
            else if (u === p) {
              a = s;
              break;
            }
          n += t.slice(f, a + 1);
          break;
        }
        case po: {
          let f = so(n, []);
          (n = ""), e ? e.nodes.push(f) : r.push(f), o.push(f), (e = f);
          break;
        }
        case co: {
          let f = o.pop();
          if (n.length > 0) {
            let s = it(n);
            f.nodes.push(s), (n = "");
          }
          o.length > 0 ? (e = o[o.length - 1]) : (e = null);
          break;
        }
        default:
          n += String.fromCharCode(p);
      }
    }
    return n.length > 0 && r.push(it(n)), r;
  }
  var lt = [
      "calc",
      "min",
      "max",
      "clamp",
      "mod",
      "rem",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "atan2",
      "pow",
      "sqrt",
      "hypot",
      "log",
      "exp",
      "round",
    ],
    Ue = ["anchor-size"],
    Lt = new RegExp(`(${Ue.join("|")})\\(`, "g");
  function Ce(t) {
    return t.indexOf("(") !== -1 && lt.some((r) => t.includes(`${r}(`));
  }
  function Mt(t) {
    if (!lt.some((n) => t.includes(n))) return t;
    let r = !1;
    Ue.some((n) => t.includes(n)) &&
      ((Lt.lastIndex = 0),
      (t = t.replace(Lt, (n, u) => ((r = !0), `$${Ue.indexOf(u)}$(`))));
    let o = "",
      e = [];
    for (let n = 0; n < t.length; n++) {
      let u = t[n];
      if (u === "(") {
        o += u;
        let a = n;
        for (let f = n - 1; f >= 0; f--) {
          let s = t.charCodeAt(f);
          if (s >= 48 && s <= 57) a = f;
          else if (s >= 97 && s <= 122) a = f;
          else break;
        }
        let p = t.slice(a, n);
        if (lt.includes(p)) {
          e.unshift(!0);
          continue;
        } else if (e[0] && p === "") {
          e.unshift(!0);
          continue;
        }
        e.unshift(!1);
        continue;
      } else if (u === ")") (o += u), e.shift();
      else if (u === "," && e[0]) {
        o += ", ";
        continue;
      } else {
        if (u === " " && e[0] && o[o.length - 1] === " ") continue;
        if ((u === "+" || u === "*" || u === "/" || u === "-") && e[0]) {
          let a = o.trimEnd(),
            p = a[a.length - 1];
          if (p === "+" || p === "*" || p === "/" || p === "-") {
            o += u;
            continue;
          } else if (p === "(" || p === ",") {
            o += u;
            continue;
          } else t[n - 1] === " " ? (o += `${u} `) : (o += ` ${u} `);
        } else if (e[0] && t.startsWith("to-zero", n)) {
          let a = n;
          (n += 7), (o += t.slice(a, n + 1));
        } else o += u;
      }
    }
    return r ? o.replace(/\$(\d+)\$/g, (n, u) => Ue[u] ?? n) : o;
  }
  function re(t) {
    if (t.indexOf("(") === -1) return me(t);
    let r = L(t);
    return at(r), (t = H(r)), (t = Mt(t)), t;
  }
  function me(t, r = !1) {
    let o = "";
    for (let e = 0; e < t.length; e++) {
      let n = t[e];
      n === "\\" && t[e + 1] === "_"
        ? ((o += "_"), (e += 1))
        : n === "_" && !r
        ? (o += " ")
        : (o += n);
    }
    return o;
  }
  function at(t) {
    for (let r of t)
      switch (r.kind) {
        case "function": {
          if (r.value === "url" || r.value.endsWith("_url")) {
            r.value = me(r.value);
            break;
          }
          if (
            r.value === "var" ||
            r.value.endsWith("_var") ||
            r.value === "theme" ||
            r.value.endsWith("_theme")
          ) {
            r.value = me(r.value);
            for (let o = 0; o < r.nodes.length; o++) {
              if (o == 0 && r.nodes[o].kind === "word") {
                r.nodes[o].value = me(r.nodes[o].value, !0);
                continue;
              }
              at([r.nodes[o]]);
            }
            break;
          }
          (r.value = me(r.value)), at(r.nodes);
          break;
        }
        case "separator":
        case "word": {
          r.value = me(r.value);
          break;
        }
        default:
          go(r);
      }
  }
  function go(t) {
    throw new Error(`Unexpected value: ${t}`);
  }
  var je = new Uint8Array(256);
  function P(t, r) {
    let o = 0,
      e = [],
      n = 0,
      u = t.length,
      a = r.charCodeAt(0);
    for (let p = 0; p < u; p++) {
      let f = t.charCodeAt(p);
      if (o === 0 && f === a) {
        e.push(t.slice(n, p)), (n = p + 1);
        continue;
      }
      switch (f) {
        case 92:
          p += 1;
          break;
        case 39:
        case 34:
          for (; ++p < u; ) {
            let s = t.charCodeAt(p);
            if (s === 92) {
              p += 1;
              continue;
            }
            if (s === f) break;
          }
          break;
        case 40:
          (je[o] = 41), o++;
          break;
        case 91:
          (je[o] = 93), o++;
          break;
        case 123:
          (je[o] = 125), o++;
          break;
        case 93:
        case 125:
        case 41:
          o > 0 && f === je[o - 1] && o--;
          break;
      }
    }
    return e.push(t.slice(n)), e;
  }
  var ho = 58,
    Wt = 45,
    Bt = 97,
    qt = 122;
  function* Ht(t, r) {
    let o = P(t, ":");
    if (r.theme.prefix) {
      if (o.length === 1 || o[0] !== r.theme.prefix) return null;
      o.shift();
    }
    let e = o.pop(),
      n = [];
    for (let m = o.length - 1; m >= 0; --m) {
      let g = r.parseVariant(o[m]);
      if (g === null) return;
      n.push(g);
    }
    let u = !1;
    e[e.length - 1] === "!"
      ? ((u = !0), (e = e.slice(0, -1)))
      : e[0] === "!" && ((u = !0), (e = e.slice(1))),
      r.utilities.has(e, "static") &&
        !e.includes("[") &&
        (yield { kind: "static", root: e, variants: n, important: u, raw: t });
    let [a, p = null, f] = P(e, "/");
    if (f) return;
    let s = p === null ? null : st(p);
    if (p !== null && s === null) return;
    if (a[0] === "[") {
      if (a[a.length - 1] !== "]") return;
      let m = a.charCodeAt(1);
      if (m !== Wt && !(m >= Bt && m <= qt)) return;
      a = a.slice(1, -1);
      let g = a.indexOf(":");
      if (g === -1 || g === 0 || g === a.length - 1) return;
      let b = a.slice(0, g),
        v = re(a.slice(g + 1));
      yield {
        kind: "arbitrary",
        property: b,
        value: v,
        modifier: s,
        variants: n,
        important: u,
        raw: t,
      };
      return;
    }
    let d;
    if (a[a.length - 1] === "]") {
      let m = a.indexOf("-[");
      if (m === -1) return;
      let g = a.slice(0, m);
      if (!r.utilities.has(g, "functional")) return;
      let b = a.slice(m + 1);
      d = [[g, b]];
    } else if (a[a.length - 1] === ")") {
      let m = a.indexOf("-(");
      if (m === -1) return;
      let g = a.slice(0, m);
      if (!r.utilities.has(g, "functional")) return;
      let b = a.slice(m + 2, -1),
        v = P(b, ":"),
        y = null;
      if (
        (v.length === 2 && ((y = v[0]), (b = v[1])),
        b[0] !== "-" && b[1] !== "-")
      )
        return;
      d = [[g, y === null ? `[var(${b})]` : `[${y}:var(${b})]`]];
    } else d = Yt(a, (m) => r.utilities.has(m, "functional"));
    for (let [m, g] of d) {
      let b = {
        kind: "functional",
        root: m,
        modifier: s,
        value: null,
        variants: n,
        important: u,
        raw: t,
      };
      if (g === null) {
        yield b;
        continue;
      }
      {
        let v = g.indexOf("[");
        if (v !== -1) {
          if (g[g.length - 1] !== "]") return;
          let x = re(g.slice(v + 1, -1)),
            T = "";
          for (let V = 0; V < x.length; V++) {
            let O = x.charCodeAt(V);
            if (O === ho) {
              (T = x.slice(0, V)), (x = x.slice(V + 1));
              break;
            }
            if (!(O === Wt || (O >= Bt && O <= qt))) break;
          }
          if (x.length === 0 || x.trim().length === 0) continue;
          b.value = { kind: "arbitrary", dataType: T || null, value: x };
        } else {
          let x =
            p === null || b.modifier?.kind === "arbitrary" ? null : `${g}/${p}`;
          b.value = { kind: "named", value: g, fraction: x };
        }
      }
      yield b;
    }
  }
  function st(t) {
    if (t[0] === "[" && t[t.length - 1] === "]") {
      let r = re(t.slice(1, -1));
      return r.length === 0 || r.trim().length === 0
        ? null
        : { kind: "arbitrary", value: r };
    }
    if (t[0] === "(" && t[t.length - 1] === ")") {
      let r = re(t.slice(1, -1));
      return r.length === 0 ||
        r.trim().length === 0 ||
        (r[0] !== "-" && r[1] !== "-")
        ? null
        : { kind: "arbitrary", value: `var(${r})` };
    }
    return { kind: "named", value: t };
  }
  function Gt(t, r) {
    if (t[0] === "[" && t[t.length - 1] === "]") {
      if (t[1] === "@" && t.includes("&")) return null;
      let o = re(t.slice(1, -1));
      if (o.length === 0 || o.trim().length === 0) return null;
      let e = o[0] === ">" || o[0] === "+" || o[0] === "~";
      return (
        !e && o[0] !== "@" && !o.includes("&") && (o = `&:is(${o})`),
        { kind: "arbitrary", selector: o, relative: e }
      );
    }
    {
      let [o, e = null, n] = P(t, "/");
      if (n) return null;
      let u = Yt(o, (a) => r.variants.has(a));
      for (let [a, p] of u)
        switch (r.variants.kind(a)) {
          case "static":
            return p !== null || e !== null
              ? null
              : { kind: "static", root: a };
          case "functional": {
            let f = e === null ? null : st(e);
            if (e !== null && f === null) return null;
            if (p === null)
              return { kind: "functional", root: a, modifier: f, value: null };
            if (p[p.length - 1] === "]") {
              if (p[0] !== "[") continue;
              let s = re(p.slice(1, -1));
              return s.length === 0 || s.trim().length === 0
                ? null
                : {
                    kind: "functional",
                    root: a,
                    modifier: f,
                    value: { kind: "arbitrary", value: s },
                  };
            }
            if (p[p.length - 1] === ")") {
              if (p[0] !== "(") continue;
              let s = re(p.slice(1, -1));
              return s.length === 0 ||
                s.trim().length === 0 ||
                (s[0] !== "-" && s[1] !== "-")
                ? null
                : {
                    kind: "functional",
                    root: a,
                    modifier: f,
                    value: { kind: "arbitrary", value: `var(${s})` },
                  };
            }
            return {
              kind: "functional",
              root: a,
              modifier: f,
              value: { kind: "named", value: p },
            };
          }
          case "compound": {
            if (p === null) return null;
            let f = r.parseVariant(p);
            if (f === null || !r.variants.compoundsWith(a, f)) return null;
            let s = e === null ? null : st(e);
            return e !== null && s === null
              ? null
              : { kind: "compound", root: a, modifier: s, variant: f };
          }
        }
    }
    return null;
  }
  function* Yt(t, r) {
    r(t) && (yield [t, null]);
    let o = t.lastIndexOf("-");
    if (o === -1) {
      t[0] === "@" && r("@") && (yield ["@", t.slice(1)]);
      return;
    }
    do {
      let e = t.slice(0, o);
      if (r(e)) {
        let n = [e, t.slice(o + 1)];
        if (n[1] === "") break;
        yield n;
      }
      o = t.lastIndexOf("-", o - 1);
    } while (o > 0);
  }
  function se(t, r, o) {
    if (t === r) return 0;
    let e = t.indexOf("("),
      n = r.indexOf("("),
      u = e === -1 ? t.replace(/[\d.]+/g, "") : t.slice(0, e),
      a = n === -1 ? r.replace(/[\d.]+/g, "") : r.slice(0, n),
      p =
        (u === a ? 0 : u < a ? -1 : 1) ||
        (o === "asc" ? parseInt(t) - parseInt(r) : parseInt(r) - parseInt(t));
    return Number.isNaN(p) ? (t < r ? -1 : 1) : p;
  }
  var bo = new Set([
      "black",
      "silver",
      "gray",
      "white",
      "maroon",
      "red",
      "purple",
      "fuchsia",
      "green",
      "lime",
      "olive",
      "yellow",
      "navy",
      "blue",
      "teal",
      "aqua",
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkgrey",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkslategrey",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dimgrey",
      "dodgerblue",
      "firebrick",
      "floralwhite",
      "forestgreen",
      "fuchsia",
      "gainsboro",
      "ghostwhite",
      "gold",
      "goldenrod",
      "gray",
      "green",
      "greenyellow",
      "grey",
      "honeydew",
      "hotpink",
      "indianred",
      "indigo",
      "ivory",
      "khaki",
      "lavender",
      "lavenderblush",
      "lawngreen",
      "lemonchiffon",
      "lightblue",
      "lightcoral",
      "lightcyan",
      "lightgoldenrodyellow",
      "lightgray",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
      "lightslategrey",
      "lightsteelblue",
      "lightyellow",
      "lime",
      "limegreen",
      "linen",
      "magenta",
      "maroon",
      "mediumaquamarine",
      "mediumblue",
      "mediumorchid",
      "mediumpurple",
      "mediumseagreen",
      "mediumslateblue",
      "mediumspringgreen",
      "mediumturquoise",
      "mediumvioletred",
      "midnightblue",
      "mintcream",
      "mistyrose",
      "moccasin",
      "navajowhite",
      "navy",
      "oldlace",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "rebeccapurple",
      "red",
      "rosybrown",
      "royalblue",
      "saddlebrown",
      "salmon",
      "sandybrown",
      "seagreen",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen",
      "transparent",
      "currentcolor",
      "canvas",
      "canvastext",
      "linktext",
      "visitedtext",
      "activetext",
      "buttonface",
      "buttontext",
      "buttonborder",
      "field",
      "fieldtext",
      "highlight",
      "highlighttext",
      "selecteditem",
      "selecteditemtext",
      "mark",
      "marktext",
      "graytext",
      "accentcolor",
      "accentcolortext",
    ]),
    yo = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
  function Jt(t) {
    return t.charCodeAt(0) === 35 || yo.test(t) || bo.has(t.toLowerCase());
  }
  var vo = {
    color: Jt,
    length: ct,
    percentage: ut,
    ratio: Ko,
    number: Eo,
    integer: $,
    url: Zt,
    position: _o,
    "bg-size": Do,
    "line-width": wo,
    image: Co,
    "family-name": $o,
    "generic-name": So,
    "absolute-size": No,
    "relative-size": To,
    angle: Io,
    vector: Lo,
  };
  function F(t, r) {
    if (t.startsWith("var(")) return null;
    for (let o of r) if (vo[o]?.(t)) return o;
    return null;
  }
  var ko = /^url\(.*\)$/;
  function Zt(t) {
    return ko.test(t);
  }
  function wo(t) {
    return t === "thin" || t === "medium" || t === "thick";
  }
  var xo = /^(?:element|image|cross-fade|image-set)\(/,
    Ao = /^(repeating-)?(conic|linear|radial)-gradient\(/;
  function Co(t) {
    let r = 0;
    for (let o of P(t, ","))
      if (!o.startsWith("var(")) {
        if (Zt(o)) {
          r += 1;
          continue;
        }
        if (Ao.test(o)) {
          r += 1;
          continue;
        }
        if (xo.test(o)) {
          r += 1;
          continue;
        }
        return !1;
      }
    return r > 0;
  }
  function So(t) {
    return (
      t === "serif" ||
      t === "sans-serif" ||
      t === "monospace" ||
      t === "cursive" ||
      t === "fantasy" ||
      t === "system-ui" ||
      t === "ui-serif" ||
      t === "ui-sans-serif" ||
      t === "ui-monospace" ||
      t === "ui-rounded" ||
      t === "math" ||
      t === "emoji" ||
      t === "fangsong"
    );
  }
  function $o(t) {
    let r = 0;
    for (let o of P(t, ",")) {
      let e = o.charCodeAt(0);
      if (e >= 48 && e <= 57) return !1;
      o.startsWith("var(") || (r += 1);
    }
    return r > 0;
  }
  function No(t) {
    return (
      t === "xx-small" ||
      t === "x-small" ||
      t === "small" ||
      t === "medium" ||
      t === "large" ||
      t === "x-large" ||
      t === "xx-large" ||
      t === "xxx-large"
    );
  }
  function To(t) {
    return t === "larger" || t === "smaller";
  }
  var te = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/,
    Vo = new RegExp(`^${te.source}$`);
  function Eo(t) {
    return Vo.test(t) || Ce(t);
  }
  var Ro = new RegExp(`^${te.source}%$`);
  function ut(t) {
    return Ro.test(t) || Ce(t);
  }
  var Oo = new RegExp(`^${te.source}s*/s*${te.source}$`);
  function Ko(t) {
    return Oo.test(t) || Ce(t);
  }
  var Po = [
      "cm",
      "mm",
      "Q",
      "in",
      "pc",
      "pt",
      "px",
      "em",
      "ex",
      "ch",
      "rem",
      "lh",
      "rlh",
      "vw",
      "vh",
      "vmin",
      "vmax",
      "vb",
      "vi",
      "svw",
      "svh",
      "lvw",
      "lvh",
      "dvw",
      "dvh",
      "cqw",
      "cqh",
      "cqi",
      "cqb",
      "cqmin",
      "cqmax",
    ],
    zo = new RegExp(`^${te.source}(${Po.join("|")})$`);
  function ct(t) {
    return zo.test(t) || Ce(t);
  }
  function _o(t) {
    let r = 0;
    for (let o of P(t, " ")) {
      if (
        o === "center" ||
        o === "top" ||
        o === "right" ||
        o === "bottom" ||
        o === "left"
      ) {
        r += 1;
        continue;
      }
      if (!o.startsWith("var(")) {
        if (ct(o) || ut(o)) {
          r += 1;
          continue;
        }
        return !1;
      }
    }
    return r > 0;
  }
  function Do(t) {
    let r = 0;
    for (let o of P(t, ",")) {
      if (o === "cover" || o === "contain") {
        r += 1;
        continue;
      }
      let e = P(o, " ");
      if (e.length !== 1 && e.length !== 2) return !1;
      if (e.every((n) => n === "auto" || ct(n) || ut(n))) {
        r += 1;
        continue;
      }
    }
    return r > 0;
  }
  var Uo = ["deg", "rad", "grad", "turn"],
    jo = new RegExp(`^${te.source}(${Uo.join("|")})$`);
  function Io(t) {
    return jo.test(t);
  }
  var Fo = new RegExp(`^${te.source} +${te.source} +${te.source}$`);
  function Lo(t) {
    return Fo.test(t);
  }
  function $(t) {
    let r = Number(t);
    return Number.isInteger(r) && r >= 0 && String(r) === String(t);
  }
  function ft(t) {
    let r = Number(t);
    return Number.isInteger(r) && r > 0 && String(r) === String(t);
  }
  function ge(t) {
    return Qt(t, 0.25);
  }
  function Ie(t) {
    return Qt(t, 0.25);
  }
  function Qt(t, r) {
    let o = Number(t);
    return o >= 0 && o % r === 0 && String(o) === String(t);
  }
  var Mo = new Set(["inset", "inherit", "initial", "revert", "unset"]),
    Xt = /^-?(\d+|\.\d+)(.*?)$/g;
  function ue(t, r) {
    return P(t, ",")
      .map((e) => {
        e = e.trim();
        let n = P(e, " ").filter((s) => s.trim() !== ""),
          u = null,
          a = null,
          p = null;
        for (let s of n)
          Mo.has(s) ||
            (Xt.test(s)
              ? (a === null ? (a = s) : p === null && (p = s),
                (Xt.lastIndex = 0))
              : u === null && (u = s));
        if (a === null || p === null) return e;
        let f = r(u ?? "currentcolor");
        return u !== null ? e.replace(u, f) : `${e} ${f}`;
      })
      .join(", ");
  }
  var Bo = /^-?[a-z][a-zA-Z0-9/%._-]*$/,
    qo = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/,
    dt = class {
      utilities = new I(() => []);
      completions = new Map();
      static(r, o) {
        this.utilities.get(r).push({ kind: "static", compileFn: o });
      }
      functional(r, o, e) {
        this.utilities
          .get(r)
          .push({ kind: "functional", compileFn: o, options: e });
      }
      has(r, o) {
        return (
          this.utilities.has(r) &&
          this.utilities.get(r).some((e) => e.kind === o)
        );
      }
      get(r) {
        return this.utilities.has(r) ? this.utilities.get(r) : [];
      }
      getCompletions(r) {
        return this.completions.get(r)?.() ?? [];
      }
      suggest(r, o) {
        this.completions.set(r, o);
      }
      keys(r) {
        let o = [];
        for (let [e, n] of this.utilities.entries())
          for (let u of n)
            if (u.kind === r) {
              o.push(e);
              break;
            }
        return o;
      }
    };
  function S(t, r, o) {
    return z("@property", t, [
      l("syntax", o ? `"${o}"` : '"*"'),
      l("inherits", "false"),
      ...(r ? [l("initial-value", r)] : []),
    ]);
  }
  function J(t, r) {
    if (r === null) return t;
    let o = Number(r);
    return (
      Number.isNaN(o) || (r = `${o * 100}%`),
      `color-mix(in oklab, ${t} ${r}, transparent)`
    );
  }
  function W(t, r, o) {
    if (!r) return t;
    if (r.kind === "arbitrary") return J(t, r.value);
    let e = o.resolve(r.value, ["--opacity"]);
    return e ? J(t, e) : Ie(r.value) ? J(t, `${r.value}%`) : null;
  }
  function G(t, r, o) {
    let e = null;
    switch (t.value.value) {
      case "inherit": {
        e = "inherit";
        break;
      }
      case "transparent": {
        e = "transparent";
        break;
      }
      case "current": {
        e = "currentColor";
        break;
      }
      default: {
        e = r.resolve(t.value.value, o);
        break;
      }
    }
    return e ? W(e, t.modifier, r) : null;
  }
  function tr(t) {
    let r = new dt();
    function o(i, c) {
      function* h(w) {
        for (let k of t.keysInNamespaces(w)) yield k.replaceAll("_", ".");
      }
      r.suggest(i, () => {
        let w = [];
        for (let k of c()) {
          if (typeof k == "string") {
            w.push({ values: [k], modifiers: [] });
            continue;
          }
          let N = [...(k.values ?? []), ...h(k.valueThemeKeys ?? [])],
            R = [...(k.modifiers ?? []), ...h(k.modifierThemeKeys ?? [])];
          k.hasDefaultValue && N.unshift(null),
            w.push({
              supportsNegative: k.supportsNegative,
              values: N,
              modifiers: R,
            });
        }
        return w;
      });
    }
    function e(i, c) {
      r.static(i, () =>
        c.map((h) => (typeof h == "function" ? h() : l(h[0], h[1])))
      );
    }
    function n(i, c) {
      function h({ negative: w }) {
        return (k) => {
          let N = null;
          if (k.value)
            if (k.value.kind === "arbitrary") {
              if (k.modifier) return;
              N = k.value.value;
            } else {
              if (
                ((N = t.resolve(
                  k.value.fraction ?? k.value.value,
                  c.themeKeys ?? []
                )),
                N === null && c.supportsFractions && k.value.fraction)
              ) {
                let [R, C] = P(k.value.fraction, "/");
                if (!$(R) || !$(C)) return;
                N = `calc(${k.value.fraction} * 100%)`;
              }
              if (N === null && w && c.handleNegativeBareValue) {
                if (
                  ((N = c.handleNegativeBareValue(k.value)),
                  !N?.includes("/") && k.modifier)
                )
                  return;
                if (N !== null) return c.handle(N);
              }
              if (
                N === null &&
                c.handleBareValue &&
                ((N = c.handleBareValue(k.value)),
                !N?.includes("/") && k.modifier)
              )
                return;
            }
          else {
            if (k.modifier) return;
            N =
              c.defaultValue !== void 0
                ? c.defaultValue
                : t.resolve(null, c.themeKeys ?? []);
          }
          if (N !== null) return c.handle(w ? `calc(${N} * -1)` : N);
        };
      }
      c.supportsNegative && r.functional(`-${i}`, h({ negative: !0 })),
        r.functional(i, h({ negative: !1 })),
        o(i, () => [
          {
            supportsNegative: c.supportsNegative,
            valueThemeKeys: c.themeKeys ?? [],
            hasDefaultValue:
              c.defaultValue !== void 0 && c.defaultValue !== null,
          },
        ]);
    }
    function u(i, c) {
      r.functional(i, (h) => {
        if (!h.value) return;
        let w = null;
        if (
          (h.value.kind === "arbitrary"
            ? ((w = h.value.value), (w = W(w, h.modifier, t)))
            : (w = G(h, t, c.themeKeys)),
          w !== null)
        )
          return c.handle(w);
      }),
        o(i, () => [
          {
            values: ["current", "inherit", "transparent"],
            valueThemeKeys: c.themeKeys,
            modifiers: Array.from({ length: 21 }, (h, w) => `${w * 5}`),
          },
        ]);
    }
    function a(
      i,
      c,
      h,
      { supportsNegative: w = !1, supportsFractions: k = !1 } = {}
    ) {
      w && r.static(`-${i}-px`, () => h("-1px")),
        r.static(`${i}-px`, () => h("1px")),
        n(i, {
          themeKeys: c,
          supportsFractions: k,
          supportsNegative: w,
          defaultValue: null,
          handleBareValue: ({ value: N }) => {
            let R = t.resolve(null, ["--spacing"]);
            return !R || !ge(N) ? null : `calc(${R} * ${N})`;
          },
          handleNegativeBareValue: ({ value: N }) => {
            let R = t.resolve(null, ["--spacing"]);
            return !R || !ge(N) ? null : `calc(${R} * -${N})`;
          },
          handle: h,
        }),
        o(i, () => [
          {
            values: t.get(["--spacing"])
              ? [
                  "0",
                  "0.5",
                  "1",
                  "1.5",
                  "2",
                  "2.5",
                  "3",
                  "3.5",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "14",
                  "16",
                  "20",
                  "24",
                  "28",
                  "32",
                  "36",
                  "40",
                  "44",
                  "48",
                  "52",
                  "56",
                  "60",
                  "64",
                  "72",
                  "80",
                  "96",
                ]
              : [],
            supportsNegative: w,
            valueThemeKeys: c,
          },
        ]);
    }
    e("sr-only", [
      ["position", "absolute"],
      ["width", "1px"],
      ["height", "1px"],
      ["padding", "0"],
      ["margin", "-1px"],
      ["overflow", "hidden"],
      ["clip", "rect(0, 0, 0, 0)"],
      ["white-space", "nowrap"],
      ["border-width", "0"],
    ]),
      e("not-sr-only", [
        ["position", "static"],
        ["width", "auto"],
        ["height", "auto"],
        ["padding", "0"],
        ["margin", "0"],
        ["overflow", "visible"],
        ["clip", "auto"],
        ["white-space", "normal"],
      ]),
      e("pointer-events-none", [["pointer-events", "none"]]),
      e("pointer-events-auto", [["pointer-events", "auto"]]),
      e("visible", [["visibility", "visible"]]),
      e("invisible", [["visibility", "hidden"]]),
      e("collapse", [["visibility", "collapse"]]),
      e("static", [["position", "static"]]),
      e("fixed", [["position", "fixed"]]),
      e("absolute", [["position", "absolute"]]),
      e("relative", [["position", "relative"]]),
      e("sticky", [["position", "sticky"]]);
    for (let [i, c] of [
      ["inset", "inset"],
      ["inset-x", "inset-inline"],
      ["inset-y", "inset-block"],
      ["start", "inset-inline-start"],
      ["end", "inset-inline-end"],
      ["top", "top"],
      ["right", "right"],
      ["bottom", "bottom"],
      ["left", "left"],
    ])
      e(`${i}-auto`, [[c, "auto"]]),
        e(`${i}-full`, [[c, "100%"]]),
        e(`-${i}-full`, [[c, "-100%"]]),
        a(i, ["--inset", "--spacing"], (h) => [l(c, h)], {
          supportsNegative: !0,
          supportsFractions: !0,
        });
    e("isolate", [["isolation", "isolate"]]),
      e("isolation-auto", [["isolation", "auto"]]),
      e("z-auto", [["z-index", "auto"]]),
      n("z", {
        supportsNegative: !0,
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        themeKeys: ["--z-index"],
        handle: (i) => [l("z-index", i)],
      }),
      o("z", () => [
        {
          supportsNegative: !0,
          values: ["0", "10", "20", "30", "40", "50"],
          valueThemeKeys: ["--z-index"],
        },
      ]),
      e("order-first", [["order", "-9999"]]),
      e("order-last", [["order", "9999"]]),
      e("order-none", [["order", "0"]]),
      n("order", {
        supportsNegative: !0,
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        themeKeys: ["--order"],
        handle: (i) => [l("order", i)],
      }),
      o("order", () => [
        {
          supportsNegative: !0,
          values: Array.from({ length: 12 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--order"],
        },
      ]),
      e("col-auto", [["grid-column", "auto"]]),
      n("col", {
        themeKeys: ["--grid-column"],
        handle: (i) => [l("grid-column", i)],
      }),
      e("col-span-full", [["grid-column", "1 / -1"]]),
      n("col-span", {
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        handle: (i) => [l("grid-column", `span ${i} / span ${i}`)],
      }),
      e("col-start-auto", [["grid-column-start", "auto"]]),
      n("col-start", {
        supportsNegative: !0,
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        themeKeys: ["--grid-column-start"],
        handle: (i) => [l("grid-column-start", i)],
      }),
      e("col-end-auto", [["grid-column-end", "auto"]]),
      n("col-end", {
        supportsNegative: !0,
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        themeKeys: ["--grid-column-end"],
        handle: (i) => [l("grid-column-end", i)],
      }),
      o("col-span", () => [
        {
          values: Array.from({ length: 12 }, (i, c) => `${c + 1}`),
          valueThemeKeys: [],
        },
      ]),
      o("col-start", () => [
        {
          supportsNegative: !0,
          values: Array.from({ length: 13 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--grid-column-start"],
        },
      ]),
      o("col-end", () => [
        {
          supportsNegative: !0,
          values: Array.from({ length: 13 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--grid-column-end"],
        },
      ]),
      e("row-auto", [["grid-row", "auto"]]),
      n("row", {
        themeKeys: ["--grid-row"],
        handle: (i) => [l("grid-row", i)],
      }),
      e("row-span-full", [["grid-row", "1 / -1"]]),
      n("row-span", {
        themeKeys: [],
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        handle: (i) => [l("grid-row", `span ${i} / span ${i}`)],
      }),
      e("row-start-auto", [["grid-row-start", "auto"]]),
      n("row-start", {
        supportsNegative: !0,
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        themeKeys: ["--grid-row-start"],
        handle: (i) => [l("grid-row-start", i)],
      }),
      e("row-end-auto", [["grid-row-end", "auto"]]),
      n("row-end", {
        supportsNegative: !0,
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        themeKeys: ["--grid-row-end"],
        handle: (i) => [l("grid-row-end", i)],
      }),
      o("row-span", () => [
        {
          values: Array.from({ length: 12 }, (i, c) => `${c + 1}`),
          valueThemeKeys: [],
        },
      ]),
      o("row-start", () => [
        {
          supportsNegative: !0,
          values: Array.from({ length: 13 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--grid-row-start"],
        },
      ]),
      o("row-end", () => [
        {
          supportsNegative: !0,
          values: Array.from({ length: 13 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--grid-row-end"],
        },
      ]),
      e("float-start", [["float", "inline-start"]]),
      e("float-end", [["float", "inline-end"]]),
      e("float-right", [["float", "right"]]),
      e("float-left", [["float", "left"]]),
      e("float-none", [["float", "none"]]),
      e("clear-start", [["clear", "inline-start"]]),
      e("clear-end", [["clear", "inline-end"]]),
      e("clear-right", [["clear", "right"]]),
      e("clear-left", [["clear", "left"]]),
      e("clear-both", [["clear", "both"]]),
      e("clear-none", [["clear", "none"]]);
    for (let [i, c] of [
      ["m", "margin"],
      ["mx", "margin-inline"],
      ["my", "margin-block"],
      ["ms", "margin-inline-start"],
      ["me", "margin-inline-end"],
      ["mt", "margin-top"],
      ["mr", "margin-right"],
      ["mb", "margin-bottom"],
      ["ml", "margin-left"],
    ])
      e(`${i}-auto`, [[c, "auto"]]),
        a(i, ["--margin", "--spacing"], (h) => [l(c, h)], {
          supportsNegative: !0,
        });
    e("box-border", [["box-sizing", "border-box"]]),
      e("box-content", [["box-sizing", "content-box"]]),
      e("line-clamp-none", [
        ["overflow", "visible"],
        ["display", "block"],
        ["-webkit-box-orient", "horizontal"],
        ["-webkit-line-clamp", "unset"],
      ]),
      n("line-clamp", {
        themeKeys: ["--line-clamp"],
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        handle: (i) => [
          l("overflow", "hidden"),
          l("display", "-webkit-box"),
          l("-webkit-box-orient", "vertical"),
          l("-webkit-line-clamp", i),
        ],
      }),
      o("line-clamp", () => [
        {
          values: ["1", "2", "3", "4", "5", "6"],
          valueThemeKeys: ["--line-clamp"],
        },
      ]),
      e("block", [["display", "block"]]),
      e("inline-block", [["display", "inline-block"]]),
      e("inline", [["display", "inline"]]),
      e("hidden", [["display", "none"]]),
      e("inline-flex", [["display", "inline-flex"]]),
      e("table", [["display", "table"]]),
      e("inline-table", [["display", "inline-table"]]),
      e("table-caption", [["display", "table-caption"]]),
      e("table-cell", [["display", "table-cell"]]),
      e("table-column", [["display", "table-column"]]),
      e("table-column-group", [["display", "table-column-group"]]),
      e("table-footer-group", [["display", "table-footer-group"]]),
      e("table-header-group", [["display", "table-header-group"]]),
      e("table-row-group", [["display", "table-row-group"]]),
      e("table-row", [["display", "table-row"]]),
      e("flow-root", [["display", "flow-root"]]),
      e("flex", [["display", "flex"]]),
      e("grid", [["display", "grid"]]),
      e("inline-grid", [["display", "inline-grid"]]),
      e("contents", [["display", "contents"]]),
      e("list-item", [["display", "list-item"]]),
      e("field-sizing-content", [["field-sizing", "content"]]),
      e("field-sizing-fixed", [["field-sizing", "fixed"]]),
      e("aspect-auto", [["aspect-ratio", "auto"]]),
      e("aspect-square", [["aspect-ratio", "1 / 1"]]),
      n("aspect", {
        themeKeys: ["--aspect"],
        handleBareValue: ({ fraction: i }) => {
          if (i === null) return null;
          let [c, h] = P(i, "/");
          return !$(c) || !$(h) ? null : i;
        },
        handle: (i) => [l("aspect-ratio", i)],
      });
    for (let [i, c] of [
      ["auto", "auto"],
      ["full", "100%"],
      ["svw", "100svw"],
      ["lvw", "100lvw"],
      ["dvw", "100dvw"],
      ["svh", "100svh"],
      ["lvh", "100lvh"],
      ["dvh", "100dvh"],
      ["min", "min-content"],
      ["max", "max-content"],
      ["fit", "fit-content"],
    ])
      e(`size-${i}`, [
        ["--tw-sort", "size"],
        ["width", c],
        ["height", c],
      ]),
        e(`w-${i}`, [["width", c]]),
        e(`min-w-${i}`, [["min-width", c]]),
        e(`max-w-${i}`, [["max-width", c]]),
        e(`h-${i}`, [["height", c]]),
        e(`min-h-${i}`, [["min-height", c]]),
        e(`max-h-${i}`, [["max-height", c]]);
    e("w-screen", [["width", "100vw"]]),
      e("min-w-screen", [["min-width", "100vw"]]),
      e("max-w-screen", [["max-width", "100vw"]]),
      e("h-screen", [["height", "100vh"]]),
      e("min-h-screen", [["min-height", "100vh"]]),
      e("max-h-screen", [["max-height", "100vh"]]),
      e("max-w-none", [["max-width", "none"]]),
      e("max-h-none", [["max-height", "none"]]),
      a(
        "size",
        ["--size", "--spacing"],
        (i) => [l("--tw-sort", "size"), l("width", i), l("height", i)],
        { supportsFractions: !0 }
      );
    for (let [i, c, h] of [
      ["w", ["--width", "--spacing", "--container"], "width"],
      ["min-w", ["--min-width", "--spacing", "--container"], "min-width"],
      ["max-w", ["--max-width", "--spacing", "--container"], "max-width"],
      ["h", ["--height", "--spacing"], "height"],
      ["min-h", ["--min-height", "--height", "--spacing"], "min-height"],
      ["max-h", ["--max-height", "--height", "--spacing"], "max-height"],
    ])
      a(i, c, (w) => [l(h, w)], { supportsFractions: !0 });
    r.static("container", () => {
      let i = [...t.namespace("--breakpoint").values()];
      i.sort((h, w) => se(h, w, "asc"));
      let c = [l("--tw-sort", "--tw-container-component"), l("width", "100%")];
      for (let h of i)
        c.push(z("@media", `(width >= ${h})`, [l("max-width", h)]));
      return c;
    }),
      e("flex-auto", [["flex", "auto"]]),
      e("flex-initial", [["flex", "0 auto"]]),
      e("flex-none", [["flex", "none"]]),
      r.functional("flex", (i) => {
        if (i.value) {
          if (i.value.kind === "arbitrary")
            return i.modifier ? void 0 : [l("flex", i.value.value)];
          if (i.value.fraction) {
            let [c, h] = P(i.value.fraction, "/");
            return !$(c) || !$(h)
              ? void 0
              : [l("flex", `calc(${i.value.fraction} * 100%)`)];
          }
          if ($(i.value.value))
            return i.modifier ? void 0 : [l("flex", i.value.value)];
        }
      }),
      n("shrink", {
        defaultValue: "1",
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        handle: (i) => [l("flex-shrink", i)],
      }),
      n("grow", {
        defaultValue: "1",
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        handle: (i) => [l("flex-grow", i)],
      }),
      o("shrink", () => [
        { values: ["0"], valueThemeKeys: [], hasDefaultValue: !0 },
      ]),
      o("grow", () => [
        { values: ["0"], valueThemeKeys: [], hasDefaultValue: !0 },
      ]),
      e("basis-auto", [["flex-basis", "auto"]]),
      e("basis-full", [["flex-basis", "100%"]]),
      a(
        "basis",
        ["--flex-basis", "--spacing", "--container"],
        (i) => [l("flex-basis", i)],
        { supportsFractions: !0 }
      ),
      e("table-auto", [["table-layout", "auto"]]),
      e("table-fixed", [["table-layout", "fixed"]]),
      e("caption-top", [["caption-side", "top"]]),
      e("caption-bottom", [["caption-side", "bottom"]]),
      e("border-collapse", [["border-collapse", "collapse"]]),
      e("border-separate", [["border-collapse", "separate"]]);
    let p = () =>
      D([
        S("--tw-border-spacing-x", "0", "<length>"),
        S("--tw-border-spacing-y", "0", "<length>"),
      ]);
    a("border-spacing", ["--border-spacing", "--spacing"], (i) => [
      p(),
      l("--tw-border-spacing-x", i),
      l("--tw-border-spacing-y", i),
      l(
        "border-spacing",
        "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
      ),
    ]),
      a("border-spacing-x", ["--border-spacing", "--spacing"], (i) => [
        p(),
        l("--tw-border-spacing-x", i),
        l(
          "border-spacing",
          "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
        ),
      ]),
      a("border-spacing-y", ["--border-spacing", "--spacing"], (i) => [
        p(),
        l("--tw-border-spacing-y", i),
        l(
          "border-spacing",
          "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
        ),
      ]),
      e("origin-center", [["transform-origin", "center"]]),
      e("origin-top", [["transform-origin", "top"]]),
      e("origin-top-right", [["transform-origin", "top right"]]),
      e("origin-right", [["transform-origin", "right"]]),
      e("origin-bottom-right", [["transform-origin", "bottom right"]]),
      e("origin-bottom", [["transform-origin", "bottom"]]),
      e("origin-bottom-left", [["transform-origin", "bottom left"]]),
      e("origin-left", [["transform-origin", "left"]]),
      e("origin-top-left", [["transform-origin", "top left"]]),
      n("origin", {
        themeKeys: ["--transform-origin"],
        handle: (i) => [l("transform-origin", i)],
      }),
      e("perspective-origin-center", [["perspective-origin", "center"]]),
      e("perspective-origin-top", [["perspective-origin", "top"]]),
      e("perspective-origin-top-right", [["perspective-origin", "top right"]]),
      e("perspective-origin-right", [["perspective-origin", "right"]]),
      e("perspective-origin-bottom-right", [
        ["perspective-origin", "bottom right"],
      ]),
      e("perspective-origin-bottom", [["perspective-origin", "bottom"]]),
      e("perspective-origin-bottom-left", [
        ["perspective-origin", "bottom left"],
      ]),
      e("perspective-origin-left", [["perspective-origin", "left"]]),
      e("perspective-origin-top-left", [["perspective-origin", "top left"]]),
      n("perspective-origin", {
        themeKeys: ["--perspective-origin"],
        handle: (i) => [l("perspective-origin", i)],
      }),
      e("perspective-none", [["perspective", "none"]]),
      n("perspective", {
        themeKeys: ["--perspective"],
        handle: (i) => [l("perspective", i)],
      });
    let f = () =>
      D([
        S("--tw-translate-x", "0"),
        S("--tw-translate-y", "0"),
        S("--tw-translate-z", "0"),
      ]);
    e("translate-none", [["translate", "none"]]),
      e("-translate-full", [
        f,
        ["--tw-translate-x", "-100%"],
        ["--tw-translate-y", "-100%"],
        ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
      ]),
      e("translate-full", [
        f,
        ["--tw-translate-x", "100%"],
        ["--tw-translate-y", "100%"],
        ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
      ]),
      a(
        "translate",
        ["--translate", "--spacing"],
        (i) => [
          f(),
          l("--tw-translate-x", i),
          l("--tw-translate-y", i),
          l("translate", "var(--tw-translate-x) var(--tw-translate-y)"),
        ],
        { supportsNegative: !0, supportsFractions: !0 }
      );
    for (let i of ["x", "y"])
      e(`-translate-${i}-full`, [
        f,
        [`--tw-translate-${i}`, "-100%"],
        ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
      ]),
        e(`translate-${i}-full`, [
          f,
          [`--tw-translate-${i}`, "100%"],
          ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
        ]),
        a(
          `translate-${i}`,
          ["--translate", "--spacing"],
          (c) => [
            f(),
            l(`--tw-translate-${i}`, c),
            l("translate", "var(--tw-translate-x) var(--tw-translate-y)"),
          ],
          { supportsNegative: !0, supportsFractions: !0 }
        );
    a(
      "translate-z",
      ["--translate", "--spacing"],
      (i) => [
        f(),
        l("--tw-translate-z", i),
        l(
          "translate",
          "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"
        ),
      ],
      { supportsNegative: !0 }
    ),
      e("-translate-z-px", [
        f,
        ["--tw-translate-z", "-1px"],
        [
          "translate",
          "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)",
        ],
      ]),
      e("translate-z-px", [
        f,
        ["--tw-translate-z", "1px"],
        [
          "translate",
          "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)",
        ],
      ]),
      e("translate-3d", [
        f,
        [
          "translate",
          "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)",
        ],
      ]);
    let s = () =>
      D([
        S("--tw-scale-x", "1"),
        S("--tw-scale-y", "1"),
        S("--tw-scale-z", "1"),
      ]);
    e("scale-none", [["scale", "none"]]);
    function d({ negative: i }) {
      return (c) => {
        if (!c.value || c.modifier) return;
        let h;
        return c.value.kind === "arbitrary"
          ? ((h = c.value.value), [l("scale", h)])
          : ((h = t.resolve(c.value.value, ["--scale"])),
            !h && $(c.value.value) && (h = `${c.value.value}%`),
            h
              ? ((h = i ? `calc(${h} * -1)` : h),
                [
                  s(),
                  l("--tw-scale-x", h),
                  l("--tw-scale-y", h),
                  l("--tw-scale-z", h),
                  l("scale", "var(--tw-scale-x) var(--tw-scale-y)"),
                ])
              : void 0);
      };
    }
    r.functional("-scale", d({ negative: !0 })),
      r.functional("scale", d({ negative: !1 })),
      o("scale", () => [
        {
          supportsNegative: !0,
          values: [
            "0",
            "50",
            "75",
            "90",
            "95",
            "100",
            "105",
            "110",
            "125",
            "150",
            "200",
          ],
          valueThemeKeys: ["--scale"],
        },
      ]);
    for (let i of ["x", "y", "z"])
      n(`scale-${i}`, {
        supportsNegative: !0,
        themeKeys: ["--scale"],
        handleBareValue: ({ value: c }) => ($(c) ? `${c}%` : null),
        handle: (c) => [
          s(),
          l(`--tw-scale-${i}`, c),
          l(
            "scale",
            `var(--tw-scale-x) var(--tw-scale-y)${
              i === "z" ? " var(--tw-scale-z)" : ""
            }`
          ),
        ],
      }),
        o(`scale-${i}`, () => [
          {
            supportsNegative: !0,
            values: [
              "0",
              "50",
              "75",
              "90",
              "95",
              "100",
              "105",
              "110",
              "125",
              "150",
              "200",
            ],
            valueThemeKeys: ["--scale"],
          },
        ]);
    e("scale-3d", [
      s,
      ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"],
    ]),
      e("rotate-none", [["rotate", "none"]]);
    function m({ negative: i }) {
      return (c) => {
        if (!c.value || c.modifier) return;
        let h;
        if (c.value.kind === "arbitrary") {
          h = c.value.value;
          let w = c.value.dataType ?? F(h, ["angle", "vector"]);
          if (w === "vector") return [l("rotate", `${h} var(--tw-rotate)`)];
          if (w !== "angle") return [l("rotate", h)];
        } else if (
          ((h = t.resolve(c.value.value, ["--rotate"])),
          !h && $(c.value.value) && (h = `${c.value.value}deg`),
          !h)
        )
          return;
        return [l("rotate", i ? `calc(${h} * -1)` : h)];
      };
    }
    r.functional("-rotate", m({ negative: !0 })),
      r.functional("rotate", m({ negative: !1 })),
      o("rotate", () => [
        {
          supportsNegative: !0,
          values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"],
          valueThemeKeys: ["--rotate"],
        },
      ]);
    {
      let i = [
          "var(--tw-rotate-x)",
          "var(--tw-rotate-y)",
          "var(--tw-rotate-z)",
          "var(--tw-skew-x)",
          "var(--tw-skew-y)",
        ].join(" "),
        c = () =>
          D([
            S("--tw-rotate-x", "rotateX(0)"),
            S("--tw-rotate-y", "rotateY(0)"),
            S("--tw-rotate-z", "rotateZ(0)"),
            S("--tw-skew-x", "skewX(0)"),
            S("--tw-skew-y", "skewY(0)"),
          ]);
      for (let h of ["x", "y", "z"])
        n(`rotate-${h}`, {
          supportsNegative: !0,
          themeKeys: ["--rotate"],
          handleBareValue: ({ value: w }) => ($(w) ? `${w}deg` : null),
          handle: (w) => [
            c(),
            l(`--tw-rotate-${h}`, `rotate${h.toUpperCase()}(${w})`),
            l("transform", i),
          ],
        }),
          o(`rotate-${h}`, () => [
            {
              supportsNegative: !0,
              values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"],
              valueThemeKeys: ["--rotate"],
            },
          ]);
      n("skew", {
        supportsNegative: !0,
        themeKeys: ["--skew"],
        handleBareValue: ({ value: h }) => ($(h) ? `${h}deg` : null),
        handle: (h) => [
          c(),
          l("--tw-skew-x", `skewX(${h})`),
          l("--tw-skew-y", `skewY(${h})`),
          l("transform", i),
        ],
      }),
        n("skew-x", {
          supportsNegative: !0,
          themeKeys: ["--skew"],
          handleBareValue: ({ value: h }) => ($(h) ? `${h}deg` : null),
          handle: (h) => [
            c(),
            l("--tw-skew-x", `skewX(${h})`),
            l("transform", i),
          ],
        }),
        n("skew-y", {
          supportsNegative: !0,
          themeKeys: ["--skew"],
          handleBareValue: ({ value: h }) => ($(h) ? `${h}deg` : null),
          handle: (h) => [
            c(),
            l("--tw-skew-y", `skewY(${h})`),
            l("transform", i),
          ],
        }),
        o("skew", () => [
          {
            supportsNegative: !0,
            values: ["0", "1", "2", "3", "6", "12"],
            valueThemeKeys: ["--skew"],
          },
        ]),
        o("skew-x", () => [
          {
            supportsNegative: !0,
            values: ["0", "1", "2", "3", "6", "12"],
            valueThemeKeys: ["--skew"],
          },
        ]),
        o("skew-y", () => [
          {
            supportsNegative: !0,
            values: ["0", "1", "2", "3", "6", "12"],
            valueThemeKeys: ["--skew"],
          },
        ]),
        r.functional("transform", (h) => {
          if (h.modifier) return;
          let w = null;
          if (
            (h.value
              ? h.value.kind === "arbitrary" && (w = h.value.value)
              : (w = i),
            w !== null)
          )
            return [c(), l("transform", w)];
        }),
        o("transform", () => [{ hasDefaultValue: !0 }]),
        e("transform-cpu", [["transform", i]]),
        e("transform-gpu", [["transform", `translateZ(0) ${i}`]]),
        e("transform-none", [["transform", "none"]]);
    }
    e("transform-flat", [["transform-style", "flat"]]),
      e("transform-3d", [["transform-style", "preserve-3d"]]),
      e("transform-content", [["transform-box", "content-box"]]),
      e("transform-border", [["transform-box", "border-box"]]),
      e("transform-fill", [["transform-box", "fill-box"]]),
      e("transform-stroke", [["transform-box", "stroke-box"]]),
      e("transform-view", [["transform-box", "view-box"]]),
      e("backface-visible", [["backface-visibility", "visible"]]),
      e("backface-hidden", [["backface-visibility", "hidden"]]);
    for (let i of [
      "auto",
      "default",
      "pointer",
      "wait",
      "text",
      "move",
      "help",
      "not-allowed",
      "none",
      "context-menu",
      "progress",
      "cell",
      "crosshair",
      "vertical-text",
      "alias",
      "copy",
      "no-drop",
      "grab",
      "grabbing",
      "all-scroll",
      "col-resize",
      "row-resize",
      "n-resize",
      "e-resize",
      "s-resize",
      "w-resize",
      "ne-resize",
      "nw-resize",
      "se-resize",
      "sw-resize",
      "ew-resize",
      "ns-resize",
      "nesw-resize",
      "nwse-resize",
      "zoom-in",
      "zoom-out",
    ])
      e(`cursor-${i}`, [["cursor", i]]);
    n("cursor", { themeKeys: ["--cursor"], handle: (i) => [l("cursor", i)] });
    for (let i of ["auto", "none", "manipulation"])
      e(`touch-${i}`, [["touch-action", i]]);
    let g = () => D([S("--tw-pan-x"), S("--tw-pan-y"), S("--tw-pinch-zoom")]);
    for (let i of ["x", "left", "right"])
      e(`touch-pan-${i}`, [
        g,
        ["--tw-pan-x", `pan-${i}`],
        [
          "touch-action",
          "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)",
        ],
      ]);
    for (let i of ["y", "up", "down"])
      e(`touch-pan-${i}`, [
        g,
        ["--tw-pan-y", `pan-${i}`],
        [
          "touch-action",
          "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)",
        ],
      ]);
    e("touch-pinch-zoom", [
      g,
      ["--tw-pinch-zoom", "pinch-zoom"],
      [
        "touch-action",
        "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)",
      ],
    ]);
    for (let i of ["none", "text", "all", "auto"])
      e(`select-${i}`, [
        ["-webkit-user-select", i],
        ["user-select", i],
      ]);
    e("resize-none", [["resize", "none"]]),
      e("resize-x", [["resize", "horizontal"]]),
      e("resize-y", [["resize", "vertical"]]),
      e("resize", [["resize", "both"]]),
      e("snap-none", [["scroll-snap-type", "none"]]);
    let b = () => D([S("--tw-scroll-snap-strictness", "proximity", "*")]);
    for (let i of ["x", "y", "both"])
      e(`snap-${i}`, [
        b,
        ["scroll-snap-type", `${i} var(--tw-scroll-snap-strictness)`],
      ]);
    e("snap-mandatory", [b, ["--tw-scroll-snap-strictness", "mandatory"]]),
      e("snap-proximity", [b, ["--tw-scroll-snap-strictness", "proximity"]]),
      e("snap-align-none", [["scroll-snap-align", "none"]]),
      e("snap-start", [["scroll-snap-align", "start"]]),
      e("snap-end", [["scroll-snap-align", "end"]]),
      e("snap-center", [["scroll-snap-align", "center"]]),
      e("snap-normal", [["scroll-snap-stop", "normal"]]),
      e("snap-always", [["scroll-snap-stop", "always"]]);
    for (let [i, c] of [
      ["scroll-m", "scroll-margin"],
      ["scroll-mx", "scroll-margin-inline"],
      ["scroll-my", "scroll-margin-block"],
      ["scroll-ms", "scroll-margin-inline-start"],
      ["scroll-me", "scroll-margin-inline-end"],
      ["scroll-mt", "scroll-margin-top"],
      ["scroll-mr", "scroll-margin-right"],
      ["scroll-mb", "scroll-margin-bottom"],
      ["scroll-ml", "scroll-margin-left"],
    ])
      a(i, ["--scroll-margin", "--spacing"], (h) => [l(c, h)], {
        supportsNegative: !0,
      });
    for (let [i, c] of [
      ["scroll-p", "scroll-padding"],
      ["scroll-px", "scroll-padding-inline"],
      ["scroll-py", "scroll-padding-block"],
      ["scroll-ps", "scroll-padding-inline-start"],
      ["scroll-pe", "scroll-padding-inline-end"],
      ["scroll-pt", "scroll-padding-top"],
      ["scroll-pr", "scroll-padding-right"],
      ["scroll-pb", "scroll-padding-bottom"],
      ["scroll-pl", "scroll-padding-left"],
    ])
      a(i, ["--scroll-padding", "--spacing"], (h) => [l(c, h)]);
    e("list-inside", [["list-style-position", "inside"]]),
      e("list-outside", [["list-style-position", "outside"]]),
      e("list-none", [["list-style-type", "none"]]),
      e("list-disc", [["list-style-type", "disc"]]),
      e("list-decimal", [["list-style-type", "decimal"]]),
      n("list", {
        themeKeys: ["--list-style-type"],
        handle: (i) => [l("list-style-type", i)],
      }),
      e("list-image-none", [["list-style-image", "none"]]),
      n("list-image", {
        themeKeys: ["--list-style-image"],
        handle: (i) => [l("list-style-image", i)],
      }),
      e("appearance-none", [["appearance", "none"]]),
      e("appearance-auto", [["appearance", "auto"]]),
      e("scheme-normal", [["color-scheme", "normal"]]),
      e("scheme-dark", [["color-scheme", "dark"]]),
      e("scheme-light", [["color-scheme", "light"]]),
      e("scheme-light-dark", [["color-scheme", "light dark"]]),
      e("scheme-only-dark", [["color-scheme", "only dark"]]),
      e("scheme-only-light", [["color-scheme", "only light"]]),
      e("columns-auto", [["columns", "auto"]]),
      n("columns", {
        themeKeys: ["--columns", "--container"],
        handleBareValue: ({ value: i }) => ($(i) ? i : null),
        handle: (i) => [l("columns", i)],
      }),
      o("columns", () => [
        {
          values: Array.from({ length: 12 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--columns", "--container"],
        },
      ]);
    for (let i of [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ])
      e(`break-before-${i}`, [["break-before", i]]);
    for (let i of ["auto", "avoid", "avoid-page", "avoid-column"])
      e(`break-inside-${i}`, [["break-inside", i]]);
    for (let i of [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ])
      e(`break-after-${i}`, [["break-after", i]]);
    e("grid-flow-row", [["grid-auto-flow", "row"]]),
      e("grid-flow-col", [["grid-auto-flow", "column"]]),
      e("grid-flow-dense", [["grid-auto-flow", "dense"]]),
      e("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]),
      e("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]),
      e("auto-cols-auto", [["grid-auto-columns", "auto"]]),
      e("auto-cols-min", [["grid-auto-columns", "min-content"]]),
      e("auto-cols-max", [["grid-auto-columns", "max-content"]]),
      e("auto-cols-fr", [["grid-auto-columns", "minmax(0, 1fr)"]]),
      n("auto-cols", {
        themeKeys: ["--grid-auto-columns"],
        handle: (i) => [l("grid-auto-columns", i)],
      }),
      e("auto-rows-auto", [["grid-auto-rows", "auto"]]),
      e("auto-rows-min", [["grid-auto-rows", "min-content"]]),
      e("auto-rows-max", [["grid-auto-rows", "max-content"]]),
      e("auto-rows-fr", [["grid-auto-rows", "minmax(0, 1fr)"]]),
      n("auto-rows", {
        themeKeys: ["--grid-auto-rows"],
        handle: (i) => [l("grid-auto-rows", i)],
      }),
      e("grid-cols-none", [["grid-template-columns", "none"]]),
      e("grid-cols-subgrid", [["grid-template-columns", "subgrid"]]),
      n("grid-cols", {
        themeKeys: ["--grid-template-columns"],
        handleBareValue: ({ value: i }) =>
          ft(i) ? `repeat(${i}, minmax(0, 1fr))` : null,
        handle: (i) => [l("grid-template-columns", i)],
      }),
      e("grid-rows-none", [["grid-template-rows", "none"]]),
      e("grid-rows-subgrid", [["grid-template-rows", "subgrid"]]),
      n("grid-rows", {
        themeKeys: ["--grid-template-rows"],
        handleBareValue: ({ value: i }) =>
          ft(i) ? `repeat(${i}, minmax(0, 1fr))` : null,
        handle: (i) => [l("grid-template-rows", i)],
      }),
      o("grid-cols", () => [
        {
          values: Array.from({ length: 12 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--grid-template-columns"],
        },
      ]),
      o("grid-rows", () => [
        {
          values: Array.from({ length: 12 }, (i, c) => `${c + 1}`),
          valueThemeKeys: ["--grid-template-rows"],
        },
      ]),
      e("flex-row", [["flex-direction", "row"]]),
      e("flex-row-reverse", [["flex-direction", "row-reverse"]]),
      e("flex-col", [["flex-direction", "column"]]),
      e("flex-col-reverse", [["flex-direction", "column-reverse"]]),
      e("flex-wrap", [["flex-wrap", "wrap"]]),
      e("flex-nowrap", [["flex-wrap", "nowrap"]]),
      e("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]),
      e("place-content-center", [["place-content", "center"]]),
      e("place-content-start", [["place-content", "start"]]),
      e("place-content-end", [["place-content", "end"]]),
      e("place-content-between", [["place-content", "space-between"]]),
      e("place-content-around", [["place-content", "space-around"]]),
      e("place-content-evenly", [["place-content", "space-evenly"]]),
      e("place-content-baseline", [["place-content", "baseline"]]),
      e("place-content-stretch", [["place-content", "stretch"]]),
      e("place-items-center", [["place-items", "center"]]),
      e("place-items-start", [["place-items", "start"]]),
      e("place-items-end", [["place-items", "end"]]),
      e("place-items-baseline", [["place-items", "baseline"]]),
      e("place-items-stretch", [["place-items", "stretch"]]),
      e("content-normal", [["align-content", "normal"]]),
      e("content-center", [["align-content", "center"]]),
      e("content-start", [["align-content", "flex-start"]]),
      e("content-end", [["align-content", "flex-end"]]),
      e("content-between", [["align-content", "space-between"]]),
      e("content-around", [["align-content", "space-around"]]),
      e("content-evenly", [["align-content", "space-evenly"]]),
      e("content-baseline", [["align-content", "baseline"]]),
      e("content-stretch", [["align-content", "stretch"]]),
      e("items-center", [["align-items", "center"]]),
      e("items-start", [["align-items", "flex-start"]]),
      e("items-end", [["align-items", "flex-end"]]),
      e("items-baseline", [["align-items", "baseline"]]),
      e("items-stretch", [["align-items", "stretch"]]),
      e("justify-normal", [["justify-content", "normal"]]),
      e("justify-center", [["justify-content", "center"]]),
      e("justify-start", [["justify-content", "flex-start"]]),
      e("justify-end", [["justify-content", "flex-end"]]),
      e("justify-between", [["justify-content", "space-between"]]),
      e("justify-around", [["justify-content", "space-around"]]),
      e("justify-evenly", [["justify-content", "space-evenly"]]),
      e("justify-baseline", [["justify-content", "baseline"]]),
      e("justify-stretch", [["justify-content", "stretch"]]),
      e("justify-items-normal", [["justify-items", "normal"]]),
      e("justify-items-center", [["justify-items", "center"]]),
      e("justify-items-start", [["justify-items", "start"]]),
      e("justify-items-end", [["justify-items", "end"]]),
      e("justify-items-stretch", [["justify-items", "stretch"]]),
      a("gap", ["--gap", "--spacing"], (i) => [l("gap", i)]),
      a("gap-x", ["--gap", "--spacing"], (i) => [l("column-gap", i)]),
      a("gap-y", ["--gap", "--spacing"], (i) => [l("row-gap", i)]),
      a(
        "space-x",
        ["--space", "--spacing"],
        (i) => [
          D([S("--tw-space-x-reverse", "0")]),
          U(":where(& > :not(:last-child))", [
            l("--tw-sort", "row-gap"),
            l("--tw-space-x-reverse", "0"),
            l("margin-inline-start", `calc(${i} * var(--tw-space-x-reverse))`),
            l(
              "margin-inline-end",
              `calc(${i} * calc(1 - var(--tw-space-x-reverse)))`
            ),
          ]),
        ],
        { supportsNegative: !0 }
      ),
      a(
        "space-y",
        ["--space", "--spacing"],
        (i) => [
          D([S("--tw-space-y-reverse", "0")]),
          U(":where(& > :not(:last-child))", [
            l("--tw-sort", "column-gap"),
            l("--tw-space-y-reverse", "0"),
            l("margin-block-start", `calc(${i} * var(--tw-space-y-reverse))`),
            l(
              "margin-block-end",
              `calc(${i} * calc(1 - var(--tw-space-y-reverse)))`
            ),
          ]),
        ],
        { supportsNegative: !0 }
      ),
      e("space-x-reverse", [
        () => D([S("--tw-space-x-reverse", "0")]),
        () =>
          U(":where(& > :not(:last-child))", [
            l("--tw-sort", "row-gap"),
            l("--tw-space-x-reverse", "1"),
          ]),
      ]),
      e("space-y-reverse", [
        () => D([S("--tw-space-y-reverse", "0")]),
        () =>
          U(":where(& > :not(:last-child))", [
            l("--tw-sort", "column-gap"),
            l("--tw-space-y-reverse", "1"),
          ]),
      ]),
      e("accent-auto", [["accent-color", "auto"]]),
      u("accent", {
        themeKeys: ["--accent-color", "--color"],
        handle: (i) => [l("accent-color", i)],
      }),
      u("caret", {
        themeKeys: ["--caret-color", "--color"],
        handle: (i) => [l("caret-color", i)],
      }),
      u("divide", {
        themeKeys: ["--divide-color", "--color"],
        handle: (i) => [
          U(":where(& > :not(:last-child))", [
            l("--tw-sort", "divide-color"),
            l("border-color", i),
          ]),
        ],
      }),
      e("place-self-auto", [["place-self", "auto"]]),
      e("place-self-start", [["place-self", "start"]]),
      e("place-self-end", [["place-self", "end"]]),
      e("place-self-center", [["place-self", "center"]]),
      e("place-self-stretch", [["place-self", "stretch"]]),
      e("self-auto", [["align-self", "auto"]]),
      e("self-start", [["align-self", "flex-start"]]),
      e("self-end", [["align-self", "flex-end"]]),
      e("self-center", [["align-self", "center"]]),
      e("self-stretch", [["align-self", "stretch"]]),
      e("self-baseline", [["align-self", "baseline"]]),
      e("justify-self-auto", [["justify-self", "auto"]]),
      e("justify-self-start", [["justify-self", "flex-start"]]),
      e("justify-self-end", [["justify-self", "flex-end"]]),
      e("justify-self-center", [["justify-self", "center"]]),
      e("justify-self-stretch", [["justify-self", "stretch"]]);
    for (let i of ["auto", "hidden", "clip", "visible", "scroll"])
      e(`overflow-${i}`, [["overflow", i]]),
        e(`overflow-x-${i}`, [["overflow-x", i]]),
        e(`overflow-y-${i}`, [["overflow-y", i]]);
    for (let i of ["auto", "contain", "none"])
      e(`overscroll-${i}`, [["overscroll-behavior", i]]),
        e(`overscroll-x-${i}`, [["overscroll-behavior-x", i]]),
        e(`overscroll-y-${i}`, [["overscroll-behavior-y", i]]);
    e("scroll-auto", [["scroll-behavior", "auto"]]),
      e("scroll-smooth", [["scroll-behavior", "smooth"]]),
      e("truncate", [
        ["overflow", "hidden"],
        ["text-overflow", "ellipsis"],
        ["white-space", "nowrap"],
      ]),
      e("text-ellipsis", [["text-overflow", "ellipsis"]]),
      e("text-clip", [["text-overflow", "clip"]]),
      e("hyphens-none", [
        ["-webkit-hyphens", "none"],
        ["hyphens", "none"],
      ]),
      e("hyphens-manual", [
        ["-webkit-hyphens", "manual"],
        ["hyphens", "manual"],
      ]),
      e("hyphens-auto", [
        ["-webkit-hyphens", "auto"],
        ["hyphens", "auto"],
      ]),
      e("whitespace-normal", [["white-space", "normal"]]),
      e("whitespace-nowrap", [["white-space", "nowrap"]]),
      e("whitespace-pre", [["white-space", "pre"]]),
      e("whitespace-pre-line", [["white-space", "pre-line"]]),
      e("whitespace-pre-wrap", [["white-space", "pre-wrap"]]),
      e("whitespace-break-spaces", [["white-space", "break-spaces"]]),
      e("text-wrap", [["text-wrap", "wrap"]]),
      e("text-nowrap", [["text-wrap", "nowrap"]]),
      e("text-balance", [["text-wrap", "balance"]]),
      e("text-pretty", [["text-wrap", "pretty"]]),
      e("break-normal", [
        ["overflow-wrap", "normal"],
        ["word-break", "normal"],
      ]),
      e("break-words", [["overflow-wrap", "break-word"]]),
      e("break-all", [["word-break", "break-all"]]),
      e("break-keep", [["word-break", "keep-all"]]);
    for (let [i, c] of [
      ["rounded", ["border-radius"]],
      ["rounded-s", ["border-start-start-radius", "border-end-start-radius"]],
      ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]],
      ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]],
      ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]],
      [
        "rounded-b",
        ["border-bottom-right-radius", "border-bottom-left-radius"],
      ],
      ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]],
      ["rounded-ss", ["border-start-start-radius"]],
      ["rounded-se", ["border-start-end-radius"]],
      ["rounded-ee", ["border-end-end-radius"]],
      ["rounded-es", ["border-end-start-radius"]],
      ["rounded-tl", ["border-top-left-radius"]],
      ["rounded-tr", ["border-top-right-radius"]],
      ["rounded-br", ["border-bottom-right-radius"]],
      ["rounded-bl", ["border-bottom-left-radius"]],
    ])
      e(
        `${i}-none`,
        c.map((h) => [h, "0"])
      ),
        e(
          `${i}-full`,
          c.map((h) => [h, "calc(infinity * 1px)"])
        ),
        n(i, { themeKeys: ["--radius"], handle: (h) => c.map((w) => l(w, h)) });
    e("border-solid", [
      ["--tw-border-style", "solid"],
      ["border-style", "solid"],
    ]),
      e("border-dashed", [
        ["--tw-border-style", "dashed"],
        ["border-style", "dashed"],
      ]),
      e("border-dotted", [
        ["--tw-border-style", "dotted"],
        ["border-style", "dotted"],
      ]),
      e("border-double", [
        ["--tw-border-style", "double"],
        ["border-style", "double"],
      ]),
      e("border-hidden", [
        ["--tw-border-style", "hidden"],
        ["border-style", "hidden"],
      ]),
      e("border-none", [
        ["--tw-border-style", "none"],
        ["border-style", "none"],
      ]);
    {
      let c = function (h, w) {
        r.functional(h, (k) => {
          if (!k.value) {
            if (k.modifier) return;
            let N = t.get(["--default-border-width"]) ?? "1px",
              R = w.width(N);
            return R ? [i(), ...R] : void 0;
          }
          if (k.value.kind === "arbitrary") {
            let N = k.value.value;
            switch (
              k.value.dataType ??
              F(N, ["color", "line-width", "length"])
            ) {
              case "line-width":
              case "length": {
                if (k.modifier) return;
                let C = w.width(N);
                return C ? [i(), ...C] : void 0;
              }
              default:
                return (
                  (N = W(N, k.modifier, t)), N === null ? void 0 : w.color(N)
                );
            }
          }
          {
            let N = G(k, t, ["--border-color", "--color"]);
            if (N) return w.color(N);
          }
          {
            if (k.modifier) return;
            let N = t.resolve(k.value.value, ["--border-width"]);
            if (N) {
              let R = w.width(N);
              return R ? [i(), ...R] : void 0;
            }
            if ($(k.value.value)) {
              let R = w.width(`${k.value.value}px`);
              return R ? [i(), ...R] : void 0;
            }
          }
        }),
          o(h, () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--border-color", "--color"],
              modifiers: Array.from({ length: 21 }, (k, N) => `${N * 5}`),
              hasDefaultValue: !0,
            },
            {
              values: ["0", "2", "4", "8"],
              valueThemeKeys: ["--border-width"],
            },
          ]);
      };
      var x = c;
      let i = () => D([S("--tw-border-style", "solid")]);
      c("border", {
        width: (h) => [
          l("border-style", "var(--tw-border-style)"),
          l("border-width", h),
        ],
        color: (h) => [l("border-color", h)],
      }),
        c("border-x", {
          width: (h) => [
            l("border-inline-style", "var(--tw-border-style)"),
            l("border-inline-width", h),
          ],
          color: (h) => [l("border-inline-color", h)],
        }),
        c("border-y", {
          width: (h) => [
            l("border-block-style", "var(--tw-border-style)"),
            l("border-block-width", h),
          ],
          color: (h) => [l("border-block-color", h)],
        }),
        c("border-s", {
          width: (h) => [
            l("border-inline-start-style", "var(--tw-border-style)"),
            l("border-inline-start-width", h),
          ],
          color: (h) => [l("border-inline-start-color", h)],
        }),
        c("border-e", {
          width: (h) => [
            l("border-inline-end-style", "var(--tw-border-style)"),
            l("border-inline-end-width", h),
          ],
          color: (h) => [l("border-inline-end-color", h)],
        }),
        c("border-t", {
          width: (h) => [
            l("border-top-style", "var(--tw-border-style)"),
            l("border-top-width", h),
          ],
          color: (h) => [l("border-top-color", h)],
        }),
        c("border-r", {
          width: (h) => [
            l("border-right-style", "var(--tw-border-style)"),
            l("border-right-width", h),
          ],
          color: (h) => [l("border-right-color", h)],
        }),
        c("border-b", {
          width: (h) => [
            l("border-bottom-style", "var(--tw-border-style)"),
            l("border-bottom-width", h),
          ],
          color: (h) => [l("border-bottom-color", h)],
        }),
        c("border-l", {
          width: (h) => [
            l("border-left-style", "var(--tw-border-style)"),
            l("border-left-width", h),
          ],
          color: (h) => [l("border-left-color", h)],
        }),
        n("divide-x", {
          defaultValue: t.get(["--default-border-width"]) ?? "1px",
          themeKeys: ["--divide-width", "--border-width"],
          handleBareValue: ({ value: h }) => ($(h) ? `${h}px` : null),
          handle: (h) => [
            D([S("--tw-divide-x-reverse", "0")]),
            U(":where(& > :not(:last-child))", [
              l("--tw-sort", "divide-x-width"),
              i(),
              l("--tw-divide-x-reverse", "0"),
              l("border-inline-style", "var(--tw-border-style)"),
              l(
                "border-inline-start-width",
                `calc(${h} * var(--tw-divide-x-reverse))`
              ),
              l(
                "border-inline-end-width",
                `calc(${h} * calc(1 - var(--tw-divide-x-reverse)))`
              ),
            ]),
          ],
        }),
        n("divide-y", {
          defaultValue: t.get(["--default-border-width"]) ?? "1px",
          themeKeys: ["--divide-width", "--border-width"],
          handleBareValue: ({ value: h }) => ($(h) ? `${h}px` : null),
          handle: (h) => [
            D([S("--tw-divide-y-reverse", "0")]),
            U(":where(& > :not(:last-child))", [
              l("--tw-sort", "divide-y-width"),
              i(),
              l("--tw-divide-y-reverse", "0"),
              l("border-bottom-style", "var(--tw-border-style)"),
              l("border-top-style", "var(--tw-border-style)"),
              l("border-top-width", `calc(${h} * var(--tw-divide-y-reverse))`),
              l(
                "border-bottom-width",
                `calc(${h} * calc(1 - var(--tw-divide-y-reverse)))`
              ),
            ]),
          ],
        }),
        o("divide-x", () => [
          {
            values: ["0", "2", "4", "8"],
            valueThemeKeys: ["--divide-width", "--border-width"],
            hasDefaultValue: !0,
          },
        ]),
        o("divide-y", () => [
          {
            values: ["0", "2", "4", "8"],
            valueThemeKeys: ["--divide-width", "--border-width"],
            hasDefaultValue: !0,
          },
        ]),
        e("divide-x-reverse", [
          () => D([S("--tw-divide-x-reverse", "0")]),
          () =>
            U(":where(& > :not(:last-child))", [
              l("--tw-divide-x-reverse", "1"),
            ]),
        ]),
        e("divide-y-reverse", [
          () => D([S("--tw-divide-y-reverse", "0")]),
          () =>
            U(":where(& > :not(:last-child))", [
              l("--tw-divide-y-reverse", "1"),
            ]),
        ]);
      for (let h of ["solid", "dashed", "dotted", "double", "none"])
        e(`divide-${h}`, [
          () =>
            U(":where(& > :not(:last-child))", [
              l("--tw-sort", "divide-style"),
              l("--tw-border-style", h),
              l("border-style", h),
            ]),
        ]);
    }
    e("bg-auto", [["background-size", "auto"]]),
      e("bg-cover", [["background-size", "cover"]]),
      e("bg-contain", [["background-size", "contain"]]),
      e("bg-fixed", [["background-attachment", "fixed"]]),
      e("bg-local", [["background-attachment", "local"]]),
      e("bg-scroll", [["background-attachment", "scroll"]]),
      e("bg-center", [["background-position", "center"]]),
      e("bg-top", [["background-position", "top"]]),
      e("bg-right-top", [["background-position", "right top"]]),
      e("bg-right", [["background-position", "right"]]),
      e("bg-right-bottom", [["background-position", "right bottom"]]),
      e("bg-bottom", [["background-position", "bottom"]]),
      e("bg-left-bottom", [["background-position", "left bottom"]]),
      e("bg-left", [["background-position", "left"]]),
      e("bg-left-top", [["background-position", "left top"]]),
      e("bg-repeat", [["background-repeat", "repeat"]]),
      e("bg-no-repeat", [["background-repeat", "no-repeat"]]),
      e("bg-repeat-x", [["background-repeat", "repeat-x"]]),
      e("bg-repeat-y", [["background-repeat", "repeat-y"]]),
      e("bg-repeat-round", [["background-repeat", "round"]]),
      e("bg-repeat-space", [["background-repeat", "space"]]),
      e("bg-none", [["background-image", "none"]]);
    {
      let h = function (N) {
          let R = "in oklab";
          if (N?.kind === "named")
            switch (N.value) {
              case "longer":
              case "shorter":
              case "increasing":
              case "decreasing":
                R = `in oklch ${N.value} hue`;
                break;
              default:
                R = `in ${N.value}`;
            }
          else N?.kind === "arbitrary" && (R = N.value);
          return R;
        },
        w = function ({ negative: N }) {
          return (R) => {
            if (!R.value) return;
            if (R.value.kind === "arbitrary") {
              if (R.modifier) return;
              let j = R.value.value;
              switch (R.value.dataType ?? F(j, ["angle"])) {
                case "angle":
                  return (
                    (j = N ? `calc(${j} * -1)` : `${j}`),
                    [
                      l("--tw-gradient-position", j),
                      l(
                        "background-image",
                        `linear-gradient(var(--tw-gradient-stops,${j}))`
                      ),
                    ]
                  );
                default:
                  return N
                    ? void 0
                    : [
                        l("--tw-gradient-position", j),
                        l(
                          "background-image",
                          `linear-gradient(var(--tw-gradient-stops,${j}))`
                        ),
                      ];
              }
            }
            let C = R.value.value;
            if (!N && c.has(C)) C = c.get(C);
            else if ($(C)) C = N ? `calc(${C}deg * -1)` : `${C}deg`;
            else return;
            let A = h(R.modifier);
            return [
              l("--tw-gradient-position", `${C} ${A}`),
              l(
                "background-image",
                "linear-gradient(var(--tw-gradient-stops))"
              ),
            ];
          };
        },
        k = function ({ negative: N }) {
          return (R) => {
            if (R.value?.kind === "arbitrary") {
              if (R.modifier) return;
              let j = R.value.value;
              return [
                l("--tw-gradient-position", j),
                l(
                  "background-image",
                  `conic-gradient(var(--tw-gradient-stops,${j}))`
                ),
              ];
            }
            let C = h(R.modifier);
            if (!R.value)
              return [
                l("--tw-gradient-position", C),
                l(
                  "background-image",
                  "conic-gradient(var(--tw-gradient-stops))"
                ),
              ];
            let A = R.value.value;
            if ($(A))
              return (
                (A = N ? `calc(${A} * -1)` : `${A}deg`),
                [
                  l("--tw-gradient-position", `from ${A} ${C}`),
                  l(
                    "background-image",
                    "conic-gradient(var(--tw-gradient-stops))"
                  ),
                ]
              );
          };
        };
      var T = h,
        V = w,
        O = k;
      let i = [
          "oklab",
          "oklch",
          "srgb",
          "hsl",
          "longer",
          "shorter",
          "increasing",
          "decreasing",
        ],
        c = new Map([
          ["to-t", "to top"],
          ["to-tr", "to top right"],
          ["to-r", "to right"],
          ["to-br", "to bottom right"],
          ["to-b", "to bottom"],
          ["to-bl", "to bottom left"],
          ["to-l", "to left"],
          ["to-tl", "to top left"],
        ]);
      r.functional("-bg-linear", w({ negative: !0 })),
        r.functional("bg-linear", w({ negative: !1 })),
        o("bg-linear", () => [
          { values: [...c.keys()], modifiers: i },
          {
            values: [
              "0",
              "30",
              "60",
              "90",
              "120",
              "150",
              "180",
              "210",
              "240",
              "270",
              "300",
              "330",
            ],
            supportsNegative: !0,
            modifiers: i,
          },
        ]),
        r.functional("-bg-conic", k({ negative: !0 })),
        r.functional("bg-conic", k({ negative: !1 })),
        o("bg-conic", () => [
          { hasDefaultValue: !0, modifiers: i },
          {
            values: [
              "0",
              "30",
              "60",
              "90",
              "120",
              "150",
              "180",
              "210",
              "240",
              "270",
              "300",
              "330",
            ],
            supportsNegative: !0,
            modifiers: i,
          },
        ]),
        r.functional("bg-radial", (N) => {
          if (!N.value) {
            let R = h(N.modifier);
            return [
              l("--tw-gradient-position", R),
              l(
                "background-image",
                "radial-gradient(var(--tw-gradient-stops))"
              ),
            ];
          }
          if (N.value.kind === "arbitrary") {
            if (N.modifier) return;
            let R = N.value.value;
            return [
              l("--tw-gradient-position", R),
              l(
                "background-image",
                `radial-gradient(var(--tw-gradient-stops,${R}))`
              ),
            ];
          }
        }),
        o("bg-radial", () => [{ hasDefaultValue: !0, modifiers: i }]);
    }
    r.functional("bg", (i) => {
      if (i.value) {
        if (i.value.kind === "arbitrary") {
          let c = i.value.value;
          switch (
            i.value.dataType ??
            F(c, [
              "image",
              "color",
              "percentage",
              "position",
              "bg-size",
              "length",
              "url",
            ])
          ) {
            case "percentage":
            case "position":
              return i.modifier ? void 0 : [l("background-position", c)];
            case "bg-size":
            case "length":
            case "size":
              return i.modifier ? void 0 : [l("background-size", c)];
            case "image":
            case "url":
              return i.modifier ? void 0 : [l("background-image", c)];
            default:
              return (
                (c = W(c, i.modifier, t)),
                c === null ? void 0 : [l("background-color", c)]
              );
          }
        }
        {
          let c = G(i, t, ["--background-color", "--color"]);
          if (c) return [l("background-color", c)];
        }
        {
          if (i.modifier) return;
          let c = t.resolve(i.value.value, ["--background-image"]);
          if (c) return [l("background-image", c)];
        }
      }
    }),
      o("bg", () => [
        {
          values: ["current", "inherit", "transparent"],
          valueThemeKeys: ["--background-color", "--color"],
          modifiers: Array.from({ length: 21 }, (i, c) => `${c * 5}`),
        },
        { values: [], valueThemeKeys: ["--background-image"] },
      ]);
    let v = () =>
      D([
        S("--tw-gradient-position"),
        S("--tw-gradient-from", "#0000", "<color>"),
        S("--tw-gradient-via", "#0000", "<color>"),
        S("--tw-gradient-to", "#0000", "<color>"),
        S("--tw-gradient-stops"),
        S("--tw-gradient-via-stops"),
        S("--tw-gradient-from-position", "0%", "<length-percentage>"),
        S("--tw-gradient-via-position", "50%", "<length-percentage>"),
        S("--tw-gradient-to-position", "100%", "<length-percentage>"),
      ]);
    function y(i, c) {
      r.functional(i, (h) => {
        if (h.value) {
          if (h.value.kind === "arbitrary") {
            let w = h.value.value;
            switch (
              h.value.dataType ??
              F(w, ["color", "length", "percentage"])
            ) {
              case "length":
              case "percentage":
                return h.modifier ? void 0 : c.position(w);
              default:
                return (
                  (w = W(w, h.modifier, t)), w === null ? void 0 : c.color(w)
                );
            }
          }
          {
            let w = G(h, t, ["--background-color", "--color"]);
            if (w) return c.color(w);
          }
          {
            if (h.modifier) return;
            let w = t.resolve(h.value.value, [
              "--gradient-color-stop-positions",
            ]);
            if (w) return c.position(w);
            if (
              h.value.value[h.value.value.length - 1] === "%" &&
              $(h.value.value.slice(0, -1))
            )
              return c.position(h.value.value);
          }
        }
      }),
        o(i, () => [
          {
            values: ["current", "inherit", "transparent"],
            valueThemeKeys: ["--background-color", "--color"],
            modifiers: Array.from({ length: 21 }, (h, w) => `${w * 5}`),
          },
          {
            values: Array.from({ length: 21 }, (h, w) => `${w * 5}%`),
            valueThemeKeys: ["--gradient-color-stop-positions"],
          },
        ]);
    }
    y("from", {
      color: (i) => [
        v(),
        l("--tw-sort", "--tw-gradient-from"),
        l("--tw-gradient-from", i),
        l(
          "--tw-gradient-stops",
          "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))"
        ),
      ],
      position: (i) => [v(), l("--tw-gradient-from-position", i)],
    }),
      e("via-none", [["--tw-gradient-via-stops", "initial"]]),
      y("via", {
        color: (i) => [
          v(),
          l("--tw-sort", "--tw-gradient-via"),
          l("--tw-gradient-via", i),
          l(
            "--tw-gradient-via-stops",
            "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"
          ),
          l("--tw-gradient-stops", "var(--tw-gradient-via-stops)"),
        ],
        position: (i) => [v(), l("--tw-gradient-via-position", i)],
      }),
      y("to", {
        color: (i) => [
          v(),
          l("--tw-sort", "--tw-gradient-to"),
          l("--tw-gradient-to", i),
          l(
            "--tw-gradient-stops",
            "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))"
          ),
        ],
        position: (i) => [v(), l("--tw-gradient-to-position", i)],
      }),
      e("box-decoration-slice", [
        ["-webkit-box-decoration-break", "slice"],
        ["box-decoration-break", "slice"],
      ]),
      e("box-decoration-clone", [
        ["-webkit-box-decoration-break", "clone"],
        ["box-decoration-break", "clone"],
      ]),
      e("bg-clip-text", [["background-clip", "text"]]),
      e("bg-clip-border", [["background-clip", "border-box"]]),
      e("bg-clip-padding", [["background-clip", "padding-box"]]),
      e("bg-clip-content", [["background-clip", "content-box"]]),
      e("bg-origin-border", [["background-origin", "border-box"]]),
      e("bg-origin-padding", [["background-origin", "padding-box"]]),
      e("bg-origin-content", [["background-origin", "content-box"]]);
    for (let i of [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ])
      e(`bg-blend-${i}`, [["background-blend-mode", i]]),
        e(`mix-blend-${i}`, [["mix-blend-mode", i]]);
    e("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]),
      e("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]),
      e("fill-none", [["fill", "none"]]),
      r.functional("fill", (i) => {
        if (!i.value) return;
        if (i.value.kind === "arbitrary") {
          let h = W(i.value.value, i.modifier, t);
          return h === null ? void 0 : [l("fill", h)];
        }
        let c = G(i, t, ["--fill", "--color"]);
        if (c) return [l("fill", c)];
      }),
      o("fill", () => [
        {
          values: ["current", "inherit", "transparent"],
          valueThemeKeys: ["--fill", "--color"],
          modifiers: Array.from({ length: 21 }, (i, c) => `${c * 5}`),
        },
      ]),
      e("stroke-none", [["stroke", "none"]]),
      r.functional("stroke", (i) => {
        if (i.value) {
          if (i.value.kind === "arbitrary") {
            let c = i.value.value;
            switch (
              i.value.dataType ??
              F(c, ["color", "number", "length", "percentage"])
            ) {
              case "number":
              case "length":
              case "percentage":
                return i.modifier ? void 0 : [l("stroke-width", c)];
              default:
                return (
                  (c = W(i.value.value, i.modifier, t)),
                  c === null ? void 0 : [l("stroke", c)]
                );
            }
          }
          {
            let c = G(i, t, ["--stroke", "--color"]);
            if (c) return [l("stroke", c)];
          }
          {
            let c = t.resolve(i.value.value, ["--stroke-width"]);
            if (c) return [l("stroke-width", c)];
            if ($(i.value.value)) return [l("stroke-width", i.value.value)];
          }
        }
      }),
      o("stroke", () => [
        {
          values: ["current", "inherit", "transparent"],
          valueThemeKeys: ["--stroke", "--color"],
          modifiers: Array.from({ length: 21 }, (i, c) => `${c * 5}`),
        },
        { values: ["0", "1", "2", "3"], valueThemeKeys: ["--stroke-width"] },
      ]),
      e("object-contain", [["object-fit", "contain"]]),
      e("object-cover", [["object-fit", "cover"]]),
      e("object-fill", [["object-fit", "fill"]]),
      e("object-none", [["object-fit", "none"]]),
      e("object-scale-down", [["object-fit", "scale-down"]]),
      e("object-bottom", [["object-position", "bottom"]]),
      e("object-center", [["object-position", "center"]]),
      e("object-left", [["object-position", "left"]]),
      e("object-left-bottom", [["object-position", "left bottom"]]),
      e("object-left-top", [["object-position", "left top"]]),
      e("object-right", [["object-position", "right"]]),
      e("object-right-bottom", [["object-position", "right bottom"]]),
      e("object-right-top", [["object-position", "right top"]]),
      e("object-top", [["object-position", "top"]]),
      n("object", {
        themeKeys: ["--object-position"],
        handle: (i) => [l("object-position", i)],
      });
    for (let [i, c] of [
      ["p", "padding"],
      ["px", "padding-inline"],
      ["py", "padding-block"],
      ["ps", "padding-inline-start"],
      ["pe", "padding-inline-end"],
      ["pt", "padding-top"],
      ["pr", "padding-right"],
      ["pb", "padding-bottom"],
      ["pl", "padding-left"],
    ])
      a(i, ["--padding", "--spacing"], (h) => [l(c, h)]);
    e("text-left", [["text-align", "left"]]),
      e("text-center", [["text-align", "center"]]),
      e("text-right", [["text-align", "right"]]),
      e("text-justify", [["text-align", "justify"]]),
      e("text-start", [["text-align", "start"]]),
      e("text-end", [["text-align", "end"]]),
      a(
        "indent",
        ["--text-indent", "--spacing"],
        (i) => [l("text-indent", i)],
        { supportsNegative: !0 }
      ),
      e("align-baseline", [["vertical-align", "baseline"]]),
      e("align-top", [["vertical-align", "top"]]),
      e("align-middle", [["vertical-align", "middle"]]),
      e("align-bottom", [["vertical-align", "bottom"]]),
      e("align-text-top", [["vertical-align", "text-top"]]),
      e("align-text-bottom", [["vertical-align", "text-bottom"]]),
      e("align-sub", [["vertical-align", "sub"]]),
      e("align-super", [["vertical-align", "super"]]),
      n("align", { themeKeys: [], handle: (i) => [l("vertical-align", i)] }),
      r.functional("font", (i) => {
        if (!(!i.value || i.modifier)) {
          if (i.value.kind === "arbitrary") {
            let c = i.value.value;
            switch (
              i.value.dataType ??
              F(c, ["number", "generic-name", "family-name"])
            ) {
              case "generic-name":
              case "family-name":
                return [l("font-family", c)];
              default:
                return [
                  D([S("--tw-font-weight")]),
                  l("--tw-font-weight", c),
                  l("font-weight", c),
                ];
            }
          }
          {
            let c = t.resolveWith(
              i.value.value,
              ["--font"],
              ["--font-feature-settings", "--font-variation-settings"]
            );
            if (c) {
              let [h, w = {}] = c;
              return [
                l("font-family", h),
                l("font-feature-settings", w["--font-feature-settings"]),
                l("font-variation-settings", w["--font-variation-settings"]),
              ];
            }
          }
          {
            let c = t.resolve(i.value.value, ["--font-weight"]);
            if (c)
              return [
                D([S("--tw-font-weight")]),
                l("--tw-font-weight", c),
                l("font-weight", c),
              ];
          }
        }
      }),
      o("font", () => [
        { values: [], valueThemeKeys: ["--font"] },
        { values: [], valueThemeKeys: ["--font-weight"] },
      ]),
      e("uppercase", [["text-transform", "uppercase"]]),
      e("lowercase", [["text-transform", "lowercase"]]),
      e("capitalize", [["text-transform", "capitalize"]]),
      e("normal-case", [["text-transform", "none"]]),
      e("italic", [["font-style", "italic"]]),
      e("not-italic", [["font-style", "normal"]]),
      e("underline", [["text-decoration-line", "underline"]]),
      e("overline", [["text-decoration-line", "overline"]]),
      e("line-through", [["text-decoration-line", "line-through"]]),
      e("no-underline", [["text-decoration-line", "none"]]),
      e("font-stretch-normal", [["font-stretch", "normal"]]),
      e("font-stretch-ultra-condensed", [["font-stretch", "ultra-condensed"]]),
      e("font-stretch-extra-condensed", [["font-stretch", "extra-condensed"]]),
      e("font-stretch-condensed", [["font-stretch", "condensed"]]),
      e("font-stretch-semi-condensed", [["font-stretch", "semi-condensed"]]),
      e("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]),
      e("font-stretch-expanded", [["font-stretch", "expanded"]]),
      e("font-stretch-extra-expanded", [["font-stretch", "extra-expanded"]]),
      e("font-stretch-ultra-expanded", [["font-stretch", "ultra-expanded"]]),
      n("font-stretch", {
        handleBareValue: ({ value: i }) => {
          if (!i.endsWith("%")) return null;
          let c = Number(i.slice(0, -1));
          return !$(c) || Number.isNaN(c) || c < 50 || c > 200 ? null : i;
        },
        handle: (i) => [l("font-stretch", i)],
      }),
      o("font-stretch", () => [
        {
          values: [
            "50%",
            "75%",
            "90%",
            "95%",
            "100%",
            "105%",
            "110%",
            "125%",
            "150%",
            "200%",
          ],
        },
      ]),
      u("placeholder", {
        themeKeys: ["--background-color", "--color"],
        handle: (i) => [
          U("&::placeholder", [
            l("--tw-sort", "placeholder-color"),
            l("color", i),
          ]),
        ],
      }),
      e("decoration-solid", [["text-decoration-style", "solid"]]),
      e("decoration-double", [["text-decoration-style", "double"]]),
      e("decoration-dotted", [["text-decoration-style", "dotted"]]),
      e("decoration-dashed", [["text-decoration-style", "dashed"]]),
      e("decoration-wavy", [["text-decoration-style", "wavy"]]),
      e("decoration-auto", [["text-decoration-thickness", "auto"]]),
      e("decoration-from-font", [["text-decoration-thickness", "from-font"]]),
      r.functional("decoration", (i) => {
        if (i.value) {
          if (i.value.kind === "arbitrary") {
            let c = i.value.value;
            switch (
              i.value.dataType ??
              F(c, ["color", "length", "percentage"])
            ) {
              case "length":
              case "percentage":
                return i.modifier
                  ? void 0
                  : [l("text-decoration-thickness", c)];
              default:
                return (
                  (c = W(c, i.modifier, t)),
                  c === null ? void 0 : [l("text-decoration-color", c)]
                );
            }
          }
          {
            let c = t.resolve(i.value.value, ["--text-decoration-thickness"]);
            if (c)
              return i.modifier ? void 0 : [l("text-decoration-thickness", c)];
            if ($(i.value.value))
              return i.modifier
                ? void 0
                : [l("text-decoration-thickness", `${i.value.value}px`)];
          }
          {
            let c = G(i, t, ["--text-decoration-color", "--color"]);
            if (c) return [l("text-decoration-color", c)];
          }
        }
      }),
      o("decoration", () => [
        {
          values: ["current", "inherit", "transparent"],
          valueThemeKeys: ["--text-decoration-color", "--color"],
          modifiers: Array.from({ length: 21 }, (i, c) => `${c * 5}`),
        },
        {
          values: ["0", "1", "2"],
          valueThemeKeys: ["--text-decoration-thickness"],
        },
      ]),
      e("animate-none", [["animation", "none"]]),
      n("animate", {
        themeKeys: ["--animate"],
        handle: (i) => [l("animation", i)],
      });
    {
      let i = [
          "var(--tw-blur,)",
          "var(--tw-brightness,)",
          "var(--tw-contrast,)",
          "var(--tw-grayscale,)",
          "var(--tw-hue-rotate,)",
          "var(--tw-invert,)",
          "var(--tw-saturate,)",
          "var(--tw-sepia,)",
          "var(--tw-drop-shadow,)",
        ].join(" "),
        c = [
          "var(--tw-backdrop-blur,)",
          "var(--tw-backdrop-brightness,)",
          "var(--tw-backdrop-contrast,)",
          "var(--tw-backdrop-grayscale,)",
          "var(--tw-backdrop-hue-rotate,)",
          "var(--tw-backdrop-invert,)",
          "var(--tw-backdrop-opacity,)",
          "var(--tw-backdrop-saturate,)",
          "var(--tw-backdrop-sepia,)",
        ].join(" "),
        h = () =>
          D([
            S("--tw-blur"),
            S("--tw-brightness"),
            S("--tw-contrast"),
            S("--tw-grayscale"),
            S("--tw-hue-rotate"),
            S("--tw-invert"),
            S("--tw-opacity"),
            S("--tw-saturate"),
            S("--tw-sepia"),
          ]),
        w = () =>
          D([
            S("--tw-backdrop-blur"),
            S("--tw-backdrop-brightness"),
            S("--tw-backdrop-contrast"),
            S("--tw-backdrop-grayscale"),
            S("--tw-backdrop-hue-rotate"),
            S("--tw-backdrop-invert"),
            S("--tw-backdrop-opacity"),
            S("--tw-backdrop-saturate"),
            S("--tw-backdrop-sepia"),
          ]);
      r.functional("filter", (k) => {
        if (!k.modifier) {
          if (k.value === null) return [h(), l("filter", i)];
          if (k.value.kind === "arbitrary") return [l("filter", k.value.value)];
          switch (k.value.value) {
            case "none":
              return [l("filter", "none")];
          }
        }
      }),
        r.functional("backdrop-filter", (k) => {
          if (!k.modifier) {
            if (k.value === null)
              return [
                w(),
                l("-webkit-backdrop-filter", c),
                l("backdrop-filter", c),
              ];
            if (k.value.kind === "arbitrary")
              return [
                l("-webkit-backdrop-filter", k.value.value),
                l("backdrop-filter", k.value.value),
              ];
            switch (k.value.value) {
              case "none":
                return [
                  l("-webkit-backdrop-filter", "none"),
                  l("backdrop-filter", "none"),
                ];
            }
          }
        }),
        n("blur", {
          themeKeys: ["--blur"],
          handle: (k) => [h(), l("--tw-blur", `blur(${k})`), l("filter", i)],
        }),
        e("blur-none", [h, ["--tw-blur", " "], ["filter", i]]),
        n("backdrop-blur", {
          themeKeys: ["--backdrop-blur", "--blur"],
          handle: (k) => [
            w(),
            l("--tw-backdrop-blur", `blur(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        e("backdrop-blur-none", [
          w,
          ["--tw-backdrop-blur", " "],
          ["-webkit-backdrop-filter", c],
          ["backdrop-filter", c],
        ]),
        n("brightness", {
          themeKeys: ["--brightness"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          handle: (k) => [
            h(),
            l("--tw-brightness", `brightness(${k})`),
            l("filter", i),
          ],
        }),
        n("backdrop-brightness", {
          themeKeys: ["--backdrop-brightness", "--brightness"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          handle: (k) => [
            w(),
            l("--tw-backdrop-brightness", `brightness(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("brightness", () => [
          {
            values: [
              "0",
              "50",
              "75",
              "90",
              "95",
              "100",
              "105",
              "110",
              "125",
              "150",
              "200",
            ],
            valueThemeKeys: ["--brightness"],
          },
        ]),
        o("backdrop-brightness", () => [
          {
            values: [
              "0",
              "50",
              "75",
              "90",
              "95",
              "100",
              "105",
              "110",
              "125",
              "150",
              "200",
            ],
            valueThemeKeys: ["--backdrop-brightness", "--brightness"],
          },
        ]),
        n("contrast", {
          themeKeys: ["--contrast"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          handle: (k) => [
            h(),
            l("--tw-contrast", `contrast(${k})`),
            l("filter", i),
          ],
        }),
        n("backdrop-contrast", {
          themeKeys: ["--backdrop-contrast", "--contrast"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          handle: (k) => [
            w(),
            l("--tw-backdrop-contrast", `contrast(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("contrast", () => [
          {
            values: ["0", "50", "75", "100", "125", "150", "200"],
            valueThemeKeys: ["--contrast"],
          },
        ]),
        o("backdrop-contrast", () => [
          {
            values: ["0", "50", "75", "100", "125", "150", "200"],
            valueThemeKeys: ["--backdrop-contrast", "--contrast"],
          },
        ]),
        n("grayscale", {
          themeKeys: ["--grayscale"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          defaultValue: "100%",
          handle: (k) => [
            h(),
            l("--tw-grayscale", `grayscale(${k})`),
            l("filter", i),
          ],
        }),
        n("backdrop-grayscale", {
          themeKeys: ["--backdrop-grayscale", "--grayscale"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          defaultValue: "100%",
          handle: (k) => [
            w(),
            l("--tw-backdrop-grayscale", `grayscale(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("grayscale", () => [
          {
            values: ["0", "25", "50", "75", "100"],
            valueThemeKeys: ["--grayscale"],
            hasDefaultValue: !0,
          },
        ]),
        o("backdrop-grayscale", () => [
          {
            values: ["0", "25", "50", "75", "100"],
            valueThemeKeys: ["--backdrop-grayscale", "--grayscale"],
            hasDefaultValue: !0,
          },
        ]),
        n("hue-rotate", {
          supportsNegative: !0,
          themeKeys: ["--hue-rotate"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}deg` : null),
          handle: (k) => [
            h(),
            l("--tw-hue-rotate", `hue-rotate(${k})`),
            l("filter", i),
          ],
        }),
        n("backdrop-hue-rotate", {
          supportsNegative: !0,
          themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}deg` : null),
          handle: (k) => [
            w(),
            l("--tw-backdrop-hue-rotate", `hue-rotate(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("hue-rotate", () => [
          {
            values: ["0", "15", "30", "60", "90", "180"],
            valueThemeKeys: ["--hue-rotate"],
          },
        ]),
        o("backdrop-hue-rotate", () => [
          {
            values: ["0", "15", "30", "60", "90", "180"],
            valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"],
          },
        ]),
        n("invert", {
          themeKeys: ["--invert"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          defaultValue: "100%",
          handle: (k) => [
            h(),
            l("--tw-invert", `invert(${k})`),
            l("filter", i),
          ],
        }),
        n("backdrop-invert", {
          themeKeys: ["--backdrop-invert", "--invert"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          defaultValue: "100%",
          handle: (k) => [
            w(),
            l("--tw-backdrop-invert", `invert(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("invert", () => [
          {
            values: ["0", "25", "50", "75", "100"],
            valueThemeKeys: ["--invert"],
            hasDefaultValue: !0,
          },
        ]),
        o("backdrop-invert", () => [
          {
            values: ["0", "25", "50", "75", "100"],
            valueThemeKeys: ["--backdrop-invert", "--invert"],
            hasDefaultValue: !0,
          },
        ]),
        n("saturate", {
          themeKeys: ["--saturate"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          handle: (k) => [
            h(),
            l("--tw-saturate", `saturate(${k})`),
            l("filter", i),
          ],
        }),
        n("backdrop-saturate", {
          themeKeys: ["--backdrop-saturate", "--saturate"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          handle: (k) => [
            w(),
            l("--tw-backdrop-saturate", `saturate(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("saturate", () => [
          {
            values: ["0", "50", "100", "150", "200"],
            valueThemeKeys: ["--saturate"],
          },
        ]),
        o("backdrop-saturate", () => [
          {
            values: ["0", "50", "100", "150", "200"],
            valueThemeKeys: ["--backdrop-saturate", "--saturate"],
          },
        ]),
        n("sepia", {
          themeKeys: ["--sepia"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          defaultValue: "100%",
          handle: (k) => [h(), l("--tw-sepia", `sepia(${k})`), l("filter", i)],
        }),
        n("backdrop-sepia", {
          themeKeys: ["--backdrop-sepia", "--sepia"],
          handleBareValue: ({ value: k }) => ($(k) ? `${k}%` : null),
          defaultValue: "100%",
          handle: (k) => [
            w(),
            l("--tw-backdrop-sepia", `sepia(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("sepia", () => [
          {
            values: ["0", "50", "100"],
            valueThemeKeys: ["--sepia"],
            hasDefaultValue: !0,
          },
        ]),
        o("backdrop-sepia", () => [
          {
            values: ["0", "50", "100"],
            valueThemeKeys: ["--backdrop-sepia", "--sepia"],
            hasDefaultValue: !0,
          },
        ]),
        e("drop-shadow-none", [h, ["--tw-drop-shadow", " "], ["filter", i]]),
        n("drop-shadow", {
          themeKeys: ["--drop-shadow"],
          handle: (k) => [
            h(),
            l(
              "--tw-drop-shadow",
              P(k, ",")
                .map((N) => `drop-shadow(${N})`)
                .join(" ")
            ),
            l("filter", i),
          ],
        }),
        n("backdrop-opacity", {
          themeKeys: ["--backdrop-opacity", "--opacity"],
          handleBareValue: ({ value: k }) => (Ie(k) ? `${k}%` : null),
          handle: (k) => [
            w(),
            l("--tw-backdrop-opacity", `opacity(${k})`),
            l("-webkit-backdrop-filter", c),
            l("backdrop-filter", c),
          ],
        }),
        o("backdrop-opacity", () => [
          {
            values: Array.from({ length: 21 }, (k, N) => `${N * 5}`),
            valueThemeKeys: ["--backdrop-opacity", "--opacity"],
          },
        ]);
    }
    {
      let i = `var(--tw-ease, ${
          t.resolve(null, ["--default-transition-timing-function"]) ?? "ease"
        })`,
        c = `var(--tw-duration, ${
          t.resolve(null, ["--default-transition-duration"]) ?? "0s"
        })`;
      e("transition-none", [["transition-property", "none"]]),
        e("transition-all", [
          ["transition-property", "all"],
          ["transition-timing-function", i],
          ["transition-duration", c],
        ]),
        e("transition-colors", [
          [
            "transition-property",
            "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
          ],
          ["transition-timing-function", i],
          ["transition-duration", c],
        ]),
        e("transition-opacity", [
          ["transition-property", "opacity"],
          ["transition-timing-function", i],
          ["transition-duration", c],
        ]),
        e("transition-shadow", [
          ["transition-property", "box-shadow"],
          ["transition-timing-function", i],
          ["transition-duration", c],
        ]),
        e("transition-transform", [
          ["transition-property", "transform, translate, scale, rotate"],
          ["transition-timing-function", i],
          ["transition-duration", c],
        ]),
        n("transition", {
          defaultValue:
            "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter",
          themeKeys: ["--transition-property"],
          handle: (h) => [
            l("transition-property", h),
            l("transition-timing-function", i),
            l("transition-duration", c),
          ],
        }),
        e("transition-discrete", [["transition-behavior", "allow-discrete"]]),
        e("transition-normal", [["transition-behavior", "normal"]]),
        n("delay", {
          handleBareValue: ({ value: h }) => ($(h) ? `${h}ms` : null),
          themeKeys: ["--transition-delay"],
          handle: (h) => [l("transition-delay", h)],
        });
      {
        let h = () => D([S("--tw-duration")]);
        e("duration-initial", [h, ["--tw-duration", "initial"]]),
          r.functional("duration", (w) => {
            if (w.modifier || !w.value) return;
            let k = null;
            if (
              (w.value.kind === "arbitrary"
                ? (k = w.value.value)
                : ((k = t.resolve(w.value.fraction ?? w.value.value, [
                    "--transition-duration",
                  ])),
                  k === null && $(w.value.value) && (k = `${w.value.value}ms`)),
              k !== null)
            )
              return [h(), l("--tw-duration", k), l("transition-duration", k)];
          });
      }
      o("delay", () => [
        {
          values: ["75", "100", "150", "200", "300", "500", "700", "1000"],
          valueThemeKeys: ["--transition-delay"],
        },
      ]),
        o("duration", () => [
          {
            values: ["75", "100", "150", "200", "300", "500", "700", "1000"],
            valueThemeKeys: ["--transition-duration"],
          },
        ]);
    }
    {
      let i = () => D([S("--tw-ease")]);
      e("ease-initial", [i, ["--tw-ease", "initial"]]),
        e("ease-linear", [
          i,
          ["--tw-ease", "linear"],
          ["transition-timing-function", "linear"],
        ]),
        n("ease", {
          themeKeys: ["--ease"],
          handle: (c) => [
            i(),
            l("--tw-ease", c),
            l("transition-timing-function", c),
          ],
        });
    }
    e("will-change-auto", [["will-change", "auto"]]),
      e("will-change-scroll", [["will-change", "scroll-position"]]),
      e("will-change-contents", [["will-change", "contents"]]),
      e("will-change-transform", [["will-change", "transform"]]),
      n("will-change", { themeKeys: [], handle: (i) => [l("will-change", i)] }),
      e("content-none", [
        ["--tw-content", "none"],
        ["content", "none"],
      ]),
      n("content", {
        themeKeys: [],
        handle: (i) => [
          D([S("--tw-content", '""')]),
          l("--tw-content", i),
          l("content", "var(--tw-content)"),
        ],
      });
    {
      let i =
          "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)",
        c = () =>
          D([
            S("--tw-contain-size"),
            S("--tw-contain-layout"),
            S("--tw-contain-paint"),
            S("--tw-contain-style"),
          ]);
      e("contain-none", [["contain", "none"]]),
        e("contain-content", [["contain", "content"]]),
        e("contain-strict", [["contain", "strict"]]),
        e("contain-size", [c, ["--tw-contain-size", "size"], ["contain", i]]),
        e("contain-inline-size", [
          c,
          ["--tw-contain-size", "inline-size"],
          ["contain", i],
        ]),
        e("contain-layout", [
          c,
          ["--tw-contain-layout", "layout"],
          ["contain", i],
        ]),
        e("contain-paint", [
          c,
          ["--tw-contain-paint", "paint"],
          ["contain", i],
        ]),
        e("contain-style", [
          c,
          ["--tw-contain-style", "style"],
          ["contain", i],
        ]),
        n("contain", { themeKeys: [], handle: (h) => [l("contain", h)] });
    }
    e("forced-color-adjust-none", [["forced-color-adjust", "none"]]),
      e("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]),
      e("leading-none", [
        () => D([S("--tw-leading")]),
        ["--tw-leading", "1"],
        ["line-height", "1"],
      ]),
      a("leading", ["--leading", "--spacing"], (i) => [
        D([S("--tw-leading")]),
        l("--tw-leading", i),
        l("line-height", i),
      ]),
      n("tracking", {
        supportsNegative: !0,
        themeKeys: ["--tracking"],
        handle: (i) => [
          D([S("--tw-tracking")]),
          l("--tw-tracking", i),
          l("letter-spacing", i),
        ],
      }),
      e("antialiased", [
        ["-webkit-font-smoothing", "antialiased"],
        ["-moz-osx-font-smoothing", "grayscale"],
      ]),
      e("subpixel-antialiased", [
        ["-webkit-font-smoothing", "auto"],
        ["-moz-osx-font-smoothing", "auto"],
      ]);
    {
      let i =
          "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)",
        c = () =>
          D([
            S("--tw-ordinal"),
            S("--tw-slashed-zero"),
            S("--tw-numeric-figure"),
            S("--tw-numeric-spacing"),
            S("--tw-numeric-fraction"),
          ]);
      e("normal-nums", [["font-variant-numeric", "normal"]]),
        e("ordinal", [
          c,
          ["--tw-ordinal", "ordinal"],
          ["font-variant-numeric", i],
        ]),
        e("slashed-zero", [
          c,
          ["--tw-slashed-zero", "slashed-zero"],
          ["font-variant-numeric", i],
        ]),
        e("lining-nums", [
          c,
          ["--tw-numeric-figure", "lining-nums"],
          ["font-variant-numeric", i],
        ]),
        e("oldstyle-nums", [
          c,
          ["--tw-numeric-figure", "oldstyle-nums"],
          ["font-variant-numeric", i],
        ]),
        e("proportional-nums", [
          c,
          ["--tw-numeric-spacing", "proportional-nums"],
          ["font-variant-numeric", i],
        ]),
        e("tabular-nums", [
          c,
          ["--tw-numeric-spacing", "tabular-nums"],
          ["font-variant-numeric", i],
        ]),
        e("diagonal-fractions", [
          c,
          ["--tw-numeric-fraction", "diagonal-fractions"],
          ["font-variant-numeric", i],
        ]),
        e("stacked-fractions", [
          c,
          ["--tw-numeric-fraction", "stacked-fractions"],
          ["font-variant-numeric", i],
        ]);
    }
    {
      let i = () => D([S("--tw-outline-style", "solid")]);
      r.static("outline-hidden", () => [
        l("outline-style", "none"),
        z("@media", "(forced-colors: active)", [
          l("outline", "2px solid transparent"),
          l("outline-offset", "2px"),
        ]),
      ]),
        e("outline-none", [
          ["--tw-outline-style", "none"],
          ["outline-style", "none"],
        ]),
        e("outline-solid", [
          ["--tw-outline-style", "solid"],
          ["outline-style", "solid"],
        ]),
        e("outline-dashed", [
          ["--tw-outline-style", "dashed"],
          ["outline-style", "dashed"],
        ]),
        e("outline-dotted", [
          ["--tw-outline-style", "dotted"],
          ["outline-style", "dotted"],
        ]),
        e("outline-double", [
          ["--tw-outline-style", "double"],
          ["outline-style", "double"],
        ]),
        r.functional("outline", (c) => {
          if (c.value === null)
            return c.modifier
              ? void 0
              : [
                  i(),
                  l("outline-style", "var(--tw-outline-style)"),
                  l("outline-width", "1px"),
                ];
          if (c.value.kind === "arbitrary") {
            let h = c.value.value;
            switch (
              c.value.dataType ??
              F(h, ["color", "length", "number", "percentage"])
            ) {
              case "length":
              case "number":
              case "percentage":
                return c.modifier
                  ? void 0
                  : [
                      i(),
                      l("outline-style", "var(--tw-outline-style)"),
                      l("outline-width", h),
                    ];
              default:
                return (
                  (h = W(h, c.modifier, t)),
                  h === null ? void 0 : [l("outline-color", h)]
                );
            }
          }
          {
            let h = G(c, t, ["--outline-color", "--color"]);
            if (h) return [l("outline-color", h)];
          }
          {
            if (c.modifier) return;
            let h = t.resolve(c.value.value, ["--outline-width"]);
            if (h)
              return [
                i(),
                l("outline-style", "var(--tw-outline-style)"),
                l("outline-width", h),
              ];
            if ($(c.value.value))
              return [
                i(),
                l("outline-style", "var(--tw-outline-style)"),
                l("outline-width", `${c.value.value}px`),
              ];
          }
        }),
        o("outline", () => [
          {
            values: ["current", "inherit", "transparent"],
            valueThemeKeys: ["--outline-color", "--color"],
            modifiers: Array.from({ length: 21 }, (c, h) => `${h * 5}`),
            hasDefaultValue: !0,
          },
          {
            values: ["0", "1", "2", "4", "8"],
            valueThemeKeys: ["--outline-width"],
          },
        ]),
        n("outline-offset", {
          supportsNegative: !0,
          themeKeys: ["--outline-offset"],
          handleBareValue: ({ value: c }) => ($(c) ? `${c}px` : null),
          handle: (c) => [l("outline-offset", c)],
        }),
        o("outline-offset", () => [
          {
            supportsNegative: !0,
            values: ["0", "1", "2", "4", "8"],
            valueThemeKeys: ["--outline-offset"],
          },
        ]);
    }
    n("opacity", {
      themeKeys: ["--opacity"],
      handleBareValue: ({ value: i }) => (Ie(i) ? `${i}%` : null),
      handle: (i) => [l("opacity", i)],
    }),
      o("opacity", () => [
        {
          values: Array.from({ length: 21 }, (i, c) => `${c * 5}`),
          valueThemeKeys: ["--opacity"],
        },
      ]),
      e("underline-offset-auto", [["text-underline-offset", "auto"]]),
      n("underline-offset", {
        supportsNegative: !0,
        themeKeys: ["--text-underline-offset"],
        handleBareValue: ({ value: i }) => ($(i) ? `${i}px` : null),
        handle: (i) => [l("text-underline-offset", i)],
      }),
      o("underline-offset", () => [
        {
          supportsNegative: !0,
          values: ["0", "1", "2", "4", "8"],
          valueThemeKeys: ["--text-underline-offset"],
        },
      ]),
      r.functional("text", (i) => {
        if (i.value) {
          if (i.value.kind === "arbitrary") {
            let c = i.value.value;
            switch (
              i.value.dataType ??
              F(c, [
                "color",
                "length",
                "percentage",
                "absolute-size",
                "relative-size",
              ])
            ) {
              case "size":
              case "length":
              case "percentage":
              case "absolute-size":
              case "relative-size": {
                if (i.modifier) {
                  let w =
                    i.modifier.kind === "arbitrary"
                      ? i.modifier.value
                      : t.resolve(i.modifier.value, ["--leading"]);
                  if (!w && ge(i.modifier.value)) {
                    let k = t.resolve(null, ["--spacing"]);
                    if (!k) return null;
                    w = `calc(${k} * ${i.modifier.value})`;
                  }
                  return (
                    !w && i.modifier.value === "none" && (w = "1"),
                    w ? [l("font-size", c), l("line-height", w)] : null
                  );
                }
                return [l("font-size", c)];
              }
              default:
                return (
                  (c = W(c, i.modifier, t)),
                  c === null ? void 0 : [l("color", c)]
                );
            }
          }
          {
            let c = G(i, t, ["--text-color", "--color"]);
            if (c) return [l("color", c)];
          }
          {
            let c = t.resolveWith(
              i.value.value,
              ["--text"],
              ["--line-height", "--letter-spacing", "--font-weight"]
            );
            if (c) {
              let [h, w = {}] = Array.isArray(c) ? c : [c];
              if (i.modifier) {
                let k =
                  i.modifier.kind === "arbitrary"
                    ? i.modifier.value
                    : t.resolve(i.modifier.value, ["--leading"]);
                if (!k && ge(i.modifier.value)) {
                  let R = t.resolve(null, ["--spacing"]);
                  if (!R) return null;
                  k = `calc(${R} * ${i.modifier.value})`;
                }
                if ((!k && i.modifier.value === "none" && (k = "1"), !k))
                  return null;
                let N = [l("font-size", h)];
                return k && N.push(l("line-height", k)), N;
              }
              return typeof w == "string"
                ? [l("font-size", h), l("line-height", w)]
                : [
                    l("font-size", h),
                    l(
                      "line-height",
                      w["--line-height"]
                        ? `var(--tw-leading, ${w["--line-height"]})`
                        : void 0
                    ),
                    l(
                      "letter-spacing",
                      w["--letter-spacing"]
                        ? `var(--tw-tracking, ${w["--letter-spacing"]})`
                        : void 0
                    ),
                    l(
                      "font-weight",
                      w["--font-weight"]
                        ? `var(--tw-font-weight, ${w["--font-weight"]})`
                        : void 0
                    ),
                  ];
            }
          }
        }
      }),
      o("text", () => [
        {
          values: ["current", "inherit", "transparent"],
          valueThemeKeys: ["--text-color", "--color"],
          modifiers: Array.from({ length: 21 }, (i, c) => `${c * 5}`),
        },
        {
          values: [],
          valueThemeKeys: ["--text"],
          modifiers: [],
          modifierThemeKeys: ["--leading"],
        },
      ]);
    {
      let k = function (C) {
          return `var(--tw-ring-inset,) 0 0 0 calc(${C} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${w})`;
        },
        N = function (C) {
          return `inset 0 0 0 ${C} var(--tw-inset-ring-color, currentColor)`;
        };
      var E = k,
        K = N;
      let i = [
          "var(--tw-inset-shadow)",
          "var(--tw-inset-ring-shadow)",
          "var(--tw-ring-offset-shadow)",
          "var(--tw-ring-shadow)",
          "var(--tw-shadow)",
        ].join(", "),
        c = "0 0 #0000",
        h = () =>
          D([
            S("--tw-shadow", c),
            S("--tw-shadow-color"),
            S("--tw-inset-shadow", c),
            S("--tw-inset-shadow-color"),
            S("--tw-ring-color"),
            S("--tw-ring-shadow", c),
            S("--tw-inset-ring-color"),
            S("--tw-inset-ring-shadow", c),
            S("--tw-ring-inset"),
            S("--tw-ring-offset-width", "0px", "<length>"),
            S("--tw-ring-offset-color", "#fff"),
            S("--tw-ring-offset-shadow", c),
          ]);
      e("shadow-initial", [h, ["--tw-shadow-color", "initial"]]),
        r.functional("shadow", (C) => {
          if (!C.value) {
            let A = t.get(["--shadow"]);
            return A === null
              ? void 0
              : [
                  h(),
                  l(
                    "--tw-shadow",
                    ue(A, (j) => `var(--tw-shadow-color, ${j})`)
                  ),
                  l("box-shadow", i),
                ];
          }
          if (C.value.kind === "arbitrary") {
            let A = C.value.value;
            switch (C.value.dataType ?? F(A, ["color"])) {
              case "color":
                return (
                  (A = W(A, C.modifier, t)),
                  A === null ? void 0 : [h(), l("--tw-shadow-color", A)]
                );
              default:
                return [
                  h(),
                  l(
                    "--tw-shadow",
                    ue(A, (Ee) => `var(--tw-shadow-color, ${Ee})`)
                  ),
                  l("box-shadow", i),
                ];
            }
          }
          switch (C.value.value) {
            case "none":
              return C.modifier
                ? void 0
                : [h(), l("--tw-shadow", c), l("box-shadow", i)];
          }
          {
            let A = t.get([`--shadow-${C.value.value}`]);
            if (A)
              return C.modifier
                ? void 0
                : [
                    h(),
                    l(
                      "--tw-shadow",
                      ue(A, (j) => `var(--tw-shadow-color, ${j})`)
                    ),
                    l("box-shadow", i),
                  ];
          }
          {
            let A = G(C, t, ["--box-shadow-color", "--color"]);
            if (A) return [h(), l("--tw-shadow-color", A)];
          }
        }),
        o("shadow", () => [
          {
            values: ["current", "inherit", "transparent"],
            valueThemeKeys: ["--box-shadow-color", "--color"],
            modifiers: Array.from({ length: 21 }, (C, A) => `${A * 5}`),
          },
          {
            values: ["none"],
            valueThemeKeys: ["--shadow"],
            hasDefaultValue: !0,
          },
        ]),
        e("inset-shadow-initial", [h, ["--tw-inset-shadow-color", "initial"]]),
        r.functional("inset-shadow", (C) => {
          if (!C.value) {
            let A = t.get(["--inset-shadow"]);
            return A === null
              ? void 0
              : [
                  h(),
                  l(
                    "--tw-inset-shadow",
                    ue(A, (j) => `var(--tw-inset-shadow-color, ${j})`)
                  ),
                  l("box-shadow", i),
                ];
          }
          if (C.value.kind === "arbitrary") {
            let A = C.value.value;
            switch (C.value.dataType ?? F(A, ["color"])) {
              case "color":
                return (
                  (A = W(A, C.modifier, t)),
                  A === null ? void 0 : [h(), l("--tw-inset-shadow-color", A)]
                );
              default:
                return [
                  h(),
                  l(
                    "--tw-inset-shadow",
                    `inset ${ue(
                      A,
                      (Ee) => `var(--tw-inset-shadow-color, ${Ee})`
                    )}`
                  ),
                  l("box-shadow", i),
                ];
            }
          }
          switch (C.value.value) {
            case "none":
              return C.modifier
                ? void 0
                : [h(), l("--tw-inset-shadow", c), l("box-shadow", i)];
          }
          {
            let A = t.get([`--inset-shadow-${C.value.value}`]);
            if (A)
              return C.modifier
                ? void 0
                : [
                    h(),
                    l(
                      "--tw-inset-shadow",
                      ue(A, (j) => `var(--tw-inset-shadow-color, ${j})`)
                    ),
                    l("box-shadow", i),
                  ];
          }
          {
            let A = G(C, t, ["--box-shadow-color", "--color"]);
            if (A) return [h(), l("--tw-inset-shadow-color", A)];
          }
        }),
        o("inset-shadow", () => [
          {
            values: ["current", "inherit", "transparent"],
            valueThemeKeys: ["--box-shadow-color", "--color"],
            modifiers: Array.from({ length: 21 }, (C, A) => `${A * 5}`),
          },
          {
            values: [],
            valueThemeKeys: ["--inset-shadow"],
            hasDefaultValue: !0,
          },
        ]),
        e("ring-inset", [h, ["--tw-ring-inset", "inset"]]);
      let w = t.get(["--default-ring-color"]) ?? "currentColor";
      r.functional("ring", (C) => {
        if (!C.value) {
          if (C.modifier) return;
          let A = t.get(["--default-ring-width"]) ?? "1px";
          return [h(), l("--tw-ring-shadow", k(A)), l("box-shadow", i)];
        }
        if (C.value.kind === "arbitrary") {
          let A = C.value.value;
          switch (C.value.dataType ?? F(A, ["color", "length"])) {
            case "length":
              return C.modifier
                ? void 0
                : [h(), l("--tw-ring-shadow", k(A)), l("box-shadow", i)];
            default:
              return (
                (A = W(A, C.modifier, t)),
                A === null ? void 0 : [l("--tw-ring-color", A)]
              );
          }
        }
        {
          let A = G(C, t, ["--ring-color", "--color"]);
          if (A) return [l("--tw-ring-color", A)];
        }
        {
          if (C.modifier) return;
          let A = t.resolve(C.value.value, ["--ring-width"]);
          if ((A === null && $(C.value.value) && (A = `${C.value.value}px`), A))
            return [h(), l("--tw-ring-shadow", k(A)), l("box-shadow", i)];
        }
      }),
        o("ring", () => [
          {
            values: ["current", "inherit", "transparent"],
            valueThemeKeys: ["--ring-color", "--color"],
            modifiers: Array.from({ length: 21 }, (C, A) => `${A * 5}`),
          },
          {
            values: ["0", "1", "2", "4", "8"],
            valueThemeKeys: ["--ring-width"],
            hasDefaultValue: !0,
          },
        ]),
        r.functional("inset-ring", (C) => {
          if (!C.value)
            return C.modifier
              ? void 0
              : [
                  h(),
                  l("--tw-inset-ring-shadow", N("1px")),
                  l("box-shadow", i),
                ];
          if (C.value.kind === "arbitrary") {
            let A = C.value.value;
            switch (C.value.dataType ?? F(A, ["color", "length"])) {
              case "length":
                return C.modifier
                  ? void 0
                  : [
                      h(),
                      l("--tw-inset-ring-shadow", N(A)),
                      l("box-shadow", i),
                    ];
              default:
                return (
                  (A = W(A, C.modifier, t)),
                  A === null ? void 0 : [l("--tw-inset-ring-color", A)]
                );
            }
          }
          {
            let A = G(C, t, ["--ring-color", "--color"]);
            if (A) return [l("--tw-inset-ring-color", A)];
          }
          {
            if (C.modifier) return;
            let A = t.resolve(C.value.value, ["--ring-width"]);
            if (
              (A === null && $(C.value.value) && (A = `${C.value.value}px`), A)
            )
              return [
                h(),
                l("--tw-inset-ring-shadow", N(A)),
                l("box-shadow", i),
              ];
          }
        }),
        o("inset-ring", () => [
          {
            values: ["current", "inherit", "transparent"],
            valueThemeKeys: ["--ring-color", "--color"],
            modifiers: Array.from({ length: 21 }, (C, A) => `${A * 5}`),
          },
          {
            values: ["0", "1", "2", "4", "8"],
            valueThemeKeys: ["--ring-width"],
            hasDefaultValue: !0,
          },
        ]);
      let R =
        "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
      r.functional("ring-offset", (C) => {
        if (C.value) {
          if (C.value.kind === "arbitrary") {
            let A = C.value.value;
            switch (C.value.dataType ?? F(A, ["color", "length"])) {
              case "length":
                return C.modifier
                  ? void 0
                  : [
                      l("--tw-ring-offset-width", A),
                      l("--tw-ring-offset-shadow", R),
                    ];
              default:
                return (
                  (A = W(A, C.modifier, t)),
                  A === null ? void 0 : [l("--tw-ring-offset-color", A)]
                );
            }
          }
          {
            let A = t.resolve(C.value.value, ["--ring-offset-width"]);
            if (A)
              return C.modifier
                ? void 0
                : [
                    l("--tw-ring-offset-width", A),
                    l("--tw-ring-offset-shadow", R),
                  ];
            if ($(C.value.value))
              return C.modifier
                ? void 0
                : [
                    l("--tw-ring-offset-width", `${C.value.value}px`),
                    l("--tw-ring-offset-shadow", R),
                  ];
          }
          {
            let A = G(C, t, ["--ring-offset-color", "--color"]);
            if (A) return [l("--tw-ring-offset-color", A)];
          }
        }
      });
    }
    return (
      o("ring-offset", () => [
        {
          values: ["current", "inherit", "transparent"],
          valueThemeKeys: ["--ring-offset-color", "--color"],
          modifiers: Array.from({ length: 21 }, (i, c) => `${c * 5}`),
        },
        {
          values: ["0", "1", "2", "4", "8"],
          valueThemeKeys: ["--ring-offset-width"],
        },
      ]),
      r.functional("@container", (i) => {
        let c = null;
        if (
          (i.value === null
            ? (c = "inline-size")
            : i.value.kind === "arbitrary"
            ? (c = i.value.value)
            : i.value.kind === "named" &&
              i.value.value === "normal" &&
              (c = "normal"),
          c !== null)
        )
          return i.modifier
            ? [l("container-type", c), l("container-name", i.modifier.value)]
            : [l("container-type", c)];
      }),
      o("@container", () => [
        { values: ["normal"], valueThemeKeys: [], hasDefaultValue: !0 },
      ]),
      r
    );
  }
  function rr(t) {
    let r = t.params;
    return qo.test(r)
      ? (o) => {
          let e = new Set(),
            n = new Set();
          _(t.nodes, (u) => {
            if (
              u.kind !== "declaration" ||
              !u.value ||
              (!u.value.includes("--value(") &&
                !u.value.includes("--modifier("))
            )
              return;
            let a = L(u.value);
            ee(a, (p) => {
              if (
                p.kind !== "function" ||
                (p.value !== "--value" && p.value !== "--modifier")
              )
                return;
              let f = P(H(p.nodes), ",");
              for (let [s, d] of f.entries())
                (d = d.replace(/\\\*/g, "*")),
                  (d = d.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2")),
                  (d = d.replace(/\s+/g, "")),
                  (d = d.replace(/(-\*){2,}/g, "-*")),
                  d[0] === "-" &&
                    d[1] === "-" &&
                    !d.includes("-*") &&
                    (d += "-*"),
                  (f[s] = d);
              p.nodes = L(f.join(","));
              for (let s of p.nodes)
                if (
                  s.kind === "word" &&
                  s.value[0] === "-" &&
                  s.value[1] === "-"
                ) {
                  let d = s.value.replace(/-\*.*$/g, "");
                  p.value === "--value"
                    ? e.add(d)
                    : p.value === "--modifier" && n.add(d);
                }
            }),
              (u.value = H(a));
          }),
            o.utilities.functional(r.slice(0, -2), (u) => {
              let a = structuredClone(t),
                p = u.value,
                f = u.modifier;
              if (p === null) return;
              let s = !1,
                d = !1,
                m = !1,
                g = !1,
                b = new Map(),
                v = !1;
              if (
                (_([a], (y, { parent: x, replaceWith: T }) => {
                  if (
                    (x?.kind !== "rule" && x?.kind !== "at-rule") ||
                    y.kind !== "declaration" ||
                    !y.value
                  )
                    return;
                  let V = L(y.value);
                  (ee(V, (E, { replaceWith: K }) => {
                    if (E.kind === "function") {
                      if (E.value === "--value") {
                        s = !0;
                        let i = er(p, E, o);
                        return i
                          ? ((d = !0),
                            i.ratio ? (v = !0) : b.set(y, x),
                            K(i.nodes),
                            1)
                          : ((s ||= !1), T([]), 2);
                      } else if (E.value === "--modifier") {
                        if (f === null) return T([]), 1;
                        m = !0;
                        let i = er(f, E, o);
                        return i
                          ? ((g = !0), K(i.nodes), 1)
                          : ((m ||= !1), T([]), 2);
                      }
                    }
                  }) ?? 0) === 0 && (y.value = H(V));
                }),
                (s && !d) || (m && !g) || (v && g) || (f && !v && !g))
              )
                return null;
              if (v)
                for (let [y, x] of b) {
                  let T = x.nodes.indexOf(y);
                  T !== -1 && x.nodes.splice(T, 1);
                }
              return a.nodes;
            }),
            o.utilities.suggest(r.slice(0, -2), () => [
              {
                values: o.theme
                  .keysInNamespaces(e)
                  .map((u) => u.replaceAll("_", ".")),
                modifiers: o.theme
                  .keysInNamespaces(n)
                  .map((u) => u.replaceAll("_", ".")),
              },
            ]);
        }
      : Bo.test(r)
      ? (o) => {
          o.utilities.static(r, () => structuredClone(t.nodes));
        }
      : null;
  }
  function er(t, r, o) {
    for (let e of r.nodes)
      if (
        t.kind === "named" &&
        e.kind === "word" &&
        e.value[0] === "-" &&
        e.value[1] === "-"
      ) {
        let n = e.value;
        if (n.endsWith("-*")) {
          n = n.slice(0, -2);
          let u = o.theme.resolve(t.value, [n]);
          if (u) return { nodes: L(u) };
        } else {
          let u = n.split("-*");
          if (u.length <= 1) continue;
          let a = [u.shift()],
            p = o.theme.resolveWith(t.value, a, u);
          if (p) {
            let [, f = {}] = p;
            {
              let s = f[u.pop()];
              if (s) return { nodes: L(s) };
            }
          }
        }
      } else if (t.kind === "named" && e.kind === "word") {
        if (
          e.value !== "number" &&
          e.value !== "integer" &&
          e.value !== "ratio" &&
          e.value !== "percentage"
        )
          continue;
        let n = e.value === "ratio" && "fraction" in t ? t.fraction : t.value;
        if (!n) continue;
        let u = F(n, [e.value]);
        if (u === null) continue;
        if (u === "ratio") {
          let [a, p] = P(n, "/");
          if (!$(a) || !$(p)) continue;
        } else {
          if (u === "number" && !ge(n)) continue;
          if (u === "percentage" && !$(n.slice(0, -1))) continue;
        }
        return { nodes: L(n), ratio: u === "ratio" };
      } else if (
        t.kind === "arbitrary" &&
        e.kind === "word" &&
        e.value[0] === "[" &&
        e.value[e.value.length - 1] === "]"
      ) {
        let n = e.value.slice(1, -1);
        if (n === "*") return { nodes: L(t.value) };
        if ("dataType" in t && t.dataType && t.dataType !== n) continue;
        if ("dataType" in t && t.dataType) return { nodes: L(t.value) };
        if (F(t.value, [n]) !== null) return { nodes: L(t.value) };
      }
  }
  var pt = { "--alpha": Ho, "--spacing": Go, "--theme": Yo, theme: ir };
  function Ho(t, r, ...o) {
    let [e, n] = P(r, "/").map((u) => u.trim());
    if (!e || !n)
      throw new Error(
        `The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${
          e || "var(--my-color)"
        } / ${n || "50%"})\``
      );
    if (o.length > 0)
      throw new Error(
        `The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${
          e || "var(--my-color)"
        } / ${n || "50%"})\``
      );
    return J(e, n);
  }
  function Go(t, r, ...o) {
    if (!r)
      throw new Error(
        "The --spacing(\u2026) function requires an argument, but received none."
      );
    if (o.length > 0)
      throw new Error(
        `The --spacing(\u2026) function only accepts a single argument, but received ${
          o.length + 1
        }.`
      );
    let e = t.theme.resolve(null, ["--spacing"]);
    if (!e)
      throw new Error(
        "The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found."
      );
    return `calc(${e} * ${r})`;
  }
  function Yo(t, r, ...o) {
    if (!r.startsWith("--"))
      throw new Error(
        "The --theme(\u2026) function can only be used with CSS variables from your theme."
      );
    return ir(t, r, ...o);
  }
  function ir(t, r, ...o) {
    r = Jo(r);
    let e = t.resolveThemeValue(r);
    if (!e && o.length > 0) return o.join(", ");
    if (!e)
      throw new Error(
        `Could not resolve value for theme function: \`theme(${r})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`
      );
    return e;
  }
  var or = new RegExp(
    Object.keys(pt)
      .map((t) => `${t}\\(`)
      .join("|")
  );
  function he(t, r) {
    let o = 0;
    return (
      _(t, (e) => {
        if (e.kind === "declaration" && e.value && or.test(e.value)) {
          (o |= 8), (e.value = nr(e.value, r));
          return;
        }
        e.kind === "at-rule" &&
          (e.name === "@media" ||
            e.name === "@custom-media" ||
            e.name === "@container" ||
            e.name === "@supports") &&
          or.test(e.params) &&
          ((o |= 8), (e.params = nr(e.params, r)));
      }),
      o
    );
  }
  function nr(t, r) {
    let o = L(t);
    return (
      ee(o, (e, { replaceWith: n }) => {
        if (e.kind === "function" && e.value in pt) {
          let u = P(H(e.nodes).trim(), ",").map((p) => p.trim()),
            a = pt[e.value](r, ...u);
          return n(L(a));
        }
      }),
      H(o)
    );
  }
  function Jo(t) {
    if (t[0] !== "'" && t[0] !== '"') return t;
    let r = "",
      o = t[0];
    for (let e = 1; e < t.length - 1; e++) {
      let n = t[e],
        u = t[e + 1];
      n === "\\" && (u === o || u === "\\") ? ((r += u), e++) : (r += n);
    }
    return r;
  }
  function Fe(t, r) {
    let o = t.length,
      e = r.length,
      n = o < e ? o : e;
    for (let u = 0; u < n; u++) {
      let a = t.charCodeAt(u),
        p = r.charCodeAt(u);
      if (a !== p) {
        if (a >= 48 && a <= 57 && p >= 48 && p <= 57) {
          let f = u,
            s = u + 1,
            d = u,
            m = u + 1;
          for (a = t.charCodeAt(s); a >= 48 && a <= 57; ) a = t.charCodeAt(++s);
          for (p = r.charCodeAt(m); p >= 48 && p <= 57; ) p = r.charCodeAt(++m);
          let g = t.slice(f, s),
            b = r.slice(d, m);
          return Number(g) - Number(b) || (g < b ? -1 : 1);
        }
        return a - p;
      }
    }
    return t.length - r.length;
  }
  function lr(t) {
    let r = [];
    for (let o of t.utilities.keys("static")) r.push([o, { modifiers: [] }]);
    for (let o of t.utilities.keys("functional")) {
      let e = t.utilities.getCompletions(o);
      for (let n of e)
        for (let u of n.values) {
          let a = u === null ? o : `${o}-${u}`;
          r.push([a, { modifiers: n.modifiers }]),
            n.supportsNegative && r.push([`-${a}`, { modifiers: n.modifiers }]);
        }
    }
    return r.sort((o, e) => Fe(o[0], e[0])), r;
  }
  function ar(t) {
    let r = [];
    for (let [e, n] of t.variants.entries()) {
      let p = function ({ value: f, modifier: s } = {}) {
        let d = e;
        f && (d += u ? `-${f}` : f), s && (d += `/${s}`);
        let m = t.parseVariant(d);
        if (!m) return [];
        let g = U(".__placeholder__", []);
        if (be(g, m, t.variants) === null) return [];
        let b = [];
        return (
          De(g.nodes, (v, { path: y }) => {
            if (
              (v.kind !== "rule" && v.kind !== "at-rule") ||
              v.nodes.length > 0
            )
              return;
            y.sort((V, O) => {
              let E = V.kind === "at-rule",
                K = O.kind === "at-rule";
              return E && !K ? -1 : !E && K ? 1 : 0;
            });
            let x = y.flatMap((V) =>
                V.kind === "rule"
                  ? V.selector === "&"
                    ? []
                    : [V.selector]
                  : V.kind === "at-rule"
                  ? [`${V.name} ${V.params}`]
                  : []
              ),
              T = "";
            for (let V = x.length - 1; V >= 0; V--)
              T = T === "" ? x[V] : `${x[V]} { ${T} }`;
            b.push(T);
          }),
          b
        );
      };
      var o = p;
      if (n.kind === "arbitrary") continue;
      let u = e !== "@",
        a = t.variants.getCompletions(e);
      switch (n.kind) {
        case "static": {
          r.push({
            name: e,
            values: a,
            isArbitrary: !1,
            hasDash: u,
            selectors: p,
          });
          break;
        }
        case "functional": {
          r.push({
            name: e,
            values: a,
            isArbitrary: !0,
            hasDash: u,
            selectors: p,
          });
          break;
        }
        case "compound": {
          r.push({
            name: e,
            values: a,
            isArbitrary: !0,
            hasDash: u,
            selectors: p,
          });
          break;
        }
      }
    }
    return r;
  }
  function sr(t, r) {
    let { astNodes: o, nodeSorting: e } = oe(Array.from(r), t),
      n = new Map(r.map((a) => [a, null])),
      u = 0n;
    for (let a of o) {
      let p = e.get(a)?.candidate;
      p && n.set(p, n.get(p) ?? u++);
    }
    return r.map((a) => [a, n.get(a) ?? null]);
  }
  var Le = /^@?[a-zA-Z0-9_-]*$/;
  var gt = class {
    compareFns = new Map();
    variants = new Map();
    completions = new Map();
    groupOrder = null;
    lastOrder = 0;
    static(r, o, { compounds: e, order: n } = {}) {
      this.set(r, {
        kind: "static",
        applyFn: o,
        compoundsWith: 0,
        compounds: e ?? 2,
        order: n,
      });
    }
    fromAst(r, o) {
      let e = [];
      _(o, (n) => {
        n.kind === "rule"
          ? e.push(n.selector)
          : n.kind === "at-rule" &&
            n.name !== "@slot" &&
            e.push(`${n.name} ${n.params}`);
      }),
        this.static(
          r,
          (n) => {
            let u = structuredClone(o);
            ht(u, n.nodes), (n.nodes = u);
          },
          { compounds: ce(e) }
        );
    }
    functional(r, o, { compounds: e, order: n } = {}) {
      this.set(r, {
        kind: "functional",
        applyFn: o,
        compoundsWith: 0,
        compounds: e ?? 2,
        order: n,
      });
    }
    compound(r, o, e, { compounds: n, order: u } = {}) {
      this.set(r, {
        kind: "compound",
        applyFn: e,
        compoundsWith: o,
        compounds: n ?? 2,
        order: u,
      });
    }
    group(r, o) {
      (this.groupOrder = this.nextOrder()),
        o && this.compareFns.set(this.groupOrder, o),
        r(),
        (this.groupOrder = null);
    }
    has(r) {
      return this.variants.has(r);
    }
    get(r) {
      return this.variants.get(r);
    }
    kind(r) {
      return this.variants.get(r)?.kind;
    }
    compoundsWith(r, o) {
      let e = this.variants.get(r),
        n =
          typeof o == "string"
            ? this.variants.get(o)
            : o.kind === "arbitrary"
            ? { compounds: ce([o.selector]) }
            : this.variants.get(o.root);
      return !(
        !e ||
        !n ||
        e.kind !== "compound" ||
        n.compounds === 0 ||
        e.compoundsWith === 0 ||
        !(e.compoundsWith & n.compounds)
      );
    }
    suggest(r, o) {
      this.completions.set(r, o);
    }
    getCompletions(r) {
      return this.completions.get(r)?.() ?? [];
    }
    compare(r, o) {
      if (r === o) return 0;
      if (r === null) return -1;
      if (o === null) return 1;
      if (r.kind === "arbitrary" && o.kind === "arbitrary")
        return r.selector < o.selector ? -1 : 1;
      if (r.kind === "arbitrary") return 1;
      if (o.kind === "arbitrary") return -1;
      let e = this.variants.get(r.root).order,
        n = this.variants.get(o.root).order,
        u = e - n;
      if (u !== 0) return u;
      if (r.kind === "compound" && o.kind === "compound") {
        let s = this.compare(r.variant, o.variant);
        return s !== 0
          ? s
          : r.modifier && o.modifier
          ? r.modifier.value < o.modifier.value
            ? -1
            : 1
          : r.modifier
          ? 1
          : o.modifier
          ? -1
          : 0;
      }
      let a = this.compareFns.get(e);
      if (a !== void 0) return a(r, o);
      if (r.root !== o.root) return r.root < o.root ? -1 : 1;
      let p = r.value,
        f = o.value;
      return p === null
        ? -1
        : f === null || (p.kind === "arbitrary" && f.kind !== "arbitrary")
        ? 1
        : (p.kind !== "arbitrary" && f.kind === "arbitrary") ||
          p.value < f.value
        ? -1
        : 1;
    }
    keys() {
      return this.variants.keys();
    }
    entries() {
      return this.variants.entries();
    }
    set(r, { kind: o, applyFn: e, compounds: n, compoundsWith: u, order: a }) {
      let p = this.variants.get(r);
      p
        ? Object.assign(p, { kind: o, applyFn: e, compounds: n })
        : (a === void 0 &&
            ((this.lastOrder = this.nextOrder()), (a = this.lastOrder)),
          this.variants.set(r, {
            kind: o,
            applyFn: e,
            order: a,
            compoundsWith: u,
            compounds: n,
          }));
    }
    nextOrder() {
      return this.groupOrder ?? this.lastOrder + 1;
    }
  };
  function ce(t) {
    let r = 0;
    for (let o of t) {
      if (o[0] === "@") {
        if (
          !o.startsWith("@media") &&
          !o.startsWith("@supports") &&
          !o.startsWith("@container")
        )
          return 0;
        r |= 1;
        continue;
      }
      if (o.includes("::")) return 0;
      r |= 2;
    }
    return r;
  }
  function cr(t) {
    let r = new gt();
    function o(s, d, { compounds: m } = {}) {
      (m = m ?? ce(d)),
        r.static(
          s,
          (g) => {
            g.nodes = d.map((b) => M(b, g.nodes));
          },
          { compounds: m }
        );
    }
    o("*", [":is(& > *)"], { compounds: 0 }),
      o("**", [":is(& *)"], { compounds: 0 });
    function e(s, d) {
      return d.map((m) => {
        m = m.trim();
        let g = P(m, " ");
        return g[0] === "not"
          ? g.slice(1).join(" ")
          : s === "@container"
          ? g[0][0] === "("
            ? `not ${m}`
            : g[1] === "not"
            ? `${g[0]} ${g.slice(2).join(" ")}`
            : `${g[0]} not ${g.slice(1).join(" ")}`
          : `not ${m}`;
      });
    }
    let n = ["@media", "@supports", "@container"];
    function u(s) {
      for (let d of n) {
        if (d !== s.name) continue;
        let m = P(s.params, ",");
        return m.length > 1
          ? null
          : ((m = e(s.name, m)), z(s.name, m.join(", ")));
      }
      return null;
    }
    function a(s) {
      return s.includes("::")
        ? null
        : `&:not(${P(s, ",")
            .map(
              (m) => (
                m.startsWith("&:is(") &&
                  m.endsWith(")") &&
                  (m = m.slice(5, -1)),
                (m = m.replaceAll("&", "*")),
                m
              )
            )
            .join(", ")})`;
    }
    r.compound("not", 3, (s, d) => {
      if ((d.variant.kind === "arbitrary" && d.variant.relative) || d.modifier)
        return null;
      let m = !1;
      if (
        (_([s], (g, { path: b }) => {
          if (g.kind !== "rule" && g.kind !== "at-rule") return 0;
          if (g.nodes.length > 0) return 0;
          let v = [],
            y = [];
          for (let T of b)
            T.kind === "at-rule" ? v.push(T) : T.kind === "rule" && y.push(T);
          if (v.length > 1) return 2;
          if (y.length > 1) return 2;
          let x = [];
          for (let T of y) {
            let V = a(T.selector);
            if (!V) return (m = !1), 2;
            x.push(U(V, []));
          }
          for (let T of v) {
            let V = u(T);
            if (!V) return (m = !1), 2;
            x.push(V);
          }
          return Object.assign(s, U("&", x)), (m = !0), 1;
        }),
        s.kind === "rule" &&
          s.selector === "&" &&
          s.nodes.length === 1 &&
          Object.assign(s, s.nodes[0]),
        !m)
      )
        return null;
    }),
      r.suggest("not", () =>
        Array.from(r.keys()).filter((s) => r.compoundsWith("not", s))
      ),
      r.compound("group", 2, (s, d) => {
        if (d.variant.kind === "arbitrary" && d.variant.relative) return null;
        let m = d.modifier
            ? `:where(.${t.prefix ? `${t.prefix}\\:` : ""}group\\/${
                d.modifier.value
              })`
            : `:where(.${t.prefix ? `${t.prefix}\\:` : ""}group)`,
          g = !1;
        if (
          (_([s], (b, { path: v }) => {
            if (b.kind !== "rule") return 0;
            for (let x of v.slice(0, -1))
              if (x.kind === "rule") return (g = !1), 2;
            let y = b.selector.replaceAll("&", m);
            P(y, ",").length > 1 && (y = `:is(${y})`),
              (b.selector = `&:is(${y} *)`),
              (g = !0);
          }),
          !g)
        )
          return null;
      }),
      r.suggest("group", () =>
        Array.from(r.keys()).filter((s) => r.compoundsWith("group", s))
      ),
      r.compound("peer", 2, (s, d) => {
        if (d.variant.kind === "arbitrary" && d.variant.relative) return null;
        let m = d.modifier
            ? `:where(.${t.prefix ? `${t.prefix}\\:` : ""}peer\\/${
                d.modifier.value
              })`
            : `:where(.${t.prefix ? `${t.prefix}\\:` : ""}peer)`,
          g = !1;
        if (
          (_([s], (b, { path: v }) => {
            if (b.kind !== "rule") return 0;
            for (let x of v.slice(0, -1))
              if (x.kind === "rule") return (g = !1), 2;
            let y = b.selector.replaceAll("&", m);
            P(y, ",").length > 1 && (y = `:is(${y})`),
              (b.selector = `&:is(${y} ~ *)`),
              (g = !0);
          }),
          !g)
        )
          return null;
      }),
      r.suggest("peer", () =>
        Array.from(r.keys()).filter((s) => r.compoundsWith("peer", s))
      ),
      o("first-letter", ["&::first-letter"]),
      o("first-line", ["&::first-line"]),
      o("marker", ["& *::marker", "&::marker"]),
      o("selection", ["& *::selection", "&::selection"]),
      o("file", ["&::file-selector-button"]),
      o("placeholder", ["&::placeholder"]),
      o("backdrop", ["&::backdrop"]);
    {
      let s = function () {
        return D([
          z("@property", "--tw-content", [
            l("syntax", '"*"'),
            l("initial-value", '""'),
            l("inherits", "false"),
          ]),
        ]);
      };
      var p = s;
      r.static(
        "before",
        (d) => {
          d.nodes = [
            U("&::before", [
              s(),
              l("content", "var(--tw-content)"),
              ...d.nodes,
            ]),
          ];
        },
        { compounds: 0 }
      ),
        r.static(
          "after",
          (d) => {
            d.nodes = [
              U("&::after", [
                s(),
                l("content", "var(--tw-content)"),
                ...d.nodes,
              ]),
            ];
          },
          { compounds: 0 }
        );
    }
    o("first", ["&:first-child"]),
      o("last", ["&:last-child"]),
      o("only", ["&:only-child"]),
      o("odd", ["&:nth-child(odd)"]),
      o("even", ["&:nth-child(even)"]),
      o("first-of-type", ["&:first-of-type"]),
      o("last-of-type", ["&:last-of-type"]),
      o("only-of-type", ["&:only-of-type"]),
      o("visited", ["&:visited"]),
      o("target", ["&:target"]),
      o("open", ["&:is([open], :popover-open, :open)"]),
      o("default", ["&:default"]),
      o("checked", ["&:checked"]),
      o("indeterminate", ["&:indeterminate"]),
      o("placeholder-shown", ["&:placeholder-shown"]),
      o("autofill", ["&:autofill"]),
      o("optional", ["&:optional"]),
      o("required", ["&:required"]),
      o("valid", ["&:valid"]),
      o("invalid", ["&:invalid"]),
      o("in-range", ["&:in-range"]),
      o("out-of-range", ["&:out-of-range"]),
      o("read-only", ["&:read-only"]),
      o("empty", ["&:empty"]),
      o("focus-within", ["&:focus-within"]),
      r.static("hover", (s) => {
        s.nodes = [U("&:hover", [z("@media", "(hover: hover)", s.nodes)])];
      }),
      o("focus", ["&:focus"]),
      o("focus-visible", ["&:focus-visible"]),
      o("active", ["&:active"]),
      o("enabled", ["&:enabled"]),
      o("disabled", ["&:disabled"]),
      o("inert", ["&:is([inert], [inert] *)"]),
      r.compound("in", 2, (s, d) => {
        if (d.modifier) return null;
        let m = !1;
        if (
          (_([s], (g, { path: b }) => {
            if (g.kind !== "rule") return 0;
            for (let v of b.slice(0, -1))
              if (v.kind === "rule") return (m = !1), 2;
            (g.selector = `:where(${g.selector.replaceAll("&", "*")}) &`),
              (m = !0);
          }),
          !m)
        )
          return null;
      }),
      r.suggest("in", () =>
        Array.from(r.keys()).filter((s) => r.compoundsWith("in", s))
      ),
      r.compound("has", 2, (s, d) => {
        if (d.modifier) return null;
        let m = !1;
        if (
          (_([s], (g, { path: b }) => {
            if (g.kind !== "rule") return 0;
            for (let v of b.slice(0, -1))
              if (v.kind === "rule") return (m = !1), 2;
            (g.selector = `&:has(${g.selector.replaceAll("&", "*")})`),
              (m = !0);
          }),
          !m)
        )
          return null;
      }),
      r.suggest("has", () =>
        Array.from(r.keys()).filter((s) => r.compoundsWith("has", s))
      ),
      r.functional("aria", (s, d) => {
        if (!d.value || d.modifier) return null;
        d.value.kind === "arbitrary"
          ? (s.nodes = [U(`&[aria-${ur(d.value.value)}]`, s.nodes)])
          : (s.nodes = [U(`&[aria-${d.value.value}="true"]`, s.nodes)]);
      }),
      r.suggest("aria", () => [
        "busy",
        "checked",
        "disabled",
        "expanded",
        "hidden",
        "pressed",
        "readonly",
        "required",
        "selected",
      ]),
      r.functional("data", (s, d) => {
        if (!d.value || d.modifier) return null;
        s.nodes = [U(`&[data-${ur(d.value.value)}]`, s.nodes)];
      }),
      r.functional("nth", (s, d) => {
        if (
          !d.value ||
          d.modifier ||
          (d.value.kind === "named" && !$(d.value.value))
        )
          return null;
        s.nodes = [U(`&:nth-child(${d.value.value})`, s.nodes)];
      }),
      r.functional("nth-last", (s, d) => {
        if (
          !d.value ||
          d.modifier ||
          (d.value.kind === "named" && !$(d.value.value))
        )
          return null;
        s.nodes = [U(`&:nth-last-child(${d.value.value})`, s.nodes)];
      }),
      r.functional("nth-of-type", (s, d) => {
        if (
          !d.value ||
          d.modifier ||
          (d.value.kind === "named" && !$(d.value.value))
        )
          return null;
        s.nodes = [U(`&:nth-of-type(${d.value.value})`, s.nodes)];
      }),
      r.functional("nth-last-of-type", (s, d) => {
        if (
          !d.value ||
          d.modifier ||
          (d.value.kind === "named" && !$(d.value.value))
        )
          return null;
        s.nodes = [U(`&:nth-last-of-type(${d.value.value})`, s.nodes)];
      }),
      r.functional(
        "supports",
        (s, d) => {
          if (!d.value || d.modifier) return null;
          let m = d.value.value;
          if (m === null) return null;
          if (/^[\w-]*\s*\(/.test(m)) {
            let g = m.replace(/\b(and|or|not)\b/g, " $1 ");
            s.nodes = [z("@supports", g, s.nodes)];
            return;
          }
          m.includes(":") || (m = `${m}: var(--tw)`),
            (m[0] !== "(" || m[m.length - 1] !== ")") && (m = `(${m})`),
            (s.nodes = [z("@supports", m, s.nodes)]);
        },
        { compounds: 1 }
      ),
      o("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]),
      o("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]),
      o("contrast-more", ["@media (prefers-contrast: more)"]),
      o("contrast-less", ["@media (prefers-contrast: less)"]);
    {
      let s = function (d, m, g, b) {
        if (d === m) return 0;
        let v = b.get(d);
        if (v === null) return g === "asc" ? -1 : 1;
        let y = b.get(m);
        return y === null ? (g === "asc" ? 1 : -1) : se(v, y, g);
      };
      var f = s;
      {
        let d = t.namespace("--breakpoint"),
          m = new I((g) => {
            switch (g.kind) {
              case "static":
                return t.resolveValue(g.root, ["--breakpoint"]) ?? null;
              case "functional": {
                if (!g.value || g.modifier) return null;
                let b = null;
                return (
                  g.value.kind === "arbitrary"
                    ? (b = g.value.value)
                    : g.value.kind === "named" &&
                      (b = t.resolveValue(g.value.value, ["--breakpoint"])),
                  !b || b.includes("var(") ? null : b
                );
              }
              case "arbitrary":
              case "compound":
                return null;
            }
          });
        r.group(
          () => {
            r.functional(
              "max",
              (g, b) => {
                if (b.modifier) return null;
                let v = m.get(b);
                if (v === null) return null;
                g.nodes = [z("@media", `(width < ${v})`, g.nodes)];
              },
              { compounds: 1 }
            );
          },
          (g, b) => s(g, b, "desc", m)
        ),
          r.suggest("max", () =>
            Array.from(d.keys()).filter((g) => g !== null)
          ),
          r.group(
            () => {
              for (let [g, b] of t.namespace("--breakpoint"))
                g !== null &&
                  r.static(
                    g,
                    (v) => {
                      v.nodes = [z("@media", `(width >= ${b})`, v.nodes)];
                    },
                    { compounds: 1 }
                  );
              r.functional(
                "min",
                (g, b) => {
                  if (b.modifier) return null;
                  let v = m.get(b);
                  if (v === null) return null;
                  g.nodes = [z("@media", `(width >= ${v})`, g.nodes)];
                },
                { compounds: 1 }
              );
            },
            (g, b) => s(g, b, "asc", m)
          ),
          r.suggest("min", () =>
            Array.from(d.keys()).filter((g) => g !== null)
          );
      }
      {
        let d = t.namespace("--container"),
          m = new I((g) => {
            switch (g.kind) {
              case "functional": {
                if (g.value === null) return null;
                let b = null;
                return (
                  g.value.kind === "arbitrary"
                    ? (b = g.value.value)
                    : g.value.kind === "named" &&
                      (b = t.resolveValue(g.value.value, ["--container"])),
                  !b || b.includes("var(") ? null : b
                );
              }
              case "static":
              case "arbitrary":
              case "compound":
                return null;
            }
          });
        r.group(
          () => {
            r.functional(
              "@max",
              (g, b) => {
                let v = m.get(b);
                if (v === null) return null;
                g.nodes = [
                  z(
                    "@container",
                    b.modifier
                      ? `${b.modifier.value} (width < ${v})`
                      : `(width < ${v})`,
                    g.nodes
                  ),
                ];
              },
              { compounds: 1 }
            );
          },
          (g, b) => s(g, b, "desc", m)
        ),
          r.suggest("@max", () =>
            Array.from(d.keys()).filter((g) => g !== null)
          ),
          r.group(
            () => {
              r.functional(
                "@",
                (g, b) => {
                  let v = m.get(b);
                  if (v === null) return null;
                  g.nodes = [
                    z(
                      "@container",
                      b.modifier
                        ? `${b.modifier.value} (width >= ${v})`
                        : `(width >= ${v})`,
                      g.nodes
                    ),
                  ];
                },
                { compounds: 1 }
              ),
                r.functional(
                  "@min",
                  (g, b) => {
                    let v = m.get(b);
                    if (v === null) return null;
                    g.nodes = [
                      z(
                        "@container",
                        b.modifier
                          ? `${b.modifier.value} (width >= ${v})`
                          : `(width >= ${v})`,
                        g.nodes
                      ),
                    ];
                  },
                  { compounds: 1 }
                );
            },
            (g, b) => s(g, b, "asc", m)
          ),
          r.suggest("@min", () =>
            Array.from(d.keys()).filter((g) => g !== null)
          ),
          r.suggest("@", () => Array.from(d.keys()).filter((g) => g !== null));
      }
    }
    return (
      o("portrait", ["@media (orientation: portrait)"]),
      o("landscape", ["@media (orientation: landscape)"]),
      o("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']),
      o("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']),
      o("dark", ["@media (prefers-color-scheme: dark)"]),
      o("starting", ["@starting-style"]),
      o("print", ["@media print"]),
      o("forced-colors", ["@media (forced-colors: active)"]),
      r
    );
  }
  function ur(t) {
    if (t.includes("=")) {
      let [r, ...o] = P(t, "="),
        e = o.join("=").trim();
      if (e[0] === "'" || e[0] === '"') return t;
      if (e.length > 1) {
        let n = e[e.length - 1];
        if (
          e[e.length - 2] === " " &&
          (n === "i" || n === "I" || n === "s" || n === "S")
        )
          return `${r}="${e.slice(0, -2)}" ${n}`;
      }
      return `${r}="${e}"`;
    }
    return t;
  }
  function ht(t, r) {
    _(t, (o, { replaceWith: e }) => {
      if (o.kind === "at-rule" && o.name === "@slot") e(r);
      else if (
        o.kind === "at-rule" &&
        (o.name === "@keyframes" || o.name === "@property")
      )
        return Object.assign(o, D([z(o.name, o.params, o.nodes)])), 1;
    });
  }
  function fr(t) {
    let r = tr(t),
      o = cr(t),
      e = new I((f) => Gt(f, p)),
      n = new I((f) => Array.from(Ht(f, p))),
      u = new I((f) => {
        let s = dr(f, p);
        try {
          he(
            s.map(({ node: d }) => d),
            p
          );
        } catch {
          return [];
        }
        return s;
      }),
      a = new I(
        (f) => (
          ee(L(f), (s) => {
            if (!(s.kind !== "function" || s.value !== "var"))
              return (
                ee(s.nodes, (d) => {
                  d.kind !== "word" ||
                    d.value[0] !== "-" ||
                    d.value[1] !== "-" ||
                    t.markUsedVariable(d.value);
                }),
                1
              );
          }),
          !0
        )
      ),
      p = {
        theme: t,
        utilities: r,
        variants: o,
        invalidCandidates: new Set(),
        important: !1,
        candidatesToCss(f) {
          let s = [];
          for (let d of f) {
            let m = !1,
              { astNodes: g } = oe([d], this, {
                onInvalidCandidate() {
                  m = !0;
                },
              });
            (g = ae(g, p)), g.length === 0 || m ? s.push(null) : s.push(Y(g));
          }
          return s;
        },
        getClassOrder(f) {
          return sr(this, f);
        },
        getClassList() {
          return lr(this);
        },
        getVariants() {
          return ar(this);
        },
        parseCandidate(f) {
          return n.get(f);
        },
        parseVariant(f) {
          return e.get(f);
        },
        compileAstNodes(f) {
          return u.get(f);
        },
        getVariantOrder() {
          let f = Array.from(e.values());
          f.sort((g, b) => this.variants.compare(g, b));
          let s = new Map(),
            d,
            m = 0;
          for (let g of f)
            g !== null &&
              (d !== void 0 && this.variants.compare(d, g) !== 0 && m++,
              s.set(g, m),
              (d = g));
          return s;
        },
        resolveThemeValue(f) {
          let s = f.lastIndexOf("/"),
            d = null;
          s !== -1 && ((d = f.slice(s + 1).trim()), (f = f.slice(0, s).trim()));
          let m = t.get([f]) ?? void 0;
          return d && m ? J(m, d) : m;
        },
        trackUsedVariables(f) {
          a.get(f);
        },
      };
    return p;
  }
  var bt = [
    "container-type",
    "pointer-events",
    "visibility",
    "position",
    "inset",
    "inset-inline",
    "inset-block",
    "inset-inline-start",
    "inset-inline-end",
    "top",
    "right",
    "bottom",
    "left",
    "isolation",
    "z-index",
    "order",
    "grid-column",
    "grid-column-start",
    "grid-column-end",
    "grid-row",
    "grid-row-start",
    "grid-row-end",
    "float",
    "clear",
    "--tw-container-component",
    "margin",
    "margin-inline",
    "margin-block",
    "margin-inline-start",
    "margin-inline-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "box-sizing",
    "display",
    "field-sizing",
    "aspect-ratio",
    "height",
    "max-height",
    "min-height",
    "width",
    "max-width",
    "min-width",
    "flex",
    "flex-shrink",
    "flex-grow",
    "flex-basis",
    "table-layout",
    "caption-side",
    "border-collapse",
    "border-spacing",
    "transform-origin",
    "translate",
    "--tw-translate-x",
    "--tw-translate-y",
    "scale",
    "--tw-scale-x",
    "--tw-scale-y",
    "--tw-scale-z",
    "rotate",
    "--tw-rotate-x",
    "--tw-rotate-y",
    "--tw-rotate-z",
    "--tw-skew-x",
    "--tw-skew-y",
    "transform",
    "animation",
    "cursor",
    "touch-action",
    "--tw-pan-x",
    "--tw-pan-y",
    "--tw-pinch-zoom",
    "resize",
    "scroll-snap-type",
    "--tw-scroll-snap-strictness",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-margin",
    "scroll-margin-inline",
    "scroll-margin-block",
    "scroll-margin-inline-start",
    "scroll-margin-inline-end",
    "scroll-margin-top",
    "scroll-margin-right",
    "scroll-margin-bottom",
    "scroll-margin-left",
    "scroll-padding",
    "scroll-padding-inline",
    "scroll-padding-block",
    "scroll-padding-inline-start",
    "scroll-padding-inline-end",
    "scroll-padding-top",
    "scroll-padding-right",
    "scroll-padding-bottom",
    "scroll-padding-left",
    "list-style-position",
    "list-style-type",
    "list-style-image",
    "appearance",
    "columns",
    "break-before",
    "break-inside",
    "break-after",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-template-columns",
    "grid-template-rows",
    "flex-direction",
    "flex-wrap",
    "place-content",
    "place-items",
    "align-content",
    "align-items",
    "justify-content",
    "justify-items",
    "gap",
    "column-gap",
    "row-gap",
    "--tw-space-x-reverse",
    "--tw-space-y-reverse",
    "divide-x-width",
    "divide-y-width",
    "--tw-divide-y-reverse",
    "divide-style",
    "divide-color",
    "place-self",
    "align-self",
    "justify-self",
    "overflow",
    "overflow-x",
    "overflow-y",
    "overscroll-behavior",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "scroll-behavior",
    "border-radius",
    "border-start-radius",
    "border-end-radius",
    "border-top-radius",
    "border-right-radius",
    "border-bottom-radius",
    "border-left-radius",
    "border-start-start-radius",
    "border-start-end-radius",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-width",
    "border-inline-width",
    "border-block-width",
    "border-inline-start-width",
    "border-inline-end-width",
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
    "border-style",
    "border-inline-style",
    "border-block-style",
    "border-inline-start-style",
    "border-inline-end-style",
    "border-top-style",
    "border-right-style",
    "border-bottom-style",
    "border-left-style",
    "border-color",
    "border-inline-color",
    "border-block-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
    "background-color",
    "background-image",
    "--tw-gradient-position",
    "--tw-gradient-stops",
    "--tw-gradient-via-stops",
    "--tw-gradient-from",
    "--tw-gradient-from-position",
    "--tw-gradient-via",
    "--tw-gradient-via-position",
    "--tw-gradient-to",
    "--tw-gradient-to-position",
    "box-decoration-break",
    "background-size",
    "background-attachment",
    "background-clip",
    "background-position",
    "background-repeat",
    "background-origin",
    "fill",
    "stroke",
    "stroke-width",
    "object-fit",
    "object-position",
    "padding",
    "padding-inline",
    "padding-block",
    "padding-inline-start",
    "padding-inline-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "text-align",
    "text-indent",
    "vertical-align",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "letter-spacing",
    "text-wrap",
    "overflow-wrap",
    "word-break",
    "text-overflow",
    "hyphens",
    "white-space",
    "color",
    "text-transform",
    "font-style",
    "font-stretch",
    "font-variant-numeric",
    "text-decoration-line",
    "text-decoration-color",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-underline-offset",
    "-webkit-font-smoothing",
    "placeholder-color",
    "caret-color",
    "accent-color",
    "color-scheme",
    "opacity",
    "background-blend-mode",
    "mix-blend-mode",
    "box-shadow",
    "--tw-shadow",
    "--tw-shadow-color",
    "--tw-ring-shadow",
    "--tw-ring-color",
    "--tw-inset-shadow",
    "--tw-inset-shadow-color",
    "--tw-inset-ring-shadow",
    "--tw-inset-ring-color",
    "--tw-ring-offset-width",
    "--tw-ring-offset-color",
    "outline",
    "outline-width",
    "outline-offset",
    "outline-color",
    "--tw-blur",
    "--tw-brightness",
    "--tw-contrast",
    "--tw-drop-shadow",
    "--tw-grayscale",
    "--tw-hue-rotate",
    "--tw-invert",
    "--tw-saturate",
    "--tw-sepia",
    "filter",
    "--tw-backdrop-blur",
    "--tw-backdrop-brightness",
    "--tw-backdrop-contrast",
    "--tw-backdrop-grayscale",
    "--tw-backdrop-hue-rotate",
    "--tw-backdrop-invert",
    "--tw-backdrop-opacity",
    "--tw-backdrop-saturate",
    "--tw-backdrop-sepia",
    "backdrop-filter",
    "transition-property",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-timing-function",
    "will-change",
    "contain",
    "content",
    "forced-color-adjust",
  ];
  function oe(t, r, { onInvalidCandidate: o } = {}) {
    let e = new Map(),
      n = [],
      u = new Map();
    for (let p of t) {
      if (r.invalidCandidates.has(p)) {
        o?.(p);
        continue;
      }
      let f = r.parseCandidate(p);
      if (f.length === 0) {
        o?.(p);
        continue;
      }
      u.set(p, f);
    }
    let a = r.getVariantOrder();
    for (let [p, f] of u) {
      let s = !1;
      for (let d of f) {
        let m = r.compileAstNodes(d);
        if (m.length !== 0) {
          s = !0;
          for (let { node: g, propertySort: b } of m) {
            let v = 0n;
            for (let y of d.variants) v |= 1n << BigInt(a.get(y));
            e.set(g, { properties: b, variants: v, candidate: p }), n.push(g);
          }
        }
      }
      s || o?.(p);
    }
    return (
      n.sort((p, f) => {
        let s = e.get(p),
          d = e.get(f);
        if (s.variants - d.variants !== 0n)
          return Number(s.variants - d.variants);
        let m = 0;
        for (
          ;
          s.properties.length < m &&
          d.properties.length < m &&
          s.properties[m] === d.properties[m];

        )
          m += 1;
        return (
          (s.properties[m] ?? 1 / 0) - (d.properties[m] ?? 1 / 0) ||
          d.properties.length - s.properties.length ||
          Fe(s.candidate, d.candidate)
        );
      }),
      { astNodes: n, nodeSorting: e }
    );
  }
  function dr(t, r) {
    let o = Zo(t, r);
    if (o.length === 0) return [];
    let e = [],
      n = `.${pe(t.raw)}`;
    for (let u of o) {
      let a = Qo(u);
      (t.important || r.important) && mr(u);
      let p = { kind: "rule", selector: n, nodes: u };
      for (let f of t.variants) if (be(p, f, r.variants) === null) return [];
      e.push({ node: p, propertySort: a });
    }
    return e;
  }
  function be(t, r, o, e = 0) {
    if (r.kind === "arbitrary") {
      if (r.relative && e === 0) return null;
      t.nodes = [M(r.selector, t.nodes)];
      return;
    }
    let { applyFn: n } = o.get(r.root);
    if (r.kind === "compound") {
      let a = z("@slot");
      if (
        be(a, r.variant, o, e + 1) === null ||
        (r.root === "not" && a.nodes.length > 1)
      )
        return null;
      for (let f of a.nodes)
        if ((f.kind !== "rule" && f.kind !== "at-rule") || n(f, r) === null)
          return null;
      _(a.nodes, (f) => {
        if ((f.kind === "rule" || f.kind === "at-rule") && f.nodes.length <= 0)
          return (f.nodes = t.nodes), 1;
      }),
        (t.nodes = a.nodes);
      return;
    }
    if (n(t, r) === null) return null;
  }
  function pr(t) {
    let r = t.options?.types ?? [];
    return r.length > 1 && r.includes("any");
  }
  function Zo(t, r) {
    if (t.kind === "arbitrary") {
      let a = t.value;
      return (
        t.modifier && (a = W(a, t.modifier, r.theme)),
        a === null ? [] : [[l(t.property, a)]]
      );
    }
    let o = r.utilities.get(t.root) ?? [],
      e = [],
      n = o.filter((a) => !pr(a));
    for (let a of n) {
      if (a.kind !== t.kind) continue;
      let p = a.compileFn(t);
      if (p !== void 0) {
        if (p === null) return e;
        e.push(p);
      }
    }
    if (e.length > 0) return e;
    let u = o.filter((a) => pr(a));
    for (let a of u) {
      if (a.kind !== t.kind) continue;
      let p = a.compileFn(t);
      if (p !== void 0) {
        if (p === null) return e;
        e.push(p);
      }
    }
    return e;
  }
  function mr(t) {
    for (let r of t)
      r.kind !== "at-root" &&
        (r.kind === "declaration"
          ? (r.important = !0)
          : (r.kind === "rule" || r.kind === "at-rule") && mr(r.nodes));
  }
  function Qo(t) {
    let r = new Set(),
      o = t.slice();
    for (; o.length > 0; ) {
      let e = o.shift();
      if (e.kind === "declaration") {
        if (e.property === "--tw-sort") {
          let u = bt.indexOf(e.value ?? "");
          if (u !== -1) {
            r.add(u);
            break;
          }
        }
        let n = bt.indexOf(e.property);
        n !== -1 && r.add(n);
      } else if (e.kind === "rule" || e.kind === "at-rule")
        for (let n of e.nodes) o.push(n);
    }
    return Array.from(r).sort((e, n) => e - n);
  }
  function $e(t, r) {
    let o = 0,
      e = M("&", t),
      n = new Set(),
      u = new I(() => new Set()),
      a = new I(() => new Set());
    _([e], (m, { parent: g }) => {
      if (m.kind === "at-rule") {
        if (m.name === "@keyframes")
          return (
            _(m.nodes, (b) => {
              if (b.kind === "at-rule" && b.name === "@apply")
                throw new Error("You cannot use `@apply` inside `@keyframes`.");
            }),
            1
          );
        if (m.name === "@utility") {
          let b = m.params.replace(/-\*$/, "");
          a.get(b).add(m),
            _(m.nodes, (v) => {
              if (!(v.kind !== "at-rule" || v.name !== "@apply")) {
                n.add(m);
                for (let y of gr(v, r)) u.get(m).add(y);
              }
            });
          return;
        }
        if (m.name === "@apply") {
          if (g === null) return;
          (o |= 1), n.add(g);
          for (let b of gr(m, r)) u.get(g).add(b);
        }
      }
    });
    let p = new Set(),
      f = [],
      s = new Set();
    function d(m, g = []) {
      if (!p.has(m)) {
        if (s.has(m)) {
          let b = g[(g.indexOf(m) + 1) % g.length];
          throw (
            (m.kind === "at-rule" &&
              m.name === "@utility" &&
              b.kind === "at-rule" &&
              b.name === "@utility" &&
              _(m.nodes, (v) => {
                if (v.kind !== "at-rule" || v.name !== "@apply") return;
                let y = v.params.split(/\s+/g);
                for (let x of y)
                  for (let T of r.parseCandidate(x))
                    switch (T.kind) {
                      case "arbitrary":
                        break;
                      case "static":
                      case "functional":
                        if (b.params.replace(/-\*$/, "") === T.root)
                          throw new Error(
                            `You cannot \`@apply\` the \`${x}\` utility here because it creates a circular dependency.`
                          );
                        break;
                      default:
                    }
              }),
            new Error(`Circular dependency detected:

${Y([m])}
Relies on:

${Y([b])}`))
          );
        }
        s.add(m);
        for (let b of u.get(m))
          for (let v of a.get(b)) g.push(m), d(v, g), g.pop();
        p.add(m), s.delete(m), f.push(m);
      }
    }
    for (let m of n) d(m);
    return (
      _(f, (m, { replaceWith: g }) => {
        if (m.kind !== "at-rule" || m.name !== "@apply") return;
        let b = m.params.split(/\s+/g);
        {
          let v = oe(b, r, {
              onInvalidCandidate: (x) => {
                throw new Error(`Cannot apply unknown utility class: ${x}`);
              },
            }).astNodes,
            y = [];
          for (let x of v)
            if (x.kind === "rule") for (let T of x.nodes) y.push(T);
            else y.push(x);
          g(y);
        }
      }),
      o
    );
  }
  function* gr(t, r) {
    for (let o of t.params.split(/\s+/g))
      for (let e of r.parseCandidate(o))
        switch (e.kind) {
          case "arbitrary":
            break;
          case "static":
          case "functional":
            yield e.root;
            break;
          default:
        }
  }
  async function yt(t, r, o, e = 0) {
    let n = 0,
      u = [];
    return (
      _(t, (a, { replaceWith: p }) => {
        if (
          a.kind === "at-rule" &&
          (a.name === "@import" || a.name === "@reference")
        ) {
          let f = Xo(L(a.params));
          if (f === null) return;
          a.name === "@reference" && (f.media = "reference"), (n |= 2);
          let { uri: s, layer: d, media: m, supports: g } = f;
          if (
            s.startsWith("data:") ||
            s.startsWith("http://") ||
            s.startsWith("https://")
          )
            return;
          let b = X({}, []);
          return (
            u.push(
              (async () => {
                if (e > 100)
                  throw new Error(
                    `Exceeded maximum recursion depth while resolving \`${s}\` in \`${r}\`)`
                  );
                let v = await o(s, r),
                  y = de(v.content);
                await yt(y, v.base, o, e + 1),
                  (b.nodes = en([X({ base: v.base }, y)], d, m, g));
              })()
            ),
            p(b),
            1
          );
        }
      }),
      u.length > 0 && (await Promise.all(u)),
      n
    );
  }
  function Xo(t) {
    let r,
      o = null,
      e = null,
      n = null;
    for (let u = 0; u < t.length; u++) {
      let a = t[u];
      if (a.kind !== "separator") {
        if (a.kind === "word" && !r) {
          if (!a.value || (a.value[0] !== '"' && a.value[0] !== "'"))
            return null;
          r = a.value.slice(1, -1);
          continue;
        }
        if ((a.kind === "function" && a.value.toLowerCase() === "url") || !r)
          return null;
        if (
          (a.kind === "word" || a.kind === "function") &&
          a.value.toLowerCase() === "layer"
        ) {
          if (o) return null;
          if (n)
            throw new Error(
              "`layer(\u2026)` in an `@import` should come before any other functions or conditions"
            );
          "nodes" in a ? (o = H(a.nodes)) : (o = "");
          continue;
        }
        if (a.kind === "function" && a.value.toLowerCase() === "supports") {
          if (n) return null;
          n = H(a.nodes);
          continue;
        }
        e = H(t.slice(u));
        break;
      }
    }
    return r ? { uri: r, layer: o, media: e, supports: n } : null;
  }
  function en(t, r, o, e) {
    let n = t;
    return (
      r !== null && (n = [z("@layer", r, n)]),
      o !== null && (n = [z("@media", o, n)]),
      e !== null && (n = [z("@supports", e[0] === "(" ? e : `(${e})`, n)]),
      n
    );
  }
  function ye(t, r = null) {
    return Array.isArray(t) &&
      t.length === 2 &&
      typeof t[1] == "object" &&
      typeof t[1] !== null
      ? r
        ? t[1][r] ?? null
        : t[0]
      : Array.isArray(t) && r === null
      ? t.join(", ")
      : typeof t == "string" && r === null
      ? t
      : null;
  }
  function hr(t, { theme: r }, o) {
    for (let e of o) {
      let n = Me([e]);
      n && t.theme.clearNamespace(`--${n}`, 4);
    }
    for (let [e, n] of tn(r)) {
      if (typeof n != "string" && typeof n != "number") continue;
      if (
        (typeof n == "string" && (n = n.replace(/<alpha-value>/g, "1")),
        e[0] === "opacity" && (typeof n == "number" || typeof n == "string"))
      ) {
        let a = typeof n == "string" ? parseFloat(n) : n;
        a >= 0 && a <= 1 && (n = a * 100 + "%");
      }
      let u = Me(e);
      u && t.theme.add(`--${u}`, "" + n, 7);
    }
    if (Object.hasOwn(r, "fontFamily")) {
      let e = 5;
      {
        let n = ye(r.fontFamily.sans);
        n &&
          t.theme.hasDefault("--font-sans") &&
          (t.theme.add("--default-font-family", n, e),
          t.theme.add(
            "--default-font-feature-settings",
            ye(r.fontFamily.sans, "fontFeatureSettings") ?? "normal",
            e
          ),
          t.theme.add(
            "--default-font-variation-settings",
            ye(r.fontFamily.sans, "fontVariationSettings") ?? "normal",
            e
          ));
      }
      {
        let n = ye(r.fontFamily.mono);
        n &&
          t.theme.hasDefault("--font-mono") &&
          (t.theme.add("--default-mono-font-family", n, e),
          t.theme.add(
            "--default-mono-font-feature-settings",
            ye(r.fontFamily.mono, "fontFeatureSettings") ?? "normal",
            e
          ),
          t.theme.add(
            "--default-mono-font-variation-settings",
            ye(r.fontFamily.mono, "fontVariationSettings") ?? "normal",
            e
          ));
      }
    }
    return r;
  }
  function tn(t) {
    let r = [];
    return (
      br(t, [], (o, e) => {
        if (on(o)) return r.push([e, o]), 1;
        if (nn(o)) {
          r.push([e, o[0]]);
          for (let n of Reflect.ownKeys(o[1]))
            r.push([[...e, `-${n}`], o[1][n]]);
          return 1;
        }
        if (Array.isArray(o) && o.every((n) => typeof n == "string"))
          return r.push([e, o.join(", ")]), 1;
      }),
      r
    );
  }
  var rn = /^[a-zA-Z0-9-_%/\.]+$/;
  function Me(t) {
    if (t[0] === "container") return null;
    (t = structuredClone(t)),
      t[0] === "animation" && (t[0] = "animate"),
      t[0] === "aspectRatio" && (t[0] = "aspect"),
      t[0] === "borderRadius" && (t[0] = "radius"),
      t[0] === "boxShadow" && (t[0] = "shadow"),
      t[0] === "colors" && (t[0] = "color"),
      t[0] === "containers" && (t[0] = "container"),
      t[0] === "fontFamily" && (t[0] = "font"),
      t[0] === "fontSize" && (t[0] = "text"),
      t[0] === "letterSpacing" && (t[0] = "tracking"),
      t[0] === "lineHeight" && (t[0] = "leading"),
      t[0] === "maxWidth" && (t[0] = "container"),
      t[0] === "screens" && (t[0] = "breakpoint"),
      t[0] === "transitionTimingFunction" && (t[0] = "ease");
    for (let r of t) if (!rn.test(r)) return null;
    return t
      .map((r, o, e) => (r === "1" && o !== e.length - 1 ? "" : r))
      .map((r) =>
        r
          .replaceAll(".", "_")
          .replace(/([a-z])([A-Z])/g, (o, e, n) => `${e}-${n.toLowerCase()}`)
      )
      .filter((r, o) => r !== "DEFAULT" || o !== t.length - 1)
      .join("-");
  }
  function on(t) {
    return typeof t == "number" || typeof t == "string";
  }
  function nn(t) {
    if (
      !Array.isArray(t) ||
      t.length !== 2 ||
      (typeof t[0] != "string" && typeof t[0] != "number") ||
      t[1] === void 0 ||
      t[1] === null ||
      typeof t[1] != "object"
    )
      return !1;
    for (let r of Reflect.ownKeys(t[1]))
      if (
        typeof r != "string" ||
        (typeof t[1][r] != "string" && typeof t[1][r] != "number")
      )
        return !1;
    return !0;
  }
  function br(t, r = [], o) {
    for (let e of Reflect.ownKeys(t)) {
      let n = t[e];
      if (n == null) continue;
      let u = [...r, e],
        a = o(n, u) ?? 0;
      if (a !== 1) {
        if (a === 2) return 2;
        if (!(!Array.isArray(n) && typeof n != "object") && br(n, u, o) === 2)
          return 2;
      }
    }
  }
  function We(t) {
    let r = [];
    for (let o of P(t, ".")) {
      if (!o.includes("[")) {
        r.push(o);
        continue;
      }
      let e = 0;
      for (;;) {
        let n = o.indexOf("[", e),
          u = o.indexOf("]", n);
        if (n === -1 || u === -1) break;
        n > e && r.push(o.slice(e, n)), r.push(o.slice(n + 1, u)), (e = u + 1);
      }
      e <= o.length - 1 && r.push(o.slice(e));
    }
    return r;
  }
  function ve(t) {
    if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
    let r = Object.getPrototypeOf(t);
    return r === null || Object.getPrototypeOf(r) === null;
  }
  function Ne(t, r, o, e = []) {
    for (let n of r)
      if (n != null)
        for (let u of Reflect.ownKeys(n)) {
          e.push(u);
          let a = o(t[u], n[u], e);
          a !== void 0
            ? (t[u] = a)
            : !ve(t[u]) || !ve(n[u])
            ? (t[u] = n[u])
            : (t[u] = Ne({}, [t[u], n[u]], o, e)),
            e.pop();
        }
    return t;
  }
  function Be(t, r, o) {
    return function (n, u) {
      let a = n.lastIndexOf("/"),
        p = null;
      a !== -1 && ((p = n.slice(a + 1).trim()), (n = n.slice(0, a).trim()));
      let f = (() => {
        let s = We(n),
          [d, m] = ln(t.theme, s),
          g = o(yr(r() ?? {}, s) ?? null);
        if (
          (typeof g == "string" && (g = g.replace("<alpha-value>", "1")),
          typeof d != "object")
        )
          return typeof m != "object" && m & 4 ? g ?? d : d;
        if (g !== null && typeof g == "object" && !Array.isArray(g)) {
          let b = Ne({}, [g], (v, y) => y);
          if (d === null && Object.hasOwn(g, "__CSS_VALUES__")) {
            let v = {};
            for (let y in g.__CSS_VALUES__) (v[y] = g[y]), delete b[y];
            d = v;
          }
          for (let v in d)
            v !== "__CSS_VALUES__" &&
              ((g?.__CSS_VALUES__?.[v] & 4 && yr(b, v.split("-")) !== void 0) ||
                (b[le(v)] = d[v]));
          return b;
        }
        if (Array.isArray(d) && Array.isArray(m) && Array.isArray(g)) {
          let b = d[0],
            v = d[1];
          m[0] & 4 && (b = g[0] ?? b);
          for (let y of Object.keys(v)) m[1][y] & 4 && (v[y] = g[1][y] ?? v[y]);
          return [b, v];
        }
        return d ?? g;
      })();
      return p && typeof f == "string" && (f = J(f, p)), f ?? u;
    };
  }
  function ln(t, r) {
    if (r.length === 1 && r[0].startsWith("--"))
      return [t.get([r[0]]), t.getOptions(r[0])];
    let o = Me(r),
      e = new Map(),
      n = new I(() => new Map()),
      u = t.namespace(`--${o}`);
    if (u.size === 0) return [null, 0];
    let a = new Map();
    for (let [d, m] of u) {
      if (!d || !d.includes("--")) {
        e.set(d, m), a.set(d, t.getOptions(d ? `--${o}-${d}` : `--${o}`));
        continue;
      }
      let g = d.indexOf("--"),
        b = d.slice(0, g),
        v = d.slice(g + 2);
      (v = v.replace(/-([a-z])/g, (y, x) => x.toUpperCase())),
        n.get(b === "" ? null : b).set(v, [m, t.getOptions(`--${o}${d}`)]);
    }
    let p = t.getOptions(`--${o}`);
    for (let [d, m] of n) {
      let g = e.get(d);
      if (typeof g != "string") continue;
      let b = {},
        v = {};
      for (let [y, [x, T]] of m) (b[y] = x), (v[y] = T);
      e.set(d, [g, b]), a.set(d, [p, v]);
    }
    let f = {},
      s = {};
    for (let [d, m] of e) vr(f, [d ?? "DEFAULT"], m);
    for (let [d, m] of a) vr(s, [d ?? "DEFAULT"], m);
    return r[r.length - 1] === "DEFAULT"
      ? [f?.DEFAULT ?? null, s.DEFAULT ?? 0]
      : "DEFAULT" in f && Object.keys(f).length === 1
      ? [f.DEFAULT, s.DEFAULT ?? 0]
      : ((f.__CSS_VALUES__ = s), [f, s]);
  }
  function yr(t, r) {
    for (let o = 0; o < r.length; ++o) {
      let e = r[o];
      if (t?.[e] === void 0) {
        if (r[o + 1] === void 0) return;
        r[o + 1] = `${e}-${r[o + 1]}`;
        continue;
      }
      t = t[e];
    }
    return t;
  }
  function vr(t, r, o) {
    for (let e of r.slice(0, -1)) t[e] === void 0 && (t[e] = {}), (t = t[e]);
    t[r[r.length - 1]] = o;
  }
  function an(t) {
    return { kind: "combinator", value: t };
  }
  function sn(t, r) {
    return { kind: "function", value: t, nodes: r };
  }
  function Te(t) {
    return { kind: "selector", value: t };
  }
  function un(t) {
    return { kind: "separator", value: t };
  }
  function cn(t) {
    return { kind: "value", value: t };
  }
  function qe(t, r, o = null) {
    for (let e = 0; e < t.length; e++) {
      let n = t[e],
        u = !1,
        a = 0,
        p =
          r(n, {
            parent: o,
            replaceWith(f) {
              (u = !0),
                Array.isArray(f)
                  ? f.length === 0
                    ? (t.splice(e, 1), (a = 0))
                    : f.length === 1
                    ? ((t[e] = f[0]), (a = 1))
                    : (t.splice(e, 1, ...f), (a = f.length))
                  : ((t[e] = f), (a = 1));
            },
          }) ?? 0;
      if (u) {
        p === 0 ? e-- : (e += a - 1);
        continue;
      }
      if (p === 2) return 2;
      if (p !== 1 && n.kind === "function" && qe(n.nodes, r, n) === 2) return 2;
    }
  }
  function He(t) {
    let r = "";
    for (let o of t)
      switch (o.kind) {
        case "combinator":
        case "selector":
        case "separator":
        case "value": {
          r += o.value;
          break;
        }
        case "function":
          r += o.value + "(" + He(o.nodes) + ")";
      }
    return r;
  }
  var kr = 92,
    fn = 93,
    wr = 41,
    dn = 58,
    xr = 44,
    pn = 34,
    mn = 46,
    Ar = 62,
    Cr = 10,
    gn = 35,
    Sr = 91,
    $r = 40,
    Nr = 43,
    hn = 39,
    Tr = 32,
    Vr = 9,
    Er = 126;
  function vt(t) {
    t = t.replaceAll(
      `\r
`,
      `
`
    );
    let r = [],
      o = [],
      e = null,
      n = "",
      u;
    for (let a = 0; a < t.length; a++) {
      let p = t.charCodeAt(a);
      switch (p) {
        case xr:
        case Ar:
        case Cr:
        case Tr:
        case Nr:
        case Vr:
        case Er: {
          if (n.length > 0) {
            let g = Te(n);
            e ? e.nodes.push(g) : r.push(g), (n = "");
          }
          let f = a,
            s = a + 1;
          for (
            ;
            s < t.length &&
            ((u = t.charCodeAt(s)),
            !(
              u !== xr &&
              u !== Ar &&
              u !== Cr &&
              u !== Tr &&
              u !== Nr &&
              u !== Vr &&
              u !== Er
            ));
            s++
          );
          a = s - 1;
          let d = t.slice(f, s),
            m = d.trim() === "," ? un(d) : an(d);
          e ? e.nodes.push(m) : r.push(m);
          break;
        }
        case $r: {
          let f = sn(n, []);
          if (
            ((n = ""),
            f.value !== ":not" &&
              f.value !== ":where" &&
              f.value !== ":has" &&
              f.value !== ":is")
          ) {
            let s = a + 1,
              d = 0;
            for (let g = a + 1; g < t.length; g++) {
              if (((u = t.charCodeAt(g)), u === $r)) {
                d++;
                continue;
              }
              if (u === wr) {
                if (d === 0) {
                  a = g;
                  break;
                }
                d--;
              }
            }
            let m = a;
            f.nodes.push(cn(t.slice(s, m))), (n = ""), (a = m), r.push(f);
            break;
          }
          e ? e.nodes.push(f) : r.push(f), o.push(f), (e = f);
          break;
        }
        case wr: {
          let f = o.pop();
          if (n.length > 0) {
            let s = Te(n);
            f.nodes.push(s), (n = "");
          }
          o.length > 0 ? (e = o[o.length - 1]) : (e = null);
          break;
        }
        case mn:
        case dn:
        case gn: {
          if (n.length > 0) {
            let f = Te(n);
            e ? e.nodes.push(f) : r.push(f);
          }
          n = String.fromCharCode(p);
          break;
        }
        case Sr: {
          if (n.length > 0) {
            let d = Te(n);
            e ? e.nodes.push(d) : r.push(d);
          }
          n = "";
          let f = a,
            s = 0;
          for (let d = a + 1; d < t.length; d++) {
            if (((u = t.charCodeAt(d)), u === Sr)) {
              s++;
              continue;
            }
            if (u === fn) {
              if (s === 0) {
                a = d;
                break;
              }
              s--;
            }
          }
          n += t.slice(f, a + 1);
          break;
        }
        case hn:
        case pn: {
          let f = a;
          for (let s = a + 1; s < t.length; s++)
            if (((u = t.charCodeAt(s)), u === kr)) s += 1;
            else if (u === p) {
              a = s;
              break;
            }
          n += t.slice(f, a + 1);
          break;
        }
        case kr: {
          let f = t.charCodeAt(a + 1);
          (n += String.fromCharCode(p) + String.fromCharCode(f)), (a += 1);
          break;
        }
        default:
          n += String.fromCharCode(p);
      }
    }
    return n.length > 0 && r.push(Te(n)), r;
  }
  var Rr = /^[a-z@][a-zA-Z0-9/%._-]*$/;
  function kt({
    designSystem: t,
    ast: r,
    resolvedConfig: o,
    featuresRef: e,
    referenceMode: n,
  }) {
    let u = {
      addBase(a) {
        if (n) return;
        let p = Q(a);
        (e.current |= he(p, t)), r.push(z("@layer", "base", p));
      },
      addVariant(a, p) {
        if (!Le.test(a))
          throw new Error(
            `\`addVariant('${a}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`
          );
        typeof p == "string" || Array.isArray(p)
          ? t.variants.static(
              a,
              (f) => {
                f.nodes = Or(p, f.nodes);
              },
              { compounds: ce(typeof p == "string" ? [p] : p) }
            )
          : typeof p == "object" && t.variants.fromAst(a, Q(p));
      },
      matchVariant(a, p, f) {
        function s(m, g, b) {
          let v = p(m, { modifier: g?.value ?? null });
          return Or(v, b);
        }
        let d = Object.keys(f?.values ?? {});
        t.variants.group(
          () => {
            t.variants.functional(a, (m, g) => {
              if (!g.value) {
                if (f?.values && "DEFAULT" in f.values) {
                  m.nodes = s(f.values.DEFAULT, g.modifier, m.nodes);
                  return;
                }
                return null;
              }
              if (g.value.kind === "arbitrary")
                m.nodes = s(g.value.value, g.modifier, m.nodes);
              else if (g.value.kind === "named" && f?.values) {
                let b = f.values[g.value.value];
                if (typeof b != "string") return;
                m.nodes = s(b, g.modifier, m.nodes);
              }
            });
          },
          (m, g) => {
            if (m.kind !== "functional" || g.kind !== "functional") return 0;
            let b = m.value ? m.value.value : "DEFAULT",
              v = g.value ? g.value.value : "DEFAULT",
              y = f?.values?.[b] ?? b,
              x = f?.values?.[v] ?? v;
            if (f && typeof f.sort == "function")
              return f.sort(
                { value: y, modifier: m.modifier?.value ?? null },
                { value: x, modifier: g.modifier?.value ?? null }
              );
            let T = d.indexOf(b),
              V = d.indexOf(v);
            return (
              (T = T === -1 ? d.length : T),
              (V = V === -1 ? d.length : V),
              T !== V ? T - V : y < x ? -1 : 1
            );
          }
        );
      },
      addUtilities(a) {
        a = Array.isArray(a) ? a : [a];
        let p = a.flatMap((s) => Object.entries(s));
        p = p.flatMap(([s, d]) => P(s, ",").map((m) => [m.trim(), d]));
        let f = new I(() => []);
        for (let [s, d] of p) {
          if (s.startsWith("@keyframes ")) {
            n || r.push(M(s, Q(d)));
            continue;
          }
          let m = vt(s),
            g = !1;
          if (
            (qe(m, (b) => {
              if (
                b.kind === "selector" &&
                b.value[0] === "." &&
                Rr.test(b.value.slice(1))
              ) {
                let v = b.value;
                b.value = "&";
                let y = He(m),
                  x = v.slice(1),
                  T = y === "&" ? Q(d) : [M(y, Q(d))];
                f.get(x).push(...T), (g = !0), (b.value = v);
                return;
              }
              if (b.kind === "function" && b.value === ":not") return 1;
            }),
            !g)
          )
            throw new Error(
              `\`addUtilities({ '${s}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`
            );
        }
        for (let [s, d] of f)
          t.theme.prefix &&
            _(d, (m) => {
              if (m.kind === "rule") {
                let g = vt(m.selector);
                qe(g, (b) => {
                  b.kind === "selector" &&
                    b.value[0] === "." &&
                    (b.value = `.${t.theme.prefix}\\:${b.value.slice(1)}`);
                }),
                  (m.selector = He(g));
              }
            }),
            t.utilities.static(s, () => {
              let m = structuredClone(d);
              return (e.current |= $e(m, t)), m;
            });
      },
      matchUtilities(a, p) {
        let f = p?.type
          ? Array.isArray(p?.type)
            ? p.type
            : [p.type]
          : ["any"];
        for (let [d, m] of Object.entries(a)) {
          let g = function ({ negative: b }) {
            return (v) => {
              if (
                v.value?.kind === "arbitrary" &&
                f.length > 0 &&
                !f.includes("any") &&
                ((v.value.dataType && !f.includes(v.value.dataType)) ||
                  (!v.value.dataType && !F(v.value.value, f)))
              )
                return;
              let y = f.includes("color"),
                x = null,
                T = !1;
              {
                let E = p?.values ?? {};
                y &&
                  (E = Object.assign(
                    {
                      inherit: "inherit",
                      transparent: "transparent",
                      current: "currentColor",
                    },
                    E
                  )),
                  v.value
                    ? v.value.kind === "arbitrary"
                      ? (x = v.value.value)
                      : v.value.fraction && E[v.value.fraction]
                      ? ((x = E[v.value.fraction]), (T = !0))
                      : E[v.value.value]
                      ? (x = E[v.value.value])
                      : E.__BARE_VALUE__ &&
                        ((x = E.__BARE_VALUE__(v.value) ?? null),
                        (T =
                          (v.value.fraction !== null && x?.includes("/")) ??
                          !1))
                    : (x = E.DEFAULT ?? null);
              }
              if (x === null) return;
              let V;
              {
                let E = p?.modifiers ?? null;
                v.modifier
                  ? E === "any" || v.modifier.kind === "arbitrary"
                    ? (V = v.modifier.value)
                    : E?.[v.modifier.value]
                    ? (V = E[v.modifier.value])
                    : y && !Number.isNaN(Number(v.modifier.value))
                    ? (V = `${v.modifier.value}%`)
                    : (V = null)
                  : (V = null);
              }
              if (v.modifier && V === null && !T)
                return v.value?.kind === "arbitrary" ? null : void 0;
              y && V !== null && (x = J(x, V)), b && (x = `calc(${x} * -1)`);
              let O = Q(m(x, { modifier: V }));
              return (e.current |= $e(O, t)), O;
            };
          };
          var s = g;
          if (!Rr.test(d))
            throw new Error(
              `\`matchUtilities({ '${d}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`
            );
          p?.supportsNegativeValues &&
            t.utilities.functional(`-${d}`, g({ negative: !0 }), { types: f }),
            t.utilities.functional(d, g({ negative: !1 }), { types: f }),
            t.utilities.suggest(d, () => {
              let b = p?.values ?? {},
                v = new Set(Object.keys(b));
              v.delete("__BARE_VALUE__"),
                v.has("DEFAULT") && (v.delete("DEFAULT"), v.add(null));
              let y = p?.modifiers ?? {},
                x = y === "any" ? [] : Object.keys(y);
              return [
                {
                  supportsNegative: p?.supportsNegativeValues ?? !1,
                  values: Array.from(v),
                  modifiers: x,
                },
              ];
            });
        }
      },
      addComponents(a, p) {
        this.addUtilities(a, p);
      },
      matchComponents(a, p) {
        this.matchUtilities(a, p);
      },
      theme: Be(
        t,
        () => o.theme ?? {},
        (a) => a
      ),
      prefix(a) {
        return a;
      },
      config(a, p) {
        let f = o;
        if (!a) return f;
        let s = We(a);
        for (let d = 0; d < s.length; ++d) {
          let m = s[d];
          if (f[m] === void 0) return p;
          f = f[m];
        }
        return f ?? p;
      },
    };
    return (
      (u.addComponents = u.addComponents.bind(u)),
      (u.matchComponents = u.matchComponents.bind(u)),
      u
    );
  }
  function Q(t) {
    let r = [];
    t = Array.isArray(t) ? t : [t];
    let o = t.flatMap((e) => Object.entries(e));
    for (let [e, n] of o)
      if (typeof n != "object") {
        if (!e.startsWith("--")) {
          if (n === "@slot") {
            r.push(M(e, [z("@slot")]));
            continue;
          }
          e = e.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
        r.push(l(e, String(n)));
      } else if (Array.isArray(n))
        for (let u of n)
          typeof u == "string" ? r.push(l(e, u)) : r.push(M(e, Q(u)));
      else n !== null && r.push(M(e, Q(n)));
    return r;
  }
  function Or(t, r) {
    return (typeof t == "string" ? [t] : t).flatMap((e) => {
      if (e.trim().endsWith("}")) {
        let n = e.replace("}", "{@slot}}"),
          u = de(n);
        return ht(u, r), u;
      } else return M(e, r);
    });
  }
  function Kr(t, r, o) {
    for (let e of yn(r)) t.theme.addKeyframes(e);
  }
  function yn(t) {
    let r = [];
    if ("keyframes" in t.theme)
      for (let [o, e] of Object.entries(t.theme.keyframes))
        r.push(z("@keyframes", o, Q(e)));
    return r;
  }
  var Ge = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "oklch(0.984 0.003 247.858)",
      100: "oklch(0.968 0.007 247.896)",
      200: "oklch(0.929 0.013 255.508)",
      300: "oklch(0.869 0.022 252.894)",
      400: "oklch(0.704 0.04 256.788)",
      500: "oklch(0.554 0.046 257.417)",
      600: "oklch(0.446 0.043 257.281)",
      700: "oklch(0.372 0.044 257.287)",
      800: "oklch(0.279 0.041 260.031)",
      900: "oklch(0.208 0.042 265.755)",
      950: "oklch(0.129 0.042 264.695)",
    },
    gray: {
      50: "oklch(0.985 0.002 247.839)",
      100: "oklch(0.967 0.003 264.542)",
      200: "oklch(0.928 0.006 264.531)",
      300: "oklch(0.872 0.01 258.338)",
      400: "oklch(0.707 0.022 261.325)",
      500: "oklch(0.551 0.027 264.364)",
      600: "oklch(0.446 0.03 256.802)",
      700: "oklch(0.373 0.034 259.733)",
      800: "oklch(0.278 0.033 256.848)",
      900: "oklch(0.21 0.034 264.665)",
      950: "oklch(0.13 0.028 261.692)",
    },
    zinc: {
      50: "oklch(0.985 0 0)",
      100: "oklch(0.967 0.001 286.375)",
      200: "oklch(0.92 0.004 286.32)",
      300: "oklch(0.871 0.006 286.286)",
      400: "oklch(0.705 0.015 286.067)",
      500: "oklch(0.552 0.016 285.938)",
      600: "oklch(0.442 0.017 285.786)",
      700: "oklch(0.37 0.013 285.805)",
      800: "oklch(0.274 0.006 286.033)",
      900: "oklch(0.21 0.006 285.885)",
      950: "oklch(0.141 0.005 285.823)",
    },
    neutral: {
      50: "oklch(0.985 0 0)",
      100: "oklch(0.97 0 0)",
      200: "oklch(0.922 0 0)",
      300: "oklch(0.87 0 0)",
      400: "oklch(0.708 0 0)",
      500: "oklch(0.556 0 0)",
      600: "oklch(0.439 0 0)",
      700: "oklch(0.371 0 0)",
      800: "oklch(0.269 0 0)",
      900: "oklch(0.205 0 0)",
      950: "oklch(0.145 0 0)",
    },
    stone: {
      50: "oklch(0.985 0.001 106.423)",
      100: "oklch(0.97 0.001 106.424)",
      200: "oklch(0.923 0.003 48.717)",
      300: "oklch(0.869 0.005 56.366)",
      400: "oklch(0.709 0.01 56.259)",
      500: "oklch(0.553 0.013 58.071)",
      600: "oklch(0.444 0.011 73.639)",
      700: "oklch(0.374 0.01 67.558)",
      800: "oklch(0.268 0.007 34.298)",
      900: "oklch(0.216 0.006 56.043)",
      950: "oklch(0.147 0.004 49.25)",
    },
    red: {
      50: "oklch(0.971 0.013 17.38)",
      100: "oklch(0.936 0.032 17.717)",
      200: "oklch(0.885 0.062 18.334)",
      300: "oklch(0.808 0.114 19.571)",
      400: "oklch(0.704 0.191 22.216)",
      500: "oklch(0.637 0.237 25.331)",
      600: "oklch(0.577 0.245 27.325)",
      700: "oklch(0.505 0.213 27.518)",
      800: "oklch(0.444 0.177 26.899)",
      900: "oklch(0.396 0.141 25.723)",
      950: "oklch(0.258 0.092 26.042)",
    },
    orange: {
      50: "oklch(0.98 0.016 73.684)",
      100: "oklch(0.954 0.038 75.164)",
      200: "oklch(0.901 0.076 70.697)",
      300: "oklch(0.837 0.128 66.29)",
      400: "oklch(0.75 0.183 55.934)",
      500: "oklch(0.705 0.213 47.604)",
      600: "oklch(0.646 0.222 41.116)",
      700: "oklch(0.553 0.195 38.402)",
      800: "oklch(0.47 0.157 37.304)",
      900: "oklch(0.408 0.123 38.172)",
      950: "oklch(0.266 0.079 36.259)",
    },
    amber: {
      50: "oklch(0.987 0.022 95.277)",
      100: "oklch(0.962 0.059 95.617)",
      200: "oklch(0.924 0.12 95.746)",
      300: "oklch(0.879 0.169 91.605)",
      400: "oklch(0.828 0.189 84.429)",
      500: "oklch(0.769 0.188 70.08)",
      600: "oklch(0.666 0.179 58.318)",
      700: "oklch(0.555 0.163 48.998)",
      800: "oklch(0.473 0.137 46.201)",
      900: "oklch(0.414 0.112 45.904)",
      950: "oklch(0.279 0.077 45.635)",
    },
    yellow: {
      50: "oklch(0.987 0.026 102.212)",
      100: "oklch(0.973 0.071 103.193)",
      200: "oklch(0.945 0.129 101.54)",
      300: "oklch(0.905 0.182 98.111)",
      400: "oklch(0.852 0.199 91.936)",
      500: "oklch(0.795 0.184 86.047)",
      600: "oklch(0.681 0.162 75.834)",
      700: "oklch(0.554 0.135 66.442)",
      800: "oklch(0.476 0.114 61.907)",
      900: "oklch(0.421 0.095 57.708)",
      950: "oklch(0.286 0.066 53.813)",
    },
    lime: {
      50: "oklch(0.986 0.031 120.757)",
      100: "oklch(0.967 0.067 122.328)",
      200: "oklch(0.938 0.127 124.321)",
      300: "oklch(0.897 0.196 126.665)",
      400: "oklch(0.841 0.238 128.85)",
      500: "oklch(0.768 0.233 130.85)",
      600: "oklch(0.648 0.2 131.684)",
      700: "oklch(0.532 0.157 131.589)",
      800: "oklch(0.453 0.124 130.933)",
      900: "oklch(0.405 0.101 131.063)",
      950: "oklch(0.274 0.072 132.109)",
    },
    green: {
      50: "oklch(0.982 0.018 155.826)",
      100: "oklch(0.962 0.044 156.743)",
      200: "oklch(0.925 0.084 155.995)",
      300: "oklch(0.871 0.15 154.449)",
      400: "oklch(0.792 0.209 151.711)",
      500: "oklch(0.723 0.219 149.579)",
      600: "oklch(0.627 0.194 149.214)",
      700: "oklch(0.527 0.154 150.069)",
      800: "oklch(0.448 0.119 151.328)",
      900: "oklch(0.393 0.095 152.535)",
      950: "oklch(0.266 0.065 152.934)",
    },
    emerald: {
      50: "oklch(0.979 0.021 166.113)",
      100: "oklch(0.95 0.052 163.051)",
      200: "oklch(0.905 0.093 164.15)",
      300: "oklch(0.845 0.143 164.978)",
      400: "oklch(0.765 0.177 163.223)",
      500: "oklch(0.696 0.17 162.48)",
      600: "oklch(0.596 0.145 163.225)",
      700: "oklch(0.508 0.118 165.612)",
      800: "oklch(0.432 0.095 166.913)",
      900: "oklch(0.378 0.077 168.94)",
      950: "oklch(0.262 0.051 172.552)",
    },
    teal: {
      50: "oklch(0.984 0.014 180.72)",
      100: "oklch(0.953 0.051 180.801)",
      200: "oklch(0.91 0.096 180.426)",
      300: "oklch(0.855 0.138 181.071)",
      400: "oklch(0.777 0.152 181.912)",
      500: "oklch(0.704 0.14 182.503)",
      600: "oklch(0.6 0.118 184.704)",
      700: "oklch(0.511 0.096 186.391)",
      800: "oklch(0.437 0.078 188.216)",
      900: "oklch(0.386 0.063 188.416)",
      950: "oklch(0.277 0.046 192.524)",
    },
    cyan: {
      50: "oklch(0.984 0.019 200.873)",
      100: "oklch(0.956 0.045 203.388)",
      200: "oklch(0.917 0.08 205.041)",
      300: "oklch(0.865 0.127 207.078)",
      400: "oklch(0.789 0.154 211.53)",
      500: "oklch(0.715 0.143 215.221)",
      600: "oklch(0.609 0.126 221.723)",
      700: "oklch(0.52 0.105 223.128)",
      800: "oklch(0.45 0.085 224.283)",
      900: "oklch(0.398 0.07 227.392)",
      950: "oklch(0.302 0.056 229.695)",
    },
    sky: {
      50: "oklch(0.977 0.013 236.62)",
      100: "oklch(0.951 0.026 236.824)",
      200: "oklch(0.901 0.058 230.902)",
      300: "oklch(0.828 0.111 230.318)",
      400: "oklch(0.746 0.16 232.661)",
      500: "oklch(0.685 0.169 237.323)",
      600: "oklch(0.588 0.158 241.966)",
      700: "oklch(0.5 0.134 242.749)",
      800: "oklch(0.443 0.11 240.79)",
      900: "oklch(0.391 0.09 240.876)",
      950: "oklch(0.293 0.066 243.157)",
    },
    blue: {
      50: "oklch(0.97 0.014 254.604)",
      100: "oklch(0.932 0.032 255.585)",
      200: "oklch(0.882 0.059 254.128)",
      300: "oklch(0.809 0.105 251.813)",
      400: "oklch(0.707 0.165 254.624)",
      500: "oklch(0.623 0.214 259.815)",
      600: "oklch(0.546 0.245 262.881)",
      700: "oklch(0.488 0.243 264.376)",
      800: "oklch(0.424 0.199 265.638)",
      900: "oklch(0.379 0.146 265.522)",
      950: "oklch(0.282 0.091 267.935)",
    },
    indigo: {
      50: "oklch(0.962 0.018 272.314)",
      100: "oklch(0.93 0.034 272.788)",
      200: "oklch(0.87 0.065 274.039)",
      300: "oklch(0.785 0.115 274.713)",
      400: "oklch(0.673 0.182 276.935)",
      500: "oklch(0.585 0.233 277.117)",
      600: "oklch(0.511 0.262 276.966)",
      700: "oklch(0.457 0.24 277.023)",
      800: "oklch(0.398 0.195 277.366)",
      900: "oklch(0.359 0.144 278.697)",
      950: "oklch(0.257 0.09 281.288)",
    },
    violet: {
      50: "oklch(0.969 0.016 293.756)",
      100: "oklch(0.943 0.029 294.588)",
      200: "oklch(0.894 0.057 293.283)",
      300: "oklch(0.811 0.111 293.571)",
      400: "oklch(0.702 0.183 293.541)",
      500: "oklch(0.606 0.25 292.717)",
      600: "oklch(0.541 0.281 293.009)",
      700: "oklch(0.491 0.27 292.581)",
      800: "oklch(0.432 0.232 292.759)",
      900: "oklch(0.38 0.189 293.745)",
      950: "oklch(0.283 0.141 291.089)",
    },
    purple: {
      50: "oklch(0.977 0.014 308.299)",
      100: "oklch(0.946 0.033 307.174)",
      200: "oklch(0.902 0.063 306.703)",
      300: "oklch(0.827 0.119 306.383)",
      400: "oklch(0.714 0.203 305.504)",
      500: "oklch(0.627 0.265 303.9)",
      600: "oklch(0.558 0.288 302.321)",
      700: "oklch(0.496 0.265 301.924)",
      800: "oklch(0.438 0.218 303.724)",
      900: "oklch(0.381 0.176 304.987)",
      950: "oklch(0.291 0.149 302.717)",
    },
    fuchsia: {
      50: "oklch(0.977 0.017 320.058)",
      100: "oklch(0.952 0.037 318.852)",
      200: "oklch(0.903 0.076 319.62)",
      300: "oklch(0.833 0.145 321.434)",
      400: "oklch(0.74 0.238 322.16)",
      500: "oklch(0.667 0.295 322.15)",
      600: "oklch(0.591 0.293 322.896)",
      700: "oklch(0.518 0.253 323.949)",
      800: "oklch(0.452 0.211 324.591)",
      900: "oklch(0.401 0.17 325.612)",
      950: "oklch(0.293 0.136 325.661)",
    },
    pink: {
      50: "oklch(0.971 0.014 343.198)",
      100: "oklch(0.948 0.028 342.258)",
      200: "oklch(0.899 0.061 343.231)",
      300: "oklch(0.823 0.12 346.018)",
      400: "oklch(0.718 0.202 349.761)",
      500: "oklch(0.656 0.241 354.308)",
      600: "oklch(0.592 0.249 0.584)",
      700: "oklch(0.525 0.223 3.958)",
      800: "oklch(0.459 0.187 3.815)",
      900: "oklch(0.408 0.153 2.432)",
      950: "oklch(0.284 0.109 3.907)",
    },
    rose: {
      50: "oklch(0.969 0.015 12.422)",
      100: "oklch(0.941 0.03 12.58)",
      200: "oklch(0.892 0.058 10.001)",
      300: "oklch(0.81 0.117 11.638)",
      400: "oklch(0.712 0.194 13.428)",
      500: "oklch(0.645 0.246 16.439)",
      600: "oklch(0.586 0.253 17.585)",
      700: "oklch(0.514 0.222 16.935)",
      800: "oklch(0.455 0.188 13.697)",
      900: "oklch(0.41 0.159 10.272)",
      950: "oklch(0.271 0.105 12.094)",
    },
  };
  function fe(t) {
    return { __BARE_VALUE__: t };
  }
  var Z = fe((t) => {
      if ($(t.value)) return t.value;
    }),
    q = fe((t) => {
      if ($(t.value)) return `${t.value}%`;
    }),
    ne = fe((t) => {
      if ($(t.value)) return `${t.value}px`;
    }),
    Pr = fe((t) => {
      if ($(t.value)) return `${t.value}ms`;
    }),
    Ye = fe((t) => {
      if ($(t.value)) return `${t.value}deg`;
    }),
    vn = fe((t) => {
      if (t.fraction === null) return;
      let [r, o] = P(t.fraction, "/");
      if (!(!$(r) || !$(o))) return t.fraction;
    }),
    zr = fe((t) => {
      if ($(Number(t.value))) return `repeat(${t.value}, minmax(0, 1fr))`;
    }),
    _r = {
      accentColor: ({ theme: t }) => t("colors"),
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"',
      },
      aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...vn },
      backdropBlur: ({ theme: t }) => t("blur"),
      backdropBrightness: ({ theme: t }) => ({ ...t("brightness"), ...q }),
      backdropContrast: ({ theme: t }) => ({ ...t("contrast"), ...q }),
      backdropGrayscale: ({ theme: t }) => ({ ...t("grayscale"), ...q }),
      backdropHueRotate: ({ theme: t }) => ({ ...t("hueRotate"), ...Ye }),
      backdropInvert: ({ theme: t }) => ({ ...t("invert"), ...q }),
      backdropOpacity: ({ theme: t }) => ({ ...t("opacity"), ...q }),
      backdropSaturate: ({ theme: t }) => ({ ...t("saturate"), ...q }),
      backdropSepia: ({ theme: t }) => ({ ...t("sepia"), ...q }),
      backgroundColor: ({ theme: t }) => t("colors"),
      backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
      },
      backgroundOpacity: ({ theme: t }) => t("opacity"),
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      backgroundSize: { auto: "auto", cover: "cover", contain: "contain" },
      blur: {
        0: "0",
        none: "",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      borderColor: ({ theme: t }) => ({
        DEFAULT: "currentColor",
        ...t("colors"),
      }),
      borderOpacity: ({ theme: t }) => t("opacity"),
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      borderSpacing: ({ theme: t }) => t("spacing"),
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...ne,
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
      },
      boxShadowColor: ({ theme: t }) => t("colors"),
      brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...q,
      },
      caretColor: ({ theme: t }) => t("colors"),
      colors: () => ({ ...Ge }),
      columns: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        ...Z,
      },
      container: {},
      content: { none: "none" },
      contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...q,
      },
      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
      },
      divideColor: ({ theme: t }) => t("borderColor"),
      divideOpacity: ({ theme: t }) => t("borderOpacity"),
      divideWidth: ({ theme: t }) => ({ ...t("borderWidth"), ...ne }),
      dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
        md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
        lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
        xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000",
      },
      fill: ({ theme: t }) => t("colors"),
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      flexBasis: ({ theme: t }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        ...t("spacing"),
      }),
      flexGrow: { 0: "0", DEFAULT: "1", ...Z },
      flexShrink: { 0: "0", DEFAULT: "1", ...Z },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      gap: ({ theme: t }) => t("spacing"),
      gradientColorStops: ({ theme: t }) => t("colors"),
      gradientColorStopPositions: {
        "0%": "0%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
        ...q,
      },
      grayscale: { 0: "0", DEFAULT: "100%", ...q },
      gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1",
      },
      gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Z,
      },
      gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Z,
      },
      gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1",
      },
      gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Z,
      },
      gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Z,
      },
      gridTemplateColumns: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...zr,
      },
      gridTemplateRows: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...zr,
      },
      height: ({ theme: t }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        full: "100%",
        screen: "100vh",
        svh: "100svh",
        lvh: "100lvh",
        dvh: "100dvh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...t("spacing"),
      }),
      hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
        ...Ye,
      },
      inset: ({ theme: t }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        ...t("spacing"),
      }),
      invert: { 0: "0", DEFAULT: "100%", ...q },
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } },
        pulse: { "50%": { opacity: ".5" } },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      listStyleType: { none: "none", disc: "disc", decimal: "decimal" },
      listStyleImage: { none: "none" },
      margin: ({ theme: t }) => ({ auto: "auto", ...t("spacing") }),
      lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...Z },
      maxHeight: ({ theme: t }) => ({
        none: "none",
        full: "100%",
        screen: "100vh",
        svh: "100svh",
        lvh: "100lvh",
        dvh: "100dvh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...t("spacing"),
      }),
      maxWidth: ({ theme: t }) => ({
        none: "none",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        prose: "65ch",
        ...t("spacing"),
      }),
      minHeight: ({ theme: t }) => ({
        full: "100%",
        screen: "100vh",
        svh: "100svh",
        lvh: "100lvh",
        dvh: "100dvh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...t("spacing"),
      }),
      minWidth: ({ theme: t }) => ({
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...t("spacing"),
      }),
      objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
        ...q,
      },
      order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        ...Z,
      },
      outlineColor: ({ theme: t }) => t("colors"),
      outlineOffset: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...ne,
      },
      outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...ne },
      padding: ({ theme: t }) => t("spacing"),
      placeholderColor: ({ theme: t }) => t("colors"),
      placeholderOpacity: ({ theme: t }) => t("opacity"),
      ringColor: ({ theme: t }) => ({
        DEFAULT: "currentColor",
        ...t("colors"),
      }),
      ringOffsetColor: ({ theme: t }) => t("colors"),
      ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...ne,
      },
      ringOpacity: ({ theme: t }) => ({ DEFAULT: "0.5", ...t("opacity") }),
      ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...ne,
      },
      rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        ...Ye,
      },
      saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...q },
      scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        ...q,
      },
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem",
      },
      scrollMargin: ({ theme: t }) => t("spacing"),
      scrollPadding: ({ theme: t }) => t("spacing"),
      sepia: { 0: "0", DEFAULT: "100%", ...q },
      skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        ...Ye,
      },
      space: ({ theme: t }) => t("spacing"),
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      stroke: ({ theme: t }) => ({ none: "none", ...t("colors") }),
      strokeWidth: { 0: "0", 1: "1", 2: "2", ...Z },
      supports: {},
      data: {},
      textColor: ({ theme: t }) => t("colors"),
      textDecorationColor: ({ theme: t }) => t("colors"),
      textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...ne,
      },
      textIndent: ({ theme: t }) => t("spacing"),
      textOpacity: ({ theme: t }) => t("opacity"),
      textUnderlineOffset: {
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...ne,
      },
      transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left",
      },
      transitionDelay: {
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...Pr,
      },
      transitionDuration: {
        DEFAULT: "150ms",
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...Pr,
      },
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors:
          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      translate: ({ theme: t }) => ({
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        ...t("spacing"),
      }),
      size: ({ theme: t }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...t("spacing"),
      }),
      width: ({ theme: t }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
        svw: "100svw",
        lvw: "100lvw",
        dvw: "100dvw",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...t("spacing"),
      }),
      willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform",
      },
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        ...Z,
      },
    };
  function Dr(t) {
    return {
      theme: {
        ..._r,
        colors: ({ theme: r }) => r("color", {}),
        extend: {
          fontSize: ({ theme: r }) => ({ ...r("text", {}) }),
          boxShadow: ({ theme: r }) => ({ ...r("shadow", {}) }),
          animation: ({ theme: r }) => ({ ...r("animate", {}) }),
          aspectRatio: ({ theme: r }) => ({ ...r("aspect", {}) }),
          borderRadius: ({ theme: r }) => ({ ...r("radius", {}) }),
          screens: ({ theme: r }) => ({ ...r("breakpoint", {}) }),
          letterSpacing: ({ theme: r }) => ({ ...r("tracking", {}) }),
          lineHeight: ({ theme: r }) => ({ ...r("leading", {}) }),
          transitionDuration: {
            DEFAULT: t.get(["--default-transition-duration"]) ?? null,
          },
          transitionTimingFunction: {
            DEFAULT: t.get(["--default-transition-timing-function"]) ?? null,
          },
          maxWidth: ({ theme: r }) => ({ ...r("container", {}) }),
        },
      },
    };
  }
  var kn = {
    blocklist: [],
    future: {},
    prefix: "",
    important: !1,
    darkMode: null,
    theme: {},
    plugins: [],
    content: { files: [] },
  };
  function xt(t, r) {
    let o = {
      design: t,
      configs: [],
      plugins: [],
      content: { files: [] },
      theme: {},
      extend: {},
      result: structuredClone(kn),
    };
    for (let n of r) wt(o, n);
    for (let n of o.configs)
      "darkMode" in n &&
        n.darkMode !== void 0 &&
        (o.result.darkMode = n.darkMode ?? null),
        "prefix" in n &&
          n.prefix !== void 0 &&
          (o.result.prefix = n.prefix ?? ""),
        "blocklist" in n &&
          n.blocklist !== void 0 &&
          (o.result.blocklist = n.blocklist ?? []),
        "important" in n &&
          n.important !== void 0 &&
          (o.result.important = n.important ?? !1);
    let e = xn(o);
    return {
      resolvedConfig: {
        ...o.result,
        content: o.content,
        theme: o.theme,
        plugins: o.plugins,
      },
      replacedThemeKeys: e,
    };
  }
  function wn(t, r) {
    if (Array.isArray(t) && ve(t[0])) return t.concat(r);
    if (Array.isArray(r) && ve(r[0]) && ve(t)) return [t, ...r];
    if (Array.isArray(r)) return r;
  }
  function wt(t, { config: r, base: o, path: e, reference: n }) {
    let u = [];
    for (let f of r.plugins ?? [])
      "__isOptionsFunction" in f
        ? u.push({ ...f(), reference: n })
        : "handler" in f
        ? u.push({ ...f, reference: n })
        : u.push({ handler: f, reference: n });
    if (Array.isArray(r.presets) && r.presets.length === 0)
      throw new Error(
        "Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported."
      );
    for (let f of r.presets ?? [])
      wt(t, { path: e, base: o, config: f, reference: n });
    for (let f of u)
      t.plugins.push(f),
        f.config &&
          wt(t, {
            path: e,
            base: o,
            config: f.config,
            reference: !!f.reference,
          });
    let a = r.content ?? [],
      p = Array.isArray(a) ? a : a.files;
    for (let f of p)
      t.content.files.push(typeof f == "object" ? f : { base: o, pattern: f });
    t.configs.push(r);
  }
  function xn(t) {
    let r = new Set(),
      o = Be(t.design, () => t.theme, n),
      e = Object.assign(o, { theme: o, colors: Ge });
    function n(u) {
      return typeof u == "function" ? u(e) ?? null : u ?? null;
    }
    for (let u of t.configs) {
      let a = u.theme ?? {},
        p = a.extend ?? {};
      for (let f in a) f !== "extend" && r.add(f);
      Object.assign(t.theme, a);
      for (let f in p) (t.extend[f] ??= []), t.extend[f].push(p[f]);
    }
    delete t.theme.extend;
    for (let u in t.extend) {
      let a = [t.theme[u], ...t.extend[u]];
      t.theme[u] = () => {
        let p = a.map(n);
        return Ne({}, p, wn);
      };
    }
    for (let u in t.theme) t.theme[u] = n(t.theme[u]);
    if (t.theme.screens && typeof t.theme.screens == "object")
      for (let u of Object.keys(t.theme.screens)) {
        let a = t.theme.screens[u];
        a &&
          typeof a == "object" &&
          ("raw" in a ||
            "max" in a ||
            ("min" in a && (t.theme.screens[u] = a.min)));
      }
    return r;
  }
  function Ur(t, r) {
    let o = t.theme.container || {};
    if (typeof o != "object" || o === null) return;
    let e = An(o, r);
    e.length !== 0 && r.utilities.static("container", () => structuredClone(e));
  }
  function An({ center: t, padding: r, screens: o }, e) {
    let n = [],
      u = null;
    if (
      (t && n.push(l("margin-inline", "auto")),
      (typeof r == "string" ||
        (typeof r == "object" && r !== null && "DEFAULT" in r)) &&
        n.push(l("padding-inline", typeof r == "string" ? r : r.DEFAULT)),
      typeof o == "object" && o !== null)
    ) {
      u = new Map();
      let a = Array.from(e.theme.namespace("--breakpoint").entries());
      if ((a.sort((p, f) => se(p[1], f[1], "asc")), a.length > 0)) {
        let [p] = a[0];
        n.push(
          z("@media", `(width >= --theme(--breakpoint-${p}))`, [
            l("max-width", "none"),
          ])
        );
      }
      for (let [p, f] of Object.entries(o)) {
        if (typeof f == "object")
          if ("min" in f) f = f.min;
          else continue;
        u.set(p, z("@media", `(width >= ${f})`, [l("max-width", f)]));
      }
    }
    if (typeof r == "object" && r !== null) {
      let a = Object.entries(r)
        .filter(([p]) => p !== "DEFAULT")
        .map(([p, f]) => [p, e.theme.resolveValue(p, ["--breakpoint"]), f])
        .filter(Boolean);
      a.sort((p, f) => se(p[1], f[1], "asc"));
      for (let [p, , f] of a)
        if (u && u.has(p)) u.get(p).nodes.push(l("padding-inline", f));
        else {
          if (u) continue;
          n.push(
            z("@media", `(width >= theme(--breakpoint-${p}))`, [
              l("padding-inline", f),
            ])
          );
        }
    }
    if (u) for (let [, a] of u) n.push(a);
    return n;
  }
  function jr({ addVariant: t, config: r }) {
    let o = r("darkMode", null),
      [e, n = ".dark"] = Array.isArray(o) ? o : [o];
    if (e === "variant") {
      let u;
      if (
        (Array.isArray(n) || typeof n == "function"
          ? (u = n)
          : typeof n == "string" && (u = [n]),
        Array.isArray(u))
      )
        for (let a of u)
          a === ".dark"
            ? ((e = !1),
              console.warn(
                'When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`'
              ))
            : a.includes("&") ||
              ((e = !1),
              console.warn(
                'When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'
              ));
      n = u;
    }
    e === null ||
      (e === "selector"
        ? t("dark", `&:where(${n}, ${n} *)`)
        : e === "media"
        ? t("dark", "@media (prefers-color-scheme: dark)")
        : e === "variant"
        ? t("dark", n)
        : e === "class" && t("dark", `&:is(${n} *)`));
  }
  function Ir(t) {
    for (let [r, o] of [
      ["t", "top"],
      ["tr", "top right"],
      ["r", "right"],
      ["br", "bottom right"],
      ["b", "bottom"],
      ["bl", "bottom left"],
      ["l", "left"],
      ["tl", "top left"],
    ])
      t.utilities.static(`bg-gradient-to-${r}`, () => [
        l("--tw-gradient-position", `to ${o} in oklab`),
        l("background-image", "linear-gradient(var(--tw-gradient-stops))"),
      ]);
    t.utilities.functional("max-w-screen", (r) => {
      if (!r.value || r.value.kind === "arbitrary") return;
      let o = t.theme.resolve(r.value.value, ["--breakpoint"]);
      if (o) return [l("max-width", o)];
    }),
      t.utilities.static("overflow-ellipsis", () => [
        l("text-overflow", "ellipsis"),
      ]),
      t.utilities.static("decoration-slice", () => [
        l("-webkit-box-decoration-break", "slice"),
        l("box-decoration-break", "slice"),
      ]),
      t.utilities.static("decoration-clone", () => [
        l("-webkit-box-decoration-break", "clone"),
        l("box-decoration-break", "clone"),
      ]),
      t.utilities.functional("flex-shrink", (r) => {
        if (!r.modifier) {
          if (!r.value) return [l("flex-shrink", "1")];
          if (r.value.kind === "arbitrary")
            return [l("flex-shrink", r.value.value)];
          if ($(r.value.value)) return [l("flex-shrink", r.value.value)];
        }
      }),
      t.utilities.functional("flex-grow", (r) => {
        if (!r.modifier) {
          if (!r.value) return [l("flex-grow", "1")];
          if (r.value.kind === "arbitrary")
            return [l("flex-grow", r.value.value)];
          if ($(r.value.value)) return [l("flex-grow", r.value.value)];
        }
      });
  }
  function Fr(t, r) {
    let o = t.theme.screens || {},
      e = r.variants.get("min")?.order ?? 0,
      n = [];
    for (let [a, p] of Object.entries(o)) {
      let g = function (b) {
        r.variants.static(
          a,
          (v) => {
            v.nodes = [z("@media", m, v.nodes)];
          },
          { order: b }
        );
      };
      var u = g;
      let f = r.variants.get(a),
        s = r.theme.resolveValue(a, ["--breakpoint"]);
      if (f && s && !r.theme.hasDefault(`--breakpoint-${a}`)) continue;
      let d = !0;
      typeof p == "string" && (d = !1);
      let m = Cn(p);
      d ? n.push(g) : g(e);
    }
    if (n.length !== 0) {
      for (let [, a] of r.variants.variants)
        a.order > e && (a.order += n.length);
      r.variants.compareFns = new Map(
        Array.from(r.variants.compareFns).map(
          ([a, p]) => (a > e && (a += n.length), [a, p])
        )
      );
      for (let [a, p] of n.entries()) p(e + a + 1);
    }
  }
  function Cn(t) {
    return (Array.isArray(t) ? t : [t])
      .map((o) =>
        typeof o == "string" ? { min: o } : o && typeof o == "object" ? o : null
      )
      .map((o) => {
        if (o === null) return null;
        if ("raw" in o) return o.raw;
        let e = "";
        return (
          o.max !== void 0 && (e += `${o.max} >= `),
          (e += "width"),
          o.min !== void 0 && (e += ` >= ${o.min}`),
          `(${e})`
        );
      })
      .filter(Boolean)
      .join(", ");
  }
  function Lr(t, r) {
    let o = t.theme.aria || {},
      e = t.theme.supports || {},
      n = t.theme.data || {};
    if (Object.keys(o).length > 0) {
      let u = r.variants.get("aria"),
        a = u?.applyFn,
        p = u?.compounds;
      r.variants.functional(
        "aria",
        (f, s) => {
          let d = s.value;
          return d && d.kind === "named" && d.value in o
            ? a?.(f, { ...s, value: { kind: "arbitrary", value: o[d.value] } })
            : a?.(f, s);
        },
        { compounds: p }
      );
    }
    if (Object.keys(e).length > 0) {
      let u = r.variants.get("supports"),
        a = u?.applyFn,
        p = u?.compounds;
      r.variants.functional(
        "supports",
        (f, s) => {
          let d = s.value;
          return d && d.kind === "named" && d.value in e
            ? a?.(f, { ...s, value: { kind: "arbitrary", value: e[d.value] } })
            : a?.(f, s);
        },
        { compounds: p }
      );
    }
    if (Object.keys(n).length > 0) {
      let u = r.variants.get("data"),
        a = u?.applyFn,
        p = u?.compounds;
      r.variants.functional(
        "data",
        (f, s) => {
          let d = s.value;
          return d && d.kind === "named" && d.value in n
            ? a?.(f, { ...s, value: { kind: "arbitrary", value: n[d.value] } })
            : a?.(f, s);
        },
        { compounds: p }
      );
    }
  }
  var Sn = /^[a-z]+$/;
  async function Wr({
    designSystem: t,
    base: r,
    ast: o,
    loadModule: e,
    globs: n,
  }) {
    let u = 0,
      a = [],
      p = [];
    _(o, (m, { parent: g, replaceWith: b, context: v }) => {
      if (m.kind === "at-rule") {
        if (m.name === "@plugin") {
          if (g !== null) throw new Error("`@plugin` cannot be nested.");
          let y = m.params.slice(1, -1);
          if (y.length === 0) throw new Error("`@plugin` must have a path.");
          let x = {};
          for (let T of m.nodes ?? []) {
            if (T.kind !== "declaration")
              throw new Error(`Unexpected \`@plugin\` option:

${Y([T])}

\`@plugin\` options must be a flat list of declarations.`);
            if (T.value === void 0) continue;
            let V = T.value,
              O = P(V, ",").map((E) => {
                if (((E = E.trim()), E === "null")) return null;
                if (E === "true") return !0;
                if (E === "false") return !1;
                if (Number.isNaN(Number(E))) {
                  if (
                    (E[0] === '"' && E[E.length - 1] === '"') ||
                    (E[0] === "'" && E[E.length - 1] === "'")
                  )
                    return E.slice(1, -1);
                  if (E[0] === "{" && E[E.length - 1] === "}")
                    throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${Y(
                      [T]
                    ).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
                } else return Number(E);
                return E;
              });
            x[T.property] = O.length === 1 ? O[0] : O;
          }
          a.push([
            { id: y, base: v.base, reference: !!v.reference },
            Object.keys(x).length > 0 ? x : null,
          ]),
            b([]),
            (u |= 4);
          return;
        }
        if (m.name === "@config") {
          if (m.nodes.length > 0)
            throw new Error("`@config` cannot have a body.");
          if (g !== null) throw new Error("`@config` cannot be nested.");
          p.push({
            id: m.params.slice(1, -1),
            base: v.base,
            reference: !!v.reference,
          }),
            b([]),
            (u |= 4);
          return;
        }
      }
    }),
      Ir(t);
    let f = t.resolveThemeValue;
    if (
      ((t.resolveThemeValue = function (g) {
        return g.startsWith("--")
          ? f(g)
          : ((u |= Mr({
              designSystem: t,
              base: r,
              ast: o,
              globs: n,
              configs: [],
              pluginDetails: [],
            })),
            t.resolveThemeValue(g));
      }),
      !a.length && !p.length)
    )
      return 0;
    let [s, d] = await Promise.all([
      Promise.all(
        p.map(async ({ id: m, base: g, reference: b }) => {
          let v = await e(m, g, "config");
          return { path: m, base: v.base, config: v.module, reference: b };
        })
      ),
      Promise.all(
        a.map(async ([{ id: m, base: g, reference: b }, v]) => {
          let y = await e(m, g, "plugin");
          return {
            path: m,
            base: y.base,
            plugin: y.module,
            options: v,
            reference: b,
          };
        })
      ),
    ]);
    return (
      (u |= Mr({
        designSystem: t,
        base: r,
        ast: o,
        globs: n,
        configs: s,
        pluginDetails: d,
      })),
      u
    );
  }
  function Mr({
    designSystem: t,
    base: r,
    ast: o,
    globs: e,
    configs: n,
    pluginDetails: u,
  }) {
    let a = 0,
      f = [
        ...u.map((y) => {
          if (!y.options)
            return {
              config: { plugins: [y.plugin] },
              base: y.base,
              reference: y.reference,
            };
          if ("__isOptionsFunction" in y.plugin)
            return {
              config: { plugins: [y.plugin(y.options)] },
              base: y.base,
              reference: y.reference,
            };
          throw new Error(`The plugin "${y.path}" does not accept options`);
        }),
        ...n,
      ],
      { resolvedConfig: s } = xt(t, [
        { config: Dr(t.theme), base: r, reference: !0 },
        ...f,
        { config: { plugins: [jr] }, base: r, reference: !0 },
      ]),
      { resolvedConfig: d, replacedThemeKeys: m } = xt(t, f);
    t.resolveThemeValue = function (x, T) {
      let V = b.theme(x, T);
      if (Array.isArray(V) && V.length === 2) return V[0];
      if (Array.isArray(V)) return V.join(", ");
      if (typeof V == "string") return V;
    };
    let g = {
        designSystem: t,
        ast: o,
        resolvedConfig: s,
        featuresRef: {
          set current(y) {
            a |= y;
          },
        },
      },
      b = kt({ ...g, referenceMode: !1 }),
      v;
    for (let { handler: y, reference: x } of s.plugins)
      x ? ((v ||= kt({ ...g, referenceMode: !0 })), y(v)) : y(b);
    if (
      (hr(t, d, m),
      Kr(t, d, m),
      Lr(d, t),
      Fr(d, t),
      Ur(d, t),
      !t.theme.prefix && s.prefix)
    ) {
      if (
        (s.prefix.endsWith("-") &&
          ((s.prefix = s.prefix.slice(0, -1)),
          console.warn(
            `The prefix "${s.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`
          )),
        !Sn.test(s.prefix))
      )
        throw new Error(
          `The prefix "${s.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`
        );
      t.theme.prefix = s.prefix;
    }
    if (
      (!t.important && s.important === !0 && (t.important = !0),
      typeof s.important == "string")
    ) {
      let y = s.important;
      _(o, (x, { replaceWith: T, parent: V }) => {
        if (
          x.kind === "at-rule" &&
          !(x.name !== "@tailwind" || x.params !== "utilities")
        )
          return V?.kind === "rule" && V.selector === y ? 2 : (T(U(y, [x])), 2);
      });
    }
    for (let y of s.blocklist) t.invalidCandidates.add(y);
    for (let y of s.content.files) {
      if ("raw" in y)
        throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(y, null, 2)}

This feature is not currently supported.`);
      e.push(y);
    }
    return a;
  }
  var $n = /^[a-z]+$/;
  function Nn() {
    throw new Error("No `loadModule` function provided to `compile`");
  }
  function Tn() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
  }
  function Vn(t) {
    let r = 0,
      o = null;
    for (let e of P(t, " "))
      e === "reference"
        ? (r |= 2)
        : e === "inline"
        ? (r |= 1)
        : e === "default"
        ? (r |= 4)
        : e === "static"
        ? (r |= 8)
        : e.startsWith("prefix(") && e.endsWith(")") && (o = e.slice(7, -1));
    return [r, o];
  }
  async function En(
    t,
    { base: r = "", loadModule: o = Nn, loadStylesheet: e = Tn } = {}
  ) {
    let n = 0;
    (t = [X({ base: r }, t)]), (n |= await yt(t, r, e));
    let u = null,
      a = new _e(),
      p = [],
      f = [],
      s = null,
      d = null,
      m = [],
      g = [],
      b = null;
    _(t, (y, { parent: x, replaceWith: T, context: V }) => {
      if (y.kind === "at-rule") {
        if (
          y.name === "@tailwind" &&
          (y.params === "utilities" || y.params.startsWith("utilities"))
        ) {
          if (d !== null) {
            T([]);
            return;
          }
          let O = P(y.params, " ");
          for (let E of O)
            if (E.startsWith("source(")) {
              let K = E.slice(7, -1);
              if (K === "none") {
                b = K;
                continue;
              }
              if (
                (K[0] === '"' && K[K.length - 1] !== '"') ||
                (K[0] === "'" && K[K.length - 1] !== "'") ||
                (K[0] !== "'" && K[0] !== '"')
              )
                throw new Error("`source(\u2026)` paths must be quoted.");
              b = { base: V.sourceBase ?? V.base, pattern: K.slice(1, -1) };
            }
          (d = y), (n |= 16);
        }
        if (y.name === "@utility") {
          if (x !== null) throw new Error("`@utility` cannot be nested.");
          if (y.nodes.length === 0)
            throw new Error(
              `\`@utility ${y.params}\` is empty. Utilities should include at least one property.`
            );
          let O = rr(y);
          if (O === null)
            throw new Error(
              `\`@utility ${y.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`
            );
          f.push(O);
        }
        if (y.name === "@source") {
          if (y.nodes.length > 0)
            throw new Error("`@source` cannot have a body.");
          if (x !== null) throw new Error("`@source` cannot be nested.");
          let O = y.params;
          if (
            (O[0] === '"' && O[O.length - 1] !== '"') ||
            (O[0] === "'" && O[O.length - 1] !== "'") ||
            (O[0] !== "'" && O[0] !== '"')
          )
            throw new Error("`@source` paths must be quoted.");
          g.push({ base: V.base, pattern: O.slice(1, -1) }), T([]);
          return;
        }
        if (
          (y.name === "@variant" &&
            (x === null
              ? y.nodes.length === 0
                ? (y.name = "@custom-variant")
                : (_(y.nodes, (O) => {
                    if (O.kind === "at-rule" && O.name === "@slot")
                      return (y.name = "@custom-variant"), 2;
                  }),
                  y.name === "@variant" && m.push(y))
              : m.push(y)),
          y.name === "@custom-variant")
        ) {
          if (x !== null)
            throw new Error("`@custom-variant` cannot be nested.");
          T([]);
          let [O, E] = P(y.params, " ");
          if (!Le.test(O))
            throw new Error(
              `\`@custom-variant ${O}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`
            );
          if (y.nodes.length > 0 && E)
            throw new Error(
              `\`@custom-variant ${O}\` cannot have both a selector and a body.`
            );
          if (y.nodes.length === 0) {
            if (!E)
              throw new Error(
                `\`@custom-variant ${O}\` has no selector or body.`
              );
            let K = P(E.slice(1, -1), ",");
            if (K.length === 0 || K.some((h) => h.trim() === ""))
              throw new Error(
                `\`@custom-variant ${O} (${K.join(",")})\` selector is invalid.`
              );
            let i = [],
              c = [];
            for (let h of K)
              (h = h.trim()), h[0] === "@" ? i.push(h) : c.push(h);
            p.push((h) => {
              h.variants.static(
                O,
                (w) => {
                  let k = [];
                  c.length > 0 && k.push(U(c.join(", "), w.nodes));
                  for (let N of i) k.push(M(N, w.nodes));
                  w.nodes = k;
                },
                { compounds: ce([...c, ...i]) }
              );
            });
            return;
          } else {
            p.push((K) => {
              K.variants.fromAst(O, y.nodes);
            });
            return;
          }
        }
        if (y.name === "@media") {
          let O = P(y.params, " "),
            E = [];
          for (let K of O)
            if (K.startsWith("source(")) {
              let i = K.slice(7, -1);
              _(y.nodes, (c, { replaceWith: h }) => {
                if (
                  c.kind === "at-rule" &&
                  c.name === "@tailwind" &&
                  c.params === "utilities"
                )
                  return (
                    (c.params += ` source(${i})`),
                    h([X({ sourceBase: V.base }, [c])]),
                    2
                  );
              });
            } else if (K.startsWith("theme(")) {
              let i = K.slice(6, -1);
              _(y.nodes, (c) => {
                if (c.kind !== "at-rule")
                  throw new Error(
                    'Files imported with `@import "\u2026" theme(\u2026)` must only contain `@theme` blocks.'
                  );
                if (c.name === "@theme") return (c.params += " " + i), 1;
              });
            } else if (K.startsWith("prefix(")) {
              let i = K.slice(7, -1);
              _(y.nodes, (c) => {
                if (c.kind === "at-rule" && c.name === "@theme")
                  return (c.params += ` prefix(${i})`), 1;
              });
            } else
              K === "important"
                ? (u = !0)
                : K === "reference"
                ? (y.nodes = [X({ reference: !0 }, y.nodes)])
                : E.push(K);
          E.length > 0 ? (y.params = E.join(" ")) : O.length > 0 && T(y.nodes);
        }
        if (y.name === "@theme") {
          let [O, E] = Vn(y.params);
          if ((V.reference && (O |= 2), E)) {
            if (!$n.test(E))
              throw new Error(
                `The prefix "${E}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`
              );
            a.prefix = E;
          }
          return (
            _(y.nodes, (K) => {
              if (K.kind === "at-rule" && K.name === "@keyframes")
                return O & 2 ? 1 : (a.addKeyframes(K), 1);
              if (K.kind === "comment") return;
              if (K.kind === "declaration" && K.property.startsWith("--")) {
                a.add(le(K.property), K.value ?? "", O);
                return;
              }
              let i = Y([z(y.name, y.params, [K])])
                .split(
                  `
`
                )
                .map(
                  (c, h, w) =>
                    `${h === 0 || h >= w.length - 2 ? " " : ">"} ${c}`
                ).join(`
`);
              throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${i}`);
            }),
            !s && !(O & 2) ? ((s = U(":root, :host", [])), T([s])) : T([]),
            1
          );
        }
      }
    });
    let v = fr(a);
    u && (v.important = u),
      (n |= await Wr({
        designSystem: v,
        base: r,
        ast: t,
        loadModule: o,
        globs: g,
      }));
    for (let y of p) y(v);
    for (let y of f) y(v);
    if (s) {
      let y = [];
      for (let [T, V] of v.theme.entries())
        V.options & 2 || y.push(l(pe(T), V.value));
      let x = v.theme.getKeyframes();
      for (let T of x) y.push(D([T]));
      s.nodes = [X({ theme: !0 }, y)];
    }
    if (d) {
      let y = d;
      (y.kind = "context"), (y.context = {});
    }
    if (m.length > 0) {
      for (let y of m) {
        let x = U("&", y.nodes),
          T = y.params,
          V = v.parseVariant(T);
        if (V === null)
          throw new Error(`Cannot use \`@variant\` with unknown variant: ${T}`);
        if (be(x, V, v.variants) === null)
          throw new Error(`Cannot use \`@variant\` with variant: ${T}`);
        Object.assign(y, x);
      }
      n |= 32;
    }
    return (
      (n |= he(t, v)),
      (n |= $e(t, v)),
      _(t, (y, { replaceWith: x }) => {
        if (y.kind === "at-rule") return y.name === "@utility" && x([]), 1;
      }),
      {
        designSystem: v,
        ast: t,
        globs: g,
        root: b,
        utilitiesNode: d,
        features: n,
      }
    );
  }
  async function Rn(t, r = {}) {
    let {
      designSystem: o,
      ast: e,
      globs: n,
      root: u,
      utilitiesNode: a,
      features: p,
    } = await En(t, r);
    e.unshift(
      ze(`! tailwindcss v${$t} | MIT License | https://tailwindcss.com `)
    );
    function f(g) {
      o.invalidCandidates.add(g);
    }
    let s = new Set(),
      d = null,
      m = 0;
    return {
      globs: n,
      root: u,
      features: p,
      build(g) {
        if (p === 0) return t;
        if (!a) return (d ??= ae(e, o)), d;
        let b = !1,
          v = s.size;
        for (let x of g)
          o.invalidCandidates.has(x) ||
            (x[0] === "-" && x[1] === "-"
              ? o.theme.markUsedVariable(x)
              : s.add(x),
            (b ||= s.size !== v));
        if (!b) return (d ??= ae(e, o)), d;
        let y = oe(s, o, { onInvalidCandidate: f }).astNodes;
        return m === y.length
          ? ((d ??= ae(e, o)), d)
          : ((m = y.length), (a.nodes = y), (d = ae(e, o)), d);
      },
    };
  }
  async function Br(t, r = {}) {
    let o = de(t),
      e = await Rn(o, r),
      n = o,
      u = t;
    return {
      ...e,
      build(a) {
        let p = e.build(a);
        return p === n || ((u = Y(p)), (n = p)), u;
      },
    };
  }
  var qr = `@layer theme, base, components, utilities;

@import './theme.css' layer(theme);
@import './preflight.css' layer(base);
@import './utilities.css' layer(utilities);
`;
  var Hr = `/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: var(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ); /* 4 */
  font-feature-settings: var(--default-font-feature-settings, normal); /* 5 */
  font-variation-settings: var(--default-font-variation-settings, normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  line-height: inherit;
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

/*
  Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: var(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    'Liberation Mono',
    'Courier New',
    monospace
  ); /* 1 */
  font-feature-settings: var(--default-mono-font-feature-settings, normal); /* 2 */
  font-variation-settings: var(--default-mono-font-variation-settings, normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
  Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
  2. Set the default placeholder color to a semi-transparent version of the current text color.
*/

::placeholder {
  opacity: 1; /* 1 */
  color: color-mix(in oklab, currentColor 50%, transparent); /* 2 */
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
`;
  var Gr = `@theme default {
  --font-sans:
    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;

  --color-red-50: oklch(0.971 0.013 17.38);
  --color-red-100: oklch(0.936 0.032 17.717);
  --color-red-200: oklch(0.885 0.062 18.334);
  --color-red-300: oklch(0.808 0.114 19.571);
  --color-red-400: oklch(0.704 0.191 22.216);
  --color-red-500: oklch(0.637 0.237 25.331);
  --color-red-600: oklch(0.577 0.245 27.325);
  --color-red-700: oklch(0.505 0.213 27.518);
  --color-red-800: oklch(0.444 0.177 26.899);
  --color-red-900: oklch(0.396 0.141 25.723);
  --color-red-950: oklch(0.258 0.092 26.042);

  --color-orange-50: oklch(0.98 0.016 73.684);
  --color-orange-100: oklch(0.954 0.038 75.164);
  --color-orange-200: oklch(0.901 0.076 70.697);
  --color-orange-300: oklch(0.837 0.128 66.29);
  --color-orange-400: oklch(0.75 0.183 55.934);
  --color-orange-500: oklch(0.705 0.213 47.604);
  --color-orange-600: oklch(0.646 0.222 41.116);
  --color-orange-700: oklch(0.553 0.195 38.402);
  --color-orange-800: oklch(0.47 0.157 37.304);
  --color-orange-900: oklch(0.408 0.123 38.172);
  --color-orange-950: oklch(0.266 0.079 36.259);

  --color-amber-50: oklch(0.987 0.022 95.277);
  --color-amber-100: oklch(0.962 0.059 95.617);
  --color-amber-200: oklch(0.924 0.12 95.746);
  --color-amber-300: oklch(0.879 0.169 91.605);
  --color-amber-400: oklch(0.828 0.189 84.429);
  --color-amber-500: oklch(0.769 0.188 70.08);
  --color-amber-600: oklch(0.666 0.179 58.318);
  --color-amber-700: oklch(0.555 0.163 48.998);
  --color-amber-800: oklch(0.473 0.137 46.201);
  --color-amber-900: oklch(0.414 0.112 45.904);
  --color-amber-950: oklch(0.279 0.077 45.635);

  --color-yellow-50: oklch(0.987 0.026 102.212);
  --color-yellow-100: oklch(0.973 0.071 103.193);
  --color-yellow-200: oklch(0.945 0.129 101.54);
  --color-yellow-300: oklch(0.905 0.182 98.111);
  --color-yellow-400: oklch(0.852 0.199 91.936);
  --color-yellow-500: oklch(0.795 0.184 86.047);
  --color-yellow-600: oklch(0.681 0.162 75.834);
  --color-yellow-700: oklch(0.554 0.135 66.442);
  --color-yellow-800: oklch(0.476 0.114 61.907);
  --color-yellow-900: oklch(0.421 0.095 57.708);
  --color-yellow-950: oklch(0.286 0.066 53.813);

  --color-lime-50: oklch(0.986 0.031 120.757);
  --color-lime-100: oklch(0.967 0.067 122.328);
  --color-lime-200: oklch(0.938 0.127 124.321);
  --color-lime-300: oklch(0.897 0.196 126.665);
  --color-lime-400: oklch(0.841 0.238 128.85);
  --color-lime-500: oklch(0.768 0.233 130.85);
  --color-lime-600: oklch(0.648 0.2 131.684);
  --color-lime-700: oklch(0.532 0.157 131.589);
  --color-lime-800: oklch(0.453 0.124 130.933);
  --color-lime-900: oklch(0.405 0.101 131.063);
  --color-lime-950: oklch(0.274 0.072 132.109);

  --color-green-50: oklch(0.982 0.018 155.826);
  --color-green-100: oklch(0.962 0.044 156.743);
  --color-green-200: oklch(0.925 0.084 155.995);
  --color-green-300: oklch(0.871 0.15 154.449);
  --color-green-400: oklch(0.792 0.209 151.711);
  --color-green-500: oklch(0.723 0.219 149.579);
  --color-green-600: oklch(0.627 0.194 149.214);
  --color-green-700: oklch(0.527 0.154 150.069);
  --color-green-800: oklch(0.448 0.119 151.328);
  --color-green-900: oklch(0.393 0.095 152.535);
  --color-green-950: oklch(0.266 0.065 152.934);

  --color-emerald-50: oklch(0.979 0.021 166.113);
  --color-emerald-100: oklch(0.95 0.052 163.051);
  --color-emerald-200: oklch(0.905 0.093 164.15);
  --color-emerald-300: oklch(0.845 0.143 164.978);
  --color-emerald-400: oklch(0.765 0.177 163.223);
  --color-emerald-500: oklch(0.696 0.17 162.48);
  --color-emerald-600: oklch(0.596 0.145 163.225);
  --color-emerald-700: oklch(0.508 0.118 165.612);
  --color-emerald-800: oklch(0.432 0.095 166.913);
  --color-emerald-900: oklch(0.378 0.077 168.94);
  --color-emerald-950: oklch(0.262 0.051 172.552);

  --color-teal-50: oklch(0.984 0.014 180.72);
  --color-teal-100: oklch(0.953 0.051 180.801);
  --color-teal-200: oklch(0.91 0.096 180.426);
  --color-teal-300: oklch(0.855 0.138 181.071);
  --color-teal-400: oklch(0.777 0.152 181.912);
  --color-teal-500: oklch(0.704 0.14 182.503);
  --color-teal-600: oklch(0.6 0.118 184.704);
  --color-teal-700: oklch(0.511 0.096 186.391);
  --color-teal-800: oklch(0.437 0.078 188.216);
  --color-teal-900: oklch(0.386 0.063 188.416);
  --color-teal-950: oklch(0.277 0.046 192.524);

  --color-cyan-50: oklch(0.984 0.019 200.873);
  --color-cyan-100: oklch(0.956 0.045 203.388);
  --color-cyan-200: oklch(0.917 0.08 205.041);
  --color-cyan-300: oklch(0.865 0.127 207.078);
  --color-cyan-400: oklch(0.789 0.154 211.53);
  --color-cyan-500: oklch(0.715 0.143 215.221);
  --color-cyan-600: oklch(0.609 0.126 221.723);
  --color-cyan-700: oklch(0.52 0.105 223.128);
  --color-cyan-800: oklch(0.45 0.085 224.283);
  --color-cyan-900: oklch(0.398 0.07 227.392);
  --color-cyan-950: oklch(0.302 0.056 229.695);

  --color-sky-50: oklch(0.977 0.013 236.62);
  --color-sky-100: oklch(0.951 0.026 236.824);
  --color-sky-200: oklch(0.901 0.058 230.902);
  --color-sky-300: oklch(0.828 0.111 230.318);
  --color-sky-400: oklch(0.746 0.16 232.661);
  --color-sky-500: oklch(0.685 0.169 237.323);
  --color-sky-600: oklch(0.588 0.158 241.966);
  --color-sky-700: oklch(0.5 0.134 242.749);
  --color-sky-800: oklch(0.443 0.11 240.79);
  --color-sky-900: oklch(0.391 0.09 240.876);
  --color-sky-950: oklch(0.293 0.066 243.157);

  --color-blue-50: oklch(0.97 0.014 254.604);
  --color-blue-100: oklch(0.932 0.032 255.585);
  --color-blue-200: oklch(0.882 0.059 254.128);
  --color-blue-300: oklch(0.809 0.105 251.813);
  --color-blue-400: oklch(0.707 0.165 254.624);
  --color-blue-500: oklch(0.623 0.214 259.815);
  --color-blue-600: oklch(0.546 0.245 262.881);
  --color-blue-700: oklch(0.488 0.243 264.376);
  --color-blue-800: oklch(0.424 0.199 265.638);
  --color-blue-900: oklch(0.379 0.146 265.522);
  --color-blue-950: oklch(0.282 0.091 267.935);

  --color-indigo-50: oklch(0.962 0.018 272.314);
  --color-indigo-100: oklch(0.93 0.034 272.788);
  --color-indigo-200: oklch(0.87 0.065 274.039);
  --color-indigo-300: oklch(0.785 0.115 274.713);
  --color-indigo-400: oklch(0.673 0.182 276.935);
  --color-indigo-500: oklch(0.585 0.233 277.117);
  --color-indigo-600: oklch(0.511 0.262 276.966);
  --color-indigo-700: oklch(0.457 0.24 277.023);
  --color-indigo-800: oklch(0.398 0.195 277.366);
  --color-indigo-900: oklch(0.359 0.144 278.697);
  --color-indigo-950: oklch(0.257 0.09 281.288);

  --color-violet-50: oklch(0.969 0.016 293.756);
  --color-violet-100: oklch(0.943 0.029 294.588);
  --color-violet-200: oklch(0.894 0.057 293.283);
  --color-violet-300: oklch(0.811 0.111 293.571);
  --color-violet-400: oklch(0.702 0.183 293.541);
  --color-violet-500: oklch(0.606 0.25 292.717);
  --color-violet-600: oklch(0.541 0.281 293.009);
  --color-violet-700: oklch(0.491 0.27 292.581);
  --color-violet-800: oklch(0.432 0.232 292.759);
  --color-violet-900: oklch(0.38 0.189 293.745);
  --color-violet-950: oklch(0.283 0.141 291.089);

  --color-purple-50: oklch(0.977 0.014 308.299);
  --color-purple-100: oklch(0.946 0.033 307.174);
  --color-purple-200: oklch(0.902 0.063 306.703);
  --color-purple-300: oklch(0.827 0.119 306.383);
  --color-purple-400: oklch(0.714 0.203 305.504);
  --color-purple-500: oklch(0.627 0.265 303.9);
  --color-purple-600: oklch(0.558 0.288 302.321);
  --color-purple-700: oklch(0.496 0.265 301.924);
  --color-purple-800: oklch(0.438 0.218 303.724);
  --color-purple-900: oklch(0.381 0.176 304.987);
  --color-purple-950: oklch(0.291 0.149 302.717);

  --color-fuchsia-50: oklch(0.977 0.017 320.058);
  --color-fuchsia-100: oklch(0.952 0.037 318.852);
  --color-fuchsia-200: oklch(0.903 0.076 319.62);
  --color-fuchsia-300: oklch(0.833 0.145 321.434);
  --color-fuchsia-400: oklch(0.74 0.238 322.16);
  --color-fuchsia-500: oklch(0.667 0.295 322.15);
  --color-fuchsia-600: oklch(0.591 0.293 322.896);
  --color-fuchsia-700: oklch(0.518 0.253 323.949);
  --color-fuchsia-800: oklch(0.452 0.211 324.591);
  --color-fuchsia-900: oklch(0.401 0.17 325.612);
  --color-fuchsia-950: oklch(0.293 0.136 325.661);

  --color-pink-50: oklch(0.971 0.014 343.198);
  --color-pink-100: oklch(0.948 0.028 342.258);
  --color-pink-200: oklch(0.899 0.061 343.231);
  --color-pink-300: oklch(0.823 0.12 346.018);
  --color-pink-400: oklch(0.718 0.202 349.761);
  --color-pink-500: oklch(0.656 0.241 354.308);
  --color-pink-600: oklch(0.592 0.249 0.584);
  --color-pink-700: oklch(0.525 0.223 3.958);
  --color-pink-800: oklch(0.459 0.187 3.815);
  --color-pink-900: oklch(0.408 0.153 2.432);
  --color-pink-950: oklch(0.284 0.109 3.907);

  --color-rose-50: oklch(0.969 0.015 12.422);
  --color-rose-100: oklch(0.941 0.03 12.58);
  --color-rose-200: oklch(0.892 0.058 10.001);
  --color-rose-300: oklch(0.81 0.117 11.638);
  --color-rose-400: oklch(0.712 0.194 13.428);
  --color-rose-500: oklch(0.645 0.246 16.439);
  --color-rose-600: oklch(0.586 0.253 17.585);
  --color-rose-700: oklch(0.514 0.222 16.935);
  --color-rose-800: oklch(0.455 0.188 13.697);
  --color-rose-900: oklch(0.41 0.159 10.272);
  --color-rose-950: oklch(0.271 0.105 12.094);

  --color-slate-50: oklch(0.984 0.003 247.858);
  --color-slate-100: oklch(0.968 0.007 247.896);
  --color-slate-200: oklch(0.929 0.013 255.508);
  --color-slate-300: oklch(0.869 0.022 252.894);
  --color-slate-400: oklch(0.704 0.04 256.788);
  --color-slate-500: oklch(0.554 0.046 257.417);
  --color-slate-600: oklch(0.446 0.043 257.281);
  --color-slate-700: oklch(0.372 0.044 257.287);
  --color-slate-800: oklch(0.279 0.041 260.031);
  --color-slate-900: oklch(0.208 0.042 265.755);
  --color-slate-950: oklch(0.129 0.042 264.695);

  --color-gray-50: oklch(0.985 0.002 247.839);
  --color-gray-100: oklch(0.967 0.003 264.542);
  --color-gray-200: oklch(0.928 0.006 264.531);
  --color-gray-300: oklch(0.872 0.01 258.338);
  --color-gray-400: oklch(0.707 0.022 261.325);
  --color-gray-500: oklch(0.551 0.027 264.364);
  --color-gray-600: oklch(0.446 0.03 256.802);
  --color-gray-700: oklch(0.373 0.034 259.733);
  --color-gray-800: oklch(0.278 0.033 256.848);
  --color-gray-900: oklch(0.21 0.034 264.665);
  --color-gray-950: oklch(0.13 0.028 261.692);

  --color-zinc-50: oklch(0.985 0 0);
  --color-zinc-100: oklch(0.967 0.001 286.375);
  --color-zinc-200: oklch(0.92 0.004 286.32);
  --color-zinc-300: oklch(0.871 0.006 286.286);
  --color-zinc-400: oklch(0.705 0.015 286.067);
  --color-zinc-500: oklch(0.552 0.016 285.938);
  --color-zinc-600: oklch(0.442 0.017 285.786);
  --color-zinc-700: oklch(0.37 0.013 285.805);
  --color-zinc-800: oklch(0.274 0.006 286.033);
  --color-zinc-900: oklch(0.21 0.006 285.885);
  --color-zinc-950: oklch(0.141 0.005 285.823);

  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.97 0 0);
  --color-neutral-200: oklch(0.922 0 0);
  --color-neutral-300: oklch(0.87 0 0);
  --color-neutral-400: oklch(0.708 0 0);
  --color-neutral-500: oklch(0.556 0 0);
  --color-neutral-600: oklch(0.439 0 0);
  --color-neutral-700: oklch(0.371 0 0);
  --color-neutral-800: oklch(0.269 0 0);
  --color-neutral-900: oklch(0.205 0 0);
  --color-neutral-950: oklch(0.145 0 0);

  --color-stone-50: oklch(0.985 0.001 106.423);
  --color-stone-100: oklch(0.97 0.001 106.424);
  --color-stone-200: oklch(0.923 0.003 48.717);
  --color-stone-300: oklch(0.869 0.005 56.366);
  --color-stone-400: oklch(0.709 0.01 56.259);
  --color-stone-500: oklch(0.553 0.013 58.071);
  --color-stone-600: oklch(0.444 0.011 73.639);
  --color-stone-700: oklch(0.374 0.01 67.558);
  --color-stone-800: oklch(0.268 0.007 34.298);
  --color-stone-900: oklch(0.216 0.006 56.043);
  --color-stone-950: oklch(0.147 0.004 49.25);

  --color-black: #000;
  --color-white: #fff;

  --spacing: 0.25rem;

  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;

  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;

  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;

  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;

  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;

  --aspect-video: 16 / 9;

  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --default-font-family: var(--font-sans);
  --default-font-feature-settings: var(--font-sans--font-feature-settings);
  --default-font-variation-settings: var(--font-sans--font-variation-settings);
  --default-mono-font-family: var(--font-mono);
  --default-mono-font-feature-settings: var(--font-mono--font-feature-settings);
  --default-mono-font-variation-settings: var(--font-mono--font-variation-settings);
}

/* Deprecated */
@theme default inline reference {
  --blur: 8px;
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
  --radius: 0.25rem;
  --max-width-prose: 65ch;
}
`;
  var Yr = `@tailwind utilities;
`;
  var Ve = { index: qr, preflight: Hr, theme: Gr, utilities: Yr };
  var Je = class {
    start(r) {
      performance.mark(`${r} (start)`);
    }
    end(r, o) {
      performance.mark(`${r} (end)`),
        performance.measure(r, {
          start: `${r} (start)`,
          end: `${r} (end)`,
          detail: o,
        });
    }
    hit(r, o) {
      performance.mark(r, { detail: o });
    }
    error(r) {
      throw (performance.mark("(error)", { detail: { error: `${r}` } }), r);
    }
  };
  var Zr = "text/tailwindcss",
    Ze,
    Ct = new Set(),
    At = "",
    St = document.createElement("style"),
    Jr = Promise.resolve(),
    Un = 1,
    B = new Je();
  async function jn() {
    B.start("Create compiler"), B.start("Reading Stylesheets");
    let t = document.querySelectorAll(`style[type="${Zr}"]`),
      r = "";
    for (let o of t)
      Qr(o),
        (r +=
          o.textContent +
          `
`);
    if (
      (r.includes("@import") || (r = `@import "tailwindcss";${r}`),
      B.end("Reading Stylesheets", { size: r.length, changed: At !== r }),
      At !== r)
    ) {
      (At = r), B.start("Compile CSS");
      try {
        Ze = await Br(r, { base: "/", loadStylesheet: In, loadModule: Fn });
      } finally {
        B.end("Compile CSS"), B.end("Create compiler");
      }
      Ct.clear();
    }
  }
  async function In(t, r) {
    function o() {
      if (t === "tailwindcss") return { base: r, content: Ve.index };
      if (
        t === "tailwindcss/preflight" ||
        t === "tailwindcss/preflight.css" ||
        t === "./preflight.css"
      )
        return { base: r, content: Ve.preflight };
      if (
        t === "tailwindcss/theme" ||
        t === "tailwindcss/theme.css" ||
        t === "./theme.css"
      )
        return { base: r, content: Ve.theme };
      if (
        t === "tailwindcss/utilities" ||
        t === "tailwindcss/utilities.css" ||
        t === "./utilities.css"
      )
        return { base: r, content: Ve.utilities };
      throw new Error(`The browser build does not support @import for "${t}"`);
    }
    try {
      let e = o();
      return (
        B.hit("Loaded stylesheet", { id: t, base: r, size: e.content.length }),
        e
      );
    } catch (e) {
      throw (
        (B.hit("Failed to load stylesheet", {
          id: t,
          base: r,
          error: e.message ?? e,
        }),
        e)
      );
    }
  }
  async function Fn() {
    throw new Error(
      "The browser build does not support plugins or config files."
    );
  }
  async function Ln(t) {
    if (!Ze) return;
    let r = new Set();
    B.start("Collect classes");
    for (let o of document.querySelectorAll("[class]"))
      for (let e of o.classList) Ct.has(e) || (Ct.add(e), r.add(e));
    B.end("Collect classes", { count: r.size }),
      !(r.size === 0 && t === "incremental") &&
        (B.start("Build utilities"),
        (St.textContent = Ze.build(Array.from(r))),
        B.end("Build utilities"));
  }
  function Qe(t) {
    async function r() {
      if (!Ze && t !== "full") return;
      let o = Un++;
      B.start(`Build #${o} (${t})`),
        t === "full" && (await jn()),
        B.start("Build"),
        await Ln(t),
        B.end("Build"),
        B.end(`Build #${o} (${t})`);
    }
    Jr = Jr.then(r).catch((o) => B.error(o));
  }
  var Mn = new MutationObserver(() => Qe("full"));
  function Qr(t) {
    Mn.observe(t, {
      attributes: !0,
      attributeFilter: ["type"],
      characterData: !0,
      subtree: !0,
      childList: !0,
    });
  }
  new MutationObserver((t) => {
    let r = 0,
      o = 0;
    for (let e of t) {
      for (let n of e.addedNodes)
        n.nodeType === Node.ELEMENT_NODE &&
          n.tagName === "STYLE" &&
          n.getAttribute("type") === Zr &&
          (Qr(n), r++);
      for (let n of e.addedNodes) n.nodeType === 1 && n !== St && o++;
      e.type === "attributes" && o++;
    }
    if (r > 0) return Qe("full");
    if (o > 0) return Qe("incremental");
  }).observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["class"],
    childList: !0,
    subtree: !0,
  });
  Qe("full");
  document.head.append(St);
})();
