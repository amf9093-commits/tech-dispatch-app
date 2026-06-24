import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench } from 'lucide-react';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const role = localStorage.getItem('role');
      if (isLoggedIn && role) {
        navigate(`/${role}`);
      } else {
        navigate('/login');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-container flex-center" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="animate-fade-in" style={{ textAlign: 'center' }}>
        <Wrench size={64} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>技派通</h1>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--secondary-color)', fontWeight: 400 }}>TechDispatch</h2>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>智慧工程派工與技術媒合平台</p>
      </div>
    </div>
  );
}
