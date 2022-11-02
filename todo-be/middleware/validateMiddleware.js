const { validate: validPatient } = require("../models/todoModel");
const validationHandler = (req, res, next) => {
    const isFound = req.baseUrl.includes('appointments')
    if(!isFound) {
        const { error } = validPatient(req.body)
        if (error) {
          res.status(404)
          throw new Error(error.details[0].message)
        }
    } else {
        const { error } = validAppointment(req.body)
        if (error) {
          res.status(404)
          throw new Error(error.details[0].message)
        }
    }

    next()
}

module.exports = {
    validationHandler,
}