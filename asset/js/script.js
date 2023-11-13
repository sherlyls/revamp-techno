$(document).ready(function () {
  $('.icon-burger').on('click', function () {
    $(this).toggleClass('active');
    $('.bg-burger').toggleClass('open');
    $('.content-burger').toggleClass('open');
  });
  $('.bg-burger').on('click', function () {
    $('.bg-burger').removeClass('open');
    $('.content-burger').removeClass('open');
  }).children().click(function (e) {
    return false;
  });
  $('.other .search .icon').on('click', function () {
    $('.box-search').toggleClass('open');
    $('.icon-burger').toggleClass('display');
  });
  $('.box-search .close').on('click', function () {
    $('.box-search').removeClass('open');
  });
  $(".font-1").click(function () {
    $(".wrapper-container .article p").css("fontSize", "14px",);
  }),
    $(".font-2").click(function () {
      $(".wrapper-container .article p").css("fontSize", "16px");
    }),
    $(".font-3").click(function () {
      $(".wrapper-container .article p").css("fontSize", "20px");
      $(".wrapper-container .article p").css("lineHeight", "30px");
    }),
    $('.ads-footer .close').on('click', function () {
      $('.ads-footer').css("display", "none");
    });
  if ($(window).width() > 1280) {
    if ($(".img-ava")[0]) {
      $("header .menu").css("padding", "120px");
    }
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('header').addClass("sticky");
    $('.bg-burger').addClass("top");
    $('.ads-left').addClass("top"); 
    $('.ads-right').addClass("top");
  }
  else {
    $('header').removeClass("sticky");
    $('.bg-burger').removeClass("top");
    $('.ads-left').removeClass("top");
    $('.ads-right').removeClass("top");
  }
});

if ($("#pick-font").length) {
  for (var e, t = document.getElementById("pick-font").getElementsByClassName("a-sticky"), i = 0; i < t.length; i++) t[i].addEventListener("click", function () {
    var e = document.getElementsByClassName("active-sticky-detail");
    e[0].className = e[0].className.replace(" active-sticky-detail", ""), this.className += " active-sticky-detail"
  }), document.getElementById("pick-font").style.display = "flex";
  document.getElementById("pick-font").style.display = "flex"
}

(function (b) { b.jscroll = { defaults: { debug: false, autoTrigger: true, autoTriggerUntil: false, loadingHtml: "<small>Loading...</small>", padding: 0, nextSelector: "a:last", contentSelector: "", pagingSelector: "", callback: false } }; var a = function (e, g) { var o = e.data("jscroll"), n = (typeof g === "function") ? { callback: g } : g, p = b.extend({}, b.jscroll.defaults, n, o || {}), c = (e.css("overflow-y") === "visible"), l = e.find(p.nextSelector).first(), v = b(window), h = b("body"), q = c ? v : e, m = b.trim(l.attr("href") + " " + p.contentSelector), k = function () { var x = b(p.loadingHtml).filter("img").attr("src"); if (x) { var w = new Image(); w.src = x } }, r = function () { if (!e.find(".jscroll-inner").length) { e.contents().wrapAll('<div class="jscroll-inner" />') } }, d = function (w) { var x; if (p.pagingSelector) { w.closest(p.pagingSelector).hide() } else { x = w.parent().not(".jscroll-inner,.jscroll-added").addClass("jscroll-next-parent").hide(); if (!x.length) { w.wrap('<div class="jscroll-next-parent" />').parent().hide() } } }, j = function () { return q.unbind(".jscroll").removeData("jscroll").find(".jscroll-inner").children().unwrap().filter(".jscroll-added").children().unwrap() }, i = function () { r(); var D = e.find("div.jscroll-inner").first(), B = e.data("jscroll"), C = parseInt(e.css("borderTopWidth"), 10), y = isNaN(C) ? 0 : C, x = parseInt(e.css("paddingTop"), 10) + y, A = c ? q.scrollTop() : e.offset().top, z = D.length ? D.offset().top : 0, w = Math.ceil(A - z + q.height() + x); if (!B.waiting && w + p.padding >= D.outerHeight()) { f("info", "jScroll:", D.outerHeight() - w, "from bottom. Loading next request..."); return u() } }, s = function (w) { w = w || e.data("jscroll"); if (!w || !w.nextHref) { f("warn", "jScroll: nextSelector not found - destroying"); j(); return false } else { t(); return true } }, t = function () { var w = e.find(p.nextSelector).first(); if (!w.length) { return } if (p.autoTrigger && (p.autoTriggerUntil === false || p.autoTriggerUntil > 0)) { d(w); if (h.height() <= v.height()) { i() } q.unbind(".jscroll").bind("scroll.jscroll", function () { return i() }); if (p.autoTriggerUntil > 0) { p.autoTriggerUntil-- } } else { q.unbind(".jscroll"); w.bind("click.jscroll", function () { d(w); u(); return false }) } }, u = function () { var x = e.find("div.jscroll-inner").first(), w = e.data("jscroll"); w.waiting = true; x.append('<div class="jscroll-added" />').children(".jscroll-added").last().html('<div class="jscroll-loading">' + p.loadingHtml + "</div>"); return e.animate({ scrollTop: x.outerHeight() }, 0, function () { x.find("div.jscroll-added").last().load(w.nextHref, function (A, z) { if (z === "error") { return j() } var y = b(this).find(p.nextSelector).first(); w.waiting = false; w.nextHref = y.attr("href") ? b.trim(y.attr("href") + " " + p.contentSelector) : false; b(".jscroll-next-parent", e).remove(); s(); if (p.callback) { p.callback.call(this) } f("dir", w) }) }) }, f = function (w) { if (p.debug && typeof console === "object" && (typeof w === "object" || typeof console[w] === "function")) { if (typeof w === "object") { var y = []; for (var x in w) { if (typeof console[x] === "function") { y = (w[x].length) ? w[x] : [w[x]]; console[x].apply(console, y) } else { console.log.apply(console, y) } } } else { console[w].apply(console, Array.prototype.slice.call(arguments, 1)) } } }; e.data("jscroll", b.extend({}, o, { initialized: true, waiting: false, nextHref: m })); r(); k(); t(); b.extend(e.jscroll, { destroy: j }); return e }; b.fn.jscroll = function (c) { return this.each(function () { var f = b(this), e = f.data("jscroll"), d; if (e && e.initialized) { return } d = new a(f, c) }) } })(jQuery);

$('.brt-terkini').jscroll({
  autoTrigger: false,
  loadingHtml: '<div class="loader"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>',
  nextSelector: 'a#loadMore:last',
});

