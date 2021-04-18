export default function restaurantHours(time) {
  const timeNumber = parseInt(time);
  if (timeNumber > 1299) {
    const timeArray1 = ((timeNumber - 1200) / 100).toFixed(2).toString().split('.');
    return `${timeArray1[0]}:${timeArray1[1]} PM`;
  } else if (timeNumber <= 1299 && timeNumber >= 1200) {
    const timeArray2 = (timeNumber / 100).toFixed(2).toString().split('.');
    return `${timeArray2[0]}:${timeArray2[1]} PM`;
  } else if (timeNumber === 0) {
    return '12:00 AM';
  } else {
    const timeArray3 = (timeNumber / 100).toFixed(2).toString().split('.');
    return `${timeArray3[0]}:${timeArray3[1]} AM`;
  }
}
