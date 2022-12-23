
var UA = (function (window, navigator) {
  "use strict";

  var ua = (window.navigator && navigator.userAgent) || "";

  function detect(pattern) {
    return function () {
      return pattern.test(ua);
    };
  }

  return {

    isChrome: detect(/webkit\W.*(chrome|chromium|crios)\W/i),

    isFirefox: detect(/mozilla.*\Wfirefox\W/i),

    isGecko: detect(/mozilla(?!.*webkit).*\Wgecko\W/i),

    isIE: detect(/\bTrident\b/),

    isOpera: detect(/opera.*\Wpresto\W/i),

    isSafari: detect(/webkit\W(?!.*chrome).*safari\W/i),

    isKindle: detect(/\W(kindle|silk)\W/i),

    isMobile: detect(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),

    isTablet: detect(/(tablet|ipad|android(?!.*mobile))/i),

    isTV: detect(/googletv|sonydtv/i),

    isWebKit: detect(/webkit\W/i),

    isHarmonyOS: detect(/harmonyos/i),

    isAndroid: detect(/android/i),

    isIOS: detect(/(iphone|ipod)/i),

    isWindows: detect(/windows/i),

    isLinux: detect(/linux(?!.*android)/i),

    isIPhone: detect(/iphone/i),

    isSymbian: detect(/symbian/i),

    isMac: detect(/macintosh.*\Wmac\W/i),

    isIPad: detect(/ipad/i),

    isIPod: detect(/ipod/i),

    isWeixin: detect(/micromessenger/i),

    isEdge: detect(/edg/i),

    isQQBrowser: detect(/qqbrowser/i),

    isQuark: detect(/quark/i),

    isMqq: detect(/qqtheme/i),

    isUCBrowser: detect(/ucbrowser/i),

    isSearchCraft: detect(/searchcraft/i),

    isbaiduboxapp: detect(/baiduboxapp/i),

    isNokiaBrowser: detect(/nokiabrowser/i),

    isLenovoBrowser: detect(/lenovobrowser/i),

    whoami: function () {
      return ua;
    },
  };
})(window, navigator);


function init() {
  var dev = document.getElementById("dev"),
    os = document.getElementById("os"),
    who = document.getElementById("who"),
    what = document.getElementById("what");

  if (UA) {
    if (who) {
      who.innerHTML = UA.whoami();
    }

    if (os) {
      if (UA.isHarmonyOS()) {
        os.innerHTML = "鸿蒙HarmonyOS";
      } else if (UA.isAndroid()) {
        os.innerHTML = "安卓Android";
      } else if (UA.isIPad()) {
        os.innerHTML = "iPadOS";
      } else if (UA.isIOS()) {
        os.innerHTML = "iOS";
      } else if (UA.isWindows()) {
        os.innerHTML = "WindowsOS";
      } else if (UA.isLinux()) {
        os.innerHTML = "Linux";
      } else if (UA.isSymbian()) {
        os.innerHTML = "塞班SymbianOS";
      } else if (UA.isMac()) {
        os.innerHTML = "MacOS";
      } else {
        os.innerHTML = "未知";
      }
    }


    if (dev) {
      if (UA.isTablet()) {
        dev.innerHTML = "平板";
      } else if (UA.isMobile()) {
        dev.innerHTML = "手机📱";
      } else if (UA.isTV()) {
        dev.innerHTML = "电视📺";
      } else {
        dev.innerHTML = "电脑🖥️";
      }
    }

    if (what) {
      if (UA.isWeixin()) {
        what.innerHTML = "微信";
      } else if (UA.isEdge()) {
        what.innerHTML = "Microsoft Edge";
      } else if (UA.isMqq()) {
        what.innerHTML = "QQ";
      } else if (UA.isQQBrowser()) {
        what.innerHTML = "QQ浏览器";
      } else if (UA.isQuark()) {
        what.innerHTML = "夸克浏览器Quark";
      } else if (UA.isUCBrowser()) {
        what.innerHTML = "UC浏览器";
      } else if (UA.isSearchCraft()) {
        what.innerHTML = "简单搜索";
      } else if (UA.isbaiduboxapp()) {
        what.innerHTML = "百度app";
      } else if (UA.isLenovoBrowser()) {
        what.innerHTML = "联想浏览器";
      } else if (UA.isChrome()) {
        what.innerHTML = "Chrome或Chrome内核";
      } else if (UA.isIE()) {
        what.innerHTML = "ie浏览器";
      } else if (UA.isFirefox()) {
        what.innerHTML = "Firefox火狐";
      } else if (UA.isGecko()) {
        what.innerHTML = "Gecko内核";
      } else if (UA.isOpera()) {
        what.innerHTML = "Opera";
        /*} else if (UA.isIE()) {
                              what.innerHTML = "Internet Explorer";*/
      } else if (UA.isNokiaBrowser()) {
        what.innerHTML = "诺基亚浏览器";
      } else if (UA.isSafari()) {
        what.innerHTML = "Safari";
      } else if (UA.isWebKit()) {
        what.innerHTML = "WebKit";
      }
    }
  }
}

if (window.attachEvent) {
  document.onreadystatechange = init;
} else if (window.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}

