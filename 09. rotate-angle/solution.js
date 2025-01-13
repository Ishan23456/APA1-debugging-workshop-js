function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = (initialAngle + rotation) % 360;
  console.log(newAngle)
  if (newAngle < 0) {
    return newAngle + 360;
  }
  return newAngle;
}

module.exports = { rotateAngleByDegrees };
