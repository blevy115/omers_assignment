// Methods used in Application to convert Date to correct format

const convertDate = (date) => {
  let monthIndex = 1;
  let dayIndex = 2;
  let yearIndex = 3;

  const convertedDateArray =  new Date(date).toDateString().split(' ');

  return `${convertedDateArray[monthIndex]} ${convertedDateArray[dayIndex]}, ${convertedDateArray[yearIndex]}`;
}

const convertDateWithTime = (date) => {
  let monthIndex = 2;
  let dayIndex = 1;
  let yearIndex = 3;

  const convertedDate =  new Date(date);
  const time = convertedDate.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
  
  const convertedDateArray = convertedDate.toUTCString().split(' ');

  return `${convertedDateArray[monthIndex]} ${convertedDateArray[dayIndex]}, ${convertedDateArray[yearIndex]} ${time}`;
}

const methods = {
  convertDate,
  convertDateWithTime
}

export default methods;
