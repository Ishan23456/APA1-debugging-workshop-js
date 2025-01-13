function convertTo12HourClock(time) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(-2);
  if (hours > 12) {
    return `${((hours[0] == 0) ? hours.slice(1): hours) - 12}:${minutes} PM`;
  } 
  else if (hours == 0 || hours == 12) {
    return `12:${minutes} ${(hours == 0) ? "AM" : "PM"}`
  }
  else {
    console.log(hours[0])
    return `${(hours[0] == 0) ? hours.slice(1): hours}:${minutes} AM`;
  }
}

module.exports = { convertTo12HourClock };
