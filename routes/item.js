const express = require('express')
const router = express.Router()
const itemController = require('../controller/itemController')

function setStatusCode(res, data) {
    if (data.code === 200) {
        res.statusCode = 200
    } else {
        res.statusCode = 404
    }
}

router.get('/v1/getRuleTree', async (req, res, next) => {
    let data = await itemController.getRuleTree()
    setStatusCode(res, data)
    res.json(data)
})

router.get('/v1/getRegionTree', async (req, res, next) => {
    let data = await itemController.getRegionTree()
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/getItems', async (req, res, next) => {
    let data = await itemController.getItems(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/createItems', async (req, res, next) => {
    let data = await itemController.createItems(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/deleteItems', async (req, res, next) => {
    let data = await itemController.deleteItems(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/updateItems', async (req, res, next) => {
    let data = await itemController.updateItems(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/getRules', async (req, res, next) => {
    let data = await itemController.getRules(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/getRulePaths', async (req, res, next) => {
    let data = await itemController.getRulePaths(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/createRules', async (req, res, next) => {
    let data = await itemController.createRules(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/deleteRules', async (req, res, next) => {
    let data = await itemController.deleteRules(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/updateRules', async (req, res, next) => {
    let data = await itemController.updateRules(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/getRegions', async (req, res, next) => {
    let data = await itemController.getRegions(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/createRegions', async (req, res, next) => {
    let data = await itemController.createRegions(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/deleteRegions', async (req, res, next) => {
    let data = await itemController.deleteRegions(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/updateRegions', async (req, res, next) => {
    let data = await itemController.updateRegions(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/getRegionPaths', async (req, res, next) => {
    let data = await itemController.getRegionPaths(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/getChildRegionsByRuleAndRegion', async (req, res, next) => {
    let data = await itemController.getChildRegionsByRuleAndRegion(req.body)
    setStatusCode(res, data)
    res.json(data)
})

router.post('/v1/getItemGuide', async (req, res, next) => {
    let data = await itemController.getItemGuide(req.body)
    setStatusCode(res, data)
    res.json(data)
})

module.exports = router