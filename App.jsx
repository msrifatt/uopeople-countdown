import React, { useEffect, useState } from 'react';

function App() {
  const startDate = new Date('2025-09-04T11:05:00+06:00'); // Bangladesh Time
  const endDate = new Date('2025-09-11T10:55:00+06:00');

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = startDate - now;
      if (diff > 0) {
        setTimeLeft({
          title: 'ক্লাস শুরুর কাউন্টডাউন',
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        const diffEnd = endDate - now;
        if (diffEnd > 0) {
          setTimeLeft({
            title: 'চলমান সপ্তাহ শেষ হতে বাকি',
            days: Math.floor(diffEnd / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diffEnd / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diffEnd / 1000 / 60) % 60),
            seconds: Math.floor((diffEnd / 1000) % 60),
          });
        } else {
          setTimeLeft({
            title: 'এই সপ্তাহ শেষ হয়েছে 🎉',
            days: 0, hours: 0, minutes: 0, seconds: 0
          });
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #8ec5fc 100%)',
      color: 'white',
      fontFamily: 'sans-serif',
      flexDirection: 'column',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>{timeLeft.title}</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gap: '15px',
      }}>
        <div style={boxStyle}><span>{timeLeft.days}</span><small>দিন</small></div>
        <div style={boxStyle}><span>{timeLeft.hours}</span><small>ঘন্টা</small></div>
        <div style={boxStyle}><span>{timeLeft.minutes}</span><small>মিনিট</small></div>
        <div style={boxStyle}><span>{timeLeft.seconds}</span><small>সেকেন্ড</small></div>
      </div>
    </div>
  );
}

const boxStyle = {
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center',
  fontSize: '1.5rem',
  backdropFilter: 'blur(10px)',
};

export default App;
