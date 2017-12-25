module.exports = {
  app: {
    url: "http://localhost:" + 3000 + "/",
    port: process.env.PORT || 3000,
  },
  db: {
    name: "iframe",
    url: "mongodb://localhost:27017/"
  }
};