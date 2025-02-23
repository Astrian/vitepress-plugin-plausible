declare const dataLayer: any[]
declare const gtag: (...args: any[]) => void
declare global {
  interface Window {
    dataLayer?: typeof dataLayer
    gtag?: typeof gtag
}
}

const mountPlausibleAnalytics = (domain: string, api: string) => {
  // avoid duplicated import
  if (document.querySelector(`script[data-domain="${domain}"]`)) {
    return
  }
  
  // insert Plausible `<script>` tag
  const plausibleScript = document.createElement('script')
  plausibleScript.defer = true
  plausibleScript.dataset.domain = domain
  plausibleScript.dataset.api = api
  plausibleScript.src = "https://plausible.io/js/script.js"
  document.head.appendChild(plausibleScript)
}

/* global GA_ID, ga, PLAUSIBLE_DOMAIN, PLAUSIBLE_API */
export default ({domain, api}) => {
  // Plausible analytics integration
  if (process.env.NODE_ENV === 'production' && domain && api && typeof window !== 'undefined') {
    mountPlausibleAnalytics(domain, api)
  }
}
