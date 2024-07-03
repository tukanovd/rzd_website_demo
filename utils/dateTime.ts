export const parseTimeFromDateTime = (dateTimeString: string) => {
  if(!dateTimeString) return ""
  const dateTime = new Date(dateTimeString);

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  const timeString = `${formattedHours}:${formattedMinutes}`;

  return timeString;
};
