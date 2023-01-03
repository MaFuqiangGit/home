
let UA = (function (window, navigator) {
  "use strict";

  let ua = (window.navigator && navigator.userAgent) || "";

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

