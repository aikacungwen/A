export default {
  async fetch(request) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";
    
    // Cek apakah user-agent adalah bot
    const isBot = /googlebot|bingbot|yandex|baiduspider/i.test(userAgent.toLowerCase());
    
    if (isBot) {
      // Arahkan ke Prerender.io untuk bot
      const prerenderUrl = `https://service.prerender.io${url.pathname}`;
      return fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'Iuac5SW4SoEunFPRnNFA'
        }
      });
    } else {
      // Arahkan permintaan ke aplikasi utama kamu di app.donghuafast.cfd
      const realUrl = `https://app.donghuafast.cfd${url.pathname}`;
      return fetch(realUrl, request);  // Forward request ke app.donghuafast.cfd
    }
  }
}
