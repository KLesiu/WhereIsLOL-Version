const Router = require("express").Router()
const userController = require("../controllers/userController")

Router.post('/leaderboard/create',userController.create)
Router.get('/leaderboard',userController.get_leaderboard)

module.exports = Router