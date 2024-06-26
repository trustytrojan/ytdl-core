let baseUrl;

export const setBaseUrl = (url) => baseUrl = url;

export const wrapUrl = (url) => `${baseUrl}${url}`;

export const fetch = (url, init) => window.fetch(baseUrl ? wrapUrl(url) : url, init);
