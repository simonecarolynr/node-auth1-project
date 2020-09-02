const express = require('express')

const db = require('../model/user-model')

const bcrypt = require('bcryptjs')
const validate = require("../middleware/user-middleware")

const user = express.Router()

//CREATE a user '/api/register'
user.post('/api/register', async (req, res, next) => {
    try {
        const { username, password } = req.body
		const user = await Users.findBy({ username }).first()

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newUser = await Users.add({
			username,
			password: await bcrypt.hash(password, 15),
		})

		res.status(201).json(newUser)
    } catch (err) {
        next(err)
    }
})


//CREATE a new session upon authenticating the user
user.post('/api/login', async (req, res, next) => {
    try {
		const { username, password } = req.body
		const user = await Users.findBy({ username }).first()
		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}
		
		const passwordValid = await bcrypt.compare(password, user.password)
		
		if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})	
		}

		//create a new session
		req.session.user = user

		res.json({
			message: `Welcome ${user.username}!`,
		})
    } catch (err) {
        next(err)
    }
})


//RETRIEVE the users, if authorized
user.get('/api/users', async (req, res, next) => {
    try {
        res.json(await db.find())
    } catch (err) {
        next(err)
    }
})

