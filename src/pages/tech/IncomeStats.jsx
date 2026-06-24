import Navbar from '../../components/Navbar';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

export default function IncomeStats() {
  return (
    <div className="app-container">
      <Navbar role="tech" />
      <div className="main-content animate-fade-in">
        <h1 style={{ marginBottom: '1.5rem' }}>收入統計</h1>
        
        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <div className="card" style={{ borderTop: '4px solid var(--success-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'var(--text-muted)' }}>今日收入</p>
              <DollarSign size={20} color="var(--success-color)" />
            </div>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>$3,500</h2>
            <p style={{ color: 'var(--success-color)', fontSize: '0.875rem', marginTop: '0.5rem' }}>↑ 12% 較昨日</p>
          </div>
          
          <div className="card" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'var(--text-muted)' }}>本週累積</p>
              <Calendar size={20} color="var(--primary-color)" />
            </div>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>$18,200</h2>
            <p style={{ color: 'var(--success-color)', fontSize: '0.875rem', marginTop: '0.5rem' }}>↑ 5% 較上週</p>
          </div>

          <div className="card" style={{ borderTop: '4px solid var(--secondary-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'var(--text-muted)' }}>本月預估</p>
              <TrendingUp size={20} color="var(--secondary-color)" />
            </div>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>$65,000</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>達成率 85%</p>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>近期收入明細</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem 0' }}>日期</th>
                <th style={{ padding: '1rem 0' }}>案件名稱</th>
                <th style={{ padding: '1rem 0', textAlign: 'right' }}>金額</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1rem 0' }}>2026-06-04</td>
                <td style={{ padding: '1rem 0' }}>斗六市 - 加壓馬達故障無水</td>
                <td style={{ padding: '1rem 0', textAlign: 'right', color: 'var(--success-color)' }}>+$1,200</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1rem 0' }}>2026-06-03</td>
                <td style={{ padding: '1rem 0' }}>虎尾鎮 - 水管破裂緊急搶修</td>
                <td style={{ padding: '1rem 0', textAlign: 'right', color: 'var(--success-color)' }}>+$1,500</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem 0' }}>2026-06-03</td>
                <td style={{ padding: '1rem 0' }}>西螺鎮 - 室內老舊電線重拉</td>
                <td style={{ padding: '1rem 0', textAlign: 'right', color: 'var(--success-color)' }}>+$800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
