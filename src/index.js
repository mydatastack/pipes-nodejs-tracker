const https = require("https")
const {generateUUID} = require("./uuid.js")
const pipe = fns => x => fns.reduce((v, f) => f(v), x)

const buildPayload = type => anonymousId => payload =>
  JSON.stringify({type, ...payload, anonymousId})

const buildHeader = config => payload => ({
  header: {
    hostname: config.hostname,
    port: config.port || 443,
    method: "POST",
    path: config.path || "/dev",
    headers: { 
      "User-Agent": "Pipes App", 
      "Content-Type": "application/json", 
      "Content-Length": Number(payload.length)
    }
  },
  payload
}) 


const sendRequest = ({header, payload}) => 
  new Promise((resolve, reject) =>  {
    const req = https.request(header, res => {
      res.on("data", d => resolve(d))
      res.on("error", e => reject(e))
    })
    req.write(payload)
    req.end()
  }
  )
   

const Pipes = (config = {}, anonymousId = generateUUID()) => ({
  init: config => Pipes(config),
  identity: async payload => await pipe ([
    buildPayload ("identity") (anonymousId),
    buildHeader (config),
    sendRequest
  ]) (payload),
  page: async payload => await pipe ([
    buildPayload ("page") (anonymousId),
    buildHeader (config),
    sendRequest
  ]) (payload),
  action: async payload => await pipe ([
    buildPayload ("action") (anonymousId),
    buildHeader (config),
    sendRequest
  ]) (payload),
  transaction:  async payload => await pipe ([
    buildPayload ("transaction") (anonymousId),
    buildHeader (config),
    sendRequest
  ]) (payload),
})

module.exports = Pipes() 

