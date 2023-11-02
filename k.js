$(document).ready(function() {
    (t = jQuery).jscroll = {
        defaults: {
            debug: !1,
            autoTrigger: !0,
            autoTriggerUntil: !1,
            loadingHtml: "<small>Loading...</small>",
            padding: 0,
            nextSelector: "a:last",
            contentSelector: "",
            pagingSelector: "",
            callback: !1
        }
    }, e = function(e, l) {
        var n, r = e.data("jscroll"),
            o = t.extend({}, t.jscroll.defaults, "function" == typeof l ? {
                callback: l
            } : l, r || {}),
            i = "visible" === e.css("overflow-y"),
            a = e.find(o.nextSelector).first(),
            c = t(window),
            d = t("body"),
            s = i ? c : e,
            f = t.trim(a.attr("href") + " " + o.contentSelector),
            g = function() {
                e.find(".jscroll-inner").length || e.contents().wrapAll('<div class="jscroll-inner" />')
            },
            u = function(t) {
                var e;
                o.pagingSelector ? t.closest(o.pagingSelector).hide() : (e = t.parent().not(".jscroll-inner,.jscroll-added").addClass("jscroll-next-parent").hide()).length || t.wrap('<div class="jscroll-next-parent" />').parent().hide()
            },
            p = function() {
                return s.unbind(".jscroll").removeData("jscroll").find(".jscroll-inner").children().unwrap().filter(".jscroll-added").children().unwrap()
            },
            h = function() {
                g();
                var t, l = e.find("div.jscroll-inner").first(),
                    n = e.data("jscroll"),
                    r = parseInt(e.css("borderTopWidth"), 10),
                    a = isNaN(r) ? 0 : r,
                    c = parseInt(e.css("paddingTop"), 10) + a,
                    d = Math.ceil((i ? s.scrollTop() : e.offset().top) - (l.length ? l.offset().top : 0) + s.height() + c);
                if (!n.waiting && d + o.padding >= l.outerHeight()) return v("info", "jScroll:", l.outerHeight() - d, "from bottom. Loading next request..."), b()
            },
            j = function() {
                var t = e.find(o.nextSelector).first();
                t.length && (o.autoTrigger && (!1 === o.autoTriggerUntil || o.autoTriggerUntil > 0) ? (u(t), d.height() <= c.height() && h(), s.unbind(".jscroll").bind("scroll.jscroll", function() {
                    return h()
                }), o.autoTriggerUntil > 0 && o.autoTriggerUntil--) : (s.unbind(".jscroll"), t.bind("click.jscroll", function() {
                    return u(t), b(), !1
                })))
            },
            b = function() {
                var l = e.find("div.jscroll-inner").first(),
                    n = e.data("jscroll");
                return n.waiting = !0, l.append('<div class="jscroll-added" />').children(".jscroll-added").last().html('<div class="jscroll-loading">' + o.loadingHtml + "</div>"), e.animate({
                    scrollTop: l.outerHeight()
                }, 0, function() {
                    l.find("div.jscroll-added").last().load(n.nextHref, function(l, r) {
                        if ("error" === r) return p();
                        var i, a = t(this).find(o.nextSelector).first();
                        n.waiting = !1, n.nextHref = !!a.attr("href") && t.trim(a.attr("href") + " " + o.contentSelector), t(".jscroll-next-parent", e).remove(), (i = i || e.data("jscroll")) && i.nextHref ? j() : (v("warn", "jScroll: nextSelector not found - destroying"), p()), o.callback && o.callback.call(this), v("dir", n)
                    })
                })
            },
            v = function(t) {
                if (o.debug && "object" == typeof console && ("object" == typeof t || "function" == typeof console[t])) {
                    if ("object" == typeof t) {
                        var e = [];
                        for (var l in t) "function" == typeof console[l] ? (e = t[l].length ? t[l] : [t[l]], console[l].apply(console, e)) : console.log.apply(console, e)
                    } else console[t].apply(console, Array.prototype.slice.call(arguments, 1))
                }
            };
        return e.data("jscroll", t.extend({}, r, {
            initialized: !0,
            waiting: !1,
            nextHref: f
        })), g(), (n = t(o.loadingHtml).filter("img").attr("src")) && (new Image().src = n), j(), t.extend(e.jscroll, {
            destroy: p
        }), e
    }, t.fn.jscroll = function(l) {
        return this.each(function() {
            var n, r = t(this),
                o = r.data("jscroll");
            (!o || !o.initialized) && (n = new e(r, l))
        })
    }, $("#box-news").jscroll({
        autoTrigger: !1,
        loadingHtml: '<div class="loader"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>',
        nextSelector: "a.btn-lmorex:last"
    });
    var t, e, l = 0;
    $(window).scroll(function() {
        $(window).scrollTop() >= ($(document).height() - $(window).height()) * .05 ? 0 == l && ($(".ads-bottom-fixed").show(), l = 1) : ($(".ads-bottom-fixed").hide(), l = 0)
    }), $(".btn-cls").click(function() {
        $(".ads-bottom-fixed").hide()
    })
});