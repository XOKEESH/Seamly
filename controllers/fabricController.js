//GET Index
const { Fabric } = require('../models')
const getAllFabrics = async (req,res) => {
    try {
        const fabrics = await Fabric.find()
        res.json(fabrics)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//GET Show
const getFabricsById = async (req,res) => {
    try {
        const { id } = req.params
        const fabric = await Fabric.findById(id)
        if (fabric) {
            return res.json(fabric)
        }
        return res.status(404).send('Fabric with that ID not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//GET By Name
const getFabricsByName = async (req,res) => {
    try {
        const { name } = req.params
        const fabrics = await Fabric.find({ fabricName: new RegExp(name, 'i') })
        if (fabrics.length > 0) {
            return res.json(fabrics)
        }
        return res.status(404).send('Fabric with that name not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET by Type
const getFabricsByType = async (req, res) => {
    try {
        const { type } = req.query // Use query for searching
        if (!type) {
            return res.status(400).send('Type is required')
        }
        const fabrics = await Fabric.find({ type: new RegExp(type, 'i') })
        if (fabrics.length > 0) {
            return res.json(fabrics)
        }
        return res.status(404).send('No fabrics found with that type.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET by Color
const getFabricsByColor = async (req, res) => {
    try {
        const { color } = req.query
        if (!color) {
            return res.status(400).send('Color is required')
        }
        const fabrics = await Fabric.find({ color: new RegExp(color, 'i') })
        if (fabrics.length > 0) {
            return res.json(fabrics)
        }
        return res.status(404).send('No fabrics found with that color.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET by Quantity
const getFabricsByQuantity = async (req, res) => {
    try {
        const { quantity } = req.query
        if (quantity === undefined) {
            return res.status(400).send('Quantity is required')
        }
        const fabrics = await Fabric.find({ quantity: { $gte: Number(quantity) } })
        if (fabrics.length > 0) {
            return res.json(fabrics)
        }
        return res.status(404).send('No fabrics found with that quantity.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

// GET by Print
const getFabricsByPrint = async (req, res) => {
    try {
        const { print } = req.query
        if (!print) {
            return res.status(400).send('Print is required')
        }
        const fabrics = await Fabric.find({ print: new RegExp(print, 'i') })
        if (fabrics.length > 0) {
            return res.json(fabrics)
        }
        return res.status(404).send('No fabrics found with that print.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Create - Post
    const createFabric = async (req, res) => {
        try {
            const fabric = new Fabric(req.body)
            await fabric.save()
            return res.status(201).json({ fabric })
        } catch (e) {
            return res.status(500).json({ error: e.message })
        }
    }
 
//Update - Put
    const updateFabric = async (req, res) => {
        try {
            const { id } = req.params
            const fabric = await Fabric.findByIdAndUpdate(id, req.body, { new: true })
            if (fabric) {
                return res.status(200).json(fabric)
            }
            throw new Error('Fabric not found.')
        } catch (e) {
            return res.status(500).send(e.message)
        }
    }

//Delete - Delete
    const deleteFabric = async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await Fabric.findByIdAndDelete(id)
            if (deleted) {
                return res.status(200).send('Fabric deleted.')
            }
            throw new Error('Fabric not found.')
        } catch (e) {
            return res.status(500).send(e.message)
        }
}

module.exports = {
    getAllFabrics,
    getFabricsById,
    getFabricsByName,
    getFabricsByType,
    getFabricsByColor,
    getFabricsByQuantity,
    getFabricsByPrint,
    createFabric,
    updateFabric,
    deleteFabric,
}