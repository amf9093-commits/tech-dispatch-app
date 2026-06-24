import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, LogIn, LogOut, Home } from 'lucide-react';

export default function Announcements() {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState({ id: null, title: '', content: '' });

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    const savedAnnouncements = JSON.parse(localStorage.getItem('announcements') || '[]');
    if (savedAnnouncements.length === 0) {
      const defaultAnnouncements = [
        { id: 1, title: '系統更新通知', content: '我們將於本週五凌晨進行系統維護，屆時將暫停服務 2 小時。', date: '2026-06-04' },
        { id: 2, title: '新功能上線', content: '新增了公告管理功能，歡迎大家使用！', date: '2026-06-03' }
      ];
      setAnnouncements(defaultAnnouncements);
      localStorage.setItem('announcements', JSON.stringify(defaultAnnouncements));
    } else {
      setAnnouncements(savedAnnouncements);
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    let updatedAnnouncements;
    if (currentAnnouncement.id) {
      updatedAnnouncements = announcements.map(a => a.id === currentAnnouncement.id ? { ...currentAnnouncement, date: new Date().toISOString().split('T')[0] } : a);
    } else {
      updatedAnnouncements = [{ ...currentAnnouncement, id: Date.now(), date: new Date().toISOString().split('T')[0] }, ...announcements];
    }
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem('announcements', JSON.stringify(updatedAnnouncements));
    setIsEditing(false);
    setCurrentAnnouncement({ id: null, title: '', content: '' });
  };

  const handleEdit = (announcement) => {
    setCurrentAnnouncement(announcement);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if(window.confirm('確定要刪除這則公告嗎？')) {
      const updatedAnnouncements = announcements.filter(a => a.id !== id);
      setAnnouncements(updatedAnnouncements);
      localStorage.setItem('announcements', JSON.stringify(updatedAnnouncements));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const goToDashboard = () => {
    const role = localStorage.getItem('role');
    if (role) {
      navigate(`/${role}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <div className="navbar-brand">
          <Home size={24} color="var(--primary-color)" />
          <span onClick={goToDashboard} style={{ cursor: 'pointer' }}>平台公告</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {isLoggedIn ? (
            <>
              <button className="btn-secondary" onClick={goToDashboard} style={{ padding: '0.5rem 1rem' }}>返回控制台</button>
              <button className="btn-danger" onClick={handleLogout} style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LogOut size={16} /> 登出
              </button>
            </>
          ) : (
            <button className="btn-primary" onClick={handleLogin} style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LogIn size={16} /> 登入
            </button>
          )}
        </div>
      </div>

      <div className="main-content animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>最新公告</h2>
          {isLoggedIn && !isEditing && (
            <button className="btn-primary" onClick={() => setIsEditing(true)}>
              <Plus size={16} /> 新增公告
            </button>
          )}
        </div>

        {isEditing && isLoggedIn ? (
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3>{currentAnnouncement.id ? '編輯公告' : '新增公告'}</h3>
            <form onSubmit={handleSave} style={{ marginTop: '1rem' }}>
              <div className="input-group">
                <label>標題</label>
                <input 
                  type="text" 
                  value={currentAnnouncement.title} 
                  onChange={(e) => setCurrentAnnouncement({...currentAnnouncement, title: e.target.value})} 
                  required 
                />
              </div>
              <div className="input-group">
                <label>內容</label>
                <textarea 
                  value={currentAnnouncement.content} 
                  onChange={(e) => setCurrentAnnouncement({...currentAnnouncement, content: e.target.value})} 
                  rows="5" 
                  required 
                ></textarea>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="btn-primary">儲存</button>
                <button type="button" className="btn-secondary" onClick={() => {
                  setIsEditing(false);
                  setCurrentAnnouncement({ id: null, title: '', content: '' });
                }}>取消</button>
              </div>
            </form>
          </div>
        ) : null}

        <div className="grid-2">
          {announcements.map(announcement => (
            <div key={announcement.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{announcement.title}</h3>
                {isLoggedIn && (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-secondary" style={{ padding: '0.25rem 0.5rem' }} onClick={() => handleEdit(announcement)}>
                      <Edit2 size={14} />
                    </button>
                    <button className="btn-danger" style={{ padding: '0.25rem 0.5rem' }} onClick={() => handleDelete(announcement.id)}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>發布日期：{announcement.date}</p>
              <p style={{ color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>{announcement.content}</p>
            </div>
          ))}
          {announcements.length === 0 && (
            <p style={{ color: 'var(--text-muted)' }}>目前沒有任何公告。</p>
          )}
        </div>
      </div>
    </div>
  );
}
