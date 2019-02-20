const fetch = require('node-fetch')
const jwt = require('jsonwebtoken')

async function handlePullRequest (pullPointerSpecs, url, opts, spspOpts) {
  const token = jwt.sign(pullPointerSpecs, spspOpts.pullServerSecret)
  const pointer = `${spspOpts.pullServerURL}/${token}`
  const result = await fetch(url + '&pullPointer=' + pointer, opts)
  return result
}

module.exports = handlePullRequest
