
module.exports = (app) => {

  app.use('/v3/jwt', require("./controllers/jwt"));
}
