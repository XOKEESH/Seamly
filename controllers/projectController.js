const { Project } = require('../models')

// GET Index
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.json(projects)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET Show
const getProjectsById = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findById(id)
        if (project) {
            return res.json(project)
        }
        return res.status(404).send('Project with that ID not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET by User
const getProjectsByUser = async (req, res) => {
    try {
        const { userId } = req.params
        const projects = await Project.find({ user: userId })
        if (projects.length > 0) {
            return res.json(projects)
        }
        return res.status(404).send('No projects found for that user.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET by Pattern
const getProjectsByPattern = async (req, res) => {
    try {
        const { patternId } = req.params
        const projects = await Project.find({ pattern: patternId })
        if (projects.length > 0) {
            return res.json(projects)
        }
        return res.status(404).send('No projects found for that pattern.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Create - Post
const createProject = async (req, res) => {
    try {
        const project = new Project(req.body)
        await project.save()
        return res.status(201).json({ project })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

// Update - Put
const updateProject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findByIdAndUpdate(id, req.body, { new: true })
        if (project) {
            return res.status(200).json(project)
        }
        throw new Error('Project not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Delete - Delete
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Project.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Project deleted.')
        }
        throw new Error('Project not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllProjects,
    getProjectsById,
    getProjectsByUser,
    getProjectsByPattern,
    createProject,
    updateProject,
    deleteProject,
}
