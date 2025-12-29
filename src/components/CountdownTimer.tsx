import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let targetDate = new Date(currentYear, 0, 4, 0, 0, 0);

      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 0, 4, 0, 0, 0);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item, index) => (
        <div
          key={item.label}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">
            {item.value.toString().padStart(2, '0')}
          </div>
          <div className="text-gray-600 text-sm uppercase tracking-wider">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
