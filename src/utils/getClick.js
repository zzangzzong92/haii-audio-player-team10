const getClock = () => {
  const date = new Date();

  const year = String(date.getFullYear()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const clock = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;

  return clock;
};

export default getClock;
