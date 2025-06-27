(function () {
  const endpoint = "https://api.datavisly.com/api/v1/collect";

  function sendEvent(data) {
    const payload = {
      page: data.u,
      domain: data.d,
      eventType: data.n,
      version: data.v,
      referrer: data.r || "Direct",
      event: data.e,
      sd: data.sd,
    };

    if (window.fetch) {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  }

  function trackPageView() {
    const eventData = {
      u: window.location.href,
      d: window.location.hostname,
      n: "pageview",
      v: 20,
      r: document.referrer || "Direct",
      e: "pageview",
      sd:
        Math.round(
          ((window.scrollY + window.innerHeight) / document.body.scrollHeight) *
            100
        ) || 0,
    };

    sendEvent(eventData);
  }

  // İlk sayfa yüklemesinde event gönder
  trackPageView();

  // SPA (Single Page Application) için URL değişikliği algılama
  let currentUrl = window.location.href;

  function checkUrlChange() {
    if (currentUrl !== window.location.href) {
      currentUrl = window.location.href;
      trackPageView();
    }
  }

  // History API değişikliklerini dinle (pushState/replaceState)
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function () {
    originalPushState.apply(this, arguments);
    setTimeout(checkUrlChange, 0);
  };

  history.replaceState = function () {
    originalReplaceState.apply(this, arguments);
    setTimeout(checkUrlChange, 0);
  };

  // Popstate olayını dinle (geri/ileri butonları)
  window.addEventListener("popstate", function () {
    setTimeout(checkUrlChange, 0);
  });

  // Hash değişikliklerini dinle (# ile başlayan URL'ler)
  window.addEventListener("hashchange", function () {
    setTimeout(checkUrlChange, 0);
  });

  // Sayfa görünürlük değişikliklerini dinle
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      checkUrlChange();
    }
  });

  // Sayfa geri yüklendiğinde (bfcache)
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      checkUrlChange();
    }
  });
})();
