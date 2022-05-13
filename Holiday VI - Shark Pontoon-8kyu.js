// Holiday VI - Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let my_time = pontoonDistance / youSpeed;
  let shark_time = dolphin
    ? sharkDistance / (sharkSpeed / 2)
    : sharkDistance / sharkSpeed;

  return shark_time > my_time ? "Alive!" : "Shark Bait!";
}
