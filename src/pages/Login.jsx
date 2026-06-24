import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User, Smartphone } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('tech');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', role);
    if (role === 'tech') navigate('/tech');
    if (role === 'admin') navigate('/admin');
    if (role === 'customer') navigate('/customer');
  };

  return (
    <div className="app-container flex-center animate-fade-in">
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Shield size={48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
          <h2>登入 TechDispatch</h2>
          <p style={{ color: 'var(--text-muted)' }}>請選擇您的身分並登入</p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <button 
            className={`btn-secondary ${role === 'tech' ? 'btn-primary' : ''}`} 
            style={{ flex: 1, padding: '0.5rem' }}
            onClick={() => setRole('tech')}
          >
            技術員
          </button>
          <button 
            className={`btn-secondary ${role === 'admin' ? 'btn-primary' : ''}`} 
            style={{ flex: 1, padding: '0.5rem' }}
            onClick={() => setRole('admin')}
          >
            管理員
          </button>
          <button 
            className={`btn-secondary ${role === 'customer' ? 'btn-primary' : ''}`} 
            style={{ flex: 1, padding: '0.5rem' }}
            onClick={() => setRole('customer')}
          >
            客戶
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label><Smartphone size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> 手機號碼</label>
            <input type="tel" placeholder="請輸入手機號碼" required defaultValue="0912345678" />
          </div>
          <div className="input-group">
            <label><User size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> 驗證碼</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="text" placeholder="6位數驗證碼" required defaultValue="123456" />
              <button type="button" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>獲取</button>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            登入系統
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <button className="btn-secondary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: '18px' }} />
            使用 Google 登入
          </button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/announcements')} style={{ width: '100%' }}>
            查看平台公告 (免登入)
          </button>
        </div>
      </div>
    </div>
  );
}
