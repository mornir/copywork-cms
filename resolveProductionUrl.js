const isDraft = id => id.includes('drafts')
export default function resolveProductionUrl(document) {
  if (!isDraft(document._id)) return undefined
  return `http://127.0.0.1:8080/preview?draft=${document._id}`
}
