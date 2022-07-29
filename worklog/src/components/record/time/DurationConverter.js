//Milisecond cinsinden verilen değeri humanize eder.
//=> 3126546451 > 11:24:50 şeklinde çevirir.
export function getHumanReadableClock(ms) {
  var seconds = Math.floor((ms / 1000) % 60);
  var minutes = Math.floor((ms / (1000 * 60)) % 60);
  var hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  if (hours < 0) {hours = hours + 24;}
  if (minutes < 0) {minutes = minutes + 60;}
  if (seconds < 0) {seconds = seconds + 60;}
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}


// 11:24:50 > 3126546451 şeklinde çevirir.
export function getMilisecondClock(humanReadableClock) {
  const clockParts = humanReadableClock.split(":");

  let hours = clockParts[0];
  let minutes = clockParts[1];
  let seconds = clockParts[2];

  return hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
}
