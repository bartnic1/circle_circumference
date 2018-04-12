module.exports = {
  circle_area, circle_circumference
}

function circle_area(radius){
  return Math.PI*radius**2;
}

function circle_circumference(radius){
  return 2*Math.PI*radius;
}