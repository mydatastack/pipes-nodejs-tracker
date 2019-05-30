# Pipes Nodejs Tracker

````js
const Pipes = require("./index.js")
const pipes = Pipes.init({hostname: "xttz3qzila4x.execute-api.eu-central-1.amazonaws.com"})

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
  path: "/homepage",
  title: "Welcome home",
  description: "My homepage"
})


pipes.action({
  userId: "12345",
  event: "submit",
  description: "Form submit",
  conversion: true
})

pipes.transaction({
  userId: "12345",
  product: "Apple mini",
  productId: "XSSS0394",
  price: 125
})
```
