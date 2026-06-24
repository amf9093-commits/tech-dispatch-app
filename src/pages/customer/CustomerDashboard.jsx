import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { PlusCircle, Clock, CheckCircle } from 'lucide-react';

export default function CustomerDashboard() {
  return (
    <div className="app-container">
      <Navbar role="customer" />
      <div className="main-content animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1>您好，陳先生</h1>
            <p style={{ color: 'var(--text-muted)' }}>歡迎使用技派通線上報修系統</p>
          </div>
          <Link to="/customer/request" className="btn-primary" style={{ padding: '1rem' }}>
            <PlusCircle size={20} />
            我要報修
          </Link>
        </div>

        <h2 style={{ marginBottom: '1rem' }}>案件追蹤</h2>
        
        <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--warning-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={20} color="var(--warning-color)"/> 加壓馬達故障無水</h3>
            <span className="badge badge-warning">技術員前往中</span>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>報修單號：#REQ-20260604-01</p>
          
          <div style={{ background: 'var(--surface-color-light)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>負責技師</p>
              <strong>王大明 (水電專家)</strong>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>預估抵達時間</p>
              <strong style={{ color: 'var(--secondary-color)' }}>12 分鐘</strong>
            </div>
          </div>
        </div>

        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>歷史紀錄</h2>
        <div className="card" style={{ opacity: 0.8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="var(--success-color)"/> 辦公室室內老舊電線重拉</h4>
            <span className="badge badge-success">已結案</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>完工日期：2026-05-20 | 技師：林小華</p>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: '0.875rem' }}>您的評價：<span style={{ color: 'var(--warning-color)' }}>★★★★★</span> 服務態度很好，速度快！</p>
          </div>
        </div>
      </div>
    </div>
  );
}
