const fetch = require('node-fetch')

async function requestPullPointer (pullPointerSpecs, url, opts) {
  const response = await fetch(
    opts.pullServerURL,
    { method: 'POST', body: JSON.stringify(pullPointerSpecs), headers: { 'Authorization': 'Bearer ' + opts.pullServerSecret, 'Content-Type': 'application/json' } }
  )
  if (response.status === 200) {
    const parse = await response.json()
    const pullPointer = parse['token']
    const result = await fetch(url + '&pullPointer=' + pullPointer, opts)
    return result
  } else {
    throw new Error('could not create pull pointer, response status: ' + response.status)
  }
}

module.exports = requestPullPointer
