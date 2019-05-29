const Pipes = require("./index.js")
const pipes = Pipes.init({hostname: "localhost", port: 3000, batch: false})
const {describe} = require("riteway")


describe("pipes.identity()", async assert =>
  assert({
    given: "some user data",
    should: "call make a call to the server",
    actual: await pipes.identity({
      userId: "12345", 
      attributes: {
        name: "Dimitri Tarasowski",
        email: "ceo@amazon.com",
        subscription: "monthly",
        city: "Berlin"
      }
    }).then(x => JSON.stringify(x)),
    expected: '{"type":"Buffer","data":[34,115,117,99,99,101,115,115,34]}'
  })
)

describe("pipes.page()", async assert =>
  assert({
    given: "some user data",
    should: "make a call to the server",
    actual: await pipes.page({
      userId: "12345", 
      path: "/",
      pageName: "Homepage"
    }).then(x => JSON.stringify(x)),
    expected: '{"type":"Buffer","data":[34,115,117,99,99,101,115,115,34]}'

  })
)
