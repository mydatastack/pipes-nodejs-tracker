# Pipes Nodejs Tracker

````js
const Pipes = require("./index.js")
const pipes = Pipes.init({hostname: "xttz3qzila4x.execute-api.eu-central-1.amazonaws.com"})

pipes.identity({
  user_id: "12345",
  platform: "nodejs shell",
  properties: {
    name: "Dimitri Tarasowski",
    email: "ceo@amazon.com",
    subscription: "monthly",
    city: "Berlin"
  }
})

pipes.page({
  user_id: "12345",
  platform: "nodejs shell",
  name: "Homepage",
  properties: {
    title: "Homepage title",
    url: "example.com",
    path: "/home"
  }
})

pipes.action({
  user_id: "12345",
  platform: "nodejs shell",
  event: "Registration",
  properties: {
    category: "winter sale",
    action: "form",
    label: "just a label",
    value: 10
  }
})

pipes.transaction({
  user_id: "12345",
  platform: "nodejs shell",
  properties: {
    order_id: "#12345",
    total: 50
  }
})

``` 
