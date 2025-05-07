import React, { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const [eventName, setEventName] = useState('');
  const [evnntDate, setEventDate] = useState('');
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && evnntDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventTime).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert('Countdown completed!!');
        }
        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate, timeRemaining]);
s
  return <div className='countdown-timer-container'></div>;
};

export default CountDownTimer;

// https://www.freecodecamp.org/news/build-a-countdown-timer-with-react-step-by-step/
