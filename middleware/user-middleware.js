const Users = require("../model/user-model")

function restrict() {
    return async (req, res, next) => {
        try {
        if (!req.session || !req.session.user) {
            return res.status(401).json(authError)
        }

        } catch (err) {
            next(err)
        }
    }
}

module.exxports = {
    restrict
}