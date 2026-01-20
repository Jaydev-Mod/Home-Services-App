const updateStatus = (booking, newStatus, note) => {
  if (booking.status !== newStatus) {
    booking.status = newStatus;
    booking.history.push({
      status: newStatus,
      note,
      timestamp: new Date()
    });
  }
};

module.exports = updateStatus;
