module.exports = {
  app: {
    url: "http://localhost:" + 3000 + "/",
    port: process.env.PORT || 3000,
  },
  db: {
    name: "homepage",
    url: "mongodb://localhost:27017/"
  }
};