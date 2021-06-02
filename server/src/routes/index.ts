module.exports = (app) => {
    require('./UserRoutes')(app)
    require('./AppointmentHourRoutes')(app)
}