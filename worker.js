export default {
  async fetch(request) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";
    const isBot = /googlebot|bingbot|yandex|baiduspider/i.test(userAgent.toLowerCase());

    if (isBot) {
      const prerenderUrl = `https://service.prerender.io${url.pathname}`;
      return fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'Iuac5SW4SoEunFPRnNFA'
        }
      });
    } else {
      // Forward ke app.donghuafast.com
      const realUrl = `https://app.donghuafast.com${url.pathname}`;
      return fetch(realUrl, request);
    }
  }
}
