# Pipes Nodejs Tracker

````js
const Pipes = require("./index.js")
const pipes = Pipes.init({hostname: "localhost", port: 3000, batch: false})

pipes.identity({
      userId: "12345", 
      attributes: {
        name: "Dimitri Tarasowski",
        email: "ceo@amazon.com",
        subscription: "monthly",
        city: "Berlin"
      }
    })

pipes.page({
      userId: "12345", 
      path: "/",
      pageName: "Homepage"
    })
```
