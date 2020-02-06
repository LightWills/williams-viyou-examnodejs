const express = require('express');
const router =  express.Router();
const handlersCakes = require('../handlers/CakeHandler');




router.route('/api/cakes')
    .get(handlersCakes.getAllCakes)
    .post(handlersCakes.createCake);

router.route('/api/cakes/:id')
    .get(handlersCakes.getOneCake)
    .put(handlersCakes.putOneCake)
    .delete(handlersCakes.deleteOneCake);
module.exports = router;
