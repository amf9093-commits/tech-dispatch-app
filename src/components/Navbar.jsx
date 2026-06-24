import { Link, useNavigate } from 'react-router-dom';
import { Wrench, Menu, Bell, User, FileText, LogOut } from 'lucide-react';

export default function Navbar({ role }) {
  const navigate = useNavigate();
  let title = "TechDispatch";
  if (role === 'tech') title = "技派通 - 技術員端";
  if (role === 'admin') title = "技派通 - 即時管理中心";
  if (role === 'customer') title = "技派通 - 客戶服務";

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to={`/${role}`} className="navbar-brand">
        <Wrench size={24} color="var(--primary-color)" />
        <span>{title}</span>
      </Link>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/announcements" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center' }} title="平台公告"><FileText size={20} /></Link>
        <button style={{ background: 'transparent', color: 'var(--text-primary)' }}><Bell size={20} /></button>
        <Link to={`/${role}/profile`} style={{ color: 'var(--text-primary)' }}><User size={20} /></Link>
        <button onClick={handleLogout} style={{ background: 'transparent', color: 'var(--danger-color)', display: 'flex', alignItems: 'center', cursor: 'pointer' }} title="登出"><LogOut size={20} /></button>
      </div>
    </nav>
  );
}
