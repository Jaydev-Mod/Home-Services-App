const router = require("express").Router();
const ctrl = require("../controllers/booking.controller");

router.post("/", ctrl.createBooking);
router.get("/", ctrl.getBookings);
router.post("/:id/cancel", ctrl.cancelBooking);
router.post("/:id/complete", ctrl.completeBooking);


module.exports = router;
