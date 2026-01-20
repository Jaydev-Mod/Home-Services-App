const router = require("express").Router();
const ctrl = require("../controllers/admin.controller");

router.post("/bookings/:id/override", ctrl.overrideStatus);

module.exports = router;
