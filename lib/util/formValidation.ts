/**
 * Check if inputed URL is valid. 'http://' and 'https://' are mandatory.
 * @param url URL to validate
 * @returns boolean
 */
export const isValidURL = (url: string) => {
  const re = /^(http:\/\/|https:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,=.]+$/
  return re.test(String(url).toLowerCase())
}
