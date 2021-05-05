/*
 * Request
 * fetch wrapper
 */
async function checkStatus(response) {
    if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (contentType && /application\/json/.test(contentType)) {
            return Promise.resolve(response.json());
        }
        return Promise.resolve(response.text());
    }
    const json = await response.json();
    const reason = {
        status: response.status,
        statusText: response.statusText,
        message: json.message || response.statusText,
    };
    return Promise.reject(reason);
}
export default async function request(input, init) {
    const response = await fetch(input, init);
    return checkStatus(response);
}
