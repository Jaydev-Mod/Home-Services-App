const router = require("express").Router();
const ctrl = require("../controllers/provider.controller");

router.post("/:id/accept", ctrl.acceptBooking);
router.post("/:id/reject", ctrl.rejectBooking);

module.exports = router;
