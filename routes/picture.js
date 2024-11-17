const express = require('express');
const router = express.Router();

const upload = require('../config/multer');

const pictureController = require('../controler/pictureController')

router.post('/', upload.single("file"),  pictureController.create)

router.get('/', pictureController.findall)

router.delete('/:id', pictureController.remove)

module.exports = router