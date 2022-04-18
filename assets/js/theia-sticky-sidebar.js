! function(i) {
    i.fn.theiaStickySidebar = function(t) {
        var o = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0
        };
        (t = i.extend(o, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), this.each(function() {
            function o() {
                e.fixedScrollTop = 0, e.sidebar.css({
                    "min-height": "1px"
                }), e.stickySidebar.css({
                    position: "static",
                    width: ""
                })
            }

            function a(t) {
                var o = t.height();
                return t.children().each(function() {
                    o = Math.max(o, i(this).height())
                }), o
            }
            var e = {};
            e.sidebar = i(this), e.options = t || {}, e.container = i(e.options.containerSelector), 0 == e.container.size() && (e.container = e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css({
                position: "relative",
                overflow: "visible",
                "-webkit-box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "box-sizing": "border-box"
            }), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length && (e.sidebar.find("script").remove(), e.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)), e.marginTop = parseInt(e.sidebar.css("margin-top")), e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
            var d = e.stickySidebar.offset().top,
                r = e.stickySidebar.outerHeight();
            e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), d -= e.stickySidebar.offset().top, r = e.stickySidebar.outerHeight() - r - d, 0 == d ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == r ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, o(), e.onScroll = function(e) {
                if (e.stickySidebar.is(":visible"))
                    if (i("body").width() < e.options.minWidth) o();
                    else if (e.sidebar.outerWidth(!0) + 50 > e.container.width()) o();
                else {
                    var d = i(document).scrollTop(),
                        r = "static";
                    if (d >= e.container.offset().top + (e.paddingTop + e.marginTop - e.options.additionalMarginTop)) {
                        var s, n = e.paddingTop + e.marginTop + t.additionalMarginTop,
                            c = e.paddingBottom + e.marginBottom + t.additionalMarginBottom,
                            p = e.container.offset().top,
                            b = e.container.offset().top + a(e.container),
                            g = 0 + t.additionalMarginTop;
                        s = e.stickySidebar.outerHeight() + n + c < i(window).height() ? g + e.stickySidebar.outerHeight() : i(window).height() - e.marginBottom - e.paddingBottom - t.additionalMarginBottom;
                        var l = p - d + e.paddingTop + e.marginTop,
                            f = b - d - e.paddingBottom - e.marginBottom,
                            S = e.stickySidebar.offset().top - d,
                            h = e.previousScrollTop - d;
                        "fixed" == e.stickySidebar.css("position") && (S += h), S = h > 0 ? Math.min(S, g) : Math.max(S, s - e.stickySidebar.outerHeight()), S = Math.max(S, l), S = Math.min(S, f - e.stickySidebar.outerHeight());
                        var m = e.container.height() == e.stickySidebar.outerHeight();
                        r = (m || S != g) && (m || S != s - e.stickySidebar.outerHeight()) ? d + S - e.sidebar.offset().top - e.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                    }
                    if ("fixed" == r) e.stickySidebar.css({
                        position: "fixed",
                        width: e.sidebar.width(),
                        top: S,
                        left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) + parseInt(e.sidebar.css("border-left"))
                    });
                    else if ("absolute" == r) {
                        var y = {};
                        "absolute" != e.stickySidebar.css("position") && (y.position = "absolute", y.top = d + S - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom), y.width = e.sidebar.width(), y.left = "", e.stickySidebar.css(y)
                    } else "static" == r && o();
                    "static" != r && 1 == e.options.updateSidebarHeight && e.sidebar.css({
                        "min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom
                    }), e.previousScrollTop = d
                }
            }, e.onScroll(e), i(document).scroll(function(i) {
                return function() {
                    i.onScroll(i)
                }
            }(e)), i(window).resize(function(i) {
                return function() {
                    i.stickySidebar.css({
                        position: "static"
                    }), i.onScroll(i)
                }
            }(e))
        })
    }
}(jQuery);