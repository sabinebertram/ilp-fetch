const fetch = require('node-fetch')

async function requestPullPointer (pullPointerSpecs, url, opts) {
  const response = await fetch(
    opts.pullServerURL,
    { method: 'post', body: JSON.stringify(pullPointerSpecs), headers: { 'Authorization': opts.pullServerSecret } }
  )
  const parse = await response.json()
  opts.pullPointer = parse['token']
  const result = await fetch(url, opts)
  return result
}

module.exports = requestPullPointer
