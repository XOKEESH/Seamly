const { Pattern } = require('../models')

// Get all patterns
const getAllPatterns = async (req, res) => {
    try {
        const patterns = await Pattern.find()
        res.json(patterns)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by ID
const getPatternById = async (req, res) => {
    try {
        const { id } = req.params
        const pattern = await Pattern.findById(id)
        if (pattern) {
            return res.json(pattern)
        }
        return res.status(404).send('Pattern with that ID not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by name
const getPatternByName = async (req, res) => {
    try {
        const { title } = req.params
        const patterns = await Pattern.find({ title: new RegExp(title, 'i') })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern with that name not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by brand
const getPatternByBrand = async (req, res) => {
    try {
        const { brand } = req.params
        const patterns = await Pattern.find({ brand })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern with that brand not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by type
const getPatternByType = async (req, res) => {
    try {
        const { patternType } = req.params
        const patterns = await Pattern.find({ patternType })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern with that type not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by format
const getPatternByFormat = async (req, res) => {
    try {
        const { patternFormat } = req.params
        const patterns = await Pattern.find({ patternFormat })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern with that format not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by age group
const getPatternByAgeGroup = async (req, res) => {
    try {
        const { ageGroup } = req.params
        const patterns = await Pattern.find({ ageGroup })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern for that age group not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by body type
const getPatternByBodyType = async (req, res) => {
    try {
        const { bodyType } = req.params
        const patterns = await Pattern.find({ bodyType })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern for that body type not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by skill level
const getPatternBySkillLevel = async (req, res) => {
    try {
        const { skillLevel } = req.params
        const patterns = await Pattern.find({ skillLevel })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern for that skill level not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Get a pattern by fabric type
const getPatternByFabricType = async (req, res) => {
    try {
        const { fabricTypes } = req.params
        const patterns = await Pattern.find({ fabricTypes })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('Pattern with that fabric type not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Create a new pattern
const createPattern = async (req, res) => {
    try {
        const pattern = await new Pattern(req.body)
        await pattern.save()
        return res.status(201).json(pattern)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

// Search patterns by hashtag
const searchPatternsByHashtag = async (req, res) => {
    try {
        const { hashtag } = req.params
        const patterns = await Pattern.find({ hashtags: new RegExp(hashtag, 'i') })
        if (patterns.length > 0) {
            return res.json(patterns)
        }
        return res.status(404).send('No patterns found with that hashtag.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Update a pattern
const updatePattern = async (req, res) => {
    try {
        const { id } = req.params
        const pattern = await Pattern.findByIdAndUpdate(id, req.body, { new: true })
        if (pattern) {
            return res.status(200).json(pattern)
        }
        throw new Error('Pattern not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// Delete a pattern
const deletePattern = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Pattern.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Pattern deleted.')
        }
        throw new Error('Pattern not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllPatterns,
    getPatternById,
    getPatternByName,
    getPatternByBrand,
    getPatternByType,
    getPatternByFormat,
    getPatternByAgeGroup,
    getPatternByBodyType,
    getPatternBySkillLevel,
    getPatternByFabricType,
    searchPatternsByHashtag,
    createPattern,
    updatePattern,
    deletePattern,
}
