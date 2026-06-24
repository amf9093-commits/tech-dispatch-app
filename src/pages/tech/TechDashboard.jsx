import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { MapPin, Briefcase, FileText, DollarSign, Award } from 'lucide-react';

export default function TechDashboard() {
  return (
    <div className="app-container">
      <Navbar role="tech" />
      <div className="main-content animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1>早安，王技師</h1>
            <p style={{ color: 'var(--text-muted)' }}>今日狀態：<span className="badge badge-success">可接單</span></p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h3 style={{ color: 'var(--success-color)' }}>$3,500</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>今日預估收入</p>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          <Link to="/tech/matching" className="card" style={{ display: 'block' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: 'var(--radius-full)' }}>
                <Briefcase color="var(--primary-color)" size={24} />
              </div>
              <div>
                <h3>智慧搶單中心</h3>
                <p style={{ color: 'var(--text-muted)' }}>尋找附近可接案件</p>
              </div>
            </div>
          </Link>

          <Link to="/tech/map" className="card" style={{ display: 'block' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: 'var(--radius-full)' }}>
                <MapPin color="var(--secondary-color)" size={24} />
              </div>
              <div>
                <h3>GPS 導航與地圖</h3>
                <p style={{ color: 'var(--text-muted)' }}>查看路線與預估時間</p>
              </div>
            </div>
          </Link>
          
          <Link to="/tech/report" className="card" style={{ display: 'block' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-full)' }}>
                <FileText color="var(--success-color)" size={24} />
              </div>
              <div>
                <h3>工作回報</h3>
                <p style={{ color: 'var(--text-muted)' }}>上傳照片與客戶簽名</p>
              </div>
            </div>
          </Link>

          <Link to="/tech/income" className="card" style={{ display: 'block' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: 'var(--radius-full)' }}>
                <DollarSign color="var(--warning-color)" size={24} />
              </div>
              <div>
                <h3>收入中心</h3>
                <p style={{ color: 'var(--text-muted)' }}>查看收入與統計</p>
              </div>
            </div>
          </Link>

          <Link to="/tech/profile" className="card" style={{ display: 'block' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: 'var(--radius-full)' }}>
                <Award color="var(--danger-color)" size={24} />
              </div>
              <div>
                <h3>證照與技能管理</h3>
                <p style={{ color: 'var(--text-muted)' }}>管理等級與有效期限</p>
              </div>
            </div>
          </Link>
        </div>

        <h2 style={{ marginBottom: '1rem' }}>今日進行中案件 (1)</h2>
        <div className="card" style={{ borderLeft: '4px solid var(--warning-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h4>斗六市 - 加壓馬達故障無水</h4>
            <span className="badge badge-warning">進行中</span>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>雲林縣斗六市大學路三段123號</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/tech/map" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>導航</Link>
            <Link to="/tech/report" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>填寫回報</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
