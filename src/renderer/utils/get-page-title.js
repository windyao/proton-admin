import defaultSettings from '@/renderer/settings'

const title = defaultSettings.title || 'Proton Admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
