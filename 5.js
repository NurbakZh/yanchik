module.exports = function isValidYandexLink(url) {
    try {
        if (!/^https?:\/\//i.test(url)) {
            url = 'https://' + url;
        }

        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname.toLowerCase();
        const yandexDomainRegex = /^(?:[a-zA-Z0-9-]+\.)*(?:ya|yandex)\.[a-z]{2,6}$/;

        return yandexDomainRegex.test(hostname);
    } catch (e) {
        return false;
    }
}
  