const router  = require('express').Router();

router.get('/',(req, res) => {
    res.send("Hey users")
})

module.exports = router