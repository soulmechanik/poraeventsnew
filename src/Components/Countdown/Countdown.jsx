import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [months, setMonths] = useState(7);
  const [weeks, setWeeks] = useState(3);
  const [days, setDays] = useState(4);
  const [hours, setHours] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const launchDate = new Date(now.getTime() + (months * 30 * 24 * 60 * 60 * 1000) + (weeks * 7 * 24 * 60 * 60 * 1000) + (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));

      const distance = launchDate - now;
      const monthsLeft = Math.floor(distance / (30 * 24 * 60 * 60 * 1000));
      const weeksLeft = Math.floor((distance % (30 * 24 * 60 * 60 * 1000)) / (7 * 24 * 60 * 60 * 1000));
      const daysLeft = Math.floor((distance % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
      const hoursLeft = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutesLeft = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      const secondsLeft = Math.floor((distance % (60 * 1000)) / 1000);

      setMonths(monthsLeft);
      setWeeks(weeksLeft);
      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Countdown to Launch:</h2>
      <ul>
        <li>Months: {months}</li>
        <li>Weeks: {weeks}</li>
        <li>Days: {days}</li>
        <li>Hours: {hours}</li>
        <li>Minutes: {minutes}</li>
        <li>Seconds: {seconds}</li>
      </ul>
    </div>
  );
}

export default CountdownTimer;