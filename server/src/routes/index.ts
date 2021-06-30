import { Application } from "express"

module.exports = (app: Application) => {
    require('./UserRoutes')(app)
    require('./AppointmentHourRoutes')(app)
    require('./AuthRoutes')(app)
}