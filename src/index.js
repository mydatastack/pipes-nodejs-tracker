const https = require("http")
const {generateUUID} = require("./uuid.js")


const request = (options, data) =>  {
  const opt = {
    ...options, 
    headers: { 
      "User-Agent": "Pipes App", 
      "Content-Type": "application/json", 
      "Content-Length": Number(data.length)
    }
  }  
  return new Promise((resolve, reject) =>  {
    const req = https.request(opt, res => {
      res.on("data", d =>
        resolve(d))
      res.on("error", e =>
        reject(e))

    })
    req.write(data)
    req.end()
  }
  ).then(x => x)
   .catch(e => e)
}

const send = (config, type, anonymousId, data) => request({
    ...config, 
    method: "POST", 
    path: "/"
  }, JSON.stringify({type, ...data, anonymousId})
)

const Pipes = (config = {}, anonymousId) => ({
  init: config => Pipes(config, generateUUID()),
  identity: data => send(config, "identity", anonymousId, data),
  page: data => send(config, "page", anonymousId, data),  
  action: data => send(config, "action", anonymousId, data), 
  transaction: data => send(config, "transaction", anonymousId, data),
})

module.exports = Pipes() 

