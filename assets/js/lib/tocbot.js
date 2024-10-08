(() => {
  "use strict";
  var e = {
      d: (t, n) => {
        for (var o in n)
          e.o(n, o) &&
            !e.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  function n(e) {
    var t,
      n = [].forEach,
      o = [].some,
      l = "undefined" != typeof window && document.body,
      r = !0,
      i = " ";
    function s(t, o) {
      var l,
        r,
        a,
        d = o.appendChild(
          ((l = t),
          (r = document.createElement("li")),
          (a = document.createElement("a")),
          e.listItemClass && r.setAttribute("class", e.listItemClass),
          e.onClick && (a.onclick = e.onClick),
          e.includeTitleTags && a.setAttribute("title", l.textContent),
          e.includeHtml && l.childNodes.length
            ? n.call(l.childNodes, function (e) {
                a.appendChild(e.cloneNode(!0));
              })
            : (a.textContent = l.textContent),
          a.setAttribute("href", e.basePath + "#" + l.id),
          a.setAttribute(
            "class",
            e.linkClass +
              i +
              "node-name--" +
              l.nodeName +
              i +
              e.extraLinkClasses
          ),
          r.appendChild(a),
          r)
        );
      if (t.children.length) {
        var u = c(t.isCollapsed);
        t.children.forEach(function (e) {
          s(e, u);
        }),
          d.appendChild(u);
      }
    }
    function c(t) {
      var n = e.orderedList ? "ol" : "ul",
        o = document.createElement(n),
        l = e.listClass + i + e.extraListClasses;
      return (
        t && (l = (l = l + i + e.collapsibleClass) + i + e.isCollapsedClass),
        o.setAttribute("class", l),
        o
      );
    }
    function a(t) {
      var n = 0;
      return (
        null !== t &&
          ((n = t.offsetTop), e.hasInnerContainers && (n += a(t.offsetParent))),
        n
      );
    }
    function d(e, t) {
      return e && e.className !== t && (e.className = t), e;
    }
    function u(t) {
      return t &&
        -1 !== t.className.indexOf(e.collapsibleClass) &&
        -1 !== t.className.indexOf(e.isCollapsedClass)
        ? (d(t, t.className.replace(i + e.isCollapsedClass, "")),
          u(t.parentNode.parentNode))
        : t;
    }
    return {
      enableTocAnimation: function () {
        r = !0;
      },
      disableTocAnimation: function (t) {
        var n = t.target || t.srcElement;
        "string" == typeof n.className &&
          -1 !== n.className.indexOf(e.linkClass) &&
          (r = !1);
      },
      render: function (e, n) {
        var o = c(!1);
        if (
          (n.forEach(function (e) {
            s(e, o);
          }),
          null !== (t = e || t))
        )
          return (
            t.firstChild && t.removeChild(t.firstChild),
            0 === n.length ? t : t.appendChild(o)
          );
      },
      updateToc: function (s) {
        var c;
        (c =
          e.scrollContainer && document.querySelector(e.scrollContainer)
            ? document.querySelector(e.scrollContainer).scrollTop
            : document.documentElement.scrollTop || l.scrollTop),
          e.positionFixedSelector &&
            (function () {
              var n;
              n =
                e.scrollContainer && document.querySelector(e.scrollContainer)
                  ? document.querySelector(e.scrollContainer).scrollTop
                  : document.documentElement.scrollTop || l.scrollTop;
              var o = document.querySelector(e.positionFixedSelector);
              "auto" === e.fixedSidebarOffset &&
                (e.fixedSidebarOffset = t.offsetTop),
                n > e.fixedSidebarOffset
                  ? -1 === o.className.indexOf(e.positionFixedClass) &&
                    (o.className += i + e.positionFixedClass)
                  : (o.className = o.className.replace(
                      i + e.positionFixedClass,
                      ""
                    ));
            })();
        var f,
          m = s;
        if (r && null !== t && m.length > 0) {
          o.call(m, function (t, n) {
            return a(t) > c + e.headingsOffset + 10
              ? ((f = m[0 === n ? n : n - 1]), !0)
              : n === m.length - 1
              ? ((f = m[m.length - 1]), !0)
              : void 0;
          });
          var p = t.querySelector("." + e.activeLinkClass),
            h = t.querySelector(
              "." +
                e.linkClass +
                ".node-name--" +
                f.nodeName +
                '[href="' +
                e.basePath +
                "#" +
                f.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") +
                '"]'
            );
          if (p === h) return;
          var C = t.querySelectorAll("." + e.linkClass);
          n.call(C, function (t) {
            d(t, t.className.replace(i + e.activeLinkClass, ""));
          });
          var g = t.querySelectorAll("." + e.listItemClass);
          n.call(g, function (t) {
            d(t, t.className.replace(i + e.activeListItemClass, ""));
          }),
            h &&
              -1 === h.className.indexOf(e.activeLinkClass) &&
              (h.className += i + e.activeLinkClass);
          var v = h && h.parentNode;
          v &&
            -1 === v.className.indexOf(e.activeListItemClass) &&
            (v.className += i + e.activeListItemClass);
          var S = t.querySelectorAll(
            "." + e.listClass + "." + e.collapsibleClass
          );
          n.call(S, function (t) {
            -1 === t.className.indexOf(e.isCollapsedClass) &&
              (t.className += i + e.isCollapsedClass);
          }),
            h &&
              h.nextSibling &&
              -1 !== h.nextSibling.className.indexOf(e.isCollapsedClass) &&
              d(
                h.nextSibling,
                h.nextSibling.className.replace(i + e.isCollapsedClass, "")
              ),
            u(h && h.parentNode.parentNode);
        }
      },
    };
  }
  e.r(t),
    e.d(t, {
      _buildHtml: () => r,
      _headingsArray: () => s,
      _options: () => d,
      _parseContent: () => i,
      _scrollListener: () => c,
      destroy: () => f,
      init: () => u,
      refresh: () => m,
    });
  const o = {
    tocSelector: ".js-toc",
    contentSelector: ".js-toc-content",
    headingSelector: "h1, h2, h3",
    ignoreSelector: ".js-toc-ignore",
    hasInnerContainers: !1,
    linkClass: "toc-link",
    extraLinkClasses: "",
    activeLinkClass: "is-active-link",
    listClass: "toc-list",
    extraListClasses: "",
    isCollapsedClass: "is-collapsed",
    collapsibleClass: "is-collapsible",
    listItemClass: "toc-list-item",
    activeListItemClass: "is-active-li",
    collapseDepth: 0,
    scrollSmooth: !0,
    scrollSmoothDuration: 420,
    scrollSmoothOffset: 0,
    scrollEndCallback: function (e) {},
    headingsOffset: 1,
    throttleTimeout: 50,
    positionFixedSelector: null,
    positionFixedClass: "is-position-fixed",
    fixedSidebarOffset: "auto",
    includeHtml: !1,
    includeTitleTags: !1,
    onClick: function (e) {},
    orderedList: !0,
    scrollContainer: null,
    skipRendering: !1,
    headingLabelCallback: !1,
    ignoreHiddenElements: !1,
    headingObjectCallback: null,
    basePath: "",
    disableTocScrollSync: !1,
    tocScrollOffset: 0,
  };
  function l(e) {
    var t = e.duration,
      n = e.offset;
    if ("undefined" != typeof window && "undefined" != typeof location) {
      var o = location.hash ? l(location.href) : location.href;
      document.body.addEventListener(
        "click",
        function (r) {
          var i;
          "a" !== (i = r.target).tagName.toLowerCase() ||
            !(i.hash.length > 0 || "#" === i.href.charAt(i.href.length - 1)) ||
            (l(i.href) !== o && l(i.href) + "#" !== o) ||
            r.target.className.indexOf("no-smooth-scroll") > -1 ||
            ("#" === r.target.href.charAt(r.target.href.length - 2) &&
              "!" === r.target.href.charAt(r.target.href.length - 1)) ||
            -1 === r.target.className.indexOf(e.linkClass) ||
            (function (e, t) {
              var n,
                o,
                l = window.pageYOffset,
                r = {
                  duration: t.duration,
                  offset: t.offset || 0,
                  callback: t.callback,
                  easing:
                    t.easing ||
                    function (e, t, n, o) {
                      return (e /= o / 2) < 1
                        ? (n / 2) * e * e + t
                        : (-n / 2) * (--e * (e - 2) - 1) + t;
                    },
                },
                i =
                  document.querySelector(
                    '[id="' + decodeURI(e).split("#").join("") + '"]'
                  ) ||
                  document.querySelector(
                    '[id="' + e.split("#").join("") + '"]'
                  ),
                s =
                  "string" == typeof e
                    ? r.offset +
                      (e
                        ? (i && i.getBoundingClientRect().top) || 0
                        : -(
                            document.documentElement.scrollTop ||
                            document.body.scrollTop
                          ))
                    : e,
                c =
                  "function" == typeof r.duration ? r.duration(s) : r.duration;
              function a(e) {
                (o = e - n),
                  window.scrollTo(0, r.easing(o, l, s, c)),
                  o < c
                    ? requestAnimationFrame(a)
                    : (window.scrollTo(0, l + s),
                      "function" == typeof r.callback && r.callback());
              }
              requestAnimationFrame(function (e) {
                (n = e), a(e);
              });
            })(r.target.hash, {
              duration: t,
              offset: n,
              callback: function () {
                var e, t;
                (e = r.target.hash),
                  (t = document.getElementById(e.substring(1))) &&
                    (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) ||
                      (t.tabIndex = -1),
                    t.focus());
              },
            });
        },
        !1
      );
    }
    function l(e) {
      return e.slice(0, e.lastIndexOf("#"));
    }
  }
  let r,
    i,
    s,
    c,
    a,
    d = {};
  function u(e) {
    (d = (function () {
      const e = {};
      for (let t = 0; t < arguments.length; t++) {
        const n = arguments[t];
        for (const t in n) p.call(n, t) && (e[t] = n[t]);
      }
      return e;
    })(o, e || {})),
      d.scrollSmooth &&
        ((d.duration = d.scrollSmoothDuration),
        (d.offset = d.scrollSmoothOffset),
        l(d)),
      (r = n(d)),
      (i = (function (e) {
        var t = [].reduce;
        function n(e) {
          return e[e.length - 1];
        }
        function o(e) {
          return +e.nodeName.toUpperCase().replace("H", "");
        }
        function l(t) {
          if (
            !(function (e) {
              try {
                return (
                  e instanceof window.HTMLElement ||
                  e instanceof window.parent.HTMLElement
                );
              } catch (t) {
                return e instanceof window.HTMLElement;
              }
            })(t)
          )
            return t;
          if (e.ignoreHiddenElements && (!t.offsetHeight || !t.offsetParent))
            return null;
          const n =
            t.getAttribute("data-heading-label") ||
            (e.headingLabelCallback
              ? String(e.headingLabelCallback(t.innerText))
              : (t.innerText || t.textContent).trim());
          var l = {
            id: t.id,
            children: [],
            nodeName: t.nodeName,
            headingLevel: o(t),
            textContent: n,
          };
          return (
            e.includeHtml && (l.childNodes = t.childNodes),
            e.headingObjectCallback ? e.headingObjectCallback(l, t) : l
          );
        }
        return {
          nestHeadingsArray: function (o) {
            return t.call(
              o,
              function (t, o) {
                var r = l(o);
                return (
                  r &&
                    (function (t, o) {
                      for (
                        var r = l(t),
                          i = r.headingLevel,
                          s = o,
                          c = n(s),
                          a = i - (c ? c.headingLevel : 0);
                        a > 0 && (!(c = n(s)) || i !== c.headingLevel);

                      )
                        c && void 0 !== c.children && (s = c.children), a--;
                      i >= e.collapseDepth && (r.isCollapsed = !0), s.push(r);
                    })(r, t.nest),
                  t
                );
              },
              { nest: [] }
            );
          },
          selectHeadings: function (t, n) {
            var o = n;
            e.ignoreSelector &&
              (o = n.split(",").map(function (t) {
                return t.trim() + ":not(" + e.ignoreSelector + ")";
              }));
            try {
              return t.querySelectorAll(o);
            } catch (e) {
              return (
                console.warn("Headers not found with selector: " + o), null
              );
            }
          },
        };
      })(d)),
      f();
    const t = (function (e) {
      try {
        return e.contentElement || document.querySelector(e.contentSelector);
      } catch (t) {
        return (
          console.warn("Contents element not found: " + e.contentSelector), null
        );
      }
    })(d);
    if (null === t) return;
    const u = C(d);
    if (null === u) return;
    if (((s = i.selectHeadings(t, d.headingSelector)), null === s)) return;
    const m = i.nestHeadingsArray(s).nest;
    if (d.skipRendering) return this;
    r.render(u, m),
      (c = h(function (e) {
        r.updateToc(s),
          !d.disableTocScrollSync &&
            (function (e) {
              var t = e.tocElement || document.querySelector(e.tocSelector);
              if (t && t.scrollHeight > t.clientHeight) {
                var n = t.querySelector("." + e.activeListItemClass);
                if (n) {
                  var o = t.scrollTop,
                    l = o + t.clientHeight,
                    r = n.offsetTop,
                    i = r + n.clientHeight;
                  r < o + e.tocScrollOffset
                    ? (t.scrollTop -= o - r + e.tocScrollOffset)
                    : i > l - e.tocScrollOffset - 30 &&
                      (t.scrollTop += i - l + e.tocScrollOffset + 60);
                }
              }
            })(d);
        const t =
          e &&
          e.target &&
          e.target.scrollingElement &&
          0 === e.target.scrollingElement.scrollTop;
        ((e && (0 === e.eventPhase || null === e.currentTarget)) || t) &&
          (r.updateToc(s), d.scrollEndCallback && d.scrollEndCallback(e));
      }, d.throttleTimeout)),
      c(),
      d.scrollContainer && document.querySelector(d.scrollContainer)
        ? (document
            .querySelector(d.scrollContainer)
            .addEventListener("scroll", c, !1),
          document
            .querySelector(d.scrollContainer)
            .addEventListener("resize", c, !1))
        : (document.addEventListener("scroll", c, !1),
          document.addEventListener("resize", c, !1));
    let g = null;
    (a = h(function (e) {
      d.scrollSmooth && r.disableTocAnimation(e),
        r.updateToc(s),
        g && clearTimeout(g),
        (g = setTimeout(function () {
          r.enableTocAnimation();
        }, d.scrollSmoothDuration));
    }, d.throttleTimeout)),
      d.scrollContainer && document.querySelector(d.scrollContainer)
        ? document
            .querySelector(d.scrollContainer)
            .addEventListener("click", a, !1)
        : document.addEventListener("click", a, !1);
  }
  function f() {
    const e = C(d);
    null !== e &&
      (d.skipRendering || (e && (e.innerHTML = "")),
      d.scrollContainer && document.querySelector(d.scrollContainer)
        ? (document
            .querySelector(d.scrollContainer)
            .removeEventListener("scroll", c, !1),
          document
            .querySelector(d.scrollContainer)
            .removeEventListener("resize", c, !1),
          r &&
            document
              .querySelector(d.scrollContainer)
              .removeEventListener("click", a, !1))
        : (document.removeEventListener("scroll", c, !1),
          document.removeEventListener("resize", c, !1),
          r && document.removeEventListener("click", a, !1)));
  }
  function m(e) {
    f(), u(e || d);
  }
  const p = Object.prototype.hasOwnProperty;
  function h(e, t, n) {
    let o, l;
    return (
      t || (t = 250),
      function () {
        const r = n || this,
          i = +new Date(),
          s = arguments;
        o && i < o + t
          ? (clearTimeout(l),
            (l = setTimeout(function () {
              (o = i), e.apply(r, s);
            }, t)))
          : ((o = i), e.apply(r, s));
      }
    );
  }
  function C(e) {
    try {
      return e.tocElement || document.querySelector(e.tocSelector);
    } catch (t) {
      return console.warn("TOC element not found: " + e.tocSelector), null;
    }
  }
  var g, v;
  (g = "undefined" != typeof global ? global : window || global),
    (v = function (e) {
      const n = !!(
        e &&
        e.document &&
        e.document.querySelector &&
        e.addEventListener
      );
      if ("undefined" != typeof window || n) return (e.tocbot = t), t;
    }),
    "function" == typeof define && define.amd
      ? define([], v(g))
      : "object" == typeof exports
      ? (module.exports = v(g))
      : (g.tocbot = v(g));
})();
