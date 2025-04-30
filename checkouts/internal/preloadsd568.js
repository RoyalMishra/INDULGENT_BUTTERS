
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.DBXCaHe1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.BFGpdJX0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage-legacy.x2ZsHYzS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.CKX4nuvk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation-legacy.CwpSrxTi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment-legacy.BHadiGwh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField-legacy.BFAyK1o5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayOptInDisclaimer-legacy.DQATvGvm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShipmentBreakdown-legacy.BSb9M-1G.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MerchandiseModal-legacy.CnMFY4TA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StackedMerchandisePreview-legacy.Uu5oVQA_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.B_pootZh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch-legacy.DvRfhhIt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger-legacy.CipnZe9E.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.WI1GCM6e.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  