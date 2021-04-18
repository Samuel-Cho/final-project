export default function RestaurantHours(time) {
  const timeNumber = parseInt(time);
  if (timeNumber > 1299) {
    return `${(timeNumber - 1200) / 100} PM`;
  } else if (timeNumber <= 1299 && timeNumber >= 1200) {
    return `${timeNumber / 100} PM`;
  } else if (timeNumber === 0) {
    return '12:00 AM';
  } else {
    return `${timeNumber / 100} AM`;
  }
}
