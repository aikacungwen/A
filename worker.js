export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get("user-agent") || "";
    const isBot = /googlebot|bingbot|yandex|baiduspider/i.test(userAgent.toLowerCase());

    if (isBot) {
      const prerenderUrl = `https://service.prerender.io${new URL(request.url).pathname}`;
      const prerenderResponse = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'Iuac5SW4SoEunFPRnNFA'
        }
      });
      return prerenderResponse;
    }

    // Kalau bukan bot, teruskan request ke Cloudflare Pages
    return fetch(request);
  }
}
