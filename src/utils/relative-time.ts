function calculateRelativeTime(prevTime: Date): string {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const difference = new Date().getTime() - prevTime.getTime();

  let relativeTime;
  if (difference < msPerMinute) {
    relativeTime = `${Math.round(difference / 1000)} seconds ago`;
  } else if (difference < msPerHour) {
    relativeTime = `${Math.round(difference / msPerMinute)} minutes ago`;
  } else if (difference < msPerDay) {
    relativeTime = `${Math.round(difference / msPerHour)} hours ago`;
  } else if (difference < msPerMonth) {
    relativeTime = `${Math.round(difference / msPerDay)} days ago`;
  } else if (difference < msPerYear) {
    relativeTime = `${Math.round(difference / msPerMonth)} months ago`;
  } else {
    relativeTime = `${Math.round(difference / msPerYear)} years ago`;
  }

  // using slicing to remove the plural if the number is 1
  if (relativeTime.charAt(0) === '1' && relativeTime.charAt(1) === ' ') {
    relativeTime = relativeTime.slice(0, relativeTime.length - 5)
     + relativeTime.slice(-4, relativeTime.length);
  }

  return relativeTime;
}

export default calculateRelativeTime;
