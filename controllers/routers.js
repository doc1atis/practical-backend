module.exports = (App) => {
    App.use("/create", require("../routes/createAnimal"))
    App.use("/delete", require("../routes/deleteAnimal"))
    App.use("/update", require("../routes/updateAnimal"))
    App.use("/animals",require("../routes/getAllAnimal"))
}