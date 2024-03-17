export const formatMessageTime = (timestamp: string): string => {
  const messageDate = new Date(timestamp);

  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
};
