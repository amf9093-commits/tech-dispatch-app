import Navbar from '../../components/Navbar';
import { Navigation, Map as MapIcon, Route, CheckCircle } from 'lucide-react';

export default function MapPage() {
  return (
    <div className="app-container">
      <Navbar role="tech" />
      <div className="main-content animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h1 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Route color="var(--primary-color)" /> AI 最佳化路徑導航
        </h1>
        
        <div className="card" style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ color: 'var(--success-color)' }}>系統已為您規劃最佳接單路線（節省 2.5 公里）</h4>
            <span className="badge badge-primary">AI 啟動中</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--primary-color)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--primary-color)' }}></div>
              <strong>目前位置</strong>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>雲林科技大學</p>
            </div>
            
            <div style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--primary-color)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--warning-color)' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>站點 1：加壓馬達故障無水</strong>
                <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>12 分鐘</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>斗六市大學路三段123號</p>
            </div>

            <div style={{ paddingLeft: '1rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--border-color)' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ color: 'var(--text-muted)' }}>站點 2：室內老舊電線重拉</strong>
                <span style={{ color: 'var(--text-muted)' }}>後續行程</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>西螺鎮延平路</p>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minHeight: '350px', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--primary-color)' }}>
          <iframe 
            src="https://maps.google.com/maps?q=雲林縣斗六市大學路三段123號&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }} 
            allowFullScreen
          ></iframe>
        </div>

        <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
          <Navigation size={20} /> 開始導航至站點 1
        </button>
      </div>
    </div>
  );
}
