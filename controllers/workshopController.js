const { Workshop } = require('../models')

const getAllWorkshops = async (req, res) => {
    try {
        const workshops = await Workshop.find()
        res.json(workshops)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorkshopById = async (req, res) => {
    try {
        const { id } = req.params
        const workshop = await Workshop.findById(id)
        if (workshop) {
            return res.json(workshop)
        }
        return res.status(404).send('Workshop with that ID not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorkshopsByTitle = async (req, res) => {
    try {
        const { title } = req.query
        const workshops = await Workshop.find({ title: new RegExp(title, 'i') })
        if (workshops.length > 0) {
            return res.json(workshops)
        }
        return res.status(404).send('No workshops found with that title.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorkshopsByDate = async (req, res) => {
    try {
        const { date } = req.query
        if (!date) {
            return res.status(400).send('Date is required')
        }
        const workshops = await Workshop.find({ date })
        if (workshops.length > 0) {
            return res.json(workshops)
        }
        return res.status(404).send('No workshops found on that date.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorkshopsByInstructor = async (req, res) => {
    try {
        const { instructor } = req.query
        const workshops = await Workshop.find({ instructor: new RegExp(instructor, 'i') })
        if (workshops.length > 0) {
            return res.json(workshops)
        }
        return res.status(404).send('No workshops found with that instructor.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorkshopsBySkillLevel = async (req, res) => {
    try {
        const { skillLevel } = req.query
        const workshops = await Workshop.find({ skillLevel })
        if (workshops.length > 0) {
            return res.json(workshops)
        }
        return res.status(404).send('No workshops found with that skill level.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorkshopsByProjectType = async (req, res) => {
    try {
        const { projectType } = req.query
        const workshops = await Workshop.find({ projectType: new RegExp(projectType, 'i') })
        if (workshops.length > 0) {
            return res.json(workshops)
        }
        return res.status(404).send('No workshops found with that project type.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createWorkshop = async (req, res) => {
    try {
        const workshop = new Workshop(req.body)
        await workshop.save()
        return res.status(201).json({ workshop })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const updateWorkshop = async (req, res) => {
    try {
        const { id } = req.params
        const workshop = await Workshop.findByIdAndUpdate(id, req.body, { new: true })
        if (workshop) {
            return res.status(200).json(workshop)
        }
        throw new Error('Workshop not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteWorkshop = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Workshop.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Workshop deleted.')
        }
        throw new Error('Workshop not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllWorkshops,
    getWorkshopById,
    getWorkshopsByTitle,
    getWorkshopsByDate,
    getWorkshopsByInstructor,
    getWorkshopsBySkillLevel,
    getWorkshopsByProjectType,
    createWorkshop,
    updateWorkshop,
    deleteWorkshop
}