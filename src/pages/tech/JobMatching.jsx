import Navbar from '../../components/Navbar';
import { MapPin, Clock, DollarSign, Zap } from 'lucide-react';

export default function JobMatching() {
  const jobs = [
    { id: 1, title: '虎尾鎮 - 水管破裂緊急搶修', distance: '1.2 km', time: '15 min', income: '1500', hours: '1.5', urgent: true },
    { id: 2, title: '西螺鎮 - 室內老舊電線重拉', distance: '3.5 km', time: '25 min', income: '800', hours: '1.0', urgent: false },
    { id: 3, title: '斗六市 - 電箱開關跳電', distance: '4.1 km', time: '30 min', income: '1200', hours: '2.0', urgent: true },
  ];

  return (
    <div className="app-container">
      <Navbar role="tech" />
      <div className="main-content animate-fade-in">
        <h1 style={{ marginBottom: '0.5rem' }}>智慧搶單中心</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>AI 系統已為您媒合以下最佳案件</p>

        <div className="grid-3">
          {jobs.map(job => (
            <div key={job.id} className="card" style={{ position: 'relative' }}>
              {job.urgent && (
                <div style={{ position: 'absolute', top: '-10px', right: '-10px' }}>
                  <span className="badge badge-danger" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Zap size={12} /> 緊急
                  </span>
                </div>
              )}
              <h3 style={{ marginBottom: '1rem', paddingRight: job.urgent ? '3rem' : '0' }}>{job.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={16} /> 距離: {job.distance} ({job.time} 車程)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                  <Clock size={16} /> 預估工時: {job.hours} 小時
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success-color)', fontWeight: 'bold' }}>
                  <DollarSign size={16} /> 預估收入: NT$ {job.income}
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%' }}>一鍵接單</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
