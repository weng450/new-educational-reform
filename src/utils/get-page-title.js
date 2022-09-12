import defaultSettings from '@/settings'

const title = defaultSettings.title || '数值计算课前预习与课后答疑智能辅助系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
