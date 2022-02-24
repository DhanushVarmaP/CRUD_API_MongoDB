const express = require('express')
var router = express()
const create = require('../controller/emp')
const bodyparser = require('body-parser');
router.use(bodyparser.json())
router.post('/create',create.create)
module.exports = router