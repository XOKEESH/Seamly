const { User } = require('../models')

// GET Index
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET Show
const getUsersById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with that ID not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUserByName = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username })
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with that username not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({ email })
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with that email not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        return res.status(201).json({ user })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('User deleted.')
        }
        throw new Error('User not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllUsers,
    getUsersById,
    getUserByName,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}