import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Activity, Users, AlertTriangle, Map, User } from 'lucide-react';

export default function AdminDashboard() {
  const [techPositions, setTechPositions] = useState([
    { id: 1, name: '王大明', top: 45, left: 30 },
    { id: 2, name: '林小華', top: 55, left: 65 },
    { id: 3, name: '張師傅', top: 35, left: 50 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTechPositions(prev => prev.map(tech => ({
        ...tech,
        top: Math.max(10, Math.min(90, tech.top + (Math.random() - 0.5) * 5)),
        left: Math.max(10, Math.min(90, tech.left + (Math.random() - 0.5) * 5))
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Navbar role="admin" />
      <div className="main-content animate-fade-in">
        <h1 style={{ marginBottom: '1.5rem' }}>即時管理中心</h1>

        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: 'var(--radius-full)' }}>
              <Activity color="var(--secondary-color)" size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)' }}>今日進行中案件</p>
              <h3>42 件</h3>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-full)' }}>
              <Users color="var(--success-color)" size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)' }}>在線技術員</p>
              <h3>128 人</h3>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: 'var(--radius-full)' }}>
              <AlertTriangle color="var(--danger-color)" size={24} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)' }}>緊急未派發</p>
              <h3 style={{ color: 'var(--danger-color)' }}>3 件</h3>
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Map size={20}/> 全區地圖監控</h3>
              <Link to="/admin/dispatch" className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>派工管理</Link>
            </div>
            <div style={{ position: 'relative', flex: 1, minHeight: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <iframe 
                src="https://maps.google.com/maps?q=雲林縣斗六市&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }} 
                allowFullScreen
              ></iframe>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                {techPositions.map(tech => (
                  <div 
                    key={tech.id}
                    style={{
                      position: 'absolute',
                      top: `${tech.top}%`,
                      left: `${tech.left}%`,
                      transition: 'all 2s linear',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div style={{ 
                      background: 'var(--success-color)', 
                      color: 'var(--bg-color)', 
                      padding: '6px', 
                      borderRadius: '50%', 
                      boxShadow: '0 0 15px var(--success-color)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <User size={16} />
                    </div>
                    <span style={{ 
                      background: 'rgba(0,0,0,0.8)', 
                      color: 'white', 
                      fontSize: '0.75rem', 
                      padding: '2px 8px', 
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap'
                    }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>緊急案件列表</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'var(--surface-color-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--danger-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>虎尾鎮 - 配電盤總開關燒毀</strong>
                  <span className="badge badge-danger">緊急</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>報修時間: 10 分鐘前</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-primary" style={{ flex: 1, padding: '0.5rem' }}>AI 自動派工</button>
                  <button className="btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>手動指派</button>
                </div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--surface-color-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--warning-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>斗南鎮 - 辦公室水管破裂</strong>
                  <span className="badge badge-warning">高優先</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>報修時間: 25 分鐘前</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-primary" style={{ flex: 1, padding: '0.5rem' }}>AI 自動派工</button>
                  <button className="btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>手動指派</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
