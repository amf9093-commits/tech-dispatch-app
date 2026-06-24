import Navbar from '../../components/Navbar';
import { Award, Shield, FileCheck } from 'lucide-react';

export default function TechProfile() {
  return (
    <div className="app-container">
      <Navbar role="tech" />
      <div className="main-content animate-fade-in">
        <h1 style={{ marginBottom: '1.5rem' }}>個人與證照管理</h1>
        
        <div className="card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-full)', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            王
          </div>
          <div>
            <h2 style={{ marginBottom: '0.5rem' }}>王大明</h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-primary">水電專家</span>
              <span className="badge badge-primary">甲級電匠</span>
            </div>
            <p style={{ color: 'var(--text-muted)' }}>綜合評價：<span style={{ color: 'var(--warning-color)' }}>★ 4.9</span> (120次服務)</p>
          </div>
        </div>

        <h3 style={{ marginBottom: '1rem' }}>我的證照</h3>
        <div className="grid-2">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Award color="var(--primary-color)" size={32} />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>室內配線乙級技術士</h4>
                <span className="badge badge-success">有效</span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>證書編號：007-123456</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>有效期限：2030-12-31</p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Shield color="var(--warning-color)" size={32} />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>自來水管承裝技工</h4>
                <span className="badge badge-warning">即將到期</span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>證書編號：001-654321</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--danger-color)' }}>有效期限：2026-08-31</p>
          </div>
          
          <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '140px', borderStyle: 'dashed', cursor: 'pointer' }}>
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <FileCheck size={32} style={{ margin: '0 auto 0.5rem' }} />
              <p>新增證照</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
