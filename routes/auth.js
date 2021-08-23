const router  = require('express').Router();

router.get('/',(req, res) => {
    res.send("Hey Auth")
})

module.exports = router